webpackHotUpdate(5,{

/***/ "../node_modules/debounce/index.js":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "../node_modules/material-ui-pickers/utils/MuiPickersUtilsProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiPickersContextConsumer = undefined;

var _getPrototypeOf = __webpack_require__("../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("../node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$createContext = _react2.default.createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

var MuiPickersContextConsumer = exports.MuiPickersContextConsumer = Consumer;

var MuiPickersUtilsProvider = function (_PureComponent) {
  (0, _inherits3.default)(MuiPickersUtilsProvider, _PureComponent);

  function MuiPickersUtilsProvider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MuiPickersUtilsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MuiPickersUtilsProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiPickersUtilsProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      utils: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MuiPickersUtilsProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Provider,
        { value: this.state.utils },
        ' ',
        this.props.children,
        ' '
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref2) {
      var Utils = _ref2.utils,
          locale = _ref2.locale,
          moment = _ref2.moment;

      return {
        utils: new Utils({ locale: locale, moment: moment })
      };
    }
  }]);
  return MuiPickersUtilsProvider;
}(_react.PureComponent);

MuiPickersUtilsProvider.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  utils: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.element.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.element.isRequired)]).isRequired,
  moment: _propTypes2.default.func
};
MuiPickersUtilsProvider.defaultProps = {
  locale: undefined,
  moment: undefined
};
exports.default = MuiPickersUtilsProvider;

/***/ }),

/***/ "./AppGlobalStateProvider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js";

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



var AppContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

var AppProvider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;


;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppContext, "AppContext", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js");
  reactHotLoader.register(AppProvider, "AppProvider", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/InnerAppLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__ = __webpack_require__("../node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__ = __webpack_require__("../node_modules/material-ui-pickers/utils/moment-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__ = __webpack_require__("../node_modules/material-ui-pickers/utils/MuiPickersUtilsProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SideNav__ = __webpack_require__("./components/SideNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AdminSideNav__ = __webpack_require__("./components/AdminSideNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppTopNav__ = __webpack_require__("./components/AppTopNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__SettingsDrawer__ = __webpack_require__("./components/SettingsDrawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MenuDialogBox__ = __webpack_require__("./components/MenuDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);



var _class,
    _temp,
    _initialiseProps,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var Offline = function Offline() {
  return null;
};

if (__WEBPACK_IMPORTED_MODULE_9_is_browser___default.a) {
  var _require = __webpack_require__("../node_modules/react-detect-offline/dist/index.js"),
      OfflineComp = _require.Offline;

  Offline = OfflineComp;
}

var styles = function styles(theme) {
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

var InnerAppLayout = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerAppLayout, _React$Component);

  function InnerAppLayout(props) {
    var _this;

    _classCallCheck(this, InnerAppLayout);

    _this = _possibleConstructorReturn(this, (InnerAppLayout.__proto__ || Object.getPrototypeOf(InnerAppLayout)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      navDrawerOpen: false,
      settingsDrawerOpen: false,
      managementModalCurrentType: null,
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null
    };
    var userRole = _this.props.userRole;
    _this.isAdmin = userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"];
    return _this;
  }

  _createClass(InnerAppLayout, [{
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
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default.a, {
        utils: __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__AppTopNav__["a" /* default */], {
        currentPath: currentPath,
        logoutUser: logoutUser,
        toggleDrawer: this.toggleNavDrawer,
        isAdmin: isAdmin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), this.renderSideNav(), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("main", {
        className: classes.content,
        id: "inner-app-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.toolbar,
        id: "toolbar-helper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), this.props.children)), __WEBPACK_IMPORTED_MODULE_9_is_browser___default.a && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Offline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: true,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, "Internet connection currently unavailable", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          className: classes.noConnectionSpinner,
          type: "loading",
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return InnerAppLayout;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _initialiseProps = function _initialiseProps() {
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
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__AdminSideNav__["a" /* default */], {
          currentPath: currentPath,
          drawerOpen: _this2.state.navDrawerOpen,
          toggleDrawer: _this2.toggleNavDrawer,
          logoutUser: logoutUser,
          toggleManagementModal: _this2.toggleManagementModal,
          toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SideNav__["a" /* default */], {
        currentPath: currentPath,
        drawerOpen: _this2.state.navDrawerOpen,
        toggleDrawer: _this2.toggleNavDrawer,
        logoutUser: logoutUser,
        toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      });
    }
  });
}, _temp);

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(InnerAppLayout));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Offline, "Offline", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(InnerAppLayout, "InnerAppLayout", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("../node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__ = __webpack_require__("../node_modules/antd/dist/antd.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_withRoot__ = __webpack_require__("./lib/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__themeStyles__ = __webpack_require__("./themeStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globalStyles__ = __webpack_require__("./globalStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__InnerAppLayout__ = __webpack_require__("./components/InnerAppLayout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FullScreenLoader__ = __webpack_require__("./components/FullScreenLoader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models__ = __webpack_require__("./models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__ = __webpack_require__("./AppGlobalStateProvider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_css_main_css__ = __webpack_require__("./static/css/main.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__static_css_main_css__);


var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import DevTools from 'mobx-react-devtools';
















var store = Object(__WEBPACK_IMPORTED_MODULE_14__models__["a" /* initStore */])();
var UIStore = store.UIStore;
__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.configure({
  showSpinner: false
});
__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.configure({
  trickleSpeed: 100
});

if (__WEBPACK_IMPORTED_MODULE_6_is_browser___default.a) {
  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeStart = function () {
    __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
  };

  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeComplete = function () {
    if (UIStore.fullScreenLoaderOn) {
      UIStore.toggleFullScreenLoader(false);
    }

    __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
  };

  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeError = function () {
    return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
  };
}

var Layout = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
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
      var isAdmin = userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"];
      var fullScreenLoaderOn = UIStore.fullScreenLoaderOn,
          fullScreenLoaderText = UIStore.fullScreenLoaderText,
          toggleFullScreenLoader = UIStore.toggleFullScreenLoader;

      var logoutUser =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var _ref2, error;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.pushRoute('home');

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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.props.title ? this.props.title : 'Reyes & Elsamad Real Estate'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_11__globalStyles__["a" /* default */]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__["b" /* AppProvider */], {
        UserStore: UserStore,
        UIStore: UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_styled_components__["b" /* ThemeProvider */], {
        theme: __WEBPACK_IMPORTED_MODULE_10__themeStyles__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__InnerAppLayout__["a" /* default */], {
        logoutUser: logoutUser,
        userRole: userRole,
        toggleFullScreenLoader: toggleFullScreenLoader,
        isAdmin: isAdmin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__FullScreenLoader__["a" /* default */], {
        open: fullScreenLoaderOn,
        text: fullScreenLoaderText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })));
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_9__lib_withRoot__["a" /* default */])(Layout));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, "store", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(UIStore, "UIStore", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(Layout, "Layout", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MaterialCustomTextFieldWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce__ = __webpack_require__("../node_modules/debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_debounce__);
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, "$");
        } else if (isPercentAmount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, "%");
        } else if (customPrefix) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
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
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), function (fieldApi) {
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
          required: required,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputLabel"], {
          htmlFor: id,
          shrink: shrink,
          className: disabled || disabledStyle ? "".concat(classes.disabled, " ").concat(labelClassName) : "".concat(labelClassName),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
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
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        })), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
          classes: {
            root: classes.redErrorText
          },
          id: "".concat(id, "-error-text"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }, error) : null);
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(CustomTextFieldWrapper));

/* harmony default export */ __webpack_exports__["a"] = (_default);
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(numbersOnlyRegex, "numbersOnlyRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(noLettersRegex, "noLettersRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(noNegativeSignRegex, "noNegativeSignRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(CustomTextFieldWrapper, "CustomTextFieldWrapper", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.1deb322985130247cea7.hot-update.js.map