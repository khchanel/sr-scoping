'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.changeColor = function() {
        window.jQuery('#splendid-btn').text('ouchh');
    };
  });
