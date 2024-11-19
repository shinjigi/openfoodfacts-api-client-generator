# OpenFoodFactsOpenApi.Nutrient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | id of the nutrient | [optional] 
**name** | **String** | Name of the nutrient in the requested language | [optional] 
**important** | **Boolean** | Indicates if the nutrient is always shown on the nutrition facts table | [optional] 
**display_in_edit_form** | **Boolean** | Indicates if the nutrient should be shown in the nutrition facts edit form | [optional] 
**unit** | **String** | Default unit of the nutrient | [optional] 
**nutrients** | [**[Nutrient]**](Nutrient.md) | Nutrients and sub-nutrients of a product, with their name and default unit. (e.g. saturated-fat is a sub-nutrient of fat).  | [optional] 



## Enum: UnitEnum


* `g` (value: `"g"`)

* `mg` (value: `"mg"`)

* `μg` (value: `"μg"`)

* `cl` (value: `"cl"`)

* `ml` (value: `"ml"`)

* `dv` (value: `"dv"`)

* `% vol` (value: `"% vol"`)

* `PERCENT` (value: `"%"`)




