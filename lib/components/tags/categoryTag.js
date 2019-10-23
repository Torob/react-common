"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aphrodite = require("aphrodite");

var CategoryTag = function CategoryTag(_ref) {
  var category = _ref.category;
  return _react["default"].createElement("span", {
    className: (0, _aphrodite.css)(styles.categoryTag)
  }, category);
};

var styles = _aphrodite.StyleSheet.create({
  categoryTag: {
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px'
  }
});

var _default = CategoryTag;
exports["default"] = _default;