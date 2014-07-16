'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:ProjCtrl
 * @description
 * # ProjCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('ProjCtrl', function ($scope) {
    $scope.testThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
