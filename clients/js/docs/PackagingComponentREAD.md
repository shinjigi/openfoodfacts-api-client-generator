# OpenFoodFactsOpenApi.PackagingComponentREAD

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_units** | **Number** | umber of units of this packaging component contained in the product (e.g. 6 for a pack of 6 bottles) | [optional] 
**shape** | **String** |  | [optional] 
**material** | **String** |  | [optional] 
**recycling** | **String** |  | [optional] 
**quantity_per_unit** | **String** | Quantity (weight or volume) of food product contained in the packaging component. (e.g. 75cl for a wine bottle) | [optional] 
**quantity_per_unit_value** | **Number** | Value parsed from the quantity field. | [optional] 
**quantity_per_unit_unit** | **String** | Unit parsed and normalized from the quantity field. | [optional] 
**weight_specified** | **Number** | Weight (as specified by the manufacturer) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component). | [optional] 
**weight_measured** | **Number** | Weight (as measured by one or more users) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component). | [optional] 
**weight_estimated** | **Number** | Weight (as estimated from similar products) of one unit of the empty packaging component (in grams). (e.g. for a 6 pack of 1.5l water bottles, it might be 30, the weight in grams of 1 empty water bottle without its cap which is a different packaging component). | [optional] 
**weight** | **Number** | Weight of one unit of the empty packaging component. | [optional] 
**weight_source_id** | **String** | Indicates which field was used to populate the \&quot;weight\&quot; field. Either \&quot;specified\&quot;, \&quot;measured\&quot;, or \&quot;estimated\&quot; | [optional] 


