webpackHotUpdate(7,{

/***/ "./containers/Profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker__ = __webpack_require__("../node_modules/faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Profile__ = __webpack_require__("./components/Profile/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_EditProfilePicDialogBox__ = __webpack_require__("./components/EditProfilePicDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_EditAgentDialogBox__ = __webpack_require__("./components/EditAgentDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_EditAgentPasswordDialogBox__ = __webpack_require__("./components/EditAgentPasswordDialogBox/index.js");
var _dec,
    _class,
    _class2,
    _temp,
    _initialiseProps,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/Profile.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var styles = function styles(theme) {
  return {
    submitInvoiceBtn: {},
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

var ProfileContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileContainer, _Component);

  function ProfileContainer(props) {
    var _this;

    _classCallCheck(this, ProfileContainer);

    _this = _possibleConstructorReturn(this, (ProfileContainer.__proto__ || Object.getPrototypeOf(ProfileContainer)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var agent = _this.props.agent;
    _this.state = {
      user: agent,
      isEditing: false,
      profilePicEditorDialogBoxOpen: false,
      submittingEditProfilePicForm: false,
      editProfilePicFormSubmitted: false,
      editAgentModalOpen: false,
      editAgentDialogBoxOpen: false,
      editAgentPasswordDialogBoxOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      isLoadingProfilePicture: true
    };
    return _this;
  }

  _createClass(ProfileContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isEditing = _state.isEditing,
          profileEdited = _state.profileEdited,
          profilePicEditorDialogBoxOpen = _state.profilePicEditorDialogBoxOpen,
          submittingEditProfilePicForm = _state.submittingEditProfilePicForm,
          editProfilePicFormSubmitted = _state.editProfilePicFormSubmitted,
          isLoadingProfilePicture = _state.isLoadingProfilePicture;
      var toggleEditingMode = this.toggleEditingMode,
          toggleProfileEdited = this.toggleProfileEdited,
          setMobileNumber = this.setMobileNumber,
          setDescription = this.setDescription,
          enterEditingMode = this.enterEditingMode,
          cancelEditingMode = this.cancelEditingMode,
          saveUser = this.saveUser,
          openProfilePicEditor = this.openProfilePicEditor,
          closeProfilePicEditor = this.closeProfilePicEditor,
          undoSave = this.undoSave,
          toggleEditAgentModal = this.toggleEditAgentModal;
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Profile__["a" /* default */], {
        agent: this.state.user,
        isEditing: isEditing,
        enterEditingMode: enterEditingMode,
        cancelEditingMode: cancelEditingMode,
        profileEdited: profileEdited,
        toggleProfileEdited: toggleProfileEdited,
        setMobileNumber: setMobileNumber,
        setDescription: setDescription,
        saveUser: saveUser,
        undoSave: undoSave,
        openProfilePicEditor: openProfilePicEditor,
        currentUserRole: this.props.currentUserRole,
        currentUserUUID: this.props.currentUserUUID,
        openEditAgentDialogBox: this.openEditAgentDialogBox,
        openEditAgentPasswordDialogBox: this.openEditAgentPasswordDialogBox,
        uuid: this.props.uuid,
        isLoadingProfilePicture: isLoadingProfilePicture,
        toggleIsLoadingProfilePicture: this.toggleIsLoadingProfilePicture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_EditAgentDialogBox__["a" /* default */], {
        open: this.state.editAgentDialogBoxOpen,
        closeEditAgentDialogBox: this.closeEditAgentDialogBox,
        confirmAgentCreated: this.confirmAgentCreated,
        viewingAgentUUID: this.props.uuid,
        currentUserRole: this.props.currentUserRole,
        agentSuccessfullyDeleted: this.agentSuccessfullyDeleted,
        editAgentFormSubmittedSuccessfully: this.editAgentFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_EditAgentPasswordDialogBox__["a" /* default */], {
        closeEditAgentPasswordDialogBox: this.closeEditAgentPasswordDialogBox,
        open: this.state.editAgentPasswordDialogBoxOpen,
        viewingAgentUUID: this.props.uuid,
        editPasswordFormSubmittedSuccessfully: this.editPasswordFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_EditProfilePicDialogBox__["a" /* default */], {
        submitProfilePicEditForm: this.submitProfilePicEditForm,
        closeProfilePicEditor: closeProfilePicEditor,
        open: profilePicEditorDialogBoxOpen,
        confirmProfilePicSubmitted: this.confirmProfilePicSubmitted,
        setFinishedSubmittingForm: this.setFinishedSubmittingForm,
        submittingEditProfilePicForm: submittingEditProfilePicForm,
        editProfilePicFormSubmitted: editProfilePicFormSubmitted,
        setFormSubmitted: this.setFormSubmitted,
        createProfilePicDataURL: this.createProfilePicDataURL,
        toggleSubmittingEditProfilePicForm: this.toggleSubmittingEditProfilePicForm,
        uuid: this.props.uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar___default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Button___default.a, {
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
            lineNumber: 283
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
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

  return ProfileContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "openProfilePicEditor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeProfilePicEditor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: false,
        editProfilePicFormSubmitted: false
      });
    }
  });
  Object.defineProperty(this, "confirmProfilePicSubmitted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        profilePicEditorDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "toggleIsLoadingProfilePicture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      console.log("loaded: ".concat(bool));

      _this3.setState({
        isLoadingProfilePicture: bool
      });
    }
  });
  Object.defineProperty(this, "setFinishedSubmittingForm", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(url) {
      var user = _this3.state.user;

      _this3.setState({
        user: _objectSpread({}, user, {
          agent: _objectSpread({}, user.agent, {
            profilePicURL: "".concat(url, "?cacheBust=").concat(__WEBPACK_IMPORTED_MODULE_2_faker___default.a.random.uuid())
          })
        }),
        profilePicEditorDialogBoxOpen: false,
        isLoadingProfilePicture: true,
        submittingEditProfilePicForm: false,
        editProfilePicFormSubmitted: false,
        snackbarOpen: true,
        snackbarText: 'Profile picture successfully changed!'
      }, function () {
        var picEl = document.getElementById('agentProfilePic');

        if (picEl) {
          picEl.src = "".concat(url, "?cache=").concat(__WEBPACK_IMPORTED_MODULE_2_faker___default.a.random.uuid());
        }
      });
    }
  });
  Object.defineProperty(this, "editPasswordFormSubmittedSuccessfully", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: false,
        snackbarOpen: true,
        snackbarText: 'Password successfully changed!'
      });
    }
  });
  Object.defineProperty(this, "editAgentFormSubmittedSuccessfully", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(agent) {
      _this3.setState({
        user: agent,
        editAgentDialogBoxOpen: false,
        snackbarOpen: true,
        snackbarText: 'Agent Information successfully updated!'
      });
    }
  });
  Object.defineProperty(this, "toggleSubmittingEditProfilePicForm", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(bool) {
      _this3.setState({
        submittingEditProfilePicForm: typeof bool === 'boolean' ? bool : !_this3.state.submittingEditProfilePicForm
      });
    }
  });
  Object.defineProperty(this, "setFormSubmitted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editProfilePicFormSubmitted: true
      });
    }
  });
  Object.defineProperty(this, "toggleEditAgentModal", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      var editAgentModalOpen = _this3.state.editAgentModalOpen;

      _this3.setState({
        editAgentModalOpen: typeof state === 'boolean' ? state : !editAgentModalOpen
      });
    }
  });
  Object.defineProperty(this, "openEditAgentDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeEditAgentDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "openEditAgentPasswordDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: true
      });
    }
  });
  Object.defineProperty(this, "closeEditAgentPasswordDialogBox", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        editAgentPasswordDialogBoxOpen: false
      });
    }
  });
  Object.defineProperty(this, "handleCloseSnackbar", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        snackbarOpen: false,
        snackbarUndoFunction: null
      });
    }
  });
  Object.defineProperty(this, "agentSuccessfullyDeleted", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        snackbarOpen: true,
        snackbarText: 'Agent has been successfully deleted!'
      });

      _this3.props.setAgentDeleted();
    }
  });
  Object.defineProperty(this, "createProfilePicDataURL", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(blob) {
      return URL.createObjectURL(blob);
    }
  });
}, _temp)) || _class) || _class);
var _default = ProfileContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/Profile.js");
  reactHotLoader.register(ProfileContainer, "ProfileContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/Profile.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/Profile.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.822c848852eadd3cc34b.hot-update.js.map