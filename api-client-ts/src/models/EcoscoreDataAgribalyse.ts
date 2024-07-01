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
 * @interface EcoscoreDataAgribalyse
 */
export interface EcoscoreDataAgribalyse {
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAgribalyse
     */
    agribalyseFoodCode?: string;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Agriculture?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Consumption?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Distribution?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Packaging?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Processing?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Total?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    co2Transportation?: number;
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAgribalyse
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAgribalyse
     */
    dqr?: string;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efAgriculture?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efConsumption?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efDistribution?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efPackaging?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efProcessing?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    efTransportation?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    isBeverage?: number;
    /**
     * This can be returned in many other languages
     * like name_fr (for french).
     * 
     * @type {string}
     * @memberof EcoscoreDataAgribalyse
     */
    nameEn?: string;
    /**
     * 
     * @type {number}
     * @memberof EcoscoreDataAgribalyse
     */
    score?: number;
    /**
     * 
     * @type {string}
     * @memberof EcoscoreDataAgribalyse
     */
    version?: string;
}

/**
 * Check if a given object implements the EcoscoreDataAgribalyse interface.
 */
export function instanceOfEcoscoreDataAgribalyse(value: object): value is EcoscoreDataAgribalyse {
    return true;
}

export function EcoscoreDataAgribalyseFromJSON(json: any): EcoscoreDataAgribalyse {
    return EcoscoreDataAgribalyseFromJSONTyped(json, false);
}

export function EcoscoreDataAgribalyseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcoscoreDataAgribalyse {
    if (json == null) {
        return json;
    }
    return {
        
        'agribalyseFoodCode': json['agribalyse_food_code'] == null ? undefined : json['agribalyse_food_code'],
        'co2Agriculture': json['co2_agriculture'] == null ? undefined : json['co2_agriculture'],
        'co2Consumption': json['co2_consumption'] == null ? undefined : json['co2_consumption'],
        'co2Distribution': json['co2_distribution'] == null ? undefined : json['co2_distribution'],
        'co2Packaging': json['co2_packaging'] == null ? undefined : json['co2_packaging'],
        'co2Processing': json['co2_processing'] == null ? undefined : json['co2_processing'],
        'co2Total': json['co2_total'] == null ? undefined : json['co2_total'],
        'co2Transportation': json['co2_transportation'] == null ? undefined : json['co2_transportation'],
        'code': json['code'] == null ? undefined : json['code'],
        'dqr': json['dqr'] == null ? undefined : json['dqr'],
        'efAgriculture': json['ef_agriculture'] == null ? undefined : json['ef_agriculture'],
        'efConsumption': json['ef_consumption'] == null ? undefined : json['ef_consumption'],
        'efDistribution': json['ef_distribution'] == null ? undefined : json['ef_distribution'],
        'efPackaging': json['ef_packaging'] == null ? undefined : json['ef_packaging'],
        'efProcessing': json['ef_processing'] == null ? undefined : json['ef_processing'],
        'efTotal': json['ef_total'] == null ? undefined : json['ef_total'],
        'efTransportation': json['ef_transportation'] == null ? undefined : json['ef_transportation'],
        'isBeverage': json['is_beverage'] == null ? undefined : json['is_beverage'],
        'nameEn': json['name_en'] == null ? undefined : json['name_en'],
        'score': json['score'] == null ? undefined : json['score'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function EcoscoreDataAgribalyseToJSON(value?: EcoscoreDataAgribalyse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'agribalyse_food_code': value['agribalyseFoodCode'],
        'co2_agriculture': value['co2Agriculture'],
        'co2_consumption': value['co2Consumption'],
        'co2_distribution': value['co2Distribution'],
        'co2_packaging': value['co2Packaging'],
        'co2_processing': value['co2Processing'],
        'co2_total': value['co2Total'],
        'co2_transportation': value['co2Transportation'],
        'code': value['code'],
        'dqr': value['dqr'],
        'ef_agriculture': value['efAgriculture'],
        'ef_consumption': value['efConsumption'],
        'ef_distribution': value['efDistribution'],
        'ef_packaging': value['efPackaging'],
        'ef_processing': value['efProcessing'],
        'ef_total': value['efTotal'],
        'ef_transportation': value['efTransportation'],
        'is_beverage': value['isBeverage'],
        'name_en': value['nameEn'],
        'score': value['score'],
        'version': value['version'],
    };
}
