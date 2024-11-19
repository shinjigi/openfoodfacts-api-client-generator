# OpenFoodFactsOpenApi.NutrientsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCgiNutrientsPl**](NutrientsApi.md#getCgiNutrientsPl) | **GET** /cgi/nutrients.pl | Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language



## getCgiNutrientsPl

> [Nutrient] getCgiNutrientsPl(opts)

Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language

Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.NutrientsApi();
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
- **Accept**: application/json, text/plain

