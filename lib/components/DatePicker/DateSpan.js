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

var _reactBootstrap = require("react-bootstrap");

var _utils = require("../../utils");

var _InputDate = _interopRequireDefault(require("./InputDate"));

var DateSpan =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DateSpan, _Component);
  (0, _createClass2["default"])(DateSpan, null, [{
    key: "propTypes",
    get: function get() {
      return {
        id: _propTypes["default"].string.isRequired,
        loading: _propTypes["default"].bool.isRequired,
        startDate: _propTypes["default"].string.isRequired,
        endDate: _propTypes["default"].string.isRequired,
        onChange: _propTypes["default"].func.isRequired
      };
    }
  }]);

  function DateSpan(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DateSpan);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DateSpan).call(this, props));
    _this.updateStartDate = _this.updateStartDate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateEndDate = _this.updateEndDate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(DateSpan, [{
    key: "updateStartDate",
    value: function updateStartDate(val) {
      // TODO: check if form is valid.
      var _this$props = this.props,
          endDate = _this$props.endDate,
          onChange = _this$props.onChange;
      onChange(val, endDate);
    }
  }, {
    key: "updateEndDate",
    value: function updateEndDate(val) {
      // TODO: check if form is valid.
      var _this$props2 = this.props,
          startDate = _this$props2.startDate,
          onChange = _this$props2.onChange;
      onChange(startDate, val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          startDate = _this$props3.startDate,
          endDate = _this$props3.endDate,
          loading = _this$props3.loading,
          id = _this$props3.id;
      var startDateG = (0, _utils.getGregorianDate)(startDate);
      var endDateG = (0, _utils.getGregorianDate)(endDate);
      var error = startDateG && endDateG && startDateG > endDateG ? 'تاریخ شروع باید قبل از تاریخ پایان باشد.' : '';
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Form.Group, null, _react["default"].createElement(_reactBootstrap.Form.Label, {
        htmlFor: "".concat(id, "-start-date")
      }, "\u0627\u0632 \u062A\u0627\u0631\u06CC\u062E"), ' ', _react["default"].createElement(_InputDate["default"], {
        id: "".concat(id, "-start-date"),
        onChange: this.updateStartDate,
        value: startDate,
        disabled: loading,
        error: error
      }), ' '), _react["default"].createElement(_reactBootstrap.Form.Group, null, _react["default"].createElement(_reactBootstrap.Form.Label, {
        htmlFor: "".concat(id, "-end-date")
      }, "\u062A\u0627 \u062A\u0627\u0631\u06CC\u062E"), ' ', _react["default"].createElement(_InputDate["default"], {
        id: "".concat(id, "-end-date"),
        onChange: this.updateEndDate,
        value: endDate,
        disabled: loading
      })));
    }
  }]);
  return DateSpan;
}(_react.Component);

var _default = DateSpan;
exports["default"] = _default;