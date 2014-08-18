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

      // special case for numeric zero
      if(input === 0) {
        return 0;
      }

      return (!!input) ? input : 'N/A';
    };
  });
