# .PersonalSearchApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttributeGroups_0**](PersonalSearchApi.md#getAttributeGroups_0) | **GET** /api/v2/attribute_groups | Get the list of attributes available for personal search.
[**getPreferences_0**](PersonalSearchApi.md#getPreferences_0) | **GET** /api/v2/preferences | Get the weights corresponding to attributes preferences to compute personal product 


# **getAttributeGroups_0**
> Array<AttributeGroup> getAttributeGroups_0()

Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 

### Example


```typescript
import { createConfiguration, PersonalSearchApi } from '';
import type { PersonalSearchApiGetAttributeGroups0Request } from '';

const configuration = createConfiguration();
const apiInstance = new PersonalSearchApi(configuration);

const request: PersonalSearchApiGetAttributeGroups0Request = {
    // 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  (optional)
  lc: "lc_example",
};

const data = await apiInstance.getAttributeGroups_0(request);
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

# **getPreferences_0**
> Array<GetPreferences200ResponseInner> getPreferences_0()

This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 

### Example


```typescript
import { createConfiguration, PersonalSearchApi } from '';
import type { PersonalSearchApiGetPreferences0Request } from '';

const configuration = createConfiguration();
const apiInstance = new PersonalSearchApi(configuration);

const request: PersonalSearchApiGetPreferences0Request = {
    // 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix.  (optional)
  lc: "lc_example",
};

const data = await apiInstance.getPreferences_0(request);
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


