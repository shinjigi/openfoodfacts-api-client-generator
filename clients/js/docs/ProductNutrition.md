# OpenFoodFactsOpenApi.ProductNutrition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_nutrition_data** | **String** | When a product does not have nutrition data displayed on the packaging, the user can check the field \&quot;Nutrition facts are not specified on the product\&quot;. By doing so, the no_nutrition_data field takes the value \&quot;on\&quot;. This case is frequent (thousands of products).  | [optional] 
**nutrition_data_per** | **String** | The nutrition data on the package can be per serving or per 100g.  This is essential to understand if &#x60;&lt;nutrient&gt;_value&#x60; and &#x60;&lt;nutrient&gt;&#x60; values in &#x60;nutriments&#x60; applies for a serving or for 100g.  **IMPORTANT:** When writing products, this setting applies to all existing nutrients values for the product, not only the nutrient values sent in the write request. So it should not be changed unless all nutrients values are provided with values that match the nutrition_data_per field.  | [optional] 
**nutrition_data_prepared_per** | **String** | The nutrition data for prepared product on the package (if any) can be per serving or per 100g.  This is essential to understand if &#x60;&lt;nutrient&gt;_prepared_value&#x60; and &#x60;&lt;nutrient&gt;_prepared&#x60; values in &#x60;nutriments&#x60; applies for a serving or for 100g.  See also important note on &#x60;nutrition_data_per&#x60;.  | [optional] 
**nutriments** | [**ProductNutritionNutriments**](ProductNutritionNutriments.md) |  | [optional] 
**nutriscore_data** | [**ProductNutritionNutriscoreData**](ProductNutritionNutriscoreData.md) |  | [optional] 
**nutrition_grade_fr** | **String** | Nutrition grade (‘a’ to ‘e’), https://world.openfoodfacts.org/nutriscore.  | [optional] 
**nutrition_grades** | **String** | Nutrition grades as a comma separated list.  Some products with multiple components might have multiple Nutri-Score  | [optional] 
**nutrition_grades_tags** | **[String]** |  | [optional] 
**nutrition_score_beverage** | **Number** |  | [optional] 
**nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients** | **Number** |  | [optional] 
**nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value** | **Number** |  | [optional] 
**nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients** | **Number** |  | [optional] 
**nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value** | **Number** |  | [optional] 
**nutrition_score_warning_no_fiber** | **Number** |  | [optional] 
**other_nutritional_substances_tags** | **[Object]** |  | [optional] 
**unknown_nutrients_tags** | **[Object]** |  | [optional] 
**vitamins_tags** | **[Object]** |  | [optional] 



## Enum: NutritionDataPerEnum


* `serving` (value: `"serving"`)

* `100g` (value: `"100g"`)





## Enum: NutritionDataPreparedPerEnum


* `serving` (value: `"serving"`)

* `100g` (value: `"100g"`)




