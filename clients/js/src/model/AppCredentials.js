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
 * The AppCredentials model module.
 * @module model/AppCredentials
 * @version 2
 */
class AppCredentials {
    /**
     * Constructs a new <code>AppCredentials</code>.
     * Schema for application credentials
     * @alias module:model/AppCredentials
     * @param app_name {String} Name of the application
     * @param app_version {String} Version of the application
     * @param app_uuid {String} A salted random uuid (Unique identifier) for the user so that Open Food Facts moderators  can selectively ban any problematic user without banning your whole app account. 
     */
    constructor(app_name, app_version, app_uuid) { 
        
        AppCredentials.initialize(this, app_name, app_version, app_uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, app_name, app_version, app_uuid) { 
        obj['app_name'] = app_name;
        obj['app_version'] = app_version;
        obj['app_uuid'] = app_uuid;
    }

    /**
     * Constructs a <code>AppCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppCredentials} obj Optional instance to populate.
     * @return {module:model/AppCredentials} The populated <code>AppCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppCredentials();

            if (data.hasOwnProperty('app_name')) {
                obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
            }
            if (data.hasOwnProperty('app_version')) {
                obj['app_version'] = ApiClient.convertToType(data['app_version'], 'String');
            }
            if (data.hasOwnProperty('app_uuid')) {
                obj['app_uuid'] = ApiClient.convertToType(data['app_uuid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AppCredentials</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AppCredentials</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AppCredentials.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['app_name'] && !(typeof data['app_name'] === 'string' || data['app_name'] instanceof String)) {
            throw new Error("Expected the field `app_name` to be a primitive type in the JSON string but got " + data['app_name']);
        }
        // ensure the json data is a string
        if (data['app_version'] && !(typeof data['app_version'] === 'string' || data['app_version'] instanceof String)) {
            throw new Error("Expected the field `app_version` to be a primitive type in the JSON string but got " + data['app_version']);
        }
        // ensure the json data is a string
        if (data['app_uuid'] && !(typeof data['app_uuid'] === 'string' || data['app_uuid'] instanceof String)) {
            throw new Error("Expected the field `app_uuid` to be a primitive type in the JSON string but got " + data['app_uuid']);
        }

        return true;
    }


}

AppCredentials.RequiredProperties = ["app_name", "app_version", "app_uuid"];

/**
 * Name of the application
 * @member {String} app_name
 */
AppCredentials.prototype['app_name'] = undefined;

/**
 * Version of the application
 * @member {String} app_version
 */
AppCredentials.prototype['app_version'] = undefined;

/**
 * A salted random uuid (Unique identifier) for the user so that Open Food Facts moderators  can selectively ban any problematic user without banning your whole app account. 
 * @member {String} app_uuid
 */
AppCredentials.prototype['app_uuid'] = undefined;






export default AppCredentials;
