webpackHotUpdate(7,{

/***/ "./containers/AdminAreaDealsTableContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_papaparse__ = __webpack_require__("../node_modules/papaparse/papaparse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AdminAreaDealsTable__ = __webpack_require__("./components/AdminAreaDealsTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_debounce__ = __webpack_require__("./utils/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_Math__ = __webpack_require__("./utils/Math.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  name: 'dealID',
  title: 'Deal ID'
}, {
  name: 'date',
  title: 'Date'
}, {
  name: 'agentName',
  title: 'Agent Name'
}, {
  name: 'agentType',
  title: 'Agent Type'
}, {
  name: 'coBrokeringAgent',
  title: 'Co-Brokering Agent'
}, {
  name: 'dealType',
  title: 'Deal Type'
}, {
  name: 'clientName',
  title: 'Client Name'
}, {
  name: 'clientEmail',
  title: 'Client Email'
}, {
  name: 'propertyAddress',
  title: 'Property Address'
}, {
  name: 'propertyCity',
  title: 'Property City'
}, {
  name: 'propertyState',
  title: 'Property State'
}, {
  name: 'managementOrCobrokeCompany',
  title: 'Mgmt/Co-Broke Co.'
}, {
  name: 'rentOrSalePrice',
  title: 'Rent/Sale Price'
}, {
  name: 'deductionsTotal',
  title: 'Deductions Total'
}, {
  name: 'paymentsTotal',
  title: 'Payments Total'
}, {
  name: 'netPaymentsTotal',
  title: 'Net Payments Total'
}, {
  name: 'bonusPercentageAddedByAdmin',
  title: "Agent's Bonus %"
}, {
  name: 'netAgentCommission',
  title: 'Net Agent Commission'
}, {
  name: 'netCompanyCommission',
  title: 'Net Company Commission'
}, {
  name: 'status',
  title: 'Status'
}, {
  name: 'view',
  title: 'View'
}];

var DealsTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsTableContainer, _Component);

  function DealsTableContainer(props) {
    var _this;

    _classCallCheck(this, DealsTableContainer);

    _this = _possibleConstructorReturn(this, (DealsTableContainer.__proto__ || Object.getPrototypeOf(DealsTableContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.deals.map(function (deal) {
          var dealID = deal.dealID,
              date = deal.date,
              agentName = deal.agentName,
              agentType = deal.agentType,
              leadSource = deal.leadSource,
              dealType = deal.dealType,
              propertyAddress = deal.propertyAddress,
              state = deal.state,
              city = deal.city,
              apartmentNumber = deal.apartmentNumber,
              managementOrCobrokeCompany = deal.managementOrCobrokeCompany,
              price = deal.price,
              clientName = deal.clientName,
              clientEmail = deal.clientEmail,
              paymentsTotal = deal.paymentsTotal,
              deductionsTotal = deal.deductionsTotal,
              total = deal.total,
              status = deal.status,
              bonusPercentageAddedByAdmin = deal.bonusPercentageAddedByAdmin,
              netAgentCommission = deal.netAgentCommission,
              netCompanyCommission = deal.netCompanyCommission,
              deductionItems = deal.deductionItems;
          var coBrokeAgents = deductionItems && deductionItems.filter(function (v) {
            return v.deductionType === 'Co-Brokering Split' && v.agentID;
          }).map(function (v) {
            return v.agentID;
          }).join(', ');
          return {
            dealID: dealID,
            date: __WEBPACK_IMPORTED_MODULE_4_moment___default()(date).format('MM/DD/YYYY'),
            agentName: agentName,
            agentType: "".concat(agentType, "%"),
            dealType: dealType,
            clientName: clientName,
            clientEmail: clientEmail,
            propertyAddress: propertyAddress,
            propertyCity: city,
            propertyState: state,
            managementOrCobrokeCompany: managementOrCobrokeCompany,
            rentOrSalePrice: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(price || 0).toLocaleString())),
            deductionsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(deductionsTotal || 0).toLocaleString())),
            paymentsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(paymentsTotal || 0).toLocaleString())),
            netPaymentsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(total || 0).toLocaleString())),
            bonusPercentageAddedByAdmin: status === 'pending' ? undefined : "%".concat(bonusPercentageAddedByAdmin || 0),
            netAgentCommission: status === 'pending' ? undefined : "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(netAgentCommission || 0).toLocaleString())),
            netCompanyCommission: status === 'pending' ? undefined : "$".concat(Object(__WEBPACK_IMPORTED_MODULE_9__utils_Math__["a" /* padStringToDecimalString */])(Number(netCompanyCommission || 0).toLocaleString())),
            coBrokeringAgent: coBrokeAgents,
            status: Object(__WEBPACK_IMPORTED_MODULE_8__utils_stringUtils__["a" /* capitalize */])(status),
            view: {
              type: 'action',
              onClick: function onClick() {
                return Object(__WEBPACK_IMPORTED_MODULE_7__utils_debounce__["a" /* default */])(_this.props.openDealsViewDialogBox.bind(null, dealID, status), 1000, true)();
              }
            }
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "convertDealsToCSV", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = _this.props.deals;
        var selection = _this.state.selection;
        console.log(selection);
        console.log(deals);
        if (!selection || !selection.length) return;
        var csvContent = __WEBPACK_IMPORTED_MODULE_5_papaparse___default.a.unparse(deals.filter(function (deal) {
          return selection.includes(deal.dealID);
        }).map(function (deal) {
          return _objectSpread({}, deal, {
            date: __WEBPACK_IMPORTED_MODULE_4_moment___default()(deal.date).format('MM/DD/YYYY')
          });
        }), {
          header: true
        });

        if (_this._csvLink) {
          _this._csvLink.setAttribute('href', "data:text/csv;charset=utf-8,".concat(encodeURIComponent(csvContent)));

          _this._csvLink.setAttribute('download', 'deals_data.csv');

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

  _createClass(DealsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          selection = _state.selection;

      var _props = this.props,
          classes = _props.classes,
          small = _props.small,
          rest = _objectWithoutProperties(_props, ["classes", "small"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
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
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#f44336",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      })) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_AdminAreaDealsTable__["a" /* default */], _extends({}, rest, {
        changeSelection: this.changeSelection,
        selection: selection,
        convertDealsToCSV: this.convertDealsToCSV,
        small: small,
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: columns,
        rows: this.createRows(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
          lineNumber: 222
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

  return DealsTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(DealsTableContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js");
  reactHotLoader.register(columns, "columns", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js");
  reactHotLoader.register(DealsTableContainer, "DealsTableContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsTableContainer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.91953ffdd2ef320d8467.hot-update.js.map