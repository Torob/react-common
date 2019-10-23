"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _axios = _interopRequireDefault(require("../components/axios"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dataFetchReducer = function dataFetchReducer(state, action) {
  switch (action.type) {
    case 'API_CALL_INIT':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'API_CALL_SUCCESS':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload
      });

    case 'API_CALL_FAILURE':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    case 'SET_LOADING_FALSE':
      return _objectSpread({}, state, {
        isLoading: false
      });

    default:
      throw new Error();
  }
};

var useTorobAPI = function useTorobAPI(initialConfig, initialData) {
  var firstRun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _useState = (0, _react.useState)(initialConfig),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _useReducer = (0, _react.useReducer)(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: initialData
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFirstRun = (0, _react.useRef)(!firstRun);
  (0, _react.useEffect)(function () {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      dispatch({
        type: 'SET_LOADING_FALSE'
      });
      return;
    }

    var didCancel = false;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: 'API_CALL_INIT'
                });
                _context.prev = 1;
                _context.next = 4;
                return (0, _axios["default"])(_objectSpread({}, config));

              case 4:
                result = _context.sent;

                if (!didCancel) {
                  dispatch({
                    type: 'API_CALL_SUCCESS',
                    payload: result.data
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                if (!didCancel) {
                  dispatch({
                    type: 'API_CALL_FAILURE'
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
    return function () {
      didCancel = true;
    };
  }, [config]);
  return [state, setConfig];
};

var _default = useTorobAPI;
exports["default"] = _default;