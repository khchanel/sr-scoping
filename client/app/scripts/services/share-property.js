'use strict';

/**
 * @ngdoc service
 * @name srScopingApp.ShareProperty
 * @description
 * # ShareProperty
 * Service in the srScopingApp.
 */
angular.module('srScopingApp')
  .service('ShareProperty', function ShareProperty() {

    var _store = {};

    return {
      get: function(key) {
        return _store[key];
      },

      set: function(key, value) {
        _store[key] = value;
      }
    };
  });
