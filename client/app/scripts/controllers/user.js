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

    $scope.username = $scope.$storage.username;
    $scope.userpass = $scope.$storage.userpass;


    $scope.saveCredentials = function() {
      $scope.$storage.username = $scope.username;
      $scope.$storage.userpass = $scope.userpass;

      window.jQuery('#save-btn').text('Saved Successfully!');
    };

    $scope.clearCredentials = function() {
      delete $scope.$storage.username;
      delete $scope.$storage.userpass;

      $scope.username = null;
      $scope.userpass = null;
    };
  });
