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

export class AdjustmentsPackagingItem {
    'ecoscore_material_score'?: number;
    'ecoscore_shape_ratio'?: number;
    'material'?: string;
    'shape'?: string;
    'number_of_units'?: number;
    'quantity_per_unit'?: string;
    'quantity_per_unit_unit'?: string;
    'quantity_per_unit_value'?: number;
    'recycling'?: string;
    'weight_measured'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ecoscore_material_score",
            "baseName": "ecoscore_material_score",
            "type": "number",
            "format": ""
        },
        {
            "name": "ecoscore_shape_ratio",
            "baseName": "ecoscore_shape_ratio",
            "type": "number",
            "format": ""
        },
        {
            "name": "material",
            "baseName": "material",
            "type": "string",
            "format": ""
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "string",
            "format": ""
        },
        {
            "name": "number_of_units",
            "baseName": "number_of_units",
            "type": "number",
            "format": ""
        },
        {
            "name": "quantity_per_unit",
            "baseName": "quantity_per_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity_per_unit_unit",
            "baseName": "quantity_per_unit_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity_per_unit_value",
            "baseName": "quantity_per_unit_value",
            "type": "number",
            "format": ""
        },
        {
            "name": "recycling",
            "baseName": "recycling",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight_measured",
            "baseName": "weight_measured",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AdjustmentsPackagingItem.attributeTypeMap;
    }

    public constructor() {
    }
}