webpackHotUpdate(7,{

/***/ "./components/forms/CreateAgentForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css__ = __webpack_require__("../node_modules/antd/lib/input/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("../node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_avatar_editor__ = __webpack_require__("../node_modules/react-avatar-editor/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_sizes__ = __webpack_require__("../node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_circular_progressbar__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CustomSlider__ = __webpack_require__("./components/CustomSlider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__formValidation__ = __webpack_require__("./components/forms/CreateAgentForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_constants__ = __webpack_require__("./utils/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__constants_userTypes__);





var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var TextArea = __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a.TextArea;
var CustomTextField = __WEBPACK_IMPORTED_MODULE_18__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_19__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_20__MaterialCustomSelectInputWrapper__["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg'];

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '30px 40px'
    }, _defineProperty(_root, theme.breakpoints.down('md'), {
      padding: '30px 0'
    }), _defineProperty(_root, "backgroundColor", '#fff'), _root),
    formRoot: {
      maxWidth: '100%'
    },
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    uploadBtnClassName: {
      display: 'inline-block',
      marginTop: '20px',
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
      }
    },
    profileItemsWrapper: {
      //display: 'inline-block',
      width: '100%',
      textAlign: 'center',
      marginBottom: '30px'
    },
    sliderWrapper: {
      width: '100%'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '82px'
    },
    h3: {
      fontWeight: theme.typography.fontWeightMedium
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
    sliderRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'rgba(0,0,0,.6)',
      marginTop: '15px',
      fontFamily: theme.typography.fontFamily
    },
    sliderInput: _defineProperty({
      appearance: 'none',
      width: '30%',
      height: '3px',
      background: '#d3d3d3',
      outline: 'none',
      opacity: '0.7',
      transition: 'opacity .2s',
      borderRadius: '50px',
      cursor: 'grab',
      '&:hover': {
        opacity: '1'
      }
    }, theme.breakpoints.down('xs'), {
      width: '50%'
    }),
    sliderLabel: {
      marginBottom: '5px',
      marginRight: 'none'
    },
    radioInputWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    confirmImgBtn: {
      marginLeft: '5px',
      backgroundColor: '#096DF0',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#0950f0'
      }
    },
    setImageWrapper: {
      height: 350,
      width: 350,
      maxWidth: '100%',
      maxHeight: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '20px'
    },
    setImage: {
      height: '100%',
      maxWidth: '100%',
      width: 'auto',
      objectFit: 'contain'
    },
    progressBarWrapper: {
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
    profileDescription: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '5px 5px 0 0'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
var areaOfFocusSelectItems = [{
  label: ''
}, {
  label: 'Residential Rentals'
}, {
  label: 'Residential Sales'
}, {
  label: 'Commercial Rentals'
}, {
  label: 'Commercial Sales'
}];
var branchSelectItems = [{
  label: 'New York City'
}];
var stateSelectItems = __WEBPACK_IMPORTED_MODULE_22__utils_constants__["a" /* states */].map(function (state) {
  return {
    label: state
  };
});
var CreateAgentForm = (_dec = __WEBPACK_IMPORTED_MODULE_10_react_sizes___default()(mapSizesToProps), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentForm, _Component);

  function CreateAgentForm() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, CreateAgentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = CreateAgentForm.__proto__ || Object.getPrototypeOf(CreateAgentForm)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "firstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    }), _temp));
  }

  _createClass(CreateAgentForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          setImageFile = _props.setImageFile,
          imageFile = _props.imageFile,
          lgViewport = _props.lgViewport,
          setImageScale = _props.setImageScale,
          imageScale = _props.imageScale,
          adjustedImageScale = _props.adjustedImageScale,
          clearImageFile = _props.clearImageFile,
          getFileUploadInput = _props.getFileUploadInput,
          getProfilePicEditor = _props.getProfilePicEditor,
          imageFileConfirmed = _props.imageFileConfirmed,
          confirmImageFile = _props.confirmImageFile,
          confirmedImageDataURL = _props.confirmedImageDataURL,
          loadingSetImg = _props.loadingSetImg,
          setFinishedLoadingImg = _props.setFinishedLoadingImg,
          uplodingImageProgress = _props.uplodingImageProgress,
          formSubmitedSuccessfully = _props.formSubmitedSuccessfully,
          isUploadingImage = _props.isUploadingImage,
          isViewType = _props.isViewType,
          submittedAgent = _props.submittedAgent,
          isEditingAgent = _props.isEditingAgent,
          currentUserRole = _props.currentUserRole,
          onSubmit = _props.onSubmit,
          submittingFormToServer = _props.submittingFormToServer,
          formSubmissionBegun = _props.formSubmissionBegun;
      var finalDefaultValues;

      if (submittedAgent) {
        var firstName = submittedAgent.firstName,
            lastName = submittedAgent.lastName,
            email = submittedAgent.email,
            agent = submittedAgent.agent;
        var branch = agent.branch,
            state = agent.state,
            mobileNumber = agent.mobileNumber,
            officeNumber = agent.officeNumber,
            areaOfFocus = agent.areaOfFocus,
            realEstateLicenseNumber = agent.realEstateLicenseNumber,
            agentType = agent.agentType,
            ACHAccountNumber = agent.ACHAccountNumber,
            title = agent.title,
            twitter = agent.twitter,
            facebook = agent.facebook,
            instagram = agent.instagram,
            profileDescription = agent.profileDescription;
        finalDefaultValues = {
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
          officeNumber: officeNumber,
          areaOfFocus: areaOfFocus,
          realEstateLicenseNumber: realEstateLicenseNumber,
          email: email,
          agentType: agentType,
          branch: branch,
          state: state,
          ACHAccountNumber: ACHAccountNumber,
          title: title,
          facebook: facebook ? facebook.split('/').pop() : undefined,
          twitter: twitter ? twitter.split('/').pop() : undefined,
          instagram: instagram ? instagram.split('/').pop() : undefined,
          profileDescription: profileDescription
        };
      }

      var isAdmin = currentUserRole && (currentUserRole === __WEBPACK_IMPORTED_MODULE_23__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_23__constants_userTypes__["superAdmin"]);
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_form__["Form"], {
        defaultValues: finalDefaultValues || undefined,
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        validateOnMount: true,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_16__formValidation__["a" /* default */],
        getApi: this.props.getFormApi,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, function (formApi) {
        if (_this2.firstTimeRender) {
          _this2.firstTimeRender = false;

          if (isAdmin && !formApi.getValue('firstName')) {
            formApi.setValue('firstName', '');
          }
        }

        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmitedSuccessfully || submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          container: true,
          spacing: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }, isAdmin && !isViewType && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.profileItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          }
        }, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_avatar_editor___default.a, {
          ref: getProfilePicEditor,
          image: imageFile || null,
          width: lgViewport ? 200 : 250,
          height: lgViewport ? 200 : 250,
          border: 50,
          color: [0, 0, 0, 0.3],
          scale: adjustedImageScale || 1.2,
          rotate: 0,
          style: {
            maxWidth: '100%',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          }
        }) : null, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.sliderWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__CustomSlider__["a" /* default */], {
          value: imageScale,
          min: 0,
          max: 100,
          onChange: function onChange(value) {
            return setImageScale(value);
          },
          label: "Scale:",
          rootClassName: classes.sliderRoot,
          labelClassName: classes.sliderLabel,
          inputClassName: classes.sliderInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          }
        })) : null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.setImageWrapper,
          style: {
            display: !imageFile || !confirmedImageDataURL || loadingSetImg ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
          className: classes.setImage,
          src: confirmedImageDataURL,
          onLoad: setFinishedLoadingImg,
          alt: "profile pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          }
        }, !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__CustomFileUploadInputWrapper__["a" /* default */], {
          field: "profilePicture",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Upload Agent's Profile Picture",
          btnClassName: classes.uploadBtnClassName,
          required: true,
          customOnChange: setImageFile,
          customState: imageFile,
          helperInfo: "Agent's Profile (JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          getInput: getFileUploadInput,
          accept: ".jpg, .jpeg, .png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          }
        }) : null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          }
        }, imageFile ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          onClick: function onClick() {
            return clearImageFile();
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          }
        }, "Clear File") : null, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default.a, {
          classes: {
            root: classes.confirmImgBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return confirmImageFile();
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          }
        }, "Confirm File", ' ', loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          type: "loading",
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          }
        }) : null) : null))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "firstName",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "First Name",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "lastName",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Last Name",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: isAdmin ? 6 : 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "areaOfFocus",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          fullWidth: true,
          label: "Area of Focus",
          name: "areaOfFocus",
          multiple: true,
          selectInputItems: areaOfFocusSelectItems,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "realEstateLicenseNumber",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Real Estate License#",
          fullWidth: true,
          required: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "branch",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Branch",
          name: "branch",
          selectInputItems: branchSelectItems,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "state",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "State",
          name: "state",
          selectInputItems: stateSelectItems,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 503
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "title",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Title",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          }
        }))), !isViewType && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 532
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "temporaryPassword",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Temporary Password",
          fullWidth: true,
          required: true,
          type: "password",
          disabled: isViewType && !isEditingAgent,
          validate: __WEBPACK_IMPORTED_MODULE_16__formValidation__["b" /* temporaryPasswordValidator */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          horizontal: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          }
        }, "Contact Information")), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__CustomInputMask__["a" /* default */], {
          mask: "(999) 999-9999 \\x999",
          placeholder: "Office Number",
          maskChar: null,
          officePhoneNumber: true,
          disabled: isViewType && !isEditingAgent,
          defaultValue: isViewType && submittedAgent ? finalDefaultValues.officeNumber : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          }
        }, function (props) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, _extends({
            field: "officeNumber",
            id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
            label: "Office Number",
            fullWidth: true,
            required: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999 \\x999",
            disabledStyle: isViewType && !isEditingAgent
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 591
            }
          }));
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: isAdmin ? 6 : 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 609
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__CustomInputMask__["a" /* default */], {
          mask: "(999) 999-9999",
          maskChar: null,
          placeholder: "Phone Number",
          disabled: isViewType && !isEditingAgent,
          defaultValue: isViewType && submittedAgent ? finalDefaultValues.mobileNumber : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          }
        }, function (props) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, _extends({
            field: "mobileNumber",
            id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
            label: "Mobile Number",
            fullWidth: true,
            required: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999",
            disabledStyle: isViewType && !isEditingAgent
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 623
            }
          }));
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 641
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 642
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "email",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Email",
          fullWidth: true,
          required: true,
          type: "email",
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 656
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          }
        }, "Other Information")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 666
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "ACH Account Number",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 667
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 677
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "facebook",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Facebook URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.facebook.com/",
          shrink: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 692
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "twitter",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Twitter URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.twitter.com/",
          shrink: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 705
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 706
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "instagram",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Instagram URL",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          customPrefix: "www.instagram.com/",
          shrink: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 707
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 719
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          inputRootClassName: classes.profileDescription,
          field: "profileDescription",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Profile Description",
          fullWidth: true,
          multiline: true,
          rows: 4,
          rowsMax: 12,
          shrink: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          }
        })))));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        }
      }, "Finishing submission...")) : null, uplodingImageProgress && !submittingFormToServer
      /*&& isUploadingImage */
      ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_circular_progressbar___default.a, {
        className: classes.progressBar,
        percentage: uplodingImageProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingImageProgress / 100, ")")
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        }
      }, "Uploading profile picture...")) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CreateAgentForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"])) || _class);

var _default = Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(CreateAgentForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(CustomTextField, "CustomTextField", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(MaterialCustomRadioInput, "MaterialCustomRadioInput", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(MaterialCustomSelectInput, "MaterialCustomSelectInput", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(acceptedFileExtensions, "acceptedFileExtensions", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(mapSizesToProps, "mapSizesToProps", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(radioInputAgentItems, "radioInputAgentItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(areaOfFocusSelectItems, "areaOfFocusSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(branchSelectItems, "branchSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(stateSelectItems, "stateSelectItems", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(CreateAgentForm, "CreateAgentForm", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/CreateAgentForm/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.ce462f8968082c369c17.hot-update.js.map