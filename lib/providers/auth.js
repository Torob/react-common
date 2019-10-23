"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = exports.AuthProvider = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useTorobAPI3 = _interopRequireDefault(require("../hooks/useTorobAPI"));

var _urls = _interopRequireDefault(require("../urls"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var context = _react["default"].createContext();

var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;

  var _useTorobAPI = (0, _useTorobAPI3["default"])({
    method: 'GET',
    url: _urls["default"].auth.info()
  }, {}),
      _useTorobAPI2 = (0, _slicedToArray2["default"])(_useTorobAPI, 1),
      resource = _useTorobAPI2[0];

  var _useState = (0, _react.useState)({
    instanceType: 'internet_shop',
    instanceId: 0,
    instanceName: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeInstance = _useState2[0],
      setActiveInstance = _useState2[1];

  (0, _react.useEffect)(function () {
    var tempInstance = {};

    if (resource.isLoading || !resource.data) {
      tempInstance.instanceId = 0;
    } else {
      if (resource.data.panel_accesses.length && resource.data.panel_accesses[0].objects.length) tempInstance.instanceId = resource.data.panel_accesses[0].objects[0].instance_id;
      tempInstance.instanceName = resource.data.panel_accesses[0].objects[0].name;
    }

    setActiveInstance(_objectSpread({}, activeInstance, {}, tempInstance));
  }, [resource]);
  var user = {
    isLoading: resource.isLoading,
    isAuthenticated: !resource.isError,
    user: resource.data
  };
  return _react["default"].createElement(context.Provider, {
    value: {
      user: user,
      activeInstance: activeInstance,
      setActiveInstance: setActiveInstance
    }
  }, children);
};

exports.AuthProvider = AuthProvider;

var useAuth = function useAuth() {
  return (0, _react.useContext)(context);
};

exports.useAuth = useAuth;