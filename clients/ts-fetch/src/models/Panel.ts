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
import type { TitleElement } from "./TitleElement";
import {
  TitleElementFromJSON,
  TitleElementFromJSONTyped,
  TitleElementToJSON,
  TitleElementToJSONTyped,
} from "./TitleElement";
import type { Element } from "./Element";
import {
  ElementFromJSON,
  ElementFromJSONTyped,
  ElementToJSON,
  ElementToJSONTyped,
} from "./Element";

/**
 * Each panel contains an optional title and an optional array of elements.
 * @export
 * @interface Panel
 */
export interface Panel {
  /**
   * Type of the panel. If set to "card", the panel and its sub-panels should be displayed in a card. If set to "inline", the panel should have its content always displayed.
   * @type {string}
   * @memberof Panel
   */
  type?: string;
  /**
   * If true, the panel is to be displayed already expanded. If false, only the title should be displayed, and the user should be able to click or tap it to open the panel and display the elements.
   * @type {boolean}
   * @memberof Panel
   */
  expanded?: boolean;
  /**
   * If set to "large", the content of the panel should be expanded on large screens, but it should still be possible to unexpand it.
   * @type {string}
   * @memberof Panel
   */
  expand_for?: string;
  /**
   * A simple assessment of the panel value, typically used to format fonts, et.c e.g. bad = red
   * @type {string}
   * @memberof Panel
   */
  evaluation?: PanelEvaluationEnum;
  /**
   *
   * @type {TitleElement}
   * @memberof Panel
   */
  title_element?: TitleElement;
  /**
   * An ordered list of elements to display in the content of the panel.
   * @type {Array<Element>}
   * @memberof Panel
   */
  elements?: Array<Element>;
  /**
   * a message level, as levels we use in log.
   * It might help theming the panel visualy
   *
   * @type {string}
   * @memberof Panel
   */
  level?: string;
  /**
   * size is either empty (normal display)
   * or small to indicate a panel that should have a smaller font size
   *
   * @type {string}
   * @memberof Panel
   */
  size?: PanelSizeEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof Panel
   */
  topics?: Array<string>;
}

/**
 * @export
 */
export const PanelEvaluationEnum = {
  good: "good",
  average: "average",
  neutral: "neutral",
  bad: "bad",
  unknown: "unknown",
} as const;
export type PanelEvaluationEnum =
  (typeof PanelEvaluationEnum)[keyof typeof PanelEvaluationEnum];

/**
 * @export
 */
export const PanelSizeEnum = {
  small: "small",
} as const;
export type PanelSizeEnum = (typeof PanelSizeEnum)[keyof typeof PanelSizeEnum];

/**
 * Check if a given object implements the Panel interface.
 */
export function instanceOfPanel(value: object): value is Panel {
  return true;
}

export function PanelFromJSON(json: any): Panel {
  return PanelFromJSONTyped(json, false);
}

export function PanelFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Panel {
  if (json == null) {
    return json;
  }
  return {
    type: json["type"] == null ? undefined : json["type"],
    expanded: json["expanded"] == null ? undefined : json["expanded"],
    expand_for: json["expand_for"] == null ? undefined : json["expand_for"],
    evaluation: json["evaluation"] == null ? undefined : json["evaluation"],
    title_element:
      json["title_element"] == null
        ? undefined
        : TitleElementFromJSON(json["title_element"]),
    elements:
      json["elements"] == null
        ? undefined
        : (json["elements"] as Array<any>).map(ElementFromJSON),
    level: json["level"] == null ? undefined : json["level"],
    size: json["size"] == null ? undefined : json["size"],
    topics: json["topics"] == null ? undefined : json["topics"],
  };
}

export function PanelToJSON(json: any): Panel {
  return PanelToJSONTyped(json, false);
}

export function PanelToJSONTyped(
  value?: Panel | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    type: value["type"],
    expanded: value["expanded"],
    expand_for: value["expand_for"],
    evaluation: value["evaluation"],
    title_element: TitleElementToJSON(value["title_element"]),
    elements:
      value["elements"] == null
        ? undefined
        : (value["elements"] as Array<any>).map(ElementToJSON),
    level: value["level"],
    size: value["size"],
    topics: value["topics"],
  };
}
