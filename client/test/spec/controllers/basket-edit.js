'use strict';

describe('Controller: BasketEditCtrl', function() {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var BasketEditCtrl,
    scope;


  var testTask = {
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
    'quantity': 7
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    // mock a ons object
    scope.ons = {
      navigator: {
        getCurrentPage: function() {
          return {
            options: {
              taskObj: testTask
            }
          };
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
});
