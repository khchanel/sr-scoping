'use strict';

var API_SERVER = 'http://srconstruction.khchanel.com';

angular.module('srScopingApp.restService', ['ngResource'])
    .factory('Sor', ['$resource',
        function ($resource) {
            return $resource(API_SERVER + '/sor');
        }]);
