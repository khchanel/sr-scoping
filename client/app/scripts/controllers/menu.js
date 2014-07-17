'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('MenuCtrl', function ($scope, Project) {
    $scope.projects = Project.query();
  });
