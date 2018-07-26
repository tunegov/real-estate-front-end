webpackHotUpdate(6,{

/***/ "../node_modules/faker/index.js":
/***/ (function(module, exports, __webpack_require__) {

// since we are requiring the top level of faker, load all locales by default
var Faker = __webpack_require__("../node_modules/faker/lib/index.js");
var faker = new Faker({ locales: __webpack_require__("../node_modules/faker/lib/locales.js") });
module['exports'] = faker;

/***/ }),

/***/ "../node_modules/material-ui/Dialog/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialog = __webpack_require__("../node_modules/material-ui/Dialog/Dialog.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dialog).default;
  }
});

var _DialogActions = __webpack_require__("../node_modules/material-ui/Dialog/DialogActions.js");

Object.defineProperty(exports, 'DialogActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogActions).default;
  }
});

var _DialogTitle = __webpack_require__("../node_modules/material-ui/Dialog/DialogTitle.js");

Object.defineProperty(exports, 'DialogTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogTitle).default;
  }
});

var _DialogContent = __webpack_require__("../node_modules/material-ui/Dialog/DialogContent.js");

Object.defineProperty(exports, 'DialogContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContent).default;
  }
});

var _DialogContentText = __webpack_require__("../node_modules/material-ui/Dialog/DialogContentText.js");

Object.defineProperty(exports, 'DialogContentText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContentText).default;
  }
});

var _withMobileDialog = __webpack_require__("../node_modules/material-ui/Dialog/withMobileDialog.js");

Object.defineProperty(exports, 'withMobileDialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withMobileDialog).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../node_modules/react-spinners/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/react-spinners/dist/index.js");

/***/ }),

/***/ "./components/FullScreenLoader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__ = __webpack_require__("../node_modules/material-ui/Portal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js";

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

var FullScreenLoader = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FullScreenLoader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(FullScreenLoader);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js");
  reactHotLoader.register(FullScreenLoader, "FullScreenLoader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MenuDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("../node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__ = __webpack_require__("../node_modules/material-ui/colors/blue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__ = __webpack_require__("../node_modules/material-ui/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List__ = __webpack_require__("../node_modules/material-ui/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__ = __webpack_require__("../node_modules/@material-ui/icons/RemoveRedEye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MenuDialogBox/index.js";

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

var MenuDialoBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MenuDialoBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(MenuDialoBox);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MenuDialogBox/index.js");
  reactHotLoader.register(MenuDialoBox, "MenuDialoBox", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MenuDialogBox/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MenuDialogBox/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/AgentsTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chance__ = __webpack_require__("../node_modules/chance/chance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_faker__ = __webpack_require__("../node_modules/faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_AgentsTable__ = __webpack_require__("./components/AgentsTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agents {\n    agents {\n      uuid\n      firstName\n      lastName\n      email\n      role\n      agent {\n        profilePicURL\n        branch\n        mobileNumber\n        officeNumber\n        areaOfFocus\n      }\n    }\n  }\n"]);

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var chance = new __WEBPACK_IMPORTED_MODULE_3_chance___default.a();
var Loader = __WEBPACK_IMPORTED_MODULE_7_react_spinners__["DotLoader"];
var agentsQuery = __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_templateObject);

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

var AgentsTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AgentsTableContainer, _Component);

  function AgentsTableContainer(props) {
    var _this;

    _classCallCheck(this, AgentsTableContainer);

    _this = _possibleConstructorReturn(this, (AgentsTableContainer.__proto__ || Object.getPrototypeOf(AgentsTableContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createRows", {
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
            name: Object(__WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__["a" /* capitalize */])("".concat(firstName, " ").concat(lastName)),
            email: email,
            areaOfFocus: areaOfFocus,
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

  _createClass(AgentsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          rows = _state.rows;

      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"], {
        query: agentsQuery,
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        console.log(data);
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
            lineNumber: 138
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
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
              lineNumber: 156
            }
          }, "We're sorry. There was an error processing your request.");
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, tableIsLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.progressWrapper,
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        })) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_AgentsTable__["a" /* default */], _extends({}, rest, {
          onMount: function onMount() {
            return tableIsLoading ? _this2.setState({
              tableIsLoading: false
            }) : null;
          },
          columns: columns,
          rows: _this2.createRows(data.agents),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        })));
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

  return AgentsTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(AgentsTableContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(chance, "chance", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(agentsQuery, "agentsQuery", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(columns, "columns", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(AgentsTableContainer, "AgentsTableContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AgentsTable.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.2f81af3c1f935c7e5a7d.hot-update.js.map