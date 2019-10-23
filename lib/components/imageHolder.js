"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactContentLoader = _interopRequireDefault(require("react-content-loader"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ImageHolder = function ImageHolder(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;

  var _useState = (0, _react.useState)(undefined),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(function () {}),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  function asyncImageLoader(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.src = url;

      image.onload = function () {
        return resolve(image);
      };

      image.onerror = function () {
        return reject(new Error('could not load image'));
      };
    });
  }

  (0, _react.useEffect)(function () {
    function loadImage() {
      return _loadImage.apply(this, arguments);
    }

    function _loadImage() {
      _loadImage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return asyncImageLoader(src);

              case 3:
                res = _context.sent;
                width && (res.style.width = width);
                height && (res.style.height = height);
                setImage(res);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                setError(_context.t0);

              case 12:
                setIsLoading(false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));
      return _loadImage.apply(this, arguments);
    }

    loadImage();
  }, [setIsLoading, setImage, setError]);

  if (isLoading) {
    return _react["default"].createElement(_reactContentLoader["default"], null, _react["default"].createElement("rect", {
      x: "14",
      y: "20",
      rx: "5",
      ry: "5",
      width: "173",
      height: "150"
    }));
  }

  if (error) {
    return _react["default"].createElement("img", {
      style: style,
      alt: 'something',
      src: "https://via.placeholder.com/".concat(width || 70, "x").concat(height || 70)
    });
  }

  return _react["default"].createElement("div", {
    style: _objectSpread({}, style, {
      display: 'flex',
      justifyContent: 'center'
    }),
    ref: function ref(nodeElement) {
      nodeElement && nodeElement.appendChild(image);
    }
  });
};

var _default = ImageHolder;
exports["default"] = _default;