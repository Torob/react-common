'use strict';

const { pathTo, plugins, loaders, resolve, stats, externals } = require(`./common`);
const path = require('path');

module.exports = {
  devtool: false,
  entry: pathTo(`src`, `index.js`),
  output: {
    filename: `index.js`,
    path: pathTo(''),
  },
  module: {
    rules: [loaders.babel, loaders.css],
  },
  resolve,
  stats,
  externals,
};
