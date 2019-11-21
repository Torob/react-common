/* eslint new-cap: 0 */
import React from 'react';
import jquery from 'jquery';
import Cookies from 'universal-cookie';

window.$ = jquery;
window.jQuery = jquery;
require('./lib/persian-datepicker/persianDatepicker.js');
require('./lib/persian-datepicker/persianDatepicker-default.css');

function humanDate(jd, format = 'd m y') {
  const parts = jd.split('-');
  const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  return format
    .replace(/y/gi, parts[0])
    .replace(/m/gi, months[parts[1] - 1])
    .replace(/d/gi, parts[2]);
}
function humanDate2(jd = null, compact = false) {
  let d = new Date();
  if (jd) {
    d = new Date(jd);
  }
  const jdf = new window.jDateFunctions();
  const date = jdf.getPCalendarDate(jdf.getJulianDay(d)).toString('DD NM YYYY');
  const twoPos = inp => `0${inp}`.slice(-2);
  if (compact) {
    return date;
  }
  return `${date}, ساعت ${twoPos(d.getHours())}:${twoPos(d.getMinutes())}:${twoPos(d.getSeconds())}`;
}
function getGregorianDate(d) {
  if (!d) {
    return null;
  }
  const jdf = new window.jDateFunctions();
  const parts = d.split('-');
  return jdf.getGDate({ year: parseInt(parts[0]), month: parseInt(parts[1]), date: parseInt(parts[2]) });
}
function humanDateDiff(jd) {
  if (!jd) {
    return '';
  }
  const d = new Date(jd).getTime();
  const now = new Date().getTime();
  const diff = Math.round((now - d) / 1000);
  const hour = 3600;
  if (diff < hour) {
    return [diff, `${Math.floor(diff / 60)} دقیقه پیش`];
  }
  if (diff < hour * 24) {
    return [diff, `${Math.floor(diff / hour)} ساعت پیش`];
  }
  return [diff, `${Math.floor(diff / (hour * 24))} روز پیش`];
}
function getTorobName(item) {
  return item.persian_name === '' ? item.english_name : item.persian_name;
}
function loadScript(url) {
  const l = document.getElementsByTagName('script');
  const item = Array.prototype.find.call(l, i => i.src === url);
  if (!item) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }
}
function addCommas(input) {
  const nStr = `${input}`;
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? `.${x[1]}` : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1,$2');
  }
  return x1 + x2;
}
function isCookieValid(key) {
  const cookies = new Cookies();
  const now = Math.floor(new Date().getTime() / 1000);
  const time = parseInt(cookies.get(`${key}_time`) || -1, 10);
  if (time === -1) {
    return null;
  }
  return now <= time;
}
function saveToCookie(key, value, validFor) {
  const cookies = new Cookies();
  cookies.set(key, value, { path: '/' });
  const now = Math.floor(new Date().getTime() / 1000);
  if (validFor) {
    cookies.set(`${key}_time`, now + validFor, { path: '/' });
  }
}
// state 0: expired, state -1: undefined, state 1: ok.
function getFromCookie(key, defaultVal = 0, validFor = 3600 * 24) {
  const cookies = new Cookies();
  const valid = isCookieValid(key);
  if (valid === null) {
    saveToCookie(key, defaultVal, validFor);
    return { value: defaultVal, state: 1 };
  } else if (valid) {
    return { value: cookies.get(key), state: 1 };
  }
  return { value: cookies.get(key), state: 0 };
}
function getCategoryChildren(catId, allCategories) {
  const childs = allCategories.filter(i => i.category_parent === catId).map(child => child.id);
  if (childs.length === 0) {
    return [catId];
  }
  const res = childs.map(child => getCategoryChildren(child, allCategories)).reduce((a, b) => a.concat(b), []);
  res.push(catId);
  return res;
}
function getCategoryParents(id, categories) {
  let cat = categories.find(p => p.id === id);
  if (!cat) {
    return [];
  }
  const parents = [cat];
  while (cat && cat.category_parent) {
    cat = categories.find((item => p => p.id === item.category_parent)(cat));
    parents.push(cat);
  }
  return parents.reverse();
}
function getProductLink(product, myShop, prefix = '') {
  return (
    <a target="_blank" rel="noreferrer noopener" href={product.torob_page_url}>
      {getTorobName(product)}
    </a>
  );
}
function tableErrorColor(number, warningLimit = 10, errorLimit = 40) {
  const style = { flexGrow: 1, margin: '-6px -4px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' };
  if (number > errorLimit) {
    return { ...style, color: '#FFF', backgroundColor: '#FF6B6B' };
  }
  if (number > warningLimit) {
    return { ...style, color: '#111', backgroundColor: '#F9D423' };
  }
  return { ...style };
}
function parseQueryString(queryString) {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i += 1) {
    if (pairs[i] === '') continue;
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
function stringifyQueryString(obj) {
  return Object.keys(obj)
    .reduce((a, b) => `${a}${b}=${encodeURIComponent(obj[b])}&`, '?')
    .slice(0, -1);
}

export function toFarsiNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (n || n === 0) {
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  }
}

const chartColors = [
  // Cyan
  '#42d4f4',
  // Yellow
  '#ffe119',
  // Red
  '#e6194B',
  // Green
  '#3cb44b',
  // Orange
  '#f58231',
  // Blue
  '#4363d8',
  // Magenta
  '#f032e6',
  // Pink
  '#fabebe',
  // Teal
  '#469990',
  // Lavender
  '#e6beff',
  // Brown
  '#9A6324',
  // Beige
  '#fffac8',
  // Maroon
  '#800000',
  // Mint
  '#aaffc3',
  // Navy
  '#000075',
  // Grey
  '#a9a9a9',
];

function toFarsiNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (n || n === 0) {
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  }
}

export {
  humanDate,
  humanDate2,
  humanDateDiff,
  getTorobName,
  loadScript,
  isCookieValid,
  saveToCookie,
  getFromCookie,
  addCommas,
  getCategoryChildren,
  getCategoryParents,
  getProductLink,
  tableErrorColor,
  stringifyQueryString,
  parseQueryString,
  chartColors,
  getGregorianDate,
  toFarsiNumber,
};
