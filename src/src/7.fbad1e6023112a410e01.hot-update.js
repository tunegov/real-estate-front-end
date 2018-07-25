webpackHotUpdate(7,{

/***/ "./containers/EditProfilePicForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forms_EditProfilePicForm__ = __webpack_require__("./components/forms/EditProfilePicForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_getProfilePicSignedURL__ = __webpack_require__("./effects/getProfilePicSignedURL.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_users_setAgentProfilePic__ = __webpack_require__("./effects/users/setAgentProfilePic.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditProfilePicForm.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var EditProfilePicFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProfilePicFormContainer, _Component);

  function EditProfilePicFormContainer(props) {
    var _this;

    _classCallCheck(this, EditProfilePicFormContainer);

    _this = _possibleConstructorReturn(this, (EditProfilePicFormContainer.__proto__ || Object.getPrototypeOf(EditProfilePicFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          imageFile: file
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clearImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          imageFile: '',
          imageFileConfirmed: false,
          confirmedImageDataURL: null
        });

        if (_this._fileUploadInput) {
          _this._fileUploadInput.value = null;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getFileUploadInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(input) {
        _this._fileUploadInput = input;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getProfilePicEditor", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(editor) {
        _this._profilePicEditor = editor;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setImageScale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(num) {
        var rawScale = Number(num);
        var adjustedImageScale = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Math__["a" /* round */])(1 + rawScale / 100, 2);

        _this.setState({
          imageScale: rawScale,
          adjustedImageScale: adjustedImageScale
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "confirmImageFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._profilePicEditor) {
          // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
          // drawn on another canvas, or added to the DOM.
          var canvas = _this._profilePicEditor.getImage();

          canvas.toBlob(function (blob) {
            _this.setState({
              imageBlob: blob,
              imageFileConfirmed: true,
              loadingSetImg: true,
              confirmedImageDataURL: URL.createObjectURL(blob)
            });
          }); // If you want the image resized to the canvas size (also a HTMLCanvasElement)
          // const canvasScaled = this._profilePicEditor.getImageScaledToCanvas();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setFinishedLoadingImg", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          loadingSetImg: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        var _this$state = _this.state,
            imageFile = _this$state.imageFile,
            imageFileConfirmed = _this$state.imageFileConfirmed,
            imageBlob = _this$state.imageBlob;
        if (!imageFile || !imageFileConfirmed) return;

        _this.props.setFormSubmitted();

        var returnValues = {
          fileName: imageFile.name,
          fileType: imageFile.type,
          uuid: _this.props.uuid
        };
        console.log(returnValues);

        _this.setState({
          submittingFormToServer: true
        });

        _this.props.toggleSubmittingEditProfilePicForm(true);

        Object(__WEBPACK_IMPORTED_MODULE_5__effects_getProfilePicSignedURL__["a" /* default */])(returnValues).then(function (result) {
          var item = result.item,
              error = result.error;
          var hasError;

          if (error) {
            console.log(error);
            hasError = true;
          }

          if (!item && item[0] && item[0].error) {
            console.log(item[0].error);
            hasError = true;
          }

          if (hasError) {
            _this.setState({
              submittingFormToServer: false
            });

            _this.props.openRequestErrorSnackbar();

            _this.props.toggleSubmittingEditProfilePicForm(false);

            _this.props.setFormSubmitted(false);

            return;
          }

          if (item[0].signedURL) {
            __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put(item[0].signedURL, imageBlob, {
              headers: {
                'Content-Type': _this.state.imageFile.type
              },
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;

                _this.setState({
                  formSubmitedSuccessfully: true,
                  submittingFormToServer: Math.floor(loadedPercent) ? false : true,
                  uplodingImageProgress: Math.floor(loadedPercent),
                  isUploadingImage: loadedPercent >= 100 ? false : true
                });
              }
            }).then(function (response) {
              var status = "".concat(response.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  isUploadingImage: false
                });

                _this.props.setFormSubmitted(false);

                if (_this.props.openRequestErrorSnackbar) {
                  _this.props.openRequestErrorSnackbar('There was an error uploading your file. Please try again shortly.');
                }

                return;
              }

              Object(__WEBPACK_IMPORTED_MODULE_6__effects_users_setAgentProfilePic__["a" /* default */])(_this.props.uuid, item[0].fileName).then(function (res) {
                console.log("data url: ".concat(_this.state.confirmedImageDataURL));

                _this.props.setFinishedSubmittingForm(res.url);

                _this.props.setFormSubmitted(false);
              });
            });
          }
        }).catch(function (err) {
          console.log(err);

          _this.setState({
            submittingFormToServer: false
          });

          _this.props.openRequestErrorSnackbar('There was an error uploading your image.');

          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingEditProfilePicForm(true);
        });
      }
    });
    _this.state = {
      imageFile: '',
      imageFileConfirmed: false,
      confirmedImageDataURL: null,
      imageScale: 0,
      adjustedImageScale: 1,
      loadingSetImg: false,
      uplodingImageProgress: 0,
      isUploadingImage: false,
      formSubmitedSuccessfully: false,
      imageBlob: null,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(EditProfilePicFormContainer, [{
    key: "onSubmitFailure",
    value: function onSubmitFailure(errs, onSubmitError) {
      console.log(errs);
      console.log(onSubmitError);
      this.props.setFormSubmitted(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_forms_EditProfilePicForm__["a" /* default */], _extends({
        submittingFormToServer: this.state.submittingFormToServer,
        onSubmit: this.onSubmit,
        onSubmitFailure: this.onSubmitFailure,
        setImageFile: this.setImageFile,
        imageFile: this.state.imageFile,
        imageScale: this.state.imageScale,
        setImageScale: this.setImageScale,
        adjustedImageScale: this.state.adjustedImageScale,
        getFileUploadInput: this.getFileUploadInput,
        clearImageFile: this.clearImageFile,
        getProfilePicEditor: this.getProfilePicEditor,
        imageFileConfirmed: this.state.imageFileConfirmed,
        confirmImageFile: this.confirmImageFile,
        confirmedImageDataURL: this.state.confirmedImageDataURL,
        loadingSetImg: this.state.loadingSetImg,
        setFinishedLoadingImg: this.setFinishedLoadingImg,
        uplodingImageProgress: this.state.uplodingImageProgress,
        formSubmitedSuccessfully: this.state.formSubmitedSuccessfully,
        isUploadingImage: this.state.isUploadingImage,
        getFormApi: function getFormApi(formApi) {
          console.log(formApi);
          _this2._formApi = formApi;
        }
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EditProfilePicFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

var _default = EditProfilePicFormContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditProfilePicFormContainer, "EditProfilePicFormContainer", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditProfilePicForm.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditProfilePicForm.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.fbad1e6023112a410e01.hot-update.js.map