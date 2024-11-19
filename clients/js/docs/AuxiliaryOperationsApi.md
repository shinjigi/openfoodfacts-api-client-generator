# OpenFoodFactsOpenApi.AuxiliaryOperationsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCgiProductImageUnselectPl**](AuxiliaryOperationsApi.md#postCgiProductImageUnselectPl) | **POST** /cgi/product_image_unselect.pl | Unselect A Photo
[**searchV1ProductsGet**](AuxiliaryOperationsApi.md#searchV1ProductsGet) | **GET** /cgi/search.pl | Search products with filters (GET)
[**searchV1ProductsPost**](AuxiliaryOperationsApi.md#searchV1ProductsPost) | **POST** /cgi/search.pl | Search products with filters (POST)



## postCgiProductImageUnselectPl

> UnselectAPhotoResponse postCgiProductImageUnselectPl(opts)

Unselect A Photo

This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.AuxiliaryOperationsApi();
let opts = {
  'code': "code_example", // String | code of the product
  'id': "id_example" // String | image field (image id) of the photo to unselect
};
apiInstance.postCgiProductImageUnselectPl(opts, (error, data, response) => {
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
 **code** | **String**| code of the product | [optional] 
 **id** | **String**| image field (image id) of the photo to unselect | [optional] 

### Return type

[**UnselectAPhotoResponse**](UnselectAPhotoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## searchV1ProductsGet

> SearchForProductsResponse searchV1ProductsGet(opts)

Search products with filters (GET)

Search products with filters (GET)

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.AuxiliaryOperationsApi();
let opts = {
  'search_terms': "search_terms_example", // String | Text search terms
  'page': 1, // Number | 
  'page_size': 24, // Number | 
  'json': 56, // Number | 
  'fields': "fields_example", // String | 
  'sort_by': "sort_by_example", // String | 
  'states_tags': "states_tags_example", // String | 
  'brands_tags': "brands_tags_example", // String | 
  'categories_tags': "categories_tags_example", // String | 
  'labels_tags': "labels_tags_example", // String | 
  'packaging_tags': "packaging_tags_example", // String | 
  'purchase_places_tags': "purchase_places_tags_example", // String | 
  'stores_tags': "stores_tags_example", // String | 
  'countries_tags': "countries_tags_example", // String | 
  'ingredients_tags': "ingredients_tags_example", // String | 
  'trace_tags': "trace_tags_example" // String | 
};
apiInstance.searchV1ProductsGet(opts, (error, data, response) => {
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
 **search_terms** | **String**| Text search terms | [optional] 
 **page** | **Number**|  | [optional] [default to 1]
 **page_size** | **Number**|  | [optional] [default to 24]
 **json** | **Number**|  | [optional] 
 **fields** | **String**|  | [optional] 
 **sort_by** | **String**|  | [optional] 
 **states_tags** | **String**|  | [optional] 
 **brands_tags** | **String**|  | [optional] 
 **categories_tags** | **String**|  | [optional] 
 **labels_tags** | **String**|  | [optional] 
 **packaging_tags** | **String**|  | [optional] 
 **purchase_places_tags** | **String**|  | [optional] 
 **stores_tags** | **String**|  | [optional] 
 **countries_tags** | **String**|  | [optional] 
 **ingredients_tags** | **String**|  | [optional] 
 **trace_tags** | **String**|  | [optional] 

### Return type

[**SearchForProductsResponse**](SearchForProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchV1ProductsPost

> SearchForProductsResponse searchV1ProductsPost(action, sort_by, page_size, opts)

Search products with filters (POST)

Search products with filters (POST)

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.AuxiliaryOperationsApi();
let action = "'process'"; // String | 
let sort_by = "sort_by_example"; // String | 
let page_size = 20; // Number | 
let opts = {
  'search_simple': 3.4, // Number | 
  'search_terms2': "search_terms2_example", // String | Search for words present in the product name, generic name, brands, categories, origins and labels
  'tagtype_0': "tagtype_0_example", // String | First criteria type
  'tag_contains_0': "tag_contains_0_example", // String | First criteria condition
  'tag_0': "tag_0_example", // String | First criteria value
  'tagtype_1': "tagtype_1_example", // String | First criteria type
  'tag_contains_1': "tag_contains_1_example", // String | Second criteria condition
  'tag_1': "tag_1_example", // String | Second criteria value
  'additives': "'indifferent'", // String | Filter by presence of additives
  'ingredients_from_palm_oil': "'indifferent'", // String | Filter by ingredients from palm oil
  'ingredients_that_may_be_from_palm_oil': "'indifferent'", // String | Filter by ingredients that may be from palm oil
  'ingredients_from_or_that_may_be_from_palm_oil': "'indifferent'", // String | Filter by ingredients from or that may be from palm oil
  'nutriment_0': "nutriment_0_example", // String | 
  'nutriment_compare_0': "nutriment_compare_0_example", // String | 
  'nutriment_value_0': "nutriment_value_0_example", // String | 
  'nutriment_1': "nutriment_1_example", // String | 
  'nutriment_compare_1': "nutriment_compare_1_example", // String | 
  'nutriment_value_1': "nutriment_value_1_example", // String | 
  'graph_title': "graph_title_example", // String | 
  'axis_x': "axis_x_example", // String | 
  'axis_y': "axis_y_example", // String | 
  'map_title': "map_title_example", // String | 
  'page': 1, // Number | 
  'json': 1, // Number | 
  'fields': "fields_example" // String | 
};
apiInstance.searchV1ProductsPost(action, sort_by, page_size, opts, (error, data, response) => {
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
 **action** | **String**|  | [default to &#39;process&#39;]
 **sort_by** | **String**|  | 
 **page_size** | **Number**|  | [default to 20]
 **search_simple** | **Number**|  | [optional] 
 **search_terms2** | **String**| Search for words present in the product name, generic name, brands, categories, origins and labels | [optional] 
 **tagtype_0** | **String**| First criteria type | [optional] 
 **tag_contains_0** | **String**| First criteria condition | [optional] 
 **tag_0** | **String**| First criteria value | [optional] 
 **tagtype_1** | **String**| First criteria type | [optional] 
 **tag_contains_1** | **String**| Second criteria condition | [optional] 
 **tag_1** | **String**| Second criteria value | [optional] 
 **additives** | **String**| Filter by presence of additives | [optional] [default to &#39;indifferent&#39;]
 **ingredients_from_palm_oil** | **String**| Filter by ingredients from palm oil | [optional] [default to &#39;indifferent&#39;]
 **ingredients_that_may_be_from_palm_oil** | **String**| Filter by ingredients that may be from palm oil | [optional] [default to &#39;indifferent&#39;]
 **ingredients_from_or_that_may_be_from_palm_oil** | **String**| Filter by ingredients from or that may be from palm oil | [optional] [default to &#39;indifferent&#39;]
 **nutriment_0** | **String**|  | [optional] 
 **nutriment_compare_0** | **String**|  | [optional] 
 **nutriment_value_0** | **String**|  | [optional] 
 **nutriment_1** | **String**|  | [optional] 
 **nutriment_compare_1** | **String**|  | [optional] 
 **nutriment_value_1** | **String**|  | [optional] 
 **graph_title** | **String**|  | [optional] 
 **axis_x** | **String**|  | [optional] 
 **axis_y** | **String**|  | [optional] 
 **map_title** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] [default to 1]
 **json** | **Number**|  | [optional] [default to 1]
 **fields** | **String**|  | [optional] 

### Return type

[**SearchForProductsResponse**](SearchForProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

