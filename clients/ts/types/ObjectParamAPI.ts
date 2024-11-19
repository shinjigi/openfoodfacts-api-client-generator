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

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiGetCgiSessionPlRequest {
    /**
     * Username for login
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApigetCgiSessionPl
     */
    user_id: string
    /**
     * Password for login
     * Defaults to: undefined
     * @type string
     * @memberof AuthenticationApigetCgiSessionPl
     */
    password: string
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve session cookie for writing operations.
     * Login and obtain a session cookie
     * @param param the request object
     */
    public getCgiSessionPlWithHttpInfo(param: AuthenticationApiGetCgiSessionPlRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCgiSessionPlWithHttpInfo(param.user_id, param.password,  options).toPromise();
    }

    /**
     * Retrieve session cookie for writing operations.
     * Login and obtain a session cookie
     * @param param the request object
     */
    public getCgiSessionPl(param: AuthenticationApiGetCgiSessionPlRequest, options?: Configuration): Promise<void> {
        return this.api.getCgiSessionPl(param.user_id, param.password,  options).toPromise();
    }

}

import { ObservableAuxiliaryOperationsApi } from "./ObservableAPI";
import { AuxiliaryOperationsApiRequestFactory, AuxiliaryOperationsApiResponseProcessor} from "../apis/AuxiliaryOperationsApi";

export interface AuxiliaryOperationsApiPostCgiProductImageUnselectPlRequest {
    /**
     * code of the product
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApipostCgiProductImageUnselectPl
     */
    code?: string
    /**
     * image field (image id) of the photo to unselect
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApipostCgiProductImageUnselectPl
     */
    id?: string
}

export interface AuxiliaryOperationsApiSearchV1ProductsGetRequest {
    /**
     * Text search terms
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    search_terms?: string
    /**
     * 
     * Defaults to: 1
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    page?: number
    /**
     * 
     * Maximum: 1000
     * Defaults to: 24
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    page_size?: number
    /**
     * 
     * Defaults to: undefined
     * @type 1
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    json?: 1
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    fields?: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;popularity&#39; | &#39;product_name&#39; | &#39;created_t&#39; | &#39;created_datetime&#39; | &#39;completed_t&#39; | &#39;last_modified_t&#39; | &#39;last_modified_datetime&#39; | &#39;unique_scans_n&#39; | &#39;score&#39;
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    sort_by?: 'popularity' | 'product_name' | 'created_t' | 'created_datetime' | 'completed_t' | 'last_modified_t' | 'last_modified_datetime' | 'unique_scans_n' | 'score'
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    states_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    brands_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    categories_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    labels_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    packaging_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    purchase_places_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    stores_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    countries_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    ingredients_tags?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsGet
     */
    trace_tags?: string
}

export interface AuxiliaryOperationsApiSearchV1ProductsPostRequest {
    /**
     * 
     * Defaults to: &#39;process&#39;
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    action: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    sort_by: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 20
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    page_size: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    search_simple?: number
    /**
     * Search for words present in the product name, generic name, brands, categories, origins and labels
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    search_terms2?: string
    /**
     * First criteria type
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tagtype_0?: string
    /**
     * First criteria condition
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tag_contains_0?: string
    /**
     * First criteria value
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tag_0?: string
    /**
     * First criteria type
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tagtype_1?: string
    /**
     * Second criteria condition
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tag_contains_1?: string
    /**
     * Second criteria value
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    tag_1?: string
    /**
     * Filter by presence of additives
     * Defaults to: &#39;indifferent&#39;
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    additives?: string
    /**
     * Filter by ingredients from palm oil
     * Defaults to: &#39;indifferent&#39;
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    ingredients_from_palm_oil?: string
    /**
     * Filter by ingredients that may be from palm oil
     * Defaults to: &#39;indifferent&#39;
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    ingredients_that_may_be_from_palm_oil?: string
    /**
     * Filter by ingredients from or that may be from palm oil
     * Defaults to: &#39;indifferent&#39;
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    ingredients_from_or_that_may_be_from_palm_oil?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_0?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_compare_0?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_value_0?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_1?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_compare_1?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    nutriment_value_1?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    graph_title?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    axis_x?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    axis_y?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    map_title?: string
    /**
     * 
     * Defaults to: 1
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    page?: number
    /**
     * 
     * Defaults to: 1
     * @type number
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    json?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuxiliaryOperationsApisearchV1ProductsPost
     */
    fields?: string
}

export class ObjectAuxiliaryOperationsApi {
    private api: ObservableAuxiliaryOperationsApi

    public constructor(configuration: Configuration, requestFactory?: AuxiliaryOperationsApiRequestFactory, responseProcessor?: AuxiliaryOperationsApiResponseProcessor) {
        this.api = new ObservableAuxiliaryOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 
     * Unselect A Photo
     * @param param the request object
     */
    public postCgiProductImageUnselectPlWithHttpInfo(param: AuxiliaryOperationsApiPostCgiProductImageUnselectPlRequest = {}, options?: Configuration): Promise<HttpInfo<UnselectAPhotoResponse>> {
        return this.api.postCgiProductImageUnselectPlWithHttpInfo(param.code, param.id,  options).toPromise();
    }

    /**
     * This endpoint allows the user to unselect a photo for a product. The user must provide the product code and the image ID to unselect. 
     * Unselect A Photo
     * @param param the request object
     */
    public postCgiProductImageUnselectPl(param: AuxiliaryOperationsApiPostCgiProductImageUnselectPlRequest = {}, options?: Configuration): Promise<UnselectAPhotoResponse> {
        return this.api.postCgiProductImageUnselectPl(param.code, param.id,  options).toPromise();
    }

    /**
     * Search products with filters (GET)
     * Search products with filters (GET)
     * @param param the request object
     */
    public searchV1ProductsGetWithHttpInfo(param: AuxiliaryOperationsApiSearchV1ProductsGetRequest = {}, options?: Configuration): Promise<HttpInfo<SearchForProductsResponse>> {
        return this.api.searchV1ProductsGetWithHttpInfo(param.search_terms, param.page, param.page_size, param.json, param.fields, param.sort_by, param.states_tags, param.brands_tags, param.categories_tags, param.labels_tags, param.packaging_tags, param.purchase_places_tags, param.stores_tags, param.countries_tags, param.ingredients_tags, param.trace_tags,  options).toPromise();
    }

    /**
     * Search products with filters (GET)
     * Search products with filters (GET)
     * @param param the request object
     */
    public searchV1ProductsGet(param: AuxiliaryOperationsApiSearchV1ProductsGetRequest = {}, options?: Configuration): Promise<SearchForProductsResponse> {
        return this.api.searchV1ProductsGet(param.search_terms, param.page, param.page_size, param.json, param.fields, param.sort_by, param.states_tags, param.brands_tags, param.categories_tags, param.labels_tags, param.packaging_tags, param.purchase_places_tags, param.stores_tags, param.countries_tags, param.ingredients_tags, param.trace_tags,  options).toPromise();
    }

    /**
     * Search products with filters (POST)
     * Search products with filters (POST)
     * @param param the request object
     */
    public searchV1ProductsPostWithHttpInfo(param: AuxiliaryOperationsApiSearchV1ProductsPostRequest, options?: Configuration): Promise<HttpInfo<SearchForProductsResponse>> {
        return this.api.searchV1ProductsPostWithHttpInfo(param.action, param.sort_by, param.page_size, param.search_simple, param.search_terms2, param.tagtype_0, param.tag_contains_0, param.tag_0, param.tagtype_1, param.tag_contains_1, param.tag_1, param.additives, param.ingredients_from_palm_oil, param.ingredients_that_may_be_from_palm_oil, param.ingredients_from_or_that_may_be_from_palm_oil, param.nutriment_0, param.nutriment_compare_0, param.nutriment_value_0, param.nutriment_1, param.nutriment_compare_1, param.nutriment_value_1, param.graph_title, param.axis_x, param.axis_y, param.map_title, param.page, param.json, param.fields,  options).toPromise();
    }

    /**
     * Search products with filters (POST)
     * Search products with filters (POST)
     * @param param the request object
     */
    public searchV1ProductsPost(param: AuxiliaryOperationsApiSearchV1ProductsPostRequest, options?: Configuration): Promise<SearchForProductsResponse> {
        return this.api.searchV1ProductsPost(param.action, param.sort_by, param.page_size, param.search_simple, param.search_terms2, param.tagtype_0, param.tag_contains_0, param.tag_0, param.tagtype_1, param.tag_contains_1, param.tag_1, param.additives, param.ingredients_from_palm_oil, param.ingredients_that_may_be_from_palm_oil, param.ingredients_from_or_that_may_be_from_palm_oil, param.nutriment_0, param.nutriment_compare_0, param.nutriment_value_0, param.nutriment_1, param.nutriment_compare_1, param.nutriment_value_1, param.graph_title, param.axis_x, param.axis_y, param.map_title, param.page, param.json, param.fields,  options).toPromise();
    }

}

import { ObservablePersonalSearchApi } from "./ObservableAPI";
import { PersonalSearchApiRequestFactory, PersonalSearchApiResponseProcessor} from "../apis/PersonalSearchApi";

export interface PersonalSearchApiGetAttributeGroups0Request {
    /**
     * 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * Defaults to: undefined
     * @type string
     * @memberof PersonalSearchApigetAttributeGroups
     */
    lc?: string
}

export interface PersonalSearchApiGetPreferences0Request {
    /**
     * 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * Defaults to: undefined
     * @type string
     * @memberof PersonalSearchApigetPreferences
     */
    lc?: string
}

export class ObjectPersonalSearchApi {
    private api: ObservablePersonalSearchApi

    public constructor(configuration: Configuration, requestFactory?: PersonalSearchApiRequestFactory, responseProcessor?: PersonalSearchApiResponseProcessor) {
        this.api = new ObservablePersonalSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param param the request object
     */
    public getAttributeGroupsWithHttpInfo(param: PersonalSearchApiGetAttributeGroups0Request = {}, options?: Configuration): Promise<HttpInfo<Array<AttributeGroup>>> {
        return this.api.getAttributeGroupsWithHttpInfo(param.lc,  options).toPromise();
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param param the request object
     */
    public getAttributeGroups(param: PersonalSearchApiGetAttributeGroups0Request = {}, options?: Configuration): Promise<Array<AttributeGroup>> {
        return this.api.getAttributeGroups(param.lc,  options).toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param param the request object
     */
    public getPreferencesWithHttpInfo(param: PersonalSearchApiGetPreferences0Request = {}, options?: Configuration): Promise<HttpInfo<Array<GetPreferences200ResponseInner>>> {
        return this.api.getPreferencesWithHttpInfo(param.lc,  options).toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param param the request object
     */
    public getPreferences(param: PersonalSearchApiGetPreferences0Request = {}, options?: Configuration): Promise<Array<GetPreferences200ResponseInner>> {
        return this.api.getPreferences(param.lc,  options).toPromise();
    }

}

import { ObservableReadRequestsApi } from "./ObservableAPI";
import { ReadRequestsApiRequestFactory, ReadRequestsApiResponseProcessor} from "../apis/ReadRequestsApi";

export interface ReadRequestsApiGetAttributeGroupsRequest {
    /**
     * 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetAttributeGroups
     */
    lc?: string
}

export interface ReadRequestsApiGetCgiIngredientsPlRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiIngredientsPl
     */
    id: string
    /**
     * Barcode of the product
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiIngredientsPl
     */
    code: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiIngredientsPl
     */
    process_image: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiIngredientsPl
     */
    ocr_engine: string
}

export interface ReadRequestsApiGetCgiNutrientsPlRequest {
    /**
     * 2 letter code of the country of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the country may be inferred by the IP address of the request.
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiNutrientsPl
     */
    cc?: string
    /**
     * 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiNutrientsPl
     */
    lc?: string
}

export interface ReadRequestsApiGetCgiSuggestPlRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiSuggestPl
     */
    tagtype?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetCgiSuggestPl
     */
    term?: string
}

export interface ReadRequestsApiGetPreferencesRequest {
    /**
     * 2 letter code of the language of the user. Used for localizing some fields in returned values (e.g. knowledge panels). If not passed, the language may be inferred by the Accept-Language header of the request, or from the domain name prefix. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetPreferences
     */
    lc?: string
}

export interface ReadRequestsApiGetProductByBarcodeRequest {
    /**
     * The barcode of the product to be fetched
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetProductByBarcode
     */
    barcode: string
    /**
     * Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetProductByBarcode
     */
    fields?: string
}

export interface ReadRequestsApiGetSearchRequest {
    /**
     * The additives_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/additives) has a list of possible values for &#x60;additives&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    additives_tags?: string
    /**
     * The allergens_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/allergens) has a list of possible values for &#x60;allergens&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    allergens_tags?: string
    /**
     * The brands_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/brands) has a list of possible values for &#x60;brands&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    brands_tags?: string
    /**
     * The category of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/categories) has a list of possible values for &#x60;categories&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    categories_tags?: string
    /**
     * The countries_tags_en of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/countries) shows a list of possible values for &#x60;countries&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    countries_tags_en?: string
    /**
     * The emb_codes_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    emb_codes_tags?: string
    /**
     * The labels_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/labels) has a list of possible values for &#x60;labels&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    labels_tags?: string
    /**
     * The manufacturing_places_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/manufacturing-places) has a list of possible values for &#x60;manufacturing-places&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    manufacturing_places_tags?: string
    /**
     * The nutrition_grades_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/nutrition-grades) has a list of possible values for &#x60;nutrition-grades&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    nutrition_grades_tags?: string
    /**
     * The origins_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    origins_tags?: string
    /**
     * The packaging_tag in german of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/packaging) has a list of possible values for &#x60;packaging&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    packaging_tags_de?: string
    /**
     * The purchase_places_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    purchase_places_tags?: string
    /**
     * The states_tags in english of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/states) has a list of possible values for &#x60;states&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    states_tags?: string
    /**
     * The stores_tags of product(s) you are searching for.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    stores_tags?: string
    /**
     * The traces_tags of product(s) you are searching for. The [OFF App](https://world.openfoodfacts.org/traces) shows a list of possible values for &#x60;traces&#x60;.  You can use multiple values by using a comma separated list. You can add a \&quot;-\&quot; before values to avoid matching a tag. 
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    traces_tags?: string
    /**
     * You can add a language code to a specific tag to query it in a specific language 
     * Defaults to: undefined
     * @type any
     * @memberof ReadRequestsApigetSearch
     */
    tag_name_tags_language_code?: any
    /**
     * Search on nutrient lower than a value 
     * Defaults to: undefined
     * @type any
     * @memberof ReadRequestsApigetSearch
     */
    nutrient_lt_value?: any
    /**
     * Search on nutrient greater than a value 
     * Defaults to: undefined
     * @type any
     * @memberof ReadRequestsApigetSearch
     */
    nutrient_gt_value?: any
    /**
     * Search on nutrient for an exact quantity 
     * Defaults to: undefined
     * @type any
     * @memberof ReadRequestsApigetSearch
     */
    nutrient_eq_value?: any
    /**
     * Specific fields to return. Use \&#39;knowledge_panels\&#39; for Knowledge Panels only.
     * Defaults to: undefined
     * @type string
     * @memberof ReadRequestsApigetSearch
     */
    fields?: string
    /**
     * The allowed values  used to sort/order the search results.  * &#x60;product_name&#x60; sorts on name * &#x60;ecoscore_score&#x60;, &#x60;nova_score&#x60;, &#x60;nutriscore_score&#x60; rank on the [Eco-Score](https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products), [Nova](https://world.openfoodfacts.org/nova), or [Nutri-Score](https://world.openfoodfacts.org/nutriscore) * &#x60;scans_n&#x60;, &#x60;unique_scans_n&#x60; and &#x60;popularity_key&#x60; are about product popularity: number of scans on unique scans, rank of product * &#x60;created_t&#x60;, &#x60;last_modified_t&#x60;, are about creation and modification dates * &#x60;nothing&#x60;, tells not to sort at all (because if you do not provide the sort_by argument we default to sorting on popularity (for food) or last modification date) 
     * Defaults to: undefined
     * @type &#39;product_name&#39; | &#39;last_modified_t&#39; | &#39;scans_n&#39; | &#39;unique_scans_n&#39; | &#39;created_t&#39; | &#39;completeness&#39; | &#39;popularity_key&#39; | &#39;nutriscore_score&#39; | &#39;nova_score&#39; | &#39;nothing&#39; | &#39;ecoscore_score&#39;
     * @memberof ReadRequestsApigetSearch
     */
    sort_by?: 'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score'
    /**
     * The page number you request to view (eg. in search results spanning multiple pages) 
     * Defaults to: undefined
     * @type number
     * @memberof ReadRequestsApigetSearch
     */
    page?: number
    /**
     * The number of elements should be sent per page 
     * Defaults to: undefined
     * @type number
     * @memberof ReadRequestsApigetSearch
     */
    page_size?: number
}

export class ObjectReadRequestsApi {
    private api: ObservableReadRequestsApi

    public constructor(configuration: Configuration, requestFactory?: ReadRequestsApiRequestFactory, responseProcessor?: ReadRequestsApiResponseProcessor) {
        this.api = new ObservableReadRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param param the request object
     */
    public getAttributeGroupsWithHttpInfo(param: ReadRequestsApiGetAttributeGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<AttributeGroup>>> {
        return this.api.getAttributeGroupsWithHttpInfo(param.lc,  options).toPromise();
    }

    /**
     * Attributes are at the heart of personal search. They score the products according to different criterias, which could then be matched to a user\'s preferences.  This API helps you list attributes and display them in your application, for the user to choose the importance of each criteria.  note: /api/v2/attribute_groups_{lc} is also a valid route, but consider it deprecated 
     * Get the list of attributes available for personal search.
     * @param param the request object
     */
    public getAttributeGroups(param: ReadRequestsApiGetAttributeGroupsRequest = {}, options?: Configuration): Promise<Array<AttributeGroup>> {
        return this.api.getAttributeGroups(param.lc,  options).toPromise();
    }

    /**
     * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 
     * Performing OCR on a Product
     * @param param the request object
     */
    public getCgiIngredientsPlWithHttpInfo(param: ReadRequestsApiGetCgiIngredientsPlRequest, options?: Configuration): Promise<HttpInfo<OcrOnProductResponse>> {
        return this.api.getCgiIngredientsPlWithHttpInfo(param.id, param.code, param.process_image, param.ocr_engine,  options).toPromise();
    }

    /**
     * Open Food Facts uses optical character recognition (OCR) to retrieve nutritional data and other information from the product labels. 
     * Performing OCR on a Product
     * @param param the request object
     */
    public getCgiIngredientsPl(param: ReadRequestsApiGetCgiIngredientsPlRequest, options?: Configuration): Promise<OcrOnProductResponse> {
        return this.api.getCgiIngredientsPl(param.id, param.code, param.process_image, param.ocr_engine,  options).toPromise();
    }

    /**
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * @param param the request object
     */
    public getCgiNutrientsPlWithHttpInfo(param: ReadRequestsApiGetCgiNutrientsPlRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Nutrient>>> {
        return this.api.getCgiNutrientsPlWithHttpInfo(param.cc, param.lc,  options).toPromise();
    }

    /**
     * Used to display the nutrition facts table of a product, or to display a form to input those nutrition facts. 
     * Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language
     * @param param the request object
     */
    public getCgiNutrientsPl(param: ReadRequestsApiGetCgiNutrientsPlRequest = {}, options?: Configuration): Promise<Array<Nutrient>> {
        return this.api.getCgiNutrientsPl(param.cc, param.lc,  options).toPromise();
    }

    /**
     * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 
     * Get Suggestions to Aid Adding/Editing Products
     * @param param the request object
     */
    public getCgiSuggestPlWithHttpInfo(param: ReadRequestsApiGetCgiSuggestPlRequest = {}, options?: Configuration): Promise<HttpInfo<Array<any>>> {
        return this.api.getCgiSuggestPlWithHttpInfo(param.tagtype, param.term,  options).toPromise();
    }

    /**
     * For example , Dave is looking for packaging_shapes that contain the term \"fe\", all packaging_shapes containing \"fe\" will be returned. This is useful if you have a search in your application, for a specific product field. 
     * Get Suggestions to Aid Adding/Editing Products
     * @param param the request object
     */
    public getCgiSuggestPl(param: ReadRequestsApiGetCgiSuggestPlRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.getCgiSuggestPl(param.tagtype, param.term,  options).toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param param the request object
     */
    public getPreferencesWithHttpInfo(param: ReadRequestsApiGetPreferencesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<GetPreferences200ResponseInner>>> {
        return this.api.getPreferencesWithHttpInfo(param.lc,  options).toPromise();
    }

    /**
     * This endpoint retrieves the weights corresponding to attribute preferences for computing personal product recommendations. The weights are used to personalize the product recommendations based on user preferences. 
     * Get the weights corresponding to attributes preferences to compute personal product 
     * @param param the request object
     */
    public getPreferences(param: ReadRequestsApiGetPreferencesRequest = {}, options?: Configuration): Promise<Array<GetPreferences200ResponseInner>> {
        return this.api.getPreferences(param.lc,  options).toPromise();
    }

    /**
     * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 
     * Get information for a specific product by barcode
     * @param param the request object
     */
    public getProductByBarcodeWithHttpInfo(param: ReadRequestsApiGetProductByBarcodeRequest, options?: Configuration): Promise<HttpInfo<GetProductByBarcodeAllResponse>> {
        return this.api.getProductByBarcodeWithHttpInfo(param.barcode, param.fields,  options).toPromise();
    }

    /**
     * Fetches product details by its unique barcode.  Can return all product details or specific fields like knowledge panels. 
     * Get information for a specific product by barcode
     * @param param the request object
     */
    public getProductByBarcode(param: ReadRequestsApiGetProductByBarcodeRequest, options?: Configuration): Promise<GetProductByBarcodeAllResponse> {
        return this.api.getProductByBarcode(param.barcode, param.fields,  options).toPromise();
    }

    /**
     * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 
     * Search for Products
     * @param param the request object
     */
    public getSearchWithHttpInfo(param: ReadRequestsApiGetSearchRequest = {}, options?: Configuration): Promise<HttpInfo<SearchForProductsResponse>> {
        return this.api.getSearchWithHttpInfo(param.additives_tags, param.allergens_tags, param.brands_tags, param.categories_tags, param.countries_tags_en, param.emb_codes_tags, param.labels_tags, param.manufacturing_places_tags, param.nutrition_grades_tags, param.origins_tags, param.packaging_tags_de, param.purchase_places_tags, param.states_tags, param.stores_tags, param.traces_tags, param.tag_name_tags_language_code, param.nutrient_lt_value, param.nutrient_gt_value, param.nutrient_eq_value, param.fields, param.sort_by, param.page, param.page_size,  options).toPromise();
    }

    /**
     * Search request allows you to get products that match your search criteria.  It allows you create many custom APIs for your use case.  If the search query parameter has 2 possible values, they are seperated by a comma(,). When filtering via a parameter that has different language codes like `fr`, `de` or `en`, specify the language code in the parameter name e.g `categories_tags_en`  **Important:** search API v2 does not support full text request (search_term), you have to use [search API v1](https://wiki.openfoodfacts.org/API/Read/Search) for that. Upcoming [search-a-licious project](https://github.com/openfoodfacts/search-a-licious) will fix that.  ### Limiting results  You can limit the size of returned objects thanks to the `fields` object (see below).  eg: `fields=code,product_name,brands,attribute_groups``  Please use it as much as possible to avoid overloading the servers.  The search use pagination, see `page` and `page_size` parameters.  **Beware:** the `page_count` data in item is a bit counter intuitive…, read the description.  ### Conditions on tags  All `_tags`` parameters accepts either:  * a single value * or a comma-separated list of values (doing a AND) * or a pipe separated list of values (doing a OR)  You can exclude terms by using a \"-\" prefix.  For taxonomized entries, you might either use the tag id (recommended), or a known synonym (without language prefix)  * `labels_tags=en:organic,en:fair-trade` find items that are fair-trade AND organic * `labels_tags=en:organic|en:fair-trade` find items that are fair-trade OR organic * `labels_tags=en:organic,en:-fair-trade` find items that are organic BUT NOT fair-trade   ### Conditions on nutriments  To get a list of nutrients  You can either query on nutrient per 100g (`_100g` suffix) or per serving (`serving` suffix).  You can also add `_prepared_` to get the nutrients in the prepared product instead of as sold.  You can add a comparison operator and value to the parameter name to get products with nutrient above or bellow a value. If you use a parameter value it exactly match it.  * `energy-kj_100g<200` products where energy in kj for 100g is less than 200kj * `sugars_serving>10` products where sugar per serving is greater than 10g * `saturated-fat_100g=1` products where saturated fat per 100g is exactly 10g * `salt_prepared_serving<0.1` products where salt per serving for prepared product is less than 0.1g  ### More references  See also [wiki page](https://wiki.openfoodfacts.org/Open_Food_Facts_Search_API_Version_2) 
     * Search for Products
     * @param param the request object
     */
    public getSearch(param: ReadRequestsApiGetSearchRequest = {}, options?: Configuration): Promise<SearchForProductsResponse> {
        return this.api.getSearch(param.additives_tags, param.allergens_tags, param.brands_tags, param.categories_tags, param.countries_tags_en, param.emb_codes_tags, param.labels_tags, param.manufacturing_places_tags, param.nutrition_grades_tags, param.origins_tags, param.packaging_tags_de, param.purchase_places_tags, param.states_tags, param.stores_tags, param.traces_tags, param.tag_name_tags_language_code, param.nutrient_lt_value, param.nutrient_gt_value, param.nutrient_eq_value, param.fields, param.sort_by, param.page, param.page_size,  options).toPromise();
    }

}

import { ObservableWriteRequestsApi } from "./ObservableAPI";
import { WriteRequestsApiRequestFactory, WriteRequestsApiResponseProcessor} from "../apis/WriteRequestsApi";

export interface WriteRequestsApiGetCgiProductImageCropPlRequest {
    /**
     * Barcode of the product
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageCropPl
     */
    code: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageCropPl
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageCropPl
     */
    imgid: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageCropPl
     */
    angle: string
}

export interface WriteRequestsApiGetCgiProductImageUploadPlRequest {
    /**
     * Barcode of the product 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageUploadPl
     */
    code: string
    /**
     * Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don\\\&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture. 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApigetCgiProductImageUploadPl
     */
    imagefield: string
    /**
     * This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;. 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof WriteRequestsApigetCgiProductImageUploadPl
     */
    imgupload_front_en: HttpFile
}

export interface WriteRequestsApiPostCgiProductImageCropPlRequest {
    /**
     * Barcode of the product.
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    code: string
    /**
     * identifier of the image to select, it should be a number
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    imgid: number
    /**
     * identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists). 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    id: string
    /**
     * X origin coordinate of the crop, it must be lower than x2
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    x1?: number
    /**
     * Y origin coordinate of the crop, it must be lower than y2
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    y1?: number
    /**
     * X end coordinate of the crop, it must be higher than x1
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    x2?: number
    /**
     * Y end coordinate of the crop, it must be higher than y1
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    y2?: number
    /**
     * angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise. 
     * Defaults to: undefined
     * @type number
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    angle?: number
    /**
     * whether the selected image should be normalized using ImageMagick
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    normalize?: string
    /**
     * whether the source image should be white magiced (background removal) using ImageMagick. 
     * Defaults to: &#39;false&#39;
     * @type string
     * @memberof WriteRequestsApipostCgiProductImageCropPl
     */
    white_magic?: string
}

export interface WriteRequestsApiPostCgiProductJqm2PlRequest {
    /**
     * The barcode of the product to be added or edited
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    code: string
    /**
     * A valid username.
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    user_id: string
    /**
     * A valid corresponding password (related to specific environment).
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    password: string
    /**
     * A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history. 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    comment?: string
    /**
     * The brands of the product (comma separated list of values).
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    brands?: Array<string>
    /**
     * The labels of the product (comma separated list of values).
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    labels?: Array<string>
    /**
     * The categories of the product (comma separated list of values).
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    categories?: Array<string>
    /**
     * Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    packaging?: string
    /**
     * Name of the app providing the information 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    app_name?: string
    /**
     * Version of the app providing the information 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    app_version?: string
    /**
     * When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits. 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    app_uuid?: string
    /**
     * It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter. 
     * Defaults to: undefined
     * @type string
     * @memberof WriteRequestsApipostCgiProductJqm2Pl
     */
    User_Agent?: string
}

export class ObjectWriteRequestsApi {
    private api: ObservableWriteRequestsApi

    public constructor(configuration: Configuration, requestFactory?: WriteRequestsApiRequestFactory, responseProcessor?: WriteRequestsApiResponseProcessor) {
        this.api = new ObservableWriteRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 
     * Rotate A Photo
     * @param param the request object
     */
    public getCgiProductImageCropPlWithHttpInfo(param: WriteRequestsApiGetCgiProductImageCropPlRequest, options?: Configuration): Promise<HttpInfo<RotateAPhotoResponse>> {
        return this.api.getCgiProductImageCropPlWithHttpInfo(param.code, param.id, param.imgid, param.angle,  options).toPromise();
    }

    /**
     * Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 
     * Rotate A Photo
     * @param param the request object
     */
    public getCgiProductImageCropPl(param: WriteRequestsApiGetCgiProductImageCropPlRequest, options?: Configuration): Promise<RotateAPhotoResponse> {
        return this.api.getCgiProductImageCropPl(param.code, param.id, param.imgid, param.angle,  options).toPromise();
    }

    /**
     * Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 
     * Add a Photo to an Existing Product
     * @param param the request object
     */
    public getCgiProductImageUploadPlWithHttpInfo(param: WriteRequestsApiGetCgiProductImageUploadPlRequest, options?: Configuration): Promise<HttpInfo<AddPhotoToExistingProductResponse>> {
        return this.api.getCgiProductImageUploadPlWithHttpInfo(param.code, param.imagefield, param.imgupload_front_en,  options).toPromise();
    }

    /**
     * Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 
     * Add a Photo to an Existing Product
     * @param param the request object
     */
    public getCgiProductImageUploadPl(param: WriteRequestsApiGetCgiProductImageUploadPlRequest, options?: Configuration): Promise<AddPhotoToExistingProductResponse> {
        return this.api.getCgiProductImageUploadPl(param.code, param.imagefield, param.imgupload_front_en,  options).toPromise();
    }

    /**
     * Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 
     * Crop A Photo
     * @param param the request object
     */
    public postCgiProductImageCropPlWithHttpInfo(param: WriteRequestsApiPostCgiProductImageCropPlRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.postCgiProductImageCropPlWithHttpInfo(param.code, param.imgid, param.id, param.x1, param.y1, param.x2, param.y2, param.angle, param.normalize, param.white_magic,  options).toPromise();
    }

    /**
     * Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 
     * Crop A Photo
     * @param param the request object
     */
    public postCgiProductImageCropPl(param: WriteRequestsApiPostCgiProductImageCropPlRequest, options?: Configuration): Promise<any> {
        return this.api.postCgiProductImageCropPl(param.code, param.imgid, param.id, param.x1, param.y1, param.x2, param.y2, param.angle, param.normalize, param.white_magic,  options).toPromise();
    }

    /**
     * This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 
     * Add or Edit A Product
     * @param param the request object
     */
    public postCgiProductJqm2PlWithHttpInfo(param: WriteRequestsApiPostCgiProductJqm2PlRequest, options?: Configuration): Promise<HttpInfo<AddOrEditAProductResponse>> {
        return this.api.postCgiProductJqm2PlWithHttpInfo(param.code, param.user_id, param.password, param.comment, param.brands, param.labels, param.categories, param.packaging, param.app_name, param.app_version, param.app_uuid, param.User_Agent,  options).toPromise();
    }

    /**
     * This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 
     * Add or Edit A Product
     * @param param the request object
     */
    public postCgiProductJqm2Pl(param: WriteRequestsApiPostCgiProductJqm2PlRequest, options?: Configuration): Promise<AddOrEditAProductResponse> {
        return this.api.postCgiProductJqm2Pl(param.code, param.user_id, param.password, param.comment, param.brands, param.labels, param.categories, param.packaging, param.app_name, param.app_version, param.app_uuid, param.User_Agent,  options).toPromise();
    }

}
