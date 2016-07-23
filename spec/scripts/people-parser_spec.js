'use strict';

var Parser = require('../../scripts/people-parser.js');

describe('people-parser CLI application', function() {
  it('Should log an error if given less that three files as input', function() {
    const errMsg = 'Please provide 3 files as input';

    console.log = jasmine.createSpy("log");

    let peopleParser2 = new Parser(['foo', 'bar']);
    expect(console.log).toHaveBeenCalledWith(errMsg);

    let peopleParser1 = new Parser(['foo']);
    expect(console.log).toHaveBeenCalledWith(errMsg);

    let peopleParser0 = new Parser([]);
    expect(console.log).toHaveBeenCalledWith(errMsg);
  });
});
