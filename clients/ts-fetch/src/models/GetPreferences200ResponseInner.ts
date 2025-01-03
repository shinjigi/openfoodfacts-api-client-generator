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
 * @interface GetPreferences200ResponseInner
 */
export interface GetPreferences200ResponseInner {
  /**
   * id for the setting value
   * @type {string}
   * @memberof GetPreferences200ResponseInner
   */
  id?: GetPreferences200ResponseInnerIdEnum;
  /**
   * name for the setting value, translated according to `lc` parameter
   * @type {string}
   * @memberof GetPreferences200ResponseInner
   */
  name?: string;
  /**
   * factor to apply to the property of the product corresponding to attributes
   * having this setting value
   *
   * @type {number}
   * @memberof GetPreferences200ResponseInner
   */
  factor?: number;
  /**
   * FIXME
   *
   * @type {number}
   * @memberof GetPreferences200ResponseInner
   */
  minimum_match?: number;
}

/**
 * @export
 */
export const GetPreferences200ResponseInnerIdEnum = {
  not_important: "not_important",
  important: "important",
  very_important: "very_important",
  mandatory: "mandatory",
} as const;
export type GetPreferences200ResponseInnerIdEnum =
  (typeof GetPreferences200ResponseInnerIdEnum)[keyof typeof GetPreferences200ResponseInnerIdEnum];

/**
 * Check if a given object implements the GetPreferences200ResponseInner interface.
 */
export function instanceOfGetPreferences200ResponseInner(
  value: object,
): value is GetPreferences200ResponseInner {
  return true;
}

export function GetPreferences200ResponseInnerFromJSON(
  json: any,
): GetPreferences200ResponseInner {
  return GetPreferences200ResponseInnerFromJSONTyped(json, false);
}

export function GetPreferences200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPreferences200ResponseInner {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    name: json["name"] == null ? undefined : json["name"],
    factor: json["factor"] == null ? undefined : json["factor"],
    minimum_match:
      json["minimum_match"] == null ? undefined : json["minimum_match"],
  };
}

export function GetPreferences200ResponseInnerToJSON(
  json: any,
): GetPreferences200ResponseInner {
  return GetPreferences200ResponseInnerToJSONTyped(json, false);
}

export function GetPreferences200ResponseInnerToJSONTyped(
  value?: GetPreferences200ResponseInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    name: value["name"],
    factor: value["factor"],
    minimum_match: value["minimum_match"],
  };
}
