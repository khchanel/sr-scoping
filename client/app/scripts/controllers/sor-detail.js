'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorDetailCtrl
 * @description
 * # SorDetailCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorDetailCtrl', function ($scope) {
    $scope.sor = $scope.ons.navigator.getCurrentPage().options.sorObj;
    $scope.quantity = null;
  });
