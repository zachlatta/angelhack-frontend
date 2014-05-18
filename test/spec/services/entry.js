'use strict';

describe('Service: Entry', function () {

  // load the service's module
  beforeEach(module('angelhackFrontendApp'));

  // instantiate service
  var Entry;
  beforeEach(inject(function (_Entry_) {
    Entry = _Entry_;
  }));

  it('should do something', function () {
    expect(!!Entry).toBe(true);
  });

});
