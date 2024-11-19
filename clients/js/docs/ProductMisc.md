# OpenFoodFactsOpenApi.ProductMisc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additives_n** | **Number** | Number of food additives.  | [optional] 
**checked** | **String** |  | [optional] 
**complete** | **Number** |  | [optional] 
**completeness** | **Number** |  | [optional] 
**ecoscore_grade** | **String** | See also: &#x60;ecoscore_tags&#x60;  | [optional] 
**ecoscore_score** | **Number** | See also: &#x60;ecoscore_tags&#x60;  | [optional] 
**food_groups** | **String** |  | [optional] 
**food_groups_tags** | **[String]** |  | [optional] 
**nutrient_levels** | [**ProductMiscNutrientLevels**](ProductMiscNutrientLevels.md) |  | [optional] 
**packaging_text** | **String** | Recycling instructions as raw text, e.g. Plastic bottle to recycle, Plastic cap to recycle. This will get automatically parsed and will be used to compute the Eco-Score. You can either request it (if it exists) or send it in a specific language.  | [optional] 
**packagings** | [**[PackagingComponentREAD]**](PackagingComponentREAD.md) | The packagings object is an array of individual packaging component objects.  The Packaging data document explains how packaging data is structured in Open Food Facts: https://openfoodfacts.github.io/openfoodfacts-server/dev/explain-packaging-data/  The shape, material and recycling properties of each packaging component are linked to entries in the packaging_shapes, packaging_materials and packaging_recycling taxonomies:  https://world.openfoodfacts.org/data/taxonomies/packaging_shapes.json https://world.openfoodfacts.org/data/taxonomies/packaging_materials.json https://world.openfoodfacts.org/data/taxonomies/packaging_recycling.json  If the tags_lc field is set, the properties will include a lc_name field with the translation in the requested language. | [optional] 
**packagings_complete** | **Number** | Indicate if the packagings array contains all the packaging parts of the product. This field can be set by users when they enter or verify packaging data. Possible values are 0 or 1. | [optional] 
**pnns_groups_1** | **String** | Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9)  | [optional] 
**pnns_groups_1_tags** | **[String]** |  | [optional] 
**pnns_groups_2** | **String** | Sub Category of food according to [French Nutrition and Health Program](https://fr.wikipedia.org/wiki/Programme_national_nutrition_sant%C3%A9)  | [optional] 
**pnns_groups_2_tags** | **[String]** |  | [optional] 
**popularity_key** | **Number** | An imprecise measurement of popularity based on Scan statistics. A higher value means higher popularity.  | [optional] 
**popularity_tags** | **[String]** | Indicators for the popularity of a product, like the amount of scans in a specific year.  | [optional] 
**scans_n** | **Number** |  | [optional] 
**unique_scans_n** | **Number** |  | [optional] 
**sortkey** | **Number** |  | [optional] 
**serving_quantity** | **String** | Normalized version of serving_size. Note that this is NOT the number of servings by product. &lt;small&gt;(in perl, see &#x60;normalize_serving_size&#x60;)&lt;/small&gt;  | [optional] 
**serving_quantity_unit** | **String** | The unit (either g or ml) for the correponding serving_quantity.  | [optional] 
**serving_size** | **String** | Serving size text (generally in g or ml). We expect a quantity + unit but the user is free to input any string.  | [optional] 


