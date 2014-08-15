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

      /* ngGrid configurations */
      $scope.filterOptions = {
        useExternalFilter: false,
        filterText: ''
      };

      $scope.pagingOptions = {
        pageSizes: [15, 30, 50],
        pageSize: 15,
        currentPage: 1
      };

      $scope.gridOptions = {
        data: 'sors',

        columnDefs: [{
          field: 'SORCode',
          displayName: 'Code'
        }, {
          field: 'Name',
          displayName: 'Short description',
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


      /**
       * Query sor data web service
       */
      $scope.fetch = function() {
        $scope.query = Sor.query({
            'page': $scope.pagingOptions.currentPage,
            'per_page': $scope.pagingOptions.pageSize,
            'keyword': $scope.filterOptions.filterText
          }, function() {
            $scope.sors = $scope.query.data;
            $scope.totalServerItems = $scope.query.total;

            // update list start end
            $scope.updateStartEnd();
          });
      };

      /**
       * calculate list start and end
       */
      $scope.updateStartEnd = function() {
        var size = $scope.pagingOptions.pageSize;
        var page = $scope.pagingOptions.currentPage;
        var total = $scope.query.total;
        var start = 0;
        var end = 0;

        if ($scope.query.total > 0) {
          start = size * (page - 1) + 1;
          end = size * page;
          end = total > end ? end : total; // use total if total is less than end
        }

        $scope.showing.start = start;
        $scope.showing.end = end;
      }


      /* Row click handler */
      $scope.onRowClickActivated = function(rowItem) {
        var sor = rowItem.entity;
        $scope.ons.navigator.pushPage('views/sor-detail.html', {
          title: 'SOR Task',
          sorObj: sor
        });
      };


      /* watch for page change */
      $scope.$watch('pagingOptions', function(newVal, oldVal) {

        /* skip if no change */
        if (angular.equals(newVal, oldVal)) {
          return;
        }

        /* query web service */
        $scope.fetch();

      }, true); // true for object comparison :)


      /* watch for search filter change */
      $scope.$watch('filterOptions.filterText', function(newVal, oldVal) {

        /* skip no change */
        if (newVal === oldVal) {
          return;
        }

        /* query web service */
        $scope.fetch();

      });


      /* Main */
      (function() {
        $scope.showing = {
          start: 0,
          end: 0
        };

        $scope.fetch();
      })();

    }
  ]);
