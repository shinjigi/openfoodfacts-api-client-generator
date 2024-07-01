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
 * @interface EcoscoreDataAdjustmentsProductionSystem
 */
export interface EcoscoreDataAdjustmentsProductionSystem {
    /**
     * 
     * @type {Array<string>}
     * @memberof EcoscoreDataAdjustmentsProductionSystem
     */
    labels?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAdjustmentsProductionSystem
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAdjustmentsProductionSystem
     */
    warning?: string;
}

/**
 * Check if a given object implements the EcoscoreDataAdjustmentsProductionSystem interface.
 */
export function instanceOfEcoscoreDataAdjustmentsProductionSystem(value: object): value is EcoscoreDataAdjustmentsProductionSystem {
    return true;
}

export function EcoscoreDataAdjustmentsProductionSystemFromJSON(json: any): EcoscoreDataAdjustmentsProductionSystem {
    return EcoscoreDataAdjustmentsProductionSystemFromJSONTyped(json, false);
}

export function EcoscoreDataAdjustmentsProductionSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcoscoreDataAdjustmentsProductionSystem {
    if (json == null) {
        return json;
    }
    return {
        
        'labels': json['labels'] == null ? undefined : json['labels'],
        'value': json['value'] == null ? undefined : json['value'],
        'warning': json['warning'] == null ? undefined : json['warning'],
    };
}

export function EcoscoreDataAdjustmentsProductionSystemToJSON(value?: EcoscoreDataAdjustmentsProductionSystem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'labels': value['labels'],
        'value': value['value'],
        'warning': value['warning'],
    };
}

