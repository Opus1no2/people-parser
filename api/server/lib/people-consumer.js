'use strict';

const fs = require('fs');

class PeopleConsumer {
  constructor(data) {
    this.data = data;
  }

  toCSV() {
    return [
      this.data.lastname,
      this.data.firstname,
      this.data.gender,
      this.data.color,
      this.data.birthdate
    ].join(',');
  }

  writeToFile(file) {
    try {
      fs.appendFileSync(file, this.toCSV() + "\n");
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = PeopleConsumer;
