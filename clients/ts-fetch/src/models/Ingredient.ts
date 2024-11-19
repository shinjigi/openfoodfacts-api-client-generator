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
import type { ProductIngredientsPercentMax } from "./ProductIngredientsPercentMax";
import {
  ProductIngredientsPercentMaxFromJSON,
  ProductIngredientsPercentMaxFromJSONTyped,
  ProductIngredientsPercentMaxToJSON,
  ProductIngredientsPercentMaxToJSONTyped,
} from "./ProductIngredientsPercentMax";

/**
 *
 * @export
 * @interface Ingredient
 */
export interface Ingredient {
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  ciqual_food_code?: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  ciqual_proxy_food_code?: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  ecobalyse_code?: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  from_palm_oil?: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  id?: string;
  /**
   * This structure gives the different ingredients and some information about them,
   * like estimate on their quantity.
   *
   * @type {Array<Ingredient>}
   * @memberof Ingredient
   */
  ingredients?: Array<Ingredient>;
  /**
   * The percentage of the ingredient.
   * @type {number}
   * @memberof Ingredient
   */
  percent?: number;
  /**
   *
   * @type {number}
   * @memberof Ingredient
   */
  is_in_taxonomy?: number;
  /**
   * Estimated percentage of the ingredient.
   * @type {number}
   * @memberof Ingredient
   */
  percent_estimate?: number;
  /**
   * A textual description of the processing applied to the ingredient.
   * This can include methods like roasting, frying, fermenting, or other techniques.
   *
   * @type {string}
   * @memberof Ingredient
   */
  processing?: string;
  /**
   *
   * @type {ProductIngredientsPercentMax}
   * @memberof Ingredient
   */
  percent_max?: ProductIngredientsPercentMax;
  /**
   * Minimum percentage of the ingredient.
   * @type {number}
   * @memberof Ingredient
   */
  percent_min?: number;
  /**
   * Text description of the ingredient.
   * @type {string}
   * @memberof Ingredient
   */
  text?: string;
  /**
   * Indicates if the ingredient is vegan.
   * @type {string}
   * @memberof Ingredient
   */
  vegan?: string;
  /**
   * Indicates if the ingredient is vegetarian.
   * @type {string}
   * @memberof Ingredient
   */
  vegetarian?: string;
}

/**
 * Check if a given object implements the Ingredient interface.
 */
export function instanceOfIngredient(value: object): value is Ingredient {
  return true;
}

export function IngredientFromJSON(json: any): Ingredient {
  return IngredientFromJSONTyped(json, false);
}

export function IngredientFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Ingredient {
  if (json == null) {
    return json;
  }
  return {
    ciqual_food_code:
      json["ciqual_food_code"] == null ? undefined : json["ciqual_food_code"],
    ciqual_proxy_food_code:
      json["ciqual_proxy_food_code"] == null
        ? undefined
        : json["ciqual_proxy_food_code"],
    ecobalyse_code:
      json["ecobalyse_code"] == null ? undefined : json["ecobalyse_code"],
    from_palm_oil:
      json["from_palm_oil"] == null ? undefined : json["from_palm_oil"],
    id: json["id"] == null ? undefined : json["id"],
    ingredients:
      json["ingredients"] == null
        ? undefined
        : (json["ingredients"] as Array<any>).map(IngredientFromJSON),
    percent: json["percent"] == null ? undefined : json["percent"],
    is_in_taxonomy:
      json["is_in_taxonomy"] == null ? undefined : json["is_in_taxonomy"],
    percent_estimate:
      json["percent_estimate"] == null ? undefined : json["percent_estimate"],
    processing: json["processing"] == null ? undefined : json["processing"],
    percent_max:
      json["percent_max"] == null
        ? undefined
        : ProductIngredientsPercentMaxFromJSON(json["percent_max"]),
    percent_min: json["percent_min"] == null ? undefined : json["percent_min"],
    text: json["text"] == null ? undefined : json["text"],
    vegan: json["vegan"] == null ? undefined : json["vegan"],
    vegetarian: json["vegetarian"] == null ? undefined : json["vegetarian"],
  };
}

export function IngredientToJSON(json: any): Ingredient {
  return IngredientToJSONTyped(json, false);
}

export function IngredientToJSONTyped(
  value?: Ingredient | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ciqual_food_code: value["ciqual_food_code"],
    ciqual_proxy_food_code: value["ciqual_proxy_food_code"],
    ecobalyse_code: value["ecobalyse_code"],
    from_palm_oil: value["from_palm_oil"],
    id: value["id"],
    ingredients:
      value["ingredients"] == null
        ? undefined
        : (value["ingredients"] as Array<any>).map(IngredientToJSON),
    percent: value["percent"],
    is_in_taxonomy: value["is_in_taxonomy"],
    percent_estimate: value["percent_estimate"],
    processing: value["processing"],
    percent_max: ProductIngredientsPercentMaxToJSON(value["percent_max"]),
    percent_min: value["percent_min"],
    text: value["text"],
    vegan: value["vegan"],
    vegetarian: value["vegetarian"],
  };
}
