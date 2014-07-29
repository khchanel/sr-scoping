'use strict';

describe('Controller: SorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorDetailCtrl,
    scope,
    ShareProperty;

  var testSor = {
    SORCode: 'MIN18350',
    Tradecode: '',
    UomCode: 'm.',
    Name: '(Renew strip flooring up to 6 metres)',
    LongDescription: 'Remove and dispose of existing and supply and fix strip flooring up to 6 metres.  Hardwood\/Cypress up to 100mm wide.  Staggered joints - Each room.',
    Status: 'False',
    Price201213: '9.999999999',
    Price: '9.999999999',
    Warranty: '0',
    Manual: '0',
    Deleted: '0',
    Code: '606',
    Location: 'All,BED1 ,HALL, AIRL',
    Photo: '~\\Files\\SOR\\1c8dbe4709ae44a388f6dee379a8f0bc.jpg'
  };

  var testProject = {
    'Address': '1\/69-71 Isabella Street, PARRAMATTA, NSW, 2150',
    'Client': 'New South Wales Land & Housing Corporation',
    'ClientRef': '241013',
    'Code': 59005,
    'ContractorRef': null,
    'Coordinator': 'Nelson Chan',
    'Duration': null,
    'Finish': '03\/07\/2014',
    'FinishDate': null,
    'Instructions': '',
    'MasterCode': null,
    'SLA': null,
    'Start': '25\/05\/2014',
    'StartDate': null,
    'Status': 'New',
    'SubClient': null,
    'TaskType': null
  };


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _ShareProperty_) {

    ShareProperty = _ShareProperty_;
    ShareProperty.set('active_project', testProject);

    spyOn(ShareProperty, 'get').and.callThrough();

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
        }
      }
    };

    // intantial controller
    SorDetailCtrl = $controller('SorDetailCtrl', {
      $scope: scope
    });
  }));

  it('should have active project code set', function() {
    expect(scope.projectCode).toBeDefined();
    expect(scope.projectCode).toBe(testProject.Code);
    expect(ShareProperty.get).toHaveBeenCalledWith('active_project');
  });

  it ('should show all sor content', function () {
    expect(scope.sor.SORCode).toBe(testSor.SORCode);
  });


  it('should contain quantity', function() {
    expect(scope.quantity).toBeDefined();
  });


  it('should contain comment', function() {
    expect(scope.comment).toBeDefined();
  });

  it('should have $storage.baskets defined', function() {
    expect(scope.$storage.baskets).toBeDefined();
    expect(typeof scope.$storage.baskets).toBe('object');
  });


  it('should be able to add task to basket', function () {
    expect(scope.$storage.baskets[testProject.Code]).not.toBeDefined();

    var myquantity = 3;
    var mycomment = 'need special care';

    scope.quantity = myquantity;
    scope.comment = mycomment;
    scope.addTask();

    expect(ShareProperty.get).toHaveBeenCalledWith('active_project');
    expect(scope.projectCode).toBe(testProject.Code);

    expect(scope.$storage.baskets[testProject.Code].length).toBe(1);
    expect(scope.$storage.baskets[testProject.Code][0].sor.SORCode).toBe(testSor.SORCode);
    expect(scope.$storage.baskets[testProject.Code][0].quantity).toBe(myquantity);
    expect(scope.$storage.baskets[testProject.Code][0].comment).toBe(mycomment);

  });

});
