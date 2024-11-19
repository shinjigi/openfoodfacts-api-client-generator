# OpenFoodFactsOpenApi.ProductsApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductByBarcode**](ProductsApi.md#getProductByBarcode) | **GET** /api/v2/product/{barcode} | Get information for a specific product by barcode



## getProductByBarcode

> GetProductByBarcodeResponse getProductByBarcode(barcode, opts)

Get information for a specific product by barcode

A product can be fetched via its unique barcode. It returns all the details of that product response. You can add th Knowledge panels that gives high leve informations about a product, ready to display. This is used by open food facts website, and by the official mobile application 

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.ProductsApi();
let barcode = "3017620422003"; // String | The barcode of the product to be fetched 
let opts = {
  'fields': "fields_example" // String | TODO
};
apiInstance.getProductByBarcode(barcode, opts, (error, data, response) => {
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
 **barcode** | **String**| The barcode of the product to be fetched  | 
 **fields** | **String**| TODO | [optional] 

### Return type

[**GetProductByBarcodeResponse**](GetProductByBarcodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

