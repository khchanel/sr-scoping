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
    /*
    $http.get('http://120.151.95.114:8080/projects/services/projects.svc/GetProjectsMethod/inputStr/Nelson/Nelson@2014').
        success(function(data) {
            $scope.projects = data;
        });
    */

    $scope.projects = Project.query();

    $scope.changeColor = function() {
        window.jQuery('#splendid-btn').text('ouchh');
    };
  }]);
