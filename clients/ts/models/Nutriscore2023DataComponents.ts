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

import { NutriscoreComponent } from '../models/NutriscoreComponent';
import { HttpFile } from '../http/http';

export class Nutriscore2023DataComponents {
    'negative'?: Array<NutriscoreComponent>;
    'positive'?: Array<NutriscoreComponent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "negative",
            "baseName": "negative",
            "type": "Array<NutriscoreComponent>",
            "format": ""
        },
        {
            "name": "positive",
            "baseName": "positive",
            "type": "Array<NutriscoreComponent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Nutriscore2023DataComponents.attributeTypeMap;
    }

    public constructor() {
    }
}
