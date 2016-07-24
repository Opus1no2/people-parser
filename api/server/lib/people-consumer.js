'use strict';

const fs = require('fs');

class PeopleConsumer {
  constructor(data) {
    this.data = data;
    this.requiredKeys = ['lastname', 'firstname', 'gender', 'color', 'birthdate'];
  }

  hasKeys() {
    this.requiredKeys.forEach((key) => {
      if (!this.data.hasOwnProperty(key)) {
        throw new Error('Invalid object');
      }
    });
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

  consume(file) {
    this.hasKeys();
    this.writeToFile(file);
  }
}

module.exports = PeopleConsumer;
