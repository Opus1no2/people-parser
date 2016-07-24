'use strict';

const Parser = require('../lib/people-parser');
const dataFiles = [
  __dirname + '/../data/csv',
  __dirname +'/../data/bsv',
  __dirname +'/../data/ssv'
]
const peopleParser = new Parser(dataFiles);

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(peopleParser.toJson(peopleParser.orderByBirthDate()));
}
