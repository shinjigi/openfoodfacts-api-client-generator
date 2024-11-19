# .AuxiliaryOperationsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCgiProductImageUnselectPl**](AuxiliaryOperationsApi.md#postCgiProductImageUnselectPl) | **POST** /cgi/product_image_unselect.pl | Unselect A Photo
[**searchV1ProductsGet**](AuxiliaryOperationsApi.md#searchV1ProductsGet) | **GET** /cgi/search.pl | Search products with filters (GET)
[**searchV1ProductsPost**](AuxiliaryOperationsApi.md#searchV1ProductsPost) | **POST** /cgi/search.pl | Search products with filters (POST)


# **postCgiProductImageUnselectPl**
> UnselectAPhotoResponse postCgiProductImageUnselectPl()

This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 

### Example


```typescript
import { createConfiguration, AuxiliaryOperationsApi } from '';
import type { AuxiliaryOperationsApiPostCgiProductImageUnselectPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuxiliaryOperationsApi(configuration);

const request: AuxiliaryOperationsApiPostCgiProductImageUnselectPlRequest = {
    // code of the product (optional)
  code: "code_example",
    // image field (image id) of the photo to unselect (optional)
  id: "id_example",
};

const data = await apiInstance.postCgiProductImageUnselectPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | code of the product | (optional) defaults to undefined
 **id** | [**string**] | image field (image id) of the photo to unselect | (optional) defaults to undefined


### Return type

**UnselectAPhotoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1ProductsGet**
> SearchForProductsResponse searchV1ProductsGet()

Search products with filters (GET)

### Example


```typescript
import { createConfiguration, AuxiliaryOperationsApi } from '';
import type { AuxiliaryOperationsApiSearchV1ProductsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuxiliaryOperationsApi(configuration);

const request: AuxiliaryOperationsApiSearchV1ProductsGetRequest = {
    // Text search terms (optional)
  search_terms: "search_terms_example",
  
  page: 1,
  
  page_size: 24,
  
  json: 1,
  
  fields: "fields_example",
  
  sort_by: "popularity",
  
  states_tags: "states_tags_example",
  
  brands_tags: "brands_tags_example",
  
  categories_tags: "categories_tags_example",
  
  labels_tags: "labels_tags_example",
  
  packaging_tags: "packaging_tags_example",
  
  purchase_places_tags: "purchase_places_tags_example",
  
  stores_tags: "stores_tags_example",
  
  countries_tags: "countries_tags_example",
  
  ingredients_tags: "ingredients_tags_example",
  
  trace_tags: "trace_tags_example",
};

const data = await apiInstance.searchV1ProductsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_terms** | [**string**] | Text search terms | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **page_size** | [**number**] |  | (optional) defaults to 24
 **json** | [**1**]**Array<1>** |  | (optional) defaults to undefined
 **fields** | [**string**] |  | (optional) defaults to undefined
 **sort_by** | [**&#39;popularity&#39; | &#39;product_name&#39; | &#39;created_t&#39; | &#39;created_datetime&#39; | &#39;completed_t&#39; | &#39;last_modified_t&#39; | &#39;last_modified_datetime&#39; | &#39;unique_scans_n&#39; | &#39;score&#39;**]**Array<&#39;popularity&#39; &#124; &#39;product_name&#39; &#124; &#39;created_t&#39; &#124; &#39;created_datetime&#39; &#124; &#39;completed_t&#39; &#124; &#39;last_modified_t&#39; &#124; &#39;last_modified_datetime&#39; &#124; &#39;unique_scans_n&#39; &#124; &#39;score&#39;>** |  | (optional) defaults to undefined
 **states_tags** | [**string**] |  | (optional) defaults to undefined
 **brands_tags** | [**string**] |  | (optional) defaults to undefined
 **categories_tags** | [**string**] |  | (optional) defaults to undefined
 **labels_tags** | [**string**] |  | (optional) defaults to undefined
 **packaging_tags** | [**string**] |  | (optional) defaults to undefined
 **purchase_places_tags** | [**string**] |  | (optional) defaults to undefined
 **stores_tags** | [**string**] |  | (optional) defaults to undefined
 **countries_tags** | [**string**] |  | (optional) defaults to undefined
 **ingredients_tags** | [**string**] |  | (optional) defaults to undefined
 **trace_tags** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchForProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1ProductsPost**
> SearchForProductsResponse searchV1ProductsPost()

Search products with filters (POST)

### Example


```typescript
import { createConfiguration, AuxiliaryOperationsApi } from '';
import type { AuxiliaryOperationsApiSearchV1ProductsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuxiliaryOperationsApi(configuration);

const request: AuxiliaryOperationsApiSearchV1ProductsPostRequest = {
  
  action: "process",
  
  sort_by: "popularity",
  
  page_size: 20,
  
  search_simple: 1,
    // Search for words present in the product name, generic name, brands, categories, origins and labels (optional)
  search_terms2: "search_terms2_example",
    // First criteria type (optional)
  tagtype_0: "search",
    // First criteria condition (optional)
  tag_contains_0: "contains",
    // First criteria value (optional)
  tag_0: "tag_0_example",
    // First criteria type (optional)
  tagtype_1: "search",
    // Second criteria condition (optional)
  tag_contains_1: "contains",
    // Second criteria value (optional)
  tag_1: "tag_1_example",
    // Filter by presence of additives (optional)
  additives: "indifferent",
    // Filter by ingredients from palm oil (optional)
  ingredients_from_palm_oil: "indifferent",
    // Filter by ingredients that may be from palm oil (optional)
  ingredients_that_may_be_from_palm_oil: "indifferent",
    // Filter by ingredients from or that may be from palm oil (optional)
  ingredients_from_or_that_may_be_from_palm_oil: "indifferent",
  
  nutriment_0: "nutriment_0_example",
  
  nutriment_compare_0: "lt",
  
  nutriment_value_0: "nutriment_value_0_example",
  
  nutriment_1: "nutriment_1_example",
  
  nutriment_compare_1: "lt",
  
  nutriment_value_1: "nutriment_value_1_example",
  
  graph_title: "graph_title_example",
  
  axis_x: "axis_x_example",
  
  axis_y: "axis_y_example",
  
  map_title: "map_title_example",
  
  page: 1,
  
  json: 1,
  
  fields: "fields_example",
};

const data = await apiInstance.searchV1ProductsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | [**string**]**Array<&#39;process&#39;>** |  | defaults to 'process'
 **sort_by** | [**string**]**Array<&#39;popularity&#39; &#124; &#39;product_name&#39; &#124; &#39;created_t&#39; &#124; &#39;created_datetime&#39; &#124; &#39;completed_t&#39; &#124; &#39;last_modified_t&#39; &#124; &#39;last_modified_datetime&#39; &#124; &#39;unique_scans_n&#39;>** |  | defaults to undefined
 **page_size** | [**number**] |  | defaults to 20
 **search_simple** | [**number**]**Array<1>** |  | (optional) defaults to undefined
 **search_terms2** | [**string**] | Search for words present in the product name, generic name, brands, categories, origins and labels | (optional) defaults to undefined
 **tagtype_0** | [**string**]**Array<&#39;search&#39; &#124; &#39;brands&#39; &#124; &#39;categories&#39; &#124; &#39;packaging&#39; &#124; &#39;labels&#39; &#124; &#39;origins&#39; &#124; &#39;manufacturing_places&#39; &#124; &#39;emb_codes&#39; &#124; &#39;purchase_places&#39; &#124; &#39;stores&#39; &#124; &#39;countries&#39; &#124; &#39;ingredients&#39; &#124; &#39;additives&#39; &#124; &#39;allergens&#39; &#124; &#39;traces&#39; &#124; &#39;nutrition_grades&#39; &#124; &#39;nova_groups&#39; &#124; &#39;ecoscore&#39; &#124; &#39;languages&#39; &#124; &#39;creator&#39; &#124; &#39;editors&#39; &#124; &#39;states&#39;>** | First criteria type | (optional) defaults to undefined
 **tag_contains_0** | [**string**]**Array<&#39;contains&#39; &#124; &#39;does_not_contain&#39;>** | First criteria condition | (optional) defaults to undefined
 **tag_0** | [**string**] | First criteria value | (optional) defaults to undefined
 **tagtype_1** | [**string**]**Array<&#39;search&#39; &#124; &#39;brands&#39; &#124; &#39;categories&#39; &#124; &#39;packaging&#39; &#124; &#39;labels&#39; &#124; &#39;origins&#39; &#124; &#39;manufacturing_places&#39; &#124; &#39;emb_codes&#39; &#124; &#39;purchase_places&#39; &#124; &#39;stores&#39; &#124; &#39;countries&#39; &#124; &#39;ingredients&#39; &#124; &#39;additives&#39; &#124; &#39;allergens&#39; &#124; &#39;traces&#39; &#124; &#39;nutrition_grades&#39; &#124; &#39;nova_groups&#39; &#124; &#39;ecoscore&#39; &#124; &#39;languages&#39; &#124; &#39;creator&#39; &#124; &#39;editors&#39; &#124; &#39;states&#39;>** | First criteria type | (optional) defaults to undefined
 **tag_contains_1** | [**string**]**Array<&#39;contains&#39; &#124; &#39;does_not_contain&#39;>** | Second criteria condition | (optional) defaults to undefined
 **tag_1** | [**string**] | Second criteria value | (optional) defaults to undefined
 **additives** | [**string**]**Array<&#39;without&#39; &#124; &#39;with&#39; &#124; &#39;indifferent&#39;>** | Filter by presence of additives | (optional) defaults to 'indifferent'
 **ingredients_from_palm_oil** | [**string**]**Array<&#39;without&#39; &#124; &#39;with&#39; &#124; &#39;indifferent&#39;>** | Filter by ingredients from palm oil | (optional) defaults to 'indifferent'
 **ingredients_that_may_be_from_palm_oil** | [**string**]**Array<&#39;without&#39; &#124; &#39;with&#39; &#124; &#39;indifferent&#39;>** | Filter by ingredients that may be from palm oil | (optional) defaults to 'indifferent'
 **ingredients_from_or_that_may_be_from_palm_oil** | [**string**]**Array<&#39;without&#39; &#124; &#39;with&#39; &#124; &#39;indifferent&#39;>** | Filter by ingredients from or that may be from palm oil | (optional) defaults to 'indifferent'
 **nutriment_0** | [**string**] |  | (optional) defaults to undefined
 **nutriment_compare_0** | [**string**]**Array<&#39;lt&#39; &#124; &#39;lte&#39; &#124; &#39;gt&#39; &#124; &#39;gte&#39; &#124; &#39;eq&#39;>** |  | (optional) defaults to undefined
 **nutriment_value_0** | [**string**] |  | (optional) defaults to undefined
 **nutriment_1** | [**string**] |  | (optional) defaults to undefined
 **nutriment_compare_1** | [**string**]**Array<&#39;lt&#39; &#124; &#39;lte&#39; &#124; &#39;gt&#39; &#124; &#39;gte&#39; &#124; &#39;eq&#39;>** |  | (optional) defaults to undefined
 **nutriment_value_1** | [**string**] |  | (optional) defaults to undefined
 **graph_title** | [**string**] |  | (optional) defaults to undefined
 **axis_x** | [**string**] |  | (optional) defaults to undefined
 **axis_y** | [**string**] |  | (optional) defaults to undefined
 **map_title** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **json** | [**number**]**Array<0 &#124; 1>** |  | (optional) defaults to 1
 **fields** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchForProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


