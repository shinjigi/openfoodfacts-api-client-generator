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
 * The ProductNutritionNutriscoreData model module.
 * @module model/ProductNutritionNutriscoreData
 * @version 2
 */
class ProductNutritionNutriscoreData {
    /**
     * Constructs a new <code>ProductNutritionNutriscoreData</code>.
     * Detail of data the Nutri-Score was computed upon.  **Note**: this might not be stable, don&#39;t rely too much on this, or, at least, tell us !  **TODO** document each property 
     * @alias module:model/ProductNutritionNutriscoreData
     */
    constructor() { 
        
        ProductNutritionNutriscoreData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductNutritionNutriscoreData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductNutritionNutriscoreData} obj Optional instance to populate.
     * @return {module:model/ProductNutritionNutriscoreData} The populated <code>ProductNutritionNutriscoreData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductNutritionNutriscoreData();

            if (data.hasOwnProperty('saturated_fat_ratio')) {
                obj['saturated_fat_ratio'] = ApiClient.convertToType(data['saturated_fat_ratio'], 'Number');
            }
            if (data.hasOwnProperty('saturated_fat_ratio_points')) {
                obj['saturated_fat_ratio_points'] = ApiClient.convertToType(data['saturated_fat_ratio_points'], 'Number');
            }
            if (data.hasOwnProperty('saturated_fat_ratio_value')) {
                obj['saturated_fat_ratio_value'] = ApiClient.convertToType(data['saturated_fat_ratio_value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductNutritionNutriscoreData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductNutritionNutriscoreData</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} saturated_fat_ratio
 */
ProductNutritionNutriscoreData.prototype['saturated_fat_ratio'] = undefined;

/**
 * @member {Number} saturated_fat_ratio_points
 */
ProductNutritionNutriscoreData.prototype['saturated_fat_ratio_points'] = undefined;

/**
 * @member {Number} saturated_fat_ratio_value
 */
ProductNutritionNutriscoreData.prototype['saturated_fat_ratio_value'] = undefined;






export default ProductNutritionNutriscoreData;

