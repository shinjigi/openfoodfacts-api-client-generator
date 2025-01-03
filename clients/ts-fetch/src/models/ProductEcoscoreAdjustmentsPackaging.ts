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
import type { AdjustmentsPackagingItem } from "./AdjustmentsPackagingItem";
import {
  AdjustmentsPackagingItemFromJSON,
  AdjustmentsPackagingItemFromJSONTyped,
  AdjustmentsPackagingItemToJSON,
  AdjustmentsPackagingItemToJSONTyped,
} from "./AdjustmentsPackagingItem";

/**
 *
 * @export
 * @interface ProductEcoscoreAdjustmentsPackaging
 */
export interface ProductEcoscoreAdjustmentsPackaging {
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreAdjustmentsPackaging
   */
  non_recyclable_and_non_biodegradable_materials?: number;
  /**
   *
   * @type {Array<AdjustmentsPackagingItem>}
   * @memberof ProductEcoscoreAdjustmentsPackaging
   */
  packagings?: Array<AdjustmentsPackagingItem>;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreAdjustmentsPackaging
   */
  score?: number;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreAdjustmentsPackaging
   */
  value?: number;
  /**
   *
   * @type {string}
   * @memberof ProductEcoscoreAdjustmentsPackaging
   */
  warning?: string;
}

/**
 * Check if a given object implements the ProductEcoscoreAdjustmentsPackaging interface.
 */
export function instanceOfProductEcoscoreAdjustmentsPackaging(
  value: object,
): value is ProductEcoscoreAdjustmentsPackaging {
  return true;
}

export function ProductEcoscoreAdjustmentsPackagingFromJSON(
  json: any,
): ProductEcoscoreAdjustmentsPackaging {
  return ProductEcoscoreAdjustmentsPackagingFromJSONTyped(json, false);
}

export function ProductEcoscoreAdjustmentsPackagingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductEcoscoreAdjustmentsPackaging {
  if (json == null) {
    return json;
  }
  return {
    non_recyclable_and_non_biodegradable_materials:
      json["non_recyclable_and_non_biodegradable_materials"] == null
        ? undefined
        : json["non_recyclable_and_non_biodegradable_materials"],
    packagings:
      json["packagings"] == null
        ? undefined
        : (json["packagings"] as Array<any>).map(
            AdjustmentsPackagingItemFromJSON,
          ),
    score: json["score"] == null ? undefined : json["score"],
    value: json["value"] == null ? undefined : json["value"],
    warning: json["warning"] == null ? undefined : json["warning"],
  };
}

export function ProductEcoscoreAdjustmentsPackagingToJSON(
  json: any,
): ProductEcoscoreAdjustmentsPackaging {
  return ProductEcoscoreAdjustmentsPackagingToJSONTyped(json, false);
}

export function ProductEcoscoreAdjustmentsPackagingToJSONTyped(
  value?: ProductEcoscoreAdjustmentsPackaging | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    non_recyclable_and_non_biodegradable_materials:
      value["non_recyclable_and_non_biodegradable_materials"],
    packagings:
      value["packagings"] == null
        ? undefined
        : (value["packagings"] as Array<any>).map(
            AdjustmentsPackagingItemToJSON,
          ),
    score: value["score"],
    value: value["value"],
    warning: value["warning"],
  };
}
