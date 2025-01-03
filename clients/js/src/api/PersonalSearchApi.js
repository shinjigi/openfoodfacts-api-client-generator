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


import ApiClient from "../ApiClient";
import AttributeGroup from '../model/AttributeGroup';
import GetPreferences200ResponseInner from '../model/GetPreferences200ResponseInner';

/**
* PersonalSearch service.
* @module api/PersonalSearchApi
* @version 2
*/
export default class PersonalSearchApi {

    /**
    * Constructs a new PersonalSearchApi. 
    * @alias module:api/PersonalSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAttributeGroups_0 operation.
     * @callback module:api/PersonalSearchApi~getAttributeGroups_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttributeGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of attributes available for personal search.
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user's preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * @param {Object} opts Optional parameters
     * @param {String} [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * @param {module:api/PersonalSearchApi~getAttributeGroups_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AttributeGroup>}
     */
    getAttributeGroups_0(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'lc': opts['lc']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AttributeGroup];
      return this.apiClient.callApi(
        '/api/v2/attribute_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPreferences_0 operation.
     * @callback module:api/PersonalSearchApi~getPreferences_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetPreferences200ResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the weights corresponding to attributes preferences to compute personal product 
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * @param {Object} opts Optional parameters
     * @param {String} [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * @param {module:api/PersonalSearchApi~getPreferences_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetPreferences200ResponseInner>}
     */
    getPreferences_0(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'lc': opts['lc']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetPreferences200ResponseInner];
      return this.apiClient.callApi(
        '/api/v2/preferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
