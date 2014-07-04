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


    $scope.saveCredentials = function() {
      $scope.$storage.user = angular.copy($scope.user);

      window.jQuery('#save-btn').text('Saved Successfully!');
    };

    $scope.clearCredentials = function() {

      $scope.user = {
        name: '',
        passwd: ''
      };

      delete $scope.$storage.user;
      $scope.$storage.user = angular.copy($scope.user);
    };
  });
