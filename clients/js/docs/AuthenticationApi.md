# OpenFoodFactsOpenApi.AuthenticationApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCgiSessionPl**](AuthenticationApi.md#getCgiSessionPl) | **POST** /cgi/session.pl | Login and obtain a session cookie



## getCgiSessionPl

> getCgiSessionPl(user_id, password)

Login and obtain a session cookie

Retrieve session cookie for writing operations.

### Example

```javascript
import OpenFoodFactsOpenApi from 'open_food_facts_open_api';

let apiInstance = new OpenFoodFactsOpenApi.AuthenticationApi();
let user_id = "user_id_example"; // String | Username for login
let password = "password_example"; // String | Password for login
apiInstance.getCgiSessionPl(user_id, password, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| Username for login | 
 **password** | **String**| Password for login | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined

