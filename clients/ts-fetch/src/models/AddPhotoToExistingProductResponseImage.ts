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
 * @interface AddPhotoToExistingProductResponseImage
 */
export interface AddPhotoToExistingProductResponseImage {
  /**
   *
   * @type {string}
   * @memberof AddPhotoToExistingProductResponseImage
   */
  thumb_url?: string;
  /**
   *
   * @type {number}
   * @memberof AddPhotoToExistingProductResponseImage
   */
  imgid?: number;
  /**
   *
   * @type {string}
   * @memberof AddPhotoToExistingProductResponseImage
   */
  crop_url?: string;
}

/**
 * Check if a given object implements the AddPhotoToExistingProductResponseImage interface.
 */
export function instanceOfAddPhotoToExistingProductResponseImage(
  value: object,
): value is AddPhotoToExistingProductResponseImage {
  return true;
}

export function AddPhotoToExistingProductResponseImageFromJSON(
  json: any,
): AddPhotoToExistingProductResponseImage {
  return AddPhotoToExistingProductResponseImageFromJSONTyped(json, false);
}

export function AddPhotoToExistingProductResponseImageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AddPhotoToExistingProductResponseImage {
  if (json == null) {
    return json;
  }
  return {
    thumb_url: json["thumb_url"] == null ? undefined : json["thumb_url"],
    imgid: json["imgid"] == null ? undefined : json["imgid"],
    crop_url: json["crop_url"] == null ? undefined : json["crop_url"],
  };
}

export function AddPhotoToExistingProductResponseImageToJSON(
  json: any,
): AddPhotoToExistingProductResponseImage {
  return AddPhotoToExistingProductResponseImageToJSONTyped(json, false);
}

export function AddPhotoToExistingProductResponseImageToJSONTyped(
  value?: AddPhotoToExistingProductResponseImage | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    thumb_url: value["thumb_url"],
    imgid: value["imgid"],
    crop_url: value["crop_url"],
  };
}
