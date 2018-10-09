webpackHotUpdate(7,{

/***/ "./constants/graphDataModels.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return returnMonthlyDollarDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return returnMonthlyDealNumberDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return returnNumberDealsDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return returnYearlyDollarDealsDataContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var returnMonthlyDollarDataContainer = function returnMonthlyDollarDataContainer() {
  return {
    Jan: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Feb: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Mar: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Apr: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    May: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    June: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Jul: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Aug: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Sep: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Oct: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Nov: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Dec: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    }
  };
};
var returnMonthlyDealNumberDataContainer = function returnMonthlyDealNumberDataContainer() {
  return {
    Jan: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Feb: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Mar: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Apr: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    May: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    June: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Jul: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Aug: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Sep: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Oct: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Nov: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    },
    Dec: {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    }
  };
};
var returnNumberDealsDataContainer = function returnNumberDealsDataContainer() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_0_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    };
  });
  return data;
};
var returnYearlyDollarDealsDataContainer = function returnYearlyDollarDealsDataContainer() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_0_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': 0,
      'Com Rentals': 0,
      'Res Sales': 0,
      'Res Rentals': 0
    };
  });
  return data;
};
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(returnMonthlyDollarDataContainer, "returnMonthlyDollarDataContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/constants/graphDataModels.js");
  reactHotLoader.register(returnMonthlyDealNumberDataContainer, "returnMonthlyDealNumberDataContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/constants/graphDataModels.js");
  reactHotLoader.register(returnNumberDealsDataContainer, "returnNumberDealsDataContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/constants/graphDataModels.js");
  reactHotLoader.register(returnYearlyDollarDealsDataContainer, "returnYearlyDollarDealsDataContainer", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/constants/graphDataModels.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.f948861c27c87593a16b.hot-update.js.map