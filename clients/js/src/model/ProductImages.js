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
import ProductImagesProperties from './ProductImagesProperties';
import ProductSelectedImages from './ProductSelectedImages';

/**
 * The ProductImages model module.
 * @module model/ProductImages
 * @version 2
 */
class ProductImages {
    /**
     * Constructs a new <code>ProductImages</code>.
     * Information about Images of a product.  Images ensure the reliability of Open Food Facts data. It provides a primary source and proof of all the structured data. You may therefore want to display it along the structured information.  See also tutorials about images: * [Getting images](https://openfoodfacts.github.io/openfoodfacts-server/api/how-to-download-images/) * [Uploading images](https://openfoodfacts.github.io/openfoodfacts-server/api/tutorial-uploading-photo-to-a-product/) 
     * @alias module:model/ProductImages
     */
    constructor() { 
        
        ProductImages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductImages} obj Optional instance to populate.
     * @return {module:model/ProductImages} The populated <code>ProductImages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImages();

            if (data.hasOwnProperty('image_front_small_url')) {
                obj['image_front_small_url'] = ApiClient.convertToType(data['image_front_small_url'], 'String');
            }
            if (data.hasOwnProperty('image_front_thumb_url')) {
                obj['image_front_thumb_url'] = ApiClient.convertToType(data['image_front_thumb_url'], 'String');
            }
            if (data.hasOwnProperty('image_front_url')) {
                obj['image_front_url'] = ApiClient.convertToType(data['image_front_url'], 'String');
            }
            if (data.hasOwnProperty('image_ingredients_small_url')) {
                obj['image_ingredients_small_url'] = ApiClient.convertToType(data['image_ingredients_small_url'], 'String');
            }
            if (data.hasOwnProperty('image_ingredients_thumb_url')) {
                obj['image_ingredients_thumb_url'] = ApiClient.convertToType(data['image_ingredients_thumb_url'], 'String');
            }
            if (data.hasOwnProperty('image_ingredients_url')) {
                obj['image_ingredients_url'] = ApiClient.convertToType(data['image_ingredients_url'], 'String');
            }
            if (data.hasOwnProperty('image_packaging_small_url')) {
                obj['image_packaging_small_url'] = ApiClient.convertToType(data['image_packaging_small_url'], 'String');
            }
            if (data.hasOwnProperty('image_packaging_thumb_url')) {
                obj['image_packaging_thumb_url'] = ApiClient.convertToType(data['image_packaging_thumb_url'], 'String');
            }
            if (data.hasOwnProperty('image_packaging_url')) {
                obj['image_packaging_url'] = ApiClient.convertToType(data['image_packaging_url'], 'String');
            }
            if (data.hasOwnProperty('image_nutrition_small_url')) {
                obj['image_nutrition_small_url'] = ApiClient.convertToType(data['image_nutrition_small_url'], 'String');
            }
            if (data.hasOwnProperty('image_nutrition_thumb_url')) {
                obj['image_nutrition_thumb_url'] = ApiClient.convertToType(data['image_nutrition_thumb_url'], 'String');
            }
            if (data.hasOwnProperty('image_nutrition_url')) {
                obj['image_nutrition_url'] = ApiClient.convertToType(data['image_nutrition_url'], 'String');
            }
            if (data.hasOwnProperty('image_small_url')) {
                obj['image_small_url'] = ApiClient.convertToType(data['image_small_url'], 'String');
            }
            if (data.hasOwnProperty('image_thumb_url')) {
                obj['image_thumb_url'] = ApiClient.convertToType(data['image_thumb_url'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ProductImagesProperties.constructFromObject(data['images']);
            }
            if (data.hasOwnProperty('last_image_dates_tags')) {
                obj['last_image_dates_tags'] = ApiClient.convertToType(data['last_image_dates_tags'], ['String']);
            }
            if (data.hasOwnProperty('last_image_t')) {
                obj['last_image_t'] = ApiClient.convertToType(data['last_image_t'], 'Number');
            }
            if (data.hasOwnProperty('selected_images')) {
                obj['selected_images'] = ProductSelectedImages.constructFromObject(data['selected_images']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductImages</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductImages</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image_front_small_url'] && !(typeof data['image_front_small_url'] === 'string' || data['image_front_small_url'] instanceof String)) {
            throw new Error("Expected the field `image_front_small_url` to be a primitive type in the JSON string but got " + data['image_front_small_url']);
        }
        // ensure the json data is a string
        if (data['image_front_thumb_url'] && !(typeof data['image_front_thumb_url'] === 'string' || data['image_front_thumb_url'] instanceof String)) {
            throw new Error("Expected the field `image_front_thumb_url` to be a primitive type in the JSON string but got " + data['image_front_thumb_url']);
        }
        // ensure the json data is a string
        if (data['image_front_url'] && !(typeof data['image_front_url'] === 'string' || data['image_front_url'] instanceof String)) {
            throw new Error("Expected the field `image_front_url` to be a primitive type in the JSON string but got " + data['image_front_url']);
        }
        // ensure the json data is a string
        if (data['image_ingredients_small_url'] && !(typeof data['image_ingredients_small_url'] === 'string' || data['image_ingredients_small_url'] instanceof String)) {
            throw new Error("Expected the field `image_ingredients_small_url` to be a primitive type in the JSON string but got " + data['image_ingredients_small_url']);
        }
        // ensure the json data is a string
        if (data['image_ingredients_thumb_url'] && !(typeof data['image_ingredients_thumb_url'] === 'string' || data['image_ingredients_thumb_url'] instanceof String)) {
            throw new Error("Expected the field `image_ingredients_thumb_url` to be a primitive type in the JSON string but got " + data['image_ingredients_thumb_url']);
        }
        // ensure the json data is a string
        if (data['image_ingredients_url'] && !(typeof data['image_ingredients_url'] === 'string' || data['image_ingredients_url'] instanceof String)) {
            throw new Error("Expected the field `image_ingredients_url` to be a primitive type in the JSON string but got " + data['image_ingredients_url']);
        }
        // ensure the json data is a string
        if (data['image_packaging_small_url'] && !(typeof data['image_packaging_small_url'] === 'string' || data['image_packaging_small_url'] instanceof String)) {
            throw new Error("Expected the field `image_packaging_small_url` to be a primitive type in the JSON string but got " + data['image_packaging_small_url']);
        }
        // ensure the json data is a string
        if (data['image_packaging_thumb_url'] && !(typeof data['image_packaging_thumb_url'] === 'string' || data['image_packaging_thumb_url'] instanceof String)) {
            throw new Error("Expected the field `image_packaging_thumb_url` to be a primitive type in the JSON string but got " + data['image_packaging_thumb_url']);
        }
        // ensure the json data is a string
        if (data['image_packaging_url'] && !(typeof data['image_packaging_url'] === 'string' || data['image_packaging_url'] instanceof String)) {
            throw new Error("Expected the field `image_packaging_url` to be a primitive type in the JSON string but got " + data['image_packaging_url']);
        }
        // ensure the json data is a string
        if (data['image_nutrition_small_url'] && !(typeof data['image_nutrition_small_url'] === 'string' || data['image_nutrition_small_url'] instanceof String)) {
            throw new Error("Expected the field `image_nutrition_small_url` to be a primitive type in the JSON string but got " + data['image_nutrition_small_url']);
        }
        // ensure the json data is a string
        if (data['image_nutrition_thumb_url'] && !(typeof data['image_nutrition_thumb_url'] === 'string' || data['image_nutrition_thumb_url'] instanceof String)) {
            throw new Error("Expected the field `image_nutrition_thumb_url` to be a primitive type in the JSON string but got " + data['image_nutrition_thumb_url']);
        }
        // ensure the json data is a string
        if (data['image_nutrition_url'] && !(typeof data['image_nutrition_url'] === 'string' || data['image_nutrition_url'] instanceof String)) {
            throw new Error("Expected the field `image_nutrition_url` to be a primitive type in the JSON string but got " + data['image_nutrition_url']);
        }
        // ensure the json data is a string
        if (data['image_small_url'] && !(typeof data['image_small_url'] === 'string' || data['image_small_url'] instanceof String)) {
            throw new Error("Expected the field `image_small_url` to be a primitive type in the JSON string but got " + data['image_small_url']);
        }
        // ensure the json data is a string
        if (data['image_thumb_url'] && !(typeof data['image_thumb_url'] === 'string' || data['image_thumb_url'] instanceof String)) {
            throw new Error("Expected the field `image_thumb_url` to be a primitive type in the JSON string but got " + data['image_thumb_url']);
        }
        // ensure the json data is a string
        if (data['image_url'] && !(typeof data['image_url'] === 'string' || data['image_url'] instanceof String)) {
            throw new Error("Expected the field `image_url` to be a primitive type in the JSON string but got " + data['image_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['last_image_dates_tags'])) {
            throw new Error("Expected the field `last_image_dates_tags` to be an array in the JSON data but got " + data['last_image_dates_tags']);
        }
        // validate the optional field `selected_images`
        if (data['selected_images']) { // data not null
          ProductSelectedImages.validateJSON(data['selected_images']);
        }

        return true;
    }


}



/**
 * @member {String} image_front_small_url
 */
ProductImages.prototype['image_front_small_url'] = undefined;

/**
 * @member {String} image_front_thumb_url
 */
ProductImages.prototype['image_front_thumb_url'] = undefined;

/**
 * @member {String} image_front_url
 */
ProductImages.prototype['image_front_url'] = undefined;

/**
 * @member {String} image_ingredients_small_url
 */
ProductImages.prototype['image_ingredients_small_url'] = undefined;

/**
 * @member {String} image_ingredients_thumb_url
 */
ProductImages.prototype['image_ingredients_thumb_url'] = undefined;

/**
 * @member {String} image_ingredients_url
 */
ProductImages.prototype['image_ingredients_url'] = undefined;

/**
 * @member {String} image_packaging_small_url
 */
ProductImages.prototype['image_packaging_small_url'] = undefined;

/**
 * @member {String} image_packaging_thumb_url
 */
ProductImages.prototype['image_packaging_thumb_url'] = undefined;

/**
 * @member {String} image_packaging_url
 */
ProductImages.prototype['image_packaging_url'] = undefined;

/**
 * @member {String} image_nutrition_small_url
 */
ProductImages.prototype['image_nutrition_small_url'] = undefined;

/**
 * @member {String} image_nutrition_thumb_url
 */
ProductImages.prototype['image_nutrition_thumb_url'] = undefined;

/**
 * @member {String} image_nutrition_url
 */
ProductImages.prototype['image_nutrition_url'] = undefined;

/**
 * @member {String} image_small_url
 */
ProductImages.prototype['image_small_url'] = undefined;

/**
 * @member {String} image_thumb_url
 */
ProductImages.prototype['image_thumb_url'] = undefined;

/**
 * @member {String} image_url
 */
ProductImages.prototype['image_url'] = undefined;

/**
 * @member {module:model/ProductImagesProperties} images
 */
ProductImages.prototype['images'] = undefined;

/**
 * @member {Array.<String>} last_image_dates_tags
 */
ProductImages.prototype['last_image_dates_tags'] = undefined;

/**
 * timestamp of last image upload (or update?)
 * @member {Number} last_image_t
 */
ProductImages.prototype['last_image_t'] = undefined;

/**
 * @member {module:model/ProductSelectedImages} selected_images
 */
ProductImages.prototype['selected_images'] = undefined;






export default ProductImages;

