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
 * @interface EcoscoreDataAdjustmentsThreatenedSpecies
 */
export interface EcoscoreDataAdjustmentsThreatenedSpecies {
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAdjustmentsThreatenedSpecies
     */
    ingredient?: string;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAdjustmentsThreatenedSpecies
     */
    value?: number;
}

/**
 * Check if a given object implements the EcoscoreDataAdjustmentsThreatenedSpecies interface.
 */
export function instanceOfEcoscoreDataAdjustmentsThreatenedSpecies(value: object): value is EcoscoreDataAdjustmentsThreatenedSpecies {
    return true;
}

export function EcoscoreDataAdjustmentsThreatenedSpeciesFromJSON(json: any): EcoscoreDataAdjustmentsThreatenedSpecies {
    return EcoscoreDataAdjustmentsThreatenedSpeciesFromJSONTyped(json, false);
}

export function EcoscoreDataAdjustmentsThreatenedSpeciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcoscoreDataAdjustmentsThreatenedSpecies {
    if (json == null) {
        return json;
    }
    return {
        
        'ingredient': json['ingredient'] == null ? undefined : json['ingredient'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function EcoscoreDataAdjustmentsThreatenedSpeciesToJSON(value?: EcoscoreDataAdjustmentsThreatenedSpecies | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ingredient': value['ingredient'],
        'value': value['value'],
    };
}

