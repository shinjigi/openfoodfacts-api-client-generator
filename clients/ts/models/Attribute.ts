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

export class Attribute {
    /**
    * unique id of the attribute
    */
    'id'?: string;
    /**
    * Name of the attribute
    */
    'name'?: string;
    /**
    * url of icon to display next to the settings for this attribute
    */
    'icon_url'?: string;
    /**
    * a description of the attribute to display to users
    */
    'setting_name'?: string;
    /**
    * a complementary note on the attribute
    */
    'setting_note'?: string;
    /**
    * Indicates the default setting for this attribute
    */
    '_default'?: AttributeDefaultEnum;
    /**
    * Linked knowledge panel (optional)
    */
    'panel_id'?: string;

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
            "name": "icon_url",
            "baseName": "icon_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "setting_name",
            "baseName": "setting_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "setting_note",
            "baseName": "setting_note",
            "type": "string",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "AttributeDefaultEnum",
            "format": ""
        },
        {
            "name": "panel_id",
            "baseName": "panel_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Attribute.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AttributeDefaultEnum {
    mandatory = 'mandatory',
    very_important = 'very_important',
    important = 'important',
    not_important = 'not_important'
}
