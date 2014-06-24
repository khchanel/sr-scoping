'use strict';

/**
 * @ngdoc overview
 * @name srScopingApp
 * @description
 * # srScopingApp
 *
 * Main module of the application.
 */
angular
  .module('srScopingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'onsen.directives',
    'srScopingApp.restService',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/SorList', {
        templateUrl: 'views/sor-list.html',
        controller: 'SorListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
