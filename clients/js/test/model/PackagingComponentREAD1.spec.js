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
    instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
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

  describe('PackagingComponentREAD1', function() {
    it('should create an instance of PackagingComponentREAD1', function() {
      // uncomment below and update the code to test PackagingComponentREAD1
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.PackagingComponentREAD1);
    });

    it('should have the property number_of_units (base name: "number_of_units")', function() {
      // uncomment below and update the code to test the property number_of_units
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property shape (base name: "shape")', function() {
      // uncomment below and update the code to test the property shape
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property material (base name: "material")', function() {
      // uncomment below and update the code to test the property material
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property recycling (base name: "recycling")', function() {
      // uncomment below and update the code to test the property recycling
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property quantity_per_unit (base name: "quantity_per_unit")', function() {
      // uncomment below and update the code to test the property quantity_per_unit
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property quantity_per_unit_value (base name: "quantity_per_unit_value")', function() {
      // uncomment below and update the code to test the property quantity_per_unit_value
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property quantity_per_unit_unit (base name: "quantity_per_unit_unit")', function() {
      // uncomment below and update the code to test the property quantity_per_unit_unit
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property weight_specified (base name: "weight_specified")', function() {
      // uncomment below and update the code to test the property weight_specified
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property weight_measured (base name: "weight_measured")', function() {
      // uncomment below and update the code to test the property weight_measured
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property weight_estimated (base name: "weight_estimated")', function() {
      // uncomment below and update the code to test the property weight_estimated
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

    it('should have the property weight_source_id (base name: "weight_source_id")', function() {
      // uncomment below and update the code to test the property weight_source_id
      //var instance = new OpenFoodFactsOpenApi.PackagingComponentREAD1();
      //expect(instance).to.be();
    });

  });

}));
