/**
 * Open Food Facts Open API
 * As a developer, the Open Food Facts API allows you to get information and contribute to the products database. You can create great apps to help people make better food choices and also provide data to enhance the database. 
 *
 * The version of the OpenAPI document: 2
 * Contact: reuse@openfoodfacts.org
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
    instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
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

  describe('ProductEcoscoreData', function() {
    it('should create an instance of ProductEcoscoreData', function() {
      // uncomment below and update the code to test ProductEcoscoreData
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.ProductEcoscoreData);
    });

    it('should have the property adjustments (base name: "adjustments")', function() {
      // uncomment below and update the code to test the property adjustments
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property agribalyse (base name: "agribalyse")', function() {
      // uncomment below and update the code to test the property agribalyse
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property grade (base name: "grade")', function() {
      // uncomment below and update the code to test the property grade
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property grades (base name: "grades")', function() {
      // uncomment below and update the code to test the property grades
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property missing (base name: "missing")', function() {
      // uncomment below and update the code to test the property missing
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property missing_data_warning (base name: "missing_data_warning")', function() {
      // uncomment below and update the code to test the property missing_data_warning
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property previous_data (base name: "previous_data")', function() {
      // uncomment below and update the code to test the property previous_data
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property scores (base name: "scores")', function() {
      // uncomment below and update the code to test the property scores
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreData();
      //expect(instance).to.be();
    });

  });

}));
