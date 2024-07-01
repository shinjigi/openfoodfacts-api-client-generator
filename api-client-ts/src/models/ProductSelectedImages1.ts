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
import type { ProductSelectedImages1Front } from './ProductSelectedImages1Front';
import {
    ProductSelectedImages1FrontFromJSON,
    ProductSelectedImages1FrontFromJSONTyped,
    ProductSelectedImages1FrontToJSON,
} from './ProductSelectedImages1Front';

/**
 * 
 * @export
 * @interface ProductSelectedImages1
 */
export interface ProductSelectedImages1 {
    /**
     * 
     * @type {ProductSelectedImages1Front}
     * @memberof ProductSelectedImages1
     */
    front?: ProductSelectedImages1Front;
}

/**
 * Check if a given object implements the ProductSelectedImages1 interface.
 */
export function instanceOfProductSelectedImages1(value: object): value is ProductSelectedImages1 {
    return true;
}

export function ProductSelectedImages1FromJSON(json: any): ProductSelectedImages1 {
    return ProductSelectedImages1FromJSONTyped(json, false);
}

export function ProductSelectedImages1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSelectedImages1 {
    if (json == null) {
        return json;
    }
    return {
        
        'front': json['front'] == null ? undefined : ProductSelectedImages1FrontFromJSON(json['front']),
    };
}

export function ProductSelectedImages1ToJSON(value?: ProductSelectedImages1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'front': ProductSelectedImages1FrontToJSON(value['front']),
    };
}
