"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FullscreenDialogFrame;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _autoLockScrolling = _interopRequireDefault(require("./autoLockScrolling"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1500,
    background: '#fafafa'
  },
  transition: {
    entering: {
      opacity: 0,
      transition: 'all 225ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      transform: 'translate(0, 56px)'
    },
    entered: {
      opacity: 1,
      transition: 'all 225ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      transform: 'translate(0, 0px)'
    },
    exiting: {
      opacity: 0,
      transition: 'all 195ms cubic-bezier(0.4, 0.0, 1, 1)',
      transform: 'translate(0, 56px)'
    },
    exited: {
      opacity: 0,
      display: 'none',
      transition: 'all 225ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      transform: 'translate(0, 56px)'
    }
  }
};

function FullscreenDialogFrame(_ref) {
  var children = _ref.children,
      open = _ref.open,
      style = _ref.style;
  return _react["default"].createElement(_Transition["default"], {
    "in": open,
    timeout: {
      exit: 225,
      enter: 225
    },
    component: "div",
    appear: true,
    enter: true
  }, function (state) {
    return _react["default"].createElement("div", {
      style: _objectSpread({}, style, {}, styles.root, {}, styles.transition[state])
    }, children, _react["default"].createElement(_autoLockScrolling["default"], {
      lock: open
    }));
  });
}

FullscreenDialogFrame.propTypes = {
  children: _propTypes["default"].node,
  open: _propTypes["default"].bool.isRequired,
  style: _propTypes["default"].object
};