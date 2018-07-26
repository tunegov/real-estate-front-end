webpackHotUpdate(7,{

/***/ "./constants/userTypes.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(customer, "customer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/constants/userTypes.js");
  reactHotLoader.register(agent, "agent", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/constants/userTypes.js");
  reactHotLoader.register(admin, "admin", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/constants/userTypes.js");
  reactHotLoader.register(superAdmin, "superAdmin", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/constants/userTypes.js");
  reactHotLoader.register(anonymous, "anonymous", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/constants/userTypes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./frontEndComponents/FrontEndLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__("../node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_withRoot__ = __webpack_require__("./lib/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frontEndContainers_Header__ = __webpack_require__("./frontEndContainers/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sharedStyledComponents_AppContentWrapper__ = __webpack_require__("./sharedStyledComponents/AppContentWrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__themeStyles__ = __webpack_require__("./themeStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globalStyles__ = __webpack_require__("./globalStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styledComponents__ = __webpack_require__("./frontEndComponents/FrontEndLayout/styledComponents/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants_userTypes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/frontEndComponents/FrontEndLayout/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import DevTools from 'mobx-react-devtools';













__WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.configure({
  showSpinner: false
});
__WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.configure({
  trickleSpeed: 100
});

if (__WEBPACK_IMPORTED_MODULE_5_is_browser___default.a) {
  __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function () {
    __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.start();
  };

  __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeComplete = function () {
    return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
  };

  __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeError = function () {
    return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
  };
}

var Layout = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      var _props$UserStore = this.props.UserStore,
          isLoggedIn = _props$UserStore.isLoggedIn,
          logoutUser = _props$UserStore.logoutUser,
          userRole = _props$UserStore.userRole;
      var isAdmin = userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["admin"] || userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["superAdmin"];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.title ? this.props.title : 'Real Estate App'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans",
        type: "text/css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Playfair+Display|Raleway",
        type: "text/css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_11__globalStyles__["a" /* default */]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_styled_components__["b" /* ThemeProvider */], {
        theme: __WEBPACK_IMPORTED_MODULE_10__themeStyles__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__styledComponents__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__styledComponents__["b" /* HeaderAndAppContentWrapper */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__frontEndContainers_Header__["a" /* default */], {
        isLoggedIn: isLoggedIn,
        logoutUser: logoutUser,
        headerBoxShadowOff: this.props.headerBoxShadowOff,
        isAdmin: isAdmin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__sharedStyledComponents_AppContentWrapper__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.props.children)))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_7__lib_withRoot__["a" /* default */])(Layout));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/frontEndComponents/FrontEndLayout/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/frontEndComponents/FrontEndLayout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.2ce439b2401cf76b4389.hot-update.js.map