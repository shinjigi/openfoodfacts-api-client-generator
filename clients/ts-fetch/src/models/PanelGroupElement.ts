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
 * The panel group element is used to display an optional title followed by a number of sub-panels.
 * @export
 * @interface PanelGroupElement
 */
export interface PanelGroupElement {
  /**
   *
   * @type {string}
   * @memberof PanelGroupElement
   */
  title?: string;
  /**
   * The ids of the panels to include. The ids are the keys of the panels in the panels object returned in the knowledge_panels field.
   * @type {Array<string>}
   * @memberof PanelGroupElement
   */
  panel_ids?: Array<string>;
}

/**
 * Check if a given object implements the PanelGroupElement interface.
 */
export function instanceOfPanelGroupElement(
  value: object,
): value is PanelGroupElement {
  return true;
}

export function PanelGroupElementFromJSON(json: any): PanelGroupElement {
  return PanelGroupElementFromJSONTyped(json, false);
}

export function PanelGroupElementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PanelGroupElement {
  if (json == null) {
    return json;
  }
  return {
    title: json["title"] == null ? undefined : json["title"],
    panel_ids: json["panel_ids"] == null ? undefined : json["panel_ids"],
  };
}

export function PanelGroupElementToJSON(json: any): PanelGroupElement {
  return PanelGroupElementToJSONTyped(json, false);
}

export function PanelGroupElementToJSONTyped(
  value?: PanelGroupElement | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    title: value["title"],
    panel_ids: value["panel_ids"],
  };
}
