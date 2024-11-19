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
 * The TextElement model module.
 * @module model/TextElement
 * @version 2
 */
class TextElement {
    /**
     * Constructs a new <code>TextElement</code>.
     * A text in simple HTML format to display.  For some specific texts that correspond to a product field (e.g. a product name, the ingredients list of a product),the edit_field_* fields are used to indicate how to edit the field value.
     * @alias module:model/TextElement
     */
    constructor() { 
        
        TextElement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TextElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextElement} obj Optional instance to populate.
     * @return {module:model/TextElement} The populated <code>TextElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextElement();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('lc')) {
                obj['lc'] = ApiClient.convertToType(data['lc'], 'String');
            }
            if (data.hasOwnProperty('edit_field_id')) {
                obj['edit_field_id'] = ApiClient.convertToType(data['edit_field_id'], 'String');
            }
            if (data.hasOwnProperty('edit_field_type')) {
                obj['edit_field_type'] = ApiClient.convertToType(data['edit_field_type'], 'String');
            }
            if (data.hasOwnProperty('edit_field_value')) {
                obj['edit_field_value'] = ApiClient.convertToType(data['edit_field_value'], 'String');
            }
            if (data.hasOwnProperty('source_url')) {
                obj['source_url'] = ApiClient.convertToType(data['source_url'], 'String');
            }
            if (data.hasOwnProperty('source_text')) {
                obj['source_text'] = ApiClient.convertToType(data['source_text'], 'String');
            }
            if (data.hasOwnProperty('source_lc')) {
                obj['source_lc'] = ApiClient.convertToType(data['source_lc'], 'String');
            }
            if (data.hasOwnProperty('source_language')) {
                obj['source_language'] = ApiClient.convertToType(data['source_language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TextElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TextElement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['lc'] && !(typeof data['lc'] === 'string' || data['lc'] instanceof String)) {
            throw new Error("Expected the field `lc` to be a primitive type in the JSON string but got " + data['lc']);
        }
        // ensure the json data is a string
        if (data['edit_field_id'] && !(typeof data['edit_field_id'] === 'string' || data['edit_field_id'] instanceof String)) {
            throw new Error("Expected the field `edit_field_id` to be a primitive type in the JSON string but got " + data['edit_field_id']);
        }
        // ensure the json data is a string
        if (data['edit_field_type'] && !(typeof data['edit_field_type'] === 'string' || data['edit_field_type'] instanceof String)) {
            throw new Error("Expected the field `edit_field_type` to be a primitive type in the JSON string but got " + data['edit_field_type']);
        }
        // ensure the json data is a string
        if (data['edit_field_value'] && !(typeof data['edit_field_value'] === 'string' || data['edit_field_value'] instanceof String)) {
            throw new Error("Expected the field `edit_field_value` to be a primitive type in the JSON string but got " + data['edit_field_value']);
        }
        // ensure the json data is a string
        if (data['source_url'] && !(typeof data['source_url'] === 'string' || data['source_url'] instanceof String)) {
            throw new Error("Expected the field `source_url` to be a primitive type in the JSON string but got " + data['source_url']);
        }
        // ensure the json data is a string
        if (data['source_text'] && !(typeof data['source_text'] === 'string' || data['source_text'] instanceof String)) {
            throw new Error("Expected the field `source_text` to be a primitive type in the JSON string but got " + data['source_text']);
        }
        // ensure the json data is a string
        if (data['source_lc'] && !(typeof data['source_lc'] === 'string' || data['source_lc'] instanceof String)) {
            throw new Error("Expected the field `source_lc` to be a primitive type in the JSON string but got " + data['source_lc']);
        }
        // ensure the json data is a string
        if (data['source_language'] && !(typeof data['source_language'] === 'string' || data['source_language'] instanceof String)) {
            throw new Error("Expected the field `source_language` to be a primitive type in the JSON string but got " + data['source_language']);
        }

        return true;
    }


}



/**
 * the type of text, might influence the way you display it. 
 * @member {module:model/TextElement.TypeEnum} type
 */
TextElement.prototype['type'] = undefined;

/**
 * Text to display in HTML format.
 * @member {String} html
 */
TextElement.prototype['html'] = undefined;

/**
 * Language of the text. The name of the language is returned in the language requested when making the API call. e.g. if the text is in Polish, and the requested language is French, the language field will contain \"Polonais\" (French for \"Polish\"). Only set for specific fields such as the list of ingredients of a product.
 * @member {String} language
 */
TextElement.prototype['language'] = undefined;

/**
 * 2 letter language code for the text. Only set for specific fields such as the list of ingredients of a product.
 * @member {String} lc
 */
TextElement.prototype['lc'] = undefined;

/**
 * id of the field used to edit this text in the product edit API.
 * @member {String} edit_field_id
 */
TextElement.prototype['edit_field_id'] = undefined;

/**
 * Type of the product field.
 * @member {String} edit_field_type
 */
TextElement.prototype['edit_field_type'] = undefined;

/**
 * Current value of the product field. This may differ from the html field which can contain extra formating.
 * @member {String} edit_field_value
 */
TextElement.prototype['edit_field_value'] = undefined;

/**
 * Link to the source
 * @member {String} source_url
 */
TextElement.prototype['source_url'] = undefined;

/**
 * name of the source
 * @member {String} source_text
 */
TextElement.prototype['source_text'] = undefined;

/**
 * Source locale name
 * @member {String} source_lc
 */
TextElement.prototype['source_lc'] = undefined;

/**
 * Human readable source locale name
 * @member {String} source_language
 */
TextElement.prototype['source_language'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TextElement['TypeEnum'] = {

    /**
     * value: "summary"
     * @const
     */
    "summary": "summary",

    /**
     * value: "warning"
     * @const
     */
    "warning": "warning",

    /**
     * value: "notes"
     * @const
     */
    "notes": "notes"
};



export default TextElement;

