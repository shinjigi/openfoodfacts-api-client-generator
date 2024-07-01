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
import type { ProductBase } from './ProductBase';
import {
    ProductBaseFromJSON,
    ProductBaseFromJSONTyped,
    ProductBaseToJSON,
} from './ProductBase';

/**
 * 
 * @export
 * @interface GetSearch200Response
 */
export interface GetSearch200Response {
    /**
     * Total number of products found
     * 
     * @type {number}
     * @memberof GetSearch200Response
     */
    count?: number;
    /**
     * Page number of returned results.
     * 
     * You can get a different page, by using the `page` query parameter.
     * 
     * @type {number}
     * @memberof GetSearch200Response
     */
    page?: number;
    /**
     * Number of products in this page.
     * 
     * This will differ from page_size only on the last page.
     * 
     * @type {number}
     * @memberof GetSearch200Response
     */
    pageCount?: number;
    /**
     * Requested number of products per pages
     * 
     * To get the number of pages, divide count by page_size
     * (eg. `Math.floor( count / page_size) + 1 `)
     * 
     * @type {number}
     * @memberof GetSearch200Response
     */
    pageSize?: number;
    /**
     * The products matching the query corresponding to current page
     * 
     * @type {Array<ProductBase>}
     * @memberof GetSearch200Response
     */
    products?: Array<ProductBase>;
    /**
     * 
     * @type {number}
     * @memberof GetSearch200Response
     */
    skip?: number;
}

/**
 * Check if a given object implements the GetSearch200Response interface.
 */
export function instanceOfGetSearch200Response(value: object): value is GetSearch200Response {
    return true;
}

export function GetSearch200ResponseFromJSON(json: any): GetSearch200Response {
    return GetSearch200ResponseFromJSONTyped(json, false);
}

export function GetSearch200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSearch200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageCount': json['page_count'] == null ? undefined : json['page_count'],
        'pageSize': json['page_size'] == null ? undefined : json['page_size'],
        'products': json['products'] == null ? undefined : ((json['products'] as Array<any>).map(ProductBaseFromJSON)),
        'skip': json['skip'] == null ? undefined : json['skip'],
    };
}

export function GetSearch200ResponseToJSON(value?: GetSearch200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'page': value['page'],
        'page_count': value['pageCount'],
        'page_size': value['pageSize'],
        'products': value['products'] == null ? undefined : ((value['products'] as Array<any>).map(ProductBaseToJSON)),
        'skip': value['skip'],
    };
}

