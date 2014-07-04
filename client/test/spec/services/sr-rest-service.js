'use strict';

describe('Service: Sor', function () {

  // load the service's module
  beforeEach(module('srScopingApp'));

  // instantiate service
  var Sor;
  beforeEach(inject(function (_Sor_) {
    Sor = _Sor_;
  }));

  it('should have Sor being true', function () {
    expect(!!Sor).toBe(true);
  });

  // Test service availability
  it('should have defined Sor factory', inject(function(Sor) {
    expect(Sor).toBeDefined();
  }));

  it('should have query method in Sor factory', inject(function(Sor) {
    expect(Sor.query).toBeDefined();
  }));


});
