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
      .when('/sor-detail', {
        templateUrl: 'views/sor-detail.html',
        controller: 'SorDetailCtrl'
      })
      .when('/basket', {
        templateUrl: 'views/basket.html',
        controller: 'BasketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $localStorage) {

    // initialize localStorage
    $localStorage.$default({
      user: {
        name: '',
        passwd: ''
      },
      basket: []
    });

    // handle back button on android
    document.addEventListener("backbutton", function (e) {
        if ($rootScope.ons.navigator.getPages().length > 1) {
            e.preventDefault();
            $rootScope.ons.navigator.popPage();
        } else {
            navigator.app.exitApp();
        }
    }, false);
  });
