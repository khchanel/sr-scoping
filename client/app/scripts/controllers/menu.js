'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('MenuCtrl', function ($scope, $localStorage, Project, ShareProperty) {
    $scope.$storage = $localStorage;

    // For some reason the user $watch below gets executed on startup
    //$scope.projects = Project.query();

    $scope.$watch('$storage.user', function() {
      $scope.projects = Project.query();
    }, true);

    $scope.setActiveProject = function(proj) {
      ShareProperty.set('active_project', proj);
    };
  });
