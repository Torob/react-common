"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _fi = require("react-icons/fi");

var _reactBootstrap = require("react-bootstrap");

var _aphrodite = require("aphrodite");

var CustomToggle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CustomToggle, _React$Component);

  function CustomToggle(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomToggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CustomToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(CustomToggle, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onClick(e);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("span", {
        style: {
          textDecoration: 'none'
        },
        onClick: this.handleClick
      }, this.props.children);
    }
  }]);
  return CustomToggle;
}(_react["default"].Component);

var SearchInfo = function SearchInfo(_ref) {
  var onChange = _ref.onChange,
      action = _ref.action,
      actOnChange = _ref.actOnChange;

  var _useState = (0, _react.useState)('date'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeOrder = _useState2[0],
      setActiveOrder = _useState2[1];

  var _useState3 = (0, _react.useState)('20'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      activeSize = _useState4[0],
      setActiveSize = _useState4[1];

  var orderOptions = {
    date: 'تازه ترین ها',
    '-date': 'قدیمی ترین ها',
    price: 'گران ترین ها',
    '-price': 'ارزان ترین ها'
  };
  var pageSizeOptions = {
    '20': '۲۰',
    '50': '۵۰',
    '100': '۱۰۰',
    '200': '۲۰۰'
  };

  var onSelectOrder = function onSelectOrder(e) {
    if (onChange) {
      setActiveOrder(e);
      onChange({
        sortBy: e
      });
      if (actOnChange) action();
    }
  };

  var onSelectSize = function onSelectSize(e) {
    if (onChange) {
      setActiveSize(e);
      onChange({
        size: e
      });
      if (actOnChange) action();
    }
  };

  return _react["default"].createElement(_reactBootstrap.Row, {
    className: (0, _aphrodite.css)(styles.wrapper)
  }, _react["default"].createElement(_reactBootstrap.Col, {
    md: 3
  }, 'ترتیب نمایش: ', _react["default"].createElement(_reactBootstrap.Dropdown, {
    style: {
      display: 'inline'
    },
    onSelect: onSelectOrder
  }, _react["default"].createElement(_reactBootstrap.Dropdown.Toggle, {
    as: CustomToggle,
    id: "dropdown-order"
  }, orderOptions[activeOrder], _react["default"].createElement(_fi.FiChevronDown, null)), _react["default"].createElement(_reactBootstrap.Dropdown.Menu, null, Object.keys(orderOptions).map(function (option) {
    return _react["default"].createElement(_reactBootstrap.Dropdown.Item, {
      eventKey: option,
      active: option === activeOrder
    }, ' ', orderOptions[option], ' ');
  })))), _react["default"].createElement(_reactBootstrap.Col, {
    md: 3
  }, 'تعداد در صفحه: ', _react["default"].createElement(_reactBootstrap.Dropdown, {
    style: {
      display: 'inline'
    },
    onSelect: onSelectSize
  }, _react["default"].createElement(_reactBootstrap.Dropdown.Toggle, {
    as: CustomToggle,
    id: "dropdown-page-size"
  }, pageSizeOptions[activeSize], _react["default"].createElement(_fi.FiChevronDown, null)), _react["default"].createElement(_reactBootstrap.Dropdown.Menu, null, Object.keys(pageSizeOptions).map(function (option) {
    return _react["default"].createElement(_reactBootstrap.Dropdown.Item, {
      eventKey: option,
      active: option === activeSize
    }, ' ', pageSizeOptions[option], ' ');
  })))), _react["default"].createElement(_reactBootstrap.Col, {
    md: 3
  }), _react["default"].createElement(_reactBootstrap.Col, {
    md: 3
  }, '۲۰ کالا از ۱۰۲۵'));
};

var styles = _aphrodite.StyleSheet.create({
  wrapper: {
    'box-shadow': 'inset 0px -1px 0px #e6e6e6',
    direction: 'rtl',
    'text-align': 'center',
    color: '#808080',
    padding: '5px 0'
  }
});

var _default = SearchInfo;
exports["default"] = _default;