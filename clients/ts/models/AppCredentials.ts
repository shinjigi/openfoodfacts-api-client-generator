/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * OpenAPI spec version: 2
 * Contact: reuse@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Schema for application credentials
*/
export class AppCredentials {
    /**
    * Name of the application
    */
    'app_name': string;
    /**
    * Version of the application
    */
    'app_version': string;
    /**
    * A salted random uuid (Unique identifier) for the user so that Open Food Facts moderators  can selectively ban any problematic user without banning your whole app account. 
    */
    'app_uuid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "app_name",
            "baseName": "app_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_version",
            "baseName": "app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_uuid",
            "baseName": "app_uuid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCredentials.attributeTypeMap;
    }

    public constructor() {
    }
}
