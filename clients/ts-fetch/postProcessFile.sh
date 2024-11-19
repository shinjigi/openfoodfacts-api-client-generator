#!/bin/bash

for file in "$@"; do
  # Esegui la post-elaborazione sui file

  #prettier non riconosce l'opzione --double-quote. Questo perché prettier non ha un'opzione --double-quote.
  # Invece, prettier utilizza l'opzione --single-quote per configurare l'uso delle virgolette singole.
  # Se desideri utilizzare le virgolette doppie, non è necessario specificare un'opzione, poiché le virgolette
  #  doppie sono il comportamento predefinito di prettier.
  prettier_output=$(pnpm exec prettier --write "$file" 2>&1)
  
  echo "Post-processing $file: $prettier_output" >> ./clients/ts-fetch/post-process.log

  # Aggiungi qui i comandi di post-elaborazione, ad esempio:
  # sed -i 's/old-text/new-text/g' "$file"
done

