# .WriteRequestsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCgiProductImageCropPl**](WriteRequestsApi.md#getCgiProductImageCropPl) | **GET** /cgi/product_image_crop.pl | Rotate A Photo
[**getCgiProductImageUploadPl**](WriteRequestsApi.md#getCgiProductImageUploadPl) | **POST** /cgi/product_image_upload.pl | Add a Photo to an Existing Product
[**postCgiProductImageCropPl**](WriteRequestsApi.md#postCgiProductImageCropPl) | **POST** /cgi/product_image_crop.pl | Crop A Photo
[**postCgiProductJqm2Pl**](WriteRequestsApi.md#postCgiProductJqm2Pl) | **POST** /cgi/product_jqm2.pl | Add or Edit A Product


# **getCgiProductImageCropPl**
> RotateAPhotoResponse getCgiProductImageCropPl()

Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 

### Example


```typescript
import { createConfiguration, WriteRequestsApi } from '';
import type { WriteRequestsApiGetCgiProductImageCropPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WriteRequestsApi(configuration);

const request: WriteRequestsApiGetCgiProductImageCropPlRequest = {
    // Barcode of the product
  code: "code_example",
  
  id: "id_example",
  
  imgid: "imgid_example",
  
  angle: "angle_example",
};

const data = await apiInstance.getCgiProductImageCropPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | Barcode of the product | defaults to undefined
 **id** | [**string**] |  | defaults to undefined
 **imgid** | [**string**] |  | defaults to undefined
 **angle** | [**string**] |  | defaults to undefined


### Return type

**RotateAPhotoResponse**

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

# **getCgiProductImageUploadPl**
> AddPhotoToExistingProductResponse getCgiProductImageUploadPl()

Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 

### Example


```typescript
import { createConfiguration, WriteRequestsApi } from '';
import type { WriteRequestsApiGetCgiProductImageUploadPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WriteRequestsApi(configuration);

const request: WriteRequestsApiGetCgiProductImageUploadPlRequest = {
    // Barcode of the product 
  code: "code_example",
    // Indicates the type of the image and the corresponding language. It should be in the format `{IMAGE_TYPE}_{LANG}` format, where `IMAGE_TYPE` is one of `front|ingredients|nutrition|packaging|other` and `LANG` is the 2 letter language code. Use `other` if you don\\\'t want the image to be selected. Note that the first image of a product is always selected as front picture. 
  imagefield: "imagefield_example",
    // This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if `imagefield=front_en`, the name of this field should be `imageupload_front_en`. 
  imgupload_front_en: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.getCgiProductImageUploadPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | Barcode of the product  | defaults to undefined
 **imagefield** | [**string**] | Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don\\\&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture.  | defaults to undefined
 **imgupload_front_en** | [**HttpFile**] | This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;.  | defaults to undefined


### Return type

**AddPhotoToExistingProductResponse**

### Authorization

[userAgentAuth](README.md#userAgentAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCgiProductImageCropPl**
> any postCgiProductImageCropPl()

Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 

### Example


```typescript
import { createConfiguration, WriteRequestsApi } from '';
import type { WriteRequestsApiPostCgiProductImageCropPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WriteRequestsApi(configuration);

const request: WriteRequestsApiPostCgiProductImageCropPlRequest = {
    // Barcode of the product.
  code: "code_example",
    // identifier of the image to select, it should be a number
  imgid: 1,
    // identifier of the selected image field, should be in the format `{IMAGE_TYPE}_{LANG}` format, where `IMAGE_TYPE` is one of `front|ingredients|nutrition|packaging|other` and `LANG` is the 2 letter language code. Note that if you select an image for the main language of the product (ex: `ingredients_it` if `it` is the main language), this image will be displayed on Product Opener for all languages (ex: on `https://fr.openfoodfacts.org`, unless `ingredients_fr` exists). 
  id: "id_example",
    // X origin coordinate of the crop, it must be lower than x2 (optional)
  x1: 1,
    // Y origin coordinate of the crop, it must be lower than y2 (optional)
  y1: 1,
    // X end coordinate of the crop, it must be higher than x1 (optional)
  x2: 1,
    // Y end coordinate of the crop, it must be higher than y1 (optional)
  y2: 1,
    // angle of the rotation to apply on the selected image. passing `90` as value rotate the image 90 degrees counter-clockwise.  (optional)
  angle: 1,
    // whether the selected image should be normalized using ImageMagick (optional)
  normalize: "true",
    // whether the source image should be white magiced (background removal) using ImageMagick.  (optional)
  white_magic: "false",
};

const data = await apiInstance.postCgiProductImageCropPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | Barcode of the product. | defaults to undefined
 **imgid** | [**number**] | identifier of the image to select, it should be a number | defaults to undefined
 **id** | [**string**] | identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists).  | defaults to undefined
 **x1** | [**number**] | X origin coordinate of the crop, it must be lower than x2 | (optional) defaults to undefined
 **y1** | [**number**] | Y origin coordinate of the crop, it must be lower than y2 | (optional) defaults to undefined
 **x2** | [**number**] | X end coordinate of the crop, it must be higher than x1 | (optional) defaults to undefined
 **y2** | [**number**] | Y end coordinate of the crop, it must be higher than y1 | (optional) defaults to undefined
 **angle** | [**number**] | angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise.  | (optional) defaults to undefined
 **normalize** | [**string**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | whether the selected image should be normalized using ImageMagick | (optional) defaults to undefined
 **white_magic** | [**string**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | whether the source image should be white magiced (background removal) using ImageMagick.  | (optional) defaults to 'false'


### Return type

**any**

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

# **postCgiProductJqm2Pl**
> AddOrEditAProductResponse postCgiProductJqm2Pl()

This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 

### Example


```typescript
import { createConfiguration, WriteRequestsApi } from '';
import type { WriteRequestsApiPostCgiProductJqm2PlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WriteRequestsApi(configuration);

const request: WriteRequestsApiPostCgiProductJqm2PlRequest = {
    // The barcode of the product to be added or edited
  code: "code_example",
    // A valid username.
  user_id: "user_id_example",
    // A valid corresponding password (related to specific environment).
  password: "password_example",
    // A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history.  (optional)
  comment: "comment_example",
    // The brands of the product (comma separated list of values). (optional)
  brands: [
    "brands_example",
  ],
    // The labels of the product (comma separated list of values). (optional)
  labels: [
    "labels_example",
  ],
    // The categories of the product (comma separated list of values). (optional)
  categories: [
    "categories_example",
  ],
    // Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for `packaging`.  (optional)
  packaging: "packaging_example",
    // Name of the app providing the information  (optional)
  app_name: "app_name_example",
    // Version of the app providing the information  (optional)
  app_version: "app_version_example",
    // When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\'s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits.  (optional)
  app_uuid: "app_uuid_example",
    // It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\'s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter.  (optional)
  User_Agent: "User_Agent_example",
};

const data = await apiInstance.postCgiProductJqm2Pl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The barcode of the product to be added or edited | defaults to undefined
 **user_id** | [**string**] | A valid username. | defaults to undefined
 **password** | [**string**] | A valid corresponding password (related to specific environment). | defaults to undefined
 **comment** | [**string**] | A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history.  | (optional) defaults to undefined
 **brands** | **Array&lt;string&gt;** | The brands of the product (comma separated list of values). | (optional) defaults to undefined
 **labels** | **Array&lt;string&gt;** | The labels of the product (comma separated list of values). | (optional) defaults to undefined
 **categories** | **Array&lt;string&gt;** | The categories of the product (comma separated list of values). | (optional) defaults to undefined
 **packaging** | [**string**] | Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;.  | (optional) defaults to undefined
 **app_name** | [**string**] | Name of the app providing the information  | (optional) defaults to undefined
 **app_version** | [**string**] | Version of the app providing the information  | (optional) defaults to undefined
 **app_uuid** | [**string**] | When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits.  | (optional) defaults to undefined
 **User_Agent** | [**string**] | It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter.  | (optional) defaults to undefined


### Return type

**AddOrEditAProductResponse**

### Authorization

[userAgentAuth](README.md#userAgentAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


