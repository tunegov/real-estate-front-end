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
/******/ 	return __webpack_require__(__webpack_require__.s = 233);
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
/* 36 */,
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
/* 42 */,
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
/* 63 */,
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
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {



/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),
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
/* 111 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__(104);
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
        var cursorPosition = selection ? selection.start : null; // keep minus if entered by user

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
/* 113 */
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
/* 114 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("react-circular-progressbar");

/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 119 */,
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
/* 139 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(8);
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
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(56);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(57);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var style_css_ = __webpack_require__(117);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(118);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-form"
var external__react_form_ = __webpack_require__(24);
var external__react_form__default = /*#__PURE__*/__webpack_require__.n(external__react_form_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(66);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "react-avatar-editor"
var external__react_avatar_editor_ = __webpack_require__(139);
var external__react_avatar_editor__default = /*#__PURE__*/__webpack_require__.n(external__react_avatar_editor_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(67);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(31);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(26);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-circular-progressbar"
var external__react_circular_progressbar_ = __webpack_require__(115);
var external__react_circular_progressbar__default = /*#__PURE__*/__webpack_require__.n(external__react_circular_progressbar_);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(103);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./components/CustomSlider/index.js
var CustomSlider = __webpack_require__(140);

// EXTERNAL MODULE: external "email-validator"
var external__email_validator_ = __webpack_require__(89);
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
    officeNumber: !values.officeNumber || values.officeNumber && values.officeNumber.length < 14 ? 'This value is required and must be a full tel number with area code' : null,
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
var CustomFileUploadInputWrapper = __webpack_require__(105);

// EXTERNAL MODULE: ./components/MaterialCustomTextFieldWrapper/index.js
var MaterialCustomTextFieldWrapper = __webpack_require__(93);

// EXTERNAL MODULE: ./components/MaterialCustomRadioInputWrapper/index.js
var MaterialCustomRadioInputWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./components/MaterialCustomSelectInputWrapper/index.js
var MaterialCustomSelectInputWrapper = __webpack_require__(94);

// EXTERNAL MODULE: ./components/CustomInputMask/index.js
var CustomInputMask = __webpack_require__(112);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(113);

// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(12);
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
  label: ''
}, {
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
        }, isAdmin && external__react__default.a.createElement("div", {
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
          accept: ".jpg, .jpeg, .png"
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
            required: true,
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
          xs: 12
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__(6);


var query = "\n    mutation setAgentProfilePic($input: SetAgentProfilePicInput!) {\n      setAgentProfilePic(input: $input) {\n        url\n        wasSuccessful\n        otherError\n      }\n    }\n  ";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var setAgentProfilePic = function setAgentProfilePic(agentID, fileName) {
  var res;
  var response;
  var error;
  var variables = {
    input: {
      agentID: agentID,
      fileName: fileName
    }
  };
  var finalResponseObj = {
    url: null,
    error: error
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    var _res = res,
        data = _res.setAgentProfilePic;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.otherError;
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
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports) {

module.exports = require("buildo-react-components/lib/FormattedText");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("buildo-react-components/lib/Input");

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ }),
/* 163 */
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

// EXTERNAL MODULE: external "react-form"
var external__react_form_ = __webpack_require__(24);
var external__react_form__default = /*#__PURE__*/__webpack_require__.n(external__react_form_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(66);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(67);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(103);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./components/forms/EditAgentPasswordForm/formValidation.js
var validator = function validator(values) {
  return {
    password: !values.password || values.password.length < 8 ? 'This value is required and must be at least 8 characters long!' : null,
    passwordConfirmation: !values.passwordConfirmation || values.passwordConfirmation !== values.password ? 'This value is required and must match your new password!' : null
  };
};

/* harmony default export */ var formValidation = (validator);
// EXTERNAL MODULE: ./components/MaterialCustomTextFieldWrapper/index.js
var MaterialCustomTextFieldWrapper = __webpack_require__(93);

// CONCATENATED MODULE: ./components/forms/EditAgentPasswordForm/index.js



var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CustomTextField = MaterialCustomTextFieldWrapper["a" /* default */];

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var EditAgentPasswordForm_styles = function styles(theme) {
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
    progressBarExplanation: {
      marginTop: '20px',
      fontSize: '1.1rem'
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

var EditAgentPasswordForm_CreateAgentForm = (_dec = external__react_sizes__default()(mapSizesToProps), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentForm, _Component);

  function CreateAgentForm() {
    _classCallCheck(this, CreateAgentForm);

    return _possibleConstructorReturn(this, (CreateAgentForm.__proto__ || Object.getPrototypeOf(CreateAgentForm)).apply(this, arguments));
  }

  _createClass(CreateAgentForm, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onSubmit = _props.onSubmit,
          submittingFormToServer = _props.submittingFormToServer;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(external__react_form_["Form"], {
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: formValidation,
        validateOnMount: true,
        getApi: this.props.getFormApi
      }, function (formApi) {
        return external__react__default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: submittingFormToServer ? 'none' : undefined
          }
        }, external__react__default.a.createElement(Grid__default.a, {
          container: true,
          spacing: 8
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "password",
          id: v4__default()(),
          label: "New Password",
          fullWidth: true,
          required: true,
          type: "password"
        }))), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
          className: classes.formControlWrapper
        }, external__react__default.a.createElement(CustomTextField, {
          field: "passwordConfirmation",
          id: v4__default()(),
          label: "New Password Confirmation",
          fullWidth: true,
          required: true,
          type: "password"
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
      }, "Finishing submission...")) : null);
    }
  }]);

  return CreateAgentForm;
}(external__react_["Component"])) || _class);
/* harmony default export */ var EditAgentPasswordForm = __webpack_exports__["a"] = (Object(styles_["withStyles"])(EditAgentPasswordForm_styles)(EditAgentPasswordForm_CreateAgentForm));

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
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
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(234);


/***/ }),
/* 234 */
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

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(64);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: ./components/Layout/index.js + 11 modules
var Layout = __webpack_require__(71);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/withData.js + 2 modules
var withData = __webpack_require__(49);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "faker"
var external__faker_ = __webpack_require__(111);
var external__faker__default = /*#__PURE__*/__webpack_require__.n(external__faker_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(28);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(15);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(31);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "buildo-react-components/lib/FormattedText"
var FormattedText_ = __webpack_require__(160);
var FormattedText__default = /*#__PURE__*/__webpack_require__.n(FormattedText_);

// EXTERNAL MODULE: external "buildo-react-components/lib/Input"
var Input_ = __webpack_require__(161);
var Input__default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "material-ui/Menu"
var Menu_ = __webpack_require__(65);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(108);
var MenuItem__default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(12);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// EXTERNAL MODULE: external "react-textarea-autosize"
var external__react_textarea_autosize_ = __webpack_require__(162);
var external__react_textarea_autosize__default = /*#__PURE__*/__webpack_require__.n(external__react_textarea_autosize_);

// EXTERNAL MODULE: external "react-icons/lib/fa"
var fa_ = __webpack_require__(54);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// EXTERNAL MODULE: ./components/CustomInputMask/index.js
var CustomInputMask = __webpack_require__(112);

// CONCATENATED MODULE: ./components/Profile/index.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var Loader = external__react_spinners_["BounceLoader"];

var styles = function styles(theme) {
  var _profilePicSubstitute, _detailsInfoInput;

  return {
    root: _defineProperty({
      position: 'relative',
      display: 'flex',
      backgroundColor: '#fff',
      padding: '20px 20px',
      borderRadius: '10px',
      color: 'rgba(0,0,0,.8)',
      boxShadow: theme.shadows[1]
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column'
    }),
    leftColumnWrapper: _defineProperty({
      marginRight: '40px'
    }, theme.breakpoints.down('xs'), {
      marginRight: 0
    }),
    rightColumnWrapper: _defineProperty({
      width: '100%'
    }, theme.breakpoints.only('sm'), {
      width: '65%'
    }),
    name: {
      marginBottom: '5px',
      '@media (max-height: 500px)': {
        fontSize: '1.4rem'
      }
    },
    title: {
      color: 'rgba(0,0,0,.7)',
      display: 'block',
      marginBottom: '30px'
    },
    profilePicWrapper: _defineProperty({
      position: 'relative',
      paddingTop: '100%',
      marginBottom: '25px',
      width: '325px',
      height: '325px'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      height: 'auto'
    }),
    profilePicLoader: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#f1eded',
      zIndex: 1
    },
    profilePic: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)'
    },
    profilePicSubstitute: (_profilePicSubstitute = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: 20,
      textAlign: 'center',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
      color: '#fff'
    }, _defineProperty(_profilePicSubstitute, "width", '325px'), _defineProperty(_profilePicSubstitute, "height", '325px'), _defineProperty(_profilePicSubstitute, theme.breakpoints.down('sm'), {
      width: '100%',
      height: 'auto'
    }), _profilePicSubstitute),
    profilePicSubstituteText: {
      positon: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    detailsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.1rem',
      '@media (max-width: 800px)': {
        fontSize: '0.9rem'
      }
    },
    details: {
      display: 'flex',
      width: '100%',
      textAlign: 'center',
      marginBottom: '5px',
      '@media (max-width: 800px)': {
        fontSize: '0.9rem'
      }
    },
    detailsTitle: {
      display: 'inline-block',
      fontWeight: '500',
      marginBottom: '8px',
      marginRight: 10
    },
    detailsInfo: {
      marginLeft: 'auto',
      fontWeight: '300'
    },
    descriptionWrapper: {
      '& > span': {
        lineHeight: '1.4rem'
      },
      '@media (max-width: 800px)': {
        fontSize: '0.8rem'
      }
    },
    descriptionTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '10px',
      '@media (max-width: 500px)': {
        fontSize: '0.9rem'
      }
    },
    socialMediaWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }, theme.breakpoints.down('sm'), {
      marginBottom: 40
    }),
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
    socialMediaItemWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      '&:hover': {
        borderColor: 'rgba(0,0,0,.9)',
        color: 'rgba(0,0,0,.8)'
      },
      '@media (max-width: 800px)': {
        width: '45px',
        height: '45px'
      }
    },
    editBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#008205',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)'
      }
    },
    editProfilePicBtn: {
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
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    },
    editProfilePicBtnsWrapper: _defineProperty({
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    }, theme.breakpoints.down('xs'), {
      right: 'auto',
      left: '-13px'
    }),
    cancelBtn: {
      backgroundColor: theme.palette.secondary.main,
      marginRight: '8px'
    },
    saveBtn: {
      backgroundColor: '#4CAF50'
    },
    descriptionDetailsInput: {
      padding: '10px',
      width: '100%',
      fontSize: '1rem',
      color: 'rgba(0,0,0,.8)',
      borderRadius: '3px',
      lineHeight: '1.4rem',
      borderColor: 'rgba(0,0,0,.1)',
      boxShadow: "inset ".concat(theme.shadows[1])
    },
    detailsInfoInput: (_detailsInfoInput = {
      padding: '0',
      marginLeft: 'auto'
    }, _defineProperty(_detailsInfoInput, "padding", '5px'), _defineProperty(_detailsInfoInput, "fontWeight", '300'), _defineProperty(_detailsInfoInput, "color", 'rgba(0,0,0,.8)'), _defineProperty(_detailsInfoInput, "fontSize", '.8rem'), _defineProperty(_detailsInfoInput, "borderRadius", '3px'), _defineProperty(_detailsInfoInput, "borderColor", 'rgba(0,0,0,.1)'), _defineProperty(_detailsInfoInput, "boxShadow", "inset ".concat(theme.shadows[1])), _detailsInfoInput),
    close: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4
    },
    snackBar: {
      transform: 'translate(0px, -25px)'
    },
    popupMenuTitle: {
      display: 'flex',
      justifyContent: 'center',
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
    menuItemAccept: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.custom.submitBlue.light, " !important"),
        color: '#fff !important'
      }
    }
  };
};

var Profile_Profile = (_dec = Object(styles_["withStyles"])(styles), _dec(_class = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "errorTimeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._img) {
          _this._img.src = _this.props.agent.agent.profilePicURL;
          _this.errorTimeout = setTimeout(function () {
            if (_this.props.isLoadingProfilePicture) {
              _this.setState({
                imageError: true
              });
            }
          }, 15000);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.errorTimeout) clearTimeout(_this.errorTimeout);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, reason) {
        if (reason === 'clickaway') {
          return;
        }

        _this.setState({
          open: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnTitle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(role) {
        switch (role) {
          case userTypes["agent"]:
            return 'Licensed Real Estate Salesperson';
            break;

          case userTypes["admin"]:
            return 'Admin';
            break;

          case userTypes["superAdmin"]:
            return 'Super-Admin';
            break;

          default:
            return '';
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEditAgentMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          editAgentAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEditAgentMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          editAgentAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderProfilePic", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            isLoadingProfilePicture = _this$props.isLoadingProfilePicture,
            classes = _this$props.classes,
            agent = _this$props.agent,
            currentUserUUID = _this$props.currentUserUUID,
            currentUserRole = _this$props.currentUserRole,
            toggleIsLoadingProfilePicture = _this$props.toggleIsLoadingProfilePicture,
            openProfilePicEditor = _this$props.openProfilePicEditor;
        var canEdit = currentUserRole === userTypes["admin"] || currentUserRole === userTypes["superAdmin"];
        return external__react__default.a.createElement("div", {
          className: classes.profilePicWrapper
        }, isLoadingProfilePicture && agent.agent.profilePicURL && !_this.state.imageError && external__react__default.a.createElement("div", {
          className: classes.profilePicLoader
        }, external__react__default.a.createElement("div", {
          className: classes.profilePicSubstituteText
        }, external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        })))), agent.agent.profilePicURL ? !_this.state.imageError ? external__react__default.a.createElement("img", {
          id: "agentProfilePic",
          className: classes.profilePic,
          ref: function ref(img) {
            return _this._img = img;
          },
          alt: "Agent",
          onLoad: function onLoad() {
            _this.setState({
              imageError: false
            });

            toggleIsLoadingProfilePicture(false);
          },
          onError: function onError() {
            return _this.setState({
              imageError: true
            });
          }
        }) : external__react__default.a.createElement("div", {
          className: classes.profilePicSubstitute
        }, external__react__default.a.createElement("div", {
          className: classes.profilePicSubstituteText
        }, "Error loading profile picture...")) : external__react__default.a.createElement("div", {
          className: classes.profilePicSubstitute
        }, external__react__default.a.createElement("div", {
          className: classes.profilePicSubstituteText
        }, "No profile photo available")), canEdit && external__react__default.a.createElement("span", {
          className: classes.editProfilePicBtnsWrapper
        }, external__react__default.a.createElement("button", {
          className: classes.editProfilePicBtn,
          onClick: openProfilePicEditor
        }, external__react__default.a.createElement(fa_["FaPencil"], null))));
      }
    });
    _this.state = {
      open: false,
      Transition: null,
      editAgentAnchorEl: null,
      imageError: false
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          agent = _props.agent,
          classes = _props.classes,
          enterEditingMode = _props.enterEditingMode,
          cancelEditingMode = _props.cancelEditingMode,
          isEditing = _props.isEditing,
          setDescription = _props.setDescription,
          setMobileNumber = _props.setMobileNumber,
          saveUser = _props.saveUser,
          undoSave = _props.undoSave,
          openProfilePicEditor = _props.openProfilePicEditor,
          uuid = _props.uuid,
          currentUserRole = _props.currentUserRole,
          currentUserUUID = _props.currentUserUUID,
          openEditAgentDialogBox = _props.openEditAgentDialogBox,
          openEditAgentPasswordDialogBox = _props.openEditAgentPasswordDialogBox,
          isLoadingProfilePicture = _props.isLoadingProfilePicture,
          toggleIsLoadingProfilePicture = _props.toggleIsLoadingProfilePicture;
      var firstName = agent.firstName,
          lastName = agent.lastName,
          email = agent.email,
          role = agent.role,
          _agent$agent = agent.agent,
          profileDescription = _agent$agent.profileDescription,
          mobileNumber = _agent$agent.mobileNumber,
          officeNumber = _agent$agent.officeNumber,
          branch = _agent$agent.branch,
          profilePicURL = _agent$agent.profilePicURL,
          facebook = _agent$agent.facebook,
          twitter = _agent$agent.twitter,
          instagram = _agent$agent.instagram;
      var editAgentAnchorEl = this.state.editAgentAnchorEl;
      var name = Object(stringUtils["a" /* capitalize */])("".concat(firstName, " ").concat(lastName));
      var canEdit = currentUserUUID === uuid || currentUserRole === userTypes["admin"] || currentUserRole === userTypes["superAdmin"];
      var editingOwnProfile = currentUserUUID === uuid;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, canEdit && external__react__default.a.createElement("span", {
        className: classes.editBtnsWrapper
      }, external__react__default.a.createElement("button", {
        className: classes.editBtn,
        onClick: this.handleEditAgentMenuClick
      }, external__react__default.a.createElement(fa_["FaPencil"], null))), external__react__default.a.createElement(Menu__default.a, {
        id: "simple-menu",
        anchorEl: editAgentAnchorEl,
        open: Boolean(editAgentAnchorEl),
        onClose: this.handleEditAgentMenuClose
      }, external__react__default.a.createElement("div", {
        className: classes.popupMenuTitle
      }, "Edit"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentDialogBox();
        }
      }, "Information"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentPasswordDialogBox();
        }
      }, "Password"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();
        }
      }, "Cancel")), external__react__default.a.createElement("div", {
        className: classes.leftColumnWrapper
      }, this.renderProfilePic(), external__react__default.a.createElement("div", {
        className: classes.detailsWrapper
      }, external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.email, classes.details)
      }, external__react__default.a.createElement("div", {
        className: classes.detailsTitle
      }, "Email"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, email)), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.mobile, classes.details)
      }, external__react__default.a.createElement("div", {
        className: classes.detailsTitle
      }, "Office"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, officeNumber)), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.mobile, classes.details)
      }, external__react__default.a.createElement("div", {
        className: classes.detailsTitle
      }, "Mobile"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, mobileNumber)), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.region, classes.details)
      }, external__react__default.a.createElement("div", {
        className: classes.detailsTitle
      }, "Branch"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, branch)), facebook || instagram || twitter ? external__react__default.a.createElement("div", {
        className: classes.socialMediaWrapper
      }, external__react__default.a.createElement("div", {
        className: classes.socialMediaTitle
      }, "Social Media:"), external__react__default.a.createElement("div", {
        className: classes.socialMediaItemsWrapper
      }, facebook && external__react__default.a.createElement("a", {
        href: facebook,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaFacebook"], null)), twitter && external__react__default.a.createElement("a", {
        href: twitter,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaTwitter"], null)), instagram && external__react__default.a.createElement("a", {
        href: instagram,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaInstagram"], null)))) : null)), external__react__default.a.createElement("div", {
        className: classes.rightColumnWrapper
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h1", {
        className: classes.name
      }, name), external__react__default.a.createElement("small", {
        className: classes.title
      }, this.returnTitle(role)), external__react__default.a.createElement("div", {
        className: classes.descriptionWrapper
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, "About ", name.split(' ')[0]), external__react__default.a.createElement(FormattedText__default.a, {
        className: classes.descriptionDetails
      }, profileDescription || 'No description available yet...')))), external__react__default.a.createElement(Snackbar__default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: isEditing ? false : this.state.open,
        autoHideDuration: 6000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: external__react__default.a.createElement("span", {
          id: "message-id"
        }, "Profile saved"),
        action: [external__react__default.a.createElement(Button__default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleClose();

            undoSave();
          }
        }, "UNDO"), external__react__default.a.createElement(IconButton__default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose
        }, external__react__default.a.createElement(Close__default.a, null))]
      }));
    }
  }]);

  return Profile;
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var components_Profile = (Profile_Profile);
// EXTERNAL MODULE: external "material-ui/Dialog"
var Dialog_ = __webpack_require__(41);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(20);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(114);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var css_ = __webpack_require__(56);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(57);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "react-form"
var external__react_form_ = __webpack_require__(24);
var external__react_form__default = /*#__PURE__*/__webpack_require__.n(external__react_form_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(66);
var v4__default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "react-avatar-editor"
var external__react_avatar_editor_ = __webpack_require__(139);
var external__react_avatar_editor__default = /*#__PURE__*/__webpack_require__.n(external__react_avatar_editor_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(67);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(26);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-circular-progressbar"
var external__react_circular_progressbar_ = __webpack_require__(115);
var external__react_circular_progressbar__default = /*#__PURE__*/__webpack_require__.n(external__react_circular_progressbar_);

// EXTERNAL MODULE: ../node_modules/react-circular-progressbar/dist/styles.css
var dist_styles = __webpack_require__(103);
var styles_default = /*#__PURE__*/__webpack_require__.n(dist_styles);

// EXTERNAL MODULE: ./components/CustomSlider/index.js
var CustomSlider = __webpack_require__(140);

// EXTERNAL MODULE: external "email-validator"
var external__email_validator_ = __webpack_require__(89);
var external__email_validator__default = /*#__PURE__*/__webpack_require__.n(external__email_validator_);

// CONCATENATED MODULE: ./components/forms/EditProfilePicForm/formValidation.js


var validator = function validator(values) {
  return {};
};

/* harmony default export */ var formValidation = (validator);
// EXTERNAL MODULE: ./components/CustomFileUploadInputWrapper/index.js
var CustomFileUploadInputWrapper = __webpack_require__(105);

// EXTERNAL MODULE: ./components/MaterialCustomTextFieldWrapper/index.js
var MaterialCustomTextFieldWrapper = __webpack_require__(93);

// EXTERNAL MODULE: ./components/MaterialCustomRadioInputWrapper/index.js
var MaterialCustomRadioInputWrapper = __webpack_require__(106);

// EXTERNAL MODULE: ./components/MaterialCustomSelectInputWrapper/index.js
var MaterialCustomSelectInputWrapper = __webpack_require__(94);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(113);

// CONCATENATED MODULE: ./components/forms/EditProfilePicForm/index.js



var EditProfilePicForm__dec, EditProfilePicForm__class;

function EditProfilePicForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditProfilePicForm__typeof = function _typeof(obj) { return typeof obj; }; } else { EditProfilePicForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditProfilePicForm__typeof(obj); }

function EditProfilePicForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditProfilePicForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditProfilePicForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditProfilePicForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditProfilePicForm__defineProperties(Constructor, staticProps); return Constructor; }

function EditProfilePicForm__possibleConstructorReturn(self, call) { if (call && (EditProfilePicForm__typeof(call) === "object" || typeof call === "function")) { return call; } return EditProfilePicForm__assertThisInitialized(self); }

function EditProfilePicForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditProfilePicForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditProfilePicForm__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















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

var EditProfilePicForm_styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '30px 40px'
    }, EditProfilePicForm__defineProperty(_root, theme.breakpoints.down('md'), {
      padding: '30px 0'
    }), EditProfilePicForm__defineProperty(_root, "backgroundColor", '#fff'), _root),
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
      textAlign: 'center'
    },
    sliderWrapper: {
      width: '100%'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingLeft: '16px',
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
    sliderInput: EditProfilePicForm__defineProperty({
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
    }
  };
};

var radioInputAgentItems = [{
  label: '60%'
}, {
  label: '70%'
}, {
  label: '80%'
}];
var areaOfFocusSelectItems = [{
  label: ''
}, {
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
var EditProfilePicForm_EditProfilePicForm = (EditProfilePicForm__dec = external__react_sizes__default()(mapSizesToProps), EditProfilePicForm__dec(EditProfilePicForm__class =
/*#__PURE__*/
function (_Component) {
  EditProfilePicForm__inherits(EditProfilePicForm, _Component);

  function EditProfilePicForm() {
    EditProfilePicForm__classCallCheck(this, EditProfilePicForm);

    return EditProfilePicForm__possibleConstructorReturn(this, (EditProfilePicForm.__proto__ || Object.getPrototypeOf(EditProfilePicForm)).apply(this, arguments));
  }

  EditProfilePicForm__createClass(EditProfilePicForm, [{
    key: "render",
    value: function render() {
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
          onSubmit = _props.onSubmit;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, !formSubmitedSuccessfully && external__react__default.a.createElement(external__react_form_["Form"], {
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: formValidation,
        getApi: this.props.getFormApi
      }, function (formApi) {
        return external__react__default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot
        }, external__react__default.a.createElement(Grid__default.a, {
          container: true
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12
        }, external__react__default.a.createElement("div", {
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
          accept: ".jpg, .jpeg, .png"
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
        }) : null) : null))))));
      }), uplodingImageProgress
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

  return EditProfilePicForm;
}(external__react_["Component"])) || EditProfilePicForm__class);
/* harmony default export */ var forms_EditProfilePicForm = (Object(styles_["withStyles"])(EditProfilePicForm_styles)(EditProfilePicForm_EditProfilePicForm));
// EXTERNAL MODULE: ./utils/Math.js
var utils_Math = __webpack_require__(70);

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(5);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(6);

// CONCATENATED MODULE: ./effects/getProfilePicSignedURL.js


var query = "\n  mutation getProfilePicSignedURL($input: getProfilePicSignedURLInput!) {\n    getProfilePicSignedURL(input: $input) {\n      item {\n        signedURL\n        fileName\n        error\n      }\n      error\n    }\n  }\n";
var client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var getProfilePicSignedURL = function getProfilePicSignedURL(value) {
  var res;
  var error;
  var variables = {
    input: value
  };
  var finalResponseObj = {
    signedURL: null,
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.getProfilePicSignedURL;
    var item = data.item,
        error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.item = item;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var effects_getProfilePicSignedURL = (getProfilePicSignedURL);
// EXTERNAL MODULE: ./effects/users/setAgentProfilePic.js
var setAgentProfilePic = __webpack_require__(144);

// CONCATENATED MODULE: ./containers/EditProfilePicForm.js
var containers_EditProfilePicForm__class;

function containers_EditProfilePicForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { containers_EditProfilePicForm__typeof = function _typeof(obj) { return typeof obj; }; } else { containers_EditProfilePicForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return containers_EditProfilePicForm__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function containers_EditProfilePicForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function containers_EditProfilePicForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function containers_EditProfilePicForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) containers_EditProfilePicForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) containers_EditProfilePicForm__defineProperties(Constructor, staticProps); return Constructor; }

function containers_EditProfilePicForm__possibleConstructorReturn(self, call) { if (call && (containers_EditProfilePicForm__typeof(call) === "object" || typeof call === "function")) { return call; } return containers_EditProfilePicForm__assertThisInitialized(self); }

function containers_EditProfilePicForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function containers_EditProfilePicForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var EditProfilePicForm_EditProfilePicFormContainer = Object(external__mobx_react_["observer"])(containers_EditProfilePicForm__class =
/*#__PURE__*/
function (_Component) {
  containers_EditProfilePicForm__inherits(EditProfilePicFormContainer, _Component);

  function EditProfilePicFormContainer(props) {
    var _this;

    containers_EditProfilePicForm__classCallCheck(this, EditProfilePicFormContainer);

    _this = containers_EditProfilePicForm__possibleConstructorReturn(this, (EditProfilePicFormContainer.__proto__ || Object.getPrototypeOf(EditProfilePicFormContainer)).call(this, props));
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "setImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          imageFile: file
        });
      }
    });
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "clearImageFile", {
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
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "getFileUploadInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(input) {
        _this._fileUploadInput = input;
      }
    });
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "getProfilePicEditor", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(editor) {
        _this._profilePicEditor = editor;
      }
    });
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "setImageScale", {
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
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "confirmImageFile", {
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
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "setFinishedLoadingImg", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          loadingSetImg: false
        });
      }
    });
    Object.defineProperty(containers_EditProfilePicForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        var _this$state = _this.state,
            imageFile = _this$state.imageFile,
            imageFileConfirmed = _this$state.imageFileConfirmed,
            imageBlob = _this$state.imageBlob;
        if (!imageFile || !imageFileConfirmed) return;

        _this.props.setFormSubmitted();

        var returnValues = {
          fileName: imageFile.name,
          fileType: imageFile.type,
          uuid: _this.props.uuid
        };
        console.log(returnValues);

        _this.props.toggleSubmittingEditProfilePicForm(true);

        effects_getProfilePicSignedURL(returnValues).then(function (result) {
          var item = result.item,
              error = result.error;
          var hasError;

          if (error) {
            console.log(error);
            hasError = true;
          }

          if (!item && item[0] && item[0].error) {
            console.log(item[0].error);
            hasError = true;
          }

          if (hasError) {
            _this.props.openRequestErrorSnackbar();

            _this.props.toggleSubmittingEditProfilePicForm(false);

            _this.props.setFormSubmitted(false);

            return;
          }

          if (item[0].signedURL) {
            external__axios__default.a.put(item[0].signedURL, imageBlob, {
              headers: {
                'Content-Type': _this.state.imageFile.type
              },
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;

                _this.setState({
                  formSubmitedSuccessfully: true,
                  uplodingImageProgress: Math.floor(loadedPercent),
                  isUploadingImage: loadedPercent >= 100 ? false : true
                });
              }
            }).then(function (response) {
              var status = "".concat(response.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  isUploadingImage: false
                });

                _this.props.setFormSubmitted(false);

                if (_this.props.openRequestErrorSnackbar) {
                  _this.props.openRequestErrorSnackbar('There was an error uploading your file. Please try again shortly.');
                }

                return;
              }

              Object(setAgentProfilePic["a" /* default */])(_this.props.uuid, item[0].fileName).then(function (res) {
                _this.props.setFinishedSubmittingForm(res.url);

                _this.props.setFormSubmitted(false);
              });
            });
          }
        }).catch(function (err) {
          console.log(err);

          _this.props.openRequestErrorSnackbar();

          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingEditProfilePicForm(true);
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
      imageBlob: null
    };
    return _this;
  }

  containers_EditProfilePicForm__createClass(EditProfilePicFormContainer, [{
    key: "onSubmitFailure",
    value: function onSubmitFailure(errs, onSubmitError) {
      console.log(errs);
      console.log(onSubmitError);
      this.props.setFormSubmitted(false);
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
      }, external__react__default.a.createElement(forms_EditProfilePicForm, _extends({
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
        getFormApi: function getFormApi(formApi) {
          console.log(formApi);
          _this2._formApi = formApi;
        }
      }, rest)));
    }
  }]);

  return EditProfilePicFormContainer;
}(external__react_["Component"])) || containers_EditProfilePicForm__class;

/* harmony default export */ var containers_EditProfilePicForm = (EditProfilePicForm_EditProfilePicFormContainer);
// EXTERNAL MODULE: ./AppGlobalStateProvider/index.js
var AppGlobalStateProvider = __webpack_require__(68);

// CONCATENATED MODULE: ./components/EditProfilePicDialogBox/index.js
var EditProfilePicDialogBox__class;

function EditProfilePicDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditProfilePicDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { EditProfilePicDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditProfilePicDialogBox__typeof(obj); }

function EditProfilePicDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditProfilePicDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditProfilePicDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditProfilePicDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditProfilePicDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function EditProfilePicDialogBox__possibleConstructorReturn(self, call) { if (call && (EditProfilePicDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return EditProfilePicDialogBox__assertThisInitialized(self); }

function EditProfilePicDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditProfilePicDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var networkErrorMessage = "We're sorry. There was an error processing your request.";

var EditProfilePicDialogBox_styles = function styles(theme) {
  return {
    paper: {
      width: '600px',
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
      bottom: 0
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var EditProfilePicDialogBox_EditProfilePicDialogBox = Object(external__mobx_react_["observer"])(EditProfilePicDialogBox__class =
/*#__PURE__*/
function (_Component) {
  EditProfilePicDialogBox__inherits(EditProfilePicDialogBox, _Component);

  function EditProfilePicDialogBox(props) {
    var _this;

    EditProfilePicDialogBox__classCallCheck(this, EditProfilePicDialogBox);

    _this = EditProfilePicDialogBox__possibleConstructorReturn(this, (EditProfilePicDialogBox.__proto__ || Object.getPrototypeOf(EditProfilePicDialogBox)).call(this, props));
    Object.defineProperty(EditProfilePicDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
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
    Object.defineProperty(EditProfilePicDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(EditProfilePicDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(EditProfilePicDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
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
      submittingForm: false,
      snackbarOpen: false,
      snackbarText: '',
      isErrorSnackbar: false
    };
    return _this;
  }

  EditProfilePicDialogBox__createClass(EditProfilePicDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeProfilePicEditor = _props.closeProfilePicEditor,
          open = _props.open,
          submitProfilePicEditForm = _props.submitProfilePicEditForm,
          finishedSubmittingForm = _props.finishedSubmittingForm,
          submittingEditProfilePicForm = _props.submittingEditProfilePicForm,
          toggleSubmittingEditProfilePicForm = _props.toggleSubmittingEditProfilePicForm,
          editProfilePicFormSubmitted = _props.editProfilePicFormSubmitted,
          setFormSubmitted = _props.setFormSubmitted,
          setFinishedSubmittingForm = _props.setFinishedSubmittingForm;
      return external__react__default.a.createElement(Dialog__default.a, {
        open: open,
        onClose: closeProfilePicEditor,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "Edit Profile Picture"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog"
      }, external__react__default.a.createElement(AppGlobalStateProvider["a" /* AppContext */].Consumer, null, function (context) {
        return external__react__default.a.createElement(containers_EditProfilePicForm, {
          userUUID: _this2.props.userUUID,
          setIsSubmittingForm: _this2.setIsSubmittingForm,
          finishedSubmittingForm: finishedSubmittingForm,
          getFormApi: function getFormApi(formApi) {
            return _this2.setState({
              formApi: formApi
            });
          },
          createAgent: context.UserStore.createAgent,
          setAgentProfilePic: context.UserStore.setAgentProfilePic,
          submitProfilePicEditForm: submitProfilePicEditForm,
          setFormSubmitted: setFormSubmitted,
          setFinishedSubmittingForm: setFinishedSubmittingForm,
          editProfilePicFormSubmitted: editProfilePicFormSubmitted,
          openRequestErrorSnackbar: _this2.openRequestErrorSnackbar,
          toggleSubmittingEditProfilePicForm: toggleSubmittingEditProfilePicForm,
          uuid: _this2.props.uuid
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
      })), !submittingEditProfilePicForm ? external__react__default.a.createElement(Dialog_["DialogActions"], {
        classes: {
          root: classes.dialogActions
        }
      }, external__react__default.a.createElement(Button__default.a, {
        onClick: closeProfilePicEditor,
        color: "primary"
      }, "Cancel"), external__react__default.a.createElement(Button__default.a, {
        onClick: function onClick() {
          return _this2.state.formApi.submitForm();
        },
        color: "primary"
      }, "Submit", ' ')) : null);
    }
  }]);

  return EditProfilePicDialogBox;
}(external__react_["Component"])) || EditProfilePicDialogBox__class;

/* harmony default export */ var components_EditProfilePicDialogBox = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(EditProfilePicDialogBox_styles)(EditProfilePicDialogBox_EditProfilePicDialogBox)));
// EXTERNAL MODULE: ./components/forms/CreateAgentForm/index.js + 1 modules
var CreateAgentForm = __webpack_require__(143);

// CONCATENATED MODULE: ./effects/users/updateAgent.js


var updateAgent_query = "\n  mutation updateAgent($input: UpdateAgentInput!) {\n    updateAgent(input: $input) {\n      agent {\n        firstName\n        lastName\n        role\n        email\n        role\n        agent {\n          profilePicURL\n          mobileNumber\n          officeNumber\n          branch\n          profileDescription\n          facebook\n          twitter\n          instagram\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var updateAgent_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var updateAgent = function updateAgent(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    agent: null,
    otherError: null,
    userErrors: []
  };
  return updateAgent_client.request(updateAgent_query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.updateAgent;
    var agent = data.agent,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.agent = agent;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var users_updateAgent = (updateAgent);
// CONCATENATED MODULE: ./containers/EditAgentForm.js
var EditAgentForm__class;

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agent($uuid: String!) {\n    agent(uuid: $uuid) {\n      firstName\n      lastName\n      email\n      role\n      agent {\n        profilePicURL\n        branch\n        state\n        mobileNumber\n        officeNumber\n        areaOfFocus\n        realEstateLicenseNumber\n        agentType\n        ACHAccountNumber\n        facebook\n        instagram\n        twitter\n        profileDescription\n      }\n    }\n  }\n"]);

function EditAgentForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditAgentForm__typeof = function _typeof(obj) { return typeof obj; }; } else { EditAgentForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditAgentForm__typeof(obj); }

function EditAgentForm__extends() { EditAgentForm__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditAgentForm__extends.apply(this, arguments); }

function EditAgentForm__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { EditAgentForm__defineProperty(target, key, source[key]); }); } return target; }

function EditAgentForm__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditAgentForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditAgentForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditAgentForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditAgentForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditAgentForm__defineProperties(Constructor, staticProps); return Constructor; }

function EditAgentForm__possibleConstructorReturn(self, call) { if (call && (EditAgentForm__typeof(call) === "object" || typeof call === "function")) { return call; } return EditAgentForm__assertThisInitialized(self); }

function EditAgentForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditAgentForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var EditAgentForm_Loader = external__react_spinners_["BounceLoader"];
var agentQuery = external__graphql_tag__default()(_templateObject);

var EditAgentForm_CreateAgentContainer = Object(external__mobx_react_["observer"])(EditAgentForm__class =
/*#__PURE__*/
function (_Component) {
  EditAgentForm__inherits(CreateAgentContainer, _Component);

  function CreateAgentContainer(props) {
    var _this;

    EditAgentForm__classCallCheck(this, CreateAgentContainer);

    _this = EditAgentForm__possibleConstructorReturn(this, (CreateAgentContainer.__proto__ || Object.getPrototypeOf(CreateAgentContainer)).call(this, props));
    Object.defineProperty(EditAgentForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        var returnValues = _objectSpread({}, values, {
          uuid: _this.props.viewingAgentUUID
        });

        console.log(values);

        _this.props.setFormSubmitted();

        _this.props.toggleSubmittingRequestToServer(true);

        users_updateAgent(returnValues).then(function (result) {
          var userErrors = result.userErrors,
              otherError = result.otherError,
              agent = result.agent;
          var hasErrors = false;

          if (userErrors.length) {
            userErrors.forEach(function (error) {
              console.log(error);

              if (error.field === 'email') {
                var formElement = document.getElementById('formDialog');
                formApi.setError(error.field, error.message);
                formElement.scrollTop = formElement.scrollHeight;
              }

              hasErrors = true;
            });

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          } else if (otherError) {
            _this.props.openRequestErrorSnackbar(otherError);

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          } else if (!agent) {
            _this.props.openRequestErrorSnackbar();

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          }

          _this.setState({
            formSubmitedSuccessfully: true
          });

          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.editAgentFormSubmittedSuccessfully(agent);
        }).catch(function (err) {
          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(EditAgentForm__assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError) {
        console.log(errs);
        console.log(onSubmitError);

        _this.props.setFormSubmitted(false);
      }
    });
    _this.state = {
      formSubmitedSuccessfully: false
    };
    return _this;
  }

  EditAgentForm__createClass(CreateAgentContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          viewingAgentUUID = _props.viewingAgentUUID,
          rest = EditAgentForm__objectWithoutProperties(_props, ["classes", "viewingAgentUUID"]);

      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: agentQuery,
        variables: {
          uuid: viewingAgentUUID
        },
        fetchPolicy: "cache-and-network"
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, external__react__default.a.createElement(EditAgentForm_Loader, {
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

        var submittedInvoice = data.agent;
        return external__react__default.a.createElement("div", {
          style: {
            width: '100%'
          }
        }, external__react__default.a.createElement(CreateAgentForm["a" /* default */], EditAgentForm__extends({
          submittedAgent: data.agent,
          isViewType: true,
          onSubmit: _this2.onSubmit,
          onSubmitFailure: _this2.onSubmitFailure,
          formSubmitedSuccessfully: _this2.state.formSubmitedSuccessfully,
          isEditingAgent: _this2.props.isEditingAgent,
          currentUserRole: _this2.props.currentUserRole,
          getFormApi: _this2.props.getFormApi,
          submittingFormToServer: _this2.props.submittingRequestToServer
        }, rest)));
      });
    }
  }]);

  return CreateAgentContainer;
}(external__react_["Component"])) || EditAgentForm__class;

/* harmony default export */ var EditAgentForm = (EditAgentForm_CreateAgentContainer);
// CONCATENATED MODULE: ./effects/users/deleteAgent.js


var deleteAgent_query = "\n  mutation deleteAgent($uuid: String!) {\n    deleteAgent(uuid: $uuid) {\n      error\n    }\n  }\n";
var deleteAgent_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var deleteAgent = function deleteAgent(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    error: null
  };
  return deleteAgent_client.request(deleteAgent_query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.deleteAgent;
    var error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var users_deleteAgent = (deleteAgent);
// CONCATENATED MODULE: ./components/EditAgentDialogBox/index.js
var EditAgentDialogBox__class;

function EditAgentDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditAgentDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { EditAgentDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditAgentDialogBox__typeof(obj); }

function EditAgentDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditAgentDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditAgentDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditAgentDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditAgentDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function EditAgentDialogBox__possibleConstructorReturn(self, call) { if (call && (EditAgentDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return EditAgentDialogBox__assertThisInitialized(self); }

function EditAgentDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditAgentDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditAgentDialogBox__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var EditAgentDialogBox_networkErrorMessage = "We're sorry. There was an error processing your request.";

var EditAgentDialogBox_styles = function styles(theme) {
  var _ref;

  return _ref = {
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
      marginBottom: '60px',
      '@media (max-height: 500px)': {
        marginBottom: '50px'
      },
      '@media (max-height: 390px)': {
        marginBottom: '30px'
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
    editAgentBtn: {
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
      }
    }
  }, EditAgentDialogBox__defineProperty(_ref, "snackBar", {
    position: 'absolute',
    bottom: 0
  }), EditAgentDialogBox__defineProperty(_ref, "errorSnackbar", {
    '& > div': {
      backgroundColor: theme.palette.secondary.main
    }
  }), _ref;
};

var EditAgentDialogBox_EditAgentDialogBox = Object(external__mobx_react_["observer"])(EditAgentDialogBox__class =
/*#__PURE__*/
function (_Component) {
  EditAgentDialogBox__inherits(EditAgentDialogBox, _Component);

  function EditAgentDialogBox(props) {
    var _this$state;

    var _this;

    EditAgentDialogBox__classCallCheck(this, EditAgentDialogBox);

    _this = EditAgentDialogBox__possibleConstructorReturn(this, (EditAgentDialogBox.__proto__ || Object.getPrototypeOf(EditAgentDialogBox)).call(this, props));
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          isEditingAgent: false
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "toggleEditingAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingAgent: typeof bool === 'boolean' ? bool : !_this.state.isEditingAgent
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "handleCancelMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          cancelAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "handleCancelMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          cancelAnchorEl: null
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "handleAcceptMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          acceptAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "handleAcceptMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          acceptAnchorEl: null
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "deleteAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(uuid) {
        _this.toggleSubmittingRequestToServer(true);

        users_deleteAgent(uuid).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);
          } else {
            _this.props.agentSuccessfullyDeleted();
          }
        }).catch(function (err) {
          _this.openRequestErrorSnackbar(EditAgentDialogBox_networkErrorMessage);

          _this.toggleSubmittingRequestToServer(false);

          console.log(err);
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EditAgentDialogBox_networkErrorMessage;

        _this.setState({
          snackbarOpen: true,
          snackbarText: text,
          isErrorSnackbar: true
        });
      }
    });
    Object.defineProperty(EditAgentDialogBox__assertThisInitialized(_this), "toggleSubmittingRequestToServer", {
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
    _this.state = (_this$state = {
      formApi: null,
      formSubmitted: false,
      isEditingAgent: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
      snackbarOpen: false,
      snackbarText: ''
    }, EditAgentDialogBox__defineProperty(_this$state, "isEditingAgent", false), EditAgentDialogBox__defineProperty(_this$state, "cancelAnchorEl", null), EditAgentDialogBox__defineProperty(_this$state, "acceptAnchorEl", null), EditAgentDialogBox__defineProperty(_this$state, "isErrorSnackbar", false), EditAgentDialogBox__defineProperty(_this$state, "snackbarText", ''), _this$state);
    return _this;
  }

  EditAgentDialogBox__createClass(EditAgentDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeEditAgentDialogBox = _props.closeEditAgentDialogBox,
          open = _props.open,
          viewingAgentUUID = _props.viewingAgentUUID,
          currentUserUUID = _props.currentUserUUID,
          currentUserRole = _props.currentUserRole;
      var _state = this.state,
          isEditingAgent = _state.isEditingAgent,
          cancelAnchorEl = _state.cancelAnchorEl,
          acceptAnchorEl = _state.acceptAnchorEl;
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
      }, "Edit Agent"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog"
      }, external__react__default.a.createElement(EditAgentForm, {
        viewingAgentUUID: this.props.viewingAgentUUID,
        setFormSubmitted: this.setFormSubmitted,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        editAgent: users_updateAgent,
        confirmAgentCreated: this.props.confirmAgentCreated,
        isEditingAgent: isEditingAgent,
        currentUserRole: this.props.currentUserRole,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        submittingRequestToServer: this.state.submittingRequestToServer,
        toggleSubmittingRequestToServer: this.toggleSubmittingRequestToServer,
        editAgentFormSubmittedSuccessfully: this.props.editAgentFormSubmittedSuccessfully
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
          _this2.toggleEditingAgent(false);

          closeEditAgentDialogBox();
        },
        color: "primary"
      }, "Cancel"), !isEditingAgent && (this.props.currentUserRole === userTypes["superAdmin"] || this.props.currentUserRole === userTypes["admin"]) ? external__react__default.a.createElement(Button__default.a, {
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

          _this2.deleteAgent(viewingAgentUUID);
        }
      }, "Yes"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose
      }, "No")), !isEditingAgent && (this.props.currentUserRole === userTypes["agent"] || this.props.currentUserRole === userTypes["admin"] || this.props.currentUserRole === userTypes["superAdmin"]) ? external__react__default.a.createElement(Button__default.a, {
        className: classes.editAgentBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary"
      }, "Edit") : null, external__react__default.a.createElement(Menu__default.a, {
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

          _this2.toggleEditingAgent(true);
        }
      }, "Yes"), external__react__default.a.createElement(MenuItem__default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose
      }, "No")), isEditingAgent ? external__react__default.a.createElement(Button__default.a, {
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

  return EditAgentDialogBox;
}(external__react_["Component"])) || EditAgentDialogBox__class;

/* harmony default export */ var components_EditAgentDialogBox = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(EditAgentDialogBox_styles)(EditAgentDialogBox_EditAgentDialogBox)));
// EXTERNAL MODULE: ./components/forms/EditAgentPasswordForm/index.js + 1 modules
var EditAgentPasswordForm = __webpack_require__(163);

// CONCATENATED MODULE: ./effects/users/editAgentPassword.js


var editAgentPassword_query = "\n  mutation editAgentPassword($input: EditPasswordInput!) {\n    editAgentPassword(input: $input) {\n      userErrors {\n        field\n        message\n      }\n     otherError\n    }\n  }\n";
var editAgentPassword_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

var editAgentPassword = function editAgentPassword(values) {
  var res;
  var error;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    error: null
  };
  return editAgentPassword_client.request(editAgentPassword_query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.editAgentPassword;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.userErrors.length ? {
        message: data.userErrors[0].message,
        field: data.userErrors[0].field
      } : data.otherError;
    }

    if (error) {
      finalResponseObj.error = error;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ var users_editAgentPassword = (editAgentPassword);
// CONCATENATED MODULE: ./containers/EditAgentPasswordForm.js
var EditAgentPasswordForm__class;

function EditAgentPasswordForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditAgentPasswordForm__typeof = function _typeof(obj) { return typeof obj; }; } else { EditAgentPasswordForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditAgentPasswordForm__typeof(obj); }

function EditAgentPasswordForm__extends() { EditAgentPasswordForm__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditAgentPasswordForm__extends.apply(this, arguments); }

function EditAgentPasswordForm__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function EditAgentPasswordForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditAgentPasswordForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditAgentPasswordForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditAgentPasswordForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditAgentPasswordForm__defineProperties(Constructor, staticProps); return Constructor; }

function EditAgentPasswordForm__possibleConstructorReturn(self, call) { if (call && (EditAgentPasswordForm__typeof(call) === "object" || typeof call === "function")) { return call; } return EditAgentPasswordForm__assertThisInitialized(self); }

function EditAgentPasswordForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditAgentPasswordForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var EditAgentPasswordForm_EditAgentPasswordFormContainer = Object(external__mobx_react_["observer"])(EditAgentPasswordForm__class =
/*#__PURE__*/
function (_Component) {
  EditAgentPasswordForm__inherits(EditAgentPasswordFormContainer, _Component);

  function EditAgentPasswordFormContainer(props) {
    var _this;

    EditAgentPasswordForm__classCallCheck(this, EditAgentPasswordFormContainer);

    _this = EditAgentPasswordForm__possibleConstructorReturn(this, (EditAgentPasswordFormContainer.__proto__ || Object.getPrototypeOf(EditAgentPasswordFormContainer)).call(this, props));
    Object.defineProperty(EditAgentPasswordForm__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        _this.props.setFormSubmitted();

        _this.props.toggleSubmittingRequestToServer(true);

        var returnValues = {
          uuid: _this.props.viewingAgentUUID,
          newPassword: values.password
        };
        users_editAgentPassword(returnValues).then(function (res) {
          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.props.openRequestErrorSnackbar(res.error);

            return;
          }

          _this.props.formSubmittedSuccessfully();
        }).catch(function (err) {
          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.setFormSubmitted(false);

          _this.props.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(EditAgentPasswordForm__assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError) {
        console.log(errs);
        console.log(onSubmitError);

        _this.props.setFormSubmitted(false);
      }
    });
    _this.state = {
      formSubmitedSuccessfully: false
    };
    return _this;
  }

  EditAgentPasswordForm__createClass(EditAgentPasswordFormContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = EditAgentPasswordForm__objectWithoutProperties(_props, ["classes"]);

      return external__react__default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, external__react__default.a.createElement(EditAgentPasswordForm["a" /* default */], EditAgentPasswordForm__extends({
        onSubmit: this.onSubmit,
        onSubmitFailure: this.onSubmitFailure,
        formSubmitedSuccessfully: this.state.formSubmitedSuccessfully,
        getFormApi: this.props.getFormApi,
        submittingFormToServer: this.props.submittingRequestToServer
      }, rest)));
    }
  }]);

  return EditAgentPasswordFormContainer;
}(external__react_["Component"])) || EditAgentPasswordForm__class;

/* harmony default export */ var containers_EditAgentPasswordForm = (EditAgentPasswordForm_EditAgentPasswordFormContainer);
// CONCATENATED MODULE: ./components/EditAgentPasswordDialogBox/index.js
var EditAgentPasswordDialogBox__class;

function EditAgentPasswordDialogBox__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditAgentPasswordDialogBox__typeof = function _typeof(obj) { return typeof obj; }; } else { EditAgentPasswordDialogBox__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditAgentPasswordDialogBox__typeof(obj); }

function EditAgentPasswordDialogBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditAgentPasswordDialogBox__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditAgentPasswordDialogBox__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditAgentPasswordDialogBox__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditAgentPasswordDialogBox__defineProperties(Constructor, staticProps); return Constructor; }

function EditAgentPasswordDialogBox__possibleConstructorReturn(self, call) { if (call && (EditAgentPasswordDialogBox__typeof(call) === "object" || typeof call === "function")) { return call; } return EditAgentPasswordDialogBox__assertThisInitialized(self); }

function EditAgentPasswordDialogBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditAgentPasswordDialogBox__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var EditAgentPasswordDialogBox_networkErrorMessage = "We're sorry. There was an error processing your request.";

var EditAgentPasswordDialogBox_styles = function styles(theme) {
  return {
    paper: {
      width: '600px',
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
      position: 'relative',
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
      bottom: 0
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var EditAgentPasswordDialogBox_EditAgentPasswordDialogBox = Object(external__mobx_react_["observer"])(EditAgentPasswordDialogBox__class =
/*#__PURE__*/
function (_Component) {
  EditAgentPasswordDialogBox__inherits(EditAgentPasswordDialogBox, _Component);

  function EditAgentPasswordDialogBox(props) {
    var _this;

    EditAgentPasswordDialogBox__classCallCheck(this, EditAgentPasswordDialogBox);

    _this = EditAgentPasswordDialogBox__possibleConstructorReturn(this, (EditAgentPasswordDialogBox.__proto__ || Object.getPrototypeOf(EditAgentPasswordDialogBox)).call(this, props));
    Object.defineProperty(EditAgentPasswordDialogBox__assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          submittingForm: !bool
        });
      }
    });
    Object.defineProperty(EditAgentPasswordDialogBox__assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(EditAgentPasswordDialogBox__assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(EditAgentPasswordDialogBox__assertThisInitialized(_this), "openRequestErrorSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EditAgentPasswordDialogBox_networkErrorMessage;

        _this.setState({
          snackbarOpen: true,
          snackbarText: text,
          isErrorSnackbar: true
        });
      }
    });
    Object.defineProperty(EditAgentPasswordDialogBox__assertThisInitialized(_this), "toggleSubmittingRequestToServer", {
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
      submittingForm: false,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      submittingRequestToServer: false,
      isErrorSnackbar: false
    };
    return _this;
  }

  EditAgentPasswordDialogBox__createClass(EditAgentPasswordDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeEditAgentDialogBox = _props.closeEditAgentDialogBox,
          closeEditAgentPasswordDialogBox = _props.closeEditAgentPasswordDialogBox,
          open = _props.open,
          submitProfilePicEditForm = _props.submitProfilePicEditForm,
          finishedSubmittingForm = _props.finishedSubmittingForm,
          submittingEditAgentPasswordForm = _props.submittingEditAgentPasswordForm,
          editProfilePicFormSubmitted = _props.editProfilePicFormSubmitted,
          setFormSubmitted = _props.setFormSubmitted,
          setFinishedSubmittingForm = _props.setFinishedSubmittingForm;
      return external__react__default.a.createElement(Dialog__default.a, {
        open: open,
        onClose: closeEditAgentPasswordDialogBox,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen
      }, external__react__default.a.createElement(Dialog_["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        }
      }, "Change Password"), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(Dialog_["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog"
      }, external__react__default.a.createElement(containers_EditAgentPasswordForm, {
        viewingAgentUUID: this.props.viewingAgentUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        submittingRequestToServer: this.state.submittingRequestToServer,
        toggleSubmittingRequestToServer: this.toggleSubmittingRequestToServer,
        formSubmittedSuccessfully: this.props.editPasswordFormSubmittedSuccessfully
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
      })), !submittingEditAgentPasswordForm ? external__react__default.a.createElement(Dialog_["DialogActions"], {
        classes: {
          root: classes.dialogActions
        }
      }, external__react__default.a.createElement(Button__default.a, {
        onClick: closeEditAgentPasswordDialogBox,
        color: "primary"
      }, "Cancel"), !editProfilePicFormSubmitted ? external__react__default.a.createElement(Button__default.a, {
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
      }, "Submit", ' ') : null) : null);
    }
  }]);

  return EditAgentPasswordDialogBox;
}(external__react_["Component"])) || EditAgentPasswordDialogBox__class;

/* harmony default export */ var components_EditAgentPasswordDialogBox = (Object(Dialog_["withMobileDialog"])()(Object(styles_["withStyles"])(EditAgentPasswordDialogBox_styles)(EditAgentPasswordDialogBox_EditAgentPasswordDialogBox)));
// CONCATENATED MODULE: ./containers/Profile.js
var Profile__dec, Profile__class, _class2, _temp, Profile__initialiseProps;

function Profile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Profile__typeof = function _typeof(obj) { return typeof obj; }; } else { Profile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Profile__typeof(obj); }

function Profile__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Profile__defineProperty(target, key, source[key]); }); } return target; }

function Profile__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Profile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Profile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Profile__createClass(Constructor, protoProps, staticProps) { if (protoProps) Profile__defineProperties(Constructor.prototype, protoProps); if (staticProps) Profile__defineProperties(Constructor, staticProps); return Constructor; }

function Profile__possibleConstructorReturn(self, call) { if (call && (Profile__typeof(call) === "object" || typeof call === "function")) { return call; } return Profile__assertThisInitialized(self); }

function Profile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Profile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var Profile_styles = function styles(theme) {
  return {
    submitInvoiceBtn: {},
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

var Profile_ProfileContainer = (Profile__dec = Object(styles_["withStyles"])(Profile_styles), Object(external__mobx_react_["observer"])(Profile__class = Profile__dec(Profile__class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  Profile__inherits(ProfileContainer, _Component);

  function ProfileContainer(props) {
    var _this;

    Profile__classCallCheck(this, ProfileContainer);

    _this = Profile__possibleConstructorReturn(this, (ProfileContainer.__proto__ || Object.getPrototypeOf(ProfileContainer)).call(this, props));

    Profile__initialiseProps.call(Profile__assertThisInitialized(_this));

    var agent = _this.props.agent;
    _this.state = {
      user: agent,
      isEditing: false,
      profilePicEditorDialogBoxOpen: false,
      submittingEditProfilePicForm: false,
      editProfilePicFormSubmitted: false,
      editAgentModalOpen: false,
      editAgentDialogBoxOpen: false,
      editAgentPasswordDialogBoxOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      isLoadingProfilePicture: true
    };
    return _this;
  }

  Profile__createClass(ProfileContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isEditing = _state.isEditing,
          profileEdited = _state.profileEdited,
          profilePicEditorDialogBoxOpen = _state.profilePicEditorDialogBoxOpen,
          submittingEditProfilePicForm = _state.submittingEditProfilePicForm,
          editProfilePicFormSubmitted = _state.editProfilePicFormSubmitted,
          isLoadingProfilePicture = _state.isLoadingProfilePicture;
      var toggleEditingMode = this.toggleEditingMode,
          toggleProfileEdited = this.toggleProfileEdited,
          setMobileNumber = this.setMobileNumber,
          setDescription = this.setDescription,
          enterEditingMode = this.enterEditingMode,
          cancelEditingMode = this.cancelEditingMode,
          saveUser = this.saveUser,
          openProfilePicEditor = this.openProfilePicEditor,
          closeProfilePicEditor = this.closeProfilePicEditor,
          undoSave = this.undoSave,
          toggleEditAgentModal = this.toggleEditAgentModal;
      var classes = this.props.classes;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(components_Profile, {
        agent: this.state.user,
        isEditing: isEditing,
        enterEditingMode: enterEditingMode,
        cancelEditingMode: cancelEditingMode,
        profileEdited: profileEdited,
        toggleProfileEdited: toggleProfileEdited,
        setMobileNumber: setMobileNumber,
        setDescription: setDescription,
        saveUser: saveUser,
        undoSave: undoSave,
        openProfilePicEditor: openProfilePicEditor,
        currentUserRole: this.props.currentUserRole,
        currentUserUUID: this.props.currentUserUUID,
        openEditAgentDialogBox: this.openEditAgentDialogBox,
        openEditAgentPasswordDialogBox: this.openEditAgentPasswordDialogBox,
        uuid: this.props.uuid,
        isLoadingProfilePicture: isLoadingProfilePicture,
        toggleIsLoadingProfilePicture: this.toggleIsLoadingProfilePicture
      }), external__react__default.a.createElement(components_EditAgentDialogBox, {
        open: this.state.editAgentDialogBoxOpen,
        closeEditAgentDialogBox: this.closeEditAgentDialogBox,
        confirmAgentCreated: this.confirmAgentCreated,
        viewingAgentUUID: this.props.uuid,
        currentUserRole: this.props.currentUserRole,
        agentSuccessfullyDeleted: this.agentSuccessfullyDeleted,
        editAgentFormSubmittedSuccessfully: this.editAgentFormSubmittedSuccessfully
      }), external__react__default.a.createElement(components_EditAgentPasswordDialogBox, {
        closeEditAgentPasswordDialogBox: this.closeEditAgentPasswordDialogBox,
        open: this.state.editAgentPasswordDialogBoxOpen,
        viewingAgentUUID: this.props.uuid,
        editPasswordFormSubmittedSuccessfully: this.editPasswordFormSubmittedSuccessfully
      }), external__react__default.a.createElement(components_EditProfilePicDialogBox, {
        submitProfilePicEditForm: this.submitProfilePicEditForm,
        closeProfilePicEditor: closeProfilePicEditor,
        open: profilePicEditorDialogBoxOpen,
        confirmProfilePicSubmitted: this.confirmProfilePicSubmitted,
        setFinishedSubmittingForm: this.setFinishedSubmittingForm,
        submittingEditProfilePicForm: submittingEditProfilePicForm,
        editProfilePicFormSubmitted: editProfilePicFormSubmitted,
        setFormSubmitted: this.setFormSubmitted,
        toggleSubmittingEditProfilePicForm: this.toggleSubmittingEditProfilePicForm,
        uuid: this.props.uuid
      }), external__react__default.a.createElement(Snackbar__default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'top',
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
      }));
    }
  }]);

  return ProfileContainer;
}(external__react_["Component"]), Profile__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "openProfilePicEditor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeProfilePicEditor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: false,
        editProfilePicFormSubmitted: false
      });
    }
  });
  Object.defineProperty(this, "confirmProfilePicSubmitted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "toggleIsLoadingProfilePicture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      console.log("loaded: ".concat(bool));

      _this3.setState({
        isLoadingProfilePicture: bool
      });
    }
  });
  Object.defineProperty(this, "setFinishedSubmittingForm", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(url) {
      var user = _this3.state.user;

      _this3.setState({
        user: Profile__objectSpread({}, user, {
          agent: Profile__objectSpread({}, user.agent, {
            profilePicURL: "".concat(url, "?cacheBust=").concat(external__faker__default.a.random.uuid())
          })
        }),
        profilePicEditorDialogBoxOpen: false,
        isLoadingProfilePicture: true,
        submittingEditProfilePicForm: false,
        editProfilePicFormSubmitted: false,
        snackbarOpen: true,
        snackbarText: 'Profile picture successfully changed!'
      }, function () {
        var picEl = document.getElementById('agentProfilePic');

        if (picEl) {
          picEl.src = "".concat(url, "?cache=").concat(external__faker__default.a.random.uuid());
        }
      });
    }
  });
  Object.defineProperty(this, "editPasswordFormSubmittedSuccessfully", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: false,
        snackbarOpen: true,
        snackbarText: 'Password successfully changed!'
      });
    }
  });
  Object.defineProperty(this, "editAgentFormSubmittedSuccessfully", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(agent) {
      _this3.setState({
        user: agent,
        editAgentDialogBoxOpen: false,
        snackbarOpen: true,
        snackbarText: 'Agent Information successfully updated!'
      });
    }
  });
  Object.defineProperty(this, "toggleSubmittingEditProfilePicForm", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(bool) {
      _this3.setState({
        submittingEditProfilePicForm: typeof bool === 'boolean' ? bool : !_this3.state.submittingEditProfilePicForm
      });
    }
  });
  Object.defineProperty(this, "setFormSubmitted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editProfilePicFormSubmitted: true
      });
    }
  });
  Object.defineProperty(this, "toggleEditAgentModal", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      var editAgentModalOpen = _this3.state.editAgentModalOpen;

      _this3.setState({
        editAgentModalOpen: typeof state === 'boolean' ? state : !editAgentModalOpen
      });
    }
  });
  Object.defineProperty(this, "openEditAgentDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeEditAgentDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "openEditAgentPasswordDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeEditAgentPasswordDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "handleCloseSnackbar", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        snackbarOpen: false,
        snackbarUndoFunction: null
      });
    }
  });
  Object.defineProperty(this, "agentSuccessfullyDeleted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        snackbarOpen: true,
        snackbarText: 'Agent had been successfully deleted!'
      });

      _this3.props.setAgentDeleted();
    }
  });
}, _temp)) || Profile__class) || Profile__class);
/* harmony default export */ var containers_Profile = (Profile_ProfileContainer);
// CONCATENATED MODULE: ./pages/app/profile.js
var profile__class;

var profile__templateObject = /*#__PURE__*/ profile__taggedTemplateLiteral(["\n  query agent($uuid: String!) {\n    agent(uuid: $uuid) {\n      firstName\n      lastName\n      role\n      email\n      agent {\n        profilePicURL\n        mobileNumber\n        officeNumber\n        branch\n        profileDescription\n        facebook\n        twitter\n        instagram\n      }\n    }\n  }\n"]);

function profile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profile__typeof = function _typeof(obj) { return typeof obj; }; } else { profile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profile__typeof(obj); }

function profile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile__possibleConstructorReturn(self, call) { if (call && (profile__typeof(call) === "object" || typeof call === "function")) { return call; } return profile__assertThisInitialized(self); }

function profile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profile__createClass(Constructor, protoProps, staticProps) { if (protoProps) profile__defineProperties(Constructor.prototype, protoProps); if (staticProps) profile__defineProperties(Constructor, staticProps); return Constructor; }

function profile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function profile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profile__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var profile_Loader = external__react_spinners_["DotLoader"];
var profile_agentQuery = external__graphql_tag__default()(profile__templateObject);

var profile_Profile = Object(external__mobx_react_["observer"])(profile__class =
/*#__PURE__*/
function (_React$Component) {
  profile__inherits(Profile, _React$Component);

  profile__createClass(Profile, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer,
        profileID: query.id
      };
    }
  }]);

  function Profile(props) {
    var _this;

    profile__classCallCheck(this, Profile);

    _this = profile__possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    Object.defineProperty(profile__assertThisInitialized(_this), "setAgentDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          agentDeleted: true
        });
      }
    });
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (external__is_browser__default.a && !_this.store.UserStore.isLoggedIn) {
      routes["Router"].pushRoute('home');
    } // for debugging only!!!


    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    _this.state = {
      agentDeleted: false
    };
    return _this;
  }

  profile__createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var profileID = this.props.profileID;
      return external__react__default.a.createElement(Layout["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore
      }, external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: profile_agentQuery,
        variables: {
          uuid: profileID || this.store.UserStore.uuid
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '546px',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          }
        }, external__react__default.a.createElement(profile_Loader, {
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

        if (_this2.state.agentDeleted) return external__react__default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '1.2rem'
          }
        }, "AGENT DELETED");
        if (!data || !data.agent) return external__react__default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '1.2rem'
          }
        }, "AGENT NOT NOTFOUND");
        return external__react__default.a.createElement(containers_Profile, {
          agent: data.agent,
          uuid: profileID || _this2.store.UserStore.uuid,
          currentUserRole: _this2.store.UserStore.userRole,
          currentUserUUID: _this2.store.UserStore.uuid,
          setAgentDeleted: _this2.setAgentDeleted
        });
      }));
    }
  }]);

  return Profile;
}(external__react__default.a.Component)) || profile__class;

/* harmony default export */ var profile = __webpack_exports__["default"] = (Object(withData["a" /* default */])(profile_Profile));

/***/ })
/******/ ]);