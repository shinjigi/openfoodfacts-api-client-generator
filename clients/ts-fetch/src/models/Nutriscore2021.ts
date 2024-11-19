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
import type { Nutriscore2021Data } from "./Nutriscore2021Data";
import {
  Nutriscore2021DataFromJSON,
  Nutriscore2021DataFromJSONTyped,
  Nutriscore2021DataToJSON,
  Nutriscore2021DataToJSONTyped,
} from "./Nutriscore2021Data";

/**
 *
 * @export
 * @interface Nutriscore2021
 */
export interface Nutriscore2021 {
  /**
   *
   * @type {number}
   * @memberof Nutriscore2021
   */
  category_available?: Nutriscore2021CategoryAvailableEnum;
  /**
   * Nutri-Score for the product as a letter.
   *
   * See https://world.openfoodfacts.org/nutriscore.
   *
   * @type {string}
   * @memberof Nutriscore2021
   */
  grade?: Nutriscore2021GradeEnum;
  /**
   *
   * @type {number}
   * @memberof Nutriscore2021
   */
  nutrients_available?: Nutriscore2021NutrientsAvailableEnum;
  /**
   *
   * @type {number}
   * @memberof Nutriscore2021
   */
  nutriscore_applicable?: Nutriscore2021NutriscoreApplicableEnum;
  /**
   *
   * @type {number}
   * @memberof Nutriscore2021
   */
  nutriscore_computed?: Nutriscore2021NutriscoreComputedEnum;
  /**
   *
   * @type {number}
   * @memberof Nutriscore2021
   */
  score?: number;
  /**
   *
   * @type {Nutriscore2021Data}
   * @memberof Nutriscore2021
   */
  data?: Nutriscore2021Data;
}

/**
 * @export
 */
export const Nutriscore2021CategoryAvailableEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type Nutriscore2021CategoryAvailableEnum =
  (typeof Nutriscore2021CategoryAvailableEnum)[keyof typeof Nutriscore2021CategoryAvailableEnum];

/**
 * @export
 */
export const Nutriscore2021GradeEnum = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
} as const;
export type Nutriscore2021GradeEnum =
  (typeof Nutriscore2021GradeEnum)[keyof typeof Nutriscore2021GradeEnum];

/**
 * @export
 */
export const Nutriscore2021NutrientsAvailableEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type Nutriscore2021NutrientsAvailableEnum =
  (typeof Nutriscore2021NutrientsAvailableEnum)[keyof typeof Nutriscore2021NutrientsAvailableEnum];

/**
 * @export
 */
export const Nutriscore2021NutriscoreApplicableEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type Nutriscore2021NutriscoreApplicableEnum =
  (typeof Nutriscore2021NutriscoreApplicableEnum)[keyof typeof Nutriscore2021NutriscoreApplicableEnum];

/**
 * @export
 */
export const Nutriscore2021NutriscoreComputedEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type Nutriscore2021NutriscoreComputedEnum =
  (typeof Nutriscore2021NutriscoreComputedEnum)[keyof typeof Nutriscore2021NutriscoreComputedEnum];

/**
 * Check if a given object implements the Nutriscore2021 interface.
 */
export function instanceOfNutriscore2021(
  value: object,
): value is Nutriscore2021 {
  return true;
}

export function Nutriscore2021FromJSON(json: any): Nutriscore2021 {
  return Nutriscore2021FromJSONTyped(json, false);
}

export function Nutriscore2021FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Nutriscore2021 {
  if (json == null) {
    return json;
  }
  return {
    category_available:
      json["category_available"] == null
        ? undefined
        : json["category_available"],
    grade: json["grade"] == null ? undefined : json["grade"],
    nutrients_available:
      json["nutrients_available"] == null
        ? undefined
        : json["nutrients_available"],
    nutriscore_applicable:
      json["nutriscore_applicable"] == null
        ? undefined
        : json["nutriscore_applicable"],
    nutriscore_computed:
      json["nutriscore_computed"] == null
        ? undefined
        : json["nutriscore_computed"],
    score: json["score"] == null ? undefined : json["score"],
    data:
      json["data"] == null
        ? undefined
        : Nutriscore2021DataFromJSON(json["data"]),
  };
}

export function Nutriscore2021ToJSON(json: any): Nutriscore2021 {
  return Nutriscore2021ToJSONTyped(json, false);
}

export function Nutriscore2021ToJSONTyped(
  value?: Nutriscore2021 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    category_available: value["category_available"],
    grade: value["grade"],
    nutrients_available: value["nutrients_available"],
    nutriscore_applicable: value["nutriscore_applicable"],
    nutriscore_computed: value["nutriscore_computed"],
    score: value["score"],
    data: Nutriscore2021DataToJSON(value["data"]),
  };
}
