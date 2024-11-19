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
    instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
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

  describe('EcoscoreDataAdjustments', function () {
    it('should create an instance of EcoscoreDataAdjustments', function () {
      // uncomment below and update the code to test EcoscoreDataAdjustments
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.EcoscoreDataAdjustments);
    });

    it('should have the property originsOfIngredients (base name: "origins_of_ingredients")', function () {
      // uncomment below and update the code to test the property originsOfIngredients
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
      //expect(instance).to.be();
    });

    it('should have the property packaging (base name: "packaging")', function () {
      // uncomment below and update the code to test the property packaging
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
      //expect(instance).to.be();
    });

    it('should have the property productionSystem (base name: "production_system")', function () {
      // uncomment below and update the code to test the property productionSystem
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
      //expect(instance).to.be();
    });

    it('should have the property threatenedSpecies (base name: "threatened_species")', function () {
      // uncomment below and update the code to test the property threatenedSpecies
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAdjustments();
      //expect(instance).to.be();
    });

  });

}));
