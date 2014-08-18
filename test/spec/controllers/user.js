'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('srScopingApp'));

  var UserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope
    });
  }));


  it('should have a basket object', function () {
    expect(scope.$storage.user).toBeDefined();
    expect(scope.user).toBeDefined();

    expect(scope.user.name).toBeDefined();
    expect(scope.$storage.user.name).toBeDefined();

    expect(scope.user.name).toBe('');
    expect(scope.$storage.user.name).toBe('');
  });


  it('should not sync $storage.basket & $scope.user', function () {
    scope.user.name = 'localName';
    expect(scope.$storage.user.name).not.toBe(scope.user.name);

    scope.$storage.user.name = 'storageName';
    expect(scope.user.name).toBe('localName');
  });


  it('should save $scope.user to $storage.basket when asked', function () {
    scope.user.name = 'test';
    scope.user.passwd = 'pass';
    expect(scope.$storage.user.name).toBe('');
    expect(scope.$storage.user.passwd).toBe('');

    scope.saveCredentials();

    expect(scope.$storage.user.name).toBe('test');
    expect(scope.$storage.user.passwd).toBe('pass');
  });


  it('should be able to clear stored credentials', function () {
    scope.$storage.user.name = 'test';
    scope.$storage.user.passwd = 'pass';

    scope.clearCredentials();

    expect(scope.$storage.user.name).toBe('');
    expect(scope.$storage.user.passwd).toBe('');
    expect(scope.user.name).toBe('');
    expect(scope.user.passwd).toBe('');
  });
});
