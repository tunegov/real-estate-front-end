webpackHotUpdate(5,{

/***/ "../node_modules/material-ui/Menu/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = __webpack_require__("../node_modules/material-ui/Menu/Menu.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Menu).default;
  }
});

var _MenuList = __webpack_require__("../node_modules/material-ui/Menu/MenuList.js");

Object.defineProperty(exports, 'MenuList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MenuList).default;
  }
});

var _MenuItem = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");

Object.defineProperty(exports, 'MenuItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MenuItem).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../node_modules/material-ui/Select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Select = __webpack_require__("../node_modules/material-ui/Select/Select.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../node_modules/material-ui/Toolbar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toolbar = __webpack_require__("../node_modules/material-ui/Toolbar/Toolbar.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Toolbar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/AppTopNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__ = __webpack_require__("../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__ = __webpack_require__("../node_modules/@material-ui/icons/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__("../node_modules/material-ui/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__ = __webpack_require__("../node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var drawerWidth = 240;

var styles = function styles(theme) {
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
      marginLeft: drawerWidth,
      width: '100%',
      boxShadow: theme.shadows[3]
    }
  }, _defineProperty(_ref, theme.breakpoints.down(theme.breakpoints.values.md), {
    appBar: {
      width: '100%'
    }
  }), _defineProperty(_ref, "toolbar", theme.mixins.toolbar), _defineProperty(_ref, "topToolbar", {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.87)',
    flexDirection: 'row'
  }), _defineProperty(_ref, "icon", {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.1)'
    }
  }), _defineProperty(_ref, "iconRoot", {
    width: '40px',
    height: '40px'
  }), _defineProperty(_ref, "leftTopNavIconWrapper", {
    marginRight: '10px'
  }), _defineProperty(_ref, "iconGroupWrapper", {
    marginLeft: 'auto'
  }), _defineProperty(_ref, "menuHiddenWrapper", {
    display: 'inline'
  }), _defineProperty(_ref, theme.breakpoints.up(theme.breakpoints.values.md), {
    menuHiddenWrapper: {
      display: 'none'
    }
  }), _defineProperty(_ref, "uppercase", {
    marginRight: '5px',
    fontSize: '1.1rem',
    textTransform: 'uppercase'
  }), _ref;
};

var AppTopNav = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AppTopNav, _Component);

  function AppTopNav() {
    _classCallCheck(this, AppTopNav);

    return _possibleConstructorReturn(this, (AppTopNav.__proto__ || Object.getPrototypeOf(AppTopNav)).apply(this, arguments));
  }

  _createClass(AppTopNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          isAdmin = _props.isAdmin;
      var pathArray = currentPath.split('/');
      var type = pathArray[pathArray.length - 1];
      var path = type === 'view' || type === 'new' ? type + ' ' + pathArray[pathArray.length - 2] : pathArray[pathArray.length - 1];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default.a, {
        position: "absolute",
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default.a, {
        className: classes.topToolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.uppercase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, Object(__WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__["a" /* capitalize */])(Object(__WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__["b" /* unhyphenate */])(path)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.leftTopNavIconWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        className: classes.menuIcon,
        onClick: this.props.toggleDrawer,
        classes: {
          root: classes.iconRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppTopNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(AppTopNav);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(drawerWidth, "drawerWidth", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js");
  reactHotLoader.register(AppTopNav, "AppTopNav", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/EditAgentDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("../node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_EditAgentForm__ = __webpack_require__("./containers/EditAgentForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__effects_users_updateAgent__ = __webpack_require__("./effects/users/updateAgent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_users_deleteAgent__ = __webpack_require__("./effects/users/deleteAgent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

















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

var EditAgentDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditAgentDialogBox, _Component);

  function EditAgentDialogBox(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, EditAgentDialogBox);

    _this = _possibleConstructorReturn(this, (EditAgentDialogBox.__proto__ || Object.getPrototypeOf(EditAgentDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
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
    Object.defineProperty(_assertThisInitialized(_this), "toggleSnackbarOpen", {
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
    Object.defineProperty(_assertThisInitialized(_this), "handleCloseSnackbar", {
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
    Object.defineProperty(_assertThisInitialized(_this), "toggleEditingAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingAgent: typeof bool === 'boolean' ? bool : !_this.state.isEditingAgent
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCancelMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          cancelAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCancelMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          cancelAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAcceptMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          acceptAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAcceptMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          acceptAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(uuid) {
        _this.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_14__effects_users_deleteAgent__["a" /* default */])(uuid).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);
          } else {
            _this.props.agentSuccessfullyDeleted();
          }
        }).catch(function (err) {
          _this.openRequestErrorSnackbar(networkErrorMessage);

          _this.toggleSubmittingRequestToServer(false);

          console.log(err);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openRequestErrorSnackbar", {
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
    Object.defineProperty(_assertThisInitialized(_this), "toggleSubmittingRequestToServer", {
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
    }, _defineProperty(_this$state, "isEditingAgent", false), _defineProperty(_this$state, "cancelAnchorEl", null), _defineProperty(_this$state, "acceptAnchorEl", null), _defineProperty(_this$state, "isErrorSnackbar", false), _defineProperty(_this$state, "snackbarText", ''), _this$state);
    return _this;
  }

  _createClass(EditAgentDialogBox, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        open: open,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Edit Agent"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_EditAgentForm__["a" /* default */], {
        viewingAgentUUID: this.props.viewingAgentUUID,
        setFormSubmitted: this.setFormSubmitted,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        editAgent: __WEBPACK_IMPORTED_MODULE_13__effects_users_updateAgent__["a" /* default */],
        confirmAgentCreated: this.props.confirmAgentCreated,
        isEditingAgent: isEditingAgent,
        currentUserRole: this.props.currentUserRole,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        submittingRequestToServer: this.state.submittingRequestToServer,
        toggleSubmittingRequestToServer: this.toggleSubmittingRequestToServer,
        editAgentFormSubmittedSuccessfully: this.props.editAgentFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleCloseSnackbar();

            if (_this2.state.snackbarUndoFunction && typeof snackbarUndoFunction === 'function') {
              _this2.snackbarUndoFunction();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          _this2.toggleEditingAgent(false);

          closeEditAgentDialogBox();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, "Cancel"), !isEditingAgent && (this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"]) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "Delete") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemDelete
        },
        onClick: function onClick() {
          _this2.handleCancelMenuClose();

          _this2.deleteAgent(viewingAgentUUID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, "No")), !isEditingAgent && (this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["agent"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"]) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        className: classes.editAgentBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, "Edit") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: acceptAnchorEl,
        open: Boolean(acceptAnchorEl),
        onClose: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleAcceptMenuClose();

          _this2.toggleEditingAgent(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, "No")), isEditingAgent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, "Submit") : null) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EditAgentDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(EditAgentDialogBox));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(networkErrorMessage, "networkErrorMessage", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js");
  reactHotLoader.register(EditAgentDialogBox, "EditAgentDialogBox", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MaterialCustomSelectInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__("../node_modules/material-ui/Select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__("../node_modules/material-ui/Chip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInputWrapper/index.js";

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
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), function (fieldApi) {
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
              value: item.value || item.label,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            }, item.label);
          });
        };

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
          error: error && touched,
          fullWidth: fullWidth,
          required: required,
          className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
          htmlFor: "".concat(id, "-error"),
          disabled: disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
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
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.input, disabled && classes.disabled),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
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
              className: classes.chips,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            }, selected.filter(function (val) {
              return val !== '';
            }).map(function (value) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
                key: value,
                label: value,
                className: classes.chip,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                }
              });
            }));
          }
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), renderSelectInputItems(selectInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
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
  }]);

  return MaterialCustomSelectInputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(MaterialCustomSelectInputWrapper));

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

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInputWrapper/index.js");
  reactHotLoader.register(MaterialCustomSelectInputWrapper, "MaterialCustomSelectInputWrapper", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInputWrapper/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInputWrapper/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Profile/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText__ = __webpack_require__("../node_modules/buildo-react-components/lib/FormattedText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__ = __webpack_require__("../node_modules/react-icons/lib/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var Loader = __WEBPACK_IMPORTED_MODULE_11_react_spinners__["BounceLoader"];

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

var Profile = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
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
        if (_this._img && _this._img.complete) {
          _this.props.toggleIsLoadingProfilePicture(false);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "componentDidUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(prevProps) {
        if (prevProps.agent.agent.profilePicURL !== _this.props.agent.agent.profilePicURL) {
          _this.setState({
            imageError: false
          });
        }
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
      value: function value(role, title) {
        console.log("role: ".concat(role));

        switch (role) {
          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["agent"]:
            return title && title.trim() ? Object(__WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__["a" /* capitalize */])(title) : 'Licensed Real Estate Salesperson';
            break;

          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"]:
            return 'Admin';
            break;

          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"]:
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
        var canEdit = currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"];
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          }
        }, isLoadingProfilePicture && agent.agent.profilePicURL && !_this.state.imageError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicLoader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          }
        })))), agent.agent.profilePicURL ? !_this.state.imageError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          id: "agentProfilePic",
          className: classes.profilePic,
          ref: function ref(img) {
            return _this._img = img;
          },
          src: agent.agent.profilePicURL,
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
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          }
        }, "Error loading profile picture...")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          }
        }, "No profile photo available")), canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: classes.editProfilePicBtnsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: classes.editProfilePicBtn,
          onClick: openProfilePicEditor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaPencil"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          }
        }))));
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
          title = _agent$agent.title,
          facebook = _agent$agent.facebook,
          twitter = _agent$agent.twitter,
          instagram = _agent$agent.instagram;
      var editAgentAnchorEl = this.state.editAgentAnchorEl;
      var name = Object(__WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__["a" /* capitalize */])("".concat(firstName, " ").concat(lastName));
      var canEdit = currentUserUUID === uuid || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"];
      var editingOwnProfile = currentUserUUID === uuid;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        }
      }, canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.editBtn,
        onClick: this.handleEditAgentMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaPencil"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: editAgentAnchorEl,
        open: Boolean(editAgentAnchorEl),
        onClose: this.handleEditAgentMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        }
      }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        }
      }, "Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentPasswordDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.leftColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, this.renderProfilePic(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.email, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        }
      }, email)), officeNumber && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, "Office"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        }
      }, officeNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, "Mobile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }, mobileNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.region, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        }
      }, "Branch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        }
      }, branch)), facebook || instagram || twitter ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        }
      }, "Social Media:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaItemsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }, facebook && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: facebook,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaFacebook"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        }
      })), twitter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: twitter,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaTwitter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        }
      })), instagram && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: instagram,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaInstagram"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        }
      })))) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.rightColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: classes.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        }
      }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        }
      }, this.returnTitle(role, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        }
      }, "About ", name.split(' ')[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText___default.a, {
        className: classes.descriptionDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        }
      }, profileDescription || 'No description available yet...')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default.a, {
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
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 674
          }
        }, "Profile saved"),
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleClose();

            undoSave();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676
          }
        }, "UNDO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 694
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
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

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = Profile;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(Profile, "Profile", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.18dc0789de36ddab7873.hot-update.js.map