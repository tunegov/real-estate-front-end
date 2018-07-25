webpackHotUpdate(6,{

/***/ "./containers/AdminAreaAgentsTableContainer.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AdminAreaAgentsTable__ = __webpack_require__("./components/AdminAreaAgentsTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_debounce__ = __webpack_require__("./utils/debounce.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js";

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










var chance = new __WEBPACK_IMPORTED_MODULE_3_chance___default.a();

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
  name: 'realEstateLicenseNumber',
  title: 'RE License Number'
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
  name: 'state',
  title: 'State'
}, {
  name: 'lastLoginTimestamp',
  title: 'Last Login Time'
}, {
  name: 'createdAt',
  title: 'Created At'
}, {
  name: 'view',
  title: 'View Profile'
}];

var AdminAreaAgentsTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminAreaAgentsTableContainer, _Component);

  function AdminAreaAgentsTableContainer(props) {
    var _this;

    _classCallCheck(this, AdminAreaAgentsTableContainer);

    _this = _possibleConstructorReturn(this, (AdminAreaAgentsTableContainer.__proto__ || Object.getPrototypeOf(AdminAreaAgentsTableContainer)).call(this, props));
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
              lastLoginTimestamp = agent.lastLoginTimestamp,
              createdAt = agent.createdAt;
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
            name: Object(__WEBPACK_IMPORTED_MODULE_7__utils_stringUtils__["a" /* capitalize */])("".concat(firstName, " ").concat(lastName)),
            email: email,
            areaOfFocus: areaOfFocus && areaOfFocus.length || 'none',
            mobileNumber: mobileNumber,
            companyNumberAndExt: officeNumber,
            branch: branch,
            state: state,
            lastLoginTimestamp: lastLoginTimestamp ? __WEBPACK_IMPORTED_MODULE_5_moment___default()(lastLoginTimestamp).format('MM/DD/YYYY, h:mm:ss a') : '',
            createdAt: createdAt ? __WEBPACK_IMPORTED_MODULE_5_moment___default()(createdAt).format('MM/DD/YYYY, h:mm:ss a') : undefined,
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

  _createClass(AdminAreaAgentsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          rows = _state.rows;

      var _props = this.props,
          classes = _props.classes,
          agents = _props.agents,
          rest = _objectWithoutProperties(_props, ["classes", "agents"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_AdminAreaAgentsTable__["a" /* default */], _extends({}, rest, {
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: columns,
        rows: this.createRows(agents),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
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

  return AdminAreaAgentsTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(AdminAreaAgentsTableContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(chance, "chance", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js");
  reactHotLoader.register(columns, "columns", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js");
  reactHotLoader.register(AdminAreaAgentsTableContainer, "AdminAreaAgentsTableContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaAgentsTableContainer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.beab364b55d8987bacb6.hot-update.js.map