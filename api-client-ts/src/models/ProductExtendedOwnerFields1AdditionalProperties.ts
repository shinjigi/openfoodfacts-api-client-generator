/* tslint:disable */
/* eslint-disable */
/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: contact@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @type ProductExtendedOwnerFields1AdditionalProperties
 * you can retrieve all kind of properties, the same as on the parent object (the product).
 * It's not processed entries (like tags for example) but raw ones.
 * 
 * @export
 */
export type ProductExtendedOwnerFields1AdditionalProperties = number | object | string;

export function ProductExtendedOwnerFields1AdditionalPropertiesFromJSON(json: any): ProductExtendedOwnerFields1AdditionalProperties {
    return ProductExtendedOwnerFields1AdditionalPropertiesFromJSONTyped(json, false);
}

export function ProductExtendedOwnerFields1AdditionalPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductExtendedOwnerFields1AdditionalProperties {
    if (json == null) {
        return json;
    }
    if (instanceOfnumber(json)) {
        return numberFromJSONTyped(json, true);
    }
    if (instanceOfobject(json)) {
        return objectFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function ProductExtendedOwnerFields1AdditionalPropertiesToJSON(value?: ProductExtendedOwnerFields1AdditionalProperties | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfobject(value)) {
        return objectToJSON(value as object);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
