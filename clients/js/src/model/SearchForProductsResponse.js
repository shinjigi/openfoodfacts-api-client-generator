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
import Product from './Product';

/**
 * The SearchForProductsResponse model module.
 * @module model/SearchForProductsResponse
 * @version 2
 */
class SearchForProductsResponse {
    /**
     * Constructs a new <code>SearchForProductsResponse</code>.
     * @alias module:model/SearchForProductsResponse
     */
    constructor() { 
        
        SearchForProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchForProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchForProductsResponse} obj Optional instance to populate.
     * @return {module:model/SearchForProductsResponse} The populated <code>SearchForProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchForProductsResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [Product]);
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchForProductsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchForProductsResponse</code>.
     */
    static validateJSON(data) {
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                Product.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Total number of products found 
 * @member {Number} count
 */
SearchForProductsResponse.prototype['count'] = undefined;

/**
 * Page number of returned results.  You can get a different page, by using the `page` query parameter. 
 * @member {Number} page
 */
SearchForProductsResponse.prototype['page'] = undefined;

/**
 * Number of products in this page.  This will differ from page_size only on the last page. 
 * @member {Number} page_count
 */
SearchForProductsResponse.prototype['page_count'] = undefined;

/**
 * Requested number of products per pages  To get the number of pages, divide count by page_size (eg. `Math.floor( count / page_size) + 1 `) 
 * @member {Number} page_size
 */
SearchForProductsResponse.prototype['page_size'] = undefined;

/**
 * The products matching the query corresponding to current page 
 * @member {Array.<module:model/Product>} products
 */
SearchForProductsResponse.prototype['products'] = undefined;

/**
 * @member {Number} skip
 */
SearchForProductsResponse.prototype['skip'] = undefined;






export default SearchForProductsResponse;

