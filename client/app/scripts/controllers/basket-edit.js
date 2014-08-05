'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketEditCtrl
 * @description
 * # BasketEditCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketEditCtrl', function ($scope, $localStorage, ShareProperty) {
    $scope.$storage = $localStorage;
    $scope.projectCode = ShareProperty.get('active_project').Code;

    $scope.storedTask = $scope.ons.navigator.getCurrentPage().options.taskObj;

    // use a local copy of task for draft
    $scope.task = angular.copy($scope.storedTask);

    $scope.saveBtnClass = 'topcoat-button';
    $scope.saveBtnText = 'Save';
    $scope.saved = false;


    /**
     * saveTask()
     * function to save task to basket storage
     */
    $scope.saveTask = function() {

      // set updated task data
      $scope.storedTask.comment = $scope.task.comment;
      $scope.storedTask.quantity = $scope.task.quantity;

      // disable the save button to avoid re-saving
      $scope.saveBtnText = 'Saved!';
      $scope.saveBtnClass = 'topcoat-button--quiet';
      $scope.saved = true;
    };
  });
