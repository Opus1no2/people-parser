#!/usr/bin/env node
'use strict';

const PeopleParser = require('./people-parser');
const parser = new PeopleParser(process.argv.slice(2));
