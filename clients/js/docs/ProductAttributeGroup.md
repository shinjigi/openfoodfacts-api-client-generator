# OpenFoodFactsOpenApi.ProductAttributeGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the attribute.  It will be use to match against preferences parameters.  | [optional] 
**status** | **String** | wether we have the information to really compute this criteria or not. | [optional] 
**title** | **String** | A descriptive sentence about the situation of the product concerning attribute  | [optional] 
**match** | **Number** | a numeric value for the match, telling how much the products ranks well for this particular attribute. The higher the value, the better the match.  | [optional] 
**grade** | **String** | every attribute as a grade for a to e | [optional] 
**name** | **String** | The name of attribute, for eventual display | [optional] 
**icon_url** | **String** | an icon representing the attribute match (often using a color) | [optional] 
**description** | **String** | An eventual description of the value of the property upon which this attribute is based | [optional] 
**description_short** | **String** | An eventual short description of the value of the property upon which this attribute is based | [optional] 



## Enum: StatusEnum


* `known` (value: `"known"`)

* `unknown` (value: `"unknown"`)





## Enum: GradeEnum


* `unknown` (value: `"unknown"`)

* `a` (value: `"a"`)

* `b` (value: `"b"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)




