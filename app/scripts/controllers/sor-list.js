'use strict';

/**
 * @ngdoc function
 * @name srScopingApp.controller:SorlistCtrl
 * @description
 * # SorlistCtrl
 * Controller of the srScopingApp
 */
angular.module('srScopingApp')
  .controller('SorListCtrl', ['$scope', '$timeout', 'Sor',
    function($scope, $timeout, Sor) {

      /* ngGrid configurations */
      $scope.filterOptions = {
        useExternalFilter: false,
        filterText: ''
      };

      $scope.pagingOptions = {
        pageSizes: [10, 25, 50],
        pageSize: 10,
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
            'location': $scope.location,
            'keyword': $scope.filterOptions.filterText
          }, function() {
            $scope.sors = $scope.query.data;
            $scope.totalServerItems = $scope.query.total;
            $scope.showing.start = $scope.query.from;
            $scope.showing.end = $scope.query.to;
          });
      };


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
      var filterTextTimeout;
      $scope.$watch('filterOptions.filterText', function(newVal, oldVal) {

        /* skip no change */
        if (newVal === oldVal) {
          return;
        }

        /* cancel previous timeout promise */
        if (filterTextTimeout) {
          $timeout.cancel(filterTextTimeout);
        }

        /* make timeout action*/
        filterTextTimeout = $timeout(function() {
          /* query web service */
          $scope.fetch();

        }, 500); // delay in ms
      });


      /* Main */
      (function() {
        $scope.showing = {
          start: 0,
          end: 0
        };
        $scope.location = $scope.ons.navigator.getCurrentPage().options.location;

        $scope.fetch();
      })();

    }
  ]);
