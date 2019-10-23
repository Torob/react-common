"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aphrodite = require("aphrodite");

var _utils = require("../../../common/utils");

var PriceTag = function PriceTag(_ref) {
  var price = _ref.price;

  var priceFormatter = function priceFormatter(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' تومان' : 'ناموجود';
  };

  return _react["default"].createElement("span", {
    className: (0, _aphrodite.css)(styles.priceTag)
  }, (0, _utils.toFarsiNumber)(priceFormatter(price)));
};

var styles = _aphrodite.StyleSheet.create({
  priceTag: {
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px'
  }
});

var _default = PriceTag;
exports["default"] = _default;