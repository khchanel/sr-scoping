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
    $scope.$storage = $localStorage.$default({
      basket: []
    });

    $scope.basket = $scope.$storage.basket;

    $scope.basket.total = function() {
      var total = 0;

      angular.forEach($scope.basket, function(task) {
        total += task.sor.Price * task.quantity;
      });

      return total;
    };
  });
