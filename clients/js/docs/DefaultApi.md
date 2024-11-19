# OpenFoodFactsOpenApi.DefaultApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCgiProductImageUnselectPl**](DefaultApi.md#postCgiProductImageUnselectPl) | **POST** /cgi/product_image_unselect.pl | Unselect A Photo



## postCgiProductImageUnselectPl

> UnselectAPhotoResponse postCgiProductImageUnselectPl(opts)

Unselect A Photo

This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.DefaultApi();
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

