"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _aphrodite = require("aphrodite");

var _shopSelector = require("./shopSelector");

var SecondaryNavigation = function SecondaryNavigation(_ref) {
  var history = _ref.history,
      location = _ref.location;

  var handleNavOnClick = function handleNavOnClick(e) {
    switch (e) {
      case '/search':
        history.push('/search');
        break;

      case '/history':
        history.push('/history');
        break;

      case '/guide':
        history.push('/guide');
        break;

      default:
        break;
    }
  };

  var activeKey = location.pathname;
  return _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.secondarySidebarSticky)
  }, _react["default"].createElement(_shopSelector.DynamicShopSelector, {
    userShops: true
  }), _react["default"].createElement(_reactBootstrap.Nav, {
    variant: "pills",
    className: "flex-column",
    activeKey: activeKey,
    onSelect: handleNavOnClick
  }, _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "/search"
  }, "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "/history"
  }, "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0647\u0627")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: (0, _aphrodite.css)(styles.navItem)
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    eventKey: "/guide"
  }, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0627\u062F\u063A\u0627\u0645"))));
};

var styles = _aphrodite.StyleSheet.create({
  secondarySidebarSticky: {
    position: 'relative',
    top: '0',
    height: '100%',
    'padding-top': '.5rem',
    'overflow-x': 'hidden'
  },
  navItem: {
    padding: '15px',
    fontSize: '14px',
    'padding-bottom': '0px',
    'padding-top': '5px'
  }
});

var _default = (0, _reactRouterDom.withRouter)(SecondaryNavigation);

exports["default"] = _default;