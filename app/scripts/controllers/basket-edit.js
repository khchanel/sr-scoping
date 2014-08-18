'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:BasketEditCtrl
 * @description
 * # BasketEditCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('BasketEditCtrl', function($scope, $window) {
    $scope.storedTask = $scope.ons.navigator.getCurrentPage().options.taskObj;
    $scope.basket = $scope.ons.navigator.getCurrentPage().options.basketObj;

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

    /**
     * deleteTask()
     * function to delete current task from basket storage
     */
    $scope.deleteTask = function() {
      // find the array index for the current Task in basket.
      var id = $scope.basket.indexOf($scope.storedTask);

      // remove item from array (delete doesnt work)
      $scope.basket.splice(id, 1);

      // navigate back to previous page to avoid double delete
      // (performing delete twice on the same page will delete the next item in array)
      $scope.ons.navigator.popPage();
    };

    /**
     * pop up confirmation before deletion
     */
    $scope.confirmDelete = function() {
      var confirmDelete = $window.confirm('Are you sure you want to delete this task?');

      if (confirmDelete) {
        $scope.deleteTask();
      }
    };
  });
