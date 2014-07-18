'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('ProjectCtrl', function ($scope, ShareProperty) {
    $scope.project = ShareProperty.get('active_project');
  });
