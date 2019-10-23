"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aphrodite = require("aphrodite");

var Divider = function Divider(_ref) {
  var orientation = _ref.orientation;
  return _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(orientation === 'vertical' ? styles.vertical : styles.horizontal)
  });
};

var styles = _aphrodite.StyleSheet.create({
  horizontal: {
    'margin-top': '5px',
    'margin-bottom': '5px',
    height: '1px',
    width: '100%',
    'border-top': '1px solid gray'
  },
  vertical: {
    'margin-left': '5px',
    'margin-right': '5px',
    width: '1px',
    height: '100%',
    'border-left': '1px solid gray'
  }
});

var _default = Divider;
exports["default"] = _default;