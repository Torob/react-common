"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var originalBodyOverflow = null;
var lockingCounter = 0;

var AutoLockScrolling =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AutoLockScrolling, _React$Component);

  function AutoLockScrolling() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AutoLockScrolling);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AutoLockScrolling)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.locked = false;
    return _this;
  }

  (0, _createClass2["default"])(AutoLockScrolling, [{
    key: "componentDidMount",
    // eslint-disable-line react/sort-comp
    value: function componentDidMount() {
      if (this.props.lock === true) this.preventScrolling();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lock !== nextProps.lock) {
        if (nextProps.lock) {
          this.preventScrolling();
        } else {
          this.allowScrolling();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.allowScrolling();
    }
  }, {
    key: "preventScrolling",
    value: function preventScrolling() {
      if (this.locked === true) return;
      lockingCounter = lockingCounter + 1;
      this.locked = true; //only lock the first time the component is mounted.

      if (lockingCounter === 1) {
        var body = document.getElementsByTagName('body')[0];
        originalBodyOverflow = body.style.overflow;
        body.style.overflow = 'hidden';
      }
    }
  }, {
    key: "allowScrolling",
    value: function allowScrolling() {
      if (this.locked === true) {
        lockingCounter = lockingCounter - 1;
        this.locked = false;
      }

      if (lockingCounter === 0 && originalBodyOverflow !== null) {
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = originalBodyOverflow || '';
        originalBodyOverflow = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return AutoLockScrolling;
}(_react["default"].Component);

exports["default"] = AutoLockScrolling;