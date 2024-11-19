param(
    [Parameter(Mandatory=$true)]
    [string]$wslUserName,

    [Parameter(Mandatory=$true)]
    [string]$winUserName,

    [Parameter(Mandatory=$false)]
    [string]$wslJavaPath = "/usr/lib/jvm/java-11-openjdk-amd64/bin/",

    [Parameter(Mandatory=$false)]
    [string]$wslOpenApiGeneratorPath = "/home/$wslUserName/projects/_GH/_java/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar",

    [Parameter(Mandatory=$false)]
    [string]$ConfigPath = "C:/Projects/Iside/fe-client/openapi-generator-tsfetch.config.yaml",

    [Parameter(Mandatory=$false)]
    [string]$feClientPath = "\\wsl.localhost\Ubuntu\home\$wslUserName\projects\food\iside\ac-open-food-facts-clients\clients\ts",
    #[string]$feClientPath = "/home/$wslUserName/projects/food/Italy.Iside/ac-open-food-facts-clients/clients/ts/",

    [Parameter(Mandatory=$false)]
    [string]$LogName = "gen-log.txt"
)

# Funzione per incrementare la versione
function IncrementVersion($version) {
    $parts = $version -split '\.'
    $parts[1]=([int]$parts[1])+1
    return $parts -join '.'
}

# Cerca tutti i file con il nome specificato nella cartella e nelle sottocartelle
Get-ChildItem $ConfigPath | ForEach-Object {
    # Leggi il contenuto del file
    $content = Get-Content $_.FullName -Raw

    $versionPattern = "npmVersion: '(\d+\.\d+\.\d+)'"

    # Cerca la corrispondenza nel contenuto
    if ($content -match $versionPattern) {
        $currentVersion = $matches[1]  # Usa $matches[1] per ottenere il gruppo catturato
        $newVersion = IncrementVersion $currentVersion

        # Sostituisci la riga con la nuova versione
        $newContent = $content -replace $versionPattern, "npmVersion: '$newVersion'"

        # Scrivi il contenuto modificato nel file
        Set-Content $_.FullName -Value $newContent

        Write-Host "Aggiornato il file $($_.FullName) da versione $currentVersion a $newVersion"
    } else {
        Write-Warning "Impossibile trovare la versione nel file: $($_.FullName)"
    }
}

$JAVA_HOME = "export JAVA_HOME=`"$wslJavaPath`""

$commonWls = @"
export PATH="/home/$wslUserName/.nvm/versions/node/v20.17.0/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/$wslUserName/anaconda3/bin:/home/$wslUserName/anaconda3/condabin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/$wslUserName/anaconda3/bin:/home/$wslUserName/anaconda3/condabin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/PowerShell/7:/mnt/c/Program Files/Microsoft SDKs/Azure/CLI2/wbin:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0:/mnt/c/WINDOWS/System32/OpenSSH:/mnt/c/Program Files/dotnet:/mnt/c/Program Files/TortoiseSVN/bin:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Program Files/Cloudflare/Cloudflare WARP:/mnt/c/Users/$winUserName/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/$winUserName/.dotnet/tools:/mnt/c/Users/$winUserName/AppData/Local/Programs/Fiddler:/mnt/c/Users/$winUserName/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/SVN/_app/Flutter/flutter/bin:/mnt/c/Users/$winUserName/.dotnet/tools:/snap/bin:$wslJavaPath" && echo $PATH | tr ':' '\n' && sync && $JAVA_HOME && java -version
"@

# Converti i percorsi Windows in percorsi WSL
$wslConfigPath = wsl wslpath -u "$ConfigPath"
$wslLogPath = wsl wslpath -u "$feClientPath/$LogName"


# Costruisci il comando da eseguire in WSL
$wslCommand = @"
$commonWls && $wslJavaPath/java -jar $wslOpenApiGeneratorPath generate --config $wslConfigPath > $wslLogPath
"@

Write-Warning "Cancellazione dir src precedente"
Remove-Item  "$feClientPath/api-client-ts-fetch/src"  -Recurse -Force -ErrorAction SilentlyContinue
Set-Location $feClientPath

# Esegui il comando in WSL
Write-Warning "Esecuzione del comando in WSL:"
Write-Host $wslCommand
Write-Host ""

wsl bash -c "$wslCommand"

# Verifica se il comando è stato eseguito con successo
if ($LASTEXITCODE -eq 0) {
    Write-Host "Il comando è stato eseguito con successo in WSL."
} else {
    Write-Error "Si è verificato un errore durante l'esecuzione del comando in WSL."
}

###########################################################################################
Write-Warning "aggiorno git"

#git checkout api-client-ts-fetch/src/models/ProductExtendedOwnerFields.ts api-client-ts-fetch/src/models/ProductExtendedOwnerFieldsAdditionalProperties.ts
#git checkout api-client-ts-fetch/src/models/ProductBase.ts api-client-ts-fetch/src/models/ProductOwnerFields.ts
git status
git add .

###########################################################################################
Write-Warning "creo il pacchetto"

Set-Location "$feClientPath/api-client-ts-fetch"

if (!(Test-Path ./node_modules)) {
    Write-Host "La cartella 'node_modules' non esiste. Eseguo install ed update"

    # Esegue i comandi (sostituisci con i tuoi comandi specifici)
    npm install
    pnpm update 
} else {
    Write-Host "pnpm già inizializzato."
}

$wslIsidePath = "//wsl.localhost/Ubuntu/home/$wslUserName/projects/iside/"

pnpm pack --pack-destination $wslIsidePath

###########################################################################################
Write-Warning "copio il file più recente nelle varie directory"

# Definisci il pattern del percorso
$pattern = "$wslIsidePath/iside-open-food-facts-api-client-tsfetch-*"

# Ottieni tutti i file che corrispondono al pattern, ordinati per data di modifica (LastWriteTime) in ordine decrescente
$latestFiles = Get-ChildItem $pattern | Sort-Object LastWriteTime -Descending
$packageFileName = ""
# Se ci sono file trovati, prendi il primo (quello più recente)
if ($latestFiles) {
    $latestFilePath = $latestFiles[0].FullName
    $packageFileName = $latestFiles[0].Name
    Write-Host "Il percorso più recente è: $latestFilePath"
} else {
    Write-Host "Nessun file trovato corrispondente al pattern."
    exit 1
}

$isidePath = "C:/Projects/Iside/"

Set-Location "$wslIsidePath/ac-food-pwa"

Get-ChildItem "../iside-open-food-facts-api-client-tsfetch-*" | Sort-Object LastWriteTime -Descending | Select-Object -Skip 3 | Remove-Item -Force
Get-ChildItem "$isidePath/iside-open-food-facts-api-client-tsfetch-*" | Sort-Object LastWriteTime -Descending | Select-Object -Skip 3 | Remove-Item -Force

Copy-Item "../$packageFileName"  $isidePath

###########################################################################################
Write-Warning "Installazione nella pwa"


# Nome del pacchetto da verificare
$packageName = "@iside/open-food-facts-api-client-tsfetch"

# Comando per verificare l'esistenza del pacchetto
$wslCommand = @"
$commonWls && pnpm list $packageName --depth=0
"@ 

# Esegui il comando e salva l'output
$checkCommand = wsl -u $wslUserName --cd "/home/$wslUserName/projects/iside/ac-food-pwa" bash -x -c "$wslCommand"

# Verifica se il pacchetto è presente nell'output
if ($checkCommand -match $packageName) {
    Write-Host "Il pacchetto '$packageName' è presente. Procedo con la rimozione."
    # Costruisci il comando da eseguire in WSL
    $wslCommand = @"
$commonWls && pnpm remove $packageName && pnpm add $packageName@file:../$packageFileName
"@ 
} else {
    # Costruisci il comando da eseguire in WSL
    $wslCommand = @"
$commonWls && pnpm add $packageName@file:../$packageFileName
"@ 
    Write-Host "Il pacchetto '$packageName' non è presente."
}
Write-Host "Esecuzione del comando in WSL:"
Write-Host $wslCommand
wsl  -u $wslUserName --cd "/home/$wslUserName/projects/iside/ac-food-pwa" bash -x -c "$wslCommand"

# Verifica se il comando è stato eseguito con successo
if ($LASTEXITCODE -eq 0) {
    Write-Host "Il comando è stato eseguito con successo in WSL."
} else {
    Write-Error "Si è verificato un errore durante l'esecuzione del comando in WSL."
}

Set-Location $feClientPath