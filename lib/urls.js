"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var env = process.env.NODE_ENV;
var API_BASE_URL = env === 'production' ? 'https://api.torob.com' : 'http://localhost:8000';
var TOROB_HOME = 'https://torob.com/';
var BASE_URLS = {
  torob: "".concat(API_BASE_URL, "/")
};
var urls = {
  amplitude: function amplitude() {
    return 'https://api.amplitude.com/httpapi/';
  },
  torob: function torob() {
    return TOROB_HOME;
  },
  auth: {
    info: function info() {
      return "".concat(BASE_URLS.torob, "v4/user/details/");
    },
    logout: function logout() {
      return "".concat(BASE_URLS.torob, "v4/user/logout/");
    }
  },
  common: {
    shopsList: function shopsList() {
      return "".concat(BASE_URLS.torob, "v4/internet-shop/list/?format=json");
    },
    shopDetails: function shopDetails(shopId) {
      return "".concat(BASE_URLS.torob, "v4/internet-shop/details/?id=").concat(shopId);
    },
    categoriesList: function categoriesList() {
      return "".concat(BASE_URLS.torob, "v4/category/list/?format=json");
    }
  }
};
var _default = urls;
exports["default"] = _default;