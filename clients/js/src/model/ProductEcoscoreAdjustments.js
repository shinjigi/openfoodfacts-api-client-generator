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
import ProductEcoscoreAdjustmentsOriginsOfIngredients from './ProductEcoscoreAdjustmentsOriginsOfIngredients';
import ProductEcoscoreAdjustmentsPackaging from './ProductEcoscoreAdjustmentsPackaging';
import ProductEcoscoreAdjustmentsProductionSystem from './ProductEcoscoreAdjustmentsProductionSystem';
import ProductEcoscoreAdjustmentsThreatenedSpecies from './ProductEcoscoreAdjustmentsThreatenedSpecies';

/**
 * The ProductEcoscoreAdjustments model module.
 * @module model/ProductEcoscoreAdjustments
 * @version 2
 */
class ProductEcoscoreAdjustments {
    /**
     * Constructs a new <code>ProductEcoscoreAdjustments</code>.
     * @alias module:model/ProductEcoscoreAdjustments
     */
    constructor() { 
        
        ProductEcoscoreAdjustments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductEcoscoreAdjustments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductEcoscoreAdjustments} obj Optional instance to populate.
     * @return {module:model/ProductEcoscoreAdjustments} The populated <code>ProductEcoscoreAdjustments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductEcoscoreAdjustments();

            if (data.hasOwnProperty('origins_of_ingredients')) {
                obj['origins_of_ingredients'] = ProductEcoscoreAdjustmentsOriginsOfIngredients.constructFromObject(data['origins_of_ingredients']);
            }
            if (data.hasOwnProperty('packaging')) {
                obj['packaging'] = ProductEcoscoreAdjustmentsPackaging.constructFromObject(data['packaging']);
            }
            if (data.hasOwnProperty('production_system')) {
                obj['production_system'] = ProductEcoscoreAdjustmentsProductionSystem.constructFromObject(data['production_system']);
            }
            if (data.hasOwnProperty('threatened_species')) {
                obj['threatened_species'] = ProductEcoscoreAdjustmentsThreatenedSpecies.constructFromObject(data['threatened_species']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductEcoscoreAdjustments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductEcoscoreAdjustments</code>.
     */
    static validateJSON(data) {
        // validate the optional field `origins_of_ingredients`
        if (data['origins_of_ingredients']) { // data not null
          ProductEcoscoreAdjustmentsOriginsOfIngredients.validateJSON(data['origins_of_ingredients']);
        }
        // validate the optional field `packaging`
        if (data['packaging']) { // data not null
          ProductEcoscoreAdjustmentsPackaging.validateJSON(data['packaging']);
        }
        // validate the optional field `production_system`
        if (data['production_system']) { // data not null
          ProductEcoscoreAdjustmentsProductionSystem.validateJSON(data['production_system']);
        }
        // validate the optional field `threatened_species`
        if (data['threatened_species']) { // data not null
          ProductEcoscoreAdjustmentsThreatenedSpecies.validateJSON(data['threatened_species']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductEcoscoreAdjustmentsOriginsOfIngredients} origins_of_ingredients
 */
ProductEcoscoreAdjustments.prototype['origins_of_ingredients'] = undefined;

/**
 * @member {module:model/ProductEcoscoreAdjustmentsPackaging} packaging
 */
ProductEcoscoreAdjustments.prototype['packaging'] = undefined;

/**
 * @member {module:model/ProductEcoscoreAdjustmentsProductionSystem} production_system
 */
ProductEcoscoreAdjustments.prototype['production_system'] = undefined;

/**
 * @member {module:model/ProductEcoscoreAdjustmentsThreatenedSpecies} threatened_species
 */
ProductEcoscoreAdjustments.prototype['threatened_species'] = undefined;






export default ProductEcoscoreAdjustments;
