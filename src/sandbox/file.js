const { createFile } = require('../helpers/functions/utils');
const tsconfig = require('./utils');

const entityFactory = async () => {
  await createFile('', 'req', tsconfig, undefined, 'ts');
};

entityFactory();
