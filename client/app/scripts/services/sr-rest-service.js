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

  .constant('SR_OLD_SERVER', 'http://120.151.95.114:8080/')

  .factory('Sor', ['$resource', '$localStorage', 'SR_API_SERVER',
    function ($resource, $localStorage, SR_API_SERVER) {

      return $resource(SR_API_SERVER + '/sor/:SORCode',
        {
          user: $localStorage.user.name,
          passwd: $localStorage.user.passwd
        });
    }
  ])
  .factory('Project', ['$resource', '$localStorage', 'SR_OLD_SERVER',
    function ($resource, $localStorage, SR_OLD_SERVER){
      return $resource(SR_OLD_SERVER + 'projects/services/projects.svc/GetProjectsMethod/inputStr/:user/:passwd',
        {
          user:  $localStorage.user.name,
          passwd: $localStorage.user.passwd
        });
    }
  ]);
