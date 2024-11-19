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
import ProductImagesFrontSizes from './ProductImagesFrontSizes';

/**
 * The ProductImagesFront model module.
 * @module model/ProductImagesFront
 * @version 2
 */
class ProductImagesFront {
    /**
     * Constructs a new <code>ProductImagesFront</code>.
     * property of an image (or part thereof) selected for a particular role and a particular language. 
     * @alias module:model/ProductImagesFront
     */
    constructor() { 
        
        ProductImagesFront.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImagesFront</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductImagesFront} obj Optional instance to populate.
     * @return {module:model/ProductImagesFront} The populated <code>ProductImagesFront</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImagesFront();

            if (data.hasOwnProperty('angle')) {
                obj['angle'] = ApiClient.convertToType(data['angle'], 'Number');
            }
            if (data.hasOwnProperty('coordinates_image_size')) {
                obj['coordinates_image_size'] = ApiClient.convertToType(data['coordinates_image_size'], 'String');
            }
            if (data.hasOwnProperty('geometry')) {
                obj['geometry'] = ApiClient.convertToType(data['geometry'], 'String');
            }
            if (data.hasOwnProperty('imgid')) {
                obj['imgid'] = ApiClient.convertToType(data['imgid'], 'String');
            }
            if (data.hasOwnProperty('normalize')) {
                obj['normalize'] = ApiClient.convertToType(data['normalize'], Object);
            }
            if (data.hasOwnProperty('rev')) {
                obj['rev'] = ApiClient.convertToType(data['rev'], 'String');
            }
            if (data.hasOwnProperty('sizes')) {
                obj['sizes'] = ProductImagesFrontSizes.constructFromObject(data['sizes']);
            }
            if (data.hasOwnProperty('white_magic')) {
                obj['white_magic'] = ApiClient.convertToType(data['white_magic'], Object);
            }
            if (data.hasOwnProperty('x1')) {
                obj['x1'] = ApiClient.convertToType(data['x1'], 'String');
            }
            if (data.hasOwnProperty('x2')) {
                obj['x2'] = ApiClient.convertToType(data['x2'], 'String');
            }
            if (data.hasOwnProperty('y1')) {
                obj['y1'] = ApiClient.convertToType(data['y1'], 'String');
            }
            if (data.hasOwnProperty('y2')) {
                obj['y2'] = ApiClient.convertToType(data['y2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductImagesFront</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductImagesFront</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['coordinates_image_size'] && !(typeof data['coordinates_image_size'] === 'string' || data['coordinates_image_size'] instanceof String)) {
            throw new Error("Expected the field `coordinates_image_size` to be a primitive type in the JSON string but got " + data['coordinates_image_size']);
        }
        // ensure the json data is a string
        if (data['geometry'] && !(typeof data['geometry'] === 'string' || data['geometry'] instanceof String)) {
            throw new Error("Expected the field `geometry` to be a primitive type in the JSON string but got " + data['geometry']);
        }
        // ensure the json data is a string
        if (data['imgid'] && !(typeof data['imgid'] === 'string' || data['imgid'] instanceof String)) {
            throw new Error("Expected the field `imgid` to be a primitive type in the JSON string but got " + data['imgid']);
        }
        // ensure the json data is a string
        if (data['rev'] && !(typeof data['rev'] === 'string' || data['rev'] instanceof String)) {
            throw new Error("Expected the field `rev` to be a primitive type in the JSON string but got " + data['rev']);
        }
        // validate the optional field `sizes`
        if (data['sizes']) { // data not null
          ProductImagesFrontSizes.validateJSON(data['sizes']);
        }
        // ensure the json data is a string
        if (data['x1'] && !(typeof data['x1'] === 'string' || data['x1'] instanceof String)) {
            throw new Error("Expected the field `x1` to be a primitive type in the JSON string but got " + data['x1']);
        }
        // ensure the json data is a string
        if (data['x2'] && !(typeof data['x2'] === 'string' || data['x2'] instanceof String)) {
            throw new Error("Expected the field `x2` to be a primitive type in the JSON string but got " + data['x2']);
        }
        // ensure the json data is a string
        if (data['y1'] && !(typeof data['y1'] === 'string' || data['y1'] instanceof String)) {
            throw new Error("Expected the field `y1` to be a primitive type in the JSON string but got " + data['y1']);
        }
        // ensure the json data is a string
        if (data['y2'] && !(typeof data['y2'] === 'string' || data['y2'] instanceof String)) {
            throw new Error("Expected the field `y2` to be a primitive type in the JSON string but got " + data['y2']);
        }

        return true;
    }


}



/**
 * The angle of the image rotation (if it was rotated).
 * @member {Number} angle
 */
ProductImagesFront.prototype['angle'] = undefined;

/**
 * @member {String} coordinates_image_size
 */
ProductImagesFront.prototype['coordinates_image_size'] = undefined;

/**
 * @member {String} geometry
 */
ProductImagesFront.prototype['geometry'] = undefined;

/**
 * The id of the original/source image that was selected to edit(rotate, normalize etc) to produce this new image.
 * @member {String} imgid
 */
ProductImagesFront.prototype['imgid'] = undefined;

/**
 * Normalize colors.
 * @member {Object} normalize
 */
ProductImagesFront.prototype['normalize'] = undefined;

/**
 * @member {String} rev
 */
ProductImagesFront.prototype['rev'] = undefined;

/**
 * @member {module:model/ProductImagesFrontSizes} sizes
 */
ProductImagesFront.prototype['sizes'] = undefined;

/**
 * Photo on white background : Try to remove the background. 
 * @member {Object} white_magic
 */
ProductImagesFront.prototype['white_magic'] = undefined;

/**
 * @member {String} x1
 */
ProductImagesFront.prototype['x1'] = undefined;

/**
 * @member {String} x2
 */
ProductImagesFront.prototype['x2'] = undefined;

/**
 * @member {String} y1
 */
ProductImagesFront.prototype['y1'] = undefined;

/**
 * @member {String} y2
 */
ProductImagesFront.prototype['y2'] = undefined;






export default ProductImagesFront;

