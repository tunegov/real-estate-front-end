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
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
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

var isDev = "production" !== 'production';
var endpoint = isDev ? 'http://localhost:4000/graphql' : '/api/graphql';
var credentials = isDev ? 'include' : 'same-origin';
var graphQlClient = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](endpoint, {
  credentials: credentials
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("polished");

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
/* 14 */,
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

module.exports = require("react-apollo");

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 24 */
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
var external__is_browser_ = __webpack_require__(7);
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(9);
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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__(9);
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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),
/* 40 */,
/* 41 */,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__(36);
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
var external__react_apollo_ = __webpack_require__(17);
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

// CONCATENATED MODULE: ./constants/config.js
var isDev = "production" !== 'production';
// CONCATENATED MODULE: ./constants/websiteURL.js

var websiteURL = isDev ? 'http://localhost:4000/graphql' : 'https://reyeselsamad.com/api/graphql';
/* harmony default export */ var constants_websiteURL = (websiteURL);
// CONCATENATED MODULE: ./lib/initApollo.js






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
      uri: "".concat(constants_websiteURL),
      // 'http://localhost/api/graphql', // Server URL (must be absolute)
      credentials: isDev ? 'include' : 'same-origin',
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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h3.withConfig({
  displayName: "ServerErrorMessage",
  componentId: "a0iz9s-0"
})(["margin-top:0px;text-align:center;margin-bottom:10px;color:red;"]));

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style/css");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var siteKey = '6LeV22cUAAAAAKfTTNudUknY3QzyXbe145H3m80f';
/* harmony default export */ __webpack_exports__["a"] = (siteKey);

/***/ }),
/* 101 */
/***/ (function(module, exports) {



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(8);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ../node_modules/antd/dist/antd.css
var antd = __webpack_require__(43);
var antd_default = /*#__PURE__*/__webpack_require__.n(antd);

// EXTERNAL MODULE: ./lib/withRoot.js
var withRoot = __webpack_require__(44);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "debounce"
var external__debounce_ = __webpack_require__(34);
var external__debounce__default = /*#__PURE__*/__webpack_require__.n(external__debounce_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(9);
var external__polished__default = /*#__PURE__*/__webpack_require__.n(external__polished_);

// EXTERNAL MODULE: ./themeStyles/index.js
var themeStyles = __webpack_require__(25);

// CONCATENATED MODULE: ./sharedStyledComponents/headerStyles.js



var HeaderWrapper = external__styled_components__default.a.header.withConfig({
  displayName: "headerStyles__HeaderWrapper",
  componentId: "bt7l82-0"
})(["box-sizing:border-box;position:fixed;display:flex;align-items:center;top:0;padding:15px 50px;font-weight:800;font-family:Helvetica Neue;letter-spacing:1px;z-index:999;height:60px;width:100%;justify-content:flex-end;font-size:14px;background-color:", ";box-shadow:", ";border-bottom:", ";"], themeStyles["a" /* default */].primaryColor, function (props) {
  return props.headerBoxShadowOff ? 'none' : '0px 2px 14px -1px rgba(0, 0, 0, 0.12)';
}, function (props) {
  return props.headerBoxShadowOff ? '1px solid rgba(255,255,255,.1)' : 'none';
});
var HeaderLink = external__styled_components__default.a.a.withConfig({
  displayName: "headerStyles__HeaderLink",
  componentId: "bt7l82-1"
})(["color:rgba(255,255,255,0.9);text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;&:hover{color:#fff;}&:not(:first-of-type){margin-left:20px;}"]);
var LeftHeaderLinkWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__LeftHeaderLinkWrapper",
  componentId: "bt7l82-2"
})(["display:flex;margin-left:auto;"]);
var MiddleHeaderLinkWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__MiddleHeaderLinkWrapper",
  componentId: "bt7l82-3"
})(["display:flex;"]);
var Logo = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__Logo",
  componentId: "bt7l82-4"
})(["margin-right:auto;padding-top:5px;"]);
// CONCATENATED MODULE: ./frontEndComponents/HeaderNavLink/index.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var HeaderNavLink_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = external__react_["Children"].only(children);
  var active;

  if (router.pathname === props.href) {
    active = true;
  } else {
    active = false;
  }

  return external__react__default.a.createElement(routes["Link"], props, external__react__default.a.cloneElement(child, {
    active: active
  }));
};

/* harmony default export */ var HeaderNavLink = (Object(router_["withRouter"])(HeaderNavLink_ActiveLink));
// CONCATENATED MODULE: ./frontEndComponents/HeaderNavLink/styledComponents/index.js

var styledComponents_HeaderLink = external__styled_components__default.a.a.withConfig({
  displayName: "styledComponents__HeaderLink",
  componentId: "x7gq1s-0"
})(["box-sizing:border-box;position:relative;color:", ";text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;&:after{margin-top:6px;background:", ";max-width:", ";right:", ";bottom:0;content:'  ';display:block;height:2px;left:10px;position:absolute;z-index:5;transition:max-width 0.2s ease-in-out;}&:hover{color:#fff;&:after{right:10px;max-width:100%;}}&:not(:first-of-type){margin-left:20px;}"], function (props) {
  return props.active ? 'rgba(255,255,255,1);' : 'rgba(255,255,255,.9)';
}, function (props) {
  return props.theme.accentColor;
}, function (props) {
  return props.active ? '100%' : '0px';
}, function (props) {
  return props.active ? '10px' : '0';
});
var NavItem = external__styled_components__default.a.button.withConfig({
  displayName: "styledComponents__NavItem",
  componentId: "x7gq1s-1"
})(["box-sizing:border-box;position:relative;color:", ";text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;font-weight:800;font-size:14px;background:transparent;border:none;outline:none;&:after{margin-top:6px;background:", ";max-width:", ";right:", ";bottom:0;content:'  ';display:block;height:2px;left:10px;position:absolute;z-index:5;transition:max-width 0.2s ease-in-out;}&:hover{color:#fff;&:after{right:10px;max-width:100%;}}&:not(:first-of-type){margin-left:20px;}"], function (props) {
  return props.active ? 'rgba(255,255,255,1);' : 'rgba(255,255,255,.9)';
}, function (props) {
  return props.theme.accentColor;
}, function (props) {
  return props.active ? '100%' : '0px';
}, function (props) {
  return props.active ? '10px' : '0';
});
// CONCATENATED MODULE: ./frontEndComponents/HeaderNav/index.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var HeaderNav_styles = function styles(theme) {
  return {
    signUpLink: {
      display: 'flex',
      height: '100%',
      padding: '5px',
      color: '#fff',
      backgroundColor: '#D0021B',
      borderRadius: '2px',
      transition: 'background-color .2s ease-in-out',
      '&:hover': {
        backgroundColor: Object(external__polished_["darken"])(0.05, '#D0021B')
      }
    },
    anchor: {
      textDecoration: 'none'
    },
    loginWrapper: {
      display: 'flex',
      marginRight: '5px',
      fontSize: '14px'
    },
    logo: {
      height: 30
    }
  };
};

var HeaderNav_HeaderNav = (_dec = Object(styles_["withStyles"])(HeaderNav_styles), Object(external__mobx_react_["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderNav, _React$Component);

  function HeaderNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HeaderNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HeaderNav.__proto__ || Object.getPrototypeOf(HeaderNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            classes = _this$props.classes,
            isAdmin = _this$props.isAdmin,
            openLoginModal = _this$props.openLoginModal;

        if (_this.props.isLoggedIn) {
          return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement(styledComponents_HeaderLink, {
            onClick: _this.props.onLogout
          }, "Log Out"));
        }

        return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement("span", {
          className: classes.loginWrapper
        }, external__react__default.a.createElement(NavItem, {
          onClick: openLoginModal
        }, "Log In")));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderMiddleLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return external__react__default.a.createElement(MiddleHeaderLinkWrapper, null, external__react__default.a.createElement(HeaderNavLink, {
          route: "listings",
          href: "/listings",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Listings")), external__react__default.a.createElement(HeaderNavLink, {
          route: "listings",
          href: "#",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "New Developments")), external__react__default.a.createElement(HeaderNavLink, {
          route: "about",
          href: "/about",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "About")));
      }
    }), _temp));
  }

  _createClass(HeaderNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          headerBoxShadowOff = _props.headerBoxShadowOff,
          classes = _props.classes;
      return external__react__default.a.createElement(HeaderWrapper, {
        id: "header-wrapper",
        headerBoxShadowOff: true
      }, external__react__default.a.createElement(Logo, null, external__react__default.a.createElement(routes["Link"], {
        route: "home",
        prefetch: true
      }, external__react__default.a.createElement(HeaderLink, null, external__react__default.a.createElement("img", {
        className: classes.logo,
        src: "/static/images/logo.png",
        alt: "logo"
      })))), this.renderLinks());
    }
  }]);

  return HeaderNav;
}(external__react__default.a.Component)) || _class) || _class);
/* harmony default export */ var frontEndComponents_HeaderNav = (HeaderNav_HeaderNav);
// CONCATENATED MODULE: ./frontEndContainers/Header.js


var Header__class;

function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Header_Header = Object(external__mobx_react_["observer"])(Header__class =
/*#__PURE__*/
function (_React$Component) {
  Header__inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    Header__classCallCheck(this, Header);

    _this = Header__possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(Header__assertThisInitialized(_this), "onClickBurgerMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(_objectSpread({}, _this.state, {
          appTopBurgerMenuOpen: !_this.state.appTopBurgerMenuOpen
        }));
      }
    });
    Object.defineProperty(Header__assertThisInitialized(_this), "onLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          var res;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.props.logoutUser();

                case 2:
                  res = _context.sent;

                  if (!res.error) {
                    _context.next = 6;
                    break;
                  }

                  _this.setState(_objectSpread({}, _this.state, {
                    errorsFromServer: res.error
                  }));

                  return _context.abrupt("return");

                case 6:
                  if (_this.state.errorsFromServer) {
                    _this.setState(_objectSpread({}, _this.state, {
                      errorsFromServer: ''
                    }));
                  }

                  routes["Router"].pushRoute('home');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      errorsFromServer: '',
      appTopBurgerMenuOpen: false
    };
    _this.onLogout = external__debounce__default()(_this.onLogout, 500, true);
    return _this;
  }

  Header__createClass(Header, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(frontEndComponents_HeaderNav, {
        isAdmin: this.props.isAdmin,
        isLoggedIn: this.props.isLoggedIn,
        onLogout: this.onLogout,
        openLoginModal: this.props.openLoginModal
      });
    }
  }]);

  return Header;
}(external__react__default.a.Component)) || Header__class; // use HOC to access router object inside of component
// useful for accessing props.router.pathname


/* harmony default export */ var frontEndContainers_Header = (Object(router_["withRouter"])(Header_Header));
// CONCATENATED MODULE: ./sharedStyledComponents/AppContentWrapper.js

/* harmony default export */ var AppContentWrapper = (external__styled_components__default.a.div.withConfig({
  displayName: "AppContentWrapper",
  componentId: "s1jy6wuu-0"
})(["padding-top:60px;min-width:100%;height:100%;background-color:#fafafa;"]));
// EXTERNAL MODULE: ./globalStyles/index.js
var globalStyles = __webpack_require__(47);

// CONCATENATED MODULE: ./frontEndComponents/FrontEndLayout/styledComponents/index.js

var Container = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__Container",
  componentId: "s108z15f-0"
})(["width:100%;height:100%;display:", ";"], function (props) {
  return props.isApp ? 'flex' : 'relative';
});
var HeaderAndAppContentWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__HeaderAndAppContentWrapper",
  componentId: "s108z15f-1"
})(["width:100%;height:100%;"]);
// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(10);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// EXTERNAL MODULE: external "antd/lib/modal/style/css"
var css_ = __webpack_require__(96);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(97);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button/style/css"
var style_css_ = __webpack_require__(78);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(79);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var icon_style_css_ = __webpack_require__(22);
var icon_style_css__default = /*#__PURE__*/__webpack_require__.n(icon_style_css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(23);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/form/style/css"
var form_style_css_ = __webpack_require__(76);
var form_style_css__default = /*#__PURE__*/__webpack_require__.n(form_style_css_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(77);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var input_style_css_ = __webpack_require__(66);
var input_style_css__default = /*#__PURE__*/__webpack_require__.n(input_style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(67);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(19);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "react-google-recaptcha"
var external__react_google_recaptcha_ = __webpack_require__(98);
var external__react_google_recaptcha__default = /*#__PURE__*/__webpack_require__.n(external__react_google_recaptcha_);

// EXTERNAL MODULE: external "react-portal"
var external__react_portal_ = __webpack_require__(99);
var external__react_portal__default = /*#__PURE__*/__webpack_require__.n(external__react_portal_);

// EXTERNAL MODULE: ./sharedStyledComponents/ServerErrorMessage.js
var ServerErrorMessage = __webpack_require__(73);

// EXTERNAL MODULE: ./constants/recaptchaSiteKey.js
var recaptchaSiteKey = __webpack_require__(100);

// EXTERNAL MODULE: ./static/css/login-sign-up-modals.css
var login_sign_up_modals = __webpack_require__(101);
var login_sign_up_modals_default = /*#__PURE__*/__webpack_require__.n(login_sign_up_modals);

// CONCATENATED MODULE: ./frontEndComponents/LoginFormModal/index.js











var LoginFormModal__dec, LoginFormModal__class;

function LoginFormModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoginFormModal__typeof = function _typeof(obj) { return typeof obj; }; } else { LoginFormModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoginFormModal__typeof(obj); }

function LoginFormModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoginFormModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoginFormModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) LoginFormModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) LoginFormModal__defineProperties(Constructor, staticProps); return Constructor; }

function LoginFormModal__possibleConstructorReturn(self, call) { if (call && (LoginFormModal__typeof(call) === "object" || typeof call === "function")) { return call; } return LoginFormModal__assertThisInitialized(self); }

function LoginFormModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LoginFormModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }















var TextArea = input__default.a.TextArea;
var FormItem = form__default.a.Item;

var LoginFormModal_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    titleSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      width: '100%',
      marginBottom: '50px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      fontSize: '2.8rem',
      color: '#fff',
      backgroundColor: 'black'
    },
    formWrapper: {
      padding: '20px 20px'
    },
    applicationTypeBtnsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    activePrimaryToggleBtn: {
      backgroundColor: '#1890ff !important',
      borderColor: '#1890ff !important',
      color: '#fff !important',
      '&:hover': {
        backgroundColor: '#1890ff',
        borderColor: '#1890ff',
        color: '#fff'
      }
    },
    verticalModalWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .ant-modal': {
        top: 0
      }
    },
    forgotPassword: {
      marginLeft: 'auto',
      color: Object(external__polished_["lighten"])(0.1, '#16b'),
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'color .2s ease-in-out',
      outline: 'none',
      '&:hover': {
        color: Object(external__polished_["darken"])(0.05, '#16b'),
        transition: 'color .3s ease-in-out'
      }
    },
    forgotPasswordWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: 5
    },
    submitBtnWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 42,
      marginTop: 15,
      marginBottom: 10,
      paddingLeft: '0',
      paddingRight: '0',
      fontSize: '1rem',
      backgroundColor: '#272A2E !important',
      borderColor: '#272A2E !important',
      borderRadius: '3px',
      color: '#fff !important',
      transition: 'background-color .2s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: "".concat(Object(external__polished_["lighten"])(0.1, '#272A2E'), " !important"),
        borderColor: "".concat(Object(external__polished_["lighten"])(0.1, '#272A2E'), " !important")
      }
    },
    btnLoading: {
      opacity: '.7',
      pointerEvents: 'none'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    recaptchaWrapper: {
      '& div div': {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  };
};

var LoginFormModal_LoginModal = (LoginFormModal__dec = Object(styles_["withStyles"])(LoginFormModal_styles), LoginFormModal__dec(LoginFormModal__class = Object(external__mobx_react_["observer"])(LoginFormModal__class =
/*#__PURE__*/
function (_React$Component) {
  LoginFormModal__inherits(LoginModal, _React$Component);

  function LoginModal(props) {
    var _this;

    LoginFormModal__classCallCheck(this, LoginModal);

    _this = LoginFormModal__possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "formSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        errorsFromServer: '',
        submittingFormToServer: false,
        formSuccessfullySubmitted: false,
        loadingNextPage: false,
        isForgotPasswordType: false,
        passwordSuccessfullyReset: false,
        formValues: null,
        captchaCompleted: false
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.getFormApi(_this.props.form);
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "resetState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          errorsFromServer: '',
          submittingFormToServer: false,
          formSuccessfullySubmitted: false,
          loadingNextPage: false,
          isForgotPasswordType: false,
          passwordSuccessfullyReset: false,
          formValues: null,
          captchaCompleted: false
        });
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "renderServerErrorMessage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return external__react__default.a.createElement(ServerErrorMessage["a" /* default */], null, "".concat(_this.state.errorsFromServer));
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "toggleSubmittingFormToServer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.submittingFormToServer;
        var options = arguments.length > 1 ? arguments[1] : undefined;

        _this.setState({
          submittingFormToServer: bool,
          loadingNextPage: options && options.loadingNextPage ? true : _this.state.loadingNextPage
        });
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "toggleIsForgotPasswordType", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
          _this.setState({
            errorsFromServer: '',
            isForgotPasswordType: !_this.state.isForgotPasswordType,
            captchaCompleted: false
          });
        } else {
          _this.setState({
            isForgotPasswordType: !_this.state.isForgotPasswordType,
            captchaCompleted: false
          });
        }
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "closeLoginModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.closeLoginModal();

        _this.setState({
          isForgotPasswordType: false,
          formValues: null
        });

        if (_this._Recaptcha) {
          _this._Recaptcha.reset();
        }
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "handleValidate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e && e.preventDefault) e.preventDefault();
        _this.formSubmitted = true;

        if (!_this.state.captchaCompleted) {
          _this.setState({
            errorsFromServer: "Please complete the captcha to ensure that you're not a robot."
          });

          return;
        } else if (_this.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
          _this.setState({
            errorsFromServer: ''
          });
        }

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            if (_this.state.isForgotPasswordType) {
              _this.handleSubmitForgotPassword(values);
            } else {
              _this.handleSubmitLogin(values);
            }
          }
        });
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "handleSubmitLogin", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.toggleSubmittingFormToServer(true);

        _this.props.loginUser(values).then(function (res) {
          var hasErrors;

          if (res.error) {
            _this.setState({
              errorsFromServer: typeof res.error === 'string' ? res.error : res.error.message
            });

            hasErrors = true;
          }

          if (_this.state.errorsFromServer && !hasErrors) {
            _this.setState({
              errorsFromServer: ''
            });
          }

          if (hasErrors) {
            _this.toggleSubmittingFormToServer(false);

            return;
          }

          var canAccessBackend = [userTypes["agent"], userTypes["admin"], userTypes["superAdmin"]].includes(res.user.role);

          if (canAccessBackend) {
            _this.toggleSubmittingFormToServer(false, {
              loadingNextPage: true
            });
          } else {
            _this.toggleSubmittingFormToServer(false);
          }

          console.log(routes["Router"].pathname);

          if (res.user) {
            _this.setState({
              formSuccessfullySubmitted: true
            });

            console.log(res.user.role);

            if (res.user.role === userTypes["agent"]) {
              routes["Router"].pushRoute('dashboard');
            } else if (res.user.role === userTypes["admin"] || res.user.role === userTypes["superAdmin"]) {
              routes["Router"].pushRoute('admin-dashboard');
            } else if (routes["Router"].pathname === '/forgot-password') {
              routes["Router"].pushRoute('/');
            } else {
              _this.closeLoginModal();
            }
          } else {
            _this.setState({
              errorsFromServer: "We're sorry, there was an error processing your request."
            });
          }
        }).catch(function (err) {
          _this.toggleSubmittingFormToServer(false);

          console.log(err);
        });
      }
    });
    Object.defineProperty(LoginFormModal__assertThisInitialized(_this), "handleSubmitForgotPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.toggleSubmittingFormToServer(true);

        _this.props.userForgotPassword(values.email).then(function (res) {
          console.log(res);

          _this.toggleSubmittingFormToServer(false);

          var hasErrors;

          if (res.error) {
            _this.setState({
              errorsFromServer: typeof res.error === 'string' ? res.error : res.error.message
            });

            hasErrors = true;
            return;
          }

          if (_this.state.errorsFromServer) {
            _this.setState({
              errorsFromServer: ''
            });
          }

          if (!hasErrors) {
            _this.setState({
              formSuccessfullySubmitted: true,
              passwordSuccessfullyReset: true
            });
          }
        }).catch(function (err) {
          _this.toggleSubmittingFormToServer(false);

          console.log(err);
        });
      }
    });
    _this.handleSubmit = external__debounce__default()(_this.handleSubmit, 300);
    return _this;
  }

  LoginFormModal__createClass(LoginModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          loginModalOpen = _props.loginModalOpen;
      var _state = this.state,
          formSuccessfullySubmitted = _state.formSuccessfullySubmitted,
          isForgotPasswordType = _state.isForgotPasswordType,
          submittingFormToServer = _state.submittingFormToServer,
          loadingNextPage = _state.loadingNextPage,
          passwordSuccessfullyReset = _state.passwordSuccessfullyReset;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          isFieldTouched = _props$form.isFieldTouched;
      var emailError = (isFieldTouched('email') || this.formSubmitted) && getFieldError('email');
      var passwordError = (isFieldTouched('password') || this.formSubmitted) && getFieldError('password');
      return external__react__default.a.createElement(modal__default.a, {
        title: this.state.isForgotPasswordType ? 'Forgot Password' : 'Log In',
        visible: loginModalOpen,
        onCancel: this.closeLoginModal,
        wrapClassName: external__classnames__default()(classes.verticalModalWrapper, 'login-modal'),
        footer: null,
        destroyOnClose: true,
        closable: !submittingFormToServer && !loadingNextPage,
        maskClosable: !submittingFormToServer && !loadingNextPage,
        afterClose: function afterClose() {
          return _this2.resetState();
        }
      }, this.state.errorsFromServer ? this.renderServerErrorMessage() : null, external__react__default.a.createElement("div", {
        style: {
          display: submittingFormToServer || loadingNextPage || passwordSuccessfullyReset ? 'none' : undefined
        }
      }, external__react__default.a.createElement(form__default.a, {
        layout: "horizontal",
        onSubmit: this.handleSubmit
      }, !isForgotPasswordType && external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || ''
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "email",
        id: "email1",
        required: true,
        size: "large",
        disabled: formSuccessfullySubmitted,
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Email"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: passwordError ? 'error' : '',
        help: passwordError || ''
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your password!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "password",
        size: "large",
        required: true,
        disabled: formSuccessfullySubmitted,
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Password"
      }))))), isForgotPasswordType && external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || ''
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "email",
        required: true,
        size: "large",
        disabled: formSuccessfullySubmitted,
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Email"
      })))))), !this.state.isForgotPasswordType && external__react__default.a.createElement("div", {
        className: classes.recaptchaWrapper
      }, external__react__default.a.createElement(external__react_google_recaptcha__default.a, {
        ref: function ref(_ref) {
          return _this2._Recaptcha = _ref;
        },
        sitekey: recaptchaSiteKey["a" /* default */],
        onChange: function onChange(val) {
          if (!val) {
            _this2.setState({
              captchaCompleted: false
            });
          } else {
            if (_this2.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
              _this2.setState({
                errorsFromServer: '',
                captchaCompleted: true
              });
            } else {
              _this2.setState({
                captchaCompleted: true
              });
            }
          }
        }
      })), this.state.isForgotPasswordType && external__react__default.a.createElement("div", {
        className: classes.recaptchaWrapper
      }, external__react__default.a.createElement(external__react_google_recaptcha__default.a, {
        ref: function ref(_ref2) {
          return _this2._Recaptcha = _ref2;
        },
        sitekey: recaptchaSiteKey["a" /* default */],
        onChange: function onChange(val) {
          if (!val) {
            _this2.setState({
              captchaCompleted: false
            });
          } else {
            if (_this2.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
              _this2.setState({
                errorsFromServer: '',
                captchaCompleted: true
              });
            } else {
              _this2.setState({
                captchaCompleted: true
              });
            }
          }
        }
      })), external__react__default.a.createElement(button__default.a, {
        onClick: this.handleValidate,
        disabled: formSuccessfullySubmitted || submittingFormToServer,
        className: external__classnames__default()(classes.submitBtnWrapper, submittingFormToServer && classes.btnLoading),
        type: "primary"
      }, external__react__default.a.createElement("span", null, this.state.submittingFormToServer && external__react__default.a.createElement(icon__default.a, {
        type: "loading",
        style: {
          marginRight: '10px',
          color: '#fff'
        }
      }), isForgotPasswordType ? 'Reset Password' : 'Submit')), !formSuccessfullySubmitted && !isForgotPasswordType && external__react__default.a.createElement("div", {
        className: classes.forgotPasswordWrapper
      }, external__react__default.a.createElement("button", {
        onClick: this.toggleIsForgotPasswordType,
        className: classes.forgotPassword
      }, "Forgot Password?")), !formSuccessfullySubmitted && isForgotPasswordType && external__react__default.a.createElement("div", {
        className: classes.forgotPasswordWrapper
      }, external__react__default.a.createElement("button", {
        onClick: this.toggleIsForgotPasswordType,
        className: classes.forgotPassword
      }, "Log In?"))), passwordSuccessfullyReset ? external__react__default.a.createElement("div", {
        className: classes.formSubmittingWrapper
      }, external__react__default.a.createElement("div", {
        className: classes.progressBarExplanation
      }, "Password reset email sent!")) : null, submittingFormToServer || loadingNextPage ? external__react__default.a.createElement("div", {
        className: classes.formSubmittingWrapper
      }, external__react__default.a.createElement(icon__default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem',
          paddingBottom: '10px'
        }
      }), external__react__default.a.createElement("div", {
        className: classes.progressBarExplanation
      }, loadingNextPage ? 'Loading Page...' : 'Finishing submission...')) : null);
    }
  }]);

  return LoginModal;
}(external__react__default.a.Component)) || LoginFormModal__class) || LoginFormModal__class);
/* harmony default export */ var LoginFormModal = (form__default.a.create()(LoginFormModal_LoginModal));
// EXTERNAL MODULE: ./effects/client.js
var client = __webpack_require__(6);

// CONCATENATED MODULE: ./effects/users/userForgotPassword.js

var query = "\n    mutation userForgotPassword($email: String!) {\n      userForgotPassword(email: $email) {\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

var userForgotPassword_createAgent = function createAgent(email) {
  var variables = {
    email: email
  };
  var finalResponseObj = {
    error: null
  };
  return client["a" /* graphQlClient */].request(query, variables).then(function (result) {
    var res = result;
    var data = res.userForgotPassword;

    if (data.userErrors.length) {
      finalResponseObj.error = {
        message: data.userErrors[0].message,
        field: data.userErrors[0].field
      };
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var userForgotPassword = (userForgotPassword_createAgent);
// CONCATENATED MODULE: ./frontEndComponents/FrontEndLayout/index.js
var FrontEndLayout__class;

function FrontEndLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FrontEndLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { FrontEndLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FrontEndLayout__typeof(obj); }

function FrontEndLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FrontEndLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FrontEndLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) FrontEndLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) FrontEndLayout__defineProperties(Constructor, staticProps); return Constructor; }

function FrontEndLayout__possibleConstructorReturn(self, call) { if (call && (FrontEndLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return FrontEndLayout__assertThisInitialized(self); }

function FrontEndLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FrontEndLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // import DevTools from 'mobx-react-devtools';
















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
    return external__nprogress__default.a.done();
  };

  router__default.a.onRouteChangeError = function () {
    return external__nprogress__default.a.done();
  };
}

var FrontEndLayout_Layout = Object(external__mobx_react_["observer"])(FrontEndLayout__class =
/*#__PURE__*/
function (_Component) {
  FrontEndLayout__inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    FrontEndLayout__classCallCheck(this, Layout);

    _this = FrontEndLayout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    Object.defineProperty(FrontEndLayout__assertThisInitialized(_this), "openLoginModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('run');

        _this.setState({
          loginModalOpen: true
        });
      }
    });
    Object.defineProperty(FrontEndLayout__assertThisInitialized(_this), "closeLoginModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          loginModalOpen: false
        });
      }
    });
    _this.state = {
      loginModalOpen: false
    };
    return _this;
  }

  FrontEndLayout__createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var pathname = this.props.router.pathname;
      var _props$UserStore = this.props.UserStore,
          isLoggedIn = _props$UserStore.isLoggedIn,
          logoutUser = _props$UserStore.logoutUser,
          userRole = _props$UserStore.userRole,
          loginUser = _props$UserStore.loginUser;
      var isAdmin = userRole === userTypes["admin"] || userRole === userTypes["superAdmin"];
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, this.props.title ? this.props.title : 'Real Estate App'), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans",
        type: "text/css",
        rel: "stylesheet"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Playfair+Display|Raleway",
        type: "text/css",
        rel: "stylesheet"
      }), external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: globalStyles["a" /* default */]
        }
      })), external__react__default.a.createElement(external__styled_components_["ThemeProvider"], {
        theme: themeStyles["a" /* default */]
      }, external__react__default.a.createElement(Container, null, external__react__default.a.createElement(HeaderAndAppContentWrapper, null, external__react__default.a.createElement(frontEndContainers_Header, {
        isLoggedIn: isLoggedIn,
        logoutUser: logoutUser,
        headerBoxShadowOff: this.props.headerBoxShadowOff,
        isAdmin: isAdmin,
        openLoginModal: this.openLoginModal
      }), external__react__default.a.createElement(AppContentWrapper, null, this.props.children), external__react__default.a.createElement(LoginFormModal, {
        loginUser: loginUser,
        loginModalOpen: this.state.loginModalOpen,
        closeLoginModal: this.closeLoginModal,
        getFormApi: function getFormApi(formApi) {
          return _this2._formApi = formApi;
        },
        userForgotPassword: userForgotPassword
      })))));
    }
  }]);

  return Layout;
}(external__react_["Component"])) || FrontEndLayout__class;

/* harmony default export */ var FrontEndLayout = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(withRoot["a" /* default */])(FrontEndLayout_Layout)));

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
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
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_stringUtils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styles = function styles(theme) {
  return {
    root: {
      minHeight: '400px',
      width: '100%',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      fontSize: '0.9rem',
      transition: 'transform .2s ease-in-out',
      color: 'rgba(0,0,0,.7)',
      '&:hover': {
        transform: 'scale(1.02,1.02)'
      }
    },
    imageWrapper: {
      position: 'relative',
      height: '234px',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    image: {
      objectFit: 'cover',
      height: '100%',
      width: '100%'
    },
    infoContentWrapper: {
      padding: '20px 20px',
      border: '1px solid rgba(0,0,0,.2)',
      borderTop: 'none'
    },
    addressWrapper: {
      fontWeight: 600,
      marginBottom: '15px',
      textAlign: 'center',
      cursor: 'pointer'
    },
    neighborhoodWrapper: {
      fontSize: '0.8rem',
      color: 'rgba(0,0,0,.7)',
      marginBottom: '5px',
      textAlign: 'center'
    },
    priceWrapper: {
      marginBottom: '8px',
      textAlign: 'center'
    },
    miscInfo: {
      fontSize: '0.7rem',
      textAlign: 'center'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      paddingLeft: '15px',
      paddingRight: '15px',
      border: '1px solid rgba(0,0,0,.2)',
      borderTop: 'none'
    },
    heartIcon: {
      marginRight: '5px',
      cursor: 'pointer',
      color: theme.frontEnd.colors.primary.main
    },
    noFeeWrapper: {
      position: 'absolute',
      top: '7px',
      left: '7px',
      fontSize: '0.7rem',
      color: '#fff',
      backgroundColor: '#12A319',
      padding: '2px 5px',
      borderRadius: '3px'
    }
  };
};

var ListingCard = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ListingCard, _Component);

  function ListingCard() {
    _classCallCheck(this, ListingCard);

    return _possibleConstructorReturn(this, (ListingCard.__proto__ || Object.getPrototypeOf(ListingCard)).apply(this, arguments));
  }

  _createClass(ListingCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          featuredPhotoURL = _props.featuredPhotoURL,
          otherPhotoURLs = _props.otherPhotoURLs,
          address = _props.address,
          neighborhood = _props.neighborhood,
          price = _props.price,
          beds = _props.beds,
          baths = _props.baths,
          isLiked = _props.isLiked,
          isNoFee = _props.isNoFee,
          monthsOfFreeRent = _props.monthsOfFreeRent,
          sqFootage = _props.sqFootage,
          isStudio = _props.isStudio,
          type = _props.type,
          id = _props.id,
          imageWrapperClassName = _props.imageWrapperClassName;

      var displayType = function displayType(dealType) {
        if (!dealType) return;
        var iType = dealType.split(' ')[1];
        var type = iType === 'rental' ? 'rentals' : 'sales';
        return Object(__WEBPACK_IMPORTED_MODULE_6__utils_stringUtils__["a" /* capitalize */])(type);
      };

      var renderNoticeTag = function renderNoticeTag() {
        var monthsWord = monthsOfFreeRent >= 2 ? 'Months' : 'Month';

        if (isNoFee && monthsOfFreeRent) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "No Fee ", " & ".concat(monthsOfFreeRent, " ").concat(monthsWord, " Free Rent"));
        }

        if (isNoFee) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "No Fee");
        }

        if (monthsOfFreeRent) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "".concat(monthsOfFreeRent, " ").concat(monthsWord, " Free Rent"));
        }

        return null;
      };

      var dealType = displayType(type);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.imageWrapper, imageWrapperClassName)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "listing",
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: featuredPhotoURL,
        alt: "listing",
        className: classes.image
      })), renderNoticeTag()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.infoContentWrapper
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "listing",
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.addressWrapper
      }, address)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.neighborhoodWrapper
      }, dealType ? "".concat(dealType, " | ") : null, " ", neighborhood), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.priceWrapper
      }, "$", price ? price.toLocaleString() : null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.miscInfo
      }, isStudio ? 'Studio' : "".concat(beds, " BD"), " | ", "".concat(baths, " BA"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footer
      }, isLiked ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite___default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder___default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      }), ' ', "Favorite"));
    }
  }]);

  return ListingCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (ListingCard);

/***/ }),
/* 156 */,
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
/* 168 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
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
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = function styles(theme) {
  return {
    root: {
      height: '56px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      backgroundColor: '#fff'
    }
  };
};

var CustomMapMarker = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomMapMarker, _Component);

  function CustomMapMarker() {
    _classCallCheck(this, CustomMapMarker);

    return _possibleConstructorReturn(this, (CustomMapMarker.__proto__ || Object.getPrototypeOf(CustomMapMarker)).apply(this, arguments));
  }

  _createClass(CustomMapMarker, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          longitude = _props.longitude,
          latitude = _props.latitude,
          defaultZoom = _props.defaultZoom,
          onClick = _props.onClick;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__["Marker"], {
        defaultZoom: defaultZoom || 8,
        defaultCenter: {
          lat: latitude,
          lng: longitude
        },
        onClick: onClick
      });
    }
  }]);

  return CustomMapMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (CustomMapMarker);

/***/ }),
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
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);


/***/ }),
/* 255 */
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
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: ./frontEndComponents/FrontEndLayout/index.js + 9 modules
var FrontEndLayout = __webpack_require__(102);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(24);

// EXTERNAL MODULE: ./lib/withData.js + 3 modules
var withData = __webpack_require__(50);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(71);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(19);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-images"
var external__react_images_ = __webpack_require__(146);
var external__react_images__default = /*#__PURE__*/__webpack_require__.n(external__react_images_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "@material-ui/icons/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__(150);
var FavoriteBorder__default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(151);
var Favorite__default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// CONCATENATED MODULE: ./frontEndComponents/Listing/InfoBar.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
  return {
    infoBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '57px',
      borderBottom: '1px solid rgba(0,0,0,.1)',
      fontSize: '.8rem',
      backgroundColor: '#fff',
      fontWeight: 300
    },
    infoBarEmphasis: {
      fontSize: '1.5rem'
    },
    infoBarItem: {
      marginRight: '25px',
      '&:last-of-type': {
        marginRight: '0'
      }
    },
    likeItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px 10px',
      border: '1px solid rgba(0,0,0,.2)',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    heartIconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '5px'
    },
    heartIcon: {
      fontSize: '1rem',
      color: theme.frontEnd.colors.primary.main
    }
  };
};

var InfoBar_InfoBar = (_dec = Object(styles_["withStyles"])(styles), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoBar, _React$Component);

  function InfoBar() {
    _classCallCheck(this, InfoBar);

    return _possibleConstructorReturn(this, (InfoBar.__proto__ || Object.getPrototypeOf(InfoBar)).apply(this, arguments));
  }

  _createClass(InfoBar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listing = _props.listing;
      var price = listing.price,
          rentalOrSale = listing.rentalOrSale,
          isLiked = listing.isLiked,
          beds = listing.beds,
          baths = listing.baths,
          neighborhood = listing.neighborhood,
          sqFootage = listing.sqFootage;
      var isRental = rentalOrSale === 'rental';
      return external__react__default.a.createElement("div", {
        className: classes.infoBar
      }, external__react__default.a.createElement("span", {
        className: classes.infoBarItem
      }, external__react__default.a.createElement("span", {
        className: classes.infoBarEmphasis
      }, "$", price), isRental ? '/month' : null), external__react__default.a.createElement("span", {
        className: external__classnames__default()(classes.infoBarItem, classes.likeItem)
      }, external__react__default.a.createElement("span", {
        className: classes.heartIconWrapper
      }, isLiked ? external__react__default.a.createElement(Favorite__default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      }) : external__react__default.a.createElement(FavoriteBorder__default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      })), "Favorite"), external__react__default.a.createElement("span", {
        className: classes.infoBarItem
      }, beds, " ", beds > 1 ? 'beds' : 'bed'), external__react__default.a.createElement("span", {
        className: classes.infoBarItem
      }, baths, " ", baths > 1 ? 'baths' : 'bath'), external__react__default.a.createElement("span", {
        className: classes.infoBarItem
      }, neighborhood), sqFootage && Number(sqFootage) ? external__react__default.a.createElement("span", {
        className: classes.infoBarItem
      }, external__react__default.a.createElement("span", {
        className: classes.infoBarEmphasis
      }, Number(sqFootage).toLocaleString()), ' ', "Sq. Ft.") : null);
    }
  }]);

  return InfoBar;
}(external__react__default.a.Component)) || _class);
/* harmony default export */ var Listing_InfoBar = (InfoBar_InfoBar);
// EXTERNAL MODULE: external "react-icons/lib/fa"
var fa_ = __webpack_require__(59);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: external "material-ui/Tooltip"
var Tooltip_ = __webpack_require__(12);
var Tooltip__default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./frontEndComponents/Listing/ContactCard.js
var ContactCard__dec, ContactCard__class;

function ContactCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContactCard__typeof = function _typeof(obj) { return typeof obj; }; } else { ContactCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContactCard__typeof(obj); }

function ContactCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContactCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContactCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) ContactCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) ContactCard__defineProperties(Constructor, staticProps); return Constructor; }

function ContactCard__possibleConstructorReturn(self, call) { if (call && (ContactCard__typeof(call) === "object" || typeof call === "function")) { return call; } return ContactCard__assertThisInitialized(self); }

function ContactCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ContactCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ContactCard_styles = function styles(theme) {
  return {
    root: {
      height: 562,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '25px 25px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      color: 'rgba(0,0,0,.8)',
      border: '1px solid rgba(0,0,0,.1)',
      backgroundColor: '#fff'
    },
    title: {
      textAlign: 'center',
      marginBottom: '35px',
      fontWeight: '600'
    },
    profilePicWrapper: {
      height: '100px',
      width: '100px',
      borderRadius: '50%',
      marginBottom: '25px'
    },
    profilePic: {
      height: '100px',
      width: '100px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '50%',
      cursor: 'pointer'
    },
    detailsWrapper: {
      marginBottom: '25px',
      textAlign: 'center'
    },
    detail: {
      marginBottom: '5px'
    },
    btnsWrapper: {
      width: '100%',
      marginBottom: '35px'
    },
    defaultBtn: {
      display: 'block',
      width: '100%',
      padding: '10px 10px',
      marginBottom: 20,
      border: '1px solid rgba(0,0,0,.2)',
      borderRadius: '30px',
      color: 'rgba(0,0,0,.7)',
      cursor: 'pointer',
      transition: 'color .2s ease-in-out, border-color .2s ease-in-out',
      textDecoration: 'none',
      '&:hover': {
        color: 'rgba(0,0,0,.8)',
        borderColor: theme.palette.primary.main
      },
      outline: 'none',
      fontSize: '.7rem',
      textAlign: 'center'
    },
    defaultBtnLast: {
      marginBottom: 0
    },
    disabledBtn: {
      color: 'rgba(0,0,0,.3) !important',
      borderColor: 'rgba(0,0,0,.1) !important',
      cursor: 'not-allowed',
      outline: 'none'
    },
    shareTitle: {
      marginBottom: 20,
      fontWeight: '600'
    },
    socialMediaWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    socialMediaTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      alignText: 'center'
    },
    socialMediaItemsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      width: '100%'
    },
    socialMediaItemWrapper: _defineProperty({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '55px',
      height: '55px',
      border: '1px solid rgba(0,0,0,.3)',
      borderColor: 'rgba(0,0,0,.3)',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '22px',
      color: 'rgba(0,0,0,.7)',
      transition: 'border-color .2s ease-in-out, color .2s ease-in-out',
      outline: 'none',
      '&:hover': {
        borderColor: 'rgba(0,0,0,.9)',
        color: 'rgba(0,0,0,.8)'
      }
    }, theme.breakpoints.down('xs'), {
      width: '45px',
      height: '45px'
    }),
    facebook: {
      color: '#3B5998'
    },
    twitter: {
      color: '#1da1f2'
    }
  };
};

var ContactCard_ContactCard = (ContactCard__dec = Object(styles_["withStyles"])(ContactCard_styles), ContactCard__dec(ContactCard__class = Object(external__mobx_react_["observer"])(ContactCard__class =
/*#__PURE__*/
function (_React$Component) {
  ContactCard__inherits(ContactCard, _React$Component);

  function ContactCard() {
    var _ref;

    var _temp, _this;

    ContactCard__classCallCheck(this, ContactCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ContactCard__possibleConstructorReturn(_this, (_temp = _this = ContactCard__possibleConstructorReturn(this, (_ref = ContactCard.__proto__ || Object.getPrototypeOf(ContactCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ContactCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tooltipOpen: false
      }
    }), Object.defineProperty(ContactCard__assertThisInitialized(_this), "onFacebookShareClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.preventDefault) e.preventDefault();
        var URL = encodeURI("".concat(window.location.href));
        var windowInnerWidth = window.innerWidth;
        var windowInnerHeight = window.innerHeight;
        var width = windowInnerWidth < 550 ? windowInnerWidth * 0.9 : 550;
        var height = windowInnerHeight < 450 ? windowInnerHeight * 0.7 : 450;
        var halfHeight = height / 2;
        var halfWidth = width / 2;
        var left = windowInnerWidth / 2 - halfWidth;
        var top = windowInnerHeight / 2 - halfHeight;
        var href = "https://www.facebook.com/sharer/sharer.php?u=".concat(URL);
        window.open(href, 'Facebook', "height=".concat(height, ",width=").concat(width, ",resizable=1,top=").concat(top, ",left=").concat(left, ",scrollbars=yes"));
      }
    }), Object.defineProperty(ContactCard__assertThisInitialized(_this), "onTwitterShareClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.preventDefault) e.preventDefault();
        var text = 'I found a great new real estate listing!';
        var finalText = encodeURI(text);
        var hashTags = encodeURI("real estate,listing,".concat(_this.props.neighborhood, ",home"));
        var URL = encodeURI("".concat(window.location.href));
        var windowInnerWidth = window.innerWidth;
        var windowInnerHeight = window.innerHeight;
        var width = windowInnerWidth < 550 ? windowInnerWidth * 0.9 : 550;
        var height = windowInnerHeight < 450 ? windowInnerHeight * 0.7 : 450;
        var halfHeight = height / 2;
        var halfWidth = width / 2;
        var left = windowInnerWidth / 2 - halfWidth;
        var top = windowInnerHeight / 2 - halfHeight;
        var href = "https://twitter.com/intent/tweet/?text=".concat(finalText, "&url=").concat(URL, "&hashtags=").concat(hashTags);
        window.open(href, 'Facebook', "height=".concat(height, ",width=").concat(width, ",resizable=1,top=").concat(top, ",left=").concat(left, ",scrollbars=yes"));
      }
    }), Object.defineProperty(ContactCard__assertThisInitialized(_this), "onCopyToClipboard", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.preventDefault) e.preventDefault();
        var URL = "".concat(window.location.href);
        var el = document.createElement('textarea');
        el.value = URL;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        _this.handleTooltipOpen();
      }
    }), Object.defineProperty(ContactCard__assertThisInitialized(_this), "handleTooltipClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.tooltipOpen) _this.setState({
          tooltipOpen: false
        });
      }
    }), Object.defineProperty(ContactCard__assertThisInitialized(_this), "handleTooltipOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          tooltipOpen: true
        });

        setTimeout(function () {
          if (_this.state.tooltipOpen) _this.setState({
            tooltipOpen: false
          });
        }, 3000);
      }
    }), _temp));
  }

  ContactCard__createClass(ContactCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listingAgent = _props.listingAgent,
          listingID = _props.listingID,
          cantApplyOnline = _props.cantApplyOnline,
          toggleContactAgentModalOpen = _props.toggleContactAgentModalOpen;
      var profilePhotoURL = listingAgent.profilePhotoURL,
          name = listingAgent.name,
          officeNumber = listingAgent.officeNumber,
          agentID = listingAgent.agentID;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.title
      }, "Contact"), external__react__default.a.createElement("div", {
        className: classes.profilePicWrapper
      }, external__react__default.a.createElement(routes["Link"], {
        route: "agent",
        params: {
          id: agentID
        }
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("img", {
        className: classes.profilePic,
        src: profilePhotoURL,
        alt: name
      })))), external__react__default.a.createElement("div", {
        className: classes.detailsWrapper
      }, external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.name, classes.detail)
      }, name), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.officeNumber, classes.detail)
      }, officeNumber), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.listingID, classes.detail)
      }, "Listing ID: ", listingID)), external__react__default.a.createElement("div", {
        className: classes.btnsWrapper
      }, external__react__default.a.createElement("button", {
        className: classes.defaultBtn,
        onClick: toggleContactAgentModalOpen
      }, "Contact Agent"), external__react__default.a.createElement(routes["Link"], {
        route: "apply",
        params: {
          listingID: listingID
        }
      }, external__react__default.a.createElement("a", {
        className: external__classnames__default()(classes.defaultBtn, classes.defaultBtnLast, cantApplyOnline && classes.disabledBtn)
      }, "Apply"))), external__react__default.a.createElement("div", {
        className: classes.shareTitle
      }, "Share"), external__react__default.a.createElement("div", {
        className: classes.socialMediaWrapper
      }, external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.socialMediaItemsWrapper, classes.facebook)
      }, external__react__default.a.createElement("button", {
        onClick: this.onFacebookShareClick,
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaFacebook"], {
        className: classes.facebook
      })), external__react__default.a.createElement("button", {
        onClick: this.onTwitterShareClick,
        className: external__classnames__default()(classes.socialMediaItemWrapper, classes.twittter)
      }, external__react__default.a.createElement(fa_["FaTwitter"], {
        className: classes.twitter
      })), external__react__default.a.createElement(Tooltip__default.a, {
        title: this.state.tooltipOpen ? 'Copied!' : 'Copy',
        id: "tooltip-copy",
        open: this.state.tooltipOpen,
        enterDelay: 100,
        leaveDelay: 100,
        placement: "top"
      }, external__react__default.a.createElement("button", {
        onClick: this.onCopyToClipboard,
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaCopy"], null))))));
    }
  }]);

  return ContactCard;
}(external__react__default.a.Component)) || ContactCard__class) || ContactCard__class);
/* harmony default export */ var Listing_ContactCard = (ContactCard_ContactCard);
// CONCATENATED MODULE: ./frontEndComponents/Listing/DescriptionSection.js
var DescriptionSection__dec, DescriptionSection__class;

function DescriptionSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DescriptionSection__typeof = function _typeof(obj) { return typeof obj; }; } else { DescriptionSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DescriptionSection__typeof(obj); }

function DescriptionSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DescriptionSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DescriptionSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) DescriptionSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) DescriptionSection__defineProperties(Constructor, staticProps); return Constructor; }

function DescriptionSection__possibleConstructorReturn(self, call) { if (call && (DescriptionSection__typeof(call) === "object" || typeof call === "function")) { return call; } return DescriptionSection__assertThisInitialized(self); }

function DescriptionSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DescriptionSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var DescriptionSection_styles = function styles(theme) {
  return {
    root: {
      height: 562,
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      padding: '10px 25px 25px 25px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      color: 'rgba(0,0,0,.8)',
      border: '1px solid rgba(0,0,0,.1)',
      backgroundColor: '#fff',
      '&::after': {
        content: "''",
        position: 'absolute',
        zIndex: 1,
        bottom: 25,
        left: 0,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',
        width: '100%',
        height: '4em'
      }
    },
    descriptionTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px',
      height: '50px',
      fontSize: '1.5rem',
      fontWeight: '600'
    },
    description: {
      lineHeight: '1.6rem',
      overflow: 'auto'
    },
    buffer: {
      height: '45px',
      width: '100%',
      pointerEvents: 'none'
    }
  };
};

var DescriptionSection_DescriptionSection = (DescriptionSection__dec = Object(styles_["withStyles"])(DescriptionSection_styles), DescriptionSection__dec(DescriptionSection__class = Object(external__mobx_react_["observer"])(DescriptionSection__class =
/*#__PURE__*/
function (_React$Component) {
  DescriptionSection__inherits(DescriptionSection, _React$Component);

  function DescriptionSection() {
    DescriptionSection__classCallCheck(this, DescriptionSection);

    return DescriptionSection__possibleConstructorReturn(this, (DescriptionSection.__proto__ || Object.getPrototypeOf(DescriptionSection)).apply(this, arguments));
  }

  DescriptionSection__createClass(DescriptionSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          description = _props.description;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, "Description"), external__react__default.a.createElement("div", {
        className: classes.description
      }, description, external__react__default.a.createElement("div", {
        className: classes.buffer
      })));
    }
  }]);

  return DescriptionSection;
}(external__react__default.a.Component)) || DescriptionSection__class) || DescriptionSection__class);
/* harmony default export */ var Listing_DescriptionSection = (DescriptionSection_DescriptionSection);
// CONCATENATED MODULE: ./frontEndComponents/Listing/AmenitiesSection.js
var AmenitiesSection__dec, AmenitiesSection__class;

function AmenitiesSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AmenitiesSection__typeof = function _typeof(obj) { return typeof obj; }; } else { AmenitiesSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AmenitiesSection__typeof(obj); }

function AmenitiesSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AmenitiesSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AmenitiesSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) AmenitiesSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) AmenitiesSection__defineProperties(Constructor, staticProps); return Constructor; }

function AmenitiesSection__possibleConstructorReturn(self, call) { if (call && (AmenitiesSection__typeof(call) === "object" || typeof call === "function")) { return call; } return AmenitiesSection__assertThisInitialized(self); }

function AmenitiesSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AmenitiesSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var AmenitiesSection_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 25px 25px 25px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      color: 'rgba(0,0,0,.8)',
      border: '1px solid rgba(0,0,0,.1)',
      backgroundColor: '#fff'
    },
    descriptionTitle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '20px 10px',
      alignItems: 'center',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '600',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    description: {
      lineHeight: '1.6rem'
    },
    myIcon: {
      height: 90,
      marginRight: 30,
      '&last-of-type': {
        marginRight: 0
      }
    }
  };
};

var AmenitiesSection_AmenitiesSection = (AmenitiesSection__dec = Object(styles_["withStyles"])(AmenitiesSection_styles), AmenitiesSection__dec(AmenitiesSection__class = Object(external__mobx_react_["observer"])(AmenitiesSection__class =
/*#__PURE__*/
function (_React$Component) {
  AmenitiesSection__inherits(AmenitiesSection, _React$Component);

  function AmenitiesSection() {
    var _ref;

    var _temp, _this;

    AmenitiesSection__classCallCheck(this, AmenitiesSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return AmenitiesSection__possibleConstructorReturn(_this, (_temp = _this = AmenitiesSection__possibleConstructorReturn(this, (_ref = AmenitiesSection.__proto__ || Object.getPrototypeOf(AmenitiesSection)).call.apply(_ref, [this].concat(args))), Object.defineProperty(AmenitiesSection__assertThisInitialized(_this), "renderAmenities", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var amenities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var classes = _this.props.classes;
        return amenities.map(function (amenity) {
          var name = amenity.name,
              icon = amenity.icon;
          return external__react__default.a.createElement("div", {
            className: classes.amenityItem
          }, external__react__default.a.createElement("div", {
            className: classes.amenityIcon
          }, icon), external__react__default.a.createElement("div", {
            className: classes.amenityName
          }, name));
        });
      }
    }), _temp));
  }

  AmenitiesSection__createClass(AmenitiesSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          amenities = _props.amenities;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, "Amenities"), external__react__default.a.createElement("div", {
        className: classes.description
      }, this.renderAmenities(amenities), external__react__default.a.createElement("img", {
        src: "/static/icons/balcony.svg",
        className: classes.myIcon
      }), external__react__default.a.createElement("img", {
        src: "/static/icons/gym.svg",
        className: classes.myIcon
      }), external__react__default.a.createElement("img", {
        src: "/static/icons/securitysystem.svg",
        className: classes.myIcon
      }), external__react__default.a.createElement("img", {
        src: "/static/icons/virtualdoorman.svg",
        className: classes.myIcon
      })));
    }
  }]);

  return AmenitiesSection;
}(external__react__default.a.Component)) || AmenitiesSection__class) || AmenitiesSection__class);
/* harmony default export */ var Listing_AmenitiesSection = (AmenitiesSection_AmenitiesSection);
// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(26);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "react-google-maps"
var external__react_google_maps_ = __webpack_require__(168);
var external__react_google_maps__default = /*#__PURE__*/__webpack_require__.n(external__react_google_maps_);

// EXTERNAL MODULE: ./frontEndComponents/CustomMapMarker/index.js
var CustomMapMarker = __webpack_require__(190);

// CONCATENATED MODULE: ./frontEndComponents/SingleListingMap/index.js
var SingleListingMap__dec, SingleListingMap__class;

function SingleListingMap__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleListingMap__typeof = function _typeof(obj) { return typeof obj; }; } else { SingleListingMap__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleListingMap__typeof(obj); }

function SingleListingMap__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleListingMap__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleListingMap__createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleListingMap__defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleListingMap__defineProperties(Constructor, staticProps); return Constructor; }

function SingleListingMap__possibleConstructorReturn(self, call) { if (call && (SingleListingMap__typeof(call) === "object" || typeof call === "function")) { return call; } return SingleListingMap__assertThisInitialized(self); }

function SingleListingMap__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SingleListingMap__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var SingleListingMap_styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      height: '100%'
    }
  };
};

var SingleListingMap_MapSection = (SingleListingMap__dec = Object(styles_["withStyles"])(SingleListingMap_styles), Object(external__mobx_react_["observer"])(SingleListingMap__class = SingleListingMap__dec(SingleListingMap__class = Object(external__react_google_maps_["withScriptjs"])(SingleListingMap__class = Object(external__react_google_maps_["withGoogleMap"])(SingleListingMap__class =
/*#__PURE__*/
function (_Component) {
  SingleListingMap__inherits(MapSection, _Component);

  function MapSection() {
    var _ref;

    var _temp, _this;

    SingleListingMap__classCallCheck(this, MapSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return SingleListingMap__possibleConstructorReturn(_this, (_temp = _this = SingleListingMap__possibleConstructorReturn(this, (_ref = MapSection.__proto__ || Object.getPrototypeOf(MapSection)).call.apply(_ref, [this].concat(args))), Object.defineProperty(SingleListingMap__assertThisInitialized(_this), "renderMapMarkers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(listing) {
        var longitude = listing.longitude,
            latitude = listing.latitude,
            listingID = listing.listingID;
        return external__react__default.a.createElement(CustomMapMarker["a" /* default */], {
          longitude: longitude,
          latitude: latitude,
          listingID: listingID
        });
      }
    }), _temp));
  }

  SingleListingMap__createClass(MapSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listing = _props.listing;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(external__react_google_maps_["GoogleMap"], {
        defaultZoom: 8,
        defaultCenter: {
          lat: -34.397,
          lng: 150.644
        }
      }, external__react__default.a.createElement(external__react_google_maps_["Marker"], {
        position: {
          lat: -34.397,
          lng: 150.644
        }
      })));
    }
  }]);

  return MapSection;
}(external__react_["Component"])) || SingleListingMap__class) || SingleListingMap__class) || SingleListingMap__class) || SingleListingMap__class);
/* harmony default export */ var SingleListingMap = (SingleListingMap_MapSection);
// CONCATENATED MODULE: ./frontEndContainers/SingleListingMap.js
var frontEndContainers_SingleListingMap__class;

function frontEndContainers_SingleListingMap__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_SingleListingMap__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_SingleListingMap__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_SingleListingMap__typeof(obj); }

function frontEndContainers_SingleListingMap__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_SingleListingMap__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_SingleListingMap__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_SingleListingMap__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_SingleListingMap__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_SingleListingMap__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_SingleListingMap__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_SingleListingMap__assertThisInitialized(self); }

function frontEndContainers_SingleListingMap__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function frontEndContainers_SingleListingMap__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Loader = external__react_spinners_["BounceLoader"];
var GOOGLE_MAPS_API_KEY = 'AIzaSyALC0RdIvbBvmFCj8P5IBClasErYh0QqdQ';

var SingleListingMap_SingleListingMapContainer = Object(external__mobx_react_["observer"])(frontEndContainers_SingleListingMap__class =
/*#__PURE__*/
function (_Component) {
  frontEndContainers_SingleListingMap__inherits(SingleListingMapContainer, _Component);

  function SingleListingMapContainer() {
    frontEndContainers_SingleListingMap__classCallCheck(this, SingleListingMapContainer);

    return frontEndContainers_SingleListingMap__possibleConstructorReturn(this, (SingleListingMapContainer.__proto__ || Object.getPrototypeOf(SingleListingMapContainer)).apply(this, arguments));
  }

  frontEndContainers_SingleListingMap__createClass(SingleListingMapContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          height = _props.height,
          listing = _props.listing;
      return external__react__default.a.createElement(SingleListingMap, {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(GOOGLE_MAPS_API_KEY, "&v=3.exp&libraries=geometry,drawing,places"),
        loadingElement: external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        })),
        listing: listing,
        height: height,
        containerElement: external__react__default.a.createElement("div", {
          style: {
            height: "".concat(height, "px")
          }
        }),
        mapElement: external__react__default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      });
    }
  }]);

  return SingleListingMapContainer;
}(external__react_["Component"])) || frontEndContainers_SingleListingMap__class;

/* harmony default export */ var frontEndContainers_SingleListingMap = (SingleListingMap_SingleListingMapContainer);
// CONCATENATED MODULE: ./frontEndComponents/Listing/MapSection.js
var MapSection__dec, MapSection__class;

function MapSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MapSection__typeof = function _typeof(obj) { return typeof obj; }; } else { MapSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MapSection__typeof(obj); }

function MapSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MapSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MapSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) MapSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) MapSection__defineProperties(Constructor, staticProps); return Constructor; }

function MapSection__possibleConstructorReturn(self, call) { if (call && (MapSection__typeof(call) === "object" || typeof call === "function")) { return call; } return MapSection__assertThisInitialized(self); }

function MapSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MapSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MapSection_styles = function styles(theme) {
  return {
    root: {
      padding: '25px 25px',
      width: '100%',
      color: 'rgba(0,0,0,.8)',
      border: '1px solid rgba(0,0,0,.1)',
      backgroundColor: '#fff'
    },
    descriptionTitle: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 10px',
      paddingTop: '0',
      flexDirection: 'row',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '600',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    }
  };
};

var MapSection_MapSection = (MapSection__dec = Object(styles_["withStyles"])(MapSection_styles), Object(external__mobx_react_["observer"])(MapSection__class = MapSection__dec(MapSection__class =
/*#__PURE__*/
function (_Component) {
  MapSection__inherits(MapSection, _Component);

  function MapSection() {
    MapSection__classCallCheck(this, MapSection);

    return MapSection__possibleConstructorReturn(this, (MapSection.__proto__ || Object.getPrototypeOf(MapSection)).apply(this, arguments));
  }

  MapSection__createClass(MapSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listing = _props.listing;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, listing.address), external__react__default.a.createElement(frontEndContainers_SingleListingMap, {
        listing: listing,
        height: 380
      }));
    }
  }]);

  return MapSection;
}(external__react_["Component"])) || MapSection__class) || MapSection__class);
/* harmony default export */ var Listing_MapSection = (MapSection_MapSection);
// EXTERNAL MODULE: ./frontEndComponents/ListingCard/index.js
var ListingCard = __webpack_require__(155);

// CONCATENATED MODULE: ./frontEndComponents/Listing/ListingsSection.js
var ListingsSection__dec, ListingsSection__class;

function ListingsSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListingsSection__typeof = function _typeof(obj) { return typeof obj; }; } else { ListingsSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListingsSection__typeof(obj); }

function ListingsSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListingsSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListingsSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) ListingsSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) ListingsSection__defineProperties(Constructor, staticProps); return Constructor; }

function ListingsSection__possibleConstructorReturn(self, call) { if (call && (ListingsSection__typeof(call) === "object" || typeof call === "function")) { return call; } return ListingsSection__assertThisInitialized(self); }

function ListingsSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListingsSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ListingsSection__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ListingsSection_styles = function styles(theme) {
  var _imageWrapperClassNam;

  return {
    root: {
      height: '100%',
      width: '100%',
      padding: '20px',
      backgroundColor: '#fff',
      color: 'rgba(0,0,0,.7)',
      border: '1px solid rgba(0,0,0,.1)'
    },
    lisingsOptions: {
      display: 'flex',
      paddingLeft: '15px',
      paddingRight: '15px',
      justifyContent: 'center',
      alignItems: 'center',
      height: '48px',
      width: '100%',
      fontSize: '0.9rem',
      backgroundColor: 'rgb(244, 245, 249)'
    },
    listingsWrapper: {
      padding: '10px 10px 20px 10px',
      overflow: 'auto'
    },
    descriptionTitle: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 10px',
      paddingTop: '0',
      flexDirection: 'row',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '600',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    imageWrapperClassName: (_imageWrapperClassNam = {
      height: 180
    }, ListingsSection__defineProperty(_imageWrapperClassNam, theme.breakpoints.only('sm'), {
      height: 240
    }), ListingsSection__defineProperty(_imageWrapperClassNam, theme.breakpoints.only('xs'), {
      height: 180
    }), _imageWrapperClassNam)
  };
};

var ListingsSection_containerComponent = function containerComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return external__react__default.a.createElement("div", _extends({
    style: {
      height: '100%',
      overflow: 'auto'
    }
  }, props), children);
};

var ListingsSection_ListingsSection = (ListingsSection__dec = Object(styles_["withStyles"])(ListingsSection_styles), Object(external__mobx_react_["observer"])(ListingsSection__class = ListingsSection__dec(ListingsSection__class =
/*#__PURE__*/
function (_Component) {
  ListingsSection__inherits(ListingsSection, _Component);

  function ListingsSection() {
    var _ref2;

    var _temp, _this;

    ListingsSection__classCallCheck(this, ListingsSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ListingsSection__possibleConstructorReturn(_this, (_temp = _this = ListingsSection__possibleConstructorReturn(this, (_ref2 = ListingsSection.__proto__ || Object.getPrototypeOf(ListingsSection)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(ListingsSection__assertThisInitialized(_this), "renderListings", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(listingItems, imageWrapperClassName) {
        return listingItems.map(function (listingItem) {
          var featuredPhotoURL = listingItem.featuredPhotoURL,
              otherPhotoURLs = listingItem.otherPhotoURLs,
              address = listingItem.address,
              neighborhood = listingItem.neighborhood,
              price = listingItem.price,
              beds = listingItem.beds,
              baths = listingItem.baths,
              isLiked = listingItem.isLiked,
              isNoFee = listingItem.isNoFee,
              monthsOfFreeRent = listingItem.monthsOfFreeRent,
              sqFootage = listingItem.sqFootage,
              type = listingItem.type,
              id = listingItem.id;
          return external__react__default.a.createElement(Grid__default.a, {
            key: id,
            item: true,
            xs: 12,
            sm: 6,
            md: 3
          }, external__react__default.a.createElement(ListingCard["a" /* default */], {
            featuredPhotoURL: featuredPhotoURL,
            otherPhotoURLs: otherPhotoURLs,
            address: address,
            neighborhood: neighborhood,
            price: price,
            beds: beds,
            baths: baths,
            isLiked: isLiked,
            isNoFee: isNoFee,
            monthsOfFreeRent: monthsOfFreeRent,
            sqFootage: sqFootage,
            type: type,
            id: id,
            imageWrapperClassName: imageWrapperClassName
          }));
        });
      }
    }), _temp));
  }

  ListingsSection__createClass(ListingsSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listings = _props.listings;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, "Related Listings"), external__react__default.a.createElement("div", {
        className: classes.listingsWrapper
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24,
        component: ListingsSection_containerComponent
      }, listings && this.renderListings(listings, classes.imageWrapperClassName))));
    }
  }]);

  return ListingsSection;
}(external__react_["Component"])) || ListingsSection__class) || ListingsSection__class);
/* harmony default export */ var Listing_ListingsSection = (ListingsSection_ListingsSection);
// EXTERNAL MODULE: external "antd/lib/modal/style/css"
var css_ = __webpack_require__(96);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(97);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/form/style/css"
var style_css_ = __webpack_require__(76);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(77);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var input_style_css_ = __webpack_require__(66);
var input_style_css__default = /*#__PURE__*/__webpack_require__.n(input_style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(67);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react-input-mask"
var external__react_input_mask_ = __webpack_require__(119);
var external__react_input_mask__default = /*#__PURE__*/__webpack_require__.n(external__react_input_mask_);

// EXTERNAL MODULE: ./static/css/listing.css
var css_listing = __webpack_require__(256);
var listing_default = /*#__PURE__*/__webpack_require__.n(css_listing);

// CONCATENATED MODULE: ./frontEndComponents/Listing/ContactAgentModal.js







var ContactAgentModal__dec, ContactAgentModal__class;

function ContactAgentModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContactAgentModal__typeof = function _typeof(obj) { return typeof obj; }; } else { ContactAgentModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContactAgentModal__typeof(obj); }

function ContactAgentModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContactAgentModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContactAgentModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) ContactAgentModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) ContactAgentModal__defineProperties(Constructor, staticProps); return Constructor; }

function ContactAgentModal__possibleConstructorReturn(self, call) { if (call && (ContactAgentModal__typeof(call) === "object" || typeof call === "function")) { return call; } return ContactAgentModal__assertThisInitialized(self); }

function ContactAgentModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ContactAgentModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var TextArea = input__default.a.TextArea;
var FormItem = form__default.a.Item;

var ContactAgentModal_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    titleSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      width: '100%',
      marginBottom: '50px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      fontSize: '2.8rem',
      color: '#fff',
      backgroundColor: 'black'
    },
    formWrapper: {
      padding: '20px 20px'
    },
    applicationTypeBtnsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    activePrimaryToggleBtn: {
      backgroundColor: '#1890ff !important',
      borderColor: '#1890ff !important',
      color: '#fff !important',
      '&:hover': {
        backgroundColor: '#1890ff',
        borderColor: '#1890ff',
        color: '#fff'
      }
    },
    verticalModalWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .ant-modal': {
        top: 0
      }
    },
    paymentFromLabel: {
      display: 'block',
      marginBottom: 10
    },
    paymentBtnWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 20,
      marginRight: 15
    },
    paymentCardWrapper: {},
    payBtn: {
      width: '100%',
      fontSize: '18px',
      color: '#fff'
    },
    paymentAmount: {
      fontSize: '17px'
    }
  };
};

var ContactAgentModal_ContactAgentModal = (ContactAgentModal__dec = Object(styles_["withStyles"])(ContactAgentModal_styles), ContactAgentModal__dec(ContactAgentModal__class = Object(external__mobx_react_["observer"])(ContactAgentModal__class =
/*#__PURE__*/
function (_React$Component) {
  ContactAgentModal__inherits(ContactAgentModal, _React$Component);

  function ContactAgentModal() {
    var _ref;

    var _temp, _this;

    ContactAgentModal__classCallCheck(this, ContactAgentModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ContactAgentModal__possibleConstructorReturn(_this, (_temp = _this = ContactAgentModal__possibleConstructorReturn(this, (_ref = ContactAgentModal.__proto__ || Object.getPrototypeOf(ContactAgentModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ContactAgentModal__assertThisInitialized(_this), "formSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(ContactAgentModal__assertThisInitialized(_this), "defaultMessageValue", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "Hi ".concat(_this.props.agentName, ", I would like more information about ").concat(_this.props.listingAddress, ".")
    }), Object.defineProperty(ContactAgentModal__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            onSubmit = _this$props.onSubmit,
            toggleContactAgentModalClosed = _this$props.toggleContactAgentModalClosed;
        e.preventDefault();
        _this.formSubmitted = true;

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            if (onSubmit) {
              onSubmit(values);
            }

            toggleContactAgentModalClosed();
          }
        });
      }
    }), _temp));
  }

  ContactAgentModal__createClass(ContactAgentModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          contactAgentModalOpen = _props.contactAgentModalOpen,
          toggleContactAgentModalClosed = _props.toggleContactAgentModalClosed,
          agentName = _props.agentName;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          isFieldTouched = _props$form.isFieldTouched;
      var firstNameError = (isFieldTouched('firstName') || this.formSubmitted) && getFieldError('firstName');
      var lastNameError = (isFieldTouched('lastName') || this.formSubmitted) && getFieldError('lastName');
      var emailError = (isFieldTouched('email') || this.formSubmitted) && getFieldError('email');
      var phoneNumberError = (isFieldTouched('phoneNumber') || this.formSubmitted) && getFieldError('phoneNumber');
      var messageError = (isFieldTouched('message') || this.formSubmitted) && getFieldError('message');
      return external__react__default.a.createElement(modal__default.a, {
        title: "Contact - ".concat(agentName),
        visible: contactAgentModalOpen,
        onOk: this.handleSubmit,
        onCancel: toggleContactAgentModalClosed,
        wrapClassName: external__classnames__default()(classes.verticalModalWrapper, 'contact-agent-modal'),
        okText: "Submit"
      }, external__react__default.a.createElement(form__default.a, {
        layout: "horizontal",
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: firstNameError ? 'error' : '',
        help: firstNameError || '',
        label: "First Name"
      }, getFieldDecorator('firstName', {
        rules: [{
          required: true,
          message: 'Please input your first name!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "text",
        placeholder: "First Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: lastNameError ? 'error' : '',
        help: lastNameError || '',
        label: "Last Name"
      }, getFieldDecorator('lastName', {
        rules: [{
          required: true,
          message: 'Please input your last name!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "text",
        placeholder: "Last Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || '',
        label: "Email"
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "email",
        placeholder: "Email"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: phoneNumberError ? 'error' : '',
        help: phoneNumberError || '',
        label: "Phone Number"
      }, getFieldDecorator('phoneNumber', {
        rules: [{
          message: 'Please input your phone number!'
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: messageError ? 'error' : '',
        help: messageError || '',
        label: "Message"
      }, getFieldDecorator('message', {
        rules: [{
          required: true,
          message: 'Please input a message! (min 5, max 500 characters)',
          min: 5,
          max: 500
        }]
      })(external__react__default.a.createElement(TextArea, {
        placeholder: "Message...",
        autosize: {
          minRows: 3,
          maxRows: 6
        }
      })))))));
    }
  }]);

  return ContactAgentModal;
}(external__react__default.a.Component)) || ContactAgentModal__class) || ContactAgentModal__class);
/* harmony default export */ var Listing_ContactAgentModal = (form__default.a.create()(ContactAgentModal_ContactAgentModal));
// CONCATENATED MODULE: ./frontEndComponents/Listing/index.js
var Listing__dec, Listing__class;

function Listing__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Listing__typeof = function _typeof(obj) { return typeof obj; }; } else { Listing__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Listing__typeof(obj); }

function Listing__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Listing__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Listing__createClass(Constructor, protoProps, staticProps) { if (protoProps) Listing__defineProperties(Constructor.prototype, protoProps); if (staticProps) Listing__defineProperties(Constructor, staticProps); return Constructor; }

function Listing__possibleConstructorReturn(self, call) { if (call && (Listing__typeof(call) === "object" || typeof call === "function")) { return call; } return Listing__assertThisInitialized(self); }

function Listing__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Listing__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var Listing_styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      color: 'rgba(0,0,0,.8)'
    },
    scrollingGalleryWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      height: '400px',
      width: '100%',
      backgroundColor: '#000'
    },
    gridList: {
      display: 'flex',
      padding: 0,
      overflow: 'auto',
      flexWrap: 'nowrap',
      margin: 0,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    image: {
      padding: '0 2px',
      height: '100%',
      minHeight: '100%',
      objectFit: 'contain',
      '&:first-of-type': {
        padding: '0 0',
        paddingRight: '2px'
      },
      '&:last-of-type': {
        padding: '0 0',
        paddingLeft: '2px'
      },
      cursor: 'pointer'
    },
    mainSection: {
      padding: '0 40px 40px 40px',
      paddingTop: '30px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    secondarySection: {
      padding: '0 40px 40px 40px',
      paddingTop: '30px',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
};

var Listing_Listing = (Listing__dec = Object(styles_["withStyles"])(Listing_styles), Listing__dec(Listing__class = Object(external__mobx_react_["observer"])(Listing__class =
/*#__PURE__*/
function (_React$Component) {
  Listing__inherits(Listing, _React$Component);

  function Listing() {
    var _ref;

    var _temp, _this;

    Listing__classCallCheck(this, Listing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Listing__possibleConstructorReturn(_this, (_temp = _this = Listing__possibleConstructorReturn(this, (_ref = Listing.__proto__ || Object.getPrototypeOf(Listing)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Listing__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        lightboxIsOpen: false,
        currentLightBoxIndex: 0
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "lightboxImages", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _this.props.listing.images.map(function (image) {
        return {
          src: image.URL
        };
      })
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "openLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: index
        });
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "closeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: false
        });
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "onClickPrev", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex - 1
        });
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "onClickNext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex + 1
        });
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "onClickThumbnail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        _this.setState({
          currentLightBoxIndex: index
        });
      }
    }), Object.defineProperty(Listing__assertThisInitialized(_this), "renderListingImages", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(images) {
        var classes = _this.props.classes;
        return images.map(function (_ref2, index) {
          var URL = _ref2.URL;
          return external__react__default.a.createElement("img", {
            onClick: function onClick() {
              return _this.openLightBox(index);
            },
            className: classes.image,
            src: URL,
            alt: "listing images",
            key: URL
          });
        });
      }
    }), _temp));
  }

  Listing__createClass(Listing, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listing = _props.listing,
          listingAgent = _props.listingAgent,
          relatedListings = _props.relatedListings,
          contactAgentModalOpen = _props.contactAgentModalOpen,
          toggleContactAgentModalOpen = _props.toggleContactAgentModalOpen,
          toggleContactAgentModalClosed = _props.toggleContactAgentModalClosed,
          onSubmitContactAgentForm = _props.onSubmitContactAgentForm;
      var description = listing.description,
          neighborhood = listing.neighborhood;
      var renderListingImages = this.renderListingImages;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.scrollingGalleryWrapper
      }, external__react__default.a.createElement("ul", {
        className: classes.gridList
      }, renderListingImages(listing.images))), external__react__default.a.createElement(Listing_InfoBar, {
        listing: listing
      }), external__react__default.a.createElement("div", {
        className: classes.mainSection
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        md: 7,
        lg: 8
      }, external__react__default.a.createElement(Listing_DescriptionSection, {
        description: description
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        md: 5,
        lg: 4
      }, external__react__default.a.createElement(Listing_ContactCard, {
        listingAgent: listingAgent,
        neighborhood: neighborhood,
        listingID: listing.listingID,
        cantApplyOnline: listing.cantApplyOnline,
        toggleContactAgentModalOpen: toggleContactAgentModalOpen
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(Listing_AmenitiesSection, {
        listingAgent: listingAgent,
        listingID: listing.listingID,
        canApplyOnline: listing.canApplyOnline
      })))), external__react__default.a.createElement("div", {
        className: classes.secondarySection
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(Listing_MapSection, {
        listing: listing
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(Listing_ListingsSection, {
        listings: relatedListings
      })))), external__react__default.a.createElement(external__react_images__default.a, {
        images: this.lightboxImages,
        isOpen: this.state.lightboxIsOpen,
        onClose: this.closeLightbox,
        onClickPrev: this.onClickPrev,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentLightBoxIndex,
        backdropClosesModal: true,
        showThumbnails: true,
        preloadNextImage: true,
        onClickThumbnail: this.onClickThumbnail
      }), external__react__default.a.createElement(Listing_ContactAgentModal, {
        contactAgentModalOpen: contactAgentModalOpen,
        toggleContactAgentModalOpen: toggleContactAgentModalOpen,
        toggleContactAgentModalClosed: toggleContactAgentModalClosed,
        agentName: listingAgent.name,
        listingAddress: listing.address,
        onSubmit: onSubmitContactAgentForm
      }));
    }
  }]);

  return Listing;
}(external__react__default.a.Component)) || Listing__class) || Listing__class);
/* harmony default export */ var frontEndComponents_Listing = (Listing_Listing);
// CONCATENATED MODULE: ./frontEndContainers/Listing.js
var frontEndContainers_Listing__class;

function frontEndContainers_Listing__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_Listing__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_Listing__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_Listing__typeof(obj); }

function frontEndContainers_Listing__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_Listing__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_Listing__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_Listing__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_Listing__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_Listing__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_Listing__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_Listing__assertThisInitialized(self); }

function frontEndContainers_Listing__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function frontEndContainers_Listing__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var chance = new external__chance__default.a();
var Listing_description = "Lorem ipsum dolor amet beard cray man braid, taxidermy vape retro lumbersexual street art cornhole normcore. Deep v succulents pickled woke. Pinterest iceland typewriter tofu truffaut aesthetic. Listicle 3 wolf moon occupy, snackwave farm-to-table salvia knausgaard health goth wolf thundercats asymmetrical. Artisan scenester echo park mumblecore vape unicorn. Street art drinking vinegar gluten-free hot chicken hell of YOLO, gastropub pinterest lyft green juice.\n\nBlue bottle street art taiyaki selfies listicle yr. Selvage ugh selfies unicorn, leggings snackwave cardigan forage kogi literally mixtape. Ennui meditation yuccie paleo yr occupy beard bitters sriracha before they sold out. Sartorial authentic wayfarers typewriter, chia chartreuse cold-pressed etsy pour-over intelligentsia swag literally pinterest fingerstache. Unicorn jianbing helvetica tattooed umami irony pabst 8-bit etsy deep v trust fund hashtag. IPhone green juice jean shorts neutra four loko meggings tattooed etsy.\n\nSkateboard polaroid humblebrag jianbing cardigan af. Tofu tacos actually, roof party vape semiotics four loko woke kickstarter retro. Echo park venmo skateboard fixie wayfarers, mustache vape bushwick pork belly gentrify keytar lomo hoodie poutine. Plaid church-key ennui VHS, succulents health goth bespoke irony pop-up coloring book craft beer beard. Bitters thundercats ramps master cleanse poutine direct trade pickled af live-edge seitan affogato leggings. Pop-up kickstarter mumblecore vinyl.";

var Listing_ListingContainer = Object(external__mobx_react_["observer"])(frontEndContainers_Listing__class =
/*#__PURE__*/
function (_React$Component) {
  frontEndContainers_Listing__inherits(ListingContainer, _React$Component);

  function ListingContainer(props) {
    var _this;

    frontEndContainers_Listing__classCallCheck(this, ListingContainer);

    _this = frontEndContainers_Listing__possibleConstructorReturn(this, (ListingContainer.__proto__ || Object.getPrototypeOf(ListingContainer)).call(this, props));
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "createRelatedListings", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return [{
          featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })),
          otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          }))],
          address: '225 West 60th Street, Manhattan NY, 10023',
          neighborhood: 'Jackson Heights',
          price: 2000,
          beds: 3,
          baths: 2,
          isLiked: false,
          isNoFee: false,
          monthsOfFreeRent: 0,
          sqFootage: 6339,
          type: 'Residential Rental',
          id: 'jxj595h9f5i5fj'
        }, {
          featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })),
          otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          }))],
          address: '452 West 60th Street, Manhattan NY, 10023',
          neighborhood: 'Jackson Heights',
          price: 1400,
          beds: 2,
          baths: 2,
          isLiked: true,
          isNoFee: true,
          monthsOfFreeRent: 1,
          sqFootage: 5225,
          type: 'Residential Rental',
          id: 'o3j9dn9un3nj3'
        }, {
          featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })),
          otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })), "http://picsum.photos/314/234/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          }))],
          address: '893 West 60th Street, Manhattan NY, 10023',
          neighborhood: 'SoHo',
          price: 3700,
          beds: 3,
          baths: 3,
          isLiked: false,
          isNoFee: false,
          monthsOfFreeRent: 2,
          sqFootage: 5225,
          type: 'Residential Rental',
          id: 'cinoervtoi4in'
        }];
      }
    });
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "createListing", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          description: Listing_description,
          address: '225 West 60th Street, Manhattan NY, 10023',
          neighborhood: 'Jackson Heights',
          price: 2000,
          beds: 3,
          baths: 2,
          isLiked: chance.integer({
            min: 1,
            max: 2
          }) === 2 ? false : true,
          isNoFee: false,
          monthsOfFreeRent: 0,
          sqFootage: 6339,
          type: 'Residential Rental',
          id: 'jxj595h9f5i5fj',
          commercialOrResidential: 'residential',
          rentalOrSale: 'rental',
          cantApplyOnline: false,
          listingID: chance.integer({
            min: 100000,
            max: 999999
          }),
          images: [{
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/325/600/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }, {
            URL: "http://picsum.photos/400/500/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            title: 'Image',
            author: 'author'
          }]
        };
      }
    });
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "createListingAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          profilePhotoURL: "http://picsum.photos/325/400/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })),
          name: chance.name(),
          email: chance.email(),
          title: 'Licensed Real Estate Salesperson',
          officeNumber: "".concat(chance.phone(), " x").concat(chance.integer({
            min: 1,
            max: 999
          })),
          areaOfFocus: 'none',
          mobileNumber: chance.phone(),
          region: chance.integer({
            min: 0,
            max: 100
          }) > 70 ? chance.state({
            full: true
          }) : 'New York',
          agentID: chance.integer({
            min: 100000,
            max: 999999
          })
        };
      }
    });
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "toggleContactAgentModalOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          contactAgentModalOpen: true
        });
      }
    });
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "toggleContactAgentModalClosed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          contactAgentModalOpen: false
        });
      }
    });
    Object.defineProperty(frontEndContainers_Listing__assertThisInitialized(_this), "onSubmitContactAgentForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        console.log('Contact agent form submitted');
        console.log(values);
      }
    });
    _this.state = {
      listing: _this.createListing(),
      listingAgent: _this.createListingAgent(),
      relatedListings: _this.createRelatedListings(),
      contactAgentModalOpen: false
    };
    return _this;
  }

  frontEndContainers_Listing__createClass(ListingContainer, [{
    key: "render",
    value: function render() {
      var listingID = this.props.listingID;
      return external__react__default.a.createElement(frontEndComponents_Listing, {
        listing: this.state.listing,
        listingAgent: this.state.listingAgent,
        listingID: this.state.listing.id,
        relatedListings: this.state.relatedListings,
        contactAgentModalOpen: this.state.contactAgentModalOpen,
        toggleContactAgentModalOpen: this.toggleContactAgentModalOpen,
        toggleContactAgentModalClosed: this.toggleContactAgentModalClosed,
        onSubmitContactAgentForm: this.onSubmitContactAgentForm
      });
    }
  }]);

  return ListingContainer;
}(external__react__default.a.Component)) || frontEndContainers_Listing__class;

/* harmony default export */ var frontEndContainers_Listing = (Listing_ListingContainer);
// CONCATENATED MODULE: ./pages/listing.js
var listing__class;

function listing__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { listing__typeof = function _typeof(obj) { return typeof obj; }; } else { listing__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return listing__typeof(obj); }

function listing__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function listing__possibleConstructorReturn(self, call) { if (call && (listing__typeof(call) === "object" || typeof call === "function")) { return call; } return listing__assertThisInitialized(self); }

function listing__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function listing__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function listing__createClass(Constructor, protoProps, staticProps) { if (protoProps) listing__defineProperties(Constructor.prototype, protoProps); if (staticProps) listing__defineProperties(Constructor, staticProps); return Constructor; }

function listing__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var listing_Listing = Object(external__mobx_react_["observer"])(listing__class =
/*#__PURE__*/
function (_React$Component) {
  listing__inherits(Listing, _React$Component);

  listing__createClass(Listing, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer,
        listingID: query.id
      };
    }
  }]);

  function Listing(props) {
    var _this;

    listing__classCallCheck(this, Listing);

    _this = listing__possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData); // for debugging only!!!

    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  listing__createClass(Listing, [{
    key: "render",
    value: function render() {
      var listingID = this.props.listingID;
      return external__react__default.a.createElement(FrontEndLayout["a" /* default */], {
        UserStore: this.store.UserStore
      }, external__react__default.a.createElement(frontEndContainers_Listing, {
        listingID: listingID
      }));
    }
  }]);

  return Listing;
}(external__react__default.a.Component)) || listing__class;

/* harmony default export */ var pages_listing = __webpack_exports__["default"] = (Object(withData["a" /* default */])(listing_Listing));

/***/ }),
/* 256 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);