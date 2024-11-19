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
  SearchForProductsResponse,
  UnselectAPhotoResponse,
} from "../models/index";
import {
  SearchForProductsResponseFromJSON,
  SearchForProductsResponseToJSON,
  UnselectAPhotoResponseFromJSON,
  UnselectAPhotoResponseToJSON,
} from "../models/index";

export interface PostCgiProductImageUnselectPlRequest {
  code?: string;
  id?: string;
}

export interface SearchV1ProductsGetRequest {
  search_terms?: string;
  page?: number;
  page_size?: number;
  json?: SearchV1ProductsGetJsonEnum;
  fields?: string;
  sort_by?: SearchV1ProductsGetSortByEnum;
  states_tags?: string;
  brands_tags?: string;
  categories_tags?: string;
  labels_tags?: string;
  packaging_tags?: string;
  purchase_places_tags?: string;
  stores_tags?: string;
  countries_tags?: string;
  ingredients_tags?: string;
  trace_tags?: string;
}

export interface SearchV1ProductsPostRequest {
  action: SearchV1ProductsPostActionEnum;
  sort_by: SearchV1ProductsPostSortByEnum;
  page_size: number;
  search_simple?: SearchV1ProductsPostSearchSimpleEnum;
  search_terms2?: string;
  tagtype_0?: SearchV1ProductsPostTagtype0Enum;
  tag_contains_0?: SearchV1ProductsPostTagContains0Enum;
  tag_0?: string;
  tagtype_1?: SearchV1ProductsPostTagtype1Enum;
  tag_contains_1?: SearchV1ProductsPostTagContains1Enum;
  tag_1?: string;
  additives?: SearchV1ProductsPostAdditivesEnum;
  ingredients_from_palm_oil?: SearchV1ProductsPostIngredientsFromPalmOilEnum;
  ingredients_that_may_be_from_palm_oil?: SearchV1ProductsPostIngredientsThatMayBeFromPalmOilEnum;
  ingredients_from_or_that_may_be_from_palm_oil?: SearchV1ProductsPostIngredientsFromOrThatMayBeFromPalmOilEnum;
  nutriment_0?: string;
  nutriment_compare_0?: SearchV1ProductsPostNutrimentCompare0Enum;
  nutriment_value_0?: string;
  nutriment_1?: string;
  nutriment_compare_1?: SearchV1ProductsPostNutrimentCompare1Enum;
  nutriment_value_1?: string;
  graph_title?: string;
  axis_x?: string;
  axis_y?: string;
  map_title?: string;
  page?: number;
  json?: SearchV1ProductsPostJsonEnum;
  fields?: string;
}

/**
 *
 */
export class AuxiliaryOperationsApi extends runtime.BaseAPI {
  /**
   * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect.
   * Unselect A Photo
   */
  async postCgiProductImageUnselectPlRaw(
    requestParameters: PostCgiProductImageUnselectPlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UnselectAPhotoResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [
      { contentType: "multipart/form-data" },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters["code"] != null) {
      formParams.append("code", requestParameters["code"] as any);
    }

    if (requestParameters["id"] != null) {
      formParams.append("id", requestParameters["id"] as any);
    }

    const response = await this.request(
      {
        path: `/cgi/product_image_unselect.pl`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UnselectAPhotoResponseFromJSON(jsonValue),
    );
  }

  /**
   * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect.
   * Unselect A Photo
   */
  async postCgiProductImageUnselectPl(
    requestParameters: PostCgiProductImageUnselectPlRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UnselectAPhotoResponse> {
    const response = await this.postCgiProductImageUnselectPlRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Search products with filters (GET)
   * Search products with filters (GET)
   */
  async searchV1ProductsGetRaw(
    requestParameters: SearchV1ProductsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SearchForProductsResponse>> {
    const queryParameters: any = {};

    if (requestParameters["search_terms"] != null) {
      queryParameters["search_terms"] = requestParameters["search_terms"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    if (requestParameters["page_size"] != null) {
      queryParameters["page_size"] = requestParameters["page_size"];
    }

    if (requestParameters["json"] != null) {
      queryParameters["json"] = requestParameters["json"];
    }

    if (requestParameters["fields"] != null) {
      queryParameters["fields"] = requestParameters["fields"];
    }

    if (requestParameters["sort_by"] != null) {
      queryParameters["sort_by"] = requestParameters["sort_by"];
    }

    if (requestParameters["states_tags"] != null) {
      queryParameters["states_tags"] = requestParameters["states_tags"];
    }

    if (requestParameters["brands_tags"] != null) {
      queryParameters["brands_tags"] = requestParameters["brands_tags"];
    }

    if (requestParameters["categories_tags"] != null) {
      queryParameters["categories_tags"] = requestParameters["categories_tags"];
    }

    if (requestParameters["labels_tags"] != null) {
      queryParameters["labels_tags"] = requestParameters["labels_tags"];
    }

    if (requestParameters["packaging_tags"] != null) {
      queryParameters["packaging_tags"] = requestParameters["packaging_tags"];
    }

    if (requestParameters["purchase_places_tags"] != null) {
      queryParameters["purchase_places_tags"] =
        requestParameters["purchase_places_tags"];
    }

    if (requestParameters["stores_tags"] != null) {
      queryParameters["stores_tags"] = requestParameters["stores_tags"];
    }

    if (requestParameters["countries_tags"] != null) {
      queryParameters["countries_tags"] = requestParameters["countries_tags"];
    }

    if (requestParameters["ingredients_tags"] != null) {
      queryParameters["ingredients_tags"] =
        requestParameters["ingredients_tags"];
    }

    if (requestParameters["trace_tags"] != null) {
      queryParameters["trace_tags"] = requestParameters["trace_tags"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cgi/search.pl`,
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
   * Search products with filters (GET)
   * Search products with filters (GET)
   */
  async searchV1ProductsGet(
    requestParameters: SearchV1ProductsGetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SearchForProductsResponse> {
    const response = await this.searchV1ProductsGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Search products with filters (POST)
   * Search products with filters (POST)
   */
  async searchV1ProductsPostRaw(
    requestParameters: SearchV1ProductsPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SearchForProductsResponse>> {
    if (requestParameters["action"] == null) {
      throw new runtime.RequiredError(
        "action",
        'Required parameter "action" was null or undefined when calling searchV1ProductsPost().',
      );
    }

    if (requestParameters["sort_by"] == null) {
      throw new runtime.RequiredError(
        "sort_by",
        'Required parameter "sort_by" was null or undefined when calling searchV1ProductsPost().',
      );
    }

    if (requestParameters["page_size"] == null) {
      throw new runtime.RequiredError(
        "page_size",
        'Required parameter "page_size" was null or undefined when calling searchV1ProductsPost().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [
      { contentType: "multipart/form-data" },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters["search_simple"] != null) {
      formParams.append(
        "search_simple",
        requestParameters["search_simple"] as any,
      );
    }

    if (requestParameters["search_terms2"] != null) {
      formParams.append(
        "search_terms2",
        requestParameters["search_terms2"] as any,
      );
    }

    if (requestParameters["tagtype_0"] != null) {
      formParams.append("tagtype_0", requestParameters["tagtype_0"] as any);
    }

    if (requestParameters["tag_contains_0"] != null) {
      formParams.append(
        "tag_contains_0",
        requestParameters["tag_contains_0"] as any,
      );
    }

    if (requestParameters["tag_0"] != null) {
      formParams.append("tag_0", requestParameters["tag_0"] as any);
    }

    if (requestParameters["tagtype_1"] != null) {
      formParams.append("tagtype_1", requestParameters["tagtype_1"] as any);
    }

    if (requestParameters["tag_contains_1"] != null) {
      formParams.append(
        "tag_contains_1",
        requestParameters["tag_contains_1"] as any,
      );
    }

    if (requestParameters["tag_1"] != null) {
      formParams.append("tag_1", requestParameters["tag_1"] as any);
    }

    if (requestParameters["additives"] != null) {
      formParams.append("additives", requestParameters["additives"] as any);
    }

    if (requestParameters["ingredients_from_palm_oil"] != null) {
      formParams.append(
        "ingredients_from_palm_oil",
        requestParameters["ingredients_from_palm_oil"] as any,
      );
    }

    if (requestParameters["ingredients_that_may_be_from_palm_oil"] != null) {
      formParams.append(
        "ingredients_that_may_be_from_palm_oil",
        requestParameters["ingredients_that_may_be_from_palm_oil"] as any,
      );
    }

    if (
      requestParameters["ingredients_from_or_that_may_be_from_palm_oil"] != null
    ) {
      formParams.append(
        "ingredients_from_or_that_may_be_from_palm_oil",
        requestParameters[
          "ingredients_from_or_that_may_be_from_palm_oil"
        ] as any,
      );
    }

    if (requestParameters["nutriment_0"] != null) {
      formParams.append("nutriment_0", requestParameters["nutriment_0"] as any);
    }

    if (requestParameters["nutriment_compare_0"] != null) {
      formParams.append(
        "nutriment_compare_0",
        requestParameters["nutriment_compare_0"] as any,
      );
    }

    if (requestParameters["nutriment_value_0"] != null) {
      formParams.append(
        "nutriment_value_0",
        requestParameters["nutriment_value_0"] as any,
      );
    }

    if (requestParameters["nutriment_1"] != null) {
      formParams.append("nutriment_1", requestParameters["nutriment_1"] as any);
    }

    if (requestParameters["nutriment_compare_1"] != null) {
      formParams.append(
        "nutriment_compare_1",
        requestParameters["nutriment_compare_1"] as any,
      );
    }

    if (requestParameters["nutriment_value_1"] != null) {
      formParams.append(
        "nutriment_value_1",
        requestParameters["nutriment_value_1"] as any,
      );
    }

    if (requestParameters["graph_title"] != null) {
      formParams.append("graph_title", requestParameters["graph_title"] as any);
    }

    if (requestParameters["axis_x"] != null) {
      formParams.append("axis_x", requestParameters["axis_x"] as any);
    }

    if (requestParameters["axis_y"] != null) {
      formParams.append("axis_y", requestParameters["axis_y"] as any);
    }

    if (requestParameters["map_title"] != null) {
      formParams.append("map_title", requestParameters["map_title"] as any);
    }

    if (requestParameters["action"] != null) {
      formParams.append("action", requestParameters["action"] as any);
    }

    if (requestParameters["sort_by"] != null) {
      formParams.append("sort_by", requestParameters["sort_by"] as any);
    }

    if (requestParameters["page"] != null) {
      formParams.append("page", requestParameters["page"] as any);
    }

    if (requestParameters["page_size"] != null) {
      formParams.append("page_size", requestParameters["page_size"] as any);
    }

    if (requestParameters["json"] != null) {
      formParams.append("json", requestParameters["json"] as any);
    }

    if (requestParameters["fields"] != null) {
      formParams.append("fields", requestParameters["fields"] as any);
    }

    const response = await this.request(
      {
        path: `/cgi/search.pl`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SearchForProductsResponseFromJSON(jsonValue),
    );
  }

  /**
   * Search products with filters (POST)
   * Search products with filters (POST)
   */
  async searchV1ProductsPost(
    requestParameters: SearchV1ProductsPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SearchForProductsResponse> {
    const response = await this.searchV1ProductsPostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}

/**
 * @export
 */
export const SearchV1ProductsGetJsonEnum = {
  NUMBER_1: 1,
} as const;
export type SearchV1ProductsGetJsonEnum =
  (typeof SearchV1ProductsGetJsonEnum)[keyof typeof SearchV1ProductsGetJsonEnum];
/**
 * @export
 */
export const SearchV1ProductsGetSortByEnum = {
  popularity: "popularity",
  product_name: "product_name",
  created_t: "created_t",
  created_datetime: "created_datetime",
  completed_t: "completed_t",
  last_modified_t: "last_modified_t",
  last_modified_datetime: "last_modified_datetime",
  unique_scans_n: "unique_scans_n",
  score: "score",
} as const;
export type SearchV1ProductsGetSortByEnum =
  (typeof SearchV1ProductsGetSortByEnum)[keyof typeof SearchV1ProductsGetSortByEnum];
/**
 * @export
 */
export const SearchV1ProductsPostActionEnum = {
  process: "process",
} as const;
export type SearchV1ProductsPostActionEnum =
  (typeof SearchV1ProductsPostActionEnum)[keyof typeof SearchV1ProductsPostActionEnum];
/**
 * @export
 */
export const SearchV1ProductsPostSortByEnum = {
  popularity: "popularity",
  product_name: "product_name",
  created_t: "created_t",
  created_datetime: "created_datetime",
  completed_t: "completed_t",
  last_modified_t: "last_modified_t",
  last_modified_datetime: "last_modified_datetime",
  unique_scans_n: "unique_scans_n",
} as const;
export type SearchV1ProductsPostSortByEnum =
  (typeof SearchV1ProductsPostSortByEnum)[keyof typeof SearchV1ProductsPostSortByEnum];
/**
 * @export
 */
export const SearchV1ProductsPostSearchSimpleEnum = {
  NUMBER_1: 1,
} as const;
export type SearchV1ProductsPostSearchSimpleEnum =
  (typeof SearchV1ProductsPostSearchSimpleEnum)[keyof typeof SearchV1ProductsPostSearchSimpleEnum];
/**
 * @export
 */
export const SearchV1ProductsPostTagtype0Enum = {
  search: "search",
  brands: "brands",
  categories: "categories",
  packaging: "packaging",
  labels: "labels",
  origins: "origins",
  manufacturing_places: "manufacturing_places",
  emb_codes: "emb_codes",
  purchase_places: "purchase_places",
  stores: "stores",
  countries: "countries",
  ingredients: "ingredients",
  additives: "additives",
  allergens: "allergens",
  traces: "traces",
  nutrition_grades: "nutrition_grades",
  nova_groups: "nova_groups",
  ecoscore: "ecoscore",
  languages: "languages",
  creator: "creator",
  editors: "editors",
  states: "states",
} as const;
export type SearchV1ProductsPostTagtype0Enum =
  (typeof SearchV1ProductsPostTagtype0Enum)[keyof typeof SearchV1ProductsPostTagtype0Enum];
/**
 * @export
 */
export const SearchV1ProductsPostTagContains0Enum = {
  contains: "contains",
  does_not_contain: "does_not_contain",
} as const;
export type SearchV1ProductsPostTagContains0Enum =
  (typeof SearchV1ProductsPostTagContains0Enum)[keyof typeof SearchV1ProductsPostTagContains0Enum];
/**
 * @export
 */
export const SearchV1ProductsPostTagtype1Enum = {
  search: "search",
  brands: "brands",
  categories: "categories",
  packaging: "packaging",
  labels: "labels",
  origins: "origins",
  manufacturing_places: "manufacturing_places",
  emb_codes: "emb_codes",
  purchase_places: "purchase_places",
  stores: "stores",
  countries: "countries",
  ingredients: "ingredients",
  additives: "additives",
  allergens: "allergens",
  traces: "traces",
  nutrition_grades: "nutrition_grades",
  nova_groups: "nova_groups",
  ecoscore: "ecoscore",
  languages: "languages",
  creator: "creator",
  editors: "editors",
  states: "states",
} as const;
export type SearchV1ProductsPostTagtype1Enum =
  (typeof SearchV1ProductsPostTagtype1Enum)[keyof typeof SearchV1ProductsPostTagtype1Enum];
/**
 * @export
 */
export const SearchV1ProductsPostTagContains1Enum = {
  contains: "contains",
  does_not_contain: "does_not_contain",
} as const;
export type SearchV1ProductsPostTagContains1Enum =
  (typeof SearchV1ProductsPostTagContains1Enum)[keyof typeof SearchV1ProductsPostTagContains1Enum];
/**
 * @export
 */
export const SearchV1ProductsPostAdditivesEnum = {
  without: "without",
  with: "with",
  indifferent: "indifferent",
} as const;
export type SearchV1ProductsPostAdditivesEnum =
  (typeof SearchV1ProductsPostAdditivesEnum)[keyof typeof SearchV1ProductsPostAdditivesEnum];
/**
 * @export
 */
export const SearchV1ProductsPostIngredientsFromPalmOilEnum = {
  without: "without",
  with: "with",
  indifferent: "indifferent",
} as const;
export type SearchV1ProductsPostIngredientsFromPalmOilEnum =
  (typeof SearchV1ProductsPostIngredientsFromPalmOilEnum)[keyof typeof SearchV1ProductsPostIngredientsFromPalmOilEnum];
/**
 * @export
 */
export const SearchV1ProductsPostIngredientsThatMayBeFromPalmOilEnum = {
  without: "without",
  with: "with",
  indifferent: "indifferent",
} as const;
export type SearchV1ProductsPostIngredientsThatMayBeFromPalmOilEnum =
  (typeof SearchV1ProductsPostIngredientsThatMayBeFromPalmOilEnum)[keyof typeof SearchV1ProductsPostIngredientsThatMayBeFromPalmOilEnum];
/**
 * @export
 */
export const SearchV1ProductsPostIngredientsFromOrThatMayBeFromPalmOilEnum = {
  without: "without",
  with: "with",
  indifferent: "indifferent",
} as const;
export type SearchV1ProductsPostIngredientsFromOrThatMayBeFromPalmOilEnum =
  (typeof SearchV1ProductsPostIngredientsFromOrThatMayBeFromPalmOilEnum)[keyof typeof SearchV1ProductsPostIngredientsFromOrThatMayBeFromPalmOilEnum];
/**
 * @export
 */
export const SearchV1ProductsPostNutrimentCompare0Enum = {
  lt: "lt",
  lte: "lte",
  gt: "gt",
  gte: "gte",
  eq: "eq",
} as const;
export type SearchV1ProductsPostNutrimentCompare0Enum =
  (typeof SearchV1ProductsPostNutrimentCompare0Enum)[keyof typeof SearchV1ProductsPostNutrimentCompare0Enum];
/**
 * @export
 */
export const SearchV1ProductsPostNutrimentCompare1Enum = {
  lt: "lt",
  lte: "lte",
  gt: "gt",
  gte: "gte",
  eq: "eq",
} as const;
export type SearchV1ProductsPostNutrimentCompare1Enum =
  (typeof SearchV1ProductsPostNutrimentCompare1Enum)[keyof typeof SearchV1ProductsPostNutrimentCompare1Enum];
/**
 * @export
 */
export const SearchV1ProductsPostJsonEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type SearchV1ProductsPostJsonEnum =
  (typeof SearchV1ProductsPostJsonEnum)[keyof typeof SearchV1ProductsPostJsonEnum];