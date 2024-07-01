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
 * Panels can include other panels as sub-panels using the panel_element.
 * @export
 * @interface PanelElement
 */
export interface PanelElement {
    /**
     * The id of the panel to include. The id is the key of the panel in the panels object returned in the knowledge_panels field.
     * @type {string}
     * @memberof PanelElement
     */
    panelId?: string;
}

/**
 * Check if a given object implements the PanelElement interface.
 */
export function instanceOfPanelElement(value: object): value is PanelElement {
    return true;
}

export function PanelElementFromJSON(json: any): PanelElement {
    return PanelElementFromJSONTyped(json, false);
}

export function PanelElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PanelElement {
    if (json == null) {
        return json;
    }
    return {
        
        'panelId': json['panel_id'] == null ? undefined : json['panel_id'],
    };
}

export function PanelElementToJSON(value?: PanelElement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'panel_id': value['panelId'],
    };
}
