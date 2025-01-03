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
 * @interface ProductIngredientsPercentMax
 */
export interface ProductIngredientsPercentMax {}

/**
 * Check if a given object implements the ProductIngredientsPercentMax interface.
 */
export function instanceOfProductIngredientsPercentMax(
  value: object,
): value is ProductIngredientsPercentMax {
  return true;
}

export function ProductIngredientsPercentMaxFromJSON(
  json: any,
): ProductIngredientsPercentMax {
  return ProductIngredientsPercentMaxFromJSONTyped(json, false);
}

export function ProductIngredientsPercentMaxFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductIngredientsPercentMax {
  return json;
}

export function ProductIngredientsPercentMaxToJSON(
  json: any,
): ProductIngredientsPercentMax {
  return ProductIngredientsPercentMaxToJSONTyped(json, false);
}

export function ProductIngredientsPercentMaxToJSONTyped(
  value?: ProductIngredientsPercentMax | null,
  ignoreDiscriminator: boolean = false,
): any {
  return value;
}
