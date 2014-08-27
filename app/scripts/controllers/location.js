'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('LocationCtrl', function ($scope) {
    $scope.locations = [
      'AIRL',
      'HALL',
      'BED1'
    ];
  });
