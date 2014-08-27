'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorDetailCtrl
 * @description
 * # SorDetailCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorDetailCtrl', function($scope, $localStorage, Location, ShareProperty) {
    $scope.$storage = $localStorage;
    $scope.projectCode = ShareProperty.get('active_project').Code;

    $scope.sor = $scope.ons.navigator.getCurrentPage().options.sorObj;
    $scope.quantity = 0;
    $scope.comment = '';
    $scope.location = [];

    $scope.locationOptions = Location.query({}, function() {
      $scope.locationOptions.unshift(null);
    });

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
        'location': $scope.location,
        'comment': $scope.comment
      };

      // verify the project has a basket
      if (typeof $scope.$storage.baskets[$scope.projectCode] === 'undefined') {
        $scope.$storage.baskets[$scope.projectCode] = [];
      }

      // add task to basket
      $scope.$storage.baskets[$scope.projectCode].push(task);

      // disable the add button to avoid re-add
      $scope.addBtnText = 'Added';
      $scope.addBtnClass = 'topcoat-button--quiet';
      $scope.saved = true;
    };
  });
