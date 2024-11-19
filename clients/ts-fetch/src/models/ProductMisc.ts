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
import type { PackagingComponentREAD } from "./PackagingComponentREAD";
import {
  PackagingComponentREADFromJSON,
  PackagingComponentREADFromJSONTyped,
  PackagingComponentREADToJSON,
  PackagingComponentREADToJSONTyped,
} from "./PackagingComponentREAD";
import type { ProductMiscNutrientLevels } from "./ProductMiscNutrientLevels";
import {
  ProductMiscNutrientLevelsFromJSON,
  ProductMiscNutrientLevelsFromJSONTyped,
  ProductMiscNutrientLevelsToJSON,
  ProductMiscNutrientLevelsToJSONTyped,
} from "./ProductMiscNutrientLevels";

/**
 * Miscellaneous but important fields of a product
 *
 * @export
 * @interface ProductMisc
 */
export interface ProductMisc {
  /**
   * Number of food additives.
   *
   * @type {number}
   * @memberof ProductMisc
   */
  additives_n?: number;
  /**
   *
   * @type {string}
   * @memberof ProductMisc
   */
  checked?: string;
  /**
   *
   * @type {number}
   * @memberof ProductMisc
   */
  complete?: number;
  /**
   *
   * @type {number}
   * @memberof ProductMisc
   */
  completeness?: number;
  /**
   * See also: `ecoscore_tags`
   *
   * @type {string}
   * @memberof ProductMisc
   */
  ecoscore_grade?: string;
  /**
   * See also: `ecoscore_tags`
   *
   * @type {number}
   * @memberof ProductMisc
   */
  ecoscore_score?: number;
  /**
   *
   * @type {string}
   * @memberof ProductMisc
   */
  food_groups?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ProductMisc
   */
  food_groups_tags?: Array<string>;
  /**
   *
   * @type {ProductMiscNutrientLevels}
   * @memberof ProductMisc
   */
  nutrient_levels?: ProductMiscNutrientLevels;
  /**
   * Recycling instructions as raw text, e.g. Plastic
   * bottle to recycle, Plastic cap to recycle.
   * This will get automatically parsed and
   * will be used to compute the Eco-Score.
   * You can either request it (if it exists) or
   * send it in a specific language.
   *
   * @type {string}
   * @memberof ProductMisc
   */
  packaging_text?: string;
  /**
   * The packagings object is an array of individual packaging component objects.
   *
   * The Packaging data document explains how packaging data is structured in Open Food Facts: https://openfoodfacts.github.io/openfoodfacts-server/dev/explain-packaging-data/
   *
   * The shape, material and recycling properties of each packaging component are linked to entries in the packaging_shapes, packaging_materials and packaging_recycling taxonomies:
   *
   * https://world.openfoodfacts.org/data/taxonomies/packaging_shapes.json
   * https://world.openfoodfacts.org/data/taxonomies/packaging_materials.json
   * https://world.openfoodfacts.org/data/taxonomies/packaging_recycling.json
   *
   * If the tags_lc field is set, the properties will include a lc_name field with the translation in the requested language.
   * @type {Array<PackagingComponentREAD>}
   * @memberof ProductMisc
   */
  packagings?: Array<PackagingComponentREAD>;
  /**
   * Indicate if the packagings array contains all the packaging parts of the product. This field can be set by users when they enter or verify packaging data. Possible values are 0 or 1.
   * @type {number}
   * @memberof ProductMisc
   */
  packagings_complete?: number;
  /**
   * Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9)
   *
   * @type {string}
   * @memberof ProductMisc
   */
  pnns_groups_1?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ProductMisc
   */
  pnns_groups_1_tags?: Array<string>;
  /**
   * Sub Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9)
   *
   * @type {string}
   * @memberof ProductMisc
   */
  pnns_groups_2?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ProductMisc
   */
  pnns_groups_2_tags?: Array<string>;
  /**
   * An imprecise measurement of popularity based on Scan statistics. A higher value means higher popularity.
   *
   * @type {number}
   * @memberof ProductMisc
   */
  popularity_key?: number;
  /**
   * Indicators for the popularity of a product, like the amount of scans in a specific year.
   *
   * @type {Array<string>}
   * @memberof ProductMisc
   */
  popularity_tags?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof ProductMisc
   */
  scans_n?: number;
  /**
   *
   * @type {number}
   * @memberof ProductMisc
   */
  unique_scans_n?: number;
  /**
   *
   * @type {number}
   * @memberof ProductMisc
   */
  sortkey?: number;
  /**
   * Normalized version of serving_size.
   * Note that this is NOT the number of servings by product.
   * <small>(in perl, see `normalize_serving_size`)</small>
   *
   * @type {string}
   * @memberof ProductMisc
   */
  serving_quantity?: string;
  /**
   * The unit (either g or ml) for the correponding serving_quantity.
   *
   * @type {string}
   * @memberof ProductMisc
   */
  serving_quantity_unit?: string;
  /**
   * Serving size text (generally in g or ml).
   * We expect a quantity + unit but the user is free to input any string.
   *
   * @type {string}
   * @memberof ProductMisc
   */
  serving_size?: string;
}

/**
 * Check if a given object implements the ProductMisc interface.
 */
export function instanceOfProductMisc(value: object): value is ProductMisc {
  return true;
}

export function ProductMiscFromJSON(json: any): ProductMisc {
  return ProductMiscFromJSONTyped(json, false);
}

export function ProductMiscFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductMisc {
  if (json == null) {
    return json;
  }
  return {
    additives_n: json["additives_n"] == null ? undefined : json["additives_n"],
    checked: json["checked"] == null ? undefined : json["checked"],
    complete: json["complete"] == null ? undefined : json["complete"],
    completeness:
      json["completeness"] == null ? undefined : json["completeness"],
    ecoscore_grade:
      json["ecoscore_grade"] == null ? undefined : json["ecoscore_grade"],
    ecoscore_score:
      json["ecoscore_score"] == null ? undefined : json["ecoscore_score"],
    food_groups: json["food_groups"] == null ? undefined : json["food_groups"],
    food_groups_tags:
      json["food_groups_tags"] == null ? undefined : json["food_groups_tags"],
    nutrient_levels:
      json["nutrient_levels"] == null
        ? undefined
        : ProductMiscNutrientLevelsFromJSON(json["nutrient_levels"]),
    packaging_text:
      json["packaging_text"] == null ? undefined : json["packaging_text"],
    packagings:
      json["packagings"] == null
        ? undefined
        : (json["packagings"] as Array<any>).map(
            PackagingComponentREADFromJSON,
          ),
    packagings_complete:
      json["packagings_complete"] == null
        ? undefined
        : json["packagings_complete"],
    pnns_groups_1:
      json["pnns_groups_1"] == null ? undefined : json["pnns_groups_1"],
    pnns_groups_1_tags:
      json["pnns_groups_1_tags"] == null
        ? undefined
        : json["pnns_groups_1_tags"],
    pnns_groups_2:
      json["pnns_groups_2"] == null ? undefined : json["pnns_groups_2"],
    pnns_groups_2_tags:
      json["pnns_groups_2_tags"] == null
        ? undefined
        : json["pnns_groups_2_tags"],
    popularity_key:
      json["popularity_key"] == null ? undefined : json["popularity_key"],
    popularity_tags:
      json["popularity_tags"] == null ? undefined : json["popularity_tags"],
    scans_n: json["scans_n"] == null ? undefined : json["scans_n"],
    unique_scans_n:
      json["unique_scans_n"] == null ? undefined : json["unique_scans_n"],
    sortkey: json["sortkey"] == null ? undefined : json["sortkey"],
    serving_quantity:
      json["serving_quantity"] == null ? undefined : json["serving_quantity"],
    serving_quantity_unit:
      json["serving_quantity_unit"] == null
        ? undefined
        : json["serving_quantity_unit"],
    serving_size:
      json["serving_size"] == null ? undefined : json["serving_size"],
  };
}

export function ProductMiscToJSON(json: any): ProductMisc {
  return ProductMiscToJSONTyped(json, false);
}

export function ProductMiscToJSONTyped(
  value?: ProductMisc | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    additives_n: value["additives_n"],
    checked: value["checked"],
    complete: value["complete"],
    completeness: value["completeness"],
    ecoscore_grade: value["ecoscore_grade"],
    ecoscore_score: value["ecoscore_score"],
    food_groups: value["food_groups"],
    food_groups_tags: value["food_groups_tags"],
    nutrient_levels: ProductMiscNutrientLevelsToJSON(value["nutrient_levels"]),
    packaging_text: value["packaging_text"],
    packagings:
      value["packagings"] == null
        ? undefined
        : (value["packagings"] as Array<any>).map(PackagingComponentREADToJSON),
    packagings_complete: value["packagings_complete"],
    pnns_groups_1: value["pnns_groups_1"],
    pnns_groups_1_tags: value["pnns_groups_1_tags"],
    pnns_groups_2: value["pnns_groups_2"],
    pnns_groups_2_tags: value["pnns_groups_2_tags"],
    popularity_key: value["popularity_key"],
    popularity_tags: value["popularity_tags"],
    scans_n: value["scans_n"],
    unique_scans_n: value["unique_scans_n"],
    sortkey: value["sortkey"],
    serving_quantity: value["serving_quantity"],
    serving_quantity_unit: value["serving_quantity_unit"],
    serving_size: value["serving_size"],
  };
}
