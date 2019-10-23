"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

require("./styles.css");

var TorobHeader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(TorobHeader, _Component);
  (0, _createClass2["default"])(TorobHeader, null, [{
    key: "propTypes",
    get: function get() {
      return {
        typeaheadComponent: _propTypes["default"].object,
        shops: _propTypes["default"].array,
        selectedShop: _propTypes["default"].object,
        isLoggedIn: _propTypes["default"].bool,
        hasDropDown: _propTypes["default"].bool,
        dropDownLinks: _propTypes["default"].array,
        selectedRole: _propTypes["default"].string,
        torobPanel: _propTypes["default"].string,
        onRoleChange: _propTypes["default"].func,
        onShopChange: _propTypes["default"].func,
        onLogin: _propTypes["default"].bool,
        onLogout: _propTypes["default"].func
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        typeaheadComponent: undefined,
        shops: [],
        selectedShop: {
          name: 'test',
          domain: 'tost'
        },
        isLoggedIn: false,
        hasDropDown: false,
        dropDownLinks: [],
        selectedRole: 'shop',
        torobPanel: 'matching',
        onRoleChange: undefined,
        onShopChange: undefined,
        onLogin: undefined,
        onLogout: undefined
      };
    }
  }]);

  function TorobHeader(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TorobHeader);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TorobHeader).call(this, props));
    _this._renderLoginLogout = _this._renderLoginLogout.bind((0, _assertThisInitialized2["default"])(_this));
    _this._renderPanelsNavigationButtons = _this._renderPanelsNavigationButtons.bind((0, _assertThisInitialized2["default"])(_this));
    _this._renderShopSelector = _this._renderShopSelector.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      isOpen: false,
      panelConstances: {
        matching: {
          title: 'پنل ادغام محصولات',
          onClick: function onClick() {
            window.location = 'https://matching.torob.com/';
          }
        },
        shopPanel: {
          title: 'پنل فروشگاه',
          onClick: function onClick() {
            window.location = 'https://panel.torob.com/';
          }
        },
        ticketing: {
          title: 'پنل پشتیبانی',
          onClick: function onClick() {
            window.location = 'https://ticketing.torob.com/';
          }
        }
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(TorobHeader, [{
    key: "_renderPanelsNavigationButtons",
    value: function _renderPanelsNavigationButtons() {
      var torobPanel = this.props.torobPanel;
      var panelConstances = this.state.panelConstances;

      if (torobPanel === 'matching') {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#shopPanel"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.shopPanel.onClick
        }, panelConstances.shopPanel.title))), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#ticketing"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.ticketing.onClick
        }, panelConstances.ticketing.title))));
      } else if (torobPanel === 'shopPanel') {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#matching"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.matching.onClick
        }, panelConstances.matching.title))), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#ticketing"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.ticketing.onClick
        }, panelConstances.ticketing.title))));
      } else if (torobPanel === 'ticketing') {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#shopPanel"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.shopPanel.onClick
        }, panelConstances.shopPanel.title))), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#matching"
        }, _react["default"].createElement("button", {
          "class": "btn torob-header-btn navbar-btn",
          onClick: panelConstances.matching.onClick
        }, panelConstances.matching.title))));
      }
    }
  }, {
    key: "_renderLoginLogout",
    value: function _renderLoginLogout() {
      var _this$props = this.props,
          isLoggedIn = _this$props.isLoggedIn,
          onLogin = _this$props.onLogin,
          onLogout = _this$props.onLogout;

      if (isLoggedIn) {
        return _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#logout",
          className: "no-decor login-register",
          onClick: onLogout ? onLogout : function () {
            return undefined;
          }
        }, 'خروج'));
      } else {
        return _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactstrap.NavLink, {
          href: "#login",
          className: "no-decor login-register",
          onClick: onLogin ? onLogin : function () {
            return undefined;
          }
        }, 'ورود/ثبت نام'));
      }
    }
  }, {
    key: "_renderShopSelector",
    value: function _renderShopSelector() {
      var _this$props2 = this.props,
          shops = _this$props2.shops,
          Typeahead = _this$props2.typeaheadComponent,
          onShopChange = _this$props2.onShopChange; // const defaultItemProps = (selectedShop ? {defaultSelected: [selectedShop,]} : {});

      if (Typeahead) {
        return _react["default"].createElement(Typeahead, {
          renderMenuItemChildren: function renderMenuItemChildren(option) {
            return _react["default"].createElement("div", null, _react["default"].createElement("strong", null, option.name), ' - ', _react["default"].createElement("em", null, "(", option.domain, ")"));
          },
          options: shops,
          labelKey: 'name',
          placeholder: 'انتخاب فروشگاه',
          onChange: onShopChange ? onShopChange : function () {
            return undefined;
          } // {...defaultItemProps}

        });
      }

      return '';
    }
  }, {
    key: "_renderDropDownLink",
    value: function _renderDropDownLink() {
      var _this$props3 = this.props,
          hasDropDown = _this$props3.hasDropDown,
          dropDownLinks = _this$props3.dropDownLinks;

      if (!hasDropDown) {
        return '';
      } else {
        return _react["default"].createElement(_reactstrap.UncontrolledDropdown, {
          nav: true,
          inNavbar: true,
          id: "collasible-nav-dropdown"
        }, _react["default"].createElement(_reactstrap.DropdownToggle, {
          nav: true,
          caret: true
        }, 'بخش ها'), _react["default"].createElement(_reactstrap.DropdownMenu, {
          left: true
        }, dropDownLinks.map(function (linkItem) {
          return _react["default"].createElement(_reactstrap.DropdownItem, {
            href: linkItem.href
          }, linkItem.title);
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var torobPanel = this.props.torobPanel;
      var panelConstances = this.state.panelConstances;
      return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Navbar, {
        className: "torob-header",
        light: true,
        expand: "lg"
      }, _react["default"].createElement(_reactstrap.NavbarBrand, {
        href: "/"
      }, _react["default"].createElement("a", {
        href: "#!",
        className: "logo"
      }, _react["default"].createElement("img", {
        src: "/logo.png",
        alt: "torob-logo"
      }), _react["default"].createElement("div", {
        className: "no-decor"
      }, 'ترب')), _react["default"].createElement("div", {
        className: "panel-main-title"
      }, panelConstances[torobPanel].title)), _react["default"].createElement(_reactstrap.NavbarToggler, {
        onClick: function onClick() {
          _this2.setState({
            isOpen: !_this2.state.isOpen
          });
        }
      }), _react["default"].createElement(_reactstrap.Collapse, {
        isOpen: this.state.isOpen,
        navbar: true
      }, this._renderShopSelector(), _react["default"].createElement(_reactstrap.Nav, {
        className: "ml-auto",
        navbar: true
      }, this._renderDropDownLink(), this._renderPanelsNavigationButtons(), this._renderLoginLogout()))));
    }
  }]);
  return TorobHeader;
}(_react.Component);

exports["default"] = TorobHeader;