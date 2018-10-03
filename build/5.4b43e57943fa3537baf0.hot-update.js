webpackHotUpdate(5,{

/***/ "../node_modules/debounce/index.js":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "./frontEndComponents/LoginFormModal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal_style_css__ = __webpack_require__("../node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_modal__ = __webpack_require__("../node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button_style_css__ = __webpack_require__("../node_modules/antd/lib/button/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button__ = __webpack_require__("../node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input_style_css__ = __webpack_require__("../node_modules/antd/lib/input/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input__ = __webpack_require__("../node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_form_style_css__ = __webpack_require__("../node_modules/antd/lib/form/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_form_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_form_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form__ = __webpack_require__("../node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_debounce__ = __webpack_require__("../node_modules/debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_polished__ = __webpack_require__("../node_modules/polished/dist/polished.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_google_recaptcha__ = __webpack_require__("../node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sharedStyledComponents_ServerErrorMessage__ = __webpack_require__("./sharedStyledComponents/ServerErrorMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__constants_recaptchaSiteKey__ = __webpack_require__("./constants/recaptchaSiteKey.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_css_login_sign_up_modals_css__ = __webpack_require__("./static/css/login-sign-up-modals.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__static_css_login_sign_up_modals_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__static_css_login_sign_up_modals_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__constants_config__ = __webpack_require__("./constants/config.js");











var _dec,
    _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndComponents/LoginFormModal/index.js";

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















var FormItem = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.Item;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    titleSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      width: '100%',
      marginBottom: '50px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      fontSize: '2.8rem',
      color: '#fff',
      backgroundColor: 'black'
    },
    formWrapper: {
      padding: '20px 20px'
    },
    applicationTypeBtnsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    activePrimaryToggleBtn: {
      backgroundColor: '#1890ff !important',
      borderColor: '#1890ff !important',
      color: '#fff !important',
      '&:hover': {
        backgroundColor: '#1890ff',
        borderColor: '#1890ff',
        color: '#fff'
      }
    },
    verticalModalWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .ant-modal': {
        top: 0
      }
    },
    forgotPassword: {
      marginLeft: 'auto',
      color: Object(__WEBPACK_IMPORTED_MODULE_15_polished__["b" /* lighten */])(0.1, '#16b'),
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'color .2s ease-in-out',
      outline: 'none',
      '&:hover': {
        color: Object(__WEBPACK_IMPORTED_MODULE_15_polished__["a" /* darken */])(0.05, '#16b'),
        transition: 'color .3s ease-in-out'
      }
    },
    forgotPasswordWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: 5
    },
    submitBtnWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 42,
      marginTop: 15,
      marginBottom: 10,
      paddingLeft: '0',
      paddingRight: '0',
      fontSize: '1rem',
      backgroundColor: '#272A2E !important',
      borderColor: '#272A2E !important',
      borderRadius: '3px',
      color: '#fff !important',
      transition: 'background-color .2s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: "".concat(Object(__WEBPACK_IMPORTED_MODULE_15_polished__["b" /* lighten */])(0.1, '#272A2E'), " !important"),
        borderColor: "".concat(Object(__WEBPACK_IMPORTED_MODULE_15_polished__["b" /* lighten */])(0.1, '#272A2E'), " !important")
      }
    },
    btnLoading: {
      opacity: '.7',
      pointerEvents: 'none'
    },
    formSubmittingWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    recaptchaWrapper: {
      '& div div': {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  };
};

var LoginModal = (_dec = Object(__WEBPACK_IMPORTED_MODULE_16_material_ui_styles__["withStyles"])(styles), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_11_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginModal, _React$Component);

  function LoginModal(props) {
    var _this;

    _classCallCheck(this, LoginModal);

    _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "formSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        errorsFromServer: '',
        submittingFormToServer: false,
        formSuccessfullySubmitted: false,
        loadingNextPage: false,
        isForgotPasswordType: false,
        passwordSuccessfullyReset: false,
        formValues: null,
        captchaCompleted: !__WEBPACK_IMPORTED_MODULE_23__constants_config__["a" /* isProd */]
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.getFormApi(_this.props.form);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          errorsFromServer: '',
          submittingFormToServer: false,
          formSuccessfullySubmitted: false,
          loadingNextPage: false,
          isForgotPasswordType: false,
          passwordSuccessfullyReset: false,
          formValues: null,
          captchaCompleted: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderServerErrorMessage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__sharedStyledComponents_ServerErrorMessage__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, "".concat(_this.state.errorsFromServer));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleSubmittingFormToServer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.submittingFormToServer;
        var options = arguments.length > 1 ? arguments[1] : undefined;

        _this.setState({
          submittingFormToServer: bool,
          loadingNextPage: options && options.loadingNextPage ? true : _this.state.loadingNextPage
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleIsForgotPasswordType", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
          _this.setState({
            errorsFromServer: '',
            isForgotPasswordType: !_this.state.isForgotPasswordType,
            captchaCompleted: false
          });
        } else {
          _this.setState({
            isForgotPasswordType: !_this.state.isForgotPasswordType,
            captchaCompleted: false
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeLoginModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.closeLoginModal();

        _this.setState({
          isForgotPasswordType: false,
          formValues: null
        });

        if (_this._Recaptcha) {
          _this._Recaptcha.reset();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleValidate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (e && e.preventDefault) e.preventDefault();
        _this.formSubmitted = true;

        if (!_this.state.captchaCompleted) {
          _this.setState({
            errorsFromServer: "Please complete the captcha to ensure that you're not a robot."
          });

          return;
        }

        if (_this.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
          _this.setState({
            errorsFromServer: ''
          });
        }

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            if (_this.state.isForgotPasswordType) {
              _this.handleSubmitForgotPassword(values);
            } else {
              _this.handleSubmitLogin(values);
            }
          }
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmitLogin", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.toggleSubmittingFormToServer(true);

        _this.props.loginUser(values).then(function (res) {
          var hasErrors;

          if (res.error) {
            _this.setState({
              errorsFromServer: typeof res.error === 'string' ? res.error : res.error.message
            });

            hasErrors = true;
          }

          if (_this.state.errorsFromServer && !hasErrors) {
            _this.setState({
              errorsFromServer: ''
            });
          }

          if (hasErrors) {
            _this.toggleSubmittingFormToServer(false);

            return;
          }

          var canAccessBackend = [__WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["agent"], __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["admin"], __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["superAdmin"]].includes(res.user.role);

          if (canAccessBackend) {
            _this.toggleSubmittingFormToServer(false, {
              loadingNextPage: true
            });
          } else {
            _this.toggleSubmittingFormToServer(false);
          }

          console.log(__WEBPACK_IMPORTED_MODULE_18__routes__["Router"].pathname);

          if (res.user) {
            _this.setState({
              formSuccessfullySubmitted: true
            });

            console.log(res.user.role);

            if (res.user.role === __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["agent"]) {
              __WEBPACK_IMPORTED_MODULE_18__routes__["Router"].pushRoute('dashboard');
            } else if (res.user.role === __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["admin"] || res.user.role === __WEBPACK_IMPORTED_MODULE_19__constants_userTypes__["superAdmin"]) {
              __WEBPACK_IMPORTED_MODULE_18__routes__["Router"].pushRoute('admin-dashboard');
            } else if (__WEBPACK_IMPORTED_MODULE_18__routes__["Router"].pathname === '/forgot-password') {
              __WEBPACK_IMPORTED_MODULE_18__routes__["Router"].pushRoute('/');
            } else {
              _this.closeLoginModal();
            }
          } else {
            _this.setState({
              errorsFromServer: "We're sorry, there was an error processing your request."
            });
          }
        }).catch(function (err) {
          _this.toggleSubmittingFormToServer(false);

          console.log(err);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmitForgotPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.toggleSubmittingFormToServer(true);

        _this.props.userForgotPassword(values.email).then(function (res) {
          console.log(res);

          _this.toggleSubmittingFormToServer(false);

          var hasErrors;

          if (res.error) {
            _this.setState({
              errorsFromServer: typeof res.error === 'string' ? res.error : res.error.message
            });

            hasErrors = true;
            return;
          }

          if (_this.state.errorsFromServer) {
            _this.setState({
              errorsFromServer: ''
            });
          }

          if (!hasErrors) {
            _this.setState({
              formSuccessfullySubmitted: true,
              passwordSuccessfullyReset: true
            });
          }
        }).catch(function (err) {
          _this.toggleSubmittingFormToServer(false);

          console.log(err);
        });
      }
    });
    _this.handleSubmit = __WEBPACK_IMPORTED_MODULE_14_debounce___default()(_this.handleSubmit, 300);
    return _this;
  }

  _createClass(LoginModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          loginModalOpen = _props.loginModalOpen;
      var _state = this.state,
          formSuccessfullySubmitted = _state.formSuccessfullySubmitted,
          isForgotPasswordType = _state.isForgotPasswordType,
          submittingFormToServer = _state.submittingFormToServer,
          loadingNextPage = _state.loadingNextPage,
          passwordSuccessfullyReset = _state.passwordSuccessfullyReset;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          isFieldTouched = _props$form.isFieldTouched;
      var emailError = (isFieldTouched('email') || this.formSubmitted) && getFieldError('email');
      var passwordError = (isFieldTouched('password') || this.formSubmitted) && getFieldError('password');
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_modal___default.a, {
        title: this.state.isForgotPasswordType ? 'Forgot Password' : 'Log In',
        visible: loginModalOpen,
        onCancel: this.closeLoginModal,
        wrapClassName: __WEBPACK_IMPORTED_MODULE_13_classnames___default()(classes.verticalModalWrapper, 'login-modal'),
        footer: null,
        destroyOnClose: true,
        closable: !submittingFormToServer && !loadingNextPage,
        maskClosable: !submittingFormToServer && !loadingNextPage,
        afterClose: function afterClose() {
          return _this2.resetState();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, this.state.errorsFromServer ? this.renderServerErrorMessage() : null, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        style: {
          display: submittingFormToServer || loadingNextPage || passwordSuccessfullyReset ? 'none' : undefined
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a, {
        layout: "horizontal",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, !isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email address!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a, {
        type: "email",
        id: "email1",
        required: true,
        size: "large",
        disabled: formSuccessfullySubmitted,
        prefix: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          }
        }),
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      })))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, {
        validateStatus: passwordError ? 'error' : '',
        help: passwordError || '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your password!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a, {
        type: "password",
        size: "large",
        required: true,
        disabled: formSuccessfullySubmitted,
        prefix: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          }
        }),
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }))))), isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, {
        validateStatus: emailError ? 'error' : '',
        help: emailError || '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your email address!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a, {
        type: "email",
        required: true,
        size: "large",
        disabled: formSuccessfullySubmitted,
        prefix: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          }
        }),
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      })))))), !this.state.isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_23__constants_config__["a" /* isProd */] && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.recaptchaWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_react_google_recaptcha__["a" /* default */], {
        ref: function ref(_ref) {
          return _this2._Recaptcha = _ref;
        },
        sitekey: __WEBPACK_IMPORTED_MODULE_21__constants_recaptchaSiteKey__["a" /* default */],
        onChange: function onChange(val) {
          if (!val) {
            _this2.setState({
              captchaCompleted: false
            });
          } else if (_this2.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
            _this2.setState({
              errorsFromServer: '',
              captchaCompleted: true
            });
          } else {
            _this2.setState({
              captchaCompleted: true
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      })), this.state.isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_23__constants_config__["a" /* isProd */] && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.recaptchaWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_react_google_recaptcha__["a" /* default */], {
        ref: function ref(_ref2) {
          return _this2._Recaptcha = _ref2;
        },
        sitekey: __WEBPACK_IMPORTED_MODULE_21__constants_recaptchaSiteKey__["a" /* default */],
        onChange: function onChange(val) {
          if (!val) {
            _this2.setState({
              captchaCompleted: false
            });
          } else if (_this2.state.errorsFromServer === "Please complete the captcha to ensure that you're not a robot.") {
            _this2.setState({
              errorsFromServer: '',
              captchaCompleted: true
            });
          } else {
            _this2.setState({
              captchaCompleted: true
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      })), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        onClick: this.handleValidate,
        disabled: formSuccessfullySubmitted || submittingFormToServer,
        className: __WEBPACK_IMPORTED_MODULE_13_classnames___default()(classes.submitBtnWrapper, submittingFormToServer && classes.btnLoading),
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, this.state.submittingFormToServer && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          marginRight: '10px',
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }), isForgotPasswordType ? 'Reset Password' : 'Submit')), !formSuccessfullySubmitted && !isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.forgotPasswordWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("button", {
        onClick: this.toggleIsForgotPasswordType,
        className: classes.forgotPassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, "Forgot Password?")), !formSuccessfullySubmitted && isForgotPasswordType && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.forgotPasswordWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("button", {
        onClick: this.toggleIsForgotPasswordType,
        className: classes.forgotPassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      }, "Log In?"))), passwordSuccessfullyReset ? __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        }
      }, "Password reset email sent!")) : null, submittingFormToServer || loadingNextPage ? __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem',
          paddingBottom: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, loadingNextPage ? 'Loading Page...' : 'Finishing submission...')) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LoginModal;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component)) || _class) || _class);

var _default = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.create()(LoginModal);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, "FormItem", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndComponents/LoginFormModal/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndComponents/LoginFormModal/index.js");
  reactHotLoader.register(LoginModal, "LoginModal", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndComponents/LoginFormModal/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndComponents/LoginFormModal/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./frontEndContainers/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_debounce__ = __webpack_require__("../node_modules/debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__frontEndComponents_HeaderNav__ = __webpack_require__("./frontEndComponents/HeaderNav/index.js");


var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndContainers/Header.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Header = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onClickBurgerMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(_objectSpread({}, _this.state, {
          appTopBurgerMenuOpen: !_this.state.appTopBurgerMenuOpen
        }));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var res;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.props.logoutUser();

                case 2:
                  res = _context.sent;

                  if (!res.error) {
                    _context.next = 6;
                    break;
                  }

                  _this.setState(_objectSpread({}, _this.state, {
                    errorsFromServer: res.error
                  }));

                  return _context.abrupt("return");

                case 6:
                  if (_this.state.errorsFromServer) {
                    _this.setState(_objectSpread({}, _this.state, {
                      errorsFromServer: ''
                    }));
                  }

                  __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].pushRoute('home');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      errorsFromServer: '',
      appTopBurgerMenuOpen: false
    };
    _this.onLogout = __WEBPACK_IMPORTED_MODULE_3_debounce___default()(_this.onLogout, 500, true);
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__frontEndComponents_HeaderNav__["a" /* default */], {
        isAdmin: this.props.isAdmin,
        isLoggedIn: this.props.isLoggedIn,
        onLogout: this.onLogout,
        openLoginModal: this.props.openLoginModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
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

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)) || _class; // use HOC to access router object inside of component
// useful for accessing props.router.pathname


var _default = Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndContainers/Header.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/frontEndContainers/Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.4b43e57943fa3537baf0.hot-update.js.map