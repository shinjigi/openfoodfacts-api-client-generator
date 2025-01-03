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
 * The Nutriscore2021Data1 model module.
 * @module model/Nutriscore2021Data1
 * @version 2
 */
class Nutriscore2021Data1 {
    /**
     * Constructs a new <code>Nutriscore2021Data1</code>.
     * @alias module:model/Nutriscore2021Data1
     */
    constructor() { 
        
        Nutriscore2021Data1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Nutriscore2021Data1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Nutriscore2021Data1} obj Optional instance to populate.
     * @return {module:model/Nutriscore2021Data1} The populated <code>Nutriscore2021Data1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Nutriscore2021Data1();

            if (data.hasOwnProperty('is_beverage')) {
                obj['is_beverage'] = ApiClient.convertToType(data['is_beverage'], 'Number');
            }
            if (data.hasOwnProperty('is_cheese')) {
                obj['is_cheese'] = ApiClient.convertToType(data['is_cheese'], 'Number');
            }
            if (data.hasOwnProperty('is_water')) {
                obj['is_water'] = ApiClient.convertToType(data['is_water'], 'Number');
            }
            if (data.hasOwnProperty('is_fat')) {
                obj['is_fat'] = ApiClient.convertToType(data['is_fat'], 'Number');
            }
            if (data.hasOwnProperty('energy')) {
                obj['energy'] = ApiClient.convertToType(data['energy'], 'Number');
            }
            if (data.hasOwnProperty('energy_points')) {
                obj['energy_points'] = ApiClient.convertToType(data['energy_points'], 'Number');
            }
            if (data.hasOwnProperty('energy_value')) {
                obj['energy_value'] = ApiClient.convertToType(data['energy_value'], 'Number');
            }
            if (data.hasOwnProperty('fiber')) {
                obj['fiber'] = ApiClient.convertToType(data['fiber'], 'Number');
            }
            if (data.hasOwnProperty('fiber_points')) {
                obj['fiber_points'] = ApiClient.convertToType(data['fiber_points'], 'Number');
            }
            if (data.hasOwnProperty('fiber_value')) {
                obj['fiber_value'] = ApiClient.convertToType(data['fiber_value'], 'Number');
            }
            if (data.hasOwnProperty('fruits_vegetables_nuts_colza_walnut_olive_oils')) {
                obj['fruits_vegetables_nuts_colza_walnut_olive_oils'] = ApiClient.convertToType(data['fruits_vegetables_nuts_colza_walnut_olive_oils'], 'Number');
            }
            if (data.hasOwnProperty('fruits_vegetables_nuts_colza_walnut_olive_oils_points')) {
                obj['fruits_vegetables_nuts_colza_walnut_olive_oils_points'] = ApiClient.convertToType(data['fruits_vegetables_nuts_colza_walnut_olive_oils_points'], 'Number');
            }
            if (data.hasOwnProperty('fruits_vegetables_nuts_colza_walnut_olive_oils_value')) {
                obj['fruits_vegetables_nuts_colza_walnut_olive_oils_value'] = ApiClient.convertToType(data['fruits_vegetables_nuts_colza_walnut_olive_oils_value'], 'Number');
            }
            if (data.hasOwnProperty('proteins')) {
                obj['proteins'] = ApiClient.convertToType(data['proteins'], 'Number');
            }
            if (data.hasOwnProperty('proteins_points')) {
                obj['proteins_points'] = ApiClient.convertToType(data['proteins_points'], 'Number');
            }
            if (data.hasOwnProperty('proteins_value')) {
                obj['proteins_value'] = ApiClient.convertToType(data['proteins_value'], 'Number');
            }
            if (data.hasOwnProperty('saturated_fat')) {
                obj['saturated_fat'] = ApiClient.convertToType(data['saturated_fat'], 'Number');
            }
            if (data.hasOwnProperty('saturated_fat_points')) {
                obj['saturated_fat_points'] = ApiClient.convertToType(data['saturated_fat_points'], 'Number');
            }
            if (data.hasOwnProperty('saturated_fat_value')) {
                obj['saturated_fat_value'] = ApiClient.convertToType(data['saturated_fat_value'], 'Number');
            }
            if (data.hasOwnProperty('sodium')) {
                obj['sodium'] = ApiClient.convertToType(data['sodium'], 'Number');
            }
            if (data.hasOwnProperty('sodium_points')) {
                obj['sodium_points'] = ApiClient.convertToType(data['sodium_points'], 'Number');
            }
            if (data.hasOwnProperty('sodium_value')) {
                obj['sodium_value'] = ApiClient.convertToType(data['sodium_value'], 'Number');
            }
            if (data.hasOwnProperty('sugars')) {
                obj['sugars'] = ApiClient.convertToType(data['sugars'], 'Number');
            }
            if (data.hasOwnProperty('sugars_points')) {
                obj['sugars_points'] = ApiClient.convertToType(data['sugars_points'], 'Number');
            }
            if (data.hasOwnProperty('sugars_value')) {
                obj['sugars_value'] = ApiClient.convertToType(data['sugars_value'], 'Number');
            }
            if (data.hasOwnProperty('negative_points')) {
                obj['negative_points'] = ApiClient.convertToType(data['negative_points'], 'Number');
            }
            if (data.hasOwnProperty('positive_points')) {
                obj['positive_points'] = ApiClient.convertToType(data['positive_points'], 'Number');
            }
            if (data.hasOwnProperty('grade')) {
                obj['grade'] = ApiClient.convertToType(data['grade'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Nutriscore2021Data1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Nutriscore2021Data1</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['grade'] && !(typeof data['grade'] === 'string' || data['grade'] instanceof String)) {
            throw new Error("Expected the field `grade` to be a primitive type in the JSON string but got " + data['grade']);
        }

        return true;
    }


}



/**
 * @member {module:model/Nutriscore2021Data1.IsBeverageEnum} is_beverage
 */
Nutriscore2021Data1.prototype['is_beverage'] = undefined;

/**
 * @member {module:model/Nutriscore2021Data1.IsCheeseEnum} is_cheese
 */
Nutriscore2021Data1.prototype['is_cheese'] = undefined;

/**
 * @member {module:model/Nutriscore2021Data1.IsWaterEnum} is_water
 */
Nutriscore2021Data1.prototype['is_water'] = undefined;

/**
 * @member {module:model/Nutriscore2021Data1.IsFatEnum} is_fat
 */
Nutriscore2021Data1.prototype['is_fat'] = undefined;

/**
 * @member {Number} energy
 */
Nutriscore2021Data1.prototype['energy'] = undefined;

/**
 * @member {Number} energy_points
 */
Nutriscore2021Data1.prototype['energy_points'] = undefined;

/**
 * @member {Number} energy_value
 */
Nutriscore2021Data1.prototype['energy_value'] = undefined;

/**
 * @member {Number} fiber
 */
Nutriscore2021Data1.prototype['fiber'] = undefined;

/**
 * @member {Number} fiber_points
 */
Nutriscore2021Data1.prototype['fiber_points'] = undefined;

/**
 * @member {Number} fiber_value
 */
Nutriscore2021Data1.prototype['fiber_value'] = undefined;

/**
 * @member {Number} fruits_vegetables_nuts_colza_walnut_olive_oils
 */
Nutriscore2021Data1.prototype['fruits_vegetables_nuts_colza_walnut_olive_oils'] = undefined;

/**
 * @member {Number} fruits_vegetables_nuts_colza_walnut_olive_oils_points
 */
Nutriscore2021Data1.prototype['fruits_vegetables_nuts_colza_walnut_olive_oils_points'] = undefined;

/**
 * @member {Number} fruits_vegetables_nuts_colza_walnut_olive_oils_value
 */
Nutriscore2021Data1.prototype['fruits_vegetables_nuts_colza_walnut_olive_oils_value'] = undefined;

/**
 * @member {Number} proteins
 */
Nutriscore2021Data1.prototype['proteins'] = undefined;

/**
 * @member {Number} proteins_points
 */
Nutriscore2021Data1.prototype['proteins_points'] = undefined;

/**
 * @member {Number} proteins_value
 */
Nutriscore2021Data1.prototype['proteins_value'] = undefined;

/**
 * @member {Number} saturated_fat
 */
Nutriscore2021Data1.prototype['saturated_fat'] = undefined;

/**
 * @member {Number} saturated_fat_points
 */
Nutriscore2021Data1.prototype['saturated_fat_points'] = undefined;

/**
 * @member {Number} saturated_fat_value
 */
Nutriscore2021Data1.prototype['saturated_fat_value'] = undefined;

/**
 * @member {Number} sodium
 */
Nutriscore2021Data1.prototype['sodium'] = undefined;

/**
 * @member {Number} sodium_points
 */
Nutriscore2021Data1.prototype['sodium_points'] = undefined;

/**
 * @member {Number} sodium_value
 */
Nutriscore2021Data1.prototype['sodium_value'] = undefined;

/**
 * @member {Number} sugars
 */
Nutriscore2021Data1.prototype['sugars'] = undefined;

/**
 * @member {Number} sugars_points
 */
Nutriscore2021Data1.prototype['sugars_points'] = undefined;

/**
 * @member {Number} sugars_value
 */
Nutriscore2021Data1.prototype['sugars_value'] = undefined;

/**
 * @member {Number} negative_points
 */
Nutriscore2021Data1.prototype['negative_points'] = undefined;

/**
 * @member {Number} positive_points
 */
Nutriscore2021Data1.prototype['positive_points'] = undefined;

/**
 * Nutri-Score for the product as a letter.  See https://world.openfoodfacts.org/nutriscore. 
 * @member {module:model/Nutriscore2021Data1.GradeEnum} grade
 */
Nutriscore2021Data1.prototype['grade'] = undefined;

/**
 * @member {Number} score
 */
Nutriscore2021Data1.prototype['score'] = undefined;





/**
 * Allowed values for the <code>is_beverage</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021Data1['IsBeverageEnum'] = {

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
 * Allowed values for the <code>is_cheese</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021Data1['IsCheeseEnum'] = {

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
 * Allowed values for the <code>is_water</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021Data1['IsWaterEnum'] = {

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
 * Allowed values for the <code>is_fat</code> property.
 * @enum {Number}
 * @readonly
 */
Nutriscore2021Data1['IsFatEnum'] = {

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
Nutriscore2021Data1['GradeEnum'] = {

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



export default Nutriscore2021Data1;

