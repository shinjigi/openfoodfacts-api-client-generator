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
 * The RotateAPhotoResponseImage model module.
 * @module model/RotateAPhotoResponseImage
 * @version 2
 */
class RotateAPhotoResponseImage {
    /**
     * Constructs a new <code>RotateAPhotoResponseImage</code>.
     * @alias module:model/RotateAPhotoResponseImage
     */
    constructor() { 
        
        RotateAPhotoResponseImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RotateAPhotoResponseImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateAPhotoResponseImage} obj Optional instance to populate.
     * @return {module:model/RotateAPhotoResponseImage} The populated <code>RotateAPhotoResponseImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateAPhotoResponseImage();

            if (data.hasOwnProperty('display_url')) {
                obj['display_url'] = ApiClient.convertToType(data['display_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RotateAPhotoResponseImage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotateAPhotoResponseImage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['display_url'] && !(typeof data['display_url'] === 'string' || data['display_url'] instanceof String)) {
            throw new Error("Expected the field `display_url` to be a primitive type in the JSON string but got " + data['display_url']);
        }

        return true;
    }


}



/**
 * @member {String} display_url
 */
RotateAPhotoResponseImage.prototype['display_url'] = undefined;






export default RotateAPhotoResponseImage;
