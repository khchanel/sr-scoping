'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('LocationCtrl', function ($scope, Location) {
    $scope.locations = Location.query();
  });
