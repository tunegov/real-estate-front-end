module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 222);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(46)();

routes.add('home', '/', '/').add('dashboard', '/app/dashbaord', 'app/dashboard').add('profile', '/app/profile', 'app/profile').add('deals', '/app/deals', 'app/deals').add('invoices', '/app/invoices', 'app/invoices').add('agents', '/app/agents', 'app/agents').add('create-listing', '/app/listing/new', '/app/listing/new').add('admin-dashboard', '/app/admin-area/dashboard', 'app/admin-area/dashboard').add('create-agent', '/app/admin-area/agents/create', 'app/admin-area/agents/create').add('view-agents', '/app/admin-area/agents/view', 'app/admin-area/agents/view').add('create-user', '/app/admin-area/customers/create', 'app/admin-area/customers/create').add('view-customers', '/app/admin-area/customers/view', 'app/admin-area/customers/view').add('create-admin', '/app/admin-area/admin/create', 'app/admin-area/admin/create').add('view-admin', '/app/admin-area/admin/view', 'app/admin-area/admin/view').add('view-deals', '/app/admin-area/deals/view', 'app/admin-area/deals/view')
/*
.add(
  'view-invoices',
  '/app/admin-area/invoices/view',
  'app/admin-area/invoices/view'
)
*/
.add('log-in', '/log-in').add('sign-up', '/sign-up').add('listings', '/listings').add('listing', '/listing').add('agent', '/agent').add('agents-front-end', '/agents', '/agents').add('new-developments', '/new-developments').add('apply', '/apply').add('about', '/about');
module.exports = routes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return graphQlClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);



var _getConfig = __WEBPACK_IMPORTED_MODULE_1_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var graphQlClient = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](publicRuntimeConfig.ENDPOINT, {
  credentials: publicRuntimeConfig.CREDENTIALS
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var customer = 'customer';
var agent = 'agent';
var admin = 'admin';
var superAdmin = 'super-admin';
var anonymous = 'anonymous';
module.exports = {
  customer: customer,
  agent: agent,
  admin: admin,
  superAdmin: superAdmin,
  anonymous: anonymous
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tooltip");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = unhyphenate;
// String utils
//
// resources:
//  -- mout, https://github.com/mout/mout/tree/master/src/string

/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
  return str.toLowerCase();
}
/**
 * "Safer" String.toUpperCase()
 */


function upperCase(str) {
  return str.toUpperCase();
}
/**
* Convert string to camelCase text.
*/


function camelCase(str) {
  str = replaceAccents(str);
  str = removeNonWord(str).replace(/\-/g, ' ') //convert all hyphens to spaces
  .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
  .replace(/\s+/g, '') //remove spaces
  .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase

  return str;
}
/**
 * Add space between camelCase text.
 */


function unCamelCase(str) {
  str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
  str = str.toLowerCase(); // add space between camelCase text

  return str;
}
/**
 * UPPERCASE first char of each word.
 */


var capitalize = function capitalize(str) {
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
};
/**
 * camelCase + UPPERCASE first char
 */

function pascalCase(str) {
  return camelCase(str).replace(/^[a-z]/, upperCase);
}

function normalizeLineBreaks(str, lineEnd) {
  lineEnd = lineEnd || 'n';
  return str.replace(/rn/g, lineEnd) // DOS
  .replace(/r/g, lineEnd) // Mac
  .replace(/n/g, lineEnd); // Unix
}
/**
* UPPERCASE first char of each sentence and lowercase other chars.
*/


function sentenceCase(str) {
  // Replace first char of each sentence (new line or after '.\s+') to
  // UPPERCASE
  return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}
/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 */


function slugify(str, delimeter) {
  if (delimeter == null) {
    delimeter = "-";
  }

  str = replaceAccents(str);
  str = removeNonWord(str);
  str = trim(str) //should come after removeNonWord
  .replace(/ +/g, delimeter) //replace spaces with delimeter
  .toLowerCase();
  return str;
}
/**
 * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */


function hyphenate(str) {
  str = unCamelCase(str);
  return slugify(str, "-");
}
/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */


function unhyphenate(str) {
  return str.split('-').join(' ');
}
/**
 * Replaces spaces with underscores, split camelCase text, remove
 * non-word chars, remove accents and convert to lower case.
 */

function underscore(str) {
  str = unCamelCase(str);
  return slugify(str, "_");
}
/**
 * Remove non-word chars.
 */


function removeNonWord(str) {
  return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
}
/**
 * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
 */


function normalizeLineBreaks(str, lineEnd) {
  lineEnd = lineEnd || '\n';
  return str.replace(/\r\n/g, lineEnd) // DOS
  .replace(/\r/g, lineEnd) // Mac
  .replace(/\n/g, lineEnd); // Unix
}
/**
* Replaces all accented chars with regular ones
*/


function replaceAccents(str) {
  // verifies if the String has accents and replace them
  if (str.search(/[\xC0-\xFF]/g) > -1) {
    str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
  }

  return str;
}
/**
 * Searches for a given substring
 */


function contains(str, substring, fromIndex) {
  return str.indexOf(substring, fromIndex) !== -1;
}
/**
 * Truncate string at full words.
 */


function crop(str, maxChars, append) {
  return truncate(str, maxChars, append, true);
}
/**
 * Escape RegExp string chars.
 */


function escapeRegExp(str) {
  var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
  return str.replace(ESCAPE_CHARS, '\\$&');
}
/**
 * Escapes a string for insertion into HTML.
 */


function escapeHtml(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  return str;
}
/**
 * Unescapes HTML special chars
 */


function unescapeHtml(str) {
  str = str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return str;
}
/**
* Escape string into unicode sequences
*/


function escapeUnicode(str, shouldEscapePrintable) {
  return str.replace(/[\s\S]/g, function (ch) {
    // skip printable ASCII chars if we should not escape them
    if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
      return ch;
    } // we use "000" and slice(-4) for brevity, need to pad zeros,
    // unicode escape always have 4 chars after "\u"


    return "\\u" + ('000' + ch.charCodeAt(0).toString(16)).slice(-4);
  });
}
/**
 * Remove HTML tags from string.
 */


function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}
/**
 * Remove non-printable ASCII chars
 */


function removeNonASCII(str) {
  // Matches non-printable ASCII chars -
  // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
  return str.replace(/[^\x20-\x7E]/g, '');
}
/**
 * String interpolation
 */


function interpolate(template, replacements, syntax) {
  var stache = /\{\{(\w+)\}\}/g; //mustache-like

  var replaceFn = function replaceFn(match, prop) {
    return prop in replacements ? replacements[prop] : '';
  };

  return template.replace(syntax || stache, replaceFn);
}
/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */


function rpad(str, minLen, ch) {
  ch = ch || ' ';
  return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}
/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */


function lpad(str, minLen, ch) {
  ch = ch || ' ';
  return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}
/**
* Repeat string n times
*/


function repeat(str, n) {
  return new Array(n + 1).join(str);
}
/**
* Limit number of chars.
*/


function truncate(str, maxChars, append, onlyFullWords) {
  append = append || '...';
  maxChars = onlyFullWords ? maxChars + 1 : maxChars;
  str = trim(str);

  if (str.length <= maxChars) {
    return str;
  }

  str = str.substr(0, maxChars - append.length); //crop at last space or remove trailing whitespace

  str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : trim(str);
  return str + append;
}

var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', "\xA0", "\u1680", "\u180E", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200A", "\u2028", "\u2029", "\u202F", "\u205F", "\u3000"];
/**
* Remove chars from beginning of string.
*/

function ltrim(str, chars) {
  chars = chars || WHITE_SPACES;
  var start = 0,
      len = str.length,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && start < len) {
    found = false;
    i = -1;
    c = str.charAt(start);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        start++;
        break;
      }
    }
  }

  return start >= len ? '' : str.substr(start, len);
}
/**
* Remove chars from end of string.
*/


function rtrim(str, chars) {
  chars = chars || WHITE_SPACES;
  var end = str.length - 1,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && end >= 0) {
    found = false;
    i = -1;
    c = str.charAt(end);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        end--;
        break;
      }
    }
  }

  return end >= 0 ? str.substring(0, end + 1) : '';
}
/**
 * Remove white-spaces from beginning and end of string.
 */


function trim(str, chars) {
  chars = chars || WHITE_SPACES;
  return ltrim(rtrim(str, chars), chars);
}
/**
 * Capture all capital letters following a word boundary (in case the
 * input is in all caps)
 */


function abbreviate(str) {
  return str.match(/\b([A-Z])/g).join('');
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "mobx-state-tree"
var external__mobx_state_tree_ = __webpack_require__(11);
var external__mobx_state_tree__default = /*#__PURE__*/__webpack_require__.n(external__mobx_state_tree_);

// CONCATENATED MODULE: ./models/UIStore/index.js

var defaultState = {
  fullScreenLoaderOn: false,
  fullScreenLoaderText: ''
};
var Store = external__mobx_state_tree_["types"].model('UI', {
  fullScreenLoaderOn: external__mobx_state_tree_["types"].boolean,
  fullScreenLoaderText: external__mobx_state_tree_["types"].string
}).actions(function (self) {
  return {
    toggleFullScreenLoader: function toggleFullScreenLoader(state, text) {
      if (typeof text === 'string') self.fullScreenLoaderText = text;
      self.fullScreenLoaderOn = typeof state === 'boolean' ? state : !self.fullScreenLoaderOn;
    },
    setfullScreenLoaderText: function setfullScreenLoaderText(text) {
      if (typeof text !== 'string' && !text) return;
      self.fullScreenLoaderText = text;
    }
  };
});
/* harmony default export */ var UIStore = (Store.create(defaultState));
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(9);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: ./effects/client.js
var client = __webpack_require__(6);

// CONCATENATED MODULE: ./models/UserStore/userEffects/signUpCustomer.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var query = "\n    mutation registerCustomer($input: RegisterCustomerInput!) {\n      registerCustomer(input: $input) {\n        customer {\n          uuid\n          role\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

function signUpCustomer(_x, _x2) {
  return _signUpCustomer.apply(this, arguments);
}

function _signUpCustomer() {
  _signUpCustomer = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self, values) {
    var response, error, variables, finalResponseObj;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = {
              input: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
              }
            };
            finalResponseObj = {
              response: response,
              error: error
            };
            return _context.abrupt("return", client["a" /* graphQlClient */].request(query, variables).then(function (res) {
              var data = res.registerCustomer;
              var customer = data.customer;

              if (!data.wasSuccessful) {
                finalResponseObj.error = data.userErrors.length ? data.userErrors[0].message : data.otherError;
              }

              if (!finalResponseObj.error) {
                self.setUser(customer);
              }

              return finalResponseObj;
            }).catch(function (err) {
              console.log(err);
              finalResponseObj.error = 'Error reaching the server';
              return finalResponseObj;
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _signUpCustomer.apply(this, arguments);
}

/* harmony default export */ var userEffects_signUpCustomer = (signUpCustomer);
// CONCATENATED MODULE: ./models/UserStore/userEffects/logoutUser.js


function logoutUser__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var logoutUser_query = "\n    mutation logoutUser {\n      logoutUser {\n        wasSuccessful\n        userError\n      }\n    }\n  ";

function logoutUser(_x) {
  return _logoutUser.apply(this, arguments);
}

function _logoutUser() {
  _logoutUser = logoutUser__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self) {
    var res, response, error, finalResponseObj, _res, data;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            finalResponseObj = {
              response: response,
              error: error
            };
            _context.prev = 1;
            _context.next = 4;
            return client["a" /* graphQlClient */].request(logoutUser_query);

          case 4:
            res = _context.sent;
            _context.next = 12;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            finalResponseObj.error = 'Error reaching the server';
            return _context.abrupt("return", finalResponseObj);

          case 12:
            _res = res, data = _res.logoutUser;

            if (!data.wasSuccessful) {
              finalResponseObj.error = data.userError;
            }

            if (data.wasSuccessful) {
              self.unsetUser();
            }

            return _context.abrupt("return", finalResponseObj);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));
  return _logoutUser.apply(this, arguments);
}

/* harmony default export */ var userEffects_logoutUser = (logoutUser);
// CONCATENATED MODULE: ./models/UserStore/userEffects/loginUser.js


function loginUser__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var loginUser_query = "\n    mutation loginUser($input: LoginUserInput!) {\n      loginUser(input: $input) {\n        user {\n          uuid\n          role\n          admin {\n            isAdminOwner\n          }\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

function loginUser(_x, _x2) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = loginUser__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self, values) {
    var variables, finalResponseObj;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = {
              input: values
            };
            finalResponseObj = {
              user: null,
              error: null
            };
            return _context.abrupt("return", client["a" /* graphQlClient */].request(loginUser_query, variables).then(function (res) {
              var data = res.loginUser;
              var user = data.user;

              if (!data.wasSuccessful) {
                finalResponseObj.error = data.userErrors.length ? data.userErrors[0].message : data.otherError;
              }

              if (user) {
                finalResponseObj.user = user;

                if (user.admin && user.admin.isAdminOwner) {
                  user.isAdminOwner = true;
                }
              }

              if (!finalResponseObj.error) {
                self.setUser(user);
              }

              return finalResponseObj;
            }).catch(function (err) {
              console.log(err);
              finalResponseObj.error = 'Error reaching the server';
              return finalResponseObj;
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loginUser.apply(this, arguments);
}

/* harmony default export */ var userEffects_loginUser = (loginUser);
// CONCATENATED MODULE: ./models/UserStore/userEffects/index.js



 // import debounce from 'debounce';

var UserEffects = external__mobx_state_tree_["types"].model({}).actions(function (self) {
  return {
    signUpCustomer: userEffects_signUpCustomer.bind(null, self),
    logoutUser: userEffects_logoutUser.bind(null, self),
    loginUser: userEffects_loginUser.bind(null, self)
  };
});
/* harmony default export */ var userEffects = (UserEffects);
// EXTERNAL MODULE: external "urlsafe-base64"
var external__urlsafe_base64_ = __webpack_require__(49);
var external__urlsafe_base64__default = /*#__PURE__*/__webpack_require__.n(external__urlsafe_base64_);

// CONCATENATED MODULE: ./utils/jwtUtils.js


function JWTPaylodeDecode(jwtData) {
  if (!jwtData || typeof jwtData !== 'string') {
    throw new Error("function \"decodeJWTPayload\" must recieve a url-safe base-64 encoded argument\nRecieved: ".concat(jwtData));
  }

  var tempPayload = jwtData.split('.')[1];
  var payloadBuffer = external__urlsafe_base64__default.a.decode(tempPayload);
  var payload = JSON.parse(payloadBuffer.toString());
  return payload;
}


// CONCATENATED MODULE: ./utils/getCookie.js
// Browser only
function getCookie(cname) {
  var name = "".concat(cname, "=");
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

/* harmony default export */ var utils_getCookie = (getCookie);
// CONCATENATED MODULE: ./models/UserStore/index.js


function UserStore__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var UserStore_defaultState = {
  userRole: '',
  isLoggedIn: false,
  uuid: '',
  isAdminOwner: false
};
var userRoles = [external__mobx_state_tree_["types"].literal('super-admin'), external__mobx_state_tree_["types"].literal('admin'), external__mobx_state_tree_["types"].literal('agent'), external__mobx_state_tree_["types"].literal('customer'), external__mobx_state_tree_["types"].literal('')];
var UserStore = external__mobx_state_tree_["types"].model('User', {
  userRole: external__mobx_state_tree_["types"].union.apply(external__mobx_state_tree_["types"], userRoles),
  isLoggedIn: external__mobx_state_tree_["types"].boolean,
  uuid: external__mobx_state_tree_["types"].string,
  serverJWTData: external__mobx_state_tree_["types"].optional(external__mobx_state_tree_["types"].frozen, null),
  isAdminOwner: external__mobx_state_tree_["types"].boolean
}).actions(function (self) {
  return {
    setUser: function setUser(userObject) {
      if (!userObject) return;
      self.isLoggedIn = true;
      self.userRole = userObject.role;
      self.uuid = userObject.uuid;
      self.isAdminOwner = userObject.isAdminOwner || false;
    },
    unsetUser: function unsetUser() {
      self.isLoggedIn = false;
      self.userRole = '';
      self.uuid = '';
      self.isAdminOwner = false;
    },
    afterCreate: function () {
      var _afterCreate = UserStore__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var JWTData, encodedJWTData;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(external__is_browser__default.a && !self.isLoggedIn)) {
                  _context.next = 8;
                  break;
                }

                encodedJWTData = utils_getCookie('jwtData');

                if (encodedJWTData) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                try {
                  JWTData = JWTPaylodeDecode(encodedJWTData);
                } catch (err) {
                  console.log(err);
                }

                self.setUser(JWTData);
                _context.next = 12;
                break;

              case 8:
                if (external__is_browser__default.a) {
                  _context.next = 12;
                  break;
                }

                if (self.serverJWTData) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                self.setUser(self.serverJWTData);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function afterCreate() {
        return _afterCreate.apply(this, arguments);
      };
    }()
  };
}).views(function (self) {
  return {};
});
var UserStore_Store = external__mobx_state_tree_["types"].compose('Store', UserStore, userEffects);

function createStore(cookieJWTData) {
  if (!external__is_browser__default.a && cookieJWTData) {
    UserStore_defaultState.serverJWTData = JWTPaylodeDecode(cookieJWTData);
  }

  return UserStore_Store.create(UserStore_defaultState);
}

/* harmony default export */ var models_UserStore = (createStore);
// CONCATENATED MODULE: ./models/index.js
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;


var emittedStore;

function models_createStore() {
  var cookieJWTData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    UIStore: UIStore,
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: models_UserStore(cookieJWTData)
  };
}

function initStore(isServer) {
  var cookieJWTData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    emittedStore = models_createStore(cookieJWTData);
    return emittedStore;
  }

  if (!emittedStore) {
    emittedStore = models_createStore(cookieJWTData);
  }

  return emittedStore;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_polished__);

var primaryColor = '#272A2E';
var secondaryColor = Object(__WEBPACK_IMPORTED_MODULE_0_polished__["darken"])(0.1, primaryColor);
var accentColor = '#D0021B';
var tertiaryColor = Object(__WEBPACK_IMPORTED_MODULE_0_polished__["darken"])(0.1, '#fff');
var lightFontColor = '#fff';
var darkFontColor = 'rgb(50,50,50)';
var sansSerifFont = '"Alegreya Sans", sans-serif';
var serifFont = 'Alegreya, serif';
var theme = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  accentColor: accentColor,
  tertiaryColor: tertiaryColor,
  lightFontColor: lightFontColor,
  sansSerifFont: sansSerifFont,
  serifFont: serifFont,
  darkFontColor: darkFontColor
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-form");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid-material-ui");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_polished__);
/* eslint-disable no-underscore-dangle */




 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["lighten"])(0.2, '#272A2E'),
      main: '#272A2E',
      dark: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["darken"])(0.2, '#272A2E')
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[700]
    }
  },
  custom: {
    submitBlue: {
      transparentLightBackground: 'rgba(30,150,243,.2)',
      light: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[700]
    },
    dangerRed: {
      transparentLightBackground: 'rgba(244,67,54,.2)',
      light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[700]
    }
  },
  frontEnd: {
    typography: {
      fontFamily: {
        serif: 'Alegreya, serif',
        sansSerif: "'Alegreya Sans', sans-serif",
        sansSerif2: 'Roboto, sans-serif'
      }
    },
    colors: {
      primary: {
        main: '#D93F2A',
        dark: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["darken"])(0.1, '#D93F2A')
      }
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_react_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 43 */
/***/ (function(module, exports) {



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__(37);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));
      Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: null
      });
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default.a, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, this.props));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  .app-body-class {\n    overflow: hidden;\n  }\n\n  body:not(.app-body-class) #__next {\n    height: 100% !important;\n  }\n\n  body:not(.app-body-class) #__next > div {\n    height: 100% !important;\n  }\n\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n  \n";
/* harmony default export */ __webpack_exports__["a"] = (globalStyles);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("urlsafe-base64");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(16);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(18);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(15);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "apollo-client"
var external__apollo_client_ = __webpack_require__(51);
var external__apollo_client__default = /*#__PURE__*/__webpack_require__.n(external__apollo_client_);

// EXTERNAL MODULE: external "apollo-link-http"
var external__apollo_link_http_ = __webpack_require__(52);
var external__apollo_link_http__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_http_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external__apollo_cache_inmemory_ = __webpack_require__(53);
var external__apollo_cache_inmemory__default = /*#__PURE__*/__webpack_require__.n(external__apollo_cache_inmemory_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(54);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(17);
var config__default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./lib/initApollo.js






var _getConfig = config__default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser || !global.fetch) {
  global.fetch = external__isomorphic_unfetch__default.a;
}

function create(initialState) {
  return new external__apollo_client_["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: new external__apollo_link_http_["HttpLink"]({
      uri: publicRuntimeConfig.WEBSITE_URL,
      // 'http://localhost/api/graphql', // Server URL (must be absolute)
      credentials: publicRuntimeConfig.CREDENTIALS,
      // Additional fetch() options like `credentials` or `headers`
      headers: {
        Accept: 'application/json'
      }
    }),
    cache: new external__apollo_cache_inmemory_["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
// CONCATENATED MODULE: ./lib/withData.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





 // Gets the display name of a JSX component for dev tools

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ var withData = __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  // Evaluate the composed component's getInitialProps()
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  composedInitialProps = _context.sent;

                case 5:
                  // Run all GraphQL queries in the component tree
                  // and extract the resulting data
                  apollo = initApollo();
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(external__react_apollo_["getDataFromTree"])(external__react__default.a.createElement(ComposedComponent, _extends({
                    ctx: ctx
                  }, composedInitialProps)), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    },
                    client: apollo
                  });

                case 9:
                  _context.next = 13;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](6);

                case 13:
                  if (!process.browser) {
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    head__default.a.rewind();
                  } // Extract query data from the Apollo store


                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState
                  }, composedInitialProps));

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 11]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));
      _this.apollo = initApollo(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return external__react__default.a.createElement(external__react_apollo_["ApolloProvider"], {
          client: this.apollo
        }, external__react__default.a.createElement(ComposedComponent, this.props));
      }
    }]);

    return WithData;
  }(external__react__default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(getComponentDisplayName(ComposedComponent), ")")
  }), _temp;
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

var AppProvider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppProvider, _React$Component);

  function AppProvider() {
    _classCallCheck(this, AppProvider);

    return _possibleConstructorReturn(this, (AppProvider.__proto__ || Object.getPrototypeOf(AppProvider)).apply(this, arguments));
  }

  _createClass(AppProvider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          UserStore = _props.UserStore,
          UIStore = _props.UIStore;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AppContext.Provider, {
        value: {
          UserStore: UserStore,
          UIStore: UIStore
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return round; });
/* unused harmony export padNumToDecimalString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return padStringToDecimalString; });
var round = function round(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!number) return 0;
  return Number(number.toFixed(precision));
};
var padNumToDecimalString = function padNumToDecimalString(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var s = number.toString();
  if (s.indexOf('.') == -1) s += '.';

  while (s.length < s.indexOf('.') + (precision + 1)) {
    s += '0';
  }

  return s;
};
var padStringToDecimalString = function padStringToDecimalString(s) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3 - 1;
  if (s.indexOf('.') == -1) s += '.';

  while (s.length < s.indexOf('.') + (precision + 1)) {
    s += '0';
  }

  return s;
};

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 75 */
/***/ (function(module, exports) {



/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(15);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(42);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(13);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(9);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(7);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ../node_modules/antd/dist/antd.css
var antd = __webpack_require__(43);
var antd_default = /*#__PURE__*/__webpack_require__.n(antd);

// EXTERNAL MODULE: ./lib/withRoot.js
var withRoot = __webpack_require__(44);

// EXTERNAL MODULE: ./themeStyles/index.js
var themeStyles = __webpack_require__(26);

// EXTERNAL MODULE: ./globalStyles/index.js
var globalStyles = __webpack_require__(47);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(23);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(24);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(61);
var Settings__default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "material-ui-pickers/utils/moment-utils"
var moment_utils_ = __webpack_require__(82);
var moment_utils__default = /*#__PURE__*/__webpack_require__.n(moment_utils_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(31);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui-pickers/utils/MuiPickersUtilsProvider"
var MuiPickersUtilsProvider_ = __webpack_require__(83);
var MuiPickersUtilsProvider__default = /*#__PURE__*/__webpack_require__.n(MuiPickersUtilsProvider_);

// EXTERNAL MODULE: external "material-ui/Hidden"
var Hidden_ = __webpack_require__(84);
var Hidden__default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "material-ui/Drawer"
var Drawer_ = __webpack_require__(33);
var Drawer__default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "material-ui/List"
var List_ = __webpack_require__(29);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "material-ui/Tooltip"
var Tooltip_ = __webpack_require__(12);
var Tooltip__default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowBack"
var ArrowBack_ = __webpack_require__(85);
var ArrowBack__default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);

// EXTERNAL MODULE: external "@material-ui/icons/Notifications"
var Notifications_ = __webpack_require__(62);
var Notifications__default = /*#__PURE__*/__webpack_require__.n(Notifications_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(55);
var Add__default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/RemoveRedEye"
var RemoveRedEye_ = __webpack_require__(34);
var RemoveRedEye__default = /*#__PURE__*/__webpack_require__.n(RemoveRedEye_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(8);
var external__polished__default = /*#__PURE__*/__webpack_require__.n(external__polished_);

// CONCATENATED MODULE: ./components/SideNavLinkItem/styledComponents/index.js


var SideNavLinkItemWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemWrapper",
  componentId: "s1oz5fjl-0"
})(["height:45px;min-width:100%;font-size:16px;font-family:Roboto;font-weight:500;color:", ";cursor:pointer;background-color:", ";transition:color .3s ease-in-out;&:hover{background-color:", ";}}"], function (props) {
  return props.isAdminLinks ? '#fff' : 'inherit';
}, function (props) {
  return props.active ? 'rgba(255, 255, 255, 0.15) !important' : 'initial';
}, function (props) {
  return props.isAdminLinks ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
});
var SideNavLinkItemAnchor = external__styled_components__default.a.a.withConfig({
  displayName: "styledComponents__SideNavLinkItemAnchor",
  componentId: "s1oz5fjl-1"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;color:#fff;&:hover{color:#fff !important;}"]);
var SideNavLinkItemDiv = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemDiv",
  componentId: "s1oz5fjl-2"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;"]);
var IconWrapper = external__styled_components__default.a.span.withConfig({
  displayName: "styledComponents__IconWrapper",
  componentId: "s1oz5fjl-3"
})(["margin-right:35px;position:absolute;left:", ";@media screen and (max-width:600px){left:", ";}"], function (props) {
  return props.iconLeft ? props.iconLeft : '15px';
}, function (props) {
  return props.iconLeftSmall ? props.iconLeftSmall : '8px';
});
// CONCATENATED MODULE: ./components/SideNavLinkItem/index.js
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
  return {
    icon: {
      color: 'inherit !important'
    }
  };
};

var SideNavLinkItem_SideNavLinkItem = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNavLinkItem, _Component);

  function SideNavLinkItem() {
    _classCallCheck(this, SideNavLinkItem);

    return _possibleConstructorReturn(this, (SideNavLinkItem.__proto__ || Object.getPrototypeOf(SideNavLinkItem)).apply(this, arguments));
  }

  _createClass(SideNavLinkItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          iconFontSize = _props.iconFontSize,
          Icon = _props.icon,
          isActionItem = _props.isActionItem,
          isAdminLinks = _props.isAdminLinks,
          classes = _props.classes,
          iconLeft = _props.iconLeft,
          iconLeftSmall = _props.iconLeftSmall,
          rest = _objectWithoutProperties(_props, ["onClick", "iconFontSize", "icon", "isActionItem", "isAdminLinks", "classes", "iconLeft", "iconLeftSmall"]);

      var active;

      if (this.props.currentPath.split('/')[2] === this.props.route) {
        active = true;
      } else {
        active = false;
      }

      var linkItem = external__react__default.a.createElement(SideNavLinkItemWrapper, _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest), external__react__default.a.createElement(routes["Link"], {
        route: this.props.route,
        prefetch: true
      }, external__react__default.a.createElement(SideNavLinkItemAnchor, {
        isAdminLinks: isAdminLinks
      }, external__react__default.a.createElement(IconWrapper, {
        isAdminLinks: isAdminLinks,
        iconLeft: iconLeft,
        iconLeftSmall: iconLeftSmall
      }, Icon ? external__react__default.a.createElement(Icon, {
        size: iconFontSize || 22,
        classes: {
          root: classes.icon
        },
        color: "primary"
      }) : null), this.props.name)));
      var actionItem = external__react__default.a.createElement(SideNavLinkItemWrapper, _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest), external__react__default.a.createElement(SideNavLinkItemDiv, {
        isAdminLinks: isAdminLinks
      }, external__react__default.a.createElement(IconWrapper, {
        isAdminLinks: isAdminLinks
      }, Icon ? external__react__default.a.createElement(Icon, {
        size: iconFontSize || 22,
        color: "primary",
        classes: {
          root: classes.icon
        }
      }) : null), this.props.name));

      if (isActionItem) {
        return actionItem;
      }

      return linkItem;
    }
  }]);

  return SideNavLinkItem;
}(external__react_["Component"])) || _class;

/* harmony default export */ var components_SideNavLinkItem = (Object(styles_["withStyles"])(styles)(SideNavLinkItem_SideNavLinkItem));
// EXTERNAL MODULE: external "react-icons/lib/md"
var md_ = __webpack_require__(57);
var md__default = /*#__PURE__*/__webpack_require__.n(md_);

// EXTERNAL MODULE: external "react-icons/lib/fa"
var fa_ = __webpack_require__(60);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__(63);
var ExitToApp__default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);

// EXTERNAL MODULE: external "@material-ui/icons/SupervisorAccount"
var SupervisorAccount_ = __webpack_require__(64);
var SupervisorAccount__default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_);

// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__(86);
var Assignment__default = /*#__PURE__*/__webpack_require__.n(Assignment_);

// CONCATENATED MODULE: ./components/SideNav/navItems.js





var agentSideLinks = [{
  name: 'Dashboard',
  route: 'dashboard',
  icon: md_["MdDashboard"]
}, {
  name: 'Profile',
  route: 'profile',
  icon: md_["MdPerson"],
  iconFontSize: 28,
  iconLeft: '12px'
}, {
  name: 'The Vault',
  route: 'deals',
  icon: fa_["FaCreditCard"]
}, {
  name: 'Invoices',
  route: 'invoices',
  icon: fa_["FaClipboard"],
  iconFontSize: 20
}, {
  name: 'Agents',
  route: 'agents',
  icon: SupervisorAccount__default.a,
  iconFontSize: 24
},
/*
{ name: 'Listings', icon: ListingsIcon, id: 'listings' },
*/
{
  name: 'Log Out',
  icon: ExitToApp__default.a,
  id: 'logout'
}];
/* harmony default export */ var navItems = (agentSideLinks);
// CONCATENATED MODULE: ./components/SideNav/index.js
var SideNav__class;

function SideNav__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideNav__typeof = function _typeof(obj) { return typeof obj; }; } else { SideNav__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideNav__typeof(obj); }

function SideNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideNav__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SideNav__createClass(Constructor, protoProps, staticProps) { if (protoProps) SideNav__defineProperties(Constructor.prototype, protoProps); if (staticProps) SideNav__defineProperties(Constructor, staticProps); return Constructor; }

function SideNav__possibleConstructorReturn(self, call) { if (call && (SideNav__typeof(call) === "object" || typeof call === "function")) { return call; } return SideNav__assertThisInitialized(self); }

function SideNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SideNav__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var drawerWidth = 240;

var SideNav_styles = function styles(theme) {
  var _drawerPaperClose;

  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      paddingBottom: '50px',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundColor: 'rgba(36, 68, 109, .75)',
      color: '#fff',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: (_drawerPaperClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 5
    }, _defineProperty(_drawerPaperClose, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 6.8
    }), _defineProperty(_drawerPaperClose, '&:hover', {
      width: drawerWidth
    }), _drawerPaperClose),
    tempDrawer: {
      minWidth: '240px',
      width: '240px'
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '5px',
      bottom: '5px'
    },
    arrowBackBtn: {
      marginLeft: 'auto',
      marginRight: '10px',
      height: '30px',
      width: '30px',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,.1)'
      }
    },
    listRoot: {
      height: '100%',
      overflow: 'hidden' //borderBottom: '1px solid rgba(255,255,255,.2)',

    },
    icon: {
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,.1)'
      }
    },
    topDivider: {
      backgroundColor: 'rgba(255,255,255,.2)'
    }
  };
};

var SideNav_SideNav = Object(external__mobx_react_["observer"])(SideNav__class =
/*#__PURE__*/
function (_Component) {
  SideNav__inherits(SideNav, _Component);

  function SideNav() {
    var _ref;

    var _temp, _this;

    SideNav__classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return SideNav__possibleConstructorReturn(_this, (_temp = _this = SideNav__possibleConstructorReturn(this, (_ref = SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(SideNav__assertThisInitialized(_this), "sideNavListingsDialogItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: [{
        name: 'Create a Listing',
        route: 'create-listing',
        type: 'link',
        icon: Add__default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }, {
        name: 'View Listings',
        route: 'listings',
        type: 'link',
        icon: RemoveRedEye__default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }]
    }), Object.defineProperty(SideNav__assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return navItems.map(function (item) {
          return external__react__default.a.createElement(components_SideNavLinkItem, {
            key: item.route || item.name,
            name: item.name,
            route: item.route,
            icon: item.icon,
            iconLeft: item.iconLeft,
            iconLeftSmall: item.iconLeftSmall,
            iconFontSize: item.iconFontSize,
            currentPath: currentPath,
            isActionItem: !item.route,
            onClick: function onClick() {
              if (_this.props.drawerOpen) _this.props.toggleDrawer(false);
              if (item.id === 'logout') _this.props.logoutUser();

              if (item.id === 'listings') {
                _this.props.toggleMenuDialogBoxOpen('Listings', _this.sideNavListingsDialogItems);
              }
            }
          });
        });
      }
    }), _temp));
  }

  SideNav__createClass(SideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "permanent",
        classes: {
          paper: external__classnames__default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        }
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar
      }), external__react__default.a.createElement(List__default.a, {
        classes: {
          root: classes.listRoot
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return SideNav;
}(external__react_["Component"])) || SideNav__class;

/* harmony default export */ var components_SideNav = (Object(styles_["withStyles"])(SideNav_styles)(SideNav_SideNav));
// EXTERNAL MODULE: external "@material-ui/icons/Contacts"
var Contacts_ = __webpack_require__(87);
var Contacts__default = /*#__PURE__*/__webpack_require__.n(Contacts_);

// EXTERNAL MODULE: external "@material-ui/icons/RecentActors"
var RecentActors_ = __webpack_require__(88);
var RecentActors__default = /*#__PURE__*/__webpack_require__.n(RecentActors_);

// CONCATENATED MODULE: ./components/AdminSideNav/navItems.js






var adminSideLinks = [{
  name: 'Admin Dashboard',
  route: 'admin-dashboard',
  icon: md_["MdDashboard"]
},
/*
{
  name: 'Profile',
  route: 'profile',
  icon: PersonIcon,
  iconFontSize: 28,
  iconLeft: '12px',
  iconLeftSmall: '5px',
},
*/
{
  name: 'The Vault',
  route: 'view-deals',
  icon: fa_["FaCreditCard"]
},
/*
{
  name: 'Invoices',
  route: 'view-invoices',
  icon: InvoicesIcon,
  iconFontSize: 20,
},
*/
{
  name: 'Agents',
  route: 'view-agents',
  icon: SupervisorAccount__default.a,
  iconFontSize: 24
},
/*
{
  name: 'Customers',
  route: 'view-customers',
  icon: UsersIcon,
  iconFontSize: 24,
},
*/
{
  name: 'Admin',
  route: 'view-admin',
  icon: RecentActors__default.a,
  iconFontSize: 24
}, {
  name: 'Log Out',
  icon: ExitToApp__default.a,
  id: 'logout'
}];
/* harmony default export */ var AdminSideNav_navItems = (adminSideLinks);
// CONCATENATED MODULE: ./components/AdminSideNav/index.js
var AdminSideNav__class;

function AdminSideNav__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminSideNav__typeof = function _typeof(obj) { return typeof obj; }; } else { AdminSideNav__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminSideNav__typeof(obj); }

function AdminSideNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminSideNav__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminSideNav__createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminSideNav__defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminSideNav__defineProperties(Constructor, staticProps); return Constructor; }

function AdminSideNav__possibleConstructorReturn(self, call) { if (call && (AdminSideNav__typeof(call) === "object" || typeof call === "function")) { return call; } return AdminSideNav__assertThisInitialized(self); }

function AdminSideNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AdminSideNav__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AdminSideNav__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var AdminSideNav_drawerWidth = 240;

var AdminSideNav_styles = function styles(theme) {
  var _drawerPaperClose;

  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      paddingBottom: '50px',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      width: AdminSideNav_drawerWidth,
      backgroundColor: theme.palette.secondary.dark,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    tempDrawer: {
      minWidth: '240px',
      width: '240px'
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '7px',
      bottom: '5px',
      '@media screen and (max-width: 600px)': {
        left: '4px'
      }
    },
    arrowBackBtn: {
      marginLeft: 'auto',
      marginRight: '10px',
      height: '30px',
      width: '30px'
    },
    drawerPaperClose: (_drawerPaperClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 5
    }, AdminSideNav__defineProperty(_drawerPaperClose, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 6.8
    }), AdminSideNav__defineProperty(_drawerPaperClose, '&:hover', {
      width: AdminSideNav_drawerWidth
    }), _drawerPaperClose),
    notificationIconBtn: {
      height: '40px',
      width: '40px',
      color: '#fff',
      '@media screen and (max-width: 600px)': {
        height: '30px',
        width: '30px'
      }
    },
    listRoot: {
      height: '100%',
      overflow: 'hidden' // borderBottom: '1px solid rgba(255,255,255,.5)',

    }
  };
};

var AdminSideNav_AdminSideNav = Object(external__mobx_react_["observer"])(AdminSideNav__class =
/*#__PURE__*/
function (_Component) {
  AdminSideNav__inherits(AdminSideNav, _Component);

  function AdminSideNav() {
    var _ref;

    var _temp, _this;

    AdminSideNav__classCallCheck(this, AdminSideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return AdminSideNav__possibleConstructorReturn(_this, (_temp = _this = AdminSideNav__possibleConstructorReturn(this, (_ref = AdminSideNav.__proto__ || Object.getPrototypeOf(AdminSideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(AdminSideNav__assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return AdminSideNav_navItems.map(function (item) {
          var type = item.type || 'link';
          return external__react__default.a.createElement(components_SideNavLinkItem, {
            key: item.route || item.name,
            name: item.name,
            route: item.route,
            icon: item.icon,
            iconLeft: item.iconLeft,
            iconLeftSmall: item.iconLeftSmall,
            iconFontSize: item.iconFontSize,
            currentPath: currentPath,
            isActionItem: !item.route,
            isAdminLinks: true,
            onClick: function onClick() {
              if (_this.props.drawerOpen) _this.props.toggleDrawer(false);
              if (item.id === 'logout') _this.props.logoutUser();
            }
          });
        });
      }
    }), _temp));
  }

  AdminSideNav__createClass(AdminSideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "permanent",
        classes: {
          paper: external__classnames__default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        }
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar
      }), external__react__default.a.createElement(List__default.a, {
        classes: {
          root: classes.listRoot
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return AdminSideNav;
}(external__react_["Component"])) || AdminSideNav__class;

/* harmony default export */ var components_AdminSideNav = (Object(styles_["withStyles"])(AdminSideNav_styles)(AdminSideNav_AdminSideNav));
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(89);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(90);
var Home__default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "material-ui/AppBar"
var AppBar_ = __webpack_require__(91);
var AppBar__default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "material-ui/Toolbar"
var Toolbar_ = __webpack_require__(92);
var Toolbar__default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(28);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(19);

// CONCATENATED MODULE: ./components/AppTopNav/index.js
var AppTopNav__class;

function AppTopNav__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppTopNav__typeof = function _typeof(obj) { return typeof obj; }; } else { AppTopNav__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppTopNav__typeof(obj); }

function AppTopNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppTopNav__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppTopNav__createClass(Constructor, protoProps, staticProps) { if (protoProps) AppTopNav__defineProperties(Constructor.prototype, protoProps); if (staticProps) AppTopNav__defineProperties(Constructor, staticProps); return Constructor; }

function AppTopNav__possibleConstructorReturn(self, call) { if (call && (AppTopNav__typeof(call) === "object" || typeof call === "function")) { return call; } return AppTopNav__assertThisInitialized(self); }

function AppTopNav__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppTopNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AppTopNav__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var AppTopNav_drawerWidth = 240;

var AppTopNav_styles = function styles(theme) {
  var _ref;

  return _ref = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignContent: 'center'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      marginLeft: AppTopNav_drawerWidth,
      width: '100%',
      boxShadow: theme.shadows[3]
    }
  }, AppTopNav__defineProperty(_ref, theme.breakpoints.down(theme.breakpoints.values.md), {
    appBar: {
      width: '100%'
    }
  }), AppTopNav__defineProperty(_ref, "toolbar", theme.mixins.toolbar), AppTopNav__defineProperty(_ref, "topToolbar", {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.87)',
    flexDirection: 'row'
  }), AppTopNav__defineProperty(_ref, "icon", {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.1)'
    }
  }), AppTopNav__defineProperty(_ref, "iconRoot", {
    width: '40px',
    height: '40px'
  }), AppTopNav__defineProperty(_ref, "leftTopNavIconWrapper", {
    marginRight: '10px'
  }), AppTopNav__defineProperty(_ref, "iconGroupWrapper", {
    marginLeft: 'auto'
  }), AppTopNav__defineProperty(_ref, "menuHiddenWrapper", {
    display: 'inline'
  }), AppTopNav__defineProperty(_ref, theme.breakpoints.up(theme.breakpoints.values.md), {
    menuHiddenWrapper: {
      display: 'none'
    }
  }), AppTopNav__defineProperty(_ref, "uppercase", {
    marginRight: '5px',
    fontSize: '1.1rem',
    textTransform: 'uppercase'
  }), _ref;
};

var AppTopNav_AppTopNav = Object(external__mobx_react_["observer"])(AppTopNav__class =
/*#__PURE__*/
function (_Component) {
  AppTopNav__inherits(AppTopNav, _Component);

  function AppTopNav() {
    AppTopNav__classCallCheck(this, AppTopNav);

    return AppTopNav__possibleConstructorReturn(this, (AppTopNav.__proto__ || Object.getPrototypeOf(AppTopNav)).apply(this, arguments));
  }

  AppTopNav__createClass(AppTopNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          isAdmin = _props.isAdmin;
      var pathArray = currentPath.split('/');
      var type = pathArray[pathArray.length - 1];
      var path = type === 'view' || type === 'new' ? type + ' ' + pathArray[pathArray.length - 2] : pathArray[pathArray.length - 1];
      return external__react__default.a.createElement(AppBar__default.a, {
        position: "absolute",
        className: classes.appBar
      }, external__react__default.a.createElement(Toolbar__default.a, {
        className: classes.topToolbar
      }, external__react__default.a.createElement(Typography__default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true
      }, external__react__default.a.createElement("span", {
        className: classes.uppercase
      }, Object(stringUtils["a" /* capitalize */])(Object(stringUtils["b" /* unhyphenate */])(path)))), external__react__default.a.createElement("div", {
        className: classes.leftTopNavIconWrapper
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(IconButton__default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        className: classes.menuIcon,
        onClick: this.props.toggleDrawer,
        classes: {
          root: classes.iconRoot
        }
      }, external__react__default.a.createElement(Menu__default.a, null))))));
    }
  }]);

  return AppTopNav;
}(external__react_["Component"])) || AppTopNav__class;

/* harmony default export */ var components_AppTopNav = (Object(styles_["withStyles"])(AppTopNav_styles)(AppTopNav_AppTopNav));
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(32);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "material-ui/Switch"
var Switch_ = __webpack_require__(93);
var Switch__default = /*#__PURE__*/__webpack_require__.n(Switch_);

// CONCATENATED MODULE: ./components/SettingsDrawer/index.js
var SettingsDrawer__class;

function SettingsDrawer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SettingsDrawer__typeof = function _typeof(obj) { return typeof obj; }; } else { SettingsDrawer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SettingsDrawer__typeof(obj); }

function SettingsDrawer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SettingsDrawer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SettingsDrawer__createClass(Constructor, protoProps, staticProps) { if (protoProps) SettingsDrawer__defineProperties(Constructor.prototype, protoProps); if (staticProps) SettingsDrawer__defineProperties(Constructor, staticProps); return Constructor; }

function SettingsDrawer__possibleConstructorReturn(self, call) { if (call && (SettingsDrawer__typeof(call) === "object" || typeof call === "function")) { return call; } return SettingsDrawer__assertThisInitialized(self); }

function SettingsDrawer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SettingsDrawer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SettingsDrawer_drawerWidth = 340;

var SettingsDrawer_styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      width: '100%',
      zIndex: 1,
      backgroundColor: '#fafafa',
      overflowY: 'initial'
    },
    tempDrawer: {
      boxSizing: 'border-box',
      maxWidth: '80%',
      minWidth: SettingsDrawer_drawerWidth - 100,
      width: SettingsDrawer_drawerWidth,
      right: 0,
      left: 'auto',
      fontFamily: theme.typography.fontFamily
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '5px',
      bottom: '5px'
    },
    arrowBackBtn: {
      marginLeft: 'auto'
    },
    closeIcon: {
      position: 'absolute',
      right: '5px',
      top: '15px',
      border: 'none',
      backgroundColor: '#fafafa',
      transition: 'color .2s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        color: '#000'
      }
    },
    iconRoot: {
      fontSize: '18px'
    },
    listItem: {
      display: 'flex'
    },
    listItemLabel: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    listItemLabelItem: {
      marginLeft: 'auto'
    },
    listWrapper: {
      paddingTop: '20px',
      paddingBottom: '20px',
      fontSize: '15px'
    },
    header: {
      marginBottom: '0.7em',
      fontWeight: '500'
    },
    settingsBtn: {
      position: 'absolute',
      bottom: '10px',
      left: '-40px',
      height: '40px',
      width: '40px',
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px 0 0 5px',
      boxShadow: theme.shadows[6],
      outline: 'none',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    scrollableWrapper: {
      padding: '15px',
      overflow: 'auto',
      height: '100%'
    }
  };
};

var SettingsDrawer_SettingsDrawer = Object(external__mobx_react_["observer"])(SettingsDrawer__class =
/*#__PURE__*/
function (_Component) {
  SettingsDrawer__inherits(SettingsDrawer, _Component);

  function SettingsDrawer() {
    SettingsDrawer__classCallCheck(this, SettingsDrawer);

    return SettingsDrawer__possibleConstructorReturn(this, (SettingsDrawer.__proto__ || Object.getPrototypeOf(SettingsDrawer)).apply(this, arguments));
  }

  SettingsDrawer__createClass(SettingsDrawer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer,
          isAdmin = _props.isAdmin,
          navDrawerOpen = _props.navDrawerOpen,
          toggleNavDrawer = _props.toggleNavDrawer;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Drawer__default.a, {
        className: classes.tempDrawer,
        classes: {
          paper: classes.drawerPaper
        },
        open: drawerOpen,
        anchor: "right",
        ModalProps: {
          keepMounted: true,
          // Better open performance on mobile.
          hideBackdrop: true
        },
        onClose: toggleDrawer
      }, external__react__default.a.createElement("div", {
        className: classes.scrollableWrapper
      }, external__react__default.a.createElement("button", {
        className: classes.closeIcon,
        onClick: this.props.toggleDrawer
      }, external__react__default.a.createElement(Close__default.a, {
        classes: {
          root: classes.iconRoot
        }
      })), external__react__default.a.createElement(Typography__default.a, {
        variant: "subheading",
        classes: {
          root: classes.header
        }
      }, "Settings"), external__react__default.a.createElement(Typography__default.a, {
        variant: "caption",
        classes: {
          root: classes.header
        }
      }, "Change your back-end settings here"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement("div", {
        className: classes.listWrapper
      })), external__react__default.a.createElement("button", {
        className: classes.settingsBtn,
        onClick: this.props.toggleDrawer
      }, external__react__default.a.createElement(Settings__default.a, null))));
    }
  }]);

  return SettingsDrawer;
}(external__react_["Component"])) || SettingsDrawer__class;

/* harmony default export */ var components_SettingsDrawer = (Object(styles_["withStyles"])(SettingsDrawer_styles)(SettingsDrawer_SettingsDrawer));
// EXTERNAL MODULE: external "material-ui/Dialog"
var Dialog_ = __webpack_require__(58);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/colors/blue"
var blue_ = __webpack_require__(22);
var blue__default = /*#__PURE__*/__webpack_require__.n(blue_);

// EXTERNAL MODULE: external "material-ui/Avatar"
var Avatar_ = __webpack_require__(94);
var Avatar__default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// CONCATENATED MODULE: ./components/MenuDialogBox/index.js
var MenuDialogBox__class;

function MenuDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MenuDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { MenuDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MenuDialogBox__typeof(obj); }

function MenuDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function MenuDialogBox__possibleConstructorReturn(self, call) { if (call && (MenuDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return MenuDialogBox__assertThisInitialized(self); }

function MenuDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MenuDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var MenuDialogBox_styles = {
  avatar: {
    backgroundColor: blue__default.a[100],
    color: blue__default.a[600]
  },
  listItemContentWrapper: {
    display: 'flex'
  },
  listItemTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  anchor: {
    textDecoration: 'none'
  },
  title: {
    textAlign: 'center'
  }
};

var MenuDialogBox_MenuDialoBox = Object(external__mobx_react_["observer"])(MenuDialogBox__class =
/*#__PURE__*/
function (_Component) {
  MenuDialogBox__inherits(MenuDialoBox, _Component);

  function MenuDialoBox() {
    var _ref;

    var _temp, _this;

    MenuDialogBox__classCallCheck(this, MenuDialoBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return MenuDialogBox__possibleConstructorReturn(_this, (_temp = _this = MenuDialogBox__possibleConstructorReturn(this, (_ref = MenuDialoBox.__proto__ || Object.getPrototypeOf(MenuDialoBox)).call.apply(_ref, [this].concat(args))), Object.defineProperty(MenuDialogBox__assertThisInitialized(_this), "renderLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(renderItems) {
        renderItems = renderItems || [];
        var classes = _this.props.classes;
        var _this$props = _this.props,
            toggleSideNavModal = _this$props.toggleSideNavModal,
            toggleSideNavModalClosed = _this$props.toggleSideNavModalClosed;
        return renderItems.map(function (item) {
          var Icon = item.icon;

          if (item.type === 'link') {
            return external__react__default.a.createElement(routes["Link"], {
              route: item.route,
              key: item.route || item.name
            }, external__react__default.a.createElement("a", {
              className: classes.anchor
            }, external__react__default.a.createElement(List_["ListItem"], {
              button: true,
              onClick: function onClick() {
                return toggleSideNavModalClosed();
              },
              key: item.route || item.name
            }, external__react__default.a.createElement("div", {
              className: classes.listItemContentWrapper
            }, Icon ? external__react__default.a.createElement(List_["ListItemAvatar"], null, external__react__default.a.createElement(Avatar__default.a, {
              className: classes.avatar
            }, external__react__default.a.createElement(Icon, null))) : null, external__react__default.a.createElement(List_["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name
            })))));
          }

          if (item.onClick && typeof item.onClick === 'function') {
            return external__react__default.a.createElement(List_["ListItem"], {
              button: true,
              onClick: function onClick() {
                item.onClick();
                toggleSideNavModalClosed();
              },
              key: item.route || item.name
            }, external__react__default.a.createElement("div", {
              className: classes.listItemContentWrapper
            }, Icon ? external__react__default.a.createElement(List_["ListItemAvatar"], null, external__react__default.a.createElement(Avatar__default.a, {
              className: classes.avatar
            }, external__react__default.a.createElement(Icon, null))) : null, external__react__default.a.createElement(List_["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name
            })));
          }
        });
      }
    }), _temp));
  }

  MenuDialogBox__createClass(MenuDialoBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onClose = _props.onClose,
          selectedValue = _props.selectedValue,
          toggleSideNavModal = _props.toggleSideNavModal,
          open = _props.open,
          title = _props.title,
          linkItems = _props.linkItems,
          toggleSideNavModalClosed = _props.toggleSideNavModalClosed;
      return external__react__default.a.createElement(Dialog__default.a, {
        onClose: toggleSideNavModalClosed,
        "aria-labelledby": "side-nav-dialog-box",
        open: open
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        classes: {
          root: classes.title
        },
        id: "side-nav-dialog-box-title"
      }, title), external__react__default.a.createElement("div", null, external__react__default.a.createElement(List__default.a, null, this.renderLinks(linkItems))));
    }
  }]);

  return MenuDialoBox;
}(external__react_["Component"])) || MenuDialogBox__class;

/* harmony default export */ var MenuDialogBox = (Object(styles_["withStyles"])(MenuDialogBox_styles)(MenuDialogBox_MenuDialoBox));
// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(10);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// CONCATENATED MODULE: ./components/InnerAppLayout/index.js



var InnerAppLayout__class, InnerAppLayout__temp, InnerAppLayout__initialiseProps;

function InnerAppLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { InnerAppLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { InnerAppLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return InnerAppLayout__typeof(obj); }

function InnerAppLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InnerAppLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InnerAppLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) InnerAppLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) InnerAppLayout__defineProperties(Constructor, staticProps); return Constructor; }

function InnerAppLayout__possibleConstructorReturn(self, call) { if (call && (InnerAppLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return InnerAppLayout__assertThisInitialized(self); }

function InnerAppLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function InnerAppLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var Offline = function Offline() {
  return null;
};

if (external__is_browser__default.a) {
  var _require = __webpack_require__(95),
      OfflineComp = _require.Offline;

  Offline = OfflineComp;
}

var InnerAppLayout_styles = function styles(theme) {
  return {
    root: {
      maxHeight: '100% !important',
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignContent: 'center',
      fontFamily: theme.typography.fontFamily
    },
    content: {
      position: 'relative !important',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0,
      // So the Typography noWrap works
      overflow: 'auto'
    },
    toolbar: {
      position: 'relative !important',
      zIndex: '0 !important',
      height: '56px !important',
      '@media (min-width:0px) and (orientation: landscape)': {
        height: '48px !important'
      },
      '@media (min-width:600px)': {
        height: '64px !important'
      }
    },
    topToolbar: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    settingsBtn: {
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '10px',
      right: '0',
      height: '40px',
      width: '40px',
      zIndex: 10,
      backgroundColor: 'rgba(0,0,0,.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px 0 0 5px',
      outline: 'none',
      boxShadow: theme.shadows[6],
      '&:hover': {
        cursor: 'pointer'
      }
    },
    snackBar: {
      marginTop: 10
    },
    noConnectionSpinner: {
      marginLeft: 10
    }
  };
};

var InnerAppLayout_InnerAppLayout = (InnerAppLayout__temp = InnerAppLayout__class =
/*#__PURE__*/
function (_React$Component) {
  InnerAppLayout__inherits(InnerAppLayout, _React$Component);

  function InnerAppLayout(props) {
    var _this;

    InnerAppLayout__classCallCheck(this, InnerAppLayout);

    _this = InnerAppLayout__possibleConstructorReturn(this, (InnerAppLayout.__proto__ || Object.getPrototypeOf(InnerAppLayout)).call(this, props));

    InnerAppLayout__initialiseProps.call(InnerAppLayout__assertThisInitialized(_this));

    _this.state = {
      navDrawerOpen: false,
      settingsDrawerOpen: false,
      managementModalCurrentType: null,
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null
    };
    var userRole = _this.props.userRole;
    _this.isAdmin = userRole === userTypes["admin"] || userRole === userTypes["superAdmin"];
    return _this;
  }

  InnerAppLayout__createClass(InnerAppLayout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          logoutUser = _props.logoutUser,
          toggleFullScreenLoader = _props.toggleFullScreenLoader;
      var currentPath = this.props.router.pathname;
      var isAdmin = this.isAdmin;
      var _state = this.state,
          menuDialogBoxOpen = _state.menuDialogBoxOpen,
          menuDialogBoxTitle = _state.menuDialogBoxTitle,
          menuDialogBoxLinkItems = _state.menuDialogBoxLinkItems;
      return external__react__default.a.createElement(MuiPickersUtilsProvider__default.a, {
        utils: moment_utils__default.a
      }, external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(components_AppTopNav, {
        currentPath: currentPath,
        logoutUser: logoutUser,
        toggleDrawer: this.toggleNavDrawer,
        isAdmin: isAdmin
      }), this.renderSideNav(), external__react__default.a.createElement("main", {
        className: classes.content,
        id: "inner-app-content"
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar,
        id: "toolbar-helper"
      }), this.props.children)), external__is_browser__default.a && external__react__default.a.createElement(Offline, null, external__react__default.a.createElement(Snackbar__default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: true,
        onClose: this.handleCloseSnackbar,
        message: external__react__default.a.createElement("span", {
          id: "snackbar-id"
        }, "Internet connection currently unavailable", external__react__default.a.createElement(icon__default.a, {
          className: classes.noConnectionSpinner,
          type: "loading",
          style: {
            color: '#fff'
          }
        }))
      })));
    }
  }]);

  return InnerAppLayout;
}(external__react__default.a.Component), InnerAppLayout__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "toggleNavDrawer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      _this2.setState({
        navDrawerOpen: typeof state === 'boolean' ? state : !_this2.state.navDrawerOpen
      });
    }
  });
  Object.defineProperty(this, "toggleMenuDialogBoxOpen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(title, linkItems) {
      _this2.setState({
        menuDialogBoxOpen: true,
        menuDialogBoxTitle: title,
        menuDialogBoxLinkItems: linkItems
      });
    }
  });
  Object.defineProperty(this, "toggleMenuDialogBoxClosed", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this2.setState({
        menuDialogBoxOpen: false,
        menuDialogBoxTitle: null,
        menuDialogBoxLinkItems: null
      });
    }
  });
  Object.defineProperty(this, "toggleSettingsDrawer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      _this2.setState({
        settingsDrawerOpen: typeof state === 'boolean' ? state : !_this2.state.settingsDrawerOpen
      });
    }
  });
  Object.defineProperty(this, "renderSideNav", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this2$props = _this2.props,
          logoutUser = _this2$props.logoutUser,
          userRole = _this2$props.userRole;
      var currentPath = _this2.props.router.pathname;

      if (_this2.isAdmin) {
        return external__react__default.a.createElement(components_AdminSideNav, {
          currentPath: currentPath,
          drawerOpen: _this2.state.navDrawerOpen,
          toggleDrawer: _this2.toggleNavDrawer,
          logoutUser: logoutUser,
          toggleManagementModal: _this2.toggleManagementModal,
          toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen
        });
      }

      return external__react__default.a.createElement(components_SideNav, {
        currentPath: currentPath,
        drawerOpen: _this2.state.navDrawerOpen,
        toggleDrawer: _this2.toggleNavDrawer,
        logoutUser: logoutUser,
        toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen
      });
    }
  });
}, InnerAppLayout__temp);
/* harmony default export */ var components_InnerAppLayout = (Object(router_["withRouter"])(Object(styles_["withStyles"])(InnerAppLayout_styles)(InnerAppLayout_InnerAppLayout)));
// EXTERNAL MODULE: external "material-ui/Portal"
var Portal_ = __webpack_require__(96);
var Portal__default = /*#__PURE__*/__webpack_require__.n(Portal_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(27);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// CONCATENATED MODULE: ./components/FullScreenLoader/index.js
var FullScreenLoader__class;

function FullScreenLoader__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FullScreenLoader__typeof = function _typeof(obj) { return typeof obj; }; } else { FullScreenLoader__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FullScreenLoader__typeof(obj); }

function FullScreenLoader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FullScreenLoader__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FullScreenLoader__createClass(Constructor, protoProps, staticProps) { if (protoProps) FullScreenLoader__defineProperties(Constructor.prototype, protoProps); if (staticProps) FullScreenLoader__defineProperties(Constructor, staticProps); return Constructor; }

function FullScreenLoader__possibleConstructorReturn(self, call) { if (call && (FullScreenLoader__typeof(call) === "object" || typeof call === "function")) { return call; } return FullScreenLoader__assertThisInitialized(self); }

function FullScreenLoader__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FullScreenLoader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Loader = external__react_spinners_["PropagateLoader"];

var FullScreenLoader_styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.palette.secondary.dark,
      color: '#fff',
      zIndex: 9999999
    },
    text: {
      fontFamily: theme.typography.fontFamily,
      fontSize: '1.1rem',
      marginBottom: theme.spacing.unit * 3
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

var FullScreenLoader_FullScreenLoader = Object(external__mobx_react_["observer"])(FullScreenLoader__class =
/*#__PURE__*/
function (_Component) {
  FullScreenLoader__inherits(FullScreenLoader, _Component);

  function FullScreenLoader() {
    FullScreenLoader__classCallCheck(this, FullScreenLoader);

    return FullScreenLoader__possibleConstructorReturn(this, (FullScreenLoader.__proto__ || Object.getPrototypeOf(FullScreenLoader)).apply(this, arguments));
  }

  FullScreenLoader__createClass(FullScreenLoader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          open = _props.open,
          classes = _props.classes,
          text = _props.text;
      return external__react__default.a.createElement(Portal__default.a, null, external__react__default.a.createElement("div", {
        className: classes.root,
        style: {
          display: open ? 'flex' : 'none'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.contentContainer
      }, text ? external__react__default.a.createElement("div", {
        className: classes.text
      }, text) : null, external__react__default.a.createElement(Loader, {
        color: "#fff",
        loading: true
      }))));
    }
  }]);

  return FullScreenLoader;
}(external__react_["Component"])) || FullScreenLoader__class;

/* harmony default export */ var components_FullScreenLoader = (Object(styles_["withStyles"])(FullScreenLoader_styles)(FullScreenLoader_FullScreenLoader));
// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(25);

// EXTERNAL MODULE: ./AppGlobalStateProvider/index.js
var AppGlobalStateProvider = __webpack_require__(71);

// EXTERNAL MODULE: ./static/css/main.css
var main = __webpack_require__(75);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// CONCATENATED MODULE: ./components/Layout/index.js


var Layout__class;

function Layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout__typeof = function _typeof(obj) { return typeof obj; }; } else { Layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function Layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout__createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout__defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout__defineProperties(Constructor, staticProps); return Constructor; }

function Layout__possibleConstructorReturn(self, call) { if (call && (Layout__typeof(call) === "object" || typeof call === "function")) { return call; } return Layout__assertThisInitialized(self); }

function Layout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import DevTools from 'mobx-react-devtools';
















var store = Object(models["a" /* initStore */])();
var Layout_UIStore = store.UIStore;
external__nprogress__default.a.configure({
  showSpinner: false
});
external__nprogress__default.a.configure({
  trickleSpeed: 100
});

if (external__is_browser__default.a) {
  router__default.a.onRouteChangeStart = function () {
    external__nprogress__default.a.start();
  };

  router__default.a.onRouteChangeComplete = function () {
    if (Layout_UIStore.fullScreenLoaderOn) {
      Layout_UIStore.toggleFullScreenLoader(false);
    }

    external__nprogress__default.a.done();
  };

  router__default.a.onRouteChangeError = function () {
    return external__nprogress__default.a.done();
  };
}

var Layout_Layout = Object(external__mobx_react_["observer"])(Layout__class =
/*#__PURE__*/
function (_Component) {
  Layout__inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    Layout__classCallCheck(this, Layout);

    _this = Layout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {};
    return _this;
  }

  Layout__createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('app-body-class');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.className = document.body.className.replace(/\bapp-body-class\b/g, '');
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          UIStore = _props.UIStore,
          UserStore = _props.UserStore;
      var logout = UserStore.logoutUser,
          userRole = UserStore.userRole;
      var isAdmin = userRole === userTypes["admin"] || userRole === userTypes["superAdmin"];
      var fullScreenLoaderOn = UIStore.fullScreenLoaderOn,
          fullScreenLoaderText = UIStore.fullScreenLoaderText,
          toggleFullScreenLoader = UIStore.toggleFullScreenLoader;

      var logoutUser =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          var _ref2, error;

          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return logout();

                case 2:
                  _ref2 = _context.sent;
                  error = _ref2.error;

                  if (!error) {
                    _context.next = 7;
                    break;
                  }

                  // TODO: add user notification of an logout error
                  console.log(error);
                  return _context.abrupt("return");

                case 7:
                  router__default.a.pushRoute('home');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function logoutUser() {
          return _ref.apply(this, arguments);
        };
      }();

      return external__react__default.a.createElement("div", {
        style: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, this.props.title ? this.props.title : 'Reyes & Elsamad Real Estate'), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }), external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: globalStyles["a" /* default */]
        }
      })), external__react__default.a.createElement(AppGlobalStateProvider["b" /* AppProvider */], {
        UserStore: UserStore,
        UIStore: UIStore
      }, external__react__default.a.createElement(external__styled_components_["ThemeProvider"], {
        theme: themeStyles["a" /* default */]
      }, external__react__default.a.createElement(components_InnerAppLayout, {
        logoutUser: logoutUser,
        userRole: userRole,
        toggleFullScreenLoader: toggleFullScreenLoader,
        isAdmin: isAdmin
      }, this.props.children)), external__react__default.a.createElement(components_FullScreenLoader, {
        open: fullScreenLoaderOn,
        text: fullScreenLoaderText
      })));
    }
  }]);

  return Layout;
}(external__react_["Component"])) || Layout__class;

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(withRoot["a" /* default */])(Layout_Layout)));

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Hidden");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Contacts");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RecentActors");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Switch");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("react-detect-offline");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Portal");

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_debounce__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var numbersOnlyRegex = /^\d+$/;
var noLettersRegex = /^[^a-zA-Z]+$/;
var noNegativeSignRegex = /^[^-]/;

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    disabled: {
      cursor: 'not-allowed'
    },
    redErrorText: {
      color: '#f44336'
    }
  };
};

var CustomTextFieldWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomTextFieldWrapper, _React$Component);

  function CustomTextFieldWrapper(props) {
    var _this;

    _classCallCheck(this, CustomTextFieldWrapper);

    _this = _possibleConstructorReturn(this, (CustomTextFieldWrapper.__proto__ || Object.getPrototypeOf(CustomTextFieldWrapper)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._fieldApi) _this._fieldApi.setError('');
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnStartAdornment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            isDollarAmount = _this$props.isDollarAmount,
            isPercentAmount = _this$props.isPercentAmount,
            customPrefix = _this$props.customPrefix;

        if (isDollarAmount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start"
          }, "$");
        } else if (isPercentAmount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start"
          }, "%");
        } else if (customPrefix) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start"
          }, customPrefix);
        }

        return null;
      }
    });
    _this.state = {
      id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
      submittedValue: _this.props.submittedValue
    };
    return _this;
  }

  _createClass(CustomTextFieldWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var returnStartAdornment = this.returnStartAdornment;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_form__["Field"], _extends({
        validate: this.props.validate,
        field: this.props.field
      }, this.props), function (fieldApi) {
        var _this2$props = _this2.props,
            onInput = _this2$props.onInput,
            classes = _this2$props.classes,
            submittedClasses = _this2$props.submittedClasses,
            label = _this2$props.label,
            id = _this2$props.id,
            disabled = _this2$props.disabled,
            fullWidth = _this2$props.fullWidth,
            required = _this2$props.required,
            multiline = _this2$props.multiline,
            field = _this2$props.field,
            _onBlur = _this2$props.onBlur,
            _onChange = _this2$props.onChange,
            inputClassName = _this2$props.inputClassName,
            labelClassName = _this2$props.labelClassName,
            validate = _this2$props.validate,
            numbersOnly = _this2$props.numbersOnly,
            noLetters = _this2$props.noLetters,
            onChangeWithID = _this2$props.onChangeWithID,
            submittedValue = _this2$props.submittedValue,
            noNegativeSign = _this2$props.noNegativeSign,
            convertToLocaleString = _this2$props.convertToLocaleString,
            formApi = _this2$props.formApi,
            isDollarAmount = _this2$props.isDollarAmount,
            inputRootClassName = _this2$props.inputRootClassName,
            isPercentAmount = _this2$props.isPercentAmount,
            requiresDefaultOnChange = _this2$props.requiresDefaultOnChange,
            isInputMasked = _this2$props.isInputMasked,
            beforeUnmount = _this2$props.beforeUnmount,
            isEditingDeal = _this2$props.isEditingDeal,
            defaultValue = _this2$props.defaultValue,
            disabledStyle = _this2$props.disabledStyle,
            formControlClassName = _this2$props.formControlClassName,
            shrink = _this2$props.shrink,
            mask = _this2$props.mask,
            rest = _objectWithoutProperties(_this2$props, ["onInput", "classes", "submittedClasses", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "inputClassName", "labelClassName", "validate", "numbersOnly", "noLetters", "onChangeWithID", "submittedValue", "noNegativeSign", "convertToLocaleString", "formApi", "isDollarAmount", "inputRootClassName", "isPercentAmount", "requiresDefaultOnChange", "isInputMasked", "beforeUnmount", "isEditingDeal", "defaultValue", "disabledStyle", "formControlClassName", "shrink", "mask"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        _this2._fieldApi = fieldApi;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(disabled || disabledStyle ? classes.disabled : null, classes.formControl, formControlClassName),
          error: error && touched,
          disabled: disabled || disabledStyle,
          fullWidth: fullWidth,
          required: required
        }, label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputLabel"], {
          htmlFor: id,
          shrink: shrink,
          className: disabled || disabledStyle ? "".concat(classes.disabled, " ").concat(labelClassName) : "".concat(labelClassName)
        }, label) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default.a, _extends({
          defaultValue: defaultValue,
          inputRef: function inputRef(ref) {
            return _this2._input = ref;
          },
          className: disabled || disabledStyle ? classes.disabled : null,
          inputProps: {
            className: disabled || disabledStyle ? "".concat(classes.disabled, " ").concat(inputClassName) : "".concat(inputClassName)
          },
          value: value || '',
          classes: inputRootClassName ? {
            root: inputRootClassName
          } : null,
          id: id,
          onChange: function onChange(e) {
            var newValue = e.target.value;

            if (numbersOnly && newValue && !numbersOnlyRegex.test(newValue)) {
              return;
            }

            if (noLetters && newValue && !noLettersRegex.test(newValue)) {
              return;
            }

            if (noNegativeSign && newValue && !noNegativeSignRegex.test(newValue)) {
              return;
            }

            if (!isInputMasked) {
              setValue(newValue);
            }

            if (isInputMasked) {
              if (mask && mask.length && newValue.length <= mask.length) {
                __WEBPACK_IMPORTED_MODULE_8_debounce___default()(function () {
                  return setValue(_this2._input.value);
                }, 100)();
              }
            }

            if (_onChange && typeof _onChange === 'function') {
              if (requiresDefaultOnChange || isInputMasked) {
                _onChange(e, setValue);
              } else {
                _onChange(newValue, setValue, e);
              }
            }

            if (onChangeWithID && typeof onChangeWithID === 'function') {
              onChangeWithID(_this2.state.id, newValue, e);
            }
          },
          onBlur: function onBlur(event) {
            if (event.target.value || touched) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          },
          multiline: multiline,
          startAdornment: returnStartAdornment()
        }, rest)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
          classes: {
            root: classes.redErrorText
          },
          id: "".concat(id, "-error-text")
        }, error) : null);
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var convertToLocaleString = nextProps.convertToLocaleString;

      if (nextProps.formApi && nextProps.submittedValue !== prevState.submittedValue) {
        var val = convertToLocaleString ? Number(nextProps.submittedValue).toLocaleString() : nextProps.submittedValue;
        nextProps.formApi.setValue(nextProps.field, val);
        return {
          submittedValue: nextProps.submittedValue
        };
      }

      return null;
    }
  }]);

  return CustomTextFieldWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(CustomTextFieldWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid");

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);



var VirtualCell = function VirtualCell(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Cell, props);
};

/* harmony default export */ __webpack_exports__["a"] = (VirtualCell);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var TableComponentBase = function TableComponentBase(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Table, _extends({}, restProps, {
    className: classes.myTable
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableComponent'
})(TableComponentBase));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var TableContainerBase = function TableContainerBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "className"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Container, _extends({}, restProps, {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.myTableContainer, className),
    id: "myTableContainer"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableContainerComponent'
})(TableContainerBase));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var NoDataCellComponentBase = function NoDataCellComponentBase(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].NoDataCell, _extends({}, restProps, {
    className: classes.myNoDataCellComponent
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'NoDataCellComponentBase'
})(NoDataCellComponentBase));

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    wrapper: {
      width: '90%',
      height: '90%',
      boxSizing: 'border-box',
      textAlign: 'center',
      color: '#00C853',
      cursor: 'pointer'
    }
  };
};

var VeiwFormatter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VeiwFormatter, _React$Component);

  function VeiwFormatter() {
    _classCallCheck(this, VeiwFormatter);

    return _possibleConstructorReturn(this, (VeiwFormatter.__proto__ || Object.getPrototypeOf(VeiwFormatter)).apply(this, arguments));
  }

  _createClass(VeiwFormatter, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var id;
      var route;

      var _onClick;

      var type;
      var noShow;
      var needsEvent;

      if (this.props && this.props.value) {
        id = this.props.value.id;
        route = this.props.value.route;
        _onClick = this.props.value.onClick;
        type = this.props.value.type;
        noShow = this.props.value.noShow;
        needsEvent = this.props.value.needsEvent;
      }

      if (noShow) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null);

      if (type === 'action' && _onClick) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
          title: "Click to view",
          enterDelay: 400,
          leaveDelay: 100
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          id: "viewTableIcon"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, {
          onClick: function onClick(event) {
            if (needsEvent) {
              _onClick(event);
            } else {
              _onClick();
            }

            if (event.stopPropagation) event.stopPropagation();
          }
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Click to view",
        enterDelay: 400,
        leaveDelay: 100
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: route,
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, null)))));
    }
  }]);

  return VeiwFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(VeiwFormatter));

/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0,
      minWidth: 120
    },
    fullWidth: {
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    },
    input: {
      textAlign: 'left'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing.unit / 4
    },
    select: {
      textAlign: 'left'
    }
  };
};

var MaterialCustomSelectInputWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaterialCustomSelectInputWrapper, _React$Component);

  function MaterialCustomSelectInputWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MaterialCustomSelectInputWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MaterialCustomSelectInputWrapper.__proto__ || Object.getPrototypeOf(MaterialCustomSelectInputWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._fieldApi) _this._fieldApi.setError('');
      }
    }), _temp));
  }

  _createClass(MaterialCustomSelectInputWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["Field"], _extends({
        validate: this.props.validate,
        field: this.props.field
      }, this.props), function (fieldApi) {
        var _this2$props = _this2.props,
            onInput = _this2$props.onInput,
            classes = _this2$props.classes,
            label = _this2$props.label,
            id = _this2$props.id,
            disabled = _this2$props.disabled,
            fullWidth = _this2$props.fullWidth,
            required = _this2$props.required,
            multiline = _this2$props.multiline,
            field = _this2$props.field,
            _onBlur = _this2$props.onBlur,
            _onChange = _this2$props.onChange,
            selectInputItems = _this2$props.selectInputItems,
            horizontal = _this2$props.horizontal,
            className = _this2$props.className,
            multiple = _this2$props.multiple,
            name = _this2$props.name,
            validate = _this2$props.validate,
            SelectDisplayProps = _this2$props.SelectDisplayProps,
            rest = _objectWithoutProperties(_this2$props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "selectInputItems", "horizontal", "className", "multiple", "name", "validate", "SelectDisplayProps"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        _this2._fieldApi = fieldApi;

        var renderSelectInputItems = function renderSelectInputItems(selectInputItems) {
          return selectInputItems.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__["MenuItem"], {
              key: item.key || item.label,
              value: item.value || item.label
            }, item.label);
          });
        };

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
          error: error && touched,
          fullWidth: fullWidth,
          required: required,
          className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className)
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
          htmlFor: "".concat(id, "-error"),
          disabled: disabled
        }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default.a, _extends({
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(disabled && classes.disabled, classes.select),
          disabled: disabled,
          value: multiple ? value || [] : value || '',
          SelectDisplayProps: SelectDisplayProps || {
            style: {
              backgroundColor: 'inherit'
            }
          },
          onChange: function onChange(event) {
            setValue(event.target.value);

            if (_onChange) {
              _onChange(event.target.value);
            }

            if (onInput) {
              onInput(event);
            }
          },
          input: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default.a, {
            name: name,
            id: "".concat(id, "-helper"),
            disabled: disabled,
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.input, disabled && classes.disabled)
          }),
          onBlur: function onBlur(event) {
            if (event.target.value || touched) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          },
          multiple: multiple,
          renderValue: !multiple ? null : function (selected) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.chips
            }, selected.filter(function (val) {
              return val !== '';
            }).map(function (value) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
                key: value,
                label: value,
                className: classes.chip
              });
            }));
          }
        }, rest), renderSelectInputItems(selectInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], null, error) : null);
      });
    }
  }]);

  return MaterialCustomSelectInputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomSelectInputWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),
/* 116 */
/***/ (function(module, exports) {



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    input: {
      width: '0.1px',
      height: '0.1px',
      opacity: '0',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '-1'
    },
    helperText: {
      textAlign: 'center'
    },
    info: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    disabled: {
      //pointerEvents: 'none',
      opacity: '.6',
      pointerEvents: 'none'
    }
  };
};

var CustomFileUploadInputWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomFileUploadInputWrapper, _React$Component);

  function CustomFileUploadInputWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CustomFileUploadInputWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CustomFileUploadInputWrapper.__proto__ || Object.getPrototypeOf(CustomFileUploadInputWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLabelText", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(shouldBefullText) {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            label = _this$props.label,
            customState = _this$props.customState;
        if (!customState) return label;

        if (multiple) {
          if (!customState.length) return label;

          if (shouldBefullText) {
            return customState.map(function (item) {
              return item.name;
            }).join(', ');
          }

          if (customState.length > 1) return "".concat(customState[0].name, ",...");
          return customState[0].name;
        }

        return customState.name;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderLabelComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            disabled = _this$props2.disabled,
            classes = _this$props2.classes;
        var tooltipIncludedComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default.a, {
          id: _this.props.id,
          title: _this.renderLabelText(true),
          enterDelay: 300,
          leaveDelay: 100
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled)
        }, _this.renderLabelText()));
        var withoutTooltipComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled)
        }, _this.renderLabelText());

        if (_this.props.multiple && _this.props.customState && _this.props.customState.length > 1) {
          return tooltipIncludedComp;
        }

        return withoutTooltipComp;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "isAcceptedFileExtension", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject, acceptedFileExtensions, hasMultiple) {
        var ok = true;

        if (hasMultiple) {
          var fileArray = Object.keys(filesObject).map(function (key) {
            return filesObject[key];
          });
          fileArray.forEach(function (file) {
            var filePartsArray = file.name.split('.');
            var extension = filePartsArray.pop();

            if (!extension) {
              ok = false;
              return;
            }

            if (!acceptedFileExtensions.includes(extension.toLowerCase())) ok = false;
          });
        } else {
          var filePartsArray = filesObject[0].name.split('.');
          var extension = filePartsArray.pop();

          if (!extension) {
            ok = false;
          } else if (!acceptedFileExtensions.includes(extension.toLowerCase())) {
            ok = false;
          }
        }

        return ok;
      }
    }), _temp));
  }

  _createClass(CustomFileUploadInputWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_form__["Field"], _extends({
        validate: props.validate,
        field: props.field
      }, this.props), function (fieldApi) {
        var onInput = props.onInput,
            classes = props.classes,
            label = props.label,
            id = props.id,
            disabled = props.disabled,
            fullWidth = props.fullWidth,
            required = props.required,
            multiple = props.multiple,
            field = props.field,
            _onBlur = props.onBlur,
            _onChange = props.onChange,
            btnClassName = props.btnClassName,
            customOnChange = props.customOnChange,
            customState = props.customState,
            helperInfo = props.helperInfo,
            acceptedFileExtensions = props.acceptedFileExtensions,
            input = props.input,
            getInput = props.getInput,
            validate = props.validate,
            submits = props.submits,
            rest = _objectWithoutProperties(props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiple", "field", "onBlur", "onChange", "btnClassName", "customOnChange", "customState", "helperInfo", "acceptedFileExtensions", "input", "getInput", "validate", "submits"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setError = fieldApi.setError,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
          className: classes.formControl,
          error: error && touched || error && submits,
          fullWidth: fullWidth,
          required: required
        }, _this2.renderLabelComponent(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", _extends({
          disabled: disabled,
          className: classes.input,
          type: "file",
          id: id,
          multiple: multiple,
          ref: function ref(input) {
            return getInput && getInput(input);
          },
          onChange: function onChange(e) {
            var files = e.target.files;

            if (multiple) {
              if (!files[0]) return;

              if (!_this2.isAcceptedFileExtension(files, acceptedFileExtensions, true)) {
                setError("Files must be one of the following types: ".concat(acceptedFileExtensions.join(', ')));
                if (!touched) setTouched();
                setTimeout(function () {
                  if (!error) setError();
                }, 8000);
                return;
              }

              setValue(files[0]);

              if (customOnChange) {
                customOnChange(files);
              }
            } else {
              var file = files[0];
              if (!file) return;

              if (!_this2.isAcceptedFileExtension(files, acceptedFileExtensions)) {
                setError("Files must be one of the following types: ".concat(acceptedFileExtensions.join(', ')));
                if (!touched) setTouched();
                setTimeout(function () {
                  if (!error) setError();
                }, 6000);
                return;
              }

              setValue(file);

              if (customOnChange) {
                customOnChange(file);
              }

              if (error) {
                setError();
              }
            }

            if (_onChange) {
              _onChange(multiple ? e.target.files : e.target.files[0], e);
            }
          },
          onBlur: function onBlur(event) {
            if (event.target.files[0]) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          }
        }, rest)), error && touched || error && submits ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          id: "".concat(id, "-error-text"),
          classes: {
            root: classes.helperText
          }
        }, error) : null, helperInfo ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          classes: {
            root: "".concat(classes.helperText, " ").concat(classes.info)
          },
          id: "".concat(id, "-info-text")
        }, helperInfo) : null);
      });
    }
  }]);

  return CustomFileUploadInputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(CustomFileUploadInputWrapper));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }









var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: 0,
      width: 200
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit
    },
    group: {
      margin: "".concat(theme.spacing.unit, "px 0")
    },
    horzontalRadioBtns: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    textAlignCenter: {
      textAlign: 'center'
    }
  };
};

var MaterialCustomRadioInputWrapper = function MaterialCustomRadioInputWrapper(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_form__["Field"], _extends({
    validate: props.validate,
    field: props.field
  }, props), function (fieldApi) {
    var onInput = props.onInput,
        classes = props.classes,
        label = props.label,
        id = props.id,
        disabled = props.disabled,
        fullWidth = props.fullWidth,
        required = props.required,
        multiline = props.multiline,
        field = props.field,
        onBlur = props.onBlur,
        onChange = props.onChange,
        radioInputItems = props.radioInputItems,
        horizontal = props.horizontal,
        className = props.className,
        multiple = props.multiple,
        name = props.name,
        validate = props.validate,
        rest = _objectWithoutProperties(props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "radioInputItems", "horizontal", "className", "multiple", "name", "validate"]);

    var value = fieldApi.value,
        error = fieldApi.error,
        warning = fieldApi.warning,
        success = fieldApi.success,
        setValue = fieldApi.setValue,
        setTouched = fieldApi.setTouched,
        touched = fieldApi.touched;

    var renderRadioInputItems = function renderRadioInputItems(radioInputItems) {
      return radioInputItems.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControlLabel"], {
          key: item.label,
          value: item.value || item.label,
          disabled: item.disabled,
          classes: {
            root: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(disabled && classes.disabled)
          },
          control: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default.a, null),
          label: item.label
        });
      });
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: classes.root
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControl"], {
      component: "fieldset",
      error: error && touched,
      fullWidth: fullWidth,
      required: required,
      className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
      disabled: disabled
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormLabel"], {
      component: "legend",
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(horizontal ? classes.textAlignCenter : undefined)
    }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__["RadioGroup"], _extends({
      "aria-label": label,
      name: "".concat(id, "1"),
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(classes.group, horizontal && classes.horzontalRadioBtns),
      value: value || null,
      onChange: function onChange(event) {
        setValue(event.target.value);

        if (onInput) {
          onInput(event);
        }
      },
      onBlur: function onBlur(event) {
        if (event.target.value || touched) setTouched();
      }
    }, rest), renderRadioInputItems(radioInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
      classes: horizontal ? {
        root: classes.textAlignCenter
      } : null
    }, error) : null));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomRadioInputWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }










var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0
    },
    fullWidth: {
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    },
    input: {
      textAlign: 'left'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing.unit / 4
    }
  };
};

var MaterialCustomSelectInput = function MaterialCustomSelectInput(props) {
  var error = props.error,
      touched = props.touched,
      required = props.required,
      disabled = props.disabled,
      classes = props.classes,
      className = props.className,
      label = props.label,
      id = props.id,
      value = props.value,
      multiple = props.multiple,
      onInput = props.onInput,
      name = props.name,
      _onBlur = props.onBlur,
      placeholder = props.placeholder,
      selectInputItems = props.selectInputItems,
      SelectDisplayProps = props.SelectDisplayProps,
      fullWidth = props.fullWidth,
      native = props.native,
      rest = _objectWithoutProperties(props, ["error", "touched", "required", "disabled", "classes", "className", "label", "id", "value", "multiple", "onInput", "name", "onBlur", "placeholder", "selectInputItems", "SelectDisplayProps", "fullWidth", "native"]);

  var renderSelectInputItems = function renderSelectInputItems(selectInputItems) {
    return selectInputItems.map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__["MenuItem"], {
        key: item.label,
        value: item.value || item.label
      }, item.label);
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
    error: error,
    required: required,
    className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className)
  }, label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
    htmlFor: "".concat(id, "-error")
  }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default.a, _extends({
    SelectDisplayProps: SelectDisplayProps || {
      style: {
        backgroundColor: 'inherit'
      }
    },
    onClose: function onClose(event) {
      return event.target.blur();
    },
    placeholder: placeholder,
    native: native,
    value: multiple ? value || [] : value || '',
    onChange: function onChange(event) {
      if (onInput) {
        onInput(event);
      }
    },
    input: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default.a, {
      name: name,
      id: "".concat(id, "-helper"),
      className: classes.input
    }),
    onBlur: function onBlur(event) {
      if (_onBlur) {
        _onBlur(event);
      }
    },
    multiple: multiple,
    renderValue: !multiple ? null : function (selected) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.chips
      }, selected.map(function (value) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
          key: value,
          label: value,
          className: classes.chip
        });
      }));
    }
  }, rest), renderSelectInputItems(selectInputItems)), error ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], null, error) : null);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomSelectInput)));

/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("material-ui/ExpansionPanel");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countriesArrayWithCodes; });
var states = ['Alaska', 'Alabama', 'Arkansas', 'American Samoa', 'Arizona', 'California', 'Colorado', 'Connecticut', 'District of Columbia', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Louisiana', 'Massachusetts', 'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'North Carolina', 'North Dakota', 'Nebraska', 'New Hampshire', 'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Virgin Islands', 'Vermont', 'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'];
var countries = ['United States', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao, People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];
var countriesArrayWithCodes = [{
  name: 'United States',
  code: 'US'
}, {
  name: 'Afghanistan',
  code: 'AF'
}, {
  name: 'land Islands',
  code: 'AX'
}, {
  name: 'Albania',
  code: 'AL'
}, {
  name: 'Algeria',
  code: 'DZ'
}, {
  name: 'American Samoa',
  code: 'AS'
}, {
  name: 'Andorra',
  code: 'AD'
}, {
  name: 'Angola',
  code: 'AO'
}, {
  name: 'Anguilla',
  code: 'AI'
}, {
  name: 'Antarctica',
  code: 'AQ'
}, {
  name: 'Antigua and Barbuda',
  code: 'AG'
}, {
  name: 'Argentina',
  code: 'AR'
}, {
  name: 'Armenia',
  code: 'AM'
}, {
  name: 'Aruba',
  code: 'AW'
}, {
  name: 'Australia',
  code: 'AU'
}, {
  name: 'Austria',
  code: 'AT'
}, {
  name: 'Azerbaijan',
  code: 'AZ'
}, {
  name: 'Bahamas',
  code: 'BS'
}, {
  name: 'Bahrain',
  code: 'BH'
}, {
  name: 'Bangladesh',
  code: 'BD'
}, {
  name: 'Barbados',
  code: 'BB'
}, {
  name: 'Belarus',
  code: 'BY'
}, {
  name: 'Belgium',
  code: 'BE'
}, {
  name: 'Belize',
  code: 'BZ'
}, {
  name: 'Benin',
  code: 'BJ'
}, {
  name: 'Bermuda',
  code: 'BM'
}, {
  name: 'Bhutan',
  code: 'BT'
}, {
  name: 'Bolivia',
  code: 'BO'
}, {
  name: 'Bosnia and Herzegovina',
  code: 'BA'
}, {
  name: 'Botswana',
  code: 'BW'
}, {
  name: 'Bouvet Island',
  code: 'BV'
}, {
  name: 'Brazil',
  code: 'BR'
}, {
  name: 'British Indian Ocean Territory',
  code: 'IO'
}, {
  name: 'Brunei Darussalam',
  code: 'BN'
}, {
  name: 'Bulgaria',
  code: 'BG'
}, {
  name: 'Burkina Faso',
  code: 'BF'
}, {
  name: 'Burundi',
  code: 'BI'
}, {
  name: 'Cambodia',
  code: 'KH'
}, {
  name: 'Cameroon',
  code: 'CM'
}, {
  name: 'Canada',
  code: 'CA'
}, {
  name: 'Cape Verde',
  code: 'CV'
}, {
  name: 'Cayman Islands',
  code: 'KY'
}, {
  name: 'Central African Republic',
  code: 'CF'
}, {
  name: 'Chad',
  code: 'TD'
}, {
  name: 'Chile',
  code: 'CL'
}, {
  name: 'China',
  code: 'CN'
}, {
  name: 'Christmas Island',
  code: 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  code: 'CC'
}, {
  name: 'Colombia',
  code: 'CO'
}, {
  name: 'Comoros',
  code: 'KM'
}, {
  name: 'Congo',
  code: 'CG'
}, {
  name: 'Congo, The Democratic Republic of the',
  code: 'CD'
}, {
  name: 'Cook Islands',
  code: 'CK'
}, {
  name: 'Costa Rica',
  code: 'CR'
}, {
  name: "Cote D'Ivoire",
  code: 'CI'
}, {
  name: 'Croatia',
  code: 'HR'
}, {
  name: 'Cuba',
  code: 'CU'
}, {
  name: 'Cyprus',
  code: 'CY'
}, {
  name: 'Czech Republic',
  code: 'CZ'
}, {
  name: 'Denmark',
  code: 'DK'
}, {
  name: 'Djibouti',
  code: 'DJ'
}, {
  name: 'Dominica',
  code: 'DM'
}, {
  name: 'Dominican Republic',
  code: 'DO'
}, {
  name: 'Ecuador',
  code: 'EC'
}, {
  name: 'Egypt',
  code: 'EG'
}, {
  name: 'El Salvador',
  code: 'SV'
}, {
  name: 'Equatorial Guinea',
  code: 'GQ'
}, {
  name: 'Eritrea',
  code: 'ER'
}, {
  name: 'Estonia',
  code: 'EE'
}, {
  name: 'Ethiopia',
  code: 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  code: 'FK'
}, {
  name: 'Faroe Islands',
  code: 'FO'
}, {
  name: 'Fiji',
  code: 'FJ'
}, {
  name: 'Finland',
  code: 'FI'
}, {
  name: 'France',
  code: 'FR'
}, {
  name: 'French Guiana',
  code: 'GF'
}, {
  name: 'French Polynesia',
  code: 'PF'
}, {
  name: 'French Southern Territories',
  code: 'TF'
}, {
  name: 'Gabon',
  code: 'GA'
}, {
  name: 'Gambia',
  code: 'GM'
}, {
  name: 'Georgia',
  code: 'GE'
}, {
  name: 'Germany',
  code: 'DE'
}, {
  name: 'Ghana',
  code: 'GH'
}, {
  name: 'Gibraltar',
  code: 'GI'
}, {
  name: 'Greece',
  code: 'GR'
}, {
  name: 'Greenland',
  code: 'GL'
}, {
  name: 'Grenada',
  code: 'GD'
}, {
  name: 'Guadeloupe',
  code: 'GP'
}, {
  name: 'Guam',
  code: 'GU'
}, {
  name: 'Guatemala',
  code: 'GT'
}, {
  name: 'Guernsey',
  code: 'GG'
}, {
  name: 'Guinea',
  code: 'GN'
}, {
  name: 'Guinea-Bissau',
  code: 'GW'
}, {
  name: 'Guyana',
  code: 'GY'
}, {
  name: 'Haiti',
  code: 'HT'
}, {
  name: 'Heard Island and Mcdonald Islands',
  code: 'HM'
}, {
  name: 'Holy See (Vatican City State)',
  code: 'VA'
}, {
  name: 'Honduras',
  code: 'HN'
}, {
  name: 'Hong Kong',
  code: 'HK'
}, {
  name: 'Hungary',
  code: 'HU'
}, {
  name: 'Iceland',
  code: 'IS'
}, {
  name: 'India',
  code: 'IN'
}, {
  name: 'Indonesia',
  code: 'ID'
}, {
  name: 'Iran, Islamic Republic Of',
  code: 'IR'
}, {
  name: 'Iraq',
  code: 'IQ'
}, {
  name: 'Ireland',
  code: 'IE'
}, {
  name: 'Isle of Man',
  code: 'IM'
}, {
  name: 'Israel',
  code: 'IL'
}, {
  name: 'Italy',
  code: 'IT'
}, {
  name: 'Jamaica',
  code: 'JM'
}, {
  name: 'Japan',
  code: 'JP'
}, {
  name: 'Jersey',
  code: 'JE'
}, {
  name: 'Jordan',
  code: 'JO'
}, {
  name: 'Kazakhstan',
  code: 'KZ'
}, {
  name: 'Kenya',
  code: 'KE'
}, {
  name: 'Kiribati',
  code: 'KI'
}, {
  name: "Korea, Democratic People'S Republic of",
  code: 'KP'
}, {
  name: 'Korea, Republic of',
  code: 'KR'
}, {
  name: 'Kuwait',
  code: 'KW'
}, {
  name: 'Kyrgyzstan',
  code: 'KG'
}, {
  name: "Lao People'S Democratic Republic",
  code: 'LA'
}, {
  name: 'Latvia',
  code: 'LV'
}, {
  name: 'Lebanon',
  code: 'LB'
}, {
  name: 'Lesotho',
  code: 'LS'
}, {
  name: 'Liberia',
  code: 'LR'
}, {
  name: 'Libyan Arab Jamahiriya',
  code: 'LY'
}, {
  name: 'Liechtenstein',
  code: 'LI'
}, {
  name: 'Lithuania',
  code: 'LT'
}, {
  name: 'Luxembourg',
  code: 'LU'
}, {
  name: 'Macao',
  code: 'MO'
}, {
  name: 'Macedonia, The Former Yugoslav Republic of',
  code: 'MK'
}, {
  name: 'Madagascar',
  code: 'MG'
}, {
  name: 'Malawi',
  code: 'MW'
}, {
  name: 'Malaysia',
  code: 'MY'
}, {
  name: 'Maldives',
  code: 'MV'
}, {
  name: 'Mali',
  code: 'ML'
}, {
  name: 'Malta',
  code: 'MT'
}, {
  name: 'Marshall Islands',
  code: 'MH'
}, {
  name: 'Martinique',
  code: 'MQ'
}, {
  name: 'Mauritania',
  code: 'MR'
}, {
  name: 'Mauritius',
  code: 'MU'
}, {
  name: 'Mayotte',
  code: 'YT'
}, {
  name: 'Mexico',
  code: 'MX'
}, {
  name: 'Micronesia, Federated States of',
  code: 'FM'
}, {
  name: 'Moldova, Republic of',
  code: 'MD'
}, {
  name: 'Monaco',
  code: 'MC'
}, {
  name: 'Mongolia',
  code: 'MN'
}, {
  name: 'Montenegro',
  code: 'ME'
}, {
  name: 'Montserrat',
  code: 'MS'
}, {
  name: 'Morocco',
  code: 'MA'
}, {
  name: 'Mozambique',
  code: 'MZ'
}, {
  name: 'Myanmar',
  code: 'MM'
}, {
  name: 'Namibia',
  code: 'NA'
}, {
  name: 'Nauru',
  code: 'NR'
}, {
  name: 'Nepal',
  code: 'NP'
}, {
  name: 'Netherlands',
  code: 'NL'
}, {
  name: 'Netherlands Antilles',
  code: 'AN'
}, {
  name: 'New Caledonia',
  code: 'NC'
}, {
  name: 'New Zealand',
  code: 'NZ'
}, {
  name: 'Nicaragua',
  code: 'NI'
}, {
  name: 'Niger',
  code: 'NE'
}, {
  name: 'Nigeria',
  code: 'NG'
}, {
  name: 'Niue',
  code: 'NU'
}, {
  name: 'Norfolk Island',
  code: 'NF'
}, {
  name: 'Northern Mariana Islands',
  code: 'MP'
}, {
  name: 'Norway',
  code: 'NO'
}, {
  name: 'Oman',
  code: 'OM'
}, {
  name: 'Pakistan',
  code: 'PK'
}, {
  name: 'Palau',
  code: 'PW'
}, {
  name: 'Palestinian Territory, Occupied',
  code: 'PS'
}, {
  name: 'Panama',
  code: 'PA'
}, {
  name: 'Papua New Guinea',
  code: 'PG'
}, {
  name: 'Paraguay',
  code: 'PY'
}, {
  name: 'Peru',
  code: 'PE'
}, {
  name: 'Philippines',
  code: 'PH'
}, {
  name: 'Pitcairn',
  code: 'PN'
}, {
  name: 'Poland',
  code: 'PL'
}, {
  name: 'Portugal',
  code: 'PT'
}, {
  name: 'Puerto Rico',
  code: 'PR'
}, {
  name: 'Qatar',
  code: 'QA'
}, {
  name: 'Reunion',
  code: 'RE'
}, {
  name: 'Romania',
  code: 'RO'
}, {
  name: 'Russian Federation',
  code: 'RU'
}, {
  name: 'RWANDA',
  code: 'RW'
}, {
  name: 'Saint Helena',
  code: 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  code: 'KN'
}, {
  name: 'Saint Lucia',
  code: 'LC'
}, {
  name: 'Saint Pierre and Miquelon',
  code: 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  code: 'VC'
}, {
  name: 'Samoa',
  code: 'WS'
}, {
  name: 'San Marino',
  code: 'SM'
}, {
  name: 'Sao Tome and Principe',
  code: 'ST'
}, {
  name: 'Saudi Arabia',
  code: 'SA'
}, {
  name: 'Senegal',
  code: 'SN'
}, {
  name: 'Serbia',
  code: 'RS'
}, {
  name: 'Seychelles',
  code: 'SC'
}, {
  name: 'Sierra Leone',
  code: 'SL'
}, {
  name: 'Singapore',
  code: 'SG'
}, {
  name: 'Slovakia',
  code: 'SK'
}, {
  name: 'Slovenia',
  code: 'SI'
}, {
  name: 'Solomon Islands',
  code: 'SB'
}, {
  name: 'Somalia',
  code: 'SO'
}, {
  name: 'South Africa',
  code: 'ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  code: 'GS'
}, {
  name: 'Spain',
  code: 'ES'
}, {
  name: 'Sri Lanka',
  code: 'LK'
}, {
  name: 'Sudan',
  code: 'SD'
}, {
  name: 'Suriname',
  code: 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  code: 'SJ'
}, {
  name: 'Swaziland',
  code: 'SZ'
}, {
  name: 'Sweden',
  code: 'SE'
}, {
  name: 'Switzerland',
  code: 'CH'
}, {
  name: 'Syrian Arab Republic',
  code: 'SY'
}, {
  name: 'Taiwan, Province of China',
  code: 'TW'
}, {
  name: 'Tajikistan',
  code: 'TJ'
}, {
  name: 'Tanzania, United Republic of',
  code: 'TZ'
}, {
  name: 'Thailand',
  code: 'TH'
}, {
  name: 'Timor-Leste',
  code: 'TL'
}, {
  name: 'Togo',
  code: 'TG'
}, {
  name: 'Tokelau',
  code: 'TK'
}, {
  name: 'Tonga',
  code: 'TO'
}, {
  name: 'Trinidad and Tobago',
  code: 'TT'
}, {
  name: 'Tunisia',
  code: 'TN'
}, {
  name: 'Turkey',
  code: 'TR'
}, {
  name: 'Turkmenistan',
  code: 'TM'
}, {
  name: 'Turks and Caicos Islands',
  code: 'TC'
}, {
  name: 'Tuvalu',
  code: 'TV'
}, {
  name: 'Uganda',
  code: 'UG'
}, {
  name: 'Ukraine',
  code: 'UA'
}, {
  name: 'United Arab Emirates',
  code: 'AE'
}, {
  name: 'United Kingdom',
  code: 'GB'
}, {
  name: 'United States Minor Outlying Islands',
  code: 'UM'
}, {
  name: 'Uruguay',
  code: 'UY'
}, {
  name: 'Uzbekistan',
  code: 'UZ'
}, {
  name: 'Vanuatu',
  code: 'VU'
}, {
  name: 'Venezuela',
  code: 'VE'
}, {
  name: 'Viet Nam',
  code: 'VN'
}, {
  name: 'Virgin Islands, British',
  code: 'VG'
}, {
  name: 'Virgin Islands, U.S.',
  code: 'VI'
}, {
  name: 'Wallis and Futuna',
  code: 'WF'
}, {
  name: 'Western Sahara',
  code: 'EH'
}, {
  name: 'Yemen',
  code: 'YE'
}, {
  name: 'Zambia',
  code: 'ZM'
}, {
  name: 'Zimbabwe',
  code: 'ZW'
}];

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_mask__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: _this.props.defaultValue || ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          value: event.target.value
        });

        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "beforeOfficeNumberMaskedValueChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newState, oldState, userInput) {
        var value = newState.value;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        if (value.endsWith('x') && userInput !== 'x' && !_this.state.value.endsWith('x')) {
          if (cursorPosition === value.length) {
            cursorPosition--;
            selection = {
              start: cursorPosition,
              end: cursorPosition
            };
          }

          value = value.slice(0, -2);
        }

        return {
          value: value,
          selection: selection
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "beforeMaskedValueChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.beforeMaskedValueChange) return _this.props.beforeMaskedValueChange;
        if (_this.props.officePhoneNumber) return _this.beforeOfficeNumberMaskedValueChange;
        return undefined;
      }
    }), _temp));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var props = this.props;

      var beforeMaskedValueChange = props.beforeMaskedValueChange,
          officePhoneNumber = props.officePhoneNumber,
          restProps = _objectWithoutProperties(props, ["beforeMaskedValueChange", "officePhoneNumber"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_input_mask___default.a, _extends({
        value: this.state.value,
        beforeMaskedValueChange: this.beforeMaskedValueChange()
      }, restProps, {
        onChange: this.onChange
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("react-circular-progressbar");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var styles = function styles(theme) {
  return {
    wrapper: {
      width: '38px',
      height: '38px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box'
    },
    image: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      cursor: 'pointer',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)'
    },
    noImagePlaceholder: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
      color: '#fff'
    }
  };
};

var ProfilePictureFormatter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePictureFormatter, _React$Component);

  function ProfilePictureFormatter() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProfilePictureFormatter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProfilePictureFormatter.__proto__ || Object.getPrototypeOf(ProfilePictureFormatter)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "hideBrokenImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this._imgItem.style.visibility = 'hidden';
      }
    }), _temp));
  }

  _createClass(ProfilePictureFormatter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._imgItem) {
        this._imgItem.addEventListener('error', this.hideBrokenImage);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._imgItem) {
        this._imgItem.removeEventListener('error', this.hideBrokenImage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$value = this.props.value,
          id = _props$value.id,
          imageAltText = _props$value.imageAltText,
          imageURL = _props$value.imageURL;
      var classes = this.props.classes;

      if (!imageURL) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default.a, {
          title: "Click to view profile",
          enterDelay: 400,
          leaveDelay: 100
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
          route: "profile",
          params: {
            id: id
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          style: {
            textDecoration: 'none'
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.noImagePlaceholder
        }, "?")))));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default.a, {
        title: "Click to view profile",
        enterDelay: 400,
        leaveDelay: 100
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: "profile",
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          textDecoration: 'none'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_lazyload___default.a, {
        height: 38,
        offset: 100,
        once: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: classes.image,
        ref: function ref(imgItem) {
          return _this2._imgItem = imgItem;
        },
        src: imageURL,
        alt: imageAltText,
        onError: this.hideBrokenImage
      }))))));
    }
  }]);

  return ProfilePictureFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(ProfilePictureFormatter));

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      appearance: 'none',
      width: '50%',
      height: '3px',
      background: '#d3d3d3',
      outline: 'none',
      opacity: '0.7',
      transition: 'opacity .2s',
      borderRadius: '50px',
      cursor: 'grab',
      '&:hover': {
        opacity: '1'
      }
    },
    label: {
      marginRight: '15px',
      fontFamily: theme.typography.fontFamily
    }
  };
};

var CustomSlider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomSlider, _Component);

  function CustomSlider(props) {
    var _this;

    _classCallCheck(this, CustomSlider);

    _this = _possibleConstructorReturn(this, (CustomSlider.__proto__ || Object.getPrototypeOf(CustomSlider)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "renderRabelComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            id = _this$props.id,
            label = _this$props.label,
            labelClassName = _this$props.labelClassName,
            classes = _this$props.classes;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(labelClassName || classes.label),
          htmlFor: id || _this._id
        }, label);
      }
    });
    _this._id = __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()();
    return _this;
  }

  _createClass(CustomSlider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          min = _props.min,
          max = _props.max,
          inputClassName = _props.inputClassName,
          rootClassName = _props.rootClassName,
          id = _props.id,
          _onChange = _props.onChange,
          label = _props.label,
          classes = _props.classes;
      var actualMin = typeof min === 'number' ? min : 0;
      var actualMax = typeof max === 'number' ? max : 100;
      var actualValue = typeof value === 'number' ? value : actualMin;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(rootClassName || classes.root)
      }, label ? this.renderRabelComponent() : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "range",
        min: actualMin,
        max: actualMax,
        value: actualValue,
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(inputClassName || classes.input),
        id: id || this._id,
        onChange: function onChange(event) {
          return typeof _onChange === 'function' && _onChange(event.target.value);
        }
      }));
    }
  }]);

  return CustomSlider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(CustomSlider));

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(23);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(24);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var style_css_ = __webpack_require__(65);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(66);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-form"
var external__react_form_ = __webpack_require__(30);
var external__react_form__default = /*#__PURE__*/__webpack_require__.n(external__react_form_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(74);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "react-avatar-editor"
var external__react_avatar_editor_ = __webpack_require__(146);
var external__react_avatar_editor__default = /*#__PURE__*/__webpack_require__.n(external__react_avatar_editor_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(21);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(70);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(41);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(28);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-circular-progressbar"
var external__react_circular_progressbar_ = __webpack_require__(129);
var external__react_circular_progressbar__default = /*#__PURE__*/__webpack_require__.n(external__react_circular_progressbar_);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(116);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./components/CustomSlider/index.js
var CustomSlider = __webpack_require__(147);

// EXTERNAL MODULE: external "email-validator"
var external__email_validator_ = __webpack_require__(103);
var external__email_validator__default = /*#__PURE__*/__webpack_require__.n(external__email_validator_);

// CONCATENATED MODULE: ./components/forms/CreateAgentForm/formValidation.js


var formValidation_validator = function validator(values) {
  return {
    firstName: !values.firstName ? 'This value is required' : null,
    lastName: !values.lastName ? 'This value is required' : null,
    realEstateLicenseNumber: !values.realEstateLicenseNumber ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    branch: !values.branch ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    officeNumber: values.officeNumber && values.officeNumber.length < 14 ? 'If provided, this value must be a full tel number with area code' : null,
    mobileNumber: !values.mobileNumber || values.mobileNumber && values.mobileNumber.length < 14 ? 'This value is required and must be a full tel number with area code' : null,
    email: !values.email || !external__email_validator_["validate"](values.email) ? 'This value is required and must be a valid email' : null
  };
};

var temporaryPasswordValidator = function temporaryPasswordValidator(value) {
  return {
    error: !value || value.length < 8 ? 'This value is required and must be at least 8 characters long' : null
  };
};
/* harmony default export */ var formValidation = (formValidation_validator);
// EXTERNAL MODULE: ./components/CustomFileUploadInputWrapper/index.js
var CustomFileUploadInputWrapper = __webpack_require__(117);

// EXTERNAL MODULE: ./components/MaterialCustomTextFieldWrapper/index.js
var MaterialCustomTextFieldWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./components/MaterialCustomRadioInputWrapper/index.js
var MaterialCustomRadioInputWrapper = __webpack_require__(118);

// EXTERNAL MODULE: ./components/MaterialCustomSelectInputWrapper/index.js
var MaterialCustomSelectInputWrapper = __webpack_require__(114);

// EXTERNAL MODULE: ./components/CustomInputMask/index.js
var CustomInputMask = __webpack_require__(127);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(126);

// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(10);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// CONCATENATED MODULE: ./components/forms/CreateAgentForm/index.js





var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var TextArea = input__default.a.TextArea;
var CustomTextField = MaterialCustomTextFieldWrapper["a" /* default */];
var MaterialCustomRadioInput = MaterialCustomRadioInputWrapper["a" /* default */];
var MaterialCustomSelectInput = MaterialCustomSelectInputWrapper["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg'];

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var CreateAgentForm_styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '30px 40px'
    }, _defineProperty(_root, theme.breakpoints.down('md'), {
      padding: '30px 0'
    }), _defineProperty(_root, "backgroundColor", '#fff'), _root),
    formRoot: {
      maxWidth: '100%'
    },
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    uploadBtnClassName: {
      display: 'inline-block',
      marginTop: '20px',
      color: '#fff',
      backgroundColor: '#272A2E',
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      padding: '8px 16px',
      minWidth: '88px',
      fontSize: '0.875rem',
      boxSizing: 'border-box',
      minHeight: '36px',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      lineHeight: '1.4em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '500',
      borderRadius: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000'
      }
    },
    profileItemsWrapper: {
      //display: 'inline-block',
      width: '100%',
      textAlign: 'center',
      marginBottom: '30px'
    },
    sliderWrapper: {
      width: '100%'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '82px'
    },
    h3: {
      fontWeight: theme.typography.fontWeightMedium
    },
    formMiniHeading: {
      width: '100%',
      textAlign: 'left',
      paddingLeft: '28px'
    },
    formMiniHeading2: {
      width: '100%',
      textAlign: 'left',
      paddingLeft: '28px',
      marginTop: '60px'
    },
    sliderRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'rgba(0,0,0,.6)',
      marginTop: '15px',
      fontFamily: theme.typography.fontFamily
    },
    sliderInput: _defineProperty({
      appearance: 'none',
      width: '30%',
      height: '3px',
      background: '#d3d3d3',
      outline: 'none',
      opacity: '0.7',
      transition: 'opacity .2s',
      borderRadius: '50px',
      cursor: 'grab',
      '&:hover': {
        opacity: '1'
      }
    }, theme.breakpoints.down('xs'), {
      width: '50%'
    }),
    sliderLabel: {
      marginBottom: '5px',
      marginRight: 'none'
    },
    radioInputWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    confirmImgBtn: {
      marginLeft: '5px',
      backgroundColor: '#096DF0',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#0950f0'
      }
    },
    setImageWrapper: {
      height: 350,
      width: 350,
      maxWidth: '100%',
      maxHeight: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '20px'
    },
    setImage: {
      height: '100%',
      maxWidth: '100%',
      width: 'auto',
      objectFit: 'contain'
    },
    progressBarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    progressBar: {
      width: '25%'
    },
    progressBarExplanation: {
      marginTop: '20px',
      fontSize: '1.1rem'
    },
    profileDescription: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '5px 5px 0 0'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }
  };
};

var radioInputAgentItems = [{
  label: '60%',
  value: '60'
}, {
  label: '70%',
  value: '70'
}, {
  label: '80%',
  value: '80'
}];
var areaOfFocusSelectItems = [{
  label: 'Residential Rentals'
}, {
  label: 'Residential Sales'
}, {
  label: 'Commercial Rentals'
}, {
  label: 'Commercial Sales'
}];
var branchSelectItems = [{
  label: 'New York City'
}];
var stateSelectItems = constants["c" /* states */].map(function (state) {
  return {
    label: state
  };
});
var CreateAgentForm_CreateAgentForm = (_dec = external__react_sizes__default()(mapSizesToProps), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentForm, _Component);

  function CreateAgentForm() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, CreateAgentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = CreateAgentForm.__proto__ || Object.getPrototypeOf(CreateAgentForm)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "firstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    }), _temp));
  }

  _createClass(CreateAgentForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          setImageFile = _props.setImageFile,
          imageFile = _props.imageFile,
          lgViewport = _props.lgViewport,
          setImageScale = _props.setImageScale,
          imageScale = _props.imageScale,
          adjustedImageScale = _props.adjustedImageScale,
          clearImageFile = _props.clearImageFile,
          getFileUploadInput = _props.getFileUploadInput,
          getProfilePicEditor = _props.getProfilePicEditor,
          imageFileConfirmed = _props.imageFileConfirmed,
          confirmImageFile = _props.confirmImageFile,
          confirmedImageDataURL = _props.confirmedImageDataURL,
          loadingSetImg = _props.loadingSetImg,
          setFinishedLoadingImg = _props.setFinishedLoadingImg,
          uplodingImageProgress = _props.uplodingImageProgress,
          formSubmitedSuccessfully = _props.formSubmitedSuccessfully,
          isUploadingImage = _props.isUploadingImage,
          isViewType = _props.isViewType,
          submittedAgent = _props.submittedAgent,
          isEditingAgent = _props.isEditingAgent,
          currentUserRole = _props.currentUserRole,
          onSubmit = _props.onSubmit,
          submittingFormToServer = _props.submittingFormToServer,
          formSubmissionBegun = _props.formSubmissionBegun;
      var finalDefaultValues;

      if (submittedAgent) {
        var firstName = submittedAgent.firstName,
            lastName = submittedAgent.lastName,
            email = submittedAgent.email,
            agent = submittedAgent.agent;
        var branch = agent.branch,
            state = agent.state,
            mobileNumber = agent.mobileNumber,
            officeNumber = agent.officeNumber,
            areaOfFocus = agent.areaOfFocus,
            realEstateLicenseNumber = agent.realEstateLicenseNumber,
            agentType = agent.agentType,
            ACHAccountNumber = agent.ACHAccountNumber,
            ACHAccountBankRoutingNumber = agent.ACHAccountBankRoutingNumber,
            title = agent.title,
            twitter = agent.twitter,
            facebook = agent.facebook,
            instagram = agent.instagram,
            profileDescription = agent.profileDescription;
        finalDefaultValues = {
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
          officeNumber: officeNumber,
          areaOfFocus: areaOfFocus,
          realEstateLicenseNumber: realEstateLicenseNumber,
          email: email,
          agentType: agentType,
          branch: branch,
          state: state,
          ACHAccountNumber: ACHAccountNumber,
          ACHAccountBankRoutingNumber: ACHAccountBankRoutingNumber,
          title: title,
          facebook: facebook ? facebook.split('/').pop() : undefined,
          twitter: twitter ? twitter.split('/').pop() : undefined,
          instagram: instagram ? instagram.split('/').pop() : undefined,
          profileDescription: profileDescription
        };
      }

      var isAdmin = currentUserRole && (currentUserRole === userTypes["admin"] || currentUserRole === userTypes["superAdmin"]);
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(external__react_form_["Form"], {
        defaultValues: finalDefaultValues || undefined,
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        validateOnMount: true,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: formValidation,
        getApi: this.props.getFormApi
      }, function (formApi) {
        if (_this2.firstTimeRender) {
          _this2.firstTimeRender = false;

          if (isAdmin && !formApi.getValue('firstName')) {
            formApi.setValue('firstName', '');
          }
        }

        return external__react__default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmitedSuccessfully || submittingFormToServer ? 'none' : undefined
          }
        }, external__react__default.a.createElement(Grid__default.a, {
          container: true,
          spacing: 8
        }, isAdmin && !isViewType && external__react__default.a.createElement("div", {
          className: classes.profileItemsWrapper
        }, imageFile && !imageFileConfirmed || loadingSetImg ? external__react__default.a.createElement(external__react_avatar_editor__default.a, {
          ref: getProfilePicEditor,
          image: imageFile || null,
          width: lgViewport ? 200 : 250,
          height: lgViewport ? 200 : 250,
          border: 50,
          color: [0, 0, 0, 0.3],
          scale: adjustedImageScale || 1.2,
          rotate: 0,
          style: {
            maxWidth: '100%',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }) : null, imageFile && !imageFileConfirmed || loadingSetImg ? external__react__default.a.createElement("div", {
          className: classes.sliderWrapper
        }, external__react__default.a.createElement(CustomSlider["a" /* default */], {
          value: imageScale,
          min: 0,
          max: 100,
          onChange: function onChange(value) {
            return setImageScale(value);
          },
          label: "Scale:",
          rootClassName: classes.sliderRoot,
          labelClassName: classes.sliderLabel,
          inputClassName: classes.sliderInput
        })) : null, external__react__default.a.createElement("div", {
          className: classes.setImageWrapper,
          style: {
            display: !imageFile || !confirmedImageDataURL || loadingSetImg ? 'none' : undefined
          }
        }, external__react__default.a.createElement("img", {
          className: classes.setImage,
          src: confirmedImageDataURL,
          onLoad: setFinishedLoadingImg,
          alt: "profile pic"
        })), external__react__default.a.createElement("div", null, !imageFileConfirmed || loadingSetImg ? external__react__default.a.createElement(CustomFileUploadInputWrapper["a" /* default */], {
          field: "profilePicture",
          id: v4__default()(),
          label: "Upload Agent's Profile Picture",
          btnClassName: classes.uploadBtnClassName,
          required: true,
          customOnChange: setImageFile,
          customState: imageFile,
          helperInfo: "Agent's Profile (JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          getInput: getFileUploadInput,
          accept: ".jpg, .jpeg"
        }) : null, external__react__default.a.createElement("div", null, imageFile ? external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          onClick: function onClick() {
            return clearImageFile();
          },
          type: "button"
        }, "Clear File") : null, imageFile && !imageFileConfirmed || loadingSetImg ? external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.confirmImgBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return confirmImageFile();
          },
          type: "button"
        }, "Confirm File", ' ', loadingSetImg ? external__react__default.a.createElement(icon__default.a, {
          type: "loading",
          style: {
            color: '#fff'
          }
        }) : null) : null))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "firstName",
          id: v4__default()(),
          label: "First Name",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "lastName",
          id: v4__default()(),
          label: "Last Name",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: isAdmin ? 6 : 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "areaOfFocus",
          id: v4__default()(),
          fullWidth: true,
          label: "Area of Focus",
          name: "areaOfFocus",
          multiple: true,
          selectInputItems: areaOfFocusSelectItems,
          disabled: isViewType && !isEditingAgent
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "realEstateLicenseNumber",
          id: v4__default()(),
          label: "Real Estate License#",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "branch",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          label: "Branch",
          name: "branch",
          selectInputItems: branchSelectItems,
          disabled: isViewType && !isEditingAgent
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "state",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          label: "State",
          name: "state",
          selectInputItems: stateSelectItems,
          disabled: isViewType && !isEditingAgent
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "title",
          id: v4__default()(),
          label: "Title",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent
        }))), !isViewType && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "temporaryPassword",
          id: v4__default()(),
          label: "Temporary Password",
          fullWidth: true,
          required: true,
          type: "password",
          disabled: isViewType && !isEditingAgent,
          validate: temporaryPasswordValidator
        }))), isAdmin && external__react__default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper)
        }, external__react__default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: v4__default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          horizontal: true,
          disabled: isViewType && !isEditingAgent
        })), external__react__default.a.createElement("div", {
          className: classes.formSubheading
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          }
        }, "Contact Information")), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomInputMask["a" /* default */], {
          mask: "(999) 999-9999 \\x999",
          placeholder: "Office Number",
          maskChar: null,
          officePhoneNumber: true,
          disabled: isViewType && !isEditingAgent,
          defaultValue: isViewType && submittedAgent ? finalDefaultValues.officeNumber : undefined
        }, function (props) {
          return external__react__default.a.createElement(CustomTextField, _extends({
            field: "officeNumber",
            id: v4__default()(),
            label: "Office Number",
            fullWidth: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999 \\x999",
            disabledStyle: isViewType && !isEditingAgent
          }, props));
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: isAdmin ? 6 : 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomInputMask["a" /* default */], {
          mask: "(999) 999-9999",
          maskChar: null,
          placeholder: "Phone Number",
          disabled: isViewType && !isEditingAgent,
          defaultValue: isViewType && submittedAgent ? finalDefaultValues.mobileNumber : undefined
        }, function (props) {
          return external__react__default.a.createElement(CustomTextField, _extends({
            field: "mobileNumber",
            id: v4__default()(),
            label: "Mobile Number",
            fullWidth: true,
            required: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999",
            disabledStyle: isViewType && !isEditingAgent
          }, props));
        }))), isAdmin && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "email",
          id: v4__default()(),
          label: "Email",
          fullWidth: true,
          required: true,
          type: "email",
          disabled: isViewType && !isEditingAgent
        }))), external__react__default.a.createElement("div", {
          className: classes.formSubheading
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          }
        }, "Other Information")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: v4__default()(),
          label: "ACH Account Number",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "ACHAccountBankRoutingNumber",
          id: v4__default()(),
          label: "ACH Account's Bank Routing Number",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "facebook",
          id: v4__default()(),
          label: "Facebook URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.facebook.com/",
          shrink: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "twitter",
          id: v4__default()(),
          label: "Twitter URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.twitter.com/",
          shrink: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "instagram",
          id: v4__default()(),
          label: "Instagram URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.instagram.com/",
          shrink: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          inputRootClassName: classes.profileDescription,
          field: "profileDescription",
          id: v4__default()(),
          label: "Profile Description",
          fullWidth: true,
          multiline: true,
          rows: 4,
          rowsMax: 12,
          shrink: true,
          disabled: isViewType && !isEditingAgent
        })))));
      }), submittingFormToServer ? external__react__default.a.createElement("div", {
        className: classes.formSubmittingWrapper
      }, external__react__default.a.createElement(icon__default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        }
      }), external__react__default.a.createElement("div", {
        className: classes.progressBarExplanation
      }, "Finishing submission...")) : null, uplodingImageProgress && !submittingFormToServer
      /*&& isUploadingImage */
      ? external__react__default.a.createElement("div", {
        className: classes.progressBarWrapper
      }, external__react__default.a.createElement(external__react_circular_progressbar__default.a, {
        className: classes.progressBar,
        percentage: uplodingImageProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingImageProgress / 100, ")")
          }
        }
      }), external__react__default.a.createElement("div", {
        className: classes.progressBarExplanation
      }, "Uploading profile picture...")) : null);
    }
  }]);

  return CreateAgentForm;
}(external__react_["Component"])) || _class);
/* harmony default export */ var forms_CreateAgentForm = __webpack_exports__["a"] = (Object(styles_["withStyles"])(CreateAgentForm_styles)(CreateAgentForm_CreateAgentForm));

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__(6);

var query = "\n    mutation setAgentProfilePic($input: SetAgentProfilePicInput!) {\n      setAgentProfilePic(input: $input) {\n        url\n        wasSuccessful\n        otherError\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

var setAgentProfilePic = function setAgentProfilePic(agentID, fileName) {
  var res;
  var variables = {
    input: {
      agentID: agentID,
      fileName: fileName
    }
  };
  var finalResponseObj = {
    url: null,
    otherError: null,
    userErrors: null
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    var _res = res,
        data = _res.setAgentProfilePic;
    var otherError = data.otherError,
        userErrors = data.userErrors;

    if (!data.wasSuccessful) {
      if (otherError) finalResponseObj.error = otherError;
      if (userErrors) finalResponseObj.userErrors = userErrors;
    } else {
      finalResponseObj.url = data.url;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (setAgentProfilePic);

/***/ }),
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "material-ui/Dialog"
var Dialog_ = __webpack_require__(58);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(41);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(31);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(32);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(128);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./components/forms/CreateAgentForm/index.js + 1 modules
var CreateAgentForm = __webpack_require__(155);

// EXTERNAL MODULE: ./utils/Math.js
var utils_Math = __webpack_require__(72);

// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(19);

// EXTERNAL MODULE: ./effects/client.js
var client = __webpack_require__(6);

// CONCATENATED MODULE: ./effects/users/createAgent.js

var query = "\n    mutation createAgent($input: CreateAgentInput!) {\n      createAgent(input: $input) {\n        agent {\n          uuid\n          firstName\n          lastName\n          email\n          role\n          lastLoginTimestamp\n          createdAt\n          agent {\n            profilePicURL\n            branch\n            state\n            mobileNumber\n            officeNumber\n            areaOfFocus\n            realEstateLicenseNumber\n            agentType\n          }\n        }\n        signedURL\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

var createAgent_createAgent = function createAgent(values) {
  var res;
  var error;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    agent: null,
    signedURL: null,
    error: error
  };
  return client["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    var _res = res,
        data = _res.createAgent;
    var agent = data.agent,
        signedURL = data.signedURL;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.userErrors.length ? {
        message: data.userErrors[0].message,
        field: data.userErrors[0].field
      } : data.otherError;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.agent = agent;
      finalResponseObj.signedURL = signedURL;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var users_createAgent = (createAgent_createAgent);
// EXTERNAL MODULE: ./effects/users/setAgentProfilePic.js
var setAgentProfilePic = __webpack_require__(156);

// CONCATENATED MODULE: ./containers/CreateAgentForm.js
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var CreateAgentForm_CreateAgentContainer = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentContainer, _Component);

  function CreateAgentContainer(props) {
    var _this;

    _classCallCheck(this, CreateAgentContainer);

    _this = _possibleConstructorReturn(this, (CreateAgentContainer.__proto__ || Object.getPrototypeOf(CreateAgentContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          imageFile: file
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          imageFile: '',
          imageFileConfirmed: false,
          confirmedImageDataURL: null
        });

        if (_this._fileUploadInput) {
          _this._fileUploadInput.value = null;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getFileUploadInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(input) {
        _this._fileUploadInput = input;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getProfilePicEditor", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(editor) {
        _this._profilePicEditor = editor;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setImageScale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(num) {
        var rawScale = Number(num);
        var adjustedImageScale = Object(utils_Math["b" /* round */])(1 + rawScale / 100, 2);

        _this.setState({
          imageScale: rawScale,
          adjustedImageScale: adjustedImageScale
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "confirmImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._profilePicEditor) {
          // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
          // drawn on another canvas, or added to the DOM.
          var canvas = _this._profilePicEditor.getImage();

          canvas.toBlob(function (blob) {
            _this.setState({
              imageBlob: blob,
              imageFileConfirmed: true,
              loadingSetImg: true,
              confirmedImageDataURL: URL.createObjectURL(blob)
            });
          }); // If you want the image resized to the canvas size (also a HTMLCanvasElement)
          // const canvasScaled = this._profilePicEditor.getImageScaledToCanvas();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setFinishedLoadingImg", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          loadingSetImg: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        var _this$state = _this.state,
            imageFile = _this$state.imageFile,
            imageFileConfirmed = _this$state.imageFileConfirmed;

        var returnValues = _objectSpread({}, values, {
          firstName: Object(stringUtils["a" /* capitalize */])(values.firstName),
          lastName: Object(stringUtils["a" /* capitalize */])(values.lastName),
          fileName: imageFile && imageFileConfirmed ? imageFile.name : undefined,
          fileType: imageFile && imageFileConfirmed ? imageFile.type : undefined
        });

        delete returnValues.profilePicture;

        _this.setState({
          submittingFormToServer: true
        });

        _this.props.setFormSubmitted();

        users_createAgent(returnValues).then(function (result) {
          var signedURL = result.signedURL,
              error = result.error,
              agent = result.agent;

          if (error) {
            if (error.field === 'email') {
              var formElement = document.getElementById('formDialog');
              formApi.setError(error.field, error.message);
              formElement.scrollTop = formElement.scrollHeight;
            }

            _this.setState({
              submittingFormToServer: false
            });

            console.log(error);

            _this.props.setFormSubmitted(false);

            _this.props.openRequestErrorSnackbar(error.message);

            return;
          }

          if (signedURL) {
            external__axios__default.a.put(signedURL, _this.state.imageBlob, {
              headers: {
                'Content-Type': _this.state.imageFile.type
              },
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;

                _this.setState({
                  submittingFormToServer: Math.floor(loadedPercent) ? false : true,
                  formSubmitedSuccessfully: true,
                  uplodingImageProgress: Math.floor(loadedPercent),
                  isUploadingImage: loadedPercent >= 100 ? false : true
                });
              }
            }).then(function (res) {
              var status = "".concat(res.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  submittingFormToServer: false,
                  isUploadingImage: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar('There was an error uploading your file. Please try again shortly.');

                return;
              }

              _this.setState({
                submittingFormToServer: true
              });

              Object(setAgentProfilePic["a" /* default */])(agent.uuid, _this.state.imageFile.name).then(function (_ref) {
                var url = _ref.url,
                    otherError = _ref.otherError,
                    userErrors = _ref.userErrors;

                _this.setState({
                  submittingFormToServer: false
                });

                if (otherError) {
                  _this.props.openRequestErrorSnackbar(otherError);

                  return;
                }

                if (userErrors && userErrors.length) {
                  _this.props.openRequestErrorSnackbar(userErrors[0].message);

                  return;
                }

                if (url) {
                  agent.agent.profilePicURL = _this.state.confirmedImageDataURL;
                }

                _this.props.confirmAgentCreated(agent);

                _this.props.setFormSubmitted(false);
              }).catch(function (error) {
                _this.props.openRequestErrorSnackbar('There was an error uploading your image.');

                console.log(error);

                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);
              });
            }).catch(function (error) {
              _this.props.setFormSubmitted(false);

              _this.setState({
                submittingFormToServer: false
              });

              _this.props.openRequestErrorSnackbar('There was an error uploading your image.');

              console.log(error);
            });
          } else {
            _this.setState({
              formSubmitedSuccessfully: true
            });

            _this.props.setFormSubmitted(false);

            _this.props.confirmAgentCreated(agent);
          }
        });
      }
    });
    _this.state = {
      imageFile: '',
      imageFileConfirmed: false,
      confirmedImageDataURL: null,
      imageScale: 0,
      adjustedImageScale: 1,
      loadingSetImg: false,
      uplodingImageProgress: 0,
      isUploadingImage: false,
      formSubmitedSuccessfully: false,
      imageBlob: null,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(CreateAgentContainer, [{
    key: "onSubmitFailure",
    value: function onSubmitFailure(errs, onSubmitError) {
      console.log(errs);
      console.log(onSubmitError);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return external__react__default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, external__react__default.a.createElement(CreateAgentForm["a" /* default */], _extends({
        onSubmit: this.onSubmit,
        onSubmitFailure: this.onSubmitFailure,
        setImageFile: this.setImageFile,
        imageFile: this.state.imageFile,
        imageScale: this.state.imageScale,
        setImageScale: this.setImageScale,
        adjustedImageScale: this.state.adjustedImageScale,
        getFileUploadInput: this.getFileUploadInput,
        clearImageFile: this.clearImageFile,
        getProfilePicEditor: this.getProfilePicEditor,
        imageFileConfirmed: this.state.imageFileConfirmed,
        confirmImageFile: this.confirmImageFile,
        confirmedImageDataURL: this.state.confirmedImageDataURL,
        loadingSetImg: this.state.loadingSetImg,
        setFinishedLoadingImg: this.setFinishedLoadingImg,
        uplodingImageProgress: this.state.uplodingImageProgress,
        formSubmitedSuccessfully: this.state.formSubmitedSuccessfully,
        isUploadingImage: this.state.isUploadingImage,
        currentUserRole: this.props.currentUserRole,
        submittingFormToServer: this.state.submittingFormToServer,
        getFormApi: function getFormApi(formApi) {
          _this2._formApi = formApi;
        }
      }, rest)));
    }
  }]);

  return CreateAgentContainer;
}(external__react_["Component"])) || _class;

/* harmony default export */ var containers_CreateAgentForm = (CreateAgentForm_CreateAgentContainer);
// EXTERNAL MODULE: ./AppGlobalStateProvider/index.js
var AppGlobalStateProvider = __webpack_require__(71);

// CONCATENATED MODULE: ./components/CreateAgentDialogBox/index.js
var CreateAgentDialogBox__class;

function CreateAgentDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateAgentDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { CreateAgentDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateAgentDialogBox__typeof(obj); }

function CreateAgentDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateAgentDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateAgentDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateAgentDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateAgentDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function CreateAgentDialogBox__possibleConstructorReturn(self, call) { if (call && (CreateAgentDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return CreateAgentDialogBox__assertThisInitialized(self); }

function CreateAgentDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CreateAgentDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var networkErrorMessage = "We're sorry. There was an error processing your request. Please try again shortly or contact an administrator for assistance.";

var styles = function styles(theme) {
  return {
    paper: {
      width: '800px',
      maxWidth: '800px'
    },
    dialogActions: {
      margin: '8px 0'
    },
    formTitle: {
      padding: 'theme.spacing.unit theme.spacing.unit * 3',
      textAlign: 'center'
    },
    formSubheader: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 6,
      marginTop: theme.spacing.unit * 2,
      textAlign: 'center'
    },
    dialogContent: {
      paddingTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    saveDraftBtn: {
      marginRight: 'auto',
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
      }
    },
    snackBar: {
      position: 'absolute',
      bottom: 20
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var CreateAgentDialogBox_CreateAgentDialogBox = Object(external__mobx_react_["observer"])(CreateAgentDialogBox__class =
/*#__PURE__*/
function (_Component) {
  CreateAgentDialogBox__inherits(CreateAgentDialogBox, _Component);

  function CreateAgentDialogBox(props) {
    var _this;

    CreateAgentDialogBox__classCallCheck(this, CreateAgentDialogBox);

    _this = CreateAgentDialogBox__possibleConstructorReturn(this, (CreateAgentDialogBox.__proto__ || Object.getPrototypeOf(CreateAgentDialogBox)).call(this, props));
    Object.defineProperty(CreateAgentDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool
        });
      }
    });
    Object.defineProperty(CreateAgentDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(text) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: text
        });
      }
    });
    Object.defineProperty(CreateAgentDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          snackbarOpen: false,
          snackbarUndoFunction: null,
          isErrorSnackbar: false,
          snackbarText: ''
        });
      }
    });
    Object.defineProperty(CreateAgentDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : networkErrorMessage;

        _this.setState({
          snackbarOpen: true,
          snackbarText: text,
          isErrorSnackbar: true
        });
      }
    });
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      isErrorSnackbar: false
    };
    return _this;
  }

  CreateAgentDialogBox__createClass(CreateAgentDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          toggleCreateAgentModal = _props.toggleCreateAgentModal,
          open = _props.open;
      return external__react__default.a.createElement(Dialog__default.a, {
        open: open,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "Add New Agent"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog"
      }, external__react__default.a.createElement(AppGlobalStateProvider["a" /* AppContext */].Consumer, null, function (context) {
        return external__react__default.a.createElement(containers_CreateAgentForm, {
          userUUID: _this2.props.userUUID,
          setFormSubmitted: _this2.setFormSubmitted,
          getFormApi: function getFormApi(formApi) {
            return _this2.setState({
              formApi: formApi
            });
          },
          createAgent: context.UserStore.createAgent,
          setAgentProfilePic: context.UserStore.setAgentProfilePic,
          confirmAgentCreated: _this2.props.confirmAgentCreated,
          currentUserRole: _this2.props.currentUserRole,
          openRequestErrorSnackbar: _this2.openRequestErrorSnackbar
        });
      }), external__react__default.a.createElement(Snackbar__default.a, {
        classes: {
          root: external__classnames__default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: this.state.isErrorSnackbar ? 8000 : 4000,
        onClose: this.handleCloseSnackbar,
        message: external__react__default.a.createElement("span", {
          id: "snackbar-id"
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? external__react__default.a.createElement(Button__default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleCloseSnackbar();

            if (_this2.state.snackbarUndoFunction && typeof snackbarUndoFunction === 'function') {
              _this2.snackbarUndoFunction();
            }
          }
        }, "UNDO") : undefined, external__react__default.a.createElement(IconButton__default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar
        }, external__react__default.a.createElement(Close__default.a, null))]
      })), !this.state.formSubmitted ? external__react__default.a.createElement(Dialog_["DialogActions"], {
        classes: {
          root: classes.dialogActions
        }
      }, external__react__default.a.createElement(Button__default.a, {
        onClick: toggleCreateAgentModal,
        color: "primary"
      }, "Cancel"), external__react__default.a.createElement(Button__default.a, {
        onClick: function onClick() {
          var errors = _this2.state.formApi.getError();

          var errorCount;
          console.log(_this2.state.formApi.getError());

          if (errors) {
            errorCount = Object.keys(_this2.state.formApi.getError()).length;
          }

          if (errorCount) {
            _this2.toggleSnackbarOpen("Please correct ".concat(errorCount, " form error").concat(errorCount > 1 ? 's' : ''));
          }

          _this2.state.formApi.submitForm();
        },
        color: "primary"
      }, "Submit")) : null);
    }
  }]);

  return CreateAgentDialogBox;
}(external__react_["Component"])) || CreateAgentDialogBox__class;

/* harmony default export */ var components_CreateAgentDialogBox = __webpack_exports__["a"] = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(styles)(CreateAgentDialogBox_CreateAgentDialogBox)));

/***/ }),
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(223);


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(9);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: ./components/Layout/index.js + 11 modules
var Layout = __webpack_require__(81);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(25);

// EXTERNAL MODULE: ./lib/withData.js + 1 modules
var withData = __webpack_require__(50);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(41);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(28);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(55);
var Add__default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(140);
var Search__default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(56);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(21);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "material-ui-pickers"
var external__material_ui_pickers_ = __webpack_require__(153);
var external__material_ui_pickers__default = /*#__PURE__*/__webpack_require__.n(external__material_ui_pickers_);

// EXTERNAL MODULE: external "material-ui/TextField"
var TextField_ = __webpack_require__(119);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "material-ui/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__(123);
var ExpansionPanel__default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(124);
var ExpandMore__default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckCircle"
var CheckCircle_ = __webpack_require__(154);
var CheckCircle__default = /*#__PURE__*/__webpack_require__.n(CheckCircle_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(68);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(18);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(27);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(31);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(14);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(32);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./components/CreateAgentDialogBox/index.js + 2 modules
var CreateAgentDialogBox = __webpack_require__(172);

// EXTERNAL MODULE: ./components/MaterialCustomSelectInput/index.js
var MaterialCustomSelectInput = __webpack_require__(120);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(78);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "faker"
var external__faker_ = __webpack_require__(122);
var external__faker__default = /*#__PURE__*/__webpack_require__.n(external__faker_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(70);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid"
var dx_react_grid_ = __webpack_require__(107);
var dx_react_grid__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid-material-ui"
var dx_react_grid_material_ui_ = __webpack_require__(36);
var dx_react_grid_material_ui__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_material_ui_);

// EXTERNAL MODULE: ./utils/backEndTableUtils/DefaultVirtualTableCell.js
var DefaultVirtualTableCell = __webpack_require__(108);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableComponent.js
var TableComponent = __webpack_require__(109);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableContainerComponent.js
var TableContainerComponent = __webpack_require__(110);

// EXTERNAL MODULE: ./utils/backEndTableUtils/NoDataCellComponent.js
var NoDataCellComponent = __webpack_require__(111);

// EXTERNAL MODULE: ./components/dataTableFormatters/ProfilePictureFormatter.js
var ProfilePictureFormatter = __webpack_require__(141);

// EXTERNAL MODULE: ./components/dataTableFormatters/ViewFormatter.js
var ViewFormatter = __webpack_require__(112);

// CONCATENATED MODULE: ./components/AdminAreaCustomersTable/index.js
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 245px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'photo',
  sortingEnabled: false
}, {
  columnName: 'view',
  sortingEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'photo',
  filteringEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.email;
};

var AdminAreaCustomersTable_FilterCell = function FilterCell(props) {
  return external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"].Cell, props);
};

var defaultColumnWidths = [{
  columnName: 'customerID',
  width: 140
}, {
  columnName: 'photo',
  width: 95
}, {
  columnName: 'name',
  width: 150
}, {
  columnName: 'email',
  width: 160
}, {
  columnName: 'interest',
  width: 150
}, {
  columnName: 'lastLoginTimestamp',
  width: 180
}, {
  columnName: 'view',
  width: 120
}];
var pageSizes = [5, 10, 15, 20, 50, 100, 0];

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var AdminAreaCustomersTable_PhotoFormatter = function PhotoFormatter(_ref2) {
  var value = _ref2.value;
  return external__react__default.a.createElement(ProfilePictureFormatter["a" /* default */], {
    value: value
  });
};

var AdminAreaCustomersTable_PhotoTypeProvider = function PhotoTypeProvider(props) {
  return external__react__default.a.createElement(dx_react_grid_["DataTypeProvider"], _extends({
    formatterComponent: AdminAreaCustomersTable_PhotoFormatter
  }, props));
};

var AdminAreaCustomersTable_ViewCellFormatter = function ViewCellFormatter(_ref3) {
  var value = _ref3.value;
  return external__react__default.a.createElement(ViewFormatter["a" /* default */], {
    value: value
  });
};

var AdminAreaCustomersTable_ViewTypeProvider = function ViewTypeProvider(props) {
  return external__react__default.a.createElement(dx_react_grid_["DataTypeProvider"], _extends({
    formatterComponent: AdminAreaCustomersTable_ViewCellFormatter
  }, props));
};

var AdminAreaCustomersTable_TableContainerComponentWrapperBase = function TableContainerComponentWrapperBase(_ref4) {
  var classes = _ref4.classes,
      restProps = _objectWithoutProperties(_ref4, ["classes"]);

  return external__react__default.a.createElement(TableContainerComponent["a" /* default */], _extends({}, restProps, {
    className: classes.myTableContainer
  }));
};

var TableContainerComponentWrapper = Object(styles_["withStyles"])(styles)(AdminAreaCustomersTable_TableContainerComponentWrapperBase);
var AdminAreaCustomersTable_AdminAreaCustomersTable = (_dec = Object(styles_["withStyles"])(styles), _dec2 = external__react_sizes__default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminAreaCustomersTable, _Component);

  function AdminAreaCustomersTable(props) {
    var _this;

    _classCallCheck(this, AdminAreaCustomersTable);

    _this = _possibleConstructorReturn(this, (AdminAreaCustomersTable.__proto__ || Object.getPrototypeOf(AdminAreaCustomersTable)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "changePageSize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(pageSize) {
        _this.setState({
          pageSize: pageSize
        });

        if (_this.state.pageSize < pageSize) {
          document.getElementById('myTableContainer').scrollTop = 0;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "currentPageChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPage) {
        _this.setState({
          currentPage: currentPage
        });

        document.getElementById('myTableContainer').scrollTop = 0;
      }
    });
    _this.state = {
      pageSize: 10,
      currentPage: 0
    };
    return _this;
  }

  _createClass(AdminAreaCustomersTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onMount) this.props.onMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          columns = _props.columns,
          rows = _props.rows,
          lgViewport = _props.lgViewport;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(dx_react_grid_material_ui_["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId
      }, external__react__default.a.createElement(AdminAreaCustomersTable_PhotoTypeProvider, {
        "for": ['photo']
      }), external__react__default.a.createElement(AdminAreaCustomersTable_ViewTypeProvider, {
        "for": ['view']
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["DragDropProvider"], null), external__react__default.a.createElement(dx_react_grid_["SearchState"], null), external__react__default.a.createElement(dx_react_grid_["FilteringState"], {
        columnExtensions: filteringStateColumnExtensions
      }), external__react__default.a.createElement(dx_react_grid_["SortingState"], {
        defaultSorting: [{
          columnName: 'name',
          direction: 'asc'
        }],
        columnExtensions: sortingStateColumnExtensions
      }), external__react__default.a.createElement(dx_react_grid_["PagingState"], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange
      }), external__react__default.a.createElement(dx_react_grid_["IntegratedFiltering"], null), external__react__default.a.createElement(dx_react_grid_["IntegratedSorting"], null), external__react__default.a.createElement(dx_react_grid_["IntegratedPaging"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["VirtualTable"], {
        height: external__is_browser__default.a ? window.innerHeight - 245 : undefined,
        tableComponent: TableComponent["a" /* default */],
        containerComponent: function containerComponent(props) {
          return external__react__default.a.createElement(TableContainerComponent["a" /* default */], _extends({
            className: lgViewport ? classes.myTableContainerSmallViewPort : classes.myTableContainer
          }, props));
        },
        cellComponent: DefaultVirtualTableCell["a" /* default */],
        noDataCellComponent: NoDataCellComponent["a" /* default */]
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        })
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"], {
        cellComponent: AdminAreaCustomersTable_FilterCell
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["Toolbar"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["SearchPanel"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["TableHeaderRow"], {
        showSortingControls: true
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["PagingPanel"], {
        pageSizes: pageSizes
      })));
    }
  }]);

  return AdminAreaCustomersTable;
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var components_AdminAreaCustomersTable = (AdminAreaCustomersTable_AdminAreaCustomersTable);
// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(19);

// CONCATENATED MODULE: ./containers/AdminAreaCustomersTableContainer.js
var AdminAreaCustomersTableContainer__class;

function AdminAreaCustomersTableContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminAreaCustomersTableContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { AdminAreaCustomersTableContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminAreaCustomersTableContainer__typeof(obj); }

function AdminAreaCustomersTableContainer__extends() { AdminAreaCustomersTableContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdminAreaCustomersTableContainer__extends.apply(this, arguments); }

function AdminAreaCustomersTableContainer__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AdminAreaCustomersTableContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminAreaCustomersTableContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminAreaCustomersTableContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminAreaCustomersTableContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminAreaCustomersTableContainer__defineProperties(Constructor, staticProps); return Constructor; }

function AdminAreaCustomersTableContainer__possibleConstructorReturn(self, call) { if (call && (AdminAreaCustomersTableContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return AdminAreaCustomersTableContainer__assertThisInitialized(self); }

function AdminAreaCustomersTableContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AdminAreaCustomersTableContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var chance = new external__chance__default.a();

var AdminAreaCustomersTableContainer_styles = function styles(theme) {
  return {
    root: {
      position: 'relative'
    },
    progress: {
      margin: theme.spacing.unit * 2,
      marginRight: 'auto',
      marginLeft: 'auto',
      display: 'block'
    },
    progressWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '60px 20px',
      borderRadius: '3px',
      backgroundColor: '#fff',
      zIndex: 2
    }
  };
};

var AdminAreaCustomersTableContainer_columns = [{
  name: 'customerID',
  title: 'Customer ID'
}, {
  name: 'photo',
  title: 'Photo'
}, {
  name: 'name',
  title: 'Name'
}, {
  name: 'email',
  title: 'Email'
}, {
  name: 'interest',
  title: 'Interest'
}, {
  name: 'lastLoginTimestamp',
  title: 'Last Login Time'
}, {
  name: 'view',
  title: 'View Profile'
}];

var AdminAreaCustomersTableContainer_AdminAreaCustomersTableContainer = Object(external__mobx_react_["observer"])(AdminAreaCustomersTableContainer__class =
/*#__PURE__*/
function (_Component) {
  AdminAreaCustomersTableContainer__inherits(AdminAreaCustomersTableContainer, _Component);

  function AdminAreaCustomersTableContainer(props) {
    var _this;

    AdminAreaCustomersTableContainer__classCallCheck(this, AdminAreaCustomersTableContainer);

    _this = AdminAreaCustomersTableContainer__possibleConstructorReturn(this, (AdminAreaCustomersTableContainer.__proto__ || Object.getPrototypeOf(AdminAreaCustomersTableContainer)).call(this, props));
    Object.defineProperty(AdminAreaCustomersTableContainer__assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var customers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var rows = [];
        customers.forEach(function (customer) {
          var customerPart = customer.customer,
              firstName = customer.firstName,
              lastName = customer.lastName,
              email = customer.email,
              uuid = customer.uuid,
              lastLoginTimestamp = customer.lastLoginTimestamp;
          var profilePicURL = customerPart.profilePicURL,
              interest = customerPart.interest;
          rows.push({
            customerID: uuid,
            photo: {
              imageURL: profilePicURL,
              id: uuid
            },
            name: Object(stringUtils["a" /* capitalize */])("".concat(firstName, " ").concat(lastName)),
            email: email,
            interest: interest || 'unspecified',
            lastLoginTimestamp: lastLoginTimestamp ? external__moment__default()(lastLoginTimestamp).format('MM/DD/YYYY, h:mm:ss a') : '',
            view: {
              route: 'customer',
              id: uuid
            }
          });
        });
        return rows;
      }
    });
    _this.state = {
      tableIsLoading: true,
      rows: _this.createRows(_this.props.agents)
    };
    return _this;
  }

  AdminAreaCustomersTableContainer__createClass(AdminAreaCustomersTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          rows = _state.rows;

      var _props = this.props,
          classes = _props.classes,
          rest = AdminAreaCustomersTableContainer__objectWithoutProperties(_props, ["classes"]);

      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(components_AdminAreaCustomersTable, AdminAreaCustomersTableContainer__extends({}, rest, {
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: AdminAreaCustomersTableContainer_columns,
        rows: rows
      })));
    }
  }]);

  return AdminAreaCustomersTableContainer;
}(external__react_["Component"])) || AdminAreaCustomersTableContainer__class;

/* harmony default export */ var containers_AdminAreaCustomersTableContainer = (Object(styles_["withStyles"])(AdminAreaCustomersTableContainer_styles)(AdminAreaCustomersTableContainer_AdminAreaCustomersTableContainer));
// CONCATENATED MODULE: ./containers/AdminAreaCustomersContainer.js
var AdminAreaCustomersContainer__class;

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agents {\n    customers {\n      uuid\n      firstName\n      lastName\n      email\n      lastLoginTimestamp\n      customer {\n        interest\n        profilePicURL\n      }\n    }\n  }\n"]);

function AdminAreaCustomersContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminAreaCustomersContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { AdminAreaCustomersContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminAreaCustomersContainer__typeof(obj); }

function AdminAreaCustomersContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminAreaCustomersContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminAreaCustomersContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminAreaCustomersContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminAreaCustomersContainer__defineProperties(Constructor, staticProps); return Constructor; }

function AdminAreaCustomersContainer__possibleConstructorReturn(self, call) { if (call && (AdminAreaCustomersContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return AdminAreaCustomersContainer__assertThisInitialized(self); }

function AdminAreaCustomersContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AdminAreaCustomersContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

























var Loader = external__react_spinners_["DotLoader"];
var customersQuery = external__graphql_tag__default()(_templateObject);

var AdminAreaCustomersContainer_styles = function styles(theme) {
  return {
    addDealBtn: {},
    dealsSummaryBtn: {
      marginLeft: '25px',
      backgroundColor: '#2995F3',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2380D1'
      }
    },
    wrapper: {
      position: 'relative'
    },
    buttonsWrapper: {
      display: 'flex',
      marginBottom: '25px',
      justifyContent: 'center'
    },
    tableFormWrapper: {
      width: '100%',
      zIndex: 2,
      marginBottom: '20px'
    },
    paper: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      marginBottom: '20px'
    }),
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    formControlWrapperCenter: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      textAlign: 'center'
    },
    submitBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px'
    },
    submitBtnWrapper2: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2px'
    },
    searchBoxHeader: {
      marginBottom: '20px'
    },
    searchWrapper: {
      marginBottom: '25px'
    },
    heading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: 'rgba(0,0,0,.7)'
    },
    selectInput: {
      width: '167px',
      marginTop: '0px'
    },
    checkIcon: {
      marginLeft: '10px',
      color: 'green',
      fontSize: '.95rem'
    }
  };
};

var AdminAreaCustomersContainer_AdminAreaCustomersContainer = Object(external__mobx_react_["observer"])(AdminAreaCustomersContainer__class =
/*#__PURE__*/
function (_Component) {
  AdminAreaCustomersContainer__inherits(AdminAreaCustomersContainer, _Component);

  function AdminAreaCustomersContainer() {
    var _ref;

    var _temp, _this;

    AdminAreaCustomersContainer__classCallCheck(this, AdminAreaCustomersContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return AdminAreaCustomersContainer__possibleConstructorReturn(_this, (_temp = _this = AdminAreaCustomersContainer__possibleConstructorReturn(this, (_ref = AdminAreaCustomersContainer.__proto__ || Object.getPrototypeOf(AdminAreaCustomersContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(AdminAreaCustomersContainer__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), _temp));
  }

  AdminAreaCustomersContainer__createClass(AdminAreaCustomersContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var createAgentModalOpen = this.state.createAgentModalOpen;
      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: customersQuery,
        ssr: false
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        console.log(data);
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 110px)',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        })); // TODO: change the error message to a generic
        // 'error connecting to server' message

        if (error) {
          console.log(error);
          return external__react__default.a.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, "We're sorry. There was an error processing your request.");
        }

        return external__react__default.a.createElement("div", {
          className: classes.wrapper
        }, external__react__default.a.createElement(containers_AdminAreaCustomersTableContainer, {
          agents: data.customers
        }), external__react__default.a.createElement(Snackbar__default.a, {
          classes: {
            root: classes.snackBar
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          open: _this2.state.snackbarOpen,
          autoHideDuration: 6000,
          onClose: _this2.handleCloseSnackbar,
          contentProps: {
            'aria-describedby': 'snackbar-id'
          },
          message: external__react__default.a.createElement("span", {
            id: "snackbar-id"
          }, _this2.state.snackbarText),
          action: [_this2.snackbarUndoFunction ? external__react__default.a.createElement(Button__default.a, {
            key: "undo",
            color: "secondary",
            size: "small",
            onClick: function onClick() {
              _this2.handleCloseSnackbar();

              if (_this2.state.snackbarUndoFunction && typeof snackbarUndoFunction === 'function') {
                _this2.snackbarUndoFunction();
              }
            }
          }, "UNDO") : undefined, external__react__default.a.createElement(IconButton__default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar
          }, external__react__default.a.createElement(Close__default.a, null))]
        }));
      });
    }
  }]);

  return AdminAreaCustomersContainer;
}(external__react_["Component"])) || AdminAreaCustomersContainer__class;

/* harmony default export */ var containers_AdminAreaCustomersContainer = (Object(styles_["withStyles"])(AdminAreaCustomersContainer_styles)(AdminAreaCustomersContainer_AdminAreaCustomersContainer));
// CONCATENATED MODULE: ./pages/app/admin-area/customers/view.js
var view__class;

function view__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { view__typeof = function _typeof(obj) { return typeof obj; }; } else { view__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return view__typeof(obj); }

function view__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view__possibleConstructorReturn(self, call) { if (call && (view__typeof(call) === "object" || typeof call === "function")) { return call; } return view__assertThisInitialized(self); }

function view__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function view__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view__createClass(Constructor, protoProps, staticProps) { if (protoProps) view__defineProperties(Constructor.prototype, protoProps); if (staticProps) view__defineProperties(Constructor, staticProps); return Constructor; }

function view__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var view_AdminViewAgents = Object(external__mobx_react_["observer"])(view__class =
/*#__PURE__*/
function (_React$Component) {
  view__inherits(AdminViewAgents, _React$Component);

  view__createClass(AdminViewAgents, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer
      };
    }
  }]);

  function AdminViewAgents(props) {
    var _this;

    view__classCallCheck(this, AdminViewAgents);

    _this = view__possibleConstructorReturn(this, (AdminViewAgents.__proto__ || Object.getPrototypeOf(AdminViewAgents)).call(this, props));
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (external__is_browser__default.a && !_this.store.UserStore.isLoggedIn) {
      routes["Router"].pushRoute('home');
    } // for debugging only!!!


    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  view__createClass(AdminViewAgents, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore
      }, external__react__default.a.createElement(containers_AdminAreaCustomersContainer, {
        userUUID: this.store.UserStore.uuid
      }));
    }
  }]);

  return AdminViewAgents;
}(external__react__default.a.Component)) || view__class;

/* harmony default export */ var view = __webpack_exports__["default"] = (Object(withData["a" /* default */])(view_AdminViewAgents));

/***/ })
/******/ ]);