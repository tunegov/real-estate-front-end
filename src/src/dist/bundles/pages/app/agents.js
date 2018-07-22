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
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
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
/* 24 */,
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
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),
/* 35 */,
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
      uri: "http://".concat(process.env.HOST_FOR_BROWSER, "/api/graphql"),
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
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 65 */,
/* 66 */,
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
/* 70 */,
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
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
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
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
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
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload__ = __webpack_require__(131);
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
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_lazyload___default.a, {
        height: 38,
        offset: 100,
        once: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: classes.image,
        ref: function ref(imgItem) {
          return _this2._imgItem = imgItem;
        },
        src: imageURL,
        alt: imageAltText || 'unable to load profile picture'
      }))))));
    }
  }]);

  return ProfilePictureFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(ProfilePictureFormatter));

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);


/***/ }),
/* 224 */
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

// EXTERNAL MODULE: ./components/Layout/index.js + 11 modules
var Layout = __webpack_require__(71);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/withData.js + 1 modules
var withData = __webpack_require__(49);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(63);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "faker"
var external__faker_ = __webpack_require__(111);
var external__faker__default = /*#__PURE__*/__webpack_require__.n(external__faker_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(64);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "react-sizes"
var external__react_sizes_ = __webpack_require__(67);
var external__react_sizes__default = /*#__PURE__*/__webpack_require__.n(external__react_sizes_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid"
var dx_react_grid_ = __webpack_require__(97);
var dx_react_grid__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid-material-ui"
var dx_react_grid_material_ui_ = __webpack_require__(36);
var dx_react_grid_material_ui__default = /*#__PURE__*/__webpack_require__.n(dx_react_grid_material_ui_);

// EXTERNAL MODULE: ./utils/backEndTableUtils/DefaultVirtualTableCell.js
var DefaultVirtualTableCell = __webpack_require__(98);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableComponent.js
var TableComponent = __webpack_require__(99);

// EXTERNAL MODULE: ./utils/backEndTableUtils/TableContainerComponent.js
var TableContainerComponent = __webpack_require__(100);

// EXTERNAL MODULE: ./utils/backEndTableUtils/NoDataCellComponent.js
var NoDataCellComponent = __webpack_require__(101);

// EXTERNAL MODULE: ./components/dataTableFormatters/ProfilePictureFormatter.js
var ProfilePictureFormatter = __webpack_require__(130);

// EXTERNAL MODULE: ./components/dataTableFormatters/ViewFormatter.js
var ViewFormatter = __webpack_require__(102);

// CONCATENATED MODULE: ./components/AgentsTable/index.js
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

var AgentsTable_FilterCell = function FilterCell(props) {
  return external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"].Cell, props);
};

var defaultColumnWidths = [{
  columnName: 'agentID',
  width: 120
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
  columnName: 'areaOfFocus',
  width: 150
}, {
  columnName: 'mobileNumber',
  width: 150
}, {
  columnName: 'companyNumberAndExt',
  width: 180
}, {
  columnName: 'branch',
  width: 140
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

var AgentsTable_PhotoFormatter = function PhotoFormatter(_ref2) {
  var value = _ref2.value;
  return external__react__default.a.createElement(ProfilePictureFormatter["a" /* default */], {
    value: value
  });
};

var AgentsTable_PhotoTypeProvider = function PhotoTypeProvider(props) {
  return external__react__default.a.createElement(dx_react_grid_["DataTypeProvider"], _extends({
    formatterComponent: AgentsTable_PhotoFormatter
  }, props));
};

var AgentsTable_ViewCellFormatter = function ViewCellFormatter(_ref3) {
  var value = _ref3.value;
  return external__react__default.a.createElement(ViewFormatter["a" /* default */], {
    value: value
  });
};

var AgentsTable_ViewTypeProvider = function ViewTypeProvider(props) {
  return external__react__default.a.createElement(dx_react_grid_["DataTypeProvider"], _extends({
    formatterComponent: AgentsTable_ViewCellFormatter
  }, props));
};

var AgentsTable_TableContainerComponentWrapperBase = function TableContainerComponentWrapperBase(_ref4) {
  var classes = _ref4.classes,
      restProps = _objectWithoutProperties(_ref4, ["classes"]);

  return external__react__default.a.createElement(TableContainerComponent["a" /* default */], _extends({}, restProps, {
    className: classes.myTableContainer
  }));
};

var TableContainerComponentWrapper = Object(styles_["withStyles"])(styles)(AgentsTable_TableContainerComponentWrapperBase);
var AgentsTable_AgentsTable = (_dec = Object(styles_["withStyles"])(styles), _dec2 = external__react_sizes__default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AgentsTable, _Component);

  function AgentsTable(props) {
    var _this;

    _classCallCheck(this, AgentsTable);

    _this = _possibleConstructorReturn(this, (AgentsTable.__proto__ || Object.getPrototypeOf(AgentsTable)).call(this, props));
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

  _createClass(AgentsTable, [{
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
          rows = _props.rows;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(dx_react_grid_material_ui_["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId
      }, external__react__default.a.createElement(AgentsTable_PhotoTypeProvider, {
        "for": ['photo']
      }), external__react__default.a.createElement(AgentsTable_ViewTypeProvider, {
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
        containerComponent: TableContainerComponentWrapper,
        cellComponent: DefaultVirtualTableCell["a" /* default */],
        noDataCellComponent: NoDataCellComponent["a" /* default */]
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        })
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["TableFilterRow"], {
        cellComponent: AgentsTable_FilterCell
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["Toolbar"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["SearchPanel"], null), external__react__default.a.createElement(dx_react_grid_material_ui_["TableHeaderRow"], {
        showSortingControls: true
      }), external__react__default.a.createElement(dx_react_grid_material_ui_["PagingPanel"], {
        pageSizes: pageSizes
      })));
    }
  }]);

  return AgentsTable;
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var components_AgentsTable = (AgentsTable_AgentsTable);
// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// CONCATENATED MODULE: ./containers/AgentsTable.js
var AgentsTable__class;

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agents {\n    agents {\n      uuid\n      firstName\n      lastName\n      email\n      role\n      agent {\n        profilePicURL\n        branch\n        mobileNumber\n        officeNumber\n        areaOfFocus\n      }\n    }\n  }\n"]);

function AgentsTable__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AgentsTable__typeof = function _typeof(obj) { return typeof obj; }; } else { AgentsTable__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AgentsTable__typeof(obj); }

function AgentsTable__extends() { AgentsTable__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AgentsTable__extends.apply(this, arguments); }

function AgentsTable__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AgentsTable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AgentsTable__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AgentsTable__createClass(Constructor, protoProps, staticProps) { if (protoProps) AgentsTable__defineProperties(Constructor.prototype, protoProps); if (staticProps) AgentsTable__defineProperties(Constructor, staticProps); return Constructor; }

function AgentsTable__possibleConstructorReturn(self, call) { if (call && (AgentsTable__typeof(call) === "object" || typeof call === "function")) { return call; } return AgentsTable__assertThisInitialized(self); }

function AgentsTable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AgentsTable__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var chance = new external__chance__default.a();
var Loader = external__react_spinners_["DotLoader"];
var agentsQuery = external__graphql_tag__default()(_templateObject);

var AgentsTable_styles = function styles(theme) {
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

var AgentsTable_columns = [{
  name: 'agentID',
  title: 'Agent ID'
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
  name: 'areaOfFocus',
  title: 'Area of Focus'
}, {
  name: 'mobileNumber',
  title: 'Mobile Number'
}, {
  name: 'companyNumberAndExt',
  title: 'Company Number/Extension'
}, {
  name: 'branch',
  title: 'Branch'
}, {
  name: 'view',
  title: 'View Profile'
}];

var AgentsTable_AgentsTableContainer = Object(external__mobx_react_["observer"])(AgentsTable__class =
/*#__PURE__*/
function (_Component) {
  AgentsTable__inherits(AgentsTableContainer, _Component);

  function AgentsTableContainer(props) {
    var _this;

    AgentsTable__classCallCheck(this, AgentsTableContainer);

    _this = AgentsTable__possibleConstructorReturn(this, (AgentsTableContainer.__proto__ || Object.getPrototypeOf(AgentsTableContainer)).call(this, props));
    Object.defineProperty(AgentsTable__assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(agents) {
        var rows = [];
        agents.forEach(function (agent) {
          var agentPart = agent.agent,
              firstName = agent.firstName,
              lastName = agent.lastName,
              email = agent.email,
              uuid = agent.uuid,
              lastLoginTimestamp = agent.lastLoginTimestamp;
          var areaOfFocus = agentPart.areaOfFocus,
              state = agentPart.state,
              realEstateLicenseNumber = agentPart.realEstateLicenseNumber,
              profilePicURL = agentPart.profilePicURL,
              officeNumber = agentPart.officeNumber,
              mobileNumber = agentPart.mobileNumber,
              branch = agentPart.branch;
          rows.push({
            agentID: uuid,
            realEstateLicenseNumber: realEstateLicenseNumber,
            photo: {
              imageURL: profilePicURL,
              id: uuid
            },
            name: Object(stringUtils["a" /* capitalize */])("".concat(firstName, " ").concat(lastName)),
            email: email,
            areaOfFocus: areaOfFocus || 'none',
            mobileNumber: mobileNumber,
            companyNumberAndExt: officeNumber,
            branch: branch,
            state: state,
            lastLoginTimestamp: lastLoginTimestamp ? moment(lastLoginTimestamp).format('MM/DD/YYYY, h:mm:ss a') : '',
            view: {
              route: 'profile',
              id: uuid
            }
          });
        });
        return rows;
      }
    });
    _this.state = {
      tableIsLoading: true
    };
    return _this;
  }

  AgentsTable__createClass(AgentsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          rows = _state.rows;

      var _props = this.props,
          classes = _props.classes,
          rest = AgentsTable__objectWithoutProperties(_props, ["classes"]);

      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: agentsQuery
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
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
          className: classes.root
        }, tableIsLoading ? external__react__default.a.createElement("div", {
          className: classes.progressWrapper,
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        })) : null, external__react__default.a.createElement(components_AgentsTable, AgentsTable__extends({}, rest, {
          onMount: function onMount() {
            return tableIsLoading ? _this2.setState({
              tableIsLoading: false
            }) : null;
          },
          columns: AgentsTable_columns,
          rows: _this2.createRows(data.agents)
        })));
      });
    }
  }]);

  return AgentsTableContainer;
}(external__react_["Component"])) || AgentsTable__class;

/* harmony default export */ var containers_AgentsTable = (Object(styles_["withStyles"])(AgentsTable_styles)(AgentsTable_AgentsTableContainer));
// CONCATENATED MODULE: ./pages/app/agents.js
var agents__class;

function agents__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { agents__typeof = function _typeof(obj) { return typeof obj; }; } else { agents__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return agents__typeof(obj); }

function agents__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function agents__possibleConstructorReturn(self, call) { if (call && (agents__typeof(call) === "object" || typeof call === "function")) { return call; } return agents__assertThisInitialized(self); }

function agents__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function agents__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function agents__createClass(Constructor, protoProps, staticProps) { if (protoProps) agents__defineProperties(Constructor.prototype, protoProps); if (staticProps) agents__defineProperties(Constructor, staticProps); return Constructor; }

function agents__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var agents_AgentsDashboard = Object(external__mobx_react_["observer"])(agents__class =
/*#__PURE__*/
function (_React$Component) {
  agents__inherits(AgentsDashboard, _React$Component);

  agents__createClass(AgentsDashboard, null, [{
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

  function AgentsDashboard(props) {
    var _this;

    agents__classCallCheck(this, AgentsDashboard);

    _this = agents__possibleConstructorReturn(this, (AgentsDashboard.__proto__ || Object.getPrototypeOf(AgentsDashboard)).call(this, props));
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (external__is_browser__default.a && !_this.store.UserStore.isLoggedIn) {
      routes["Router"].pushRoute('home');
    } // for debugging only!!!


    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  agents__createClass(AgentsDashboard, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(containers_AgentsTable, null)));
    }
  }]);

  return AgentsDashboard;
}(external__react__default.a.Component)) || agents__class;

/* harmony default export */ var app_agents = __webpack_exports__["default"] = (Object(withData["a" /* default */])(agents_AgentsDashboard));

/***/ })
/******/ ]);