#!/bin/bash

# Parametri di default
WSL_JAVA_PATH="/usr/lib/jvm/java-11-openjdk-amd64/bin/"

PRJS_PATH=$(realpath ~/projects)

WSL_OPENAPI_GENERATOR_PATH="$PRJS_PATH/_GH/_java/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar"

FOOD_PATH=$PRJS_PATH/food
CLIENT_PRJ_PATH="$FOOD_PATH/Italy.Iside/packages/ac-open-food-facts-clients"
CONFIG_PATH="$CLIENT_PRJ_PATH/openapi-generator-tsfetch.config.yaml"
FE_CLIENT_PATH="$CLIENT_PRJ_PATH/clients/ts-fetch"
LOG_NAME="gen-log.txt"

# Function to increment the version
function increment_version() {
    local IFS=.
    local -a parts=($1)
    ((parts[1]++))
    echo "${parts[*]}"
}

# Update the version in the configuration file
function update_version() {
    local file=$1
    if [ ! -f "$file" ]; then
      echo "File not found!"
      exit 1
    fi

    local content=$(cat "$file")
    local version_pattern="npmVersion: ['\"]([0-9]+\.[0-9]+\.[0-9]+)['\"]"

    echo -e "\n\n$content\n\n$version_pattern\n\n"
    echo "$content" | grep -E "$version_pattern"
    
    if [[ $content =~ $version_pattern ]]; then
        current_version="${BASH_REMATCH[1]}"
        new_version=$(increment_version "$current_version")
        sed -i "s/npmVersion: \"$current_version\"/npmVersion: \"$new_version\"/" "$file"
        echo "Updated file $file from version $current_version to $new_version"
    else
        echo "Unable to find the version in the file: $file"
    fi
}

# Check if there are changes in the repository
cd "$FE_CLIENT_PATH"
if git status --porcelain | grep -q .; then
    echo "There are changes in the repository."
    # Update version
    update_version "$CONFIG_PATH"
else
    echo "No changes in the repository."
fi
cd $CLIENT_PRJ_PATH

# Environment config
export JAVA_HOME="$WSL_JAVA_PATH"
PNPM_SHARE_PATH=$(realpath ~/.local/share/pnpm)
export PATH="$PATH:$WSL_JAVA_PATH:$PNPM_SHARE_PATH"

export TS_POST_PROCESS_FILE="$FE_CLIENT_PATH/postProcessFile.sh"

echo "INIT" > $FE_CLIENT_PATH/post-process.log

# Esegui il generatore OpenAPI
java -jar "$WSL_OPENAPI_GENERATOR_PATH" generate --config "$CONFIG_PATH" > "$FE_CLIENT_PATH/$LOG_NAME"

# Verifica se il comando è stato eseguito con successo
if [ $? -eq 0 ]; then
    echo "Il comando è stato eseguito con successo."
else
    echo "Si è verificato un errore durante l'esecuzione del comando."
    exit 1
fi

# Crea il pacchetto
cd "$FE_CLIENT_PATH"

if [ ! -d "./node_modules" ]; then
    echo "La cartella 'node_modules' non esiste. Eseguo install ed update"
    pnpm install
    pnpm update
else
    echo "pnpm già inizializzato."
    pnpm run build
fi


#____________________________________________________________________________
#step 2 TBD 
#____________________________________________________________________________


pnpm pack --pack-destination "$FOOD_PATH"

# Copia il file più recente
latest_file=$(ls -t "$FOOD_PATH"/iside-ac-open-food-facts-client-ts-fetch-* | head -n1)
if [ -n "$latest_file" ]; then
    echo "Il percorso più recente è: $latest_file"
    package_file_name=$(basename "$latest_file")
else
    echo "Nessun file trovato corrispondente al pattern."
    exit 1
fi

cd "$FOOD_PATH/Italy.Iside/packages/ac-food-pwa"

# Rimuovi vecchi file
ls -t $FOOD_PATH/iside-ac-open-food-facts-client-ts-fetch-* | tail -n +4 | xargs rm -f

#ls -t /mnt/c/Projects/Iside/iside-open-food-facts-api-client-tsfetch-* | tail -n +4 | xargs rm -f
#cp "../$package_file_name" /mnt/c/Projects/Iside/

# Installazione nella pwa
package_name="@iside/ac-open-food-facts-client-ts-fetch"

relative_path=$(realpath --relative-to="$PWD" "$FOOD_PATH/$package_file_name")
echo "The relative path is: $relative_path"

if pnpm list "$package_name" --depth=0 | grep -q "$package_name"; then
    echo "The package '$package_name' is present. Proceeding with removal."
    #pnpm remove "$package_name" 
    pnpm store prune
    sleep 2
    echo "Package '$package_name' removed."
else
    echo "The package '$package_name' is not present."
fi

echo "Add NEW Package '$package_name@file:$relative_path'"
pnpm add "$package_name@file:$relative_path" 

if [ $? -eq 0 ]; then
    echo "The command was executed successfully."
else
    echo "An error occurred while executing the command."
    exit 1
fi

cd "$FE_CLIENT_PATH"