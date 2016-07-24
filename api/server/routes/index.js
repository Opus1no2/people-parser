'use strict';

const PeopleConsumer = require('../lib/people-consumer');
const file = __dirname + '/../data/post-csv';

module.exports = (req, res) => {
  const consumer = new PeopleConsumer(req.body);

  try {
    consumer.consume(file);
    res.send('success');
  } catch (e) {
    res.send(e.message);
  }
}
