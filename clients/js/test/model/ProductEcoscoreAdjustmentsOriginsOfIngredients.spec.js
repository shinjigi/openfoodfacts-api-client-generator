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
    instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
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

  describe('ProductEcoscoreAdjustmentsOriginsOfIngredients', function() {
    it('should create an instance of ProductEcoscoreAdjustmentsOriginsOfIngredients', function() {
      // uncomment below and update the code to test ProductEcoscoreAdjustmentsOriginsOfIngredients
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients);
    });

    it('should have the property aggregated_origins (base name: "aggregated_origins")', function() {
      // uncomment below and update the code to test the property aggregated_origins
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property epi_score (base name: "epi_score")', function() {
      // uncomment below and update the code to test the property epi_score
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property epi_value (base name: "epi_value")', function() {
      // uncomment below and update the code to test the property epi_value
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins_from_categories (base name: "origins_from_categories")', function() {
      // uncomment below and update the code to test the property origins_from_categories
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins_from_origins_field (base name: "origins_from_origins_field")', function() {
      // uncomment below and update the code to test the property origins_from_origins_field
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property transportation_score (base name: "transportation_score")', function() {
      // uncomment below and update the code to test the property transportation_score
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property transportation_scores (base name: "transportation_scores")', function() {
      // uncomment below and update the code to test the property transportation_scores
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property transportation_value (base name: "transportation_value")', function() {
      // uncomment below and update the code to test the property transportation_value
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property transportation_values (base name: "transportation_values")', function() {
      // uncomment below and update the code to test the property transportation_values
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

    it('should have the property warning (base name: "warning")', function() {
      // uncomment below and update the code to test the property warning
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreAdjustmentsOriginsOfIngredients();
      //expect(instance).to.be();
    });

  });

}));
