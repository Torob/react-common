"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

function PrivateRoute(_ref) {
  var Component = _ref.component,
      isLoading = _ref.isLoading,
      isAuthenticated = _ref.isAuthenticated,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["component", "isLoading", "isAuthenticated"]);

  if (isLoading) {
    return _react["default"].createElement(_reactRouterDom.Route, (0, _extends2["default"])({}, rest, {
      render: function render() {
        return _react["default"].createElement(_reactBootstrap.Spinner, {
          animation: "border",
          variant: "warning"
        });
      }
    }));
  }

  return _react["default"].createElement(_reactRouterDom.Route, (0, _extends2["default"])({}, rest, {
    render: function render(props) {
      return isAuthenticated ? _react["default"].createElement(Component, props) : _react["default"].createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: '/login',
          user: {
            from: props.location
          }
        }
      });
    }
  }));
}

var _default = PrivateRoute;
exports["default"] = _default;