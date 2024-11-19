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
 *
 * @export
 * @interface ProductEcoscoreAdjustmentsThreatenedSpecies
 */
export interface ProductEcoscoreAdjustmentsThreatenedSpecies {
  /**
   *
   * @type {string}
   * @memberof ProductEcoscoreAdjustmentsThreatenedSpecies
   */
  ingredient?: string;
  /**
   *
   * @type {number}
   * @memberof ProductEcoscoreAdjustmentsThreatenedSpecies
   */
  value?: number;
}

/**
 * Check if a given object implements the ProductEcoscoreAdjustmentsThreatenedSpecies interface.
 */
export function instanceOfProductEcoscoreAdjustmentsThreatenedSpecies(
  value: object,
): value is ProductEcoscoreAdjustmentsThreatenedSpecies {
  return true;
}

export function ProductEcoscoreAdjustmentsThreatenedSpeciesFromJSON(
  json: any,
): ProductEcoscoreAdjustmentsThreatenedSpecies {
  return ProductEcoscoreAdjustmentsThreatenedSpeciesFromJSONTyped(json, false);
}

export function ProductEcoscoreAdjustmentsThreatenedSpeciesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductEcoscoreAdjustmentsThreatenedSpecies {
  if (json == null) {
    return json;
  }
  return {
    ingredient: json["ingredient"] == null ? undefined : json["ingredient"],
    value: json["value"] == null ? undefined : json["value"],
  };
}

export function ProductEcoscoreAdjustmentsThreatenedSpeciesToJSON(
  json: any,
): ProductEcoscoreAdjustmentsThreatenedSpecies {
  return ProductEcoscoreAdjustmentsThreatenedSpeciesToJSONTyped(json, false);
}

export function ProductEcoscoreAdjustmentsThreatenedSpeciesToJSONTyped(
  value?: ProductEcoscoreAdjustmentsThreatenedSpecies | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ingredient: value["ingredient"],
    value: value["value"],
  };
}
