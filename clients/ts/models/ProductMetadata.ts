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

import { ProductMetaSource } from '../models/ProductMetaSource';
import { ProductMetaSourceFields } from '../models/ProductMetaSourceFields';
import { HttpFile } from '../http/http';

/**
* Metadata of a product (author, editors, creation date, etc.) 
*/
export class ProductMetadata {
    /**
    * Date when the product was added (UNIX timestamp format). See also `entry_dates_tags` 
    */
    'created_t'?: number;
    /**
    * The contributor who added the product first. 
    */
    'creator'?: string;
    /**
    * List of editors who edited the product. 
    */
    'editors_tags'?: Array<string>;
    'informers_tags'?: Array<string>;
    'interface_version_created'?: string;
    'interface_version_modified'?: string;
    'languages'?: any;
    /**
    * Same as `languages` but by language code, instead of language tags 
    */
    'languages_codes'?: any;
    'languages_hierarchy'?: Array<string>;
    'languages_tags'?: Array<string>;
    'last_edit_dates_tags'?: Array<string>;
    'last_editor'?: string;
    /**
    * The username of the user who last modified the product. 
    */
    'last_modified_by'?: string;
    /**
    * Date when the product page was last modified. 
    */
    'last_modified_t'?: number;
    /**
    * Id of the producer in case he provides his own data about a product (producer platform). 
    */
    'owner'?: string;
    /**
    * Tagyfied version of owner 
    */
    'owners_tags'?: string;
    'photographers_tags'?: Array<string>;
    /**
    * revision number of this product version (each edit adds a revision)
    */
    'rev'?: number;
    'sources'?: Array<ProductMetaSource>;
    'sources_fields'?: ProductMetaSourceFields;
    'teams'?: string;
    'teams_tags'?: Array<string>;
    'update_key'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created_t",
            "baseName": "created_t",
            "type": "number",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "string",
            "format": ""
        },
        {
            "name": "editors_tags",
            "baseName": "editors_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "informers_tags",
            "baseName": "informers_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "interface_version_created",
            "baseName": "interface_version_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "interface_version_modified",
            "baseName": "interface_version_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "any",
            "format": ""
        },
        {
            "name": "languages_codes",
            "baseName": "languages_codes",
            "type": "any",
            "format": ""
        },
        {
            "name": "languages_hierarchy",
            "baseName": "languages_hierarchy",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "languages_tags",
            "baseName": "languages_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "last_edit_dates_tags",
            "baseName": "last_edit_dates_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "last_editor",
            "baseName": "last_editor",
            "type": "string",
            "format": ""
        },
        {
            "name": "last_modified_by",
            "baseName": "last_modified_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "last_modified_t",
            "baseName": "last_modified_t",
            "type": "number",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        },
        {
            "name": "owners_tags",
            "baseName": "owners_tags",
            "type": "string",
            "format": ""
        },
        {
            "name": "photographers_tags",
            "baseName": "photographers_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "rev",
            "baseName": "rev",
            "type": "number",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<ProductMetaSource>",
            "format": ""
        },
        {
            "name": "sources_fields",
            "baseName": "sources_fields",
            "type": "ProductMetaSourceFields",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "string",
            "format": ""
        },
        {
            "name": "teams_tags",
            "baseName": "teams_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "update_key",
            "baseName": "update_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}
