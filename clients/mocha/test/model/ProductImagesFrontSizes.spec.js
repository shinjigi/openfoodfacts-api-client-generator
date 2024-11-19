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
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenFoodFactsOpenApi);
  }
}(this, function (expect, OpenFoodFactsOpenApi) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductImagesFrontSizes', function () {
    it('should create an instance of ProductImagesFrontSizes', function () {
      // uncomment below and update the code to test ProductImagesFrontSizes
      var instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.ProductImagesFrontSizes);
    });

    it('should have the property _100 (base name: "100")', function () {
      // uncomment below and update the code to test the property _100
      var instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
      //expect(instance).to.be();
    });

    it('should have the property _200 (base name: "200")', function () {
      // uncomment below and update the code to test the property _200
      var instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
      //expect(instance).to.be();
    });

    it('should have the property _400 (base name: "400")', function () {
      // uncomment below and update the code to test the property _400
      var instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
      //expect(instance).to.be();
    });

    it('should have the property full (base name: "full")', function () {
      // uncomment below and update the code to test the property full
      var instance = new OpenFoodFactsOpenApi.ProductImagesFrontSizes();
      //expect(instance).to.be();
    });

  });

}));
