/* tslint:disable */
/* eslint-disable */
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
 */

import * as runtime from "../runtime";
import type {
  AttributeGroup,
  GetPreferences200ResponseInner,
  GetProductByBarcodeAllResponse,
  Nutrient,
  OcrOnProductResponse,
  SearchForProductsResponse,
} from "../models/index";
import {
  AttributeGroupFromJSON,
  AttributeGroupToJSON,
  GetPreferences200ResponseInnerFromJSON,
  GetPreferences200ResponseInnerToJSON,
  GetProductByBarcodeAllResponseFromJSON,
  GetProductByBarcodeAllResponseToJSON,
  NutrientFromJSON,
  NutrientToJSON,
  OcrOnProductResponseFromJSON,
  OcrOnProductResponseToJSON,
  SearchForProductsResponseFromJSON,
  SearchForProductsResponseToJSON,
} from "../models/index";

export interface GetAttributeGroupsRequest {
  lc?: string;
}

export interface GetCgiIngredientsPlRequest {
  id: string;
  code: string;
  process_image: string;
  ocr_engine: string;
}

export interface GetCgiNutrientsPlRequest {
  cc?: string;
  lc?: string;
}

export interface GetCgiSuggestPlRequest {
  tagtype?: string;
  term?: string;
}

export interface GetPreferencesRequest {
  lc?: string;
}

export interface GetProductByBarcodeRequest {
  barcode: string;
  fields?: string;
}

export interface GetSearchRequest {
  additives_tags?: string;
  allergens_tags?: string;
  brands_tags?: string;
  categories_tags?: string;
  countries_tags_en?: string;
  emb_codes_tags?: string;
  labels_tags?: string;
  manufacturing_places_tags?: string;
  nutrition_grades_tags?: string;
  origins_tags?: string;
  packaging_tags_de?: string;
  purchase_places_tags?: string;
  states_tags?: string;
  stores_tags?: string;
  traces_tags?: string;
  tag_name_tags_language_code?: object;
  nutrient_lt_value?: object;
  nutrient_gt_value?: object;
  nutrient_eq_value?: object;
  fields?: string;
  sort_by?: GetSearchSortByEnum;
  page?: number;
  page_size?: number;
}

/**
 *
 */
export class ReadRequestsApi extends runtime.BaseAPI {
  /**
   * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated
   * Get the list of attributes available for personal search.
   */
  async getAttributeGroupsRaw(
    requestParameters: GetAttributeGroupsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<AttributeGroup>>> {
    const queryParameters: any = {};

    if (requestParameters["lc"] != null) {
      queryParameters["lc"] = requestParameters["lc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v2/attribute_groups`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AttributeGroupFromJSON),
    );
  }

  /**
   * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated
   * Get the list of attributes available for personal search.
   */
  async getAttributeGroups(
    requestParameters: GetAttributeGroupsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<AttributeGroup>> {
    const response = await this.getAttributeGroupsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels.
   * Performing OCR on a Product
   */
  async getCgiIngredientsPlRaw(
    requestParameters: GetCgiIngredientsPlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<OcrOnProductResponse>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getCgiIngredientsPl().',
      );
    }

    if (requestParameters["code"] == null) {
      throw new runtime.RequiredError(
        "code",
        'Required parameter "code" was null or undefined when calling getCgiIngredientsPl().',
      );
    }

    if (requestParameters["process_image"] == null) {
      throw new runtime.RequiredError(
        "process_image",
        'Required parameter "process_image" was null or undefined when calling getCgiIngredientsPl().',
      );
    }

    if (requestParameters["ocr_engine"] == null) {
      throw new runtime.RequiredError(
        "ocr_engine",
        'Required parameter "ocr_engine" was null or undefined when calling getCgiIngredientsPl().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["id"] != null) {
      queryParameters["id"] = requestParameters["id"];
    }

    if (requestParameters["code"] != null) {
      queryParameters["code"] = requestParameters["code"];
    }

    if (requestParameters["process_image"] != null) {
      queryParameters["process_image"] = requestParameters["process_image"];
    }

    if (requestParameters["ocr_engine"] != null) {
      queryParameters["ocr_engine"] = requestParameters["ocr_engine"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cgi/ingredients.pl`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      OcrOnProductResponseFromJSON(jsonValue),
    );
  }

  /**
   * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels.
   * Performing OCR on a Product
   */
  async getCgiIngredientsPl(
    requestParameters: GetCgiIngredientsPlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<OcrOnProductResponse> {
    const response = await this.getCgiIngredientsPlRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts.
   * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
   */
  async getCgiNutrientsPlRaw(
    requestParameters: GetCgiNutrientsPlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Nutrient>>> {
    const queryParameters: any = {};

    if (requestParameters["cc"] != null) {
      queryParameters["cc"] = requestParameters["cc"];
    }

    if (requestParameters["lc"] != null) {
      queryParameters["lc"] = requestParameters["lc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cgi/nutrients.pl`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(NutrientFromJSON),
    );
  }

  /**
   * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts.
   * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
   */
  async getCgiNutrientsPl(
    requestParameters: GetCgiNutrientsPlRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Nutrient>> {
    const response = await this.getCgiNutrientsPlRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field.
   * Get Suggestions to Aid Adding/Editing Products
   */
  async getCgiSuggestPlRaw(
    requestParameters: GetCgiSuggestPlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<any>>> {
    const queryParameters: any = {};

    if (requestParameters["tagtype"] != null) {
      queryParameters["tagtype"] = requestParameters["tagtype"];
    }

    if (requestParameters["term"] != null) {
      queryParameters["term"] = requestParameters["term"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cgi/suggest.pl`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field.
   * Get Suggestions to Aid Adding/Editing Products
   */
  async getCgiSuggestPl(
    requestParameters: GetCgiSuggestPlRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<any>> {
    const response = await this.getCgiSuggestPlRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences.
   * Get the weights corresponding to attributes preferences to compute personal product
   */
  async getPreferencesRaw(
    requestParameters: GetPreferencesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<GetPreferences200ResponseInner>>> {
    const queryParameters: any = {};

    if (requestParameters["lc"] != null) {
      queryParameters["lc"] = requestParameters["lc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v2/preferences`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(GetPreferences200ResponseInnerFromJSON),
    );
  }

  /**
   * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences.
   * Get the weights corresponding to attributes preferences to compute personal product
   */
  async getPreferences(
    requestParameters: GetPreferencesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<GetPreferences200ResponseInner>> {
    const response = await this.getPreferencesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels.
   * Get information for a specific product by barcode
   */
  async getProductByBarcodeRaw(
    requestParameters: GetProductByBarcodeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetProductByBarcodeAllResponse>> {
    if (requestParameters["barcode"] == null) {
      throw new runtime.RequiredError(
        "barcode",
        'Required parameter "barcode" was null or undefined when calling getProductByBarcode().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["fields"] != null) {
      queryParameters["fields"] = requestParameters["fields"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v2/product/{barcode}`.replace(
          `{${"barcode"}}`,
          encodeURIComponent(String(requestParameters["barcode"])),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetProductByBarcodeAllResponseFromJSON(jsonValue),
    );
  }

  /**
   * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels.
   * Get information for a specific product by barcode
   */
  async getProductByBarcode(
    requestParameters: GetProductByBarcodeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetProductByBarcodeAllResponse> {
    const response = await this.getProductByBarcodeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2)
   * Search for Products
   */
  async getSearchRaw(
    requestParameters: GetSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SearchForProductsResponse>> {
    const queryParameters: any = {};

    if (requestParameters["additives_tags"] != null) {
      queryParameters["additives_tags"] = requestParameters["additives_tags"];
    }

    if (requestParameters["allergens_tags"] != null) {
      queryParameters["allergens_tags"] = requestParameters["allergens_tags"];
    }

    if (requestParameters["brands_tags"] != null) {
      queryParameters["brands_tags"] = requestParameters["brands_tags"];
    }

    if (requestParameters["categories_tags"] != null) {
      queryParameters["categories_tags"] = requestParameters["categories_tags"];
    }

    if (requestParameters["countries_tags_en"] != null) {
      queryParameters["countries_tags_en"] =
        requestParameters["countries_tags_en"];
    }

    if (requestParameters["emb_codes_tags"] != null) {
      queryParameters["emb_codes_tags"] = requestParameters["emb_codes_tags"];
    }

    if (requestParameters["labels_tags"] != null) {
      queryParameters["labels_tags"] = requestParameters["labels_tags"];
    }

    if (requestParameters["manufacturing_places_tags"] != null) {
      queryParameters["manufacturing_places_tags"] =
        requestParameters["manufacturing_places_tags"];
    }

    if (requestParameters["nutrition_grades_tags"] != null) {
      queryParameters["nutrition_grades_tags"] =
        requestParameters["nutrition_grades_tags"];
    }

    if (requestParameters["origins_tags"] != null) {
      queryParameters["origins_tags"] = requestParameters["origins_tags"];
    }

    if (requestParameters["packaging_tags_de"] != null) {
      queryParameters["packaging_tags_de"] =
        requestParameters["packaging_tags_de"];
    }

    if (requestParameters["purchase_places_tags"] != null) {
      queryParameters["purchase_places_tags"] =
        requestParameters["purchase_places_tags"];
    }

    if (requestParameters["states_tags"] != null) {
      queryParameters["states_tags"] = requestParameters["states_tags"];
    }

    if (requestParameters["stores_tags"] != null) {
      queryParameters["stores_tags"] = requestParameters["stores_tags"];
    }

    if (requestParameters["traces_tags"] != null) {
      queryParameters["traces_tags"] = requestParameters["traces_tags"];
    }

    if (requestParameters["tag_name_tags_language_code"] != null) {
      queryParameters["&lt;tag_name&gt;_tags_&lt;language_code&gt;"] =
        requestParameters["tag_name_tags_language_code"];
    }

    if (requestParameters["nutrient_lt_value"] != null) {
      queryParameters["&lt;nutrient&gt;_lt_&lt;value&gt;"] =
        requestParameters["nutrient_lt_value"];
    }

    if (requestParameters["nutrient_gt_value"] != null) {
      queryParameters["&lt;nutrient&gt;_gt_&lt;value&gt;"] =
        requestParameters["nutrient_gt_value"];
    }

    if (requestParameters["nutrient_eq_value"] != null) {
      queryParameters["&lt;nutrient&gt;_eq_&lt;value&gt;"] =
        requestParameters["nutrient_eq_value"];
    }

    if (requestParameters["fields"] != null) {
      queryParameters["fields"] = requestParameters["fields"];
    }

    if (requestParameters["sort_by"] != null) {
      queryParameters["sort_by"] = requestParameters["sort_by"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    if (requestParameters["page_size"] != null) {
      queryParameters["page_size"] = requestParameters["page_size"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v2/search`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SearchForProductsResponseFromJSON(jsonValue),
    );
  }

  /**
   * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2)
   * Search for Products
   */
  async getSearch(
    requestParameters: GetSearchRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SearchForProductsResponse> {
    const response = await this.getSearchRaw(requestParameters, initOverrides);
    return await response.value();
  }
}

/**
 * @export
 */
export const GetSearchSortByEnum = {
  product_name: "product_name",
  last_modified_t: "last_modified_t",
  scans_n: "scans_n",
  unique_scans_n: "unique_scans_n",
  created_t: "created_t",
  completeness: "completeness",
  popularity_key: "popularity_key",
  nutriscore_score: "nutriscore_score",
  nova_score: "nova_score",
  nothing: "nothing",
  ecoscore_score: "ecoscore_score",
} as const;
export type GetSearchSortByEnum =
  (typeof GetSearchSortByEnum)[keyof typeof GetSearchSortByEnum];
