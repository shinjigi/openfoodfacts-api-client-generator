/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * OpenAPI spec version: 2
 * Contact: reuse@openfoodfacts.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImageRoleSizes } from '../models/ImageRoleSizes';
import { HttpFile } from '../http/http';

/**
* property of an image (or part thereof) selected for a particular role and a particular language. 
*/
export class ImageRole {
    /**
    * The angle of the image rotation (if it was rotated).
    */
    'angle'?: number;
    'coordinates_image_size'?: string;
    'geometry'?: string;
    /**
    * The id of the original/source image that was selected to edit(rotate, normalize etc) to produce this new image.
    */
    'imgid'?: string;
    /**
    * Normalize colors.
    */
    'normalize'?: string;
    'rev'?: string;
    'sizes'?: ImageRoleSizes;
    /**
    * Photo on white background : Try to remove the background. 
    */
    'white_magic'?: string;
    'x1'?: string;
    'x2'?: string;
    'y1'?: string;
    'y2'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "angle",
            "baseName": "angle",
            "type": "number",
            "format": ""
        },
        {
            "name": "coordinates_image_size",
            "baseName": "coordinates_image_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "string",
            "format": ""
        },
        {
            "name": "imgid",
            "baseName": "imgid",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalize",
            "baseName": "normalize",
            "type": "string",
            "format": ""
        },
        {
            "name": "rev",
            "baseName": "rev",
            "type": "string",
            "format": ""
        },
        {
            "name": "sizes",
            "baseName": "sizes",
            "type": "ImageRoleSizes",
            "format": ""
        },
        {
            "name": "white_magic",
            "baseName": "white_magic",
            "type": "string",
            "format": ""
        },
        {
            "name": "x1",
            "baseName": "x1",
            "type": "string",
            "format": ""
        },
        {
            "name": "x2",
            "baseName": "x2",
            "type": "string",
            "format": ""
        },
        {
            "name": "y1",
            "baseName": "y1",
            "type": "string",
            "format": ""
        },
        {
            "name": "y2",
            "baseName": "y2",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImageRole.attributeTypeMap;
    }

    public constructor() {
    }
}
