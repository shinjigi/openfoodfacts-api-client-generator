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
 * The GetPreferences200ResponseInner model module.
 * @module model/GetPreferences200ResponseInner
 * @version 2
 */
class GetPreferences200ResponseInner {
    /**
     * Constructs a new <code>GetPreferences200ResponseInner</code>.
     * @alias module:model/GetPreferences200ResponseInner
     */
    constructor() { 
        
        GetPreferences200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPreferences200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPreferences200ResponseInner} obj Optional instance to populate.
     * @return {module:model/GetPreferences200ResponseInner} The populated <code>GetPreferences200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPreferences200ResponseInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('factor')) {
                obj['factor'] = ApiClient.convertToType(data['factor'], 'Number');
            }
            if (data.hasOwnProperty('minimum_match')) {
                obj['minimum_match'] = ApiClient.convertToType(data['minimum_match'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPreferences200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPreferences200ResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * id for the setting value
 * @member {module:model/GetPreferences200ResponseInner.IdEnum} id
 */
GetPreferences200ResponseInner.prototype['id'] = undefined;

/**
 * name for the setting value, translated according to `lc` parameter
 * @member {String} name
 */
GetPreferences200ResponseInner.prototype['name'] = undefined;

/**
 * factor to apply to the property of the product corresponding to attributes having this setting value 
 * @member {Number} factor
 */
GetPreferences200ResponseInner.prototype['factor'] = undefined;

/**
 * FIXME 
 * @member {Number} minimum_match
 */
GetPreferences200ResponseInner.prototype['minimum_match'] = undefined;





/**
 * Allowed values for the <code>id</code> property.
 * @enum {String}
 * @readonly
 */
GetPreferences200ResponseInner['IdEnum'] = {

    /**
     * value: "not_important"
     * @const
     */
    "not_important": "not_important",

    /**
     * value: "important"
     * @const
     */
    "important": "important",

    /**
     * value: "very_important"
     * @const
     */
    "very_important": "very_important",

    /**
     * value: "mandatory"
     * @const
     */
    "mandatory": "mandatory"
};



export default GetPreferences200ResponseInner;
