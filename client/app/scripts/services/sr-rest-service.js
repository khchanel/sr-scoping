'use strict';

/**
 * @ngdoc service
 * @name SrRestService.Sor
 * @description
 * # Sor
 * Factory in the SrRestService.
 */
angular.module('SrRestService', ['ngResource'])
  .factory('Sor', ['$resource',
    function ($resource) {
      var API_SERVER = 'http://srconstruction.khchanel.com';

      return $resource(API_SERVER + '/sor/:SORCode');
    }
  ]);
