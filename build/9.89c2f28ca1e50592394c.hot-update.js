webpackHotUpdate(9,{

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

/***/ "./components/forms/SubmitDealForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__ = __webpack_require__("../node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete__ = __webpack_require__("../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_icons_lib_md__ = __webpack_require__("../node_modules/react-icons/lib/md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_images__ = __webpack_require__("../node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_icons_RemoveRedEye__ = __webpack_require__("../node_modules/@material-ui/icons/RemoveRedEye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__formValidation__ = __webpack_require__("./components/forms/SubmitDealForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__utils_Math__ = __webpack_require__("./utils/Math.js");




var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































var CustomTextField = __WEBPACK_IMPORTED_MODULE_26__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_27__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_28__MaterialCustomSelectInputWrapper__["a" /* default */];
var CustomFileUploadInputBtn = __WEBPACK_IMPORTED_MODULE_29__CustomFileUploadInputWrapper__["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

var styles = function styles(theme) {
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
    },
    downloadFileBtn: {
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: '26px',
      width: '26px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff !important',
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
  label: 'Bringing a certified check to the office'
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
  label: 'Certified Check'
}, {
  label: 'Money Order'
}, {
  label: 'Wire'
}, {
  label: 'Owner Pays (OP)'
}];
var deductionTypeSelectItems = [{
  label: 'Co-Brokering Split'
}, {
  label: 'Company Deal Fee'
}, {
  label: 'Outside Company Check'
}];

var imagePreloader = function imagePreloader(images) {
  images.forEach(function (imageItem) {
    if (imageItem && imageItem.src) {
      var fileType = imageItem.src.split('.').pop();
      if (fileType.toLowerCase === 'pdf') return;
      var newImage = new Image();
      newImage.src = imageItem.src;
    }
  });
};

var SubmitDealForm = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealForm, _Component);

  function SubmitDealForm(props) {
    var _this;

    _classCallCheck(this, SubmitDealForm);

    _this = _possibleConstructorReturn(this, (SubmitDealForm.__proto__ || Object.getPrototypeOf(SubmitDealForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "returnAgencyDisclosureURL", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var submittedDeal = _this.props.submittedDeal;
        if (!submittedDeal) return [];
        var src = submittedDeal.agencyDisclosureForm;
        var fileName = src.split('/').pop();
        var encodedFileName = encodeURIComponent(fileName);
        var srcArray = src.split('/');
        var encodedSrc = "".concat(srcArray.slice(0, srcArray.length - 1).join('/'), "/").concat(encodedFileName);

        if (submittedDeal.agencyDisclosureForm) {
          return [{
            src: encodedSrc
          }];
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnContractLeaseURLS", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var submittedDeal = _this.props.submittedDeal;
        if (!submittedDeal) return [];

        if (submittedDeal.contractOrLeaseForms) {
          return submittedDeal.contractOrLeaseForms.map(function (url) {
            var fileName = url.split('/').pop();
            var urlArray = url.split('/');
            var encodedFileName = encodeURIComponent(fileName);
            var encodedUrl = "".concat(urlArray.slice(0, urlArray.length - 1).join('/'), "/").concat(encodedFileName);
            return {
              src: encodedUrl
            };
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openFileLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'contractLease',
          currentLightboxItem: [item]
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openFileViewer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(src, fileName, fileType) {
        if (fileType === 'pdf' && fileType === 'PDF') {
          return;
        }

        _this.openFileLightBox({
          src: src
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
    Object.defineProperty(_assertThisInitialized(_this), "onClickThumbnail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        _this.setState({
          currentLightBoxIndex: index
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "downloadFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee() {
          var urls, fileType, objectURL, res;
          return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  urls = _this.state.lightboxType === 'agencyDisclosure' ? _this.returnAgencyDisclosureURL() : _this.returnContractLeaseURLS();
                  fileType = urls[_this.state.currentLightBoxIndex].src.split('.').pop();
                  _context.prev = 2;
                  _context.next = 5;
                  return fetch("".concat(urls[_this.state.currentLightBoxIndex].src, "?v=10"));

                case 5:
                  res = _context.sent;
                  console.log(res);
                  _context.t0 = URL;
                  _context.next = 10;
                  return res.blob();

                case 10:
                  _context.t1 = _context.sent;
                  objectURL = _context.t0.createObjectURL.call(_context.t0, _context.t1);
                  _context.next = 18;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t2 = _context["catch"](2);
                  console.log(_context.t2);
                  return _context.abrupt("return");

                case 18:
                  if (_this._fileLink) {
                    _this._fileLink.setAttribute('href', objectURL);

                    _this._fileLink.setAttribute('download', "".concat(_this.state.lightboxType).concat(_this.state.currentLightBoxIndex + 1));

                    _this._fileLink.click();
                  }

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 14]]);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnDownloadFileBtn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var classes = _this.props.classes;
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_Tooltip___default.a, {
          title: "Download current file.",
          enterDelay: 300,
          leaveDelay: 100,
          PopperProps: {
            style: {
              zIndex: 2100
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", {
          className: classes.downloadFileBtn,
          onClick: _this.downloadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_react_icons_lib_md__["MdFileDownload"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          }
        })));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleContractLeaseMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          contractLeaseAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleContractLeaseMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          contractLeaseAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAgencyDisclosureMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          agencyDisclosureAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAgencyDisclosureMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          agencyDisclosureAnchorEl: null
        });
      }
    });
    _this.state = {
      shouldRenderInitialDeductionItem: true,
      lightboxIsOpen: false,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure',
      contractLeaseAnchorEl: null,
      agencyDisclosureAnchorEl: null,
      currentLightboxItem: [{
        src: ''
      }]
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
        imagePreloader(_toConsumableArray(this.returnContractLeaseURLS()).concat(_toConsumableArray(this.returnAgencyDisclosureURL())));
      }

      if (this.props.resetDealBonus) {
        this.props.resetDealBonus();
      }
    }
  }, {
    key: "renderRestDeductionItems",
    value: function renderRestDeductionItems(formApi, splitAgents) {
      var _props = this.props,
          classes = _props.classes,
          submittedDeal = _props.submittedDeal,
          isEditingDeal = _props.isEditingDeal,
          deductionAmountChangeHandler = _props.deductionAmountChangeHandler,
          subtractDeductionValueFromState = _props.subtractDeductionValueFromState,
          isViewType = _props.isViewType;
      var shouldRenderInitialDeductionItem = this.state.shouldRenderInitialDeductionItem;
      if (!formApi.values.deductionItems || !formApi.values.deductionItems.length) return;
      var deductionItems = formApi.values.deductionItems.map(function (deductionItem, i) {
        var isAgentSplit = deductionItem && deductionItem.deductionType === 'Co-Brokering Split';
        var canRenderSplitAgentId = !!splitAgents.length && isAgentSplit;
        var rowSize = canRenderSplitAgentId ? 3 : 4;
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.paymentItemsWrapper,
          key: "Deduction-item-".concat(i.toString()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
          field: ['deductionItems', i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "deductionType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Deduction Type",
          name: "deductionType",
          required: true,
          selectInputItems: deductionTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["d" /* deductionTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          }
        }))), canRenderSplitAgentId && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "agentID",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Select Agent",
          name: "agentID",
          required: true,
          selectInputItems: splitAgents,
          disabled: submittedDeal && !isEditingDeal || isViewType,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "description",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Description",
          fullWidth: true,
          required: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["g" /* descriptionValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 613
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 625
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 626
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Amount",
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["e" /* deductionsAmountValidator */],
          noLetters: true,
          required: true,
          noNegativeSign: true,
          onChangeWithID: deductionAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627
          }
        })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 645
          }
        }, "Remove"));
      });

      if (shouldRenderInitialDeductionItem) {
        return deductionItems.slice(1);
      }

      return deductionItems;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          classes = _props2.classes,
          setAgencyDisclosureForm = _props2.setAgencyDisclosureForm,
          setContractOrLeaseForms = _props2.setContractOrLeaseForms,
          agencyDisclosureForm = _props2.agencyDisclosureForm,
          contractOrLeaseForms = _props2.contractOrLeaseForms,
          subtractPaymentValueFromState = _props2.subtractPaymentValueFromState,
          subtractDeductionValueFromState = _props2.subtractDeductionValueFromState,
          choosingMgmtCoBrokeCompany = _props2.choosingMgmtCoBrokeCompany,
          toggleChoosingMgmtCoBrokeCompany = _props2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange = _props2.handleMgmtOrCobrokeCompanyChange,
          setHasSetNewMgmtOrCobrokeCompany = _props2.setHasSetNewMgmtOrCobrokeCompany,
          newMgmtOrCobrokeCompany = _props2.newMgmtOrCobrokeCompany,
          addedManagementCompanies = _props2.addedManagementCompanies,
          agents = _props2.agents,
          uplodingFileProgress = _props2.uplodingFileProgress,
          isUploadingFile = _props2.isUploadingFile,
          uplodingFileText = _props2.uplodingFileText,
          formSubmissionBegun = _props2.formSubmissionBegun,
          submittingFormToServer = _props2.submittingFormToServer,
          submittedDeal = _props2.submittedDeal,
          isEditingDeal = _props2.isEditingDeal,
          isViewType = _props2.isViewType,
          agentUUID = _props2.agentUUID,
          managementCobrokeCompanyItems = _props2.managementCobrokeCompanyItems,
          agentPaymentTypeIsACH = _props2.agentPaymentTypeIsACH,
          _onSubmit = _props2.onSubmit;
      var _state = this.state,
          contractLeaseAnchorEl = _state.contractLeaseAnchorEl,
          agencyDisclosureAnchorEl = _state.agencyDisclosureAnchorEl;
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
          label: "".concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(lastName), " (Agent ID - ").concat(uuid, ")"),
          key: uuid,
          value: uuid
        };
      });

      if (isViewType && submittedDeal && submittedDeal.deductionItems.length) {
        submittedDeal.deductionItems.forEach(function (item) {
          if (item.deductionType === 'Co-Brokering Split') {
            var _agents$find = agents.find(function (agent) {
              return agent.uuid === item.agentID;
            }),
                firstName = _agents$find.firstName,
                lastName = _agents$find.lastName;

            var agentName = "".concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(lastName), " (Agent ID - ").concat(item.agentID, ")");
            agentsSelectItems.push({
              label: agentName,
              key: item.agentID,
              value: item.agentID
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
            ACHAccountNumber = submittedDeal.ACHAccountNumber,
            ACHAccountBankRoutingNumber = submittedDeal.ACHAccountBankRoutingNumber;
        finalDefaultValues = {
          agent: agentName,
          agentNotes: agentNotes,
          agentType: agentType,
          alreadyTurnedFundsIn: alreadyTurnedFundsIn,
          city: city,
          apartmentNumber: apartmentNumber,
          clientEmail: clientEmail,
          clientName: clientName,
          date: __WEBPACK_IMPORTED_MODULE_10_moment___default()(date).format('MMMM Do YYYY'),
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
                agentID = _ref3.agentID,
                description = _ref3.description,
                amount = _ref3.amount;
            return {
              deductionType: deductionType,
              description: description,
              amount: amount,
              agentID: agentID
            };
          }),
          paymentsSubtotal: paymentsTotal ? paymentsTotal.toLocaleString() : '0',
          deductionsSubtotal: deductionsTotal ? deductionsTotal.toLocaleString() : '0',
          financialsTotal: total ? total.toLocaleString() : '0',
          ACHAccountNumber: ACHAccountNumber,
          ACHAccountBankRoutingNumber: ACHAccountBankRoutingNumber,
          bonusPercentageAddedByAdmin: "".concat(bonusPercentageAddedByAdmin)
        };
      }

      var renderContractLeaseMenuItems = function renderContractLeaseMenuItems() {
        return _this2.returnContractLeaseURLS().map(function (_ref4) {
          var src = _ref4.src;
          var fileName = decodeURIComponent(src.split('/').pop());
          var fileType = src.split('.').pop();

          if (fileType.toLowerCase() === 'pdf') {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
              href: src,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 853
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem___default.a, {
              classes: {
                root: classes.menuItem
              },
              onClick: function onClick() {
                _this2.handleContractLeaseMenuClose();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 854
              }
            }, fileName));
          }

          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem___default.a, {
            classes: {
              root: classes.menuItem
            },
            onClick: function onClick() {
              _this2.handleContractLeaseMenuClose();

              _this2.openFileViewer(src, fileName, fileType);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 867
            }
          }, fileName);
        });
      };

      var renderAgencyDisclosureMenuItems = function renderAgencyDisclosureMenuItems() {
        return _this2.returnAgencyDisclosureURL().map(function (_ref5) {
          var src = _ref5.src;
          var fileName = decodeURIComponent(src.split('/').pop());
          var fileType = src.split('.').pop();

          if (fileType.toLowerCase() === 'pdf') {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem___default.a, {
              classes: {
                root: classes.menuItem
              },
              onClick: _this2.handleAgencyDisclosureMenuClose,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 885
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
              href: src,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 889
              }
            }, fileName));
          }

          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_material_ui_Menu_MenuItem___default.a, {
            classes: {
              root: classes.menuItem
            },
            onClick: function onClick() {
              _this2.handleAgencyDisclosureMenuClose();

              _this2.openFileViewer(src, fileName, fileType);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 897
            }
          }, fileName);
        });
      };

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.formWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 910
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "#",
        id: "fileLink",
        ref: function ref(_ref6) {
          return _this2._fileLink = _ref6;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 911
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: contractLeaseAnchorEl,
        open: Boolean(contractLeaseAnchorEl),
        onClose: this.handleContractLeaseMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 922
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 928
        }
      }, "Contract/Lease Items"), renderContractLeaseMenuItems()), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22_material_ui_Menu___default.a, {
        id: "simple-menu2",
        anchorEl: agencyDisclosureAnchorEl,
        open: Boolean(agencyDisclosureAnchorEl),
        onClose: this.handleAgencyDisclosureMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 938
        }
      }, "Agency Disclosure Form"), renderAgencyDisclosureMenuItems()), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["Form"], {
        defaultValues: !finalDefaultValues && this.props.agent ? {
          date: "".concat(__WEBPACK_IMPORTED_MODULE_10_moment___default()().format('MMMM Do YYYY')),
          agentType: "".concat(this.props.agent.agent.agentType),
          state: this.props.agent.agent.state,
          agent: "".concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(this.props.agent.firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(this.props.agent.lastName)),
          paymentsSubtotal: this.props.paymentsTotal,
          deductionsSubtotal: this.props.deductionsTotal,
          ACHAccountNumber: this.props.agent.agent.ACHAccountNumber ? "".concat(this.props.agent.agent.ACHAccountNumber) : undefined,
          ACHAccountBankRoutingNumber: this.props.agent.agent.ACHAccountBankRoutingNumber ? "".concat(this.props.agent.agent.ACHAccountBankRoutingNumber) : undefined
        } : finalDefaultValues,
        preValidate: this.preValidate,
        validateOnMount: true,
        onSubmit: function onSubmit(values) {
          if (_onSubmit) {
            _onSubmit(values);
          }
        },
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["f" /* default */],
        getApi: function getApi(formApi) {
          _this2.props.getFormApi(formApi);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        }
      }, function (formApi) {
        var isAgentSplit = formApi.values.deductionItems && formApi.values.deductionItems[0] && formApi.values.deductionItems[0].deductionType === 'Co-Brokering Split';
        var canRenderSplitAgentId = !!agentsSelectItems.length && isAgentSplit;
        var rowSize = canRenderSplitAgentId ? 3 : 4;
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmissionBegun || submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 986
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 997
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 998
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 999
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "date",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Date",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1000
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1010
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1011
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "agent",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Agent",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1012
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1023
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          disabled: true,
          horizontal: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1028
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1039
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1040
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "leadSource",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Lead Source",
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1041
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1051
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1052
          }
        }, "Property Information")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1060
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1061
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "dealType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          label: "Deal Type",
          name: "dealType",
          selectInputItems: dealTypeSelectItems,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1062
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1075
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1076
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "propertyAddress",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Property Address",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1077
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1087
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1088
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "state",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "State",
          required: true,
          fullWidth: true,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1089
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1099
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1100
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "city",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "City",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1101
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1111
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1112
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "apartmentNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Apartment Number",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1113
          }
        }))), !choosingMgmtCoBrokeCompany ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1125
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1126
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "managementOrCobrokeCompany",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
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
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1127
          }
        }))) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1145
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1146
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_TextField___default.a, {
          id: "newManagementOrCobrokeCompany",
          label: "Add Mgmt/Co-broke Company...",
          value: newMgmtOrCobrokeCompany,
          className: classes.ManagementOrCobrokeCompanyTextField,
          onChange: handleMgmtOrCobrokeCompanyChange,
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1147
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
            lineNumber: 1158
          }
        }, "Cancel"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
            formApi.setValue('managementOrCobrokeCompany', Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany));
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1171
          }
        }, "Add Item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1211
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1212
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "price",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Rent or Sale Price",
          required: true,
          fullWidth: true,
          noLetters: true,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1213
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1226
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1227
          }
        }, "Client's", ' ', "Information")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1237
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1238
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "clientName",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Client's Name",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1239
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1249
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1250
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "clientEmail",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Client Email",
          required: true,
          fullWidth: true,
          type: "email",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1251
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1263
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1268
          }
        }, "Transaction Financials")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1276
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.greenText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1277
          }
        }, "Paid:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
          field: ['paymentItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1288
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1289
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1290
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "paymentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Payment Type",
          name: "paymentType",
          selectInputItems: paymentTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["i" /* paymentTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1291
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1305
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1306
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "checkOrTransactionNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Check/Transaction#",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["c" /* checkOrTransactionNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1307
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1319
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1320
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Amount",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["h" /* paymentAmountValidator */],
          noLetters: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.paymentAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1321
          }
        })))), formApi.values.paymentItems && formApi.values.paymentItems.map(function (paymentItems, i) {
          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.paymentItemsWrapper,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1341
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
            field: ['paymentItems', i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1342
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1343
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1344
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
            field: "paymentType",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            required: true,
            fullWidth: true,
            label: "Payment Type",
            name: "paymentType",
            selectInputItems: paymentTypeSelectItems,
            validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["i" /* paymentTypeValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1345
            }
          }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1359
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1360
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
            field: "checkOrTransactionNumber",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            label: "Check/Transaction#",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["c" /* checkOrTransactionNumberValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1361
            }
          }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1373
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1374
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
            field: "amount",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            label: "Amount",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["h" /* paymentAmountValidator */],
            noLetters: true,
            noNegativeSign: true,
            onChangeWithID: _this2.props.paymentAmountChangeHandler,
            isDollarAmount: true,
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1375
            }
          })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1394
            }
          }, "Remove"));
        }).slice(1), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1417
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('paymentItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1418
          }
        }, "Add payment item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1430
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1431
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "paymentsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Payments Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: _this2.props.paymentsTotal,
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1432
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1446
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.redText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1447
          }
        }, "Deductions:")), _this2.state.shouldRenderInitialDeductionItem ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.paymentItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1459
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
          field: ['deductionItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1460
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1461
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1462
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "deductionType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Deduction Type",
          name: "deductionType",
          required: true,
          selectInputItems: deductionTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["d" /* deductionTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1463
          }
        }))), canRenderSplitAgentId && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1478
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1479
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "agentID",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Select Agent",
          name: "agentID",
          required: true,
          disabled: submittedDeal && !isEditingDeal || isViewType,
          selectInputItems: agentsSelectItems,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1480
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1494
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1495
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "description",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Description",
          fullWidth: true,
          required: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["g" /* descriptionValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1496
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: rowSize,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1508
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1509
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Amount",
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["e" /* deductionsAmountValidator */],
          noLetters: true,
          required: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.deductionAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1510
          }
        })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1529
          }
        }, "Remove")) : null, _this2.renderRestDeductionItems(formApi, agentsSelectItems), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1555
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('deductionItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1556
          }
        }, "Add deduction item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1568
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1569
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "deductionsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Deductions Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: "".concat(_this2.props.deductionsTotal),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1570
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1584
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1585
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "financialsTotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Final Total",
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
            lineNumber: 1586
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1602
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1603
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "agentNotes",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Listing agent/performance bonus info",
          fullWidth: true,
          multiline: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1604
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1615
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1616
          }
        }, "File Uploads:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1624
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1625
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1628
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1629
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomFileUploadInputBtn, {
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
          validate: isViewType ? undefined : __WEBPACK_IMPORTED_MODULE_31__formValidation__["b" /* agencyDisclosureFormValidator */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1630
          }
        }), submittedDeal && submittedDeal.agencyDisclosureForm && !agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.handleAgencyDisclosureMenuClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1655
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1663
          }
        })) : null, isEditingDeal && agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setAgencyDisclosureForm('');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1667
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1677
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1683
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1684
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomFileUploadInputBtn, {
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
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1685
          }
        }), submittedDeal && submittedDeal.contractOrLeaseForms && submittedDeal.contractOrLeaseForms.length && !(contractOrLeaseForms && contractOrLeaseForms.length) ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.handleContractLeaseMenuClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1702
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1710
          }
        })) : null, contractOrLeaseForms.length ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setContractOrLeaseForms([]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1714
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1724
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1772
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1773
          }
        }, "Other:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1781
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1782
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1785
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentPaymentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "How would you like to get paid?",
          radioInputItems: radioInputAgentPaymentItems,
          onInput: _this2.props.onAgentPaymentTypeChange,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1790
          }
        })), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountNumber) && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1804
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1805
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "ACH Account Number",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["a" /* ACHAccountNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1806
          }
        }))), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountBankRoutingNumber) && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1822
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1823
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountBankRoutingNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "ACH Account's Bank Routing Number",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_31__formValidation__["a" /* ACHAccountNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1824
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1837
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1838
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "fundsPaidBy",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Funds will/have been paid by...",
          name: "fundsPaidBy",
          selectInputItems: fundsPaidBySelectItems,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1839
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1852
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "alreadyTurnedFundsIn",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Have you already deposited or given the funds to us?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1857
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1868
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "shouldSendApprovalTextMessageNotification",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Want to recieve a text notification upon deal approval?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1873
          }
        })), !_this2.props.userRole || !submittedDeal || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_32__constants_userTypes__["agent"] && submittedDeal.status === 'pending' || !submittedDeal.bonusPercentageAddedByAdmin && submittedDeal.status === 'approved' ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1890
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1891
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1892
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputLabel"], {
          htmlFor: "bonusPercentageAddedByAdmin",
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1903
          }
        }, "Listing agent/performance bonus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input___default.a, {
          id: "bonusPercentageAddedByAdmin",
          value: submittedDeal && submittedDeal.bonusPercentageAddedByAdmin ? submittedDeal.bonusPercentageAddedByAdmin : _this2.props.dealBonus,
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled, classes.fullwidthInput),
          inputProps: {
            onInput: _this2.props.onBonusChange,
            className: submittedDeal.status === 'approved' ? classes.disabled : undefined
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1935
            }
          }, "%"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1913
          }
        })))), submittedDeal && submittedDeal.netAgentCommission && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1948
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1949
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1950
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputLabel"], {
          htmlFor: "netAgentCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1961
          }
        }, "Net Agent Commission"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input___default.a, {
          id: "netAgentCommission",
          value: submittedDeal && submittedDeal.netAgentCommission ? Object(__WEBPACK_IMPORTED_MODULE_33__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netAgentCommission).toLocaleString()) : null,
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1986
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1967
          }
        })))) : null, (_this2.props.userRole === __WEBPACK_IMPORTED_MODULE_32__constants_userTypes__["admin"] || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_32__constants_userTypes__["superAdmin"]) && submittedDeal && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2000
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2001
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(classes.disabled),
          disabled: true,
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2002
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputLabel"], {
          htmlFor: "netCompanyCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2007
          }
        }, "Net Company Commission"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input___default.a, {
          id: "netCompanyCommission",
          value: submittedDeal ? submittedDeal.netCompanyCommission ? Object(__WEBPACK_IMPORTED_MODULE_33__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netCompanyCommission).toLocaleString()) : 0 : null,
          className: __WEBPACK_IMPORTED_MODULE_20_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 2034
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2013
          }
        })))) : null));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2051
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2052
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2053
        }
      }, "Finishing submission...")) : null, isUploadingFile ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2060
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar___default.a, {
        className: classes.progressBar,
        percentage: uplodingFileProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingFileProgress / 100, ")")
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2061
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2070
        }
      }, uplodingFileText || 'Uploading file picture...')) : null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19_react_images___default.a, {
        images: this.state.currentLightboxItem,
        isOpen: this.state.lightboxIsOpen,
        onClose: this.closeLightbox,
        onClickPrev: this.onClickPrev,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentLightBoxIndex,
        backdropClosesModal: true,
        customControls: [this.returnDownloadFileBtn()],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2076
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SubmitDealForm;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["withStyles"])(styles)(SubmitDealForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomTextField, "CustomTextField", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomRadioInput, "MaterialCustomRadioInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomSelectInput, "MaterialCustomSelectInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(CustomFileUploadInputBtn, "CustomFileUploadInputBtn", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(acceptedFileExtensions, "acceptedFileExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentItems, "radioInputAgentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentPaymentItems, "radioInputAgentPaymentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputYesNoItems, "radioInputYesNoItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(dealTypeSelectItems, "dealTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(fundsPaidBySelectItems, "fundsPaidBySelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(paymentTypeSelectItems, "paymentTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(deductionTypeSelectItems, "deductionTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(imagePreloader, "imagePreloader", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(SubmitDealForm, "SubmitDealForm", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.89c2f28ca1e50592394c.hot-update.js.map