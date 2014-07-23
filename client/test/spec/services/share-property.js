'use strict';

describe('Service: ShareProperty', function() {

  // load the service's module
  beforeEach(module('srScopingApp'));

  // instantiate service
  var ShareProperty;
  beforeEach(inject(function(_ShareProperty_) {
    ShareProperty = _ShareProperty_;
  }));

  it('should do something', function() {
    expect(!!ShareProperty).toBe(true);
  });

  it('should have get accessor', function() {
    expect(ShareProperty.get).toBeDefined();
  });

  it('should have set accessor', function() {
    expect(ShareProperty.set).toBeDefined();
  });

  it('should be able to set and get value', function() {
    var data = 'dllm123';

    ShareProperty.set('test', data);
    expect(ShareProperty.get('test')).toBe('dllm123');
  });

  it('should return undefined if value key is not set', function() {
    expect(ShareProperty.get('iAmNotDefined')).not.toBeDefined();
  });

  it('should not allow access to internal store', function() {
    expect(ShareProperty._store).not.toBeDefined();
  });
});
