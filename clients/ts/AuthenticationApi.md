# .AuthenticationApi

All URIs are relative to *https://world.openfoodfacts.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCgiSessionPl**](AuthenticationApi.md#getCgiSessionPl) | **POST** /cgi/session.pl | Login and obtain a session cookie


# **getCgiSessionPl**
> void getCgiSessionPl()

Retrieve session cookie for writing operations.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';
import type { AuthenticationApiGetCgiSessionPlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request: AuthenticationApiGetCgiSessionPlRequest = {
    // Username for login
  user_id: "user_id_example",
    // Password for login
  password: "password_example",
};

const data = await apiInstance.getCgiSessionPl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | [**string**] | Username for login | defaults to undefined
 **password** | [**string**] | Password for login | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful login |  * Set-Cookie -  <br>  |
**401** | Authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


