webpackHotUpdate(7,{

/***/ "./components/forms/SubmitDealForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_TextField__ = __webpack_require__("../node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete__ = __webpack_require__("../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_images__ = __webpack_require__("../node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_icons_RemoveRedEye__ = __webpack_require__("../node_modules/@material-ui/icons/RemoveRedEye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__formValidation__ = __webpack_require__("./components/forms/SubmitDealForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__utils_Math__ = __webpack_require__("./utils/Math.js");



var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























var CustomTextField = __WEBPACK_IMPORTED_MODULE_20__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_21__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_22__MaterialCustomSelectInputWrapper__["a" /* default */];
var CustomFileUploadInputBtn = __WEBPACK_IMPORTED_MODULE_23__CustomFileUploadInputWrapper__["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

var styles = function styles(theme) {
  var _smallFileViewBtn;

  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: theme.spacing.unit * 3,
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: theme.shadows[3]
    },
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    formControl: {
      marginLeft: 0,
      marginRight: 0
    },
    alignCenter: {
      textAlign: 'center'
    },
    formHeader: {
      marginBottom: theme.spacing.unit * 3
    },
    formWrapper: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      textAlign: 'center'
    },
    formRoot: {
      paddingBottom: 10,
      flexGrow: 1,
      justifyContent: 'center',
      overflow: 'hidden'
    },
    radioInputWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '82px'
    },
    h3: {
      fontWeight: theme.typography.fontWeightMedium
    },
    addPaymentBtn: {
      marginTop: '10px'
    },
    removePaymentBtn: {
      marginTop: '5px',
      marginLeft: '28px'
    },
    paymentItemsWrapper: {
      display: 'flex',
      width: '100%',
      padding: '5px 0 12px 0',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      '& > div': {
        paddingLeft: '12px',
        paddingRight: '12px'
      }
    },
    formMiniHeading: {
      width: '100%',
      textAlign: 'left',
      paddingLeft: '28px'
    },
    formMiniHeading2: {
      width: '100%',
      textAlign: 'left',
      paddingLeft: '28px',
      marginTop: '60px'
    },
    topPaymentMethodWrapper: {
      paddingTop: '0'
    },
    paddingBottom10: {
      paddingBottom: '15px'
    },
    greenText: {
      color: '#448A19'
    },
    redText: {
      color: '#ED462F'
    },
    blueText: {
      color: '#3878D8'
    },
    financialsTotal: {
      backgroundColor: 'rgba(0,0,0,.12)'
    },
    uploadBtnClassName: {
      color: '#fff',
      backgroundColor: '#272A2E',
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      padding: '8px 16px',
      minWidth: '88px',
      fontSize: '0.875rem',
      boxSizing: 'border-box',
      minHeight: '36px',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      lineHeight: '1.4em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '500',
      borderRadius: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000'
      },
      addUploadBtnClassName: {}
    },
    fileUploadBtnWrapper2: {
      position: 'relative',
      display: 'inline-block'
    },
    fileUploadBtnWrapper: {
      position: 'relative',
      display: 'inline-block'
    },
    smallFileAddBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      backgroundColor: '#2995F3',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#2483D6'
      }
    },
    smallFileRemoveBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      position: 'absolute',
      top: '5px',
      marginLeft: '6px'
    },
    smallFileViewBtn: (_smallFileViewBtn = {
      width: '35px',
      height: '35px',
      minWidth: '35px',
      minHeight: '35px',
      position: 'absolute',
      backgroundColor: '#008000',
      top: '8px',
      marginLeft: '6px',
      color: '#fff',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#067706'
      }
    }, _defineProperty(_smallFileViewBtn, theme.breakpoints.down('xs'), {
      position: 'relative',
      marginTop: '-18px'
    }), _defineProperty(_smallFileViewBtn, '@media only screen and (max-width: 400px)', {
      position: 'relative',
      marginTop: '0 !important'
    }), _smallFileViewBtn),
    uploadContractDivWrapper: {
      position: 'relative'
    },
    blueBackgroundColor: {
      backgroundColor: '#2995F3'
    },
    finalTotalLabelClass: {
      paddingLeft: '10px'
    },
    finalTotalInputClass: {
      backgroundColor: 'rgba(0,0,0,.12)',
      borderRadius: '5px 5px 0 0',
      paddingLeft: '10px'
    },
    ManagementOrCobrokeCompanyTextField: {
      width: '100%',
      margin: 8,
      marginLeft: 0
    },
    progressBarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    progressBar: {
      width: '25%'
    },
    progressBarExplanation: {
      marginTop: '20px',
      fontSize: '1.1rem'
    },
    gridContainer: {
      marginBottom: 0
    },
    viewIcon: {
      fontSize: '1.2rem'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    fullwidthInput: {
      width: '100%'
    }
  };
};

var radioInputAgentItems = [{
  label: '60%',
  value: '60'
}, {
  label: '70%',
  value: '70'
}, {
  label: '80%',
  value: '80'
}];
var radioInputAgentPaymentItems = [{
  label: "I'll pick up the check"
}, {
  label: 'Please ACH me'
}];
var radioInputYesNoItems = [{
  label: 'Yes'
}, {
  label: 'No'
}];
var dealTypeSelectItems = [{
  label: 'Residential Rental'
}, {
  label: 'Residential Sale'
}, {
  label: 'Commercial Rental'
}, {
  label: 'Commercial Sale'
}];
var fundsPaidBySelectItems = [{
  label: 'Bringing a ckeck to the office'
}, {
  label: 'Remote deposit to Chase account'
}, {
  label: 'Check or "OP" mailed to office'
}, {
  label: 'Credit card payment'
}, {
  label: 'Client wired funds'
}];
var paymentTypeSelectItems = [{
  label: 'Check'
}, {
  label: 'Money Order'
}, {
  label: 'Wire'
}, {
  label: 'Cash'
}, {
  label: 'Owner Pays (OP)'
}];
var deductionTypeSelectItems = [{
  label: 'Deal Fee'
}, {
  label: 'Dues'
}, {
  label: '3rd Party Check'
}, {
  label: 'Processing Fee'
}, {
  label: 'Payment'
}, {
  label: 'Agent Split'
}];

var SubmitDealForm = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealForm, _Component);

  function SubmitDealForm(props) {
    var _this;

    _classCallCheck(this, SubmitDealForm);

    _this = _possibleConstructorReturn(this, (SubmitDealForm.__proto__ || Object.getPrototypeOf(SubmitDealForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "isFirstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnAgencyDisclosureURL", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.agencyDisclosureForm) {
          return [{
            src: _this.props.submittedDeal.agencyDisclosureForm
          }];
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnContractLeaseURLS", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.contractOrLeaseForms) {
          return _this.props.submittedDeal.contractOrLeaseForms.map(function (url) {
            return {
              src: url
            };
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openContractLeaseLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'contractLease'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openAgencyDisclosureLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'agencyDisclosure'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickPrev", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex - 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickNext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex + 1
        });
      }
    });
    _this.state = {
      shouldRenderInitialDeductionItem: true,
      lightboxIsOpen: false,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure'
    };
    return _this;
  }

  _createClass(SubmitDealForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.setInitialContainerState && this.props.submittedDeal) {
        this.props.setInitialContainerState({
          paymentsTotal: this.props.submittedDeal.paymentsTotal,
          deductionsTotal: this.props.submittedDeal.deductionsTotal,
          total: this.props.submittedDeal.total
        });
      }

      if (this.props.resetDealBonus) {
        this.props.resetDealBonus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          setAgencyDisclosureForm = _props.setAgencyDisclosureForm,
          setContractOrLeaseForms = _props.setContractOrLeaseForms,
          agencyDisclosureForm = _props.agencyDisclosureForm,
          contractOrLeaseForms = _props.contractOrLeaseForms,
          subtractPaymentValueFromState = _props.subtractPaymentValueFromState,
          subtractDeductionValueFromState = _props.subtractDeductionValueFromState,
          choosingMgmtCoBrokeCompany = _props.choosingMgmtCoBrokeCompany,
          toggleChoosingMgmtCoBrokeCompany = _props.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange = _props.handleMgmtOrCobrokeCompanyChange,
          setHasSetNewMgmtOrCobrokeCompany = _props.setHasSetNewMgmtOrCobrokeCompany,
          newMgmtOrCobrokeCompany = _props.newMgmtOrCobrokeCompany,
          addedManagementCompanies = _props.addedManagementCompanies,
          agents = _props.agents,
          uplodingFileProgress = _props.uplodingFileProgress,
          isUploadingFile = _props.isUploadingFile,
          uplodingFileText = _props.uplodingFileText,
          formSubmissionBegun = _props.formSubmissionBegun,
          submittingFormToServer = _props.submittingFormToServer,
          submittedDeal = _props.submittedDeal,
          isEditingDeal = _props.isEditingDeal,
          isViewType = _props.isViewType,
          agentUUID = _props.agentUUID,
          managementCobrokeCompanyItems = _props.managementCobrokeCompanyItems,
          agentPaymentTypeIsACH = _props.agentPaymentTypeIsACH,
          _onSubmit = _props.onSubmit;
      var managementCobrokeCompanies = managementCobrokeCompanyItems && managementCobrokeCompanyItems.length ? _toConsumableArray(managementCobrokeCompanyItems) : [];

      if (submittedDeal && submittedDeal.managementOrCobrokeCompany) {
        if (!managementCobrokeCompanies.includes(submittedDeal.managementOrCobrokeCompany)) {
          managementCobrokeCompanies.push(submittedDeal.managementOrCobrokeCompany);
        }
      }

      var agentsSelectItems = agents.filter(function (agent) {
        return agentUUID ? agent.uuid !== agentUUID : agent;
      }).map(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName,
            uuid = _ref.uuid;
        return {
          label: "".concat(Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(lastName), " (Agent ID - ").concat(uuid, ")"),
          key: uuid,
          value: uuid
        };
      });

      if (isViewType && submittedDeal && submittedDeal.otherAgents.length) {
        var nonAvailableAgentUUIDS = [];
        var agentUUIDS = agents.map(function (agent) {
          return agent.uuid;
        });
        submittedDeal.otherAgents.forEach(function (agent) {
          if (!agentUUIDS.includes(agent.agentID)) {
            agentsSelectItems.push({
              label: "".concat(agent.agentName, " (Agent ID - ").concat(agent.agentID, ")"),
              key: agent.agentID,
              value: agent.agentID
            });
          }
        });
      }

      var managementCobrokeCompanySelectItems = managementCobrokeCompanies.map(function (company) {
        return {
          label: company
        };
      });
      managementCobrokeCompanySelectItems = managementCobrokeCompanySelectItems ? _toConsumableArray(managementCobrokeCompanySelectItems).concat(_toConsumableArray(addedManagementCompanies.map(function (company) {
        return {
          label: company
        };
      })), [{
        label: 'Add a new item...'
      }]) : [];
      /*
        const {
          firstName,
          lastName,
          uuid: agentUUID,
          agent: agentPart,
        } = this.props.agent;
        const { agentType, state } = agentPart;
        */

      var finalDefaultValues;

      if (submittedDeal) {
        var agentNotes = submittedDeal.agentNotes,
            agentType = submittedDeal.agentType,
            agentName = submittedDeal.agentName,
            alreadyTurnedFundsIn = submittedDeal.alreadyTurnedFundsIn,
            city = submittedDeal.city,
            clientEmail = submittedDeal.clientEmail,
            clientName = submittedDeal.clientName,
            date = submittedDeal.date,
            dealType = submittedDeal.dealType,
            otherAgents = submittedDeal.otherAgents,
            leadSource = submittedDeal.leadSource,
            managementOrCobrokeCompany = submittedDeal.managementOrCobrokeCompany,
            propertyAddress = submittedDeal.propertyAddress,
            shouldSendApprovalTextMessageNotification = submittedDeal.shouldSendApprovalTextMessageNotification,
            state = submittedDeal.state,
            fundsPaidBy = submittedDeal.fundsPaidBy,
            agentPaymentType = submittedDeal.agentPaymentType,
            price = submittedDeal.price,
            paymentsTotal = submittedDeal.paymentsTotal,
            deductionsTotal = submittedDeal.deductionsTotal,
            paymentItems = submittedDeal.paymentItems,
            deductionItems = submittedDeal.deductionItems,
            apartmentNumber = submittedDeal.apartmentNumber,
            total = submittedDeal.total,
            bonusPercentageAddedByAdmin = submittedDeal.bonusPercentageAddedByAdmin,
            ACHAccountNumber = submittedDeal.ACHAccountNumber;
        finalDefaultValues = {
          agent: agentName,
          agentNotes: agentNotes,
          agentType: agentType,
          otherAgents: otherAgents.map(function (agent) {
            return agent.agentID;
          }),
          alreadyTurnedFundsIn: alreadyTurnedFundsIn,
          city: city,
          apartmentNumber: apartmentNumber,
          clientEmail: clientEmail,
          clientName: clientName,
          date: __WEBPACK_IMPORTED_MODULE_9_moment___default()(date).format('MMMM Do YYYY'),
          dealType: dealType,
          leadSource: leadSource,
          agentPaymentType: agentPaymentType,
          managementOrCobrokeCompany: managementOrCobrokeCompany,
          propertyAddress: propertyAddress,
          shouldSendApprovalTextMessageNotification: shouldSendApprovalTextMessageNotification,
          state: state,
          fundsPaidBy: fundsPaidBy,
          price: price,
          paymentItems: paymentItems.map(function (_ref2) {
            var paymentType = _ref2.paymentType,
                checkOrTransactionNumber = _ref2.checkOrTransactionNumber,
                amount = _ref2.amount;
            return {
              paymentType: paymentType,
              checkOrTransactionNumber: checkOrTransactionNumber,
              amount: amount
            };
          }),
          deductionItems: deductionItems.map(function (_ref3) {
            var deductionType = _ref3.deductionType,
                description = _ref3.description,
                amount = _ref3.amount;
            return {
              deductionType: deductionType,
              description: description,
              amount: amount
            };
          }),
          paymentsSubtotal: paymentsTotal ? paymentsTotal.toLocaleString() : '0',
          deductionsSubtotal: deductionsTotal ? deductionsTotal.toLocaleString() : '0',
          financialsTotal: total ? total.toLocaleString() : '0',
          ACHAccountNumber: ACHAccountNumber,
          bonusPercentageAddedByAdmin: "".concat(bonusPercentageAddedByAdmin)
        };
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["Form"], {
        defaultValues: !finalDefaultValues && this.props.agent ? {
          date: "".concat(__WEBPACK_IMPORTED_MODULE_9_moment___default()().format('MMMM Do YYYY')),
          agentType: "".concat(this.props.agent.agent.agentType),
          state: this.props.agent.agent.state,
          agent: "".concat(Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(this.props.agent.firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(this.props.agent.lastName)),
          paymentsSubtotal: this.props.paymentsTotal,
          deductionsSubtotal: this.props.deductionsTotal,
          ACHAccountNumber: submittedDeal && submittedDeal.ACHAccountNumber ? "".concat(this.props.agent.agent.ACHAccountNumber) : undefined
        } : finalDefaultValues,
        preValidate: this.preValidate,
        validateOnMount: true,
        onSubmit: function onSubmit(values) {
          if (_onSubmit) {
            _onSubmit(values);
          }
        },
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["f" /* default */],
        getApi: function getApi(formApi) {
          _this2.props.getFormApi(formApi);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, function (formApi) {
        var _React$createElement, _React$createElement2;

        /*
          console.log(formApi.errors);
          console.log(formApi.values);
          console.log(formApi.values.deductionItems);
          
          if (this.isFirstTimeRender) {
            this.isFirstTimeRender = false;
            formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
            formApi.setValue('agentType', `${agentType}`);
            formApi.setValue('state', state);
            formApi.setValue(
              'agent',
              `${capitalize(firstName)} ${capitalize(lastName)}`
            );
            formApi.setValue('paymentsSubtotal', this.props.paymentsTotal);
            formApi.setValue(
              'deductionsSubtotal',
              this.props.deductionsTotal
            );
          }
          */
        var renderRestDeductionItems = function renderRestDeductionItems() {
          if (!formApi.values.deductionItems || !formApi.values.deductionItems.length) return;
          var deductionItems = formApi.values.deductionItems.map(function (deductionItem, i) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
              className: classes.paymentItemsWrapper,
              key: i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 642
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
              field: ['deductionItems', i],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 643
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 644
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 645
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
              field: "deductionType",
              id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
              fullWidth: true,
              label: "Deduction Type",
              name: "deductionType",
              required: true,
              selectInputItems: deductionTypeSelectItems,
              validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["d" /* deductionTypeValidator */],
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 646
              }
            }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 660
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 661
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
              field: "description",
              id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
              label: "Description",
              fullWidth: true,
              required: true,
              validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["g" /* descriptionValidator */],
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 662
              }
            }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 674
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 675
              }
            }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
              field: "amount",
              id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
              label: "Amount",
              fullWidth: true,
              validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["e" /* deductionsAmountValidator */],
              noLetters: true,
              required: true,
              noNegativeSign: true,
              onChangeWithID: _this2.props.deductionAmountChangeHandler,
              isDollarAmount: true,
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 676
              }
            })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
              classes: {
                root: classes.removePaymentBtn
              },
              variant: "raised",
              color: "secondary",
              onClick: function onClick() {
                var amount = Number(formApi.values.deductionItems[i].amount);

                if (amount) {
                  subtractDeductionValueFromState(amount);
                }

                formApi.removeValue('deductionItems', i);
              },
              type: "button",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 694
              }
            }, "Remove"));
          });

          if (_this2.state.shouldRenderInitialDeductionItem) {
            return deductionItems.slice(1);
          }

          return deductionItems;
        };

        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmissionBegun || submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 722
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 734
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 735
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "date",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Date",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 736
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "agent",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Agent",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 748
          }
        }))), agentsSelectItems.length ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 760
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, (_React$createElement = {
          field: "otherAgents",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          fullWidth: true,
          label: "Other Agents",
          name: "otherAgents",
          multiple: true,
          disabled: submittedDeal && !isEditingDeal,
          selectInputItems: agentsSelectItems
        }, _defineProperty(_React$createElement, "disabled", isViewType), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 762
        }), _React$createElement)))) : null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 777
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          disabled: true,
          horizontal: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 782
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 793
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 794
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "leadSource",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Lead Source",
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 795
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 805
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 806
          }
        }, "Property Information")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 814
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 815
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, (_React$createElement2 = {
          field: "dealType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          label: "Deal Type",
          name: "dealType",
          selectInputItems: dealTypeSelectItems
        }, _defineProperty(_React$createElement2, "disabled", submittedDeal && !isEditingDeal), _defineProperty(_React$createElement2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 816
        }), _React$createElement2)))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 830
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 831
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "propertyAddress",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Property Address",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 832
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 842
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 843
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "state",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "State",
          required: true,
          fullWidth: true,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 844
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 854
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 855
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "city",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "City",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 856
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 866
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 867
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "apartmentNumber",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Apartment Number",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 868
          }
        }))), !choosingMgmtCoBrokeCompany ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 880
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 881
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "managementOrCobrokeCompany",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Management/Co-Broke Company",
          name: "managementOrCobrokeCompany",
          onChange: function onChange(value) {
            if (value === 'Add a new item...') {
              toggleChoosingMgmtCoBrokeCompany(true);
            }
          },
          selectInputItems: managementCobrokeCompanySelectItems,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 882
          }
        }))) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 900
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 901
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_TextField___default.a, {
          id: "newManagementOrCobrokeCompany",
          label: "Add Mgmt/Co-broke Company...",
          value: newMgmtOrCobrokeCompany,
          className: classes.ManagementOrCobrokeCompanyTextField,
          onChange: handleMgmtOrCobrokeCompanyChange,
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 902
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          style: {
            marginLeft: '0'
          },
          onClick: function onClick() {
            toggleChoosingMgmtCoBrokeCompany(false);
            formApi.setValue('managementOrCobrokeCompany', '');
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 913
          }
        }, "Cancel"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          style: {
            marginLeft: '10px',
            marginTop: '5px'
          },
          onClick: function onClick() {
            var trimmedItem = newMgmtOrCobrokeCompany.trim();
            if (!newMgmtOrCobrokeCompany || !trimmedItem) return;

            var items = _toConsumableArray(managementCobrokeCompanyItems).concat(_toConsumableArray(addedManagementCompanies));

            var regex = new RegExp(trimmedItem, 'i');
            var match = items.filter(function (item) {
              return item.match(regex);
            });

            if (match.length) {
              toggleChoosingMgmtCoBrokeCompany(false);
              formApi.setValue('managementOrCobrokeCompany', match[0]);
              return;
            }

            setHasSetNewMgmtOrCobrokeCompany();
            formApi.setValue('managementOrCobrokeCompany', Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany));
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 926
          }
        }, "Add Item")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 966
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 967
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "price",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Rent or Sale Price",
          required: true,
          fullWidth: true,
          noLetters: true,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 968
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 981
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 982
          }
        }, "Client's", " Information")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 990
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 991
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "clientName",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Client's Name",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 992
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1002
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1003
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "clientEmail",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Client Email",
          required: true,
          fullWidth: true,
          type: "email",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1004
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1016
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1021
          }
        }, "Transaction Financials")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1029
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.greenText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1030
          }
        }, "Paid:")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
          field: ['paymentItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1041
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1042
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1043
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "paymentType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Payment Type",
          name: "paymentType",
          selectInputItems: paymentTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["i" /* paymentTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1044
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1058
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1059
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "checkOrTransactionNumber",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Check/Transaction#",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["c" /* checkOrTransactionNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1060
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1072
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1073
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Amount",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["h" /* paymentAmountValidator */],
          noLetters: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.paymentAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1074
          }
        })))), formApi.values.paymentItems && formApi.values.paymentItems.map(function (paymentItems, i) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.paymentItemsWrapper,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1094
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
            field: ['paymentItems', i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1095
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1096
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1097
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
            field: "paymentType",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            required: true,
            fullWidth: true,
            label: "Payment Type",
            name: "paymentType",
            selectInputItems: paymentTypeSelectItems,
            validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["i" /* paymentTypeValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1098
            }
          }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1112
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1113
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
            field: "checkOrTransactionNumber",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            label: "Check/Transaction#",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["c" /* checkOrTransactionNumberValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1114
            }
          }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1126
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1127
            }
          }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
            field: "amount",
            id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
            label: "Amount",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["h" /* paymentAmountValidator */],
            noLetters: true,
            noNegativeSign: true,
            onChangeWithID: _this2.props.paymentAmountChangeHandler,
            isDollarAmount: true,
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1128
            }
          })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
            classes: {
              root: classes.removePaymentBtn
            },
            variant: "raised",
            color: "secondary",
            onClick: function onClick() {
              var amount = Number(formApi.values.paymentItems[i].amount);

              if (amount) {
                subtractPaymentValueFromState(amount);
              }

              formApi.removeValue('paymentItems', i);
            },
            type: "button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1147
            }
          }, "Remove"));
        }).slice(1), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1170
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('paymentItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1171
          }
        }, "Add payment item")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1183
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1184
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "paymentsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Payments Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: _this2.props.paymentsTotal,
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1185
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1199
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.redText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1200
          }
        }, "Deductions:")), _this2.state.shouldRenderInitialDeductionItem ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.paymentItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1212
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["NestedField"], {
          field: ['deductionItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1213
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1214
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1215
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "deductionType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          fullWidth: true,
          label: "Deduction Type",
          name: "deductionType",
          required: true,
          selectInputItems: deductionTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["d" /* deductionTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1216
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1230
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1231
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "description",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Description",
          fullWidth: true,
          required: true,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["g" /* descriptionValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1232
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1244
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1245
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Amount",
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["e" /* deductionsAmountValidator */],
          noLetters: true,
          required: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.deductionAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1246
          }
        })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          onClick: function onClick() {
            _this2.setState({
              shouldRenderInitialDeductionItem: false
            });

            var amount = Number(formApi.values.deductionItems[0].amount);

            if (amount) {
              subtractDeductionValueFromState(amount);
            }

            formApi.removeValue('deductionItems', 0);
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1265
          }
        }, "Remove")) : null, renderRestDeductionItems(), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1291
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('deductionItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1292
          }
        }, "Add deduction item")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1304
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1305
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "deductionsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Deductions Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: "".concat(_this2.props.deductionsTotal),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1306
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1320
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1321
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "financialsTotal",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Final Total",
          disabled: true,
          fullWidth: true,
          labelClassName: classes.finalTotalLabelClass,
          submittedValue: "".concat(_this2.props.total),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          inputRootClassName: classes.finalTotalInputClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1322
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1338
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1339
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "agentNotes",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "Listing agent/performance bonus info",
          fullWidth: true,
          multiline: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1340
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1351
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1352
          }
        }, "File Uploads:")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1360
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1361
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1364
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1365
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomFileUploadInputBtn, {
          field: "agencyDisclosureForm",
          id: "agencyDisclosureUploadForm",
          label: "Upload Agency Disclosure Form*",
          btnClassName: classes.uploadBtnClassName,
          customOnChange: setAgencyDisclosureForm,
          customState: agencyDisclosureForm,
          helperInfo: "Agency Disclosure Form* (PDF or JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal,
          required: isViewType ? undefined : true,
          submits: formApi.submits,
          formError: formApi.errors ? formApi.errors.agencyDisclosureForm : undefined,
          validate: isViewType ? undefined : __WEBPACK_IMPORTED_MODULE_27__formValidation__["b" /* agencyDisclosureFormValidator */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1366
          }
        }), submittedDeal && submittedDeal.agencyDisclosureForm && !agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.openAgencyDisclosureLightBox,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1391
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1399
          }
        })) : null, isEditingDeal && agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setAgencyDisclosureForm('');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1403
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1413
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1419
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1420
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomFileUploadInputBtn, {
          field: "contractOrLeaseItems",
          id: "contractOrLeaseItemsUploadForm",
          label: "Upload your Contract or Lease items",
          btnClassName: classes.uploadBtnClassName,
          multiple: true,
          customOnChange: setContractOrLeaseForms,
          customState: contractOrLeaseForms,
          helperInfo: "Contract or Lease items (PDF or JPEG/JPG files)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1421
          }
        }), submittedDeal && submittedDeal.contractOrLeaseForms && submittedDeal.contractOrLeaseForms.length && !(contractOrLeaseForms && contractOrLeaseForms.length) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.openContractLeaseLightBox,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1438
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1446
          }
        })) : null, contractOrLeaseForms.length ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setContractOrLeaseForms([]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1450
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1460
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1508
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1509
          }
        }, "Other:")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1517
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1518
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1521
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentPaymentType",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          label: "How would you like to get paid?",
          radioInputItems: radioInputAgentPaymentItems,
          onInput: _this2.props.onAgentPaymentTypeChange,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1526
          }
        })), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountNumber) && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1540
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1541
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          label: "ACH Account Number",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_27__formValidation__["a" /* ACHAccountNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1542
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1555
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1556
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "fundsPaidBy",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Funds will/have been paid by...",
          name: "fundsPaidBy",
          selectInputItems: fundsPaidBySelectItems,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1557
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1570
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "alreadyTurnedFundsIn",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          label: "Have you already deposited or given the funds to us?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1575
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1586
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "shouldSendApprovalTextMessageNotification",
          id: __WEBPACK_IMPORTED_MODULE_10_uuid_v4___default()(),
          required: true,
          label: "Want to recieve a text notification upon deal approval?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1591
          }
        })), !_this2.props.userRole || !submittedDeal || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_28__constants_userTypes__["agent"] && submittedDeal.status === 'pending' || !submittedDeal.bonusPercentageAddedByAdmin && submittedDeal.status === 'approved' ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1608
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1609
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1610
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputLabel"], {
          htmlFor: "bonusPercentageAddedByAdmin",
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1621
          }
        }, "Listing agent/performance bonus"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input___default.a, {
          id: "bonusPercentageAddedByAdmin",
          value: submittedDeal && submittedDeal.bonusPercentageAddedByAdmin ? submittedDeal.bonusPercentageAddedByAdmin : _this2.props.dealBonus,
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled, classes.fullwidthInput),
          inputProps: {
            onInput: _this2.props.onBonusChange,
            className: submittedDeal.status === 'approved' ? classes.disabled : undefined
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1653
            }
          }, "%"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1631
          }
        })))), submittedDeal && submittedDeal.netAgentCommission && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1666
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1667
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1668
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputLabel"], {
          htmlFor: "netAgentCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1679
          }
        }, "Net Agent Commission"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input___default.a, {
          id: "netAgentCommission",
          value: submittedDeal && submittedDeal.netAgentCommission ? Object(__WEBPACK_IMPORTED_MODULE_29__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netAgentCommission).toLocaleString()) : null,
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1704
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1685
          }
        })))) : null, (_this2.props.userRole === __WEBPACK_IMPORTED_MODULE_28__constants_userTypes__["admin"] || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_28__constants_userTypes__["superAdmin"]) && submittedDeal && submittedDeal.netCompanyCommission && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1719
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1720
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(classes.disabled),
          disabled: true,
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1721
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputLabel"], {
          htmlFor: "netCompanyCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1726
          }
        }, "Net Company Commission"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input___default.a, {
          id: "netCompanyCommission",
          value: submittedDeal && submittedDeal.netCompanyCommission ? Object(__WEBPACK_IMPORTED_MODULE_29__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netCompanyCommission).toLocaleString()) : null,
          className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1752
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1732
          }
        })))) : null));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1768
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1769
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1770
        }
      }, "Finishing submission...")) : null, isUploadingFile ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1777
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_circular_progressbar___default.a, {
        className: classes.progressBar,
        percentage: uplodingFileProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingFileProgress / 100, ")")
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1778
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1787
        }
      }, uplodingFileText || 'Uploading file picture...')) : null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_react_images___default.a, {
        images: this.state.lightboxType === 'agencyDisclosure' ? this.returnAgencyDisclosureURL() : this.returnContractLeaseURLS(),
        isOpen: this.state.lightboxIsOpen,
        onClose: this.closeLightbox,
        onClickPrev: this.onClickPrev,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentLightBoxIndex,
        backdropClosesModal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1793
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

  return SubmitDealForm;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(SubmitDealForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomTextField, "CustomTextField", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomRadioInput, "MaterialCustomRadioInput", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomSelectInput, "MaterialCustomSelectInput", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(CustomFileUploadInputBtn, "CustomFileUploadInputBtn", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(acceptedFileExtensions, "acceptedFileExtensions", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentItems, "radioInputAgentItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentPaymentItems, "radioInputAgentPaymentItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputYesNoItems, "radioInputYesNoItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(dealTypeSelectItems, "dealTypeSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(fundsPaidBySelectItems, "fundsPaidBySelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(paymentTypeSelectItems, "paymentTypeSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(deductionTypeSelectItems, "deductionTypeSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(SubmitDealForm, "SubmitDealForm", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.3ccea25c8a61bf001f4c.hot-update.js.map