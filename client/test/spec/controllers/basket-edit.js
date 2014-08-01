'use strict';

describe('Controller: BasketEditCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var BasketEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasketEditCtrl = $controller('BasketEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
