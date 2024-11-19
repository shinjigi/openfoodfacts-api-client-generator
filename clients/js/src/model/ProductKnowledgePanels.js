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
import Panels from './Panels';

/**
 * The ProductKnowledgePanels model module.
 * @module model/ProductKnowledgePanels
 * @version 2
 */
class ProductKnowledgePanels {
    /**
     * Constructs a new <code>ProductKnowledgePanels</code>.
     * Knowledge panels for a product 
     * @alias module:model/ProductKnowledgePanels
     */
    constructor() { 
        
        ProductKnowledgePanels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductKnowledgePanels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductKnowledgePanels} obj Optional instance to populate.
     * @return {module:model/ProductKnowledgePanels} The populated <code>ProductKnowledgePanels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductKnowledgePanels();

            if (data.hasOwnProperty('knowledge_panels')) {
                obj['knowledge_panels'] = Panels.constructFromObject(data['knowledge_panels']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductKnowledgePanels</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductKnowledgePanels</code>.
     */
    static validateJSON(data) {
        // validate the optional field `knowledge_panels`
        if (data['knowledge_panels']) { // data not null
          Panels.validateJSON(data['knowledge_panels']);
        }

        return true;
    }


}



/**
 * @member {module:model/Panels} knowledge_panels
 */
ProductKnowledgePanels.prototype['knowledge_panels'] = undefined;






export default ProductKnowledgePanels;

