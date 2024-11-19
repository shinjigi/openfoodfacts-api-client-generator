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
* Data about a product which is represented as tags 
*/
export class ProductTags {
    /**
    * List of brands (not taxonomized)
    */
    'brands'?: string;
    'brands_tags'?: Array<string>;
    'categories'?: string;
    'categories_hierarchy'?: Array<string>;
    /**
    * Categories language code
    */
    'categories_lc'?: string;
    'categories_old'?: string;
    'categories_tags'?: Array<string>;
    'checkers_tags'?: Array<string>;
    'cities'?: string;
    'cities_tags'?: Array<any>;
    'correctors_tags'?: Array<string>;
    /**
    * List of countries where the product is sold. 
    */
    'countries'?: string;
    'countries_beforescanbot'?: string;
    'countries_hierarchy'?: Array<string>;
    /**
    * Countries language code
    */
    'countries_lc'?: string;
    'countries_tags'?: Array<string>;
    /**
    * All ecoscore of a product. Most of the time it\'s only one value, but it might eventually be more for products composed of sub-products. See also: `ecoscore_score`, `ecoscore_grade`. 
    */
    'ecoscore_tags'?: Array<string>;
    /**
    * Packager code. EMB is the French system of traceability codes for packager. 
    */
    'emb_codes'?: string;
    'emb_codes_orig'?: string;
    'emb_codes_tags'?: Array<string>;
    'labels'?: string;
    'labels_hierarchy'?: Array<string>;
    'labels_lc'?: string;
    'labels_tags'?: Array<string>;
    /**
    * The data as a series of tag: `yyyy-mm-dd`, `yyyy-mm`, `yyyy` 
    */
    'entry_dates_tags'?: Array<string>;
    /**
    * Places where the product was manufactured or transformed. 
    */
    'manufacturing_places'?: string;
    'manufacturing_places_tags'?: Array<string>;
    'nova_groups_tags'?: Array<string>;
    'nutrient_levels_tags'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brands",
            "baseName": "brands",
            "type": "string",
            "format": ""
        },
        {
            "name": "brands_tags",
            "baseName": "brands_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "string",
            "format": ""
        },
        {
            "name": "categories_hierarchy",
            "baseName": "categories_hierarchy",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "categories_lc",
            "baseName": "categories_lc",
            "type": "string",
            "format": ""
        },
        {
            "name": "categories_old",
            "baseName": "categories_old",
            "type": "string",
            "format": ""
        },
        {
            "name": "categories_tags",
            "baseName": "categories_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "checkers_tags",
            "baseName": "checkers_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cities",
            "baseName": "cities",
            "type": "string",
            "format": ""
        },
        {
            "name": "cities_tags",
            "baseName": "cities_tags",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "correctors_tags",
            "baseName": "correctors_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "string",
            "format": ""
        },
        {
            "name": "countries_beforescanbot",
            "baseName": "countries_beforescanbot",
            "type": "string",
            "format": ""
        },
        {
            "name": "countries_hierarchy",
            "baseName": "countries_hierarchy",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "countries_lc",
            "baseName": "countries_lc",
            "type": "string",
            "format": ""
        },
        {
            "name": "countries_tags",
            "baseName": "countries_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "ecoscore_tags",
            "baseName": "ecoscore_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "emb_codes",
            "baseName": "emb_codes",
            "type": "string",
            "format": ""
        },
        {
            "name": "emb_codes_orig",
            "baseName": "emb_codes_orig",
            "type": "string",
            "format": ""
        },
        {
            "name": "emb_codes_tags",
            "baseName": "emb_codes_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels_hierarchy",
            "baseName": "labels_hierarchy",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "labels_lc",
            "baseName": "labels_lc",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels_tags",
            "baseName": "labels_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "entry_dates_tags",
            "baseName": "entry_dates_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "manufacturing_places",
            "baseName": "manufacturing_places",
            "type": "string",
            "format": ""
        },
        {
            "name": "manufacturing_places_tags",
            "baseName": "manufacturing_places_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nova_groups_tags",
            "baseName": "nova_groups_tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nutrient_levels_tags",
            "baseName": "nutrient_levels_tags",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductTags.attributeTypeMap;
    }

    public constructor() {
    }
}