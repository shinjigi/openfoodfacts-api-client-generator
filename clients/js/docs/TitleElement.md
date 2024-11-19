# OpenFoodFactsOpenApi.TitleElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A short name of this panel, not including any actual values | [optional] 
**title** | **String** |  | [optional] 
**type** | **String** | Used to indicate how the value of this item is measured, such as \&quot;grade\&quot; for Nutri-Score and Eco-Score or \&quot;percentage\&quot; for Salt | [optional] 
**grade** | **String** | The value for this panel where it corresponds to a A to E grade such as the Nutri-Score of the Eco-Score. | [optional] 
**value** | **Number** | The numeric value of the panel, where the type is \&quot;percentage\&quot; | [optional] 
**icon_url** | **String** |  | [optional] 
**icon_color_from_evaluation** | **String** |  | [optional] 
**icon_size** | **String** | If set to \&quot;small\&quot;, the icon should be displayed at a small size.  | [optional] 



## Enum: TypeEnum


* `grade` (value: `"grade"`)

* `percentage` (value: `"percentage"`)





## Enum: GradeEnum


* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)

* `unknown` (value: `"unknown"`)




