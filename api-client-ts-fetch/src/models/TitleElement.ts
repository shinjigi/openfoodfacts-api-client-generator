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
 * The title of a panel.
 * @export
 * @interface TitleElement
 */
export interface TitleElement {
    /**
     * 
     * @type {string}
     * @memberof TitleElement
     */
    title?: string;
    /**
     * Indicates that the panel corresponds to a A to E grade such as the Nutri-Score of the Eco-Score.
     * @type {string}
     * @memberof TitleElement
     */
    grade?: TitleElementGradeEnum;
    /**
     * 
     * @type {string}
     * @memberof TitleElement
     */
    iconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TitleElement
     */
    iconColorFromEvaluation?: string;
    /**
     * If set to "small", the icon should be displayed at a small size.
     * 
     * @type {string}
     * @memberof TitleElement
     */
    iconSize?: string;
    /**
     * Used to indicate a special type for the title, such as "grade" for Nutri-Score and Eco-Score.
     * @type {string}
     * @memberof TitleElement
     */
    type?: string;
}


/**
 * @export
 */
export const TitleElementGradeEnum = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    Unknown: 'unknown'
} as const;
export type TitleElementGradeEnum = typeof TitleElementGradeEnum[keyof typeof TitleElementGradeEnum];


/**
 * Check if a given object implements the TitleElement interface.
 */
export function instanceOfTitleElement(value: object): value is TitleElement {
    return true;
}

export function TitleElementFromJSON(json: any): TitleElement {
    return TitleElementFromJSONTyped(json, false);
}

export function TitleElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): TitleElement {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'grade': json['grade'] == null ? undefined : json['grade'],
        'iconUrl': json['icon_url'] == null ? undefined : json['icon_url'],
        'iconColorFromEvaluation': json['icon_color_from_evaluation'] == null ? undefined : json['icon_color_from_evaluation'],
        'iconSize': json['icon_size'] == null ? undefined : json['icon_size'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function TitleElementToJSON(value?: TitleElement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'grade': value['grade'],
        'icon_url': value['iconUrl'],
        'icon_color_from_evaluation': value['iconColorFromEvaluation'],
        'icon_size': value['iconSize'],
        'type': value['type'],
    };
}

