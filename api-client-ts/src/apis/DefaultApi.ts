/* tslint:disable */
/* eslint-disable */
/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: contact@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PostCgiProductImageUnselectPl200Response,
} from '../models/index';
import {
    PostCgiProductImageUnselectPl200ResponseFromJSON,
    PostCgiProductImageUnselectPl200ResponseToJSON,
} from '../models/index';

export interface PostCgiProductImageUnselectPlRequest {
    code?: string;
    id?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Unselect A Photo
     */
    async postCgiProductImageUnselectPlRaw(requestParameters: PostCgiProductImageUnselectPlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCgiProductImageUnselectPl200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['code'] != null) {
            formParams.append('code', requestParameters['code'] as any);
        }

        if (requestParameters['id'] != null) {
            formParams.append('id', requestParameters['id'] as any);
        }

        const response = await this.request({
            path: `/cgi/product_image_unselect.pl`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostCgiProductImageUnselectPl200ResponseFromJSON(jsonValue));
    }

    /**
     * Unselect A Photo
     */
    async postCgiProductImageUnselectPl(requestParameters: PostCgiProductImageUnselectPlRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCgiProductImageUnselectPl200Response> {
        const response = await this.postCgiProductImageUnselectPlRaw(requestParameters, initOverrides);
        return await response.value();
    }

}