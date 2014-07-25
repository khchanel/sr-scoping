'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketCtrl', function ($scope, $localStorage, ShareProperty) {
    $scope.$storage = $localStorage;

    var projectCode = ShareProperty.get('active_project').Code;
    if (!$scope.$storage.baskets[projectCode]) {
      $scope.$storage.baskets[projectCode] = [];
    }
    $scope.basket = $scope.$storage.baskets[projectCode];


    $scope.total = function() {
      var total = 0;

      angular.forEach($scope.basket, function(task) {
        total += task.sor.Price * task.quantity;
      });

      return total;
    };

    $scope.clearBasket = function() {
      $scope.$storage.baskets[projectCode] = [];
      $scope.basket = [];
    };
  });
