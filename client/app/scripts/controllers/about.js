'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
