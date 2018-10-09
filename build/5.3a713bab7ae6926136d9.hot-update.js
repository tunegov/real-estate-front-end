webpackHotUpdate(5,{

/***/ "./containers/AdminAreaDealsContainer.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Equalizer__ = __webpack_require__("../node_modules/@material-ui/icons/Equalizer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Equalizer__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AdminAreaDealsTableContainer__ = __webpack_require__("./containers/AdminAreaDealsTableContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_AdminDealsSummaryDialogBox__ = __webpack_require__("./components/AdminDealsSummaryDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_ViewDealDialogBox__ = __webpack_require__("./components/ViewDealDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__effects_deals_deleteDeal__ = __webpack_require__("./effects/deals/deleteDeal.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query allDealsByDateRange($input: QueryDateRangeDealsInput!) {\n    allDealsByDateRange(input: $input) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      status\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query allDealsByAgentName($agentName: String!) {\n    allDealsByAgentName(agentName: $agentName) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      status\n    }\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealsByAgentRealEstateLicenseNumber(\n    $agentRealEstateLicenseNumber: String!\n  ) {\n    dealsByAgentRealEstateLicenseNumber(\n      agentRealEstateLicenseNumber: $agentRealEstateLicenseNumber\n    ) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      status\n    }\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query deal($uuid: String!) {\n    deal(uuid: $uuid) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      status\n    }\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query allDealsByAgentName($clientName: String!) {\n    allDealsByAgentName(clientName: $clientName) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      status\n    }\n  }\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query allDeals {\n    allDeals {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      deductionItems {\n        agentID\n        deductionType\n        agentID\n      }\n      total\n      agentNotes\n      status\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      netCompanyCommission\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
























var Loader = __WEBPACK_IMPORTED_MODULE_18_react_spinners__["DotLoader"];

var styles = function styles(theme) {
  return {
    dealsSummaryBtn: {
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
    }
  };
};

var selectInputItems = [{
  label: 'Deal ID'
}, {
  label: 'Client Name'
}, {
  label: 'Agent Name'
}, {
  label: 'Agent Real Estate Number'
}];
var searchTypes = {
  dateRange: 'dateRange',
  specific: 'specific'
};
var allDealsByDateRangeQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject);
var allDealsByAgentNameQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject2);
var dealsByAgentRealEstateLicenseNumberQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject3);
var dealQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject4);
var allDealsByClientNameQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject5);
var dealsQuery = __WEBPACK_IMPORTED_MODULE_16_graphql_tag___default()(_templateObject6);

var AdminAreaDealsContainer = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminAreaDealsContainer, _Component);

  function AdminAreaDealsContainer(props) {
    var _this;

    _classCallCheck(this, AdminAreaDealsContainer);

    _this = _possibleConstructorReturn(this, (AdminAreaDealsContainer.__proto__ || Object.getPrototypeOf(AdminAreaDealsContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "returnQuery", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            currentSearchType = _this$state.currentSearchType,
            fineGrainSearchType = _this$state.fineGrainSearchType;

        if (currentSearchType === searchTypes.dateRange) {
          return allDealsByDateRangeQuery;
        }

        if (currentSearchType === searchTypes.specific) {
          switch (fineGrainSearchType) {
            case 'Deal ID':
              return dealQuery;
              break;

            case 'Client Name':
              return allDealsByClientNameQuery;
              break;

            case 'Agent Name':
              return allDealsByAgentNameQuery;
              break;

            case 'Agent Real Estate Number':
              return dealsByAgentRealEstateLicenseNumberQuery;
              break;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnQueryName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state2 = _this.state,
            currentSearchType = _this$state2.currentSearchType,
            fineGrainSearchType = _this$state2.fineGrainSearchType;

        if (currentSearchType === searchTypes.dateRange) {
          return 'allDealsByDateRange';
        }

        if (currentSearchType === searchTypes.specific) {
          switch (fineGrainSearchType) {
            case 'Deal ID':
              return 'deal';
              break;

            case 'Client Name':
              return 'allDealsByAgentName';
              break;

            case 'Agent Name':
              return 'allDealsByAgentName';
              break;

            case 'Agent Real Estate Number':
              return 'dealsByAgentRealEstateLicenseNumber';
              break;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnQueryVariables", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state3 = _this.state,
            currentSearchType = _this$state3.currentSearchType,
            fineGrainSearchType = _this$state3.fineGrainSearchType,
            startDate = _this$state3.startDate,
            endDate = _this$state3.endDate,
            fineGrainSearchValue = _this$state3.fineGrainSearchValue;

        if (currentSearchType === searchTypes.dateRange) {
          return {
            input: {
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString()
            }
          };
        }

        if (currentSearchType === searchTypes.specific) {
          switch (fineGrainSearchType) {
            case 'Deal ID':
              return {
                uuid: fineGrainSearchValue
              };
              break;

            case 'Client Name':
              return {
                clientName: fineGrainSearchValue
              };
              break;

            case 'Agent Name':
              return {
                agentName: fineGrainSearchValue
              };
              break;

            case 'Agent Real Estate Number':
              return {
                agentRealEstateLicenseNumber: fineGrainSearchValue
              };
              break;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleDealsSummaryDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsSummaryDialogBoxOpen: !_this.state.dealsSummaryDialogBoxOpen
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onStartDateCHange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(date) {
        if (!date) _this.setState({
          endDate: _this.state.startDate
        });
        if (date.isAfter(__WEBPACK_IMPORTED_MODULE_7_moment___default()())) return;
        if (date.isAfter(_this.state.endDate)) return;

        _this.setState({
          startDate: date
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onEndDateCHange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(date) {
        if (!date) _this.setState({
          endDate: _this.state.endDate
        });
        if (date.isAfter(__WEBPACK_IMPORTED_MODULE_7_moment___default()())) return;
        if (date.isBefore(_this.state.startDate)) return;

        _this.setState({
          endDate: date
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onDateRangeSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentSearchType = _this.state.currentSearchType;

        if (currentSearchType !== searchTypes.dateRange) {
          _this.setState({
            currentSearchType: searchTypes.dateRange
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSpecificSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state4 = _this.state,
            currentSearchType = _this$state4.currentSearchType,
            fineGrainSearchValue = _this$state4.fineGrainSearchValue;
        if (!fineGrainSearchValue || fineGrainSearchValue && !fineGrainSearchValue.trim()) return;

        if (currentSearchType !== searchTypes.specific) {
          _this.setState({
            currentSearchType: searchTypes.specific
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID, status) {
        _this.setState({
          dealsViewDialogBoxOpen: true,
          viewingDealID: dealID,
          viewingDealStatus: status
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsViewDialogBoxOpen: false,
          viewingDealID: '',
          viewingDealStatus: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        Object(__WEBPACK_IMPORTED_MODULE_22__effects_deals_deleteDeal__["a" /* default */])(dealID).then(function (res) {
          if (res.error) {
            console.log(res.error);
            return;
          }

          _this.setState({
            snackbarOpen: true,
            snackbarText: 'Deal deleted successfully!',
            dealsViewDialogBoxOpen: false,
            deletedDealIDS: _toConsumableArray(_this.state.deletedDealIDS).concat([dealID])
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "dealDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Deal deleted successfully!',
          dealsViewDialogBoxOpen: false,
          deletedDealIDS: _toConsumableArray(_this.state.deletedDealIDS).concat([dealID])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "dealAccepted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Deal accepted successfully!',
          dealsViewDialogBoxOpen: false,
          acceptedDealIDS: _toConsumableArray(_this.state.acceptedDealIDS).concat([dealID])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCloseSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          snackbarOpen: false
        });
      }
    });
    var today = __WEBPACK_IMPORTED_MODULE_7_moment___default()();
    _this.state = {
      dealsSummaryDialogBoxOpen: false,
      startDate: __WEBPACK_IMPORTED_MODULE_7_moment___default()().subtract(1, 'months'),
      endDate: today,
      fineGrainSearchType: 'Agent Real Estate Number',
      fineGrainSearchValue: '',
      currentSearchType: searchTypes.dateRange,
      maxDate: today,
      minDate: __WEBPACK_IMPORTED_MODULE_7_moment___default()('2018-04-01'),
      dealsViewDialogBoxOpen: false,
      viewingDealID: '',
      viewingDealStatus: '',
      deletedDealIDS: [],
      acceptedDealIDS: []
    };
    return _this;
  }

  _createClass(AdminAreaDealsContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          userUUID = _props.userUUID;
      var _state = this.state,
          dealsSummaryDialogBoxOpen = _state.dealsSummaryDialogBoxOpen,
          startDate = _state.startDate,
          endDate = _state.endDate,
          fineGrainSearchType = _state.fineGrainSearchType,
          fineGrainSearchValue = _state.fineGrainSearchValue,
          currentSearchType = _state.currentSearchType,
          dealsViewDialogBoxOpen = _state.dealsViewDialogBoxOpen,
          viewingDealID = _state.viewingDealID,
          viewingDealStatus = _state.viewingDealStatus;
      var toggleDealsSummaryDialogBox = this.toggleDealsSummaryDialogBox,
          onStartDateCHange = this.onStartDateCHange,
          onEndDateCHange = this.onEndDateCHange,
          onDateRangeSearch = this.onDateRangeSearch,
          onSpecificSearch = this.onSpecificSearch,
          openDealsViewDialogBox = this.openDealsViewDialogBox,
          closeDealsViewDialogBox = this.closeDealsViewDialogBox;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_react_apollo__["Query"], {
        query: dealsQuery,
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;

        if (loading) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 110px)',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
            color: "#f44336",
            loading: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528
            }
          }));
        }

        var intDeals = {};

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 537
            }
          }, "We're sorry. There was an error processing your request.");
        } // const intResult = data[this.returnQueryName()];
        // const allDeals = Array.isArray(intResult) ? intResult : [intResult];


        var allDeals = data.allDeals;
        allDeals.forEach(function (deal) {
          intDeals[deal.dealID] = deal;
        });
        var uniqueDeals = [];
        Object.keys(intDeals).forEach(function (key) {
          uniqueDeals.push(intDeals[key]);
        });
        uniqueDeals = uniqueDeals.filter(function (deal) {
          return !_this2.state.deletedDealIDS.includes(deal.dealID);
        }).map(function (deal) {
          if (_this2.state.acceptedDealIDS.includes(deal.dealID)) {
            return _objectSpread({}, deal, {
              status: 'accepted'
            });
          }

          return deal;
        });
        console.log(uniqueDeals);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 571
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.buttonsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
          variant: "raised",
          onClick: toggleDealsSummaryDialogBox,
          classes: {
            root: classes.dealsSummaryBtn
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Equalizer___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          }
        }), "Deals Summary"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_ViewDealDialogBox__["a" /* default */], {
          dealsViewDialogBoxOpen: dealsViewDialogBoxOpen,
          closeDealsViewDialogBox: closeDealsViewDialogBox,
          viewingDealID: viewingDealID,
          viewingDealStatus: viewingDealStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullyEditted,
          userRole: _this2.props.userRole,
          deleteDeal: _this2.deleteDeal,
          dealAccepted: _this2.dealAccepted,
          dealDeleted: _this2.dealDeleted,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 740
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__AdminAreaDealsTableContainer__["a" /* default */], {
          deals: uniqueDeals,
          openDealsViewDialogBox: _this2.openDealsViewDialogBox,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 753
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_AdminDealsSummaryDialogBox__["a" /* default */], {
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen: dealsSummaryDialogBoxOpen,
          deals: uniqueDeals,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 757
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_Snackbar___default.a, {
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
              lineNumber: 773
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
              lineNumber: 777
            }
          }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 796
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Close___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 803
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 763
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

  return AdminAreaDealsContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(AdminAreaDealsContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(selectInputItems, "selectInputItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(searchTypes, "searchTypes", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(allDealsByDateRangeQuery, "allDealsByDateRangeQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(allDealsByAgentNameQuery, "allDealsByAgentNameQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(dealsByAgentRealEstateLicenseNumberQuery, "dealsByAgentRealEstateLicenseNumberQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(dealQuery, "dealQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(allDealsByClientNameQuery, "allDealsByClientNameQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(dealsQuery, "dealsQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(AdminAreaDealsContainer, "AdminAreaDealsContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/AdminAreaDealsContainer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.3a713bab7ae6926136d9.hot-update.js.map