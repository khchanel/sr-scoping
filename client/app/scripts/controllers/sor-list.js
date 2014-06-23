'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorlistCtrl
 * @description
 * # SorlistCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorListCtrl', ['$scope', 'Sor', function ($scope, Sor) {
    $scope.sors = Sor.query();
    $scope.kitchen = Sor.get('KIT1234');
    $scope.living = Sor.get('LIV6668');
  }]);
