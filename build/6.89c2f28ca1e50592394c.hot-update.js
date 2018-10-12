webpackHotUpdate(6,{

/***/ "../node_modules/antd/lib/icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("../node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("../node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return React.createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

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

/***/ "./components/forms/SubmitInvoiceForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete__ = __webpack_require__("../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_TextField__ = __webpack_require__("../node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__formValidation__ = __webpack_require__("./components/forms/SubmitInvoiceForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");



var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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





















var CustomTextField = __WEBPACK_IMPORTED_MODULE_15__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_16__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_17__MaterialCustomSelectInputWrapper__["a" /* default */];
var CustomFileUploadInputBtn = __WEBPACK_IMPORTED_MODULE_18__CustomFileUploadInputWrapper__["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

var styles = function styles(theme) {
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
      textAlign: 'center',
      overflow: 'hidden'
    },
    formRoot: {
      paddingBottom: 10,
      overflow: 'hidden',
      flexGrow: 1,
      justifyContent: 'center'
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
      top: '18px'
    },
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
    alignCenterGrid: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
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
    ManagementOrCobrokeCompanyTextField: {
      width: '100%',
      margin: 8,
      marginLeft: 0
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
  label: 'Ill pick up the check'
}, {
  label: 'Please ACH me'
}];
var radioInputYesNoItems = [{
  label: 'Yes'
}, {
  label: 'No'
}];
var invoiceTypeSelectItems = [{
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
  label: 'Cridit card payment'
}, {
  label: 'Client wired funds'
}, {
  label: 'Commision advance'
}];
var paymentTypeSelectItems = [{
  label: 'Check'
}, {
  label: 'Money Order'
}, {
  label: 'Wire'
}, {
  label: 'Owner Pays (OP)'
}];

var SubmitInvoiceForm = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitInvoiceForm, _Component);

  function SubmitInvoiceForm(props) {
    var _this;

    _classCallCheck(this, SubmitInvoiceForm);

    _this = _possibleConstructorReturn(this, (SubmitInvoiceForm.__proto__ || Object.getPrototypeOf(SubmitInvoiceForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "isFirstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.state = {
      shouldRenderInitialDeductionItem: true
    };
    return _this;
  }

  _createClass(SubmitInvoiceForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.setInitialContainerState && this.props.submittedInvoice) {
        this.props.setInitialContainerState({
          total: this.props.submittedInvoice.total
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var firstName;
      var lastName;
      var agentPart;
      var agentType;
      var state;

      if (this.props.agent) {
        firstName = this.props.agent.firstName;
        lastName = this.props.agent.lastName;
        agentPart = this.props.agent.agentPart;
        agentType = this.props.agent.agent.agentType;
        state = this.props.agent.agent.state;
      }

      var _props = this.props,
          classes = _props.classes,
          setAgentDisclosureForm = _props.setAgentDisclosureForm,
          setContractOrLeaseForms = _props.setContractOrLeaseForms,
          agentDisclosureForm = _props.agentDisclosureForm,
          contractOrLeaseForms = _props.contractOrLeaseForms,
          subtractPaymentValueFromState = _props.subtractPaymentValueFromState,
          choosingMgmtCoBrokeCompany = _props.choosingMgmtCoBrokeCompany,
          toggleChoosingMgmtCoBrokeCompany = _props.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange = _props.handleMgmtOrCobrokeCompanyChange,
          setHasSetNewMgmtOrCobrokeCompany = _props.setHasSetNewMgmtOrCobrokeCompany,
          newMgmtOrCobrokeCompany = _props.newMgmtOrCobrokeCompany,
          addedManagementCompanies = _props.addedManagementCompanies,
          formSubmissionBegun = _props.formSubmissionBegun,
          submittingFormToServer = _props.submittingFormToServer,
          submittedInvoice = _props.submittedInvoice,
          isEditingInvoice = _props.isEditingInvoice,
          managementCobrokeCompanyItems = _props.managementCobrokeCompanyItems,
          isViewType = _props.isViewType;
      var managementCobrokeCompanies = managementCobrokeCompanyItems && managementCobrokeCompanyItems.length ? _toConsumableArray(managementCobrokeCompanyItems) : [];

      if (submittedInvoice && submittedInvoice.managementOrCobrokeCompany) {
        if (!managementCobrokeCompanies.includes(submittedInvoice.managementOrCobrokeCompany)) {
          managementCobrokeCompanies.push(submittedInvoice.managementOrCobrokeCompany);
        }
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
      var finalDefaultValues;

      if (submittedInvoice) {
        var agentNotes = submittedInvoice.agentNotes,
            _agentType = submittedInvoice.agentType,
            agentName = submittedInvoice.agentName,
            city = submittedInvoice.city,
            clientPhoneNumber = submittedInvoice.clientPhoneNumber,
            clientName = submittedInvoice.clientName,
            date = submittedInvoice.date,
            invoiceType = submittedInvoice.invoiceType,
            managementOrCobrokeCompany = submittedInvoice.managementOrCobrokeCompany,
            propertyAddress = submittedInvoice.propertyAddress,
            _state = submittedInvoice.state,
            price = submittedInvoice.price,
            paymentItems = submittedInvoice.paymentItems,
            apartmentNumber = submittedInvoice.apartmentNumber,
            total = submittedInvoice.total,
            attention = submittedInvoice.attention,
            attentionEmail = submittedInvoice.attentionEmail;
        finalDefaultValues = {
          agent: agentName,
          agentNotes: agentNotes,
          agentType: _agentType,
          city: city,
          apartmentNumber: apartmentNumber,
          clientPhoneNumber: clientPhoneNumber,
          clientName: clientName,
          date: __WEBPACK_IMPORTED_MODULE_9_moment___default()(date).format('MMMM Do YYYY'),
          invoiceType: invoiceType,
          managementOrCobrokeCompany: managementOrCobrokeCompany,
          propertyAddress: propertyAddress,
          // shouldSendApprovalTextMessageNotification,
          state: _state,
          price: price,
          paymentItems: paymentItems.map(function (_ref) {
            var paymentType = _ref.paymentType,
                checkOrTransactionNumber = _ref.checkOrTransactionNumber,
                amount = _ref.amount;
            return {
              paymentType: paymentType,
              checkOrTransactionNumber: checkOrTransactionNumber,
              amount: amount
            };
          }),
          financialsTotal: total ? total.toLocaleString() : '0',
          attention: attention,
          attentionEmail: attentionEmail
        };
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, !formSubmissionBegun ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["Form"], {
        defaultValues: !finalDefaultValues && this.props.agent ? {
          date: "".concat(__WEBPACK_IMPORTED_MODULE_9_moment___default()().format('MMMM Do YYYY')),
          agentType: "".concat(this.props.agent.agent.agentType),
          state: this.props.agent.agent.state,
          agent: "".concat(Object(__WEBPACK_IMPORTED_MODULE_19__utils_stringUtils__["a" /* capitalize */])(this.props.agent.firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_19__utils_stringUtils__["a" /* capitalize */])(this.props.agent.lastName)),
          financialsTotal: this.props.total
        } : finalDefaultValues,
        preValidate: this.preValidate,
        onSubmit: this.props.onSubmit,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["b" /* default */],
        validateOnMount: true,
        getApi: function getApi(formApi) {
          _this2.props.getFormApi(formApi);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, function (formApi) {
        /*
        if (this.isFirstTimeRender) {
          this.isFirstTimeRender = false;
          formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
          formApi.setValue(
            'agent',
            `${capitalize(firstName)} ${capitalize(lastName)}`
          );
          formApi.setValue('agentType', `${agentType}`);
          formApi.setValue('state', state);
          formApi.setValue('financialsTotal', this.props.total);
        }
        */
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "date",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Date",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "agent",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Agent",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          disabled: true,
          horizontal: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          }
        }, "Property Information")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 497
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "invoiceType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Invoice Type",
          name: "invoiceType",
          selectInputItems: invoiceTypeSelectItems,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 511
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 512
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "propertyAddress",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Property Address",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "state",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "State",
          required: true,
          fullWidth: true,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "city",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "City",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "apartmentNumber",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Apartment Number",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          }
        }))), !choosingMgmtCoBrokeCompany ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 561
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "managementOrCobrokeCompany",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
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
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 562
          }
        }))) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_TextField___default.a, {
          id: "newManagementOrCobrokeCompany",
          label: "Add Mgmt/Co-broke Company...",
          value: newMgmtOrCobrokeCompany,
          className: classes.ManagementOrCobrokeCompanyTextField,
          onChange: handleMgmtOrCobrokeCompanyChange,
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
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
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          }
        }, "Cancel"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
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
            formApi.setValue('managementOrCobrokeCompany', Object(__WEBPACK_IMPORTED_MODULE_19__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany));
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 608
          }
        }, "Add Item")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 650
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "price",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Rent or Sale Price",
          required: true,
          fullWidth: true,
          noLetters: true,
          isDollarAmount: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 666
          }
        }, "Client's", " Information")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 674
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 675
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "clientName",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Client's Name",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 688
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__CustomInputMask__["a" /* default */], {
          mask: "(999) 999-9999",
          maskChar: null,
          placeholder: "Client's Phone Number",
          disabled: submittedInvoice && !isEditingInvoice,
          defaultValue: isViewType && submittedInvoice ? submittedInvoice.clientPhoneNumber : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 689
          }
        }, function (props) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, _extends({
            field: "clientPhoneNumber",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            label: "Client's Phone Number",
            fullWidth: true,
            required: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999"
          }, props, {
            disabledStyle: submittedInvoice && !isEditingInvoice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 701
            }
          }));
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 726
          }
        }, "Transaction Financials")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 734
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.greenText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 735
          }
        }, "Paid:")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
          field: ['paymentItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 748
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "paymentType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Payment Type",
          name: "paymentType",
          selectInputItems: paymentTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["d" /* paymentTypeValidator */],
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 749
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 763
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "checkOrTransactionNumber",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Check/Transaction#",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["a" /* checkOrTransactionNumberValidator */],
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 765
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 777
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 778
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Amount",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["c" /* paymentAmountValidator */],
          noLetters: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.paymentAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779
          }
        })))), formApi.values.paymentItems && formApi.values.paymentItems.map(function (paymentItems, i) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.paymentItemsWrapper,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 801
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
            field: ['paymentItems', i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 802
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 803
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 804
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
            field: "paymentType",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            required: true,
            fullWidth: true,
            label: "Payment Type",
            name: "paymentType",
            selectInputItems: paymentTypeSelectItems,
            validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["d" /* paymentTypeValidator */],
            disabled: submittedInvoice && !isEditingInvoice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 805
            }
          }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 821
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 822
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
            field: "checkOrTransactionNumber",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            label: "Check/Transaction#",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["a" /* checkOrTransactionNumberValidator */],
            disabled: submittedInvoice && !isEditingInvoice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 823
            }
          }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 837
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 838
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
            field: "amount",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            label: "Amount",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_20__formValidation__["c" /* paymentAmountValidator */],
            noLetters: true,
            noNegativeSign: true,
            onChangeWithID: _this2.props.paymentAmountChangeHandler,
            isDollarAmount: true,
            disabled: submittedInvoice && !isEditingInvoice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 839
            }
          })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
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
            type: "button",
            disabled: submittedInvoice && !isEditingInvoice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 859
            }
          }, "Remove"));
        }).slice(1), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 882
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('paymentItems');
          },
          type: "button",
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 883
          }
        }, "Add invoice item")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 895
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 896
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "financialsTotal",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Total",
          disabled: true,
          fullWidth: true,
          labelClassName: classes.finalTotalLabelClass,
          submittedValue: "".concat(_this2.props.total),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          inputRootClassName: classes.finalTotalInputClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 897
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 913
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 918
          }
        }, "Send To")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 926
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 927
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 930
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 931
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "attention",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Attention",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 932
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 943
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 944
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "attentionEmail",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Email",
          type: "email",
          required: true,
          fullWidth: true,
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 945
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 957
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 958
          }
        }, "Other:")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 966
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 967
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 970
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 971
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "agentNotes",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Notes",
          fullWidth: true,
          multiline: true,
          placeholder: "Leave any notes here...",
          disabled: submittedInvoice && !isEditingInvoice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 972
          }
        })))));
      }) : null, submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 991
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 992
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 993
        }
      }, "Submitting form...")) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SubmitInvoiceForm;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(SubmitInvoiceForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomTextField, "CustomTextField", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(MaterialCustomRadioInput, "MaterialCustomRadioInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(MaterialCustomSelectInput, "MaterialCustomSelectInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(CustomFileUploadInputBtn, "CustomFileUploadInputBtn", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(acceptedFileExtensions, "acceptedFileExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(radioInputAgentItems, "radioInputAgentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(radioInputAgentPaymentItems, "radioInputAgentPaymentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(radioInputYesNoItems, "radioInputYesNoItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(invoiceTypeSelectItems, "invoiceTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(fundsPaidBySelectItems, "fundsPaidBySelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(paymentTypeSelectItems, "paymentTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(SubmitInvoiceForm, "SubmitInvoiceForm", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitInvoiceForm/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.89c2f28ca1e50592394c.hot-update.js.map