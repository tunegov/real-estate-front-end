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
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
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

module.exports = require("graphql-request");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var endpoint = '/api/graphql';
/* harmony default export */ __webpack_exports__["a"] = (endpoint);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tooltip");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),
/* 22 */
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

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(5);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(6);

// CONCATENATED MODULE: ./models/UserStore/userEffects/signUpCustomer.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var query = "\n    mutation registerCustomer($input: RegisterCustomerInput!) {\n      registerCustomer(input: $input) {\n        customer {\n          uuid\n          role\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

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
            return _context.abrupt("return", client.request(query, variables).then(function (res) {
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
var logoutUser_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

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
            return logoutUser_client.request(logoutUser_query);

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

            if (!finalResponseObj.error) {
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
var loginUser_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

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
            return _context.abrupt("return", loginUser_client.request(loginUser_query, variables).then(function (res) {
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
var external__urlsafe_base64_ = __webpack_require__(48);
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-form");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(10);
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

module.exports = require("material-ui/Typography");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__(10);
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

module.exports = require("material-ui/Dialog");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(18);
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
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    overflow: hidden;\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n";
/* harmony default export */ __webpack_exports__["a"] = (globalStyles);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("urlsafe-base64");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(18);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(16);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "apollo-client"
var external__apollo_client_ = __webpack_require__(50);
var external__apollo_client__default = /*#__PURE__*/__webpack_require__.n(external__apollo_client_);

// EXTERNAL MODULE: external "apollo-link-http"
var external__apollo_link_http_ = __webpack_require__(51);
var external__apollo_link_http__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_http_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external__apollo_cache_inmemory_ = __webpack_require__(52);
var external__apollo_cache_inmemory__default = /*#__PURE__*/__webpack_require__.n(external__apollo_cache_inmemory_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(53);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./constants/websiteURL.js
var websiteURL = 'https://reyeselsamad.com/api/graphql';
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
      // Server URL (must be absolute)
      credentials: 'same-origin',
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
/* 50 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(16);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(43);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(14);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(9);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./lib/withRoot.js
var withRoot = __webpack_require__(44);

// EXTERNAL MODULE: ./themeStyles/index.js
var themeStyles = __webpack_require__(25);

// EXTERNAL MODULE: ./globalStyles/index.js
var globalStyles = __webpack_require__(47);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(56);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(57);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(58);
var Settings__default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "material-ui-pickers/utils/moment-utils"
var moment_utils_ = __webpack_require__(72);
var moment_utils__default = /*#__PURE__*/__webpack_require__.n(moment_utils_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(28);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui-pickers/utils/MuiPickersUtilsProvider"
var MuiPickersUtilsProvider_ = __webpack_require__(73);
var MuiPickersUtilsProvider__default = /*#__PURE__*/__webpack_require__.n(MuiPickersUtilsProvider_);

// EXTERNAL MODULE: external "material-ui/Hidden"
var Hidden_ = __webpack_require__(74);
var Hidden__default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "material-ui/Drawer"
var Drawer_ = __webpack_require__(30);
var Drawer__default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "material-ui/List"
var List_ = __webpack_require__(27);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(15);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "material-ui/Tooltip"
var Tooltip_ = __webpack_require__(13);
var Tooltip__default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowBack"
var ArrowBack_ = __webpack_require__(75);
var ArrowBack__default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);

// EXTERNAL MODULE: external "@material-ui/icons/Notifications"
var Notifications_ = __webpack_require__(59);
var Notifications__default = /*#__PURE__*/__webpack_require__.n(Notifications_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(33);
var Add__default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/RemoveRedEye"
var RemoveRedEye_ = __webpack_require__(34);
var RemoveRedEye__default = /*#__PURE__*/__webpack_require__.n(RemoveRedEye_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(10);
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
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:", ";vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;color:#fff;&:hover{color:#fff !important;}"], function (props) {
  return props.isAdminLinks ? '55px' : '65px';
});
var SideNavLinkItemDiv = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemDiv",
  componentId: "s1oz5fjl-2"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:", ";vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;"], function (props) {
  return props.isAdminLinks ? '55px' : '65px';
});
var IconWrapper = external__styled_components__default.a.span.withConfig({
  displayName: "styledComponents__IconWrapper",
  componentId: "s1oz5fjl-3"
})(["margin-right:35px;position:absolute;left:", ";@media screen and (max-width:600px){left:", ";}"], function (props) {
  return props.iconLeft ? props.iconLeft : '15px';
}, function (props) {
  return props.isAdminLinks ? props.iconLeftSmall ? props.iconLeftSmall : '8px' : '15px';
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
        route: this.props.route
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
var md_ = __webpack_require__(55);
var md__default = /*#__PURE__*/__webpack_require__.n(md_);

// EXTERNAL MODULE: external "react-icons/lib/fa"
var fa_ = __webpack_require__(54);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__(60);
var ExitToApp__default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);

// EXTERNAL MODULE: external "@material-ui/icons/SupervisorAccount"
var SupervisorAccount_ = __webpack_require__(61);
var SupervisorAccount__default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_);

// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__(76);
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
  name: 'Deals',
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
















var drawerWidth = 240;

var SideNav_styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      paddingBottom: '60px',
      overflow: 'auto',
      width: drawerWidth,
      zIndex: 1,
      backgroundColor: 'rgba(36, 68, 109, .75)',
      color: '#fff'
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
      overflow: 'auto' //borderBottom: '1px solid rgba(255,255,255,.2)',

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
      }, external__react__default.a.createElement(Hidden__default.a, {
        mdUp: true,
        implementation: "css"
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "temporary",
        className: classes.tempDrawer,
        classes: {
          paper: classes.drawerPaper
        },
        open: drawerOpen,
        anchor: "left",
        ModalProps: {
          keepMounted: true // Better open performance on mobile.

        },
        onClose: toggleDrawer
      }, external__react__default.a.createElement("div", {
        className: "".concat(classes.toolbar, " ").concat(classes.topToolbar)
      }, external__react__default.a.createElement(Tooltip__default.a, {
        id: "tooltip-icon",
        title: "Close Sidebar",
        enterDelay: 400,
        leaveDelay: 200,
        placement: "bottom",
        PopperProps: {
          style: {
            minWidth: '30px'
          }
        }
      }, external__react__default.a.createElement(IconButton__default.a, {
        color: "inherit",
        className: "".concat(classes.icon, " ").concat(classes.arrowBackBtn),
        onClick: toggleDrawer
      }, external__react__default.a.createElement(ArrowBack__default.a, {
        style: {
          fontSize: '24px'
        }
      })))), external__react__default.a.createElement(Divider__default.a, {
        classes: {
          root: classes.topDivider
        }
      }), external__react__default.a.createElement(List__default.a, {
        classes: {
          root: classes.listRoot
        }
      }, this.renderSideLinkComponents(currentPath)))), external__react__default.a.createElement(Hidden__default.a, {
        smDown: true,
        implementation: "css"
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "permanent",
        classes: {
          paper: classes.drawerPaper
        }
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar
      }), external__react__default.a.createElement(List__default.a, {
        classes: {
          root: classes.listRoot
        }
      }, this.renderSideLinkComponents(currentPath)))));
    }
  }]);

  return SideNav;
}(external__react_["Component"])) || SideNav__class;

/* harmony default export */ var components_SideNav = (Object(styles_["withStyles"])(SideNav_styles)(SideNav_SideNav));
// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "@material-ui/icons/Contacts"
var Contacts_ = __webpack_require__(77);
var Contacts__default = /*#__PURE__*/__webpack_require__.n(Contacts_);

// EXTERNAL MODULE: external "@material-ui/icons/RecentActors"
var RecentActors_ = __webpack_require__(78);
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
  name: 'Deals',
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












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
    }, _defineProperty(_drawerPaperClose, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 6.8
    }), _defineProperty(_drawerPaperClose, '&:hover', {
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
      overflow: 'auto' // borderBottom: '1px solid rgba(255,255,255,.5)',

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
var Menu_ = __webpack_require__(79);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(80);
var Home__default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "material-ui/AppBar"
var AppBar_ = __webpack_require__(81);
var AppBar__default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "material-ui/Toolbar"
var Toolbar_ = __webpack_require__(82);
var Toolbar__default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(26);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

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
      }, external__react__default.a.createElement("div", {
        className: external__classnames__default()(!isAdmin && classes.menuHiddenWrapper)
      }, external__react__default.a.createElement(IconButton__default.a, {
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
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "material-ui/Switch"
var Switch_ = __webpack_require__(83);
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
var Dialog_ = __webpack_require__(41);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/colors/blue"
var blue_ = __webpack_require__(21);
var blue__default = /*#__PURE__*/__webpack_require__.n(blue_);

// EXTERNAL MODULE: external "material-ui/Avatar"
var Avatar_ = __webpack_require__(84);
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
var userTypes = __webpack_require__(12);
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
  var _require = __webpack_require__(85),
      OfflineComp = _require.Offline;

  Offline = OfflineComp;
}

var InnerAppLayout_styles = function styles(theme) {
  return {
    root: {
      maxHeight: '100%',
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignContent: 'center',
      fontFamily: theme.typography.fontFamily
    },
    content: {
      position: 'relative',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0,
      // So the Typography noWrap works
      overflow: 'auto'
    },
    toolbar: theme.mixins.toolbar,
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
        className: classes.toolbar
      }), this.props.children), external__react__default.a.createElement(MenuDialogBox, {
        open: menuDialogBoxOpen,
        title: menuDialogBoxTitle,
        toggleSideNavModal: this.toggleMenuDialogBoxOpen,
        linkItems: menuDialogBoxLinkItems,
        toggleSideNavModalClosed: this.toggleMenuDialogBoxClosed
      })), external__is_browser__default.a && external__react__default.a.createElement(Offline, null, external__react__default.a.createElement(Snackbar__default.a, {
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
var Portal_ = __webpack_require__(86);
var Portal__default = /*#__PURE__*/__webpack_require__.n(Portal_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
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
var models = __webpack_require__(22);

// EXTERNAL MODULE: ./AppGlobalStateProvider/index.js
var AppGlobalStateProvider = __webpack_require__(68);

// EXTERNAL MODULE: ./static/css/main.css
var main = __webpack_require__(69);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// CONCATENATED MODULE: ./components/Layout/index.js
var Layout__class;

function Layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout__typeof = function _typeof(obj) { return typeof obj; }; } else { Layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout__typeof(obj); }

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

      var logoutUser = function logoutUser() {
        var _logout = logout(),
            error = _logout.error;

        if (error) {
          // TODO: add user notification of an logout error
          console.log(error);
          return;
        }

        router__default.a.pushRoute('home');
      };

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
/* 72 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Hidden");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Contacts");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RecentActors");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Switch");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-detect-offline");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Portal");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(null, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(null, args);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_debounce__ = __webpack_require__(90);
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
                setValue(newValue);
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
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(8);
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
            }, selected.map(function (value) {
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
/* 95 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__(88);
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
/* 97 */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid");

/***/ }),
/* 98 */
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
/* 99 */
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
/* 100 */
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

var TableContainerBase = function TableContainerBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "className"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Container, _extends({}, restProps, {
    className: className || classes.myTableContainer,
    id: "myTableContainer"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableContainerComponent'
})(TableContainerBase));

/***/ }),
/* 101 */
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
/* 102 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__(13);
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
/* 103 */
/***/ (function(module, exports) {



/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(8);
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
                }, 5000);
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
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(8);
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
/* 107 */,
/* 108 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("react-circular-progressbar");

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Help");

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      height: '200px',
      width: '100%',
      boxShadow: theme.shadows[1],
      borderRadius: '5px'
    },
    boxTop: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      borderBottom: '1px solid rgba(0,0,0,.15)',
      fontSize: '40px',
      lineHeight: '40px',
      fontWeight: '300',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '0 10px'
    }, theme.breakpoints.down('sm'), {
      fontSize: '32px'
    }),
    boxInfo: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      marginTop: '-12px',
      padding: '2px 5px',
      height: '24px'
    },
    boxInfoText: _defineProperty({
      height: '24px',
      display: 'inline-block',
      padding: '4px 10px',
      textTransform: 'uppercase',
      lineHeight: '14px',
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,.15)',
      fontSize: '12px',
      color: '#636c72',
      borderRadius: '10px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }, theme.breakpoints.down('xs'), {
      fontSize: '10px'
    }),
    boxBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '0 10px'
    }
  };
};

var StatNumberBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(StatNumberBox, _Component);

  function StatNumberBox() {
    _classCallCheck(this, StatNumberBox);

    return _possibleConstructorReturn(this, (StatNumberBox.__proto__ || Object.getPrototypeOf(StatNumberBox)).apply(this, arguments));
  }

  _createClass(StatNumberBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          iconClass = _props.iconClass,
          iconColor = _props.iconColor,
          statTitle = _props.statTitle,
          stat = _props.stat,
          widthPercent = _props.widthPercent,
          rootClassName = _props.rootClassName,
          Icon = _props.icon;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.root, rootClassName),
        style: {
          width: widthPercent ? "".concat(widthPercent, "%") : null
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxTop
      }, stat), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxInfo
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.boxInfoText
      }, statTitle)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxBottom,
        style: {
          color: iconColor ? iconColor : null
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        classes: {
          root: iconClass
        },
        color: "inherit"
      }) : null));
    }
  }]);

  return StatNumberBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(StatNumberBox));

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__ = __webpack_require__(96);





var styles = function styles(theme) {
  return {
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    }
  };
};

var FilterCellBase = function FilterCellBase(_ref) {
  var filter = _ref.filter,
      onFilter = _ref.onFilter,
      classes = _ref.classes,
      selectInputItems = _ref.selectInputItems,
      fullWidth = _ref.fullWidth;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"], {
    className: classes.cell
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__["a" /* default */], {
    className: classes.input,
    value: filter ? filter.value : '',
    onChange: function onChange(e) {
      return onFilter(e.target.value ? {
        value: e.target.value
      } : null);
    },
    placeholder: "Filter...",
    inputProps: {},
    fullWidth: fullWidth,
    selectInputItems: selectInputItems
  }));
};

var SelectFilterCell = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles, {
  name: 'SexFilterCell'
})(FilterCellBase);
/* harmony default export */ __webpack_exports__["a"] = (SelectFilterCell);

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compareNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var compareDate = function compareDate(a, b) {
  var Date1;
  var Date2;

  if (typeof a === 'string') {
    Date1 = a;
  } else {
    Date1 = a;
  }

  if (typeof b === 'string') {
    Date2 = b;
  } else {
    Date2 = b;
  }

  if (Date1 === Date2) return 0;
  if (__WEBPACK_IMPORTED_MODULE_0_moment___default()(Date1).isBefore(Date2)) return -1;
  return 1;
};
var compareNumber = function compareNumber(a, b) {
  var Num1;
  var Num2;

  if (typeof a === 'string') {
    Num1 = a.startsWith('$') ? Number(a.substring(1).replace(/,/g, '')) : Number(a.replace(/,/g, ''));
  } else {
    Num1 = a;
  }

  if (typeof b === 'string') {
    Num2 = b.startsWith('$') ? Number(b.substring(1).replace(/,/g, '')) : Number(b.replace(/,/g, ''));
  } else {
    Num2 = b;
  }

  if (Num1 === Num2) return 0;
  if (Num1 > Num2) return 1;
  return -1;
};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__(6);


var query = "\n  mutation deleteDeal($uuid: String!) {\n    deleteDeal(uuid: $uuid) {\n      dealID\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var deleteDeal = function deleteDeal(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    dealID: null,
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.deleteDeal;
    var dealID = data.dealID,
        error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.dealID = dealID;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (deleteDeal);

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Equalizer");

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(56);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(57);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(26);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(31);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "react-form"
var external__react_form_ = __webpack_require__(24);
var external__react_form__default = /*#__PURE__*/__webpack_require__.n(external__react_form_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(42);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(66);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "material-ui/TextField"
var TextField_ = __webpack_require__(95);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(33);
var Add__default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__(128);
var Delete__default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "react-circular-progressbar"
var external__react_circular_progressbar_ = __webpack_require__(115);
var external__react_circular_progressbar__default = /*#__PURE__*/__webpack_require__.n(external__react_circular_progressbar_);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(103);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: external "react-images"
var external__react_images_ = __webpack_require__(134);
var external__react_images__default = /*#__PURE__*/__webpack_require__.n(external__react_images_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "@material-ui/icons/RemoveRedEye"
var RemoveRedEye_ = __webpack_require__(34);
var RemoveRedEye__default = /*#__PURE__*/__webpack_require__.n(RemoveRedEye_);

// EXTERNAL MODULE: ./components/MaterialCustomTextFieldWrapper/index.js
var MaterialCustomTextFieldWrapper = __webpack_require__(93);

// EXTERNAL MODULE: ./components/MaterialCustomRadioInputWrapper/index.js
var MaterialCustomRadioInputWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./components/MaterialCustomSelectInputWrapper/index.js
var MaterialCustomSelectInputWrapper = __webpack_require__(94);

// EXTERNAL MODULE: ./components/CustomFileUploadInputWrapper/index.js
var CustomFileUploadInputWrapper = __webpack_require__(105);

// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// EXTERNAL MODULE: external "material-ui/Input"
var Input_ = __webpack_require__(62);
var Input__default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "material-ui/Form"
var Form_ = __webpack_require__(35);
var Form__default = /*#__PURE__*/__webpack_require__.n(Form_);

// EXTERNAL MODULE: external "email-validator"
var external__email_validator_ = __webpack_require__(89);
var external__email_validator__default = /*#__PURE__*/__webpack_require__.n(external__email_validator_);

// CONCATENATED MODULE: ./components/forms/SubmitDealForm/formValidation.js

var dollarAmountOnlyRegex = /^[0-9]+(\.[0-9][0-9])?$/;

var formValidation_validator = function validator(values) {
  return {
    date: !values.date ? 'This value is required' : null,
    agent: !values.agent ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    dealType: !values.dealType ? 'This value is required' : null,
    propertyAddress: !values.propertyAddress ? 'This value is required' : null,
    city: !values.city ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    apartmentNumber: !values.apartmentNumber ? 'This value is required' : null,
    managementOrCobrokeCompany: !values.managementOrCobrokeCompany ? 'This value is required' : null,
    price: !values.price || !dollarAmountOnlyRegex.test(values.price) ? 'This value is required and must be a dollar amount' : null,
    clientName: !values.clientName || values.clientName.length < 3 || values.clientName.length > 80 ? 'Between 3 and 80 characters' : null,
    clientEmail: !values.clientEmail || !external__email_validator_["validate"](values.clientEmail) || values.clientEmail.length > 60 ? 'Please provide a valid email address that is less than 60 characters' : null,
    agentPaymentType: !values.agentPaymentType ? 'This value is required' : null,
    fundsPaidBy: !values.fundsPaidBy ? 'This value is required' : null,
    alreadyTurnedFundsIn: !values.alreadyTurnedFundsIn ? 'This value is required' : null,
    shouldSendApprovalTextMessageNotification: !values.shouldSendApprovalTextMessageNotification ? 'This value is required' : null,
    financialsTotal: !values.financialsTotal || parseFloat(values.financialsTotal.split(',').join('')) <= 0 ? 'The total amount for this deal must be greater than 0' : null
  };
};

var agencyDisclosureFormValidator = function agencyDisclosureFormValidator(value) {
  return {
    error: !value ? 'This value is required and must be either JPEG/JPG or PDF format' : null
  };
};
var paymentTypeValidator = function paymentTypeValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var checkOrTransactionNumberValidator = function checkOrTransactionNumberValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var ACHAccountNumberValidator = function ACHAccountNumberValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var paymentAmountValidator = function paymentAmountValidator(value) {
  return {
    error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null
  };
};
var deductionTypeValidator = function deductionTypeValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var descriptionValidator = function descriptionValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var deductionsAmountValidator = function deductionsAmountValidator(value) {
  return {
    error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null
  };
};
/* harmony default export */ var formValidation = (formValidation_validator);
// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(12);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// EXTERNAL MODULE: ./utils/Math.js
var utils_Math = __webpack_require__(70);

// CONCATENATED MODULE: ./components/forms/SubmitDealForm/index.js



var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























var CustomTextField = MaterialCustomTextFieldWrapper["a" /* default */];
var MaterialCustomRadioInput = MaterialCustomRadioInputWrapper["a" /* default */];
var MaterialCustomSelectInput = MaterialCustomSelectInputWrapper["a" /* default */];
var CustomFileUploadInputBtn = CustomFileUploadInputWrapper["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

var SubmitDealForm_styles = function styles(theme) {
  var _smallFileViewBtn;

  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: theme.spacing.unit * 3,
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: theme.shadows[3]
    },
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    formControl: {
      marginLeft: 0,
      marginRight: 0
    },
    alignCenter: {
      textAlign: 'center'
    },
    formHeader: {
      marginBottom: theme.spacing.unit * 3
    },
    formWrapper: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      textAlign: 'center'
    },
    formRoot: {
      paddingBottom: 10,
      flexGrow: 1,
      justifyContent: 'center',
      overflow: 'hidden'
    },
    radioInputWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '82px'
    },
    h3: {
      fontWeight: theme.typography.fontWeightMedium
    },
    addPaymentBtn: {
      marginTop: '10px'
    },
    removePaymentBtn: {
      marginTop: '5px',
      marginLeft: '28px'
    },
    paymentItemsWrapper: {
      display: 'flex',
      width: '100%',
      padding: '5px 0 12px 0',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      '& > div': {
        paddingLeft: '12px',
        paddingRight: '12px'
      }
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
    topPaymentMethodWrapper: {
      paddingTop: '0'
    },
    paddingBottom10: {
      paddingBottom: '15px'
    },
    greenText: {
      color: '#448A19'
    },
    redText: {
      color: '#ED462F'
    },
    blueText: {
      color: '#3878D8'
    },
    financialsTotal: {
      backgroundColor: 'rgba(0,0,0,.12)'
    },
    uploadBtnClassName: {
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
      },
      addUploadBtnClassName: {}
    },
    fileUploadBtnWrapper2: {
      position: 'relative',
      display: 'inline-block'
    },
    fileUploadBtnWrapper: {
      position: 'relative',
      display: 'inline-block'
    },
    smallFileAddBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      backgroundColor: '#2995F3',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#2483D6'
      }
    },
    smallFileRemoveBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      position: 'absolute',
      top: '5px',
      marginLeft: '6px'
    },
    smallFileViewBtn: (_smallFileViewBtn = {
      width: '35px',
      height: '35px',
      minWidth: '35px',
      minHeight: '35px',
      position: 'absolute',
      backgroundColor: '#008000',
      top: '8px',
      marginLeft: '6px',
      color: '#fff',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#067706'
      }
    }, _defineProperty(_smallFileViewBtn, theme.breakpoints.down('xs'), {
      position: 'relative',
      marginTop: '-18px'
    }), _defineProperty(_smallFileViewBtn, '@media only screen and (max-width: 400px)', {
      position: 'relative',
      marginTop: '0 !important'
    }), _smallFileViewBtn),
    uploadContractDivWrapper: {
      position: 'relative'
    },
    blueBackgroundColor: {
      backgroundColor: '#2995F3'
    },
    finalTotalLabelClass: {
      paddingLeft: '10px'
    },
    finalTotalInputClass: {
      backgroundColor: 'rgba(0,0,0,.12)',
      borderRadius: '5px 5px 0 0',
      paddingLeft: '10px'
    },
    ManagementOrCobrokeCompanyTextField: {
      width: '100%',
      margin: 8,
      marginLeft: 0
    },
    progressBarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    formSubmittingWrapper: {
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
    gridContainer: {
      marginBottom: 0
    },
    viewIcon: {
      fontSize: '1.2rem'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    fullwidthInput: {
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
var radioInputAgentPaymentItems = [{
  label: "I'll pick up the check"
}, {
  label: 'Please ACH me'
}];
var radioInputYesNoItems = [{
  label: 'Yes'
}, {
  label: 'No'
}];
var dealTypeSelectItems = [{
  label: 'Residential Rental'
}, {
  label: 'Residential Sale'
}, {
  label: 'Commercial Rental'
}, {
  label: 'Commercial Sale'
}];
var fundsPaidBySelectItems = [{
  label: 'Bringing a ckeck to the office'
}, {
  label: 'Remote deposit to Chase account'
}, {
  label: 'Check or "OP" mailed to office'
}, {
  label: 'Credit card payment'
}, {
  label: 'Client wired funds'
}];
var paymentTypeSelectItems = [{
  label: 'Check'
}, {
  label: 'Money Order'
}, {
  label: 'Wire'
}, {
  label: 'Cash'
}, {
  label: 'Owner Pays (OP)'
}];
var deductionTypeSelectItems = [{
  label: 'Deal Fee'
}, {
  label: 'Dues'
}, {
  label: '3rd Party Check'
}, {
  label: 'Processing Fee'
}, {
  label: 'Payment'
}, {
  label: 'Agent Split'
}];

var SubmitDealForm_SubmitDealForm = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealForm, _Component);

  function SubmitDealForm(props) {
    var _this;

    _classCallCheck(this, SubmitDealForm);

    _this = _possibleConstructorReturn(this, (SubmitDealForm.__proto__ || Object.getPrototypeOf(SubmitDealForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "isFirstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnAgencyDisclosureURL", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.agencyDisclosureForm) {
          return [{
            src: _this.props.submittedDeal.agencyDisclosureForm
          }];
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnContractLeaseURLS", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.contractOrLeaseForms) {
          return _this.props.submittedDeal.contractOrLeaseForms.map(function (url) {
            return {
              src: url
            };
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openContractLeaseLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'contractLease'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openAgencyDisclosureLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'agencyDisclosure'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickPrev", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex - 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickNext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex + 1
        });
      }
    });
    _this.state = {
      shouldRenderInitialDeductionItem: true,
      lightboxIsOpen: false,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure'
    };
    return _this;
  }

  _createClass(SubmitDealForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.setInitialContainerState && this.props.submittedDeal) {
        this.props.setInitialContainerState({
          paymentsTotal: this.props.submittedDeal.paymentsTotal,
          deductionsTotal: this.props.submittedDeal.deductionsTotal,
          total: this.props.submittedDeal.total
        });
      }

      if (this.props.resetDealBonus) {
        this.props.resetDealBonus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          setAgencyDisclosureForm = _props.setAgencyDisclosureForm,
          setContractOrLeaseForms = _props.setContractOrLeaseForms,
          agencyDisclosureForm = _props.agencyDisclosureForm,
          contractOrLeaseForms = _props.contractOrLeaseForms,
          subtractPaymentValueFromState = _props.subtractPaymentValueFromState,
          subtractDeductionValueFromState = _props.subtractDeductionValueFromState,
          choosingMgmtCoBrokeCompany = _props.choosingMgmtCoBrokeCompany,
          toggleChoosingMgmtCoBrokeCompany = _props.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange = _props.handleMgmtOrCobrokeCompanyChange,
          setHasSetNewMgmtOrCobrokeCompany = _props.setHasSetNewMgmtOrCobrokeCompany,
          newMgmtOrCobrokeCompany = _props.newMgmtOrCobrokeCompany,
          addedManagementCompanies = _props.addedManagementCompanies,
          agents = _props.agents,
          uplodingFileProgress = _props.uplodingFileProgress,
          isUploadingFile = _props.isUploadingFile,
          uplodingFileText = _props.uplodingFileText,
          formSubmissionBegun = _props.formSubmissionBegun,
          submittingFormToServer = _props.submittingFormToServer,
          submittedDeal = _props.submittedDeal,
          isEditingDeal = _props.isEditingDeal,
          isViewType = _props.isViewType,
          agentUUID = _props.agentUUID,
          managementCobrokeCompanyItems = _props.managementCobrokeCompanyItems,
          agentPaymentTypeIsACH = _props.agentPaymentTypeIsACH,
          _onSubmit = _props.onSubmit;
      var managementCobrokeCompanies = managementCobrokeCompanyItems && managementCobrokeCompanyItems.length ? _toConsumableArray(managementCobrokeCompanyItems) : [];

      if (submittedDeal && submittedDeal.managementOrCobrokeCompany) {
        if (!managementCobrokeCompanies.includes(submittedDeal.managementOrCobrokeCompany)) {
          managementCobrokeCompanies.push(submittedDeal.managementOrCobrokeCompany);
        }
      }

      var agentsSelectItems = agents.filter(function (agent) {
        return agentUUID ? agent.uuid !== agentUUID : agent;
      }).map(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName,
            uuid = _ref.uuid;
        return {
          label: "".concat(Object(stringUtils["a" /* capitalize */])(firstName), " ").concat(Object(stringUtils["a" /* capitalize */])(lastName), " (Agent ID - ").concat(uuid, ")"),
          key: uuid,
          value: uuid
        };
      });

      if (isViewType && submittedDeal && submittedDeal.otherAgents.length) {
        var nonAvailableAgentUUIDS = [];
        var agentUUIDS = agents.map(function (agent) {
          return agent.uuid;
        });
        submittedDeal.otherAgents.forEach(function (agent) {
          if (!agentUUIDS.includes(agent.agentID)) {
            agentsSelectItems.push({
              label: "".concat(agent.agentName, " (Agent ID - ").concat(agent.agentID, ")"),
              key: agent.agentID,
              value: agent.agentID
            });
          }
        });
      }

      var managementCobrokeCompanySelectItems = managementCobrokeCompanies.map(function (company) {
        return {
          label: company
        };
      });
      managementCobrokeCompanySelectItems = managementCobrokeCompanySelectItems ? _toConsumableArray(managementCobrokeCompanySelectItems).concat(_toConsumableArray(addedManagementCompanies.map(function (company) {
        return {
          label: company
        };
      })), [{
        label: 'Add a new item...'
      }]) : [];
      /*
        const {
          firstName,
          lastName,
          uuid: agentUUID,
          agent: agentPart,
        } = this.props.agent;
        const { agentType, state } = agentPart;
        */

      var finalDefaultValues;

      if (submittedDeal) {
        var agentNotes = submittedDeal.agentNotes,
            agentType = submittedDeal.agentType,
            agentName = submittedDeal.agentName,
            alreadyTurnedFundsIn = submittedDeal.alreadyTurnedFundsIn,
            city = submittedDeal.city,
            clientEmail = submittedDeal.clientEmail,
            clientName = submittedDeal.clientName,
            date = submittedDeal.date,
            dealType = submittedDeal.dealType,
            otherAgents = submittedDeal.otherAgents,
            leadSource = submittedDeal.leadSource,
            managementOrCobrokeCompany = submittedDeal.managementOrCobrokeCompany,
            propertyAddress = submittedDeal.propertyAddress,
            shouldSendApprovalTextMessageNotification = submittedDeal.shouldSendApprovalTextMessageNotification,
            state = submittedDeal.state,
            fundsPaidBy = submittedDeal.fundsPaidBy,
            agentPaymentType = submittedDeal.agentPaymentType,
            price = submittedDeal.price,
            paymentsTotal = submittedDeal.paymentsTotal,
            deductionsTotal = submittedDeal.deductionsTotal,
            paymentItems = submittedDeal.paymentItems,
            deductionItems = submittedDeal.deductionItems,
            apartmentNumber = submittedDeal.apartmentNumber,
            total = submittedDeal.total,
            bonusPercentageAddedByAdmin = submittedDeal.bonusPercentageAddedByAdmin,
            ACHAccountNumber = submittedDeal.ACHAccountNumber;
        finalDefaultValues = {
          agent: agentName,
          agentNotes: agentNotes,
          agentType: agentType,
          otherAgents: otherAgents.map(function (agent) {
            return agent.agentID;
          }),
          alreadyTurnedFundsIn: alreadyTurnedFundsIn,
          city: city,
          apartmentNumber: apartmentNumber,
          clientEmail: clientEmail,
          clientName: clientName,
          date: external__moment__default()(date).format('MMMM Do YYYY'),
          dealType: dealType,
          leadSource: leadSource,
          agentPaymentType: agentPaymentType,
          managementOrCobrokeCompany: managementOrCobrokeCompany,
          propertyAddress: propertyAddress,
          shouldSendApprovalTextMessageNotification: shouldSendApprovalTextMessageNotification,
          state: state,
          fundsPaidBy: fundsPaidBy,
          price: price,
          paymentItems: paymentItems.map(function (_ref2) {
            var paymentType = _ref2.paymentType,
                checkOrTransactionNumber = _ref2.checkOrTransactionNumber,
                amount = _ref2.amount;
            return {
              paymentType: paymentType,
              checkOrTransactionNumber: checkOrTransactionNumber,
              amount: amount
            };
          }),
          deductionItems: deductionItems.map(function (_ref3) {
            var deductionType = _ref3.deductionType,
                description = _ref3.description,
                amount = _ref3.amount;
            return {
              deductionType: deductionType,
              description: description,
              amount: amount
            };
          }),
          paymentsSubtotal: paymentsTotal ? paymentsTotal.toLocaleString() : '0',
          deductionsSubtotal: deductionsTotal ? deductionsTotal.toLocaleString() : '0',
          financialsTotal: total ? total.toLocaleString() : '0',
          ACHAccountNumber: ACHAccountNumber,
          bonusPercentageAddedByAdmin: "".concat(bonusPercentageAddedByAdmin)
        };
      }

      return external__react__default.a.createElement("div", {
        className: classes.formWrapper
      }, external__react__default.a.createElement(external__react_form_["Form"], {
        defaultValues: !finalDefaultValues && this.props.agent ? {
          date: "".concat(external__moment__default()().format('MMMM Do YYYY')),
          agentType: "".concat(this.props.agent.agent.agentType),
          state: this.props.agent.agent.state,
          agent: "".concat(Object(stringUtils["a" /* capitalize */])(this.props.agent.firstName), " ").concat(Object(stringUtils["a" /* capitalize */])(this.props.agent.lastName)),
          paymentsSubtotal: this.props.paymentsTotal,
          deductionsSubtotal: this.props.deductionsTotal,
          ACHAccountNumber: "".concat(this.props.agent.agent.ACHAccountNumber)
        } : finalDefaultValues,
        preValidate: this.preValidate,
        validateOnMount: true,
        onSubmit: function onSubmit(values) {
          if (_onSubmit) {
            _onSubmit(values);
          }
        },
        onSubmitFailure: this.props.onSubmitFailure,
        validate: formValidation,
        getApi: function getApi(formApi) {
          _this2.props.getFormApi(formApi);
        }
      }, function (formApi) {
        /*
          console.log(formApi.errors);
          console.log(formApi.values);
          console.log(formApi.values.deductionItems);
          
          if (this.isFirstTimeRender) {
            this.isFirstTimeRender = false;
            formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
            formApi.setValue('agentType', `${agentType}`);
            formApi.setValue('state', state);
            formApi.setValue(
              'agent',
              `${capitalize(firstName)} ${capitalize(lastName)}`
            );
            formApi.setValue('paymentsSubtotal', this.props.paymentsTotal);
            formApi.setValue(
              'deductionsSubtotal',
              this.props.deductionsTotal
            );
          }
          */
        var renderRestDeductionItems = function renderRestDeductionItems() {
          if (!formApi.values.deductionItems || !formApi.values.deductionItems.length) return;
          var deductionItems = formApi.values.deductionItems.map(function (deductionItem, i) {
            return external__react__default.a.createElement("div", {
              className: classes.paymentItemsWrapper,
              key: i
            }, external__react__default.a.createElement(external__react_form_["NestedField"], {
              field: ['deductionItems', i]
            }, external__react__default.a.createElement(Grid__default.a, {
              item: true,
              sm: 4,
              xs: 12
            }, external__react__default.a.createElement("div", {
              className: classes.formControlWrapper
            }, external__react__default.a.createElement(MaterialCustomSelectInput, {
              field: "deductionType",
              id: v4__default()(),
              fullWidth: true,
              label: "Deduction Type",
              name: "deductionType",
              required: true,
              selectInputItems: deductionTypeSelectItems,
              validate: deductionTypeValidator,
              disabled: submittedDeal && !isEditingDeal
            }))), external__react__default.a.createElement(Grid__default.a, {
              item: true,
              sm: 4,
              xs: 12
            }, external__react__default.a.createElement("div", {
              className: classes.formControlWrapper
            }, external__react__default.a.createElement(CustomTextField, {
              field: "description",
              id: v4__default()(),
              label: "Description",
              fullWidth: true,
              required: true,
              validate: descriptionValidator,
              disabled: submittedDeal && !isEditingDeal
            }))), external__react__default.a.createElement(Grid__default.a, {
              item: true,
              sm: 4,
              xs: 12
            }, external__react__default.a.createElement("div", {
              className: classes.formControlWrapper
            }, external__react__default.a.createElement(CustomTextField, {
              field: "amount",
              id: v4__default()(),
              label: "Amount",
              fullWidth: true,
              validate: deductionsAmountValidator,
              noLetters: true,
              required: true,
              noNegativeSign: true,
              onChangeWithID: _this2.props.deductionAmountChangeHandler,
              isDollarAmount: true,
              disabled: submittedDeal && !isEditingDeal
            })))), external__react__default.a.createElement(Button__default.a, {
              classes: {
                root: classes.removePaymentBtn
              },
              variant: "raised",
              color: "secondary",
              onClick: function onClick() {
                var amount = Number(formApi.values.deductionItems[i].amount);

                if (amount) {
                  subtractDeductionValueFromState(amount);
                }

                formApi.removeValue('deductionItems', i);
              },
              type: "button"
            }, "Remove"));
          });

          if (_this2.state.shouldRenderInitialDeductionItem) {
            return deductionItems.slice(1);
          }

          return deductionItems;
        };

        return external__react__default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmissionBegun || submittingFormToServer ? 'none' : undefined
          }
        }, external__react__default.a.createElement(Grid__default.a, {
          container: true,
          spacing: 24
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "date",
          id: v4__default()(),
          label: "Date",
          disabled: true,
          fullWidth: true,
          required: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "agent",
          id: v4__default()(),
          label: "Agent",
          disabled: true,
          fullWidth: true,
          required: true
        }))), agentsSelectItems.length ? external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, _defineProperty({
          field: "otherAgents",
          id: v4__default()(),
          fullWidth: true,
          label: "Other Agents",
          name: "otherAgents",
          multiple: true,
          disabled: submittedDeal && !isEditingDeal,
          selectInputItems: agentsSelectItems
        }, "disabled", isViewType)))) : null, external__react__default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper)
        }, external__react__default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: v4__default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          disabled: true,
          horizontal: true
        })), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "leadSource",
          id: v4__default()(),
          label: "Lead Source",
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement("div", {
          className: classes.formSubheading
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          }
        }, "Property Information")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, _defineProperty({
          field: "dealType",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          label: "Deal Type",
          name: "dealType",
          selectInputItems: dealTypeSelectItems
        }, "disabled", submittedDeal && !isEditingDeal)))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "propertyAddress",
          id: v4__default()(),
          label: "Property Address",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "state",
          id: v4__default()(),
          label: "State",
          required: true,
          fullWidth: true,
          disabled: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "city",
          id: v4__default()(),
          label: "City",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "apartmentNumber",
          id: v4__default()(),
          label: "Apartment Number",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal
        }))), !choosingMgmtCoBrokeCompany ? external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "managementOrCobrokeCompany",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          label: "Management/Co-Broke Company",
          name: "managementOrCobrokeCompany",
          onChange: function onChange(value) {
            if (value === 'Add a new item...') {
              toggleChoosingMgmtCoBrokeCompany(true);
            }
          },
          selectInputItems: managementCobrokeCompanySelectItems,
          disabled: submittedDeal && !isEditingDeal
        }))) : external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(TextField__default.a, {
          id: "newManagementOrCobrokeCompany",
          label: "Add Mgmt/Co-broke Company...",
          value: newMgmtOrCobrokeCompany,
          className: classes.ManagementOrCobrokeCompanyTextField,
          onChange: handleMgmtOrCobrokeCompanyChange,
          margin: "normal"
        })), external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          style: {
            marginLeft: '0'
          },
          onClick: function onClick() {
            toggleChoosingMgmtCoBrokeCompany(false);
            formApi.setValue('managementOrCobrokeCompany', '');
          },
          type: "button"
        }, "Cancel"), external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          style: {
            marginLeft: '10px',
            marginTop: '5px'
          },
          onClick: function onClick() {
            var trimmedItem = newMgmtOrCobrokeCompany.trim();
            if (!newMgmtOrCobrokeCompany || !trimmedItem) return;

            var items = _toConsumableArray(managementCobrokeCompanyItems).concat(_toConsumableArray(addedManagementCompanies));

            var regex = new RegExp(trimmedItem, 'i');
            var match = items.filter(function (item) {
              return item.match(regex);
            });

            if (match.length) {
              toggleChoosingMgmtCoBrokeCompany(false);
              formApi.setValue('managementOrCobrokeCompany', match[0]);
              return;
            }

            setHasSetNewMgmtOrCobrokeCompany();
            formApi.setValue('managementOrCobrokeCompany', Object(stringUtils["a" /* capitalize */])(newMgmtOrCobrokeCompany));
          },
          type: "button"
        }, "Add Item")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "price",
          id: v4__default()(),
          label: "Rent or Sale Price",
          required: true,
          fullWidth: true,
          noLetters: true,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement("div", {
          className: classes.formSubheading
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          }
        }, "Client's", " Information")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "clientName",
          id: v4__default()(),
          label: "Client's Name",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 6,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "clientEmail",
          id: v4__default()(),
          label: "Client Email",
          required: true,
          fullWidth: true,
          type: "email",
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10)
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          }
        }, "Transaction Financials")), external__react__default.a.createElement("div", {
          className: classes.formMiniHeading
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.greenText
          }
        }, "Paid:")), external__react__default.a.createElement(external__react_form_["NestedField"], {
          field: ['paymentItems', 0]
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "paymentType",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          label: "Payment Type",
          name: "paymentType",
          selectInputItems: paymentTypeSelectItems,
          validate: paymentTypeValidator,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "checkOrTransactionNumber",
          id: v4__default()(),
          label: "Check/Transaction#",
          required: true,
          fullWidth: true,
          validate: checkOrTransactionNumberValidator,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "amount",
          id: v4__default()(),
          label: "Amount",
          required: true,
          fullWidth: true,
          validate: paymentAmountValidator,
          noLetters: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.paymentAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal
        })))), formApi.values.paymentItems && formApi.values.paymentItems.map(function (paymentItems, i) {
          return external__react__default.a.createElement("div", {
            className: classes.paymentItemsWrapper,
            key: i
          }, external__react__default.a.createElement(external__react_form_["NestedField"], {
            field: ['paymentItems', i]
          }, external__react__default.a.createElement(Grid__default.a, {
            item: true,
            sm: 4,
            xs: 12
          }, external__react__default.a.createElement("div", {
            className: classes.formControlWrapper
          }, external__react__default.a.createElement(MaterialCustomSelectInput, {
            field: "paymentType",
            id: v4__default()(),
            required: true,
            fullWidth: true,
            label: "Payment Type",
            name: "paymentType",
            selectInputItems: paymentTypeSelectItems,
            validate: paymentTypeValidator,
            disabled: submittedDeal && !isEditingDeal
          }))), external__react__default.a.createElement(Grid__default.a, {
            item: true,
            sm: 4,
            xs: 12
          }, external__react__default.a.createElement("div", {
            className: classes.formControlWrapper
          }, external__react__default.a.createElement(CustomTextField, {
            field: "checkOrTransactionNumber",
            id: v4__default()(),
            label: "Check/Transaction#",
            required: true,
            fullWidth: true,
            validate: checkOrTransactionNumberValidator,
            disabled: submittedDeal && !isEditingDeal
          }))), external__react__default.a.createElement(Grid__default.a, {
            item: true,
            sm: 4,
            xs: 12
          }, external__react__default.a.createElement("div", {
            className: classes.formControlWrapper
          }, external__react__default.a.createElement(CustomTextField, {
            field: "amount",
            id: v4__default()(),
            label: "Amount",
            required: true,
            fullWidth: true,
            validate: paymentAmountValidator,
            noLetters: true,
            noNegativeSign: true,
            onChangeWithID: _this2.props.paymentAmountChangeHandler,
            isDollarAmount: true,
            disabled: submittedDeal && !isEditingDeal
          })))), submittedDeal && !isEditingDeal ? null : external__react__default.a.createElement(Button__default.a, {
            classes: {
              root: classes.removePaymentBtn
            },
            variant: "raised",
            color: "secondary",
            onClick: function onClick() {
              var amount = Number(formApi.values.paymentItems[i].amount);

              if (amount) {
                subtractPaymentValueFromState(amount);
              }

              formApi.removeValue('paymentItems', i);
            },
            type: "button"
          }, "Remove"));
        }).slice(1), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('paymentItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal
        }, "Add payment item")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          sm: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "paymentsSubtotal",
          id: v4__default()(),
          label: "Payments Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: _this2.props.paymentsTotal,
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true
        }))), external__react__default.a.createElement("div", {
          className: classes.formMiniHeading2
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.redText
          }
        }, "Deductions:")), _this2.state.shouldRenderInitialDeductionItem ? external__react__default.a.createElement("div", {
          className: classes.paymentItemsWrapper
        }, external__react__default.a.createElement(external__react_form_["NestedField"], {
          field: ['deductionItems', 0]
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "deductionType",
          id: v4__default()(),
          fullWidth: true,
          label: "Deduction Type",
          name: "deductionType",
          required: true,
          selectInputItems: deductionTypeSelectItems,
          validate: deductionTypeValidator,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "description",
          id: v4__default()(),
          label: "Description",
          fullWidth: true,
          required: true,
          validate: descriptionValidator,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          sm: 4,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "amount",
          id: v4__default()(),
          label: "Amount",
          fullWidth: true,
          validate: deductionsAmountValidator,
          noLetters: true,
          required: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.deductionAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal
        })))), submittedDeal && !isEditingDeal ? null : external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          onClick: function onClick() {
            _this2.setState({
              shouldRenderInitialDeductionItem: false
            });

            var amount = Number(formApi.values.deductionItems[0].amount);

            if (amount) {
              subtractDeductionValueFromState(amount);
            }

            formApi.removeValue('deductionItems', 0);
          },
          type: "button"
        }, "Remove")) : null, renderRestDeductionItems(), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement(Button__default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('deductionItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal
        }, "Add deduction item")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          sm: 6
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "deductionsSubtotal",
          id: v4__default()(),
          label: "Deductions Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: "".concat(_this2.props.deductionsTotal),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "financialsTotal",
          id: v4__default()(),
          label: "Final Total",
          disabled: true,
          fullWidth: true,
          labelClassName: classes.finalTotalLabelClass,
          submittedValue: "".concat(_this2.props.total),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          inputRootClassName: classes.finalTotalInputClass
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "agentNotes",
          id: v4__default()(),
          label: "Listing agent/performance bonus info",
          fullWidth: true,
          multiline: true,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement("div", {
          className: classes.formMiniHeading2
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          }
        }, "File Uploads:")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement(Divider__default.a, null)), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper
        }, external__react__default.a.createElement(CustomFileUploadInputBtn, {
          field: "agencyDisclosureForm",
          id: "agencyDisclosureUploadForm",
          label: "Upload Agency Disclosure Form*",
          btnClassName: classes.uploadBtnClassName,
          customOnChange: setAgencyDisclosureForm,
          customState: agencyDisclosureForm,
          helperInfo: "Agency Disclosure Form* (PDF or JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal,
          required: isViewType ? undefined : true,
          submits: formApi.submits,
          formError: formApi.errors ? formApi.errors.agencyDisclosureForm : undefined,
          validate: isViewType ? undefined : agencyDisclosureFormValidator
        }), submittedDeal && submittedDeal.agencyDisclosureForm && !agencyDisclosureForm ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.openAgencyDisclosureLightBox
        }, external__react__default.a.createElement(RemoveRedEye__default.a, {
          className: classes.viewIcon
        })) : null, isEditingDeal && agencyDisclosureForm ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setAgencyDisclosureForm('');
          }
        }, external__react__default.a.createElement(Delete__default.a, null)) : null)), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper
        }, external__react__default.a.createElement(CustomFileUploadInputBtn, {
          field: "contractOrLeaseItems",
          id: "contractOrLeaseItemsUploadForm",
          label: "Upload your Contract or Lease items",
          btnClassName: classes.uploadBtnClassName,
          multiple: true,
          customOnChange: setContractOrLeaseForms,
          customState: contractOrLeaseForms,
          helperInfo: "Contract or Lease items (PDF or JPEG/JPG files)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal
        }), submittedDeal && submittedDeal.contractOrLeaseForms && submittedDeal.contractOrLeaseForms.length && !(contractOrLeaseForms && contractOrLeaseForms.length) ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.openContractLeaseLightBox
        }, external__react__default.a.createElement(RemoveRedEye__default.a, {
          className: classes.viewIcon
        })) : null, contractOrLeaseForms.length ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setContractOrLeaseForms([]);
          }
        }, external__react__default.a.createElement(Delete__default.a, null)) : null)), external__react__default.a.createElement("div", {
          className: classes.formMiniHeading2
        }, external__react__default.a.createElement(Typography__default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          }
        }, "Other:")), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement(Divider__default.a, null)), external__react__default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper)
        }, external__react__default.a.createElement(MaterialCustomRadioInput, {
          field: "agentPaymentType",
          id: v4__default()(),
          required: true,
          label: "How would you like to get paid?",
          radioInputItems: radioInputAgentPaymentItems,
          onInput: _this2.props.onAgentPaymentTypeChange,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal
        })), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountNumber) && external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: v4__default()(),
          label: "ACH Account Number",
          required: true,
          fullWidth: true,
          validate: ACHAccountNumberValidator,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(MaterialCustomSelectInput, {
          field: "fundsPaidBy",
          id: v4__default()(),
          required: true,
          fullWidth: true,
          label: "Funds will/have been paid by...",
          name: "fundsPaidBy",
          selectInputItems: fundsPaidBySelectItems,
          disabled: submittedDeal && !isEditingDeal
        }))), external__react__default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper)
        }, external__react__default.a.createElement(MaterialCustomRadioInput, {
          field: "alreadyTurnedFundsIn",
          id: v4__default()(),
          required: true,
          label: "Have you already deposited or given the funds to us?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal
        })), external__react__default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper)
        }, external__react__default.a.createElement(MaterialCustomRadioInput, {
          field: "shouldSendApprovalTextMessageNotification",
          id: v4__default()(),
          required: true,
          label: "Want to recieve a text notification upon deal approval?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal
        })), !_this2.props.userRole || !submittedDeal || _this2.props.userRole === userTypes["agent"] && submittedDeal.status === 'pending' || !submittedDeal.bonusPercentageAddedByAdmin && submittedDeal.status === 'approved' ? null : external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(Form_["FormControl"], {
          className: external__classnames__default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true
        }, external__react__default.a.createElement(Input_["InputLabel"], {
          htmlFor: "bonusPercentageAddedByAdmin",
          className: external__classnames__default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled)
        }, "Listing agent/performance bonus"), external__react__default.a.createElement(Input__default.a, {
          id: "bonusPercentageAddedByAdmin",
          value: submittedDeal && submittedDeal.bonusPercentageAddedByAdmin ? submittedDeal.bonusPercentageAddedByAdmin : _this2.props.dealBonus,
          className: external__classnames__default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled, classes.fullwidthInput),
          inputProps: {
            onInput: _this2.props.onBonusChange,
            className: submittedDeal.status === 'approved' ? classes.disabled : undefined
          },
          startAdornment: external__react__default.a.createElement(Input_["InputAdornment"], {
            position: "start"
          }, "%")
        })))), submittedDeal && submittedDeal.netAgentCommission && submittedDeal.status === 'approved' ? external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(Form_["FormControl"], {
          className: external__classnames__default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true
        }, external__react__default.a.createElement(Input_["InputLabel"], {
          htmlFor: "netAgentCommission",
          className: classes.disabled
        }, "Net Agent Commission"), external__react__default.a.createElement(Input__default.a, {
          id: "netAgentCommission",
          value: submittedDeal && submittedDeal.netAgentCommission ? Object(utils_Math["a" /* padStringToDecimalString */])(Number(submittedDeal.netAgentCommission).toLocaleString()) : null,
          className: external__classnames__default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: external__react__default.a.createElement(Input_["InputAdornment"], {
            position: "start"
          }, "$")
        })))) : null, (_this2.props.userRole === userTypes["admin"] || _this2.props.userRole === userTypes["superAdmin"]) && submittedDeal && submittedDeal.netCompanyCommission && submittedDeal.status === 'approved' ? external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(Form_["FormControl"], {
          className: external__classnames__default()(classes.disabled),
          disabled: true,
          fullWidth: true
        }, external__react__default.a.createElement(Input_["InputLabel"], {
          htmlFor: "netCompanyCommission",
          className: classes.disabled
        }, "Net Company Commission"), external__react__default.a.createElement(Input__default.a, {
          id: "netCompanyCommission",
          value: submittedDeal && submittedDeal.netCompanyCommission ? Object(utils_Math["a" /* padStringToDecimalString */])(Number(submittedDeal.netCompanyCommission).toLocaleString()) : null,
          className: external__classnames__default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: external__react__default.a.createElement(Input_["InputAdornment"], {
            position: "start"
          }, "$")
        })))) : null));
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
      }, "Finishing submission...")) : null, isUploadingFile ? external__react__default.a.createElement("div", {
        className: classes.progressBarWrapper
      }, external__react__default.a.createElement(external__react_circular_progressbar__default.a, {
        className: classes.progressBar,
        percentage: uplodingFileProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingFileProgress / 100, ")")
          }
        }
      }), external__react__default.a.createElement("div", {
        className: classes.progressBarExplanation
      }, uplodingFileText || 'Uploading file picture...')) : null, external__react__default.a.createElement(external__react_images__default.a, {
        images: this.state.lightboxType === 'agencyDisclosure' ? this.returnAgencyDisclosureURL() : this.returnContractLeaseURLS(),
        isOpen: this.state.lightboxIsOpen,
        onClose: this.closeLightbox,
        onClickPrev: this.onClickPrev,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentLightBoxIndex,
        backdropClosesModal: true
      }));
    }
  }]);

  return SubmitDealForm;
}(external__react_["Component"])) || _class;

/* harmony default export */ var forms_SubmitDealForm = __webpack_exports__["a"] = (Object(styles_["withStyles"])(SubmitDealForm_styles)(SubmitDealForm_SubmitDealForm));

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__(6);


var query = "\n  mutation getDealFileUploadsSignedURLS($input: [GetSignedURLSInput!]!) {\n    getDealFileUploadsSignedURLS(input: $input) {\n      dealID\n      items {\n        itemName\n        fileName\n        signedURL\n        uuid\n        error\n      }\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var getDealUploadsSignedURLS = function getDealUploadsSignedURLS(values) {
  var res;
  var error;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    dealID: null,
    items: null,
    error: error
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.getDealFileUploadsSignedURLS;
    var items = data.items,
        dealID = data.dealID;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.items = items;
      finalResponseObj.dealID = dealID;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getDealUploadsSignedURLS);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var uploadFile = function uploadFile(_ref) {
  var url = _ref.url,
      file = _ref.file,
      onUploadProgress = _ref.onUploadProgress,
      httpVerb = _ref.httpVerb;
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a[httpVerb || 'put'](url, file, {
    headers: {
      'Content-Type': file.type
    },
    onUploadProgress: onUploadProgress
  });
};

/* harmony default export */ __webpack_exports__["a"] = (uploadFile);

/***/ }),
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__(6);


var query = "\n  mutation acceptDeal($input: AcceptDealInput!) {\n    acceptDeal(input: $input) {\n      deal {\n        dealID\n        date\n        agentName\n        agentType\n        leadSource\n        dealType\n        propertyAddress\n        state\n        city\n        apartmentNumber\n        managementOrCobrokeCompany\n        price\n        clientName\n        clientEmail\n        paymentsTotal\n        deductionsTotal\n        total\n        agentNotes\n        status\n        bonusPercentageAddedByAdmin\n        netAgentCommission\n        netCompanyCommission\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var acceptDeal = function acceptDeal(dealID, bonusPercentageAddedByAdmin) {
  var res;
  var variables = {
    input: {
      uuid: dealID,
      bonusPercentageAddedByAdmin: bonusPercentageAddedByAdmin
    }
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.acceptDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (acceptDeal);

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

module.exports = require("set-value");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("@nivo/pie");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("@nivo/bar");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("@nivo/line");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return residentialRental; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return residentialSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commercialRental; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commercialSale; });
var residentialRental = 'Residential Rental';
var residentialSale = 'Residential Sale';
var commercialRental = 'Commercial Rental';
var commercialSale = 'Commercial Sale';

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return returnMonthlyDollarDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return returnMonthlyDealNumberDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return returnNumberDealsDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return returnYearlyDollarDealsDataContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var returnMonthlyDollarDataContainer = function returnMonthlyDollarDataContainer() {
  return {
    Jan: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Feb: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Mar: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Apr: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    May: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    June: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Jul: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Aug: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Sep: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Oct: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Nov: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Dec: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    }
  };
};
var returnMonthlyDealNumberDataContainer = function returnMonthlyDealNumberDataContainer() {
  return {
    Jan: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Feb: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Mar: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Apr: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    May: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    June: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Jul: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Aug: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Sep: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Oct: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Nov: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Dec: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    }
  };
};
var returnNumberDealsDataContainer = function returnNumberDealsDataContainer() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_0_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    };
  });
  return data;
};
var returnYearlyDollarDealsDataContainer = function returnYearlyDollarDealsDataContainer() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_0_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    };
  });
  return data;
};

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "material-ui/Dialog"
var Dialog_ = __webpack_require__(41);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(28);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(15);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(31);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Menu"
var Menu_ = __webpack_require__(65);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(108);
var MenuItem__default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(64);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: ./components/forms/SubmitDealForm/index.js + 1 modules
var SubmitDealForm = __webpack_require__(133);

// EXTERNAL MODULE: ./effects/deals/getDealUploadsSignedURLS.js
var getDealUploadsSignedURLS = __webpack_require__(135);

// EXTERNAL MODULE: ./effects/uploadFile.js
var uploadFile = __webpack_require__(136);

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(5);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(6);

// CONCATENATED MODULE: ./effects/deals/updateDeal.js


var query = "\n  mutation updateDeal($input: UpdateDealInput!) {\n    updateDeal(input: $input) {\n      deal {\n        dealID\n        date\n        dealType\n        clientName\n        clientEmail\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n        status\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var updateDeal = function updateDeal(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.updateDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var deals_updateDeal = (updateDeal);
// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(12);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// CONCATENATED MODULE: ./containers/ViewDealForm.js
var _class;

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query viewDealForm($uuid: String!) {\n    viewDealForm(uuid: $uuid) {\n      formSelectItems\n      agents {\n        firstName\n        lastName\n        uuid\n      }\n      deal {\n        dealID\n        date\n        agentName\n        otherAgents {\n          agentID\n          agentName\n        }\n        agentType\n        leadSource\n        dealType\n        propertyAddress\n        state\n        city\n        apartmentNumber\n        managementOrCobrokeCompany\n        price\n        clientName\n        clientEmail\n        paymentItems {\n          paymentType\n          checkOrTransactionNumber\n          amount\n        }\n        paymentsTotal\n        deductionItems {\n          deductionType\n          description\n          amount\n        }\n        deductionsTotal\n        total\n        agentNotes\n        agencyDisclosureForm\n        contractOrLeaseForms\n        agentPaymentType\n        ACHAccountNumber\n        fundsPaidBy\n        alreadyTurnedFundsIn\n        shouldSendApprovalTextMessageNotification\n        status\n        bonusPercentageAddedByAdmin\n        netAgentCommission\n        netCompanyCommission\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Loader = external__react_spinners_["BounceLoader"];
var viewDealFormQuery = external__graphql_tag__default()(_templateObject);

var ViewDealForm_ViewDealFormContainer = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewDealFormContainer, _Component);

  function ViewDealFormContainer(props) {
    var _this;

    _classCallCheck(this, ViewDealFormContainer);

    _this = _possibleConstructorReturn(this, (ViewDealFormContainer.__proto__ || Object.getPrototypeOf(ViewDealFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "uploadItemsNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemsUploaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deductionAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value2) {
        _value2 = Number(_value2);

        var deductionsTotal = _this.getTotalDeductionsAmount({
          id: id,
          value: _value2 || 0
        });

        _this.setState({
          deductionAmountItems: _objectSpread({}, _this.state.deductionAmountItems, _defineProperty({}, id, _value2 || 0)),
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalDeductionsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state2 = _this.state,
            deductionAmountItems = _this$state2.deductionAmountItems,
            permanentDeductionSubtractions = _this$state2.permanentDeductionSubtractions;
        Object.keys(deductionAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += deductionAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentDeductionSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractDeductionValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deduction) {
        var deductionsTotal = _this.getTotalDeductionsAmount() - deduction;

        _this.setState({
          permanentDeductionSubtractions: _this.state.permanentDeductionSubtractions + deduction,
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAgencyDisclosureForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          agencyDisclosureForm: file
        });

        if (!file) {
          var uploadBtn = document.getElementById('agencyDisclosureUploadForm');

          if (uploadBtn) {
            uploadBtn.value = null;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setContractOrLeaseForms", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject) {
        if (Array.isArray(filesObject)) {
          _this.setState({
            contractOrLeaseForms: filesObject
          });

          if (filesObject.length === 0) {
            var uploadBtn = document.getElementById('contractOrLeaseItemsUploadForm');

            if (uploadBtn) {
              uploadBtn.value = null;
            }
          }

          return;
        }

        var fileArray = Object.keys(filesObject).map(function (key) {
          return filesObject[key];
        });

        _this.setState({
          contractOrLeaseForms: fileArray
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state3.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(stringUtils["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setInitialContainerState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var paymentsTotal = _ref.paymentsTotal,
            deductionsTotal = _ref.deductionsTotal,
            total = _ref.total;

        _this.setState({
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state4 = _this.state,
            contractOrLeaseForms = _this$state4.contractOrLeaseForms,
            agencyDisclosureForm = _this$state4.agencyDisclosureForm,
            addedManagementCompanies = _this$state4.addedManagementCompanies,
            hasSetNewMgmtOrCobrokeCompany = _this$state4.hasSetNewMgmtOrCobrokeCompany,
            paymentsTotal = _this$state4.paymentsTotal,
            deductionsTotal = _this$state4.deductionsTotal,
            total = _this$state4.total;

        var returnObject = _objectSpread({}, values, {
          addedManagementCompanies: addedManagementCompanies,
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total,
          agencyDisclosureForm: null,
          contractOrLeaseForms: [],
          dealID: _this.props.dealID
        });

        delete returnObject.contractOrLeaseItems;
        delete returnObject.deductionsSubtotal;
        delete returnObject.paymentsSubtotal;
        delete returnObject.financialsTotal;
        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        delete returnObject.otherAgents;

        if (_this.props.userRole !== userTypes["admin"] && _this.props.userRole !== userTypes["superAdmin"]) {
          delete returnObject.bonusPercentageAddedByAdmin;
        }

        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        returnObject.deductionItems = returnObject.deductionItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        var uploadItems = [];

        if (agencyDisclosureForm) {
          uploadItems.push({
            itemName: 'agencyDisclosureForm',
            fileName: agencyDisclosureForm.name,
            fileType: agencyDisclosureForm.type
          });
        }

        if (contractOrLeaseForms && contractOrLeaseForms.length) {
          contractOrLeaseForms.forEach(function (file, i) {
            uploadItems.push({
              itemName: "contractOrLeaseForm".concat(i),
              fileName: file.name,
              fileType: file.type
            });
          });
        }

        if (!uploadItems.length) {
          _this.setState({
            submittingFormToServer: true
          });

          deals_updateDeal(returnObject).then(function (res) {
            var failed = false;

            if (res.otherError) {
              _this.props.openRequestErrorSnackbar(res.otherError);

              failed = true;
            }

            if (res.userErrors.length) {
              failed = true;
            }

            if (!failed) {
              _this.props.setDealSuccessfullySubmitted(res.deal);
            }

            _this.setState({
              submittingFormToServer: false
            });

            _this.props.setFormSubmitted(false);
          }).catch(function (err) {
            _this.props.setFormSubmitted(false);

            _this.props.openRequestErrorSnackbar();
          });
          return;
        }

        Object(getDealUploadsSignedURLS["a" /* default */])(uploadItems).then(function (response) {
          if (response.error) {
            _this.props.openRequestErrorSnackbar(response.error);

            return;
          }

          var errors = [];
          var items = response.items;
          returnObject.dealID = _this.props.dealID;
          items.forEach(function (item) {
            if (item.error) errors.push(item.error);
          });

          if (errors.length) {
            _this.props.openRequestErrorSnackbar(errors[0]);

            return;
          }

          _this.uploadItemsNum = items.length;

          var recursiveUploads = function recursiveUploads(items, returnObject, thisRef) {
            var uploadItemsNum = items.length;
            var uploadItemIndex = 0;
            recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef);
          };

          var recursiveHelper = function recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef) {
            if (uploadItemIndex >= items.length) {
              thisRef.setState({
                isUploadingFile: false,
                uplodingFileProgress: 0,
                filesUploadedSuccessfully: true,
                submittingFormToServer: true
              });
              deals_updateDeal(returnObject).then(function (res) {
                var failed = false;

                if (res.otherError) {
                  _this.props.openRequestErrorSnackbar(res.otherError);

                  failed = true;
                }

                if (res.userErrors.length) {
                  failed = true;
                }

                if (!failed) {
                  _this.props.setDealSuccessfullySubmitted(res.deal);
                }

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar();
              });
              return;
            }

            var item = items[uploadItemIndex];
            var file;
            var fileIndex;

            if (item.itemName === 'agencyDisclosureForm') {
              file = thisRef.state.agencyDisclosureForm;
              returnObject.agencyDisclosureForm = item.fileName;
            } else {
              fileIndex = item.itemName.slice(-1);
              file = thisRef.state.contractOrLeaseForms[fileIndex];
              returnObject.contractOrLeaseForms.push(item.fileName);
            }

            Object(uploadFile["a" /* default */])({
              file: file,
              url: item.signedURL,
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;
                thisRef.setState({
                  formSubmissionBegun: true,
                  uplodingFileProgress: Math.floor(loadedPercent),
                  uplodingFileText: "Now uploading file ".concat(uploadItemIndex + 1, " of ").concat(uploadItemsNum, "..."),
                  isUploadingFile: true
                });
              }
            }).then(function () {
              return recursiveHelper(items, uploadItemIndex + 1, uploadItemsNum, returnObject, thisRef);
            }).catch(function (err) {
              return _this.props.openRequestErrorSnackbar();
            });
          };

          recursiveUploads(items, returnObject, _assertThisInitialized(_this));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);

        _this.props.setFormSubmitted(false);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0,
      // not submitted
      permanentDeductionSubtractions: 0,
      // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      uplodingFileProgress: 0,
      isUploadingFile: false,
      uplodingFileText: '',
      filesUploadedSuccessfully: null,
      formSubmissionBegun: false,
      submittingFormToServer: false,
      dealBonus: '0'
    };
    return _this;
  }

  _createClass(ViewDealFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          dealID = _props.dealID,
          isEditingDeal = _props.isEditingDeal,
          isViewType = _props.isViewType,
          rest = _objectWithoutProperties(_props, ["userUUID", "dealID", "isEditingDeal", "isViewType"]);

      var _state = this.state,
          agencyDisclosureForm = _state.agencyDisclosureForm,
          contractOrLeaseForms = _state.contractOrLeaseForms;
      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: viewDealFormQuery,
        variables: {
          uuid: dealID
        },
        fetchPolicy: "cache-and-network"
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        }));

        if (error) {
          console.log(error);
          return external__react__default.a.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$viewDealForm = data.viewDealForm,
            deal = _data$viewDealForm.deal,
            agentItems = _data$viewDealForm.agents,
            formSelectItems = _data$viewDealForm.formSelectItems;
        var agents = agentItems || [];
        var submittedDeal = deal;
        return external__react__default.a.createElement(SubmitDealForm["a" /* default */], _extends({
          setInitialContainerState: _this2.setInitialContainerState,
          paymentsTotal: "".concat(_this2.state.paymentsTotal),
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          submittedDeal: submittedDeal,
          agents: agents.filter(function (agent) {
            return uuid ? agent.uuid !== uuid : agent;
          }),
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          setAgencyDisclosureForm: _this2.setAgencyDisclosureForm,
          setContractOrLeaseForms: _this2.setContractOrLeaseForms,
          agencyDisclosureForm: agencyDisclosureForm,
          contractOrLeaseForms: contractOrLeaseForms,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          uplodingFileProgress: _this2.state.uplodingFileProgress,
          isUploadingFile: _this2.state.isUploadingFile,
          uplodingFileText: _this2.state.uplodingFileText,
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer || _this2.props.submittingRequestToServer,
          isEditingDeal: isEditingDeal,
          isViewType: isViewType,
          userRole: _this2.props.userRole,
          onBonusChange: _this2.props.onBonusChange,
          dealBonus: _this2.props.dealBonus,
          resetDealBonus: _this2.props.resetDealBonus,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany,
          deductionAmountChangeHandler: _this2.deductionAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          subtractDeductionValueFromState: _this2.subtractDeductionValueFromState
        }, rest));
      });
    }
  }]);

  return ViewDealFormContainer;
}(external__react_["Component"])) || _class;

/* harmony default export */ var ViewDealForm = (ViewDealForm_ViewDealFormContainer);
// EXTERNAL MODULE: ./effects/deals/acceptDeal.js
var acceptDeal = __webpack_require__(141);

// EXTERNAL MODULE: ./effects/deals/deleteDeal.js
var deleteDeal = __webpack_require__(129);

// CONCATENATED MODULE: ./components/ViewDealDialogBox/index.js
var ViewDealDialogBox__class;

function ViewDealDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ViewDealDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { ViewDealDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ViewDealDialogBox__typeof(obj); }

function ViewDealDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ViewDealDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ViewDealDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) ViewDealDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) ViewDealDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function ViewDealDialogBox__possibleConstructorReturn(self, call) { if (call && (ViewDealDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return ViewDealDialogBox__assertThisInitialized(self); }

function ViewDealDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ViewDealDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

















var networkErrorMessage = "We're sorry. There was an error processing your request.";

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
      paddingTop: '32px'
    },
    editDealBtn: {
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
      }
    },
    popupMenuTitle: {
      outline: 'none',
      padding: '12px 16px',
      width: 'auto',
      color: 'rgba(0, 0, 0, 0.87)',
      height: '24px',
      overflow: 'hidden',
      fontSize: '1rem',
      boxSizing: 'content-box',
      fontWeight: '400',
      lineHeight: '1.5em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      whiteSpace: 'nowrap',
      paddingLeft: '16px',
      textOverflow: 'ellipsis',
      paddingRight: '16px',
      borderBottom: '1px solid rgba(0,0,0,.1)',
      pointerEvents: 'none'
    },
    menuItem: {
      display: 'flex !important',
      justifyContent: 'center !important'
    },
    menuItemDelete: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.palette.secondary.light, " !important"),
        color: '#fff !important'
      }
    },
    menuItemAccept: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.custom.submitBlue.light, " !important"),
        color: '#fff !important'
      }
    },
    snackBar: {
      marginBottom: '60px',
      '@media (max-height: 500px)': {
        marginBottom: '50px'
      },
      '@media (max-height: 390px)': {
        marginBottom: '30px'
      }
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var ViewDealDialogBox_SubmitDealDialogBox = Object(external__mobx_react_["observer"])(ViewDealDialogBox__class =
/*#__PURE__*/
function (_Component) {
  ViewDealDialogBox__inherits(SubmitDealDialogBox, _Component);

  function SubmitDealDialogBox(props) {
    var _this;

    ViewDealDialogBox__classCallCheck(this, SubmitDealDialogBox);

    _this = ViewDealDialogBox__possibleConstructorReturn(this, (SubmitDealDialogBox.__proto__ || Object.getPrototypeOf(SubmitDealDialogBox)).call(this, props));
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          isEditingDeal: false
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
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
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "toggleEditingDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingDeal: typeof bool === 'boolean' ? bool : !_this.state.isEditingDeal
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "handleCancelMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          cancelAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "handleCancelMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          cancelAnchorEl: null
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "handleAcceptMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          acceptAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "handleAcceptMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          acceptAnchorEl: null
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "onBonusChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var dollarRegex = /^\d*(\.\d*)?$/;
        var val = target.value;
        if (!dollarRegex.test(val)) return;

        _this.setState({
          dealBonus: val
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "resetDealBonus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealBonus: ''
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "acceptDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        var dealBonus = _this.state.dealBonus;

        _this.toggleSubmittingRequestToServer(true);

        Object(acceptDeal["a" /* default */])(dealID, Number(dealBonus) ? Number(dealBonus) : undefined).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);

            return;
          } else if (res.userErrors.length) {
            _this.openRequestErrorSnackbar(res.userErrors[0]);

            return;
          }

          _this.props.dealAccepted(dealID);
        }).catch(function (err) {
          _this.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "deleteDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.toggleSubmittingRequestToServer(true);

        Object(deleteDeal["a" /* default */])(dealID).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);

            return;
          }

          _this.props.dealDeleted(dealID);
        }).catch(function (err) {
          _this.toggleSubmittingRequestToServer(true);

          _this.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(ViewDealDialogBox__assertThisInitialized(_this), "toggleSubmittingRequestToServer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.submittingRequestToServer;

        _this.setState({
          submittingRequestToServer: bool,
          formSubmitted: bool
        });
      }
    });
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      isEditingDeal: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
      dealBonus: '',
      submittingRequestToServer: false,
      isErrorSnackbar: false
    };
    return _this;
  }

  ViewDealDialogBox__createClass(SubmitDealDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeDealsViewDialogBox = _props.closeDealsViewDialogBox,
          dealsViewDialogBoxOpen = _props.dealsViewDialogBoxOpen,
          setDealSuccessfullySubmitted = _props.setDealSuccessfullySubmitted,
          viewingDealID = _props.viewingDealID,
          viewingDealStatus = _props.viewingDealStatus;
      var _state = this.state,
          isEditingDeal = _state.isEditingDeal,
          cancelAnchorEl = _state.cancelAnchorEl,
          acceptAnchorEl = _state.acceptAnchorEl;
      return external__react__default.a.createElement(Dialog__default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: dealsViewDialogBoxOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "View Deal"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        }
      }, external__react__default.a.createElement(ViewDealForm, {
        userUUID: this.props.userUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setDealSuccessfullySubmitted: setDealSuccessfullySubmitted,
        dealID: viewingDealID,
        isEditingDeal: isEditingDeal,
        isViewType: true,
        userRole: this.props.userRole,
        dealAccepted: this.props.dealAccepted,
        onBonusChange: this.onBonusChange,
        dealBonus: this.state.dealBonus,
        resetDealBonus: this.resetDealBonus,
        submittingRequestToServer: this.state.submittingRequestToServer,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar
      }), external__react__default.a.createElement(Snackbar__default.a, {
        classes: {
          root: external__classnames__default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: 4000,
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
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          _this2.toggleEditingDeal(false);

          closeDealsViewDialogBox();
        },
        color: "primary"
      }, "Cancel"), this.props.userRole === userTypes["agent"] && viewingDealStatus === 'pending' || this.props.userRole === userTypes["superAdmin"] || this.props.userRole === userTypes["admin"] ? external__react__default.a.createElement(Button__default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary"
      }, "Delete") : null, external__react__default.a.createElement(Menu__default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose
      }, external__react__default.a.createElement("div", {
        className: classes.popupMenuTitle
      }, "Are you sure?"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItemDelete
        },
        onClick: function onClick() {
          _this2.handleCancelMenuClose();

          _this2.deleteDeal(viewingDealID);
        }
      }, "Yes"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose
      }, "No")), !isEditingDeal && this.props.userRole === userTypes["agent"] && viewingDealStatus === 'pending' ? external__react__default.a.createElement(Button__default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          return _this2.toggleEditingDeal(true);
        },
        color: "primary"
      }, "Edit") : null, (this.props.userRole === userTypes["admin"] || this.props.userRole === userTypes["superAdmin"]) && viewingDealStatus === 'pending' ? external__react__default.a.createElement(Button__default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary"
      }, "Accept Deal") : null, external__react__default.a.createElement(Menu__default.a, {
        id: "simple-menu",
        anchorEl: acceptAnchorEl,
        open: Boolean(acceptAnchorEl),
        onClose: this.handleAcceptMenuClose
      }, external__react__default.a.createElement("div", {
        className: classes.popupMenuTitle
      }, "Are you sure?"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleAcceptMenuClose();

          _this2.acceptDeal(viewingDealID);
        }
      }, "Yes"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose
      }, "No")), isEditingDeal ? external__react__default.a.createElement(Button__default.a, {
        disabled: this.state.formSubmitted,
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
      }, "Submit") : null) : null);
    }
  }]);

  return SubmitDealDialogBox;
}(external__react_["Component"])) || ViewDealDialogBox__class;

/* harmony default export */ var ViewDealDialogBox = __webpack_exports__["a"] = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(styles)(ViewDealDialogBox_SubmitDealDialogBox)));

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
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

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(31);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Tooltip"
var Tooltip_ = __webpack_require__(13);
var Tooltip__default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(33);
var Add__default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Equalizer"
var Equalizer_ = __webpack_require__(132);
var Equalizer__default = /*#__PURE__*/__webpack_require__.n(Equalizer_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(28);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(15);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(64);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "material-ui/Dialog"
var Dialog_ = __webpack_require__(41);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: ./components/forms/SubmitDealForm/index.js + 1 modules
var SubmitDealForm = __webpack_require__(133);

// EXTERNAL MODULE: ./effects/deals/getDealUploadsSignedURLS.js
var getDealUploadsSignedURLS = __webpack_require__(135);

// EXTERNAL MODULE: ./effects/uploadFile.js
var uploadFile = __webpack_require__(136);

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(5);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(6);

// CONCATENATED MODULE: ./effects/deals/submitDeal.js


var query = "\n  mutation submitDeal($input: SubmitDealInput!) {\n    submitDeal(input: $input) {\n      deal {\n        dealID\n        date\n        dealType\n        clientName\n        clientEmail\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n        status\n        total\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var submitDeal = function submitDeal(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.submitDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var deals_submitDeal = (submitDeal);
// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// CONCATENATED MODULE: ./containers/SubmitDealForm.js
var _class;

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealForm($uuid: String) {\n    dealForm(uuid: $uuid) {\n      agent {\n        firstName\n        lastName\n        role\n        agent {\n          agentType\n          state\n          ACHAccountNumber\n        }\n      }\n      agents {\n        firstName\n        lastName\n        uuid\n      }\n      formSelectItems\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Loader = external__react_spinners_["BounceLoader"];
var dealFormQuery = external__graphql_tag__default()(_templateObject);

var SubmitDealForm_SubmitDealFormContainer = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealFormContainer, _Component);

  function SubmitDealFormContainer(props) {
    var _this;

    _classCallCheck(this, SubmitDealFormContainer);

    _this = _possibleConstructorReturn(this, (SubmitDealFormContainer.__proto__ || Object.getPrototypeOf(SubmitDealFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "uploadItemsNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemsUploaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deductionAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value2) {
        _value2 = Number(_value2);

        var deductionsTotal = _this.getTotalDeductionsAmount({
          id: id,
          value: _value2 || 0
        });

        _this.setState({
          deductionAmountItems: _objectSpread({}, _this.state.deductionAmountItems, _defineProperty({}, id, _value2 || 0)),
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalDeductionsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state2 = _this.state,
            deductionAmountItems = _this$state2.deductionAmountItems,
            permanentDeductionSubtractions = _this$state2.permanentDeductionSubtractions;
        Object.keys(deductionAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += deductionAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentDeductionSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractDeductionValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deduction) {
        var deductionsTotal = _this.getTotalDeductionsAmount() - deduction;

        _this.setState({
          permanentDeductionSubtractions: _this.state.permanentDeductionSubtractions + deduction,
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAgencyDisclosureForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          agencyDisclosureForm: file
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setContractOrLeaseForms", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject) {
        if (Array.isArray(filesObject)) {
          _this.setState({
            contractOrLeaseForms: filesObject
          });

          if (filesObject.length === 0) {
            var uploadBtn = document.getElementById('contractOrLeaseItemsUploadForm');

            if (uploadBtn) {
              uploadBtn.value = null;
            }
          }

          return;
        }

        var fileArray = Object.keys(filesObject).map(function (key) {
          return filesObject[key];
        });

        _this.setState({
          contractOrLeaseForms: fileArray
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state3.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(stringUtils["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAgentPaymentTypeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var value = target.value;
        var isACH = value === 'Please ACH me';

        if (isACH) {
          _this.setState({
            agentPaymentTypeIsACH: true
          });
        } else {
          _this.setState({
            agentPaymentTypeIsACH: false
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state4 = _this.state,
            contractOrLeaseForms = _this$state4.contractOrLeaseForms,
            agencyDisclosureForm = _this$state4.agencyDisclosureForm,
            addedManagementCompanies = _this$state4.addedManagementCompanies,
            hasSetNewMgmtOrCobrokeCompany = _this$state4.hasSetNewMgmtOrCobrokeCompany,
            paymentsTotal = _this$state4.paymentsTotal,
            deductionsTotal = _this$state4.deductionsTotal,
            total = _this$state4.total;

        var returnObject = _objectSpread({}, values, {
          otherAgents: values.otherAgents || [],
          addedManagementCompanies: addedManagementCompanies,
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total,
          agencyDisclosureForm: null,
          contractOrLeaseForms: [],
          dealID: null
        });

        delete returnObject.contractOrLeaseItems;
        delete returnObject.deductionsSubtotal;
        delete returnObject.paymentsSubtotal;
        delete returnObject.financialsTotal;
        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        returnObject.deductionItems = returnObject.deductionItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        var uploadItems = [{
          itemName: 'agencyDisclosureForm',
          fileName: agencyDisclosureForm.name,
          fileType: agencyDisclosureForm.type
        }];

        if (contractOrLeaseForms && contractOrLeaseForms.length) {
          contractOrLeaseForms.forEach(function (file, i) {
            uploadItems.push({
              itemName: "contractOrLeaseForm".concat(i),
              fileName: file.name,
              fileType: file.type
            });
          });
        }

        Object(getDealUploadsSignedURLS["a" /* default */])(uploadItems).then(function (response) {
          if (response.error) {
            _this.props.openRequestErrorSnackbar(response.error);

            _this.props.setFormSubmitted(false);

            return;
          }

          var errors = [];
          var items = response.items,
              dealID = response.dealID;
          returnObject.dealID = dealID;
          items.forEach(function (item) {
            if (item.error) errors.push(item.error);
          });

          if (errors.length) {
            _this.props.openRequestErrorSnackbar(errors[0]);

            _this.props.setFormSubmitted(false);

            return;
          }

          _this.uploadItemsNum = items.length;

          var recursiveUploads = function recursiveUploads(items, returnObject, thisRef) {
            var uploadItemsNum = items.length;
            var uploadItemIndex = 0;
            recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef);
          };

          var recursiveHelper = function recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef) {
            if (uploadItemIndex >= items.length) {
              thisRef.setState({
                isUploadingFile: false,
                uplodingFileProgress: 0,
                filesUploadedSuccessfully: true,
                submittingFormToServer: true
              });
              deals_submitDeal(returnObject).then(function (res) {
                var failed = false;

                if (res.otherError) {
                  _this.props.openRequestErrorSnackbar(res.otherError);

                  failed = true;
                }

                if (res.userErrors.length) {
                  failed = true;
                }

                if (!failed) {
                  _this.props.setDealSuccessfullySubmitted(res.deal);
                }

                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar();
              });
              return;
            }

            var item = items[uploadItemIndex];
            var file;
            var fileIndex;

            if (item.itemName === 'agencyDisclosureForm') {
              file = thisRef.state.agencyDisclosureForm;
              returnObject.agencyDisclosureForm = item.fileName;
            } else {
              fileIndex = item.itemName.slice(-1);
              file = thisRef.state.contractOrLeaseForms[fileIndex];
              returnObject.contractOrLeaseForms.push(item.fileName);
            }

            Object(uploadFile["a" /* default */])({
              file: file,
              url: item.signedURL,
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;
                thisRef.setState({
                  formSubmissionBegun: true,
                  uplodingFileProgress: Math.floor(loadedPercent),
                  uplodingFileText: "Now uploading file ".concat(uploadItemIndex + 1, " of ").concat(uploadItemsNum, "..."),
                  isUploadingFile: true
                });
              }
            }).then(function (res) {
              var status = "".concat(res.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  submittingFormToServer: false,
                  isUploadingFile: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar('There was an error uploading your files. Please try again shortly.');

                return;
              }

              return recursiveHelper(items, uploadItemIndex + 1, uploadItemsNum, returnObject, thisRef);
            }).catch(function (err) {
              _this.setState({
                submittingFormToServer: false,
                isUploadingFile: false
              });

              _this.props.setFormSubmitted(false);

              _this.props.openRequestErrorSnackbar();
            });
          };

          recursiveUploads(items, returnObject, _assertThisInitialized(_this));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0,
      // not submitted
      permanentDeductionSubtractions: 0,
      // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      uplodingFileProgress: 0,
      isUploadingFile: false,
      uplodingFileText: '',
      filesUploadedSuccessfully: null,
      formSubmissionBegun: false,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(SubmitDealFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          rest = _objectWithoutProperties(_props, ["userUUID"]);

      var _state = this.state,
          agencyDisclosureForm = _state.agencyDisclosureForm,
          contractOrLeaseForms = _state.contractOrLeaseForms;
      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: dealFormQuery,
        fetchPolicy: "cache-and-network"
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        }));

        if (error) {
          console.log(error);
          return external__react__default.a.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$dealForm = data.dealForm,
            agent = _data$dealForm.agent,
            agents = _data$dealForm.agents,
            formSelectItems = _data$dealForm.formSelectItems;
        return external__react__default.a.createElement(SubmitDealForm["a" /* default */], _extends({
          paymentsTotal: "".concat(_this2.state.paymentsTotal),
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          agent: agent,
          agents: agents.filter(function (agent) {
            return agent.uuid !== uuid;
          }),
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          setAgencyDisclosureForm: _this2.setAgencyDisclosureForm,
          setContractOrLeaseForms: _this2.setContractOrLeaseForms,
          agencyDisclosureForm: agencyDisclosureForm,
          contractOrLeaseForms: contractOrLeaseForms,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          uplodingFileProgress: _this2.state.uplodingFileProgress,
          isUploadingFile: _this2.state.isUploadingFile,
          uplodingFileText: _this2.state.uplodingFileText,
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany,
          deductionAmountChangeHandler: _this2.deductionAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          subtractDeductionValueFromState: _this2.subtractDeductionValueFromState,
          agentPaymentTypeIsACH: _this2.state.agentPaymentTypeIsACH,
          onAgentPaymentTypeChange: _this2.onAgentPaymentTypeChange
        }, rest));
      });
    }
  }]);

  return SubmitDealFormContainer;
}(external__react_["Component"])) || _class;

/* harmony default export */ var containers_SubmitDealForm = (SubmitDealForm_SubmitDealFormContainer);
// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./components/SubmitDealDialogBox/index.js
var SubmitDealDialogBox__class;

function SubmitDealDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SubmitDealDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { SubmitDealDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SubmitDealDialogBox__typeof(obj); }

function SubmitDealDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SubmitDealDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SubmitDealDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) SubmitDealDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) SubmitDealDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function SubmitDealDialogBox__possibleConstructorReturn(self, call) { if (call && (SubmitDealDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return SubmitDealDialogBox__assertThisInitialized(self); }

function SubmitDealDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SubmitDealDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var networkErrorMessage = "We're sorry. There was an error processing your request.";

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
      paddingTop: '32px'
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

var SubmitDealDialogBox_SubmitDealDialogBox = Object(external__mobx_react_["observer"])(SubmitDealDialogBox__class =
/*#__PURE__*/
function (_Component) {
  SubmitDealDialogBox__inherits(SubmitDealDialogBox, _Component);

  function SubmitDealDialogBox(props) {
    var _this;

    SubmitDealDialogBox__classCallCheck(this, SubmitDealDialogBox);

    _this = SubmitDealDialogBox__possibleConstructorReturn(this, (SubmitDealDialogBox.__proto__ || Object.getPrototypeOf(SubmitDealDialogBox)).call(this, props));
    Object.defineProperty(SubmitDealDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
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
    Object.defineProperty(SubmitDealDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(SubmitDealDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(SubmitDealDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
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
      snackbarUndoFunction: null,
      isErrorSnackbar: false
    };
    return _this;
  }

  SubmitDealDialogBox__createClass(SubmitDealDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          toggleDialogBoxOpen = _props.toggleDialogBoxOpen,
          submitDealDialogOpen = _props.submitDealDialogOpen,
          setDealSuccessfullySubmitted = _props.setDealSuccessfullySubmitted;
      return external__react__default.a.createElement(Dialog__default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: submitDealDialogOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "New Deal"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        }
      }, external__react__default.a.createElement(containers_SubmitDealForm, {
        userUUID: this.props.userUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setDealSuccessfullySubmitted: setDealSuccessfullySubmitted,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar
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
        disabled: this.state.formSubmitted,
        onClick: toggleDialogBoxOpen,
        color: "primary"
      }, "Cancel"), external__react__default.a.createElement(Button__default.a, {
        disabled: this.state.formSubmitted,
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

  return SubmitDealDialogBox;
}(external__react_["Component"])) || SubmitDealDialogBox__class;

/* harmony default export */ var components_SubmitDealDialogBox = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(styles)(SubmitDealDialogBox_SubmitDealDialogBox)));
// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(63);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(42);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "papaparse"
var external__papaparse_ = __webpack_require__(124);
var external__papaparse__default = /*#__PURE__*/__webpack_require__.n(external__papaparse_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(67);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid"
var dx_react_grid_ = __webpack_require__(97);
var dx_react_grid__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid-material-ui"
var dx_react_grid_material_ui_ = __webpack_require__(36);
var dx_react_grid_material_ui__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_material_ui_);

// EXTERNAL MODULE: external "react-icons/lib/md"
var md_ = __webpack_require__(55);
var md__default = /*#__PURE__*/__webpack_require__.n(md_);

// EXTERNAL MODULE: ./utils/backEndTableUtils/SelectFilterCell.js
var SelectFilterCell = __webpack_require__(125);

// EXTERNAL MODULE: ./utils/backEndTableUtils/tableSortingUtils.js
var tableSortingUtils = __webpack_require__(127);

// EXTERNAL MODULE: ./utils/backEndTableUtils/DefaultVirtualTableCell.js
var DefaultVirtualTableCell = __webpack_require__(98);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableComponent.js
var TableComponent = __webpack_require__(99);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableContainerComponent.js
var TableContainerComponent = __webpack_require__(100);

// EXTERNAL MODULE: ./utils/backEndTableUtils/NoDataCellComponent.js
var NoDataCellComponent = __webpack_require__(101);

// EXTERNAL MODULE: ./components/dataTableFormatters/ViewFormatter.js
var ViewFormatter = __webpack_require__(102);

// CONCATENATED MODULE: ./components/DealsTable/index.js
var _dec, _dec2, DealsTable__class;

function DealsTable__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DealsTable__typeof = function _typeof(obj) { return typeof obj; }; } else { DealsTable__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DealsTable__typeof(obj); }

function DealsTable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DealsTable__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DealsTable__createClass(Constructor, protoProps, staticProps) { if (protoProps) DealsTable__defineProperties(Constructor.prototype, protoProps); if (staticProps) DealsTable__defineProperties(Constructor, staticProps); return Constructor; }

function DealsTable__possibleConstructorReturn(self, call) { if (call && (DealsTable__typeof(call) === "object" || typeof call === "function")) { return call; } return DealsTable__assertThisInitialized(self); }

function DealsTable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DealsTable__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DealsTable__extends() { DealsTable__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DealsTable__extends.apply(this, arguments); }

















var DealsTable_styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
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
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      left: '-13px'
    },
    downloadCSVBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#646d64',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)'
      }
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'dealID',
  sortingEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.dealID;
};

var statusSelectInputItems = [{
  label: ''
}, {
  label: 'Pending'
}, {
  label: 'Approved'
}];

var DealsTable_FilterCell = function FilterCell(props) {
  if (props.column.name === 'status') {
    return external__react__default.a.createElement(SelectFilterCell["a" /* default */], DealsTable__extends({
      selectInputItems: statusSelectInputItems
    }, props));
  }

  return external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"].Cell, props);
};

var integratedSortingColumnExtensions = [{
  columnName: 'date',
  compare: tableSortingUtils["a" /* compareDate */]
}, {
  columnName: 'rentOrSalePrice',
  compare: tableSortingUtils["b" /* compareNumber */]
}];
var defaultColumnWidths = [{
  columnName: 'dealID',
  width: 120
}, {
  columnName: 'date',
  width: 120
}, {
  columnName: 'dealType',
  width: 120
}, {
  columnName: 'clientName',
  width: 140
}, {
  columnName: 'clientEmail',
  width: 140
}, {
  columnName: 'propertyAddress',
  width: 140
}, {
  columnName: 'propertyCity',
  width: 120
}, {
  columnName: 'managementOrCobrokeCompany',
  width: 160
}, {
  columnName: 'rentOrSalePrice',
  width: 100
}, {
  columnName: 'bonusPercentageAddedByAdmin',
  width: 120
}, {
  columnName: 'netAgentCommission',
  width: 170
}, {
  columnName: 'dealTotal',
  width: 170
}, {
  columnName: 'status',
  width: 120
}, {
  columnName: 'view',
  width: 80
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

var DealsTable_ViewCellFormatter = function ViewCellFormatter(_ref2) {
  var value = _ref2.value;
  return external__react__default.a.createElement(ViewFormatter["a" /* default */], {
    value: value
  });
};

var DealsTable_ViewTypeProvider = function ViewTypeProvider(props) {
  return external__react__default.a.createElement(dx_react_grid_["DataTypeProvider"], DealsTable__extends({
    formatterComponent: DealsTable_ViewCellFormatter
  }, props));
};

var DealsTable_DealsTable = (_dec = Object(styles_["withStyles"])(DealsTable_styles), _dec2 = external__react_sizes__default()(mapSizesToProps), _dec(DealsTable__class = _dec2(DealsTable__class =
/*#__PURE__*/
function (_Component) {
  DealsTable__inherits(DealsTable, _Component);

  function DealsTable(props) {
    var _this;

    DealsTable__classCallCheck(this, DealsTable);

    _this = DealsTable__possibleConstructorReturn(this, (DealsTable.__proto__ || Object.getPrototypeOf(DealsTable)).call(this, props));
    Object.defineProperty(DealsTable__assertThisInitialized(_this), "changePageSize", {
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
    Object.defineProperty(DealsTable__assertThisInitialized(_this), "currentPageChange", {
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

  DealsTable__createClass(DealsTable, [{
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
          convertDealsToCSV = _props.convertDealsToCSV,
          changeSelection = _props.changeSelection;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(dx_react_grid_material_ui_["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId
      }, external__react__default.a.createElement(DealsTable_ViewTypeProvider, {
        "for": ['view']
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["DragDropProvider"], null), external__react__default.a.createElement(dx_react_grid_["SearchState"], null), external__react__default.a.createElement(dx_react_grid_["FilteringState"], {
        columnExtensions: filteringStateColumnExtensions
      }), external__react__default.a.createElement(dx_react_grid_["SortingState"], {
        defaultSorting: [{
          columnName: 'date',
          direction: 'desc'
        }],
        columnExtensions: sortingStateColumnExtensions
      }), external__react__default.a.createElement(dx_react_grid_["SelectionState"], {
        selection: this.props.selection,
        onSelectionChange: changeSelection
      }), external__react__default.a.createElement(dx_react_grid_["PagingState"], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange
      }), external__react__default.a.createElement(dx_react_grid_["IntegratedFiltering"], null), external__react__default.a.createElement(dx_react_grid_["IntegratedSorting"], {
        columnExtensions: integratedSortingColumnExtensions
      }), external__react__default.a.createElement(dx_react_grid_["IntegratedSelection"], null), external__react__default.a.createElement(dx_react_grid_["IntegratedPaging"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["VirtualTable"], {
        height: external__is_browser__default.a ? window.innerHeight - 310 : undefined,
        tableComponent: TableComponent["a" /* default */],
        containerComponent: TableContainerComponent["a" /* default */],
        cellComponent: DefaultVirtualTableCell["a" /* default */],
        noDataCellComponent: NoDataCellComponent["a" /* default */]
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        })
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"], {
        cellComponent: DealsTable_FilterCell
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["Toolbar"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["SearchPanel"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["TableHeaderRow"], {
        showSortingControls: true
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableSelection"], {
        showSelectAll: true,
        selectByRowClick: true
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["PagingPanel"], {
        pageSizes: pageSizes
      })), rows && rows.length ? external__react__default.a.createElement(Tooltip__default.a, {
        title: "Download selected rows from table as CSV file.",
        enterDelay: 300,
        leaveDelay: 100
      }, external__react__default.a.createElement("span", {
        className: classes.editBtnsWrapper
      }, external__react__default.a.createElement("button", {
        className: classes.downloadCSVBtn,
        onClick: convertDealsToCSV
      }, external__react__default.a.createElement(md_["MdFileDownload"], null)))) : null);
    }
  }]);

  return DealsTable;
}(external__react_["Component"])) || DealsTable__class) || DealsTable__class);
/* harmony default export */ var components_DealsTable = (DealsTable_DealsTable);
// EXTERNAL MODULE: ./utils/debounce.js
var debounce = __webpack_require__(90);

// EXTERNAL MODULE: ./utils/Math.js
var utils_Math = __webpack_require__(70);

// CONCATENATED MODULE: ./containers/DealsTable.js
var containers_DealsTable__class;

function containers_DealsTable__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { containers_DealsTable__typeof = function _typeof(obj) { return typeof obj; }; } else { containers_DealsTable__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return containers_DealsTable__typeof(obj); }

function containers_DealsTable__extends() { containers_DealsTable__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return containers_DealsTable__extends.apply(this, arguments); }

function DealsTable__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DealsTable__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { DealsTable__defineProperty(target, key, source[key]); }); } return target; }

function DealsTable__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function containers_DealsTable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function containers_DealsTable__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function containers_DealsTable__createClass(Constructor, protoProps, staticProps) { if (protoProps) containers_DealsTable__defineProperties(Constructor.prototype, protoProps); if (staticProps) containers_DealsTable__defineProperties(Constructor, staticProps); return Constructor; }

function containers_DealsTable__possibleConstructorReturn(self, call) { if (call && (containers_DealsTable__typeof(call) === "object" || typeof call === "function")) { return call; } return containers_DealsTable__assertThisInitialized(self); }

function containers_DealsTable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function containers_DealsTable__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var chance = new external__chance__default.a();
var DealsTable_Loader = external__react_spinners_["DotLoader"];

var containers_DealsTable_styles = function styles(theme) {
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

var DealsTable_columns = [{
  name: 'dealID',
  title: 'Deal ID'
}, {
  name: 'date',
  title: 'Date'
}, {
  name: 'dealType',
  title: 'Deal Type'
}, {
  name: 'clientName',
  title: 'Client Name'
}, {
  name: 'clientEmail',
  title: 'Client Email'
}, {
  name: 'propertyAddress',
  title: 'Property Address'
}, {
  name: 'propertyCity',
  title: 'Property City'
}, {
  name: 'managementOrCobrokeCompany',
  title: 'Mgmt/Co-Broke Co.'
}, {
  name: 'rentOrSalePrice',
  title: 'Rent/Sale Price'
}, {
  name: 'bonusPercentageAddedByAdmin',
  title: "Agent's Bonus %"
}, {
  name: 'netAgentCommission',
  title: 'Net Commission'
}, {
  name: 'dealTotal',
  title: 'Deal Total'
}, {
  name: 'status',
  title: 'Status'
}, {
  name: 'view',
  title: 'View'
}];

var DealsTable_DealsTableContainer = Object(external__mobx_react_["observer"])(containers_DealsTable__class =
/*#__PURE__*/
function (_Component) {
  containers_DealsTable__inherits(DealsTableContainer, _Component);

  function DealsTableContainer(props) {
    var _this;

    containers_DealsTable__classCallCheck(this, DealsTableContainer);

    _this = containers_DealsTable__possibleConstructorReturn(this, (DealsTableContainer.__proto__ || Object.getPrototypeOf(DealsTableContainer)).call(this, props));
    Object.defineProperty(containers_DealsTable__assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.deals.map(function (deal) {
          var dealID = deal.dealID,
              date = deal.date,
              agentID = deal.agentID,
              dealType = deal.dealType,
              clientName = deal.clientName,
              clientEmail = deal.clientEmail,
              propertyAddress = deal.propertyAddress,
              city = deal.city,
              managementOrCobrokeCompany = deal.managementOrCobrokeCompany,
              price = deal.price,
              bonusPercentageAddedByAdmin = deal.bonusPercentageAddedByAdmin,
              netAgentCommission = deal.netAgentCommission,
              status = deal.status,
              total = deal.total;
          return {
            dealID: dealID,
            date: external__moment__default()(date).format('MM/DD/YYYY'),
            dealType: dealType,
            clientName: clientName,
            clientEmail: clientEmail,
            propertyAddress: propertyAddress,
            propertyCity: city,
            managementOrCobrokeCompany: managementOrCobrokeCompany,
            rentOrSalePrice: "$".concat(Number(price).toLocaleString()),
            bonusPercentageAddedByAdmin: status === 'pending' ? undefined : "%".concat(bonusPercentageAddedByAdmin),
            netAgentCommission: status === 'pending' ? undefined : "$".concat(Object(utils_Math["a" /* padStringToDecimalString */])(Number(netAgentCommission).toLocaleString())),
            dealTotal: "$".concat(Number(total).toLocaleString()),
            status: Object(stringUtils["a" /* capitalize */])(status),
            view: {
              type: 'action',
              onClick: function onClick() {
                return Object(debounce["a" /* default */])(_this.props.openDealsViewDialogBox.bind(null, dealID, status), 1000, true)();
              }
            }
          };
        });
      }
    });
    Object.defineProperty(containers_DealsTable__assertThisInitialized(_this), "convertDealsToCSV", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = _this.props.deals;
        var selection = _this.state.selection;
        if (!selection || !selection.length) return;
        var csvContent = external__papaparse__default.a.unparse(deals.filter(function (deal) {
          return selection.includes(deal.dealID);
        }).map(function (deal) {
          return DealsTable__objectSpread({}, deal, {
            date: external__moment__default()(deal.date).format('MM/DD/YYYY')
          });
        }), {
          header: true
        });

        if (_this._csvLink) {
          _this._csvLink.setAttribute('href', "data:text/csv;charset=utf-8,".concat(encodeURIComponent(csvContent)));

          _this._csvLink.setAttribute('download', 'deals_data.csv');

          _this._csvLink.click();
        }
      }
    });
    Object.defineProperty(containers_DealsTable__assertThisInitialized(_this), "changeSelection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(selection) {
        _this.setState({
          selection: selection
        });
      }
    });
    _this.state = {
      tableIsLoading: true,
      selection: []
    };
    return _this;
  }

  containers_DealsTable__createClass(DealsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          selection = _state.selection;

      var _props = this.props,
          classes = _props.classes,
          deals = _props.deals,
          rest = DealsTable__objectWithoutProperties(_props, ["classes", "deals"]);

      return external__react__default.a.createElement("div", {
        className: classes.root
      }, tableIsLoading ? external__react__default.a.createElement("div", {
        className: classes.progressWrapper,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 180px)'
        }
      }, external__react__default.a.createElement(DealsTable_Loader, {
        color: "#f44336",
        loading: true
      })) : null, external__react__default.a.createElement(components_DealsTable, containers_DealsTable__extends({}, rest, {
        convertDealsToCSV: this.convertDealsToCSV,
        changeSelection: this.changeSelection,
        selection: selection,
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: DealsTable_columns,
        rows: this.createRows()
      })), external__react__default.a.createElement("a", {
        href: "#",
        id: "csvLink",
        ref: function ref(_ref) {
          return _this2._csvLink = _ref;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        }
      }));
    }
  }]);

  return DealsTableContainer;
}(external__react_["Component"])) || containers_DealsTable__class;

/* harmony default export */ var containers_DealsTable = (Object(styles_["withStyles"])(containers_DealsTable_styles)(DealsTable_DealsTableContainer));
// EXTERNAL MODULE: external "set-value"
var external__set_value_ = __webpack_require__(145);
var external__set_value__default = /*#__PURE__*/__webpack_require__.n(external__set_value_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@nivo/pie"
var pie_ = __webpack_require__(146);
var pie__default = /*#__PURE__*/__webpack_require__.n(pie_);

// EXTERNAL MODULE: external "@nivo/bar"
var bar_ = __webpack_require__(147);
var bar__default = /*#__PURE__*/__webpack_require__.n(bar_);

// EXTERNAL MODULE: external "@nivo/line"
var line_ = __webpack_require__(148);
var line__default = /*#__PURE__*/__webpack_require__.n(line_);

// EXTERNAL MODULE: external "react-toggle-button"
var external__react_toggle_button_ = __webpack_require__(149);
var external__react_toggle_button__default = /*#__PURE__*/__webpack_require__.n(external__react_toggle_button_);

// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__(121);
var AttachMoney__default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);

// EXTERNAL MODULE: external "@material-ui/icons/Help"
var Help_ = __webpack_require__(122);
var Help__default = /*#__PURE__*/__webpack_require__.n(Help_);

// EXTERNAL MODULE: ./components/StatNumberBox/index.js
var StatNumberBox = __webpack_require__(123);

// CONCATENATED MODULE: ./components/DealsSummary/index.js
var DealsSummary__dec, DealsSummary__class;

function DealsSummary__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DealsSummary__typeof = function _typeof(obj) { return typeof obj; }; } else { DealsSummary__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DealsSummary__typeof(obj); }

function DealsSummary__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DealsSummary__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DealsSummary__createClass(Constructor, protoProps, staticProps) { if (protoProps) DealsSummary__defineProperties(Constructor.prototype, protoProps); if (staticProps) DealsSummary__defineProperties(Constructor, staticProps); return Constructor; }

function DealsSummary__possibleConstructorReturn(self, call) { if (call && (DealsSummary__typeof(call) === "object" || typeof call === "function")) { return call; } return DealsSummary__assertThisInitialized(self); }

function DealsSummary__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DealsSummary__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DealsSummary__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var DealsSummary_chance = new external__chance__default.a();

var DealsSummary_styles = function styles(theme) {
  var _graphWrapper;

  return {
    root: {
      maxWidth: '100%',
      fontFamily: theme.typography.fontFamily
    },
    graphWrapper: {
      position: 'relative',
      padding: '10px',
      height: '500px',
      maxHeight: '100%',
      maxWidth: '100%',
      backgroundColor: '#fff',
      fontSize: '12px',
      boxShadow: theme.shadows[1],
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center'
    },
    graphWrapper2: (_graphWrapper = {
      position: 'relative',
      padding: '10px',
      height: '500px'
    }, DealsSummary__defineProperty(_graphWrapper, theme.breakpoints.down('sm'), {
      height: '670px'
    }), DealsSummary__defineProperty(_graphWrapper, "maxHeight", '100%'), DealsSummary__defineProperty(_graphWrapper, "maxWidth", '100%'), DealsSummary__defineProperty(_graphWrapper, "backgroundColor", '#fff'), DealsSummary__defineProperty(_graphWrapper, "fontSize", '12px'), DealsSummary__defineProperty(_graphWrapper, "boxShadow", theme.shadows[1]), DealsSummary__defineProperty(_graphWrapper, "borderRadius", '5px'), DealsSummary__defineProperty(_graphWrapper, "display", 'flex'), DealsSummary__defineProperty(_graphWrapper, "justifyContent", 'center'), _graphWrapper),
    graphControlsWrapper: {
      position: 'absolute',
      padding: '6px 80px',
      bottom: '0',
      alignText: 'center',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    toggleWrapper: {
      marginRight: '20px'
    },
    graphControlsLabel: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
      color: 'rgba(0,0,0,.8)'
    },
    graphTitle: {
      position: 'absolute',
      top: 0,
      padding: '15px 10px',
      fontSize: '16px',
      fontWeight: 500,
      alignText: 'center',
      color: 'rgba(0,0,0,.7)',
      textDecoration: 'underline',
      transition: 'all .3s ease-in-out'
    },
    statNumberBoxWrapper: {
      width: '50%'
    },
    statBoxQuestionIcon: {
      fontSize: '40px',
      color: '#F57C00'
    },
    statBoxMoneyIcon: {
      fontSize: '40px',
      color: '#388E3C'
    }
  };
};

var generateMonthlyNumberDealsData = function generateMonthlyNumberDealsData() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var data = {};
  months.forEach(function (month) {
    data[month] = {
      'Com Sales': DealsSummary_chance.integer({
        min: 0,
        max: 3
      }) || 0.05,
      'Com Rentals': DealsSummary_chance.integer({
        min: 0,
        max: 15
      }) || 0.05,
      'Res Sales': DealsSummary_chance.integer({
        min: 0,
        max: 3
      }) || 0.05,
      'Res Rentals': DealsSummary_chance.integer({
        min: 0,
        max: 30
      }) || 0.05
    };
  });
  return data;
};

var DealsSummary_generateYearlyNumberDealsData = function generateYearlyNumberDealsData() {
  var currentYear = external__moment__default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': DealsSummary_chance.integer({
        min: 0,
        max: 36
      }) || 0.05,
      'Com Rentals': DealsSummary_chance.integer({
        min: 0,
        max: 180
      }) || 0.05,
      'Res Sales': DealsSummary_chance.integer({
        min: 0,
        max: 36
      }) || 0.05,
      'Res Rentals': DealsSummary_chance.integer({
        min: 0,
        max: 360
      }) || 0.05
    };
  });
  return data;
};

var DealsSummary_generateYearlyDollarDealsData = function generateYearlyDollarDealsData() {
  var currentYear = external__moment__default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Com Rentals': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Res Sales': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Res Rentals': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 3500000
      }) / 1000000, 2) || 0.001
    };
  });
  return data;
};

var DealsSummary_generateMonthlyDollarDealsData = function generateMonthlyDollarDealsData() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var data = {};
  months.forEach(function (month) {
    data[month] = {
      'Com Sales': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Com Rentals': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Res Sales': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Res Rentals': Object(utils_Math["b" /* round */])(DealsSummary_chance.integer({
        min: 0,
        max: 300000
      }) / 1000000, 2) || 0.001
    };
  });
  return data;
};

var generateMonthlyDealsBarData = function generateMonthlyDealsBarData(data) {
  return Object.keys(data).map(function (month) {
    return {
      month: month,
      'Com Sales': data[month]['Com Sales'],
      'Com Rentals': data[month]['Com Rentals'],
      'Res Sales': data[month]['Res Sales'],
      'Res Rentals': data[month]['Res Rentals']
    };
  });
};

var generateMonthlyDealsLineData = function generateMonthlyDealsLineData(data) {
  var types = ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'];
  return types.map(function (id) {
    return {
      id: id,
      data: Object.keys(data).map(function (month) {
        return {
          x: month,
          y: data[month][id]
        };
      })
    };
  });
};

var DealsSummary_mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var DealsSummary_AgentDashboard = (DealsSummary__dec = external__react_sizes__default()(DealsSummary_mapSizesToProps), Object(external__mobx_react_["observer"])(DealsSummary__class = DealsSummary__dec(DealsSummary__class =
/*#__PURE__*/
function (_Component) {
  DealsSummary__inherits(AgentDashboard, _Component);

  function AgentDashboard(props) {
    var _this;

    DealsSummary__classCallCheck(this, AgentDashboard);

    _this = DealsSummary__possibleConstructorReturn(this, (AgentDashboard.__proto__ || Object.getPrototypeOf(AgentDashboard)).call(this, props));
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleMonthlyDealsNumberLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsNumberLineGraphOn: !_this.state.monthlyDealsNumberLineGraphOn
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleMonthlyDealsDollarLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarLineGraphOn: !_this.state.monthlyDealsDollarLineGraphOn
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleMonthlyDealsDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarOrNum: _this.state.monthlyDealsDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleTotalDealsPieDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          totalDealsPieDollarOrNum: _this.state.totalDealsPieDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleYearlyDealsNumberGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsNumberGraphOn: !_this.state.yearlyDealsNumberGraphOn
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "toggleYearlyDealsDollarGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsDollarGraphOn: !_this.state.yearlyDealsDollarGraphOn
        });
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "barGraphLayout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            lgViewport = _this$props.lgViewport,
            mdViewport = _this$props.mdViewport,
            smViewport = _this$props.smViewport;

        if (smViewport) {
          return 'horizontal';
        } else if (mdViewport) {
          return 'vertical';
        }

        if (lgViewport) {
          return 'vertical';
        }

        return 'horizontal';
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "dollarBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props2 = _this.props,
            lgViewport = _this$props2.lgViewport,
            mdViewport = _this$props2.mdViewport,
            smViewport = _this$props2.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          if (lgViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Gross Dollar Amount ($ Thousands)';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Gross Dollar Amount ($ Thousands)';
      }
    });
    Object.defineProperty(DealsSummary__assertThisInitialized(_this), "numberBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props3 = _this.props,
            lgViewport = _this$props3.lgViewport,
            mdViewport = _this$props3.mdViewport,
            smViewport = _this$props3.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Number of Deals';
          }

          if (lgViewport) {
            return 'Number of Deals';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Number of Deals';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Number of Deals';
      }
    });
    _this._monthlyDealsNumberData = generateMonthlyNumberDealsData();
    _this._monthlyDealsDollarData = DealsSummary_generateMonthlyDollarDealsData();
    _this._yearlyDealsNumberData = DealsSummary_generateYearlyNumberDealsData();
    _this._yearlyDealsDollarData = DealsSummary_generateYearlyDollarDealsData();
    _this._monthlyDealsDollarBarData = generateMonthlyDealsBarData(_this._monthlyDealsDollarData);
    _this._monthlyDealsNumberBarData = generateMonthlyDealsBarData(_this._monthlyDealsNumberData);
    _this._monthlyDealsDollarLineData = generateMonthlyDealsLineData(_this._monthlyDealsDollarData);
    _this._monthlyDealsNumberLineData = generateMonthlyDealsLineData(_this._monthlyDealsNumberData);
    _this._yearlyDealsDollarBarData = generateMonthlyDealsBarData(_this._yearlyDealsDollarData);
    _this._yearlyDealsNumberBarData = generateMonthlyDealsBarData(_this._yearlyDealsNumberData);
    _this._yearlyDealsDollarLineData = generateMonthlyDealsLineData(_this._yearlyDealsDollarData);
    _this._yearlyDealsNumberLineData = generateMonthlyDealsLineData(_this._yearlyDealsNumberData);
    _this.state = {
      monthlyDealsNumberLineGraphOn: true,
      monthlyDealsDollarLineGraphOn: true,
      yearlyDealsNumberGraphOn: false,
      yearlyDealsDollarGraphOn: false,
      monthlyDealsDollarOrNum: 'number',
      totalDealsPieDollarOrNum: 'number'
    };
    return _this;
  }

  DealsSummary__createClass(AgentDashboard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          smViewport = _props.smViewport,
          xsViewport = _props.xsViewport;
      var _state = this.state,
          totalDealsPieDollarOrNum = _state.totalDealsPieDollarOrNum,
          yearlyDealsDollarGraphOn = _state.yearlyDealsDollarGraphOn,
          yearlyDealsNumberGraphOn = _state.yearlyDealsNumberGraphOn;
      var borderRadiusStyle = {
        borderRadius: 2
      };
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        md: 6
      }, external__react__default.a.createElement(StatNumberBox["a" /* default */], {
        icon: AttachMoney__default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.grossDealCommissions.toLocaleString()),
        statTitle: "Gross Commissions to Date"
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        md: 6
      }, external__react__default.a.createElement(StatNumberBox["a" /* default */], {
        icon: Help__default.a,
        iconClass: classes.statBoxQuestionIcon,
        stat: this.props.numberOfPendingDeals,
        statTitle: "Number of Pending Deals"
      })), this.props.numberOfTotalDealsData ? external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: classes.graphWrapper,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.graphTitle
      }, "Total Deals"), external__react__default.a.createElement(pie_["ResponsivePie"], {
        data: totalDealsPieDollarOrNum === 'number' ? this.props.numberOfTotalDealsData : this.props.grossDollarAmtOfTotalDealsData,
        margin: {
          top: 70,
          right: 80,
          bottom: 120,
          left: 80
        },
        innerRadius: 0.7,
        padAngle: 0.7,
        cornerRadius: 0,
        colors: "dark2",
        colorBy: "id",
        borderColor: "inherit:darker(0.6)",
        radialLabelsSkipAngle: 10,
        radialLabelsTextXOffset: 6,
        radialLabelsTextColor: "#333333",
        radialLabelsLinkOffset: 0,
        radialLabelsLinkDiagonalLength: smViewport ? 4 : 16,
        radialLabelsLinkHorizontalLength: smViewport ? 10 : 24,
        radialLabelsLinkStrokeWidth: 1,
        radialLabelsLinkColor: "inherit",
        slicesLabelsSkipAngle: 10,
        slicesLabelsTextColor: "#333333",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: smViewport ? 85 : 100,
          itemHeight: 14,
          symbolSize: 14,
          symbolShape: 'circle',
          itemDirection: 'top-to-bottom'
        }]
      }), external__react__default.a.createElement("div", {
        className: classes.graphControlsWrapper
      }, external__react__default.a.createElement("span", {
        className: classes.graphControlsLabel
      }, "Controls:"), external__react__default.a.createElement(external__react_toggle_button__default.a, {
        value: this.state.totalDealsPieDollarOrNum !== 'number',
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Num",
        activeLabel: "$",
        onToggle: this.toggleTotalDealsPieDollarOrNum
      })))) : null, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        lg: 6
      }, external__react__default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.graphTitle
      }, "Net Commissions ($)"), external__react__default.a.createElement("div", {
        className: classes.graphControlsWrapper
      }, external__react__default.a.createElement("span", {
        className: classes.graphControlsLabel
      }, "Controls:"), external__react__default.a.createElement("span", {
        className: classes.toggleWrapper
      }, external__react__default.a.createElement(external__react_toggle_button__default.a, {
        value: !this.state.monthlyDealsDollarLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsDollarLineGraph
      })), external__react__default.a.createElement(external__react_toggle_button__default.a, {
        value: this.state.yearlyDealsDollarGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsDollarGraph
      })), this.state.monthlyDealsDollarLineGraphOn ? external__react__default.a.createElement(line_["ResponsiveLine"], {
        data: !yearlyDealsDollarGraphOn ? this.props.monthlyDealsDollarLineData : this.props.yearlyDealsDollarLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsDollarGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Net Dollar Amount ($ Thousands)',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }]
      }) : external__react__default.a.createElement(bar_["ResponsiveBar"], {
        data: yearlyDealsDollarGraphOn ? this.props.yearlyDealsDollarBarData : this.props.monthlyDealsDollarBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('bottom', true) : this.dollarBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('left', true) : this.dollarBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }]
      }))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        lg: 6
      }, external__react__default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.graphTitle
      }, "Number of Deals (#)"), external__react__default.a.createElement("div", {
        className: classes.graphControlsWrapper
      }, external__react__default.a.createElement("span", {
        className: classes.graphControlsLabel
      }, "Controls:"), external__react__default.a.createElement("span", {
        className: classes.toggleWrapper
      }, external__react__default.a.createElement(external__react_toggle_button__default.a, {
        value: !this.state.monthlyDealsNumberLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsNumberLineGraph
      })), external__react__default.a.createElement(external__react_toggle_button__default.a, {
        value: this.state.yearlyDealsNumberGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsNumberGraph
      })), this.state.monthlyDealsNumberLineGraphOn ? external__react__default.a.createElement(line_["ResponsiveLine"], {
        data: !yearlyDealsNumberGraphOn ? this.props.monthlyDealsNumberLineData : this.props.yearlyDealsNumberLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsNumberGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Deals',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }]
      }) : external__react__default.a.createElement(bar_["ResponsiveBar"], {
        data: yearlyDealsNumberGraphOn ? this.props.yearlyDealsNumberBarData : this.props.monthlyDealsNumberBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('bottom', true) : this.numberBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('left', true) : this.numberBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }]
      })))));
    }
  }]);

  return AgentDashboard;
}(external__react_["Component"])) || DealsSummary__class) || DealsSummary__class);
/* harmony default export */ var DealsSummary = (Object(styles_["withStyles"])(DealsSummary_styles)(DealsSummary_AgentDashboard));
// EXTERNAL MODULE: ./constants/dealTypes.js
var dealTypes = __webpack_require__(150);

// EXTERNAL MODULE: ./constants/graphDataModels.js
var graphDataModels = __webpack_require__(151);

// CONCATENATED MODULE: ./containers/DealsSummary.js
var containers_DealsSummary__class, _class2, _temp, DealsSummary__initialiseProps;

function containers_DealsSummary__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { containers_DealsSummary__typeof = function _typeof(obj) { return typeof obj; }; } else { containers_DealsSummary__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return containers_DealsSummary__typeof(obj); }

function containers_DealsSummary__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function containers_DealsSummary__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function containers_DealsSummary__createClass(Constructor, protoProps, staticProps) { if (protoProps) containers_DealsSummary__defineProperties(Constructor.prototype, protoProps); if (staticProps) containers_DealsSummary__defineProperties(Constructor, staticProps); return Constructor; }

function containers_DealsSummary__possibleConstructorReturn(self, call) { if (call && (containers_DealsSummary__typeof(call) === "object" || typeof call === "function")) { return call; } return containers_DealsSummary__assertThisInitialized(self); }

function containers_DealsSummary__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function containers_DealsSummary__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var get = function get(p, o) {
  return p.reduce(function (xs, x) {
    return xs && xs[x] ? xs[x] : null;
  }, o);
};

var DealsSummary_returnGraphDealType = function returnGraphDealType(deal) {
  var graphDealType;

  switch (deal.dealType) {
    case dealTypes["a" /* commercialRental */]:
      graphDealType = 'Com Rentals';
      break;

    case dealTypes["b" /* commercialSale */]:
      graphDealType = 'Com Sales';
      break;

    case dealTypes["c" /* residentialRental */]:
      graphDealType = 'Res Sales';
      break;

    case dealTypes["d" /* residentialSale */]:
      graphDealType = 'Res Rentals';
      break;

    default:
      return null;
  }

  return graphDealType;
};

var returnGraphMonth = function returnGraphMonth(month) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
};

var DealsSummary_DealsSummaryContainer = Object(external__mobx_react_["observer"])(containers_DealsSummary__class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  containers_DealsSummary__inherits(DealsSummaryContainer, _Component);

  function DealsSummaryContainer(props) {
    var _this;

    containers_DealsSummary__classCallCheck(this, DealsSummaryContainer);

    _this = containers_DealsSummary__possibleConstructorReturn(this, (DealsSummaryContainer.__proto__ || Object.getPrototypeOf(DealsSummaryContainer)).call(this, props));

    DealsSummary__initialiseProps.call(containers_DealsSummary__assertThisInitialized(_this));

    var deals = _this.props.deals;
    _this.state = {};
    return _this;
  }

  containers_DealsSummary__createClass(DealsSummaryContainer, [{
    key: "render",
    value: function render() {
      var deals = this.props.deals;

      var _returnAllGraphData = this.returnAllGraphData(deals),
          monthlyDealsDollarBarData = _returnAllGraphData.monthlyDealsDollarBarData,
          monthlyDealsNumberBarData = _returnAllGraphData.monthlyDealsNumberBarData,
          monthlyDealsDollarLineData = _returnAllGraphData.monthlyDealsDollarLineData,
          monthlyDealsNumberLineData = _returnAllGraphData.monthlyDealsNumberLineData,
          yearlyDealsDollarBarData = _returnAllGraphData.yearlyDealsDollarBarData,
          yearlyDealsNumberBarData = _returnAllGraphData.yearlyDealsNumberBarData,
          yearlyDealsDollarLineData = _returnAllGraphData.yearlyDealsDollarLineData,
          yearlyDealsNumberLineData = _returnAllGraphData.yearlyDealsNumberLineData;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(DealsSummary, {
        userUUID: this.props.userUUID,
        numberOfTotalDealsData: this.returnNumberOfTotalDealsData(deals),
        grossDollarAmtOfTotalDealsData: this.returnGrossDollarAmtOfTotalDealsData(deals),
        numberOfPendingDeals: this.returnNumberOfPendingDeals(deals),
        grossDealCommissions: this.returnGrossDealCommissions(deals),
        monthlyDealsDollarBarData: monthlyDealsDollarBarData,
        monthlyDealsNumberBarData: monthlyDealsNumberBarData,
        monthlyDealsDollarLineData: monthlyDealsDollarLineData,
        monthlyDealsNumberLineData: monthlyDealsNumberLineData,
        yearlyDealsDollarBarData: yearlyDealsDollarBarData,
        yearlyDealsNumberBarData: yearlyDealsNumberBarData,
        yearlyDealsDollarLineData: yearlyDealsDollarLineData,
        yearlyDealsNumberLineData: yearlyDealsNumberLineData
      }));
    }
  }]);

  return DealsSummaryContainer;
}(external__react_["Component"]), DealsSummary__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "returnNumberOfTotalDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!deals.length) return false;
      var dealDataCounts = {
        'Res. Sales': 0,
        'Res. Rentals': 0,
        'Com. Sales': 0,
        'Com. Rentals': 0
      };

      if (deals && Array.isArray(deals)) {
        deals.forEach(function (deal) {
          switch (deal.dealType) {
            case dealTypes["a" /* commercialRental */]:
              dealDataCounts['Com. Rentals'] += 1;
              break;

            case dealTypes["b" /* commercialSale */]:
              dealDataCounts['Com. Sales'] += 1;
              break;

            case dealTypes["c" /* residentialRental */]:
              dealDataCounts['Res. Rentals'] += 1;
              break;

            case dealTypes["d" /* residentialSale */]:
              dealDataCounts['Res. Sales'] += 1;
              break;

            default:
              return;
          }
        });
      }

      var dealData = [{
        id: 'Res. Sales',
        label: 'Res. Sales',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Res. Rentals',
        label: 'Res. Rentals',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Com. Sales',
        label: 'Com. Sales',
        value: dealDataCounts['Com. Sales'] || 0
      }, {
        id: 'Com. Rentals',
        label: 'Com. Rentals',
        value: dealDataCounts['Com. Rentals'] || 0
      }];
      return dealData;
    }
  });
  Object.defineProperty(this, "returnGrossDollarAmtOfTotalDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!deals.length) return false;
      var dealDataCounts = {
        'Res. Sales': 0,
        'Res. Rentals': 0,
        'Com. Sales': 0,
        'Com. Rentals': 0
      };

      if (deals) {
        deals.forEach(function (deal) {
          if (deal.status === 'pending') return;

          switch (deal.dealType) {
            case dealTypes["a" /* commercialRental */]:
              dealDataCounts['Com. Rentals'] += deal.total;
              break;

            case dealTypes["b" /* commercialSale */]:
              dealDataCounts['Com. Sales'] += deal.total;
              break;

            case dealTypes["c" /* residentialRental */]:
              dealDataCounts['Res. Rentals'] += deal.total;
              break;

            case dealTypes["d" /* residentialSale */]:
              dealDataCounts['Res. Sales'] += deal.total;
              break;

            default:
              return;
          }
        });
      }

      var dealsGrossDollarData = [{
        id: 'Res. Sales',
        label: 'Res. Sales',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Res. Rentals',
        label: 'Res. Rentals',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Com. Sales',
        label: 'Com. Sales',
        value: dealDataCounts['Com. Sales'] || 0
      }, {
        id: 'Com. Rentals',
        label: 'Com. Rentals',
        value: dealDataCounts['Com. Rentals'] || 0
      }];
      return dealsGrossDollarData;
    }
  });
  Object.defineProperty(this, "returnNumberOfPendingDeals", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var numOfPendingDeals = deals.reduce(function (pendingDeals, deal) {
        if (deal.status === 'pending') {
          return pendingDeals += 1;
        }

        return pendingDeals;
      }, 0);
      return numOfPendingDeals || 0;
    }
  });
  Object.defineProperty(this, "returnGrossDealCommissions", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return deals.reduce(function (grossAmount, deal) {
        if (deal.status === 'pending') return grossAmount;
        return grossAmount += deal.total;
      }, 0);
    }
  });
  Object.defineProperty(this, "returnMonthlyAndYearlyDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var monthlyDollarData = Object(graphDataModels["b" /* returnMonthlyDollarDataContainer */])();
      var monthlyDealNumberData = Object(graphDataModels["a" /* returnMonthlyDealNumberDataContainer */])();
      var yearlyDollarData = Object(graphDataModels["c" /* returnNumberDealsDataContainer */])();
      var yearlyDealNumberData = Object(graphDataModels["d" /* returnYearlyDollarDealsDataContainer */])();
      deals.forEach(function (deal) {
        if (deal.status === 'pending') return;
        var month = external__moment__default()(deal.date).month();
        var year = external__moment__default()(deal.date).year();
        var currentYear = external__moment__default()().year();
        var yearLimit = currentYear - 4; // monthlyDollarData

        if (get([returnGraphMonth(month), DealsSummary_returnGraphDealType(deal)], monthlyDollarData)) {
          monthlyDollarData[returnGraphMonth(month)][DealsSummary_returnGraphDealType(deal)] += Object(utils_Math["b" /* round */])(deal.netAgentCommission / 1000);
        } else {
          external__set_value__default()(monthlyDollarData, "".concat(returnGraphMonth(month), ".").concat(DealsSummary_returnGraphDealType(deal)), Object(utils_Math["b" /* round */])(deal.netAgentCommission / 1000));
        } // monthlyDealNumberData


        if (get([returnGraphMonth(month), DealsSummary_returnGraphDealType(deal)], monthlyDealNumberData)) {
          monthlyDealNumberData[returnGraphMonth(month)][DealsSummary_returnGraphDealType(deal)] += 1;
        } else {
          external__set_value__default()(monthlyDealNumberData, "".concat(returnGraphMonth(month), ".").concat(DealsSummary_returnGraphDealType(deal)), 1);
        }

        if (year >= yearLimit) {
          // yearlyDollarData
          if (get([year, DealsSummary_returnGraphDealType(deal)], yearlyDollarData)) {
            yearlyDollarData[year][DealsSummary_returnGraphDealType(deal)] += Object(utils_Math["b" /* round */])(deal.netAgentCommission / 1000);
          } else {
            external__set_value__default()(yearlyDollarData, "".concat(year, ".").concat(DealsSummary_returnGraphDealType(deal)), Object(utils_Math["b" /* round */])(deal.netAgentCommission / 1000));
          } // yearlyDealNumberData


          if (get([year, DealsSummary_returnGraphDealType(deal)], yearlyDealNumberData)) {
            yearlyDealNumberData[year][DealsSummary_returnGraphDealType(deal)] += 1;
          } else {
            external__set_value__default()(yearlyDealNumberData, "".concat(year, ".").concat(DealsSummary_returnGraphDealType(deal)), 1);
          }
        }
      });
      return {
        monthlyDollarData: monthlyDollarData,
        monthlyDealNumberData: monthlyDealNumberData,
        yearlyDollarData: yearlyDollarData,
        yearlyDealNumberData: yearlyDealNumberData
      };
    }
  });
  Object.defineProperty(this, "generateDealsBarData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(data) {
      return Object.keys(data).map(function (month) {
        return {
          month: month,
          'Com Sales': data[month]['Com Sales'],
          'Com Rentals': data[month]['Com Rentals'],
          'Res Sales': data[month]['Res Sales'],
          'Res Rentals': data[month]['Res Rentals']
        };
      });
    }
  });
  Object.defineProperty(this, "generateDealsLineData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(data) {
      var types = ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'];
      return types.map(function (id) {
        return {
          id: id,
          data: Object.keys(data).map(function (month) {
            return {
              x: month,
              y: data[month][id]
            };
          })
        };
      });
    }
  });
  Object.defineProperty(this, "returnAllGraphData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(deals) {
      var _this2$returnMonthlyA = _this2.returnMonthlyAndYearlyDealsData(deals),
          monthlyDollarData = _this2$returnMonthlyA.monthlyDollarData,
          monthlyDealNumberData = _this2$returnMonthlyA.monthlyDealNumberData,
          yearlyDollarData = _this2$returnMonthlyA.yearlyDollarData,
          yearlyDealNumberData = _this2$returnMonthlyA.yearlyDealNumberData;

      return {
        monthlyDealsDollarBarData: _this2.generateDealsBarData(monthlyDollarData),
        monthlyDealsNumberBarData: _this2.generateDealsBarData(monthlyDealNumberData),
        monthlyDealsDollarLineData: _this2.generateDealsLineData(monthlyDollarData),
        monthlyDealsNumberLineData: _this2.generateDealsLineData(monthlyDealNumberData),
        yearlyDealsDollarBarData: _this2.generateDealsBarData(yearlyDollarData),
        yearlyDealsNumberBarData: _this2.generateDealsBarData(yearlyDealNumberData),
        yearlyDealsDollarLineData: _this2.generateDealsLineData(yearlyDollarData),
        yearlyDealsNumberLineData: _this2.generateDealsLineData(yearlyDealNumberData)
      };
    }
  });
}, _temp)) || containers_DealsSummary__class;

/* harmony default export */ var containers_DealsSummary = (DealsSummary_DealsSummaryContainer);
// CONCATENATED MODULE: ./components/DealsSummarDialogBox/index.js
var DealsSummarDialogBox__class;

function DealsSummarDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DealsSummarDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { DealsSummarDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DealsSummarDialogBox__typeof(obj); }

function DealsSummarDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DealsSummarDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DealsSummarDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) DealsSummarDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) DealsSummarDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function DealsSummarDialogBox__possibleConstructorReturn(self, call) { if (call && (DealsSummarDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return DealsSummarDialogBox__assertThisInitialized(self); }

function DealsSummarDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DealsSummarDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DealsSummarDialogBox__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var DealsSummarDialogBox_styles = function styles(theme) {
  return {
    paper: DealsSummarDialogBox__defineProperty({
      width: '90%',
      maxWidth: '90%'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      maxWidth: '100%'
    }),
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
      paddingTop: '32px'
    }
  };
};

var DealsSummarDialogBox_DealsSummaryDialogBox = Object(external__mobx_react_["observer"])(DealsSummarDialogBox__class =
/*#__PURE__*/
function (_Component) {
  DealsSummarDialogBox__inherits(DealsSummaryDialogBox, _Component);

  function DealsSummaryDialogBox() {
    DealsSummarDialogBox__classCallCheck(this, DealsSummaryDialogBox);

    return DealsSummarDialogBox__possibleConstructorReturn(this, (DealsSummaryDialogBox.__proto__ || Object.getPrototypeOf(DealsSummaryDialogBox)).apply(this, arguments));
  }

  DealsSummarDialogBox__createClass(DealsSummaryDialogBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          toggleDealsSummaryDialogBox = _props.toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen = _props.dealsSummaryDialogBoxOpen;
      return external__react__default.a.createElement(Dialog__default.a, {
        onClose: toggleDealsSummaryDialogBox,
        open: dealsSummaryDialogBoxOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "Deals Summary"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        }
      }, external__react__default.a.createElement(containers_DealsSummary, {
        userUUID: this.props.userUUID,
        deals: this.props.deals
      })), external__react__default.a.createElement(Dialog_["DialogActions"], {
        classes: {
          root: classes.dialogActions
        }
      }, external__react__default.a.createElement(Button__default.a, {
        onClick: toggleDealsSummaryDialogBox,
        color: "primary"
      }, "Close")));
    }
  }]);

  return DealsSummaryDialogBox;
}(external__react_["Component"])) || DealsSummarDialogBox__class;

/* harmony default export */ var DealsSummarDialogBox = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(DealsSummarDialogBox_styles)(DealsSummarDialogBox_DealsSummaryDialogBox)));
// EXTERNAL MODULE: ./components/ViewDealDialogBox/index.js + 2 modules
var ViewDealDialogBox = __webpack_require__(152);

// EXTERNAL MODULE: ./effects/deals/deleteDeal.js
var deleteDeal = __webpack_require__(129);

// CONCATENATED MODULE: ./containers/Deals.js
var Deals__class;

var Deals__templateObject = /*#__PURE__*/ Deals__taggedTemplateLiteral(["\n  query dealsByAgentID($uuid: String!) {\n    dealsByAgentID(uuid: $uuid) {\n      dealID\n      date\n      agentID\n      dealType\n      clientName\n      clientEmail\n      propertyAddress\n      city\n      state\n      managementOrCobrokeCompany\n      price\n      status\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      total\n    }\n  }\n"]);

function Deals__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Deals__typeof = function _typeof(obj) { return typeof obj; }; } else { Deals__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Deals__typeof(obj); }

function Deals__toConsumableArray(arr) { return Deals__arrayWithoutHoles(arr) || Deals__iterableToArray(arr) || Deals__nonIterableSpread(); }

function Deals__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Deals__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Deals__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Deals__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Deals__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Deals__createClass(Constructor, protoProps, staticProps) { if (protoProps) Deals__defineProperties(Constructor.prototype, protoProps); if (staticProps) Deals__defineProperties(Constructor, staticProps); return Constructor; }

function Deals__possibleConstructorReturn(self, call) { if (call && (Deals__typeof(call) === "object" || typeof call === "function")) { return call; } return Deals__assertThisInitialized(self); }

function Deals__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Deals__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Deals__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



















var Deals_Loader = external__react_spinners_["DotLoader"];
var dealsQuery = external__graphql_tag__default()(Deals__templateObject);

var Deals_styles = function styles(theme) {
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
    snackBar: {
      marginTop: 30
    }
  };
};

var Deals_Deals = Object(external__mobx_react_["observer"])(Deals__class =
/*#__PURE__*/
function (_Component) {
  Deals__inherits(Deals, _Component);

  function Deals(props) {
    var _this;

    Deals__classCallCheck(this, Deals);

    _this = Deals__possibleConstructorReturn(this, (Deals.__proto__ || Object.getPrototypeOf(Deals)).call(this, props));
    Object.defineProperty(Deals__assertThisInitialized(_this), "toggleAddDealDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          submitDealDialogOpen: !_this.state.submitDealDialogOpen
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "toggleDealsSummaryDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsSummaryDialogBoxOpen: !_this.state.dealsSummaryDialogBoxOpen
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "setDealSuccessfullySubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        _this.setState({
          submitDealDialogOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal submitted successfully',
          addedDeals: Deals__toConsumableArray(_this.state.addedDeals).concat([newDeal])
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "setDealSuccessfullyEditted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        var addedDeals = _this.state.addedDeals.filter(function (deal) {
          return deal.dealID !== newDeal.dealID;
        });

        _this.setState({
          dealsViewDialogBoxOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal updated successfully',
          addedDeals: Deals__toConsumableArray(addedDeals).concat([newDeal])
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "handleCloseSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          snackbarOpen: false,
          snackbarUndoFunction: null
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "openDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID, status) {
        _this.setState({
          dealsViewDialogBoxOpen: true,
          viewingDealID: dealID,
          viewingDealStatus: status
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "closeDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsViewDialogBoxOpen: false,
          viewingDealID: '',
          viewingDealStatus: ''
        });
      }
    });
    Object.defineProperty(Deals__assertThisInitialized(_this), "dealDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Deal deleted successfully!',
          dealsViewDialogBoxOpen: false,
          deletedDealIDS: Deals__toConsumableArray(_this.state.deletedDealIDS).concat([dealID])
        });
      }
    });
    _this.state = {
      submitDealDialogOpen: false,
      dealsSummaryDialogBoxOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedDeals: [],
      dealsViewDialogBoxOpen: false,
      viewingDealID: '',
      viewingDealStatus: '',
      deletedDealIDS: [],
      userUUID: _this.props.userUUID
    };
    return _this;
  }

  Deals__createClass(Deals, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          userUUID = _props.userUUID;
      var _state = this.state,
          submitDealDialogOpen = _state.submitDealDialogOpen,
          dealsSummaryDialogBoxOpen = _state.dealsSummaryDialogBoxOpen,
          dealsViewDialogBoxOpen = _state.dealsViewDialogBoxOpen,
          viewingDealID = _state.viewingDealID,
          viewingDealStatus = _state.viewingDealStatus;
      var toggleAddDealDialogBox = this.toggleAddDealDialogBox,
          toggleDealsSummaryDialogBox = this.toggleDealsSummaryDialogBox,
          openDealsViewDialogBox = this.openDealsViewDialogBox,
          closeDealsViewDialogBox = this.closeDealsViewDialogBox;
      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: dealsQuery,
        variables: {
          uuid: userUUID || this.state.userUUID
        },
        ssr: false
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 110px)',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          }
        }, external__react__default.a.createElement(Deals_Loader, {
          color: "#f44336",
          loading: true
        }));
        var intDeals = {};

        if (error) {
          console.log(error);
          return external__react__default.a.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var allDeals = Deals__toConsumableArray(data.dealsByAgentID).concat(Deals__toConsumableArray(_this2.state.addedDeals));

        allDeals.forEach(function (deal) {
          intDeals[deal.dealID] = deal;
        });
        var uniqueDeals = [];
        Object.keys(intDeals).forEach(function (key) {
          uniqueDeals.push(intDeals[key]);
        });
        uniqueDeals = uniqueDeals.filter(function (deal) {
          return !_this2.state.deletedDealIDS.includes(deal.dealID);
        });
        console.log(uniqueDeals);
        return external__react__default.a.createElement("div", {
          className: classes.wrapper
        }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
          className: classes.buttonsWrapper
        }, external__react__default.a.createElement(Button__default.a, {
          variant: "raised",
          color: "secondary",
          "aria-label": "add",
          onClick: toggleAddDealDialogBox,
          classes: {
            root: classes.addDealBtn
          }
        }, external__react__default.a.createElement(Add__default.a, null), "Add a Deal"), external__react__default.a.createElement(Button__default.a, {
          variant: "raised",
          onClick: toggleDealsSummaryDialogBox,
          classes: {
            root: classes.dealsSummaryBtn
          }
        }, external__react__default.a.createElement(Equalizer__default.a, null), "Deals Summary")), external__react__default.a.createElement(components_SubmitDealDialogBox, {
          submitDealDialogOpen: submitDealDialogOpen,
          toggleDialogBoxOpen: toggleAddDealDialogBox,
          userUUID: userUUID,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullySubmitted
        }), external__react__default.a.createElement(ViewDealDialogBox["a" /* default */], {
          dealsViewDialogBoxOpen: dealsViewDialogBoxOpen,
          closeDealsViewDialogBox: closeDealsViewDialogBox,
          userUUID: userUUID,
          viewingDealID: viewingDealID,
          viewingDealStatus: viewingDealStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullyEditted,
          userRole: _this2.props.userRole,
          dealDeleted: _this2.dealDeleted
        })), external__react__default.a.createElement(containers_DealsTable, {
          deals: uniqueDeals,
          openDealsViewDialogBox: openDealsViewDialogBox
        }), external__react__default.a.createElement(DealsSummarDialogBox, {
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen: dealsSummaryDialogBoxOpen,
          deals: uniqueDeals,
          userUUID: userUUID
        }), external__react__default.a.createElement(Snackbar__default.a, {
          classes: {
            root: classes.snackBar
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          open: _this2.state.snackbarOpen,
          autoHideDuration: 4000,
          onClose: _this2.handleCloseSnackbar,
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

  return Deals;
}(external__react_["Component"])) || Deals__class;

/* harmony default export */ var containers_Deals = __webpack_exports__["a"] = (Object(styles_["withStyles"])(Deals_styles)(Deals_Deals));

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
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withData__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Deals__ = __webpack_require__(172);
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Deals = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Deals, _React$Component);

  _createClass(Deals, null, [{
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

  function Deals(props) {
    var _this;

    _classCallCheck(this, Deals);

    _this = _possibleConstructorReturn(this, (Deals.__proto__ || Object.getPrototypeOf(Deals)).call(this, props));
    _this.store = Object(__WEBPACK_IMPORTED_MODULE_4__models__["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !_this.store.UserStore.isLoggedIn) {
      __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute('home');
    } // for debugging only!!!


    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  _createClass(Deals, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_Deals__["a" /* default */], {
        userUUID: this.store.UserStore.uuid,
        userRole: this.store.UserStore.userRole
      }));
    }
  }]);

  return Deals;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withData__["a" /* default */])(Deals));

/***/ })
/******/ ]);