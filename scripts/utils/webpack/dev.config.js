'use strict';

const { pathTo, plugins, loaders, resolve, stats } = require(`./common`);
const path = require('path');

module.exports = {
  devtool: `#source-map`,

  entry: [pathTo(`src`, `index.js`), `webpack-dev-server/client?http://localhost:3000`],
  output: {
    path: path.resolve(__dirname),
    filename: `bundle.js`,
  },
  module: {
    rules: [loaders.babel, loaders.css],
  },
  resolve,
  stats,
  devServer: {
    historyApiFallback: true,
    port: 3000,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true,
    },
  },
};
