// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AttributeGroup } from '../models/AttributeGroup';
import { GetPreferences200ResponseInner } from '../models/GetPreferences200ResponseInner';

/**
 * no description
 */
export class PersonalSearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param lc 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public async getAttributeGroups(lc?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v2/attribute_groups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lc !== undefined) {
            requestContext.setQueryParam("lc", ObjectSerializer.serialize(lc, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param lc 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public async getPreferences(lc?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v2/preferences';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lc !== undefined) {
            requestContext.setQueryParam("lc", ObjectSerializer.serialize(lc, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PersonalSearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttributeGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttributeGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AttributeGroup> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AttributeGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AttributeGroup>", ""
            ) as Array<AttributeGroup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AttributeGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AttributeGroup>", ""
            ) as Array<AttributeGroup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPreferencesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<GetPreferences200ResponseInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<GetPreferences200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GetPreferences200ResponseInner>", ""
            ) as Array<GetPreferences200ResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<GetPreferences200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GetPreferences200ResponseInner>", ""
            ) as Array<GetPreferences200ResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
