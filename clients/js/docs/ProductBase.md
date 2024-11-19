# OpenFoodFactsOpenApi.ProductBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviated_product_name** | **String** | Abbreviated name in requested language | [optional] 
**code** | **String** | barcode of the product (can be EAN-13 or internal codes for some food stores), for products without a barcode, Open Food Facts assigns a number starting with the 200 reserved prefix  | [optional] 
**codes_tags** | **[String]** |  | [optional] 
**generic_name_it** | **String** |  | [optional] 
**generic_name** | **String** | Legal name of the product as regulated by the European authorities.  | [optional] 
**_id** | **String** | id in database of the product, this normally is the barcode | [optional] 
**_keywords** | **[String]** |  | [optional] 
**id** | **String** | internal identifier for the product, usually set to the value of &#x60;code&#x60;, except on the producers platform where it is prefixed by the owner  | [optional] 
**lc** | **String** | Main language of the product. This is a duplicate of &#x60;lang&#x60; property (for historical reasons).  | [optional] 
**lang** | **String** | Main language of the product.  This should be the main language of product packaging (if one is predominant).  Main language is also used to decide which ingredients list to parse.  | [optional] 
**nova_group** | **Number** | Nova group as an integer from 1 to 4. See https://world.openfoodfacts.org/nova  | [optional] 
**nova_groups** | **String** |  | [optional] 
**obsolete** | **String** |  | [optional] 
**obsolete_since_date** | **String** | A date at which the product was declared obsolete. This means it&#39;s not produced any more.  | [optional] 
**product_name** | **String** | The name of the product  | [optional] 
**product_name_it** | **String** | Italian name of the product  | [optional] 
**product_name_en** | **String** | The name of the product can also be in many other languages like product_name_fr (for French).  | [optional] 
**product_quantity** | **String** | The size in g or ml for the whole product. It&#39;s a normalized version of the quantity field.  | [optional] 
**product_quantity_unit** | **String** | The unit (either g or ml) for the correponding product_quantity.  | [optional] 
**quantity** | **String** | Quantity and Unit.  | [optional] 


