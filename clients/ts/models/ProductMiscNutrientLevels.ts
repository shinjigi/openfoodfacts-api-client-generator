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
* Traffic light indicators on main nutrients levels 
*/
export class ProductMiscNutrientLevels {
    'fat'?: ProductMiscNutrientLevelsFatEnum;
    'salt'?: ProductMiscNutrientLevelsSaltEnum;
    'saturated_fat'?: ProductMiscNutrientLevelsSaturatedFatEnum;
    'sugars'?: ProductMiscNutrientLevelsSugarsEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fat",
            "baseName": "fat",
            "type": "ProductMiscNutrientLevelsFatEnum",
            "format": ""
        },
        {
            "name": "salt",
            "baseName": "salt",
            "type": "ProductMiscNutrientLevelsSaltEnum",
            "format": ""
        },
        {
            "name": "saturated_fat",
            "baseName": "saturated-fat",
            "type": "ProductMiscNutrientLevelsSaturatedFatEnum",
            "format": ""
        },
        {
            "name": "sugars",
            "baseName": "sugars",
            "type": "ProductMiscNutrientLevelsSugarsEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductMiscNutrientLevels.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ProductMiscNutrientLevelsFatEnum {
    low = 'low',
    moderate = 'moderate',
    high = 'high'
}
export enum ProductMiscNutrientLevelsSaltEnum {
    low = 'low',
    moderate = 'moderate',
    high = 'high'
}
export enum ProductMiscNutrientLevelsSaturatedFatEnum {
    low = 'low',
    moderate = 'moderate',
    high = 'high'
}
export enum ProductMiscNutrientLevelsSugarsEnum {
    low = 'low',
    moderate = 'moderate',
    high = 'high'
}

