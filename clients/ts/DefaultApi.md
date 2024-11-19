# .DefaultApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cgiProductImageUnselectPlPost**](DefaultApi.md#cgiProductImageUnselectPlPost) | **POST** /cgi/product_image_unselect.pl | Unselect A Photo


# **cgiProductImageUnselectPlPost**
> UnselectAPhotoResponse cgiProductImageUnselectPlPost()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCgiProductImageUnselectPlPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCgiProductImageUnselectPlPostRequest = {
    // code of the product (optional)
  code: "4251105501381",
    // image field (image id) of the photo to unselect (optional)
  id: "front_fr",
};

const data = await apiInstance.cgiProductImageUnselectPlPost(request);
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


