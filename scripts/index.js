#!/usr/bin/env node
'use strict';
const success = require('cli-color').green;
const PeopleParser = require('../api/server/lib/people-parser');

if (process.argv.slice(2).length < 3) {
  console.log('please provide 3 files as input');
}

const parser = new PeopleParser(process.argv.slice(2));

console.log('ordered by gender:');
console.log(success(parser.ladiesFirst().join('\n')));

console.log();
console.log('ordered by birth date:');
console.log(success(parser.orderByBirthDate().join('\n')));

console.log();
console.log('ordered by last name:');
console.log(success(parser.orderByLastName().join('\n')));
