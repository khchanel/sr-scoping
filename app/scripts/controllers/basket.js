'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketCtrl', function ($scope, $window, $localStorage, ShareProperty) {
    $scope.$storage = $localStorage;
    var project = ShareProperty.get('active_project').Code;

    // fetch a basket for the project
    if (typeof $scope.$storage.baskets[project] === 'undefined') {
      $scope.$storage.baskets[project] = [];
    }

    $scope.basket = $scope.$storage.baskets[project];


    $scope.total = function() {
      var total = 0;

      angular.forEach($scope.basket, function(task) {
        total += task.sor.Price * task.quantity;
      });

      return total;
    };

    $scope.clearBasket = function() {
      $scope.$storage.baskets[project] = [];
      $scope.basket = [];
    };

    $scope.confirmClearBasket = function() {
      var confirm = $window.confirm('Are you sure you want to clear basket?');

      if(confirm) {
        $scope.clearBasket();
      }
    };
  });
