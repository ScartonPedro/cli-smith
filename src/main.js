#!/usr/bin/env node
const yargs = require('yargs');
const { getFile } = require('./helpers/readSmith');

const argvs = yargs(process.argv.slice(2)).argv._;

const [argv] = argvs;
if (argv === 'setup') {
  let data;
  try {
    data = getFile();
  } catch (err) {
    return;
  }

  // Generate API code using the Smith data
  // ...
  console.log(`Generating API Code.`);
  return;
}

console.log('opcion invalida');
