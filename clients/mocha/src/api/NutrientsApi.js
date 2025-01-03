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


import ApiClient from "../ApiClient";
import Nutrient from '../model/Nutrient';

/**
* Nutrients service.
* @module api/NutrientsApi
* @version 2
*/
export default class NutrientsApi {

    /**
    * Constructs a new NutrientsApi. 
    * @alias module:api/NutrientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCgiNutrientsPl operation.
     * @callback module:api/NutrientsApi~getCgiNutrientsPlCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Nutrient>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * @param {Object} opts Optional parameters
     * @param {String} [cc] 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
     * @param {String} [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * @param {module:api/NutrientsApi~getCgiNutrientsPlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Nutrient>}
     */
    getCgiNutrientsPl(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cc': opts['cc'],
        'lc': opts['lc']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = [Nutrient];
      return this.apiClient.callApi(
        '/cgi/nutrients.pl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
