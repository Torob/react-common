"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationProvider = NotificationProvider;
exports.useNotif = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _aphrodite = require("aphrodite");

var _toast = _interopRequireDefault(require("../components/toast"));

var context = _react["default"].createContext();

var ToastContainer = function ToastContainer(props) {
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _aphrodite.css)(styles.toastContainer)
  }, props));
};

var styles = _aphrodite.StyleSheet.create({
  toastContainer: {
    position: 'fixed',
    left: 0,
    bottom: 50,
    width: '320px',
    minHeight: '48px'
  }
});

var toastCount = 0;

function NotificationProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toasts = _useState2[0],
      setToasts = _useState2[1];

  var add = function add(content) {
    var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hint';
    var id = toastCount++;
    var toast = {
      content: content,
      id: id,
      variant: variant
    };
    setToasts([].concat((0, _toConsumableArray2["default"])(toasts), [toast]));
  };

  var remove = function remove(id) {
    var newToasts = toasts.filter(function (t) {
      return t.id !== id;
    });
    setToasts(newToasts);
  };

  var onDismiss = function onDismiss(id) {
    return function () {
      return remove(id);
    };
  };

  return _react["default"].createElement(context.Provider, {
    value: {
      add: add,
      remove: remove
    }
  }, children, _react["default"].createElement(ToastContainer, null, toasts.map(function (_ref2) {
    var content = _ref2.content,
        id = _ref2.id,
        variant = _ref2.variant,
        rest = (0, _objectWithoutProperties2["default"])(_ref2, ["content", "id", "variant"]);
    return _react["default"].createElement(_toast["default"], (0, _extends2["default"])({
      key: id,
      variant: variant,
      onDismiss: onDismiss(id)
    }, rest), content);
  })));
}

var useNotif = function useNotif() {
  return _react["default"].useContext(context);
};

exports.useNotif = useNotif;