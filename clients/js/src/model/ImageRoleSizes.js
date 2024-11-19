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
import ImageSize from './ImageSize';

/**
 * The ImageRoleSizes model module.
 * @module model/ImageRoleSizes
 * @version 2
 */
class ImageRoleSizes {
    /**
     * Constructs a new <code>ImageRoleSizes</code>.
     * The available image sizes for the product (both reduced and full).  The reduced images are the ones with numbers as the key( 100, 200 etc) while the full images have &#x60;full&#x60; as the key. 
     * @alias module:model/ImageRoleSizes
     */
    constructor() { 
        
        ImageRoleSizes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageRoleSizes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageRoleSizes} obj Optional instance to populate.
     * @return {module:model/ImageRoleSizes} The populated <code>ImageRoleSizes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageRoleSizes();

            if (data.hasOwnProperty('100')) {
                obj['100'] = ImageSize.constructFromObject(data['100']);
            }
            if (data.hasOwnProperty('200')) {
                obj['200'] = ImageSize.constructFromObject(data['200']);
            }
            if (data.hasOwnProperty('400')) {
                obj['400'] = ImageSize.constructFromObject(data['400']);
            }
            if (data.hasOwnProperty('full')) {
                obj['full'] = ImageSize.constructFromObject(data['full']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageRoleSizes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageRoleSizes</code>.
     */
    static validateJSON(data) {
        // validate the optional field `100`
        if (data['100']) { // data not null
          ImageSize.validateJSON(data['100']);
        }
        // validate the optional field `200`
        if (data['200']) { // data not null
          ImageSize.validateJSON(data['200']);
        }
        // validate the optional field `400`
        if (data['400']) { // data not null
          ImageSize.validateJSON(data['400']);
        }
        // validate the optional field `full`
        if (data['full']) { // data not null
          ImageSize.validateJSON(data['full']);
        }

        return true;
    }


}



/**
 * @member {module:model/ImageSize} 100
 */
ImageRoleSizes.prototype['100'] = undefined;

/**
 * @member {module:model/ImageSize} 200
 */
ImageRoleSizes.prototype['200'] = undefined;

/**
 * @member {module:model/ImageSize} 400
 */
ImageRoleSizes.prototype['400'] = undefined;

/**
 * @member {module:model/ImageSize} full
 */
ImageRoleSizes.prototype['full'] = undefined;






export default ImageRoleSizes;

