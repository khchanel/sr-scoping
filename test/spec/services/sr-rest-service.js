'use strict';

describe('Service: srRestService', function () {

  // load the service's module
  beforeEach(module('srScopingApp'));

  // instantiate service
  var Sor;
  var Project;
  var Location;

  beforeEach(inject(function (_Sor_, _Project_, _Location_) {
    Sor = _Sor_;
    Project = _Project_;
    Location = _Location_;
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


  it('should have defined Project factory', inject(function(Project) {
    expect(Project).toBeDefined();
    expect(Project.query).toBeDefined();
  }));

  it('should have defined Location factory', inject(function(Location) {
    expect(Location).toBeDefined();
    expect(Location.query).toBeDefined();
  }));

});
