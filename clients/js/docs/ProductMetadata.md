# OpenFoodFactsOpenApi.ProductMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_t** | **Number** | Date when the product was added (UNIX timestamp format). See also &#x60;entry_dates_tags&#x60;  | [optional] 
**creator** | **String** | The contributor who added the product first.  | [optional] 
**editors_tags** | **[String]** | List of editors who edited the product.  | [optional] 
**informers_tags** | **[String]** |  | [optional] 
**interface_version_created** | **String** |  | [optional] 
**interface_version_modified** | **String** |  | [optional] 
**languages** | **Object** |  | [optional] 
**languages_codes** | **Object** | Same as &#x60;languages&#x60; but by language code, instead of language tags  | [optional] 
**languages_hierarchy** | **[String]** |  | [optional] 
**languages_tags** | **[String]** |  | [optional] 
**last_edit_dates_tags** | **[String]** |  | [optional] 
**last_editor** | **String** |  | [optional] 
**last_modified_by** | **String** | The username of the user who last modified the product.  | [optional] 
**last_modified_t** | **Number** | Date when the product page was last modified.  | [optional] 
**last_updated_t** | **Number** | Date when the product page was last updated.  | [optional] 
**owner** | **String** | Id of the producer in case he provides his own data about a product (producer platform).  | [optional] 
**owners_tags** | **String** | Tagyfied version of owner  | [optional] 
**photographers_tags** | **[String]** |  | [optional] 
**rev** | **Number** | revision number of this product version (each edit adds a revision) | [optional] 
**sources** | [**[ProductMetaSource]**](ProductMetaSource.md) |  | [optional] 
**sources_fields** | [**ProductMetaSourceFields**](ProductMetaSourceFields.md) |  | [optional] 
**teams** | **String** |  | [optional] 
**teams_tags** | **[String]** |  | [optional] 
**update_key** | **String** |  | [optional] 


