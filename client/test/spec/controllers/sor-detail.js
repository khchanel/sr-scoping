'use strict';

describe('Controller: SorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorDetailCtrl,
    scope;

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


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {

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

  it ('should show all sor content', function () {
    expect(scope.sor.SORCode).toBe(testSor.SORCode);
  });


  it('should be able to add task to basket', function () {
    expect(scope.$storage.basket).toBeDefined();
    expect(scope.$storage.basket.length).toBe(0);

    var myquantity = 3;
    scope.quantity = myquantity;
    scope.addTask();

    expect(scope.$storage.basket.length).toBe(1);
    expect(scope.$storage.basket[0].sor.SORCode).toBe(testSor.SORCode);
    expect(scope.$storage.basket[0].quantity).toBe(myquantity);

  });

});
