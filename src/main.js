#!/usr/bin/env node
const yargs = require('yargs');

const { getFile } = require('./helpers/functions/readSmith');
const { apiFactory } = require('./helpers/functions/factory');

const argvs = yargs(process.argv.slice(2)).argv._;

const [argv] = argvs;
if (argv === 'setup') {
  // let data;
  // try {
  //   data = getFile();
  // } catch (err) {
  //   return;
  // }

  apiFactory(['user', 'news', 'media', 'posts']);

  console.log(`Generating API Code.`);
  return;
}

console.log('opcion invalida');
