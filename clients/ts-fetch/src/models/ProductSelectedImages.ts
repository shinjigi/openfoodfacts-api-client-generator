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
import type { ProductSelectedImagesIngredients } from "./ProductSelectedImagesIngredients";
import {
  ProductSelectedImagesIngredientsFromJSON,
  ProductSelectedImagesIngredientsFromJSONTyped,
  ProductSelectedImagesIngredientsToJSON,
  ProductSelectedImagesIngredientsToJSONTyped,
} from "./ProductSelectedImagesIngredients";

/**
 * URL for selected (important) images of the product.
 *
 * This is very handy if you display the product to users.
 *
 * @export
 * @interface ProductSelectedImages
 */
export interface ProductSelectedImages {
  /**
   *
   * @type {ProductSelectedImagesIngredients}
   * @memberof ProductSelectedImages
   */
  ingredients?: ProductSelectedImagesIngredients;
  /**
   *
   * @type {ProductSelectedImagesIngredients}
   * @memberof ProductSelectedImages
   */
  nutrition?: ProductSelectedImagesIngredients;
  /**
   *
   * @type {ProductSelectedImagesIngredients}
   * @memberof ProductSelectedImages
   */
  packaging?: ProductSelectedImagesIngredients;
  /**
   *
   * @type {ProductSelectedImagesIngredients}
   * @memberof ProductSelectedImages
   */
  front?: ProductSelectedImagesIngredients;
}

/**
 * Check if a given object implements the ProductSelectedImages interface.
 */
export function instanceOfProductSelectedImages(
  value: object,
): value is ProductSelectedImages {
  return true;
}

export function ProductSelectedImagesFromJSON(
  json: any,
): ProductSelectedImages {
  return ProductSelectedImagesFromJSONTyped(json, false);
}

export function ProductSelectedImagesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductSelectedImages {
  if (json == null) {
    return json;
  }
  return {
    ingredients:
      json["ingredients"] == null
        ? undefined
        : ProductSelectedImagesIngredientsFromJSON(json["ingredients"]),
    nutrition:
      json["nutrition"] == null
        ? undefined
        : ProductSelectedImagesIngredientsFromJSON(json["nutrition"]),
    packaging:
      json["packaging"] == null
        ? undefined
        : ProductSelectedImagesIngredientsFromJSON(json["packaging"]),
    front:
      json["front"] == null
        ? undefined
        : ProductSelectedImagesIngredientsFromJSON(json["front"]),
  };
}

export function ProductSelectedImagesToJSON(json: any): ProductSelectedImages {
  return ProductSelectedImagesToJSONTyped(json, false);
}

export function ProductSelectedImagesToJSONTyped(
  value?: ProductSelectedImages | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ingredients: ProductSelectedImagesIngredientsToJSON(value["ingredients"]),
    nutrition: ProductSelectedImagesIngredientsToJSON(value["nutrition"]),
    packaging: ProductSelectedImagesIngredientsToJSON(value["packaging"]),
    front: ProductSelectedImagesIngredientsToJSON(value["front"]),
  };
}