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
import type { ProductExtendedOwnerFieldsAdditionalProperties } from './ProductExtendedOwnerFieldsAdditionalProperties';
import {
    ProductExtendedOwnerFieldsAdditionalPropertiesFromJSON,
    ProductExtendedOwnerFieldsAdditionalPropertiesFromJSONTyped,
    ProductExtendedOwnerFieldsAdditionalPropertiesToJSON,
} from './ProductExtendedOwnerFieldsAdditionalProperties';

/**
 * Those are fields provided by the producer (through producers platform),
 * and the value he provided.
 * 
 * @export
 * @interface ProductExtendedOwnerFields
 */
export interface ProductExtendedOwnerFields {
    /**
     * 
     * @type {ProductExtendedOwnerFieldsAdditionalProperties}
     * @memberof ProductExtendedOwnerFields
     */
    additionalProperties?: ProductExtendedOwnerFieldsAdditionalProperties;
}

/**
 * Check if a given object implements the ProductExtendedOwnerFields interface.
 */
export function instanceOfProductExtendedOwnerFields(value: object): value is ProductExtendedOwnerFields {
    return true;
}

export function ProductExtendedOwnerFieldsFromJSON(json: any): ProductExtendedOwnerFields {
    return ProductExtendedOwnerFieldsFromJSONTyped(json, false);
}

export function ProductExtendedOwnerFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductExtendedOwnerFields {
    if (json == null) {
        return json;
    }
    return {
        
        'additionalProperties': json['additionalProperties'] == null ? undefined : ProductExtendedOwnerFieldsAdditionalPropertiesFromJSON(json['additionalProperties']),
    };
}

export function ProductExtendedOwnerFieldsToJSON(value?: ProductExtendedOwnerFields | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'additionalProperties': ProductExtendedOwnerFieldsAdditionalPropertiesToJSON(value['additionalProperties']),
    };
}

