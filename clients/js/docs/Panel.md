# OpenFoodFactsOpenApi.Panel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the panel. If set to \&quot;card\&quot;, the panel and its sub-panels should be displayed in a card. If set to \&quot;inline\&quot;, the panel should have its content always displayed. | [optional] 
**expanded** | **Boolean** | If true, the panel is to be displayed already expanded. If false, only the title should be displayed, and the user should be able to click or tap it to open the panel and display the elements. | [optional] 
**expand_for** | **String** | If set to \&quot;large\&quot;, the content of the panel should be expanded on large screens, but it should still be possible to unexpand it. | [optional] 
**evaluation** | **String** | A simple assessment of the panel value, typically used to format fonts, et.c e.g. bad &#x3D; red | [optional] 
**title_element** | [**TitleElement**](TitleElement.md) |  | [optional] 
**elements** | [**[Element]**](Element.md) | An ordered list of elements to display in the content of the panel. | [optional] 
**level** | **String** | a message level, as levels we use in log. It might help theming the panel visualy  | [optional] 
**size** | **String** | size is either empty (normal display)  or small to indicate a panel that should have a smaller font size  | [optional] 
**topics** | **[String]** |  | [optional] 



## Enum: EvaluationEnum


* `good` (value: `"good"`)

* `average` (value: `"average"`)

* `neutral` (value: `"neutral"`)

* `bad` (value: `"bad"`)

* `unknown` (value: `"unknown"`)





## Enum: SizeEnum


* `small` (value: `"small"`)




