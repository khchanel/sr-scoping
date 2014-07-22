'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorlistCtrl
 * @description
 * # SorlistCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorListCtrl', ['$scope', 'Sor',
    function($scope, Sor) {

      $scope.sors = Sor.query();

      $scope.filterOptions = {
        filterText: ''
      };

      $scope.gridOptions = {
        data: 'sors',

        columnDefs: [{
          field: 'SORCode',
          displayName: 'Code'
        }, {
          field: 'Name',
          displayName: 'Name'
        }, {
          field: 'Price',
          displayName: 'Price',
          cellFilter: 'currency: ""'
        }],

        multiSelect: false,

        filterOptions: $scope.filterOptions
      };

    }
  ]);
