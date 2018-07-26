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
/******/ 	return __webpack_require__(__webpack_require__.s = 235);
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
/* 12 */,
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
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 17 */,
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
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
      uri: "".concat(constants_websiteURL),
      // 'http://localhost/api/graphql', // Server URL (must be absolute)
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
/* 54 */,
/* 55 */,
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
/* 103 */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
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
/* 114 */,
/* 115 */,
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
/* 154 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

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
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style/css");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style/css");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style/css");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style/css");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("react-signature-canvas");

/***/ }),
/* 190 */
/***/ (function(module, exports) {



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
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);


/***/ }),
/* 236 */
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

// EXTERNAL MODULE: external "react-stripe-elements"
var external__react_stripe_elements_ = __webpack_require__(172);
var external__react_stripe_elements__default = /*#__PURE__*/__webpack_require__.n(external__react_stripe_elements_);

// EXTERNAL MODULE: ./frontEndComponents/FrontEndLayout/index.js + 7 modules
var FrontEndLayout = __webpack_require__(91);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/withData.js + 2 modules
var withData = __webpack_require__(49);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(64);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: external "antd/lib/modal/style/css"
var css_ = __webpack_require__(173);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(174);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var style_css_ = __webpack_require__(56);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(57);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var input_style_css_ = __webpack_require__(117);
var input_style_css__default = /*#__PURE__*/__webpack_require__.n(input_style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(118);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/divider/style/css"
var divider_style_css_ = __webpack_require__(175);
var divider_style_css__default = /*#__PURE__*/__webpack_require__.n(divider_style_css_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(176);
var divider__default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/select/style/css"
var select_style_css_ = __webpack_require__(177);
var select_style_css__default = /*#__PURE__*/__webpack_require__.n(select_style_css_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(178);
var select__default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/form/style/css"
var form_style_css_ = __webpack_require__(154);
var form_style_css__default = /*#__PURE__*/__webpack_require__.n(form_style_css_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(155);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/button/style/css"
var button_style_css_ = __webpack_require__(179);
var button_style_css__default = /*#__PURE__*/__webpack_require__.n(button_style_css_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(180);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(5);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(33);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(113);

// EXTERNAL MODULE: external "antd/lib/upload/style/css"
var upload_style_css_ = __webpack_require__(237);
var upload_style_css__default = /*#__PURE__*/__webpack_require__.n(upload_style_css_);

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__(238);
var upload__default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "antd/lib/date-picker/style/css"
var date_picker_style_css_ = __webpack_require__(185);
var date_picker_style_css__default = /*#__PURE__*/__webpack_require__.n(date_picker_style_css_);

// EXTERNAL MODULE: external "antd/lib/date-picker"
var date_picker_ = __webpack_require__(186);
var date_picker__default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// EXTERNAL MODULE: external "antd/lib/tabs/style/css"
var tabs_style_css_ = __webpack_require__(187);
var tabs_style_css__default = /*#__PURE__*/__webpack_require__.n(tabs_style_css_);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(188);
var tabs__default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(42);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "react-input-mask"
var external__react_input_mask_ = __webpack_require__(103);
var external__react_input_mask__default = /*#__PURE__*/__webpack_require__.n(external__react_input_mask_);

// EXTERNAL MODULE: external "react-signature-canvas"
var external__react_signature_canvas_ = __webpack_require__(189);
var external__react_signature_canvas__default = /*#__PURE__*/__webpack_require__.n(external__react_signature_canvas_);

// CONCATENATED MODULE: ./frontEndComponents/ApplicationForm/legal.js
/* harmony default export */ var legal = ('I hereby authorize Reyes & Elsamad Real Estate Group and any third-party credit agency to obtain any information regarding my employment, tenant history, and credit or background history.  I warrant that the above information is true.  I understand that any misrepresentation by me or the person filling out this application may be the cause of rejection by the landlord or management company.  The landlord or management company governing the above mentioned property makes no guarantees to the status of the application and the availability said apartment. We respect your privacy and hold your trust in us with high regards.  Your information is governed with strict policies that protect your privacy.  Reyes & Eslamad Real Estate Group is committed to comply with all federal, state and local fair housing laws.  I acknowledge and understand that this application has a fee and that this fee is non-refundable.  I agree to all the terms set forth in this agreement.');
// EXTERNAL MODULE: ./static/css/property-application.css
var property_application = __webpack_require__(190);
var property_application_default = /*#__PURE__*/__webpack_require__.n(property_application);

// CONCATENATED MODULE: ./frontEndComponents/ApplicationForm/index.js



















var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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











var TabPane = tabs__default.a.TabPane;
var Option = select__default.a.Option;

var styles = function styles(theme) {
  return {
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: 1000
    },
    datePicker: {
      width: '100%'
    },
    signatureCanvas: {
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,.1)',
      borderRadius: '5px',
      transition: 'border-color .2s ease-in-out'
    },
    setSignatureContainer: {
      width: '100%',
      height: 200
    },
    setSignatureImg: {
      objectFit: 'contain',
      width: '100%',
      borderRadius: '5px'
    },
    uploadBtn: {
      width: '100% !important'
    },
    signatureBtnsWrapper: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    redColor: {
      color: '#f5222d'
    },
    legalSection: {
      fontSize: '.9rem'
    }
  };
};

var FormItem = form__default.a.Item;
var stateOptions = constants["c" /* states */].map(function (state) {
  return external__react__default.a.createElement(Option, {
    key: state,
    value: state
  }, state);
});
var countriesOptions = constants["a" /* countries */].map(function (country) {
  return external__react__default.a.createElement(Option, {
    key: country,
    value: country
  }, country);
});

var hasErrors = function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
};

var ApplicationForm_ApplicationForm = (_dec = Object(styles_["withStyles"])(styles), _dec(_class = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicationForm, _React$Component);

  function ApplicationForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ApplicationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ApplicationForm.__proto__ || Object.getPrototypeOf(ApplicationForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        signatureURL: '',
        signatureError: false,
        photoIDUploadError: false,
        photoIDFileList: [],
        paystub1FileList: [],
        paystub2FileList: [],
        bankStatment1FileList: [],
        bankStatment2FileList: [],
        taxReturnFileList: [],
        employmentLetterFileList: [],
        additionalFilesFileList: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "formSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var onSubmit = _this.props.onSubmit;
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          _this.formSubmitted = true;

          if (!_this.state.signatureURL && !_this.state.photoIDFileList.length) {
            _this.setState({
              signatureError: true,
              photoIDUploadError: true
            });

            return;
          } else if (!_this.state.signatureURL) {
            _this.setState({
              signatureError: true
            });

            return;
          } else if (!_this.state.photoIDFileList.length) {
            _this.setState({
              photoIDUploadError: true
            });

            return;
          }

          if (!err) {
            if (_this.state.signatureError) {
              _this.setState({
                signatureError: false
              });
            }

            if (onSubmit) {
              onSubmit(_objectSpread({}, values, {
                signatureURL: _this.state.signatureURL,
                photoIDFile: _this.state.photoIDFileList[0],
                paystub1File: _this.state.paystub1FileList[0],
                paystub2File: _this.state.paystub2FileList[0],
                bankStatment1File: _this.state.bankStatment1FileList[0],
                bankStatment2File: _this.state.bankStatment2FileList[0],
                taxReturnFilt: _this.state.taxReturnFileList[0],
                employmentLetterFile: _this.state.employmentLetterFileList[0],
                additionalFilesFile: _this.state.additionalFilesFileList[0]
              }));
            }
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "agentsOptions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _this.props.listingAgents.map(function (agent, i) {
        return external__react__default.a.createElement(Option, {
          key: i,
          value: agent
        }, agent);
      })
    }), Object.defineProperty(_assertThisInitialized(_this), "photoIDUploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref2) {
              var photoIDFileList = _ref2.photoIDFileList;
              var index = photoIDFileList.indexOf(file);
              var newFileList = photoIDFileList.slice();
              newFileList.splice(index, 1);
              return {
                photoIDFileList: newFileList
              };
            });

            _this.setState(function () {
              return {
                photoIDUploadError: true
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref3) {
              var photoIDFileList = _ref3.photoIDFileList;
              return {
                photoIDFileList: _toConsumableArray(photoIDFileList).concat([file])
              };
            });

            if (_this.state.photoIDUploadError) {
              _this.setState(function () {
                return {
                  photoIDUploadError: false
                };
              });
            }

            return false;
          },
          fileList: _this.state.photoIDFileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "paystub1UploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref4) {
              var paystub1FileList = _ref4.paystub1FileList;
              var index = paystub1FileList.indexOf(file);
              var newFileList = paystub1FileList.slice();
              newFileList.splice(index, 1);
              return {
                paystub1FileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref5) {
              var paystub1FileList = _ref5.paystub1FileList;
              return {
                paystub1FileList: _toConsumableArray(paystub1FileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.paystub1FileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "paystub2UploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref6) {
              var paystub2FileList = _ref6.paystub2FileList;
              var index = paystub2FileList.indexOf(file);
              var newFileList = paystub2FileList.slice();
              newFileList.splice(index, 1);
              return {
                paystub2FileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref7) {
              var paystub2FileList = _ref7.paystub2FileList;
              return {
                paystub2FileList: _toConsumableArray(paystub2FileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.paystub2FileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "bankStatment1UploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref8) {
              var bankStatment1FileList = _ref8.bankStatment1FileList;
              var index = bankStatment1FileList.indexOf(file);
              var newFileList = bankStatment1FileList.slice();
              newFileList.splice(index, 1);
              return {
                pbankStatment1FileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref9) {
              var bankStatment1FileList = _ref9.bankStatment1FileList;
              return {
                bankStatment1FileList: _toConsumableArray(bankStatment1FileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.bankStatment1FileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "bankStatment2UploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref10) {
              var bankStatment2FileList = _ref10.bankStatment2FileList;
              var index = bankStatment2FileList.indexOf(file);
              var newFileList = bankStatment2FileList.slice();
              newFileList.splice(index, 1);
              return {
                bankStatment2FileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref11) {
              var bankStatment2FileList = _ref11.bankStatment2FileList;
              return {
                bankStatment2FileList: _toConsumableArray(bankStatment2FileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.bankStatment2FileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "taxReturnUploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref12) {
              var taxReturnFileList = _ref12.taxReturnFileList;
              var index = taxReturnFileList.indexOf(file);
              var newFileList = taxReturnFileList.slice();
              newFileList.splice(index, 1);
              return {
                taxReturnFileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref13) {
              var taxReturnFileList = _ref13.taxReturnFileList;
              return {
                taxReturnFileList: _toConsumableArray(taxReturnFileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.taxReturnFileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "employmentLetterUploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref14) {
              var employmentLetterFileList = _ref14.employmentLetterFileList;
              var index = employmentLetterFileList.indexOf(file);
              var newFileList = employmentLetterFileList.slice();
              newFileList.splice(index, 1);
              return {
                employmentLetterFileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref15) {
              var employmentLetterFileList = _ref15.employmentLetterFileList;
              return {
                employmentLetterFileList: _toConsumableArray(employmentLetterFileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.employmentLetterFileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "additionalFilesUploadBtnProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return {
          action: '#',
          onRemove: function onRemove(file) {
            _this.setState(function (_ref16) {
              var additionalFilesFileList = _ref16.additionalFilesFileList;
              var index = additionalFilesFileList.indexOf(file);
              var newFileList = additionalFilesFileList.slice();
              newFileList.splice(index, 1);
              return {
                additionalFilesFileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this.setState(function (_ref17) {
              var additionalFilesFileList = _ref17.additionalFilesFileList;
              return {
                additionalFilesFileList: _toConsumableArray(additionalFilesFileList).concat([file])
              };
            });

            return false;
          },
          fileList: _this.state.additionalFilesFileList
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "submitBtnDisabled", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var getFieldsError = _this.props.form.getFieldsError;

        if (_this.state.photoIDFileList[0] && _this.state.photoIDUploadError) {
          return true;
        }

        if (hasErrors(getFieldsError())) {
          return true;
        }

        if (!_this.state.signatureURL) {
          return true;
        }

        return false;
      }
    }), _temp));
  }

  _createClass(ApplicationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          getFieldValue = _props$form.getFieldValue,
          isFieldTouched = _props$form.isFieldTouched;
      var firstNameError = (isFieldTouched('firstName') || this.formSubmitted) && getFieldError('firstName');
      var lastNameError = (isFieldTouched('lastName') || this.formSubmitted) && getFieldError('lastName');
      var emailError = (isFieldTouched('email') || this.formSubmitted) && getFieldError('email');
      var phoneNumberError = (isFieldTouched('phoneNumber') || this.formSubmitted) && getFieldError('phoneNumber');
      var dateOfBirthError = (isFieldTouched('dateOfBirth') || this.formSubmitted) && getFieldError('dateOfBirth');
      var socialSecurityNumError = (isFieldTouched('socialSecurityNum') || this.formSubmitted) && getFieldError('socialSecurityNum');
      var applicantStreetAddressError = (isFieldTouched('applicantStreetAddress') || this.formSubmitted) && getFieldError('applicantStreetAddress');
      var applicantCityError = (isFieldTouched('applicantCity') || this.formSubmitted) && getFieldError('applicantCity');
      var applicantStateError = (isFieldTouched('applicantState') || this.formSubmitted) && getFieldError('applicantState');
      var applicantZipCodeError = (isFieldTouched('applicantZipCode') || this.formSubmitted) && getFieldError('applicantZipCode');
      var applicantCountryError = (isFieldTouched('applicantCountry') || this.formSubmitted) && getFieldError('applicantCountry');
      var applicantLandlordError = (isFieldTouched('applicantLandlord') || this.formSubmitted) && getFieldError('applicantLandlord');
      var applicantLandlordPhoneNumberError = (isFieldTouched('applicantLandlordPhoneNumber') || this.formSubmitted) && getFieldError('applicantLandlordPhoneNumber');
      var currentEmployer1Error = (isFieldTouched('currentEmployer1') || this.formSubmitted) && getFieldError('currentEmployer1');
      var currentJobTitle1Error = (isFieldTouched('currentJobTitle1') || this.formSubmitted) && getFieldError('currentJobTitle1');
      var currentEmployerAddress1Error = (isFieldTouched('currentEmployerAddress1') || this.formSubmitted) && getFieldError('currentEmployerAddress1');
      var currentEmployerPhoneNumber1Error = (isFieldTouched('currentEmployerPhoneNumber1') || this.formSubmitted) && getFieldError('currentEmployerPhoneNumber1');
      var currentEmployerEmploymentLength1Error = (isFieldTouched('currentEmployerEmploymentLength1') || this.formSubmitted) && getFieldError('currentEmployerEmploymentLength1');
      var currentEmployerContactName1Error = (isFieldTouched('currentEmployerContactName1') || this.formSubmitted) && getFieldError('currentEmployerContactName1');
      var currentEmployerContactNumber1Error = (isFieldTouched('currentEmployerContactNumber1') || this.formSubmitted) && getFieldError('currentEmployerContactNumber1');
      var currentEmployerAnnualCompensation1Error = (isFieldTouched('currentEmployerAnnualCompensation1') || this.formSubmitted) && getFieldError('currentEmployerAnnualCompensation1');
      var currentEmployerContactEmail1Error = (isFieldTouched('currentEmployerContactEmail1') || this.formSubmitted) && getFieldError('currentEmployerContactEmail1');
      var currentEmployer2Error = (isFieldTouched('currentEmployer2') || this.formSubmitted) && getFieldError('currentEmployer2');
      var currentJobTitle2Error = (isFieldTouched('currentJobTitle2') || this.formSubmitted) && getFieldError('currentJobTitle2');
      var currentEmployerAddress2Error = (isFieldTouched('currentEmployerAddress2') || this.formSubmitted) && getFieldError('currentEmployerAddress2');
      var currentEmployerPhoneNumber2Error = (isFieldTouched('currentEmployerPhoneNumber2') || this.formSubmitted) && getFieldError('currentEmployerPhoneNumber2');
      var currentEmployerEmploymentLength2Error = (isFieldTouched('currentEmployerEmploymentLength2') || this.formSubmitted) && getFieldError('currentEmployerEmploymentLength2');
      var currentEmployerContactName2Error = (isFieldTouched('currentEmployerContactName2') || this.formSubmitted) && getFieldError('currentEmployerContactName2');
      var currentEmployerContactNumber2Error = (isFieldTouched('currentEmployerContactNumber2') || this.formSubmitted) && getFieldError('currentEmployerContactNumber2');
      var currentEmployerAnnualCompensation2Error = (isFieldTouched('currentEmployerAnnualCompensation2') || this.formSubmitted) && getFieldError('currentEmployerAnnualCompensation2');
      var currentEmployerContactEmail2Error = (isFieldTouched('currentEmployerContactEmail2') || this.formSubmitted) && getFieldError('currentEmployerContactEmail2');
      var previousEmployerError = (isFieldTouched('previousEmployer') || this.formSubmitted) && getFieldError('previousEmployer');
      var previousJobTitleError = (isFieldTouched('previousJobTitle') || this.formSubmitted) && getFieldError('previousJobTitle');
      var previousEmployerAddressError = (isFieldTouched('previousEmployerAddress') || this.formSubmitted) && getFieldError('previousEmployerAddress');
      var previousEmployerPhoneNumberError = (isFieldTouched('previousEmployerPhoneNumber') || this.formSubmitted) && getFieldError('previousEmployerPhoneNumber');
      var previousEmployerEmploymentLengthError = (isFieldTouched('previousEmployerEmploymentLength') || this.formSubmitted) && getFieldError('previousEmployerEmploymentLength');
      var previousEmployerContactNameError = (isFieldTouched('previousEmployerContactName') || this.formSubmitted) && getFieldError('previousEmployerContactName');
      var previousEmployerContactNumberError = (isFieldTouched('previousEmployerContactNumber') || this.formSubmitted) && getFieldError('previousEmployerContactNumber');
      var previousEmployerAnnualCompensationError = (isFieldTouched('previousEmployerAnnualCompensation') || this.formSubmitted) && getFieldError('previousEmployerAnnualCompensation');
      var previousEmployerContactEmailError = (isFieldTouched('previousEmployerContactEmail') || this.formSubmitted) && getFieldError('previousEmployerContactEmail');
      var emergencyContactError = (isFieldTouched('emergencyContact') || this.formSubmitted) && getFieldError('emergencyContact');
      var emergencyContactPhoneNumberError = (isFieldTouched('emergencyContactPhoneNumber') || this.formSubmitted) && getFieldError('emergencyContactPhoneNumber');
      var emergencyContactEmailError = (isFieldTouched('emergencyContactEmail') || this.formSubmitted) && getFieldError('emergencyContactEmail');
      var emergencyContactAddressError = (isFieldTouched('emergencyContactAddress') || this.formSubmitted) && getFieldError('emergencyContactAddress');
      var targetMoveInDateError = (isFieldTouched('targetMoveInDate') || this.formSubmitted) && getFieldError('targetMoveInDate');
      var expectedMoveOutDateError = (isFieldTouched('expectedMoveOutDate') || this.formSubmitted) && getFieldError('expectedMoveOutDate');
      var monthlyRentError = (isFieldTouched('monthlyRent') || this.formSubmitted) && getFieldError('monthlyRent');
      var propertyAddressError = (isFieldTouched('propertyAddress') || this.formSubmitted) && getFieldError('propertyAddress');
      var propertyApartmentNumberError = (isFieldTouched('propertyApartmentNumber') || this.formSubmitted) && getFieldError('propertyApartmentNumber');
      var agentError = (isFieldTouched('agent') || this.formSubmitted) && getFieldError('agent');
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(form__default.a, {
        layout: "vertical",
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Rental Information")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: propertyAddressError ? 'error' : '',
        help: propertyAddressError || '',
        label: "Property Address"
      }, getFieldDecorator('propertyAddress', {
        rules: [{
          required: true,
          message: 'Please input the property address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Property Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: propertyApartmentNumberError ? 'error' : '',
        help: propertyApartmentNumberError || '',
        label: "Apartment Number"
      }, getFieldDecorator('propertyApartmentNumber', {
        rules: [{
          message: "Please input the property's apartment number!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Apartment Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: monthlyRentError ? 'error' : '',
        help: monthlyRentError || '',
        label: "Monthly Rent"
      }, getFieldDecorator('monthlyRent', {
        rules: [{
          required: true,
          message: 'Please input the amount of the monthly rent!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "credit-card",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "number",
        placeholder: "Monthly Rent"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: targetMoveInDateError ? 'error' : '',
        help: targetMoveInDateError || '',
        label: "Target Move in Date"
      }, getFieldDecorator('targetMoveInDate', {
        rules: [{
          required: true,
          message: 'Please input your move In date!'
        }]
      })(external__react__default.a.createElement(date_picker__default.a, {
        className: classes.datePicker,
        disabledDate: function disabledDate(date) {
          return date ? date.isBefore(external__moment__default()().subtract(1, 'days')) : true;
        },
        type: "text",
        placeholder: "Target Move in Date"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: expectedMoveOutDateError ? 'error' : '',
        help: expectedMoveOutDateError || '',
        label: "Expected Move Out Date"
      }, getFieldDecorator('expectedMoveOutDate', {
        rules: [{
          required: false,
          message: 'Please input your expected move out date!'
        }]
      })(external__react__default.a.createElement(date_picker__default.a, {
        className: classes.datePicker,
        disabledDate: function disabledDate(date) {
          return date ? date.isBefore(external__moment__default()()) : true;
        },
        type: "text",
        placeholder: "Expected Move out Date"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: agentError ? 'error' : '',
        help: agentError || '',
        label: "My Agent"
      }, getFieldDecorator('agent', {
        rules: [{
          required: true,
          message: "Please input your agent's name!"
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "My Agent"
      }, this.agentsOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Personal Information")), external__react__default.a.createElement(Grid__default.a, {
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
          message: 'Please input your first name! (30 max xharachters)',
          max: 30
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
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
          message: 'Please input your last name! (30 max xharachters)',
          max: 30
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
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
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
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
          required: true,
          message: 'Please input your 10-digit phone number!',
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: dateOfBirthError ? 'error' : '',
        help: dateOfBirthError || '',
        label: "Date of Birth"
      }, getFieldDecorator('dateOfBirth', {
        rules: [{
          required: true,
          message: 'Please input your date of birth!'
        }]
      })(external__react__default.a.createElement(date_picker__default.a, {
        className: classes.datePicker,
        disabledDate: function disabledDate(date) {
          return date ? date.isAfter(external__moment__default()().subtract(18, 'years')) : true;
        },
        type: "text",
        placeholder: "Date of Birth"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: socialSecurityNumError ? 'error' : '',
        help: socialSecurityNumError || '',
        label: "SSN"
      }, getFieldDecorator('socialSecurityNum', {
        rules: [{
          required: true,
          message: 'Please input your 9-digit social security number!',
          len: 11
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "999-99-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "SSN"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Current Address")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantStreetAddressError ? 'error' : '',
        help: applicantStreetAddressError || '',
        label: "Street Address"
      }, getFieldDecorator('applicantStreetAddress', {
        rules: [{
          required: true,
          message: 'Please input your street address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Street Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantCityError ? 'error' : '',
        help: applicantCityError || '',
        label: "City"
      }, getFieldDecorator('applicantCity', {
        rules: [{
          required: true,
          message: 'Please input your city!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "City"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantStateError ? 'error' : '',
        help: applicantStateError || '',
        label: "State"
      }, getFieldDecorator('applicantState', {
        rules: [{
          required: true,
          message: 'Please input your state!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "State"
      }, stateOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantZipCodeError ? 'error' : '',
        help: applicantZipCodeError || '',
        label: "Zip Code"
      }, getFieldDecorator('applicantZipCode', {
        rules: [{
          message: 'Please input your zip code!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Zip Code"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantCountryError ? 'error' : '',
        help: applicantCountryError || '',
        label: "Country"
      }, getFieldDecorator('applicantCountry', {
        rules: [{
          required: true,
          message: 'Please input your country!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "Country"
      }, countriesOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantLandlordError ? 'error' : '',
        help: applicantLandlordError || '',
        label: "Landlord"
      }, getFieldDecorator('applicantLandlord', {
        rules: [{
          required: true,
          message: "Please input your loandlord's name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Landlord"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: applicantLandlordPhoneNumberError ? 'error' : '',
        help: applicantLandlordPhoneNumberError || '',
        label: "Landlord's Phone Number"
      }, getFieldDecorator('applicantLandlordPhoneNumber', {
        rules: [{
          required: true,
          message: "Please input your loandlord's 10-digit phone number!",
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Landlord's Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Employment")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(tabs__default.a, {
        defaultActiveKey: "1"
      }, external__react__default.a.createElement(TabPane, {
        tab: "Current Employer*",
        key: "1"
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployer1Error ? 'error' : '',
        help: currentEmployer1Error || '',
        label: "Employer"
      }, getFieldDecorator('currentEmployer1', {
        rules: [{
          required: true,
          message: "Please input your current employer's name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentJobTitle1Error ? 'error' : '',
        help: currentJobTitle1Error || '',
        label: "Job Title"
      }, getFieldDecorator('currentJobTitle1', {
        rules: [{
          required: true,
          message: 'Please input your current job title!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Job Title"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerAddress1Error ? 'error' : '',
        help: currentEmployerAddress1Error || '',
        label: "Employer Address"
      }, getFieldDecorator('currentEmployerAddress1', {
        rules: [{
          required: true,
          message: "Please input your current employer's address!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerPhoneNumber1Error ? 'error' : '',
        help: currentEmployerPhoneNumber1Error || '',
        label: "Employer's Phone Number"
      }, getFieldDecorator('currentEmployerPhoneNumber1', {
        rules: [{
          required: true,
          message: "Please input your employer's 10-digit phone number!",
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Employer's Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerEmploymentLength1Error ? 'error' : '',
        help: currentEmployerEmploymentLength1Error || '',
        label: "Employment Length"
      }, getFieldDecorator('currentEmployerEmploymentLength1', {
        rules: [{
          required: true,
          message: "Please input your current job's employment length!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Employment Length"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactName1Error ? 'error' : '',
        help: currentEmployerContactName1Error || '',
        label: "Contact Name"
      }, getFieldDecorator('currentEmployerContactName1', {
        rules: [{
          required: true,
          message: "Please input your current employer's contact name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Contact Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactNumber1Error ? 'error' : '',
        help: currentEmployerContactNumber1Error || '',
        label: "Contact Phone Number"
      }, getFieldDecorator('currentEmployerContactNumber1', {
        rules: [{
          required: true,
          message: 'Please input a 10-digit contact phone number!',
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Contact Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerAnnualCompensation1Error ? 'error' : '',
        help: currentEmployerAnnualCompensation1Error || '',
        label: "Annual Compensation"
      }, getFieldDecorator('currentEmployerAnnualCompensation1', {
        rules: [{
          required: true,
          message: 'Please input your annual compensation!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "wallet",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "number",
        placeholder: "Annual Compensation"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactEmail1Error ? 'error' : '',
        help: currentEmployerContactEmail1Error || '',
        label: "Contact Email"
      }, getFieldDecorator('currentEmployerContactEmail1', {
        rules: [{
          required: true,
          message: 'Please input a contact email!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "email",
        placeholder: "Contact Email"
      })))))), external__react__default.a.createElement(TabPane, {
        tab: "2nd Current Employer",
        key: "2"
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployer2Error ? 'error' : '',
        help: currentEmployer2Error || '',
        label: "Employer"
      }, getFieldDecorator('currentEmployer2', {
        rules: [{
          message: "Please input your current employer's name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentJobTitle2Error ? 'error' : '',
        help: currentJobTitle2Error || '',
        label: "Job Title"
      }, getFieldDecorator('currentJobTitle2', {
        rules: [{
          message: 'Please input your current job title!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Job Title"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerAddress2Error ? 'error' : '',
        help: currentEmployerAddress2Error || '',
        label: "Employer Address"
      }, getFieldDecorator('currentEmployerAddress2', {
        rules: [{
          message: "Please input your current employer's address!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerPhoneNumber2Error ? 'error' : '',
        help: currentEmployerPhoneNumber2Error || '',
        label: "Employer's Phone Number"
      }, getFieldDecorator('currentEmployerPhoneNumber2', {
        rules: [{
          message: "Please input your employer's 10-digit phone number!",
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Employer's Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerEmploymentLength2Error ? 'error' : '',
        help: currentEmployerEmploymentLength2Error || '',
        label: "Employment Length"
      }, getFieldDecorator('currentEmployerEmploymentLength2', {
        rules: [{
          message: "Please input your current job's employment length!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Employment Length"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactName2Error ? 'error' : '',
        help: currentEmployerContactName2Error || '',
        label: "Contact Name"
      }, getFieldDecorator('currentEmployerContactName2', {
        rules: [{
          message: "Please input your current employer's contact name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Contact Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactNumber2Error ? 'error' : '',
        help: currentEmployerContactNumber2Error || '',
        label: "Contact Phone Number"
      }, getFieldDecorator('currentEmployerContactNumber2', {
        rules: [{
          message: 'Please input a 10-digit contact phone number!',
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Contact Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerAnnualCompensation2Error ? 'error' : '',
        help: currentEmployerAnnualCompensation2Error || '',
        label: "Annual Compensation"
      }, getFieldDecorator('currentEmployerAnnualCompensation2', {
        rules: [{
          message: 'Please input your annual compensation!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "wallet",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "number",
        placeholder: "Annual Compensation"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: currentEmployerContactEmail2Error ? 'error' : '',
        help: currentEmployerContactEmail2Error || '',
        label: "Contact Email"
      }, getFieldDecorator('currentEmployerContactEmail2', {
        rules: [{
          message: 'Please input a contact email!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "email",
        placeholder: "Contact Email"
      })))))), external__react__default.a.createElement(TabPane, {
        tab: "Previous Employer",
        key: "3"
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerError ? 'error' : '',
        help: previousEmployerError || '',
        label: "Employer"
      }, getFieldDecorator('previousEmployer', {
        rules: [{
          message: "Please input your previous employer's name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousJobTitleError ? 'error' : '',
        help: previousJobTitleError || '',
        label: "Job Title"
      }, getFieldDecorator('previousJobTitle', {
        rules: [{
          message: 'Please input your previous job title!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Job Title"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerAddressError ? 'error' : '',
        help: previousEmployerAddressError || '',
        label: "Employer Address"
      }, getFieldDecorator('previousEmployerAddress', {
        rules: [{
          message: "Please input your previous employer's address!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Employer Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerPhoneNumberError ? 'error' : '',
        help: previousEmployerPhoneNumberError || '',
        label: "Employer's Phone Number"
      }, getFieldDecorator('previousEmployerPhoneNumber', {
        rules: [{
          message: "Please input your employer's 10-digit phone number!",
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Employer's Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerEmploymentLengthError ? 'error' : '',
        help: previousEmployerEmploymentLengthError || '',
        label: "Employment Length"
      }, getFieldDecorator('previousEmployerEmploymentLength', {
        rules: [{
          message: "Please input your previous job's employment length!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Employment Length"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerContactNameError ? 'error' : '',
        help: previousEmployerContactNameError || '',
        label: "Contact Name"
      }, getFieldDecorator('previousEmployerContactName', {
        rules: [{
          message: "Please input your previous employer's contact name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Contact Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerContactNumberError ? 'error' : '',
        help: previousEmployerContactNumberError || '',
        label: "Contact Phone Number"
      }, getFieldDecorator('previousEmployerContactNumber', {
        rules: [{
          message: 'Please input a 10-digit contact phone number!',
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Contact Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerAnnualCompensationError ? 'error' : '',
        help: previousEmployerAnnualCompensationError || '',
        label: "Annual Compensation"
      }, getFieldDecorator('previousEmployerAnnualCompensation', {
        rules: [{
          message: 'Please input your annual compensation!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "wallet",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "number",
        placeholder: "Annual Compensation"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: previousEmployerContactEmailError ? 'error' : '',
        help: previousEmployerContactEmailError || '',
        label: "Contact Email"
      }, getFieldDecorator('previousEmployerContactEmail', {
        rules: [{
          message: 'Please input a contact email!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "email",
        placeholder: "Contact Email"
      })))))))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Emergency Contact")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emergencyContactError ? 'error' : '',
        help: emergencyContactError || '',
        label: "Name"
      }, getFieldDecorator('emergencyContact', {
        rules: [{
          required: true,
          message: "Please input your emergency contact's name!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emergencyContactPhoneNumberError ? 'error' : '',
        help: emergencyContactPhoneNumberError || '',
        label: "Phone Number"
      }, getFieldDecorator('emergencyContactPhoneNumber', {
        rules: [{
          required: true,
          message: "Please input your emergency contact's 10-digit phone number!",
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Contact Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emergencyContactEmailError ? 'error' : '',
        help: emergencyContactEmailError || '',
        label: "Email"
      }, getFieldDecorator('emergencyContactEmail', {
        rules: [{
          message: "Please input your emergency contact's email!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "email",
        placeholder: "Email"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(FormItem, {
        validateStatus: emergencyContactAddressError ? 'error' : '',
        help: emergencyContactAddressError || '',
        label: "Address"
      }, getFieldDecorator('emergencyContactAddress', {
        rules: [{
          message: "Please input your emergency contact's address!"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "environment",
        placeholder: "Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Upload Forms")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, _extends({}, this.photoIDUploadBtnProps(), {
        onChange: this.photoIDUploadChange,
        accept: ".jpg, .jpeg, .png, .pdf"
      }), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn,
        style: {
          borderColor: this.state.photoIDUploadError ? '#f5222d' : undefined
        }
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), external__react__default.a.createElement("span", {
        className: classes.redColor
      }, "*"), " Photo ID Upload")), this.state.photoIDUploadError && external__react__default.a.createElement("div", {
        className: "ant-form-item-control has-error"
      }, external__react__default.a.createElement("div", {
        className: "ant-form-explain"
      }, "Please input upload an image of your Photo ID!"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.paystub1UploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Paystub 1 Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.paystub2UploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Paystub 2 Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.taxReturnUploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Tax Return/W2 Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.bankStatment1UploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Bank Statement 1 Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.bankStatment2UploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Bank Statement 2 Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.employmentLetterUploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Employment Letter Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3
      }, external__react__default.a.createElement(upload__default.a, this.additionalFilesUploadBtnProps(), external__react__default.a.createElement(button__default.a, {
        className: classes.uploadBtn
      }, external__react__default.a.createElement(icon__default.a, {
        type: "upload"
      }), " Additional Upload"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Legal")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: classes.legalSection
      }, legal)), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Signature")), this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: classes.setSignatureContainer
      }, external__react__default.a.createElement("img", {
        className: classes.setSignatureImg,
        src: this.state.signatureURL,
        alt: "signature"
      }))), !this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(external__react_signature_canvas__default.a, {
        ref: function ref(_ref18) {
          _this2.sigCanvas = _ref18;
        },
        penColor: "green",
        canvasProps: {
          style: {
            borderColor: this.state.signatureError ? '#f5222d' : undefined
          },
          className: classes.signatureCanvas
        }
      })), this.state.signatureError && !this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: "ant-form-item-control has-error",
        style: {
          marginTop: '-30px'
        }
      }, external__react__default.a.createElement("div", {
        className: "ant-form-explain"
      }, "Please sign and set your signature above!"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, this.state.signatureURL && external__react__default.a.createElement("div", {
        className: classes.signatureBtnsWrapper
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement(button__default.a, {
        type: "danger",
        onClick: function onClick() {
          if (_this2.sigCanvas) {
            _this2.sigCanvas.clear();
          }

          if (_this2.state.signatureURL) {
            _this2.setState({
              signatureURL: ''
            });
          }
        }
      }, "Clear"))), !this.state.signatureURL && external__react__default.a.createElement("div", {
        className: classes.signatureBtnsWrapper
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          if (_this2.sigCanvas && !_this2.sigCanvas.isEmpty()) {
            _this2.setState({
              signatureURL: _this2.sigCanvas // .getTrimmedCanvas()
              .toDataURL('image/jpeg')
            });
          }
        }
      }, "Set Signature")))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement(button__default.a, {
        type: "primary",
        htmlType: "submit"
      }, "Submit"))))));
    }
  }]);

  return ApplicationForm;
}(external__react__default.a.Component)) || _class) || _class);
/* harmony default export */ var frontEndComponents_ApplicationForm = (form__default.a.create()(ApplicationForm_ApplicationForm));
// CONCATENATED MODULE: ./frontEndComponents/CreditCheckApplicationForm/index.js

















var CreditCheckApplicationForm__dec, CreditCheckApplicationForm__class;

function CreditCheckApplicationForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreditCheckApplicationForm__typeof = function _typeof(obj) { return typeof obj; }; } else { CreditCheckApplicationForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreditCheckApplicationForm__typeof(obj); }

function CreditCheckApplicationForm__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { CreditCheckApplicationForm__defineProperty(target, key, source[key]); }); } return target; }

function CreditCheckApplicationForm__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CreditCheckApplicationForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreditCheckApplicationForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreditCheckApplicationForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) CreditCheckApplicationForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) CreditCheckApplicationForm__defineProperties(Constructor, staticProps); return Constructor; }

function CreditCheckApplicationForm__possibleConstructorReturn(self, call) { if (call && (CreditCheckApplicationForm__typeof(call) === "object" || typeof call === "function")) { return call; } return CreditCheckApplicationForm__assertThisInitialized(self); }

function CreditCheckApplicationForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CreditCheckApplicationForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var CreditCheckApplicationForm_TabPane = tabs__default.a.TabPane;
var CreditCheckApplicationForm_Option = select__default.a.Option;

var CreditCheckApplicationForm_styles = function styles(theme) {
  return {
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: 1000
    },
    datePicker: {
      width: '100%'
    },
    signatureCanvas: {
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,.1)',
      borderRadius: '5px',
      transition: 'border-color .2s ease-in-out'
    },
    setSignatureContainer: {
      width: '100%',
      height: 200
    },
    setSignatureImg: {
      objectFit: 'contain',
      width: '100%',
      borderRadius: '5px'
    },
    uploadBtn: {
      width: '100% !important'
    },
    signatureBtnsWrapper: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  };
};

var CreditCheckApplicationForm_FormItem = form__default.a.Item;
var CreditCheckApplicationForm_stateOptions = constants["c" /* states */].map(function (state) {
  return external__react__default.a.createElement(CreditCheckApplicationForm_Option, {
    key: state,
    value: state
  }, state);
});
var CreditCheckApplicationForm_countriesOptions = constants["a" /* countries */].map(function (country) {
  return external__react__default.a.createElement(CreditCheckApplicationForm_Option, {
    key: country,
    value: country
  }, country);
});

var CreditCheckApplicationForm_hasErrors = function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
};

var CreditCheckApplicationForm_ApplicationForm = (CreditCheckApplicationForm__dec = Object(styles_["withStyles"])(CreditCheckApplicationForm_styles), CreditCheckApplicationForm__dec(CreditCheckApplicationForm__class = Object(external__mobx_react_["observer"])(CreditCheckApplicationForm__class =
/*#__PURE__*/
function (_React$Component) {
  CreditCheckApplicationForm__inherits(ApplicationForm, _React$Component);

  function ApplicationForm() {
    var _ref;

    var _temp, _this;

    CreditCheckApplicationForm__classCallCheck(this, ApplicationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return CreditCheckApplicationForm__possibleConstructorReturn(_this, (_temp = _this = CreditCheckApplicationForm__possibleConstructorReturn(this, (_ref = ApplicationForm.__proto__ || Object.getPrototypeOf(ApplicationForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(CreditCheckApplicationForm__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        signatureURL: '',
        signatureError: false
      }
    }), Object.defineProperty(CreditCheckApplicationForm__assertThisInitialized(_this), "formSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(CreditCheckApplicationForm__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var onSubmit = _this.props.onSubmit;
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          _this.formSubmitted = true;

          if (!_this.state.signatureURL) {
            _this.setState({
              signatureError: true
            });

            return;
          }

          if (!err) {
            if (_this.state.signatureError) {
              _this.setState({
                signatureError: false
              });
            }

            if (onSubmit) {
              onSubmit(CreditCheckApplicationForm__objectSpread({}, values, {
                signatureURL: _this.state.signatureURL
              }));
            }
          }
        });
      }
    }), Object.defineProperty(CreditCheckApplicationForm__assertThisInitialized(_this), "agentsOptions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _this.props.listingAgents.map(function (agent, i) {
        return external__react__default.a.createElement(CreditCheckApplicationForm_Option, {
          key: i,
          value: agent
        }, agent);
      })
    }), _temp));
  }

  CreditCheckApplicationForm__createClass(ApplicationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          getFieldValue = _props$form.getFieldValue,
          isFieldTouched = _props$form.isFieldTouched;
      var firstNameError = (isFieldTouched('firstName') || this.formSubmitted) && getFieldError('firstName');
      var lastNameError = (isFieldTouched('lastName') || this.formSubmitted) && getFieldError('lastName');
      var emailError = (isFieldTouched('email') || this.formSubmitted) && getFieldError('email');
      var phoneNumberError = (isFieldTouched('phoneNumber') || this.formSubmitted) && getFieldError('phoneNumber');
      var dateOfBirthError = (isFieldTouched('dateOfBirth') || this.formSubmitted) && getFieldError('dateOfBirth');
      var socialSecurityNumError = (isFieldTouched('socialSecurityNum') || this.formSubmitted) && getFieldError('socialSecurityNum');
      var applicantStreetAddressError = (isFieldTouched('applicantStreetAddress') || this.formSubmitted) && getFieldError('applicantStreetAddress');
      var applicantCityError = (isFieldTouched('applicantCity') || this.formSubmitted) && getFieldError('applicantCity');
      var applicantStateError = (isFieldTouched('applicantState') || this.formSubmitted) && getFieldError('applicantState');
      var applicantZipCodeError = (isFieldTouched('applicantZipCode') || this.formSubmitted) && getFieldError('applicantZipCode');
      var applicantCountryError = (isFieldTouched('applicantCountry') || this.formSubmitted) && getFieldError('applicantCountry');
      var agentError = (isFieldTouched('agent') || this.formSubmitted) && getFieldError('agent');
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(form__default.a, {
        layout: "vertical",
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Personal Information")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: firstNameError ? 'error' : '',
        help: firstNameError || '',
        label: "First Name"
      }, getFieldDecorator('firstName', {
        rules: [{
          required: true,
          message: 'Please input your first name! (30 max xharachters)',
          max: 30
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "First Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: lastNameError ? 'error' : '',
        help: lastNameError || '',
        label: "Last Name"
      }, getFieldDecorator('lastName', {
        rules: [{
          required: true,
          message: 'Please input your last name! (30 max xharachters)',
          max: 30
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Last Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || '',
        label: "Email"
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "email",
        placeholder: "Email"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: phoneNumberError ? 'error' : '',
        help: phoneNumberError || '',
        label: "Phone Number"
      }, getFieldDecorator('phoneNumber', {
        rules: [{
          required: true,
          message: 'Please input your 10-digit phone number!',
          len: 14
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "(999) 999-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "Phone Number"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: dateOfBirthError ? 'error' : '',
        help: dateOfBirthError || '',
        label: "Date of Birth"
      }, getFieldDecorator('dateOfBirth', {
        rules: [{
          required: true,
          message: 'Please input your date of birth!'
        }]
      })(external__react__default.a.createElement(date_picker__default.a, {
        className: classes.datePicker,
        disabledDate: function disabledDate(date) {
          return date ? date.isAfter(external__moment__default()().subtract(18, 'years')) : true;
        },
        type: "text",
        placeholder: "Date of Birth"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: socialSecurityNumError ? 'error' : '',
        help: socialSecurityNumError || '',
        label: "SSN"
      }, getFieldDecorator('socialSecurityNum', {
        rules: [{
          required: true,
          message: 'Please input your 9-digit social security number!',
          len: 11
        }]
      })(external__react__default.a.createElement(external__react_input_mask__default.a, {
        mask: "999-99-9999",
        maskChar: null,
        className: "ant-input",
        placeholder: "SSN"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: agentError ? 'error' : '',
        help: agentError || '',
        label: "My Agent"
      }, getFieldDecorator('agent', {
        rules: [{
          required: true,
          message: "Please input your agent's name!"
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "My Agent"
      }, this.agentsOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Current Address")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: applicantStreetAddressError ? 'error' : '',
        help: applicantStreetAddressError || '',
        label: "Street Address"
      }, getFieldDecorator('applicantStreetAddress', {
        rules: [{
          required: true,
          message: 'Please input your street address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Street Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: applicantCityError ? 'error' : '',
        help: applicantCityError || '',
        label: "City"
      }, getFieldDecorator('applicantCity', {
        rules: [{
          required: true,
          message: 'Please input your city!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "City"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: applicantStateError ? 'error' : '',
        help: applicantStateError || '',
        label: "State"
      }, getFieldDecorator('applicantState', {
        rules: [{
          required: true,
          message: 'Please input your state!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "State"
      }, CreditCheckApplicationForm_stateOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: applicantZipCodeError ? 'error' : '',
        help: applicantZipCodeError || '',
        label: "Zip Code"
      }, getFieldDecorator('applicantZipCode', {
        rules: [{
          required: true,
          message: 'Please input your zip code!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        prefix: external__react__default.a.createElement(icon__default.a, {
          type: "environment",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Zip Code"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, {
        validateStatus: applicantCountryError ? 'error' : '',
        help: applicantCountryError || '',
        label: "Country"
      }, getFieldDecorator('applicantCountry', {
        rules: [{
          required: true,
          message: 'Please input your country!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "Country"
      }, CreditCheckApplicationForm_countriesOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Signature")), this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: classes.setSignatureContainer
      }, external__react__default.a.createElement("img", {
        className: classes.setSignatureImg,
        src: this.state.signatureURL,
        alt: "signature"
      }))), !this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(external__react_signature_canvas__default.a, {
        ref: function ref(_ref2) {
          _this2.sigCanvas = _ref2;
        },
        penColor: "green",
        canvasProps: {
          style: {
            borderColor: this.state.signatureError ? '#f5222d' : undefined
          },
          className: classes.signatureCanvas
        }
      })), this.state.signatureError && !this.state.signatureURL && external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement("div", {
        className: "ant-form-item-control has-error",
        style: {
          marginTop: '-30px'
        }
      }, external__react__default.a.createElement("div", {
        className: "ant-form-explain"
      }, "Please input you signature above!"))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, this.state.signatureURL && external__react__default.a.createElement("div", {
        className: classes.signatureBtnsWrapper
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, null, external__react__default.a.createElement(button__default.a, {
        type: "danger",
        onClick: function onClick() {
          if (_this2.sigCanvas) {
            _this2.sigCanvas.clear();
          }

          if (_this2.state.signatureURL) {
            _this2.setState({
              signatureURL: ''
            });
          }
        }
      }, "Clear"))), !this.state.signatureURL && external__react__default.a.createElement("div", {
        className: classes.signatureBtnsWrapper
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, null, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          if (_this2.sigCanvas && !_this2.sigCanvas.isEmpty()) {
            _this2.setState({
              signatureURL: _this2.sigCanvas // .getTrimmedCanvas()
              .toDataURL('image/jpeg')
            });
          }
        }
      }, "Set Signature")))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(CreditCheckApplicationForm_FormItem, null, external__react__default.a.createElement(button__default.a, {
        type: "primary",
        htmlType: "submit"
      }, "Submit"))))));
    }
  }]);

  return ApplicationForm;
}(external__react__default.a.Component)) || CreditCheckApplicationForm__class) || CreditCheckApplicationForm__class);
/* harmony default export */ var CreditCheckApplicationForm = (form__default.a.create()(CreditCheckApplicationForm_ApplicationForm));
// CONCATENATED MODULE: ./frontEndComponents/Application/index.js















var Application__dec, Application__class;

function Application__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Application__typeof = function _typeof(obj) { return typeof obj; }; } else { Application__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Application__typeof(obj); }

function Application__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Application__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Application__createClass(Constructor, protoProps, staticProps) { if (protoProps) Application__defineProperties(Constructor.prototype, protoProps); if (staticProps) Application__defineProperties(Constructor, staticProps); return Constructor; }

function Application__possibleConstructorReturn(self, call) { if (call && (Application__typeof(call) === "object" || typeof call === "function")) { return call; } return Application__assertThisInitialized(self); }

function Application__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Application__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var ButtonGroup = button__default.a.Group;
var Application_FormItem = form__default.a.Item;

var Application_styles = function styles(theme) {
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
    },
    disabledLoading: {
      backgroundColor: '#40a9ff',
      borderColor: '#40a9ff',
      opacity: '.7',
      cursor: 'progress',
      '&:hover': {
        backgroundColor: '#40a9ff !important',
        borderColor: '#40a9ff !important'
      }
    },
    disabled: {
      backgroundColor: '#40a9ff',
      borderColor: '#40a9ff',
      opacity: '.7',
      cursor: 'not-allowed',
      '&:hover': {
        backgroundColor: '#f5f5f5 !important',
        borderColor: '#d9d9d9 !important'
      }
    }
  };
};

var Application_Option = select__default.a.Option;

var Application_hasErrors = function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
};

var Application_stateOptions = constants["c" /* states */].map(function (state) {
  return external__react__default.a.createElement(Application_Option, {
    key: state,
    value: state
  }, state);
});
var Application_countriesOptions = constants["b" /* countriesArrayWithCodes */].map(function (country) {
  return external__react__default.a.createElement(Application_Option, {
    key: country.name,
    value: country.code
  }, country.name);
});
var Application_Application = (Application__dec = Object(styles_["withStyles"])(Application_styles), Application__dec(Application__class = Object(external__mobx_react_["observer"])(Application__class =
/*#__PURE__*/
function (_React$Component) {
  Application__inherits(Application, _React$Component);

  function Application() {
    var _ref;

    var _temp, _this;

    Application__classCallCheck(this, Application);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Application__possibleConstructorReturn(_this, (_temp = _this = Application__possibleConstructorReturn(this, (_ref = Application.__proto__ || Object.getPrototypeOf(Application)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Application__assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.getPaymentFormApi(_this.props.form);
      }
    }), Object.defineProperty(Application__assertThisInitialized(_this), "hasFormFieldErrors", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props$form = _this.props.form,
            getFieldError = _this$props$form.getFieldError,
            getFieldValue = _this$props$form.getFieldValue;
        var errors = [getFieldError('cardOwnerName'), getFieldError('paymentAddress'), getFieldError('paymentAddressCity'), getFieldError('paymentAddressState'), getFieldError('applicantCountry'), !getFieldValue('cardOwnerName'), !getFieldValue('paymentAddress'), !getFieldValue('paymentAddressCity'), !getFieldValue('paymentAddressState'), !getFieldValue('applicantCountry')];
        return errors.some(function (error) {
          return error;
        });
      }
    }), _temp));
  }

  Application__createClass(Application, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onSubmit = _props.onSubmit,
          classes = _props.classes,
          listingAgents = _props.listingAgents,
          setFullApplication = _props.setFullApplication,
          setCreditCheckApplication = _props.setCreditCheckApplication,
          isFullApplication = _props.isFullApplication,
          paymentFormSubmitInProgress = _props.paymentFormSubmitInProgress,
          paymentModalVisible = _props.paymentModalVisible,
          cardElementOnChange = _props.cardElementOnChange,
          cardElementComplete = _props.cardElementComplete,
          onSubmitPaymentForm = _props.onSubmitPaymentForm,
          handleClosePaymentModal = _props.handleClosePaymentModal;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          isFieldTouched = _props$form.isFieldTouched;
      var cardOwnerNameError = isFieldTouched('cardOwnerName') && getFieldError('cardOwnerName');
      var paymentAddressError = isFieldTouched('paymentAddress') && getFieldError('paymentAddress');
      var paymentAddressCityError = isFieldTouched('paymentAddressCity') && getFieldError('paymentAddressCity');
      var paymentAddressStateError = isFieldTouched('paymentAddressState') && getFieldError('paymentAddressState');
      var applicantCountryError = isFieldTouched('applicantCountry') && getFieldError('applicantCountry');
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.titleSection
      }, "Apply"), external__react__default.a.createElement("div", {
        className: classes.applicationTypeBtnsWrapper
      }, external__react__default.a.createElement(ButtonGroup, null, external__react__default.a.createElement(button__default.a, {
        className: external__classnames__default()(isFullApplication ? classes.activePrimaryToggleBtn : null),
        onClick: setFullApplication
      }, "Full Application"), external__react__default.a.createElement(button__default.a, {
        className: external__classnames__default()(!isFullApplication ? classes.activePrimaryToggleBtn : null),
        onClick: setCreditCheckApplication
      }, "Credit Check Only"))), external__react__default.a.createElement("div", {
        className: classes.formWrapper
      }, isFullApplication ? external__react__default.a.createElement(frontEndComponents_ApplicationForm, {
        listingAgents: listingAgents,
        onSubmit: onSubmit
      }) : external__react__default.a.createElement(CreditCheckApplicationForm, {
        listingAgents: listingAgents,
        onSubmit: onSubmit
      })), external__react__default.a.createElement(modal__default.a, {
        title: "Payment",
        visible: paymentModalVisible,
        onOk: this.handleOk,
        confirmLoading: paymentFormSubmitInProgress,
        onCancel: handleClosePaymentModal,
        wrapClassName: external__classnames__default()(classes.verticalModalWrapper, 'payment-modal'),
        okText: "Pay $100.00",
        footer: null
      }, external__react__default.a.createElement("div", {
        className: classes.paymentCardWrapper
      }, external__react__default.a.createElement(form__default.a, {
        layout: "vertical",
        onSubmit: onSubmitPaymentForm
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Cardholder Information")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(Application_FormItem, {
        validateStatus: cardOwnerNameError ? 'error' : '',
        help: cardOwnerNameError || '',
        label: "Name"
      }, getFieldDecorator('cardOwnerName', {
        rules: [{
          required: true,
          message: "Please input the carholder's name! (As it appears on the card)"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "text",
        placeholder: "Name"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(Application_FormItem, {
        validateStatus: paymentAddressError ? 'error' : '',
        help: paymentAddressError || '',
        label: "Address"
      }, getFieldDecorator('paymentAddress', {
        rules: [{
          required: true,
          message: 'Please input the payment address!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "text",
        placeholder: "Address"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(Application_FormItem, {
        validateStatus: paymentAddressCityError ? 'error' : '',
        help: paymentAddressCityError || '',
        label: "City"
      }, getFieldDecorator('paymentAddressCity', {
        rules: [{
          required: true,
          message: 'Please input the city!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "text",
        placeholder: "City"
      })))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(Application_FormItem, {
        validateStatus: paymentAddressStateError ? 'error' : '',
        help: paymentAddressStateError || '',
        label: "State"
      }, getFieldDecorator('paymentAddressState', {
        rules: [{
          required: true,
          message: 'Please input the state!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "State"
      }, Application_stateOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(Application_FormItem, {
        validateStatus: applicantCountryError ? 'error' : '',
        help: applicantCountryError || '',
        label: "Country"
      }, getFieldDecorator('applicantCountry', {
        rules: [{
          required: true,
          message: 'Please input your country!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        autocomplete: "off",
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        placeholder: "Country"
      }, Application_countriesOptions)))), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12
      }, external__react__default.a.createElement(divider__default.a, null, "Card Details"))), external__react__default.a.createElement("label", null, external__react__default.a.createElement(external__react_stripe_elements_["CardElement"], {
        style: {
          base: {
            fontSize: '18px'
          }
        },
        onChange: cardElementOnChange
      })), external__react__default.a.createElement("div", {
        className: external__classnames__default()(classes.paymentBtnWrapper)
      }, external__react__default.a.createElement(button__default.a, {
        htmlType: "submit",
        disabled: !cardElementComplete || this.hasFormFieldErrors(),
        className: external__classnames__default()(classes.payBtn, !cardElementComplete || this.hasFormFieldErrors() ? classes.disabled : null, paymentFormSubmitInProgress && classes.disabledLoading),
        type: "primary"
      }, paymentFormSubmitInProgress && external__react__default.a.createElement(icon__default.a, {
        type: "loading"
      }), "Pay", ' ', external__react__default.a.createElement("span", {
        className: classes.paymentAmount
      }, "$100.00"), ' '))))));
    }
  }]);

  return Application;
}(external__react__default.a.Component)) || Application__class) || Application__class);
/* harmony default export */ var frontEndComponents_Application = (form__default.a.create()(Application_Application));
// CONCATENATED MODULE: ./frontEndContainers/Application.js


var frontEndContainers_Application__class;

function frontEndContainers_Application__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_Application__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_Application__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_Application__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function frontEndContainers_Application__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_Application__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_Application__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_Application__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_Application__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_Application__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_Application__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_Application__assertThisInitialized(self); }

function frontEndContainers_Application__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function frontEndContainers_Application__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var chance = new external__chance__default.a();

var createFakeAgents = function createFakeAgents(num) {
  var agents = [];

  for (var i = 0; i < num; i++) {
    agents.push(chance.name());
  }

  return agents;
};

var Application_ApplicationContainer = Object(external__mobx_react_["observer"])(frontEndContainers_Application__class =
/*#__PURE__*/
function (_React$Component) {
  frontEndContainers_Application__inherits(ApplicationContainer, _React$Component);

  function ApplicationContainer() {
    var _ref;

    var _temp, _this;

    frontEndContainers_Application__classCallCheck(this, ApplicationContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return frontEndContainers_Application__possibleConstructorReturn(_this, (_temp = _this = frontEndContainers_Application__possibleConstructorReturn(this, (_ref = ApplicationContainer.__proto__ || Object.getPrototypeOf(ApplicationContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        listingAgents: createFakeAgents(30),
        formValues: null,
        isFullApplication: true,
        paymentFormSubmitInProgress: false,
        paymentModalVisible: false,
        cardElementComplete: false
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "paymentFormApi", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "onSubmitApplication", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(formValues) {
        _this.setState({
          formValues: formValues,
          paymentModalVisible: true
        });
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "onSubmitPaymentForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e.preventDefault) e.preventDefault();

        _this.paymentFormApi.validateFields(
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(err, values) {
            var applicantCountry, cardOwnerName, paymentAddress, paymentAddressCity, paymentAddressState, stripeToken;
            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (_this.state.cardElementComplete) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    if (!_this.state.paymentFormSubmitInProgress) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    if (err) {
                      _context.next = 13;
                      break;
                    }

                    _this.setState({
                      paymentFormSubmitInProgress: true
                    });

                    console.log(values);
                    applicantCountry = values.applicantCountry, cardOwnerName = values.cardOwnerName, paymentAddress = values.paymentAddress, paymentAddressCity = values.paymentAddressCity, paymentAddressState = values.paymentAddressState;
                    console.log(_this.state.formValues);
                    _context.next = 11;
                    return _this.props.stripe.createToken({
                      name: cardOwnerName,
                      address_line1: paymentAddress,
                      address_city: paymentAddressCity,
                      address_state: paymentAddressState,
                      address_country: applicantCountry
                    });

                  case 11:
                    stripeToken = _context.sent;
                    console.log(stripeToken);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "setFullApplication", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.state.isFullApplication) {
          _this.setState({
            isFullApplication: true
          });
        }
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "setCreditCheckApplication", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.isFullApplication) {
          _this.setState({
            isFullApplication: false
          });
        }
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "handleClosePaymentModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          paymentModalVisible: false
        });
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "cardElementOnChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref3) {
        var complete = _ref3.complete;

        _this.setState({
          cardElementComplete: complete
        });
      }
    }), Object.defineProperty(frontEndContainers_Application__assertThisInitialized(_this), "getPaymentFormApi", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(paymentFormApi) {
        _this.paymentFormApi = paymentFormApi;
      }
    }), _temp));
  }

  frontEndContainers_Application__createClass(ApplicationContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          listingID = _props.listingID,
          listingAgents = _props.listingAgents,
          submit = _props.submit;
      return external__react__default.a.createElement(frontEndComponents_Application, {
        listingAgents: this.state.listingAgents,
        onSubmit: this.onSubmitApplication,
        onSubmitPaymentForm: this.onSubmitPaymentForm,
        isFullApplication: this.state.isFullApplication,
        setFullApplication: this.setFullApplication,
        setCreditCheckApplication: this.setCreditCheckApplication,
        paymentFormSubmitInProgress: this.state.paymentFormSubmitInProgress,
        paymentModalVisible: this.state.paymentModalVisible,
        cardElementOnChange: this.cardElementOnChange,
        cardElementComplete: this.state.cardElementComplete,
        handleClosePaymentModal: this.handleClosePaymentModal,
        getPaymentFormApi: this.getPaymentFormApi
      });
    }
  }]);

  return ApplicationContainer;
}(external__react__default.a.Component)) || frontEndContainers_Application__class;

/* harmony default export */ var frontEndContainers_Application = (Object(external__react_stripe_elements_["injectStripe"])(Application_ApplicationContainer));
// CONCATENATED MODULE: ./pages/apply.js
var apply__class;

function apply__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { apply__typeof = function _typeof(obj) { return typeof obj; }; } else { apply__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return apply__typeof(obj); }

function apply__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function apply__possibleConstructorReturn(self, call) { if (call && (apply__typeof(call) === "object" || typeof call === "function")) { return call; } return apply__assertThisInitialized(self); }

function apply__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function apply__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function apply__createClass(Constructor, protoProps, staticProps) { if (protoProps) apply__defineProperties(Constructor.prototype, protoProps); if (staticProps) apply__defineProperties(Constructor, staticProps); return Constructor; }

function apply__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var apply_Apply = Object(external__mobx_react_["observer"])(apply__class =
/*#__PURE__*/
function (_React$Component) {
  apply__inherits(Apply, _React$Component);

  apply__createClass(Apply, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer,
        listingID: query.listingID
      };
    }
  }]);

  function Apply(props) {
    var _this;

    apply__classCallCheck(this, Apply);

    _this = apply__possibleConstructorReturn(this, (Apply.__proto__ || Object.getPrototypeOf(Apply)).call(this, props));
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData); // for debugging only!!!

    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    _this.state = {
      stripe: null
    };
    return _this;
  }

  apply__createClass(Apply, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Create Stripe instance in componentDidMount
      // (componentDidMount only fires in browser/DOM environment)
      if (window.Stripe) {
        this.setState({
          stripe: window.Stripe('pk_test_xCYvxzjkWdoHBCMKdJ3aYv4Y')
        });
      } else {
        document.getElementById('stripe-js').addEventListener('load', function () {
          // Create Stripe instance once Stripe.js loads
          _this2.setState({
            stripe: window.Stripe('pk_test_xCYvxzjkWdoHBCMKdJ3aYv4Y')
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var listingID = this.props.listingID;
      return external__react__default.a.createElement(external__react_stripe_elements_["StripeProvider"], {
        stripe: this.state.stripe
      }, external__react__default.a.createElement(FrontEndLayout["a" /* default */], {
        UserStore: this.store.UserStore
      }, external__react__default.a.createElement(external__react_stripe_elements_["Elements"], null, external__react__default.a.createElement(frontEndContainers_Application, {
        listingID: listingID
      }))));
    }
  }]);

  return Apply;
}(external__react__default.a.Component)) || apply__class;

/* harmony default export */ var apply = __webpack_exports__["default"] = (Object(withData["a" /* default */])(apply_Apply));

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload/style/css");

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ })
/******/ ]);