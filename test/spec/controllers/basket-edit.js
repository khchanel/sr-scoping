'use strict';

describe('Controller: BasketEditCtrl', function() {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var BasketEditCtrl,
    scope;


  var mockBasketData = [{
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
    'comment': 'need replacement',
    'location': ['AIRL', 'HALL'],
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
    'comment': '',
    'location': [],
    'quantity': 2
  }, {
    'sor': {
      'SORCode': 'MIN18650',
      'Tradecode': '',
      'UomCode': 'Each.',
      'Name': '(Renew Hardwood Tread 250 wide - up to 1.1m long)',
      'LongDescription': 'Remove and dispose of existing and supply and fix hardwood tread 250 wide - up to 1.1m long including Remove and dispose of existing and supply and fix tie bolt.  Minimum finished thickness 38mm.  Tread to have 5mm fall towards external of dwelling.',
      'Status': 'False',
      'Price201213': '9.999999999',
      'Price': '9.999999999',
      'Warranty': '0',
      'Manual': '0',
      'Deleted': '0',
      'Code': '612',
      'Location': '',
      'Photo': ''
    },
    'comment': '',
    'location': [],
    'quantity': 1
  }];

  var testBasket = angular.copy(mockBasketData);
  var testTask = testBasket[0];


  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    // mock a ons object
    scope.ons = {
      navigator: {
        getCurrentPage: function() {
          return {
            options: {
              taskObj: testTask,
              basketObj: testBasket
            }
          };
        },
        popPage: function() {
          // navigate to previous page mock
          return;
        }
      }
    };

    // initalize controller
    BasketEditCtrl = $controller('BasketEditCtrl', {
      $scope: scope
    });
  }));


  it('should have local task and storedTask defined', function() {
    expect(scope.task).toBeDefined();
    expect(scope.storedTask).toBeDefined();

    // verify values
    expect(angular.equals(scope.task, scope.storedTask)).toBe(true);
    expect(angular.equals(scope.storedTask, testTask)).toBe(true);
    expect(scope.task.quantity).toBe(7);
    expect(scope.storedTask.sor.SORCode).toBe('MIN18400');
  });

  it('should have save function defined', function() {
    expect(scope.saveTask).toBeDefined();
  });

  it('should only modify stored data when save function is executed', function() {
    scope.task.quantity = testTask + 10;

    expect(angular.equals(scope.task, scope.storedTask)).toBe(false);
  });


  it('should be able to delete stored task from basket', function() {
    expect(scope.basket.length).toBe(3);

    scope.deleteTask();

    expect(scope.basket.length).toBe(2);

    // mockBasketData contains the original
    // testBasket should be referenced by the scope.basket so they are the same thing
    expect(angular.equals(scope.basket[1], mockBasketData[1])).toBe(false);
    expect(testBasket.length).toBe(2);
  });

  describe('BasketEditCtrl: using window object', function() {
    var mywindow;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($window, $controller) {
      mywindow = $window;

      // mock cancel confirmation
      spyOn(mywindow, 'confirm').and.returnValue(false);

      BasketEditCtrl = $controller('BasketEditCtrl', {
        $scope: scope,
        $window: mywindow
      });
    }));


    it('should confirm before delete', function() {
      /* NOTE:
       * for some reason testBasket is not reset to original
       * the testBasket here is in the state of the previous test (with 1 item deleted)
       */

      var basketSize = testBasket.length;

      expect(scope.basket.length).toBe(basketSize);

      // run clear confirm
      scope.confirmDelete();
      expect(mywindow.confirm).toHaveBeenCalled();

      expect(scope.basket.length).toBe(basketSize);
    });
  });


});
