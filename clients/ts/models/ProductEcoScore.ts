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

import { ProductEcoscoreData } from '../models/ProductEcoscoreData';
import { HttpFile } from '../http/http';

/**
* Fields related to Eco-Score for a product.  See also: `ecoscore_score`, `ecoscore_grade` and `ecoscore_tags`. 
*/
export class ProductEcoScore {
    'ecoscore_data'?: ProductEcoscoreData;
    'ecoscore_extended_data_version'?: string;
    'environment_impact_level'?: string;
    'environment_impact_level_tags'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ecoscore_data",
            "baseName": "ecoscore_data",
            "type": "ProductEcoscoreData",
            "format": ""
        },
        {
            "name": "ecoscore_extended_data_version",
            "baseName": "ecoscore_extended_data_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "environment_impact_level",
            "baseName": "environment_impact_level",
            "type": "string",
            "format": ""
        },
        {
            "name": "environment_impact_level_tags",
            "baseName": "environment_impact_level_tags",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductEcoScore.attributeTypeMap;
    }

    public constructor() {
    }
}
