'use strict';

describe('Controller: SorListCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var SorlistCtrl,
    scope,
    $httpBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, SR_API_SERVER) {

    $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(new RegExp(SR_API_SERVER + '/sor?.*'))
        .respond([{SORCode: 'MIN18350'}, {SORCode: 'MIN18400'}]);

    scope = $rootScope.$new();
    SorlistCtrl = $controller('SorListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of SOR to the scope', function () {
    $httpBackend.flush();
    expect(scope.sors.length).toBe(2);
  });
  it('should set scope.sors[0].SORCode to MIN18350', function () {
    $httpBackend.flush();
    expect(scope.sors[0].SORCode).toBe('MIN18350');
  });
  it('should set scope.sors[1].SORCode to MIN18400', function () {
    $httpBackend.flush();
    expect(scope.sors[1].SORCode).toBe('MIN18400');
  });
});
