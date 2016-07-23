'use strict';
const fs = require('fs');

class PeopleParser {
  constructor(files) {
    this.validateArgs(files);
    this.files = files;
  }

  validateArgs(files) {
    if (files.length < 3) {
      console.log('Please provide 3 files as input');
      return;
    }
  }

  normalizeDataFromFiles() {
    return this.files.map((file) => {
      return fs.readFileSync(file).toString().trim().split("\n");
    }).reduce((pre, curr) => {
      return pre.concat(curr);
    }).map((vals) => {
      return vals.split(/,|\||\s/).join(',');
    });
  }

  ladiesFirst(data) {
    return data.sort((a, b) => {
      if(a.split(',')[2].toUpperCase() < b.split(',')[2].toUpperCase()) {
        return -1;
      }
    });
  }

  orderByBirthDate(data) {
    return data.sort((a, b) => {
      a = new Date(a.split(',')[4]);
      b = new Date(b.split(',')[4]);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  orderByLastName(data) {
    return data.sort((a, b) => {
      a = a.split(',')[0];
      b = b.split(',')[0];
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }
};

module.exports = PeopleParser;
