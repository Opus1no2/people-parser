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

  getDataFromFiles() {
   return this.files.map((file) => {
       return fs.readFileSync(file).toString().trim().split("\n");
    }).reduce((pre, curr) => {
      return pre.concat(curr);
    });
  }
};

module.exports = PeopleParser;
