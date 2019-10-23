"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ClickableText =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ClickableText, _Component);
  (0, _createClass2["default"])(ClickableText, null, [{
    key: "propTypes",
    get: function get() {
      return {
        innerText: _propTypes["default"].string,
        onCtrlClick: _propTypes["default"].func,
        onShiftClick: _propTypes["default"].func,
        onSimpleClick: _propTypes["default"].func,
        onSelection: _propTypes["default"].func,
        disableTextSelection: _propTypes["default"].bool
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        innerText: '',
        onCtrlClick: function onCtrlClick() {
          return undefined;
        },
        onShiftClick: function onShiftClick() {
          return undefined;
        },
        onSimpleClick: function onSimpleClick() {
          return undefined;
        },
        onSelection: function onSelection() {
          return undefined;
        },
        disableTextSelection: false
      };
    }
  }]);

  function ClickableText(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClickableText);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClickableText).call(this, props));
    _this.state = {
      selectedWord: ''
    };
    _this.handleOnSelectionChange = _this.handleOnSelectionChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getSelectedWord = _this.getSelectedWord.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ClickableText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('selectionchange', this.handleOnSelectionChange);
    }
  }, {
    key: "componenetWillUnmount",
    value: function componenetWillUnmount() {
      document.removeEventListener('selectionchange', this.handleOnSelectionChange);
    }
  }, {
    key: "addSpansToText",
    value: function addSpansToText() {
      var _this2 = this;

      var innerText = this.props.innerText;

      if (innerText) {
        return innerText.split(/[ -]+/).map(function (item, index) {
          return item === '\n' ? _react["default"].createElement("br", {
            key: index
          }) : _react["default"].createElement("span", {
            key: index,
            onClick: function onClick(e) {
              return _this2.handleClickOnWord(e);
            }
          }, item, ' ');
        });
      }
    }
  }, {
    key: "handleClickOnWord",
    value: function handleClickOnWord(event) {
      var e = _objectSpread({}, event);

      var _this$props = this.props,
          onCtrlClick = _this$props.onCtrlClick,
          onShiftClick = _this$props.onShiftClick,
          onSimpleClick = _this$props.onSimpleClick,
          callbackFunction = _this$props.callbackFunction;

      if (event.ctrlKey && onCtrlClick) {
        onCtrlClick(e.currentTarget.innerText);
      } else if (e.shiftKey && onShiftClick) {
        onShiftClick(e.currentTarget.innerText);
      } else if (onSimpleClick) {
        if (!(this.state && this.state.selectedWord)) {
          onSimpleClick(e.currentTarget.innerText);
        }
      }

      if (callbackFunction) {
        callbackFunction();
      }
    }
  }, {
    key: "getSelectedWord",
    value: function getSelectedWord(e) {
      var _this$props2 = this.props,
          onSelection = _this$props2.onSelection,
          callbackFunction = _this$props2.callbackFunction;
      var text = '';

      if (window.getSelection) {
        text = window.getSelection();
      } else if (document.getSelection) {
        text = document.getSelection();
      } else if (document.selection) {
        text = document.selection.createRange().text;
      }

      this.setState({
        selectedWord: text.toString()
      });
      onSelection(text.toString());

      if (callbackFunction) {
        callbackFunction();
      }
    }
  }, {
    key: "handleOnSelectionChange",
    value: function handleOnSelectionChange(e) {
      if (!this.nv) {
        return false;
      }

      this.nv.onmouseup = this.getSelectedWord;

      if (!document.all) {
        document.captureEvents(Event.MOUSEUP);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var disableTextSelection = this.props.disableTextSelection;
      var disabledTextStyle = {
        webkitTouchCallout: 'none',
        webkitUserSelect: 'none',
        khtmlUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      };
      return _react["default"].createElement("div", {
        className: "textHighlightHint",
        ref: function ref(elem) {
          return _this3.nv = elem;
        },
        style: disableTextSelection ? disabledTextStyle : undefined,
        id: 'clickable-inner-text'
      }, this.addSpansToText());
    }
  }]);
  return ClickableText;
}(_react.Component);

exports["default"] = ClickableText;