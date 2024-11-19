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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EcoscoreDataMissing model module.
 * @module model/EcoscoreDataMissing
 * @version 2
 */
class EcoscoreDataMissing {
    /**
     * Constructs a new <code>EcoscoreDataMissing</code>.
     * @alias module:model/EcoscoreDataMissing
     */
    constructor() { 
        
        EcoscoreDataMissing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EcoscoreDataMissing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EcoscoreDataMissing} obj Optional instance to populate.
     * @return {module:model/EcoscoreDataMissing} The populated <code>EcoscoreDataMissing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EcoscoreDataMissing();

            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], 'Number');
            }
            if (data.hasOwnProperty('origins')) {
                obj['origins'] = ApiClient.convertToType(data['origins'], 'Number');
            }
            if (data.hasOwnProperty('packagings')) {
                obj['packagings'] = ApiClient.convertToType(data['packagings'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EcoscoreDataMissing</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EcoscoreDataMissing</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} labels
 */
EcoscoreDataMissing.prototype['labels'] = undefined;

/**
 * @member {Number} origins
 */
EcoscoreDataMissing.prototype['origins'] = undefined;

/**
 * @member {Number} packagings
 */
EcoscoreDataMissing.prototype['packagings'] = undefined;






export default EcoscoreDataMissing;

