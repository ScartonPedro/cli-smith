const path = require('path');
const fs = require('fs');

const getFile = () => {
  // Try with Json
  const filePath = path.resolve('smith.json');
  if (!fs.existsSync(filePath)) {
    console.error(`Smith File not found on your current directory`);
    throw new Error('Smith File not found');
  }

  // Check if the file is a valid Smith file
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    console.error(`Error parsing '${filePath}': ${err.message}`);
    throw err;
  }
};

module.exports = { getFile };
