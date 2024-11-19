# OpenFoodFactsOpenApi.GetProductKnowledgePanelsByBarcodeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Barcode of the product (can be EAN-13 or internal codes for some food stores). For products without a barcode, Open Food Facts assigns a  number starting with the 200 reserved prefix.  | [optional] 
**status** | **Number** |  | [optional] 
**status_verbose** | **String** |  | [optional] 
**product** | [**ProductKnowledgePanels**](ProductKnowledgePanels.md) |  | [optional] 



## Enum: StatusEnum


* `0` (value: `0`)

* `1` (value: `1`)




