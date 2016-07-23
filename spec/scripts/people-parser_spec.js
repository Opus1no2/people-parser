'use strict';

var Parser = require('../../scripts/people-parser.js');

describe('people-parser CLI application', () => {
  const peopleParser = new Parser(['./data/bsv', './data/csv', './data/ssv']);

  let error = (file) => {
    return `Error: ENOENT: no such file or directory, open '${file}'`
  }

  it('should throw an error if a file is not found', () => {
     expect(function(){ new Parser(['./data/bs', './data/csv', './data/ssv'])}).toThrow(new Error(error('./data/bs')));
     expect(function(){ new Parser(['./data/bsv', './data/cs', './data/ssv'])}).toThrow(new Error(error('./data/cs')));
     expect(function(){ new Parser(['./data/bsv', './data/csv', './data/ss'])}).toThrow(new Error(error('./data/ss')));
  });

  it('should combine data from all files into a consistent format', () => {
    const expected = [
      'White,Lilla,female,magenta,11/8/1980',
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

    expect(peopleParser.data).toEqual(expected);
  });

  it('should sort data by gender', () => {
    const femalesFirst = [
      'White,Lilla,female,magenta,11/8/1980',
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

    expect(peopleParser.ladiesFirst()).toEqual(femalesFirst);
  });

  it('should sort by birthdate in ascending order', () => {
    const orderedByBirthdate = [
      'Bednar,Blake,male,maroon,1/23/1910',
      'Ledner,Evert,male,purple,9/23/1915',
      'Bayer,Lionel,female,plum,1/26/1934',
      'Farrell,Helene,male,teal,1/14/1944',
      'Flatley,Narciso,male,salmon,4/2/1966',
      'Tillman,Dave,male,magenta,8/31/1974',
      'McGlynn,Teresa,male,maroon,12/4/1977',
      'White,Lilla,female,magenta,11/8/1980',
      'Tillotson,Travis,male,blue,10/1/1984',
      'Swaniawski,Tressie,female,pink,3/2/1987',
      'Stokes,Kyle,female,gold,8/2/1988',
      'Connell,Jude,female,white,10/19/2000'
    ]

    expect(peopleParser.orderByBirthDate()).toEqual(orderedByBirthdate);
  });

  it('should sort by last name in descending order', () => {
    const orderedByLastName = [
      'Bayer,Lionel,female,plum,1/26/1934',
      'Bednar,Blake,male,maroon,1/23/1910',
      'Connell,Jude,female,white,10/19/2000',
      'Farrell,Helene,male,teal,1/14/1944',
      'Flatley,Narciso,male,salmon,4/2/1966',
      'Ledner,Evert,male,purple,9/23/1915',
      'McGlynn,Teresa,male,maroon,12/4/1977',
      'Stokes,Kyle,female,gold,8/2/1988',
      'Swaniawski,Tressie,female,pink,3/2/1987',
      'Tillman,Dave,male,magenta,8/31/1974',
      'Tillotson,Travis,male,blue,10/1/1984',
      'White,Lilla,female,magenta,11/8/1980'
    ];

    expect(peopleParser.orderByLastName()).toEqual(orderedByLastName);
  });
});
