"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _aphrodite = require("aphrodite");

var _torobStyles = require("./torobStyles");

var _categorySelector = require("./categorySelector");

var SearchFilters = function SearchFilters(_ref) {
  var onSubmit = _ref.onSubmit,
      values = _ref.values,
      setParams = _ref.setParams,
      isDetails = _ref.isDetails,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? {
    isLoading: false,
    isError: false,
    data: undefined
  } : _ref$categories;
  var isConfirmedOptions = [{
    value: 'همه',
    label: 'همه'
  }, {
    value: 'true',
    label: 'تایید شده'
  }, {
    value: 'false',
    label: 'تایید نشده'
  }];
  return _react["default"].createElement(_reactBootstrap.Row, {
    className: (0, _aphrodite.css)(styles.searchFiltersWrapepr)
  }, _react["default"].createElement(_reactBootstrap.Form.Group, {
    controlId: "formBasicPassword",
    className: (0, _aphrodite.css)(styles.searchFilterCategorySelect)
  }, _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.searchFilterInput)
  }, _react["default"].createElement(_reactBootstrap.Button, {
    className: (0, _aphrodite.css)(styles.submitFilterButton, _torobStyles.bgStyles['bg-blue']),
    onClick: onSubmit
  }, 'جستجو')), isDetails ? _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.searchFilterInput)
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "\u0642\u06CC\u0645\u062A (\u062A\u0648\u0645\u0627\u0646)"), _react["default"].createElement(_reactBootstrap.Form, null, _react["default"].createElement(_reactBootstrap.Form.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.InputGroup, {
    className: "mb-3"
  }, _react["default"].createElement(_reactBootstrap.InputGroup.Prepend, null, _react["default"].createElement(_reactBootstrap.InputGroup.Text, {
    id: "basic-addon1"
  }, "\u0627\u0632")), _react["default"].createElement(_reactBootstrap.Form.Control, {
    value: values ? values.price__gt : '',
    onChange: function onChange(e) {
      return setParams({
        price__gt: e.target.value
      });
    }
  }))), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.InputGroup, {
    className: "mb-3"
  }, _react["default"].createElement(_reactBootstrap.InputGroup.Prepend, null, _react["default"].createElement(_reactBootstrap.InputGroup.Text, {
    id: "basic-addon1"
  }, "\u062A\u0627")), _react["default"].createElement(_reactBootstrap.Form.Control, {
    value: values ? values.price__lt : '',
    onChange: function onChange(e) {
      return setParams({
        price__lt: e.target.value
      });
    }
  })))))) : _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.searchFilterInput)
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "\u0648\u0636\u0639\u06CC\u062A \u062A\u0627\u06CC\u06CC\u062F"), _react["default"].createElement(_reactSelect["default"], {
    options: isConfirmedOptions,
    isRtl: true,
    placeholder: 'همه',
    onChange: function onChange(e) {
      return setParams({
        isConfirmed: e.value
      });
    }
  })), _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.searchFilterInput)
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "\u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC"), _react["default"].createElement(_categorySelector.StaticCategorySelector, {
    isLoading: categories.isLoading,
    isError: categories.isError,
    categories: categories.data,
    onChange: function onChange(e) {
      return setParams({
        category: e.value
      });
    }
  })), _react["default"].createElement("div", {
    className: (0, _aphrodite.css)(styles.searchFilterInput)
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "\u062C\u0633\u062A\u062C\u0648 \u06A9\u0627\u0644\u0627"), _react["default"].createElement(_reactBootstrap.FormControl, {
    value: values ? values.query : '',
    onChange: function onChange(e) {
      return setParams({
        query: e.target.value
      });
    },
    placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0644\u0627",
    "aria-label": "Recipient's username",
    "aria-describedby": "basic-addon2"
  }))));
};

var styles = _aphrodite.StyleSheet.create({
  searchFiltersWrapepr: {
    'box-shadow': 'inset 0px -1px 0px #e6e6e6'
  },
  searchFilterCategorySelect: {
    width: '100%',
    margin: '0px auto',
    'margin-bottom': '20px',
    direction: 'rtl'
  },
  submitFilterButton: {
    width: '111px',
    height: '40px',
    'margin-left': '-10px',
    'margin-top': '30px'
  },
  searchFilterInput: {
    display: 'inline-block',
    width: '20%',
    "float": 'left',
    margin: '0px 1%'
  }
});

var _default = SearchFilters;
exports["default"] = _default;