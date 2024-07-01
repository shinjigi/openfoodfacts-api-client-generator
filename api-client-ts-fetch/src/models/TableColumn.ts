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
 * @interface TableColumn
 */
export interface TableColumn {
    /**
     * 
     * @type {string}
     * @memberof TableColumn
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof TableColumn
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof TableColumn
     */
    textForSmallScreens?: string;
    /**
     * 
     * @type {string}
     * @memberof TableColumn
     */
    style?: string;
    /**
     * 
     * @type {string}
     * @memberof TableColumn
     */
    columnGroupId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TableColumn
     */
    shownByDefault?: boolean;
}

/**
 * Check if a given object implements the TableColumn interface.
 */
export function instanceOfTableColumn(value: object): value is TableColumn {
    return true;
}

export function TableColumnFromJSON(json: any): TableColumn {
    return TableColumnFromJSONTyped(json, false);
}

export function TableColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): TableColumn {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'text': json['text'] == null ? undefined : json['text'],
        'textForSmallScreens': json['text_for_small_screens'] == null ? undefined : json['text_for_small_screens'],
        'style': json['style'] == null ? undefined : json['style'],
        'columnGroupId': json['column_group_id'] == null ? undefined : json['column_group_id'],
        'shownByDefault': json['shown_by_default'] == null ? undefined : json['shown_by_default'],
    };
}

export function TableColumnToJSON(value?: TableColumn | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'text': value['text'],
        'text_for_small_screens': value['textForSmallScreens'],
        'style': value['style'],
        'column_group_id': value['columnGroupId'],
        'shown_by_default': value['shownByDefault'],
    };
}
