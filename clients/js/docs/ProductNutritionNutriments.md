# OpenFoodFactsOpenApi.ProductNutritionNutriments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alcohol** | **Number** | Quantity of alcohol  (per 100g or per serving) in a standard unit (g or ml)  | [optional] 
**carbohydrates** | **Number** |  | [optional] 
**carbohydrates_100g** | **Number** |  | [optional] 
**carbohydrates_serving** | **Number** |  | [optional] 
**carbohydrates_unit** | **String** |  | [optional] 
**carbohydrates_value** | **Number** |  | [optional] 
**cocoa** | **Number** |  | [optional] 
**cocoa_100g** | **Number** |  | [optional] 
**cocoa_label** | **String** |  | [optional] 
**cocoa_serving** | **Number** |  | [optional] 
**cocoa_unit** | **String** |  | [optional] 
**cocoa_value** | **Number** |  | [optional] 
**energy** | **Number** | It is the same as &#x60;energy-kj&#x60; if we have it, or computed from &#x60;energy-kcal&#x60; otherwise  (per 100g or per serving) in kj  | [optional] 
**energy_100g** | **Number** |  | [optional] 
**energy_value** | **Number** | energy_value will be equal to energy-kj_value if we have it or to energy-kcal_value otherwise  | [optional] 
**energy_serving** | **Number** |  | [optional] 
**energy_unit** | **String** | Equal to energy-kj_unit if we have it or to energy-kcal_unit otherwise  | [optional] 
**energy_kj** | **Number** | energy in kj, if it is specified  (per 100g or per serving) in a standard unit (g or ml)  | [optional] 
**energy_kj_100g** | **Number** |  | [optional] 
**energy_kj_serving** | **Number** |  | [optional] 
**energy_kj_unit** | **String** |  | [optional] 
**energy_kj_value** | **Number** |  | [optional] 
**energy_kj_value_computed** | **Number** |  | [optional] 
**fat** | **Number** |  | [optional] 
**fat_value** | **Number** |  | [optional] 
**fat_100g** | **Number** |  | [optional] 
**fat_serving** | **Number** |  | [optional] 
**fat_unit** | **String** |  | [optional] 
**nova_group_100g** | **Number** |  | [optional] 
**nova_group_serving** | **Number** |  | [optional] 
**nutrition_score_fr_100g** | **Number** |  | [optional] 
**proteins_100g** | **Number** |  | [optional] 
**proteins_serving** | **Number** |  | [optional] 
**proteins_unit** | **String** |  | [optional] 
**proteins_value** | **Number** |  | [optional] 
**salt_100g** | **Number** |  | [optional] 
**salt_serving** | **Number** |  | [optional] 
**salt_unit** | **String** |  | [optional] 
**salt_value** | **Number** |  | [optional] 
**saturated_fat** | **Number** |  | [optional] 
**saturated_fat_100g** | **Number** |  | [optional] 
**saturated_fat_serving** | **Number** |  | [optional] 
**saturated_fat_unit** | **String** |  | [optional] 
**saturated_fat_value** | **Number** |  | [optional] 
**sodium_100g** | **Number** |  | [optional] 
**sodium_serving** | **Number** |  | [optional] 
**sodium_unit** | **String** |  | [optional] 
**sodium_value** | **Number** |  | [optional] 
**sugars_100g** | **Number** |  | [optional] 
**sugars_serving** | **Number** |  | [optional] 
**sugars_unit** | **String** |  | [optional] 
**sugars_value** | **Number** |  | [optional] 
**fiber_100g** | **Number** |  | [optional] 
**fiber_serving** | **Number** |  | [optional] 
**fiber_unit** | **String** |  | [optional] 
**fiber_value** | **Number** |  | [optional] 
**energy_kcal_100g** | **Number** |  | [optional] 
**energy_kcal_serving** | **Number** |  | [optional] 
**energy_kcal_unit** | **String** |  | [optional] 
**energy_kcal_value** | **Number** |  | [optional] 
**energy_kcal_value_computed** | **Number** |  | [optional] 
**energy_kcal** | **Number** | energy in kcal, if it is specified  (per 100g or per serving) in a standard unit (g or ml)  | [optional] 
**fruits_vegetables_legumes_estimate_from_ingredients_serving** | **Number** |  | [optional] 
**fruits_vegetables_legumes_estimate_from_ingredients_100g** | **Number** |  | [optional] 
**fruits_vegetables_legumes_estimate_from_ingredients** | **Number** | An estimate, from the ingredients list of the percentage of fruits, vegetable and legumes. This is an important information for Nutri-Score (2023 version) computation.  | [optional] 
**fruits_vegetables_nuts_estimate_from_ingredients_serving** | **Number** |  | [optional] 
**fruits_vegetables_nuts_estimate_from_ingredients_100g** | **Number** |  | [optional] 
**fruits_vegetables_nuts_estimate_from_ingredients** | **Number** | An estimate, from the ingredients list of the percentage of fruits, vegetable and nuts. This is an important information for Nutri-Score (2021 version) computation.  | [optional] 
**nova_group** | **Number** |  | [optional] 
**nutrition_score_fr** | **Object** |  | [optional] 
**proteins** | **Number** |  | [optional] 
**salt** | **Number** |  | [optional] 
**sodium** | **Number** |  | [optional] 
**sugars** | **Number** |  | [optional] 
**fiber** | **Number** |  | [optional] 
**carbon_footprint_from_known_ingredients_product** | **Number** |  | [optional] 
**carbon_footprint_from_known_ingredients_serving** | **Number** |  | [optional] 
**erythritol** | **Number** | erythritol is a polyol which is not providing any energy. As such, it needs not be taken into account when computing the energy of a product. Eryhtritol is now displayed on nutrition facts sheet of some products, mainly in the USA. This value is entered either by contributors, either by imports.  | [optional] 



## Enum: CarbohydratesUnitEnum


* `g` (value: `"g"`)

* `mg` (value: `"mg"`)

* `μg` (value: `"μg"`)





## Enum: CocoaUnitEnum


* `g` (value: `"g"`)

* `mg` (value: `"mg"`)

* `μg` (value: `"μg"`)





## Enum: EnergyUnitEnum


* `kcal` (value: `"kcal"`)

* `kJ` (value: `"kJ"`)





## Enum: EnergyKjUnitEnum


* `kJ` (value: `"kJ"`)




