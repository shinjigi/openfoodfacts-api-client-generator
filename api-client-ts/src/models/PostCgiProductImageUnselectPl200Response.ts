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
 * @interface PostCgiProductImageUnselectPl200Response
 */
export interface PostCgiProductImageUnselectPl200Response {
    /**
     * status of the unselect operation
     * @type {string}
     * @memberof PostCgiProductImageUnselectPl200Response
     */
    status?: string;
    /**
     * status code of the operation
     * @type {number}
     * @memberof PostCgiProductImageUnselectPl200Response
     */
    statusCode?: number;
    /**
     * image field that was unselected
     * @type {string}
     * @memberof PostCgiProductImageUnselectPl200Response
     */
    imagefield?: string;
}

/**
 * Check if a given object implements the PostCgiProductImageUnselectPl200Response interface.
 */
export function instanceOfPostCgiProductImageUnselectPl200Response(value: object): value is PostCgiProductImageUnselectPl200Response {
    return true;
}

export function PostCgiProductImageUnselectPl200ResponseFromJSON(json: any): PostCgiProductImageUnselectPl200Response {
    return PostCgiProductImageUnselectPl200ResponseFromJSONTyped(json, false);
}

export function PostCgiProductImageUnselectPl200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCgiProductImageUnselectPl200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'statusCode': json['status_code'] == null ? undefined : json['status_code'],
        'imagefield': json['imagefield'] == null ? undefined : json['imagefield'],
    };
}

export function PostCgiProductImageUnselectPl200ResponseToJSON(value?: PostCgiProductImageUnselectPl200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'status_code': value['statusCode'],
        'imagefield': value['imagefield'],
    };
}

