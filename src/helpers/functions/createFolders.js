var mkdirp = require('mkdirp');
var path = require('path');

const createFolders = async () => {
  const folders = ['/src/controllers', '/src/routes', '/src/schemas', '/src/helpers', '/src/helpers/models', '/src/helpers/utils'];
  for (let i = 0; i < folders.length; i++) {
    await mkdirp(path.join(process.cwd(), folders[i]));
  }
};

module.exports = { createFolders };
