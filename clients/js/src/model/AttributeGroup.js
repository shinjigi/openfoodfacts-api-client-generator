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
import Attribute from './Attribute';

/**
 * The AttributeGroup model module.
 * @module model/AttributeGroup
 * @version 2
 */
class AttributeGroup {
    /**
     * Constructs a new <code>AttributeGroup</code>.
     * @alias module:model/AttributeGroup
     */
    constructor() { 
        
        AttributeGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeGroup} obj Optional instance to populate.
     * @return {module:model/AttributeGroup} The populated <code>AttributeGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeGroup</code>.
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
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                Attribute.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * unique id of the group
 * @member {String} id
 */
AttributeGroup.prototype['id'] = undefined;

/**
 * Name of the group
 * @member {String} name
 */
AttributeGroup.prototype['name'] = undefined;

/**
 * Attributes that are part of this group 
 * @member {Array.<module:model/Attribute>} attributes
 */
AttributeGroup.prototype['attributes'] = undefined;






export default AttributeGroup;

