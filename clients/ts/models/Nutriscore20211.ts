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

export class Nutriscore20211 {
    'category_available'?: Nutriscore20211CategoryAvailableEnum;
    'grade'?: Nutriscore20211GradeEnum;
    'nutrients_available'?: Nutriscore20211NutrientsAvailableEnum;
    'nutriscore_applicable'?: Nutriscore20211NutriscoreApplicableEnum;
    'nutriscore_computed'?: Nutriscore20211NutriscoreComputedEnum;
    'score'?: number;
    'data'?: Nutriscore2021Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category_available",
            "baseName": "category_available",
            "type": "Nutriscore20211CategoryAvailableEnum",
            "format": ""
        },
        {
            "name": "grade",
            "baseName": "grade",
            "type": "Nutriscore20211GradeEnum",
            "format": ""
        },
        {
            "name": "nutrients_available",
            "baseName": "nutrients_available",
            "type": "Nutriscore20211NutrientsAvailableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_applicable",
            "baseName": "nutriscore_applicable",
            "type": "Nutriscore20211NutriscoreApplicableEnum",
            "format": ""
        },
        {
            "name": "nutriscore_computed",
            "baseName": "nutriscore_computed",
            "type": "Nutriscore20211NutriscoreComputedEnum",
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
        return Nutriscore20211.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum Nutriscore20211CategoryAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20211GradeEnum {
    a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e'
}
export enum Nutriscore20211NutrientsAvailableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20211NutriscoreApplicableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum Nutriscore20211NutriscoreComputedEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

