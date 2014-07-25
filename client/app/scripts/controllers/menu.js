'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('MenuCtrl', function ($scope, Project, ShareProperty) {
    $scope.projects = Project.query();

    $scope.setActiveProject = function(proj) {
      ShareProperty.set('active_project', proj);
    };
  });
