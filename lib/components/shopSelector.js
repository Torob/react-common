"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticShopSelector = exports.DynamicShopSelector = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _auth = require("../providers/auth");

var _useTorobAPI3 = _interopRequireDefault(require("../hooks/useTorobAPI"));

var _urls = _interopRequireDefault(require("../urls"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DynamicShopSelector = function DynamicShopSelector(_ref) {
  var userShops = _ref.userShops,
      _onChange = _ref.onChange;

  if (userShops) {
    var _useAuth = (0, _auth.useAuth)(),
        user = _useAuth.user,
        activeInstance = _useAuth.activeInstance,
        setActiveInstance = _useAuth.setActiveInstance;

    var shops = user.user.panel_accesses[0].objects.map(function (shop) {
      return {
        value: shop.instance_id,
        label: shop.name
      };
    });
    return _react["default"].createElement(_reactSelect["default"], {
      isRtl: true,
      placeholder: 'همه',
      options: shops,
      onChange: function onChange(e) {
        return setActiveInstance(_objectSpread({}, activeInstance, {
          instanceId: e.value,
          instanceName: e.label
        }));
      },
      value: {
        value: activeInstance.instanceId,
        label: activeInstance.instanceName
      }
    });
  } else {
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

    return _react["default"].createElement(_reactSelect["default"], {
      isRtl: true,
      placeholder: 'همه',
      options: resource.data.results.map(function (shop) {
        return {
          value: shop.id,
          label: shop.name
        };
      }),
      isLoading: resource.isLoading,
      isDisabled: resource.isLoading,
      onChange: function onChange(e) {
        return _onChange(e.value);
      }
    });
  }
};

exports.DynamicShopSelector = DynamicShopSelector;

var StaticShopSelector = function StaticShopSelector(_ref2) {
  var isLoading = _ref2.isLoading,
      isError = _ref2.isError,
      shops = _ref2.shops,
      _onChange2 = _ref2.onChange;

  if (isError) {
    return _react["default"].createElement(_reactSelect["default"], {
      isRtl: true,
      placeholder: 'خطا!',
      options: [],
      isDisabled: true
    });
  }

  shops = shops && shops.length ? shops.map(function (shop) {
    return {
      value: shop.id,
      label: shop.name
    };
  }) : [];
  return _react["default"].createElement(_reactSelect["default"], {
    isRtl: true,
    placeholder: 'همه',
    options: shops,
    isLoading: isLoading,
    isDisabled: isLoading,
    onChange: function onChange(e) {
      return _onChange2(e.value);
    }
  });
};

exports.StaticShopSelector = StaticShopSelector;