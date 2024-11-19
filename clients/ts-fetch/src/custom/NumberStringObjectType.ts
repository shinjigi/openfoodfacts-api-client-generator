/* tslint:disable */
/* eslint-disable */
/**
 * Fn custom inserita come copia nei MODEL, perchè attualmente l'import dei type non funziona correttamente
 */

/**
 * @type NumberStringObjectType
 * you can retrieve all kind of properties, the same as on the parent object (the product).
 * It's not processed entries (like tags for example) but raw ones.
 * 
 * @export
 */
export type NumberStringObjectType = number | object | string;

export function NumberStringObjectTypeFromJSON(json: any): NumberStringObjectType {
    return NumberStringObjectTypeFromJSONTyped(json, false);
}

export function NumberStringObjectTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberStringObjectType {
    if (json == null) {
        return json;
    }
    if (typeof json === 'number') {
        return Number(json);
    }
    if (typeof json === 'object') {
        return json;
    }
    if (typeof json === 'string') {
        return String(json);
    }

    return {} as any;
}

export function NumberStringObjectTypeToJSON(value?: NumberStringObjectType | null): any {
    if (value == null) {
        return value;
    }

    if (typeof value === 'number') {
        return numberToJSON(value as number);
    }
    if (typeof value === 'object') {
        return objectToJSON(value as object);
    }
    if (typeof value === 'string') {
        return stringToJSON(value);
    }

    return {};
}

export function NumberStringObjectTypeToJSONTyped(value?: NumberStringObjectType | null): any {
    if (value == null) {
        return value;
    }

    if (typeof value === 'number') {
        return numberToJSON(value);
    }
    if (typeof value === 'object') {
        return objectToJSON(value);
    }
    if (typeof value === 'string') {
        return value;
    }

    return {};
}

export function numberToJSON(value: number): any {
    // Implementa la logica per convertire un numero in JSON
    return value;
}

export function objectToJSON(value: object): any {
    // Implementa la logica per convertire un oggetto in JSON
    return value;
}

export function stringToJSON(value: string): any {
    // Implementa la logica per convertire una stringa in JSON
    return value;
}


export function instanceOfobject(value: any): value is object {
    return typeof value === 'object' && value !== null;
}

export function instanceOfstring(value: any): value is string {
    return typeof value === 'string';
}

export function objectFromJSONTyped(json: any, ignoreDiscriminator: boolean): object {
    return json;
}

export function stringFromJSONTyped(json: any, ignoreDiscriminator: boolean): string {
    return json;
}