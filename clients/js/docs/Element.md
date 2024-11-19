# OpenFoodFactsOpenApi.Element

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of the included element object. The type also indicates which field contains the included element object. e.g. if the type is \&quot;text\&quot;, the included element object will be in the \&quot;text_element\&quot; field.  Note that in the future, new type of element may be added, so your code should ignore unrecognized types, and unknown properties.  TODO: add Map type  | 
**text_element** | [**TextElement**](TextElement.md) |  | [optional] 
**image_element** | [**ImageElement**](ImageElement.md) |  | [optional] 
**action_element** | **String** |  | [optional] 
**panel_element** | [**PanelElement**](PanelElement.md) |  | [optional] 
**panel_group_element** | [**PanelGroupElement**](PanelGroupElement.md) |  | [optional] 
**table_element** | [**TableElement**](TableElement.md) |  | [optional] 



## Enum: TypeEnum


* `text` (value: `"text"`)

* `image` (value: `"image"`)

* `action` (value: `"action"`)

* `panel` (value: `"panel"`)

* `panel_group` (value: `"panel_group"`)

* `table` (value: `"table"`)




