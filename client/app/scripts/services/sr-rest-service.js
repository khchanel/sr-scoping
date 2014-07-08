'use strict';

/**
 * @ngdoc service
 * @name srRestService.Sor
 * @description
 * # Sor
 * Factory in the srRestService.
 */

angular.module('srRestService', ['ngResource', 'ngStorage'])

  .constant('SR_API_SERVER', 'http://srconstruction.khchanel.com')

  .factory('Sor', ['$resource', '$localStorage', 'SR_API_SERVER',
    function ($resource, $localStorage, SR_API_SERVER) {

      return $resource(SR_API_SERVER + '/sor/:SORCode',
        {
          user: $localStorage.user.name,
          passwd: $localStorage.user.passwd
        });
    }
  ]);
