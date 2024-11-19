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
 * Schema for application credentials
 * @export
 * @interface AppCredentials
 */
export interface AppCredentials {
  /**
   * Name of the application
   * @type {string}
   * @memberof AppCredentials
   */
  app_name: string;
  /**
   * Version of the application
   * @type {string}
   * @memberof AppCredentials
   */
  app_version: string;
  /**
   * A salted random uuid (Unique identifier) for the user so that Open Food Facts moderators
   * can selectively ban any problematic user without banning your whole app account.
   *
   * @type {string}
   * @memberof AppCredentials
   */
  app_uuid: string;
}

/**
 * Check if a given object implements the AppCredentials interface.
 */
export function instanceOfAppCredentials(
  value: object,
): value is AppCredentials {
  if (!("app_name" in value) || value["app_name"] === undefined) return false;
  if (!("app_version" in value) || value["app_version"] === undefined)
    return false;
  if (!("app_uuid" in value) || value["app_uuid"] === undefined) return false;
  return true;
}

export function AppCredentialsFromJSON(json: any): AppCredentials {
  return AppCredentialsFromJSONTyped(json, false);
}

export function AppCredentialsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AppCredentials {
  if (json == null) {
    return json;
  }
  return {
    app_name: json["app_name"],
    app_version: json["app_version"],
    app_uuid: json["app_uuid"],
  };
}

export function AppCredentialsToJSON(json: any): AppCredentials {
  return AppCredentialsToJSONTyped(json, false);
}

export function AppCredentialsToJSONTyped(
  value?: AppCredentials | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    app_name: value["app_name"],
    app_version: value["app_version"],
    app_uuid: value["app_uuid"],
  };
}
