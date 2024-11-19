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
 * The PanelElement model module.
 * @module model/PanelElement
 * @version 2
 */
class PanelElement {
    /**
     * Constructs a new <code>PanelElement</code>.
     * Panels can include other panels as sub-panels using the panel_element.
     * @alias module:model/PanelElement
     */
    constructor() { 
        
        PanelElement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PanelElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PanelElement} obj Optional instance to populate.
     * @return {module:model/PanelElement} The populated <code>PanelElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PanelElement();

            if (data.hasOwnProperty('panel_id')) {
                obj['panel_id'] = ApiClient.convertToType(data['panel_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PanelElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PanelElement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['panel_id'] && !(typeof data['panel_id'] === 'string' || data['panel_id'] instanceof String)) {
            throw new Error("Expected the field `panel_id` to be a primitive type in the JSON string but got " + data['panel_id']);
        }

        return true;
    }


}



/**
 * The id of the panel to include. The id is the key of the panel in the panels object returned in the knowledge_panels field.
 * @member {String} panel_id
 */
PanelElement.prototype['panel_id'] = undefined;






export default PanelElement;

