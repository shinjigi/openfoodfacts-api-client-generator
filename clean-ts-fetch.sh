#!/bin/bash

# Imposta il modo strict
set -euo pipefail

# Directory di output
OUTPUT_DIR="$PWD/clients/ts-fetch"

# File di ignore
IGNORE_FILE="$PWD/clients/ts-fetch/.openapi-generator-ignore"

echo "Working directory: $PWD"
echo "Output directory: $OUTPUT_DIR"

# Verifica se la directory di output esiste
if [ ! -d "$OUTPUT_DIR" ]; then
    echo "Directory $OUTPUT_DIR does not exist. Skipping deletion."
    exit 0
fi

# Verifica se il file di ignore esiste
if [ ! -f "$IGNORE_FILE" ]; then
    echo "Ignore file $IGNORE_FILE does not exist. Proceeding without ignore patterns."
    IGNORE_PATTERNS=""
else
    # Leggi i pattern di ignore dal file
    IGNORE_PATTERNS=$(grep -v '^#' "$IGNORE_FILE" | grep -v '^$')
    echo "Ignore patterns:"
    echo "$IGNORE_PATTERNS"
fi

# Funzione per controllare se un file deve essere ignorato
should_ignore() {
    local file="$1"
    local relative_path="${file#$OUTPUT_DIR/}"
    
    #echo "Checking file: $relative_path"
    
    if [ "$relative_path" = ".openapi-generator-ignore" ]; then
        echo "Ignoring .openapi-generator-ignore file"
        return 0
    fi

    if [ -n "$IGNORE_PATTERNS" ]; then
        while IFS= read -r pattern; do
            #echo "Checking against pattern: $pattern"
            #if [[ "$relative_path" == $pattern ]]; then
            if [[ "$relative_path" =~ ^$pattern ]]; then
                #echo "Match found. Ignoring file."
                return 0
            fi
        done <<< "$IGNORE_PATTERNS"
    fi
    #echo "No match found. File will be deleted."
    return 1
}

# Elimina i file non ignorati
find "$OUTPUT_DIR" -type f | while IFS= read -r file; do
    if ! should_ignore "$file"; then
        echo "Deleting file: $file"
        rm -f "$file"
    else
        echo "Ignoring file: $file"
    fi
done

# Elimina le directory vuote
find "$OUTPUT_DIR" -type d -empty -delete
sync
sleep 2

echo "Cleanup completed."