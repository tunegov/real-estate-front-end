webpackHotUpdate(5,{

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

/***/ "./containers/AdminAreaAgentsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__ = __webpack_require__("../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_pickers__ = __webpack_require__("../node_modules/material-ui-pickers/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_TextField__ = __webpack_require__("../node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_ExpansionPanel__ = __webpack_require__("../node_modules/material-ui/ExpansionPanel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_ExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_ExpansionPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ExpandMore__ = __webpack_require__("../node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ExpandMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ExpandMore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_CheckCircle__ = __webpack_require__("../node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_CheckCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_CheckCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_CreateAgentDialogBox__ = __webpack_require__("./components/CreateAgentDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_MaterialCustomSelectInput__ = __webpack_require__("./components/MaterialCustomSelectInput/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__AdminAreaAgentsTableContainer__ = __webpack_require__("./containers/AdminAreaAgentsTableContainer.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agents {\n    agents {\n      uuid\n      firstName\n      lastName\n      email\n      role\n      lastLoginTimestamp\n      createdAt\n      agent {\n        profilePicURL\n        branch\n        state\n        mobileNumber\n        officeNumber\n        areaOfFocus\n        realEstateLicenseNumber\n        agentType\n      }\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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


























var styles = function styles(theme) {
  return {
    addAgentBtn: {},
    agentsSummaryBtn: {
      backgroundColor: '#2995F3',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2380D1'
      }
    },
    wrapper: {
      position: 'relative'
    },
    buttonsWrapper: {
      display: 'flex',
      marginBottom: '25px',
      justifyContent: 'center'
    },
    tableFormWrapper: {
      width: '100%',
      zIndex: 2,
      marginBottom: '20px'
    },
    paper: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      marginBottom: '20px'
    }),
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    formControlWrapperCenter: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      textAlign: 'center'
    },
    submitBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px'
    },
    submitBtnWrapper2: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2px'
    },
    searchBoxHeader: {
      marginBottom: '20px'
    },
    searchWrapper: {
      marginBottom: '25px'
    },
    heading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: 'rgba(0,0,0,.7)'
    },
    selectInput: {
      width: '167px',
      marginTop: '0px'
    },
    checkIcon: {
      marginLeft: '10px',
      color: 'green',
      fontSize: '.95rem'
    },
    snackBar: {
      marginTop: 30
    }
  };
};

var selectInputItems = [{
  label: ''
}, {
  label: 'Agent Name'
}, {
  label: 'Client Name'
}, {
  label: 'Agent ID'
}];
var searchTypes = {
  dateRange: 'dateRange',
  specific: 'specific'
};
var Loader = __WEBPACK_IMPORTED_MODULE_17_react_spinners__["DotLoader"];
var agentsQuery = __WEBPACK_IMPORTED_MODULE_15_graphql_tag___default()(_templateObject);

var AdminAreaAgentsContainer = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminAreaAgentsContainer, _Component);

  function AdminAreaAgentsContainer(props) {
    var _this;

    _classCallCheck(this, AdminAreaAgentsContainer);

    _this = _possibleConstructorReturn(this, (AdminAreaAgentsContainer.__proto__ || Object.getPrototypeOf(AdminAreaAgentsContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleCreateAgentModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(state) {
        var createAgentModalOpen = _this.state.createAgentModalOpen;

        _this.setState({
          createAgentModalOpen: typeof state === 'boolean' ? state : !createAgentModalOpen
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "confirmAgentCreated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newAgent) {
        _this.setState({
          createAgentModalOpen: false,
          snackbarOpen: true,
          snackbarText: 'Agent created successfully',
          addedAgents: _this.state.addedAgents.length ? _toConsumableArray(_this.state.addedAgents).concat([newAgent]) : [newAgent]
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
          snackbarUndoFunction: null
        });
      }
    });
    var today = __WEBPACK_IMPORTED_MODULE_7_moment___default()();
    _this.state = {
      createAgentModalOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedAgents: [],
      deletedAgentIDS: []
    };
    return _this;
  }

  _createClass(AdminAreaAgentsContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var createAgentModalOpen = this.state.createAgentModalOpen;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_react_apollo__["Query"], {
        query: agentsQuery,
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
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
            lineNumber: 194
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
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
              lineNumber: 213
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var intAgents = {};

        var allAgents = _toConsumableArray(data.agents).concat(_toConsumableArray(_this2.state.addedAgents));

        console.log(_this2.state.addedAgents);
        allAgents.forEach(function (agent) {
          if (!agent) return;
          intAgents[agent.uuid] = agent;
        });
        var uniqueAgents = [];
        Object.keys(intAgents).forEach(function (key) {
          uniqueAgents.push(intAgents[key]);
        });
        uniqueAgents = uniqueAgents.filter(function (agent) {
          return !_this2.state.deletedAgentIDS.includes(agent.uuid);
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.buttonsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
          variant: "raised",
          onClick: _this2.toggleCreateAgentModal,
          classes: {
            root: classes.agentsSummaryBtn
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }), "Create Agent"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__AdminAreaAgentsTableContainer__["a" /* default */], {
          agents: uniqueAgents,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_CreateAgentDialogBox__["a" /* default */], {
          open: createAgentModalOpen,
          toggleCreateAgentModal: _this2.toggleCreateAgentModal,
          confirmAgentCreated: _this2.confirmAgentCreated,
          currentUserRole: _this2.props.currentUserRole,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_Snackbar___default.a, {
          classes: {
            root: classes.snackBar
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          open: _this2.state.snackbarOpen,
          autoHideDuration: 6000,
          onClose: _this2.handleCloseSnackbar,
          contentProps: {
            'aria-describedby': 'snackbar-id'
          },
          message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            id: "snackbar-id",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 277
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
              lineNumber: 281
            }
          }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19_material_ui_IconButton___default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_Close___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }));
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

  return AdminAreaAgentsContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(AdminAreaAgentsContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(selectInputItems, "selectInputItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(searchTypes, "searchTypes", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(agentsQuery, "agentsQuery", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(AdminAreaAgentsContainer, "AdminAreaAgentsContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsContainer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = debounce;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(debounce, "debounce", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/debounce.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/debounce.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.add7e35858bbed2fc71a.hot-update.js.map