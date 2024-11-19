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
    instance = new OpenFoodFactsOpenApi.TableColumn();
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

  describe('TableColumn', function () {
    it('should create an instance of TableColumn', function () {
      // uncomment below and update the code to test TableColumn
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      expect(instance).to.be.a(OpenFoodFactsOpenApi.TableColumn);
    });

    it('should have the property type (base name: "type")', function () {
      // uncomment below and update the code to test the property type
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function () {
      // uncomment below and update the code to test the property text
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

    it('should have the property textForSmallScreens (base name: "text_for_small_screens")', function () {
      // uncomment below and update the code to test the property textForSmallScreens
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

    it('should have the property style (base name: "style")', function () {
      // uncomment below and update the code to test the property style
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

    it('should have the property columnGroupId (base name: "column_group_id")', function () {
      // uncomment below and update the code to test the property columnGroupId
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

    it('should have the property shownByDefault (base name: "shown_by_default")', function () {
      // uncomment below and update the code to test the property shownByDefault
      var instance = new OpenFoodFactsOpenApi.TableColumn();
      //expect(instance).to.be();
    });

  });

}));
