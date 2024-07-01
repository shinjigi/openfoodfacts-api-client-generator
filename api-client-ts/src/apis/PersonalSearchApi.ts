/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import type {
  GetAttributeGroups200ResponseInner,
  GetPreferences200ResponseInner,
} from '../models/index';
import {
    GetAttributeGroups200ResponseInnerFromJSON,
    GetAttributeGroups200ResponseInnerToJSON,
    GetPreferences200ResponseInnerFromJSON,
    GetPreferences200ResponseInnerToJSON,
} from '../models/index';

export interface GetAttributeGroupsRequest {
    lc?: string;
}

export interface GetPreferencesRequest {
    lc?: string;
}

/**
 * 
 */
export class PersonalSearchApi extends runtime.BaseAPI {

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     */
    async getAttributeGroupsRaw(requestParameters: GetAttributeGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetAttributeGroups200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['lc'] != null) {
            queryParameters['lc'] = requestParameters['lc'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/attribute_groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetAttributeGroups200ResponseInnerFromJSON));
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     */
    async getAttributeGroups(requestParameters: GetAttributeGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetAttributeGroups200ResponseInner>> {
        const response = await this.getAttributeGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * TODO
     * Get the weights corresponding to attributes preferences to compute personal product 
     */
    async getPreferencesRaw(requestParameters: GetPreferencesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetPreferences200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['lc'] != null) {
            queryParameters['lc'] = requestParameters['lc'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/preferences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetPreferences200ResponseInnerFromJSON));
    }

    /**
     * TODO
     * Get the weights corresponding to attributes preferences to compute personal product 
     */
    async getPreferences(requestParameters: GetPreferencesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetPreferences200ResponseInner>> {
        const response = await this.getPreferencesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}