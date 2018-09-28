webpackHotUpdate(10,{

/***/ "./containers/DealsSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value__ = __webpack_require__("../node_modules/set-value/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_set_value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DealsSummary__ = __webpack_require__("./components/DealsSummary/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__ = __webpack_require__("./constants/dealTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__ = __webpack_require__("./constants/graphDataModels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_currency__ = __webpack_require__("./utils/currency.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js";

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
      graphDealType = 'Res Sales';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
      graphDealType = 'Res Rentals';
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

var DealsSummaryContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsSummaryContainer, _Component);

  function DealsSummaryContainer(props) {
    var _this;

    _classCallCheck(this, DealsSummaryContainer);

    _this = _possibleConstructorReturn(this, (DealsSummaryContainer.__proto__ || Object.getPrototypeOf(DealsSummaryContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "returnNumberOfTotalDealsData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (!deals.length) return false;
        if (!deals.some(function (deal) {
          return deal.status !== 'pending';
        })) return false;
        var dealDataCounts = {
          'Res. Sales': 0,
          'Res. Rentals': 0,
          'Com. Sales': 0,
          'Com. Rentals': 0
        };

        if (deals && Array.isArray(deals)) {
          deals.forEach(function (deal) {
            if (deal.status === 'pending') return;

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
    Object.defineProperty(_assertThisInitialized(_this), "returnGrossDollarAmtOfTotalDealsData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (!deals.length) return false;
        if (!deals.some(function (deal) {
          return deal.status !== 'pending';
        })) return false;
        var dealDataCounts = {
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
                dealDataCounts['Com. Rentals'] += deal.total;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
                dealDataCounts['Com. Sales'] += deal.total;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
                dealDataCounts['Res. Rentals'] += deal.total;
                break;

              case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
                dealDataCounts['Res. Sales'] += deal.total;
                break;

              default:
            }
          });
        }

        var dealsGrossDollarData = [{
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
        return dealsGrossDollarData;
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
    Object.defineProperty(_assertThisInitialized(_this), "returnNetCurrentYearDealCommissions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return Object(__WEBPACK_IMPORTED_MODULE_8__utils_currency__["a" /* toLocaleCurrency */])(deals.reduce(function (grossAmount, deal) {
          if (deal.status === 'pending') return grossAmount;
          if (__WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year() !== __WEBPACK_IMPORTED_MODULE_2_moment___default()().year()) return grossAmount;
          return grossAmount += deal.netAgentCommission;
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
        var monthlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["a" /* returnMonthlyDealNumberDataContainer */])();
        var yearlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["c" /* returnNumberDealsDataContainer */])();
        var yearlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["d" /* returnYearlyDollarDealsDataContainer */])();
        deals.forEach(function (deal) {
          if (deal.status === 'pending') return;
          var month = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).month();
          var year = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year();
          var currentYear = __WEBPACK_IMPORTED_MODULE_2_moment___default()().year();
          var yearLimit = currentYear - 4; // monthlyDollarData

          if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDollarData)) {
            monthlyDollarData[returnGraphMonth(month)][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000);
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDollarData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000));
          } // monthlyDealNumberData


          if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDealNumberData)) {
            monthlyDealNumberData[returnGraphMonth(month)][returnGraphDealType(deal)] += 1;
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDealNumberData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), 1);
          }

          if (year >= yearLimit) {
            // yearlyDollarData
            if (get([year, returnGraphDealType(deal)], yearlyDollarData)) {
              yearlyDollarData[year][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000);
            } else {
              __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDollarData, "".concat(year, ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000));
            } // yearlyDealNumberData


            if (get([year, returnGraphDealType(deal)], yearlyDealNumberData)) {
              yearlyDealNumberData[year][returnGraphDealType(deal)] += 1;
            } else {
              __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDealNumberData, "".concat(year, ".").concat(returnGraphDealType(deal)), 1);
            }
          }
        });
        return {
          monthlyDollarData: monthlyDollarData,
          monthlyDealNumberData: monthlyDealNumberData,
          yearlyDollarData: yearlyDollarData,
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
            'Com Sales': data[month]['Com Sales'],
            'Com Rentals': data[month]['Com Rentals'],
            'Res Sales': data[month]['Res Sales'],
            'Res Rentals': data[month]['Res Rentals']
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
            monthlyDealNumberData = _this$returnMonthlyAn.monthlyDealNumberData,
            yearlyDollarData = _this$returnMonthlyAn.yearlyDollarData,
            yearlyDealNumberData = _this$returnMonthlyAn.yearlyDealNumberData;

        return {
          monthlyDealsDollarBarData: _this.generateDealsBarData(monthlyDollarData),
          monthlyDealsNumberBarData: _this.generateDealsBarData(monthlyDealNumberData),
          monthlyDealsDollarLineData: _this.generateDealsLineData(monthlyDollarData),
          monthlyDealsNumberLineData: _this.generateDealsLineData(monthlyDealNumberData),
          yearlyDealsDollarBarData: _this.generateDealsBarData(yearlyDollarData),
          yearlyDealsNumberBarData: _this.generateDealsBarData(yearlyDealNumberData),
          yearlyDealsDollarLineData: _this.generateDealsLineData(yearlyDollarData),
          yearlyDealsNumberLineData: _this.generateDealsLineData(yearlyDealNumberData)
        };
      }
    });
    _this.state = {};
    return _this;
  }

  _createClass(DealsSummaryContainer, [{
    key: "render",
    value: function render() {
      var deals = this.props.deals;

      var _returnAllGraphData = this.returnAllGraphData(deals),
          monthlyDealsDollarBarData = _returnAllGraphData.monthlyDealsDollarBarData,
          monthlyDealsNumberBarData = _returnAllGraphData.monthlyDealsNumberBarData,
          monthlyDealsDollarLineData = _returnAllGraphData.monthlyDealsDollarLineData,
          monthlyDealsNumberLineData = _returnAllGraphData.monthlyDealsNumberLineData,
          yearlyDealsDollarBarData = _returnAllGraphData.yearlyDealsDollarBarData,
          yearlyDealsNumberBarData = _returnAllGraphData.yearlyDealsNumberBarData,
          yearlyDealsDollarLineData = _returnAllGraphData.yearlyDealsDollarLineData,
          yearlyDealsNumberLineData = _returnAllGraphData.yearlyDealsNumberLineData;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DealsSummary__["a" /* default */], {
        userUUID: this.props.userUUID,
        numberOfTotalDealsData: this.returnNumberOfTotalDealsData(deals),
        grossDollarAmtOfTotalDealsData: this.returnGrossDollarAmtOfTotalDealsData(deals),
        numberOfPendingDeals: this.returnNumberOfPendingDeals(deals),
        grossDealCommissions: this.returnGrossDealCommissions(deals),
        netCurrentYearDealCommissions: this.returnNetCurrentYearDealCommissions(deals),
        monthlyDealsDollarBarData: monthlyDealsDollarBarData,
        monthlyDealsNumberBarData: monthlyDealsNumberBarData,
        monthlyDealsDollarLineData: monthlyDealsDollarLineData,
        monthlyDealsNumberLineData: monthlyDealsNumberLineData,
        yearlyDealsDollarBarData: yearlyDealsDollarBarData,
        yearlyDealsNumberBarData: yearlyDealsNumberBarData,
        yearlyDealsDollarLineData: yearlyDealsDollarLineData,
        yearlyDealsNumberLineData: yearlyDealsNumberLineData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
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

  return DealsSummaryContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = DealsSummaryContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(get, "get", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js");
  reactHotLoader.register(returnGraphDealType, "returnGraphDealType", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js");
  reactHotLoader.register(returnGraphMonth, "returnGraphMonth", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js");
  reactHotLoader.register(DealsSummaryContainer, "DealsSummaryContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsSummary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=10.89e8c8fa17a36d77324b.hot-update.js.map