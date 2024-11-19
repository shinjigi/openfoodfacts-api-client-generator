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
import Nutriscore2021Data from './Nutriscore2021Data';

/**
 * The Nutriscore2021 model module.
 * @module model/Nutriscore2021
 * @version 2
 */
class Nutriscore2021 {
    /**
     * Constructs a new <code>Nutriscore2021</code>.
     * @alias module:model/Nutriscore2021
     */
    constructor() { 
        
        Nutriscore2021.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Nutriscore2021</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Nutriscore2021} obj Optional instance to populate.
     * @return {module:model/Nutriscore2021} The populated <code>Nutriscore2021</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Nutriscore2021();

            if (data.hasOwnProperty('category_available')) {
                obj['category_available'] = ApiClient.convertToType(data['category_available'], 'Number');
            }
            if (data.hasOwnProperty('grade')) {
                obj['grade'] = ApiClient.convertToType(data['grade'], 'String');
            }
            if (data.hasOwnProperty('nutrients_available')) {
                obj['nutrients_available'] = ApiClient.convertToType(data['nutrients_available'], 'Number');
            }
            if (data.hasOwnProperty('nutriscore_applicable')) {
                obj['nutriscore_applicable'] = ApiClient.convertToType(data['nutriscore_applicable'], 'Number');
            }
            if (data.hasOwnProperty('nutriscore_computed')) {
                obj['nutriscore_computed'] = ApiClient.convertToType(data['nutriscore_computed'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Nutriscore2021Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Nutriscore2021</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Nutriscore2021</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['grade'] && !(typeof data['grade'] === 'string' || data['grade'] instanceof String)) {
            throw new Error("Expected the field `grade` to be a primitive type in the JSON string but got " + data['grade']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          Nutriscore2021Data.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/Nutriscore2021.CategoryAvailableEnum} category_available
 */
Nutriscore2021.prototype['category_available'] = undefined;

/**
 * Nutri-Score for the product as a letter.  See https://world.openfoodfacts.org/nutriscore. 
 * @member {module:model/Nutriscore2021.GradeEnum} grade
 */
Nutriscore2021.prototype['grade'] = undefined;

/**
 * @member {module:model/Nutriscore2021.NutrientsAvailableEnum} nutrients_available
 */
Nutriscore2021.prototype['nutrients_available'] = undefined;

/**
 * @member {module:model/Nutriscore2021.NutriscoreApplicableEnum} nutriscore_applicable
 */
Nutriscore2021.prototype['nutriscore_applicable'] = undefined;

/**
 * @member {module:model/Nutriscore2021.NutriscoreComputedEnum} nutriscore_computed
 */
Nutriscore2021.prototype['nutriscore_computed'] = undefined;

/**
 * @member {Number} score
 */
Nutriscore2021.prototype['score'] = undefined;

/**
 * @member {module:model/Nutriscore2021Data} data
 */
Nutriscore2021.prototype['data'] = undefined;





/**
 * Allowed values for the <code>category_available</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021['CategoryAvailableEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};


/**
 * Allowed values for the <code>grade</code> property.
 * @enum {String}
 * @readonly
 */
Nutriscore2021['GradeEnum'] = {

    /**
     * value: "a"
     * @const
     */
    "a": "a",

    /**
     * value: "b"
     * @const
     */
    "b": "b",

    /**
     * value: "c"
     * @const
     */
    "c": "c",

    /**
     * value: "d"
     * @const
     */
    "d": "d",

    /**
     * value: "e"
     * @const
     */
    "e": "e"
};


/**
 * Allowed values for the <code>nutrients_available</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021['NutrientsAvailableEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};


/**
 * Allowed values for the <code>nutriscore_applicable</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021['NutriscoreApplicableEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};


/**
 * Allowed values for the <code>nutriscore_computed</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021['NutriscoreComputedEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};



export default Nutriscore2021;
