'use strict';

angular.module('srScopingApp.restService', ['ngResource'])
    .factory('Sor', ['$resource',
        function ($resource) {
            return $resource('http://khchanel.com:8080/sor');
            //return $resource('scripts/sors.json');
        }]);
