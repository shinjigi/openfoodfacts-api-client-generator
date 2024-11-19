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
import type { Panels } from "./Panels";
import {
  PanelsFromJSON,
  PanelsFromJSONTyped,
  PanelsToJSON,
  PanelsToJSONTyped,
} from "./Panels";

/**
 * Knowledge panels for a product
 *
 * @export
 * @interface ProductKnowledgePanels
 */
export interface ProductKnowledgePanels {
  /**
   *
   * @type {Panels}
   * @memberof ProductKnowledgePanels
   */
  knowledge_panels?: Panels;
}

/**
 * Check if a given object implements the ProductKnowledgePanels interface.
 */
export function instanceOfProductKnowledgePanels(
  value: object,
): value is ProductKnowledgePanels {
  return true;
}

export function ProductKnowledgePanelsFromJSON(
  json: any,
): ProductKnowledgePanels {
  return ProductKnowledgePanelsFromJSONTyped(json, false);
}

export function ProductKnowledgePanelsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductKnowledgePanels {
  if (json == null) {
    return json;
  }
  return {
    knowledge_panels:
      json["knowledge_panels"] == null
        ? undefined
        : PanelsFromJSON(json["knowledge_panels"]),
  };
}

export function ProductKnowledgePanelsToJSON(
  json: any,
): ProductKnowledgePanels {
  return ProductKnowledgePanelsToJSONTyped(json, false);
}

export function ProductKnowledgePanelsToJSONTyped(
  value?: ProductKnowledgePanels | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    knowledge_panels: PanelsToJSON(value["knowledge_panels"]),
  };
}
