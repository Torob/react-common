"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FullscreenDialog;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _dialogFrame = _interopRequireDefault(require("./dialogFrame"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FullscreenDialog(props, _ref) {
  var muiTheme = _ref.muiTheme;
  var children = props.children,
      containerClassName = props.containerClassName,
      containerStyle = props.containerStyle,
      open = props.open,
      style = props.style;
  return _react["default"].createElement(_dialogFrame["default"], {
    open: open,
    style: _objectSpread({}, style, {
      display: 'flex',
      flexDirection: 'column'
    })
  }, _react["default"].createElement("div", {
    className: containerClassName,
    style: _objectSpread({
      flex: 1,
      overflow: 'auto',
      overflowX: 'hidden'
    }, containerStyle)
  }, children));
}