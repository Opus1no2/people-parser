'use strict';
const fs = require('fs');

class PeopleParser {
  constructor(files) {
    this.data = this.normalizeDataFromFiles(files);
  }

  readFile(file) {
    try {
      return fs.readFileSync(file);
    } catch (e) {
      throw new Error(e);
    }
  }

  normalizeDataFromFiles(files) {
    return files.map((file) => {
      return this.readFile(file).toString().trim().split("\n");
    }).reduce((pre, curr) => {
      return pre.concat(curr);
    }).map((vals) => {
      return vals.split(/,|\||\s/).join(',');
    });
  }

  ladiesFirst() {
    return this.data.sort((a, b) => {
      a = a.split(',')[2];
      b = b.split(',')[2];
      return a.localeCompare(b);
    });
  }

  orderByBirthDate() {
    return this.data.sort((a, b) => {
      a = new Date(a.split(',')[4]);
      b = new Date(b.split(',')[4]);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  orderByLastName() {
    return this.data.sort((a, b) => {
      a = a.split(',')[0];
      b = b.split(',')[0];
      return a.localeCompare(b);
    });
  }

  toJson(data) {
    return JSON.stringify(data.map((vals) => {
      return {
        lastname: vals.split(',')[0],
        firstname: vals.split(',')[1],
        gender: vals.split(',')[2],
        color: vals.split(',')[3],
        birthdate: vals.split(',')[4]
      }
    }));
  }
};

module.exports = PeopleParser;