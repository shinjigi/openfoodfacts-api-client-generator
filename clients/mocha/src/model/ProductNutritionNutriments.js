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

/**
 * The ProductNutritionNutriments model module.
 * @module model/ProductNutritionNutriments
 * @version 2
 */
class ProductNutritionNutriments {
    /**
     * Constructs a new <code>ProductNutritionNutriments</code>.
     * All known nutrients for the product.  Note that each nutrients are declined with a variety of suffixes like &#x60;_100g&#x60;, &#x60;_serving&#x60;, see patternProperties below.  A specific &#x60;_unit&#x60; is the unit used to measure the nutrient.  Beware that some properties are to be interpreted based upon &#x60;nutrition_data_per&#x60; value.  Also for products that have a nutrition table for prepared product (eg. the nutrition facts for a bowl of milk with cocoa powder), a &#x60;_prepared&#x60; suffix is added (before other suffixes).  You can get all possible nutrients from the [nutrients taxonomy](https://static.openfoodfacts.org/data/taxonomies/nutrients.json)  **FIXME** add more nutrients with description. 
     * @alias module:model/ProductNutritionNutriments
     */
    constructor() { 
        
        ProductNutritionNutriments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductNutritionNutriments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductNutritionNutriments} obj Optional instance to populate.
     * @return {module:model/ProductNutritionNutriments} The populated <code>ProductNutritionNutriments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductNutritionNutriments();

            if (data.hasOwnProperty('alcohol')) {
                obj['alcohol'] = ApiClient.convertToType(data['alcohol'], 'Number');
            }
            if (data.hasOwnProperty('carbohydrates')) {
                obj['carbohydrates'] = ApiClient.convertToType(data['carbohydrates'], 'Number');
            }
            if (data.hasOwnProperty('energy')) {
                obj['energy'] = ApiClient.convertToType(data['energy'], 'Number');
            }
            if (data.hasOwnProperty('energy_value')) {
                obj['energy_value'] = ApiClient.convertToType(data['energy_value'], 'Number');
            }
            if (data.hasOwnProperty('energy_unit')) {
                obj['energy_unit'] = ApiClient.convertToType(data['energy_unit'], 'String');
            }
            if (data.hasOwnProperty('energy-kcal')) {
                obj['energy-kcal'] = ApiClient.convertToType(data['energy-kcal'], 'Number');
            }
            if (data.hasOwnProperty('energy-kj')) {
                obj['energy-kj'] = ApiClient.convertToType(data['energy-kj'], 'Number');
            }
            if (data.hasOwnProperty('fat')) {
                obj['fat'] = ApiClient.convertToType(data['fat'], 'Number');
            }
            if (data.hasOwnProperty('fruits-vegetables-legumes-estimate-from-ingredients')) {
                obj['fruits-vegetables-legumes-estimate-from-ingredients'] = ApiClient.convertToType(data['fruits-vegetables-legumes-estimate-from-ingredients'], 'Number');
            }
            if (data.hasOwnProperty('fruits-vegetables-nuts-estimate-from-ingredients')) {
                obj['fruits-vegetables-nuts-estimate-from-ingredients'] = ApiClient.convertToType(data['fruits-vegetables-nuts-estimate-from-ingredients'], 'Number');
            }
            if (data.hasOwnProperty('nova-group')) {
                obj['nova-group'] = ApiClient.convertToType(data['nova-group'], 'Number');
            }
            if (data.hasOwnProperty('nutrition-score-fr')) {
                obj['nutrition-score-fr'] = ApiClient.convertToType(data['nutrition-score-fr'], Object);
            }
            if (data.hasOwnProperty('proteins')) {
                obj['proteins'] = ApiClient.convertToType(data['proteins'], 'Number');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'Number');
            }
            if (data.hasOwnProperty('saturated-fat')) {
                obj['saturated-fat'] = ApiClient.convertToType(data['saturated-fat'], 'Number');
            }
            if (data.hasOwnProperty('sodium')) {
                obj['sodium'] = ApiClient.convertToType(data['sodium'], 'Number');
            }
            if (data.hasOwnProperty('sugars')) {
                obj['sugars'] = ApiClient.convertToType(data['sugars'], 'Number');
            }
            if (data.hasOwnProperty('carbon-footprint-from-known-ingredients_product')) {
                obj['carbon-footprint-from-known-ingredients_product'] = ApiClient.convertToType(data['carbon-footprint-from-known-ingredients_product'], 'Number');
            }
            if (data.hasOwnProperty('carbon-footprint-from-known-ingredients_serving')) {
                obj['carbon-footprint-from-known-ingredients_serving'] = ApiClient.convertToType(data['carbon-footprint-from-known-ingredients_serving'], 'Number');
            }
            if (data.hasOwnProperty('erythritol')) {
                obj['erythritol'] = ApiClient.convertToType(data['erythritol'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductNutritionNutriments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductNutritionNutriments</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['energy_unit'] && !(typeof data['energy_unit'] === 'string' || data['energy_unit'] instanceof String)) {
            throw new Error("Expected the field `energy_unit` to be a primitive type in the JSON string but got " + data['energy_unit']);
        }

        return true;
    }


}



/**
 * Quantity of alcohol  (per 100g or per serving) in a standard unit (g or ml) 
 * @member {Number} alcohol
 */
ProductNutritionNutriments.prototype['alcohol'] = undefined;

/**
 * @member {Number} carbohydrates
 */
ProductNutritionNutriments.prototype['carbohydrates'] = undefined;

/**
 * It is the same as `energy-kj` if we have it, or computed from `energy-kcal` otherwise  (per 100g or per serving) in kj 
 * @member {Number} energy
 */
ProductNutritionNutriments.prototype['energy'] = undefined;

/**
 * energy_value will be equal to energy-kj_value if we have it or to energy-kcal_value otherwise 
 * @member {Number} energy_value
 */
ProductNutritionNutriments.prototype['energy_value'] = undefined;

/**
 * Equal to energy-kj_unit if we have it or to energy-kcal_unit otherwise 
 * @member {module:model/ProductNutritionNutriments.EnergyUnitEnum} energy_unit
 */
ProductNutritionNutriments.prototype['energy_unit'] = undefined;

/**
 * energy in kcal, if it is specified  (per 100g or per serving) in a standard unit (g or ml) 
 * @member {Number} energy-kcal
 */
ProductNutritionNutriments.prototype['energy-kcal'] = undefined;

/**
 * energy in kj, if it is specified  (per 100g or per serving) in a standard unit (g or ml) 
 * @member {Number} energy-kj
 */
ProductNutritionNutriments.prototype['energy-kj'] = undefined;

/**
 * @member {Number} fat
 */
ProductNutritionNutriments.prototype['fat'] = undefined;

/**
 * An estimate, from the ingredients list of the percentage of fruits, vegetable and legumes. This is an important information for Nutri-Score (2023 version) computation. 
 * @member {Number} fruits-vegetables-legumes-estimate-from-ingredients
 */
ProductNutritionNutriments.prototype['fruits-vegetables-legumes-estimate-from-ingredients'] = undefined;

/**
 * An estimate, from the ingredients list of the percentage of fruits, vegetable and nuts. This is an important information for Nutri-Score (2021 version) computation. 
 * @member {Number} fruits-vegetables-nuts-estimate-from-ingredients
 */
ProductNutritionNutriments.prototype['fruits-vegetables-nuts-estimate-from-ingredients'] = undefined;

/**
 * @member {Number} nova-group
 */
ProductNutritionNutriments.prototype['nova-group'] = undefined;

/**
 * @member {Object} nutrition-score-fr
 */
ProductNutritionNutriments.prototype['nutrition-score-fr'] = undefined;

/**
 * @member {Number} proteins
 */
ProductNutritionNutriments.prototype['proteins'] = undefined;

/**
 * @member {Number} salt
 */
ProductNutritionNutriments.prototype['salt'] = undefined;

/**
 * @member {Number} saturated-fat
 */
ProductNutritionNutriments.prototype['saturated-fat'] = undefined;

/**
 * @member {Number} sodium
 */
ProductNutritionNutriments.prototype['sodium'] = undefined;

/**
 * @member {Number} sugars
 */
ProductNutritionNutriments.prototype['sugars'] = undefined;

/**
 * @member {Number} carbon-footprint-from-known-ingredients_product
 */
ProductNutritionNutriments.prototype['carbon-footprint-from-known-ingredients_product'] = undefined;

/**
 * @member {Number} carbon-footprint-from-known-ingredients_serving
 */
ProductNutritionNutriments.prototype['carbon-footprint-from-known-ingredients_serving'] = undefined;

/**
 * erythritol is a polyol which is not providing any energy. As such, it needs not be taken into account when computing the energy of a product. Eryhtritol is now displayed on nutrition facts sheet of some products, mainly in the USA. This value is entered either by contributors, either by imports. 
 * @member {Number} erythritol
 */
ProductNutritionNutriments.prototype['erythritol'] = undefined;





/**
 * Allowed values for the <code>energy_unit</code> property.
 * @enum {String}
 * @readonly
 */
ProductNutritionNutriments['EnergyUnitEnum'] = {

    /**
     * value: "kcal"
     * @const
     */
    "kcal": "kcal",

    /**
     * value: "kj"
     * @const
     */
    "kj": "kj"
};



export default ProductNutritionNutriments;
