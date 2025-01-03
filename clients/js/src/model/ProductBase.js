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
 * The ProductBase model module.
 * @module model/ProductBase
 * @version 2
 */
class ProductBase {
    /**
     * Constructs a new <code>ProductBase</code>.
     * Base product data 
     * @alias module:model/ProductBase
     */
    constructor() { 
        
        ProductBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductBase} obj Optional instance to populate.
     * @return {module:model/ProductBase} The populated <code>ProductBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductBase();

            if (data.hasOwnProperty('abbreviated_product_name')) {
                obj['abbreviated_product_name'] = ApiClient.convertToType(data['abbreviated_product_name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('codes_tags')) {
                obj['codes_tags'] = ApiClient.convertToType(data['codes_tags'], ['String']);
            }
            if (data.hasOwnProperty('generic_name_it')) {
                obj['generic_name_it'] = ApiClient.convertToType(data['generic_name_it'], 'String');
            }
            if (data.hasOwnProperty('generic_name')) {
                obj['generic_name'] = ApiClient.convertToType(data['generic_name'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('_keywords')) {
                obj['_keywords'] = ApiClient.convertToType(data['_keywords'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lc')) {
                obj['lc'] = ApiClient.convertToType(data['lc'], 'String');
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('nova_group')) {
                obj['nova_group'] = ApiClient.convertToType(data['nova_group'], 'Number');
            }
            if (data.hasOwnProperty('nova_groups')) {
                obj['nova_groups'] = ApiClient.convertToType(data['nova_groups'], 'String');
            }
            if (data.hasOwnProperty('obsolete')) {
                obj['obsolete'] = ApiClient.convertToType(data['obsolete'], 'String');
            }
            if (data.hasOwnProperty('obsolete_since_date')) {
                obj['obsolete_since_date'] = ApiClient.convertToType(data['obsolete_since_date'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('product_name_it')) {
                obj['product_name_it'] = ApiClient.convertToType(data['product_name_it'], 'String');
            }
            if (data.hasOwnProperty('product_name_en')) {
                obj['product_name_en'] = ApiClient.convertToType(data['product_name_en'], 'String');
            }
            if (data.hasOwnProperty('product_quantity')) {
                obj['product_quantity'] = ApiClient.convertToType(data['product_quantity'], 'String');
            }
            if (data.hasOwnProperty('product_quantity_unit')) {
                obj['product_quantity_unit'] = ApiClient.convertToType(data['product_quantity_unit'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductBase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductBase</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['abbreviated_product_name'] && !(typeof data['abbreviated_product_name'] === 'string' || data['abbreviated_product_name'] instanceof String)) {
            throw new Error("Expected the field `abbreviated_product_name` to be a primitive type in the JSON string but got " + data['abbreviated_product_name']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['codes_tags'])) {
            throw new Error("Expected the field `codes_tags` to be an array in the JSON data but got " + data['codes_tags']);
        }
        // ensure the json data is a string
        if (data['generic_name_it'] && !(typeof data['generic_name_it'] === 'string' || data['generic_name_it'] instanceof String)) {
            throw new Error("Expected the field `generic_name_it` to be a primitive type in the JSON string but got " + data['generic_name_it']);
        }
        // ensure the json data is a string
        if (data['generic_name'] && !(typeof data['generic_name'] === 'string' || data['generic_name'] instanceof String)) {
            throw new Error("Expected the field `generic_name` to be a primitive type in the JSON string but got " + data['generic_name']);
        }
        // ensure the json data is a string
        if (data['_id'] && !(typeof data['_id'] === 'string' || data['_id'] instanceof String)) {
            throw new Error("Expected the field `_id` to be a primitive type in the JSON string but got " + data['_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['_keywords'])) {
            throw new Error("Expected the field `_keywords` to be an array in the JSON data but got " + data['_keywords']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['lc'] && !(typeof data['lc'] === 'string' || data['lc'] instanceof String)) {
            throw new Error("Expected the field `lc` to be a primitive type in the JSON string but got " + data['lc']);
        }
        // ensure the json data is a string
        if (data['lang'] && !(typeof data['lang'] === 'string' || data['lang'] instanceof String)) {
            throw new Error("Expected the field `lang` to be a primitive type in the JSON string but got " + data['lang']);
        }
        // ensure the json data is a string
        if (data['nova_groups'] && !(typeof data['nova_groups'] === 'string' || data['nova_groups'] instanceof String)) {
            throw new Error("Expected the field `nova_groups` to be a primitive type in the JSON string but got " + data['nova_groups']);
        }
        // ensure the json data is a string
        if (data['obsolete'] && !(typeof data['obsolete'] === 'string' || data['obsolete'] instanceof String)) {
            throw new Error("Expected the field `obsolete` to be a primitive type in the JSON string but got " + data['obsolete']);
        }
        // ensure the json data is a string
        if (data['obsolete_since_date'] && !(typeof data['obsolete_since_date'] === 'string' || data['obsolete_since_date'] instanceof String)) {
            throw new Error("Expected the field `obsolete_since_date` to be a primitive type in the JSON string but got " + data['obsolete_since_date']);
        }
        // ensure the json data is a string
        if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
            throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
        }
        // ensure the json data is a string
        if (data['product_name_it'] && !(typeof data['product_name_it'] === 'string' || data['product_name_it'] instanceof String)) {
            throw new Error("Expected the field `product_name_it` to be a primitive type in the JSON string but got " + data['product_name_it']);
        }
        // ensure the json data is a string
        if (data['product_name_en'] && !(typeof data['product_name_en'] === 'string' || data['product_name_en'] instanceof String)) {
            throw new Error("Expected the field `product_name_en` to be a primitive type in the JSON string but got " + data['product_name_en']);
        }
        // ensure the json data is a string
        if (data['product_quantity'] && !(typeof data['product_quantity'] === 'string' || data['product_quantity'] instanceof String)) {
            throw new Error("Expected the field `product_quantity` to be a primitive type in the JSON string but got " + data['product_quantity']);
        }
        // ensure the json data is a string
        if (data['product_quantity_unit'] && !(typeof data['product_quantity_unit'] === 'string' || data['product_quantity_unit'] instanceof String)) {
            throw new Error("Expected the field `product_quantity_unit` to be a primitive type in the JSON string but got " + data['product_quantity_unit']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }

        return true;
    }


}



/**
 * Abbreviated name in requested language
 * @member {String} abbreviated_product_name
 */
ProductBase.prototype['abbreviated_product_name'] = undefined;

/**
 * barcode of the product (can be EAN-13 or internal codes for some food stores), for products without a barcode, Open Food Facts assigns a number starting with the 200 reserved prefix 
 * @member {String} code
 */
ProductBase.prototype['code'] = undefined;

/**
 * @member {Array.<String>} codes_tags
 */
ProductBase.prototype['codes_tags'] = undefined;

/**
 * @member {String} generic_name_it
 */
ProductBase.prototype['generic_name_it'] = undefined;

/**
 * Legal name of the product as regulated by the European authorities. 
 * @member {String} generic_name
 */
ProductBase.prototype['generic_name'] = undefined;

/**
 * id in database of the product, this normally is the barcode
 * @member {String} _id
 */
ProductBase.prototype['_id'] = undefined;

/**
 * @member {Array.<String>} _keywords
 */
ProductBase.prototype['_keywords'] = undefined;

/**
 * internal identifier for the product, usually set to the value of `code`, except on the producers platform where it is prefixed by the owner 
 * @member {String} id
 */
ProductBase.prototype['id'] = undefined;

/**
 * Main language of the product. This is a duplicate of `lang` property (for historical reasons). 
 * @member {String} lc
 */
ProductBase.prototype['lc'] = undefined;

/**
 * Main language of the product.  This should be the main language of product packaging (if one is predominant).  Main language is also used to decide which ingredients list to parse. 
 * @member {String} lang
 */
ProductBase.prototype['lang'] = undefined;

/**
 * Nova group as an integer from 1 to 4. See https://world.openfoodfacts.org/nova 
 * @member {Number} nova_group
 */
ProductBase.prototype['nova_group'] = undefined;

/**
 * @member {String} nova_groups
 */
ProductBase.prototype['nova_groups'] = undefined;

/**
 * @member {String} obsolete
 */
ProductBase.prototype['obsolete'] = undefined;

/**
 * A date at which the product was declared obsolete. This means it's not produced any more. 
 * @member {String} obsolete_since_date
 */
ProductBase.prototype['obsolete_since_date'] = undefined;

/**
 * The name of the product 
 * @member {String} product_name
 */
ProductBase.prototype['product_name'] = undefined;

/**
 * Italian name of the product 
 * @member {String} product_name_it
 */
ProductBase.prototype['product_name_it'] = undefined;

/**
 * The name of the product can also be in many other languages like product_name_fr (for French). 
 * @member {String} product_name_en
 */
ProductBase.prototype['product_name_en'] = undefined;

/**
 * The size in g or ml for the whole product. It's a normalized version of the quantity field. 
 * @member {String} product_quantity
 */
ProductBase.prototype['product_quantity'] = undefined;

/**
 * The unit (either g or ml) for the correponding product_quantity. 
 * @member {String} product_quantity_unit
 */
ProductBase.prototype['product_quantity_unit'] = undefined;

/**
 * Quantity and Unit. 
 * @member {String} quantity
 */
ProductBase.prototype['quantity'] = undefined;






export default ProductBase;

