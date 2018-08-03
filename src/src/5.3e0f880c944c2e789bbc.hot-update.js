webpackHotUpdate(5,{

/***/ "./components/AdminDealsSummary/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nivo_pie__ = __webpack_require__("../node_modules/@nivo/pie/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nivo_bar__ = __webpack_require__("../node_modules/@nivo/bar/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nivo_line__ = __webpack_require__("../node_modules/@nivo/line/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes__ = __webpack_require__("../node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance__ = __webpack_require__("../node_modules/chance/chance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_toggle_button__ = __webpack_require__("../node_modules/react-toggle-button/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney__ = __webpack_require__("../node_modules/@material-ui/icons/AttachMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help__ = __webpack_require__("../node_modules/@material-ui/icons/Help.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__StatNumberBox__ = __webpack_require__("./components/StatNumberBox/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js";

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
















var chance = new __WEBPACK_IMPORTED_MODULE_8_chance___default.a();

var styles = function styles(theme) {
  var _graphWrapper;

  return {
    root: {
      maxWidth: '100%',
      fontFamily: theme.typography.fontFamily
    },
    graphWrapper: {
      position: 'relative',
      padding: '10px',
      height: '500px',
      maxHeight: '100%',
      maxWidth: '100%',
      backgroundColor: '#fff',
      fontSize: '12px',
      boxShadow: theme.shadows[1],
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center'
    },
    graphWrapper2: (_graphWrapper = {
      position: 'relative',
      padding: '10px',
      height: '500px'
    }, _defineProperty(_graphWrapper, theme.breakpoints.down('sm'), {
      height: '670px'
    }), _defineProperty(_graphWrapper, "maxHeight", '100%'), _defineProperty(_graphWrapper, "maxWidth", '100%'), _defineProperty(_graphWrapper, "backgroundColor", '#fff'), _defineProperty(_graphWrapper, "fontSize", '12px'), _defineProperty(_graphWrapper, "boxShadow", theme.shadows[1]), _defineProperty(_graphWrapper, "borderRadius", '5px'), _defineProperty(_graphWrapper, "display", 'flex'), _defineProperty(_graphWrapper, "justifyContent", 'center'), _graphWrapper),
    graphControlsWrapper: {
      position: 'absolute',
      padding: '6px 80px',
      bottom: '0',
      alignText: 'center',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    toggleWrapper: {
      marginRight: '20px'
    },
    graphControlsLabel: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
      color: 'rgba(0,0,0,.8)'
    },
    graphTitle: {
      position: 'absolute',
      top: 0,
      padding: '15px 10px',
      fontSize: '16px',
      fontWeight: 500,
      alignText: 'center',
      color: 'rgba(0,0,0,.7)',
      textDecoration: 'underline',
      transition: 'all .3s ease-in-out'
    },
    statNumberBoxWrapper: {
      width: '50%'
    },
    statBoxQuestionIcon: {
      fontSize: '40px',
      color: '#F57C00'
    },
    statBoxMoneyIcon: {
      fontSize: '40px',
      color: '#388E3C'
    }
  };
};

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var AdminDealsSummary = (_dec = __WEBPACK_IMPORTED_MODULE_7_react_sizes___default()(mapSizesToProps), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminDealsSummary, _Component);

  function AdminDealsSummary() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, AdminDealsSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = AdminDealsSummary.__proto__ || Object.getPrototypeOf(AdminDealsSummary)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        monthlyDealsNumberLineGraphOn: true,
        monthlyDealsDollarLineGraphOn: true,
        yearlyDealsNumberGraphOn: false,
        yearlyDealsDollarGraphOn: false,
        monthlyDealsDollarOrNum: 'number',
        totalDealsPieDollarOrNum: 'number'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsNumberLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsNumberLineGraphOn: !_this.state.monthlyDealsNumberLineGraphOn
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsDollarLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarLineGraphOn: !_this.state.monthlyDealsDollarLineGraphOn
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarOrNum: _this.state.monthlyDealsDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleTotalDealsPieDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          totalDealsPieDollarOrNum: _this.state.totalDealsPieDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleYearlyDealsNumberGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsNumberGraphOn: !_this.state.yearlyDealsNumberGraphOn
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleYearlyDealsDollarGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsDollarGraphOn: !_this.state.yearlyDealsDollarGraphOn
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "barGraphLayout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            lgViewport = _this$props.lgViewport,
            mdViewport = _this$props.mdViewport,
            smViewport = _this$props.smViewport;

        if (smViewport) {
          return 'horizontal';
        } else if (mdViewport) {
          return 'vertical';
        }

        if (lgViewport) {
          return 'vertical';
        }

        return 'horizontal';
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "dollarBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props2 = _this.props,
            lgViewport = _this$props2.lgViewport,
            mdViewport = _this$props2.mdViewport,
            smViewport = _this$props2.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          if (lgViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Gross Dollar Amount ($ Thousands)';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Gross Dollar Amount ($ Thousands)';
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "numberBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props3 = _this.props,
            lgViewport = _this$props3.lgViewport,
            mdViewport = _this$props3.mdViewport,
            smViewport = _this$props3.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Number of Deals';
          }

          if (lgViewport) {
            return 'Number of Deals';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Number of Deals';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Number of Deals';
      }
    }), _temp));
  }

  _createClass(AdminDealsSummary, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          smViewport = _props.smViewport,
          xsViewport = _props.xsViewport;
      var _state = this.state,
          totalDealsPieDollarOrNum = _state.totalDealsPieDollarOrNum,
          yearlyDealsDollarGraphOn = _state.yearlyDealsDollarGraphOn,
          yearlyDealsNumberGraphOn = _state.yearlyDealsNumberGraphOn;
      var borderRadiusStyle = {
        borderRadius: 2
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.grossDealCommissions.toLocaleString()),
        statTitle: "Gross Commissions to Date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.netDealCommissions.toLocaleString()),
        statTitle: "Net Commissions to Date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.netCurrentYearDealCommissions.toLocaleString()),
        statTitle: "".concat(__WEBPACK_IMPORTED_MODULE_10_moment___default()().year(), " Net Commissions to Date"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help___default.a,
        iconClass: classes.statBoxQuestionIcon,
        stat: this.props.numberOfPendingDeals,
        statTitle: "Number of Pending Deals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      })), this.props.numberOfTotalDealsData ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "Total Deals/Net Commissions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__nivo_pie__["a" /* ResponsivePie */], {
        data: totalDealsPieDollarOrNum === 'number' ? this.props.numberOfTotalDealsData : this.props.netDollarAmtOfTotalDealsData,
        margin: {
          top: 70,
          right: 80,
          bottom: 120,
          left: 80
        },
        innerRadius: 0.7,
        padAngle: 0.7,
        cornerRadius: 0,
        colors: "dark2",
        colorBy: "id",
        borderColor: "inherit:darker(0.6)",
        radialLabelsSkipAngle: 10,
        radialLabelsTextXOffset: 6,
        radialLabelsTextColor: "#333333",
        radialLabelsLinkOffset: 0,
        radialLabelsLinkDiagonalLength: smViewport ? 4 : 16,
        radialLabelsLinkHorizontalLength: smViewport ? 10 : 24,
        radialLabelsLinkStrokeWidth: 1,
        radialLabelsLinkColor: "inherit",
        slicesLabelsSkipAngle: 10,
        slicesLabelsTextColor: "#333333",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: smViewport ? 85 : 100,
          itemHeight: 14,
          symbolSize: 14,
          symbolShape: 'circle',
          itemDirection: 'top-to-bottom'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.totalDealsPieDollarOrNum !== 'number',
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Num",
        activeLabel: "$",
        onToggle: this.toggleTotalDealsPieDollarOrNum,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      })))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, "Gross Commissions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.toggleWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: !this.state.monthlyDealsDollarLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsDollarLineGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.yearlyDealsDollarGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsDollarGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      })), this.state.monthlyDealsDollarLineGraphOn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__nivo_line__["a" /* ResponsiveLine */], {
        data: !yearlyDealsDollarGraphOn ? this.props.grossMonthlyDealsDollarLineData : this.props.grossYearlyDealsDollarLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsDollarGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Gross Dollar Amount ($ Thousands)',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__["a" /* ResponsiveBar */], {
        data: yearlyDealsDollarGraphOn ? this.props.grossYearlyDealsDollarBarData : this.props.grossMonthlyDealsDollarBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('bottom', true) : this.dollarBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('left', true) : this.dollarBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        }
      }, "Net Commissions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.toggleWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: !this.state.monthlyDealsDollarLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsDollarLineGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.yearlyDealsDollarGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsDollarGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      })), this.state.monthlyDealsDollarLineGraphOn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__nivo_line__["a" /* ResponsiveLine */], {
        data: !yearlyDealsDollarGraphOn ? this.props.monthlyDealsDollarLineData : this.props.yearlyDealsDollarLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsDollarGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Net Dollar Amount ($ Thousands)',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__["a" /* ResponsiveBar */], {
        data: yearlyDealsDollarGraphOn ? this.props.yearlyDealsDollarBarData : this.props.monthlyDealsDollarBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('bottom', true) : this.dollarBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('left', true) : this.dollarBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        }
      }, "Number of Deals"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.toggleWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: !this.state.monthlyDealsNumberLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsNumberLineGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.yearlyDealsNumberGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsNumberGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796
        }
      })), this.state.monthlyDealsNumberLineGraphOn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__nivo_line__["a" /* ResponsiveLine */], {
        data: !yearlyDealsNumberGraphOn ? this.props.monthlyDealsNumberLineData : this.props.yearlyDealsNumberLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsNumberGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Deals',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__["a" /* ResponsiveBar */], {
        data: yearlyDealsNumberGraphOn ? this.props.yearlyDealsNumberBarData : this.props.monthlyDealsNumberBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('bottom', true) : this.numberBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('left', true) : this.numberBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        }
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AdminDealsSummary;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(AdminDealsSummary);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(chance, "chance", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js");
  reactHotLoader.register(mapSizesToProps, "mapSizesToProps", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js");
  reactHotLoader.register(AdminDealsSummary, "AdminDealsSummary", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminDealsSummary/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.3e0f880c944c2e789bbc.hot-update.js.map