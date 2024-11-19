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

export class AdjustmentsOriginOfIngredientAggregated {
    'epi_score'?: string;
    'origin'?: string;
    'percent'?: number;
    'transportation_score'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "epi_score",
            "baseName": "epi_score",
            "type": "string",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "transportation_score",
            "baseName": "transportation_score",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AdjustmentsOriginOfIngredientAggregated.attributeTypeMap;
    }

    public constructor() {
    }
}