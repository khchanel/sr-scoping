'use strict';

describe('Controller: BasketCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var BasketCtrl,
    scope,
    ShareProperty;

  // data used for testing
  // note that the SOR price has been modified from original
  var testTasks = [
    {
      'sor': {
        'SORCode': 'MIN18400',
        'Tradecode': '',
        'UomCode': 'm2.',
        'Name': '(Renew Cyprus flooring over 6.0lm ? additional to MIN18350)',
        'LongDescription': 'Remove and dispose of existing and supply and fix new Cypress flooring over 6 lineal metres per separate room in addition to MIN18350.  Nails to be punched and filled - Staggered joints. Cypress Pine.',
        'Status': 'False',
        'Price201213': '9',
        'Price': '9',
        'Warranty': '0',
        'Manual': '0',
        'Deleted': '0',
        'Code': '607',
        'Location': 'AIRL',
        'Photo': ''
      },
      'quantity': 7
    }, {
      'sor': {
        'SORCode': 'MIN18750',
        'Tradecode': '',
        'UomCode': 'Post.',
        'Name': '(Renew Newel Post including concreting up to 1.5metres)',
        'LongDescription': 'Remove and dispose of existing and supply and fix newel post including concreting - painted to match, 1 coat sealer, and two finish coats.  Minimum 100 x 100mm D.A.R. Hardwood - up to 1.5 metres.  Includes refixing of any existing rails, bolts etc.',
        'Status': 'False',
        'Price201213': '10',
        'Price': '10',
        'Warranty': '0',
        'Manual': '0',
        'Deleted': '0',
        'Code': '614',
        'Location': '',
        'Photo': ''
      },
      'quantity': 2
    }];

  var testProject = {
    'Address': '1\/69-71 Isabella Street, PARRAMATTA, NSW, 2150',
    'Client': 'New South Wales Land & Housing Corporation',
    'ClientRef': '241013',
    'Code': 59008,
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
    BasketCtrl = $controller('BasketCtrl', {
      $scope: scope
    });
  }));

  it('should have instantiated basket', function () {
    expect(ShareProperty.get).toHaveBeenCalledWith('active_project');
    expect(scope.basket).toBeDefined();
    expect(scope.basket.length).toBe(0);
  });

  it('should be able to calculate total', function () {
    // prepare test data in basket
    scope.basket.push.apply(scope.basket, testTasks);
    expect(scope.basket.length).toBe(2);

    // verify the basket after append
    expect(scope.basket[0].sor.SORCode).toBe('MIN18400');
    expect(scope.basket[1].sor.SORCode).toBe(testTasks[1].sor.SORCode);

    // check total
    expect(scope.total()).toBe(83); // do the math on testTasks sum(price * quantity)
    expect(scope.total()).toBe(
      testTasks[0].sor.Price * testTasks[0].quantity +
        testTasks[1].sor.Price * testTasks[1].quantity
    );
  });

  it('total should return zero if basket has no item', function() {
    expect(scope.basket.length).toBe(0);
    expect(scope.total()).toBe(0);
  });


  it('should be able to clear basket', function () {
    scope.basket.push.apply(scope.basket, testTasks);
    expect(scope.basket.length).toBe(2);

    scope.clearBasket();

    expect(scope.basket.length).toBe(0);
  });


  describe('BasketCtrl: using window object', function() {
    var mywindow;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($window, $controller) {
      mywindow = $window;

      // mock cancel confirmation
      spyOn(mywindow, 'confirm').and.returnValue(false);

      BasketCtrl = $controller('BasketCtrl', {
        $scope: scope,
        $window: mywindow
      });
    }));

    it('should confirm before clearing basket', function() {
      // prepare some items in basket
      scope.basket.push.apply(scope.basket, testTasks);
      expect(scope.basket.length).toBe(testTasks.length);

      // run clear confirm
      scope.confirmClearBasket();
      expect(mywindow.confirm).toHaveBeenCalled();

      expect(scope.basket.length).toBe(testTasks.length);
    });
  });
});
