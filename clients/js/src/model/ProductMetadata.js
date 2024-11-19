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
import ProductMetaSource from './ProductMetaSource';
import ProductMetaSourceFields from './ProductMetaSourceFields';

/**
 * The ProductMetadata model module.
 * @module model/ProductMetadata
 * @version 2
 */
class ProductMetadata {
    /**
     * Constructs a new <code>ProductMetadata</code>.
     * Metadata of a product (author, editors, creation date, etc.) 
     * @alias module:model/ProductMetadata
     */
    constructor() { 
        
        ProductMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductMetadata} obj Optional instance to populate.
     * @return {module:model/ProductMetadata} The populated <code>ProductMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductMetadata();

            if (data.hasOwnProperty('created_t')) {
                obj['created_t'] = ApiClient.convertToType(data['created_t'], 'Number');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
            }
            if (data.hasOwnProperty('editors_tags')) {
                obj['editors_tags'] = ApiClient.convertToType(data['editors_tags'], ['String']);
            }
            if (data.hasOwnProperty('informers_tags')) {
                obj['informers_tags'] = ApiClient.convertToType(data['informers_tags'], ['String']);
            }
            if (data.hasOwnProperty('interface_version_created')) {
                obj['interface_version_created'] = ApiClient.convertToType(data['interface_version_created'], 'String');
            }
            if (data.hasOwnProperty('interface_version_modified')) {
                obj['interface_version_modified'] = ApiClient.convertToType(data['interface_version_modified'], 'String');
            }
            if (data.hasOwnProperty('languages')) {
                obj['languages'] = ApiClient.convertToType(data['languages'], Object);
            }
            if (data.hasOwnProperty('languages_codes')) {
                obj['languages_codes'] = ApiClient.convertToType(data['languages_codes'], Object);
            }
            if (data.hasOwnProperty('languages_hierarchy')) {
                obj['languages_hierarchy'] = ApiClient.convertToType(data['languages_hierarchy'], ['String']);
            }
            if (data.hasOwnProperty('languages_tags')) {
                obj['languages_tags'] = ApiClient.convertToType(data['languages_tags'], ['String']);
            }
            if (data.hasOwnProperty('last_edit_dates_tags')) {
                obj['last_edit_dates_tags'] = ApiClient.convertToType(data['last_edit_dates_tags'], ['String']);
            }
            if (data.hasOwnProperty('last_editor')) {
                obj['last_editor'] = ApiClient.convertToType(data['last_editor'], 'String');
            }
            if (data.hasOwnProperty('last_modified_by')) {
                obj['last_modified_by'] = ApiClient.convertToType(data['last_modified_by'], 'String');
            }
            if (data.hasOwnProperty('last_modified_t')) {
                obj['last_modified_t'] = ApiClient.convertToType(data['last_modified_t'], 'Number');
            }
            if (data.hasOwnProperty('last_updated_t')) {
                obj['last_updated_t'] = ApiClient.convertToType(data['last_updated_t'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('owners_tags')) {
                obj['owners_tags'] = ApiClient.convertToType(data['owners_tags'], 'String');
            }
            if (data.hasOwnProperty('photographers_tags')) {
                obj['photographers_tags'] = ApiClient.convertToType(data['photographers_tags'], ['String']);
            }
            if (data.hasOwnProperty('rev')) {
                obj['rev'] = ApiClient.convertToType(data['rev'], 'Number');
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], [ProductMetaSource]);
            }
            if (data.hasOwnProperty('sources_fields')) {
                obj['sources_fields'] = ProductMetaSourceFields.constructFromObject(data['sources_fields']);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], 'String');
            }
            if (data.hasOwnProperty('teams_tags')) {
                obj['teams_tags'] = ApiClient.convertToType(data['teams_tags'], ['String']);
            }
            if (data.hasOwnProperty('update_key')) {
                obj['update_key'] = ApiClient.convertToType(data['update_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['creator'] && !(typeof data['creator'] === 'string' || data['creator'] instanceof String)) {
            throw new Error("Expected the field `creator` to be a primitive type in the JSON string but got " + data['creator']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['editors_tags'])) {
            throw new Error("Expected the field `editors_tags` to be an array in the JSON data but got " + data['editors_tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['informers_tags'])) {
            throw new Error("Expected the field `informers_tags` to be an array in the JSON data but got " + data['informers_tags']);
        }
        // ensure the json data is a string
        if (data['interface_version_created'] && !(typeof data['interface_version_created'] === 'string' || data['interface_version_created'] instanceof String)) {
            throw new Error("Expected the field `interface_version_created` to be a primitive type in the JSON string but got " + data['interface_version_created']);
        }
        // ensure the json data is a string
        if (data['interface_version_modified'] && !(typeof data['interface_version_modified'] === 'string' || data['interface_version_modified'] instanceof String)) {
            throw new Error("Expected the field `interface_version_modified` to be a primitive type in the JSON string but got " + data['interface_version_modified']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['languages_hierarchy'])) {
            throw new Error("Expected the field `languages_hierarchy` to be an array in the JSON data but got " + data['languages_hierarchy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['languages_tags'])) {
            throw new Error("Expected the field `languages_tags` to be an array in the JSON data but got " + data['languages_tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['last_edit_dates_tags'])) {
            throw new Error("Expected the field `last_edit_dates_tags` to be an array in the JSON data but got " + data['last_edit_dates_tags']);
        }
        // ensure the json data is a string
        if (data['last_editor'] && !(typeof data['last_editor'] === 'string' || data['last_editor'] instanceof String)) {
            throw new Error("Expected the field `last_editor` to be a primitive type in the JSON string but got " + data['last_editor']);
        }
        // ensure the json data is a string
        if (data['last_modified_by'] && !(typeof data['last_modified_by'] === 'string' || data['last_modified_by'] instanceof String)) {
            throw new Error("Expected the field `last_modified_by` to be a primitive type in the JSON string but got " + data['last_modified_by']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['owners_tags'] && !(typeof data['owners_tags'] === 'string' || data['owners_tags'] instanceof String)) {
            throw new Error("Expected the field `owners_tags` to be a primitive type in the JSON string but got " + data['owners_tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['photographers_tags'])) {
            throw new Error("Expected the field `photographers_tags` to be an array in the JSON data but got " + data['photographers_tags']);
        }
        if (data['sources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sources'])) {
                throw new Error("Expected the field `sources` to be an array in the JSON data but got " + data['sources']);
            }
            // validate the optional field `sources` (array)
            for (const item of data['sources']) {
                ProductMetaSource.validateJSON(item);
            };
        }
        // validate the optional field `sources_fields`
        if (data['sources_fields']) { // data not null
          ProductMetaSourceFields.validateJSON(data['sources_fields']);
        }
        // ensure the json data is a string
        if (data['teams'] && !(typeof data['teams'] === 'string' || data['teams'] instanceof String)) {
            throw new Error("Expected the field `teams` to be a primitive type in the JSON string but got " + data['teams']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['teams_tags'])) {
            throw new Error("Expected the field `teams_tags` to be an array in the JSON data but got " + data['teams_tags']);
        }
        // ensure the json data is a string
        if (data['update_key'] && !(typeof data['update_key'] === 'string' || data['update_key'] instanceof String)) {
            throw new Error("Expected the field `update_key` to be a primitive type in the JSON string but got " + data['update_key']);
        }

        return true;
    }


}



/**
 * Date when the product was added (UNIX timestamp format). See also `entry_dates_tags` 
 * @member {Number} created_t
 */
ProductMetadata.prototype['created_t'] = undefined;

/**
 * The contributor who added the product first. 
 * @member {String} creator
 */
ProductMetadata.prototype['creator'] = undefined;

/**
 * List of editors who edited the product. 
 * @member {Array.<String>} editors_tags
 */
ProductMetadata.prototype['editors_tags'] = undefined;

/**
 * @member {Array.<String>} informers_tags
 */
ProductMetadata.prototype['informers_tags'] = undefined;

/**
 * @member {String} interface_version_created
 */
ProductMetadata.prototype['interface_version_created'] = undefined;

/**
 * @member {String} interface_version_modified
 */
ProductMetadata.prototype['interface_version_modified'] = undefined;

/**
 * @member {Object} languages
 */
ProductMetadata.prototype['languages'] = undefined;

/**
 * Same as `languages` but by language code, instead of language tags 
 * @member {Object} languages_codes
 */
ProductMetadata.prototype['languages_codes'] = undefined;

/**
 * @member {Array.<String>} languages_hierarchy
 */
ProductMetadata.prototype['languages_hierarchy'] = undefined;

/**
 * @member {Array.<String>} languages_tags
 */
ProductMetadata.prototype['languages_tags'] = undefined;

/**
 * @member {Array.<String>} last_edit_dates_tags
 */
ProductMetadata.prototype['last_edit_dates_tags'] = undefined;

/**
 * @member {String} last_editor
 */
ProductMetadata.prototype['last_editor'] = undefined;

/**
 * The username of the user who last modified the product. 
 * @member {String} last_modified_by
 */
ProductMetadata.prototype['last_modified_by'] = undefined;

/**
 * Date when the product page was last modified. 
 * @member {Number} last_modified_t
 */
ProductMetadata.prototype['last_modified_t'] = undefined;

/**
 * Date when the product page was last updated. 
 * @member {Number} last_updated_t
 */
ProductMetadata.prototype['last_updated_t'] = undefined;

/**
 * Id of the producer in case he provides his own data about a product (producer platform). 
 * @member {String} owner
 */
ProductMetadata.prototype['owner'] = undefined;

/**
 * Tagyfied version of owner 
 * @member {String} owners_tags
 */
ProductMetadata.prototype['owners_tags'] = undefined;

/**
 * @member {Array.<String>} photographers_tags
 */
ProductMetadata.prototype['photographers_tags'] = undefined;

/**
 * revision number of this product version (each edit adds a revision)
 * @member {Number} rev
 */
ProductMetadata.prototype['rev'] = undefined;

/**
 * @member {Array.<module:model/ProductMetaSource>} sources
 */
ProductMetadata.prototype['sources'] = undefined;

/**
 * @member {module:model/ProductMetaSourceFields} sources_fields
 */
ProductMetadata.prototype['sources_fields'] = undefined;

/**
 * @member {String} teams
 */
ProductMetadata.prototype['teams'] = undefined;

/**
 * @member {Array.<String>} teams_tags
 */
ProductMetadata.prototype['teams_tags'] = undefined;

/**
 * @member {String} update_key
 */
ProductMetadata.prototype['update_key'] = undefined;






export default ProductMetadata;

