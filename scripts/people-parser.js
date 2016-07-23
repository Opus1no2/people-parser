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
};

module.exports = PeopleParser;
