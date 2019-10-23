"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFarsiNumber = toFarsiNumber;
exports.humanDate = humanDate;
exports.humanDate2 = humanDate2;
exports.humanDateDiff = humanDateDiff;
exports.getTorobName = getTorobName;
exports.loadScript = loadScript;
exports.isCookieValid = isCookieValid;
exports.saveToCookie = saveToCookie;
exports.getFromCookie = getFromCookie;
exports.addCommas = addCommas;
exports.getCategoryChildren = getCategoryChildren;
exports.getCategoryParents = getCategoryParents;
exports.getProductLink = getProductLink;
exports.tableErrorColor = tableErrorColor;
exports.stringifyQueryString = stringifyQueryString;
exports.parseQueryString = parseQueryString;
exports.getGregorianDate = getGregorianDate;
exports.chartColors = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

window.$ = _jquery["default"];
window.jQuery = _jquery["default"];

require('./lib/persian-datepicker/persianDatepicker.js');

require('./lib/persian-datepicker/persianDatepicker-default.css');

function humanDate(jd) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd m y';
  var parts = jd.split('-');
  var months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  return format.replace(/y/gi, parts[0]).replace(/m/gi, months[parts[1] - 1]).replace(/d/gi, parts[2]);
}

function humanDate2() {
  var jd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var d = new Date();

  if (jd) {
    d = new Date(jd);
  }

  var jdf = new window.jDateFunctions();
  var date = jdf.getPCalendarDate(jdf.getJulianDay(d)).toString('DD NM YYYY');

  var twoPos = function twoPos(inp) {
    return "0".concat(inp).slice(-2);
  };

  if (compact) {
    return date;
  }

  return "".concat(date, ", \u0633\u0627\u0639\u062A ").concat(twoPos(d.getHours()), ":").concat(twoPos(d.getMinutes()), ":").concat(twoPos(d.getSeconds()));
}

function getGregorianDate(d) {
  if (!d) {
    return null;
  }

  var jdf = new window.jDateFunctions();
  var parts = d.split('-');
  return jdf.getGDate({
    year: parseInt(parts[0]),
    month: parseInt(parts[1]),
    date: parseInt(parts[2])
  });
}

function humanDateDiff(jd) {
  if (!jd) {
    return '';
  }

  var d = new Date(jd).getTime();
  var now = new Date().getTime();
  var diff = Math.round((now - d) / 1000);
  var hour = 3600;

  if (diff < hour) {
    return [diff, "".concat(Math.floor(diff / 60), " \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634")];
  }

  if (diff < hour * 24) {
    return [diff, "".concat(Math.floor(diff / hour), " \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")];
  }

  return [diff, "".concat(Math.floor(diff / (hour * 24)), " \u0631\u0648\u0632 \u067E\u06CC\u0634")];
}

function getTorobName(item) {
  return item.persian_name === '' ? item.english_name : item.persian_name;
}

function loadScript(url) {
  var l = document.getElementsByTagName('script');
  var item = Array.prototype.find.call(l, function (i) {
    return i.src === url;
  });

  if (!item) {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }
}

function addCommas(input) {
  var nStr = "".concat(input);
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? ".".concat(x[1]) : '';
  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1,$2');
  }

  return x1 + x2;
}

function isCookieValid(key) {
  var cookies = new _universalCookie["default"]();
  var now = Math.floor(new Date().getTime() / 1000);
  var time = parseInt(cookies.get("".concat(key, "_time")) || -1, 10);

  if (time === -1) {
    return null;
  }

  return now <= time;
}

function saveToCookie(key, value, validFor) {
  var cookies = new _universalCookie["default"]();
  cookies.set(key, value, {
    path: '/'
  });
  var now = Math.floor(new Date().getTime() / 1000);

  if (validFor) {
    cookies.set("".concat(key, "_time"), now + validFor, {
      path: '/'
    });
  }
} // state 0: expired, state -1: undefined, state 1: ok.


function getFromCookie(key) {
  var defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var validFor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3600 * 24;
  var cookies = new _universalCookie["default"]();
  var valid = isCookieValid(key);

  if (valid === null) {
    saveToCookie(key, defaultVal, validFor);
    return {
      value: defaultVal,
      state: 1
    };
  } else if (valid) {
    return {
      value: cookies.get(key),
      state: 1
    };
  }

  return {
    value: cookies.get(key),
    state: 0
  };
}

function getCategoryChildren(catId, allCategories) {
  var childs = allCategories.filter(function (i) {
    return i.category_parent === catId;
  }).map(function (child) {
    return child.id;
  });

  if (childs.length === 0) {
    return [catId];
  }

  var res = childs.map(function (child) {
    return getCategoryChildren(child, allCategories);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []);
  res.push(catId);
  return res;
}

function getCategoryParents(id, categories) {
  var cat = categories.find(function (p) {
    return p.id === id;
  });

  if (!cat) {
    return [];
  }

  var parents = [cat];

  while (cat && cat.category_parent) {
    cat = categories.find(function (item) {
      return function (p) {
        return p.id === item.category_parent;
      };
    }(cat));
    parents.push(cat);
  }

  return parents.reverse();
}

function getProductLink(product, myShop) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return _react["default"].createElement("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    href: product.torob_page_url
  }, getTorobName(product));
}

function tableErrorColor(number) {
  var warningLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var errorLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  var style = {
    flexGrow: 1,
    margin: '-6px -4px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  if (number > errorLimit) {
    return _objectSpread({}, style, {
      color: '#FFF',
      backgroundColor: '#FF6B6B'
    });
  }

  if (number > warningLimit) {
    return _objectSpread({}, style, {
      color: '#111',
      backgroundColor: '#F9D423'
    });
  }

  return _objectSpread({}, style);
}

function parseQueryString(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

  for (var i = 0; i < pairs.length; i += 1) {
    if (pairs[i] === '') continue;
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
}

function stringifyQueryString(obj) {
  return Object.keys(obj).reduce(function (a, b) {
    return "".concat(a).concat(b, "=").concat(encodeURIComponent(obj[b]), "&");
  }, '?').slice(0, -1);
}

function toFarsiNumber(n) {
  var farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (n || n === 0) {
    return n.toString().replace(/\d/g, function (x) {
      return farsiDigits[x];
    });
  }
}

var chartColors = [// Cyan
'#42d4f4', // Yellow
'#ffe119', // Red
'#e6194B', // Green
'#3cb44b', // Orange
'#f58231', // Blue
'#4363d8', // Magenta
'#f032e6', // Pink
'#fabebe', // Teal
'#469990', // Lavender
'#e6beff', // Brown
'#9A6324', // Beige
'#fffac8', // Maroon
'#800000', // Mint
'#aaffc3', // Navy
'#000075', // Grey
'#a9a9a9'];
exports.chartColors = chartColors;