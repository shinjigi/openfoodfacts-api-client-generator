/* tslint:disable */
/* eslint-disable */
/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: contact@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProductAttributeGroup
 */
export interface ProductAttributeGroup {
    /**
     * Unique id of the attribute.
     * 
     * It will be use to match against preferences parameters.
     * 
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    id?: string;
    /**
     * wether we have the information to really compute this criteria or not.
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    status?: ProductAttributeGroupStatusEnum;
    /**
     * A descriptive sentence about the situation of the product concerning attribute
     * 
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    title?: string;
    /**
     * a numeric value for the match,
     * telling how much the products ranks well for this particular attribute.
     * The higher the value, the better the match.
     * 
     * @type {number}
     * @memberof ProductAttributeGroup
     */
    match?: number;
    /**
     * every attribute as a grade for a to e
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    grade?: ProductAttributeGroupGradeEnum;
    /**
     * The name of attribute, for eventual display
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    name?: string;
    /**
     * an icon representing the attribute match (often using a color)
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    iconUrl?: string;
    /**
     * An eventual description of the value of the property upon which this attribute is based
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    description?: string;
    /**
     * An eventual short description of the value of the property upon which this attribute is based
     * @type {string}
     * @memberof ProductAttributeGroup
     */
    descriptionShort?: string;
}


/**
 * @export
 */
export const ProductAttributeGroupStatusEnum = {
    Known: 'known',
    Unknown: 'unknown'
} as const;
export type ProductAttributeGroupStatusEnum = typeof ProductAttributeGroupStatusEnum[keyof typeof ProductAttributeGroupStatusEnum];

/**
 * @export
 */
export const ProductAttributeGroupGradeEnum = {
    Unknown: 'unknown',
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e'
} as const;
export type ProductAttributeGroupGradeEnum = typeof ProductAttributeGroupGradeEnum[keyof typeof ProductAttributeGroupGradeEnum];


/**
 * Check if a given object implements the ProductAttributeGroup interface.
 */
export function instanceOfProductAttributeGroup(value: object): value is ProductAttributeGroup {
    return true;
}

export function ProductAttributeGroupFromJSON(json: any): ProductAttributeGroup {
    return ProductAttributeGroupFromJSONTyped(json, false);
}

export function ProductAttributeGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAttributeGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'status': json['status'] == null ? undefined : json['status'],
        'title': json['title'] == null ? undefined : json['title'],
        'match': json['match'] == null ? undefined : json['match'],
        'grade': json['grade'] == null ? undefined : json['grade'],
        'name': json['name'] == null ? undefined : json['name'],
        'iconUrl': json['icon_url'] == null ? undefined : json['icon_url'],
        'description': json['description'] == null ? undefined : json['description'],
        'descriptionShort': json['description_short'] == null ? undefined : json['description_short'],
    };
}

export function ProductAttributeGroupToJSON(value?: ProductAttributeGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'status': value['status'],
        'title': value['title'],
        'match': value['match'],
        'grade': value['grade'],
        'name': value['name'],
        'icon_url': value['iconUrl'],
        'description': value['description'],
        'description_short': value['descriptionShort'],
    };
}

