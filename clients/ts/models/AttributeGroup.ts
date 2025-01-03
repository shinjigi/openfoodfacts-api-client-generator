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

import { Attribute } from '../models/Attribute';
import { HttpFile } from '../http/http';

export class AttributeGroup {
    /**
    * unique id of the group
    */
    'id'?: string;
    /**
    * Name of the group
    */
    'name'?: string;
    /**
    * Attributes that are part of this group 
    */
    'attributes'?: Array<Attribute>;

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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<Attribute>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AttributeGroup.attributeTypeMap;
    }

    public constructor() {
    }
}
