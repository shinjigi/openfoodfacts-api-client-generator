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
import { GetProductByBarcodeAllResponse } from '../models/GetProductByBarcodeAllResponse';
import { Nutrient } from '../models/Nutrient';
import { OcrOnProductResponse } from '../models/OcrOnProductResponse';
import { SearchForProductsResponse } from '../models/SearchForProductsResponse';

/**
 * no description
 */
export class ReadRequestsApiRequestFactory extends BaseAPIRequestFactory {

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
     * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 
     * Performing OCR on a Product
     * @param id 
     * @param code Barcode of the product
     * @param process_image 
     * @param ocr_engine 
     */
    public async getCgiIngredientsPl(id: string, code: string, process_image: string, ocr_engine: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReadRequestsApi", "getCgiIngredientsPl", "id");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ReadRequestsApi", "getCgiIngredientsPl", "code");
        }


        // verify required parameter 'process_image' is not null or undefined
        if (process_image === null || process_image === undefined) {
            throw new RequiredError("ReadRequestsApi", "getCgiIngredientsPl", "process_image");
        }


        // verify required parameter 'ocr_engine' is not null or undefined
        if (ocr_engine === null || ocr_engine === undefined) {
            throw new RequiredError("ReadRequestsApi", "getCgiIngredientsPl", "ocr_engine");
        }


        // Path Params
        const localVarPath = '/cgi/ingredients.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (process_image !== undefined) {
            requestContext.setQueryParam("process_image", ObjectSerializer.serialize(process_image, "string", ""));
        }

        // Query Params
        if (ocr_engine !== undefined) {
            requestContext.setQueryParam("ocr_engine", ObjectSerializer.serialize(ocr_engine, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * @param cc 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
     * @param lc 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public async getCgiNutrientsPl(cc?: string, lc?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/cgi/nutrients.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cc !== undefined) {
            requestContext.setQueryParam("cc", ObjectSerializer.serialize(cc, "string", ""));
        }

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
     * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 
     * Get Suggestions to Aid Adding/Editing Products
     * @param tagtype 
     * @param term 
     */
    public async getCgiSuggestPl(tagtype?: string, term?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/cgi/suggest.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tagtype !== undefined) {
            requestContext.setQueryParam("tagtype", ObjectSerializer.serialize(tagtype, "string", ""));
        }

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam("term", ObjectSerializer.serialize(term, "string", ""));
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

    /**
     * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 
     * Get information for a specific product by barcode
     * @param barcode The barcode of the product to be fetched
     * @param fields Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     */
    public async getProductByBarcode(barcode: string, fields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'barcode' is not null or undefined
        if (barcode === null || barcode === undefined) {
            throw new RequiredError("ReadRequestsApi", "getProductByBarcode", "barcode");
        }



        // Path Params
        const localVarPath = '/api/v2/product/{barcode}'
            .replace('{' + 'barcode' + '}', encodeURIComponent(String(barcode)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 
     * Search for Products
     * @param additives_tags The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param allergens_tags The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param brands_tags The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param categories_tags The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param countries_tags_en The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param emb_codes_tags The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param labels_tags The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param manufacturing_places_tags The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param nutrition_grades_tags The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param origins_tags The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param packaging_tags_de The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param purchase_places_tags The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param states_tags The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param stores_tags The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param traces_tags The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param tag_name_tags_language_code You can add a language code to a specific tag to query it in a specific language 
     * @param nutrient_lt_value Search on nutrient lower than a value 
     * @param nutrient_gt_value Search on nutrient greater than a value 
     * @param nutrient_eq_value Search on nutrient for an exact quantity 
     * @param fields Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     * @param sort_by The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date) 
     * @param page The page number you request to view (eg. in search results spanning multiple pages) 
     * @param page_size The number of elements should be sent per page 
     */
    public async getSearch(additives_tags?: string, allergens_tags?: string, brands_tags?: string, categories_tags?: string, countries_tags_en?: string, emb_codes_tags?: string, labels_tags?: string, manufacturing_places_tags?: string, nutrition_grades_tags?: string, origins_tags?: string, packaging_tags_de?: string, purchase_places_tags?: string, states_tags?: string, stores_tags?: string, traces_tags?: string, tag_name_tags_language_code?: any, nutrient_lt_value?: any, nutrient_gt_value?: any, nutrient_eq_value?: any, fields?: string, sort_by?: 'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score', page?: number, page_size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
























        // Path Params
        const localVarPath = '/api/v2/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (additives_tags !== undefined) {
            requestContext.setQueryParam("additives_tags", ObjectSerializer.serialize(additives_tags, "string", ""));
        }

        // Query Params
        if (allergens_tags !== undefined) {
            requestContext.setQueryParam("allergens_tags", ObjectSerializer.serialize(allergens_tags, "string", ""));
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
        if (countries_tags_en !== undefined) {
            requestContext.setQueryParam("countries_tags_en", ObjectSerializer.serialize(countries_tags_en, "string", ""));
        }

        // Query Params
        if (emb_codes_tags !== undefined) {
            requestContext.setQueryParam("emb_codes_tags", ObjectSerializer.serialize(emb_codes_tags, "string", ""));
        }

        // Query Params
        if (labels_tags !== undefined) {
            requestContext.setQueryParam("labels_tags", ObjectSerializer.serialize(labels_tags, "string", ""));
        }

        // Query Params
        if (manufacturing_places_tags !== undefined) {
            requestContext.setQueryParam("manufacturing_places_tags", ObjectSerializer.serialize(manufacturing_places_tags, "string", ""));
        }

        // Query Params
        if (nutrition_grades_tags !== undefined) {
            requestContext.setQueryParam("nutrition_grades_tags", ObjectSerializer.serialize(nutrition_grades_tags, "string", ""));
        }

        // Query Params
        if (origins_tags !== undefined) {
            requestContext.setQueryParam("origins_tags", ObjectSerializer.serialize(origins_tags, "string", ""));
        }

        // Query Params
        if (packaging_tags_de !== undefined) {
            requestContext.setQueryParam("packaging_tags_de", ObjectSerializer.serialize(packaging_tags_de, "string", ""));
        }

        // Query Params
        if (purchase_places_tags !== undefined) {
            requestContext.setQueryParam("purchase_places_tags", ObjectSerializer.serialize(purchase_places_tags, "string", ""));
        }

        // Query Params
        if (states_tags !== undefined) {
            requestContext.setQueryParam("states_tags", ObjectSerializer.serialize(states_tags, "string", ""));
        }

        // Query Params
        if (stores_tags !== undefined) {
            requestContext.setQueryParam("stores_tags", ObjectSerializer.serialize(stores_tags, "string", ""));
        }

        // Query Params
        if (traces_tags !== undefined) {
            requestContext.setQueryParam("traces_tags", ObjectSerializer.serialize(traces_tags, "string", ""));
        }

        // Query Params
        if (tag_name_tags_language_code !== undefined) {
            requestContext.setQueryParam("&lt;tag_name&gt;_tags_&lt;language_code&gt;", ObjectSerializer.serialize(tag_name_tags_language_code, "any", ""));
        }

        // Query Params
        if (nutrient_lt_value !== undefined) {
            const serializedParams = ObjectSerializer.serialize(nutrient_lt_value, "any", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (nutrient_gt_value !== undefined) {
            const serializedParams = ObjectSerializer.serialize(nutrient_gt_value, "any", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (nutrient_eq_value !== undefined) {
            const serializedParams = ObjectSerializer.serialize(nutrient_eq_value, "any", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Query Params
        if (sort_by !== undefined) {
            requestContext.setQueryParam("sort_by", ObjectSerializer.serialize(sort_by, "'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (page_size !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(page_size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ReadRequestsApiResponseProcessor {

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
     * @params response Response returned by the server for a request to getCgiIngredientsPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCgiIngredientsPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OcrOnProductResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OcrOnProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OcrOnProductResponse", ""
            ) as OcrOnProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OcrOnProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OcrOnProductResponse", ""
            ) as OcrOnProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCgiNutrientsPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCgiNutrientsPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Nutrient> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Nutrient> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Nutrient>", ""
            ) as Array<Nutrient>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Nutrient> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Nutrient>", ""
            ) as Array<Nutrient>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCgiSuggestPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCgiSuggestPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<any> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<any> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<any>", ""
            ) as Array<any>;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProductByBarcode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProductByBarcodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetProductByBarcodeAllResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetProductByBarcodeAllResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetProductByBarcodeAllResponse", ""
            ) as GetProductByBarcodeAllResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetProductByBarcodeAllResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetProductByBarcodeAllResponse", ""
            ) as GetProductByBarcodeAllResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchForProductsResponse >> {
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
