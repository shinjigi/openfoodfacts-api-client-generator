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
import type { ProductExtendedOwnerFields1AdditionalProperties } from './ProductExtendedOwnerFields1AdditionalProperties';
import {
    ProductExtendedOwnerFields1AdditionalPropertiesFromJSON,
    ProductExtendedOwnerFields1AdditionalPropertiesFromJSONTyped,
    ProductExtendedOwnerFields1AdditionalPropertiesToJSON,
} from './ProductExtendedOwnerFields1AdditionalProperties';

/**
 * Those are fields provided by the producer (through producers platform),
 * and the value he provided.
 * 
 * @export
 * @interface ProductExtendedOwnerFields1
 */
export interface ProductExtendedOwnerFields1 {
    /**
     * 
     * @type {ProductExtendedOwnerFields1AdditionalProperties}
     * @memberof ProductExtendedOwnerFields1
     */
    additionalProperties?: ProductExtendedOwnerFields1AdditionalProperties;
}

/**
 * Check if a given object implements the ProductExtendedOwnerFields1 interface.
 */
export function instanceOfProductExtendedOwnerFields1(value: object): value is ProductExtendedOwnerFields1 {
    return true;
}

export function ProductExtendedOwnerFields1FromJSON(json: any): ProductExtendedOwnerFields1 {
    return ProductExtendedOwnerFields1FromJSONTyped(json, false);
}

export function ProductExtendedOwnerFields1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductExtendedOwnerFields1 {
    if (json == null) {
        return json;
    }
    return {
        
        'additionalProperties': json['additionalProperties'] == null ? undefined : ProductExtendedOwnerFields1AdditionalPropertiesFromJSON(json['additionalProperties']),
    };
}

export function ProductExtendedOwnerFields1ToJSON(value?: ProductExtendedOwnerFields1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'additionalProperties': ProductExtendedOwnerFields1AdditionalPropertiesToJSON(value['additionalProperties']),
    };
}
