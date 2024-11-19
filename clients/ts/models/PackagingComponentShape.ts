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
* The shape property is canonicalized using the packaging_shapes taxonomy.
*/
export class PackagingComponentShape {
    /**
    * Canonical id of the entry in the taxonomy. If the value cannot be mapped to a taxonomy entry, the value will be the name of the entry in its original language prefixed by the language 2 letter code and a colon.
    */
    'id'?: string;
    /**
    * Name of the entry in the language requested in the tags_lc field of the request. This field is returned only of tags_lc is specified. If the translation is not available, or if the entry does not exist in the taxonomy, the value will be the name of the entry in its original language prefixed by the language 2 letter code and a colon.
    */
    'lc_name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lc_name",
            "baseName": "lc_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PackagingComponentShape.attributeTypeMap;
    }

    public constructor() {
    }
}
