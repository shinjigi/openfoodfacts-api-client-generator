# .AuxiliaryOperationsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCgiProductImageUnselectPl**](AuxiliaryOperationsApi.md#postCgiProductImageUnselectPl) | **POST** /cgi/product_image_unselect.pl | Unselect A Photo


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


