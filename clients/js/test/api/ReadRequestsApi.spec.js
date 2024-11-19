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
    instance = new OpenFoodFactsOpenApi.ReadRequestsApi();
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

  describe('ReadRequestsApi', function() {
    describe('getAttributeGroups', function() {
      it('should call getAttributeGroups successfully', function(done) {
        //uncomment below and update the code to test getAttributeGroups
        //instance.getAttributeGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCgiIngredientsPl', function() {
      it('should call getCgiIngredientsPl successfully', function(done) {
        //uncomment below and update the code to test getCgiIngredientsPl
        //instance.getCgiIngredientsPl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCgiNutrientsPl', function() {
      it('should call getCgiNutrientsPl successfully', function(done) {
        //uncomment below and update the code to test getCgiNutrientsPl
        //instance.getCgiNutrientsPl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCgiSuggestPl', function() {
      it('should call getCgiSuggestPl successfully', function(done) {
        //uncomment below and update the code to test getCgiSuggestPl
        //instance.getCgiSuggestPl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPreferences', function() {
      it('should call getPreferences successfully', function(done) {
        //uncomment below and update the code to test getPreferences
        //instance.getPreferences(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductByBarcode', function() {
      it('should call getProductByBarcode successfully', function(done) {
        //uncomment below and update the code to test getProductByBarcode
        //instance.getProductByBarcode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSearch', function() {
      it('should call getSearch successfully', function(done) {
        //uncomment below and update the code to test getSearch
        //instance.getSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
