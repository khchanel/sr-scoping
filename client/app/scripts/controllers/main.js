'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('MainCtrl', ['$scope','Project', function ($scope, Project) {

    $scope.projects = Project.query();

    $scope.changeColor = function() {
        window.jQuery('#splendid-btn').text('ouchh');
    };
  }]);
