# OpenFoodFactsOpenApi.WriteRequestsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCgiProductImageCropPl**](WriteRequestsApi.md#getCgiProductImageCropPl) | **GET** /cgi/product_image_crop.pl | Rotate A Photo
[**getCgiProductImageUploadPl**](WriteRequestsApi.md#getCgiProductImageUploadPl) | **POST** /cgi/product_image_upload.pl | Add a Photo to an Existing Product
[**postCgiProductImageCropPl**](WriteRequestsApi.md#postCgiProductImageCropPl) | **POST** /cgi/product_image_crop.pl | Crop A Photo
[**postCgiProductJqm2Pl**](WriteRequestsApi.md#postCgiProductJqm2Pl) | **POST** /cgi/product_jqm2.pl | Add or Edit A Product



## getCgiProductImageCropPl

> RotateAPhotoResponse getCgiProductImageCropPl(code, id, imgid, angle)

Rotate A Photo

Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.WriteRequestsApi();
let code = "code_example"; // String | Barcode of the product
let id = "id_example"; // String | 
let imgid = "imgid_example"; // String | 
let angle = "angle_example"; // String | 
apiInstance.getCgiProductImageCropPl(code, id, imgid, angle, (error, data, response) => {
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
 **code** | **String**| Barcode of the product | 
 **id** | **String**|  | 
 **imgid** | **String**|  | 
 **angle** | **String**|  | 

### Return type

[**RotateAPhotoResponse**](RotateAPhotoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCgiProductImageUploadPl

> AddPhotoToExistingProductResponse getCgiProductImageUploadPl(code, imagefield, imgupload_front_en)

Add a Photo to an Existing Product

Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.&#39; 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';
let defaultClient = OpenFoodFactsOpenApi.ApiClient.instance;
// Configure API key authorization: userAgentAuth
let userAgentAuth = defaultClient.authentications['userAgentAuth'];
userAgentAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//userAgentAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new OpenFoodFactsOpenApi.WriteRequestsApi();
let code = "code_example"; // String | Barcode of the product 
let imagefield = "imagefield_example"; // String | Indicates the type of the image and the corresponding language. It should be in the format `{IMAGE_TYPE}_{LANG}` format, where `IMAGE_TYPE` is one of `front|ingredients|nutrition|packaging|other` and `LANG` is the 2 letter language code. Use `other` if you don't want the image to be selected. Note that the first image of a product is always selected as front picture. 
let imgupload_front_en = "/path/to/file"; // File | This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if `imagefield=front_en`, the name of this field should be `imageupload_front_en`. 
apiInstance.getCgiProductImageUploadPl(code, imagefield, imgupload_front_en, (error, data, response) => {
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
 **code** | **String**| Barcode of the product  | 
 **imagefield** | **String**| Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture.  | 
 **imgupload_front_en** | **File**| This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;.  | 

### Return type

[**AddPhotoToExistingProductResponse**](AddPhotoToExistingProductResponse.md)

### Authorization

[userAgentAuth](../README.md#userAgentAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## postCgiProductImageCropPl

> Object postCgiProductImageCropPl(code, imgid, id, opts)

Crop A Photo

Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.WriteRequestsApi();
let code = "code_example"; // String | Barcode of the product.
let imgid = 56; // Number | identifier of the image to select, it should be a number
let id = "id_example"; // String | identifier of the selected image field, should be in the format `{IMAGE_TYPE}_{LANG}` format, where `IMAGE_TYPE` is one of `front|ingredients|nutrition|packaging|other` and `LANG` is the 2 letter language code. Note that if you select an image for the main language of the product (ex: `ingredients_it` if `it` is the main language), this image will be displayed on Product Opener for all languages (ex: on `https://fr.openfoodfacts.org`, unless `ingredients_fr` exists). 
let opts = {
  'x1': 56, // Number | X origin coordinate of the crop, it must be lower than x2
  'y1': 56, // Number | Y origin coordinate of the crop, it must be lower than y2
  'x2': 56, // Number | X end coordinate of the crop, it must be higher than x1
  'y2': 56, // Number | Y end coordinate of the crop, it must be higher than y1
  'angle': 56, // Number | angle of the rotation to apply on the selected image. passing `90` as value rotate the image 90 degrees counter-clockwise. 
  'normalize': "normalize_example", // String | whether the selected image should be normalized using ImageMagick
  'white_magic': "'false'" // String | whether the source image should be white magiced (background removal) using ImageMagick. 
};
apiInstance.postCgiProductImageCropPl(code, imgid, id, opts, (error, data, response) => {
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
 **code** | **String**| Barcode of the product. | 
 **imgid** | **Number**| identifier of the image to select, it should be a number | 
 **id** | **String**| identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists).  | 
 **x1** | **Number**| X origin coordinate of the crop, it must be lower than x2 | [optional] 
 **y1** | **Number**| Y origin coordinate of the crop, it must be lower than y2 | [optional] 
 **x2** | **Number**| X end coordinate of the crop, it must be higher than x1 | [optional] 
 **y2** | **Number**| Y end coordinate of the crop, it must be higher than y1 | [optional] 
 **angle** | **Number**| angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise.  | [optional] 
 **normalize** | **String**| whether the selected image should be normalized using ImageMagick | [optional] 
 **white_magic** | **String**| whether the source image should be white magiced (background removal) using ImageMagick.  | [optional] [default to &#39;false&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## postCgiProductJqm2Pl

> AddOrEditAProductResponse postCgiProductJqm2Pl(code, user_id, password, opts)

Add or Edit A Product

This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn&#39;&#39;t you will be creating a new product with that unique barcode, and adding properties to the product. 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';
let defaultClient = OpenFoodFactsOpenApi.ApiClient.instance;
// Configure API key authorization: userAgentAuth
let userAgentAuth = defaultClient.authentications['userAgentAuth'];
userAgentAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//userAgentAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new OpenFoodFactsOpenApi.WriteRequestsApi();
let code = "code_example"; // String | The barcode of the product to be added or edited
let user_id = "user_id_example"; // String | A valid username.
let password = "password_example"; // String | A valid corresponding password (related to specific environment).
let opts = {
  'comment': "comment_example", // String | A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history. 
  'brands': ["null"], // [String] | The brands of the product (comma separated list of values).
  'labels': ["null"], // [String] | The labels of the product (comma separated list of values).
  'categories': ["null"], // [String] | The categories of the product (comma separated list of values).
  'packaging': "packaging_example", // String | Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for `packaging`. 
  'app_name': "app_name_example", // String | Name of the app providing the information 
  'app_version': "app_version_example", // String | Version of the app providing the information 
  'app_uuid': "app_uuid_example", // String | When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that's privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits. 
  'User_Agent': "User_Agent_example" // String | It is required that you pass a specific User-Agent header when you do an API request. But some times it's not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter. 
};
apiInstance.postCgiProductJqm2Pl(code, user_id, password, opts, (error, data, response) => {
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
 **code** | **String**| The barcode of the product to be added or edited | 
 **user_id** | **String**| A valid username. | 
 **password** | **String**| A valid corresponding password (related to specific environment). | 
 **comment** | **String**| A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history.  | [optional] 
 **brands** | [**[String]**](String.md)| The brands of the product (comma separated list of values). | [optional] 
 **labels** | [**[String]**](String.md)| The labels of the product (comma separated list of values). | [optional] 
 **categories** | [**[String]**](String.md)| The categories of the product (comma separated list of values). | [optional] 
 **packaging** | **String**| Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;.  | [optional] 
 **app_name** | **String**| Name of the app providing the information  | [optional] 
 **app_version** | **String**| Version of the app providing the information  | [optional] 
 **app_uuid** | **String**| When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits.  | [optional] 
 **User_Agent** | **String**| It is required that you pass a specific User-Agent header when you do an API request. But some times it&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter.  | [optional] 

### Return type

[**AddOrEditAProductResponse**](AddOrEditAProductResponse.md)

### Authorization

[userAgentAuth](../README.md#userAgentAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

