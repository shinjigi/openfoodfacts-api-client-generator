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
    instance = new OpenFoodFactsOpenApi.ProductEcoscoreDataAdjustmentsThreatenedSpecies();
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

  describe('ProductEcoscoreDataAdjustmentsThreatenedSpecies', function() {
    it('should create an instance of ProductEcoscoreDataAdjustmentsThreatenedSpecies', function() {
      // uncomment below and update the code to test ProductEcoscoreDataAdjustmentsThreatenedSpecies
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreDataAdjustmentsThreatenedSpecies();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.ProductEcoscoreDataAdjustmentsThreatenedSpecies);
    });

    it('should have the property ingredient (base name: "ingredient")', function() {
      // uncomment below and update the code to test the property ingredient
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreDataAdjustmentsThreatenedSpecies();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new OpenFoodFactsOpenApi.ProductEcoscoreDataAdjustmentsThreatenedSpecies();
      //expect(instance).to.be();
    });

  });

}));
