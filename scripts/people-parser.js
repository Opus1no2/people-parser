'use strict';

class PeopleParser {
  constructor(files) {
    this.validateArgs(files);
  }

  validateArgs(files) {
    if (files.length < 3) {
      console.log('Please provide 3 files as input');
      return;
    }
  }
};

module.exports = PeopleParser;
