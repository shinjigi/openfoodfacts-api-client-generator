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
import ImageSizes from './ImageSizes';

/**
 * The Image model module.
 * @module model/Image
 * @version 2
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * This object represent an image that was uploaded to a product. \&quot;imgid\&quot; is an integer which is a sequential number unique to each picture. 
     * @alias module:model/Image
     */
    constructor() { 
        
        Image.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('sizes')) {
                obj['sizes'] = ImageSizes.constructFromObject(data['sizes']);
            }
            if (data.hasOwnProperty('uploaded_t')) {
                obj['uploaded_t'] = ApiClient.convertToType(data['uploaded_t'], 'String');
            }
            if (data.hasOwnProperty('uploader')) {
                obj['uploader'] = ApiClient.convertToType(data['uploader'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Image</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Image</code>.
     */
    static validateJSON(data) {
        // validate the optional field `sizes`
        if (data['sizes']) { // data not null
          ImageSizes.validateJSON(data['sizes']);
        }
        // ensure the json data is a string
        if (data['uploaded_t'] && !(typeof data['uploaded_t'] === 'string' || data['uploaded_t'] instanceof String)) {
            throw new Error("Expected the field `uploaded_t` to be a primitive type in the JSON string but got " + data['uploaded_t']);
        }
        // ensure the json data is a string
        if (data['uploader'] && !(typeof data['uploader'] === 'string' || data['uploader'] instanceof String)) {
            throw new Error("Expected the field `uploader` to be a primitive type in the JSON string but got " + data['uploader']);
        }

        return true;
    }


}



/**
 * @member {module:model/ImageSizes} sizes
 */
Image.prototype['sizes'] = undefined;

/**
 * The time the image was uploaded (as unix timestamp). 
 * @member {String} uploaded_t
 */
Image.prototype['uploaded_t'] = undefined;

/**
 * The contributor that uploaded the image. 
 * @member {String} uploader
 */
Image.prototype['uploader'] = undefined;






export default Image;
