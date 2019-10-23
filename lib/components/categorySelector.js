"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticCategorySelector = exports.DynamicCategorySelector = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _useTorobAPI3 = _interopRequireDefault(require("../hooks/useTorobAPI"));

var _urls = _interopRequireDefault(require("../urls"));

var DynamicCategorySelector = function DynamicCategorySelector(_ref) {
  var onChange = _ref.onChange;

  var _useTorobAPI = (0, _useTorobAPI3["default"])({
    method: 'GET',
    url: _urls["default"].common.categoriesList()
  }, []),
      _useTorobAPI2 = (0, _slicedToArray2["default"])(_useTorobAPI, 1),
      resource = _useTorobAPI2[0];

  if (resource.isError) {
    return _react["default"].createElement(_reactSelect["default"], {
      isRtl: true,
      placeholder: 'خطا!',
      options: [],
      isDisabled: true
    });
  }

  var categories = resource.data.results.map(function (cat) {
    return {
      value: cat.id,
      label: cat.title
    };
  });
  return _react["default"].createElement(_reactSelect["default"], {
    isRtl: true,
    placeholder: 'همه',
    options: categories,
    isLoading: resource.isLoading,
    isDisabled: resource.isLoading,
    onChange: onChange
  });
};

exports.DynamicCategorySelector = DynamicCategorySelector;

var StaticCategorySelector = function StaticCategorySelector(_ref2) {
  var isLoading = _ref2.isLoading,
      isError = _ref2.isError,
      categories = _ref2.categories,
      onChange = _ref2.onChange;

  if (isError) {
    return _react["default"].createElement(_reactSelect["default"], {
      isRtl: true,
      placeholder: 'خطا!',
      options: [],
      isDisabled: true
    });
  }

  categories = categories && categories.length ? categories.map(function (cat) {
    return {
      value: cat.id,
      label: cat.title
    };
  }) : [];
  return _react["default"].createElement(_reactSelect["default"], {
    isRtl: true,
    placeholder: 'همه',
    options: categories,
    isLoading: isLoading,
    isDisabled: isLoading,
    onChange: onChange
  });
};

exports.StaticCategorySelector = StaticCategorySelector;