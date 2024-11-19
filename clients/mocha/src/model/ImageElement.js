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
 * The ImageElement model module.
 * @module model/ImageElement
 * @version 2
 */
class ImageElement {
    /**
     * Constructs a new <code>ImageElement</code>.
     * @alias module:model/ImageElement
     */
    constructor() { 
        
        ImageElement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageElement} obj Optional instance to populate.
     * @return {module:model/ImageElement} The populated <code>ImageElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageElement();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('alt_text')) {
                obj['alt_text'] = ApiClient.convertToType(data['alt_text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageElement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['alt_text'] && !(typeof data['alt_text'] === 'string' || data['alt_text'] instanceof String)) {
            throw new Error("Expected the field `alt_text` to be a primitive type in the JSON string but got " + data['alt_text']);
        }

        return true;
    }


}



/**
 * full URL of the image
 * @member {String} url
 */
ImageElement.prototype['url'] = undefined;

/**
 * Width of the image.  This is just a suggestion coming from the server,  the client may choose to use its own dimensions for the image. 
 * @member {Number} width
 */
ImageElement.prototype['width'] = undefined;

/**
 * Height of the image.  This is just a suggestion coming from the server, the client may choose to use its own dimensions for the image. 
 * @member {Number} height
 */
ImageElement.prototype['height'] = undefined;

/**
 * Alt Text of the image.
 * @member {String} alt_text
 */
ImageElement.prototype['alt_text'] = undefined;






export default ImageElement;

