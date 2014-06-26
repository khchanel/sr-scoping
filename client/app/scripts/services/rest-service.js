'use strict';

angular.module('srScopingApp.restService', ['ngResource'])
    .factory('Sor', ['$resource',
        function ($resource) {
            return $resource('http://srconstruction.khchanel.com/sor');
        }]);
