# OpenFoodFactsOpenApi.SearchForProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | Total number of products found  | [optional] 
**page** | **Number** | Page number of returned results.  You can get a different page, by using the &#x60;page&#x60; query parameter.  | [optional] 
**page_count** | **Number** | Number of products in this page.  This will differ from page_size only on the last page.  | [optional] 
**page_size** | **Number** | Requested number of products per pages  To get the number of pages, divide count by page_size (eg. &#x60;Math.floor( count / page_size) + 1 &#x60;)  | [optional] 
**products** | [**[Product]**](Product.md) | The products matching the query corresponding to current page  | [optional] 
**skip** | **Number** |  | [optional] 


