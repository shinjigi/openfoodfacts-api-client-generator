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
import type { ProductKnowledgePanels } from "./ProductKnowledgePanels";
import {
  ProductKnowledgePanelsFromJSON,
  ProductKnowledgePanelsFromJSONTyped,
  ProductKnowledgePanelsToJSON,
  ProductKnowledgePanelsToJSONTyped,
} from "./ProductKnowledgePanels";

/**
 *
 * @export
 * @interface GetProductByBarcodeKnowledgePanelsResponse
 */
export interface GetProductByBarcodeKnowledgePanelsResponse {
  /**
   * Barcode of the product
   * (can be EAN-13 or internal codes for some food stores).
   * For products without a barcode, Open Food Facts assigns a
   * number starting with the 200 reserved prefix.
   *
   * @type {string}
   * @memberof GetProductByBarcodeKnowledgePanelsResponse
   */
  code?: string;
  /**
   * Return values based on ProductOpener/Display.pm analysis
   * @type {number}
   * @memberof GetProductByBarcodeKnowledgePanelsResponse
   */
  status?: GetProductByBarcodeKnowledgePanelsResponseStatusEnum;
  /**
   *
   * @type {string}
   * @memberof GetProductByBarcodeKnowledgePanelsResponse
   */
  status_verbose?: string;
  /**
   *
   * @type {ProductKnowledgePanels}
   * @memberof GetProductByBarcodeKnowledgePanelsResponse
   */
  product?: ProductKnowledgePanels;
}

/**
 * @export
 */
export const GetProductByBarcodeKnowledgePanelsResponseStatusEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type GetProductByBarcodeKnowledgePanelsResponseStatusEnum =
  (typeof GetProductByBarcodeKnowledgePanelsResponseStatusEnum)[keyof typeof GetProductByBarcodeKnowledgePanelsResponseStatusEnum];

/**
 * Check if a given object implements the GetProductByBarcodeKnowledgePanelsResponse interface.
 */
export function instanceOfGetProductByBarcodeKnowledgePanelsResponse(
  value: object,
): value is GetProductByBarcodeKnowledgePanelsResponse {
  return true;
}

export function GetProductByBarcodeKnowledgePanelsResponseFromJSON(
  json: any,
): GetProductByBarcodeKnowledgePanelsResponse {
  return GetProductByBarcodeKnowledgePanelsResponseFromJSONTyped(json, false);
}

export function GetProductByBarcodeKnowledgePanelsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetProductByBarcodeKnowledgePanelsResponse {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"] == null ? undefined : json["code"],
    status: json["status"] == null ? undefined : json["status"],
    status_verbose:
      json["status_verbose"] == null ? undefined : json["status_verbose"],
    product:
      json["product"] == null
        ? undefined
        : ProductKnowledgePanelsFromJSON(json["product"]),
  };
}

export function GetProductByBarcodeKnowledgePanelsResponseToJSON(
  json: any,
): GetProductByBarcodeKnowledgePanelsResponse {
  return GetProductByBarcodeKnowledgePanelsResponseToJSONTyped(json, false);
}

export function GetProductByBarcodeKnowledgePanelsResponseToJSONTyped(
  value?: GetProductByBarcodeKnowledgePanelsResponse | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    code: value["code"],
    status: value["status"],
    status_verbose: value["status_verbose"],
    product: ProductKnowledgePanelsToJSON(value["product"]),
  };
}
