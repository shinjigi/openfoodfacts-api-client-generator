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
* A text in simple HTML format to display.  For some specific texts that correspond to a product field (e.g. a product name, the ingredients list of a product),the edit_field_* fields are used to indicate how to edit the field value.
*/
export class TextElement {
    /**
    * the type of text, might influence the way you display it. 
    */
    'type'?: TextElementTypeEnum;
    /**
    * Text to display in HTML format.
    */
    'html'?: string;
    /**
    * Language of the text. The name of the language is returned in the language requested when making the API call. e.g. if the text is in Polish, and the requested language is French, the language field will contain \"Polonais\" (French for \"Polish\"). Only set for specific fields such as the list of ingredients of a product.
    */
    'language'?: string;
    /**
    * 2 letter language code for the text. Only set for specific fields such as the list of ingredients of a product.
    */
    'lc'?: string;
    /**
    * id of the field used to edit this text in the product edit API.
    */
    'edit_field_id'?: string;
    /**
    * Type of the product field.
    */
    'edit_field_type'?: string;
    /**
    * Current value of the product field. This may differ from the html field which can contain extra formating.
    */
    'edit_field_value'?: string;
    /**
    * Link to the source
    */
    'source_url'?: string;
    /**
    * name of the source
    */
    'source_text'?: string;
    /**
    * Source locale name
    */
    'source_lc'?: string;
    /**
    * Human readable source locale name
    */
    'source_language'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TextElementTypeEnum",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "lc",
            "baseName": "lc",
            "type": "string",
            "format": ""
        },
        {
            "name": "edit_field_id",
            "baseName": "edit_field_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "edit_field_type",
            "baseName": "edit_field_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "edit_field_value",
            "baseName": "edit_field_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "source_url",
            "baseName": "source_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "source_text",
            "baseName": "source_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "source_lc",
            "baseName": "source_lc",
            "type": "string",
            "format": ""
        },
        {
            "name": "source_language",
            "baseName": "source_language",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TextElement.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TextElementTypeEnum {
    summary = 'summary',
    warning = 'warning',
    notes = 'notes'
}

