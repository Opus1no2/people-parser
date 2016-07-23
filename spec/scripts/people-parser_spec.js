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

  it('should combine data from all files into a consistent format', function() {
    const expected = [ 'White,Lilla,female,magenta,11/8/1980',
      'McGlynn,Teresa,male,maroon,12/4/1977',
      'Bayer,Lionel,female,plum,1/26/1934',
      'Bednar,Blake,male,maroon,1/23/1910',
      'Stokes,Kyle,female,gold,8/2/1988',
      'Flatley,Narciso,male,salmon,4/2/1966',
      'Tillotson,Travis,male,blue,10/1/1984',
      'Ledner,Evert,male,purple,9/23/1915',
      'Connell,Jude,female,white,10/19/2000',
      'Tillman,Dave,male,magenta,8/31/1974',
      'Swaniawski,Tressie,female,pink,3/2/1987',
      'Farrell,Helene,male,teal,1/14/1944'
    ];

    const peopleParser = new Parser(['./data/bsv', './data/csv', './data/ssv']);
    expect(peopleParser.normalizeDataFromFiles()).toEqual(expected);
  });

  it('should sort data', function () {
    const femalesFirst = [ 'White,Lilla,female,magenta,11/8/1980',
      'Bayer,Lionel,female,plum,1/26/1934',
      'Stokes,Kyle,female,gold,8/2/1988',
      'Connell,Jude,female,white,10/19/2000',
      'Swaniawski,Tressie,female,pink,3/2/1987',
      'Flatley,Narciso,male,salmon,4/2/1966',
      'McGlynn,Teresa,male,maroon,12/4/1977',
      'Ledner,Evert,male,purple,9/23/1915',
      'Bednar,Blake,male,maroon,1/23/1910',
      'Tillman,Dave,male,magenta,8/31/1974',
      'Farrell,Helene,male,teal,1/14/1944',
      'Tillotson,Travis,male,blue,10/1/1984'
    ];

    const pp = new Parser(['./data/bsv', './data/csv', './data/ssv']);
    let data = pp.normalizeDataFromFiles();
    expect(pp.ladiesFirst(data)).toEqual(femalesFirst);
  });
});
