"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jquery = _interopRequireDefault(require("jquery"));

// import URLS from './urls';
window.jQuery = _jquery["default"];
window.$ = _jquery["default"];

require('../lib/persian-datepicker/persianDatepicker.js');

require('../lib/persian-datepicker/persianDatepicker-default.css'); // it's a react component wrapper for persian date picker.


var InputDate =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(InputDate, _Component);

  function InputDate() {
    (0, _classCallCheck2["default"])(this, InputDate);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InputDate).apply(this, arguments));
  }

  (0, _createClass2["default"])(InputDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      // persian callender is used under the hood.
      var el = (0, _jquery["default"])("#".concat(this.props.id));
      el.persianDatepicker({
        formatDate: 'YYYY-MM-DD',
        onSelect: function onSelect() {
          var val = el.attr('data-jDate');

          _this.props.onChange(val);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          error = _this$props.error;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Form.Control, {
        type: "text",
        id: id,
        onChange: onChange,
        value: value,
        disabled: disabled,
        autoComplete: "off",
        size: "sm",
        isInvalid: Boolean(error)
      }), Boolean(error) ? _react["default"].createElement(_reactBootstrap.Form.Control.Feedback, {
        type: "invalid",
        style: {
          width: 'unset'
        }
      }, error) : null);
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        value: _propTypes["default"].any.isRequired,
        id: _propTypes["default"].string.isRequired,
        onChange: _propTypes["default"].func.isRequired,
        disabled: _propTypes["default"].bool.isRequired,
        error: _propTypes["default"].string
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        error: ''
      };
    }
  }]);
  return InputDate;
}(_react.Component);

var _default = InputDate;
exports["default"] = _default;