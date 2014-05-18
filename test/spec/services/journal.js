'use strict';

describe('Service: journal', function () {

  // load the service's module
  beforeEach(module('angelhackFrontendApp'));

  // instantiate service
  var journal;
  beforeEach(inject(function (_journal_) {
    journal = _journal_;
  }));

  it('should do something', function () {
    expect(!!journal).toBe(true);
  });

});
