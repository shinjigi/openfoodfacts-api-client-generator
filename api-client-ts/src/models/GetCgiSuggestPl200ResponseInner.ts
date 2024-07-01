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
 * @interface GetCgiSuggestPl200ResponseInner
 */
export interface GetCgiSuggestPl200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof GetCgiSuggestPl200ResponseInner
     */
    tbd?: string;
}

/**
 * Check if a given object implements the GetCgiSuggestPl200ResponseInner interface.
 */
export function instanceOfGetCgiSuggestPl200ResponseInner(value: object): value is GetCgiSuggestPl200ResponseInner {
    return true;
}

export function GetCgiSuggestPl200ResponseInnerFromJSON(json: any): GetCgiSuggestPl200ResponseInner {
    return GetCgiSuggestPl200ResponseInnerFromJSONTyped(json, false);
}

export function GetCgiSuggestPl200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCgiSuggestPl200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'tbd': json['tbd'] == null ? undefined : json['tbd'],
    };
}

export function GetCgiSuggestPl200ResponseInnerToJSON(value?: GetCgiSuggestPl200ResponseInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tbd': value['tbd'],
    };
}
