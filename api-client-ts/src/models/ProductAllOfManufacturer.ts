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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProductAllOfManufacturer
 */
export interface ProductAllOfManufacturer {
}

/**
 * Check if a given object implements the ProductAllOfManufacturer interface.
 */
export function instanceOfProductAllOfManufacturer(value: object): value is ProductAllOfManufacturer {
    return true;
}

export function ProductAllOfManufacturerFromJSON(json: any): ProductAllOfManufacturer {
    return ProductAllOfManufacturerFromJSONTyped(json, false);
}

export function ProductAllOfManufacturerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAllOfManufacturer {
    return json;
}

export function ProductAllOfManufacturerToJSON(value?: ProductAllOfManufacturer | null): any {
    return value;
}

