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
 * The ProductMiscNutrientLevels model module.
 * @module model/ProductMiscNutrientLevels
 * @version 2
 */
class ProductMiscNutrientLevels {
    /**
     * Constructs a new <code>ProductMiscNutrientLevels</code>.
     * Traffic light indicators on main nutrients levels 
     * @alias module:model/ProductMiscNutrientLevels
     */
    constructor() { 
        
        ProductMiscNutrientLevels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductMiscNutrientLevels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductMiscNutrientLevels} obj Optional instance to populate.
     * @return {module:model/ProductMiscNutrientLevels} The populated <code>ProductMiscNutrientLevels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductMiscNutrientLevels();

            if (data.hasOwnProperty('fat')) {
                obj['fat'] = ApiClient.convertToType(data['fat'], 'String');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
            if (data.hasOwnProperty('saturated-fat')) {
                obj['saturated-fat'] = ApiClient.convertToType(data['saturated-fat'], 'String');
            }
            if (data.hasOwnProperty('sugars')) {
                obj['sugars'] = ApiClient.convertToType(data['sugars'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductMiscNutrientLevels</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductMiscNutrientLevels</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fat'] && !(typeof data['fat'] === 'string' || data['fat'] instanceof String)) {
            throw new Error("Expected the field `fat` to be a primitive type in the JSON string but got " + data['fat']);
        }
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
        }
        // ensure the json data is a string
        if (data['saturated-fat'] && !(typeof data['saturated-fat'] === 'string' || data['saturated-fat'] instanceof String)) {
            throw new Error("Expected the field `saturated-fat` to be a primitive type in the JSON string but got " + data['saturated-fat']);
        }
        // ensure the json data is a string
        if (data['sugars'] && !(typeof data['sugars'] === 'string' || data['sugars'] instanceof String)) {
            throw new Error("Expected the field `sugars` to be a primitive type in the JSON string but got " + data['sugars']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductMiscNutrientLevels.FatEnum} fat
 */
ProductMiscNutrientLevels.prototype['fat'] = undefined;

/**
 * @member {module:model/ProductMiscNutrientLevels.SaltEnum} salt
 */
ProductMiscNutrientLevels.prototype['salt'] = undefined;

/**
 * @member {module:model/ProductMiscNutrientLevels.SaturatedFatEnum} saturated-fat
 */
ProductMiscNutrientLevels.prototype['saturated-fat'] = undefined;

/**
 * @member {module:model/ProductMiscNutrientLevels.SugarsEnum} sugars
 */
ProductMiscNutrientLevels.prototype['sugars'] = undefined;





/**
 * Allowed values for the <code>fat</code> property.
 * @enum {String}
 * @readonly
 */
ProductMiscNutrientLevels['FatEnum'] = {

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "moderate"
     * @const
     */
    "moderate": "moderate",

    /**
     * value: "high"
     * @const
     */
    "high": "high"
};


/**
 * Allowed values for the <code>salt</code> property.
 * @enum {String}
 * @readonly
 */
ProductMiscNutrientLevels['SaltEnum'] = {

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "moderate"
     * @const
     */
    "moderate": "moderate",

    /**
     * value: "high"
     * @const
     */
    "high": "high"
};


/**
 * Allowed values for the <code>saturated-fat</code> property.
 * @enum {String}
 * @readonly
 */
ProductMiscNutrientLevels['SaturatedFatEnum'] = {

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "moderate"
     * @const
     */
    "moderate": "moderate",

    /**
     * value: "high"
     * @const
     */
    "high": "high"
};


/**
 * Allowed values for the <code>sugars</code> property.
 * @enum {String}
 * @readonly
 */
ProductMiscNutrientLevels['SugarsEnum'] = {

    /**
     * value: "low"
     * @const
     */
    "low": "low",

    /**
     * value: "moderate"
     * @const
     */
    "moderate": "moderate",

    /**
     * value: "high"
     * @const
     */
    "high": "high"
};



export default ProductMiscNutrientLevels;

