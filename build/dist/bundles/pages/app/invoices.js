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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/antd/dist/antd.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./AppGlobalStateProvider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* unused harmony export AppContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\AppGlobalStateProvider\\index.js";

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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;



/***/ }),

/***/ "./components/AdminSideNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications__ = __webpack_require__("@material-ui/icons/Notifications");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SideNavLinkItem__ = __webpack_require__("./components/SideNavLinkItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navItems__ = __webpack_require__("./components/AdminSideNav/navItems.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\AdminSideNav\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var drawerWidth = 240;

var styles = function styles(theme) {
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
      width: drawerWidth,
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
      width: drawerWidth
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
      overflow: 'hidden' // borderBottom: '1px solid rgba(255,255,255,.5)',

    }
  };
};

var AdminSideNav = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminSideNav, _Component);

  function AdminSideNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AdminSideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AdminSideNav.__proto__ || Object.getPrototypeOf(AdminSideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return __WEBPACK_IMPORTED_MODULE_10__navItems__["a" /* default */].map(function (item) {
          var type = item.type || 'link';
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SideNavLinkItem__["a" /* default */], {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(AdminSideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List___default.a, {
        classes: {
          root: classes.listRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return AdminSideNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(AdminSideNav));

/***/ }),

/***/ "./components/AdminSideNav/navItems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export adminSideLinks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__ = __webpack_require__("@material-ui/icons/ExitToApp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts__ = __webpack_require__("@material-ui/icons/Contacts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount__ = __webpack_require__("@material-ui/icons/SupervisorAccount");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors__ = __webpack_require__("@material-ui/icons/RecentActors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors__);






var adminSideLinks = [{
  name: 'Admin Dashboard',
  route: 'admin-dashboard',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdDashboard"]
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
  name: 'The Vault',
  route: 'view-deals',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaCreditCard"]
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
  icon: __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount___default.a,
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
  icon: __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors___default.a,
  iconFontSize: 24
}, {
  name: 'Log Out',
  icon: __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default.a,
  id: 'logout'
}];
/* harmony default export */ __webpack_exports__["a"] = (adminSideLinks);

/***/ }),

/***/ "./components/AppTopNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__ = __webpack_require__("@material-ui/icons/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__ = __webpack_require__("material-ui/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\AppTopNav\\index.js";

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

var AppTopNav = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["observer"])(_class =
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
  }]);

  return AppTopNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(AppTopNav));

/***/ }),

/***/ "./components/CustomFileUploadInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\CustomFileUploadInputWrapper\\index.js";

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
          leaveDelay: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, _this.renderLabelText()));
        var withoutTooltipComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
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
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), function (fieldApi) {
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
          required: required,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
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
                }, 8000);
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
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        })), error && touched || error && submits ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          id: "".concat(id, "-error-text"),
          classes: {
            root: classes.helperText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, error) : null, helperInfo ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          classes: {
            root: "".concat(classes.helperText, " ").concat(classes.info)
          },
          id: "".concat(id, "-info-text"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
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

/***/ "./components/CustomInputMask/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__("react-input-mask");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_mask__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\CustomInputMask\\index.js";

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
        var cursorPosition = selection ? selection.start : null;

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
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Input);

/***/ }),

/***/ "./components/FullScreenLoader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__ = __webpack_require__("material-ui/Portal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\FullScreenLoader\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["PropagateLoader"];

var styles = function styles(theme) {
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

var FullScreenLoader = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(FullScreenLoader, _Component);

  function FullScreenLoader() {
    _classCallCheck(this, FullScreenLoader);

    return _possibleConstructorReturn(this, (FullScreenLoader.__proto__ || Object.getPrototypeOf(FullScreenLoader)).apply(this, arguments));
  }

  _createClass(FullScreenLoader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          open = _props.open,
          classes = _props.classes,
          text = _props.text;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Portal___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        style: {
          display: open ? 'flex' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, text ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, text) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#fff",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))));
    }
  }]);

  return FullScreenLoader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(FullScreenLoader));

/***/ }),

/***/ "./components/InnerAppLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__ = __webpack_require__("@material-ui/icons/Settings");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__ = __webpack_require__("material-ui-pickers/utils/moment-utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__ = __webpack_require__("material-ui-pickers/utils/MuiPickersUtilsProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser__ = __webpack_require__("is-browser");
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
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\InnerAppLayout\\index.js";

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
  var _require = __webpack_require__("react-detect-offline"),
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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(InnerAppLayout)));

/***/ }),

/***/ "./components/InvoicesTable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__ = __webpack_require__("@devexpress/dx-react-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_backEndTableUtils_SelectFilterCell__ = __webpack_require__("./utils/backEndTableUtils/SelectFilterCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_tableSortingUtils__ = __webpack_require__("./utils/backEndTableUtils/tableSortingUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_DefaultVirtualTableCell__ = __webpack_require__("./utils/backEndTableUtils/DefaultVirtualTableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_TableComponent__ = __webpack_require__("./utils/backEndTableUtils/TableComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableContainerComponent__ = __webpack_require__("./utils/backEndTableUtils/TableContainerComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_NoDataCellComponent__ = __webpack_require__("./utils/backEndTableUtils/NoDataCellComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dataTableFormatters_ViewFormatter__ = __webpack_require__("./components/dataTableFormatters/ViewFormatter.js");
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\InvoicesTable\\index.js",
    _dec,
    _dec2,
    _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      left: '-13px'
    },
    downloadCSVBtn: {
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
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'invoiceID',
  sortingEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.invoiceID;
};

var statusSelectInputItems = [{
  label: ''
}, {
  label: 'Pending'
}, {
  label: 'Approved'
}];

var FilterCell = function FilterCell(props) {
  if (props.column.name === 'status') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__utils_backEndTableUtils_SelectFilterCell__["a" /* default */], _extends({
      selectInputItems: statusSelectInputItems
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableFilterRow"].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }));
};

var integratedSortingColumnExtensions = [{
  columnName: 'date',
  compare: __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_tableSortingUtils__["a" /* compareDate */]
}, {
  columnName: 'rentOrSalePrice',
  compare: __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}];
var defaultColumnWidths = [{
  columnName: 'invoiceID',
  width: 120
}, {
  columnName: 'date',
  width: 120
}, {
  columnName: 'type',
  width: 120
}, {
  columnName: 'clientName',
  width: 140
}, // { columnName: 'clientPhoneNumber', width: 140 },
{
  columnName: 'propertyAddress',
  width: 140
}, {
  columnName: 'propertyCity',
  width: 120
}, {
  columnName: 'managementOrCobrokeCompany',
  width: 160
}, {
  columnName: 'rentOrSalePrice',
  width: 100
}, {
  columnName: 'totalAmount',
  width: 100
}, // { columnName: 'status', width: 120 },
{
  columnName: 'view',
  width: 80
}];

var ViewCellFormatter = function ViewCellFormatter(_ref) {
  var value = _ref.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__dataTableFormatters_ViewFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  });
};

var ViewTypeProvider = function ViewTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["DataTypeProvider"], _extends({
    formatterComponent: ViewCellFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }));
};

var pageSizes = [5, 10, 15, 20, 50, 100, 0];

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var InvoicesTable = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles), _dec2 = __WEBPACK_IMPORTED_MODULE_2_react_sizes___default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(InvoicesTable, _Component);

  function InvoicesTable(props) {
    var _this;

    _classCallCheck(this, InvoicesTable);

    _this = _possibleConstructorReturn(this, (InvoicesTable.__proto__ || Object.getPrototypeOf(InvoicesTable)).call(this, props));
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

  _createClass(InvoicesTable, [{
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
          rows = _props.rows,
          convertInvoicesToCSV = _props.convertInvoicesToCSV,
          changeSelection = _props.changeSelection;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ViewTypeProvider, {
        "for": ['view'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["DragDropProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SearchState"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["FilteringState"], {
        columnExtensions: filteringStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SortingState"], {
        defaultSorting: [{
          columnName: 'date',
          direction: 'desc'
        }],
        columnExtensions: sortingStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SelectionState"], {
        selection: this.props.selection,
        onSelectionChange: changeSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["PagingState"], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedFiltering"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedSorting"], {
        columnExtensions: integratedSortingColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedSelection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedPaging"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["VirtualTable"], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableContainerComponent__["a" /* default */],
        cellComponent: __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableFilterRow"], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["SearchPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableHeaderRow"], {
        showSortingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableSelection"], {
        showSelectAll: true,
        selectByRowClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["PagingPanel"], {
        pageSizes: pageSizes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      })), rows && rows.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Download table as CSV file.",
        enterDelay: 300,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.downloadCSVBtn,
        onClick: convertInvoicesToCSV,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__["MdFileDownload"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      })))) : null);
    }
  }]);

  return InvoicesTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (InvoicesTable);

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_styled_components__);
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
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\Layout\\index.js";

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

var Layout = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
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
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__["a" /* AppProvider */], {
        UserStore: UserStore,
        UIStore: UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_styled_components__["ThemeProvider"], {
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
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_9__lib_withRoot__["a" /* default */])(Layout)));

/***/ }),

/***/ "./components/MaterialCustomRadioInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__ = __webpack_require__("material-ui/Radio");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\MaterialCustomRadioInputWrapper\\index.js";

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
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), function (fieldApi) {
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
          control: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }),
          label: item.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        });
      });
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControl"], {
      component: "fieldset",
      error: error && touched,
      fullWidth: fullWidth,
      required: required,
      className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
      disabled: disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormLabel"], {
      component: "legend",
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(horizontal ? classes.textAlignCenter : undefined),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
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
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    }), renderRadioInputItems(radioInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
      classes: horizontal ? {
        root: classes.textAlignCenter
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      }
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

/***/ "./components/MaterialCustomSelectInput/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__("material-ui/Select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__("material-ui/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\MaterialCustomSelectInput\\index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }










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
      marginLeft: 0
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
    }
  };
};

var MaterialCustomSelectInput = function MaterialCustomSelectInput(props) {
  var error = props.error,
      touched = props.touched,
      required = props.required,
      disabled = props.disabled,
      classes = props.classes,
      className = props.className,
      label = props.label,
      id = props.id,
      value = props.value,
      multiple = props.multiple,
      onInput = props.onInput,
      name = props.name,
      _onBlur = props.onBlur,
      placeholder = props.placeholder,
      selectInputItems = props.selectInputItems,
      SelectDisplayProps = props.SelectDisplayProps,
      fullWidth = props.fullWidth,
      native = props.native,
      rest = _objectWithoutProperties(props, ["error", "touched", "required", "disabled", "classes", "className", "label", "id", "value", "multiple", "onInput", "name", "onBlur", "placeholder", "selectInputItems", "SelectDisplayProps", "fullWidth", "native"]);

  var renderSelectInputItems = function renderSelectInputItems(selectInputItems) {
    return selectInputItems.map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__["MenuItem"], {
        key: item.label,
        value: item.value || item.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, item.label);
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
    error: error,
    required: required,
    className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
    htmlFor: "".concat(id, "-error"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default.a, _extends({
    SelectDisplayProps: SelectDisplayProps || {
      style: {
        backgroundColor: 'inherit'
      }
    },
    onClose: function onClose(event) {
      return event.target.blur();
    },
    placeholder: placeholder,
    native: native,
    value: multiple ? value || [] : value || '',
    onChange: function onChange(event) {
      if (onInput) {
        onInput(event);
      }
    },
    input: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default.a, {
      name: name,
      id: "".concat(id, "-helper"),
      className: classes.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }),
    onBlur: function onBlur(event) {
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
          lineNumber: 100
        }
      }, selected.map(function (value) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
          key: value,
          label: value,
          className: classes.chip,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        });
      }));
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), renderSelectInputItems(selectInputItems)), error ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, error) : null);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomSelectInput)));

/***/ }),

/***/ "./components/MaterialCustomSelectInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__("material-ui/Select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__("material-ui/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\MaterialCustomSelectInputWrapper\\index.js";

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
                lineNumber: 97
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
            lineNumber: 106
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
          htmlFor: "".concat(id, "-error"),
          disabled: disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
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
              lineNumber: 141
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
                lineNumber: 162
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
                  lineNumber: 166
                }
              });
            }));
          }
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }), renderSelectInputItems(selectInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, error) : null);
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

/***/ "./components/MaterialCustomTextFieldWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce__ = __webpack_require__("debounce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_debounce__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\MaterialCustomTextFieldWrapper\\index.js";

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

/***/ "./components/MenuDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__ = __webpack_require__("material-ui/colors/blue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__ = __webpack_require__("material-ui/Avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\MenuDialogBox\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var styles = {
  avatar: {
    backgroundColor: __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default.a[100],
    color: __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default.a[600]
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

var MenuDialoBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuDialoBox, _Component);

  function MenuDialoBox() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MenuDialoBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MenuDialoBox.__proto__ || Object.getPrototypeOf(MenuDialoBox)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLinks", {
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
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__routes__["Link"], {
              route: item.route,
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: classes.anchor,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
              button: true,
              onClick: function onClick() {
                return toggleSideNavModalClosed();
              },
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.listItemContentWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemAvatar"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default.a, {
              className: classes.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            })))));
          }

          if (item.onClick && typeof item.onClick === 'function') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
              button: true,
              onClick: function onClick() {
                item.onClick();
                toggleSideNavModalClosed();
              },
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.listItemContentWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemAvatar"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default.a, {
              className: classes.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            })));
          }
        });
      }
    }), _temp));
  }

  _createClass(MenuDialoBox, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        onClose: toggleSideNavModalClosed,
        "aria-labelledby": "side-nav-dialog-box",
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        classes: {
          root: classes.title
        },
        id: "side-nav-dialog-box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, this.renderLinks(linkItems))));
    }
  }]);

  return MenuDialoBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(MenuDialoBox));

/***/ }),

/***/ "./components/SettingsDrawer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__ = __webpack_require__("material-ui/Switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings__ = __webpack_require__("@material-ui/icons/Settings");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\SettingsDrawer\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var drawerWidth = 340;

var styles = function styles(theme) {
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
      minWidth: drawerWidth - 100,
      width: drawerWidth,
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

var SettingsDrawer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SettingsDrawer, _Component);

  function SettingsDrawer() {
    _classCallCheck(this, SettingsDrawer);

    return _possibleConstructorReturn(this, (SettingsDrawer.__proto__ || Object.getPrototypeOf(SettingsDrawer)).apply(this, arguments));
  }

  _createClass(SettingsDrawer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer,
          isAdmin = _props.isAdmin,
          navDrawerOpen = _props.navDrawerOpen,
          toggleNavDrawer = _props.toggleNavDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default.a, {
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
        onClose: toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.scrollableWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.closeIcon,
        onClick: this.props.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close___default.a, {
        classes: {
          root: classes.iconRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
        variant: "subheading",
        classes: {
          root: classes.header
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Settings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
        variant: "caption",
        classes: {
          root: classes.header
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Change your back-end settings here"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.listWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.settingsBtn,
        onClick: this.props.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }))));
    }
  }]);

  return SettingsDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(SettingsDrawer));

/***/ }),

/***/ "./components/SideNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden__ = __webpack_require__("material-ui/Hidden");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack__ = __webpack_require__("@material-ui/icons/ArrowBack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications__ = __webpack_require__("@material-ui/icons/Notifications");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SideNavLinkItem__ = __webpack_require__("./components/SideNavLinkItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navItems__ = __webpack_require__("./components/SideNav/navItems.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\SideNav\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var drawerWidth = 240;

var styles = function styles(theme) {
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
      width: drawerWidth,
      backgroundColor: 'rgba(36, 68, 109, .75)',
      color: '#fff',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
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
      width: drawerWidth
    }), _drawerPaperClose),
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
      overflow: 'hidden' //borderBottom: '1px solid rgba(255,255,255,.2)',

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

var SideNav = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "sideNavListingsDialogItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: [{
        name: 'Create a Listing',
        route: 'create-listing',
        type: 'link',
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add___default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }, {
        name: 'View Listings',
        route: 'listings',
        type: 'link',
        icon: __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye___default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }]
    }), Object.defineProperty(_assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return __WEBPACK_IMPORTED_MODULE_15__navItems__["a" /* default */].map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SideNavLinkItem__["a" /* default */], {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(SideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_13_classnames___default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a, {
        classes: {
          root: classes.listRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return SideNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles__["withStyles"])(styles)(SideNav));

/***/ }),

/***/ "./components/SideNav/navItems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export agentSideLinks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__ = __webpack_require__("@material-ui/icons/ExitToApp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount__ = __webpack_require__("@material-ui/icons/SupervisorAccount");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment__ = __webpack_require__("@material-ui/icons/Assignment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment__);





var agentSideLinks = [{
  name: 'Dashboard',
  route: 'dashboard',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdDashboard"]
}, {
  name: 'Profile',
  route: 'profile',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdPerson"],
  iconFontSize: 28,
  iconLeft: '12px'
}, {
  name: 'The Vault',
  route: 'deals',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaCreditCard"]
}, {
  name: 'Invoices',
  route: 'invoices',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaClipboard"],
  iconFontSize: 20
}, {
  name: 'Agents',
  route: 'agents',
  icon: __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount___default.a,
  iconFontSize: 24
},
/*
{ name: 'Listings', icon: ListingsIcon, id: 'listings' },
*/
{
  name: 'Log Out',
  icon: __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default.a,
  id: 'logout'
}];
/* harmony default export */ __webpack_exports__["a"] = (agentSideLinks);

/***/ }),

/***/ "./components/SideNavLinkItem/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styledComponents__ = __webpack_require__("./components/SideNavLinkItem/styledComponents/index.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\SideNavLinkItem\\index.js";

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

var SideNavLinkItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
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

      var linkItem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["d" /* SideNavLinkItemWrapper */], _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: this.props.route,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["b" /* SideNavLinkItemAnchor */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["a" /* IconWrapper */], {
        isAdminLinks: isAdminLinks,
        iconLeft: iconLeft,
        iconLeftSmall: iconLeftSmall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        size: iconFontSize || 22,
        classes: {
          root: classes.icon
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }) : null), this.props.name)));
      var actionItem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["d" /* SideNavLinkItemWrapper */], _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["c" /* SideNavLinkItemDiv */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["a" /* IconWrapper */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        size: iconFontSize || 22,
        color: "primary",
        classes: {
          root: classes.icon
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : null), this.props.name));

      if (isActionItem) {
        return actionItem;
      }

      return linkItem;
    }
  }]);

  return SideNavLinkItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(SideNavLinkItem));

/***/ }),

/***/ "./components/SideNavLinkItem/styledComponents/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SideNavLinkItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SideNavLinkItemAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SideNavLinkItemDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished__ = __webpack_require__("polished");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_polished__);


var SideNavLinkItemWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemWrapper",
  componentId: "s1oz5fjl-0"
})(["height:45px;min-width:100%;font-size:16px;font-family:Roboto;font-weight:500;color:", ";cursor:pointer;background-color:", ";transition:color .3s ease-in-out;&:hover{background-color:", ";}}"], function (props) {
  return props.isAdminLinks ? '#fff' : 'inherit';
}, function (props) {
  return props.active ? 'rgba(255, 255, 255, 0.15) !important' : 'initial';
}, function (props) {
  return props.isAdminLinks ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
});
var SideNavLinkItemAnchor = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a.withConfig({
  displayName: "styledComponents__SideNavLinkItemAnchor",
  componentId: "s1oz5fjl-1"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;color:#fff;&:hover{color:#fff !important;}"]);
var SideNavLinkItemDiv = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemDiv",
  componentId: "s1oz5fjl-2"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;"]);
var IconWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span.withConfig({
  displayName: "styledComponents__IconWrapper",
  componentId: "s1oz5fjl-3"
})(["margin-right:35px;position:absolute;left:", ";@media screen and (max-width:600px){left:", ";}"], function (props) {
  return props.iconLeft ? props.iconLeft : '15px';
}, function (props) {
  return props.iconLeftSmall ? props.iconLeftSmall : '8px';
});

/***/ }),

/***/ "./components/SubmitInvoiceDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_SubmitInvoiceForm__ = __webpack_require__("./containers/SubmitInvoiceForm.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\SubmitInvoiceDialogBox\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













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
      paddingTop: '32px'
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
      bottom: 20
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var SubmitInvoiceDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitInvoiceDialogBox, _Component);

  function SubmitInvoiceDialogBox(props) {
    var _this;

    _classCallCheck(this, SubmitInvoiceDialogBox);

    _this = _possibleConstructorReturn(this, (SubmitInvoiceDialogBox.__proto__ || Object.getPrototypeOf(SubmitInvoiceDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
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
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      isErrorSnackbar: false
    };
    return _this;
  }

  _createClass(SubmitInvoiceDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          toggleDialogBoxOpen = _props.toggleDialogBoxOpen,
          submitInvoiceDialogOpen = _props.submitInvoiceDialogOpen,
          setInvoiceSuccessfullySubmitted = _props.setInvoiceSuccessfullySubmitted;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: submitInvoiceDialogOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Add Invoice"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_SubmitInvoiceForm__["a" /* default */], {
        userUUID: this.props.userUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setInvoiceSuccessfullySubmitted: setInvoiceSuccessfullySubmitted,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: this.state.isErrorSnackbar ? 8000 : 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
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
            lineNumber: 151
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        onClick: toggleDialogBoxOpen,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
          lineNumber: 196
        }
      }, "Submit")) : null);
    }
  }]);

  return SubmitInvoiceDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(SubmitInvoiceDialogBox)));

/***/ }),

/***/ "./components/ViewInvoiceDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__ = __webpack_require__("material-ui/Menu/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_ViewInvoiceForm__ = __webpack_require__("./containers/ViewInvoiceForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_invoices_acceptInvoice__ = __webpack_require__("./effects/invoices/acceptInvoice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__effects_invoices_deleteInvoice__ = __webpack_require__("./effects/invoices/deleteInvoice.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\ViewInvoiceDialogBox\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      paddingTop: '32px'
    },
    editInvoiceBtn: {
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

var SubmitInvoiceDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitInvoiceDialogBox, _Component);

  function SubmitInvoiceDialogBox(props) {
    var _this;

    _classCallCheck(this, SubmitInvoiceDialogBox);

    _this = _possibleConstructorReturn(this, (SubmitInvoiceDialogBox.__proto__ || Object.getPrototypeOf(SubmitInvoiceDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          isEditingInvoice: false
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
    Object.defineProperty(_assertThisInitialized(_this), "toggleEditingInvoice", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingInvoice: typeof bool === 'boolean' ? bool : !_this.state.isEditingInvoice
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
    Object.defineProperty(_assertThisInitialized(_this), "deleteInvoice", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(invoiceID) {
        _this.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_15__effects_invoices_deleteInvoice__["a" /* default */])(invoiceID).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);

            return;
          }

          _this.props.invoiceDeleted(invoiceID);
        }).catch(function (err) {
          console.log(err);

          _this.openRequestErrorSnackbar();
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
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      isEditingInvoice: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
      submittingRequestToServer: false,
      isErrorSnackbar: false
    };
    return _this;
  }

  _createClass(SubmitInvoiceDialogBox, [{
    key: "render",

    /*
    acceptInvoice = invoiceID => {
      this.toggleSubmittingRequestToServer(true);
      acceptInvoice(invoiceID)
        .then(res => {
          this.toggleSubmittingRequestToServer(false);
          if (res.error) {
            this.openRequestErrorSnackbar(res.error);
            return;
          }
            this.props.invoiceAccepted(invoiceID);
        })
        .catch(err => {
          this.openRequestErrorSnackbar();
        });
    };
    */
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeInvoicesViewDialogBox = _props.closeInvoicesViewDialogBox,
          invoicesViewDialogBoxOpen = _props.invoicesViewDialogBoxOpen,
          setInvoiceSuccessfullySubmitted = _props.setInvoiceSuccessfullySubmitted,
          viewingInvoiceID = _props.viewingInvoiceID,
          viewingInvoiceStatus = _props.viewingInvoiceStatus;
      var _state = this.state,
          isEditingInvoice = _state.isEditingInvoice,
          cancelAnchorEl = _state.cancelAnchorEl,
          acceptAnchorEl = _state.acceptAnchorEl;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: invoicesViewDialogBoxOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, "View Invoice"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_ViewInvoiceForm__["a" /* default */], {
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setInvoiceSuccessfullySubmitted: setInvoiceSuccessfullySubmitted,
        invoiceID: viewingInvoiceID,
        isEditingInvoice: isEditingInvoice,
        isViewType: true,
        submittingRequestToServer: this.state.submittingRequestToServer,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default.a, {
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
            lineNumber: 277
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
            lineNumber: 280
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          _this2.toggleEditingInvoice(false);

          closeInvoicesViewDialogBox();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, "Delete"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemDelete
        },
        onClick: function onClick() {
          _this2.handleCancelMenuClose();

          _this2.deleteInvoice(viewingInvoiceID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, "No")), !isEditingInvoice && this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["agent"] && viewingInvoiceStatus === 'pending' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        className: classes.editInvoiceBtn,
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          return _this2.toggleEditingInvoice(true);
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, "Edit") : null, isEditingInvoice ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
          lineNumber: 404
        }
      }, "Submit") : null) : null);
    }
  }]);

  return SubmitInvoiceDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles)(SubmitInvoiceDialogBox)));

/***/ }),

/***/ "./components/dataTableFormatters/ViewFormatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\dataTableFormatters\\ViewFormatter.js";

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

      if (noShow) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      });

      if (type === 'action' && _onClick) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
          title: "Click to view",
          enterDelay: 400,
          leaveDelay: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          id: "viewTableIcon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, {
          onClick: function onClick(event) {
            if (needsEvent) {
              _onClick(event);
            } else {
              _onClick();
            }

            if (event.stopPropagation) event.stopPropagation();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Click to view",
        enterDelay: 400,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: route,
        params: {
          id: id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })))));
    }
  }]);

  return VeiwFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(VeiwFormatter));

/***/ }),

/***/ "./components/forms/SubmitInvoiceForm/formValidation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return paymentTypeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkOrTransactionNumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paymentAmountValidator; });
/* unused harmony export descriptionValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator__ = __webpack_require__("email-validator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_email_validator__);

var dollarAmountOnlyRegex = /^[0-9]+(\.[0-9][0-9])?$/;

var validator = function validator(values) {
  return {
    date: !values.date ? 'This value is required' : null,
    agent: !values.agent || !values.agent.length ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    invoiceType: !values.invoiceType ? 'This value is required' : null,
    propertyAddress: !values.propertyAddress ? 'This value is required' : null,
    city: !values.city ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    apartmentNumber: !values.apartmentNumber ? 'This value is required' : null,
    managementOrCobrokeCompany: !values.managementOrCobrokeCompany ? 'This value is required' : null,
    price: !values.price || !dollarAmountOnlyRegex.test(values.price) ? 'This value is required and must be a dollar amount' : null,
    clientName: !values.clientName || values.clientName.length < 3 || values.clientName.length > 80 ? 'Between 3 and 80 characters' : null,
    financialsTotal: values.financialsTotal <= 0 ? 'The total amount for this invoice must be greater than 0' : null,
    attention: !values.attention ? 'This value is required' : null,
    // clientPhoneNumber:
    //   !values.clientPhoneNumber ||
    //   (values.clientPhoneNumber && values.clientPhoneNumber.length < 14)
    //     ? 'This value is required and must be a full tel number with area code'
    //     : null,
    attentionEmail: !values.attentionEmail || !__WEBPACK_IMPORTED_MODULE_0_email_validator__["validate"](values.attentionEmail) || values.attentionEmail.length > 100 ? 'Please provide a valid email address that is less than 100 characters' : null
  };
};

var paymentTypeValidator = function paymentTypeValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var checkOrTransactionNumberValidator = function checkOrTransactionNumberValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var paymentAmountValidator = function paymentAmountValidator(value) {
  return {
    error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null
  };
};
var descriptionValidator = function descriptionValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
/* harmony default export */ __webpack_exports__["b"] = (validator);

/***/ }),

/***/ "./components/forms/SubmitInvoiceForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete__ = __webpack_require__("@material-ui/icons/Delete");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_TextField__ = __webpack_require__("material-ui/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__formValidation__ = __webpack_require__("./components/forms/SubmitInvoiceForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");



var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\components\\forms\\SubmitInvoiceForm\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var SubmitInvoiceForm = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["observer"])(_class =
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
          // clientPhoneNumber,
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
          sm: 12,
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
  }]);

  return SubmitInvoiceForm;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(SubmitInvoiceForm));

/***/ }),

/***/ "./constants/userTypes.js":
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

/***/ "./containers/Invoices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_SubmitInvoiceDialogBox__ = __webpack_require__("./components/SubmitInvoiceDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__InvoicesTable__ = __webpack_require__("./containers/InvoicesTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ViewInvoiceDialogBox__ = __webpack_require__("./components/ViewInvoiceDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_invoices_deleteInvoice__ = __webpack_require__("./effects/invoices/deleteInvoice.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\containers\\Invoices.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query invoicesByAgentID($uuid: String!) {\n    invoicesByAgentID(uuid: $uuid) {\n      invoiceID\n      date\n      invoiceType\n      clientName\n      propertyAddress\n      city\n      state\n      managementOrCobrokeCompany\n      price\n      total\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
















var Loader = __WEBPACK_IMPORTED_MODULE_10_react_spinners__["DotLoader"];
var invoicesQuery = __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default()(_templateObject);

var styles = function styles(theme) {
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

var Invoices = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Invoices, _Component);

  function Invoices(props) {
    var _this;

    _classCallCheck(this, Invoices);

    _this = _possibleConstructorReturn(this, (Invoices.__proto__ || Object.getPrototypeOf(Invoices)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleDialogBoxOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          submitInvoiceDialogOpen: !_this.state.submitInvoiceDialogOpen
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setInvoiceSuccessfullySubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(invoice) {
        _this.setState({
          submitInvoiceDialogOpen: false,
          snackbarOpen: true,
          snackbarText: 'Invoice submitted successfully',
          addedInvoices: _toConsumableArray(_this.state.addedInvoices).concat([invoice])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setInvoiceSuccessfullyEditted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newInvoice) {
        var addedInvoices = _this.state.addedInvoices.filter(function (invoice) {
          return invoice.invoiceID !== newInvoice.invoiceID;
        });

        _this.setState({
          invoicesViewDialogBoxOpen: false,
          snackbarOpen: true,
          snackbarText: 'Invoice updated successfully',
          addedInvoices: _toConsumableArray(addedInvoices).concat([newInvoice])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCloseSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(invoice) {
        _this.setState({
          snackbarOpen: false,
          snackbarUndoFunction: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openInvoicesViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(invoiceID, status) {
        _this.setState({
          invoicesViewDialogBoxOpen: true,
          viewingInvoiceID: invoiceID,
          viewingInvoiceStatus: status
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeInvoicesViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          invoicesViewDialogBoxOpen: false,
          viewingInvoiceID: '',
          viewingInvoiceStatus: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "invoiceDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(invoiceID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Invoice deleted successfully!',
          invoicesViewDialogBoxOpen: false,
          deletedInvoiceIDS: _toConsumableArray(_this.state.deletedInvoiceIDS).concat([invoiceID])
        });
      }
    });
    _this.state = {
      submitInvoiceDialogOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedInvoices: [],
      invoicesViewDialogBoxOpen: false,
      viewingInvoiceID: '',
      viewingInvoiceStatus: '',
      deletedInvoiceIDS: [],
      userUUID: _this.props.userUUID
    };
    return _this;
  }

  _createClass(Invoices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          userUUID = _props.userUUID,
          userRole = _props.userRole;
      var _state = this.state,
          submitInvoiceDialogOpen = _state.submitInvoiceDialogOpen,
          invoicesSummaryDialogBoxOpen = _state.invoicesSummaryDialogBoxOpen,
          invoicesViewDialogBoxOpen = _state.invoicesViewDialogBoxOpen,
          viewingInvoiceID = _state.viewingInvoiceID,
          viewingInvoiceStatus = _state.viewingInvoiceStatus;
      var toggleAddInvoiceDialogBox = this.toggleAddInvoiceDialogBox,
          toggleInvoicesSummaryDialogBox = this.toggleInvoicesSummaryDialogBox,
          openInvoicesViewDialogBox = this.openInvoicesViewDialogBox,
          closeInvoicesViewDialogBox = this.closeInvoicesViewDialogBox;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["Query"], {
        query: invoicesQuery,
        variables: {
          uuid: userUUID || this.state.userUUID
        },
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 110px)',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        })); // TODO: change the error message to a generic
        // 'error connecting to server' message

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var intInvoices = {};

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var allInvoices = _toConsumableArray(data.invoicesByAgentID).concat(_toConsumableArray(_this2.state.addedInvoices));

        allInvoices.forEach(function (invoice) {
          intInvoices[invoice.invoiceID] = invoice;
        });
        var uniqueInvoices = [];
        Object.keys(intInvoices).forEach(function (key) {
          uniqueInvoices.push(intInvoices[key]);
        });
        uniqueInvoices = uniqueInvoices.filter(function (invoice) {
          return !_this2.state.deletedInvoiceIDS.includes(invoice.invoiceID);
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.buttonsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
          variant: "raised",
          color: "secondary",
          "aria-label": "add",
          onClick: _this2.toggleDialogBoxOpen,
          classes: {
            root: classes.submitInvoiceBtn
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Add___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          }
        }), "Submit an Invoice")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_SubmitInvoiceDialogBox__["a" /* default */], {
          submitInvoiceDialogOpen: _this2.state.submitInvoiceDialogOpen,
          toggleDialogBoxOpen: _this2.toggleDialogBoxOpen,
          userUUID: _this2.props.userUUID,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setInvoiceSuccessfullySubmitted: _this2.setInvoiceSuccessfullySubmitted,
          userRole: userRole,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_ViewInvoiceDialogBox__["a" /* default */], {
          invoicesViewDialogBoxOpen: invoicesViewDialogBoxOpen,
          closeInvoicesViewDialogBox: closeInvoicesViewDialogBox,
          userUUID: userUUID,
          viewingInvoiceID: viewingInvoiceID,
          viewingInvoiceStatus: viewingInvoiceStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          invoiceDeleted: _this2.invoiceDeleted,
          setInvoiceSuccessfullySubmitted: _this2.setInvoiceSuccessfullyEditted,
          userRole: _this2.props.userRole,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__InvoicesTable__["a" /* default */], {
          invoices: uniqueInvoices,
          openInvoicesViewDialogBox: openInvoicesViewDialogBox,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default.a, {
          classes: {
            root: classes.snackBar
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          open: _this2.state.snackbarOpen,
          autoHideDuration: 4000,
          onClose: _this2.handleCloseSnackbar,
          message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            id: "snackbar-id",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            }
          }, _this2.state.snackbarText),
          action: [_this2.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
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
              lineNumber: 269
            }
          }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Close___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }));
      });
    }
  }]);

  return Invoices;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(Invoices));

/***/ }),

/***/ "./containers/InvoicesTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance__ = __webpack_require__("chance");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_InvoicesTable__ = __webpack_require__("./components/InvoicesTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_papaparse__ = __webpack_require__("papaparse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_debounce__ = __webpack_require__("./utils/debounce.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\containers\\InvoicesTable.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var chance = new __WEBPACK_IMPORTED_MODULE_4_chance___default.a();
var Loader = __WEBPACK_IMPORTED_MODULE_3_react_spinners__["DotLoader"];

var styles = function styles(theme) {
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

var columns = [{
  name: 'invoiceID',
  title: 'Invoice ID'
}, {
  name: 'date',
  title: 'Date'
}, {
  name: 'type',
  title: 'Type'
}, {
  name: 'clientName',
  title: 'Client Name'
}, // { name: 'clientPhoneNumber', title: 'Client Phone Number' },
{
  name: 'propertyAddress',
  title: 'Property Address'
}, {
  name: 'propertyCity',
  title: 'Property City'
}, {
  name: 'managementOrCobrokeCompany',
  title: 'Mgmt/Co-Broke Co.'
}, {
  name: 'rentOrSalePrice',
  title: 'Rent/Sale Price'
}, {
  name: 'totalAmount',
  title: 'Total Amount'
}, // { name: 'status', title: 'Status' },
{
  name: 'view',
  title: 'View'
}];

var InvoicesTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(InvoicesTableContainer, _Component);

  function InvoicesTableContainer(props) {
    var _this;

    _classCallCheck(this, InvoicesTableContainer);

    _this = _possibleConstructorReturn(this, (InvoicesTableContainer.__proto__ || Object.getPrototypeOf(InvoicesTableContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.invoices.map(function (invoice) {
          var invoiceID = invoice.invoiceID,
              date = invoice.date,
              invoiceType = invoice.invoiceType,
              clientName = invoice.clientName,
              propertyAddress = invoice.propertyAddress,
              city = invoice.city,
              managementOrCobrokeCompany = invoice.managementOrCobrokeCompany,
              price = invoice.price,
              total = invoice.total;
          return {
            invoiceID: invoiceID,
            date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(date).format('MM/DD/YYYY'),
            type: invoiceType,
            clientName: clientName,
            // clientPhoneNumber,
            propertyAddress: propertyAddress,
            propertyCity: city,
            managementOrCobrokeCompany: managementOrCobrokeCompany,
            rentOrSalePrice: "$".concat(Number(price).toLocaleString()),
            // status: capitalize(status),
            totalAmount: "$".concat(Number(total).toLocaleString()),
            view: {
              type: 'action',
              onClick: function onClick() {
                return Object(__WEBPACK_IMPORTED_MODULE_11__utils_debounce__["a" /* default */])(_this.props.openInvoicesViewDialogBox.bind(null, invoiceID, status), 1000, true)();
              }
            }
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "convertInvoicesToCSV", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var invoices = _this.props.invoices;
        var selection = _this.state.selection;
        if (!selection || !selection.length) return;
        var csvContent = __WEBPACK_IMPORTED_MODULE_8_papaparse___default.a.unparse(invoices.filter(function (invoice) {
          return selection.includes(invoice.invoiceID);
        }).map(function (invoice) {
          return _objectSpread({}, invoice, {
            date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(invoice.date).format('MM/DD/YYYY')
          });
        }), {
          header: true
        });

        if (_this._csvLink) {
          _this._csvLink.setAttribute('href', "data:text/csv;charset=utf-8,".concat(encodeURIComponent(csvContent)));

          _this._csvLink.setAttribute('download', 'invoices_data.csv');

          _this._csvLink.click();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeSelection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(selection) {
        _this.setState({
          selection: selection
        });
      }
    });
    _this.state = {
      tableIsLoading: true,
      selection: []
    };
    return _this;
  }

  _createClass(InvoicesTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          selection = _state.selection;

      var _props = this.props,
          classes = _props.classes,
          invoices = _props.invoices,
          rest = _objectWithoutProperties(_props, ["classes", "invoices"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, tableIsLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.progressWrapper,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 180px)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#f44336",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_InvoicesTable__["a" /* default */], _extends({}, rest, {
        convertInvoicesToCSV: this.convertInvoicesToCSV,
        changeSelection: this.changeSelection,
        selection: selection,
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: columns,
        rows: this.createRows(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        id: "csvLink",
        ref: function ref(_ref) {
          return _this2._csvLink = _ref;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }));
    }
  }]);

  return InvoicesTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(InvoicesTableContainer));

/***/ }),

/***/ "./containers/SubmitInvoiceForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export invoiceFormQuery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitInvoiceForm__ = __webpack_require__("./components/forms/SubmitInvoiceForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_invoices_submitInvoice__ = __webpack_require__("./effects/invoices/submitInvoice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\containers\\SubmitInvoiceForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealForm($uuid: String) {\n    dealForm(uuid: $uuid) {\n      agent {\n        firstName\n        lastName\n        role\n        agent {\n          agentType\n          state\n        }\n      }\n      formSelectItems\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["BounceLoader"];
var invoiceFormQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var SubmitInvoiceFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitInvoiceFormContainer, _Component);

  function SubmitInvoiceFormContainer(props) {
    var _this;

    _classCallCheck(this, SubmitInvoiceFormContainer);

    _this = _possibleConstructorReturn(this, (SubmitInvoiceFormContainer.__proto__ || Object.getPrototypeOf(SubmitInvoiceFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "totalPayments", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          total: paymentsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          total: paymentsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state2 = _this.state,
            addedManagementCompanies = _this$state2.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state2.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(__WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            total = _this$state3.total;

        var returnObject = _objectSpread({}, values, {
          addedManagementCompanies: addedManagementCompanies,
          total: total
        });

        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        delete returnObject.financialsTotal;
        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });

        _this.setState({
          formSubmissionBegun: true,
          submittingFormToServer: true
        });

        Object(__WEBPACK_IMPORTED_MODULE_6__effects_invoices_submitInvoice__["a" /* default */])(returnObject).then(function (res) {
          var failed = false;

          if (res.otherError) {
            _this.props.openRequestErrorSnackbar(res.otherError);

            failed = true;
          }

          if (res.userErrors.length) {
            failed = true;
          }

          if (!failed) {
            _this.props.setInvoiceSuccessfullySubmitted(res.invoice);
          }

          _this.props.setFormSubmitted(false);
        }).catch(function (err) {
          _this.props.setFormSubmitted(false);

          _this.props.openRequestErrorSnackbar();
        });
      }
    });
    _this.state = {
      paymentAmountItems: {},
      total: 0,
      permanentPaymentSubtractions: 0,
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      formSubmissionBegun: false,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(SubmitInvoiceFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          rest = _objectWithoutProperties(_props, ["userUUID"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: invoiceFormQuery,
        variables: {
          uuid: uuid
        },
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }));

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$dealForm = data.dealForm,
            agent = _data$dealForm.agent,
            formSelectItems = _data$dealForm.formSelectItems;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitInvoiceForm__["a" /* default */], _extends({
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          agent: agent,
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany
        }, rest, {
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }));
      });
    }
  }]);

  return SubmitInvoiceFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (SubmitInvoiceFormContainer);

/***/ }),

/***/ "./containers/ViewInvoiceForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitInvoiceForm__ = __webpack_require__("./components/forms/SubmitInvoiceForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_invoices_updateInvoice__ = __webpack_require__("./effects/invoices/updateInvoice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\containers\\ViewInvoiceForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query viewInvoiceForm($uuid: String!) {\n    viewInvoiceForm(uuid: $uuid) {\n      formSelectItems\n      invoice {\n        invoiceID\n        date\n        agentName\n        agentType\n        invoiceType\n        propertyAddress\n        state\n        city\n        apartmentNumber\n        managementOrCobrokeCompany\n        price\n        clientName\n        paymentItems {\n          paymentType\n          checkOrTransactionNumber\n          amount\n        }\n        total\n        agentNotes\n        attention\n        attentionEmail\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["BounceLoader"];
var viewInvoiceFormQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var ViewInvoiceFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewInvoiceFormContainer, _Component);

  function ViewInvoiceFormContainer(props) {
    var _this;

    _classCallCheck(this, ViewInvoiceFormContainer);

    _this = _possibleConstructorReturn(this, (ViewInvoiceFormContainer.__proto__ || Object.getPrototypeOf(ViewInvoiceFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "totalPayments", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          total: paymentsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          total: paymentsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state2 = _this.state,
            addedManagementCompanies = _this$state2.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state2.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(__WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setInitialContainerState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var total = _ref.total;

        _this.setState({
          total: total
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            total = _this$state3.total;

        var returnObject = _objectSpread({}, values, {
          addedManagementCompanies: addedManagementCompanies,
          total: total,
          invoiceID: _this.props.invoiceID
        });

        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        delete returnObject.financialsTotal;
        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });

        _this.setState({
          formSubmissionBegun: true,
          submittingFormToServer: true
        });

        Object(__WEBPACK_IMPORTED_MODULE_6__effects_invoices_updateInvoice__["a" /* default */])(returnObject).then(function (res) {
          var failed = false;

          if (res.otherError) {
            _this.props.openRequestErrorSnackbar(res.otherError);

            failed = true;
          }

          if (res.userErrors.length) {
            failed = true;
          }

          if (!failed) {
            _this.props.setInvoiceSuccessfullySubmitted(res.invoice);
          }

          _this.setState({
            submittingFormToServer: false
          });

          _this.props.setFormSubmitted(false);
        }).catch(function (err) {
          _this.props.setFormSubmitted(false);

          _this.props.openRequestErrorSnackbar();
        });
        console.log(returnObject);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      total: 0,
      permanentPaymentSubtractions: 0,
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      formSubmissionBegun: false,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(ViewInvoiceFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          invoiceID = _props.invoiceID,
          isEditingInvoice = _props.isEditingInvoice,
          isViewType = _props.isViewType,
          rest = _objectWithoutProperties(_props, ["userUUID", "invoiceID", "isEditingInvoice", "isViewType"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: viewInvoiceFormQuery,
        variables: {
          uuid: invoiceID
        },
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }));

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$viewInvoiceForm = data.viewInvoiceForm,
            submittedInvoice = _data$viewInvoiceForm.invoice,
            formSelectItems = _data$viewInvoiceForm.formSelectItems;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitInvoiceForm__["a" /* default */], _extends({
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          submittedInvoice: submittedInvoice,
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          isEditingInvoice: isEditingInvoice,
          isViewType: isViewType,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany
        }, rest, {
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer || _this2.props.submittingRequestToServer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }));
      });
    }
  }]);

  return ViewInvoiceFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (ViewInvoiceFormContainer);

/***/ }),

/***/ "./effects/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return graphQlClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);



var _getConfig = __WEBPACK_IMPORTED_MODULE_1_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var graphQlClient = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](publicRuntimeConfig.ENDPOINT, {
  credentials: publicRuntimeConfig.CREDENTIALS
});

/***/ }),

/***/ "./effects/invoices/acceptInvoice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__("./effects/client.js");

var query = "\n  mutation acceptInvoice($uuid: String!) {\n    acceptInvoice(uuid: $uuid) {\n      invoice {\n        invoiceID\n        date\n        agentType\n        agentName\n        invoiceType\n        clientName\n        propertyAddress\n        city\n        state\n        managementOrCobrokeCompany\n        price\n        total\n        status\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";

var acceptInvoice = function acceptInvoice(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    invoice: null,
    otherError: null,
    userErrors: []
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.acceptInvoice;
    var invoice = data.invoice,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.invoice = invoice;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* unused harmony default export */ var _unused_webpack_default_export = (acceptInvoice);

/***/ }),

/***/ "./effects/invoices/deleteInvoice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__("./effects/client.js");

var query = "\n  mutation deleteInvoice($uuid: String!) {\n    deleteInvoice(uuid: $uuid) {\n      invoiceID\n      error\n    }\n  }\n";

var deleteInvoice = function deleteInvoice(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    invoiceID: null,
    error: null
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.deleteInvoice;
    var invoiceID = data.invoiceID,
        error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.invoiceID = invoiceID;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (deleteInvoice);

/***/ }),

/***/ "./effects/invoices/submitInvoice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__("./effects/client.js");

var query = "\n  mutation submitInvoice($input: SubmitInvoiceInput!) {\n    submitInvoice(input: $input) {\n      invoice {\n        invoiceID\n        date\n        invoiceType\n        clientName\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n        total\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";

var submitInvoice = function submitInvoice(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    invoice: null,
    otherError: null,
    userErrors: []
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.submitInvoice;
    var invoice = data.invoice,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.invoice = invoice;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (submitInvoice);

/***/ }),

/***/ "./effects/invoices/updateInvoice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__("./effects/client.js");

var query = "\n  mutation updateInvoice($input: UpdateInvoiceInput!) {\n    updateInvoice(input: $input) {\n      invoice {\n        invoiceID\n        date\n        invoiceType\n        clientName\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";

var updateInvoice = function updateInvoice(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    invoice: null,
    otherError: null,
    userErrors: []
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.updateInvoice;
    var invoice = data.invoice,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.invoice = invoice;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (updateInvoice);

/***/ }),

/***/ "./globalStyles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  .app-body-class {\n    overflow: hidden;\n  }\n\n  body:not(.app-body-class) #__next {\n    height: 100% !important;\n  }\n\n  body:not(.app-body-class) #__next > div {\n    height: 100% !important;\n  }\n\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n  \n";
/* harmony default export */ __webpack_exports__["a"] = (globalStyles);

/***/ }),

/***/ "./lib/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss__ = __webpack_require__("react-jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__ = __webpack_require__("material-ui/colors/red");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__("material-ui/colors/blue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__("polished");
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

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_config__);






var _getConfig = __WEBPACK_IMPORTED_MODULE_4_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser || !global.fetch) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
      uri: publicRuntimeConfig.WEBSITE_URL,
      // 'http://localhost/api/graphql', // Server URL (must be absolute)
      credentials: publicRuntimeConfig.CREDENTIALS,
      // Additional fetch() options like `credentials` or `headers`
      headers: {
        Accept: 'application/json'
      }
    }),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]({
      addTypename: false
    }).restore(initialState || {})
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

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initApollo__ = __webpack_require__("./lib/initApollo.js");

var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\lib\\withData.js";

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

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
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
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                  apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])();
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({
                    ctx: ctx
                  }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  })), {
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
                    __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind();
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
      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
          client: this.apollo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })));
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(getComponentDisplayName(ComposedComponent), ")")
  }), Object.defineProperty(_class, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
    }
  }), _temp;
});

/***/ }),

/***/ "./lib/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__ = __webpack_require__("material-ui/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./lib/getPageContext.js");
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\lib\\withRoot.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

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

/***/ "./models/UIStore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__);

var defaultState = {
  fullScreenLoaderOn: false,
  fullScreenLoaderText: ''
};
var Store = __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].model('UI', {
  fullScreenLoaderOn: __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].boolean,
  fullScreenLoaderText: __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].string
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
/* harmony default export */ __webpack_exports__["a"] = (Store.create(defaultState));

/***/ }),

/***/ "./models/UserStore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userEffects__ = __webpack_require__("./models/UserStore/userEffects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__ = __webpack_require__("./utils/jwtUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_getCookie__ = __webpack_require__("./utils/getCookie.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var defaultState = {
  userRole: '',
  isLoggedIn: false,
  uuid: '',
  isAdminOwner: false
};
var userRoles = [__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('super-admin'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('admin'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('agent'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('customer'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('')];
var UserStore = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].model('User', {
  userRole: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].union.apply(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"], userRoles),
  isLoggedIn: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].boolean,
  uuid: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].string,
  serverJWTData: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].frozen, null),
  isAdminOwner: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].boolean
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
      var _afterCreate = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var JWTData, encodedJWTData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !self.isLoggedIn)) {
                  _context.next = 8;
                  break;
                }

                encodedJWTData = Object(__WEBPACK_IMPORTED_MODULE_5__utils_getCookie__["a" /* default */])('jwtData');

                if (encodedJWTData) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                try {
                  JWTData = Object(__WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__["a" /* JWTPaylodeDecode */])(encodedJWTData);
                } catch (err) {
                  console.log(err);
                }

                self.setUser(JWTData);
                _context.next = 12;
                break;

              case 8:
                if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a) {
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
var Store = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].compose('Store', UserStore, __WEBPACK_IMPORTED_MODULE_3__userEffects__["a" /* default */]);

function createStore(cookieJWTData) {
  if (!__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && cookieJWTData) {
    defaultState.serverJWTData = Object(__WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__["a" /* JWTPaylodeDecode */])(cookieJWTData);
  }

  return Store.create(defaultState);
}

/* harmony default export */ __webpack_exports__["a"] = (createStore);

/***/ }),

/***/ "./models/UserStore/userEffects/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signUpCustomer__ = __webpack_require__("./models/UserStore/userEffects/signUpCustomer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logoutUser__ = __webpack_require__("./models/UserStore/userEffects/logoutUser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginUser__ = __webpack_require__("./models/UserStore/userEffects/loginUser.js");



 // import debounce from 'debounce';

var UserEffects = __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].model({}).actions(function (self) {
  return {
    signUpCustomer: __WEBPACK_IMPORTED_MODULE_1__signUpCustomer__["a" /* default */].bind(null, self),
    logoutUser: __WEBPACK_IMPORTED_MODULE_2__logoutUser__["a" /* default */].bind(null, self),
    loginUser: __WEBPACK_IMPORTED_MODULE_3__loginUser__["a" /* default */].bind(null, self)
  };
});
/* harmony default export */ __webpack_exports__["a"] = (UserEffects);

/***/ }),

/***/ "./models/UserStore/userEffects/loginUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__effects_client__ = __webpack_require__("./effects/client.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var query = "\n    mutation loginUser($input: LoginUserInput!) {\n      loginUser(input: $input) {\n        user {\n          uuid\n          role\n          admin {\n            isAdminOwner\n          }\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

function loginUser(_x, _x2) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self, values) {
    var variables, finalResponseObj;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
            return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__effects_client__["a" /* graphQlClient */].request(query, variables).then(function (res) {
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

/* harmony default export */ __webpack_exports__["a"] = (loginUser);

/***/ }),

/***/ "./models/UserStore/userEffects/logoutUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__effects_client__ = __webpack_require__("./effects/client.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var query = "\n    mutation logoutUser {\n      logoutUser {\n        wasSuccessful\n        userError\n      }\n    }\n  ";

function logoutUser(_x) {
  return _logoutUser.apply(this, arguments);
}

function _logoutUser() {
  _logoutUser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self) {
    var res, response, error, finalResponseObj, _res, data;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            finalResponseObj = {
              response: response,
              error: error
            };
            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__effects_client__["a" /* graphQlClient */].request(query);

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

/* harmony default export */ __webpack_exports__["a"] = (logoutUser);

/***/ }),

/***/ "./models/UserStore/userEffects/signUpCustomer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__effects_client__ = __webpack_require__("./effects/client.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var query = "\n    mutation registerCustomer($input: RegisterCustomerInput!) {\n      registerCustomer(input: $input) {\n        customer {\n          uuid\n          role\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";

function signUpCustomer(_x, _x2) {
  return _signUpCustomer.apply(this, arguments);
}

function _signUpCustomer() {
  _signUpCustomer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self, values) {
    var response, error, variables, finalResponseObj;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
            return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__effects_client__["a" /* graphQlClient */].request(query, variables).then(function (res) {
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

/* harmony default export */ __webpack_exports__["a"] = (signUpCustomer);

/***/ }),

/***/ "./models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIStore__ = __webpack_require__("./models/UIStore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserStore__ = __webpack_require__("./models/UserStore/index.js");


var emittedStore;

function createStore() {
  var cookieJWTData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    UIStore: __WEBPACK_IMPORTED_MODULE_0__UIStore__["a" /* default */],
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: Object(__WEBPACK_IMPORTED_MODULE_1__UserStore__["a" /* default */])(cookieJWTData)
  };
}

function initStore(isServer) {
  var cookieJWTData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    emittedStore = createStore(cookieJWTData);
    return emittedStore;
  }

  if (!emittedStore) {
    emittedStore = createStore(cookieJWTData);
  }

  return emittedStore;
}

/***/ }),

/***/ "./pages/app/invoices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("./models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Invoices__ = __webpack_require__("./containers/Invoices.js");
var _class,
    _jsxFileName = "D:\\Marin\\real\\front-end\\src\\pages\\app\\invoices.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Invoices = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Invoices, _React$Component);

  _createClass(Invoices, null, [{
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

  function Invoices(props) {
    var _this;

    _classCallCheck(this, Invoices);

    _this = _possibleConstructorReturn(this, (Invoices.__proto__ || Object.getPrototypeOf(Invoices)).call(this, props));
    _this.store = Object(__WEBPACK_IMPORTED_MODULE_4__models__["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !_this.store.UserStore.isLoggedIn) {
      __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute('home');
    } // for debugging only!!!


    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !window._appStore) window._appStore = _this.store;
    _this.state = {
      userUUID: _this.store.UserStore.uuid
    };
    return _this;
  }

  _createClass(Invoices, [{
    key: "render",
    value: function render() {
      var userUUID = this.store.UserStore.uuid || this.state.userUUID;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_Invoices__["a" /* default */], {
        userUUID: userUUID,
        userRole: this.store.UserStore.userRole,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return Invoices;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withData__["a" /* default */])(Invoices));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

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

/***/ "./static/css/main.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./themeStyles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__("polished");
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

/***/ "./utils/Math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return round; });
/* unused harmony export padNumToDecimalString */
/* unused harmony export padStringToDecimalString */
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

/***/ "./utils/backEndTableUtils/DefaultVirtualTableCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\utils\\backEndTableUtils\\DefaultVirtualTableCell.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var VirtualCell = function VirtualCell(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (VirtualCell);

/***/ }),

/***/ "./utils/backEndTableUtils/NoDataCellComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\utils\\backEndTableUtils\\NoDataCellComponent.js";

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
    className: classes.myNoDataCellComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'NoDataCellComponentBase'
})(NoDataCellComponentBase));

/***/ }),

/***/ "./utils/backEndTableUtils/SelectFilterCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__ = __webpack_require__("material-ui/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__ = __webpack_require__("./components/MaterialCustomSelectInput/index.js");
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\utils\\backEndTableUtils\\SelectFilterCell.js";





var styles = function styles(theme) {
  return {
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    }
  };
};

var FilterCellBase = function FilterCellBase(_ref) {
  var filter = _ref.filter,
      onFilter = _ref.onFilter,
      classes = _ref.classes,
      selectInputItems = _ref.selectInputItems,
      fullWidth = _ref.fullWidth;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"], {
    className: classes.cell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__["a" /* default */], {
    className: classes.input,
    value: filter ? filter.value : '',
    onChange: function onChange(e) {
      return onFilter(e.target.value ? {
        value: e.target.value
      } : null);
    },
    placeholder: "Filter...",
    inputProps: {},
    fullWidth: fullWidth,
    selectInputItems: selectInputItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

var SelectFilterCell = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles, {
  name: 'SexFilterCell'
})(FilterCellBase);
/* harmony default export */ __webpack_exports__["a"] = (SelectFilterCell);

/***/ }),

/***/ "./utils/backEndTableUtils/TableComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\utils\\backEndTableUtils\\TableComponent.js";

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
    className: classes.myTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableComponent'
})(TableComponentBase));

/***/ }),

/***/ "./utils/backEndTableUtils/TableContainerComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = "D:\\Marin\\real\\front-end\\src\\utils\\backEndTableUtils\\TableContainerComponent.js";

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
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.myTableContainer, className),
    id: "myTableContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableContainerComponent'
})(TableContainerBase));

/***/ }),

/***/ "./utils/backEndTableUtils/tableSortingUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compareNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var compareDate = function compareDate(a, b) {
  var Date1;
  var Date2;

  if (typeof a === 'string') {
    Date1 = a;
  } else {
    Date1 = a;
  }

  if (typeof b === 'string') {
    Date2 = b;
  } else {
    Date2 = b;
  }

  if (Date1 === Date2) return 0;
  if (__WEBPACK_IMPORTED_MODULE_0_moment___default()(Date1).isBefore(Date2)) return -1;
  return 1;
};
var compareNumber = function compareNumber(a, b) {
  var Num1;
  var Num2;

  if (typeof a === 'string') {
    Num1 = a.startsWith('$') ? Number(a.substring(1).replace(/,/g, '')) : Number(a.replace(/,/g, ''));
  } else {
    Num1 = a;
  }

  if (typeof b === 'string') {
    Num2 = b.startsWith('$') ? Number(b.substring(1).replace(/,/g, '')) : Number(b.replace(/,/g, ''));
  } else {
    Num2 = b;
  }

  if (Num1 === Num2) return 0;
  if (Num1 > Num2) return 1;
  return -1;
};

/***/ }),

/***/ "./utils/debounce.js":
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

/***/ "./utils/getCookie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (getCookie);

/***/ }),

/***/ "./utils/jwtUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWTPaylodeDecode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64__ = __webpack_require__("urlsafe-base64");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urlsafe_base64__);


function JWTPaylodeDecode(jwtData) {
  if (!jwtData || typeof jwtData !== 'string') {
    throw new Error("function \"decodeJWTPayload\" must recieve a url-safe base-64 encoded argument\nRecieved: ".concat(jwtData));
  }

  var tempPayload = jwtData.split('.')[1];
  var payloadBuffer = __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64___default.a.decode(tempPayload);
  var payload = JSON.parse(payloadBuffer.toString());
  return payload;
}



/***/ }),

/***/ "./utils/stringUtils.js":
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/app/invoices.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@devexpress/dx-react-grid":
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid");

/***/ }),

/***/ "@devexpress/dx-react-grid-material-ui":
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid-material-ui");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/Assignment":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "@material-ui/icons/Close":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Contacts":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Contacts");

/***/ }),

/***/ "@material-ui/icons/Delete":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/Home":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/RecentActors":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RecentActors");

/***/ }),

/***/ "@material-ui/icons/RemoveRedEye":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),

/***/ "@material-ui/icons/Settings":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/SupervisorAccount":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "chance":
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "debounce":
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "email-validator":
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),

/***/ "graphql-request":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "is-browser":
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "material-ui-pickers/utils/MuiPickersUtilsProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),

/***/ "material-ui-pickers/utils/moment-utils":
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Avatar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),

/***/ "material-ui/Button":
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),

/***/ "material-ui/Chip":
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),

/***/ "material-ui/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),

/***/ "material-ui/Dialog":
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),

/***/ "material-ui/Divider":
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),

/***/ "material-ui/Drawer":
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),

/***/ "material-ui/Form":
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),

/***/ "material-ui/Grid":
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),

/***/ "material-ui/Hidden":
/***/ (function(module, exports) {

module.exports = require("material-ui/Hidden");

/***/ }),

/***/ "material-ui/IconButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ "material-ui/Input":
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/Menu":
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),

/***/ "material-ui/Menu/MenuItem":
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/MenuItem");

/***/ }),

/***/ "material-ui/Portal":
/***/ (function(module, exports) {

module.exports = require("material-ui/Portal");

/***/ }),

/***/ "material-ui/Radio":
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),

/***/ "material-ui/Select":
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),

/***/ "material-ui/Snackbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),

/***/ "material-ui/Switch":
/***/ (function(module, exports) {

module.exports = require("material-ui/Switch");

/***/ }),

/***/ "material-ui/Table":
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),

/***/ "material-ui/TextField":
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),

/***/ "material-ui/Toolbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),

/***/ "material-ui/Tooltip":
/***/ (function(module, exports) {

module.exports = require("material-ui/Tooltip");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/colors/blue":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),

/***/ "material-ui/colors/red":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "papaparse":
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),

/***/ "polished":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-detect-offline":
/***/ (function(module, exports) {

module.exports = require("react-detect-offline");

/***/ }),

/***/ "react-form":
/***/ (function(module, exports) {

module.exports = require("react-form");

/***/ }),

/***/ "react-icons/lib/fa":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),

/***/ "react-icons/lib/md":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md");

/***/ }),

/***/ "react-input-mask":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "react-jss":
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "react-sizes":
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "react-spinners":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "urlsafe-base64":
/***/ (function(module, exports) {

module.exports = require("urlsafe-base64");

/***/ }),

/***/ "uuid/v4":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=invoices.js.map