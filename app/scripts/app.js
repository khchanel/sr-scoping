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
    'ngGrid',
    'onsen.directives',
    'truncate',
    'srRestService',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/basket-edit', {
        templateUrl: 'views/basket-edit.html',
        controller: 'BasketEditCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
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
      baskets: {}
    });

    // handle back button on android
    document.addEventListener('backbutton', function (e) {
        if ($rootScope.ons.navigator.getPages().length > 1) {
            e.preventDefault();
            $rootScope.ons.navigator.popPage();
        } else {
            var confirmExit = window.confirm('Quit app?');

            if (confirmExit) {
              navigator.app.exitApp();
            }
        }
    }, false);
  });
