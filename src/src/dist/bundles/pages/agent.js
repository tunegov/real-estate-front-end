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
/******/ 	return __webpack_require__(__webpack_require__.s = 201);
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
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var endpoint = '/api/graphql';
/* harmony default export */ __webpack_exports__["a"] = (endpoint);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("is-browser");

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

module.exports = require("material-ui/Tooltip");

/***/ }),
/* 13 */
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
/* 20 */,
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
var external__is_browser_ = __webpack_require__(8);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(6);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(7);

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
/* 23 */,
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
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 34 */,
/* 35 */,
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
/* 41 */,
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
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    overflow: hidden;\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n  \n";
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
      uri:
      /* `${websiteURL}`, */
      'http://localhost/api/graphql',
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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
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
/* 91 */
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
var external__is_browser_ = __webpack_require__(8);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(9);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./lib/withRoot.js
var withRoot = __webpack_require__(44);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "debounce"
var external__debounce_ = __webpack_require__(58);
var external__debounce__default = /*#__PURE__*/__webpack_require__.n(external__debounce_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(10);
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
})(["box-sizing:border-box;position:relative;color:", ";text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;&:after{margin-top:6px;background:", ";max-width:", ";right:", ";bottom:0;content:\"  \";display:block;height:2px;left:10px;position:absolute;z-index:5;transition:max-width .2s ease-in-out;}&:hover{color:#fff;&:after{right:10px;max-width:100%;}}&:not(:first-of-type){margin-left:20px;}"], function (props) {
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
      marginRight: '5px'
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
            isAdmin = _this$props.isAdmin;

        if (_this.props.isLoggedIn) {
          return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement(HeaderNavLink, {
            route: isAdmin ? 'admin-dashboard' : 'dashboard',
            prefetch: true
          }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Dashboard")), external__react__default.a.createElement(styledComponents_HeaderLink, {
            onClick: _this.props.onLogout
          }, "Log Out"));
        }

        return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement("span", {
          className: classes.loginWrapper
        }, external__react__default.a.createElement(HeaderNavLink, {
          route: "log-in",
          href: "/log-in",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Log In"))));
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
          href: "/listings",
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
        src: "/static/images/logo.png"
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
        onLogout: this.onLogout
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
var userTypes = __webpack_require__(13);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// CONCATENATED MODULE: ./frontEndComponents/FrontEndLayout/index.js
var FrontEndLayout__class;

function FrontEndLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FrontEndLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { FrontEndLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FrontEndLayout__typeof(obj); }

function FrontEndLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FrontEndLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FrontEndLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) FrontEndLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) FrontEndLayout__defineProperties(Constructor, staticProps); return Constructor; }

function FrontEndLayout__possibleConstructorReturn(self, call) { if (call && (FrontEndLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return FrontEndLayout__assertThisInitialized(self); }

function FrontEndLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FrontEndLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


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
    _this.state = {};
    return _this;
  }

  FrontEndLayout__createClass(Layout, [{
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      var _props$UserStore = this.props.UserStore,
          isLoggedIn = _props$UserStore.isLoggedIn,
          logoutUser = _props$UserStore.logoutUser,
          userRole = _props$UserStore.userRole;
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
        isAdmin: isAdmin
      }), external__react__default.a.createElement(AppContentWrapper, null, this.props.children)))));
    }
  }]);

  return Layout;
}(external__react_["Component"])) || FrontEndLayout__class;

/* harmony default export */ var FrontEndLayout = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(withRoot["a" /* default */])(FrontEndLayout_Layout)));

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 111 */,
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
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_stringUtils__ = __webpack_require__(17);
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
/* 160 */
/***/ (function(module, exports) {

module.exports = require("buildo-react-components/lib/FormattedText");

/***/ }),
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
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(202);


/***/ }),
/* 202 */
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
var external__is_browser_ = __webpack_require__(8);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: ./frontEndComponents/FrontEndLayout/index.js + 7 modules
var FrontEndLayout = __webpack_require__(91);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/withData.js + 2 modules
var withData = __webpack_require__(49);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(64);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "faker"
var external__faker_ = __webpack_require__(110);
var external__faker__default = /*#__PURE__*/__webpack_require__.n(external__faker_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "buildo-react-components/lib/FormattedText"
var FormattedText_ = __webpack_require__(160);
var FormattedText__default = /*#__PURE__*/__webpack_require__.n(FormattedText_);

// EXTERNAL MODULE: external "material-ui/Snackbar"
var Snackbar_ = __webpack_require__(28);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "material-ui/Button"
var Button_ = __webpack_require__(32);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(15);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "buildo-react-components/lib/Input"
var Input_ = __webpack_require__(203);
var Input__default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "react-textarea-autosize"
var external__react_textarea_autosize_ = __webpack_require__(204);
var external__react_textarea_autosize__default = /*#__PURE__*/__webpack_require__.n(external__react_textarea_autosize_);

// EXTERNAL MODULE: external "material-ui/Tooltip"
var Tooltip_ = __webpack_require__(12);
var Tooltip__default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "react-icons/lib/fa"
var fa_ = __webpack_require__(54);
var fa__default = /*#__PURE__*/__webpack_require__.n(fa_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(33);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./frontEndComponents/ListingCard/index.js
var ListingCard = __webpack_require__(142);

// CONCATENATED MODULE: ./frontEndComponents/AgentProfile/ListingsSection.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
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
    }, _defineProperty(_imageWrapperClassNam, theme.breakpoints.only('sm'), {
      height: 240
    }), _defineProperty(_imageWrapperClassNam, theme.breakpoints.only('xs'), {
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

var ListingsSection_ListingsSection = (_dec = Object(styles_["withStyles"])(styles), Object(external__mobx_react_["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ListingsSection, _Component);

  function ListingsSection() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, ListingsSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = ListingsSection.__proto__ || Object.getPrototypeOf(ListingsSection)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderListings", {
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

  _createClass(ListingsSection, [{
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
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var AgentProfile_ListingsSection = (ListingsSection_ListingsSection);
// EXTERNAL MODULE: ./utils/stringUtils.js
var stringUtils = __webpack_require__(17);

// CONCATENATED MODULE: ./frontEndComponents/AgentProfile/index.js
var AgentProfile__dec, AgentProfile__class;

function AgentProfile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AgentProfile__typeof = function _typeof(obj) { return typeof obj; }; } else { AgentProfile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AgentProfile__typeof(obj); }

function AgentProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AgentProfile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AgentProfile__createClass(Constructor, protoProps, staticProps) { if (protoProps) AgentProfile__defineProperties(Constructor.prototype, protoProps); if (staticProps) AgentProfile__defineProperties(Constructor, staticProps); return Constructor; }

function AgentProfile__possibleConstructorReturn(self, call) { if (call && (AgentProfile__typeof(call) === "object" || typeof call === "function")) { return call; } return AgentProfile__assertThisInitialized(self); }

function AgentProfile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AgentProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AgentProfile__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var AgentProfile_styles = function styles(theme) {
  var _mainSection, _leftColumnWrapper;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 20px 20px 20px',
      color: 'rgba(0,0,0,.8)'
    },
    mainSection: (_mainSection = {
      position: 'relative',
      display: 'flex',
      maxWidth: 1400,
      padding: '40px 20px 20px 20px',
      color: 'rgba(0,0,0,.8)'
    }, AgentProfile__defineProperty(_mainSection, theme.breakpoints.down('xs'), {
      flexDirection: 'column'
    }), AgentProfile__defineProperty(_mainSection, theme.breakpoints.down('sm'), {
      padding: '40px 5px 20px 5px'
    }), _mainSection),
    leftColumnWrapper: (_leftColumnWrapper = {
      marginRight: '40px',
      width: '375px'
    }, AgentProfile__defineProperty(_leftColumnWrapper, theme.breakpoints.down('xs'), {
      width: '100%'
    }), AgentProfile__defineProperty(_leftColumnWrapper, theme.breakpoints.down('sm'), {
      marginRight: '30px'
    }), _leftColumnWrapper),
    rightColumnWrapper: {
      width: '100%'
    },
    name: {
      marginTop: '0',
      marginBottom: '5px'
    },
    title: {
      color: 'rgba(0,0,0,.7)',
      display: 'block',
      marginBottom: '30px'
    },
    profilePicWrapper: AgentProfile__defineProperty({
      position: 'relative',
      marginBottom: '25px',
      minWidth: '220px',
      width: '100%',
      paddingTop: '100%',
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,.4)'
    }, theme.breakpoints.down('sm'), {
      fontSize: '1rem'
    }),
    profilePic: {
      position: 'absolute',
      top: 5,
      left: 5,
      bottom: 5,
      right: 5,
      display: 'block',
      objectFit: 'cover',
      width: 'calc(100% - 10px)',
      height: 'calc(100% - 10px)'
    },
    detailsWrapper: AgentProfile__defineProperty({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.1rem'
    }, theme.breakpoints.down('sm'), {
      fontSize: '1rem'
    }),
    details: {
      display: 'flex',
      width: '100%',
      textAlign: 'center',
      marginBottom: '5px'
    },
    detailsTitle: {
      display: 'inline-block',
      fontWeight: '600',
      marginBottom: '8px'
    },
    detailsInfo: {
      marginLeft: 'auto',
      fontWeight: '300'
    },
    descriptionWrapper: {
      '& > span': {
        lineHeight: '1.4rem'
      }
    },
    descriptionTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '10px'
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
    socialMediaItemWrapper: {
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
      '&:hover': {
        borderColor: 'rgba(0,0,0,.9)',
        color: 'rgba(0,0,0,.8)'
      }
    },
    descriptionDetails: AgentProfile__defineProperty({
      fontSize: '1.1rem'
    }, theme.breakpoints.down('sm'), {
      fontSize: '.95rem'
    }),
    detailsInfoInput: {
      padding: '0',
      marginLeft: 'auto',
      '& input': {
        padding: '5px',
        fontWeight: '300',
        color: 'rgba(0,0,0,.8)',
        fontSize: '.8rem',
        borderRadius: '3px',
        borderColor: 'rgba(0,0,0,.1)',
        boxShadow: "inset ".concat(theme.shadows[1])
      }
    },
    facebook: {
      color: '#3B5998'
    },
    twitter: {
      color: '#1da1f2'
    }
  };
};

var AgentProfile_Profile = (AgentProfile__dec = Object(styles_["withStyles"])(AgentProfile_styles), AgentProfile__dec(AgentProfile__class = Object(external__mobx_react_["observer"])(AgentProfile__class =
/*#__PURE__*/
function (_Component) {
  AgentProfile__inherits(Profile, _Component);

  function Profile(props) {
    var _this;

    AgentProfile__classCallCheck(this, Profile);

    _this = AgentProfile__possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    _this.state = {
      open: false,
      Transition: null
    };
    return _this;
  }

  AgentProfile__createClass(Profile, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          agent = _props.agent,
          classes = _props.classes,
          enterEditingMode = _props.enterEditingMode,
          cancelEditingMode = _props.cancelEditingMode,
          isEditing = _props.isEditing,
          setDescription = _props.setDescription,
          setMobileNumber = _props.setMobileNumber,
          saveUser = _props.saveUser,
          undoSave = _props.undoSave;
      var profilePhotoURL = agent.profilePhotoURL,
          name = agent.name,
          email = agent.email,
          title = agent.title,
          description = agent.description,
          mobileNumber = agent.mobileNumber,
          officeNumber = agent.officeNumber,
          region = agent.region,
          instagramURL = agent.instagramURL,
          twitterURL = agent.twitterURL,
          facebookURL = agent.facebookURL;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.mainSection
      }, external__react__default.a.createElement("div", {
        className: classes.leftColumnWrapper
      }, external__react__default.a.createElement("div", {
        className: classes.profilePicWrapper
      }, external__react__default.a.createElement("img", {
        className: classes.profilePic,
        src: profilePhotoURL,
        alt: "Agent"
      })), external__react__default.a.createElement("div", {
        className: classes.detailsWrapper
      }, external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.email, classes.details)
      }, external__react__default.a.createElement("div", {
        className: classes.detailsTitle
      }, "Email"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, email)), officeNumber && external__react__default.a.createElement("div", {
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
      }, "Region"), external__react__default.a.createElement("div", {
        className: classes.detailsInfo
      }, region)), external__react__default.a.createElement("div", {
        className: classes.socialMediaWrapper
      }, facebookURL || twitterURL || instagramURL ? external__react__default.a.createElement("div", {
        className: classes.socialMediaTitle
      }, "Social Media:") : null, external__react__default.a.createElement("div", {
        className: classes.socialMediaItemsWrapper
      }, facebookURL ? external__react__default.a.createElement("a", {
        href: facebookURL,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaFacebook"], {
        className: classes.facebook
      })) : null, twitterURL ? external__react__default.a.createElement("a", {
        href: twitterURL,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaTwitter"], {
        className: classes.twitter
      })) : null, instagramURL ? external__react__default.a.createElement("a", {
        href: instagramURL,
        target: "_blank",
        className: classes.socialMediaItemWrapper
      }, external__react__default.a.createElement(fa_["FaInstagram"], null)) : null)))), external__react__default.a.createElement("div", {
        className: classes.rightColumnWrapper
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h1", {
        className: classes.name
      }, name), external__react__default.a.createElement("small", {
        className: classes.title
      }, title), external__react__default.a.createElement("div", {
        className: classes.descriptionWrapper
      }, external__react__default.a.createElement("div", {
        className: classes.descriptionTitle
      }, "About ", Object(stringUtils["a" /* capitalize */])(name.split(' ')[0])), external__react__default.a.createElement(FormattedText__default.a, {
        className: classes.descriptionDetails
      }, description))))), external__react__default.a.createElement("div", null, external__react__default.a.createElement(AgentProfile_ListingsSection, null)));
    }
  }]);

  return Profile;
}(external__react_["Component"])) || AgentProfile__class) || AgentProfile__class);
/* harmony default export */ var AgentProfile = (AgentProfile_Profile);
// CONCATENATED MODULE: ./frontEndContainers/AgentProfile.js
var frontEndContainers_AgentProfile__class;

function frontEndContainers_AgentProfile__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_AgentProfile__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_AgentProfile__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_AgentProfile__typeof(obj); }

function frontEndContainers_AgentProfile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_AgentProfile__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_AgentProfile__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_AgentProfile__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_AgentProfile__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_AgentProfile__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_AgentProfile__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_AgentProfile__assertThisInitialized(self); }

function frontEndContainers_AgentProfile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function frontEndContainers_AgentProfile__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var chance = new external__chance__default.a();
var AgentProfile_description = "Lorem ipsum dolor amet beard cray man braid, taxidermy vape retro lumbersexual street art cornhole normcore. Deep v succulents pickled woke. Pinterest iceland typewriter tofu truffaut aesthetic. Listicle 3 wolf moon occupy, snackwave farm-to-table salvia knausgaard health goth wolf thundercats asymmetrical. Artisan scenester echo park mumblecore vape unicorn. Street art drinking vinegar gluten-free hot chicken hell of YOLO, gastropub pinterest lyft green juice.\n\nBlue bottle street art taiyaki selfies listicle yr. Selvage ugh selfies unicorn, leggings snackwave cardigan forage kogi literally mixtape. Ennui meditation yuccie paleo yr occupy beard bitters sriracha before they sold out. Sartorial authentic wayfarers typewriter, chia chartreuse cold-pressed etsy pour-over intelligentsia swag literally pinterest fingerstache. Unicorn jianbing helvetica tattooed umami irony pabst 8-bit etsy deep v trust fund hashtag. IPhone green juice jean shorts neutra four loko meggings tattooed etsy.\n\nSkateboard polaroid humblebrag jianbing cardigan af. Tofu tacos actually, roof party vape semiotics four loko woke kickstarter retro. Echo park venmo skateboard fixie wayfarers, mustache vape bushwick pork belly gentrify keytar lomo hoodie poutine. Plaid church-key ennui VHS, succulents health goth bespoke irony pop-up coloring book craft beer beard. Bitters thundercats ramps master cleanse poutine direct trade pickled af live-edge seitan affogato leggings. Pop-up kickstarter mumblecore vinyl.";

var AgentProfile_ProfileContainer = Object(external__mobx_react_["observer"])(frontEndContainers_AgentProfile__class =
/*#__PURE__*/
function (_Component) {
  frontEndContainers_AgentProfile__inherits(ProfileContainer, _Component);

  function ProfileContainer(props) {
    var _this;

    frontEndContainers_AgentProfile__classCallCheck(this, ProfileContainer);

    _this = frontEndContainers_AgentProfile__possibleConstructorReturn(this, (ProfileContainer.__proto__ || Object.getPrototypeOf(ProfileContainer)).call(this, props));
    Object.defineProperty(frontEndContainers_AgentProfile__assertThisInitialized(_this), "createAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          profilePhotoURL: "http://picsum.photos/325/325/?random?".concat(chance.integer({
            min: 1,
            max: 1000
          })),
          name: chance.name(),
          email: chance.email(),
          title: 'Licensed Real Estate Salesperson',
          description: AgentProfile_description,
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
          }) : 'New York'
        };
      }
    });
    _this.state = {
      agent: _this.createAgent()
    };
    return _this;
  }

  frontEndContainers_AgentProfile__createClass(ProfileContainer, [{
    key: "render",
    value: function render() {
      var agent = this.state.agent;
      var agentID = this.props.agentID; // grab the agent info and listings using this agentID

      return external__react__default.a.createElement(AgentProfile, {
        agent: agent
      });
    }
  }]);

  return ProfileContainer;
}(external__react_["Component"])) || frontEndContainers_AgentProfile__class;

/* harmony default export */ var frontEndContainers_AgentProfile = (AgentProfile_ProfileContainer);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./pages/agent.js
var agent__class;

function agent__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { agent__typeof = function _typeof(obj) { return typeof obj; }; } else { agent__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return agent__typeof(obj); }

function agent__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function agent__possibleConstructorReturn(self, call) { if (call && (agent__typeof(call) === "object" || typeof call === "function")) { return call; } return agent__assertThisInitialized(self); }

function agent__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function agent__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function agent__createClass(Constructor, protoProps, staticProps) { if (protoProps) agent__defineProperties(Constructor.prototype, protoProps); if (staticProps) agent__defineProperties(Constructor, staticProps); return Constructor; }

function agent__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var agent_Listing = Object(external__mobx_react_["observer"])(agent__class =
/*#__PURE__*/
function (_React$Component) {
  agent__inherits(Listing, _React$Component);

  agent__createClass(Listing, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer,
        agentID: query.id
      };
    }
  }]);

  function Listing(props) {
    var _this;

    agent__classCallCheck(this, Listing);

    _this = agent__possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));
    if (!props.agentID && external__is_browser__default.a) routes["Router"].pushRoute('agents-front-end');
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData); // for debugging only!!!

    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  agent__createClass(Listing, [{
    key: "render",
    value: function render() {
      var agentID = this.props.agentID;
      return external__react__default.a.createElement(FrontEndLayout["a" /* default */], {
        UserStore: this.store.UserStore
      }, external__react__default.a.createElement(frontEndContainers_AgentProfile, {
        agentID: agentID
      }));
    }
  }]);

  return Listing;
}(external__react__default.a.Component)) || agent__class;

/* harmony default export */ var pages_agent = __webpack_exports__["default"] = (Object(withData["a" /* default */])(agent_Listing));

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("buildo-react-components/lib/Input");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ })
/******/ ]);