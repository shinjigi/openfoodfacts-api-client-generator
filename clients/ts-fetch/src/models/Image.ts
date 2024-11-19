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
import type { ImageSizes } from "./ImageSizes";
import {
  ImageSizesFromJSON,
  ImageSizesFromJSONTyped,
  ImageSizesToJSON,
  ImageSizesToJSONTyped,
} from "./ImageSizes";

/**
 * This object represent an image that was uploaded to a product.
 * "imgid" is an integer which is a sequential number unique to each picture.
 *
 * @export
 * @interface Image
 */
export interface Image {
  /**
   *
   * @type {ImageSizes}
   * @memberof Image
   */
  sizes?: ImageSizes;
  /**
   * The time the image was uploaded (as unix timestamp).
   *
   * @type {string}
   * @memberof Image
   */
  uploaded_t?: string;
  /**
   * The contributor that uploaded the image.
   *
   * @type {string}
   * @memberof Image
   */
  uploader?: string;
}

/**
 * Check if a given object implements the Image interface.
 */
export function instanceOfImage(value: object): value is Image {
  return true;
}

export function ImageFromJSON(json: any): Image {
  return ImageFromJSONTyped(json, false);
}

export function ImageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Image {
  if (json == null) {
    return json;
  }
  return {
    sizes:
      json["sizes"] == null ? undefined : ImageSizesFromJSON(json["sizes"]),
    uploaded_t: json["uploaded_t"] == null ? undefined : json["uploaded_t"],
    uploader: json["uploader"] == null ? undefined : json["uploader"],
  };
}

export function ImageToJSON(json: any): Image {
  return ImageToJSONTyped(json, false);
}

export function ImageToJSONTyped(
  value?: Image | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    sizes: ImageSizesToJSON(value["sizes"]),
    uploaded_t: value["uploaded_t"],
    uploader: value["uploader"],
  };
}
