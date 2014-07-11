'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorDetailCtrl
 * @description
 * # SorDetailCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorDetailCtrl', function($scope, $localStorage) {
    $scope.$storage = $localStorage;

    $scope.sor = $scope.ons.navigator.getCurrentPage().options.sorObj;
    $scope.quantity = 0;
    $scope.comment = '';

    $scope.addBtnClass = 'topcoat-button';
    $scope.addBtnText = 'Add';
    $scope.saved = false;


    /**
     * addTask()
     * function to add task to basket storage
     */
    $scope.addTask = function() {

      // set task data
      var task = {
        'sor': $scope.sor,
        'quantity': $scope.quantity,
        'comment': $scope.comment
      };

      // add task to basket
      $scope.$storage.basket.push(task);

      // disable the add button to avoid re-add
      $scope.addBtnText = 'Added';
      $scope.addBtnClass = 'topcoat-button--quiet';
      $scope.saved = true;
    };
  });
