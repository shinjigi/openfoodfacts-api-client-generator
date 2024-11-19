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
import type { NutriscoreComponent } from "./NutriscoreComponent";
import {
  NutriscoreComponentFromJSON,
  NutriscoreComponentFromJSONTyped,
  NutriscoreComponentToJSON,
  NutriscoreComponentToJSONTyped,
} from "./NutriscoreComponent";

/**
 *
 * @export
 * @interface Nutriscore2023DataComponents
 */
export interface Nutriscore2023DataComponents {
  /**
   *
   * @type {Array<NutriscoreComponent>}
   * @memberof Nutriscore2023DataComponents
   */
  negative?: Array<NutriscoreComponent>;
  /**
   *
   * @type {Array<NutriscoreComponent>}
   * @memberof Nutriscore2023DataComponents
   */
  positive?: Array<NutriscoreComponent>;
}

/**
 * Check if a given object implements the Nutriscore2023DataComponents interface.
 */
export function instanceOfNutriscore2023DataComponents(
  value: object,
): value is Nutriscore2023DataComponents {
  return true;
}

export function Nutriscore2023DataComponentsFromJSON(
  json: any,
): Nutriscore2023DataComponents {
  return Nutriscore2023DataComponentsFromJSONTyped(json, false);
}

export function Nutriscore2023DataComponentsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Nutriscore2023DataComponents {
  if (json == null) {
    return json;
  }
  return {
    negative:
      json["negative"] == null
        ? undefined
        : (json["negative"] as Array<any>).map(NutriscoreComponentFromJSON),
    positive:
      json["positive"] == null
        ? undefined
        : (json["positive"] as Array<any>).map(NutriscoreComponentFromJSON),
  };
}

export function Nutriscore2023DataComponentsToJSON(
  json: any,
): Nutriscore2023DataComponents {
  return Nutriscore2023DataComponentsToJSONTyped(json, false);
}

export function Nutriscore2023DataComponentsToJSONTyped(
  value?: Nutriscore2023DataComponents | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    negative:
      value["negative"] == null
        ? undefined
        : (value["negative"] as Array<any>).map(NutriscoreComponentToJSON),
    positive:
      value["positive"] == null
        ? undefined
        : (value["positive"] as Array<any>).map(NutriscoreComponentToJSON),
  };
}
