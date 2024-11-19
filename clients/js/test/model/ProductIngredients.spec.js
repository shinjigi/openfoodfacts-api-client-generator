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
    instance = new OpenFoodFactsOpenApi.ProductIngredients();
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

  describe('ProductIngredients', function() {
    it('should create an instance of ProductIngredients', function() {
      // uncomment below and update the code to test ProductIngredients
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.ProductIngredients);
    });

    it('should have the property additives_tags (base name: "additives_tags")', function() {
      // uncomment below and update the code to test the property additives_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property allergens (base name: "allergens")', function() {
      // uncomment below and update the code to test the property allergens
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property allergens_lc (base name: "allergens_lc")', function() {
      // uncomment below and update the code to test the property allergens_lc
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property allergens_hierarchy (base name: "allergens_hierarchy")', function() {
      // uncomment below and update the code to test the property allergens_hierarchy
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property allergens_tags (base name: "allergens_tags")', function() {
      // uncomment below and update the code to test the property allergens_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients (base name: "ingredients")', function() {
      // uncomment below and update the code to test the property ingredients
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_analysis (base name: "ingredients_analysis")', function() {
      // uncomment below and update the code to test the property ingredients_analysis
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_analysis_tags (base name: "ingredients_analysis_tags")', function() {
      // uncomment below and update the code to test the property ingredients_analysis_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_from_or_that_may_be_from_palm_oil_n (base name: "ingredients_from_or_that_may_be_from_palm_oil_n")', function() {
      // uncomment below and update the code to test the property ingredients_from_or_that_may_be_from_palm_oil_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_from_palm_oil_n (base name: "ingredients_from_palm_oil_n")', function() {
      // uncomment below and update the code to test the property ingredients_from_palm_oil_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_from_palm_oil_tags (base name: "ingredients_from_palm_oil_tags")', function() {
      // uncomment below and update the code to test the property ingredients_from_palm_oil_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_hierarchy (base name: "ingredients_hierarchy")', function() {
      // uncomment below and update the code to test the property ingredients_hierarchy
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_n (base name: "ingredients_n")', function() {
      // uncomment below and update the code to test the property ingredients_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_n_tags (base name: "ingredients_n_tags")', function() {
      // uncomment below and update the code to test the property ingredients_n_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_original_tags (base name: "ingredients_original_tags")', function() {
      // uncomment below and update the code to test the property ingredients_original_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_percent_analysis (base name: "ingredients_percent_analysis")', function() {
      // uncomment below and update the code to test the property ingredients_percent_analysis
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_sweeteners_n (base name: "ingredients_sweeteners_n")', function() {
      // uncomment below and update the code to test the property ingredients_sweeteners_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_non_nutritive_sweeteners_n (base name: "ingredients_non_nutritive_sweeteners_n")', function() {
      // uncomment below and update the code to test the property ingredients_non_nutritive_sweeteners_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_tags (base name: "ingredients_tags")', function() {
      // uncomment below and update the code to test the property ingredients_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_lc (base name: "ingredients_lc")', function() {
      // uncomment below and update the code to test the property ingredients_lc
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_text (base name: "ingredients_text")', function() {
      // uncomment below and update the code to test the property ingredients_text
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_text_with_allergens (base name: "ingredients_text_with_allergens")', function() {
      // uncomment below and update the code to test the property ingredients_text_with_allergens
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_that_may_be_from_palm_oil_n (base name: "ingredients_that_may_be_from_palm_oil_n")', function() {
      // uncomment below and update the code to test the property ingredients_that_may_be_from_palm_oil_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_that_may_be_from_palm_oil_tags (base name: "ingredients_that_may_be_from_palm_oil_tags")', function() {
      // uncomment below and update the code to test the property ingredients_that_may_be_from_palm_oil_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_with_specified_percent_n (base name: "ingredients_with_specified_percent_n")', function() {
      // uncomment below and update the code to test the property ingredients_with_specified_percent_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_with_specified_percent_sum (base name: "ingredients_with_specified_percent_sum")', function() {
      // uncomment below and update the code to test the property ingredients_with_specified_percent_sum
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_with_unspecified_percent_n (base name: "ingredients_with_unspecified_percent_n")', function() {
      // uncomment below and update the code to test the property ingredients_with_unspecified_percent_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property ingredients_with_unspecified_percent_sum (base name: "ingredients_with_unspecified_percent_sum")', function() {
      // uncomment below and update the code to test the property ingredients_with_unspecified_percent_sum
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property known_ingredients_n (base name: "known_ingredients_n")', function() {
      // uncomment below and update the code to test the property known_ingredients_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins (base name: "origins")', function() {
      // uncomment below and update the code to test the property origins
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins_hierarchy (base name: "origins_hierarchy")', function() {
      // uncomment below and update the code to test the property origins_hierarchy
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins_lc (base name: "origins_lc")', function() {
      // uncomment below and update the code to test the property origins_lc
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property origins_tags (base name: "origins_tags")', function() {
      // uncomment below and update the code to test the property origins_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property traces (base name: "traces")', function() {
      // uncomment below and update the code to test the property traces
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property traces_hierarchy (base name: "traces_hierarchy")', function() {
      // uncomment below and update the code to test the property traces_hierarchy
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property traces_lc (base name: "traces_lc")', function() {
      // uncomment below and update the code to test the property traces_lc
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property traces_tags (base name: "traces_tags")', function() {
      // uncomment below and update the code to test the property traces_tags
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

    it('should have the property unknown_ingredients_n (base name: "unknown_ingredients_n")', function() {
      // uncomment below and update the code to test the property unknown_ingredients_n
      //var instance = new OpenFoodFactsOpenApi.ProductIngredients();
      //expect(instance).to.be();
    });

  });

}));