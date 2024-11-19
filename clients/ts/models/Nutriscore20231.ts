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

import { Nutriscore2023Data } from '../models/Nutriscore2023Data';
import { HttpFile } from '../http/http';

export class Nutriscore20231 {
    'category_available'?: Nutriscore20231CategoryAvailableEnum;
    'grade'?: Nutriscore20231GradeEnum;
    'nutrients_available'?: Nutriscore20231NutrientsAvailableEnum;
    'nutriscore_applicable'?: Nutriscore20231NutriscoreApplicableEnum;
    'nutriscore_computed'?: Nutriscore20231NutriscoreComputedEnum;
    'score'?: number;
    'data'?: Nutriscore2023Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category_available",
            "baseName": "category_available",
            "type": "Nutriscore20231CategoryAvailableEnum",
            "format": ""
        },
        {
            "name": "grade",
            "baseName": "grade",
            "type": "Nutriscore20231GradeEnum",
            "format": ""
        },
        {
            "name": "nutrients_available",
            "baseName": "nutrients_available",
            "type": "Nutriscore20231NutrientsAvailableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_applicable",
            "baseName": "nutriscore_applicable",
            "type": "Nutriscore20231NutriscoreApplicableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_computed",
            "baseName": "nutriscore_computed",
            "type": "Nutriscore20231NutriscoreComputedEnum",
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
            "type": "Nutriscore2023Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Nutriscore20231.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum Nutriscore20231CategoryAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20231GradeEnum {
    a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e'
}
export enum Nutriscore20231NutrientsAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20231NutriscoreApplicableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20231NutriscoreComputedEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
