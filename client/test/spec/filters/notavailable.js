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
    var text = 'angularjs';
    var num = 1234;
    var naArr = [null, '', false];

    expect(notAvailable(text)).toBe(text);
    expect(notAvailable(num)).toBe(num);

    angular.forEach(naArr, function(value) {
      expect(notAvailable(value)).toBe('N/A');
    });

  });

});
