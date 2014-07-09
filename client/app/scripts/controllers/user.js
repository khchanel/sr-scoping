'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('UserCtrl', function ($scope, $localStorage) {

    $scope.$storage = $localStorage;
    $scope.user = angular.copy($scope.$storage.user);


    /**
     * Save user entered login details to persistent storage
     */
    $scope.saveCredentials = function() {
      $scope.$storage.user = angular.copy($scope.user);

      // jQuery is not available in testing
      try {
        window.jQuery('#save-btn').text('Saved Successfully!');
      } catch (err) {
        return;
      }
    };

    /**
     * Clear stored user logins
     */
    $scope.clearCredentials = function() {

      $scope.user = {
        name: '',
        passwd: ''
      };

      delete $scope.$storage.user;
      $scope.$storage.user = angular.copy($scope.user);
    };
  });
