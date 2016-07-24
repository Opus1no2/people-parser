'use strict';

const PeopleConsumer = require('../lib/people-consumer');
const file = __dirname + '/../data/csv';

module.exports = (req, res) => {
  const consumer = new PeopleConsumer(req.body);
  consumer.writeToFile(file);
  res.send(req.body);
}
