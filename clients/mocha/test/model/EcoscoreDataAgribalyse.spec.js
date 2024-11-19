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
    instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
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

  describe('EcoscoreDataAgribalyse', function () {
    it('should create an instance of EcoscoreDataAgribalyse', function () {
      // uncomment below and update the code to test EcoscoreDataAgribalyse
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.EcoscoreDataAgribalyse);
    });

    it('should have the property agribalyseFoodCode (base name: "agribalyse_food_code")', function () {
      // uncomment below and update the code to test the property agribalyseFoodCode
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Agriculture (base name: "co2_agriculture")', function () {
      // uncomment below and update the code to test the property co2Agriculture
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Consumption (base name: "co2_consumption")', function () {
      // uncomment below and update the code to test the property co2Consumption
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Distribution (base name: "co2_distribution")', function () {
      // uncomment below and update the code to test the property co2Distribution
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Packaging (base name: "co2_packaging")', function () {
      // uncomment below and update the code to test the property co2Packaging
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Processing (base name: "co2_processing")', function () {
      // uncomment below and update the code to test the property co2Processing
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Total (base name: "co2_total")', function () {
      // uncomment below and update the code to test the property co2Total
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property co2Transportation (base name: "co2_transportation")', function () {
      // uncomment below and update the code to test the property co2Transportation
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function () {
      // uncomment below and update the code to test the property code
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property dqr (base name: "dqr")', function () {
      // uncomment below and update the code to test the property dqr
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efAgriculture (base name: "ef_agriculture")', function () {
      // uncomment below and update the code to test the property efAgriculture
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efConsumption (base name: "ef_consumption")', function () {
      // uncomment below and update the code to test the property efConsumption
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efDistribution (base name: "ef_distribution")', function () {
      // uncomment below and update the code to test the property efDistribution
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efPackaging (base name: "ef_packaging")', function () {
      // uncomment below and update the code to test the property efPackaging
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efProcessing (base name: "ef_processing")', function () {
      // uncomment below and update the code to test the property efProcessing
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efTotal (base name: "ef_total")', function () {
      // uncomment below and update the code to test the property efTotal
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property efTransportation (base name: "ef_transportation")', function () {
      // uncomment below and update the code to test the property efTransportation
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property isBeverage (base name: "is_beverage")', function () {
      // uncomment below and update the code to test the property isBeverage
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property nameEn (base name: "name_en")', function () {
      // uncomment below and update the code to test the property nameEn
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function () {
      // uncomment below and update the code to test the property score
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      var instance = new OpenFoodFactsOpenApi.EcoscoreDataAgribalyse();
      //expect(instance).to.be();
    });

  });

}));