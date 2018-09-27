webpackHotUpdate(10,{

/***/ "./utils/currency.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toLocaleCurrency; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math__ = __webpack_require__("./utils/Math.js");
(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var toLocaleCurrency = function toLocaleCurrency(amount) {
  var percision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  console.log(amount);
  return Object(__WEBPACK_IMPORTED_MODULE_0__Math__["b" /* round */])(amount).toLocaleString('en-EN', {
    minimumFractionDigits: percision,
    maximumFractionDigits: percision
  });
};
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(toLocaleCurrency, "toLocaleCurrency", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/currency.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=10.d0e31f9ad8272eaf4845.hot-update.js.map