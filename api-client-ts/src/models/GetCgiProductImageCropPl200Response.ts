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
import type { GetCgiProductImageCropPl200ResponseImage } from './GetCgiProductImageCropPl200ResponseImage';
import {
    GetCgiProductImageCropPl200ResponseImageFromJSON,
    GetCgiProductImageCropPl200ResponseImageFromJSONTyped,
    GetCgiProductImageCropPl200ResponseImageToJSON,
} from './GetCgiProductImageCropPl200ResponseImage';

/**
 * 
 * @export
 * @interface GetCgiProductImageCropPl200Response
 */
export interface GetCgiProductImageCropPl200Response {
    /**
     * 
     * @type {string}
     * @memberof GetCgiProductImageCropPl200Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCgiProductImageCropPl200Response
     */
    imagefield?: string;
    /**
     * 
     * @type {GetCgiProductImageCropPl200ResponseImage}
     * @memberof GetCgiProductImageCropPl200Response
     */
    image?: GetCgiProductImageCropPl200ResponseImage;
}

/**
 * Check if a given object implements the GetCgiProductImageCropPl200Response interface.
 */
export function instanceOfGetCgiProductImageCropPl200Response(value: object): value is GetCgiProductImageCropPl200Response {
    return true;
}

export function GetCgiProductImageCropPl200ResponseFromJSON(json: any): GetCgiProductImageCropPl200Response {
    return GetCgiProductImageCropPl200ResponseFromJSONTyped(json, false);
}

export function GetCgiProductImageCropPl200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCgiProductImageCropPl200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'imagefield': json['imagefield'] == null ? undefined : json['imagefield'],
        'image': json['image'] == null ? undefined : GetCgiProductImageCropPl200ResponseImageFromJSON(json['image']),
    };
}

export function GetCgiProductImageCropPl200ResponseToJSON(value?: GetCgiProductImageCropPl200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'imagefield': value['imagefield'],
        'image': GetCgiProductImageCropPl200ResponseImageToJSON(value['image']),
    };
}
