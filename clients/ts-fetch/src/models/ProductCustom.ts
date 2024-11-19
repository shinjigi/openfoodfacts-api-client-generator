/* tslint:disable */
/* eslint-disable */
// types/api-augmentation.ts

import { Product, ProductFromJSONTyped, ProductToJSONTyped } from './Product';

// Definisci i codici lingua supportati
type LanguageCode = 'en' | 'fr' | 'it' | 'es' | 'de';

// Definisci i campi che possono essere localizzati
type FieldLocalized = 'ingredients_text' | 'ingredients_text_with_allergens';
const LocalizedFieldList: FieldLocalized[] = ['ingredients_text', 'ingredients_text_with_allergens'];

// Crea un type helper per generare tutte le possibili chiavi localizzate
type LocalizedKey<T extends string> = `${T}_${LanguageCode}`;

// Crea un tipo che rappresenta tutte le possibili chiavi localizzate
type AllLocalizedKeys = LocalizedKey<FieldLocalized>;

// Crea un tipo che rappresenta i campi localizzati
type LocalizedFields = {
    [K in AllLocalizedKeys]?: string;
};

// Combina i tipi usando intersection type
export type ProductCustom = Product & LocalizedFields;

// Utility functions aggiornate per lavorare con Product
export const getLocalizedValue = <T extends FieldLocalized>(
    product: Product,
    field: T,
    lang: LanguageCode
): string | undefined => {
    const key = `${field}_${lang}` as AllLocalizedKeys;
    return product[key];
};


// Helper per gestire i campi localizzati nel JSON
const isLocalizedField = (key: string): boolean => {
    return LocalizedFieldList.some(field =>
        key.startsWith(field + '_') &&
        key.length === field.length + 3 // +3 per underscore e codice lingua
    );
};


/**
 * Controlla se un oggetto implementa l'interfaccia Product.
 */
export function instanceOfProduct(value: object): value is Product {
    return true;
}

export function ProductCustomFromJSON(json: any): Product {
    return ProductCustomFromJSONTyped(json, false);
}

export function ProductCustomFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if (json == null) {
        return json;
    }

    // Base object con tutti i campi standard
    const baseProduct = ProductFromJSONTyped(json, ignoreDiscriminator);

    // Aggiungi i campi localizzati dinamicamente
    const localizedFields: { [key: string]: string } = {};

    // Itera su tutte le chiavi del JSON
    Object.keys(json).forEach(key => {
        if (isLocalizedField(key)) {
            localizedFields[key] = json[key] == null ? undefined : json[key];
        }
    });

    // Combina l'oggetto base con i campi localizzati
    return {
        ...baseProduct,
        ...localizedFields
    };
}

export function ProductCustomToJSON(value: any): any {
    return ProductCustomToJSONTyped(value, false);
}

export function ProductCustomToJSONTyped(value?: Product | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    // Base object con tutti i campi standard
    const baseJson = ProductToJSONTyped(value, ignoreDiscriminator);

    // Aggiungi i campi localizzati dinamicamente
    const localizedFields: { [key: string]: string | undefined } = {};

    // Itera su tutte le chiavi dell'oggetto
    Object.keys(value).forEach(key => {
        if (isLocalizedField(key)) {
            localizedFields[key] = value[key];
        }
    });

    // Combina l'oggetto base con i campi localizzati
    return {
        ...baseJson,
        ...localizedFields
    };
}
