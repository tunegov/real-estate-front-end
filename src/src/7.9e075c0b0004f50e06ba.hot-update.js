webpackHotUpdate(7,{

/***/ "./components/Profile/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText__ = __webpack_require__("../node_modules/buildo-react-components/lib/FormattedText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("../node_modules/@material-ui/icons/Close.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_spinners__ = __webpack_require__("../node_modules/react-spinners/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__ = __webpack_require__("../node_modules/react-icons/lib/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js";

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

















var Loader = __WEBPACK_IMPORTED_MODULE_11_react_spinners__["BounceLoader"];

var styles = function styles(theme) {
  var _profilePicSubstitute, _detailsInfoInput;

  return {
    root: _defineProperty({
      position: 'relative',
      display: 'flex',
      backgroundColor: '#fff',
      padding: '20px 20px',
      borderRadius: '10px',
      color: 'rgba(0,0,0,.8)',
      boxShadow: theme.shadows[1]
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column'
    }),
    leftColumnWrapper: _defineProperty({
      marginRight: '40px'
    }, theme.breakpoints.down('xs'), {
      marginRight: 0
    }),
    rightColumnWrapper: _defineProperty({
      width: '100%'
    }, theme.breakpoints.only('sm'), {
      width: '65%'
    }),
    name: {
      marginBottom: '5px',
      '@media (max-height: 500px)': {
        fontSize: '1.4rem'
      }
    },
    title: {
      color: 'rgba(0,0,0,.7)',
      display: 'block',
      marginBottom: '30px'
    },
    profilePicWrapper: _defineProperty({
      position: 'relative',
      paddingTop: '100%',
      marginBottom: '25px',
      width: '325px',
      height: '325px'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      height: 'auto'
    }),
    profilePicLoader: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#f1eded',
      zIndex: 1
    },
    profilePic: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)'
    },
    profilePicSubstitute: (_profilePicSubstitute = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: 20,
      textAlign: 'center',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
      color: '#fff'
    }, _defineProperty(_profilePicSubstitute, "width", '325px'), _defineProperty(_profilePicSubstitute, "height", '325px'), _defineProperty(_profilePicSubstitute, theme.breakpoints.down('sm'), {
      width: '100%',
      height: 'auto'
    }), _profilePicSubstitute),
    profilePicSubstituteText: {
      positon: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    detailsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.1rem',
      '@media (max-width: 800px)': {
        fontSize: '0.9rem'
      }
    },
    details: {
      display: 'flex',
      width: '100%',
      textAlign: 'center',
      marginBottom: '5px',
      '@media (max-width: 800px)': {
        fontSize: '0.9rem'
      }
    },
    detailsTitle: {
      display: 'inline-block',
      fontWeight: '500',
      marginBottom: '8px',
      marginRight: 10
    },
    detailsInfo: {
      marginLeft: 'auto',
      fontWeight: '300'
    },
    descriptionWrapper: {
      '& > span': {
        lineHeight: '1.4rem'
      },
      '@media (max-width: 800px)': {
        fontSize: '0.8rem'
      }
    },
    descriptionTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '10px',
      '@media (max-width: 500px)': {
        fontSize: '0.9rem'
      }
    },
    socialMediaWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }, theme.breakpoints.down('sm'), {
      marginBottom: 40
    }),
    socialMediaTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      alignText: 'center'
    },
    socialMediaItemsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      width: '100%'
    },
    socialMediaItemWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 'auto',
      width: '55px',
      height: '55px',
      border: '1px solid rgba(0,0,0,.3)',
      borderColor: 'rgba(0,0,0,.3)',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '22px',
      color: 'rgba(0,0,0,.7)',
      transition: 'border-color .2s ease-in-out, color .2s ease-in-out',
      '&:hover': {
        borderColor: 'rgba(0,0,0,.9)',
        color: 'rgba(0,0,0,.8)'
      },
      '@media (max-width: 800px)': {
        width: '45px',
        height: '45px'
      }
    },
    editBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#008205',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)'
      }
    },
    editProfilePicBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#646d64',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)'
      }
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    },
    editProfilePicBtnsWrapper: _defineProperty({
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    }, theme.breakpoints.down('xs'), {
      right: 'auto',
      left: '-13px'
    }),
    cancelBtn: {
      backgroundColor: theme.palette.secondary.main,
      marginRight: '8px'
    },
    saveBtn: {
      backgroundColor: '#4CAF50'
    },
    descriptionDetailsInput: {
      padding: '10px',
      width: '100%',
      fontSize: '1rem',
      color: 'rgba(0,0,0,.8)',
      borderRadius: '3px',
      lineHeight: '1.4rem',
      borderColor: 'rgba(0,0,0,.1)',
      boxShadow: "inset ".concat(theme.shadows[1])
    },
    detailsInfoInput: (_detailsInfoInput = {
      padding: '0',
      marginLeft: 'auto'
    }, _defineProperty(_detailsInfoInput, "padding", '5px'), _defineProperty(_detailsInfoInput, "fontWeight", '300'), _defineProperty(_detailsInfoInput, "color", 'rgba(0,0,0,.8)'), _defineProperty(_detailsInfoInput, "fontSize", '.8rem'), _defineProperty(_detailsInfoInput, "borderRadius", '3px'), _defineProperty(_detailsInfoInput, "borderColor", 'rgba(0,0,0,.1)'), _defineProperty(_detailsInfoInput, "boxShadow", "inset ".concat(theme.shadows[1])), _detailsInfoInput),
    close: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4
    },
    snackBar: {
      transform: 'translate(0px, -25px)'
    },
    popupMenuTitle: {
      display: 'flex',
      justifyContent: 'center',
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
    menuItemAccept: {
      display: 'flex !important',
      justifyContent: 'center !important',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
      '&:hover': {
        backgroundColor: "".concat(theme.custom.submitBlue.light, " !important"),
        color: '#fff !important'
      }
    }
  };
};

var Profile = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "errorTimeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._img && _this._img.complete) {
          _this.props.toggleIsLoadingProfilePicture(false);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, reason) {
        if (reason === 'clickaway') {
          return;
        }

        _this.setState({
          open: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnTitle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(role, title) {
        switch (role) {
          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["agent"]:
            return title ? Object(__WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__["a" /* capitalize */])(title) : 'Licensed Real Estate Salesperson';
            break;

          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"]:
            return 'Admin';
            break;

          case __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"]:
            return 'Super-Admin';
            break;

          default:
            return '';
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEditAgentMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          editAgentAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleEditAgentMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          editAgentAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderProfilePic", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            isLoadingProfilePicture = _this$props.isLoadingProfilePicture,
            classes = _this$props.classes,
            agent = _this$props.agent,
            currentUserUUID = _this$props.currentUserUUID,
            currentUserRole = _this$props.currentUserRole,
            toggleIsLoadingProfilePicture = _this$props.toggleIsLoadingProfilePicture,
            openProfilePicEditor = _this$props.openProfilePicEditor;
        var canEdit = currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"];
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          }
        }, isLoadingProfilePicture && agent.agent.profilePicURL && !_this.state.imageError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicLoader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          }
        })))), agent.agent.profilePicURL ? !_this.state.imageError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          id: "agentProfilePic",
          className: classes.profilePic,
          ref: function ref(img) {
            return _this._img = img;
          },
          src: agent.agent.profilePicURL,
          alt: "Agent",
          onLoad: function onLoad() {
            _this.setState({
              imageError: false
            });

            toggleIsLoadingProfilePicture(false);
          },
          onError: function onError() {
            return _this.setState({
              imageError: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          }
        }, "Error loading profile picture...")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          }
        }, "No profile photo available")), canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: classes.editProfilePicBtnsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: classes.editProfilePicBtn,
          onClick: openProfilePicEditor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaPencil"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          }
        }))));
      }
    });
    _this.state = {
      open: false,
      Transition: null,
      editAgentAnchorEl: null,
      imageError: false
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          agent = _props.agent,
          classes = _props.classes,
          enterEditingMode = _props.enterEditingMode,
          cancelEditingMode = _props.cancelEditingMode,
          isEditing = _props.isEditing,
          setDescription = _props.setDescription,
          setMobileNumber = _props.setMobileNumber,
          saveUser = _props.saveUser,
          undoSave = _props.undoSave,
          openProfilePicEditor = _props.openProfilePicEditor,
          uuid = _props.uuid,
          currentUserRole = _props.currentUserRole,
          currentUserUUID = _props.currentUserUUID,
          openEditAgentDialogBox = _props.openEditAgentDialogBox,
          openEditAgentPasswordDialogBox = _props.openEditAgentPasswordDialogBox,
          isLoadingProfilePicture = _props.isLoadingProfilePicture,
          toggleIsLoadingProfilePicture = _props.toggleIsLoadingProfilePicture;
      var firstName = agent.firstName,
          lastName = agent.lastName,
          email = agent.email,
          role = agent.role,
          _agent$agent = agent.agent,
          profileDescription = _agent$agent.profileDescription,
          mobileNumber = _agent$agent.mobileNumber,
          officeNumber = _agent$agent.officeNumber,
          branch = _agent$agent.branch,
          profilePicURL = _agent$agent.profilePicURL,
          title = _agent$agent.title,
          facebook = _agent$agent.facebook,
          twitter = _agent$agent.twitter,
          instagram = _agent$agent.instagram;
      var editAgentAnchorEl = this.state.editAgentAnchorEl;
      var name = Object(__WEBPACK_IMPORTED_MODULE_14__utils_stringUtils__["a" /* capitalize */])("".concat(firstName, " ").concat(lastName));
      var canEdit = currentUserUUID === uuid || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_12__constants_userTypes__["superAdmin"];
      var editingOwnProfile = currentUserUUID === uuid;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.editBtn,
        onClick: this.handleEditAgentMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaPencil"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: editAgentAnchorEl,
        open: Boolean(editAgentAnchorEl),
        onClose: this.handleEditAgentMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        }
      }, "Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentPasswordDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.leftColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        }
      }, this.renderProfilePic(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.email, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, email)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        }
      }, "Office"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, officeNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, "Mobile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, mobileNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.region, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      }, "Branch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }, branch)), facebook || instagram || twitter ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }, "Social Media:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaItemsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, facebook && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: facebook,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaFacebook"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      })), twitter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: twitter,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaTwitter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      })), instagram && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: instagram,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa__["FaInstagram"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        }
      })))) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.rightColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: classes.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631
        }
      }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, this.returnTitle(role, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        }
      }, "About ", name.split(' ')[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_buildo_react_components_lib_FormattedText___default.a, {
        className: classes.descriptionDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        }
      }, profileDescription || 'No description available yet...')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Snackbar___default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: isEditing ? false : this.state.open,
        autoHideDuration: 6000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          }
        }, "Profile saved"),
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleClose();

            undoSave();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 660
          }
        }, "UNDO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 671
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
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

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = Profile;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(Profile, "Profile", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.9e075c0b0004f50e06ba.hot-update.js.map