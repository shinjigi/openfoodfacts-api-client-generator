// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddOrEditAProductResponse } from '../models/AddOrEditAProductResponse';
import { AddPhotoToExistingProductResponse } from '../models/AddPhotoToExistingProductResponse';
import { RotateAPhotoResponse } from '../models/RotateAPhotoResponse';

/**
 * no description
 */
export class WriteRequestsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Although we recommend rotating photos manually and uploading a new version of the image, the OFF API allows you to make api calls to automate this process. You can rotate existing photos by setting the angle to 90º, 180º, or 270º clockwise. 
     * Rotate A Photo
     * @param code Barcode of the product
     * @param id 
     * @param imgid 
     * @param angle 
     */
    public async getCgiProductImageCropPl(code: string, id: string, imgid: string, angle: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageCropPl", "code");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageCropPl", "id");
        }


        // verify required parameter 'imgid' is not null or undefined
        if (imgid === null || imgid === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageCropPl", "imgid");
        }


        // verify required parameter 'angle' is not null or undefined
        if (angle === null || angle === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageCropPl", "angle");
        }


        // Path Params
        const localVarPath = '/cgi/product_image_crop.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (imgid !== undefined) {
            requestContext.setQueryParam("imgid", ObjectSerializer.serialize(imgid, "string", ""));
        }

        // Query Params
        if (angle !== undefined) {
            requestContext.setQueryParam("angle", ObjectSerializer.serialize(angle, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Photos are source and proof of data. The first photo uploaded for a product is auto-selected as the product’s “front” photo.\' 
     * Add a Photo to an Existing Product
     * @param code Barcode of the product 
     * @param imagefield Indicates the type of the image and the corresponding language. It should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Use &#x60;other&#x60; if you don\\\&#39;t want the image to be selected. Note that the first image of a product is always selected as front picture. 
     * @param imgupload_front_en This field must contain image binary content. The format and extension must be one of gif|jpeg|jpg|png|heic.             This field is dynamic and dependent on the value of imagefield in the request body. It wil be imgupload_the value of the imagefield stated earlier. For example, if &#x60;imagefield&#x3D;front_en&#x60;, the name of this field should be &#x60;imageupload_front_en&#x60;. 
     */
    public async getCgiProductImageUploadPl(code: string, imagefield: string, imgupload_front_en: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageUploadPl", "code");
        }


        // verify required parameter 'imagefield' is not null or undefined
        if (imagefield === null || imagefield === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageUploadPl", "imagefield");
        }


        // verify required parameter 'imgupload_front_en' is not null or undefined
        if (imgupload_front_en === null || imgupload_front_en === undefined) {
            throw new RequiredError("WriteRequestsApi", "getCgiProductImageUploadPl", "imgupload_front_en");
        }


        // Path Params
        const localVarPath = '/cgi/product_image_upload.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (imagefield !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('imagefield', imagefield as any);
        }
        if (imgupload_front_en !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('imgupload_front_en', imgupload_front_en, imgupload_front_en.name);
             }
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["userAgentAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cropping is only relevant for editing existing products. You cannot crop an image the first time you upload it to the system. 
     * Crop A Photo
     * @param code Barcode of the product.
     * @param imgid identifier of the image to select, it should be a number
     * @param id identifier of the selected image field, should be in the format &#x60;{IMAGE_TYPE}_{LANG}&#x60; format, where &#x60;IMAGE_TYPE&#x60; is one of &#x60;front|ingredients|nutrition|packaging|other&#x60; and &#x60;LANG&#x60; is the 2 letter language code. Note that if you select an image for the main language of the product (ex: &#x60;ingredients_it&#x60; if &#x60;it&#x60; is the main language), this image will be displayed on Product Opener for all languages (ex: on &#x60;https://fr.openfoodfacts.org&#x60;, unless &#x60;ingredients_fr&#x60; exists). 
     * @param x1 X origin coordinate of the crop, it must be lower than x2
     * @param y1 Y origin coordinate of the crop, it must be lower than y2
     * @param x2 X end coordinate of the crop, it must be higher than x1
     * @param y2 Y end coordinate of the crop, it must be higher than y1
     * @param angle angle of the rotation to apply on the selected image. passing &#x60;90&#x60; as value rotate the image 90 degrees counter-clockwise. 
     * @param normalize whether the selected image should be normalized using ImageMagick
     * @param white_magic whether the source image should be white magiced (background removal) using ImageMagick. 
     */
    public async postCgiProductImageCropPl(code: string, imgid: number, id: string, x1?: number, y1?: number, x2?: number, y2?: number, angle?: number, normalize?: string, white_magic?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductImageCropPl", "code");
        }


        // verify required parameter 'imgid' is not null or undefined
        if (imgid === null || imgid === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductImageCropPl", "imgid");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductImageCropPl", "id");
        }









        // Path Params
        const localVarPath = '/cgi/product_image_crop.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (imgid !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('imgid', imgid as any);
        }
        if (id !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('id', id as any);
        }
        if (x1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('x1', x1 as any);
        }
        if (y1 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('y1', y1 as any);
        }
        if (x2 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('x2', x2 as any);
        }
        if (y2 !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('y2', y2 as any);
        }
        if (angle !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('angle', angle as any);
        }
        if (normalize !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('normalize', normalize as any);
        }
        if (white_magic !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('white_magic', white_magic as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This updates a product.  Note: If the barcode exists then you will be editing the existing product, However if it doesn\'\'t you will be creating a new product with that unique barcode, and adding properties to the product. 
     * Add or Edit A Product
     * @param code The barcode of the product to be added or edited
     * @param user_id A valid username.
     * @param password A valid corresponding password (related to specific environment).
     * @param comment A comment on the contribution. Adding meaningful comments help moderators and users understand a single product history. 
     * @param brands The brands of the product (comma separated list of values).
     * @param labels The labels of the product (comma separated list of values).
     * @param categories The categories of the product (comma separated list of values).
     * @param packaging Packaging type, format, material. The [v3 API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/ref-v3/#operation/post-api-v3-product-barcode) has a more structured data for &#x60;packaging&#x60;. 
     * @param app_name Name of the app providing the information 
     * @param app_version Version of the app providing the information 
     * @param app_uuid When an app uses a single user to log its contributions, it might be interesting to know which user of the app is providing the information. You can use this field to provide an identifier (eg: an sha1 of the username) that\\\&#39;s privacy preserving. Make sure that your salt is strong, perfectly random and secret  In case we have trouble with one of your user, it helps our moderators revert edits. 
     * @param User_Agent It is required that you pass a specific User-Agent header when you do an API request. But some times it\\\&#39;s not possible to modify such a header (eg. request using JavaScript in a browser). In such cases, you can override it with this parameter. 
     */
    public async postCgiProductJqm2Pl(code: string, user_id: string, password: string, comment?: string, brands?: Array<string>, labels?: Array<string>, categories?: Array<string>, packaging?: string, app_name?: string, app_version?: string, app_uuid?: string, User_Agent?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductJqm2Pl", "code");
        }


        // verify required parameter 'user_id' is not null or undefined
        if (user_id === null || user_id === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductJqm2Pl", "user_id");
        }


        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new RequiredError("WriteRequestsApi", "postCgiProductJqm2Pl", "password");
        }











        // Path Params
        const localVarPath = '/cgi/product_jqm2.pl';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (user_id !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('user_id', user_id as any);
        }
        if (password !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('password', password as any);
        }
        if (comment !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('comment', comment as any);
        }
        if (brands) {
            // TODO: replace .append with .set
            localVarFormParams.append('brands', brands.join(COLLECTION_FORMATS["csv"]));
        }
        if (labels) {
            // TODO: replace .append with .set
            localVarFormParams.append('labels', labels.join(COLLECTION_FORMATS["csv"]));
        }
        if (categories) {
            // TODO: replace .append with .set
            localVarFormParams.append('categories', categories.join(COLLECTION_FORMATS["csv"]));
        }
        if (packaging !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('packaging', packaging as any);
        }
        if (app_name !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('app_name', app_name as any);
        }
        if (app_version !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('app_version', app_version as any);
        }
        if (app_uuid !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('app_uuid', app_uuid as any);
        }
        if (User_Agent !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('User-Agent', User_Agent as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["userAgentAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WriteRequestsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCgiProductImageCropPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCgiProductImageCropPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RotateAPhotoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RotateAPhotoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RotateAPhotoResponse", ""
            ) as RotateAPhotoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RotateAPhotoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RotateAPhotoResponse", ""
            ) as RotateAPhotoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCgiProductImageUploadPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCgiProductImageUploadPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddPhotoToExistingProductResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddPhotoToExistingProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddPhotoToExistingProductResponse", ""
            ) as AddPhotoToExistingProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddPhotoToExistingProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddPhotoToExistingProductResponse", ""
            ) as AddPhotoToExistingProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCgiProductImageCropPl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCgiProductImageCropPlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCgiProductJqm2Pl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCgiProductJqm2PlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddOrEditAProductResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddOrEditAProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddOrEditAProductResponse", ""
            ) as AddOrEditAProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddOrEditAProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddOrEditAProductResponse", ""
            ) as AddOrEditAProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
