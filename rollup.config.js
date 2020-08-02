import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    copy({
      targets: [{ src: 'src/components/DatePicker/persian-datepicker/*', dest: 'dist/persian-datepicker' }],
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    external(),
    postcss({
      modules: false,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
      ignore: ['node_modules/**'],
      runtimeHelpers: true,
    }),
    commonjs({
      // exclude: [
      //   'node_modules/react-dom/**'
      // ],
      namedExports: {
        // 'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['findDOMNode', 'createPortal'],
        'node_modules/react-is/index.js': ['isValidElementType'],
      },
    }),
  ],
};
