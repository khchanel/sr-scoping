'use strict';

/**
 * @ngdoc module
 * @name srRestService
 * @description
 * # Sor
 * Sor $resource using web service
 *
 * # Project
 * Project $resource using web service
 */

angular.module('srRestService', ['ngResource', 'ngStorage'])
  .constant('SR_API_SERVER', 'http://srconstruction.khchanel.com/api/v1')
  .factory('Sor', ['$resource', '$localStorage', 'SR_API_SERVER',
    function($resource, $localStorage, API_SERVER) {

      return $resource(API_SERVER + '/sor/:SORCode', {
        user: $localStorage.user.name,
        passwd: $localStorage.user.passwd
      });
    }
  ])
  .factory('Project', ['$resource', '$localStorage', 'SR_API_SERVER',
    function($resource, $localStorage, API_SERVER) {
      return $resource(API_SERVER + '/projects/services/projects.svc/GetProjectsMethod/inputStr/:user/:passwd', {
        user: $localStorage.user.name,
        passwd: $localStorage.user.passwd
      });
    }
  ]);
