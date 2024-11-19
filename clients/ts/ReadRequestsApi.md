# .ReadRequestsApi

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


# **getAttributeGroups**
> Array<AttributeGroup> getAttributeGroups()

Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetAttributeGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetAttributeGroupsRequest = {
    // 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  (optional)
  lc: "lc_example",
};

const data = await apiInstance.getAttributeGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lc** | [**string**] | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | (optional) defaults to undefined


### Return type

**Array<AttributeGroup>**

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

# **getCgiIngredientsPl**
> OcrOnProductResponse getCgiIngredientsPl()

Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetCgiIngredientsPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetCgiIngredientsPlRequest = {
  
  id: "id_example",
    // Barcode of the product
  code: "code_example",
  
  process_image: "process_image_example",
  
  ocr_engine: "ocr_engine_example",
};

const data = await apiInstance.getCgiIngredientsPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **code** | [**string**] | Barcode of the product | defaults to undefined
 **process_image** | [**string**] |  | defaults to undefined
 **ocr_engine** | [**string**] |  | defaults to undefined


### Return type

**OcrOnProductResponse**

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

# **getCgiNutrientsPl**
> Array<Nutrient> getCgiNutrientsPl()

Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetCgiNutrientsPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetCgiNutrientsPlRequest = {
    // 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request. (optional)
  cc: "cc_example",
    // 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  (optional)
  lc: "lc_example",
};

const data = await apiInstance.getCgiNutrientsPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | [**string**] | 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request. | (optional) defaults to undefined
 **lc** | [**string**] | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | (optional) defaults to undefined


### Return type

**Array<Nutrient>**

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

# **getCgiSuggestPl**
> Array<any> getCgiSuggestPl()

For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetCgiSuggestPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetCgiSuggestPlRequest = {
  
  tagtype: "tagtype_example",
  
  term: "term_example",
};

const data = await apiInstance.getCgiSuggestPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagtype** | [**string**] |  | (optional) defaults to undefined
 **term** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<any>**

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

# **getPreferences**
> Array<GetPreferences200ResponseInner> getPreferences()

This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetPreferencesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetPreferencesRequest = {
    // 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  (optional)
  lc: "lc_example",
};

const data = await apiInstance.getPreferences(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lc** | [**string**] | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  | (optional) defaults to undefined


### Return type

**Array<GetPreferences200ResponseInner>**

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

# **getProductByBarcode**
> GetProductByBarcodeAllResponse getProductByBarcode()

Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetProductByBarcodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetProductByBarcodeRequest = {
    // The barcode of the product to be fetched
  barcode: "barcode_example",
    // Specific fields to return. Use \'knowledge_panels\' for Knowledge Panels only. (optional)
  fields: "2,UUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM61ate1RA89q3w1l4eH4XxEz.5awxoFZxH,s6ED.kjUSnTINkYPUndNl8pmPg5K897Fu1J,Fj9R1_dz9rEoBi0LnU8SsOWJ7wYrcziVQdt8mVLxbg4bCLrLBcmXxWQK6MzKSg5jphe,0IfRRwpnT_Z.qKa_YppZepezJ0.VmLSUTLYyW.-e_jxxzpBvw.y-PuSI.13-AOsiPRVvnXrDhh58EJ,zOxprDzE3pjHRAkK7vI7kjcoPqzNk-YKJOXJ2zkgYnmU.hV4pJhQ7dhTAGxjARc6S,Kg2qVU-hA054g,0j8CXRM4JZgexx5VBmiUdb8V.5tS7Ce.8OP8jM,QXap-ieHoJL0cOHxhIz6IzRjPiSbv46JLcKaA.xTwLJc,koNQxJsCUIkorO.2KAnnTOE8M6xmSejA6BGR-RDxxWc493QsJ-JFtLrxtNb3Btp,GNB33FSliYEaSDC3Jwlo9Aq.OZySuG,BwuNL5ICjOL-uxZFN7oEXv3Rjr7mZXbY7cFU6HPiDV-aM8XFtx5,f7XxGahEx5as4igHCaWKgfGuN6Yogo9e2fmFQ_q_V0iz1l6lakAtMD7gXmnBhySbG7coPhWOlW,LvrLZaxa78JI_LGepDuQ3z.LtIx-RE8z6ZbHjzn3coUV-uTlEXw3Z8KLTvaqhte,pbwYU8rf85eyxCXQ02l2UfQbPWHwb-TbI1I6mS-9V.ofBBak-wevR6F-37RS4Mqp.z9OYCpSjEqZEdbOOqMN,k0MEG4PgSZp.tY7nzp2V09rLuCvfKd3LB7Nke4pyLFXi20uVuBIVQWxeziEmPj4.KIZ4EB,YGMeHwlQHgxMV_coQzDZPhSAcDWSu58NayafWzmTt.P7RTuj3iloSmvq6ptMXpaqws8RfvaYMfrqa8yWUbjaew8fGzxL8UBp,4IYjQxCBv0aEqODMs6-__HvAARQCZ_HKqroXyt6.Y8imaC5It9ZEZjIoZP9V1EjbA.tFQvgKOFpHUcVNnqDdEconiU,JR_OYqv01dQetO3oDTHSQdhLouT7merxKTcqNMpXfpU5ktnd4BBULIW0N,GhiW92gAEui,l-WoiEW.tzti,9q3K407VNjp2Rdt_M_wxbjDN-svNTMlZscMPUeqTE205sTZIkhsadNbiDH3R9hn,97bNktDzITop4y58kMdi7sEjYIZXQNI,G2UN7cFEvraG_8ul060s0W5myfNUsZOAfyRSKwumr7vrmbObYZ5LLOTkAJpJ6yD,EyKvzp-oyT1iV44YK-Q7W9XH_-nC87n1lMXx,cpcof84rc-bTU20M2sFqt4zswj63S37gymcb35PFmFooUEItJ,WXmmb6rN.PG7CfVVrIXdUuyma63xZJQfyqFaad9jaJKwsaFZawt9CZCsgO_EkphsT,YD6-2t-z_dodcIO0StQgTXeyp0Q.9qUn4jz1sIzDHdZi5DAKyeNjBARo.Dde72ZQ7rgUiF6NuAm_ZXdh-6NvD08O,uXF_iMcrZ0AkcxL21NwNNfADepMfPI-jxbyGRU9VFh._a9Mbcva1MSFLSU,GAcLlmJPzj1b,En-KXp2ZJ1qP6EIAQRw6KWw.PSWFS0LzB0tz6JsM-zfsuuNyQ1F-qNTmvGd,34AbRwr1Mi1qq8Bv,7r73NXsLH6lkp_YwgeBZkfv7aEST19XJTe9-4t-GIqXuFdD,054gT.SQFzTGrV3v-TunXGLysUh_by7pmMGuKPyyeSFxct6Ze7099nRsM3R50i8YYD7uU6_.V,RO7VbVfLxqbCc.GimutTgMtTfBOiI07gLv8fxp8Rrvb2oVixDwL_5GL,dkyb0ofYJLarfJrS4gkeTAfK5NMnpgtwWLpKWVb8A,uQa-TKwyJvJPBgILfXHpRfA79W9rCcVEcc1VmOZvW3..sp_E2t2terN4_2lcppBwgjIIFpE,9wjR-SU-K0GOwW4T,aO1NV6_Hx.5jhuPYUigmskjs38qptZPjGbQcMS6bq4jio6,n_hxYgCm.-Z,K_7Ms5LyP8NoYNVF5v,C_I7qzU,pSP39e4y_L-2jAgjSpNK_48uV.MZ7CZL92Y,TDLRif4BX0k_kxk.VTaov2mlM18SfVTJ,mcMNVIO85230RBh.y9g8MNnnvGKT10t.mI5XH9biew58zTl0rQVIApvKA-eQe3wv-SD86JI2WO4rz8dSltvVqfei,m5FrnEpLvFqwhHFvdn0kEWtwPAhULVh_u,c--m-15yE3,jO3gKaP-YHCaCFHZkWsh.mLTR_p_ZhJXuOoIsNHZsK-m5ntCxGzmy4lVW_PKmo-4vtEAhOm289Yqnh43gtmE0DcSlXRhP,iRTQHkAPGO-AROE-GYzP3aIBvIz2Du0PJgDeBXnU3IgkF7V.jBW,R9V8PHmR5UHiFYWfIRAHRUzlaQ_5fkL16fmprt8wmIyj95MZALC3mmE.9.9QIQ_TxYHnPGd129xGytHvWDBO.HWa9uog_gy,B_Lcv_NbdKzBHV0mHJ0otqw.2cVo74hoJwmXoaUvId.qA0zLPa,yNACHAPKtKgQ.wkE-FxSQB6am1_36v_4sO,L0-obeH_A5Q-g0U8nnM,tLSIw-h_9TVGO7HSAcUt2jm2mJ6jxIaRYSQHPbXmRPRzaWrmwaKy4EMWPwbc.aU2Q37XoigypCN,O-vMz_s2eIdV.ysI6yTso6oV4n2icY_UqIX3aXe8,fjQVrmDXiXxxvBTvfg06jgn9.ScpKH8N5C4XWGVGRk3j37rxQmI4kwvKHhIKCAUvIkWH6jwZxFRo-eIKF,u9HDcrUBkJ7XvQAc.6hPCiLNyumZW-bZ1Z1lFtnk615uonsVXHfF05q0NRqj15TZJbNNeHStQMOuYC_jqdm9E9SG-W_klzb,D,EIYyIete7WHGdGvaz8OlgB8y7yFT3urhGfXNdaf9LPJpeol,Hsm_twH5CZ0hw5E79TYBg5mTcvHosbmds0,lnttAjUMBqupVLK3x4-0AG976YmWGXzKcfMwo,AJe6AqMxeiI54JCwm88akvPHFEeT,B2_DFbeoWsodas1SE0ZbMSAutkOh5Xxm5JinIE.HSc3Uum5CXQM8IAqgV7Pt7UP7R.a.gxq3pkrhbyaL-,g06Y18ROfY0YdRY3jzlcCRRc0YCrW8XRt5tBgOBd9I6,WfODawxODTr6XaLBZ4N4HcKJ0,9,176mYQK5G5Zg_.QRvAnzbzYh01qrNB",
};

const data = await apiInstance.getProductByBarcode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barcode** | [**string**] | The barcode of the product to be fetched | defaults to undefined
 **fields** | [**string**] | Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only. | (optional) defaults to undefined


### Return type

**GetProductByBarcodeAllResponse**

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

# **getSearch**
> SearchForProductsResponse getSearch()

Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 

### Example


```typescript
import { createConfiguration, ReadRequestsApi } from '';
import type { ReadRequestsApiGetSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReadRequestsApi(configuration);

const request: ReadRequestsApiGetSearchRequest = {
    // The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for `additives`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  additives_tags: "additives_tags_example",
    // The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for `allergens`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  allergens_tags: "allergens_tags_example",
    // The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for `brands`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  brands_tags: "brands_tags_example",
    // The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for `categories`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  categories_tags: "categories_tags_example",
    // The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for `countries`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  countries_tags_en: "countries_tags_en_example",
    // The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  emb_codes_tags: "emb_codes_tags_example",
    // The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for `labels`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  labels_tags: "labels_tags_example",
    // The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for `manufacturing-places`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  manufacturing_places_tags: "manufacturing_places_tags_example",
    // The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for `nutrition-grades`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  nutrition_grades_tags: "nutrition_grades_tags_example",
    // The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  origins_tags: "origins_tags_example",
    // The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for `packaging`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  packaging_tags_de: "packaging_tags_de_example",
    // The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  purchase_places_tags: "purchase_places_tags_example",
    // The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for `states`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  states_tags: "states_tags_example",
    // The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  stores_tags: "stores_tags_example",
    // The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for `traces`.  You can use multiple values by using a comma separated list. You can add a \"-\" before values to avoid matching a tag.  (optional)
  traces_tags: "traces_tags_example",
    // You can add a language code to a specific tag to query it in a specific language  (optional)
  tag_name_tags_language_code: {},
    // Search on nutrient lower than a value  (optional)
  nutrient_lt_value: {},
    // Search on nutrient greater than a value  (optional)
  nutrient_gt_value: {},
    // Search on nutrient for an exact quantity  (optional)
  nutrient_eq_value: {},
    // Specific fields to return. Use \'knowledge_panels\' for Knowledge Panels only. (optional)
  fields: "2,UUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM61ate1RA89q3w1l4eH4XxEz.5awxoFZxH,s6ED.kjUSnTINkYPUndNl8pmPg5K897Fu1J,Fj9R1_dz9rEoBi0LnU8SsOWJ7wYrcziVQdt8mVLxbg4bCLrLBcmXxWQK6MzKSg5jphe,0IfRRwpnT_Z.qKa_YppZepezJ0.VmLSUTLYyW.-e_jxxzpBvw.y-PuSI.13-AOsiPRVvnXrDhh58EJ,zOxprDzE3pjHRAkK7vI7kjcoPqzNk-YKJOXJ2zkgYnmU.hV4pJhQ7dhTAGxjARc6S,Kg2qVU-hA054g,0j8CXRM4JZgexx5VBmiUdb8V.5tS7Ce.8OP8jM,QXap-ieHoJL0cOHxhIz6IzRjPiSbv46JLcKaA.xTwLJc,koNQxJsCUIkorO.2KAnnTOE8M6xmSejA6BGR-RDxxWc493QsJ-JFtLrxtNb3Btp,GNB33FSliYEaSDC3Jwlo9Aq.OZySuG,BwuNL5ICjOL-uxZFN7oEXv3Rjr7mZXbY7cFU6HPiDV-aM8XFtx5,f7XxGahEx5as4igHCaWKgfGuN6Yogo9e2fmFQ_q_V0iz1l6lakAtMD7gXmnBhySbG7coPhWOlW,LvrLZaxa78JI_LGepDuQ3z.LtIx-RE8z6ZbHjzn3coUV-uTlEXw3Z8KLTvaqhte,pbwYU8rf85eyxCXQ02l2UfQbPWHwb-TbI1I6mS-9V.ofBBak-wevR6F-37RS4Mqp.z9OYCpSjEqZEdbOOqMN,k0MEG4PgSZp.tY7nzp2V09rLuCvfKd3LB7Nke4pyLFXi20uVuBIVQWxeziEmPj4.KIZ4EB,YGMeHwlQHgxMV_coQzDZPhSAcDWSu58NayafWzmTt.P7RTuj3iloSmvq6ptMXpaqws8RfvaYMfrqa8yWUbjaew8fGzxL8UBp,4IYjQxCBv0aEqODMs6-__HvAARQCZ_HKqroXyt6.Y8imaC5It9ZEZjIoZP9V1EjbA.tFQvgKOFpHUcVNnqDdEconiU,JR_OYqv01dQetO3oDTHSQdhLouT7merxKTcqNMpXfpU5ktnd4BBULIW0N,GhiW92gAEui,l-WoiEW.tzti,9q3K407VNjp2Rdt_M_wxbjDN-svNTMlZscMPUeqTE205sTZIkhsadNbiDH3R9hn,97bNktDzITop4y58kMdi7sEjYIZXQNI,G2UN7cFEvraG_8ul060s0W5myfNUsZOAfyRSKwumr7vrmbObYZ5LLOTkAJpJ6yD,EyKvzp-oyT1iV44YK-Q7W9XH_-nC87n1lMXx,cpcof84rc-bTU20M2sFqt4zswj63S37gymcb35PFmFooUEItJ,WXmmb6rN.PG7CfVVrIXdUuyma63xZJQfyqFaad9jaJKwsaFZawt9CZCsgO_EkphsT,YD6-2t-z_dodcIO0StQgTXeyp0Q.9qUn4jz1sIzDHdZi5DAKyeNjBARo.Dde72ZQ7rgUiF6NuAm_ZXdh-6NvD08O,uXF_iMcrZ0AkcxL21NwNNfADepMfPI-jxbyGRU9VFh._a9Mbcva1MSFLSU,GAcLlmJPzj1b,En-KXp2ZJ1qP6EIAQRw6KWw.PSWFS0LzB0tz6JsM-zfsuuNyQ1F-qNTmvGd,34AbRwr1Mi1qq8Bv,7r73NXsLH6lkp_YwgeBZkfv7aEST19XJTe9-4t-GIqXuFdD,054gT.SQFzTGrV3v-TunXGLysUh_by7pmMGuKPyyeSFxct6Ze7099nRsM3R50i8YYD7uU6_.V,RO7VbVfLxqbCc.GimutTgMtTfBOiI07gLv8fxp8Rrvb2oVixDwL_5GL,dkyb0ofYJLarfJrS4gkeTAfK5NMnpgtwWLpKWVb8A,uQa-TKwyJvJPBgILfXHpRfA79W9rCcVEcc1VmOZvW3..sp_E2t2terN4_2lcppBwgjIIFpE,9wjR-SU-K0GOwW4T,aO1NV6_Hx.5jhuPYUigmskjs38qptZPjGbQcMS6bq4jio6,n_hxYgCm.-Z,K_7Ms5LyP8NoYNVF5v,C_I7qzU,pSP39e4y_L-2jAgjSpNK_48uV.MZ7CZL92Y,TDLRif4BX0k_kxk.VTaov2mlM18SfVTJ,mcMNVIO85230RBh.y9g8MNnnvGKT10t.mI5XH9biew58zTl0rQVIApvKA-eQe3wv-SD86JI2WO4rz8dSltvVqfei,m5FrnEpLvFqwhHFvdn0kEWtwPAhULVh_u,c--m-15yE3,jO3gKaP-YHCaCFHZkWsh.mLTR_p_ZhJXuOoIsNHZsK-m5ntCxGzmy4lVW_PKmo-4vtEAhOm289Yqnh43gtmE0DcSlXRhP,iRTQHkAPGO-AROE-GYzP3aIBvIz2Du0PJgDeBXnU3IgkF7V.jBW,R9V8PHmR5UHiFYWfIRAHRUzlaQ_5fkL16fmprt8wmIyj95MZALC3mmE.9.9QIQ_TxYHnPGd129xGytHvWDBO.HWa9uog_gy,B_Lcv_NbdKzBHV0mHJ0otqw.2cVo74hoJwmXoaUvId.qA0zLPa,yNACHAPKtKgQ.wkE-FxSQB6am1_36v_4sO,L0-obeH_A5Q-g0U8nnM,tLSIw-h_9TVGO7HSAcUt2jm2mJ6jxIaRYSQHPbXmRPRzaWrmwaKy4EMWPwbc.aU2Q37XoigypCN,O-vMz_s2eIdV.ysI6yTso6oV4n2icY_UqIX3aXe8,fjQVrmDXiXxxvBTvfg06jgn9.ScpKH8N5C4XWGVGRk3j37rxQmI4kwvKHhIKCAUvIkWH6jwZxFRo-eIKF,u9HDcrUBkJ7XvQAc.6hPCiLNyumZW-bZ1Z1lFtnk615uonsVXHfF05q0NRqj15TZJbNNeHStQMOuYC_jqdm9E9SG-W_klzb,D,EIYyIete7WHGdGvaz8OlgB8y7yFT3urhGfXNdaf9LPJpeol,Hsm_twH5CZ0hw5E79TYBg5mTcvHosbmds0,lnttAjUMBqupVLK3x4-0AG976YmWGXzKcfMwo,AJe6AqMxeiI54JCwm88akvPHFEeT,B2_DFbeoWsodas1SE0ZbMSAutkOh5Xxm5JinIE.HSc3Uum5CXQM8IAqgV7Pt7UP7R.a.gxq3pkrhbyaL-,g06Y18ROfY0YdRY3jzlcCRRc0YCrW8XRt5tBgOBd9I6,WfODawxODTr6XaLBZ4N4HcKJ0,9,176mYQK5G5Zg_.QRvAnzbzYh01qrNB",
    // The allowed values  used to sort/order the search results.  * `product_name` sorts on name * `ecoscore_score`, `nova_score`, `nutriscore_score` rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * `scans_n`, `unique_scans_n` and `popularity_key` are about product popularity: number of scans on unique scans, rank of product * `created_t`, `last_modified_t`, are about creation and modification dates * `nothing`, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date)  (optional)
  sort_by: "product_name",
    // The page number you request to view (eg. in search results spanning multiple pages)  (optional)
  page: 1,
    // The number of elements should be sent per page  (optional)
  page_size: 1,
};

const data = await apiInstance.getSearch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additives_tags** | [**string**] | The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **allergens_tags** | [**string**] | The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **brands_tags** | [**string**] | The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **categories_tags** | [**string**] | The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **countries_tags_en** | [**string**] | The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **emb_codes_tags** | [**string**] | The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **labels_tags** | [**string**] | The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **manufacturing_places_tags** | [**string**] | The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **nutrition_grades_tags** | [**string**] | The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **origins_tags** | [**string**] | The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **packaging_tags_de** | [**string**] | The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **purchase_places_tags** | [**string**] | The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **states_tags** | [**string**] | The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **stores_tags** | [**string**] | The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **traces_tags** | [**string**] | The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag.  | (optional) defaults to undefined
 **tag_name_tags_language_code** | **any** | You can add a language code to a specific tag to query it in a specific language  | (optional) defaults to undefined
 **nutrient_lt_value** | **any** | Search on nutrient lower than a value  | (optional) defaults to undefined
 **nutrient_gt_value** | **any** | Search on nutrient greater than a value  | (optional) defaults to undefined
 **nutrient_eq_value** | **any** | Search on nutrient for an exact quantity  | (optional) defaults to undefined
 **fields** | [**string**] | Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only. | (optional) defaults to undefined
 **sort_by** | [**&#39;product_name&#39; | &#39;last_modified_t&#39; | &#39;scans_n&#39; | &#39;unique_scans_n&#39; | &#39;created_t&#39; | &#39;completeness&#39; | &#39;popularity_key&#39; | &#39;nutriscore_score&#39; | &#39;nova_score&#39; | &#39;nothing&#39; | &#39;ecoscore_score&#39;**]**Array<&#39;product_name&#39; &#124; &#39;last_modified_t&#39; &#124; &#39;scans_n&#39; &#124; &#39;unique_scans_n&#39; &#124; &#39;created_t&#39; &#124; &#39;completeness&#39; &#124; &#39;popularity_key&#39; &#124; &#39;nutriscore_score&#39; &#124; &#39;nova_score&#39; &#124; &#39;nothing&#39; &#124; &#39;ecoscore_score&#39;>** | The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date)  | (optional) defaults to undefined
 **page** | [**number**] | The page number you request to view (eg. in search results spanning multiple pages)  | (optional) defaults to undefined
 **page_size** | [**number**] | The number of elements should be sent per page  | (optional) defaults to undefined


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


