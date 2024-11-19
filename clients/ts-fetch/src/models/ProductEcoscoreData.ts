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

import { mapValues } from "../runtime";
import type { ProductEcoscoreDataPreviousData } from "./ProductEcoscoreDataPreviousData";
import {
  ProductEcoscoreDataPreviousDataFromJSON,
  ProductEcoscoreDataPreviousDataFromJSONTyped,
  ProductEcoscoreDataPreviousDataToJSON,
  ProductEcoscoreDataPreviousDataToJSONTyped,
} from "./ProductEcoscoreDataPreviousData";
import type { ProductEcoscoreDataMissing } from "./ProductEcoscoreDataMissing";
import {
  ProductEcoscoreDataMissingFromJSON,
  ProductEcoscoreDataMissingFromJSONTyped,
  ProductEcoscoreDataMissingToJSON,
  ProductEcoscoreDataMissingToJSONTyped,
} from "./ProductEcoscoreDataMissing";
import type { ProductEcoscoreAdjustments } from "./ProductEcoscoreAdjustments";
import {
  ProductEcoscoreAdjustmentsFromJSON,
  ProductEcoscoreAdjustmentsFromJSONTyped,
  ProductEcoscoreAdjustmentsToJSON,
  ProductEcoscoreAdjustmentsToJSONTyped,
} from "./ProductEcoscoreAdjustments";
import type { ProductEcoscoreDataAgribalyse } from "./ProductEcoscoreDataAgribalyse";
import {
  ProductEcoscoreDataAgribalyseFromJSON,
  ProductEcoscoreDataAgribalyseFromJSONTyped,
  ProductEcoscoreDataAgribalyseToJSON,
  ProductEcoscoreDataAgribalyseToJSONTyped,
} from "./ProductEcoscoreDataAgribalyse";

/**
 * An object about a lot of details about data needed for Eco-Score computation
 * and complementary data of interest.
 *
 * @export
 * @interface ProductEcoscoreData
 */
export interface ProductEcoscoreData {
  /**
   *
   * @type {ProductEcoscoreAdjustments}
   * @memberof ProductEcoscoreData
   */
  adjustments?: ProductEcoscoreAdjustments;
  /**
   *
   * @type {ProductEcoscoreDataAgribalyse}
   * @memberof ProductEcoscoreData
   */
  agribalyse?: ProductEcoscoreDataAgribalyse;
  /**
   *
   * @type {string}
   * @memberof ProductEcoscoreData
   */
  grade?: string;
  /**
   *
   * @type {object}
   * @memberof ProductEcoscoreData
   */
  grades?: object;
  /**
   *
   * @type {string}
   * @memberof ProductEcoscoreData
   */
  ecoscore_not_applicable_for_category?: string;
  /**
   *
   * @type {ProductEcoscoreDataMissing}
   * @memberof ProductEcoscoreData
   */
  missing?: ProductEcoscoreDataMissing;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreData
   */
  missing_data_warning?: number;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreData
   */
  missing_key_data?: number;
  /**
   *
   * @type {ProductEcoscoreDataPreviousData}
   * @memberof ProductEcoscoreData
   */
  previous_data?: ProductEcoscoreDataPreviousData;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreData
   */
  score?: number;
  /**
   *
   * @type {object}
   * @memberof ProductEcoscoreData
   */
  scores?: object;
  /**
   *
   * @type {string}
   * @memberof ProductEcoscoreData
   */
  status?: string;
}

/**
 * Check if a given object implements the ProductEcoscoreData interface.
 */
export function instanceOfProductEcoscoreData(
  value: object,
): value is ProductEcoscoreData {
  return true;
}

export function ProductEcoscoreDataFromJSON(json: any): ProductEcoscoreData {
  return ProductEcoscoreDataFromJSONTyped(json, false);
}

export function ProductEcoscoreDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductEcoscoreData {
  if (json == null) {
    return json;
  }
  return {
    adjustments:
      json["adjustments"] == null
        ? undefined
        : ProductEcoscoreAdjustmentsFromJSON(json["adjustments"]),
    agribalyse:
      json["agribalyse"] == null
        ? undefined
        : ProductEcoscoreDataAgribalyseFromJSON(json["agribalyse"]),
    grade: json["grade"] == null ? undefined : json["grade"],
    grades: json["grades"] == null ? undefined : json["grades"],
    ecoscore_not_applicable_for_category:
      json["ecoscore_not_applicable_for_category"] == null
        ? undefined
        : json["ecoscore_not_applicable_for_category"],
    missing:
      json["missing"] == null
        ? undefined
        : ProductEcoscoreDataMissingFromJSON(json["missing"]),
    missing_data_warning:
      json["missing_data_warning"] == null
        ? undefined
        : json["missing_data_warning"],
    missing_key_data:
      json["missing_key_data"] == null ? undefined : json["missing_key_data"],
    previous_data:
      json["previous_data"] == null
        ? undefined
        : ProductEcoscoreDataPreviousDataFromJSON(json["previous_data"]),
    score: json["score"] == null ? undefined : json["score"],
    scores: json["scores"] == null ? undefined : json["scores"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function ProductEcoscoreDataToJSON(json: any): ProductEcoscoreData {
  return ProductEcoscoreDataToJSONTyped(json, false);
}

export function ProductEcoscoreDataToJSONTyped(
  value?: ProductEcoscoreData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    adjustments: ProductEcoscoreAdjustmentsToJSON(value["adjustments"]),
    agribalyse: ProductEcoscoreDataAgribalyseToJSON(value["agribalyse"]),
    grade: value["grade"],
    grades: value["grades"],
    ecoscore_not_applicable_for_category:
      value["ecoscore_not_applicable_for_category"],
    missing: ProductEcoscoreDataMissingToJSON(value["missing"]),
    missing_data_warning: value["missing_data_warning"],
    missing_key_data: value["missing_key_data"],
    previous_data: ProductEcoscoreDataPreviousDataToJSON(
      value["previous_data"],
    ),
    score: value["score"],
    scores: value["scores"],
    status: value["status"],
  };
}
