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

import { Nutriscore2021Data } from '../models/Nutriscore2021Data';
import { HttpFile } from '../http/http';

export class Nutriscore2021 {
    'category_available'?: Nutriscore2021CategoryAvailableEnum;
    /**
    * Nutri-Score for the product as a letter.  See https://world.openfoodfacts.org/nutriscore. 
    */
    'grade'?: Nutriscore2021GradeEnum;
    'nutrients_available'?: Nutriscore2021NutrientsAvailableEnum;
    'nutriscore_applicable'?: Nutriscore2021NutriscoreApplicableEnum;
    'nutriscore_computed'?: Nutriscore2021NutriscoreComputedEnum;
    'score'?: number;
    'data'?: Nutriscore2021Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category_available",
            "baseName": "category_available",
            "type": "Nutriscore2021CategoryAvailableEnum",
            "format": ""
        },
        {
            "name": "grade",
            "baseName": "grade",
            "type": "Nutriscore2021GradeEnum",
            "format": ""
        },
        {
            "name": "nutrients_available",
            "baseName": "nutrients_available",
            "type": "Nutriscore2021NutrientsAvailableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_applicable",
            "baseName": "nutriscore_applicable",
            "type": "Nutriscore2021NutriscoreApplicableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_computed",
            "baseName": "nutriscore_computed",
            "type": "Nutriscore2021NutriscoreComputedEnum",
            "format": ""
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Nutriscore2021Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Nutriscore2021.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum Nutriscore2021CategoryAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore2021GradeEnum {
    a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e'
}
export enum Nutriscore2021NutrientsAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore2021NutriscoreApplicableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore2021NutriscoreComputedEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

