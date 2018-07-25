webpackHotUpdate(6,{

/***/ "./components/dataTableFormatters/ProfilePictureFormatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload__ = __webpack_require__("../node_modules/react-lazyload/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/ProfilePictureFormatter.js";

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








var styles = function styles(theme) {
  return {
    wrapper: {
      width: '38px',
      height: '38px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box'
    },
    image: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      cursor: 'pointer',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)'
    },
    noImagePlaceholder: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
      color: '#fff'
    }
  };
};

var ProfilePictureFormatter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePictureFormatter, _React$Component);

  function ProfilePictureFormatter() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProfilePictureFormatter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProfilePictureFormatter.__proto__ || Object.getPrototypeOf(ProfilePictureFormatter)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "hideBrokenImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this._imgItem.style.visibility = 'hidden';
      }
    }), _temp));
  }

  _createClass(ProfilePictureFormatter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._imgItem) {
        this._imgItem.addEventListener('error', this.hideBrokenImage);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._imgItem) {
        this._imgItem.removeEventListener('error', this.hideBrokenImage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$value = this.props.value,
          id = _props$value.id,
          imageAltText = _props$value.imageAltText,
          imageURL = _props$value.imageURL;
      var classes = this.props.classes;

      if (!imageURL) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default.a, {
          title: "Click to view profile",
          enterDelay: 400,
          leaveDelay: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
          route: "profile",
          params: {
            id: id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          style: {
            textDexoration: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.noImagePlaceholder,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, "?")))));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default.a, {
        title: "Click to view profile",
        enterDelay: 400,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: "profile",
        params: {
          id: id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          textDexoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_lazyload___default.a, {
        height: 38,
        offset: 100,
        once: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: classes.image,
        ref: function ref(imgItem) {
          return _this2._imgItem = imgItem;
        },
        src: imageURL,
        alt: imageAltText || 'unable to load profile picture',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ProfilePictureFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(ProfilePictureFormatter);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/ProfilePictureFormatter.js");
  reactHotLoader.register(ProfilePictureFormatter, "ProfilePictureFormatter", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/ProfilePictureFormatter.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/ProfilePictureFormatter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.83cbbff6d5e7af90161e.hot-update.js.map