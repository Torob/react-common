'use strict';

const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const HtmlWebpackIncludeAssetsPlugin = require(`html-webpack-include-assets-plugin`);
const path = require(`path`);

const { NODE_ENV = `development` } = process.env;

const pathTo = p => path.join(process.cwd(), p);
exports.pathTo = pathTo;

const {
  config: { component: COMPONENT_NAME },
  name: PACKAGE_NAME,
} = require(pathTo(`package.json`));

exports.PACKAGE_NAME = PACKAGE_NAME;
exports.COMPONENT_NAME = COMPONENT_NAME;

if (!COMPONENT_NAME) {
  throw Error(`<package.json>.config.component name is required`);
}

exports.PACKAGE_NAME = PACKAGE_NAME;

exports.loaders = {
  css: {
    test: /\.css$/i,
    use: ['style-loader', { loader: 'css-loader', options: { import: true } }],
  },
  babel: {
    test: /\.(js|jsx)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-transform-runtime',
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    },
  },
};

exports.plugins = {
  define: new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
  html: new HtmlWebpackPlugin(),
  include: assets =>
    new HtmlWebpackIncludeAssetsPlugin({
      assets,
      append: false,
    }),
  loaderOptions: new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
};

exports.resolve = {};

exports.stats = { colors: true };
