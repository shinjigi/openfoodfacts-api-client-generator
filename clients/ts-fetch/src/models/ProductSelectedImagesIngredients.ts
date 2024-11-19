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
 * URLs of thumbnails image of image of type `image_type`
 * @export
 * @interface ProductSelectedImagesIngredients
 */
export interface ProductSelectedImagesIngredients {
  /**
   * Thumbnail urls of product image (front) adapted to display on product page
   *
   * @type {object}
   * @memberof ProductSelectedImagesIngredients
   */
  display?: object;
  /**
   * Thumbnail urls of product image (front) adapted to display on product list page
   *
   * @type {object}
   * @memberof ProductSelectedImagesIngredients
   */
  small?: object;
  /**
   * Thumbnail urls of product image (front) in smallest format
   *
   * @type {object}
   * @memberof ProductSelectedImagesIngredients
   */
  thumb?: object;
}

/**
 * Check if a given object implements the ProductSelectedImagesIngredients interface.
 */
export function instanceOfProductSelectedImagesIngredients(
  value: object,
): value is ProductSelectedImagesIngredients {
  return true;
}

export function ProductSelectedImagesIngredientsFromJSON(
  json: any,
): ProductSelectedImagesIngredients {
  return ProductSelectedImagesIngredientsFromJSONTyped(json, false);
}

export function ProductSelectedImagesIngredientsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductSelectedImagesIngredients {
  if (json == null) {
    return json;
  }
  return {
    display: json["display"] == null ? undefined : json["display"],
    small: json["small"] == null ? undefined : json["small"],
    thumb: json["thumb"] == null ? undefined : json["thumb"],
  };
}

export function ProductSelectedImagesIngredientsToJSON(
  json: any,
): ProductSelectedImagesIngredients {
  return ProductSelectedImagesIngredientsToJSONTyped(json, false);
}

export function ProductSelectedImagesIngredientsToJSONTyped(
  value?: ProductSelectedImagesIngredients | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    display: value["display"],
    small: value["small"],
    thumb: value["thumb"],
  };
}
