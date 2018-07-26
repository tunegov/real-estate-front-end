webpackHotUpdate(6,{

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
//# sourceMappingURL=6.aa647fc4d6875a5d0f3c.hot-update.js.map