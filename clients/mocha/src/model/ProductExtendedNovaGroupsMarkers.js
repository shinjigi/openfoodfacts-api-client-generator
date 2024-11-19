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
 * The ProductExtendedNovaGroupsMarkers model module.
 * @module model/ProductExtendedNovaGroupsMarkers
 * @version 2
 */
class ProductExtendedNovaGroupsMarkers {
    /**
     * Constructs a new <code>ProductExtendedNovaGroupsMarkers</code>.
     * Detail of ingredients or processing that makes the products having Nova 3 or 4 
     * @alias module:model/ProductExtendedNovaGroupsMarkers
     */
    constructor() { 
        
        ProductExtendedNovaGroupsMarkers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductExtendedNovaGroupsMarkers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductExtendedNovaGroupsMarkers} obj Optional instance to populate.
     * @return {module:model/ProductExtendedNovaGroupsMarkers} The populated <code>ProductExtendedNovaGroupsMarkers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductExtendedNovaGroupsMarkers();

            if (data.hasOwnProperty('3')) {
                obj['3'] = ApiClient.convertToType(data['3'], [['String']]);
            }
            if (data.hasOwnProperty('4')) {
                obj['4'] = ApiClient.convertToType(data['4'], [['String']]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductExtendedNovaGroupsMarkers</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductExtendedNovaGroupsMarkers</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['3'])) {
            throw new Error("Expected the field `3` to be an array in the JSON data but got " + data['3']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['4'])) {
            throw new Error("Expected the field `4` to be an array in the JSON data but got " + data['4']);
        }

        return true;
    }


}



/**
 * Markers of level 3 
 * @member {Array.<Array.<String>>} 3
 */
ProductExtendedNovaGroupsMarkers.prototype['3'] = undefined;

/**
 * Markers of level 4 
 * @member {Array.<Array.<String>>} 4
 */
ProductExtendedNovaGroupsMarkers.prototype['4'] = undefined;






export default ProductExtendedNovaGroupsMarkers;

