/* tslint:disable */
/* eslint-disable */
/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: contact@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * All known nutrients for the product.
 * 
 * Note that each nutrients are declined with a variety of suffixes like `_100g`, `_serving`,
 * see patternProperties below.
 * 
 * A specific `_unit` is the unit used to measure the nutrient.
 * 
 * Beware that some properties are to be interpreted based upon `nutrition_data_per` value.
 * 
 * Also for products that have a nutrition table for prepared product
 * (eg. the nutrition facts for a bowl of milk with cocoa powder),
 * a `_prepared` suffix is added (before other suffixes).
 * 
 * You can get all possible nutrients from the
 * [nutrients taxonomy](https://static.openfoodfacts.org/data/taxonomies/nutrients.json)
 * 
 * **FIXME** add more nutrients with description.
 * 
 * @export
 * @interface ProductNutritionNutriments
 */
export interface ProductNutritionNutriments {
    /**
     * Quantity of alcohol
     * 
     * (per 100g or per serving) in a standard unit (g or ml)
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    alcohol?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    carbohydrates?: number;
    /**
     * It is the same as `energy-kj` if we have it, or computed from `energy-kcal` otherwise
     * 
     * (per 100g or per serving) in kj
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    energy?: number;
    /**
     * energy_value will be equal to energy-kj_value if we have it or to energy-kcal_value otherwise
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    energyValue?: number;
    /**
     * Equal to energy-kj_unit if we have it or to energy-kcal_unit otherwise
     * 
     * @type {string}
     * @memberof ProductNutritionNutriments
     */
    energyUnit?: ProductNutritionNutrimentsEnergyUnitEnum;
    /**
     * energy in kcal, if it is specified
     * 
     * (per 100g or per serving) in a standard unit (g or ml)
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    energyKcal?: number;
    /**
     * energy in kj, if it is specified
     * 
     * (per 100g or per serving) in a standard unit (g or ml)
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    energyKj?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    fat?: number;
    /**
     * An estimate, from the ingredients list of the percentage of fruits, vegetable and legumes.
     * This is an important information for Nutri-Score (2023 version) computation.
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    fruitsVegetablesLegumesEstimateFromIngredients?: number;
    /**
     * An estimate, from the ingredients list of the percentage of fruits, vegetable and nuts.
     * This is an important information for Nutri-Score (2021 version) computation.
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    fruitsVegetablesNutsEstimateFromIngredients?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    novaGroup?: number;
    /**
     * 
     * @type {any}
     * @memberof ProductNutritionNutriments
     */
    nutritionScoreFr?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    proteins?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    salt?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    saturatedFat?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    sodium?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    sugars?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    carbonFootprintFromKnownIngredientsProduct?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    carbonFootprintFromKnownIngredientsServing?: number;
    /**
     * erythritol is a polyol which is not providing any energy.
     * As such, it needs not be taken into account when computing
     * the energy of a product. Eryhtritol is now displayed on
     * nutrition facts sheet of some products, mainly in the USA.
     * This value is entered either by contributors, either by
     * imports.
     * 
     * @type {number}
     * @memberof ProductNutritionNutriments
     */
    erythritol?: number;
}


/**
 * @export
 */
export const ProductNutritionNutrimentsEnergyUnitEnum = {
    Kcal: 'kcal',
    Kj: 'kj'
} as const;
export type ProductNutritionNutrimentsEnergyUnitEnum = typeof ProductNutritionNutrimentsEnergyUnitEnum[keyof typeof ProductNutritionNutrimentsEnergyUnitEnum];


/**
 * Check if a given object implements the ProductNutritionNutriments interface.
 */
export function instanceOfProductNutritionNutriments(value: object): value is ProductNutritionNutriments {
    return true;
}

export function ProductNutritionNutrimentsFromJSON(json: any): ProductNutritionNutriments {
    return ProductNutritionNutrimentsFromJSONTyped(json, false);
}

export function ProductNutritionNutrimentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductNutritionNutriments {
    if (json == null) {
        return json;
    }
    return {
        
        'alcohol': json['alcohol'] == null ? undefined : json['alcohol'],
        'carbohydrates': json['carbohydrates'] == null ? undefined : json['carbohydrates'],
        'energy': json['energy'] == null ? undefined : json['energy'],
        'energyValue': json['energy_value'] == null ? undefined : json['energy_value'],
        'energyUnit': json['energy_unit'] == null ? undefined : json['energy_unit'],
        'energyKcal': json['energy-kcal'] == null ? undefined : json['energy-kcal'],
        'energyKj': json['energy-kj'] == null ? undefined : json['energy-kj'],
        'fat': json['fat'] == null ? undefined : json['fat'],
        'fruitsVegetablesLegumesEstimateFromIngredients': json['fruits-vegetables-legumes-estimate-from-ingredients'] == null ? undefined : json['fruits-vegetables-legumes-estimate-from-ingredients'],
        'fruitsVegetablesNutsEstimateFromIngredients': json['fruits-vegetables-nuts-estimate-from-ingredients'] == null ? undefined : json['fruits-vegetables-nuts-estimate-from-ingredients'],
        'novaGroup': json['nova-group'] == null ? undefined : json['nova-group'],
        'nutritionScoreFr': json['nutrition-score-fr'] == null ? undefined : json['nutrition-score-fr'],
        'proteins': json['proteins'] == null ? undefined : json['proteins'],
        'salt': json['salt'] == null ? undefined : json['salt'],
        'saturatedFat': json['saturated-fat'] == null ? undefined : json['saturated-fat'],
        'sodium': json['sodium'] == null ? undefined : json['sodium'],
        'sugars': json['sugars'] == null ? undefined : json['sugars'],
        'carbonFootprintFromKnownIngredientsProduct': json['carbon-footprint-from-known-ingredients_product'] == null ? undefined : json['carbon-footprint-from-known-ingredients_product'],
        'carbonFootprintFromKnownIngredientsServing': json['carbon-footprint-from-known-ingredients_serving'] == null ? undefined : json['carbon-footprint-from-known-ingredients_serving'],
        'erythritol': json['erythritol'] == null ? undefined : json['erythritol'],
    };
}

export function ProductNutritionNutrimentsToJSON(value?: ProductNutritionNutriments | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'alcohol': value['alcohol'],
        'carbohydrates': value['carbohydrates'],
        'energy': value['energy'],
        'energy_value': value['energyValue'],
        'energy_unit': value['energyUnit'],
        'energy-kcal': value['energyKcal'],
        'energy-kj': value['energyKj'],
        'fat': value['fat'],
        'fruits-vegetables-legumes-estimate-from-ingredients': value['fruitsVegetablesLegumesEstimateFromIngredients'],
        'fruits-vegetables-nuts-estimate-from-ingredients': value['fruitsVegetablesNutsEstimateFromIngredients'],
        'nova-group': value['novaGroup'],
        'nutrition-score-fr': value['nutritionScoreFr'],
        'proteins': value['proteins'],
        'salt': value['salt'],
        'saturated-fat': value['saturatedFat'],
        'sodium': value['sodium'],
        'sugars': value['sugars'],
        'carbon-footprint-from-known-ingredients_product': value['carbonFootprintFromKnownIngredientsProduct'],
        'carbon-footprint-from-known-ingredients_serving': value['carbonFootprintFromKnownIngredientsServing'],
        'erythritol': value['erythritol'],
    };
}

