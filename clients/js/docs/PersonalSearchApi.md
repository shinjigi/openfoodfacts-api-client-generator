# OpenFoodFactsOpenApi.PersonalSearchApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttributeGroups_0**](PersonalSearchApi.md#getAttributeGroups_0) | **GET** /api/v2/attribute_groups | Get the list of attributes available for personal search.
[**getPreferences_0**](PersonalSearchApi.md#getPreferences_0) | **GET** /api/v2/preferences | Get the weights corresponding to attributes preferences to compute personal product 



## getAttributeGroups_0

> [AttributeGroup] getAttributeGroups_0(opts)

Get the list of attributes available for personal search.

Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user&#39;s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.PersonalSearchApi();
let opts = {
  'lc': "lc_example" // String | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
};
apiInstance.getAttributeGroups_0(opts, (error, data, response) => {
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


## getPreferences_0

> [GetPreferences200ResponseInner] getPreferences_0(opts)

Get the weights corresponding to attributes preferences to compute personal product 

This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.PersonalSearchApi();
let opts = {
  'lc': "lc_example" // String | 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
};
apiInstance.getPreferences_0(opts, (error, data, response) => {
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

