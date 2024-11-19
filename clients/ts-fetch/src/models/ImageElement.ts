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
 * @interface ImageElement
 */
export interface ImageElement {
  /**
   * full URL of the image
   * @type {string}
   * @memberof ImageElement
   */
  url?: string;
  /**
   * Width of the image.
   *
   * This is just a suggestion coming from the server,
   * the client may choose to use its own dimensions for the image.
   *
   * @type {number}
   * @memberof ImageElement
   */
  width?: number;
  /**
   * Height of the image.
   *
   * This is just a suggestion coming from the server,
   * the client may choose to use its own dimensions for the image.
   *
   * @type {number}
   * @memberof ImageElement
   */
  height?: number;
  /**
   * Alt Text of the image.
   * @type {string}
   * @memberof ImageElement
   */
  alt_text?: string;
}

/**
 * Check if a given object implements the ImageElement interface.
 */
export function instanceOfImageElement(value: object): value is ImageElement {
  return true;
}

export function ImageElementFromJSON(json: any): ImageElement {
  return ImageElementFromJSONTyped(json, false);
}

export function ImageElementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ImageElement {
  if (json == null) {
    return json;
  }
  return {
    url: json["url"] == null ? undefined : json["url"],
    width: json["width"] == null ? undefined : json["width"],
    height: json["height"] == null ? undefined : json["height"],
    alt_text: json["alt_text"] == null ? undefined : json["alt_text"],
  };
}

export function ImageElementToJSON(json: any): ImageElement {
  return ImageElementToJSONTyped(json, false);
}

export function ImageElementToJSONTyped(
  value?: ImageElement | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    url: value["url"],
    width: value["width"],
    height: value["height"],
    alt_text: value["alt_text"],
  };
}