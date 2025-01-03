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

import { Product } from '../models/Product';
import { HttpFile } from '../http/http';

export class SearchForProductsResponse {
    /**
    * Total number of products found 
    */
    'count'?: number;
    /**
    * Page number of returned results.  You can get a different page, by using the `page` query parameter. 
    */
    'page'?: number;
    /**
    * Number of products in this page.  This will differ from page_size only on the last page. 
    */
    'page_count'?: number;
    /**
    * Requested number of products per pages  To get the number of pages, divide count by page_size (eg. `Math.floor( count / page_size) + 1 `) 
    */
    'page_size'?: number;
    /**
    * The products matching the query corresponding to current page 
    */
    'products'?: Array<Product>;
    'skip'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "page_count",
            "baseName": "page_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "page_size",
            "baseName": "page_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<Product>",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchForProductsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
