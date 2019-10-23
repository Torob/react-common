"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

_axios["default"].defaults.withCredentials = true;
_axios["default"].defaults.xsrfCookieName = 'csrftoken';
_axios["default"].defaults.xsrfHeaderName = 'X-CSRFTOKEN';
var _default = _axios["default"];
exports["default"] = _default;