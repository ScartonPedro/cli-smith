#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const yargs = require('yargs');

const argvs = yargs(process.argv.slice(2)).argv._;

const [argv] = argvs;
if (argv === 'setup') {
  // Try with Json
  const filePath = path.resolve('smith.json');
  if (!fs.existsSync(filePath)) {
    console.error(`Smith File not found on your current directory`);
    return;
  }

  // Check if the file is a valid Smith file
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    console.error(`Error parsing '${filePath}': ${err.message}`);
    return;
  }

  // Generate API code using the Smith data
  // ...
  console.log(`Generating API Code.`);
  return;
}

console.log('opcion invalida');
