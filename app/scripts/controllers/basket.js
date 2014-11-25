'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketCtrl', function ($scope, $window, $http, $localStorage, ShareProperty, SR_API_SERVER) {
    $scope.$storage = $localStorage;
    var project = ShareProperty.get('active_project').Code;
    $scope.project = project;

    // fetch a basket for the project
    if (typeof $scope.$storage.baskets[project] === 'undefined') {
      $scope.$storage.baskets[project] = [];
    }

    $scope.basket = $scope.$storage.baskets[project];
    $scope.checkoutTxt = 'Checkout';


    /**
     * Calculate total price of all basket items
     */
    $scope.total = function() {
      var total = 0;

      angular.forEach($scope.basket, function(task) {
        total += task.sor.Price * task.quantity;
      });

      return total;
    };


    /**
     * Project checkout
     */
    $scope.checkout = function() {

      // prepare basket data for checkout
      var checkoutBasket = [];

      angular.forEach($scope.basket, function(task) {
        // convert locations object to code string array
        var locationArr = [];
        angular.forEach(task.location, function(loc) {
          locationArr.push(loc.Code);
        });

        // create ScopeTask object to be compatible with web service
        var scopeTask = {
          SorCode: task.sor.SORCode,
          Quantity: task.quantity,
          UnitPrice: task.sor.Price,
          Locations: locationArr,
          Comment: task.comment
        };

        checkoutBasket.push(scopeTask);
      });

      // Invoke webservice to save basket:
      var endpoint = SR_API_SERVER + '/project/' + $scope.project + '/scoping-basket';
      $http.post(endpoint, {Tasks: checkoutBasket})
        .success(function() {
          $scope.checkoutTxt = 'Request submitted!';
        })
        .error(function() {
          $scope.checkoutTxt = 'Request failed!';
        });

    };


    /**
     * Clear everything in project basket
     */
    $scope.clearBasket = function() {
      $scope.$storage.baskets[project] = [];
      $scope.basket = [];
    };


    /**
     * Confirmation window for clearing basket
     */
    $scope.confirmClearBasket = function() {
      var confirm = $window.confirm('Are you sure you want to clear basket?');

      if(confirm) {
        $scope.clearBasket();
      }
    };


    /**
     * Confirmation for project checkout
     */
    $scope.confirmCheckout = function() {
      var confirm = $window.confirm('Are you sure you want to checkout this project?');

      if(confirm) {
        $scope.checkout();
      }
    };
  });
