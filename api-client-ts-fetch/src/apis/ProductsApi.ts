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
  GetProductByBarcodeResponse,
} from '../models/index';
import {
    GetProductByBarcodeResponseFromJSON,
    GetProductByBarcodeResponseToJSON,
} from '../models/index';

export interface GetProductByBarcodeRequest {
    barcode: string;
    fields?: GetProductByBarcodeFieldsEnum;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * A product can be fetched via its unique barcode. It returns all the details of that product response. You can add th Knowledge panels that gives high leve informations about a product, ready to display. This is used by open food facts website, and by the official mobile application 
     * Get information for a specific product by barcode
     */
    async getProductByBarcodeRaw(requestParameters: GetProductByBarcodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductByBarcodeResponse>> {
        if (requestParameters['barcode'] == null) {
            throw new runtime.RequiredError(
                'barcode',
                'Required parameter "barcode" was null or undefined when calling getProductByBarcode().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/product/{barcode}`.replace(`{${"barcode"}}`, encodeURIComponent(String(requestParameters['barcode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProductByBarcodeResponseFromJSON(jsonValue));
    }

    /**
     * A product can be fetched via its unique barcode. It returns all the details of that product response. You can add th Knowledge panels that gives high leve informations about a product, ready to display. This is used by open food facts website, and by the official mobile application 
     * Get information for a specific product by barcode
     */
    async getProductByBarcode(requestParameters: GetProductByBarcodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductByBarcodeResponse> {
        const response = await this.getProductByBarcodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetProductByBarcodeFieldsEnum = {
    KnowledgePanels: 'knowledge_panels'
} as const;
export type GetProductByBarcodeFieldsEnum = typeof GetProductByBarcodeFieldsEnum[keyof typeof GetProductByBarcodeFieldsEnum];
