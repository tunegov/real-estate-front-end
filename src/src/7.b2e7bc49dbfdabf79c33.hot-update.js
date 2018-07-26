webpackHotUpdate(7,{

/***/ "./containers/SubmitDealForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export dealFormQuery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__ = __webpack_require__("./components/forms/SubmitDealForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__ = __webpack_require__("./effects/deals/getDealUploadsSignedURLS.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__ = __webpack_require__("./effects/uploadFile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_deals_submitDeal__ = __webpack_require__("./effects/deals/submitDeal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealForm($uuid: String) {\n    dealForm(uuid: $uuid) {\n      agent {\n        firstName\n        lastName\n        role\n        agent {\n          agentType\n          state\n          ACHAccountNumber\n          ACHAccountBankRoutingNumber\n        }\n      }\n      agents {\n        firstName\n        lastName\n        uuid\n      }\n      formSelectItems\n    }\n  }\n"]);

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["BounceLoader"];
var dealFormQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var SubmitDealFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealFormContainer, _Component);

  function SubmitDealFormContainer(props) {
    var _this;

    _classCallCheck(this, SubmitDealFormContainer);

    _this = _possibleConstructorReturn(this, (SubmitDealFormContainer.__proto__ || Object.getPrototypeOf(SubmitDealFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "uploadItemsNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemsUploaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deductionAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value2) {
        _value2 = Number(_value2);

        var deductionsTotal = _this.getTotalDeductionsAmount({
          id: id,
          value: _value2 || 0
        });

        _this.setState({
          deductionAmountItems: _objectSpread({}, _this.state.deductionAmountItems, _defineProperty({}, id, _value2 || 0)),
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalDeductionsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state2 = _this.state,
            deductionAmountItems = _this$state2.deductionAmountItems,
            permanentDeductionSubtractions = _this$state2.permanentDeductionSubtractions;
        Object.keys(deductionAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += deductionAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentDeductionSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractDeductionValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deduction) {
        var deductionsTotal = _this.getTotalDeductionsAmount() - deduction;

        _this.setState({
          permanentDeductionSubtractions: _this.state.permanentDeductionSubtractions + deduction,
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAgencyDisclosureForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          agencyDisclosureForm: file
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setContractOrLeaseForms", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject) {
        if (Array.isArray(filesObject)) {
          _this.setState({
            contractOrLeaseForms: filesObject
          });

          if (filesObject.length === 0) {
            var uploadBtn = document.getElementById('contractOrLeaseItemsUploadForm');

            if (uploadBtn) {
              uploadBtn.value = null;
            }
          }

          return;
        }

        var fileArray = Object.keys(filesObject).map(function (key) {
          return filesObject[key];
        });

        _this.setState({
          contractOrLeaseForms: fileArray
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state3.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(__WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAgentPaymentTypeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var value = target.value;
        var isACH = value === 'Please ACH me';

        if (isACH) {
          _this.setState({
            agentPaymentTypeIsACH: true
          });
        } else {
          _this.setState({
            agentPaymentTypeIsACH: false
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state4 = _this.state,
            contractOrLeaseForms = _this$state4.contractOrLeaseForms,
            agencyDisclosureForm = _this$state4.agencyDisclosureForm,
            addedManagementCompanies = _this$state4.addedManagementCompanies,
            hasSetNewMgmtOrCobrokeCompany = _this$state4.hasSetNewMgmtOrCobrokeCompany,
            paymentsTotal = _this$state4.paymentsTotal,
            deductionsTotal = _this$state4.deductionsTotal,
            total = _this$state4.total;

        var returnObject = _objectSpread({}, values, {
          otherAgents: values.otherAgents || [],
          addedManagementCompanies: addedManagementCompanies,
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total,
          agencyDisclosureForm: null,
          contractOrLeaseForms: [],
          dealID: null
        });

        delete returnObject.contractOrLeaseItems;
        delete returnObject.deductionsSubtotal;
        delete returnObject.paymentsSubtotal;
        delete returnObject.financialsTotal;
        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        returnObject.deductionItems = returnObject.deductionItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        var uploadItems = [{
          itemName: 'agencyDisclosureForm',
          fileName: agencyDisclosureForm.name,
          fileType: agencyDisclosureForm.type
        }];

        if (contractOrLeaseForms && contractOrLeaseForms.length) {
          contractOrLeaseForms.forEach(function (file, i) {
            uploadItems.push({
              itemName: "contractOrLeaseForm".concat(i),
              fileName: file.name,
              fileType: file.type
            });
          });
        }

        Object(__WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__["a" /* default */])(uploadItems).then(function (response) {
          if (response.error) {
            _this.props.openRequestErrorSnackbar(response.error);

            _this.props.setFormSubmitted(false);

            return;
          }

          var errors = [];
          var items = response.items,
              dealID = response.dealID;
          returnObject.dealID = dealID;
          items.forEach(function (item) {
            if (item.error) errors.push(item.error);
          });

          if (errors.length) {
            _this.props.openRequestErrorSnackbar(errors[0]);

            _this.props.setFormSubmitted(false);

            return;
          }

          _this.uploadItemsNum = items.length;

          var recursiveUploads = function recursiveUploads(items, returnObject, thisRef) {
            var uploadItemsNum = items.length;
            var uploadItemIndex = 0;
            recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef);
          };

          var recursiveHelper = function recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef) {
            if (uploadItemIndex >= items.length) {
              thisRef.setState({
                isUploadingFile: false,
                uplodingFileProgress: 0,
                filesUploadedSuccessfully: true,
                submittingFormToServer: true
              });
              Object(__WEBPACK_IMPORTED_MODULE_8__effects_deals_submitDeal__["a" /* default */])(returnObject).then(function (res) {
                var failed = false;

                if (res.otherError) {
                  _this.props.openRequestErrorSnackbar(res.otherError);

                  failed = true;
                }

                if (res.userErrors.length) {
                  failed = true;
                }

                if (!failed) {
                  _this.props.setDealSuccessfullySubmitted(res.deal);
                }

                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar();
              });
              return;
            }

            var item = items[uploadItemIndex];
            var file;
            var fileIndex;

            if (item.itemName === 'agencyDisclosureForm') {
              file = thisRef.state.agencyDisclosureForm;
              returnObject.agencyDisclosureForm = item.fileName;
            } else {
              fileIndex = item.itemName.slice(-1);
              file = thisRef.state.contractOrLeaseForms[fileIndex];
              returnObject.contractOrLeaseForms.push(item.fileName);
            }

            Object(__WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__["a" /* default */])({
              file: file,
              url: item.signedURL,
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;
                thisRef.setState({
                  formSubmissionBegun: true,
                  uplodingFileProgress: Math.floor(loadedPercent),
                  uplodingFileText: "Now uploading file ".concat(uploadItemIndex + 1, " of ").concat(uploadItemsNum, "..."),
                  isUploadingFile: true
                });
              }
            }).then(function (res) {
              var status = "".concat(res.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  submittingFormToServer: false,
                  isUploadingFile: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar('There was an error uploading your files. Please try again shortly.');

                return;
              }

              return recursiveHelper(items, uploadItemIndex + 1, uploadItemsNum, returnObject, thisRef);
            }).catch(function (err) {
              _this.setState({
                submittingFormToServer: false,
                isUploadingFile: false
              });

              _this.props.setFormSubmitted(false);

              _this.props.openRequestErrorSnackbar();
            });
          };

          recursiveUploads(items, returnObject, _assertThisInitialized(_this));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0,
      // not submitted
      permanentDeductionSubtractions: 0,
      // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      uplodingFileProgress: 0,
      isUploadingFile: false,
      uplodingFileText: '',
      filesUploadedSuccessfully: null,
      formSubmissionBegun: false,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(SubmitDealFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          rest = _objectWithoutProperties(_props, ["userUUID"]);

      var _state = this.state,
          agencyDisclosureForm = _state.agencyDisclosureForm,
          contractOrLeaseForms = _state.contractOrLeaseForms;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: dealFormQuery,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }));

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 449
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$dealForm = data.dealForm,
            agent = _data$dealForm.agent,
            agents = _data$dealForm.agents,
            formSelectItems = _data$dealForm.formSelectItems;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__["a" /* default */], _extends({
          paymentsTotal: "".concat(_this2.state.paymentsTotal),
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          agent: agent,
          agents: agents.filter(function (agent) {
            return agent.uuid !== uuid;
          }),
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          setAgencyDisclosureForm: _this2.setAgencyDisclosureForm,
          setContractOrLeaseForms: _this2.setContractOrLeaseForms,
          agencyDisclosureForm: agencyDisclosureForm,
          contractOrLeaseForms: contractOrLeaseForms,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          uplodingFileProgress: _this2.state.uplodingFileProgress,
          isUploadingFile: _this2.state.isUploadingFile,
          uplodingFileText: _this2.state.uplodingFileText,
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany,
          deductionAmountChangeHandler: _this2.deductionAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          subtractDeductionValueFromState: _this2.subtractDeductionValueFromState,
          agentPaymentTypeIsACH: _this2.state.agentPaymentTypeIsACH,
          onAgentPaymentTypeChange: _this2.onAgentPaymentTypeChange
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
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

  return SubmitDealFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = SubmitDealFormContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js");
  reactHotLoader.register(dealFormQuery, "dealFormQuery", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js");
  reactHotLoader.register(SubmitDealFormContainer, "SubmitDealFormContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.b2e7bc49dbfdabf79c33.hot-update.js.map