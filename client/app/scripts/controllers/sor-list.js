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

      /* Initial data fetch */
      $scope.query = Sor.query({'page': 1, 'per_page': 15}, function() {
        $scope.sors = $scope.query.data;
        $scope.totalServerItems = $scope.query.total;
      });

      /* define ngGrid configurations */
      $scope.filterOptions = {
        useExternalFilter: false,
        filterText: ''
      };
      $scope.pagingOptions = {
        pageSizes: [15, 30, 50],
        pageSize: 15,
        currentPage: 1
      };

      /* watch for page change */
      $scope.$watch('pagingOptions', function(newVal, oldVal) {

        /* skip if no change */
        if (angular.equals(newVal, oldVal)) {
          return;
        }

        /* fetch data for new page */
        $scope.query = Sor.query({
            'page': newVal.currentPage,
            'per_page': newVal.pageSize
          }, function() {
            $scope.sors = $scope.query.data;
            $scope.totalServerItems = $scope.query.total;
          }
        );
      }, true); // true for object comparison :)


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
        enablePaging: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        showFooter: true,
        filterOptions: $scope.filterOptions
      };
    }
  ]);
