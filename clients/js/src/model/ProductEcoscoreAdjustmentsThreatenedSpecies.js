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

/**
 * The ProductEcoscoreAdjustmentsThreatenedSpecies model module.
 * @module model/ProductEcoscoreAdjustmentsThreatenedSpecies
 * @version 2
 */
class ProductEcoscoreAdjustmentsThreatenedSpecies {
    /**
     * Constructs a new <code>ProductEcoscoreAdjustmentsThreatenedSpecies</code>.
     * @alias module:model/ProductEcoscoreAdjustmentsThreatenedSpecies
     */
    constructor() { 
        
        ProductEcoscoreAdjustmentsThreatenedSpecies.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductEcoscoreAdjustmentsThreatenedSpecies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductEcoscoreAdjustmentsThreatenedSpecies} obj Optional instance to populate.
     * @return {module:model/ProductEcoscoreAdjustmentsThreatenedSpecies} The populated <code>ProductEcoscoreAdjustmentsThreatenedSpecies</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductEcoscoreAdjustmentsThreatenedSpecies();

            if (data.hasOwnProperty('ingredient')) {
                obj['ingredient'] = ApiClient.convertToType(data['ingredient'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductEcoscoreAdjustmentsThreatenedSpecies</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductEcoscoreAdjustmentsThreatenedSpecies</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingredient'] && !(typeof data['ingredient'] === 'string' || data['ingredient'] instanceof String)) {
            throw new Error("Expected the field `ingredient` to be a primitive type in the JSON string but got " + data['ingredient']);
        }

        return true;
    }


}



/**
 * @member {String} ingredient
 */
ProductEcoscoreAdjustmentsThreatenedSpecies.prototype['ingredient'] = undefined;

/**
 * @member {Number} value
 */
ProductEcoscoreAdjustmentsThreatenedSpecies.prototype['value'] = undefined;






export default ProductEcoscoreAdjustmentsThreatenedSpecies;

