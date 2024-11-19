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
    instance = new OpenFoodFactsOpenApi.Nutrient();
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

  describe('Nutrient', function() {
    it('should create an instance of Nutrient', function() {
      // uncomment below and update the code to test Nutrient
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.Nutrient);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

    it('should have the property important (base name: "important")', function() {
      // uncomment below and update the code to test the property important
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

    it('should have the property displayInEditForm (base name: "display_in_edit_form")', function() {
      // uncomment below and update the code to test the property displayInEditForm
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

    it('should have the property nutrients (base name: "nutrients")', function() {
      // uncomment below and update the code to test the property nutrients
      var instance = new OpenFoodFactsOpenApi.Nutrient();
      //expect(instance).to.be();
    });

  });

}));
