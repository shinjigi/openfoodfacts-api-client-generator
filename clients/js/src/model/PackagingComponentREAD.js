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
 * The PackagingComponentREAD model module.
 * @module model/PackagingComponentREAD
 * @version 2
 */
class PackagingComponentREAD {
    /**
     * Constructs a new <code>PackagingComponentREAD</code>.
     * Each packaging component has different properties to specify how many there are, its shape, material etc.  The shape, material and recycling properties are mapped to one entry in the packaging_shapes, packaging_materials and packaging_recycling taxonomies, and the value of the property is the canonical name of the taxonomy entry (e.g. en:bottle).  They may contain values that could not yet get matched to their respective taxonomy, in which case they will contain a free text value prefixed with the language code of this text value (e.g. \&quot;fr:Bouteille sphérique\&quot; might have been entered by a French user to indicate it is a spherical bottle).
     * @alias module:model/PackagingComponentREAD
     */
    constructor() { 
        
        PackagingComponentREAD.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PackagingComponentREAD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackagingComponentREAD} obj Optional instance to populate.
     * @return {module:model/PackagingComponentREAD} The populated <code>PackagingComponentREAD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackagingComponentREAD();

            if (data.hasOwnProperty('number_of_units')) {
                obj['number_of_units'] = ApiClient.convertToType(data['number_of_units'], 'Number');
            }
            if (data.hasOwnProperty('shape')) {
                obj['shape'] = ApiClient.convertToType(data['shape'], 'String');
            }
            if (data.hasOwnProperty('material')) {
                obj['material'] = ApiClient.convertToType(data['material'], 'String');
            }
            if (data.hasOwnProperty('recycling')) {
                obj['recycling'] = ApiClient.convertToType(data['recycling'], 'String');
            }
            if (data.hasOwnProperty('quantity_per_unit')) {
                obj['quantity_per_unit'] = ApiClient.convertToType(data['quantity_per_unit'], 'String');
            }
            if (data.hasOwnProperty('quantity_per_unit_value')) {
                obj['quantity_per_unit_value'] = ApiClient.convertToType(data['quantity_per_unit_value'], 'Number');
            }
            if (data.hasOwnProperty('quantity_per_unit_unit')) {
                obj['quantity_per_unit_unit'] = ApiClient.convertToType(data['quantity_per_unit_unit'], 'String');
            }
            if (data.hasOwnProperty('weight_specified')) {
                obj['weight_specified'] = ApiClient.convertToType(data['weight_specified'], 'Number');
            }
            if (data.hasOwnProperty('weight_measured')) {
                obj['weight_measured'] = ApiClient.convertToType(data['weight_measured'], 'Number');
            }
            if (data.hasOwnProperty('weight_estimated')) {
                obj['weight_estimated'] = ApiClient.convertToType(data['weight_estimated'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('weight_source_id')) {
                obj['weight_source_id'] = ApiClient.convertToType(data['weight_source_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PackagingComponentREAD</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PackagingComponentREAD</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shape'] && !(typeof data['shape'] === 'string' || data['shape'] instanceof String)) {
            throw new Error("Expected the field `shape` to be a primitive type in the JSON string but got " + data['shape']);
        }
        // ensure the json data is a string
        if (data['material'] && !(typeof data['material'] === 'string' || data['material'] instanceof String)) {
            throw new Error("Expected the field `material` to be a primitive type in the JSON string but got " + data['material']);
        }
        // ensure the json data is a string
        if (data['recycling'] && !(typeof data['recycling'] === 'string' || data['recycling'] instanceof String)) {
            throw new Error("Expected the field `recycling` to be a primitive type in the JSON string but got " + data['recycling']);
        }
        // ensure the json data is a string
        if (data['quantity_per_unit'] && !(typeof data['quantity_per_unit'] === 'string' || data['quantity_per_unit'] instanceof String)) {
            throw new Error("Expected the field `quantity_per_unit` to be a primitive type in the JSON string but got " + data['quantity_per_unit']);
        }
        // ensure the json data is a string
        if (data['quantity_per_unit_unit'] && !(typeof data['quantity_per_unit_unit'] === 'string' || data['quantity_per_unit_unit'] instanceof String)) {
            throw new Error("Expected the field `quantity_per_unit_unit` to be a primitive type in the JSON string but got " + data['quantity_per_unit_unit']);
        }
        // ensure the json data is a string
        if (data['weight_source_id'] && !(typeof data['weight_source_id'] === 'string' || data['weight_source_id'] instanceof String)) {
            throw new Error("Expected the field `weight_source_id` to be a primitive type in the JSON string but got " + data['weight_source_id']);
        }

        return true;
    }


}



/**
 * umber of units of this packaging component contained in the product (e.g. 6 for a pack of 6 bottles)
 * @member {Number} number_of_units
 */
PackagingComponentREAD.prototype['number_of_units'] = undefined;

/**
 * @member {String} shape
 */
PackagingComponentREAD.prototype['shape'] = undefined;

/**
 * @member {String} material
 */
PackagingComponentREAD.prototype['material'] = undefined;

/**
 * @member {String} recycling
 */
PackagingComponentREAD.prototype['recycling'] = undefined;

/**
 * Quantity (weight or volume) of food product contained in the packaging component. (e.g. 75cl for a wine bottle)
 * @member {String} quantity_per_unit
 */
PackagingComponentREAD.prototype['quantity_per_unit'] = undefined;

/**
 * Value parsed from the quantity field.
 * @member {Number} quantity_per_unit_value
 */
PackagingComponentREAD.prototype['quantity_per_unit_value'] = undefined;

/**
 * Unit parsed and normalized from the quantity field.
 * @member {String} quantity_per_unit_unit
 */
PackagingComponentREAD.prototype['quantity_per_unit_unit'] = undefined;

/**
 * Weight (as specified by the manufacturer) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
 * @member {Number} weight_specified
 */
PackagingComponentREAD.prototype['weight_specified'] = undefined;

/**
 * Weight (as measured by one or more users) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
 * @member {Number} weight_measured
 */
PackagingComponentREAD.prototype['weight_measured'] = undefined;

/**
 * Weight (as estimated from similar products) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
 * @member {Number} weight_estimated
 */
PackagingComponentREAD.prototype['weight_estimated'] = undefined;

/**
 * Weight of one unit of the empty packaging component.
 * @member {Number} weight
 */
PackagingComponentREAD.prototype['weight'] = undefined;

/**
 * Indicates which field was used to populate the \"weight\" field. Either \"specified\", \"measured\", or \"estimated\"
 * @member {String} weight_source_id
 */
PackagingComponentREAD.prototype['weight_source_id'] = undefined;






export default PackagingComponentREAD;
