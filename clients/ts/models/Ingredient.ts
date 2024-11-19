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

import { ProductIngredientsPercentMax } from '../models/ProductIngredientsPercentMax';
import { HttpFile } from '../http/http';

export class Ingredient {
    'ciqual_food_code'?: string;
    'ciqual_proxy_food_code'?: string;
    'ecobalyse_code'?: string;
    'from_palm_oil'?: string;
    'id'?: string;
    /**
    * This structure gives the different ingredients and some information about them, like estimate on their quantity. 
    */
    'ingredients'?: Array<Ingredient>;
    /**
    * The percentage of the ingredient.
    */
    'percent'?: number;
    'is_in_taxonomy'?: number;
    /**
    * Estimated percentage of the ingredient.
    */
    'percent_estimate'?: number;
    'percent_max'?: ProductIngredientsPercentMax;
    /**
    * Minimum percentage of the ingredient.
    */
    'percent_min'?: number;
    /**
    * Text description of the ingredient.
    */
    'text'?: string;
    /**
    * Indicates if the ingredient is vegan.
    */
    'vegan'?: string;
    /**
    * Indicates if the ingredient is vegetarian.
    */
    'vegetarian'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ciqual_food_code",
            "baseName": "ciqual_food_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "ciqual_proxy_food_code",
            "baseName": "ciqual_proxy_food_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecobalyse_code",
            "baseName": "ecobalyse_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "from_palm_oil",
            "baseName": "from_palm_oil",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Array<Ingredient>",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "is_in_taxonomy",
            "baseName": "is_in_taxonomy",
            "type": "number",
            "format": ""
        },
        {
            "name": "percent_estimate",
            "baseName": "percent_estimate",
            "type": "number",
            "format": ""
        },
        {
            "name": "percent_max",
            "baseName": "percent_max",
            "type": "ProductIngredientsPercentMax",
            "format": ""
        },
        {
            "name": "percent_min",
            "baseName": "percent_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "vegan",
            "baseName": "vegan",
            "type": "string",
            "format": ""
        },
        {
            "name": "vegetarian",
            "baseName": "vegetarian",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Ingredient.attributeTypeMap;
    }

    public constructor() {
    }
}