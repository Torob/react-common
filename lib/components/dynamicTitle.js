"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTitle = exports.TitleComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var TitleComponent = function TitleComponent(_ref) {
  var title = _ref.title;
  var defaultTitle = 'پنل جمع سپاری ترب';
  return _react["default"].createElement(_reactHelmet["default"], null, _react["default"].createElement("title", null, title ? title + ' | ' + defaultTitle : defaultTitle));
}; // withTitle function


exports.TitleComponent = TitleComponent;

var withTitle = function withTitle(_ref2) {
  var Component = _ref2.component,
      title = _ref2.title;
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2["default"])(Title, _React$Component);

      function Title() {
        (0, _classCallCheck2["default"])(this, Title);
        return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Title).apply(this, arguments));
      }

      (0, _createClass2["default"])(Title, [{
        key: "render",
        value: function render() {
          return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(TitleComponent, {
            title: title
          }), _react["default"].createElement(Component, this.props));
        }
      }]);
      return Title;
    }(_react["default"].Component)
  );
};

exports.withTitle = withTitle;