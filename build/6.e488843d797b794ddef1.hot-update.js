webpackHotUpdate(6,{

/***/ "./effects/deals/getDealUploadsSignedURLS.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__("./effects/client.js");
(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var query = "\n  mutation getDealFileUploadsSignedURLS($input: [GetSignedURLSInput!]!) {\n    getDealFileUploadsSignedURLS(input: $input) {\n      dealID\n      items {\n        itemName\n        fileName\n        signedURL\n        uuid\n        error\n      }\n      error\n    }\n  }\n";

var getDealUploadsSignedURLS = function getDealUploadsSignedURLS(values, dealID) {
  var res;
  var error;
  console.log('values', values);
  console.log('dealID', dealID);
  var variables = {
    input: values,
    dealID: dealID
  };
  var finalResponseObj = {
    dealID: null,
    items: null,
    error: error
  };
  return __WEBPACK_IMPORTED_MODULE_0__client__["a" /* graphQlClient */].request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.getDealFileUploadsSignedURLS;
    var items = data.items,
        dealID = data.dealID;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.items = items;
      finalResponseObj.dealID = dealID;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

var _default = getDealUploadsSignedURLS;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/effects/deals/getDealUploadsSignedURLS.js");
  reactHotLoader.register(getDealUploadsSignedURLS, "getDealUploadsSignedURLS", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/effects/deals/getDealUploadsSignedURLS.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/effects/deals/getDealUploadsSignedURLS.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.e488843d797b794ddef1.hot-update.js.map