'use strict';

describe('Filter: notAvailable', function() {

  // load the filter's module
  beforeEach(module('srScopingApp'));

  // initialize a new instance of the filter before each test
  var notAvailable;
  beforeEach(inject(function($filter) {
    notAvailable = $filter('notAvailable');
  }));

  it('should return string "N/A" for empty input', function() {
    var naArr = [null, '', false];

    angular.forEach(naArr, function(value) {
      expect(notAvailable(value)).toBe('N/A');
    });

  });

  it('should return original input for non-empty input', function() {
    var inputs = ['angularjs', 1234];

    angular.forEach(inputs, function(value) {
      expect(notAvailable(value)).toBe(value);
    });
  });

});
