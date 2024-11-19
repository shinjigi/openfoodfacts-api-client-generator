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
* Base product data 
*/
export class ProductBase {
    /**
    * Abbreviated name in requested language
    */
    'abbreviated_product_name'?: string;
    /**
    * barcode of the product (can be EAN-13 or internal codes for some food stores), for products without a barcode, Open Food Facts assigns a number starting with the 200 reserved prefix 
    */
    'code'?: string;
    'codes_tags'?: Array<string>;
    'generic_name_it'?: string;
    /**
    * Legal name of the product as regulated by the European authorities. 
    */
    'generic_name'?: string;
    /**
    * id in database of the product, this normally is the barcode
    */
    '_id'?: string;
    '_keywords'?: Array<string>;
    /**
    * internal identifier for the product, usually set to the value of `code`, except on the producers platform where it is prefixed by the owner 
    */
    'id'?: string;
    /**
    * Main language of the product. This is a duplicate of `lang` property (for historical reasons). 
    */
    'lc'?: string;
    /**
    * Main language of the product.  This should be the main language of product packaging (if one is predominant).  Main language is also used to decide which ingredients list to parse. 
    */
    'lang'?: string;
    /**
    * Nova group as an integer from 1 to 4. See https://world.openfoodfacts.org/nova 
    */
    'nova_group'?: number;
    'nova_groups'?: string;
    'obsolete'?: string;
    /**
    * A date at which the product was declared obsolete. This means it\'s not produced any more. 
    */
    'obsolete_since_date'?: string;
    /**
    * The name of the product 
    */
    'product_name'?: string;
    /**
    * Italian name of the product 
    */
    'product_name_it'?: string;
    /**
    * The name of the product can also be in many other languages like product_name_fr (for French). 
    */
    'product_name_en'?: string;
    /**
    * The size in g or ml for the whole product. It\'s a normalized version of the quantity field. 
    */
    'product_quantity'?: string;
    /**
    * The unit (either g or ml) for the correponding product_quantity. 
    */
    'product_quantity_unit'?: string;
    /**
    * Quantity and Unit. 
    */
    'quantity'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "abbreviated_product_name",
            "baseName": "abbreviated_product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "codes_tags",
            "baseName": "codes_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "generic_name_it",
            "baseName": "generic_name_it",
            "type": "string",
            "format": ""
        },
        {
            "name": "generic_name",
            "baseName": "generic_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "_id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "_keywords",
            "baseName": "_keywords",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "lang",
            "baseName": "lang",
            "type": "string",
            "format": ""
        },
        {
            "name": "nova_group",
            "baseName": "nova_group",
            "type": "number",
            "format": ""
        },
        {
            "name": "nova_groups",
            "baseName": "nova_groups",
            "type": "string",
            "format": ""
        },
        {
            "name": "obsolete",
            "baseName": "obsolete",
            "type": "string",
            "format": ""
        },
        {
            "name": "obsolete_since_date",
            "baseName": "obsolete_since_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "product_name",
            "baseName": "product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "product_name_it",
            "baseName": "product_name_it",
            "type": "string",
            "format": ""
        },
        {
            "name": "product_name_en",
            "baseName": "product_name_en",
            "type": "string",
            "format": ""
        },
        {
            "name": "product_quantity",
            "baseName": "product_quantity",
            "type": "string",
            "format": ""
        },
        {
            "name": "product_quantity_unit",
            "baseName": "product_quantity_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductBase.attributeTypeMap;
    }

    public constructor() {
    }
}