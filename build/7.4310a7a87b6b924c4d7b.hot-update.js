webpackHotUpdate(7,{

/***/ "./containers/AdminDealsSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value__ = __webpack_require__("../node_modules/set-value/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_set_value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AdminDealsSummary__ = __webpack_require__("./components/AdminDealsSummary/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__ = __webpack_require__("./constants/dealTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__ = __webpack_require__("./constants/graphDataModels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_currency__ = __webpack_require__("./utils/currency.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js";

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











var get = function get(p, o) {
  return p.reduce(function (xs, x) {
    return xs && xs[x] ? xs[x] : null;
  }, o);
};

var returnGraphDealType = function returnGraphDealType(deal) {
  var graphDealType;

  switch (deal.dealType) {
    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
      graphDealType = 'Com Rentals';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
      graphDealType = 'Com Sales';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
      graphDealType = 'Res Rentals';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
      graphDealType = 'Res Sales';
      break;

    default:
      return null;
  }

  return graphDealType;
};

var returnGraphMonth = function returnGraphMonth(month) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
};

var AdminDealsSummaryContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminDealsSummaryContainer, _Component);

  function AdminDealsSummaryContainer(props) {
    var _this;

    _classCallCheck(this, AdminDealsSummaryContainer);

    _this = _possibleConstructorReturn(this, (AdminDealsSummaryContainer.__proto__ || Object.getPrototypeOf(AdminDealsSummaryContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "returnNumberOfTotalDealsData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (!deals.length) return false;
        var dealDataCounts = {
          'Res. Sales': 0,
          'Res. Rentals': 0,
          'Com. Sales': 0,
          'Com. Rentals': 0
        };

        if (deals && Array.isArray(deals)) {
          deals.forEach(function (deal) {
            switch (deal.dealType) {
              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
                dealDataCounts['Com. Rentals'] += 1;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
                dealDataCounts['Com. Sales'] += 1;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
                dealDataCounts['Res. Rentals'] += 1;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
                dealDataCounts['Res. Sales'] += 1;
                break;

              default:
            }
          });
        }

        var dealData = [{
          id: 'Res. Sales',
          label: 'Res. Sales',
          value: dealDataCounts['Res. Sales'] || 0
        }, {
          id: 'Res. Rentals',
          label: 'Res. Rentals',
          value: dealDataCounts['Res. Rentals'] || 0
        }, {
          id: 'Com. Sales',
          label: 'Com. Sales',
          value: dealDataCounts['Com. Sales'] || 0
        }, {
          id: 'Com. Rentals',
          label: 'Com. Rentals',
          value: dealDataCounts['Com. Rentals'] || 0
        }];
        return dealData;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnDollarAmtOfTotalDealsData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (!deals.length) return false;
        var grossDealDataCounts = {
          'Res. Sales': 0,
          'Res. Rentals': 0,
          'Com. Sales': 0,
          'Com. Rentals': 0
        };
        var netDealDataCounts = {
          'Res. Sales': 0,
          'Res. Rentals': 0,
          'Com. Sales': 0,
          'Com. Rentals': 0
        };

        if (deals) {
          deals.forEach(function (deal) {
            if (deal.status === 'pending') return;

            switch (deal.dealType) {
              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
                grossDealDataCounts['Com. Rentals'] += deal.total;
                netDealDataCounts['Com. Rentals'] += deal.netCompanyCommission;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
                grossDealDataCounts['Com. Sales'] += deal.total;
                netDealDataCounts['Com. Sales'] += deal.netCompanyCommission;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
                grossDealDataCounts['Res. Rentals'] += deal.total;
                netDealDataCounts['Res. Rentals'] += deal.netCompanyCommission;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
                grossDealDataCounts['Res. Sales'] += deal.total;
                netDealDataCounts['Res. Sales'] += deal.netCompanyCommission;
                break;

              default:
            }
          });
        }

        var grossDealsDollarData = [{
          id: 'Res. Sales',
          label: 'Res. Sales',
          value: grossDealDataCounts['Res. Sales'] || 0
        }, {
          id: 'Res. Rentals',
          label: 'Res. Rentals',
          value: grossDealDataCounts['Res. Rentals'] || 0
        }, {
          id: 'Com. Sales',
          label: 'Com. Sales',
          value: grossDealDataCounts['Com. Sales'] || 0
        }, {
          id: 'Com. Rentals',
          label: 'Com. Rentals',
          value: grossDealDataCounts['Com. Rentals'] || 0
        }];
        var netDealsDollarData = [{
          id: 'Res. Sales',
          label: 'Res. Sales',
          value: netDealDataCounts['Res. Sales'] || 0
        }, {
          id: 'Res. Rentals',
          label: 'Res. Rentals',
          value: netDealDataCounts['Res. Rentals'] || 0
        }, {
          id: 'Com. Sales',
          label: 'Com. Sales',
          value: netDealDataCounts['Com. Sales'] || 0
        }, {
          id: 'Com. Rentals',
          label: 'Com. Rentals',
          value: netDealDataCounts['Com. Rentals'] || 0
        }];
        return {
          grossDealsDollarData: grossDealsDollarData,
          netDealsDollarData: netDealsDollarData
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnNumberOfPendingDeals", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var numOfPendingDeals = deals.reduce(function (pendingDeals, deal) {
          if (deal.status === 'pending') {
            return pendingDeals += 1;
          }

          return pendingDeals;
        }, 0);
        return numOfPendingDeals || 0;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnGrossDealCommissions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return Object(__WEBPACK_IMPORTED_MODULE_8__utils_currency__["a" /* toLocaleCurrency */])(deals.reduce(function (grossAmount, deal) {
          if (deal.status === 'pending') return grossAmount;
          return grossAmount += deal.total;
        }, 0));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnNetDealCommissions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return Object(__WEBPACK_IMPORTED_MODULE_8__utils_currency__["a" /* toLocaleCurrency */])(deals.reduce(function (grossAmount, deal) {
          if (deal.status === 'pending') return grossAmount;
          return grossAmount += deal.netCompanyCommission;
        }, 0));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnNetCurrentYearDealCommissions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return Object(__WEBPACK_IMPORTED_MODULE_8__utils_currency__["a" /* toLocaleCurrency */])(deals.reduce(function (grossAmount, deal) {
          if (deal.status === 'pending') return grossAmount;
          if (__WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year() !== __WEBPACK_IMPORTED_MODULE_2_moment___default()().year()) return grossAmount;
          return grossAmount += deal.netCompanyCommission;
        }, 0));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnMonthlyAndYearlyDealsData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var monthlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["b" /* returnMonthlyDollarDataContainer */])();
        var grossMonthlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["b" /* returnMonthlyDollarDataContainer */])();
        var monthlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["a" /* returnMonthlyDealNumberDataContainer */])();
        var yearlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["c" /* returnNumberDealsDataContainer */])();
        var grossYearlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["c" /* returnNumberDealsDataContainer */])();
        var yearlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["d" /* returnYearlyDollarDealsDataContainer */])();
        deals.forEach(function (deal) {
          if (deal.status === 'pending') return;
          var month = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).month();
          var year = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year();
          var currentYear = __WEBPACK_IMPORTED_MODULE_2_moment___default()().year();
          var yearLimit = currentYear - 4; // gross monthlyDollarData

          if (get([returnGraphMonth(month), returnGraphDealType(deal)], grossMonthlyDollarData)) {
            grossMonthlyDollarData[returnGraphMonth(month)][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.total / 1000);
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(grossMonthlyDollarData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.total / 1000));
          } // net monthlyDollarData


          if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDollarData)) {
            monthlyDollarData[returnGraphMonth(month)][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netCompanyCommission / 1000);
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDollarData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netCompanyCommission / 1000));
          } // monthlyDealNumberData


          if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDealNumberData)) {
            monthlyDealNumberData[returnGraphMonth(month)][returnGraphDealType(deal)] += 1;
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDealNumberData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), 1);
          }

          if (year >= yearLimit) {
            // gross yearlyDollarData
            if (get([year, returnGraphDealType(deal)], yearlyDollarData)) {
              grossYearlyDollarData[year][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.total / 1000);
            } else {
              __WEBPACK_IMPORTED_MODULE_3_set_value___default()(grossYearlyDollarData, "".concat(year, ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.total / 1000));
            } // yearlyDollarData


            if (get([year, returnGraphDealType(deal)], yearlyDollarData)) {
              yearlyDollarData[year][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netCompanyCommission / 1000);
            } else {
              __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDollarData, "".concat(year, ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netCompanyCommission / 1000));
            } // yearlyDealNumberData


            if (get([year, returnGraphDealType(deal)], yearlyDealNumberData)) {
              yearlyDealNumberData[year][returnGraphDealType(deal)] += 1;
            } else {
              __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDealNumberData, "".concat(year, ".").concat(returnGraphDealType(deal)), 1);
            }
          }
        });
        console.log(grossYearlyDollarData);
        return {
          monthlyDollarData: monthlyDollarData,
          grossMonthlyDollarData: grossMonthlyDollarData,
          monthlyDealNumberData: monthlyDealNumberData,
          yearlyDollarData: yearlyDollarData,
          grossYearlyDollarData: grossYearlyDollarData,
          yearlyDealNumberData: yearlyDealNumberData
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "generateDealsBarData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        return Object.keys(data).map(function (month) {
          return {
            month: month,
            'Com Sales': Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(data[month]['Com Sales']),
            'Com Rentals': Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(data[month]['Com Rentals']),
            'Res Sales': Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(data[month]['Res Sales']),
            'Res Rentals': Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(data[month]['Res Rentals'])
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "generateDealsLineData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var types = ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'];
        return types.map(function (id) {
          return {
            id: id,
            data: Object.keys(data).map(function (month) {
              return {
                x: month,
                y: data[month][id]
              };
            })
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnAllGraphData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deals) {
        var _this$returnMonthlyAn = _this.returnMonthlyAndYearlyDealsData(deals),
            monthlyDollarData = _this$returnMonthlyAn.monthlyDollarData,
            grossMonthlyDollarData = _this$returnMonthlyAn.grossMonthlyDollarData,
            monthlyDealNumberData = _this$returnMonthlyAn.monthlyDealNumberData,
            yearlyDollarData = _this$returnMonthlyAn.yearlyDollarData,
            grossYearlyDollarData = _this$returnMonthlyAn.grossYearlyDollarData,
            yearlyDealNumberData = _this$returnMonthlyAn.yearlyDealNumberData;

        return {
          monthlyDealsDollarBarData: _this.generateDealsBarData(monthlyDollarData),
          grossMonthlyDealsDollarBarData: _this.generateDealsBarData(grossMonthlyDollarData),
          monthlyDealsNumberBarData: _this.generateDealsBarData(monthlyDealNumberData),
          monthlyDealsDollarLineData: _this.generateDealsLineData(monthlyDollarData),
          grossMonthlyDealsDollarLineData: _this.generateDealsLineData(grossMonthlyDollarData),
          monthlyDealsNumberLineData: _this.generateDealsLineData(monthlyDealNumberData),
          yearlyDealsDollarBarData: _this.generateDealsBarData(yearlyDollarData),
          grossYearlyDealsDollarBarData: _this.generateDealsBarData(grossYearlyDollarData),
          yearlyDealsNumberBarData: _this.generateDealsBarData(yearlyDealNumberData),
          yearlyDealsDollarLineData: _this.generateDealsLineData(yearlyDollarData),
          grossYearlyDealsDollarLineData: _this.generateDealsLineData(grossYearlyDollarData),
          yearlyDealsNumberLineData: _this.generateDealsLineData(yearlyDealNumberData)
        };
      }
    });
    _this.state = {};
    return _this;
  }

  _createClass(AdminDealsSummaryContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          deals = _props.deals,
          userUUID = _props.userUUID;

      var _returnAllGraphData = this.returnAllGraphData(deals),
          monthlyDealsDollarBarData = _returnAllGraphData.monthlyDealsDollarBarData,
          grossMonthlyDealsDollarBarData = _returnAllGraphData.grossMonthlyDealsDollarBarData,
          monthlyDealsNumberBarData = _returnAllGraphData.monthlyDealsNumberBarData,
          monthlyDealsDollarLineData = _returnAllGraphData.monthlyDealsDollarLineData,
          grossMonthlyDealsDollarLineData = _returnAllGraphData.grossMonthlyDealsDollarLineData,
          monthlyDealsNumberLineData = _returnAllGraphData.monthlyDealsNumberLineData,
          yearlyDealsDollarBarData = _returnAllGraphData.yearlyDealsDollarBarData,
          grossYearlyDealsDollarBarData = _returnAllGraphData.grossYearlyDealsDollarBarData,
          yearlyDealsNumberBarData = _returnAllGraphData.yearlyDealsNumberBarData,
          yearlyDealsDollarLineData = _returnAllGraphData.yearlyDealsDollarLineData,
          grossYearlyDealsDollarLineData = _returnAllGraphData.grossYearlyDealsDollarLineData,
          yearlyDealsNumberLineData = _returnAllGraphData.yearlyDealsNumberLineData;

      var _returnDollarAmtOfTot = this.returnDollarAmtOfTotalDealsData(deals),
          grossDealsDollarData = _returnDollarAmtOfTot.grossDealsDollarData,
          netDealsDollarData = _returnDollarAmtOfTot.netDealsDollarData;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_AdminDealsSummary__["a" /* default */], {
        userUUID: userUUID,
        numberOfTotalDealsData: this.returnNumberOfTotalDealsData(deals),
        grossDollarAmtOfTotalDealsData: grossDealsDollarData,
        netDollarAmtOfTotalDealsData: netDealsDollarData,
        numberOfPendingDeals: this.returnNumberOfPendingDeals(deals),
        grossDealCommissions: this.returnGrossDealCommissions(deals),
        netDealCommissions: this.returnNetDealCommissions(deals),
        netCurrentYearDealCommissions: this.returnNetCurrentYearDealCommissions(deals),
        monthlyDealsDollarBarData: monthlyDealsDollarBarData,
        grossMonthlyDealsDollarBarData: grossMonthlyDealsDollarBarData,
        monthlyDealsNumberBarData: monthlyDealsNumberBarData,
        monthlyDealsDollarLineData: monthlyDealsDollarLineData,
        grossMonthlyDealsDollarLineData: grossMonthlyDealsDollarLineData,
        monthlyDealsNumberLineData: monthlyDealsNumberLineData,
        yearlyDealsDollarBarData: yearlyDealsDollarBarData,
        grossYearlyDealsDollarBarData: grossYearlyDealsDollarBarData,
        yearlyDealsNumberBarData: yearlyDealsNumberBarData,
        yearlyDealsDollarLineData: yearlyDealsDollarLineData,
        grossYearlyDealsDollarLineData: grossYearlyDealsDollarLineData,
        yearlyDealsNumberLineData: yearlyDealsNumberLineData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
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

  return AdminDealsSummaryContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = AdminDealsSummaryContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get, "get", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js");
  reactHotLoader.register(returnGraphDealType, "returnGraphDealType", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js");
  reactHotLoader.register(returnGraphMonth, "returnGraphMonth", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js");
  reactHotLoader.register(AdminDealsSummaryContainer, "AdminDealsSummaryContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminDealsSummary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.4310a7a87b6b924c4d7b.hot-update.js.map