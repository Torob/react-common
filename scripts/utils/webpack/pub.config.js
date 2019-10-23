'use strict';

const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const { pathTo, plugins, loaders, resolve, stats, externals, INCLUDE_JS } = require(`./common`);

module.exports = {
  devtool: false,
  entry: pathTo(`example`, `index.js`),
  output: {
    filename: `bundle.js`,
    path: pathTo(`pub`),
  },
  module: {
    rules: [loaders.babel, loaders.css],
  },
  resolve,
  stats,
  externals,
};
