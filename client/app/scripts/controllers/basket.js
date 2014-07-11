'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;

    $scope.total = function() {
      var total = 0;

      angular.forEach($scope.$storage.basket, function(task) {
        total += task.sor.Price * task.quantity;
      });

      return total;
    };

    $scope.clearBasket = function() {
      delete $scope.$storage.basket;
      $scope.$storage.basket = [];
    };
  });
