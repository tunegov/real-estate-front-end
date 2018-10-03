webpackHotUpdate(6,{

/***/ "./components/ViewDealDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("../node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_ViewDealForm__ = __webpack_require__("./containers/ViewDealForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_deals_acceptDeal__ = __webpack_require__("./effects/deals/acceptDeal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__effects_deals_deleteDeal__ = __webpack_require__("./effects/deals/deleteDeal.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/ViewDealDialogBox/index.js";

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

















var networkErrorMessage = "We're sorry. There was an error processing your request.";

var styles = function styles(theme) {
  return {
    paper: {
      width: '800px',
      maxWidth: '800px'
    },
    dialogActions: {
      margin: '8px 0'
    },
    formTitle: {
      padding: 'theme.spacing.unit theme.spacing.unit * 3',
      textAlign: 'center'
    },
    formSubheader: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 6,
      marginTop: theme.spacing.unit * 2,
      textAlign: 'center'
    },
    dialogContent: {
      paddingTop: '32px'
    },
    editDealBtn: {
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
      }
    },
    popupMenuTitle: {
      outline: 'none',
      padding: '12px 16px',
      width: 'auto',
      color: 'rgba(0, 0, 0, 0.87)',
      height: '24px',
      overflow: 'hidden',
      fontSize: '1rem',
      boxSizing: 'content-box',
      fontWeight: '400',
      lineHeight: '1.5em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      whiteSpace: 'nowrap',
      paddingLeft: '16px',
      textOverflow: 'ellipsis',
      paddingRight: '16px',
      borderBottom: '1px solid rgba(0,0,0,.1)',
      pointerEvents: 'none'
    },
    menuItem: {
      display: 'flex !important',
      justifyContent: 'center !important'
    },
    menuItemDelete: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.palette.secondary.light, " !important"),
        color: '#fff !important'
      }
    },
    menuItemAccept: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.custom.submitBlue.light, " !important"),
        color: '#fff !important'
      }
    },
    snackBar: {
      position: 'absolute',
      bottom: 20
    },
    errorSnackbar: {
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  };
};

var SubmitDealDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealDialogBox, _Component);

  function SubmitDealDialogBox(props) {
    var _this;

    _classCallCheck(this, SubmitDealDialogBox);

    _this = _possibleConstructorReturn(this, (SubmitDealDialogBox.__proto__ || Object.getPrototypeOf(SubmitDealDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          isEditingDeal: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleSnackbarOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(text) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: text
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
          snackbarUndoFunction: null,
          isErrorSnackbar: false,
          snackbarText: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openRequestErrorSnackbar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : networkErrorMessage;

        _this.setState({
          snackbarOpen: true,
          snackbarText: text,
          isErrorSnackbar: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleEditingDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingDeal: typeof bool === 'boolean' ? bool : !_this.state.isEditingDeal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCancelMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          cancelAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCancelMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          cancelAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAcceptMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          acceptAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAcceptMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          acceptAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onBonusChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var dollarRegex = /^\d*(\.\d*)?$/;
        var val = target.value;
        if (!dollarRegex.test(val)) return;

        _this.setState({
          dealBonus: val
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetDealBonus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealBonus: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "acceptDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        var dealBonus = _this.state.dealBonus;

        _this.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_14__effects_deals_acceptDeal__["a" /* default */])(dealID, Number(dealBonus) ? Number(dealBonus) : undefined).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);

            return;
          }

          if (res.userErrors.length) {
            _this.openRequestErrorSnackbar(res.userErrors[0]);

            return;
          }

          _this.props.dealAccepted(dealID);
        }).catch(function (err) {
          _this.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteDeal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_15__effects_deals_deleteDeal__["a" /* default */])(dealID).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);

            return;
          }

          _this.props.dealDeleted(dealID);
        }).catch(function (err) {
          _this.toggleSubmittingRequestToServer(true);

          _this.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleSubmittingRequestToServer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.submittingRequestToServer;

        _this.setState({
          submittingRequestToServer: bool,
          formSubmitted: bool
        });
      }
    });
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      isEditingDeal: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
      dealBonus: '',
      submittingRequestToServer: false,
      isErrorSnackbar: false
    };
    return _this;
  }

  _createClass(SubmitDealDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeDealsViewDialogBox = _props.closeDealsViewDialogBox,
          dealsViewDialogBoxOpen = _props.dealsViewDialogBoxOpen,
          setDealSuccessfullySubmitted = _props.setDealSuccessfullySubmitted,
          viewingDealID = _props.viewingDealID,
          viewingDealStatus = _props.viewingDealStatus,
          isCoAgent = _props.isCoAgent;
      var _state = this.state,
          isEditingDeal = _state.isEditingDeal,
          cancelAnchorEl = _state.cancelAnchorEl,
          acceptAnchorEl = _state.acceptAnchorEl;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: dealsViewDialogBoxOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, "View Deal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_ViewDealForm__["a" /* default */], {
        userUUID: this.props.userUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setDealSuccessfullySubmitted: setDealSuccessfullySubmitted,
        dealID: viewingDealID,
        isEditingDeal: isEditingDeal,
        isViewType: true,
        userRole: this.props.userRole,
        dealAccepted: this.props.dealAccepted,
        onBonusChange: this.onBonusChange,
        dealBonus: this.state.dealBonus,
        resetDealBonus: this.resetDealBonus,
        submittingRequestToServer: this.state.submittingRequestToServer,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_10_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
            lineNumber: 304
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          _this2.toggleEditingDeal(false);

          closeDealsViewDialogBox();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, "Cancel"), this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["agent"] && viewingDealStatus === 'pending' || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["superAdmin"] || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["admin"] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, "Delete") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemDelete
        },
        onClick: function onClick() {
          _this2.handleCancelMenuClose();

          _this2.deleteDeal(viewingDealID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, "No")), !isEditingDeal && this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["agent"] && viewingDealStatus === 'pending' && !isCoAgent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          return _this2.toggleEditingDeal(true);
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, "Edit") : null, (this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["admin"] || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["superAdmin"]) && viewingDealStatus === 'pending' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, "Accept Deal") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: acceptAnchorEl,
        open: Boolean(acceptAnchorEl),
        onClose: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleAcceptMenuClose();

          _this2.acceptDeal(viewingDealID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, "No")), isEditingDeal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          var errors = _this2.state.formApi.getError();

          var errorCount;
          console.log(_this2.state.formApi.getError());

          if (errors) {
            errorCount = Object.keys(_this2.state.formApi.getError()).length;
          }

          if (errorCount) {
            _this2.toggleSnackbarOpen("Please correct ".concat(errorCount, " form error").concat(errorCount > 1 ? 's' : ''));
          }

          _this2.state.formApi.submitForm();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, "Submit") : null) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SubmitDealDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles)(SubmitDealDialogBox));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(networkErrorMessage, "networkErrorMessage", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/ViewDealDialogBox/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/ViewDealDialogBox/index.js");
  reactHotLoader.register(SubmitDealDialogBox, "SubmitDealDialogBox", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/ViewDealDialogBox/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/ViewDealDialogBox/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.8c6e36ba2c98f30f81ba.hot-update.js.map