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

import { mapValues } from '../runtime';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { ProductImagesFront } from './ProductImagesFront';
import {
    ProductImagesFrontFromJSON,
    ProductImagesFrontFromJSONTyped,
    ProductImagesFrontToJSON,
} from './ProductImagesFront';

/**
 * This contains properties for all images contained on the product.
 * 
 * @export
 * @interface ProductImages
 */
export interface ProductImages {
    /**
     * 
     * @type {Image}
     * @memberof ProductImages
     */
    _1?: Image;
    /**
     * 
     * @type {ProductImagesFront}
     * @memberof ProductImages
     */
    front?: ProductImagesFront;
}

/**
 * Check if a given object implements the ProductImages interface.
 */
export function instanceOfProductImages(value: object): value is ProductImages {
    return true;
}

export function ProductImagesFromJSON(json: any): ProductImages {
    return ProductImagesFromJSONTyped(json, false);
}

export function ProductImagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductImages {
    if (json == null) {
        return json;
    }
    return {
        
        '_1': json['1'] == null ? undefined : ImageFromJSON(json['1']),
        'front': json['front'] == null ? undefined : ProductImagesFrontFromJSON(json['front']),
    };
}

export function ProductImagesToJSON(value?: ProductImages | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '1': ImageToJSON(value['_1']),
        'front': ProductImagesFrontToJSON(value['front']),
    };
}

