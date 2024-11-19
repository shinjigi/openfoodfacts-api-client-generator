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
    instance = new OpenFoodFactsOpenApi.ImageRole();
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

  describe('ImageRole', function() {
    it('should create an instance of ImageRole', function() {
      // uncomment below and update the code to test ImageRole
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be.a(OpenFoodFactsOpenApi.ImageRole);
    });

    it('should have the property angle (base name: "angle")', function() {
      // uncomment below and update the code to test the property angle
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property coordinates_image_size (base name: "coordinates_image_size")', function() {
      // uncomment below and update the code to test the property coordinates_image_size
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property geometry (base name: "geometry")', function() {
      // uncomment below and update the code to test the property geometry
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property imgid (base name: "imgid")', function() {
      // uncomment below and update the code to test the property imgid
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property normalize (base name: "normalize")', function() {
      // uncomment below and update the code to test the property normalize
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property rev (base name: "rev")', function() {
      // uncomment below and update the code to test the property rev
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property sizes (base name: "sizes")', function() {
      // uncomment below and update the code to test the property sizes
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property white_magic (base name: "white_magic")', function() {
      // uncomment below and update the code to test the property white_magic
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property x1 (base name: "x1")', function() {
      // uncomment below and update the code to test the property x1
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property x2 (base name: "x2")', function() {
      // uncomment below and update the code to test the property x2
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property y1 (base name: "y1")', function() {
      // uncomment below and update the code to test the property y1
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

    it('should have the property y2 (base name: "y2")', function() {
      // uncomment below and update the code to test the property y2
      //var instance = new OpenFoodFactsOpenApi.ImageRole();
      //expect(instance).to.be();
    });

  });

}));
