import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddOrEditAProductResponse } from '../models/AddOrEditAProductResponse';
import { AddPhotoToExistingProductResponse } from '../models/AddPhotoToExistingProductResponse';
import { AddPhotoToExistingProductResponseFilesInner } from '../models/AddPhotoToExistingProductResponseFilesInner';
import { AddPhotoToExistingProductResponseImage } from '../models/AddPhotoToExistingProductResponseImage';
import { AdjustmentsOriginOfIngredientAggregated } from '../models/AdjustmentsOriginOfIngredientAggregated';
import { AdjustmentsPackagingItem } from '../models/AdjustmentsPackagingItem';
import { AppCredentials } from '../models/AppCredentials';
import { Attribute } from '../models/Attribute';
import { AttributeGroup } from '../models/AttributeGroup';
import { Element } from '../models/Element';
import { GetPreferences200ResponseInner } from '../models/GetPreferences200ResponseInner';
import { GetProductByBarcodeAllResponse } from '../models/GetProductByBarcodeAllResponse';
import { GetProductByBarcodeKnowledgePanelsResponse } from '../models/GetProductByBarcodeKnowledgePanelsResponse';
import { GetProductByBarcodeResponse } from '../models/GetProductByBarcodeResponse';
import { Image } from '../models/Image';
import { ImageElement } from '../models/ImageElement';
import { ImageRole } from '../models/ImageRole';
import { ImageRoleSizes } from '../models/ImageRoleSizes';
import { ImageSize } from '../models/ImageSize';
import { ImageSizes } from '../models/ImageSizes';
import { Ingredient } from '../models/Ingredient';
import { IngredientPercentMax } from '../models/IngredientPercentMax';
import { NumberStringObjectType } from '../models/NumberStringObjectType';
import { Nutrient } from '../models/Nutrient';
import { Nutriscore2021 } from '../models/Nutriscore2021';
import { Nutriscore2021Data } from '../models/Nutriscore2021Data';
import { Nutriscore2023 } from '../models/Nutriscore2023';
import { Nutriscore2023Data } from '../models/Nutriscore2023Data';
import { Nutriscore2023DataComponents } from '../models/Nutriscore2023DataComponents';
import { NutriscoreComponent } from '../models/NutriscoreComponent';
import { Nutriscores } from '../models/Nutriscores';
import { OcrOnProductResponse } from '../models/OcrOnProductResponse';
import { PackagingComponentREAD } from '../models/PackagingComponentREAD';
import { Panel } from '../models/Panel';
import { PanelElement } from '../models/PanelElement';
import { PanelGroupElement } from '../models/PanelGroupElement';
import { Panels } from '../models/Panels';
import { Product } from '../models/Product';
import { ProductAllOfManufacturer } from '../models/ProductAllOfManufacturer';
import { ProductAttributeGroup } from '../models/ProductAttributeGroup';
import { ProductAttributeGroups } from '../models/ProductAttributeGroups';
import { ProductBase } from '../models/ProductBase';
import { ProductEcoScore } from '../models/ProductEcoScore';
import { ProductEcoscoreAdjustments } from '../models/ProductEcoscoreAdjustments';
import { ProductEcoscoreAdjustmentsOriginsOfIngredients } from '../models/ProductEcoscoreAdjustmentsOriginsOfIngredients';
import { ProductEcoscoreAdjustmentsPackaging } from '../models/ProductEcoscoreAdjustmentsPackaging';
import { ProductEcoscoreAdjustmentsProductionSystem } from '../models/ProductEcoscoreAdjustmentsProductionSystem';
import { ProductEcoscoreAdjustmentsThreatenedSpecies } from '../models/ProductEcoscoreAdjustmentsThreatenedSpecies';
import { ProductEcoscoreData } from '../models/ProductEcoscoreData';
import { ProductEcoscoreDataAgribalyse } from '../models/ProductEcoscoreDataAgribalyse';
import { ProductEcoscoreDataMissing } from '../models/ProductEcoscoreDataMissing';
import { ProductEcoscoreDataPreviousData } from '../models/ProductEcoscoreDataPreviousData';
import { ProductExtended } from '../models/ProductExtended';
import { ProductExtendedCategoriesProperties } from '../models/ProductExtendedCategoriesProperties';
import { ProductExtendedOwnerFields } from '../models/ProductExtendedOwnerFields';
import { ProductImages } from '../models/ProductImages';
import { ProductImagesProperties } from '../models/ProductImagesProperties';
import { ProductIngredients } from '../models/ProductIngredients';
import { ProductIngredientsIngredientsAnalysis } from '../models/ProductIngredientsIngredientsAnalysis';
import { ProductIngredientsPercentMax } from '../models/ProductIngredientsPercentMax';
import { ProductKnowledgePanels } from '../models/ProductKnowledgePanels';
import { ProductMetaSource } from '../models/ProductMetaSource';
import { ProductMetaSourceFields } from '../models/ProductMetaSourceFields';
import { ProductMetaSourceFieldsOrgGs } from '../models/ProductMetaSourceFieldsOrgGs';
import { ProductMetaSourceManufacturer } from '../models/ProductMetaSourceManufacturer';
import { ProductMetadata } from '../models/ProductMetadata';
import { ProductMisc } from '../models/ProductMisc';
import { ProductMiscNutrientLevels } from '../models/ProductMiscNutrientLevels';
import { ProductNutriscore } from '../models/ProductNutriscore';
import { ProductNutrition } from '../models/ProductNutrition';
import { ProductNutritionNutriments } from '../models/ProductNutritionNutriments';
import { ProductNutritionNutriscoreData } from '../models/ProductNutritionNutriscoreData';
import { ProductQuality } from '../models/ProductQuality';
import { ProductSelectedImages } from '../models/ProductSelectedImages';
import { ProductSelectedImagesIngredients } from '../models/ProductSelectedImagesIngredients';
import { ProductTags } from '../models/ProductTags';
import { RotateAPhotoResponse } from '../models/RotateAPhotoResponse';
import { RotateAPhotoResponseImage } from '../models/RotateAPhotoResponseImage';
import { SearchForProductsResponse } from '../models/SearchForProductsResponse';
import { TableColumn } from '../models/TableColumn';
import { TableElement } from '../models/TableElement';
import { TextElement } from '../models/TextElement';
import { TitleElement } from '../models/TitleElement';
import { UnselectAPhotoResponse } from '../models/UnselectAPhotoResponse';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve session cookie for writing operations.
     * Login and obtain a session cookie
     * @param user_id Username for login
     * @param password Password for login
     */
    public getCgiSessionPlWithHttpInfo(user_id: string, password: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCgiSessionPlWithHttpInfo(user_id, password, _options);
        return result.toPromise();
    }

    /**
     * Retrieve session cookie for writing operations.
     * Login and obtain a session cookie
     * @param user_id Username for login
     * @param password Password for login
     */
    public getCgiSessionPl(user_id: string, password: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCgiSessionPl(user_id, password, _options);
        return result.toPromise();
    }


}



import { ObservableAuxiliaryOperationsApi } from './ObservableAPI';

import { AuxiliaryOperationsApiRequestFactory, AuxiliaryOperationsApiResponseProcessor} from "../apis/AuxiliaryOperationsApi";
export class PromiseAuxiliaryOperationsApi {
    private api: ObservableAuxiliaryOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuxiliaryOperationsApiRequestFactory,
        responseProcessor?: AuxiliaryOperationsApiResponseProcessor
    ) {
        this.api = new ObservableAuxiliaryOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 
     * Unselect A Photo
     * @param [code] code of the product
     * @param [id] image field (image id) of the photo to unselect
     */
    public postCgiProductImageUnselectPlWithHttpInfo(code?: string, id?: string, _options?: Configuration): Promise<HttpInfo<UnselectAPhotoResponse>> {
        const result = this.api.postCgiProductImageUnselectPlWithHttpInfo(code, id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 
     * Unselect A Photo
     * @param [code] code of the product
     * @param [id] image field (image id) of the photo to unselect
     */
    public postCgiProductImageUnselectPl(code?: string, id?: string, _options?: Configuration): Promise<UnselectAPhotoResponse> {
        const result = this.api.postCgiProductImageUnselectPl(code, id, _options);
        return result.toPromise();
    }


}



import { ObservablePersonalSearchApi } from './ObservableAPI';

import { PersonalSearchApiRequestFactory, PersonalSearchApiResponseProcessor} from "../apis/PersonalSearchApi";
export class PromisePersonalSearchApi {
    private api: ObservablePersonalSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonalSearchApiRequestFactory,
        responseProcessor?: PersonalSearchApiResponseProcessor
    ) {
        this.api = new ObservablePersonalSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getAttributeGroupsWithHttpInfo(lc?: string, _options?: Configuration): Promise<HttpInfo<Array<AttributeGroup>>> {
        const result = this.api.getAttributeGroupsWithHttpInfo(lc, _options);
        return result.toPromise();
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getAttributeGroups(lc?: string, _options?: Configuration): Promise<Array<AttributeGroup>> {
        const result = this.api.getAttributeGroups(lc, _options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getPreferencesWithHttpInfo(lc?: string, _options?: Configuration): Promise<HttpInfo<Array<GetPreferences200ResponseInner>>> {
        const result = this.api.getPreferencesWithHttpInfo(lc, _options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getPreferences(lc?: string, _options?: Configuration): Promise<Array<GetPreferences200ResponseInner>> {
        const result = this.api.getPreferences(lc, _options);
        return result.toPromise();
    }


}



import { ObservableReadRequestsApi } from './ObservableAPI';

import { ReadRequestsApiRequestFactory, ReadRequestsApiResponseProcessor} from "../apis/ReadRequestsApi";
export class PromiseReadRequestsApi {
    private api: ObservableReadRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReadRequestsApiRequestFactory,
        responseProcessor?: ReadRequestsApiResponseProcessor
    ) {
        this.api = new ObservableReadRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getAttributeGroupsWithHttpInfo(lc?: string, _options?: Configuration): Promise<HttpInfo<Array<AttributeGroup>>> {
        const result = this.api.getAttributeGroupsWithHttpInfo(lc, _options);
        return result.toPromise();
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getAttributeGroups(lc?: string, _options?: Configuration): Promise<Array<AttributeGroup>> {
        const result = this.api.getAttributeGroups(lc, _options);
        return result.toPromise();
    }

    /**
     * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 
     * Performing OCR on a Product
     * @param id
     * @param code Barcode of the product
     * @param process_image
     * @param ocr_engine
     */
    public getCgiIngredientsPlWithHttpInfo(id: string, code: string, process_image: string, ocr_engine: string, _options?: Configuration): Promise<HttpInfo<OcrOnProductResponse>> {
        const result = this.api.getCgiIngredientsPlWithHttpInfo(id, code, process_image, ocr_engine, _options);
        return result.toPromise();
    }

    /**
     * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 
     * Performing OCR on a Product
     * @param id
     * @param code Barcode of the product
     * @param process_image
     * @param ocr_engine
     */
    public getCgiIngredientsPl(id: string, code: string, process_image: string, ocr_engine: string, _options?: Configuration): Promise<OcrOnProductResponse> {
        const result = this.api.getCgiIngredientsPl(id, code, process_image, ocr_engine, _options);
        return result.toPromise();
    }

    /**
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * @param [cc] 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getCgiNutrientsPlWithHttpInfo(cc?: string, lc?: string, _options?: Configuration): Promise<HttpInfo<Array<Nutrient>>> {
        const result = this.api.getCgiNutrientsPlWithHttpInfo(cc, lc, _options);
        return result.toPromise();
    }

    /**
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * @param [cc] 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getCgiNutrientsPl(cc?: string, lc?: string, _options?: Configuration): Promise<Array<Nutrient>> {
        const result = this.api.getCgiNutrientsPl(cc, lc, _options);
        return result.toPromise();
    }

    /**
     * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 
     * Get Suggestions to Aid Adding/Editing Products
     * @param [tagtype]
     * @param [term]
     */
    public getCgiSuggestPlWithHttpInfo(tagtype?: string, term?: string, _options?: Configuration): Promise<HttpInfo<Array<any>>> {
        const result = this.api.getCgiSuggestPlWithHttpInfo(tagtype, term, _options);
        return result.toPromise();
    }

    /**
     * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 
     * Get Suggestions to Aid Adding/Editing Products
     * @param [tagtype]
     * @param [term]
     */
    public getCgiSuggestPl(tagtype?: string, term?: string, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.getCgiSuggestPl(tagtype, term, _options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getPreferencesWithHttpInfo(lc?: string, _options?: Configuration): Promise<HttpInfo<Array<GetPreferences200ResponseInner>>> {
        const result = this.api.getPreferencesWithHttpInfo(lc, _options);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param [lc] 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     */
    public getPreferences(lc?: string, _options?: Configuration): Promise<Array<GetPreferences200ResponseInner>> {
        const result = this.api.getPreferences(lc, _options);
        return result.toPromise();
    }

    /**
     * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 
     * Get information for a specific product by barcode
     * @param barcode The barcode of the product to be fetched
     * @param [fields] Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     */
    public getProductByBarcodeWithHttpInfo(barcode: string, fields?: string, _options?: Configuration): Promise<HttpInfo<GetProductByBarcodeAllResponse>> {
        const result = this.api.getProductByBarcodeWithHttpInfo(barcode, fields, _options);
        return result.toPromise();
    }

    /**
     * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 
     * Get information for a specific product by barcode
     * @param barcode The barcode of the product to be fetched
     * @param [fields] Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     */
    public getProductByBarcode(barcode: string, fields?: string, _options?: Configuration): Promise<GetProductByBarcodeAllResponse> {
        const result = this.api.getProductByBarcode(barcode, fields, _options);
        return result.toPromise();
    }

    /**
     * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 
     * Search for Products
     * @param [additives_tags] The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [allergens_tags] The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [brands_tags] The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [categories_tags] The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [countries_tags_en] The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [emb_codes_tags] The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [labels_tags] The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [manufacturing_places_tags] The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [nutrition_grades_tags] The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [origins_tags] The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [packaging_tags_de] The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [purchase_places_tags] The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [states_tags] The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [stores_tags] The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [traces_tags] The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [tag_name_tags_language_code] You can add a language code to a specific tag to query it in a specific language 
     * @param [nutrient_lt_value] Search on nutrient lower than a value 
     * @param [nutrient_gt_value] Search on nutrient greater than a value 
     * @param [nutrient_eq_value] Search on nutrient for an exact quantity 
     * @param [fields] Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     * @param [sort_by] The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date) 
     * @param [page] The page number you request to view (eg. in search results spanning multiple pages) 
     * @param [page_size] The number of elements should be sent per page 
     */
    public getSearchWithHttpInfo(additives_tags?: string, allergens_tags?: string, brands_tags?: string, categories_tags?: string, countries_tags_en?: string, emb_codes_tags?: string, labels_tags?: string, manufacturing_places_tags?: string, nutrition_grades_tags?: string, origins_tags?: string, packaging_tags_de?: string, purchase_places_tags?: string, states_tags?: string, stores_tags?: string, traces_tags?: string, tag_name_tags_language_code?: any, nutrient_lt_value?: any, nutrient_gt_value?: any, nutrient_eq_value?: any, fields?: string, sort_by?: 'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score', page?: number, page_size?: number, _options?: Configuration): Promise<HttpInfo<SearchForProductsResponse>> {
        const result = this.api.getSearchWithHttpInfo(additives_tags, allergens_tags, brands_tags, categories_tags, countries_tags_en, emb_codes_tags, labels_tags, manufacturing_places_tags, nutrition_grades_tags, origins_tags, packaging_tags_de, purchase_places_tags, states_tags, stores_tags, traces_tags, tag_name_tags_language_code, nutrient_lt_value, nutrient_gt_value, nutrient_eq_value, fields, sort_by, page, page_size, _options);
        return result.toPromise();
    }

    /**
     * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 
     * Search for Products
     * @param [additives_tags] The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [allergens_tags] The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [brands_tags] The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [categories_tags] The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [countries_tags_en] The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [emb_codes_tags] The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [labels_tags] The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [manufacturing_places_tags] The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [nutrition_grades_tags] The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [origins_tags] The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [packaging_tags_de] The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [purchase_places_tags] The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [states_tags] The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [stores_tags] The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [traces_tags] The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * @param [tag_name_tags_language_code] You can add a language code to a specific tag to query it in a specific language 
     * @param [nutrient_lt_value] Search on nutrient lower than a value 
     * @param [nutrient_gt_value] Search on nutrient greater than a value 
     * @param [nutrient_eq_value] Search on nutrient for an exact quantity 
     * @param [fields] Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     * @param [sort_by] The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date) 
     * @param [page] The page number you request to view (eg. in search results spanning multiple pages) 
     * @param [page_size] The number of elements should be sent per page 
     */
    public getSearch(additives_tags?: string, allergens_tags?: string, brands_tags?: string, categories_tags?: string, countries_tags_en?: string, emb_codes_tags?: string, labels_tags?: string, manufacturing_places_tags?: string, nutrition_grades_tags?: string, origins_tags?: string, packaging_tags_de?: string, purchase_places_tags?: string, states_tags?: string, stores_tags?: string, traces_tags?: string, tag_name_tags_language_code?: any, nutrient_lt_value?: any, nutrient_gt_value?: any, nutrient_eq_value?: any, fields?: string, sort_by?: 'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score', page?: number, page_size?: number, _options?: Configuration): Promise<SearchForProductsResponse> {
        const result = this.api.getSearch(additives_tags, allergens_tags, brands_tags, categories_tags, countries_tags_en, emb_codes_tags, labels_tags, manufacturing_places_tags, nutrition_grades_tags, origins_tags, packaging_tags_de, purchase_places_tags, states_tags, stores_tags, traces_tags, tag_name_tags_language_code, nutrient_lt_value, nutrient_gt_value, nutrient_eq_value, fields, sort_by, page, page_size, _options);
        return result.toPromise();
    }


}



import { ObservableWriteRequestsApi } from './ObservableAPI';

import { WriteRequestsApiRequestFactory, WriteRequestsApiResponseProcessor} from "../apis/WriteRequestsApi";
export class PromiseWriteRequestsApi {
    private api: ObservableWriteRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WriteRequestsApiRequestFactory,
        responseProcessor?: WriteRequestsApiResponseProcessor
    ) {
        this.api = new ObservableWriteRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 
     * Rotate A Photo
     * @param code Barcode of the product
     * @param id
     * @param imgid
     * @param angle
     */
    public getCgiProductImageCropPlWithHttpInfo(code: string, id: string, imgid: string, angle: string, _options?: Configuration): Promise<HttpInfo<RotateAPhotoResponse>> {
        const result = this.api.getCgiProductImageCropPlWithHttpInfo(code, id, imgid, angle, _options);
        return result.toPromise();
    }

    /**
     * Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 
     * Rotate A Photo
     * @param code Barcode of the product
     * @param id
     * @param imgid
     * @param angle
     */
    public getCgiProductImageCropPl(code: string, id: string, imgid: string, angle: string, _options?: Configuration): Promise<RotateAPhotoResponse> {
        const result = this.api.getCgiProductImageCropPl(code, id, imgid, angle, _options);
        return result.toPromise();
    }

    /**
     * Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 
     * Add a Photo to an Existing Product
     * @param code Barcode of the product 
     * @param imagefield Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don\\\&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture. 
     * @param imgupload_front_en This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;. 
     */
    public getCgiProductImageUploadPlWithHttpInfo(code: string, imagefield: string, imgupload_front_en: HttpFile, _options?: Configuration): Promise<HttpInfo<AddPhotoToExistingProductResponse>> {
        const result = this.api.getCgiProductImageUploadPlWithHttpInfo(code, imagefield, imgupload_front_en, _options);
        return result.toPromise();
    }

    /**
     * Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 
     * Add a Photo to an Existing Product
     * @param code Barcode of the product 
     * @param imagefield Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don\\\&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture. 
     * @param imgupload_front_en This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;. 
     */
    public getCgiProductImageUploadPl(code: string, imagefield: string, imgupload_front_en: HttpFile, _options?: Configuration): Promise<AddPhotoToExistingProductResponse> {
        const result = this.api.getCgiProductImageUploadPl(code, imagefield, imgupload_front_en, _options);
        return result.toPromise();
    }

    /**
     * Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 
     * Crop A Photo
     * @param code Barcode of the product.
     * @param imgid identifier of the image to select, it should be a number
     * @param id identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists). 
     * @param [x1] X origin coordinate of the crop, it must be lower than x2
     * @param [y1] Y origin coordinate of the crop, it must be lower than y2
     * @param [x2] X end coordinate of the crop, it must be higher than x1
     * @param [y2] Y end coordinate of the crop, it must be higher than y1
     * @param [angle] angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise. 
     * @param [normalize] whether the selected image should be normalized using ImageMagick
     * @param [white_magic] whether the source image should be white magiced (background removal) using ImageMagick. 
     */
    public postCgiProductImageCropPlWithHttpInfo(code: string, imgid: number, id: string, x1?: number, y1?: number, x2?: number, y2?: number, angle?: number, normalize?: string, white_magic?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.postCgiProductImageCropPlWithHttpInfo(code, imgid, id, x1, y1, x2, y2, angle, normalize, white_magic, _options);
        return result.toPromise();
    }

    /**
     * Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 
     * Crop A Photo
     * @param code Barcode of the product.
     * @param imgid identifier of the image to select, it should be a number
     * @param id identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists). 
     * @param [x1] X origin coordinate of the crop, it must be lower than x2
     * @param [y1] Y origin coordinate of the crop, it must be lower than y2
     * @param [x2] X end coordinate of the crop, it must be higher than x1
     * @param [y2] Y end coordinate of the crop, it must be higher than y1
     * @param [angle] angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise. 
     * @param [normalize] whether the selected image should be normalized using ImageMagick
     * @param [white_magic] whether the source image should be white magiced (background removal) using ImageMagick. 
     */
    public postCgiProductImageCropPl(code: string, imgid: number, id: string, x1?: number, y1?: number, x2?: number, y2?: number, angle?: number, normalize?: string, white_magic?: string, _options?: Configuration): Promise<any> {
        const result = this.api.postCgiProductImageCropPl(code, imgid, id, x1, y1, x2, y2, angle, normalize, white_magic, _options);
        return result.toPromise();
    }

    /**
     * This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 
     * Add or Edit A Product
     * @param code The barcode of the product to be added or edited
     * @param user_id A valid username.
     * @param password A valid corresponding password (related to specific environment).
     * @param [comment] A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history. 
     * @param [brands] The brands of the product (comma separated list of values).
     * @param [labels] The labels of the product (comma separated list of values).
     * @param [categories] The categories of the product (comma separated list of values).
     * @param [packaging] Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;. 
     * @param [app_name] Name of the app providing the information 
     * @param [app_version] Version of the app providing the information 
     * @param [app_uuid] When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits. 
     * @param [User_Agent] It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter. 
     */
    public postCgiProductJqm2PlWithHttpInfo(code: string, user_id: string, password: string, comment?: string, brands?: Array<string>, labels?: Array<string>, categories?: Array<string>, packaging?: string, app_name?: string, app_version?: string, app_uuid?: string, User_Agent?: string, _options?: Configuration): Promise<HttpInfo<AddOrEditAProductResponse>> {
        const result = this.api.postCgiProductJqm2PlWithHttpInfo(code, user_id, password, comment, brands, labels, categories, packaging, app_name, app_version, app_uuid, User_Agent, _options);
        return result.toPromise();
    }

    /**
     * This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 
     * Add or Edit A Product
     * @param code The barcode of the product to be added or edited
     * @param user_id A valid username.
     * @param password A valid corresponding password (related to specific environment).
     * @param [comment] A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history. 
     * @param [brands] The brands of the product (comma separated list of values).
     * @param [labels] The labels of the product (comma separated list of values).
     * @param [categories] The categories of the product (comma separated list of values).
     * @param [packaging] Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;. 
     * @param [app_name] Name of the app providing the information 
     * @param [app_version] Version of the app providing the information 
     * @param [app_uuid] When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits. 
     * @param [User_Agent] It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter. 
     */
    public postCgiProductJqm2Pl(code: string, user_id: string, password: string, comment?: string, brands?: Array<string>, labels?: Array<string>, categories?: Array<string>, packaging?: string, app_name?: string, app_version?: string, app_uuid?: string, User_Agent?: string, _options?: Configuration): Promise<AddOrEditAProductResponse> {
        const result = this.api.postCgiProductJqm2Pl(code, user_id, password, comment, brands, labels, categories, packaging, app_name, app_version, app_uuid, User_Agent, _options);
        return result.toPromise();
    }


}



