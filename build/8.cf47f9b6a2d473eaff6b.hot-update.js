webpackHotUpdate(8,{

/***/ "./containers/DealsWithGQLQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer__ = __webpack_require__("../node_modules/@material-ui/icons/Equalizer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DealsTable__ = __webpack_require__("./containers/DealsTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AdminAreaDealsTableContainer__ = __webpack_require__("./containers/AdminAreaDealsTableContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_DealsSummarDialogBox__ = __webpack_require__("./components/DealsSummarDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ViewDealDialogBox__ = __webpack_require__("./components/ViewDealDialogBox/index.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealsByAgentID($uuid: String!) {\n    dealsByAgentID(uuid: $uuid) {\n      dealID\n      date\n      agentID\n      dealType\n      clientName\n      clientEmail\n      propertyAddress\n      city\n      state\n      managementOrCobrokeCompany\n      price\n      status\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      total,\n      isCoAgent,\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealsByAgentID($uuid: String!) {\n    dealsByAgentID(uuid: $uuid) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      netCompanyCommission\n      deductionItems {\n        agentID\n        deductionType\n        agentID\n      }\n      status\n    }\n  }\n"]);

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


















var Loader = __WEBPACK_IMPORTED_MODULE_12_react_spinners__["DotLoader"];
var dealsQuery = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject);
var adminDealsByAgentID = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject2);

var styles = function styles(theme) {
  return {
    addDealBtn: {},
    dealsSummaryBtn: {
      marginLeft: '25px',
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
    snackBar: {
      marginTop: 30
    }
  };
};

var DealsWithGQLQuery = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsWithGQLQuery, _Component);

  function DealsWithGQLQuery(props) {
    var _this;

    _classCallCheck(this, DealsWithGQLQuery);

    _this = _possibleConstructorReturn(this, (DealsWithGQLQuery.__proto__ || Object.getPrototypeOf(DealsWithGQLQuery)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleAddDealDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          submitDealDialogOpen: !_this.state.submitDealDialogOpen
        });
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
    Object.defineProperty(_assertThisInitialized(_this), "setDealSuccessfullySubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        _this.setState({
          submitDealDialogOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal submitted successfully',
          addedDeals: _toConsumableArray(_this.state.addedDeals).concat([newDeal])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setDealSuccessfullyEditted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        var addedDeals = _this.state.addedDeals.filter(function (deal) {
          return deal.dealID !== newDeal.dealID;
        });

        _this.setState({
          dealsViewDialogBoxOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal updated successfully',
          addedDeals: _toConsumableArray(addedDeals).concat([newDeal])
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
    _this.state = {
      submitDealDialogOpen: false,
      dealsSummaryDialogBoxOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedDeals: [],
      dealsViewDialogBoxOpen: false,
      viewingDealID: '',
      viewingDealStatus: '',
      deletedDealIDS: [],
      userUUID: _this.props.userUUID,
      acceptedDealIDS: []
    };
    return _this;
  }

  _createClass(DealsWithGQLQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          userUUID = _props.userUUID,
          isAdmin = _props.isAdmin;
      var _state = this.state,
          submitDealDialogOpen = _state.submitDealDialogOpen,
          dealsSummaryDialogBoxOpen = _state.dealsSummaryDialogBoxOpen,
          dealsViewDialogBoxOpen = _state.dealsViewDialogBoxOpen,
          viewingDealID = _state.viewingDealID,
          viewingDealStatus = _state.viewingDealStatus;
      var toggleAddDealDialogBox = this.toggleAddDealDialogBox,
          toggleDealsSummaryDialogBox = this.toggleDealsSummaryDialogBox,
          openDealsViewDialogBox = this.openDealsViewDialogBox,
          closeDealsViewDialogBox = this.closeDealsViewDialogBox;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["Query"], {
        query: isAdmin ? adminDealsByAgentID : dealsQuery,
        variables: {
          uuid: userUUID || this.state.userUUID
        },
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
            lineNumber: 220
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }));
        var intDeals = {};

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var allDeals = _toConsumableArray(data.dealsByAgentID).concat(_toConsumableArray(_this2.state.addedDeals));

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
          } else {
            return deal;
          }
        });
        console.log(uniqueDeals);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          style: {
            paddingTop: !_this2.props.largeDealsSummaryBtn ? '10px' : 'initial'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          }
        }, _this2.props.largeDealsSummaryBtn && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.buttonsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
          variant: "raised",
          onClick: toggleDealsSummaryDialogBox,
          classes: {
            root: classes.dealsSummaryBtn
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        }), "Deals Summary")), isAdmin ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ViewDealDialogBox__["a" /* default */], {
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
            lineNumber: 291
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ViewDealDialogBox__["a" /* default */], {
          dealsViewDialogBoxOpen: dealsViewDialogBoxOpen,
          closeDealsViewDialogBox: closeDealsViewDialogBox,
          userUUID: userUUID,
          viewingDealID: viewingDealID,
          viewingDealStatus: viewingDealStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullyEditted,
          userRole: _this2.props.userRole,
          dealDeleted: _this2.dealDeleted,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          }
        })), _this2.props.isAdmin ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__AdminAreaDealsTableContainer__["a" /* default */], {
          deals: uniqueDeals,
          openDealsViewDialogBox: openDealsViewDialogBox,
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          isDealsWithGQLQuery: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__DealsTable__["a" /* default */], {
          deals: uniqueDeals,
          openDealsViewDialogBox: openDealsViewDialogBox,
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          isDealsWithGQLQuery: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_DealsSummarDialogBox__["a" /* default */], {
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen: dealsSummaryDialogBoxOpen,
          deals: uniqueDeals,
          userUUID: userUUID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default.a, {
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
              lineNumber: 353
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
              lineNumber: 357
            }
          }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton___default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 376
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
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

  return DealsWithGQLQuery;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(DealsWithGQLQuery);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  reactHotLoader.register(dealsQuery, "dealsQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  reactHotLoader.register(adminDealsByAgentID, "adminDealsByAgentID", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  reactHotLoader.register(DealsWithGQLQuery, "DealsWithGQLQuery", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/containers/DealsWithGQLQuery.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.cf47f9b6a2d473eaff6b.hot-update.js.map