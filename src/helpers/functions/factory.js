const { createFolders } = require('./createFolders');
const { createFile, catchAsync } = require('./utils');

const apiFactory = catchAsync(async (entities) => {
  await createFolders();
  for (let i = 0; i < entities.length; i++) {
    await entityFactory(entities[i]);
  }
  await getMain();
});

const entityFactory = async (entity) => {
  const entitySegments = [
    { route: '/src/helpers/models', suffix: 'model', factory: () => entity + '_model' },
    { route: '/src/schemas', suffix: 'schema', factory: () => entity + '_schema' },
    { route: '/src/controllers', suffix: 'controllers', factory: () => entity + '_controllers' },
    { route: '/src/routes', suffix: 'routes', factory: () => entity + '_routes' },
  ];
  for (let i = 0; i < entitySegments.length; i++) {
    const segment = entitySegments[i];
    await createFile(segment.route, entity, segment.factory(), segment.suffix);
  }
};

const getUtils = catchAsync(async () => {
  const files = ['catch-async', 'schema-factory'];
  for (let i = 0; i < entities.length; i++) {
    await createFile('/src/routes', entities[i], entities[i], 'routes');
  }
});

const getMiddlewares = catchAsync(async () => {
  const files = ['validator'];
  for (let i = 0; i < entities.length; i++) {
    await createFile('/src/routes', entities[i], entities[i], 'routes');
  }
});

const getMain = catchAsync(async () => {
  await createFile('src', 'main', 'main.js');
});

module.exports = { apiFactory };
