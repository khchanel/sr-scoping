'use strict';

/**
 * @ngdoc filter
 * @name srScopingApp.filter:notAvailable
 * @function
 * @description
 * # notAvailable
 * Filter in the srScopingApp.
 */
angular.module('srScopingApp')
  .filter('notAvailable', function() {
    return function(input) {
      return (!!input) ? input : 'N/A';
    };
  });
