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
import type { Ingredient } from './Ingredient';
import {
    IngredientFromJSON,
    IngredientFromJSONTyped,
    IngredientToJSON,
} from './Ingredient';
import type { ProductIngredientsIngredientsAnalysis } from './ProductIngredientsIngredientsAnalysis';
import {
    ProductIngredientsIngredientsAnalysisFromJSON,
    ProductIngredientsIngredientsAnalysisFromJSONTyped,
    ProductIngredientsIngredientsAnalysisToJSON,
} from './ProductIngredientsIngredientsAnalysis';

/**
 * Fields about ingredients of a product
 * @export
 * @interface ProductIngredients
 */
export interface ProductIngredients {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    additivesTags?: Array<string>;
    /**
     * comma separated list of allergens
     * @type {string}
     * @memberof ProductIngredients
     */
    allergens?: string;
    /**
     * language in which `allergens` where input
     * @type {string}
     * @memberof ProductIngredients
     */
    allergensLc?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    allergensHierarchy?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    allergensTags?: Array<string>;
    /**
     * This structure gives the different ingredients and some information about them,
     * like estimate on their quantity.
     * 
     * @type {Array<Ingredient>}
     * @memberof ProductIngredients
     */
    ingredients?: Array<Ingredient>;
    /**
     * 
     * @type {ProductIngredientsIngredientsAnalysis}
     * @memberof ProductIngredients
     */
    ingredientsAnalysis?: ProductIngredientsIngredientsAnalysis;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    ingredientsAnalysisTags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsFromOrThatMayBeFromPalmOilN?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsFromPalmOilN?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    ingredientsFromPalmOilTags?: Array<object>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    ingredientsHierarchy?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsN?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    ingredientsNTags?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    ingredientsOriginalTags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsPercentAnalysis?: number;
    /**
     * Number of sweeteners additives in the ingredients. Undefined if ingredients are not specified.
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsSweetenersN?: number;
    /**
     * Number of non-nutritive sweeteners additives (as specified in the Nutri-Score formula) in the ingredients. Undefined if ingredients are not specified.
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsNonNutritiveSweetenersN?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductIngredients
     */
    ingredientsTags?: Array<string>;
    /**
     * Language that was used to parse the ingredient list. If `ingredients_text` is available
     * for the product main language (`lang`), `ingredients_lc=lang`, otherwise we look at
     * `ingredients_text` fields for other languages and set `ingredients_lc` to the first
     * non-empty `ingredient_text`. 
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    ingredientsLc?: string;
    /**
     * Raw list of ingredients. This will get automatically
     * parsed and get used to compute the Eco-Score or find allergens, etc..
     * 
     * It's a copy of ingredients_text in the main language of the product (see `lang` proprety).
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    ingredientsText?: string;
    /**
     * Same text as `ingredients_text` but where allergens have HTML elements around them to identify them
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    ingredientsTextWithAllergens?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsThatMayBeFromPalmOilN?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    ingredientsThatMayBeFromPalmOilTags?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsWithSpecifiedPercentN?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsWithSpecifiedPercentSum?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsWithUnspecifiedPercentN?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    ingredientsWithUnspecifiedPercentSum?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    knownIngredientsN?: number;
    /**
     * Origins of ingredients
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    origins?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    originsHierarchy?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    originsLc?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    originsTags?: Array<object>;
    /**
     * List of substances that might cause allergies
     * that are present in trace amounts in the product
     * (this does not include the ingredients, as they
     * are not only present in trace amounts).
     * It is taxonomized with the allergens taxonomy.
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    traces?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    tracesHierarchy?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ProductIngredients
     */
    tracesLc?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductIngredients
     */
    tracesTags?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof ProductIngredients
     */
    unknownIngredientsN?: number;
}

/**
 * Check if a given object implements the ProductIngredients interface.
 */
export function instanceOfProductIngredients(value: object): value is ProductIngredients {
    return true;
}

export function ProductIngredientsFromJSON(json: any): ProductIngredients {
    return ProductIngredientsFromJSONTyped(json, false);
}

export function ProductIngredientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductIngredients {
    if (json == null) {
        return json;
    }
    return {
        
        'additivesTags': json['additives_tags'] == null ? undefined : json['additives_tags'],
        'allergens': json['allergens'] == null ? undefined : json['allergens'],
        'allergensLc': json['allergens_lc'] == null ? undefined : json['allergens_lc'],
        'allergensHierarchy': json['allergens_hierarchy'] == null ? undefined : json['allergens_hierarchy'],
        'allergensTags': json['allergens_tags'] == null ? undefined : json['allergens_tags'],
        'ingredients': json['ingredients'] == null ? undefined : ((json['ingredients'] as Array<any>).map(IngredientFromJSON)),
        'ingredientsAnalysis': json['ingredients_analysis'] == null ? undefined : ProductIngredientsIngredientsAnalysisFromJSON(json['ingredients_analysis']),
        'ingredientsAnalysisTags': json['ingredients_analysis_tags'] == null ? undefined : json['ingredients_analysis_tags'],
        'ingredientsFromOrThatMayBeFromPalmOilN': json['ingredients_from_or_that_may_be_from_palm_oil_n'] == null ? undefined : json['ingredients_from_or_that_may_be_from_palm_oil_n'],
        'ingredientsFromPalmOilN': json['ingredients_from_palm_oil_n'] == null ? undefined : json['ingredients_from_palm_oil_n'],
        'ingredientsFromPalmOilTags': json['ingredients_from_palm_oil_tags'] == null ? undefined : json['ingredients_from_palm_oil_tags'],
        'ingredientsHierarchy': json['ingredients_hierarchy'] == null ? undefined : json['ingredients_hierarchy'],
        'ingredientsN': json['ingredients_n'] == null ? undefined : json['ingredients_n'],
        'ingredientsNTags': json['ingredients_n_tags'] == null ? undefined : json['ingredients_n_tags'],
        'ingredientsOriginalTags': json['ingredients_original_tags'] == null ? undefined : json['ingredients_original_tags'],
        'ingredientsPercentAnalysis': json['ingredients_percent_analysis'] == null ? undefined : json['ingredients_percent_analysis'],
        'ingredientsSweetenersN': json['ingredients_sweeteners_n'] == null ? undefined : json['ingredients_sweeteners_n'],
        'ingredientsNonNutritiveSweetenersN': json['ingredients_non_nutritive_sweeteners_n'] == null ? undefined : json['ingredients_non_nutritive_sweeteners_n'],
        'ingredientsTags': json['ingredients_tags'] == null ? undefined : json['ingredients_tags'],
        'ingredientsLc': json['ingredients_lc'] == null ? undefined : json['ingredients_lc'],
        'ingredientsText': json['ingredients_text'] == null ? undefined : json['ingredients_text'],
        'ingredientsTextWithAllergens': json['ingredients_text_with_allergens'] == null ? undefined : json['ingredients_text_with_allergens'],
        'ingredientsThatMayBeFromPalmOilN': json['ingredients_that_may_be_from_palm_oil_n'] == null ? undefined : json['ingredients_that_may_be_from_palm_oil_n'],
        'ingredientsThatMayBeFromPalmOilTags': json['ingredients_that_may_be_from_palm_oil_tags'] == null ? undefined : json['ingredients_that_may_be_from_palm_oil_tags'],
        'ingredientsWithSpecifiedPercentN': json['ingredients_with_specified_percent_n'] == null ? undefined : json['ingredients_with_specified_percent_n'],
        'ingredientsWithSpecifiedPercentSum': json['ingredients_with_specified_percent_sum'] == null ? undefined : json['ingredients_with_specified_percent_sum'],
        'ingredientsWithUnspecifiedPercentN': json['ingredients_with_unspecified_percent_n'] == null ? undefined : json['ingredients_with_unspecified_percent_n'],
        'ingredientsWithUnspecifiedPercentSum': json['ingredients_with_unspecified_percent_sum'] == null ? undefined : json['ingredients_with_unspecified_percent_sum'],
        'knownIngredientsN': json['known_ingredients_n'] == null ? undefined : json['known_ingredients_n'],
        'origins': json['origins'] == null ? undefined : json['origins'],
        'originsHierarchy': json['origins_hierarchy'] == null ? undefined : json['origins_hierarchy'],
        'originsLc': json['origins_lc'] == null ? undefined : json['origins_lc'],
        'originsTags': json['origins_tags'] == null ? undefined : json['origins_tags'],
        'traces': json['traces'] == null ? undefined : json['traces'],
        'tracesHierarchy': json['traces_hierarchy'] == null ? undefined : json['traces_hierarchy'],
        'tracesLc': json['traces_lc'] == null ? undefined : json['traces_lc'],
        'tracesTags': json['traces_tags'] == null ? undefined : json['traces_tags'],
        'unknownIngredientsN': json['unknown_ingredients_n'] == null ? undefined : json['unknown_ingredients_n'],
    };
}

export function ProductIngredientsToJSON(value?: ProductIngredients | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'additives_tags': value['additivesTags'],
        'allergens': value['allergens'],
        'allergens_lc': value['allergensLc'],
        'allergens_hierarchy': value['allergensHierarchy'],
        'allergens_tags': value['allergensTags'],
        'ingredients': value['ingredients'] == null ? undefined : ((value['ingredients'] as Array<any>).map(IngredientToJSON)),
        'ingredients_analysis': ProductIngredientsIngredientsAnalysisToJSON(value['ingredientsAnalysis']),
        'ingredients_analysis_tags': value['ingredientsAnalysisTags'],
        'ingredients_from_or_that_may_be_from_palm_oil_n': value['ingredientsFromOrThatMayBeFromPalmOilN'],
        'ingredients_from_palm_oil_n': value['ingredientsFromPalmOilN'],
        'ingredients_from_palm_oil_tags': value['ingredientsFromPalmOilTags'],
        'ingredients_hierarchy': value['ingredientsHierarchy'],
        'ingredients_n': value['ingredientsN'],
        'ingredients_n_tags': value['ingredientsNTags'],
        'ingredients_original_tags': value['ingredientsOriginalTags'],
        'ingredients_percent_analysis': value['ingredientsPercentAnalysis'],
        'ingredients_sweeteners_n': value['ingredientsSweetenersN'],
        'ingredients_non_nutritive_sweeteners_n': value['ingredientsNonNutritiveSweetenersN'],
        'ingredients_tags': value['ingredientsTags'],
        'ingredients_lc': value['ingredientsLc'],
        'ingredients_text': value['ingredientsText'],
        'ingredients_text_with_allergens': value['ingredientsTextWithAllergens'],
        'ingredients_that_may_be_from_palm_oil_n': value['ingredientsThatMayBeFromPalmOilN'],
        'ingredients_that_may_be_from_palm_oil_tags': value['ingredientsThatMayBeFromPalmOilTags'],
        'ingredients_with_specified_percent_n': value['ingredientsWithSpecifiedPercentN'],
        'ingredients_with_specified_percent_sum': value['ingredientsWithSpecifiedPercentSum'],
        'ingredients_with_unspecified_percent_n': value['ingredientsWithUnspecifiedPercentN'],
        'ingredients_with_unspecified_percent_sum': value['ingredientsWithUnspecifiedPercentSum'],
        'known_ingredients_n': value['knownIngredientsN'],
        'origins': value['origins'],
        'origins_hierarchy': value['originsHierarchy'],
        'origins_lc': value['originsLc'],
        'origins_tags': value['originsTags'],
        'traces': value['traces'],
        'traces_hierarchy': value['tracesHierarchy'],
        'traces_lc': value['tracesLc'],
        'traces_tags': value['tracesTags'],
        'unknown_ingredients_n': value['unknownIngredientsN'],
    };
}
