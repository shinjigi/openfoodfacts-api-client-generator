/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: reuse@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AdjustmentsPackagingItem from './AdjustmentsPackagingItem';

/**
 * The ProductEcoscoreAdjustmentsPackaging model module.
 * @module model/ProductEcoscoreAdjustmentsPackaging
 * @version 2
 */
class ProductEcoscoreAdjustmentsPackaging {
    /**
     * Constructs a new <code>ProductEcoscoreAdjustmentsPackaging</code>.
     * @alias module:model/ProductEcoscoreAdjustmentsPackaging
     */
    constructor() { 
        
        ProductEcoscoreAdjustmentsPackaging.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductEcoscoreAdjustmentsPackaging</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductEcoscoreAdjustmentsPackaging} obj Optional instance to populate.
     * @return {module:model/ProductEcoscoreAdjustmentsPackaging} The populated <code>ProductEcoscoreAdjustmentsPackaging</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductEcoscoreAdjustmentsPackaging();

            if (data.hasOwnProperty('non_recyclable_and_non_biodegradable_materials')) {
                obj['non_recyclable_and_non_biodegradable_materials'] = ApiClient.convertToType(data['non_recyclable_and_non_biodegradable_materials'], 'Number');
            }
            if (data.hasOwnProperty('packagings')) {
                obj['packagings'] = ApiClient.convertToType(data['packagings'], [AdjustmentsPackagingItem]);
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductEcoscoreAdjustmentsPackaging</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductEcoscoreAdjustmentsPackaging</code>.
     */
    static validateJSON(data) {
        if (data['packagings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['packagings'])) {
                throw new Error("Expected the field `packagings` to be an array in the JSON data but got " + data['packagings']);
            }
            // validate the optional field `packagings` (array)
            for (const item of data['packagings']) {
                AdjustmentsPackagingItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['warning'] && !(typeof data['warning'] === 'string' || data['warning'] instanceof String)) {
            throw new Error("Expected the field `warning` to be a primitive type in the JSON string but got " + data['warning']);
        }

        return true;
    }


}



/**
 * @member {Number} non_recyclable_and_non_biodegradable_materials
 */
ProductEcoscoreAdjustmentsPackaging.prototype['non_recyclable_and_non_biodegradable_materials'] = undefined;

/**
 * @member {Array.<module:model/AdjustmentsPackagingItem>} packagings
 */
ProductEcoscoreAdjustmentsPackaging.prototype['packagings'] = undefined;

/**
 * @member {Number} score
 */
ProductEcoscoreAdjustmentsPackaging.prototype['score'] = undefined;

/**
 * @member {Number} value
 */
ProductEcoscoreAdjustmentsPackaging.prototype['value'] = undefined;

/**
 * @member {String} warning
 */
ProductEcoscoreAdjustmentsPackaging.prototype['warning'] = undefined;






export default ProductEcoscoreAdjustmentsPackaging;

