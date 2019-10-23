"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aphrodite = require("aphrodite");

var _reactBootstrap = require("react-bootstrap");

var _fi = require("react-icons/fi");

var _io = require("react-icons/io");

var _torobStyles = require("./torobStyles");

var Toast = function Toast(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      onDismiss = _ref.onDismiss,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? true : _ref$rounded;

  var renderVariantIcon = function renderVariantIcon(variant) {
    switch (variant) {
      case 'error':
        return _react["default"].createElement(_fi.FiAlertTriangle, null);

      case 'warning':
        return _react["default"].createElement(_fi.FiAlertOctagon, null);

      case 'hint':
        return _react["default"].createElement(_fi.FiAlertCircle, null);

      case 'success':
        return _react["default"].createElement(_io.IoMdCheckmarkCircle, {
          style: {
            fill: _torobStyles.colors['success-txt']
          }
        });

      default:
        break;
    }
  };

  return _react["default"].createElement(_reactBootstrap.Row, {
    className: (0, _aphrodite.css)(styles.baseToast, styles[variant], rounded && styles.roundedRadius)
  }, _react["default"].createElement(_reactBootstrap.Col, {
    md: 1,
    className: (0, _aphrodite.css)(styles.toastCol)
  }, _react["default"].createElement(_fi.FiX, {
    style: {
      fontSize: '18px'
    },
    onClick: onDismiss
  })), _react["default"].createElement(_reactBootstrap.Col, {
    md: 10,
    className: (0, _aphrodite.css)(styles.toastCol, styles.toastContent)
  }, children), _react["default"].createElement(_reactBootstrap.Col, {
    md: 1,
    className: (0, _aphrodite.css)(styles.toastCol)
  }, renderVariantIcon(variant)));
};

var styles = _aphrodite.StyleSheet.create({
  baseToast: {
    margin: 10,
    padding: 10,
    fontSize: '14px'
  },
  roundedRadius: {
    borderRadius: '4px'
  },
  toastCol: {
    padding: 'unset'
  },
  toastContent: {
    paddingRight: '10px',
    direction: 'rtl'
  },
  error: {
    backgroundColor: _torobStyles.colors['error-bg'],
    color: _torobStyles.colors['error-txt']
  },
  warning: {
    backgroundColor: _torobStyles.colors['warning-bg'],
    color: _torobStyles.colors['warning-txt']
  },
  hint: {
    backgroundColor: _torobStyles.colors['hint-bg'],
    color: _torobStyles.colors['hint-txt']
  },
  success: {
    backgroundColor: _torobStyles.colors['success-bg'],
    color: _torobStyles.colors['success-txt']
  }
});

var _default = Toast;
exports["default"] = _default;