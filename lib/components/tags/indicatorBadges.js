"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var IndicatorBadges = function IndicatorBadges(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Badge, {
    pill: true,
    variant: "success"
  }, "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647"), _react["default"].createElement(_reactBootstrap.Badge, {
    pill: true,
    variant: "secondary"
  }, "\u0628\u0644\u0627\u06A9 \u0634\u062F\u0647"), _react["default"].createElement(_reactBootstrap.Badge, {
    pill: true,
    variant: "secondary"
  }, "\u062E\u0627\u0631\u062C \u0627\u0632 \u062F\u0633\u062A\u0631\u0633"));
};

var _default = IndicatorBadges;
exports["default"] = _default;