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

      $scope.query = Sor.query(function() {
        $scope.sors = $scope.query.data;
      });

      $scope.filterOptions = {
        filterText: ''
      };

      $scope.onRowClickActivated = function(rowItem) {
        var sor = rowItem.entity;
        $scope.ons.navigator.pushPage('views/sor-detail.html', {
          title: 'SOR Task',
          sorObj: sor
        });
      };

      $scope.gridOptions = {
        data: 'sors',

        columnDefs: [{
          field: 'SORCode',
          displayName: 'Code'
        }, {
          field: 'Name',
          displayName: 'Name',
          width: '50%'
        }, {
          field: 'Price',
          displayName: 'Price',
          cellFilter: 'currency: ""'
        }],

        rowTemplate: '<div ng-click="onRowClickActivated(row)"' +
          ' ng-style="{ \'cursor\': row.cursor }"' +
          ' ng-repeat="col in renderedColumns"' +
          ' ng-class="col.colIndex()"' +
          ' class="ngCell {{col.cellClass}}">' +
          '<div class="ngVerticalBar" ng-style="{height: rowHeight}"' +
          ' ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>' +
          '<div ng-cell></div>' +
          '</div>',

        multiSelect: false,
        plugins: [new ngGridFlexibleHeightPlugin()],    // jshint ignore:line
        filterOptions: $scope.filterOptions
      };
    }
  ]);
