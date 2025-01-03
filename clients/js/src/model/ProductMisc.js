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
import PackagingComponentREAD from './PackagingComponentREAD';
import ProductMiscNutrientLevels from './ProductMiscNutrientLevels';

/**
 * The ProductMisc model module.
 * @module model/ProductMisc
 * @version 2
 */
class ProductMisc {
    /**
     * Constructs a new <code>ProductMisc</code>.
     * Miscellaneous but important fields of a product 
     * @alias module:model/ProductMisc
     */
    constructor() { 
        
        ProductMisc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductMisc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductMisc} obj Optional instance to populate.
     * @return {module:model/ProductMisc} The populated <code>ProductMisc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductMisc();

            if (data.hasOwnProperty('additives_n')) {
                obj['additives_n'] = ApiClient.convertToType(data['additives_n'], 'Number');
            }
            if (data.hasOwnProperty('checked')) {
                obj['checked'] = ApiClient.convertToType(data['checked'], 'String');
            }
            if (data.hasOwnProperty('complete')) {
                obj['complete'] = ApiClient.convertToType(data['complete'], 'Number');
            }
            if (data.hasOwnProperty('completeness')) {
                obj['completeness'] = ApiClient.convertToType(data['completeness'], 'Number');
            }
            if (data.hasOwnProperty('ecoscore_grade')) {
                obj['ecoscore_grade'] = ApiClient.convertToType(data['ecoscore_grade'], 'String');
            }
            if (data.hasOwnProperty('ecoscore_score')) {
                obj['ecoscore_score'] = ApiClient.convertToType(data['ecoscore_score'], 'Number');
            }
            if (data.hasOwnProperty('food_groups')) {
                obj['food_groups'] = ApiClient.convertToType(data['food_groups'], 'String');
            }
            if (data.hasOwnProperty('food_groups_tags')) {
                obj['food_groups_tags'] = ApiClient.convertToType(data['food_groups_tags'], ['String']);
            }
            if (data.hasOwnProperty('nutrient_levels')) {
                obj['nutrient_levels'] = ProductMiscNutrientLevels.constructFromObject(data['nutrient_levels']);
            }
            if (data.hasOwnProperty('packaging_text')) {
                obj['packaging_text'] = ApiClient.convertToType(data['packaging_text'], 'String');
            }
            if (data.hasOwnProperty('packagings')) {
                obj['packagings'] = ApiClient.convertToType(data['packagings'], [PackagingComponentREAD]);
            }
            if (data.hasOwnProperty('packagings_complete')) {
                obj['packagings_complete'] = ApiClient.convertToType(data['packagings_complete'], 'Number');
            }
            if (data.hasOwnProperty('pnns_groups_1')) {
                obj['pnns_groups_1'] = ApiClient.convertToType(data['pnns_groups_1'], 'String');
            }
            if (data.hasOwnProperty('pnns_groups_1_tags')) {
                obj['pnns_groups_1_tags'] = ApiClient.convertToType(data['pnns_groups_1_tags'], ['String']);
            }
            if (data.hasOwnProperty('pnns_groups_2')) {
                obj['pnns_groups_2'] = ApiClient.convertToType(data['pnns_groups_2'], 'String');
            }
            if (data.hasOwnProperty('pnns_groups_2_tags')) {
                obj['pnns_groups_2_tags'] = ApiClient.convertToType(data['pnns_groups_2_tags'], ['String']);
            }
            if (data.hasOwnProperty('popularity_key')) {
                obj['popularity_key'] = ApiClient.convertToType(data['popularity_key'], 'Number');
            }
            if (data.hasOwnProperty('popularity_tags')) {
                obj['popularity_tags'] = ApiClient.convertToType(data['popularity_tags'], ['String']);
            }
            if (data.hasOwnProperty('scans_n')) {
                obj['scans_n'] = ApiClient.convertToType(data['scans_n'], 'Number');
            }
            if (data.hasOwnProperty('unique_scans_n')) {
                obj['unique_scans_n'] = ApiClient.convertToType(data['unique_scans_n'], 'Number');
            }
            if (data.hasOwnProperty('sortkey')) {
                obj['sortkey'] = ApiClient.convertToType(data['sortkey'], 'Number');
            }
            if (data.hasOwnProperty('serving_quantity')) {
                obj['serving_quantity'] = ApiClient.convertToType(data['serving_quantity'], 'String');
            }
            if (data.hasOwnProperty('serving_quantity_unit')) {
                obj['serving_quantity_unit'] = ApiClient.convertToType(data['serving_quantity_unit'], 'String');
            }
            if (data.hasOwnProperty('serving_size')) {
                obj['serving_size'] = ApiClient.convertToType(data['serving_size'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductMisc</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductMisc</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['checked'] && !(typeof data['checked'] === 'string' || data['checked'] instanceof String)) {
            throw new Error("Expected the field `checked` to be a primitive type in the JSON string but got " + data['checked']);
        }
        // ensure the json data is a string
        if (data['ecoscore_grade'] && !(typeof data['ecoscore_grade'] === 'string' || data['ecoscore_grade'] instanceof String)) {
            throw new Error("Expected the field `ecoscore_grade` to be a primitive type in the JSON string but got " + data['ecoscore_grade']);
        }
        // ensure the json data is a string
        if (data['food_groups'] && !(typeof data['food_groups'] === 'string' || data['food_groups'] instanceof String)) {
            throw new Error("Expected the field `food_groups` to be a primitive type in the JSON string but got " + data['food_groups']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['food_groups_tags'])) {
            throw new Error("Expected the field `food_groups_tags` to be an array in the JSON data but got " + data['food_groups_tags']);
        }
        // validate the optional field `nutrient_levels`
        if (data['nutrient_levels']) { // data not null
          ProductMiscNutrientLevels.validateJSON(data['nutrient_levels']);
        }
        // ensure the json data is a string
        if (data['packaging_text'] && !(typeof data['packaging_text'] === 'string' || data['packaging_text'] instanceof String)) {
            throw new Error("Expected the field `packaging_text` to be a primitive type in the JSON string but got " + data['packaging_text']);
        }
        if (data['packagings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['packagings'])) {
                throw new Error("Expected the field `packagings` to be an array in the JSON data but got " + data['packagings']);
            }
            // validate the optional field `packagings` (array)
            for (const item of data['packagings']) {
                PackagingComponentREAD.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['pnns_groups_1'] && !(typeof data['pnns_groups_1'] === 'string' || data['pnns_groups_1'] instanceof String)) {
            throw new Error("Expected the field `pnns_groups_1` to be a primitive type in the JSON string but got " + data['pnns_groups_1']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['pnns_groups_1_tags'])) {
            throw new Error("Expected the field `pnns_groups_1_tags` to be an array in the JSON data but got " + data['pnns_groups_1_tags']);
        }
        // ensure the json data is a string
        if (data['pnns_groups_2'] && !(typeof data['pnns_groups_2'] === 'string' || data['pnns_groups_2'] instanceof String)) {
            throw new Error("Expected the field `pnns_groups_2` to be a primitive type in the JSON string but got " + data['pnns_groups_2']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['pnns_groups_2_tags'])) {
            throw new Error("Expected the field `pnns_groups_2_tags` to be an array in the JSON data but got " + data['pnns_groups_2_tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['popularity_tags'])) {
            throw new Error("Expected the field `popularity_tags` to be an array in the JSON data but got " + data['popularity_tags']);
        }
        // ensure the json data is a string
        if (data['serving_quantity'] && !(typeof data['serving_quantity'] === 'string' || data['serving_quantity'] instanceof String)) {
            throw new Error("Expected the field `serving_quantity` to be a primitive type in the JSON string but got " + data['serving_quantity']);
        }
        // ensure the json data is a string
        if (data['serving_quantity_unit'] && !(typeof data['serving_quantity_unit'] === 'string' || data['serving_quantity_unit'] instanceof String)) {
            throw new Error("Expected the field `serving_quantity_unit` to be a primitive type in the JSON string but got " + data['serving_quantity_unit']);
        }
        // ensure the json data is a string
        if (data['serving_size'] && !(typeof data['serving_size'] === 'string' || data['serving_size'] instanceof String)) {
            throw new Error("Expected the field `serving_size` to be a primitive type in the JSON string but got " + data['serving_size']);
        }

        return true;
    }


}



/**
 * Number of food additives. 
 * @member {Number} additives_n
 */
ProductMisc.prototype['additives_n'] = undefined;

/**
 * @member {String} checked
 */
ProductMisc.prototype['checked'] = undefined;

/**
 * @member {Number} complete
 */
ProductMisc.prototype['complete'] = undefined;

/**
 * @member {Number} completeness
 */
ProductMisc.prototype['completeness'] = undefined;

/**
 * See also: `ecoscore_tags` 
 * @member {String} ecoscore_grade
 */
ProductMisc.prototype['ecoscore_grade'] = undefined;

/**
 * See also: `ecoscore_tags` 
 * @member {Number} ecoscore_score
 */
ProductMisc.prototype['ecoscore_score'] = undefined;

/**
 * @member {String} food_groups
 */
ProductMisc.prototype['food_groups'] = undefined;

/**
 * @member {Array.<String>} food_groups_tags
 */
ProductMisc.prototype['food_groups_tags'] = undefined;

/**
 * @member {module:model/ProductMiscNutrientLevels} nutrient_levels
 */
ProductMisc.prototype['nutrient_levels'] = undefined;

/**
 * Recycling instructions as raw text, e.g. Plastic bottle to recycle, Plastic cap to recycle. This will get automatically parsed and will be used to compute the Eco-Score. You can either request it (if it exists) or send it in a specific language. 
 * @member {String} packaging_text
 */
ProductMisc.prototype['packaging_text'] = undefined;

/**
 * The packagings object is an array of individual packaging component objects.  The Packaging data document explains how packaging data is structured in Open Food Facts: https://openfoodfacts.github.io/openfoodfacts-server/dev/explain-packaging-data/  The shape, material and recycling properties of each packaging component are linked to entries in the packaging_shapes, packaging_materials and packaging_recycling taxonomies:  https://world.openfoodfacts.org/data/taxonomies/packaging_shapes.json https://world.openfoodfacts.org/data/taxonomies/packaging_materials.json https://world.openfoodfacts.org/data/taxonomies/packaging_recycling.json  If the tags_lc field is set, the properties will include a lc_name field with the translation in the requested language.
 * @member {Array.<module:model/PackagingComponentREAD>} packagings
 */
ProductMisc.prototype['packagings'] = undefined;

/**
 * Indicate if the packagings array contains all the packaging parts of the product. This field can be set by users when they enter or verify packaging data. Possible values are 0 or 1.
 * @member {Number} packagings_complete
 */
ProductMisc.prototype['packagings_complete'] = undefined;

/**
 * Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9) 
 * @member {String} pnns_groups_1
 */
ProductMisc.prototype['pnns_groups_1'] = undefined;

/**
 * @member {Array.<String>} pnns_groups_1_tags
 */
ProductMisc.prototype['pnns_groups_1_tags'] = undefined;

/**
 * Sub Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9) 
 * @member {String} pnns_groups_2
 */
ProductMisc.prototype['pnns_groups_2'] = undefined;

/**
 * @member {Array.<String>} pnns_groups_2_tags
 */
ProductMisc.prototype['pnns_groups_2_tags'] = undefined;

/**
 * An imprecise measurement of popularity based on Scan statistics. A higher value means higher popularity. 
 * @member {Number} popularity_key
 */
ProductMisc.prototype['popularity_key'] = undefined;

/**
 * Indicators for the popularity of a product, like the amount of scans in a specific year. 
 * @member {Array.<String>} popularity_tags
 */
ProductMisc.prototype['popularity_tags'] = undefined;

/**
 * @member {Number} scans_n
 */
ProductMisc.prototype['scans_n'] = undefined;

/**
 * @member {Number} unique_scans_n
 */
ProductMisc.prototype['unique_scans_n'] = undefined;

/**
 * @member {Number} sortkey
 */
ProductMisc.prototype['sortkey'] = undefined;

/**
 * Normalized version of serving_size. Note that this is NOT the number of servings by product. <small>(in perl, see `normalize_serving_size`)</small> 
 * @member {String} serving_quantity
 */
ProductMisc.prototype['serving_quantity'] = undefined;

/**
 * The unit (either g or ml) for the correponding serving_quantity. 
 * @member {String} serving_quantity_unit
 */
ProductMisc.prototype['serving_quantity_unit'] = undefined;

/**
 * Serving size text (generally in g or ml). We expect a quantity + unit but the user is free to input any string. 
 * @member {String} serving_size
 */
ProductMisc.prototype['serving_size'] = undefined;






export default ProductMisc;

