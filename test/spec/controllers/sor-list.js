'use strict';

describe('Controller: SorListCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorlistCtrl,
    scope,
    $httpBackend;

  var testSor =
    [{
      'SORCode': 'MIN18350',
      'Tradecode': '',
      'UomCode': 'm.',
      'Name': '(Renew strip flooring up to 6 metres)',
      'LongDescription': 'Remove and dispose of existing and supply and fix strip flooring up to 6 metres.  Hardwood\/Cypress up to 100mm wide.  Staggered joints - Each room.',
      'Status': 'False',
      'Price201213': '9.999999999',
      'Price': '9.999999999',
      'Warranty': '0',
      'Manual': '0',
      'Deleted': '0',
      'Code': '606',
      'Location': 'All,BED1 ,HALL, AIRL',
      'Photo': '~\\Files\\SOR\\1c8dbe4709ae44a388f6dee379a8f0bc.jpg'
    }, {
      'SORCode': 'MIN18400',
      'Tradecode': '',
      'UomCode': 'm2.',
      'Name': '(Renew Cyprus flooring over 6.0lm ? additional to MIN18350)',
      'LongDescription': 'Remove and dispose of existing and supply and fix new Cypress flooring over 6 lineal metres per separate room in addition to MIN18350.  Nails to be punched and filled - Staggered joints. Cypress Pine.',
      'Status': 'False',
      'Price201213': '9.999999999',
      'Price': '9.999999999',
      'Warranty': '0',
      'Manual': '0',
      'Deleted': '0',
      'Code': '607',
      'Location': 'AIRL',
      'Photo': ''
    }, {
      "SORCode": "MIN18700",
      "Tradecode": "",
      "UomCode": "Each.",
      "Name": "(Refix\/tighten loose bolts to step treads)",
      "LongDescription": "Refix\/tighten loose bolts to step treads.",
      "Status": "False",
      "Price201213": "6.224672019",
      "Price": "6.351655328",
      "Warranty": "0",
      "Manual": "0",
      "Deleted": "0",
      "Code": "613",
      "Location": "",
      "Photo": ""
    }];

  var mockResource = {
    'total': 3,
    'per_page': 2,
    'current_page': 1,
    'last_page': 2,
    'from': 1,
    'to': 2,
    'data': testSor
  };

  var mockResourcePage2 = {
    'total': 3,
    'per_page': 2,
    'current_page': 2,
    'last_page': 2,
    'from': 3,
    'to': 3,
    'data': testSor
  };



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, SR_API_SERVER) {

    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(new RegExp(SR_API_SERVER + '/sor?.*page=2.*'))
      .respond(mockResourcePage2);
    $httpBackend.expectGET(new RegExp(SR_API_SERVER + '/sor?.*'))
      .respond(mockResource);

    scope = $rootScope.$new();

    // mock a ons object
    scope.ons = {
      navigator: {
        getCurrentPage: function() {
          return {
            options: {
              sorObj: testSor
            }
          };
        },
        pushPage: function() {
          return true;
        }
      }
    };

    spyOn(scope.ons.navigator, 'pushPage').and.callThrough();

    SorlistCtrl = $controller('SorListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of SOR to the scope', function () {
    $httpBackend.flush();
    expect(scope.sors.length).toBe(testSor.length);
  });
  it('should set scope.sors[0].SORCode to MIN18350', function () {
    $httpBackend.flush();
    expect(scope.sors[0].SORCode).toBe('MIN18350');
  });
  it('should set scope.sors[1].SORCode to MIN18400', function () {
    $httpBackend.flush();
    expect(scope.sors[1].SORCode).toBe('MIN18400');
  });

  it('should be able to change page on click', function() {
    scope.onRowClickActivated({entity: testSor[0]});
    expect(scope.ons.navigator.pushPage).toHaveBeenCalled();
  });

  it('should have defined fetch function', function() {
    expect(scope.fetch).toBeDefined();
  });

  it('should have defined ngGrid pagingOptions', function() {
    expect(scope.pagingOptions).toBeDefined();
    expect(scope.pagingOptions.pageSize).toBe(10);
    expect(scope.pagingOptions.currentPage).toBe(1);
  });

  it('should have defined ngGrid filterOptions', function() {
    expect(scope.filterOptions).toBeDefined();
    expect(scope.filterOptions.filterText).toBeDefined();
    expect(scope.filterOptions.useExternalFilter).toBe(false);
  });

  it('shoudl have defined major ngGrid configuration', function() {
    $httpBackend.flush();
    expect(scope.sors).toBeDefined();

    expect(scope.gridOptions).toBeDefined();
    expect(scope.gridOptions.data).toBe('sors');

    // pagination
    expect(scope.gridOptions.enablePaging).toBe(true);
    expect(scope.gridOptions.pagingOptions === scope.pagingOptions).toBe(true);

    // filter
    expect(scope.gridOptions.filterOptions === scope.filterOptions).toBe(true);
  });

  it('should be able to change page', function() {
    scope.pagingOptions.pageSize = 2;

    // page 1
    scope.pagingOptions.currentPage = 1;
    $httpBackend.flush();
    expect(scope.totalServerItems).toBe(3);
    expect(scope.pagingOptions.currentPage).toBe(1);
    expect(scope.showing.start).toBe(1);
    expect(scope.showing.end).toBe(2);

    // page 2
    scope.pagingOptions.currentPage = 2;
    $httpBackend.flush();
    expect(scope.totalServerItems).toBe(3);
    expect(scope.pagingOptions.currentPage).toBe(2);
    expect(scope.showing.start).toBe(3);
    expect(scope.showing.end).toBe(3);
  });
});
