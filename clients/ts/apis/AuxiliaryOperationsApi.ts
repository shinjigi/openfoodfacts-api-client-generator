// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SearchForProductsResponse } from '../models/SearchForProductsResponse';
import { UnselectAPhotoResponse } from '../models/UnselectAPhotoResponse';

/**
 * no description
 */
export class AuxiliaryOperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 
     * Unselect A Photo
     * @param code code of the product
     * @param id image field (image id) of the photo to unselect
     */
    public async postCgiProductImageUnselectPl(code?: string, id?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/cgi/product_image_unselect.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (id !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('id', id as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search products with filters (GET)
     * Search products with filters (GET)
     * @param search_terms Text search terms
     * @param page 
     * @param page_size 
     * @param json 
     * @param fields 
     * @param sort_by 
     * @param states_tags 
     * @param brands_tags 
     * @param categories_tags 
     * @param labels_tags 
     * @param packaging_tags 
     * @param purchase_places_tags 
     * @param stores_tags 
     * @param countries_tags 
     * @param ingredients_tags 
     * @param trace_tags 
     */
    public async searchV1ProductsGet(search_terms?: string, page?: number, page_size?: number, json?: 1, fields?: string, sort_by?: 'popularity' | 'product_name' | 'created_t' | 'created_datetime' | 'completed_t' | 'last_modified_t' | 'last_modified_datetime' | 'unique_scans_n' | 'score', states_tags?: string, brands_tags?: string, categories_tags?: string, labels_tags?: string, packaging_tags?: string, purchase_places_tags?: string, stores_tags?: string, countries_tags?: string, ingredients_tags?: string, trace_tags?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

















        // Path Params
        const localVarPath = '/cgi/search.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (search_terms !== undefined) {
            requestContext.setQueryParam("search_terms", ObjectSerializer.serialize(search_terms, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (page_size !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(page_size, "number", ""));
        }

        // Query Params
        if (json !== undefined) {
            requestContext.setQueryParam("json", ObjectSerializer.serialize(json, "1", ""));
        }

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Query Params
        if (sort_by !== undefined) {
            requestContext.setQueryParam("sort_by", ObjectSerializer.serialize(sort_by, "'popularity' | 'product_name' | 'created_t' | 'created_datetime' | 'completed_t' | 'last_modified_t' | 'last_modified_datetime' | 'unique_scans_n' | 'score'", ""));
        }

        // Query Params
        if (states_tags !== undefined) {
            requestContext.setQueryParam("states_tags", ObjectSerializer.serialize(states_tags, "string", ""));
        }

        // Query Params
        if (brands_tags !== undefined) {
            requestContext.setQueryParam("brands_tags", ObjectSerializer.serialize(brands_tags, "string", ""));
        }

        // Query Params
        if (categories_tags !== undefined) {
            requestContext.setQueryParam("categories_tags", ObjectSerializer.serialize(categories_tags, "string", ""));
        }

        // Query Params
        if (labels_tags !== undefined) {
            requestContext.setQueryParam("labels_tags", ObjectSerializer.serialize(labels_tags, "string", ""));
        }

        // Query Params
        if (packaging_tags !== undefined) {
            requestContext.setQueryParam("packaging_tags", ObjectSerializer.serialize(packaging_tags, "string", ""));
        }

        // Query Params
        if (purchase_places_tags !== undefined) {
            requestContext.setQueryParam("purchase_places_tags", ObjectSerializer.serialize(purchase_places_tags, "string", ""));
        }

        // Query Params
        if (stores_tags !== undefined) {
            requestContext.setQueryParam("stores_tags", ObjectSerializer.serialize(stores_tags, "string", ""));
        }

        // Query Params
        if (countries_tags !== undefined) {
            requestContext.setQueryParam("countries_tags", ObjectSerializer.serialize(countries_tags, "string", ""));
        }

        // Query Params
        if (ingredients_tags !== undefined) {
            requestContext.setQueryParam("ingredients_tags", ObjectSerializer.serialize(ingredients_tags, "string", ""));
        }

        // Query Params
        if (trace_tags !== undefined) {
            requestContext.setQueryParam("trace_tags", ObjectSerializer.serialize(trace_tags, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search products with filters (POST)
     * Search products with filters (POST)
     * @param action 
     * @param sort_by 
     * @param page_size 
     * @param search_simple 
     * @param search_terms2 Search for words present in the product name, generic name, brands, categories, origins and labels
     * @param tagtype_0 First criteria type
     * @param tag_contains_0 First criteria condition
     * @param tag_0 First criteria value
     * @param tagtype_1 First criteria type
     * @param tag_contains_1 Second criteria condition
     * @param tag_1 Second criteria value
     * @param additives Filter by presence of additives
     * @param ingredients_from_palm_oil Filter by ingredients from palm oil
     * @param ingredients_that_may_be_from_palm_oil Filter by ingredients that may be from palm oil
     * @param ingredients_from_or_that_may_be_from_palm_oil Filter by ingredients from or that may be from palm oil
     * @param nutriment_0 
     * @param nutriment_compare_0 
     * @param nutriment_value_0 
     * @param nutriment_1 
     * @param nutriment_compare_1 
     * @param nutriment_value_1 
     * @param graph_title 
     * @param axis_x 
     * @param axis_y 
     * @param map_title 
     * @param page 
     * @param json 
     * @param fields 
     */
    public async searchV1ProductsPost(action: string, sort_by: string, page_size: number, search_simple?: number, search_terms2?: string, tagtype_0?: string, tag_contains_0?: string, tag_0?: string, tagtype_1?: string, tag_contains_1?: string, tag_1?: string, additives?: string, ingredients_from_palm_oil?: string, ingredients_that_may_be_from_palm_oil?: string, ingredients_from_or_that_may_be_from_palm_oil?: string, nutriment_0?: string, nutriment_compare_0?: string, nutriment_value_0?: string, nutriment_1?: string, nutriment_compare_1?: string, nutriment_value_1?: string, graph_title?: string, axis_x?: string, axis_y?: string, map_title?: string, page?: number, json?: number, fields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'action' is not null or undefined
        if (action === null || action === undefined) {
            throw new RequiredError("AuxiliaryOperationsApi", "searchV1ProductsPost", "action");
        }


        // verify required parameter 'sort_by' is not null or undefined
        if (sort_by === null || sort_by === undefined) {
            throw new RequiredError("AuxiliaryOperationsApi", "searchV1ProductsPost", "sort_by");
        }


        // verify required parameter 'page_size' is not null or undefined
        if (page_size === null || page_size === undefined) {
            throw new RequiredError("AuxiliaryOperationsApi", "searchV1ProductsPost", "page_size");
        }



























        // Path Params
        const localVarPath = '/cgi/search.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (search_simple !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('search_simple', search_simple as any);
        }
        if (search_terms2 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('search_terms2', search_terms2 as any);
        }
        if (tagtype_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tagtype_0', tagtype_0 as any);
        }
        if (tag_contains_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tag_contains_0', tag_contains_0 as any);
        }
        if (tag_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tag_0', tag_0 as any);
        }
        if (tagtype_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tagtype_1', tagtype_1 as any);
        }
        if (tag_contains_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tag_contains_1', tag_contains_1 as any);
        }
        if (tag_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('tag_1', tag_1 as any);
        }
        if (additives !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('additives', additives as any);
        }
        if (ingredients_from_palm_oil !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ingredients_from_palm_oil', ingredients_from_palm_oil as any);
        }
        if (ingredients_that_may_be_from_palm_oil !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ingredients_that_may_be_from_palm_oil', ingredients_that_may_be_from_palm_oil as any);
        }
        if (ingredients_from_or_that_may_be_from_palm_oil !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ingredients_from_or_that_may_be_from_palm_oil', ingredients_from_or_that_may_be_from_palm_oil as any);
        }
        if (nutriment_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_0', nutriment_0 as any);
        }
        if (nutriment_compare_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_compare_0', nutriment_compare_0 as any);
        }
        if (nutriment_value_0 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_value_0', nutriment_value_0 as any);
        }
        if (nutriment_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_1', nutriment_1 as any);
        }
        if (nutriment_compare_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_compare_1', nutriment_compare_1 as any);
        }
        if (nutriment_value_1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('nutriment_value_1', nutriment_value_1 as any);
        }
        if (graph_title !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('graph_title', graph_title as any);
        }
        if (axis_x !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('axis_x', axis_x as any);
        }
        if (axis_y !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('axis_y', axis_y as any);
        }
        if (map_title !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('map_title', map_title as any);
        }
        if (action !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('action', action as any);
        }
        if (sort_by !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('sort_by', sort_by as any);
        }
        if (page !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('page', page as any);
        }
        if (page_size !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('page_size', page_size as any);
        }
        if (json !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('json', json as any);
        }
        if (fields !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fields', fields as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AuxiliaryOperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCgiProductImageUnselectPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCgiProductImageUnselectPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UnselectAPhotoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UnselectAPhotoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnselectAPhotoResponse", ""
            ) as UnselectAPhotoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UnselectAPhotoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnselectAPhotoResponse", ""
            ) as UnselectAPhotoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchV1ProductsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchV1ProductsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchForProductsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchForProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchForProductsResponse", ""
            ) as SearchForProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchForProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchForProductsResponse", ""
            ) as SearchForProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchV1ProductsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchV1ProductsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchForProductsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchForProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchForProductsResponse", ""
            ) as SearchForProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchForProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchForProductsResponse", ""
            ) as SearchForProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
