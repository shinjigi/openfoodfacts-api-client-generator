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
 * The PanelGroupElement model module.
 * @module model/PanelGroupElement
 * @version 2
 */
class PanelGroupElement {
    /**
     * Constructs a new <code>PanelGroupElement</code>.
     * The panel group element is used to display an optional title followed by a number of sub-panels.
     * @alias module:model/PanelGroupElement
     */
    constructor() { 
        
        PanelGroupElement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PanelGroupElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PanelGroupElement} obj Optional instance to populate.
     * @return {module:model/PanelGroupElement} The populated <code>PanelGroupElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PanelGroupElement();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('panel_ids')) {
                obj['panel_ids'] = ApiClient.convertToType(data['panel_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PanelGroupElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PanelGroupElement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['panel_ids'])) {
            throw new Error("Expected the field `panel_ids` to be an array in the JSON data but got " + data['panel_ids']);
        }

        return true;
    }


}



/**
 * @member {String} title
 */
PanelGroupElement.prototype['title'] = undefined;

/**
 * The ids of the panels to include. The ids are the keys of the panels in the panels object returned in the knowledge_panels field.
 * @member {Array.<String>} panel_ids
 */
PanelGroupElement.prototype['panel_ids'] = undefined;






export default PanelGroupElement;

