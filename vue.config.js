const path = require('path');

const resolve = (...paths) => {
  return path.resolve(__dirname, ...paths);
};
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components'),
      },
    },
  },
};
