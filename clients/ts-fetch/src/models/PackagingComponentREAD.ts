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
 * Each packaging component has different properties to specify how many there are, its shape, material etc.
 *
 * The shape, material and recycling properties are mapped to one entry in the packaging_shapes, packaging_materials and packaging_recycling taxonomies, and the value of the property is the canonical name of the taxonomy entry (e.g. en:bottle).
 *
 * They may contain values that could not yet get matched to their respective taxonomy, in which case they will contain a free text value prefixed with the language code of this text value (e.g. "fr:Bouteille sphérique" might have been entered by a French user to indicate it is a spherical bottle).
 * @export
 * @interface PackagingComponentREAD
 */
export interface PackagingComponentREAD {
  /**
   * umber of units of this packaging component contained in the product (e.g. 6 for a pack of 6 bottles)
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  number_of_units?: number;
  /**
   *
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  shape?: string;
  /**
   *
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  material?: string;
  /**
   *
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  recycling?: string;
  /**
   * Quantity (weight or volume) of food product contained in the packaging component. (e.g. 75cl for a wine bottle)
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  quantity_per_unit?: string;
  /**
   * Value parsed from the quantity field.
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  quantity_per_unit_value?: number;
  /**
   * Unit parsed and normalized from the quantity field.
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  quantity_per_unit_unit?: string;
  /**
   * Weight (as specified by the manufacturer) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  weight_specified?: number;
  /**
   * Weight (as measured by one or more users) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  weight_measured?: number;
  /**
   * Weight (as estimated from similar products) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component).
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  weight_estimated?: number;
  /**
   * Weight of one unit of the empty packaging component.
   * @type {number}
   * @memberof PackagingComponentREAD
   */
  weight?: number;
  /**
   * Indicates which field was used to populate the "weight" field. Either "specified", "measured", or "estimated"
   * @type {string}
   * @memberof PackagingComponentREAD
   */
  weight_source_id?: string;
}

/**
 * Check if a given object implements the PackagingComponentREAD interface.
 */
export function instanceOfPackagingComponentREAD(
  value: object,
): value is PackagingComponentREAD {
  return true;
}

export function PackagingComponentREADFromJSON(
  json: any,
): PackagingComponentREAD {
  return PackagingComponentREADFromJSONTyped(json, false);
}

export function PackagingComponentREADFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PackagingComponentREAD {
  if (json == null) {
    return json;
  }
  return {
    number_of_units:
      json["number_of_units"] == null ? undefined : json["number_of_units"],
    shape: json["shape"] == null ? undefined : json["shape"],
    material: json["material"] == null ? undefined : json["material"],
    recycling: json["recycling"] == null ? undefined : json["recycling"],
    quantity_per_unit:
      json["quantity_per_unit"] == null ? undefined : json["quantity_per_unit"],
    quantity_per_unit_value:
      json["quantity_per_unit_value"] == null
        ? undefined
        : json["quantity_per_unit_value"],
    quantity_per_unit_unit:
      json["quantity_per_unit_unit"] == null
        ? undefined
        : json["quantity_per_unit_unit"],
    weight_specified:
      json["weight_specified"] == null ? undefined : json["weight_specified"],
    weight_measured:
      json["weight_measured"] == null ? undefined : json["weight_measured"],
    weight_estimated:
      json["weight_estimated"] == null ? undefined : json["weight_estimated"],
    weight: json["weight"] == null ? undefined : json["weight"],
    weight_source_id:
      json["weight_source_id"] == null ? undefined : json["weight_source_id"],
  };
}

export function PackagingComponentREADToJSON(
  json: any,
): PackagingComponentREAD {
  return PackagingComponentREADToJSONTyped(json, false);
}

export function PackagingComponentREADToJSONTyped(
  value?: PackagingComponentREAD | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    number_of_units: value["number_of_units"],
    shape: value["shape"],
    material: value["material"],
    recycling: value["recycling"],
    quantity_per_unit: value["quantity_per_unit"],
    quantity_per_unit_value: value["quantity_per_unit_value"],
    quantity_per_unit_unit: value["quantity_per_unit_unit"],
    weight_specified: value["weight_specified"],
    weight_measured: value["weight_measured"],
    weight_estimated: value["weight_estimated"],
    weight: value["weight"],
    weight_source_id: value["weight_source_id"],
  };
}
