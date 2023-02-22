var path = require('path');
var fs = require('fs');

const catchAsync =
  (fn) =>
  (...params) => {
    try {
      fn(...params);
    } catch (err) {
      throw err;
    }
  };

const createFile = catchAsync(async (pathname, filename, content, suffix, extension = 'js') => {
  await fs.writeFile(path.join(process.cwd(), pathname, `${filename}${suffix ? '.' + suffix : ''}.${extension}`), content, (err) => {
    if (err) throw err;
  });
});

module.exports = {
  createFile,
  catchAsync,
};
