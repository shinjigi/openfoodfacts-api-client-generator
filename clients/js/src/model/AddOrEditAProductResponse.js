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
 * The AddOrEditAProductResponse model module.
 * @module model/AddOrEditAProductResponse
 * @version 2
 */
class AddOrEditAProductResponse {
    /**
     * Constructs a new <code>AddOrEditAProductResponse</code>.
     * @alias module:model/AddOrEditAProductResponse
     */
    constructor() { 
        
        AddOrEditAProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddOrEditAProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddOrEditAProductResponse} obj Optional instance to populate.
     * @return {module:model/AddOrEditAProductResponse} The populated <code>AddOrEditAProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddOrEditAProductResponse();

            if (data.hasOwnProperty('status_verbose')) {
                obj['status_verbose'] = ApiClient.convertToType(data['status_verbose'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddOrEditAProductResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddOrEditAProductResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status_verbose'] && !(typeof data['status_verbose'] === 'string' || data['status_verbose'] instanceof String)) {
            throw new Error("Expected the field `status_verbose` to be a primitive type in the JSON string but got " + data['status_verbose']);
        }

        return true;
    }


}



/**
 * @member {String} status_verbose
 */
AddOrEditAProductResponse.prototype['status_verbose'] = undefined;

/**
 * @member {Number} status
 */
AddOrEditAProductResponse.prototype['status'] = undefined;






export default AddOrEditAProductResponse;
