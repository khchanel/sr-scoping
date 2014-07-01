'use strict';

describe('Controller: SorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SorDetailCtrl = $controller('SorDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
