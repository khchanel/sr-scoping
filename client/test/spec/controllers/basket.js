'use strict';

describe('Controller: BasketCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var BasketCtrl,
    scope;

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

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasketCtrl = $controller('BasketCtrl', {
      $scope: scope
    });
  }));

  it('should have instantiated $storage.basket', function () {
    expect(scope.$storage.basket).toBeDefined();
    expect(scope.$storage.basket.length).toBe(0);
  });

  it('should be able to calculate total', function () {
    scope.$storage.basket.push.apply(scope.$storage.basket, testTasks);
    expect(scope.$storage.basket.length).toBe(2);

    // verify the basket after append
    expect(scope.$storage.basket[0].sor.SORCode).toBe('MIN18400');
    expect(scope.$storage.basket[1].sor.SORCode).toBe(testTasks[1].sor.SORCode);

    // check total
    expect(scope.total()).toBe(83);
    expect(scope.total()).toBe(
      testTasks[0].sor.Price * testTasks[0].quantity +
        testTasks[1].sor.Price * testTasks[1].quantity
    );
  });

  it('total should return zero if basket has no item', function() {
    expect(scope.$storage.basket.length).toBe(0);
    expect(scope.total()).toBe(0);
  });


  it('should be able to clear basket', function () {
    scope.$storage.basket.push.apply(scope.$storage.basket, testTasks);
    expect(scope.$storage.basket.length).toBe(2);

    scope.clearBasket();

    expect(scope.$storage.basket.length).toBe(0);
  });
});
