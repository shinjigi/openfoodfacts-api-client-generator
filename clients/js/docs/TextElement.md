# OpenFoodFactsOpenApi.TextElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | the type of text, might influence the way you display it.  | [optional] 
**html** | **String** | Text to display in HTML format. | [optional] 
**language** | **String** | Language of the text. The name of the language is returned in the language requested when making the API call. e.g. if the text is in Polish, and the requested language is French, the language field will contain \&quot;Polonais\&quot; (French for \&quot;Polish\&quot;). Only set for specific fields such as the list of ingredients of a product. | [optional] 
**lc** | **String** | 2 letter language code for the text. Only set for specific fields such as the list of ingredients of a product. | [optional] 
**edit_field_id** | **String** | id of the field used to edit this text in the product edit API. | [optional] 
**edit_field_type** | **String** | Type of the product field. | [optional] 
**edit_field_value** | **String** | Current value of the product field. This may differ from the html field which can contain extra formating. | [optional] 
**source_url** | **String** | Link to the source | [optional] 
**source_text** | **String** | name of the source | [optional] 
**source_lc** | **String** | Source locale name | [optional] 
**source_language** | **String** | Human readable source locale name | [optional] 



## Enum: TypeEnum


* `summary` (value: `"summary"`)

* `warning` (value: `"warning"`)

* `notes` (value: `"notes"`)




