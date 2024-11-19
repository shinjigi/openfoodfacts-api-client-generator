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
import AddPhotoToExistingProductResponseFilesInner from './AddPhotoToExistingProductResponseFilesInner';
import AddPhotoToExistingProductResponseImage from './AddPhotoToExistingProductResponseImage';

/**
 * The AddPhotoToExistingProductResponse model module.
 * @module model/AddPhotoToExistingProductResponse
 * @version 2
 */
class AddPhotoToExistingProductResponse {
    /**
     * Constructs a new <code>AddPhotoToExistingProductResponse</code>.
     * @alias module:model/AddPhotoToExistingProductResponse
     */
    constructor() { 
        
        AddPhotoToExistingProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddPhotoToExistingProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddPhotoToExistingProductResponse} obj Optional instance to populate.
     * @return {module:model/AddPhotoToExistingProductResponse} The populated <code>AddPhotoToExistingProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddPhotoToExistingProductResponse();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [AddPhotoToExistingProductResponseFilesInner]);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = AddPhotoToExistingProductResponseImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('imgid')) {
                obj['imgid'] = ApiClient.convertToType(data['imgid'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('imagefield')) {
                obj['imagefield'] = ApiClient.convertToType(data['imagefield'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddPhotoToExistingProductResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddPhotoToExistingProductResponse</code>.
     */
    static validateJSON(data) {
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                AddPhotoToExistingProductResponseFilesInner.validateJSON(item);
            };
        }
        // validate the optional field `image`
        if (data['image']) { // data not null
          AddPhotoToExistingProductResponseImage.validateJSON(data['image']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['imagefield'] && !(typeof data['imagefield'] === 'string' || data['imagefield'] instanceof String)) {
            throw new Error("Expected the field `imagefield` to be a primitive type in the JSON string but got " + data['imagefield']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/AddPhotoToExistingProductResponseFilesInner>} files
 */
AddPhotoToExistingProductResponse.prototype['files'] = undefined;

/**
 * @member {module:model/AddPhotoToExistingProductResponseImage} image
 */
AddPhotoToExistingProductResponse.prototype['image'] = undefined;

/**
 * @member {Number} imgid
 */
AddPhotoToExistingProductResponse.prototype['imgid'] = undefined;

/**
 * @member {String} status
 */
AddPhotoToExistingProductResponse.prototype['status'] = undefined;

/**
 * @member {String} imagefield
 */
AddPhotoToExistingProductResponse.prototype['imagefield'] = undefined;

/**
 * @member {String} code
 */
AddPhotoToExistingProductResponse.prototype['code'] = undefined;






export default AddPhotoToExistingProductResponse;
