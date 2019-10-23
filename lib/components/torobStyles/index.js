"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btnStyles = exports.bgStyles = exports.colors = void 0;

var _aphrodite = require("aphrodite");

var colors = {
  red: '#D73948',
  orange: '#F49342',
  green: '#4CAF50',
  blue: '#4A90E2',
  white: '#FFFFFF',
  ink5: '#F2F2F2',
  ink10: '#E6E6E6',
  ink20: '#CCCCCC',
  ink30: '#B3B3B3',
  ink50: '#808080',
  ink80: '#333333',
  sky: '#ECEDEF',
  skylight: '#F9FAFB',
  skydark: '#919EAB',
  highlight: '#FDDC42',
  'error-bg': '#FFD0D6',
  'warning-bg': '#FFEEBF',
  'hint-bg': '#EAF2FC',
  'success-bg': '#EEFCEB',
  'error-txt': '#bc0007',
  'warning-txt': '#85660e',
  'hint-txt': '#1e6dc8',
  'success-txt': '#248212'
};
exports.colors = colors;

var bgStyles = _aphrodite.StyleSheet.create({
  'bg-blue': {
    backgroundColor: colors.blue,
    borderColor: colors.blue
  },
  'bg-red': {
    backgroundColor: colors.red,
    borderColor: colors.red
  },
  'bg-skylight': {
    backgroundColor: colors.skylight
  },
  'bg-sky': {
    backgroundColor: colors.sky
  },
  'bg-white': {
    backgroundColor: colors.white
  },
  'ink-10': {
    backgroundColor: colors.ink10
  }
});

exports.bgStyles = bgStyles;

var btnStyles = _aphrodite.StyleSheet.create({
  'outline-blue': {
    color: colors.blue,
    borderColor: colors.blue,
    ':hover': {
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      color: colors.white
    }
  },
  'outline-red': {
    color: colors.red,
    borderColor: colors.red,
    ':hover': {
      backgroundColor: colors.red,
      borderColor: colors.red,
      color: colors.white
    }
  },
  'primary-blue': {
    color: colors.blue
  }
});

exports.btnStyles = btnStyles;