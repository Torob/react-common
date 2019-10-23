"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _fi = require("react-icons/fi");

var _aphrodite = require("aphrodite");

var _torobStyles = require("./torobStyles");

var _reactBootstrap = require("react-bootstrap");

var MainNavigation = function MainNavigation(_ref) {
  var activePane = _ref.activePane;
  return _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.mainSidebarStick, _torobStyles.bgStyles['bg-skylight'])
  }, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Nav, {
    variant: "pills",
    className: "flex-column"
  }, _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "first",
    active: activePane === 'shop-panel'
  }, _react["default"].createElement(_fi.FiShoppingCart, null), "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "second",
    active: activePane === 'crowdsource'
  }, _react["default"].createElement(_fi.FiGitMerge, null), "\u0627\u062F\u063A\u0627\u0645")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "third",
    active: activePane === 'ticketing'
  }, _react["default"].createElement(_fi.FiMessageSquare, null), "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "fourth",
    active: activePane === 'account'
  }, _react["default"].createElement(_fi.FiUser, null), "\u062D\u0633\u0627\u0628 \u0645\u0646"))))));
};

var styles = _aphrodite.StyleSheet.create({
  mainSidebarStick: {
    position: 'relative',
    top: '0',
    height: '100vh',
    'padding-top': '.5rem',
    'overflow-x': 'hidden',
    'overflow-y': 'auto'
  },
  navItem: {
    padding: '12px',
    fontSize: '12px',
    'text-align': 'center'
  }
});

var _default = MainNavigation;
exports["default"] = _default;