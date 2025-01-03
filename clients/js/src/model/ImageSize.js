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
 * The ImageSize model module.
 * @module model/ImageSize
 * @version 2
 */
class ImageSize {
    /**
     * Constructs a new <code>ImageSize</code>.
     * properties of fullsize image **TODO** explain how to compute name 
     * @alias module:model/ImageSize
     */
    constructor() { 
        
        ImageSize.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageSize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageSize} obj Optional instance to populate.
     * @return {module:model/ImageSize} The populated <code>ImageSize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageSize();

            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], 'Number');
            }
            if (data.hasOwnProperty('w')) {
                obj['w'] = ApiClient.convertToType(data['w'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageSize</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageSize</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The height of the reduced/full image in pixels. 
 * @member {Number} h
 */
ImageSize.prototype['h'] = undefined;

/**
 * The width of the reduced/full image in pixels. 
 * @member {Number} w
 */
ImageSize.prototype['w'] = undefined;






export default ImageSize;

