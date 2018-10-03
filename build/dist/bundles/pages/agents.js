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
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
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
/* 12 */,
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
/* 18 */,
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
/* 26 */,
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
/* 59 */,
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
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);


/***/ }),
/* 215 */
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

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(71);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: ./frontEndComponents/FrontEndLayout/index.js + 9 modules
var FrontEndLayout = __webpack_require__(102);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(24);

// EXTERNAL MODULE: ./lib/withData.js + 3 modules
var withData = __webpack_require__(50);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(19);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(128);
var Search__default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./frontEndComponents/AllAgentsView/index.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var emailSubject = 'Real estate property inquiry';

var styles = function styles(theme) {
  var _agentEmail;

  return {
    root: {},
    titleSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      width: '100%',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      fontSize: '2.8rem',
      color: '#fff',
      backgroundColor: 'black',
      marginBottom: 50
    },
    mainSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 20px'
    },
    agentsSection: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      width: '100%',
      maxWidth: 1200
    },
    agentCard: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      transition: 'transform .2s ease-in-out',
      color: 'rgba(0,0,0,.7)',
      '&:hover': {
        transform: 'scale(1.02,1.02)'
      }
    },
    profilePicWrapper: {
      paddingTop: '100%',
      width: '100%',
      position: 'relative'
    },
    profilePicAnchor: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    profilePic: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      cursor: 'pointer'
    },
    detailsWrapper: {
      padding: '20px 20px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgba(0,0,0,.1)',
      borderTop: 'none'
    },
    agentName: {
      fontSize: '1.5rem',
      cursor: 'pointer'
    },
    agentNameAnchor: {
      marginBottom: '7px',
      textDecoration: 'none',
      color: 'rgba(0,0,0,.8)'
    },
    agentEmail: (_agentEmail = {
      marginBottom: '10px',
      fontSize: '1.1rem'
    }, _defineProperty(_agentEmail, "fontSize", '.9rem'), _defineProperty(_agentEmail, "fontFamily", theme.frontEnd.typography.fontFamily.sansSerif2), _defineProperty(_agentEmail, "textDecoration", 'none'), _defineProperty(_agentEmail, "color", 'rgba(0,0,0,.7)'), _agentEmail),
    agentMobileNumber: {
      marginBottom: '10px',
      color: 'rgba(0,0,0,.5)',
      fontSize: '.9rem',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2
    },
    filterInputWrapper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: 1200
    },
    filterInput: {
      padding: '10px 12px',
      paddingRight: 35,
      width: '100%',
      maxWidth: 1200,
      height: 40,
      fontSize: '.9rem',
      border: '1px solid rgba(0,0,0,.3)',
      borderRadius: 5
    },
    searchIconWrapper: {
      position: 'absolute',
      right: 20,
      top: 8,
      height: 10,
      width: 10
    }
  };
};

var AllAgentsView_AllAgentsView = (_dec = Object(styles_["withStyles"])(styles), _dec(_class = Object(external__mobx_react_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AllAgentsView, _Component);

  function AllAgentsView() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AllAgentsView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AllAgentsView.__proto__ || Object.getPrototypeOf(AllAgentsView)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        filterValue: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onFilterChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var value = e.target.value;
        if (e.preventDefault) e.preventDefault();

        _this.setState({
          filterValue: value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderAgnets", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(agents) {
        var classes = _this.props.classes;

        var filter = _this.state.filterValue.trim().toLowerCase();

        var viewableAgents;

        if (filter) {
          viewableAgents = agents.filter(function (agent) {
            return agent.name.toLowerCase().includes(filter);
          });
        } else {
          viewableAgents = agents;
        }

        return viewableAgents.map(function (agent) {
          return external__react__default.a.createElement(Grid__default.a, {
            item: true,
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            key: agent.email
          }, external__react__default.a.createElement("div", {
            className: classes.agentCard
          }, external__react__default.a.createElement("div", {
            className: classes.profilePicWrapper
          }, external__react__default.a.createElement(routes["Link"], {
            route: "agent",
            params: {
              id: agent.agentID
            }
          }, external__react__default.a.createElement("a", {
            className: classes.profilePicAnchor
          }, external__react__default.a.createElement("img", {
            className: classes.profilePic,
            src: agent.profilePhotoURL,
            alt: "agent"
          })))), external__react__default.a.createElement("div", {
            className: classes.detailsWrapper
          }, external__react__default.a.createElement(routes["Link"], {
            route: "agent",
            params: {
              id: agent.agentID
            }
          }, external__react__default.a.createElement("a", {
            className: classes.agentNameAnchor
          }, external__react__default.a.createElement("div", {
            className: classes.agentName
          }, agent.name))), external__react__default.a.createElement("div", {
            className: classes.agentEmail
          }, agent.email), external__react__default.a.createElement("div", {
            className: classes.agentMobileNumber
          }, "M: ", agent.mobileNumber))));
        });
      }
    }), _temp));
  }

  _createClass(AllAgentsView, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          agents = _props.agents,
          classes = _props.classes;
      console.log("agents: ".concat(agents)); // grab the agent info and listings using this agentID

      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.titleSection
      }, "Our Agents"), external__react__default.a.createElement("div", {
        className: classes.mainSection
      }, external__react__default.a.createElement("div", {
        className: classes.filterInputWrapper
      }, external__react__default.a.createElement("input", {
        className: classes.filterInput,
        value: this.state.filterValue,
        onChange: this.onFilterChange,
        type: "text",
        placeholder: "Search Agents..."
      }), external__react__default.a.createElement("span", {
        className: classes.searchIconWrapper
      }, external__react__default.a.createElement(Search__default.a, null))), external__react__default.a.createElement("div", {
        className: classes.agentsSection
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24
      }, agents && agents.length && this.renderAgnets(agents)))));
    }
  }]);

  return AllAgentsView;
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var frontEndComponents_AllAgentsView = (AllAgentsView_AllAgentsView);
// CONCATENATED MODULE: ./pages/agents.js
var agents__class;

function agents__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { agents__typeof = function _typeof(obj) { return typeof obj; }; } else { agents__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return agents__typeof(obj); }

function agents__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function agents__possibleConstructorReturn(self, call) { if (call && (agents__typeof(call) === "object" || typeof call === "function")) { return call; } return agents__assertThisInitialized(self); }

function agents__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function agents__createClass(Constructor, protoProps, staticProps) { if (protoProps) agents__defineProperties(Constructor.prototype, protoProps); if (staticProps) agents__defineProperties(Constructor, staticProps); return Constructor; }

function agents__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function agents__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var chance = new external__chance__default.a();

var agents_Listing = Object(external__mobx_react_["observer"])(agents__class =
/*#__PURE__*/
function (_React$Component) {
  agents__inherits(Listing, _React$Component);

  agents__createClass(Listing, null, [{
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

  function Listing(props) {
    var _this;

    agents__classCallCheck(this, Listing);

    _this = agents__possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));
    Object.defineProperty(agents__assertThisInitialized(_this), "createAgents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(num) {
        var agents = [];

        for (var i = 0; i < num; i++) {
          var agent = {
            profilePhotoURL: "http://picsum.photos/325/325/?random?".concat(chance.integer({
              min: 1,
              max: 1000
            })),
            name: chance.name(),
            email: chance.email(),
            mobileNumber: chance.phone(),
            agentID: chance.integer({
              min: 100000,
              max: 999999
            })
          };
          agents.push(agent);
        }

        return agents;
      }
    });
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData); // for debugging only!!!

    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    _this.state = {
      agents: _this.createAgents(35)
    };
    return _this;
  }

  agents__createClass(Listing, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(FrontEndLayout["a" /* default */], {
        UserStore: this.store.UserStore
      }, external__react__default.a.createElement(frontEndComponents_AllAgentsView, {
        agents: this.state.agents
      }));
    }
  }]);

  return Listing;
}(external__react__default.a.Component)) || agents__class;

/* harmony default export */ var pages_agents = __webpack_exports__["default"] = (Object(withData["a" /* default */])(agents_Listing));

/***/ })
/******/ ]);