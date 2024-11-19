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
import type { ProductEcoscoreData } from "./ProductEcoscoreData";
import {
  ProductEcoscoreDataFromJSON,
  ProductEcoscoreDataFromJSONTyped,
  ProductEcoscoreDataToJSON,
  ProductEcoscoreDataToJSONTyped,
} from "./ProductEcoscoreData";

/**
 * Fields related to Eco-Score for a product.
 *
 * See also: `ecoscore_score`, `ecoscore_grade` and `ecoscore_tags`.
 *
 * @export
 * @interface ProductEcoScore
 */
export interface ProductEcoScore {
  /**
   *
   * @type {ProductEcoscoreData}
   * @memberof ProductEcoScore
   */
  ecoscore_data?: ProductEcoscoreData;
  /**
   *
   * @type {string}
   * @memberof ProductEcoScore
   */
  ecoscore_extended_data_version?: string;
  /**
   *
   * @type {string}
   * @memberof ProductEcoScore
   */
  environment_impact_level?: string;
  /**
   *
   * @type {Array<object>}
   * @memberof ProductEcoScore
   */
  environment_impact_level_tags?: Array<object>;
}

/**
 * Check if a given object implements the ProductEcoScore interface.
 */
export function instanceOfProductEcoScore(
  value: object,
): value is ProductEcoScore {
  return true;
}

export function ProductEcoScoreFromJSON(json: any): ProductEcoScore {
  return ProductEcoScoreFromJSONTyped(json, false);
}

export function ProductEcoScoreFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductEcoScore {
  if (json == null) {
    return json;
  }
  return {
    ecoscore_data:
      json["ecoscore_data"] == null
        ? undefined
        : ProductEcoscoreDataFromJSON(json["ecoscore_data"]),
    ecoscore_extended_data_version:
      json["ecoscore_extended_data_version"] == null
        ? undefined
        : json["ecoscore_extended_data_version"],
    environment_impact_level:
      json["environment_impact_level"] == null
        ? undefined
        : json["environment_impact_level"],
    environment_impact_level_tags:
      json["environment_impact_level_tags"] == null
        ? undefined
        : json["environment_impact_level_tags"],
  };
}

export function ProductEcoScoreToJSON(json: any): ProductEcoScore {
  return ProductEcoScoreToJSONTyped(json, false);
}

export function ProductEcoScoreToJSONTyped(
  value?: ProductEcoScore | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ecoscore_data: ProductEcoscoreDataToJSON(value["ecoscore_data"]),
    ecoscore_extended_data_version: value["ecoscore_extended_data_version"],
    environment_impact_level: value["environment_impact_level"],
    environment_impact_level_tags: value["environment_impact_level_tags"],
  };
}
