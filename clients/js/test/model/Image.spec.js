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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenFoodFactsOpenApi);
  }
}(this, function(expect, OpenFoodFactsOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenFoodFactsOpenApi.Image();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Image', function() {
    it('should create an instance of Image', function() {
      // uncomment below and update the code to test Image
      var instance = new OpenFoodFactsOpenApi.Image();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.Image);
    });

    it('should have the property sizes (base name: "sizes")', function() {
      // uncomment below and update the code to test the property sizes
      var instance = new OpenFoodFactsOpenApi.Image();
      //expect(instance).to.be();
    });

    it('should have the property uploadedT (base name: "uploaded_t")', function() {
      // uncomment below and update the code to test the property uploadedT
      var instance = new OpenFoodFactsOpenApi.Image();
      //expect(instance).to.be();
    });

    it('should have the property uploader (base name: "uploader")', function() {
      // uncomment below and update the code to test the property uploader
      var instance = new OpenFoodFactsOpenApi.Image();
      //expect(instance).to.be();
    });

  });

}));
