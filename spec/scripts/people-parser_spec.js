'use strict';

var Parser = require('../../scripts/people-parser.js');

describe('people-parser CLI application', function() {
  it('Should log an error if given less that three files as input', function() {
    const errMsg = 'Please provide 3 files as input';

    spyOn(console, 'log');

    let peopleParser2 = new Parser(['foo', 'bar']);
    expect(console.log).toHaveBeenCalledWith(errMsg);

    let peopleParser1 = new Parser(['foo']);
    expect(console.log).toHaveBeenCalledWith(errMsg);

    let peopleParser0 = new Parser([]);
    expect(console.log).toHaveBeenCalledWith(errMsg);
  });

  it('should combine data from all files', function() {
    const expected = [
      'White|Lilla|female|magenta|11/8/115',
      'McGlynn|Teresa|male|maroon|12/4/115',
      'Bayer|Lionel|female|plum|1/26/116',
      'Bednar|Blake|male|maroon|1/23/116',
      'Stokes,Kyle,female,gold,8/2/115',
      'Flatley,Narciso,male,salmon,4/2/116',
      'Hills,Pattie,female,azure,5/16/116',
      'Ledner,Evert,male,purple,9/23/115',
      'Connell Jude female white 10/19/115',
      'Tillman Dave male magenta 8/31/115',
      'Swaniawski Tressie female pink 3/2/116',
      'Farrell Helene male teal 1/14/116'
    ];

    const peopleParser = new Parser(['./data/bsv', './data/csv', './data/ssv']);
    expect(peopleParser.getDataFromFiles()).toEqual(expected);
  });
});
