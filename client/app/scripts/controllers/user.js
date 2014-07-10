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
    $scope.saveBtnTxt = 'Save';

    /**
     * Update save button text when fields updated
     */
    $scope.$watch('user', function () {
      $scope.saveBtnTxt = 'Save';
    }, true);


    /**
     * Save user entered login details to persistent storage
     */
    $scope.saveCredentials = function() {
      $scope.$storage.user = angular.copy($scope.user);

      $scope.saveBtnTxt = 'Saved Successfully!';
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
