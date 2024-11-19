# OpenFoodFactsOpenApi.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviated_product_name** | **String** | Abbreviated name in requested language | [optional] 
**code** | **String** | barcode of the product (can be EAN-13 or internal codes for some food stores), for products without a barcode, Open Food Facts assigns a number starting with the 200 reserved prefix  | [optional] 
**codes_tags** | **[String]** |  | [optional] 
**generic_name_it** | **String** |  | [optional] 
**generic_name** | **String** | Legal name of the product as regulated by the European authorities.  | [optional] 
**_id** | **String** | id in database of the product, this normally is the barcode | [optional] 
**_keywords** | **[String]** |  | [optional] 
**id** | **String** | internal identifier for the product, usually set to the value of &#x60;code&#x60;, except on the producers platform where it is prefixed by the owner  | [optional] 
**lc** | **String** | Main language of the product. This is a duplicate of &#x60;lang&#x60; property (for historical reasons).  | [optional] 
**lang** | **String** | Main language of the product.  This should be the main language of product packaging (if one is predominant).  Main language is also used to decide which ingredients list to parse.  | [optional] 
**nova_group** | **Number** | Nova group as an integer from 1 to 4. See https://world.openfoodfacts.org/nova  | [optional] 
**nova_groups** | **String** |  | [optional] 
**obsolete** | **String** |  | [optional] 
**obsolete_since_date** | **String** | A date at which the product was declared obsolete. This means it&#39;s not produced any more.  | [optional] 
**product_name** | **String** | The name of the product  | [optional] 
**product_name_it** | **String** | Italian name of the product  | [optional] 
**product_name_en** | **String** | The name of the product can also be in many other languages like product_name_fr (for French).  | [optional] 
**product_quantity** | **String** | The size in g or ml for the whole product. It&#39;s a normalized version of the quantity field.  | [optional] 
**product_quantity_unit** | **String** | The unit (either g or ml) for the correponding product_quantity.  | [optional] 
**quantity** | **String** | Quantity and Unit.  | [optional] 
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
**brands** | **String** | List of brands (not taxonomized) | [optional] 
**brands_tags** | **[String]** |  | [optional] 
**categories** | **String** |  | [optional] 
**categories_hierarchy** | **[String]** |  | [optional] 
**categories_lc** | **String** | Categories language code | [optional] 
**categories_old** | **String** |  | [optional] 
**categories_tags** | **[String]** |  | [optional] 
**checkers_tags** | **[String]** |  | [optional] 
**cities** | **String** |  | [optional] 
**cities_tags** | **[Object]** |  | [optional] 
**correctors_tags** | **[String]** |  | [optional] 
**countries** | **String** | List of countries where the product is sold.  | [optional] 
**countries_beforescanbot** | **String** |  | [optional] 
**countries_hierarchy** | **[String]** |  | [optional] 
**countries_lc** | **String** | Countries language code | [optional] 
**countries_tags** | **[String]** |  | [optional] 
**ecoscore_tags** | **[String]** | All ecoscore of a product. Most of the time it&#39;s only one value, but it might eventually be more for products composed of sub-products. See also: &#x60;ecoscore_score&#x60;, &#x60;ecoscore_grade&#x60;.  | [optional] 
**emb_codes** | **String** | Packager code. EMB is the French system of traceability codes for packager.  | [optional] 
**emb_codes_orig** | **String** |  | [optional] 
**emb_codes_tags** | **[String]** |  | [optional] 
**labels** | **String** |  | [optional] 
**labels_hierarchy** | **[String]** |  | [optional] 
**labels_lc** | **String** |  | [optional] 
**labels_tags** | **[String]** |  | [optional] 
**entry_dates_tags** | **[String]** | The data as a series of tag: &#x60;yyyy-mm-dd&#x60;, &#x60;yyyy-mm&#x60;, &#x60;yyyy&#x60;  | [optional] 
**manufacturing_places** | **String** | Places where the product was manufactured or transformed.  | [optional] 
**manufacturing_places_tags** | **[String]** |  | [optional] 
**nova_groups_tags** | **[String]** |  | [optional] 
**nutrient_levels_tags** | **[String]** |  | [optional] 
**image_front_small_url** | **String** |  | [optional] 
**image_front_thumb_url** | **String** |  | [optional] 
**image_front_url** | **String** |  | [optional] 
**image_ingredients_small_url** | **String** |  | [optional] 
**image_ingredients_thumb_url** | **String** |  | [optional] 
**image_ingredients_url** | **String** |  | [optional] 
**image_packaging_small_url** | **String** |  | [optional] 
**image_packaging_thumb_url** | **String** |  | [optional] 
**image_packaging_url** | **String** |  | [optional] 
**image_nutrition_small_url** | **String** |  | [optional] 
**image_nutrition_thumb_url** | **String** |  | [optional] 
**image_nutrition_url** | **String** |  | [optional] 
**image_small_url** | **String** |  | [optional] 
**image_thumb_url** | **String** |  | [optional] 
**image_url** | **String** |  | [optional] 
**images** | [**ProductImagesProperties**](ProductImagesProperties.md) |  | [optional] 
**last_image_dates_tags** | **[String]** |  | [optional] 
**last_image_t** | **Number** | timestamp of last image upload (or update?) | [optional] 
**selected_images** | [**ProductSelectedImages**](ProductSelectedImages.md) |  | [optional] 
**ecoscore_data** | [**ProductEcoscoreData**](ProductEcoscoreData.md) |  | [optional] 
**ecoscore_extended_data_version** | **String** |  | [optional] 
**environment_impact_level** | **String** |  | [optional] 
**environment_impact_level_tags** | **[Object]** |  | [optional] 
**additives_tags** | **[String]** |  | [optional] 
**allergens** | **String** | comma separated list of allergens | [optional] 
**allergens_lc** | **String** | language in which &#x60;allergens&#x60; where input | [optional] 
**allergens_hierarchy** | **[String]** |  | [optional] 
**allergens_tags** | **[String]** |  | [optional] 
**ingredients** | [**[Ingredient]**](Ingredient.md) | This structure gives the different ingredients and some information about them, like estimate on their quantity.  | [optional] 
**ingredients_analysis** | [**ProductIngredientsIngredientsAnalysis**](ProductIngredientsIngredientsAnalysis.md) |  | [optional] 
**ingredients_analysis_tags** | **[String]** |  | [optional] 
**ingredients_from_or_that_may_be_from_palm_oil_n** | **Number** |  | [optional] 
**ingredients_from_palm_oil_n** | **Number** |  | [optional] 
**ingredients_from_palm_oil_tags** | **[Object]** |  | [optional] 
**ingredients_hierarchy** | **[String]** |  | [optional] 
**ingredients_n** | **Number** |  | [optional] 
**ingredients_n_tags** | **[String]** |  | [optional] 
**ingredients_original_tags** | **[String]** |  | [optional] 
**ingredients_percent_analysis** | **Number** |  | [optional] 
**ingredients_sweeteners_n** | **Number** | Number of sweeteners additives in the ingredients. Undefined if ingredients are not specified.  | [optional] 
**ingredients_non_nutritive_sweeteners_n** | **Number** | Number of non-nutritive sweeteners additives (as specified in the Nutri-Score formula) in the ingredients. Undefined if ingredients are not specified.  | [optional] 
**ingredients_tags** | **[String]** |  | [optional] 
**ingredients_lc** | **String** | Language that was used to parse the ingredient list. If &#x60;ingredients_text&#x60; is available for the product main language (&#x60;lang&#x60;), &#x60;ingredients_lc&#x3D;lang&#x60;, otherwise we look at &#x60;ingredients_text&#x60; fields for other languages and set &#x60;ingredients_lc&#x60; to the first non-empty &#x60;ingredient_text&#x60;.  | [optional] 
**ingredients_text_it** | **String** | Ingredients text in Italian | [optional] 
**ingredients_text_en** | **String** | Ingredients text in English | [optional] 
**ingredients_text** | **String** | Raw list of ingredients. This will get automatically parsed and get used to compute the Eco-Score or find allergens, etc..  It&#39;s a copy of ingredients_text in the main language of the product (see &#x60;lang&#x60; proprety).  | [optional] 
**ingredients_text_with_allergens** | **String** |  | [optional] 
**ingredients_text_with_allergens_it** | **String** | Same text as &#x60;ingredients_text&#x60; but where allergens have HTML elements around them to identify them  | [optional] 
**ingredients_that_may_be_from_palm_oil_n** | **Number** |  | [optional] 
**ingredients_that_may_be_from_palm_oil_tags** | **[Object]** |  | [optional] 
**ingredients_with_specified_percent_n** | **Number** |  | [optional] 
**ingredients_with_specified_percent_sum** | **Number** |  | [optional] 
**ingredients_with_unspecified_percent_n** | **Number** |  | [optional] 
**ingredients_with_unspecified_percent_sum** | **Number** |  | [optional] 
**known_ingredients_n** | **Number** |  | [optional] 
**origins** | **String** | Origins of ingredients  | [optional] 
**origins_hierarchy** | **[Object]** |  | [optional] 
**origins_lc** | **String** |  | [optional] 
**origins_tags** | **[Object]** |  | [optional] 
**traces** | **String** | List of substances that might cause allergies that are present in trace amounts in the product (this does not include the ingredients, as they are not only present in trace amounts). It is taxonomized with the allergens taxonomy.  | [optional] 
**traces_hierarchy** | [**[NumberStringObjectType]**](NumberStringObjectType.md) |  | [optional] 
**traces_lc** | **String** |  | [optional] 
**traces_tags** | [**[NumberStringObjectType]**](NumberStringObjectType.md) |  | [optional] 
**unknown_ingredients_n** | **Number** |  | [optional] 
**no_nutrition_data** | **String** | When a product does not have nutrition data displayed on the packaging, the user can check the field \&quot;Nutrition facts are not specified on the product\&quot;. By doing so, the no_nutrition_data field takes the value \&quot;on\&quot;. This case is frequent (thousands of products).  | [optional] 
**nutrition_data_per** | **String** | The nutrition data on the package can be per serving or per 100g.  This is essential to understand if &#x60;&lt;nutrient&gt;_value&#x60; and &#x60;&lt;nutrient&gt;&#x60; values in &#x60;nutriments&#x60; applies for a serving or for 100g.  **IMPORTANT:** When writing products, this setting applies to all existing nutrients values for the product, not only the nutrient values sent in the write request. So it should not be changed unless all nutrients values are provided with values that match the nutrition_data_per field.  | [optional] 
**nutrition_data_prepared_per** | **String** | The nutrition data for prepared product on the package (if any) can be per serving or per 100g.  This is essential to understand if &#x60;&lt;nutrient&gt;_prepared_value&#x60; and &#x60;&lt;nutrient&gt;_prepared&#x60; values in &#x60;nutriments&#x60; applies for a serving or for 100g.  See also important note on &#x60;nutrition_data_per&#x60;.  | [optional] 
**nutriments** | [**ProductNutritionNutriments**](ProductNutritionNutriments.md) |  | [optional] 
**nutriscore_data** | [**Nutriscore2021Data**](Nutriscore2021Data.md) |  | [optional] 
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
**nutriscore** | [**Nutriscores**](Nutriscores.md) |  | [optional] 
**nutriscore_2021_tags** | **[String]** |  | [optional] 
**nutriscore_2023_tags** | **[String]** |  | [optional] 
**nutriscore_grade** | **String** | Nutri-Score for the product as a letter.  See https://world.openfoodfacts.org/nutriscore.  | [optional] 
**nutriscore_score** | **Number** | Nutri-Score for the product as an integer (see also &#x60;nutriscore_grade&#x60;).  | [optional] 
**nutriscore_score_opposite** | **Number** |  | [optional] 
**nutriscore_tags** | **[String]** |  | [optional] 
**nutriscore_version** | **String** |  | [optional] 
**data_quality_bugs_tags** | **[Object]** |  | [optional] 
**data_quality_errors_tags** | **[Object]** |  | [optional] 
**data_quality_info_tags** | **[String]** |  | [optional] 
**data_quality_tags** | **[String]** |  | [optional] 
**data_quality_warning_tags** | **[String]** |  | [optional] 
**data_quality_warnings_tags** | **[String]** |  | [optional] 
**data_sources** | **String** | Source of data imported from producers.  | [optional] 
**data_sources_tags** | **[String]** |  | [optional] 
**debug_param_sorted_langs** | **[String]** |  | [optional] 
**last_check_dates_tags** | **[String]** |  | [optional] 
**last_checked_t** | **Number** |  | [optional] 
**last_checker** | **String** |  | [optional] 
**states** | **String** | comma separated list of values indicating some states of the product, like things to be done, or to be completed. See [states taxonomy](https://static.openfoodfacts.net/data/taxonomies/states.json)  | [optional] 
**states_hierarchy** | **[String]** |  | [optional] 
**states_tags** | **[String]** |  | [optional] 
**misc_tags** | **[String]** | Information about different aspect of the product  | [optional] 
**additives_original_tags** | **[String]** |  | [optional] 
**additives_prev_original_tags** | **[String]** |  | [optional] 
**added_countries_tags** | **[Object]** |  | [optional] 
**allergens_from_ingredients** | **String** |  | [optional] 
**allergens_from_user** | **String** |  | [optional] 
**amino_acids_prev_tags** | **[Object]** |  | [optional] 
**amino_acids_tags** | **[Object]** |  | [optional] 
**carbon_footprint_percent_of_known_ingredients** | **Number** |  | [optional] 
**categories_properties** | [**ProductExtendedCategoriesProperties**](ProductExtendedCategoriesProperties.md) |  | [optional] 
**categories_properties_tags** | **[String]** |  | [optional] 
**category_properties** | **{String: String}** |  | [optional] 
**ciqual_food_name_tags** | **[String]** |  | [optional] 
**compared_to_category** | **String** | the category to use for comparison.  **TODO** explain how it is chosen.  | [optional] 
**conservation_conditions** | **String** |  | [optional] 
**customer_service** | **String** | Contact info of customer service.  | [optional] 
**expiration_date** | **String** |  | [optional] 
**link** | **String** | link to the product on the website of the producer  | [optional] 
**main_countries_tags** | **[Object]** |  | [optional] 
**minerals_prev_tags** | **[Object]** |  | [optional] 
**minerals_tags** | **[Object]** |  | [optional] 
**owner_fields** | [**ProductExtendedOwnerFields**](ProductExtendedOwnerFields.md) |  | [optional] 
**nova_groups_markers** | **{String: [[String]]}** | Detail of ingredients or processing that makes the products having Nova 3 or 4  | [optional] 
**nucleotides_tags** | **[Object]** |  | [optional] 
**origin** | **String** |  | [optional] 
**purchase_places** | **String** | Country, state, or city where the product can be purchased.  | [optional] 
**purchase_places_tags** | **[String]** |  | [optional] 
**stores** | **String** | Distributor name.  | [optional] 
**stores_tags** | **[String]** |  | [optional] 
**traces_from_ingredients** | **String** |  | [optional] 
**traces_from_user** | **String** |  | [optional] 
**created_t** | **Number** | Date when the product was added (UNIX timestamp format). See also &#x60;entry_dates_tags&#x60;  | [optional] 
**creator** | **String** | The contributor who added the product first.  | [optional] 
**editors_tags** | **[String]** | List of editors who edited the product.  | [optional] 
**informers_tags** | **[String]** |  | [optional] 
**interface_version_created** | **String** |  | [optional] 
**interface_version_modified** | **String** |  | [optional] 
**languages** | **Object** |  | [optional] 
**languages_codes** | **Object** | Same as &#x60;languages&#x60; but by language code, instead of language tags  | [optional] 
**languages_hierarchy** | **[String]** |  | [optional] 
**languages_tags** | **[String]** |  | [optional] 
**last_edit_dates_tags** | **[String]** |  | [optional] 
**last_editor** | **String** |  | [optional] 
**last_modified_by** | **String** | The username of the user who last modified the product.  | [optional] 
**last_modified_t** | **Number** | Date when the product page was last modified.  | [optional] 
**last_updated_t** | **Number** | Date when the product page was last updated.  | [optional] 
**owner** | **String** | Id of the producer in case he provides his own data about a product (producer platform).  | [optional] 
**owners_tags** | **String** | Tagyfied version of owner  | [optional] 
**photographers_tags** | **[String]** |  | [optional] 
**rev** | **Number** | revision number of this product version (each edit adds a revision) | [optional] 
**sources** | [**[ProductMetaSource]**](ProductMetaSource.md) |  | [optional] 
**sources_fields** | [**ProductMetaSourceFields**](ProductMetaSourceFields.md) |  | [optional] 
**teams** | **String** |  | [optional] 
**teams_tags** | **[String]** |  | [optional] 
**update_key** | **String** |  | [optional] 
**knowledge_panels** | [**Panels**](Panels.md) |  | [optional] 
**attribute_groups** | [**[ProductAttributeGroup]**](ProductAttributeGroup.md) | Each element is an attribute that can help compute a personal ranking for the product | [optional] 



## Enum: NutritionDataPerEnum


* `serving` (value: `"serving"`)

* `100g` (value: `"100g"`)





## Enum: NutritionDataPreparedPerEnum


* `serving` (value: `"serving"`)

* `100g` (value: `"100g"`)





## Enum: [Nutriscore2021TagsEnum]


* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)





## Enum: [Nutriscore2023TagsEnum]


* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)





## Enum: NutriscoreGradeEnum


* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)





## Enum: [NutriscoreTagsEnum]


* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)




