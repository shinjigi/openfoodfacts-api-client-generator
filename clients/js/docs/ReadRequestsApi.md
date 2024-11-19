# OpenFoodFactsOpenApi.ReadRequestsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttributeGroups**](ReadRequestsApi.md#getAttributeGroups) | **GET** /api/v2/attribute_groups | Get the list of attributes available for personal search.
[**getCgiIngredientsPl**](ReadRequestsApi.md#getCgiIngredientsPl) | **GET** /cgi/ingredients.pl | Performing OCR on a Product
[**getCgiNutrientsPl**](ReadRequestsApi.md#getCgiNutrientsPl) | **GET** /cgi/nutrients.pl | Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
[**getCgiSuggestPl**](ReadRequestsApi.md#getCgiSuggestPl) | **GET** /cgi/suggest.pl | Get Suggestions to Aid Adding/Editing Products
[**getPreferences**](ReadRequestsApi.md#getPreferences) | **GET** /api/v2/preferences | Get the weights corresponding to attributes preferences to compute personal product 
[**getProductByBarcode**](ReadRequestsApi.md#getProductByBarcode) | **GET** /api/v2/product/{barcode} | Get information for a specific product by barcode
[**getSearch**](ReadRequestsApi.md#getSearch) | **GET** /api/v2/search | Search for Products



## getAttributeGroups

> [AttributeGroup] getAttributeGroups(opts)

Get the list of attributes available for personal search.

Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user&#39;s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let opts = {
  'lc': "lc_example" // String | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
};
apiInstance.getAttributeGroups(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lc** | **String**| 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | [optional] 

### Return type

[**[AttributeGroup]**](AttributeGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCgiIngredientsPl

> OcrOnProductResponse getCgiIngredientsPl(id, code, process_image, ocr_engine)

Performing OCR on a Product

Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let id = "id_example"; // String | 
let code = "code_example"; // String | Barcode of the product
let process_image = "process_image_example"; // String | 
let ocr_engine = "ocr_engine_example"; // String | 
apiInstance.getCgiIngredientsPl(id, code, process_image, ocr_engine, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **code** | **String**| Barcode of the product | 
 **process_image** | **String**|  | 
 **ocr_engine** | **String**|  | 

### Return type

[**OcrOnProductResponse**](OcrOnProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCgiNutrientsPl

> [Nutrient] getCgiNutrientsPl(opts)

Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language

Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let opts = {
  'cc': "cc_example", // String | 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
  'lc': "lc_example" // String | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
};
apiInstance.getCgiNutrientsPl(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | **String**| 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request. | [optional] 
 **lc** | **String**| 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | [optional] 

### Return type

[**[Nutrient]**](Nutrient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCgiSuggestPl

> [Object] getCgiSuggestPl(opts)

Get Suggestions to Aid Adding/Editing Products

For example , Dave is looking for packaging_shapes that contain the term \&quot;fe\&quot;, all packaging_shapes containing \&quot;fe\&quot; will be returned. This is useful if you have a search in your application, for a specific product field. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let opts = {
  'tagtype': "tagtype_example", // String | 
  'term': "term_example" // String | 
};
apiInstance.getCgiSuggestPl(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagtype** | **String**|  | [optional] 
 **term** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPreferences

> [GetPreferences200ResponseInner] getPreferences(opts)

Get the weights corresponding to attributes preferences to compute personal product 

This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let opts = {
  'lc': "lc_example" // String | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
};
apiInstance.getPreferences(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lc** | **String**| 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | [optional] 

### Return type

[**[GetPreferences200ResponseInner]**](GetPreferences200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductByBarcode

> GetProductByBarcodeAllResponse getProductByBarcode(barcode, opts)

Get information for a specific product by barcode

Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let barcode = "barcode_example"; // String | The barcode of the product to be fetched
let opts = {
  'fields': "fields_example" // String | Specific fields to return. Use 'knowledge_panels' for Knowledge Panels only.
};
apiInstance.getProductByBarcode(barcode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barcode** | **String**| The barcode of the product to be fetched | 
 **fields** | **String**| Specific fields to return. Use &#39;knowledge_panels&#39; for Knowledge Panels only. | [optional] 

### Return type

[**GetProductByBarcodeAllResponse**](GetProductByBarcodeAllResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSearch

> SearchForProductsResponse getSearch(opts)

Search for Products

Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like &#x60;fr&#x60;, &#x60;de&#x60; or &#x60;en&#x60;, specify the language code in the parameter name e.g &#x60;categories_tags_en&#x60;  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the &#x60;fields&#x60; object (see below).  eg: &#x60;fields&#x3D;code,product_name,brands,attribute_groups&#x60;&#x60;  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see &#x60;page&#x60; and &#x60;page_size&#x60; parameters.  **Beware:** the &#x60;page_count&#x60; data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All &#x60;_tags&#x60;&#x60; parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \&quot;-\&quot; prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * &#x60;labels_tags&#x3D;en:organic,en:fair-trade&#x60; find items that are fair-trade AND organic * &#x60;labels_tags&#x3D;en:organic|en:fair-trade&#x60; find items that are fair-trade OR organic * &#x60;labels_tags&#x3D;en:organic,en:-fair-trade&#x60; find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (&#x60;_100g&#x60; suffix) or per serving (&#x60;serving&#x60; suffix).  You can also add &#x60;_prepared_&#x60; to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * &#x60;energy-kj_100g&lt;200&#x60; products where energy in kj for 100g is less than 200kj * &#x60;sugars_serving&gt;10&#x60; products where sugar per serving is greater than 10g * &#x60;saturated-fat_100g&#x3D;1&#x60; products where saturated fat per 100g is exactly 10g * &#x60;salt_prepared_serving&lt;0.1&#x60; products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ReadRequestsApi();
let opts = {
  'additives_tags': "additives_tags_example", // String | The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for `additives`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'allergens_tags': "allergens_tags_example", // String | The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for `allergens`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'brands_tags': "brands_tags_example", // String | The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for `brands`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'categories_tags': "categories_tags_example", // String | The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for `categories`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'countries_tags_en': "countries_tags_en_example", // String | The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for `countries`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'emb_codes_tags': "emb_codes_tags_example", // String | The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'labels_tags': "labels_tags_example", // String | The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for `labels`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'manufacturing_places_tags': "manufacturing_places_tags_example", // String | The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for `manufacturing-places`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'nutrition_grades_tags': "nutrition_grades_tags_example", // String | The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for `nutrition-grades`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'origins_tags': "origins_tags_example", // String | The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'packaging_tags_de': "packaging_tags_de_example", // String | The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for `packaging`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'purchase_places_tags': "purchase_places_tags_example", // String | The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'states_tags': "states_tags_example", // String | The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for `states`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'stores_tags': "stores_tags_example", // String | The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'traces_tags': "traces_tags_example", // String | The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for `traces`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag. 
  'tag_name_tags_language_code': {key: null}, // Object | You can add a language code to a specific tag to query it in a specific language 
  'nutrient_lt_value': {key: null}, // Object | Search on nutrient lower than a value 
  'nutrient_gt_value': {key: null}, // Object | Search on nutrient greater than a value 
  'nutrient_eq_value': {key: null}, // Object | Search on nutrient for an exact quantity 
  'fields': "fields_example", // String | Specific fields to return. Use 'knowledge_panels' for Knowledge Panels only.
  'sort_by': "sort_by_example", // String | The allowed values  used to sort/order the search results.  * `product_name` sorts on name * `ecoscore_score`, `nova_score`, `nutriscore_score` rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * `scans_n`, `unique_scans_n` and `popularity_key` are about product popularity: number of scans on unique scans, rank of product * `created_t`, `last_modified_t`, are about creation and modification dates * `nothing`, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date) 
  'page': 56, // Number | The page number you request to view (eg. in search results spanning multiple pages) 
  'page_size': 56 // Number | The number of elements should be sent per page 
};
apiInstance.getSearch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additives_tags** | **String**| The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **allergens_tags** | **String**| The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **brands_tags** | **String**| The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **categories_tags** | **String**| The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **countries_tags_en** | **String**| The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **emb_codes_tags** | **String**| The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **labels_tags** | **String**| The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **manufacturing_places_tags** | **String**| The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **nutrition_grades_tags** | **String**| The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **origins_tags** | **String**| The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **packaging_tags_de** | **String**| The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **purchase_places_tags** | **String**| The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **states_tags** | **String**| The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **stores_tags** | **String**| The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **traces_tags** | **String**| The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | [optional] 
 **tag_name_tags_language_code** | [**Object**](.md)| You can add a language code to a specific tag to query it in a specific language  | [optional] 
 **nutrient_lt_value** | [**Object**](.md)| Search on nutrient lower than a value  | [optional] 
 **nutrient_gt_value** | [**Object**](.md)| Search on nutrient greater than a value  | [optional] 
 **nutrient_eq_value** | [**Object**](.md)| Search on nutrient for an exact quantity  | [optional] 
 **fields** | **String**| Specific fields to return. Use &#39;knowledge_panels&#39; for Knowledge Panels only. | [optional] 
 **sort_by** | **String**| The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date)  | [optional] 
 **page** | **Number**| The page number you request to view (eg. in search results spanning multiple pages)  | [optional] 
 **page_size** | **Number**| The number of elements should be sent per page  | [optional] 

### Return type

[**SearchForProductsResponse**](SearchForProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

