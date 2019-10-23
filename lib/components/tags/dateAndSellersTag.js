"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aphrodite = require("aphrodite");

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _utils = require("../../../common/utils");

var _colors = require("../../../common/torobStyles/colors");

_momentJalaali["default"].loadPersian({
  dialect: 'persian-modern',
  usePersianDigits: true
});

var DateAndSellersTag = function DateAndSellersTag(_ref) {
  var date = _ref.date,
      sellers = _ref.sellers,
      showDate = _ref.showDate;
  var persianDate = (0, _momentJalaali["default"])(date, 'YY-MM-DD HH:mm:ss').format('jD jMMMM jYYYY');
  return _react["default"].createElement("span", {
    className: (0, _aphrodite.css)(styles.dateSellerTagWrapper)
  }, (0, _utils.toFarsiNumber)(showDate ? "".concat(persianDate, " / ").concat(sellers, " \u0641\u0631\u0648\u0634\u0646\u062F\u0647") : "".concat(sellers, " \u0641\u0631\u0648\u0634\u0646\u062F\u0647")));
};

var styles = _aphrodite.StyleSheet.create({
  dateSellerTagWrapper: {
    fontSize: '14px',
    color: _colors.colors['ink50'],
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px'
  }
});

var _default = DateAndSellersTag;
exports["default"] = _default;