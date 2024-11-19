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
/**
 * Maximum percentage of the ingredient.
 * @export
 * @interface IngredientPercentMax
 */
export interface IngredientPercentMax {}

/**
 * Check if a given object implements the IngredientPercentMax interface.
 */
export function instanceOfIngredientPercentMax(
  value: object,
): value is IngredientPercentMax {
  return true;
}

export function IngredientPercentMaxFromJSON(json: any): IngredientPercentMax {
  return IngredientPercentMaxFromJSONTyped(json, false);
}

export function IngredientPercentMaxFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IngredientPercentMax {
  return json;
}

export function IngredientPercentMaxToJSON(json: any): IngredientPercentMax {
  return IngredientPercentMaxToJSONTyped(json, false);
}

export function IngredientPercentMaxToJSONTyped(
  value?: IngredientPercentMax | null,
  ignoreDiscriminator: boolean = false,
): any {
  return value;
}
