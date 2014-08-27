'use strict';

describe('Controller: LocationCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var LocationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationCtrl = $controller('LocationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of locations to the scope', function () {
    expect(scope.locations).toBeDefined();
    expect(scope.locations instanceof Array).toBe(true);
  });
});
