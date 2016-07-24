'use strict';
const fs = require('fs');
const exec = require('shelljs').exec;
const PeopleConsumer = require('../../api/server/lib/people-consumer.js');
const consumer = new PeopleConsumer({
  lastname:'Stokes',
  firstname:'Kyle',
  gender: 'female',
  color: 'gold',
  birthdate: '8/2/1988'
});

describe('people-consumer', () => {
  it('transforms json into csv format', () => {
    expect(consumer.toCSV()).toEqual('Stokes,Kyle,female,gold,8/2/1988');
  });

  it('appends data to a file in csv format', () => {
    const file = __dirname + '/../data/post-data';

    fs.truncateSync(file, 0);
    consumer.writeToFile(__dirname + '/../data/post-data', consumer.toCSV());
    const data = fs.readFileSync(file).toString().trim().split('\n');
    expect(data.length).toEqual(1);
  });
});
