'use strict';

describe('Controller: SorListCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SorlistCtrl = $controller('SorListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of SOR to the scope', function () {
    expect(scope.sors.length).toBe(2);
  });
  it('should set scope.kitchen to KIT1234', function () {
    expect(scope.kitchen[0].code).toBe('KIT1234');
  });
  it('should set scope.living to LIV6668', function () {
    expect(scope.living[0].code).toBe('LIV6668');
  });
});
