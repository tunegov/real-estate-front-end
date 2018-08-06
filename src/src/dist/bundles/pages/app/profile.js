module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/antd/dist/antd.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-circular-progressbar/dist/styles.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./AppGlobalStateProvider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/AppGlobalStateProvider/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

var AppProvider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppProvider, _React$Component);

  function AppProvider() {
    _classCallCheck(this, AppProvider);

    return _possibleConstructorReturn(this, (AppProvider.__proto__ || Object.getPrototypeOf(AppProvider)).apply(this, arguments));
  }

  _createClass(AppProvider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          UserStore = _props.UserStore,
          UIStore = _props.UIStore;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AppContext.Provider, {
        value: {
          UserStore: UserStore,
          UIStore: UIStore
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;



/***/ }),

/***/ "./components/AdminAreaDealsTable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__ = __webpack_require__("@devexpress/dx-react-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Equalizer__ = __webpack_require__("@material-ui/icons/Equalizer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Equalizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_SelectFilterCell__ = __webpack_require__("./utils/backEndTableUtils/SelectFilterCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__ = __webpack_require__("./utils/backEndTableUtils/tableSortingUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_DefaultVirtualTableCell__ = __webpack_require__("./utils/backEndTableUtils/DefaultVirtualTableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableComponent__ = __webpack_require__("./utils/backEndTableUtils/TableComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_TableContainerComponent__ = __webpack_require__("./utils/backEndTableUtils/TableContainerComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_backEndTableUtils_NoDataCellComponent__ = __webpack_require__("./utils/backEndTableUtils/NoDataCellComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dataTableFormatters_ViewFormatter__ = __webpack_require__("./components/dataTableFormatters/ViewFormatter.js");
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaDealsTable/index.js",
    _dec,
    _dec2,
    _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myTableContainerSmallViewPort: {
      minHeight: '300px',
      height: 'calc(100vh - 445px) !important'
    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      left: '-13px'
    },
    downloadCSVBtn: {
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
    tableDealsSummaryBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    },
    tableDealsSummaryBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#2995F3',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out, color .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)',
        backgroundColor: '#2380D1'
      }
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'dealID',
  sortingEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.dealID;
};

var statusSelectInputItems = [{
  label: ''
}, {
  label: 'Pending'
}, {
  label: 'Approved'
}];

var FilterCell = function FilterCell(props) {
  if (props.column.name === 'status') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_SelectFilterCell__["a" /* default */], _extends({
      selectInputItems: statusSelectInputItems
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableFilterRow"].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    }
  }));
};

var integratedSortingColumnExtensions = [{
  columnName: 'date',
  compare: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__["a" /* compareDate */]
}, {
  columnName: 'rentOrSalePrice',
  compare: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}, {
  columnName: 'deductionsTotal',
  compare: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}, {
  columnName: 'paymentsTotal',
  compare: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}, {
  columnName: 'netPaymentsTotal',
  compare: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}];
var defaultColumnWidths = [{
  columnName: 'dealID',
  width: 120
}, {
  columnName: 'date',
  width: 120
}, {
  columnName: 'agentName',
  width: 140
}, {
  columnName: 'agentType',
  width: 120
}, {
  columnName: 'dealType',
  width: 120
}, {
  columnName: 'clientName',
  width: 140
}, {
  columnName: 'clientEmail',
  width: 140
}, {
  columnName: 'propertyAddress',
  width: 140
}, {
  columnName: 'propertyCity',
  width: 120
}, {
  columnName: 'propertyState',
  width: 120
}, {
  columnName: 'managementOrCobrokeCompany',
  width: 160
}, {
  columnName: 'rentOrSalePrice',
  width: 110
}, {
  columnName: 'deductionsTotal',
  width: 110
}, {
  columnName: 'paymentsTotal',
  width: 110
}, {
  columnName: 'netPaymentsTotal',
  width: 110
}, {
  columnName: 'bonusPercentageAddedByAdmin',
  width: 120
}, {
  columnName: 'netAgentCommission',
  width: 170
}, {
  columnName: 'netCompanyCommission',
  width: 170
}, {
  columnName: 'status',
  width: 120
}, {
  columnName: 'view',
  width: 100
}];
var defaultHiddenColumnNames = ['deductionsTotal', 'paymentsTotal', 'netPaymentsTotal', 'propertyState', 'clientEmail', 'managementOrCobrokeCompany', 'bonusPercentageAddedByAdmin', 'netAgentCommission', 'netCompanyCommission'];

var ViewCellFormatter = function ViewCellFormatter(_ref) {
  var value = _ref.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__dataTableFormatters_ViewFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  });
};

var ViewTypeProvider = function ViewTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["DataTypeProvider"], _extends({
    formatterComponent: ViewCellFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }));
};

var pageSizes = [5, 10, 15, 20, 50, 100, 0];

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var DealsTable = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles), _dec2 = __WEBPACK_IMPORTED_MODULE_2_react_sizes___default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsTable, _Component);

  function DealsTable(props) {
    var _this;

    _classCallCheck(this, DealsTable);

    _this = _possibleConstructorReturn(this, (DealsTable.__proto__ || Object.getPrototypeOf(DealsTable)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "changePageSize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(pageSize) {
        _this.setState({
          pageSize: pageSize
        });

        if (_this.state.pageSize < pageSize) {
          document.getElementById('myTableContainer').scrollTop = 0;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "currentPageChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPage) {
        _this.setState({
          currentPage: currentPage
        });

        document.getElementById('myTableContainer').scrollTop = 0;
      }
    });
    _this.state = {
      pageSize: 10,
      currentPage: 0,
      grouping: [{
        columnName: 'status'
      }],
      groupingStateColumnExtensions: [{
        columnName: 'dealID',
        groupingEnabled: false
      }, {
        columnName: 'date',
        groupingEnabled: false
      }, {
        columnName: 'clientName',
        groupingEnabled: false
      }, {
        columnName: 'clientEmail',
        groupingEnabled: false
      }, {
        columnName: 'propertyAddress',
        groupingEnabled: false
      }, {
        columnName: 'propertyCity',
        groupingEnabled: false
      }, {
        columnName: 'propertyState',
        groupingEnabled: false
      }, {
        columnName: 'managementOrCobrokeCompany',
        groupingEnabled: false
      }, {
        columnName: 'rentOrSalePrice',
        groupingEnabled: false
      }, {
        columnName: 'deductionsTotal',
        groupingEnabled: false
      }, {
        columnName: 'paymentsTotal',
        groupingEnabled: false
      }, {
        columnName: 'netPaymentsTotal',
        groupingEnabled: false
      }, {
        columnName: 'bonusPercentageAddedByAdmin',
        groupingEnabled: false
      }, {
        columnName: 'netAgentCommission',
        groupingEnabled: false
      }, {
        columnName: 'netCompanyCommission',
        groupingEnabled: false
      }, {
        columnName: 'view',
        groupingEnabled: false
      }],
      integratedGroupingColumnExtensions: [{
        columnName: 'view',
        criteria: function criteria(value) {
          return {
            key: value.id
          };
        }
      }],
      defaultExpandedGroups: ['Pending']
    };
    return _this;
  }

  _createClass(DealsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onMount) this.props.onMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          columns = _props.columns,
          rows = _props.rows,
          lgViewport = _props.lgViewport,
          changeSelection = _props.changeSelection,
          convertDealsToCSV = _props.convertDealsToCSV;
      var _state = this.state,
          grouping = _state.grouping,
          groupingStateColumnExtensions = _state.groupingStateColumnExtensions,
          integratedGroupingColumnExtensions = _state.integratedGroupingColumnExtensions,
          defaultExpandedGroups = _state.defaultExpandedGroups;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.root, 'deal-table-wrapper'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ViewTypeProvider, {
        "for": ['view'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["DragDropProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["SearchState"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["FilteringState"], {
        columnExtensions: filteringStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["SortingState"], {
        defaultSorting: [{
          columnName: 'date',
          direction: 'desc'
        }],
        columnExtensions: sortingStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["SelectionState"], {
        selection: this.props.selection,
        onSelectionChange: changeSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["GroupingState"], {
        defaultGrouping: grouping,
        columnExtensions: groupingStateColumnExtensions,
        defaultExpandedGroups: defaultExpandedGroups,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["PagingState"], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["IntegratedFiltering"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["IntegratedSorting"], {
        columnExtensions: integratedSortingColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["IntegratedGrouping"], {
        columnExtensions: integratedGroupingColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["IntegratedSelection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid__["IntegratedPaging"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["VirtualTable"], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: function containerComponent(props) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_TableContainerComponent__["a" /* default */], _extends({
            className: lgViewport ? classes.myTableContainerSmallViewPort : classes.myTableContainer
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            }
          }));
        },
        cellComponent: __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_15__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableFilterRow"], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableGroupRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["SearchPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableColumnVisibility"], {
        defaultHiddenColumnNames: defaultHiddenColumnNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["ColumnChooser"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableHeaderRow"], {
        showSortingControls: true,
        showGroupingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["TableSelection"], {
        showSelectAll: true,
        selectByRowClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["GroupingPanel"], {
        showGroupingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__devexpress_dx_react_grid_material_ui__["PagingPanel"], {
        pageSizes: pageSizes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      })), rows && rows.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Download selected rows from table as CSV file.",
        enterDelay: 300,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.downloadCSVBtn,
        onClick: convertDealsToCSV,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md__["MdFileDownload"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      })))) : null, this.props.isDealsWithGQLQuery ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Click to view deals summary",
        enterDelay: 300,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.tableDealsSummaryBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.tableDealsSummaryBtn,
        onClick: this.props.toggleDealsSummaryDialogBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Equalizer___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      })))) : null);
    }
  }]);

  return DealsTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (DealsTable);

/***/ }),

/***/ "./components/AdminSideNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications__ = __webpack_require__("@material-ui/icons/Notifications");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SideNavLinkItem__ = __webpack_require__("./components/SideNavLinkItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navItems__ = __webpack_require__("./components/AdminSideNav/navItems.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminSideNav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var drawerWidth = 240;

var styles = function styles(theme) {
  var _drawerPaperClose;

  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      paddingBottom: '50px',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundColor: theme.palette.secondary.dark,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    tempDrawer: {
      minWidth: '240px',
      width: '240px'
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '7px',
      bottom: '5px',
      '@media screen and (max-width: 600px)': {
        left: '4px'
      }
    },
    arrowBackBtn: {
      marginLeft: 'auto',
      marginRight: '10px',
      height: '30px',
      width: '30px'
    },
    drawerPaperClose: (_drawerPaperClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 5
    }, _defineProperty(_drawerPaperClose, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 6.8
    }), _defineProperty(_drawerPaperClose, '&:hover', {
      width: drawerWidth
    }), _drawerPaperClose),
    notificationIconBtn: {
      height: '40px',
      width: '40px',
      color: '#fff',
      '@media screen and (max-width: 600px)': {
        height: '30px',
        width: '30px'
      }
    },
    listRoot: {
      height: '100%',
      overflow: 'hidden' // borderBottom: '1px solid rgba(255,255,255,.5)',

    }
  };
};

var AdminSideNav = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminSideNav, _Component);

  function AdminSideNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AdminSideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AdminSideNav.__proto__ || Object.getPrototypeOf(AdminSideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return __WEBPACK_IMPORTED_MODULE_10__navItems__["a" /* default */].map(function (item) {
          var type = item.type || 'link';
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SideNavLinkItem__["a" /* default */], {
            key: item.route || item.name,
            name: item.name,
            route: item.route,
            icon: item.icon,
            iconLeft: item.iconLeft,
            iconLeftSmall: item.iconLeftSmall,
            iconFontSize: item.iconFontSize,
            currentPath: currentPath,
            isActionItem: !item.route,
            isAdminLinks: true,
            onClick: function onClick() {
              if (_this.props.drawerOpen) _this.props.toggleDrawer(false);
              if (item.id === 'logout') _this.props.logoutUser();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(AdminSideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List___default.a, {
        classes: {
          root: classes.listRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return AdminSideNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(AdminSideNav));

/***/ }),

/***/ "./components/AdminSideNav/navItems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export adminSideLinks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__ = __webpack_require__("@material-ui/icons/ExitToApp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts__ = __webpack_require__("@material-ui/icons/Contacts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Contacts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount__ = __webpack_require__("@material-ui/icons/SupervisorAccount");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors__ = __webpack_require__("@material-ui/icons/RecentActors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors__);






var adminSideLinks = [{
  name: 'Admin Dashboard',
  route: 'admin-dashboard',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdDashboard"]
},
/*
{
  name: 'Profile',
  route: 'profile',
  icon: PersonIcon,
  iconFontSize: 28,
  iconLeft: '12px',
  iconLeftSmall: '5px',
},
*/
{
  name: 'The Vault',
  route: 'view-deals',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaCreditCard"]
},
/*
{
  name: 'Invoices',
  route: 'view-invoices',
  icon: InvoicesIcon,
  iconFontSize: 20,
},
*/
{
  name: 'Agents',
  route: 'view-agents',
  icon: __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_SupervisorAccount___default.a,
  iconFontSize: 24
},
/*
{
  name: 'Customers',
  route: 'view-customers',
  icon: UsersIcon,
  iconFontSize: 24,
},
*/
{
  name: 'Admin',
  route: 'view-admin',
  icon: __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_RecentActors___default.a,
  iconFontSize: 24
}, {
  name: 'Log Out',
  icon: __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default.a,
  id: 'logout'
}];
/* harmony default export */ __webpack_exports__["a"] = (adminSideLinks);

/***/ }),

/***/ "./components/AppTopNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__ = __webpack_require__("@material-ui/icons/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__ = __webpack_require__("material-ui/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AppTopNav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var drawerWidth = 240;

var styles = function styles(theme) {
  var _ref;

  return _ref = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignContent: 'center'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      marginLeft: drawerWidth,
      width: '100%',
      boxShadow: theme.shadows[3]
    }
  }, _defineProperty(_ref, theme.breakpoints.down(theme.breakpoints.values.md), {
    appBar: {
      width: '100%'
    }
  }), _defineProperty(_ref, "toolbar", theme.mixins.toolbar), _defineProperty(_ref, "topToolbar", {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.87)',
    flexDirection: 'row'
  }), _defineProperty(_ref, "icon", {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.1)'
    }
  }), _defineProperty(_ref, "iconRoot", {
    width: '40px',
    height: '40px'
  }), _defineProperty(_ref, "leftTopNavIconWrapper", {
    marginRight: '10px'
  }), _defineProperty(_ref, "iconGroupWrapper", {
    marginLeft: 'auto'
  }), _defineProperty(_ref, "menuHiddenWrapper", {
    display: 'inline'
  }), _defineProperty(_ref, theme.breakpoints.up(theme.breakpoints.values.md), {
    menuHiddenWrapper: {
      display: 'none'
    }
  }), _defineProperty(_ref, "uppercase", {
    marginRight: '5px',
    fontSize: '1.1rem',
    textTransform: 'uppercase'
  }), _ref;
};

var AppTopNav = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AppTopNav, _Component);

  function AppTopNav() {
    _classCallCheck(this, AppTopNav);

    return _possibleConstructorReturn(this, (AppTopNav.__proto__ || Object.getPrototypeOf(AppTopNav)).apply(this, arguments));
  }

  _createClass(AppTopNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          isAdmin = _props.isAdmin;
      var pathArray = currentPath.split('/');
      var type = pathArray[pathArray.length - 1];
      var path = type === 'view' || type === 'new' ? type + ' ' + pathArray[pathArray.length - 2] : pathArray[pathArray.length - 1];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default.a, {
        position: "absolute",
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default.a, {
        className: classes.topToolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.uppercase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, Object(__WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__["a" /* capitalize */])(Object(__WEBPACK_IMPORTED_MODULE_12__utils_stringUtils__["b" /* unhyphenate */])(path)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.leftTopNavIconWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        className: classes.menuIcon,
        onClick: this.props.toggleDrawer,
        classes: {
          root: classes.iconRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))))));
    }
  }]);

  return AppTopNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(AppTopNav));

/***/ }),

/***/ "./components/CustomFileUploadInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/CustomFileUploadInputWrapper/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    input: {
      width: '0.1px',
      height: '0.1px',
      opacity: '0',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '-1'
    },
    helperText: {
      textAlign: 'center'
    },
    info: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    disabled: {
      //pointerEvents: 'none',
      opacity: '.6',
      pointerEvents: 'none'
    }
  };
};

var CustomFileUploadInputWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomFileUploadInputWrapper, _React$Component);

  function CustomFileUploadInputWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CustomFileUploadInputWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CustomFileUploadInputWrapper.__proto__ || Object.getPrototypeOf(CustomFileUploadInputWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLabelText", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(shouldBefullText) {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            label = _this$props.label,
            customState = _this$props.customState;
        if (!customState) return label;

        if (multiple) {
          if (!customState.length) return label;

          if (shouldBefullText) {
            return customState.map(function (item) {
              return item.name;
            }).join(', ');
          }

          if (customState.length > 1) return "".concat(customState[0].name, ",...");
          return customState[0].name;
        }

        return customState.name;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderLabelComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            disabled = _this$props2.disabled,
            classes = _this$props2.classes;
        var tooltipIncludedComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tooltip___default.a, {
          id: _this.props.id,
          title: _this.renderLabelText(true),
          enterDelay: 300,
          leaveDelay: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, _this.renderLabelText()));
        var withoutTooltipComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: _this.props.id,
          disabled: disabled,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(_this.props.btnClassName, disabled && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, _this.renderLabelText());

        if (_this.props.multiple && _this.props.customState && _this.props.customState.length > 1) {
          return tooltipIncludedComp;
        }

        return withoutTooltipComp;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "isAcceptedFileExtension", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject, acceptedFileExtensions, hasMultiple) {
        var ok = true;

        if (hasMultiple) {
          var fileArray = Object.keys(filesObject).map(function (key) {
            return filesObject[key];
          });
          fileArray.forEach(function (file) {
            var filePartsArray = file.name.split('.');
            var extension = filePartsArray.pop();

            if (!extension) {
              ok = false;
              return;
            }

            if (!acceptedFileExtensions.includes(extension.toLowerCase())) ok = false;
          });
        } else {
          var filePartsArray = filesObject[0].name.split('.');
          var extension = filePartsArray.pop();

          if (!extension) {
            ok = false;
          } else if (!acceptedFileExtensions.includes(extension.toLowerCase())) {
            ok = false;
          }
        }

        return ok;
      }
    }), _temp));
  }

  _createClass(CustomFileUploadInputWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_form__["Field"], _extends({
        validate: props.validate,
        field: props.field
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), function (fieldApi) {
        var onInput = props.onInput,
            classes = props.classes,
            label = props.label,
            id = props.id,
            disabled = props.disabled,
            fullWidth = props.fullWidth,
            required = props.required,
            multiple = props.multiple,
            field = props.field,
            _onBlur = props.onBlur,
            _onChange = props.onChange,
            btnClassName = props.btnClassName,
            customOnChange = props.customOnChange,
            customState = props.customState,
            helperInfo = props.helperInfo,
            acceptedFileExtensions = props.acceptedFileExtensions,
            input = props.input,
            getInput = props.getInput,
            validate = props.validate,
            submits = props.submits,
            rest = _objectWithoutProperties(props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiple", "field", "onBlur", "onChange", "btnClassName", "customOnChange", "customState", "helperInfo", "acceptedFileExtensions", "input", "getInput", "validate", "submits"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setError = fieldApi.setError,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
          className: classes.formControl,
          error: error && touched || error && submits,
          fullWidth: fullWidth,
          required: required,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }, _this2.renderLabelComponent(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", _extends({
          disabled: disabled,
          className: classes.input,
          type: "file",
          id: id,
          multiple: multiple,
          ref: function ref(input) {
            return getInput && getInput(input);
          },
          onChange: function onChange(e) {
            var files = e.target.files;

            if (multiple) {
              if (!files[0]) return;

              if (!_this2.isAcceptedFileExtension(files, acceptedFileExtensions, true)) {
                setError("Files must be one of the following types: ".concat(acceptedFileExtensions.join(', ')));
                if (!touched) setTouched();
                setTimeout(function () {
                  if (!error) setError();
                }, 8000);
                return;
              }

              setValue(files[0]);

              if (customOnChange) {
                customOnChange(files);
              }
            } else {
              var file = files[0];
              if (!file) return;

              if (!_this2.isAcceptedFileExtension(files, acceptedFileExtensions)) {
                setError("Files must be one of the following types: ".concat(acceptedFileExtensions.join(', ')));
                if (!touched) setTouched();
                setTimeout(function () {
                  if (!error) setError();
                }, 6000);
                return;
              }

              setValue(file);

              if (customOnChange) {
                customOnChange(file);
              }

              if (error) {
                setError();
              }
            }

            if (_onChange) {
              _onChange(multiple ? e.target.files : e.target.files[0], e);
            }
          },
          onBlur: function onBlur(event) {
            if (event.target.files[0]) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          }
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        })), error && touched || error && submits ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          id: "".concat(id, "-error-text"),
          classes: {
            root: classes.helperText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, error) : null, helperInfo ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          classes: {
            root: "".concat(classes.helperText, " ").concat(classes.info)
          },
          id: "".concat(id, "-info-text"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        }, helperInfo) : null);
      });
    }
  }]);

  return CustomFileUploadInputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(CustomFileUploadInputWrapper));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),

/***/ "./components/CustomInputMask/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__("react-input-mask");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_mask__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/CustomInputMask/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: _this.props.defaultValue || ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          value: event.target.value
        });

        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "beforeOfficeNumberMaskedValueChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newState, oldState, userInput) {
        var value = newState.value;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        if (value.endsWith('x') && userInput !== 'x' && !_this.state.value.endsWith('x')) {
          if (cursorPosition === value.length) {
            cursorPosition--;
            selection = {
              start: cursorPosition,
              end: cursorPosition
            };
          }

          value = value.slice(0, -2);
        }

        return {
          value: value,
          selection: selection
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "beforeMaskedValueChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.beforeMaskedValueChange) return _this.props.beforeMaskedValueChange;
        if (_this.props.officePhoneNumber) return _this.beforeOfficeNumberMaskedValueChange;
        return undefined;
      }
    }), _temp));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var props = this.props;

      var beforeMaskedValueChange = props.beforeMaskedValueChange,
          officePhoneNumber = props.officePhoneNumber,
          restProps = _objectWithoutProperties(props, ["beforeMaskedValueChange", "officePhoneNumber"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_input_mask___default.a, _extends({
        value: this.state.value,
        beforeMaskedValueChange: this.beforeMaskedValueChange()
      }, restProps, {
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "./components/CustomSlider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/CustomSlider/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      appearance: 'none',
      width: '50%',
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
    },
    label: {
      marginRight: '15px',
      fontFamily: theme.typography.fontFamily
    }
  };
};

var CustomSlider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomSlider, _Component);

  function CustomSlider(props) {
    var _this;

    _classCallCheck(this, CustomSlider);

    _this = _possibleConstructorReturn(this, (CustomSlider.__proto__ || Object.getPrototypeOf(CustomSlider)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "renderRabelComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            id = _this$props.id,
            label = _this$props.label,
            labelClassName = _this$props.labelClassName,
            classes = _this$props.classes;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(labelClassName || classes.label),
          htmlFor: id || _this._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, label);
      }
    });
    _this._id = __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()();
    return _this;
  }

  _createClass(CustomSlider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          min = _props.min,
          max = _props.max,
          inputClassName = _props.inputClassName,
          rootClassName = _props.rootClassName,
          id = _props.id,
          _onChange = _props.onChange,
          label = _props.label,
          classes = _props.classes;
      var actualMin = typeof min === 'number' ? min : 0;
      var actualMax = typeof max === 'number' ? max : 100;
      var actualValue = typeof value === 'number' ? value : actualMin;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(rootClassName || classes.root),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, label ? this.renderRabelComponent() : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "range",
        min: actualMin,
        max: actualMax,
        value: actualValue,
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(inputClassName || classes.input),
        id: id || this._id,
        onChange: function onChange(event) {
          return typeof _onChange === 'function' && _onChange(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }));
    }
  }]);

  return CustomSlider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(CustomSlider));

/***/ }),

/***/ "./components/DealsSummarDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_DealsSummary__ = __webpack_require__("./containers/DealsSummary.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/DealsSummarDialogBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var styles = function styles(theme) {
  return {
    paper: _defineProperty({
      width: '90%',
      maxWidth: '90%'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      maxWidth: '100%'
    }),
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
    }
  };
};

var DealsSummaryDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsSummaryDialogBox, _Component);

  function DealsSummaryDialogBox() {
    _classCallCheck(this, DealsSummaryDialogBox);

    return _possibleConstructorReturn(this, (DealsSummaryDialogBox.__proto__ || Object.getPrototypeOf(DealsSummaryDialogBox)).apply(this, arguments));
  }

  _createClass(DealsSummaryDialogBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          toggleDealsSummaryDialogBox = _props.toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen = _props.dealsSummaryDialogBoxOpen;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        onClose: toggleDealsSummaryDialogBox,
        open: dealsSummaryDialogBoxOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Deals Summary"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_DealsSummary__["a" /* default */], {
        userUUID: this.props.userUUID,
        deals: this.props.deals,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        onClick: toggleDealsSummaryDialogBox,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Close")));
    }
  }]);

  return DealsSummaryDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(DealsSummaryDialogBox)));

/***/ }),

/***/ "./components/DealsSummary/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nivo_pie__ = __webpack_require__("@nivo/pie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nivo_pie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__nivo_pie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nivo_bar__ = __webpack_require__("@nivo/bar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nivo_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nivo_line__ = __webpack_require__("@nivo/line");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nivo_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__nivo_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance__ = __webpack_require__("chance");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_toggle_button__ = __webpack_require__("react-toggle-button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney__ = __webpack_require__("@material-ui/icons/AttachMoney");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help__ = __webpack_require__("@material-ui/icons/Help");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__StatNumberBox__ = __webpack_require__("./components/StatNumberBox/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/DealsSummary/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var chance = new __WEBPACK_IMPORTED_MODULE_8_chance___default.a();

var styles = function styles(theme) {
  var _graphWrapper;

  return {
    root: {
      maxWidth: '100%',
      fontFamily: theme.typography.fontFamily
    },
    graphWrapper: {
      position: 'relative',
      padding: '10px',
      height: '500px',
      maxHeight: '100%',
      maxWidth: '100%',
      backgroundColor: '#fff',
      fontSize: '12px',
      boxShadow: theme.shadows[1],
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center'
    },
    graphWrapper2: (_graphWrapper = {
      position: 'relative',
      padding: '10px',
      height: '500px'
    }, _defineProperty(_graphWrapper, theme.breakpoints.down('sm'), {
      height: '670px'
    }), _defineProperty(_graphWrapper, "maxHeight", '100%'), _defineProperty(_graphWrapper, "maxWidth", '100%'), _defineProperty(_graphWrapper, "backgroundColor", '#fff'), _defineProperty(_graphWrapper, "fontSize", '12px'), _defineProperty(_graphWrapper, "boxShadow", theme.shadows[1]), _defineProperty(_graphWrapper, "borderRadius", '5px'), _defineProperty(_graphWrapper, "display", 'flex'), _defineProperty(_graphWrapper, "justifyContent", 'center'), _graphWrapper),
    graphControlsWrapper: {
      position: 'absolute',
      padding: '6px 80px',
      bottom: '0',
      alignText: 'center',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    toggleWrapper: {
      marginRight: '20px'
    },
    graphControlsLabel: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
      color: 'rgba(0,0,0,.8)'
    },
    graphTitle: {
      position: 'absolute',
      top: 0,
      padding: '15px 10px',
      fontSize: '16px',
      fontWeight: 500,
      alignText: 'center',
      color: 'rgba(0,0,0,.7)',
      textDecoration: 'underline',
      transition: 'all .3s ease-in-out'
    },
    statNumberBoxWrapper: {
      width: '50%'
    },
    statBoxQuestionIcon: {
      fontSize: '40px',
      color: '#F57C00'
    },
    statBoxMoneyIcon: {
      fontSize: '40px',
      color: '#388E3C'
    }
  };
};

var generateMonthlyNumberDealsData = function generateMonthlyNumberDealsData() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var data = {};
  months.forEach(function (month) {
    data[month] = {
      'Com Sales': chance.integer({
        min: 0,
        max: 3
      }) || 0.05,
      'Com Rentals': chance.integer({
        min: 0,
        max: 15
      }) || 0.05,
      'Res Sales': chance.integer({
        min: 0,
        max: 3
      }) || 0.05,
      'Res Rentals': chance.integer({
        min: 0,
        max: 30
      }) || 0.05
    };
  });
  return data;
};

var generateYearlyNumberDealsData = function generateYearlyNumberDealsData() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_10_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': chance.integer({
        min: 0,
        max: 36
      }) || 0.05,
      'Com Rentals': chance.integer({
        min: 0,
        max: 180
      }) || 0.05,
      'Res Sales': chance.integer({
        min: 0,
        max: 36
      }) || 0.05,
      'Res Rentals': chance.integer({
        min: 0,
        max: 360
      }) || 0.05
    };
  });
  return data;
};

var generateYearlyDollarDealsData = function generateYearlyDollarDealsData() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_10_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Com Rentals': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Res Sales': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 35000000
      }) / 1000000, 2) || 0.001,
      'Res Rentals': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 3500000
      }) / 1000000, 2) || 0.001
    };
  });
  return data;
};

var generateMonthlyDollarDealsData = function generateMonthlyDollarDealsData() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var data = {};
  months.forEach(function (month) {
    data[month] = {
      'Com Sales': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Com Rentals': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Res Sales': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 3000000
      }) / 1000000, 2) || 0.001,
      'Res Rentals': Object(__WEBPACK_IMPORTED_MODULE_13__utils_Math__["b" /* round */])(chance.integer({
        min: 0,
        max: 300000
      }) / 1000000, 2) || 0.001
    };
  });
  return data;
};

var generateMonthlyDealsBarData = function generateMonthlyDealsBarData(data) {
  return Object.keys(data).map(function (month) {
    return {
      month: month,
      'Com Sales': data[month]['Com Sales'],
      'Com Rentals': data[month]['Com Rentals'],
      'Res Sales': data[month]['Res Sales'],
      'Res Rentals': data[month]['Res Rentals']
    };
  });
};

var generateMonthlyDealsLineData = function generateMonthlyDealsLineData(data) {
  var types = ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'];
  return types.map(function (id) {
    return {
      id: id,
      data: Object.keys(data).map(function (month) {
        return {
          x: month,
          y: data[month][id]
        };
      })
    };
  });
};

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var AgentDashboard = (_dec = __WEBPACK_IMPORTED_MODULE_7_react_sizes___default()(mapSizesToProps), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AgentDashboard, _Component);

  function AgentDashboard(props) {
    var _this;

    _classCallCheck(this, AgentDashboard);

    _this = _possibleConstructorReturn(this, (AgentDashboard.__proto__ || Object.getPrototypeOf(AgentDashboard)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsNumberLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsNumberLineGraphOn: !_this.state.monthlyDealsNumberLineGraphOn
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsDollarLineGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarLineGraphOn: !_this.state.monthlyDealsDollarLineGraphOn
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleMonthlyDealsDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          monthlyDealsDollarOrNum: _this.state.monthlyDealsDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleTotalDealsPieDollarOrNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          totalDealsPieDollarOrNum: _this.state.totalDealsPieDollarOrNum === 'dollar' ? 'number' : 'dollar'
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleYearlyDealsNumberGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsNumberGraphOn: !_this.state.yearlyDealsNumberGraphOn
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleYearlyDealsDollarGraph", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          yearlyDealsDollarGraphOn: !_this.state.yearlyDealsDollarGraphOn
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "barGraphLayout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            lgViewport = _this$props.lgViewport,
            mdViewport = _this$props.mdViewport,
            smViewport = _this$props.smViewport;

        if (smViewport) {
          return 'horizontal';
        } else if (mdViewport) {
          return 'vertical';
        }

        if (lgViewport) {
          return 'vertical';
        }

        return 'horizontal';
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "dollarBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props2 = _this.props,
            lgViewport = _this$props2.lgViewport,
            mdViewport = _this$props2.mdViewport,
            smViewport = _this$props2.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          if (lgViewport) {
            return 'Gross Dollar Amount ($ Thousands)';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Gross Dollar Amount ($ Thousands)';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Gross Dollar Amount ($ Thousands)';
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "numberBarGraphAxis", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(axis, isYear) {
        var _this$props3 = _this.props,
            lgViewport = _this$props3.lgViewport,
            mdViewport = _this$props3.mdViewport,
            smViewport = _this$props3.smViewport;

        if (axis === 'left') {
          if (smViewport) {
            return isYear ? 'Year' : 'Month';
          } else if (mdViewport) {
            return 'Number of Deals';
          }

          if (lgViewport) {
            return 'Number of Deals';
          }

          return isYear ? 'Year' : 'Month';
        }

        if (smViewport) {
          return 'Number of Deals';
        } else if (mdViewport) {
          return isYear ? 'Year' : 'Month';
        }

        if (lgViewport) {
          return isYear ? 'Year' : 'Month';
        }

        return 'Number of Deals';
      }
    });
    _this._monthlyDealsNumberData = generateMonthlyNumberDealsData();
    _this._monthlyDealsDollarData = generateMonthlyDollarDealsData();
    _this._yearlyDealsNumberData = generateYearlyNumberDealsData();
    _this._yearlyDealsDollarData = generateYearlyDollarDealsData();
    _this._monthlyDealsDollarBarData = generateMonthlyDealsBarData(_this._monthlyDealsDollarData);
    _this._monthlyDealsNumberBarData = generateMonthlyDealsBarData(_this._monthlyDealsNumberData);
    _this._monthlyDealsDollarLineData = generateMonthlyDealsLineData(_this._monthlyDealsDollarData);
    _this._monthlyDealsNumberLineData = generateMonthlyDealsLineData(_this._monthlyDealsNumberData);
    _this._yearlyDealsDollarBarData = generateMonthlyDealsBarData(_this._yearlyDealsDollarData);
    _this._yearlyDealsNumberBarData = generateMonthlyDealsBarData(_this._yearlyDealsNumberData);
    _this._yearlyDealsDollarLineData = generateMonthlyDealsLineData(_this._yearlyDealsDollarData);
    _this._yearlyDealsNumberLineData = generateMonthlyDealsLineData(_this._yearlyDealsNumberData);
    _this.state = {
      monthlyDealsNumberLineGraphOn: true,
      monthlyDealsDollarLineGraphOn: true,
      yearlyDealsNumberGraphOn: false,
      yearlyDealsDollarGraphOn: false,
      monthlyDealsDollarOrNum: 'number',
      totalDealsPieDollarOrNum: 'number'
    };
    return _this;
  }

  _createClass(AgentDashboard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          smViewport = _props.smViewport,
          xsViewport = _props.xsViewport;
      var _state = this.state,
          totalDealsPieDollarOrNum = _state.totalDealsPieDollarOrNum,
          yearlyDealsDollarGraphOn = _state.yearlyDealsDollarGraphOn,
          yearlyDealsNumberGraphOn = _state.yearlyDealsNumberGraphOn;
      var borderRadiusStyle = {
        borderRadius: 2
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.grossDealCommissions.toLocaleString()),
        statTitle: "Gross Commissions to Date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_AttachMoney___default.a,
        iconClass: classes.statBoxMoneyIcon,
        stat: "$".concat(this.props.netCurrentYearDealCommissions.toLocaleString()),
        statTitle: "".concat(__WEBPACK_IMPORTED_MODULE_10_moment___default()().year(), " Net Commissions to Date"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StatNumberBox__["a" /* default */], {
        icon: __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Help___default.a,
        iconClass: classes.statBoxQuestionIcon,
        stat: this.props.numberOfPendingDeals,
        statTitle: "Number of Pending Deals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      })), this.props.numberOfTotalDealsData ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, "Total Deals"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__nivo_pie__["ResponsivePie"], {
        data: totalDealsPieDollarOrNum === 'number' ? this.props.numberOfTotalDealsData : this.props.grossDollarAmtOfTotalDealsData,
        margin: {
          top: 70,
          right: 80,
          bottom: 120,
          left: 80
        },
        innerRadius: 0.7,
        padAngle: 0.7,
        cornerRadius: 0,
        colors: "dark2",
        colorBy: "id",
        borderColor: "inherit:darker(0.6)",
        radialLabelsSkipAngle: 10,
        radialLabelsTextXOffset: 6,
        radialLabelsTextColor: "#333333",
        radialLabelsLinkOffset: 0,
        radialLabelsLinkDiagonalLength: smViewport ? 4 : 16,
        radialLabelsLinkHorizontalLength: smViewport ? 10 : 24,
        radialLabelsLinkStrokeWidth: 1,
        radialLabelsLinkColor: "inherit",
        slicesLabelsSkipAngle: 10,
        slicesLabelsTextColor: "#333333",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: smViewport ? 85 : 100,
          itemHeight: 14,
          symbolSize: 14,
          symbolShape: 'circle',
          itemDirection: 'top-to-bottom'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.totalDealsPieDollarOrNum !== 'number',
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Num",
        activeLabel: "$",
        onToggle: this.toggleTotalDealsPieDollarOrNum,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      })))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, "Net Commissions ($)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.toggleWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: !this.state.monthlyDealsDollarLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsDollarLineGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.yearlyDealsDollarGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsDollarGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      })), this.state.monthlyDealsDollarLineGraphOn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__nivo_line__["ResponsiveLine"], {
        data: !yearlyDealsDollarGraphOn ? this.props.monthlyDealsDollarLineData : this.props.yearlyDealsDollarLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsDollarGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Net Dollar Amount ($ Thousands)',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__["ResponsiveBar"], {
        data: yearlyDealsDollarGraphOn ? this.props.yearlyDealsDollarBarData : this.props.monthlyDealsDollarBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('bottom', true) : this.dollarBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsDollarGraphOn ? this.dollarBarGraphAxis('left', true) : this.dollarBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphWrapper2,
        style: {
          fontSize: xsViewport ? '11px' : '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        }
      }, "Number of Deals (#)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.graphControlsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.graphControlsLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        }
      }, "Controls:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.toggleWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: !this.state.monthlyDealsNumberLineGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Line",
        activeLabel: "Bar",
        onToggle: this.toggleMonthlyDealsNumberLineGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_toggle_button___default.a, {
        value: this.state.yearlyDealsNumberGraphOn,
        thumbStyle: borderRadiusStyle,
        trackStyle: borderRadiusStyle,
        colors: {
          active: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)'
          }
        },
        inactiveLabel: "Month",
        activeLabel: "Year",
        onToggle: this.toggleYearlyDealsNumberGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        }
      })), this.state.monthlyDealsNumberLineGraphOn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__nivo_line__["ResponsiveLine"], {
        data: !yearlyDealsNumberGraphOn ? this.props.monthlyDealsNumberLineData : this.props.yearlyDealsNumberLineData,
        colors: "dark2",
        curve: "catmullRom",
        enableArea: true,
        margin: {
          top: 60,
          right: smViewport ? 40 : 110,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        minY: "auto",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !yearlyDealsNumberGraphOn ? 'Month' : 'Year',
          legendOffset: 36,
          legendPosition: 'center'
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Deals',
          legendOffset: -40,
          legendPosition: 'center'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 118,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nivo_bar__["ResponsiveBar"], {
        data: yearlyDealsNumberGraphOn ? this.props.yearlyDealsNumberBarData : this.props.monthlyDealsNumberBarData,
        colors: "dark2",
        groupMode: "grouped",
        maxValue: "auto",
        layout: this.barGraphLayout(),
        keys: ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'],
        indexBy: "month",
        margin: {
          top: 50,
          right: smViewport ? 40 : 130,
          bottom: smViewport ? 130 : 80,
          left: 60
        },
        padding: 0.3,
        colorBy: "id",
        defs: [{
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: 'fries'
          },
          id: 'dots'
        }, {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }],
        borderColor: "inherit:darker(1.6)",
        axisBottom: {
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('bottom', true) : this.numberBarGraphAxis('bottom'),
          legendPosition: 'center',
          legendOffset: 36
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yearlyDealsNumberGraphOn ? this.numberBarGraphAxis('left', true) : this.numberBarGraphAxis('left'),
          legendPosition: 'center',
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        innerPadding: 2,
        legends: [{
          dataFrom: 'keys',
          anchor: smViewport ? 'bottom' : 'bottom-right',
          direction: smViewport ? 'row' : 'column',
          translateX: smViewport ? undefined : 120,
          translateY: smViewport ? 76 : -40,
          itemWidth: smViewport ? 80 : 100,
          itemHeight: 20,
          itemsSpacing: smViewport ? 2 : 10,
          symbolSize: 12,
          itemDirection: smViewport ? 'top-to-bottom' : undefined
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        }
      })))));
    }
  }]);

  return AgentDashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(AgentDashboard));

/***/ }),

/***/ "./components/DealsTable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__ = __webpack_require__("@devexpress/dx-react-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer__ = __webpack_require__("@material-ui/icons/Equalizer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_SelectFilterCell__ = __webpack_require__("./utils/backEndTableUtils/SelectFilterCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_tableSortingUtils__ = __webpack_require__("./utils/backEndTableUtils/tableSortingUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_DefaultVirtualTableCell__ = __webpack_require__("./utils/backEndTableUtils/DefaultVirtualTableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableComponent__ = __webpack_require__("./utils/backEndTableUtils/TableComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableContainerComponent__ = __webpack_require__("./utils/backEndTableUtils/TableContainerComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_NoDataCellComponent__ = __webpack_require__("./utils/backEndTableUtils/NoDataCellComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dataTableFormatters_ViewFormatter__ = __webpack_require__("./components/dataTableFormatters/ViewFormatter.js");
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/DealsTable/index.js",
    _dec,
    _dec2,
    _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    },
    editBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      left: '-13px'
    },
    tableDealsSummaryBtnsWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '-13px',
      right: '-13px'
    },
    downloadCSVBtn: {
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
    tableDealsSummaryBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '34px',
      width: '34px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#2995F3',
      boxShadow: theme.shadows[2],
      zIndex: '2',
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform .2s ease-in-out, color .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1,1.1)',
        backgroundColor: '#2380D1'
      }
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'dealID',
  sortingEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.dealID;
};

var statusSelectInputItems = [{
  label: ''
}, {
  label: 'Pending'
}, {
  label: 'Approved'
}];

var FilterCell = function FilterCell(props) {
  if (props.column.name === 'status') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_SelectFilterCell__["a" /* default */], _extends({
      selectInputItems: statusSelectInputItems
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableFilterRow"].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }));
};

var integratedSortingColumnExtensions = [{
  columnName: 'date',
  compare: __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_tableSortingUtils__["a" /* compareDate */]
}, {
  columnName: 'rentOrSalePrice',
  compare: __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_tableSortingUtils__["b" /* compareNumber */]
}];
var defaultColumnWidths = [{
  columnName: 'dealID',
  width: 120
}, {
  columnName: 'date',
  width: 120
}, {
  columnName: 'dealType',
  width: 120
}, {
  columnName: 'clientName',
  width: 140
}, {
  columnName: 'clientEmail',
  width: 140
}, {
  columnName: 'propertyAddress',
  width: 140
}, {
  columnName: 'propertyCity',
  width: 120
}, {
  columnName: 'managementOrCobrokeCompany',
  width: 160
}, {
  columnName: 'rentOrSalePrice',
  width: 100
}, {
  columnName: 'bonusPercentageAddedByAdmin',
  width: 120
}, {
  columnName: 'netAgentCommission',
  width: 170
}, {
  columnName: 'dealTotal',
  width: 170
}, {
  columnName: 'status',
  width: 120
}, {
  columnName: 'view',
  width: 80
}];
var pageSizes = [5, 10, 15, 20, 50, 100, 0];

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    xsViewport: width < 412,
    smViewport: width < 600,
    mdViewport: width < 960,
    lgViewport: width < 1280
  };
};

var ViewCellFormatter = function ViewCellFormatter(_ref2) {
  var value = _ref2.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__dataTableFormatters_ViewFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  });
};

var ViewTypeProvider = function ViewTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["DataTypeProvider"], _extends({
    formatterComponent: ViewCellFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }));
};

var DealsTable = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles), _dec2 = __WEBPACK_IMPORTED_MODULE_2_react_sizes___default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsTable, _Component);

  function DealsTable(props) {
    var _this;

    _classCallCheck(this, DealsTable);

    _this = _possibleConstructorReturn(this, (DealsTable.__proto__ || Object.getPrototypeOf(DealsTable)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "changePageSize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(pageSize) {
        _this.setState({
          pageSize: pageSize
        });

        if (_this.state.pageSize < pageSize) {
          document.getElementById('myTableContainer').scrollTop = 0;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "currentPageChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPage) {
        _this.setState({
          currentPage: currentPage
        });

        document.getElementById('myTableContainer').scrollTop = 0;
      }
    });
    _this.state = {
      pageSize: 10,
      currentPage: 0
    };
    return _this;
  }

  _createClass(DealsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onMount) this.props.onMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          columns = _props.columns,
          rows = _props.rows,
          convertDealsToCSV = _props.convertDealsToCSV,
          changeSelection = _props.changeSelection;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["Grid"], {
        rows: rows,
        columns: columns,
        getRowId: getRowId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ViewTypeProvider, {
        "for": ['view'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["DragDropProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SearchState"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["FilteringState"], {
        columnExtensions: filteringStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SortingState"], {
        defaultSorting: [{
          columnName: 'date',
          direction: 'desc'
        }],
        columnExtensions: sortingStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["SelectionState"], {
        selection: this.props.selection,
        onSelectionChange: changeSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["PagingState"], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedFiltering"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedSorting"], {
        columnExtensions: integratedSortingColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedSelection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["IntegratedPaging"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["VirtualTable"], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableContainerComponent__["a" /* default */],
        cellComponent: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableColumnReordering"], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableColumnResizing"], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableFilterRow"], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["SearchPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableHeaderRow"], {
        showSortingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["TableSelection"], {
        showSelectAll: true,
        selectByRowClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["PagingPanel"], {
        pageSizes: pageSizes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      })), rows && rows.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Download selected rows from table as CSV file.",
        enterDelay: 300,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.downloadCSVBtn,
        onClick: convertDealsToCSV,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__["MdFileDownload"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      })))) : null, this.props.isDealsWithGQLQuery ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Click to view deals summary",
        enterDelay: 300,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.tableDealsSummaryBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.tableDealsSummaryBtn,
        onClick: this.props.toggleDealsSummaryDialogBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      })))) : null);
    }
  }]);

  return DealsTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (DealsTable);

/***/ }),

/***/ "./components/EditAgentDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__ = __webpack_require__("material-ui/Menu/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_EditAgentForm__ = __webpack_require__("./containers/EditAgentForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__effects_users_updateAgent__ = __webpack_require__("./effects/users/updateAgent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_users_deleteAgent__ = __webpack_require__("./effects/users/deleteAgent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentDialogBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      paddingTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    saveDraftBtn: {
      marginRight: 'auto',
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
    editAgentBtn: {
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
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

var EditAgentDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditAgentDialogBox, _Component);

  function EditAgentDialogBox(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, EditAgentDialogBox);

    _this = _possibleConstructorReturn(this, (EditAgentDialogBox.__proto__ || Object.getPrototypeOf(EditAgentDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          isEditingAgent: false
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
    Object.defineProperty(_assertThisInitialized(_this), "toggleEditingAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        _this.setState({
          isEditingAgent: typeof bool === 'boolean' ? bool : !_this.state.isEditingAgent
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
    Object.defineProperty(_assertThisInitialized(_this), "deleteAgent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(uuid) {
        _this.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_14__effects_users_deleteAgent__["a" /* default */])(uuid).then(function (res) {
          _this.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.openRequestErrorSnackbar(res.error);
          } else {
            _this.props.agentSuccessfullyDeleted();
          }
        }).catch(function (err) {
          _this.openRequestErrorSnackbar(networkErrorMessage);

          _this.toggleSubmittingRequestToServer(false);

          console.log(err);
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
    _this.state = (_this$state = {
      formApi: null,
      formSubmitted: false,
      isEditingAgent: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
      snackbarOpen: false,
      snackbarText: ''
    }, _defineProperty(_this$state, "isEditingAgent", false), _defineProperty(_this$state, "cancelAnchorEl", null), _defineProperty(_this$state, "acceptAnchorEl", null), _defineProperty(_this$state, "isErrorSnackbar", false), _defineProperty(_this$state, "snackbarText", ''), _this$state);
    return _this;
  }

  _createClass(EditAgentDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeEditAgentDialogBox = _props.closeEditAgentDialogBox,
          open = _props.open,
          viewingAgentUUID = _props.viewingAgentUUID,
          currentUserUUID = _props.currentUserUUID,
          currentUserRole = _props.currentUserRole;
      var _state = this.state,
          isEditingAgent = _state.isEditingAgent,
          cancelAnchorEl = _state.cancelAnchorEl,
          acceptAnchorEl = _state.acceptAnchorEl;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        open: open,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Edit Agent"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_EditAgentForm__["a" /* default */], {
        viewingAgentUUID: this.props.viewingAgentUUID,
        setFormSubmitted: this.setFormSubmitted,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        editAgent: __WEBPACK_IMPORTED_MODULE_13__effects_users_updateAgent__["a" /* default */],
        confirmAgentCreated: this.props.confirmAgentCreated,
        isEditingAgent: isEditingAgent,
        currentUserRole: this.props.currentUserRole,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        submittingRequestToServer: this.state.submittingRequestToServer,
        toggleSubmittingRequestToServer: this.toggleSubmittingRequestToServer,
        editAgentFormSubmittedSuccessfully: this.props.editAgentFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_11_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
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
            lineNumber: 278
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
            lineNumber: 281
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          _this2.toggleEditingAgent(false);

          closeEditAgentDialogBox();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, "Cancel"), !isEditingAgent && (this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"]) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "Delete") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemDelete
        },
        onClick: function onClick() {
          _this2.handleCancelMenuClose();

          _this2.deleteAgent(viewingAgentUUID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, "No")), !isEditingAgent && (this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["agent"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || this.props.currentUserRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"]) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        className: classes.editAgentBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, "Edit") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: acceptAnchorEl,
        open: Boolean(acceptAnchorEl),
        onClose: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, "Are you sure?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleAcceptMenuClose();

          _this2.toggleEditingAgent(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, "No")), isEditingAgent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
          lineNumber: 396
        }
      }, "Submit") : null) : null);
    }
  }]);

  return EditAgentDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(EditAgentDialogBox)));

/***/ }),

/***/ "./components/EditAgentPasswordDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_EditAgentPasswordForm__ = __webpack_require__("./containers/EditAgentPasswordForm.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditAgentPasswordDialogBox/index.js";

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
      width: '600px',
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
      position: 'relative',
      paddingTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    saveDraftBtn: {
      marginRight: 'auto',
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
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

var EditAgentPasswordDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditAgentPasswordDialogBox, _Component);

  function EditAgentPasswordDialogBox(props) {
    var _this;

    _classCallCheck(this, EditAgentPasswordDialogBox);

    _this = _possibleConstructorReturn(this, (EditAgentPasswordDialogBox.__proto__ || Object.getPrototypeOf(EditAgentPasswordDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool,
          submittingForm: !bool
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
      submittingForm: false,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      submittingRequestToServer: false,
      isErrorSnackbar: false
    };
    return _this;
  }

  _createClass(EditAgentPasswordDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeEditAgentDialogBox = _props.closeEditAgentDialogBox,
          closeEditAgentPasswordDialogBox = _props.closeEditAgentPasswordDialogBox,
          open = _props.open,
          submitProfilePicEditForm = _props.submitProfilePicEditForm,
          finishedSubmittingForm = _props.finishedSubmittingForm,
          submittingEditAgentPasswordForm = _props.submittingEditAgentPasswordForm,
          editProfilePicFormSubmitted = _props.editProfilePicFormSubmitted,
          setFormSubmitted = _props.setFormSubmitted,
          setFinishedSubmittingForm = _props.setFinishedSubmittingForm;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        open: open,
        onClose: closeEditAgentPasswordDialogBox,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "Change Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_EditAgentPasswordForm__["a" /* default */], {
        viewingAgentUUID: this.props.viewingAgentUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        submittingRequestToServer: this.state.submittingRequestToServer,
        toggleSubmittingRequestToServer: this.toggleSubmittingRequestToServer,
        formSubmittedSuccessfully: this.props.editPasswordFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
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
            lineNumber: 182
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
            lineNumber: 185
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), !submittingEditAgentPasswordForm ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        onClick: closeEditAgentPasswordDialogBox,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Cancel"), !editProfilePicFormSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
          lineNumber: 222
        }
      }, "Submit", ' ') : null) : null);
    }
  }]);

  return EditAgentPasswordDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(EditAgentPasswordDialogBox)));

/***/ }),

/***/ "./components/EditProfilePicDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_EditProfilePicForm__ = __webpack_require__("./containers/EditProfilePicForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AppGlobalStateProvider__ = __webpack_require__("./AppGlobalStateProvider/index.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/EditProfilePicDialogBox/index.js";

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
      width: '600px',
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
      paddingTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    saveDraftBtn: {
      marginRight: 'auto',
      color: theme.custom.submitBlue.main,
      '&:hover': {
        backgroundColor: theme.custom.submitBlue.transparentLightBackground
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

var EditProfilePicDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProfilePicDialogBox, _Component);

  function EditProfilePicDialogBox(props) {
    var _this;

    _classCallCheck(this, EditProfilePicDialogBox);

    _this = _possibleConstructorReturn(this, (EditProfilePicDialogBox.__proto__ || Object.getPrototypeOf(EditProfilePicDialogBox)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setFormSubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this.setState({
          formSubmitted: bool
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
    _this.state = {
      formApi: null,
      submittingForm: false,
      snackbarOpen: false,
      snackbarText: '',
      isErrorSnackbar: false
    };
    return _this;
  }

  _createClass(EditProfilePicDialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullScreen = _props.fullScreen,
          classes = _props.classes,
          closeProfilePicEditor = _props.closeProfilePicEditor,
          open = _props.open,
          submitProfilePicEditForm = _props.submitProfilePicEditForm,
          finishedSubmittingForm = _props.finishedSubmittingForm,
          submittingEditProfilePicForm = _props.submittingEditProfilePicForm,
          toggleSubmittingEditProfilePicForm = _props.toggleSubmittingEditProfilePicForm,
          editProfilePicFormSubmitted = _props.editProfilePicFormSubmitted,
          setFormSubmitted = _props.setFormSubmitted,
          setFinishedSubmittingForm = _props.setFinishedSubmittingForm;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        open: open,
        onClose: closeProfilePicEditor,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "Edit Profile Picture"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        id: "formDialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__AppGlobalStateProvider__["a" /* AppContext */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_EditProfilePicForm__["a" /* default */], {
          userUUID: _this2.props.userUUID,
          setIsSubmittingForm: _this2.setIsSubmittingForm,
          finishedSubmittingForm: finishedSubmittingForm,
          getFormApi: function getFormApi(formApi) {
            return _this2.setState({
              formApi: formApi
            });
          },
          createAgent: context.UserStore.createAgent,
          setAgentProfilePic: context.UserStore.setAgentProfilePic,
          submitProfilePicEditForm: submitProfilePicEditForm,
          setFormSubmitted: setFormSubmitted,
          setFinishedSubmittingForm: setFinishedSubmittingForm,
          editProfilePicFormSubmitted: editProfilePicFormSubmitted,
          openRequestErrorSnackbar: _this2.openRequestErrorSnackbar,
          createProfilePicDataURL: _this2.props.createProfilePicDataURL,
          toggleSubmittingEditProfilePicForm: toggleSubmittingEditProfilePicForm,
          uuid: _this2.props.uuid,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Snackbar___default.a, {
        classes: {
          root: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.snackBar, this.state.isErrorSnackbar && classes.errorSnackbar)
        },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.snackbarOpen,
        autoHideDuration: this.state.isErrorSnackbar ? 8000 : 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, this.state.snackbarText),
        action: [this.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
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
            lineNumber: 182
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), !submittingEditProfilePicForm ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        onClick: closeProfilePicEditor,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a, {
        onClick: function onClick() {
          return _this2.state.formApi.submitForm();
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Submit", ' ')) : null);
    }
  }]);

  return EditProfilePicDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styles)(EditProfilePicDialogBox)));

/***/ }),

/***/ "./components/FullScreenLoader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__ = __webpack_require__("material-ui/Portal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Portal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Portal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/FullScreenLoader/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["PropagateLoader"];

var styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.palette.secondary.dark,
      color: '#fff',
      zIndex: 9999999
    },
    text: {
      fontFamily: theme.typography.fontFamily,
      fontSize: '1.1rem',
      marginBottom: theme.spacing.unit * 3
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

var FullScreenLoader = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(FullScreenLoader, _Component);

  function FullScreenLoader() {
    _classCallCheck(this, FullScreenLoader);

    return _possibleConstructorReturn(this, (FullScreenLoader.__proto__ || Object.getPrototypeOf(FullScreenLoader)).apply(this, arguments));
  }

  _createClass(FullScreenLoader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          open = _props.open,
          classes = _props.classes,
          text = _props.text;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Portal___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        style: {
          display: open ? 'flex' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, text ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, text) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#fff",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))));
    }
  }]);

  return FullScreenLoader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(FullScreenLoader));

/***/ }),

/***/ "./components/InnerAppLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__ = __webpack_require__("@material-ui/icons/Settings");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__ = __webpack_require__("material-ui-pickers/utils/moment-utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__ = __webpack_require__("material-ui-pickers/utils/MuiPickersUtilsProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SideNav__ = __webpack_require__("./components/SideNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AdminSideNav__ = __webpack_require__("./components/AdminSideNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppTopNav__ = __webpack_require__("./components/AppTopNav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__SettingsDrawer__ = __webpack_require__("./components/SettingsDrawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MenuDialogBox__ = __webpack_require__("./components/MenuDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);



var _class,
    _temp,
    _initialiseProps,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/InnerAppLayout/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var Offline = function Offline() {
  return null;
};

if (__WEBPACK_IMPORTED_MODULE_9_is_browser___default.a) {
  var _require = __webpack_require__("react-detect-offline"),
      OfflineComp = _require.Offline;

  Offline = OfflineComp;
}

var styles = function styles(theme) {
  return {
    root: {
      maxHeight: '100% !important',
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignContent: 'center',
      fontFamily: theme.typography.fontFamily
    },
    content: {
      position: 'relative !important',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0,
      // So the Typography noWrap works
      overflow: 'auto'
    },
    toolbar: {
      position: 'relative !important',
      zIndex: '0 !important',
      height: '56px !important',
      '@media (min-width:0px) and (orientation: landscape)': {
        height: '48px !important'
      },
      '@media (min-width:600px)': {
        height: '64px !important'
      }
    },
    topToolbar: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    settingsBtn: {
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '10px',
      right: '0',
      height: '40px',
      width: '40px',
      zIndex: 10,
      backgroundColor: 'rgba(0,0,0,.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px 0 0 5px',
      outline: 'none',
      boxShadow: theme.shadows[6],
      '&:hover': {
        cursor: 'pointer'
      }
    },
    snackBar: {
      marginTop: 10
    },
    noConnectionSpinner: {
      marginLeft: 10
    }
  };
};

var InnerAppLayout = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerAppLayout, _React$Component);

  function InnerAppLayout(props) {
    var _this;

    _classCallCheck(this, InnerAppLayout);

    _this = _possibleConstructorReturn(this, (InnerAppLayout.__proto__ || Object.getPrototypeOf(InnerAppLayout)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      navDrawerOpen: false,
      settingsDrawerOpen: false,
      managementModalCurrentType: null,
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null
    };
    var userRole = _this.props.userRole;
    _this.isAdmin = userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"];
    return _this;
  }

  _createClass(InnerAppLayout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          logoutUser = _props.logoutUser,
          toggleFullScreenLoader = _props.toggleFullScreenLoader;
      var currentPath = this.props.router.pathname;
      var isAdmin = this.isAdmin;
      var _state = this.state,
          menuDialogBoxOpen = _state.menuDialogBoxOpen,
          menuDialogBoxTitle = _state.menuDialogBoxTitle,
          menuDialogBoxLinkItems = _state.menuDialogBoxLinkItems;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default.a, {
        utils: __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__AppTopNav__["a" /* default */], {
        currentPath: currentPath,
        logoutUser: logoutUser,
        toggleDrawer: this.toggleNavDrawer,
        isAdmin: isAdmin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), this.renderSideNav(), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("main", {
        className: classes.content,
        id: "inner-app-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.toolbar,
        id: "toolbar-helper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), this.props.children)), __WEBPACK_IMPORTED_MODULE_9_is_browser___default.a && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Offline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default.a, {
        classes: {
          root: classes.snackBar
        },
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: true,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, "Internet connection currently unavailable", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          className: classes.noConnectionSpinner,
          type: "loading",
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      })));
    }
  }]);

  return InnerAppLayout;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "toggleNavDrawer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      _this2.setState({
        navDrawerOpen: typeof state === 'boolean' ? state : !_this2.state.navDrawerOpen
      });
    }
  });
  Object.defineProperty(this, "toggleMenuDialogBoxOpen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(title, linkItems) {
      _this2.setState({
        menuDialogBoxOpen: true,
        menuDialogBoxTitle: title,
        menuDialogBoxLinkItems: linkItems
      });
    }
  });
  Object.defineProperty(this, "toggleMenuDialogBoxClosed", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this2.setState({
        menuDialogBoxOpen: false,
        menuDialogBoxTitle: null,
        menuDialogBoxLinkItems: null
      });
    }
  });
  Object.defineProperty(this, "toggleSettingsDrawer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(state) {
      _this2.setState({
        settingsDrawerOpen: typeof state === 'boolean' ? state : !_this2.state.settingsDrawerOpen
      });
    }
  });
  Object.defineProperty(this, "renderSideNav", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this2$props = _this2.props,
          logoutUser = _this2$props.logoutUser,
          userRole = _this2$props.userRole;
      var currentPath = _this2.props.router.pathname;

      if (_this2.isAdmin) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__AdminSideNav__["a" /* default */], {
          currentPath: currentPath,
          drawerOpen: _this2.state.navDrawerOpen,
          toggleDrawer: _this2.toggleNavDrawer,
          logoutUser: logoutUser,
          toggleManagementModal: _this2.toggleManagementModal,
          toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SideNav__["a" /* default */], {
        currentPath: currentPath,
        drawerOpen: _this2.state.navDrawerOpen,
        toggleDrawer: _this2.toggleNavDrawer,
        logoutUser: logoutUser,
        toggleMenuDialogBoxOpen: _this2.toggleMenuDialogBoxOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      });
    }
  });
}, _temp);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(InnerAppLayout)));

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__ = __webpack_require__("../node_modules/antd/dist/antd.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_withRoot__ = __webpack_require__("./lib/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__themeStyles__ = __webpack_require__("./themeStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globalStyles__ = __webpack_require__("./globalStyles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__InnerAppLayout__ = __webpack_require__("./components/InnerAppLayout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FullScreenLoader__ = __webpack_require__("./components/FullScreenLoader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models__ = __webpack_require__("./models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__ = __webpack_require__("./AppGlobalStateProvider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_css_main_css__ = __webpack_require__("./static/css/main.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__static_css_main_css__);


var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Layout/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import DevTools from 'mobx-react-devtools';
















var store = Object(__WEBPACK_IMPORTED_MODULE_14__models__["a" /* initStore */])();
var UIStore = store.UIStore;
__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.configure({
  showSpinner: false
});
__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.configure({
  trickleSpeed: 100
});

if (__WEBPACK_IMPORTED_MODULE_6_is_browser___default.a) {
  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeStart = function () {
    __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
  };

  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeComplete = function () {
    if (UIStore.fullScreenLoaderOn) {
      UIStore.toggleFullScreenLoader(false);
    }

    __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
  };

  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeError = function () {
    return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
  };
}

var Layout = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('app-body-class');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.className = document.body.className.replace(/\bapp-body-class\b/g, '');
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          UIStore = _props.UIStore,
          UserStore = _props.UserStore;
      var logout = UserStore.logoutUser,
          userRole = UserStore.userRole;
      var isAdmin = userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["admin"] || userRole === __WEBPACK_IMPORTED_MODULE_15__constants_userTypes__["superAdmin"];
      var fullScreenLoaderOn = UIStore.fullScreenLoaderOn,
          fullScreenLoaderText = UIStore.fullScreenLoaderText,
          toggleFullScreenLoader = UIStore.toggleFullScreenLoader;

      var logoutUser =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var _ref2, error;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return logout();

                case 2:
                  _ref2 = _context.sent;
                  error = _ref2.error;

                  if (!error) {
                    _context.next = 7;
                    break;
                  }

                  // TODO: add user notification of an logout error
                  console.log(error);
                  return _context.abrupt("return");

                case 7:
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.pushRoute('home');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function logoutUser() {
          return _ref.apply(this, arguments);
        };
      }();

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.props.title ? this.props.title : 'Reyes & Elsamad Real Estate'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_11__globalStyles__["a" /* default */]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__["b" /* AppProvider */], {
        UserStore: UserStore,
        UIStore: UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_styled_components__["ThemeProvider"], {
        theme: __WEBPACK_IMPORTED_MODULE_10__themeStyles__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__InnerAppLayout__["a" /* default */], {
        logoutUser: logoutUser,
        userRole: userRole,
        toggleFullScreenLoader: toggleFullScreenLoader,
        isAdmin: isAdmin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__FullScreenLoader__["a" /* default */], {
        open: fullScreenLoaderOn,
        text: fullScreenLoaderText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_9__lib_withRoot__["a" /* default */])(Layout)));

/***/ }),

/***/ "./components/MaterialCustomRadioInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__ = __webpack_require__("material-ui/Radio");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomRadioInputWrapper/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }









var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: 0,
      width: 200
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit
    },
    group: {
      margin: "".concat(theme.spacing.unit, "px 0")
    },
    horzontalRadioBtns: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    textAlignCenter: {
      textAlign: 'center'
    }
  };
};

var MaterialCustomRadioInputWrapper = function MaterialCustomRadioInputWrapper(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_form__["Field"], _extends({
    validate: props.validate,
    field: props.field
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), function (fieldApi) {
    var onInput = props.onInput,
        classes = props.classes,
        label = props.label,
        id = props.id,
        disabled = props.disabled,
        fullWidth = props.fullWidth,
        required = props.required,
        multiline = props.multiline,
        field = props.field,
        onBlur = props.onBlur,
        onChange = props.onChange,
        radioInputItems = props.radioInputItems,
        horizontal = props.horizontal,
        className = props.className,
        multiple = props.multiple,
        name = props.name,
        validate = props.validate,
        rest = _objectWithoutProperties(props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "radioInputItems", "horizontal", "className", "multiple", "name", "validate"]);

    var value = fieldApi.value,
        error = fieldApi.error,
        warning = fieldApi.warning,
        success = fieldApi.success,
        setValue = fieldApi.setValue,
        setTouched = fieldApi.setTouched,
        touched = fieldApi.touched;

    var renderRadioInputItems = function renderRadioInputItems(radioInputItems) {
      return radioInputItems.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControlLabel"], {
          key: item.label,
          value: item.value || item.label,
          disabled: item.disabled,
          classes: {
            root: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(disabled && classes.disabled)
          },
          control: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }),
          label: item.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        });
      });
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControl"], {
      component: "fieldset",
      error: error && touched,
      fullWidth: fullWidth,
      required: required,
      className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
      disabled: disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormLabel"], {
      component: "legend",
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(horizontal ? classes.textAlignCenter : undefined),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Radio__["RadioGroup"], _extends({
      "aria-label": label,
      name: "".concat(id, "1"),
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(classes.group, horizontal && classes.horzontalRadioBtns),
      value: value || null,
      onChange: function onChange(event) {
        setValue(event.target.value);

        if (onInput) {
          onInput(event);
        }
      },
      onBlur: function onBlur(event) {
        if (event.target.value || touched) setTouched();
      }
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    }), renderRadioInputItems(radioInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
      classes: horizontal ? {
        root: classes.textAlignCenter
      } : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      }
    }, error) : null));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomRadioInputWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),

/***/ "./components/MaterialCustomSelectInput/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__("material-ui/Select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__("material-ui/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInput/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }










var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0
    },
    fullWidth: {
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    },
    input: {
      textAlign: 'left'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing.unit / 4
    }
  };
};

var MaterialCustomSelectInput = function MaterialCustomSelectInput(props) {
  var error = props.error,
      touched = props.touched,
      required = props.required,
      disabled = props.disabled,
      classes = props.classes,
      className = props.className,
      label = props.label,
      id = props.id,
      value = props.value,
      multiple = props.multiple,
      onInput = props.onInput,
      name = props.name,
      _onBlur = props.onBlur,
      placeholder = props.placeholder,
      selectInputItems = props.selectInputItems,
      SelectDisplayProps = props.SelectDisplayProps,
      fullWidth = props.fullWidth,
      native = props.native,
      rest = _objectWithoutProperties(props, ["error", "touched", "required", "disabled", "classes", "className", "label", "id", "value", "multiple", "onInput", "name", "onBlur", "placeholder", "selectInputItems", "SelectDisplayProps", "fullWidth", "native"]);

  var renderSelectInputItems = function renderSelectInputItems(selectInputItems) {
    return selectInputItems.map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__["MenuItem"], {
        key: item.label,
        value: item.value || item.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, item.label);
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
    error: error,
    required: required,
    className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
    htmlFor: "".concat(id, "-error"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default.a, _extends({
    SelectDisplayProps: SelectDisplayProps || {
      style: {
        backgroundColor: 'inherit'
      }
    },
    onClose: function onClose(event) {
      return event.target.blur();
    },
    placeholder: placeholder,
    native: native,
    value: multiple ? value || [] : value || '',
    onChange: function onChange(event) {
      if (onInput) {
        onInput(event);
      }
    },
    input: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default.a, {
      name: name,
      id: "".concat(id, "-helper"),
      className: classes.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }),
    onBlur: function onBlur(event) {
      if (_onBlur) {
        _onBlur(event);
      }
    },
    multiple: multiple,
    renderValue: !multiple ? null : function (selected) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.chips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, selected.map(function (value) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
          key: value,
          label: value,
          className: classes.chip,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        });
      }));
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), renderSelectInputItems(selectInputItems)), error ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, error) : null);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomSelectInput)));

/***/ }),

/***/ "./components/MaterialCustomSelectInputWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select__ = __webpack_require__("material-ui/Select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__ = __webpack_require__("material-ui/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomSelectInputWrapper/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0,
      minWidth: 120
    },
    fullWidth: {
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    },
    input: {
      textAlign: 'left'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing.unit / 4
    },
    select: {
      textAlign: 'left'
    }
  };
};

var MaterialCustomSelectInputWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaterialCustomSelectInputWrapper, _React$Component);

  function MaterialCustomSelectInputWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MaterialCustomSelectInputWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MaterialCustomSelectInputWrapper.__proto__ || Object.getPrototypeOf(MaterialCustomSelectInputWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._fieldApi) _this._fieldApi.setError('');
      }
    }), _temp));
  }

  _createClass(MaterialCustomSelectInputWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_form__["Field"], _extends({
        validate: this.props.validate,
        field: this.props.field
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), function (fieldApi) {
        var _this2$props = _this2.props,
            onInput = _this2$props.onInput,
            classes = _this2$props.classes,
            label = _this2$props.label,
            id = _this2$props.id,
            disabled = _this2$props.disabled,
            fullWidth = _this2$props.fullWidth,
            required = _this2$props.required,
            multiline = _this2$props.multiline,
            field = _this2$props.field,
            _onBlur = _this2$props.onBlur,
            _onChange = _this2$props.onChange,
            selectInputItems = _this2$props.selectInputItems,
            horizontal = _this2$props.horizontal,
            className = _this2$props.className,
            multiple = _this2$props.multiple,
            name = _this2$props.name,
            validate = _this2$props.validate,
            SelectDisplayProps = _this2$props.SelectDisplayProps,
            rest = _objectWithoutProperties(_this2$props, ["onInput", "classes", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "selectInputItems", "horizontal", "className", "multiple", "name", "validate", "SelectDisplayProps"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        _this2._fieldApi = fieldApi;

        var renderSelectInputItems = function renderSelectInputItems(selectInputItems) {
          return selectInputItems.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu__["MenuItem"], {
              key: item.key || item.label,
              value: item.value || item.label,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            }, item.label);
          });
        };

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormControl"], {
          error: error && touched,
          fullWidth: fullWidth,
          required: required,
          className: disabled ? "".concat(classes.formControl, " ").concat(classes.disabled, " ").concat(className) : "".concat(classes.formControl, " ").concat(className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input__["InputLabel"], {
          htmlFor: "".concat(id, "-error"),
          disabled: disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Select___default.a, _extends({
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(disabled && classes.disabled, classes.select),
          disabled: disabled,
          value: multiple ? value || [] : value || '',
          SelectDisplayProps: SelectDisplayProps || {
            style: {
              backgroundColor: 'inherit'
            }
          },
          onChange: function onChange(event) {
            setValue(event.target.value);

            if (_onChange) {
              _onChange(event.target.value);
            }

            if (onInput) {
              onInput(event);
            }
          },
          input: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Input___default.a, {
            name: name,
            id: "".concat(id, "-helper"),
            disabled: disabled,
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.input, disabled && classes.disabled),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          }),
          onBlur: function onBlur(event) {
            if (event.target.value || touched) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          },
          multiple: multiple,
          renderValue: !multiple ? null : function (selected) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.chips,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            }, selected.filter(function (val) {
              return val !== '';
            }).map(function (value) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Chip___default.a, {
                key: value,
                label: value,
                className: classes.chip,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                }
              });
            }));
          }
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), renderSelectInputItems(selectInputItems)), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Form__["FormHelperText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, error) : null);
      });
    }
  }]);

  return MaterialCustomSelectInputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(MaterialCustomSelectInputWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),

/***/ "./components/MaterialCustomTextFieldWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce__ = __webpack_require__("debounce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_debounce__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MaterialCustomTextFieldWrapper/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var numbersOnlyRegex = /^\d+$/;
var noLettersRegex = /^[^a-zA-Z]+$/;
var noNegativeSignRegex = /^[^-]/;

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit,
      marginLeft: 0
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    disabled: {
      cursor: 'not-allowed'
    },
    redErrorText: {
      color: '#f44336'
    }
  };
};

var CustomTextFieldWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomTextFieldWrapper, _React$Component);

  function CustomTextFieldWrapper(props) {
    var _this;

    _classCallCheck(this, CustomTextFieldWrapper);

    _this = _possibleConstructorReturn(this, (CustomTextFieldWrapper.__proto__ || Object.getPrototypeOf(CustomTextFieldWrapper)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this._fieldApi) _this._fieldApi.setError('');
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnStartAdornment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            isDollarAmount = _this$props.isDollarAmount,
            isPercentAmount = _this$props.isPercentAmount,
            customPrefix = _this$props.customPrefix;

        if (isDollarAmount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, "$");
        } else if (isPercentAmount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, "%");
        } else if (customPrefix) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }, customPrefix);
        }

        return null;
      }
    });
    _this.state = {
      id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
      submittedValue: _this.props.submittedValue
    };
    return _this;
  }

  _createClass(CustomTextFieldWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var returnStartAdornment = this.returnStartAdornment;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_form__["Field"], _extends({
        validate: this.props.validate,
        field: this.props.field
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), function (fieldApi) {
        var _this2$props = _this2.props,
            onInput = _this2$props.onInput,
            classes = _this2$props.classes,
            submittedClasses = _this2$props.submittedClasses,
            label = _this2$props.label,
            id = _this2$props.id,
            disabled = _this2$props.disabled,
            fullWidth = _this2$props.fullWidth,
            required = _this2$props.required,
            multiline = _this2$props.multiline,
            field = _this2$props.field,
            _onBlur = _this2$props.onBlur,
            _onChange = _this2$props.onChange,
            inputClassName = _this2$props.inputClassName,
            labelClassName = _this2$props.labelClassName,
            validate = _this2$props.validate,
            numbersOnly = _this2$props.numbersOnly,
            noLetters = _this2$props.noLetters,
            onChangeWithID = _this2$props.onChangeWithID,
            submittedValue = _this2$props.submittedValue,
            noNegativeSign = _this2$props.noNegativeSign,
            convertToLocaleString = _this2$props.convertToLocaleString,
            formApi = _this2$props.formApi,
            isDollarAmount = _this2$props.isDollarAmount,
            inputRootClassName = _this2$props.inputRootClassName,
            isPercentAmount = _this2$props.isPercentAmount,
            requiresDefaultOnChange = _this2$props.requiresDefaultOnChange,
            isInputMasked = _this2$props.isInputMasked,
            beforeUnmount = _this2$props.beforeUnmount,
            isEditingDeal = _this2$props.isEditingDeal,
            defaultValue = _this2$props.defaultValue,
            disabledStyle = _this2$props.disabledStyle,
            formControlClassName = _this2$props.formControlClassName,
            shrink = _this2$props.shrink,
            mask = _this2$props.mask,
            rest = _objectWithoutProperties(_this2$props, ["onInput", "classes", "submittedClasses", "label", "id", "disabled", "fullWidth", "required", "multiline", "field", "onBlur", "onChange", "inputClassName", "labelClassName", "validate", "numbersOnly", "noLetters", "onChangeWithID", "submittedValue", "noNegativeSign", "convertToLocaleString", "formApi", "isDollarAmount", "inputRootClassName", "isPercentAmount", "requiresDefaultOnChange", "isInputMasked", "beforeUnmount", "isEditingDeal", "defaultValue", "disabledStyle", "formControlClassName", "shrink", "mask"]);

        var value = fieldApi.value,
            error = fieldApi.error,
            warning = fieldApi.warning,
            success = fieldApi.success,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            touched = fieldApi.touched;
        _this2._fieldApi = fieldApi;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(disabled || disabledStyle ? classes.disabled : null, classes.formControl, formControlClassName),
          error: error && touched,
          disabled: disabled || disabledStyle,
          fullWidth: fullWidth,
          required: required,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__["InputLabel"], {
          htmlFor: id,
          shrink: shrink,
          className: disabled || disabledStyle ? "".concat(classes.disabled, " ").concat(labelClassName) : "".concat(labelClassName),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, label) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default.a, _extends({
          defaultValue: defaultValue,
          inputRef: function inputRef(ref) {
            return _this2._input = ref;
          },
          className: disabled || disabledStyle ? classes.disabled : null,
          inputProps: {
            className: disabled || disabledStyle ? "".concat(classes.disabled, " ").concat(inputClassName) : "".concat(inputClassName)
          },
          value: value || '',
          classes: inputRootClassName ? {
            root: inputRootClassName
          } : null,
          id: id,
          onChange: function onChange(e) {
            var newValue = e.target.value;

            if (numbersOnly && newValue && !numbersOnlyRegex.test(newValue)) {
              return;
            }

            if (noLetters && newValue && !noLettersRegex.test(newValue)) {
              return;
            }

            if (noNegativeSign && newValue && !noNegativeSignRegex.test(newValue)) {
              return;
            }

            if (!isInputMasked) {
              setValue(newValue);
            }

            if (isInputMasked) {
              if (mask && mask.length && newValue.length <= mask.length) {
                __WEBPACK_IMPORTED_MODULE_8_debounce___default()(function () {
                  return setValue(_this2._input.value);
                }, 100)();
              }
            }

            if (_onChange && typeof _onChange === 'function') {
              if (requiresDefaultOnChange || isInputMasked) {
                _onChange(e, setValue);
              } else {
                _onChange(newValue, setValue, e);
              }
            }

            if (onChangeWithID && typeof onChangeWithID === 'function') {
              onChangeWithID(_this2.state.id, newValue, e);
            }
          },
          onBlur: function onBlur(event) {
            if (event.target.value || touched) setTouched();

            if (_onBlur) {
              _onBlur(event);
            }
          },
          multiline: multiline,
          startAdornment: returnStartAdornment()
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        })), error && touched ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__["FormHelperText"], {
          classes: {
            root: classes.redErrorText
          },
          id: "".concat(id, "-error-text"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }, error) : null);
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var convertToLocaleString = nextProps.convertToLocaleString;

      if (nextProps.formApi && nextProps.submittedValue !== prevState.submittedValue) {
        var val = convertToLocaleString ? Number(nextProps.submittedValue).toLocaleString() : nextProps.submittedValue;
        nextProps.formApi.setValue(nextProps.field, val);
        return {
          submittedValue: nextProps.submittedValue
        };
      }

      return null;
    }
  }]);

  return CustomTextFieldWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(CustomTextFieldWrapper)));
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

/***/ }),

/***/ "./components/MenuDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__ = __webpack_require__("material-ui/colors/blue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__ = __webpack_require__("material-ui/Avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/MenuDialogBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var styles = {
  avatar: {
    backgroundColor: __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default.a[100],
    color: __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_blue___default.a[600]
  },
  listItemContentWrapper: {
    display: 'flex'
  },
  listItemTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  anchor: {
    textDecoration: 'none'
  },
  title: {
    textAlign: 'center'
  }
};

var MenuDialoBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuDialoBox, _Component);

  function MenuDialoBox() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MenuDialoBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MenuDialoBox.__proto__ || Object.getPrototypeOf(MenuDialoBox)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(renderItems) {
        renderItems = renderItems || [];
        var classes = _this.props.classes;
        var _this$props = _this.props,
            toggleSideNavModal = _this$props.toggleSideNavModal,
            toggleSideNavModalClosed = _this$props.toggleSideNavModalClosed;
        return renderItems.map(function (item) {
          var Icon = item.icon;

          if (item.type === 'link') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__routes__["Link"], {
              route: item.route,
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: classes.anchor,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
              button: true,
              onClick: function onClick() {
                return toggleSideNavModalClosed();
              },
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.listItemContentWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemAvatar"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default.a, {
              className: classes.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            })))));
          }

          if (item.onClick && typeof item.onClick === 'function') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
              button: true,
              onClick: function onClick() {
                item.onClick();
                toggleSideNavModalClosed();
              },
              key: item.route || item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: classes.listItemContentWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemAvatar"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default.a, {
              className: classes.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItemText"], {
              classes: {
                root: classes.listItemTextWrapper
              },
              primary: item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            })));
          }
        });
      }
    }), _temp));
  }

  _createClass(MenuDialoBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onClose = _props.onClose,
          selectedValue = _props.selectedValue,
          toggleSideNavModal = _props.toggleSideNavModal,
          open = _props.open,
          title = _props.title,
          linkItems = _props.linkItems,
          toggleSideNavModalClosed = _props.toggleSideNavModalClosed;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        onClose: toggleSideNavModalClosed,
        "aria-labelledby": "side-nav-dialog-box",
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        classes: {
          root: classes.title
        },
        id: "side-nav-dialog-box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, this.renderLinks(linkItems))));
    }
  }]);

  return MenuDialoBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(MenuDialoBox));

/***/ }),

/***/ "./components/Profile/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_AttachMoney__ = __webpack_require__("@material-ui/icons/AttachMoney");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_AttachMoney___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_AttachMoney__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Help__ = __webpack_require__("@material-ui/icons/Help");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Star__ = __webpack_require__("@material-ui/icons/Star");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ExpandMore__ = __webpack_require__("@material-ui/icons/ExpandMore");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ExpandMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ExpandMore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_buildo_react_components_lib_FormattedText__ = __webpack_require__("buildo-react-components/lib/FormattedText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_buildo_react_components_lib_FormattedText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_buildo_react_components_lib_FormattedText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem__ = __webpack_require__("material-ui/Menu/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel__ = __webpack_require__("material-ui/ExpansionPanel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__StatNumberBox__ = __webpack_require__("./components/StatNumberBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__CustomInputMask__ = __webpack_require__("./components/CustomInputMask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__containers_DealsWithGQLQuery__ = __webpack_require__("./containers/DealsWithGQLQuery.js");
var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/Profile/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























var Loader = __WEBPACK_IMPORTED_MODULE_17_react_spinners__["BounceLoader"];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
8;

var styles = function styles(theme) {
  var _profilePicSubstitute, _detailsInfoInput;

  return {
    profileInfoWrapper: _defineProperty({
      position: 'relative',
      display: 'flex',
      marginBottom: '20px',
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
    title: _defineProperty({
      color: 'rgba(0,0,0,.7)',
      display: 'block',
      marginBottom: '30px'
    }, theme.breakpoints.down('sm'), {
      fontSize: '.9rem'
    }),
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
    },
    lightHeading: {
      color: '#fff'
    },
    statNumberBoxWrapper: {
      backgroundColor: '#fff',
      height: '175px'
    },
    statBoxQuestionIcon: {
      fontSize: '40px',
      color: '#F57C00'
    },
    statBoxMoneyIcon: {
      fontSize: '40px',
      color: '#388E3C'
    },
    statBoxStarIcon: {
      fontSize: '40px',
      color: '#1976D2'
    }
  };
};

var Profile = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
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
    Object.defineProperty(_assertThisInitialized(_this), "componentDidUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(prevProps) {
        if (prevProps.agent.agent.profilePicURL !== _this.props.agent.agent.profilePicURL) {
          _this.setState({
            imageError: false
          });
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
        console.log("role: ".concat(role));

        switch (role) {
          case __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["agent"]:
            return title && title.trim() ? Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])(title) : 'Licensed Real Estate Salesperson';
            break;

          case __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["admin"]:
            return 'Admin';
            break;

          case __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["superAdmin"]:
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
        var canEdit = currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["superAdmin"];
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          }
        }, isLoadingProfilePicture && agent.agent.profilePicURL && !_this.state.imageError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicLoader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
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
            lineNumber: 487
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
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
            lineNumber: 503
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          }
        }, "Error loading profile picture...")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstitute,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.profilePicSubstituteText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          }
        }, "No profile photo available")), canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: classes.editProfilePicBtnsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: classes.editProfilePicBtn,
          onClick: openProfilePicEditor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 532
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__["FaPencil"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
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
      var name = Object(__WEBPACK_IMPORTED_MODULE_24__utils_stringUtils__["a" /* capitalize */])("".concat(firstName, " ").concat(lastName));
      var canEdit = currentUserUUID === uuid || currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["superAdmin"];
      var isAdmin = currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["admin"] || currentUserRole === __WEBPACK_IMPORTED_MODULE_22__constants_userTypes__["superAdmin"];
      var editingOwnProfile = currentUserUUID === uuid;
      var currentDate = __WEBPACK_IMPORTED_MODULE_12_moment___default()();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.profileInfoWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        }
      }, canEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.editBtnsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.editBtn,
        onClick: this.handleEditAgentMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__["FaPencil"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: editAgentAnchorEl,
        open: Boolean(editAgentAnchorEl),
        onClose: this.handleEditAgentMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        }
      }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        }
      }, "Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItemAccept
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();

          openEditAgentPasswordDialogBox();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: function onClick() {
          _this2.handleEditAgentMenuClose();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.leftColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        }
      }, this.renderProfilePic(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.email, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        }
      }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        }
      }, email)), officeNumber && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        }
      }, "Office"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        }
      }, officeNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.mobile, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, "Mobile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, mobileNumber)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.region, classes.details),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        }
      }, "Branch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.detailsInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        }
      }, branch)), facebook || instagram || twitter ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        }
      }, "Social Media:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.socialMediaItemsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        }
      }, facebook && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: facebook,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__["FaFacebook"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        }
      })), twitter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: twitter,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__["FaTwitter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        }
      })), instagram && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: instagram,
        target: "_blank",
        className: classes.socialMediaItemWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_icons_lib_fa__["FaInstagram"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        }
      })))) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.rightColumnWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: classes.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        }
      }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        }
      }, this.returnTitle(role, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.descriptionTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        }
      }, "About ", name.split(' ')[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_buildo_react_components_lib_FormattedText___default.a, {
        className: classes.descriptionDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        }
      }, profileDescription || 'No description available yet...')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Snackbar___default.a, {
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
            lineNumber: 730
          }
        }, "Profile saved"),
        action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default.a, {
          key: "undo",
          color: "secondary",
          size: "small",
          onClick: function onClick() {
            _this2.handleClose();

            undoSave();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 732
          }
        }, "UNDO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 743
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 750
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        }
      })), isAdmin && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.expansionPanelWrapper,
        style: {
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel__["ExpansionPanelSummary"], {
        expandIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ExpandMore___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19_material_ui_Typography___default.a, {
        className: classes.heading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        }
      }, "Agent Deals & Statistics")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_ExpansionPanel__["ExpansionPanelDetails"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Grid___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__containers_DealsWithGQLQuery__["a" /* default */], {
        userRole: currentUserRole,
        isAdmin: isAdmin,
        userUUID: uuid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        }
      })))))))));
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Profile);

/***/ }),

/***/ "./components/SettingsDrawer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__ = __webpack_require__("material-ui/Switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings__ = __webpack_require__("@material-ui/icons/Settings");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/SettingsDrawer/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var drawerWidth = 340;

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      width: '100%',
      zIndex: 1,
      backgroundColor: '#fafafa',
      overflowY: 'initial'
    },
    tempDrawer: {
      boxSizing: 'border-box',
      maxWidth: '80%',
      minWidth: drawerWidth - 100,
      width: drawerWidth,
      right: 0,
      left: 'auto',
      fontFamily: theme.typography.fontFamily
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '5px',
      bottom: '5px'
    },
    arrowBackBtn: {
      marginLeft: 'auto'
    },
    closeIcon: {
      position: 'absolute',
      right: '5px',
      top: '15px',
      border: 'none',
      backgroundColor: '#fafafa',
      transition: 'color .2s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        color: '#000'
      }
    },
    iconRoot: {
      fontSize: '18px'
    },
    listItem: {
      display: 'flex'
    },
    listItemLabel: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    listItemLabelItem: {
      marginLeft: 'auto'
    },
    listWrapper: {
      paddingTop: '20px',
      paddingBottom: '20px',
      fontSize: '15px'
    },
    header: {
      marginBottom: '0.7em',
      fontWeight: '500'
    },
    settingsBtn: {
      position: 'absolute',
      bottom: '10px',
      left: '-40px',
      height: '40px',
      width: '40px',
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px 0 0 5px',
      boxShadow: theme.shadows[6],
      outline: 'none',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    scrollableWrapper: {
      padding: '15px',
      overflow: 'auto',
      height: '100%'
    }
  };
};

var SettingsDrawer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SettingsDrawer, _Component);

  function SettingsDrawer() {
    _classCallCheck(this, SettingsDrawer);

    return _possibleConstructorReturn(this, (SettingsDrawer.__proto__ || Object.getPrototypeOf(SettingsDrawer)).apply(this, arguments));
  }

  _createClass(SettingsDrawer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer,
          isAdmin = _props.isAdmin,
          navDrawerOpen = _props.navDrawerOpen,
          toggleNavDrawer = _props.toggleNavDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Drawer___default.a, {
        className: classes.tempDrawer,
        classes: {
          paper: classes.drawerPaper
        },
        open: drawerOpen,
        anchor: "right",
        ModalProps: {
          keepMounted: true,
          // Better open performance on mobile.
          hideBackdrop: true
        },
        onClose: toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.scrollableWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.closeIcon,
        onClick: this.props.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Close___default.a, {
        classes: {
          root: classes.iconRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
        variant: "subheading",
        classes: {
          root: classes.header
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Settings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a, {
        variant: "caption",
        classes: {
          root: classes.header
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Change your back-end settings here"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.listWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: classes.settingsBtn,
        onClick: this.props.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Settings___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }))));
    }
  }]);

  return SettingsDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(SettingsDrawer));

/***/ }),

/***/ "./components/SideNav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden__ = __webpack_require__("material-ui/Hidden");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Hidden__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack__ = __webpack_require__("@material-ui/icons/ArrowBack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_ArrowBack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications__ = __webpack_require__("@material-ui/icons/Notifications");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SideNavLinkItem__ = __webpack_require__("./components/SideNavLinkItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navItems__ = __webpack_require__("./components/SideNav/navItems.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/SideNav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var drawerWidth = 240;

var styles = function styles(theme) {
  var _drawerPaperClose;

  return {
    root: {
      position: 'relative',
      height: '100%'
    },
    drawerPaper: {
      position: 'relative',
      paddingBottom: '50px',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundColor: 'rgba(36, 68, 109, .75)',
      color: '#fff',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: (_drawerPaperClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 5
    }, _defineProperty(_drawerPaperClose, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 6.8
    }), _defineProperty(_drawerPaperClose, '&:hover', {
      width: drawerWidth
    }), _drawerPaperClose),
    tempDrawer: {
      minWidth: '240px',
      width: '240px'
    },
    toolbar: theme.mixins.toolbar,
    topToolbar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '5px'
    },
    list: {
      paddingTop: 0
    },
    notificationIcon: {
      position: 'absolute',
      left: '5px',
      bottom: '5px'
    },
    arrowBackBtn: {
      marginLeft: 'auto',
      marginRight: '10px',
      height: '30px',
      width: '30px',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,.1)'
      }
    },
    listRoot: {
      height: '100%',
      overflow: 'hidden' //borderBottom: '1px solid rgba(255,255,255,.2)',

    },
    icon: {
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,.1)'
      }
    },
    topDivider: {
      backgroundColor: 'rgba(255,255,255,.2)'
    }
  };
};

var SideNav = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "sideNavListingsDialogItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: [{
        name: 'Create a Listing',
        route: 'create-listing',
        type: 'link',
        icon: __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Add___default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }, {
        name: 'View Listings',
        route: 'listings',
        type: 'link',
        icon: __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RemoveRedEye___default.a,
        onClick: _this.props.toggleMenuDialogBoxClosed
      }]
    }), Object.defineProperty(_assertThisInitialized(_this), "renderSideLinkComponents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentPath) {
        return __WEBPACK_IMPORTED_MODULE_15__navItems__["a" /* default */].map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SideNavLinkItem__["a" /* default */], {
            key: item.route || item.name,
            name: item.name,
            route: item.route,
            icon: item.icon,
            iconLeft: item.iconLeft,
            iconLeftSmall: item.iconLeftSmall,
            iconFontSize: item.iconFontSize,
            currentPath: currentPath,
            isActionItem: !item.route,
            onClick: function onClick() {
              if (_this.props.drawerOpen) _this.props.toggleDrawer(false);
              if (item.id === 'logout') _this.props.logoutUser();

              if (item.id === 'listings') {
                _this.props.toggleMenuDialogBoxOpen('Listings', _this.sideNavListingsDialogItems);
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(SideNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          currentPath = _props.currentPath,
          drawerOpen = _props.drawerOpen,
          toggleDrawer = _props.toggleDrawer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_13_classnames___default()(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a, {
        classes: {
          root: classes.listRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, this.renderSideLinkComponents(currentPath))));
    }
  }]);

  return SideNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles__["withStyles"])(styles)(SideNav));

/***/ }),

/***/ "./components/SideNav/navItems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export agentSideLinks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__ = __webpack_require__("@material-ui/icons/ExitToApp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount__ = __webpack_require__("@material-ui/icons/SupervisorAccount");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment__ = __webpack_require__("@material-ui/icons/Assignment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Assignment__);





var agentSideLinks = [{
  name: 'Dashboard',
  route: 'dashboard',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdDashboard"]
}, {
  name: 'Profile',
  route: 'profile',
  icon: __WEBPACK_IMPORTED_MODULE_0_react_icons_lib_md__["MdPerson"],
  iconFontSize: 28,
  iconLeft: '12px'
}, {
  name: 'The Vault',
  route: 'deals',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaCreditCard"]
}, {
  name: 'Invoices',
  route: 'invoices',
  icon: __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa__["FaClipboard"],
  iconFontSize: 20
}, {
  name: 'Agents',
  route: 'agents',
  icon: __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_SupervisorAccount___default.a,
  iconFontSize: 24
},
/*
{ name: 'Listings', icon: ListingsIcon, id: 'listings' },
*/
{
  name: 'Log Out',
  icon: __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_ExitToApp___default.a,
  id: 'logout'
}];
/* harmony default export */ __webpack_exports__["a"] = (agentSideLinks);

/***/ }),

/***/ "./components/SideNavLinkItem/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styledComponents__ = __webpack_require__("./components/SideNavLinkItem/styledComponents/index.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/SideNavLinkItem/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
  return {
    icon: {
      color: 'inherit !important'
    }
  };
};

var SideNavLinkItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNavLinkItem, _Component);

  function SideNavLinkItem() {
    _classCallCheck(this, SideNavLinkItem);

    return _possibleConstructorReturn(this, (SideNavLinkItem.__proto__ || Object.getPrototypeOf(SideNavLinkItem)).apply(this, arguments));
  }

  _createClass(SideNavLinkItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          iconFontSize = _props.iconFontSize,
          Icon = _props.icon,
          isActionItem = _props.isActionItem,
          isAdminLinks = _props.isAdminLinks,
          classes = _props.classes,
          iconLeft = _props.iconLeft,
          iconLeftSmall = _props.iconLeftSmall,
          rest = _objectWithoutProperties(_props, ["onClick", "iconFontSize", "icon", "isActionItem", "isAdminLinks", "classes", "iconLeft", "iconLeftSmall"]);

      var active;

      if (this.props.currentPath.split('/')[2] === this.props.route) {
        active = true;
      } else {
        active = false;
      }

      var linkItem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["d" /* SideNavLinkItemWrapper */], _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: this.props.route,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["b" /* SideNavLinkItemAnchor */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["a" /* IconWrapper */], {
        isAdminLinks: isAdminLinks,
        iconLeft: iconLeft,
        iconLeftSmall: iconLeftSmall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        size: iconFontSize || 22,
        classes: {
          root: classes.icon
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }) : null), this.props.name)));
      var actionItem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["d" /* SideNavLinkItemWrapper */], _extends({
        active: active,
        onClick: onClick,
        isAdminLinks: isAdminLinks
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["c" /* SideNavLinkItemDiv */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styledComponents__["a" /* IconWrapper */], {
        isAdminLinks: isAdminLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        size: iconFontSize || 22,
        color: "primary",
        classes: {
          root: classes.icon
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : null), this.props.name));

      if (isActionItem) {
        return actionItem;
      }

      return linkItem;
    }
  }]);

  return SideNavLinkItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(SideNavLinkItem));

/***/ }),

/***/ "./components/SideNavLinkItem/styledComponents/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SideNavLinkItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SideNavLinkItemAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SideNavLinkItemDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished__ = __webpack_require__("polished");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_polished__);


var SideNavLinkItemWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemWrapper",
  componentId: "s1oz5fjl-0"
})(["height:45px;min-width:100%;font-size:16px;font-family:Roboto;font-weight:500;color:", ";cursor:pointer;background-color:", ";transition:color .3s ease-in-out;&:hover{background-color:", ";}}"], function (props) {
  return props.isAdminLinks ? '#fff' : 'inherit';
}, function (props) {
  return props.active ? 'rgba(255, 255, 255, 0.15) !important' : 'initial';
}, function (props) {
  return props.isAdminLinks ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
});
var SideNavLinkItemAnchor = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a.withConfig({
  displayName: "styledComponents__SideNavLinkItemAnchor",
  componentId: "s1oz5fjl-1"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;color:#fff;&:hover{color:#fff !important;}"]);
var SideNavLinkItemDiv = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "styledComponents__SideNavLinkItemDiv",
  componentId: "s1oz5fjl-2"
})(["display:flex !important;height:100%;flex-direction:column;justify-content:center;padding-right:15px;padding-left:55px;vertical-align:middle;display:table-cell;min-width:100%;text-decoration:none;"]);
var IconWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span.withConfig({
  displayName: "styledComponents__IconWrapper",
  componentId: "s1oz5fjl-3"
})(["margin-right:35px;position:absolute;left:", ";@media screen and (max-width:600px){left:", ";}"], function (props) {
  return props.iconLeft ? props.iconLeft : '15px';
}, function (props) {
  return props.iconLeftSmall ? props.iconLeftSmall : '8px';
});

/***/ }),

/***/ "./components/StatNumberBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/StatNumberBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      height: '200px',
      width: '100%',
      boxShadow: theme.shadows[1],
      borderRadius: '5px'
    },
    boxTop: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      borderBottom: '1px solid rgba(0,0,0,.15)',
      fontSize: '40px',
      lineHeight: '40px',
      fontWeight: '300',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '0 10px'
    }, theme.breakpoints.down('sm'), {
      fontSize: '32px'
    }),
    boxInfo: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      marginTop: '-12px',
      padding: '2px 5px',
      height: '24px'
    },
    boxInfoText: _defineProperty({
      height: '24px',
      display: 'inline-block',
      padding: '4px 10px',
      textTransform: 'uppercase',
      lineHeight: '14px',
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,.15)',
      fontSize: '12px',
      color: '#636c72',
      borderRadius: '10px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }, theme.breakpoints.down('xs'), {
      fontSize: '10px'
    }),
    boxBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '0 10px'
    }
  };
};

var StatNumberBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(StatNumberBox, _Component);

  function StatNumberBox() {
    _classCallCheck(this, StatNumberBox);

    return _possibleConstructorReturn(this, (StatNumberBox.__proto__ || Object.getPrototypeOf(StatNumberBox)).apply(this, arguments));
  }

  _createClass(StatNumberBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          iconClass = _props.iconClass,
          iconColor = _props.iconColor,
          statTitle = _props.statTitle,
          stat = _props.stat,
          widthPercent = _props.widthPercent,
          rootClassName = _props.rootClassName,
          Icon = _props.icon;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.root, rootClassName),
        style: {
          width: widthPercent ? "".concat(widthPercent, "%") : null
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, stat), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.boxInfoText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, statTitle)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.boxBottom,
        style: {
          color: iconColor ? iconColor : null
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, Icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
        classes: {
          root: iconClass
        },
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }) : null));
    }
  }]);

  return StatNumberBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(StatNumberBox));

/***/ }),

/***/ "./components/SubmitDealDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_SubmitDealForm__ = __webpack_require__("./containers/SubmitDealForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/SubmitDealDialogBox/index.js";

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

var SubmitDealDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
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
          formSubmitted: bool
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
    _this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
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
          toggleDialogBoxOpen = _props.toggleDialogBoxOpen,
          submitDealDialogOpen = _props.submitDealDialogOpen,
          setDealSuccessfullySubmitted = _props.setDealSuccessfullySubmitted;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a, {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: submitDealDialogOpen,
        classes: {
          paper: classes.paper
        },
        fullScreen: fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "New Deal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__containers_SubmitDealForm__["a" /* default */], {
        userUUID: this.props.userUUID,
        getFormApi: function getFormApi(formApi) {
          return _this2.setState({
            formApi: formApi
          });
        },
        setFormSubmitted: this.setFormSubmitted,
        setDealSuccessfullySubmitted: setDealSuccessfullySubmitted,
        openRequestErrorSnackbar: this.openRequestErrorSnackbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
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
        autoHideDuration: this.state.isErrorSnackbar ? 8000 : 4000,
        onClose: this.handleCloseSnackbar,
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "snackbar-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
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
            lineNumber: 146
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: toggleDialogBoxOpen,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
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
          lineNumber: 186
        }
      }, "Submit")) : null);
    }
  }]);

  return SubmitDealDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles)(SubmitDealDialogBox)));

/***/ }),

/***/ "./components/ViewDealDialogBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem__ = __webpack_require__("material-ui/Menu/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_ViewDealForm__ = __webpack_require__("./containers/ViewDealForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_deals_acceptDeal__ = __webpack_require__("./effects/deals/acceptDeal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__effects_deals_deleteDeal__ = __webpack_require__("./effects/deals/deleteDeal.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/ViewDealDialogBox/index.js";

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

var SubmitDealDialogBox = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
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
          } else if (res.userErrors.length) {
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
          viewingDealStatus = _props.viewingDealStatus;
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
          lineNumber: 258
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"], {
        id: "form-dialog-title",
        classes: {
          root: classes.formTitle
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, "View Deal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"], {
        classes: {
          root: classes.dialogContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
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
          lineNumber: 273
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
            lineNumber: 303
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
            lineNumber: 306
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      })), !this.state.formSubmitted ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"], {
        classes: {
          root: classes.dialogActions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
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
          lineNumber: 339
        }
      }, "Cancel"), this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["agent"] && viewingDealStatus === 'pending' || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["superAdmin"] || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["admin"] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        disabled: this.state.formSubmitted,
        onClick: this.handleCancelMenuClick,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, "Delete") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: cancelAnchorEl,
        open: Boolean(cancelAnchorEl),
        onClose: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
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
          lineNumber: 368
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleCancelMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, "No")), !isEditingDeal && this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["agent"] && viewingDealStatus === 'pending' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: function onClick() {
          return _this2.toggleEditingDeal(true);
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, "Edit") : null, (this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["admin"] || this.props.userRole === __WEBPACK_IMPORTED_MODULE_13__constants_userTypes__["superAdmin"]) && viewingDealStatus === 'pending' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
        className: classes.editDealBtn,
        disabled: this.state.formSubmitted,
        onClick: this.handleAcceptMenuClick,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, "Accept Deal") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: acceptAnchorEl,
        open: Boolean(acceptAnchorEl),
        onClose: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
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
          lineNumber: 415
        }
      }, "Yes"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu_MenuItem___default.a, {
        classes: {
          root: classes.menuItem
        },
        onClick: this.handleAcceptMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
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
          lineNumber: 432
        }
      }, "Submit") : null) : null);
    }
  }]);

  return SubmitDealDialogBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["withMobileDialog"])()(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles)(SubmitDealDialogBox)));

/***/ }),

/***/ "./components/dataTableFormatters/ViewFormatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/ViewFormatter.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    wrapper: {
      width: '90%',
      height: '90%',
      boxSizing: 'border-box',
      textAlign: 'center',
      color: '#00C853',
      cursor: 'pointer'
    }
  };
};

var VeiwFormatter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VeiwFormatter, _React$Component);

  function VeiwFormatter() {
    _classCallCheck(this, VeiwFormatter);

    return _possibleConstructorReturn(this, (VeiwFormatter.__proto__ || Object.getPrototypeOf(VeiwFormatter)).apply(this, arguments));
  }

  _createClass(VeiwFormatter, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var id;
      var route;

      var _onClick;

      var type;
      var noShow;
      var needsEvent;

      if (this.props && this.props.value) {
        id = this.props.value.id;
        route = this.props.value.route;
        _onClick = this.props.value.onClick;
        type = this.props.value.type;
        noShow = this.props.value.noShow;
        needsEvent = this.props.value.needsEvent;
      }

      if (noShow) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      });

      if (type === 'action' && _onClick) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
          title: "Click to view",
          enterDelay: 400,
          leaveDelay: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          id: "viewTableIcon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, {
          onClick: function onClick(event) {
            if (needsEvent) {
              _onClick(event);
            } else {
              _onClick();
            }

            if (event.stopPropagation) event.stopPropagation();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default.a, {
        title: "Click to view",
        enterDelay: 400,
        leaveDelay: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: route,
        params: {
          id: id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })))));
    }
  }]);

  return VeiwFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(VeiwFormatter));

/***/ }),

/***/ "./components/forms/CreateAgentForm/formValidation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return temporaryPasswordValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator__ = __webpack_require__("email-validator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_email_validator__);


var validator = function validator(values) {
  return {
    firstName: !values.firstName ? 'This value is required' : null,
    lastName: !values.lastName ? 'This value is required' : null,
    realEstateLicenseNumber: !values.realEstateLicenseNumber ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    branch: !values.branch ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    officeNumber: values.officeNumber && values.officeNumber.length < 14 ? 'If provided, this value must be a full tel number with area code' : null,
    mobileNumber: !values.mobileNumber || values.mobileNumber && values.mobileNumber.length < 14 ? 'This value is required and must be a full tel number with area code' : null,
    email: !values.email || !__WEBPACK_IMPORTED_MODULE_0_email_validator__["validate"](values.email) ? 'This value is required and must be a valid email' : null
  };
};

var temporaryPasswordValidator = function temporaryPasswordValidator(value) {
  return {
    error: !value || value.length < 8 ? 'This value is required and must be at least 8 characters long' : null
  };
};
/* harmony default export */ __webpack_exports__["a"] = (validator);

/***/ }),

/***/ "./components/forms/CreateAgentForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css__ = __webpack_require__("antd/lib/input/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_avatar_editor__ = __webpack_require__("react-avatar-editor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_circular_progressbar__ = __webpack_require__("react-circular-progressbar");
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
            ACHAccountBankRoutingNumber = agent.ACHAccountBankRoutingNumber,
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
          ACHAccountBankRoutingNumber: ACHAccountBankRoutingNumber,
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
          lineNumber: 291
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
          lineNumber: 292
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
            lineNumber: 309
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          container: true,
          spacing: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          }
        }, isAdmin && !isViewType && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.profileItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
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
            lineNumber: 325
          }
        }) : null, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.sliderWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
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
            lineNumber: 346
          }
        })) : null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.setImageWrapper,
          style: {
            display: !imageFile || !confirmedImageDataURL || loadingSetImg ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
          className: classes.setImage,
          src: confirmedImageDataURL,
          onLoad: setFinishedLoadingImg,
          alt: "profile pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
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
          accept: ".jpg, .jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          }
        }) : null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392
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
            lineNumber: 394
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
            lineNumber: 406
          }
        }, "Confirm File", ' ', loadingSetImg ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          type: "loading",
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          }
        }) : null) : null))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
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
            lineNumber: 429
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
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
            lineNumber: 443
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: isAdmin ? 6 : 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
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
            lineNumber: 456
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
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
            lineNumber: 472
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
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
            lineNumber: 487
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 503
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
            lineNumber: 504
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, {
          field: "title",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "Title",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521
          }
        }))), !isViewType && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534
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
            lineNumber: 535
          }
        }))), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
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
            lineNumber: 555
          }
        })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          }
        }, "Contact Information")), isAdmin && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
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
            lineNumber: 579
          }
        }, function (props) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(CustomTextField, _extends({
            field: "officeNumber",
            id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
            label: "Office Number",
            fullWidth: true,
            type: "tel",
            isInputMasked: true,
            requiresDefaultOnChange: true,
            mask: "(999) 999-9999 \\x999",
            disabledStyle: isViewType && !isEditingAgent
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 592
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
          md: 6,
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
          md: 6,
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
          field: "ACHAccountBankRoutingNumber",
          id: __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()(),
          label: "ACH Account's Bank Routing Number",
          fullWidth: true,
          disabled: isViewType && !isEditingAgent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 689
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 690
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
            lineNumber: 691
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 703
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 704
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
            lineNumber: 705
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718
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
            lineNumber: 719
          }
        }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 731
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 732
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
            lineNumber: 733
          }
        })))));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        }
      }, "Finishing submission...")) : null, uplodingImageProgress && !submittingFormToServer
      /*&& isUploadingImage */
      ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
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
          lineNumber: 765
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        }
      }, "Uploading profile picture...")) : null);
    }
  }]);

  return CreateAgentForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["withStyles"])(styles)(CreateAgentForm));

/***/ }),

/***/ "./components/forms/EditAgentPasswordForm/formValidation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validator = function validator(values) {
  return {
    password: !values.password || values.password.length < 8 ? 'This value is required and must be at least 8 characters long!' : null,
    passwordConfirmation: !values.passwordConfirmation || values.passwordConfirmation !== values.password ? 'This value is required and must match your new password!' : null
  };
};

/* harmony default export */ __webpack_exports__["a"] = (validator);

/***/ }),

/***/ "./components/forms/EditAgentPasswordForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__formValidation__ = __webpack_require__("./components/forms/EditAgentPasswordForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");



var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/EditAgentPasswordForm/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CustomTextField = __WEBPACK_IMPORTED_MODULE_10__MaterialCustomTextFieldWrapper__["a" /* default */];

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
    progressBarExplanation: {
      marginTop: '20px',
      fontSize: '1.1rem'
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

var CreateAgentForm = (_dec = __WEBPACK_IMPORTED_MODULE_7_react_sizes___default()(mapSizesToProps), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentForm, _Component);

  function CreateAgentForm() {
    _classCallCheck(this, CreateAgentForm);

    return _possibleConstructorReturn(this, (CreateAgentForm.__proto__ || Object.getPrototypeOf(CreateAgentForm)).apply(this, arguments));
  }

  _createClass(CreateAgentForm, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onSubmit = _props.onSubmit,
          submittingFormToServer = _props.submittingFormToServer;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_form__["Form"], {
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_9__formValidation__["a" /* default */],
        validateOnMount: true,
        getApi: this.props.getFormApi,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, function (formApi) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Grid___default.a, {
          container: true,
          spacing: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "password",
          id: __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()(),
          label: "New Password",
          fullWidth: true,
          required: true,
          type: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(CustomTextField, {
          field: "passwordConfirmation",
          id: __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()(),
          label: "New Password Confirmation",
          fullWidth: true,
          required: true,
          type: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        })))));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Finishing submission...")) : null);
    }
  }]);

  return CreateAgentForm;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["withStyles"])(styles)(CreateAgentForm));

/***/ }),

/***/ "./components/forms/EditProfilePicForm/formValidation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator__ = __webpack_require__("email-validator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_email_validator__);


var validator = function validator(values) {
  return {};
};

/* harmony default export */ __webpack_exports__["a"] = (validator);

/***/ }),

/***/ "./components/forms/EditProfilePicForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_avatar_editor__ = __webpack_require__("react-avatar-editor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_sizes__ = __webpack_require__("react-sizes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_circular_progressbar__ = __webpack_require__("react-circular-progressbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CustomSlider__ = __webpack_require__("./components/CustomSlider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__formValidation__ = __webpack_require__("./components/forms/EditProfilePicForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_constants__ = __webpack_require__("./utils/constants.js");



var _dec,
    _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/EditProfilePicForm/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var CustomTextField = __WEBPACK_IMPORTED_MODULE_16__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_17__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_18__MaterialCustomSelectInputWrapper__["a" /* default */];
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
      textAlign: 'center'
    },
    sliderWrapper: {
      width: '100%'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingLeft: '16px',
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
  label: '60%'
}, {
  label: '70%'
}, {
  label: '80%'
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
var stateSelectItems = __WEBPACK_IMPORTED_MODULE_19__utils_constants__["a" /* states */].map(function (state) {
  return {
    label: state
  };
});
var EditProfilePicForm = (_dec = __WEBPACK_IMPORTED_MODULE_8_react_sizes___default()(mapSizesToProps), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditProfilePicForm, _Component);

  function EditProfilePicForm() {
    _classCallCheck(this, EditProfilePicForm);

    return _possibleConstructorReturn(this, (EditProfilePicForm.__proto__ || Object.getPrototypeOf(EditProfilePicForm)).apply(this, arguments));
  }

  _createClass(EditProfilePicForm, [{
    key: "render",
    value: function render() {
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
          submittingFormToServer = _props.submittingFormToServer,
          onSubmit = _props.onSubmit;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, !formSubmitedSuccessfully && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_form__["Form"], {
        preValidate: this.preValidate,
        onSubmit: onSubmit,
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_14__formValidation__["a" /* default */],
        getApi: this.props.getFormApi,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, function (formApi) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Grid___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.profileItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_avatar_editor___default.a, {
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
            lineNumber: 252
          }
        }) : null, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.sliderWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CustomSlider__["a" /* default */], {
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
            lineNumber: 273
          }
        })) : null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: classes.setImageWrapper,
          style: {
            display: !imageFile || !confirmedImageDataURL || loadingSetImg ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          className: classes.setImage,
          src: confirmedImageDataURL,
          onLoad: setFinishedLoadingImg,
          alt: "profile pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          }
        }, !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__CustomFileUploadInputWrapper__["a" /* default */], {
          field: "profilePicture",
          id: __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()(),
          label: "Upload Agent's Profile Picture",
          btnClassName: classes.uploadBtnClassName,
          required: true,
          customOnChange: setImageFile,
          customState: imageFile,
          helperInfo: "Agent's Profile (JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          getInput: getFileUploadInput,
          accept: ".jpg, .jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          }
        }) : null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }, imageFile ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Button___default.a, {
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
            lineNumber: 321
          }
        }, "Clear File") : null, imageFile && !imageFileConfirmed || loadingSetImg ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Button___default.a, {
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
            lineNumber: 333
          }
        }, "Confirm File", ' ', loadingSetImg ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
          type: "loading",
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          }
        }) : null) : null))))));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, "Finishing submission...")) : null, uplodingImageProgress
      /*&& isUploadingImage */
      ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_circular_progressbar___default.a, {
        className: classes.progressBar,
        percentage: uplodingImageProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingImageProgress / 100, ")")
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, "Uploading profile picture...")) : null);
    }
  }]);

  return EditProfilePicForm;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__["withStyles"])(styles)(EditProfilePicForm));

/***/ }),

/***/ "./components/forms/SubmitDealForm/formValidation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return agencyDisclosureFormValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return paymentTypeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkOrTransactionNumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACHAccountNumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return paymentAmountValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deductionTypeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return descriptionValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deductionsAmountValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator__ = __webpack_require__("email-validator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_email_validator__);

var dollarAmountOnlyRegex = /^[0-9]+(\.[0-9][0-9])?$/;

var validator = function validator(values) {
  return {
    date: !values.date ? 'This value is required' : null,
    agent: !values.agent ? 'This value is required' : null,
    agentType: !values.agentType ? 'This value is required' : null,
    dealType: !values.dealType ? 'This value is required' : null,
    propertyAddress: !values.propertyAddress ? 'This value is required' : null,
    city: !values.city ? 'This value is required' : null,
    state: !values.state ? 'This value is required' : null,
    apartmentNumber: !values.apartmentNumber ? 'This value is required' : null,
    managementOrCobrokeCompany: !values.managementOrCobrokeCompany ? 'This value is required' : null,
    price: !values.price || !dollarAmountOnlyRegex.test(values.price) ? 'This value is required and must be a dollar amount' : null,
    clientName: !values.clientName || values.clientName.length < 3 || values.clientName.length > 80 ? 'Between 3 and 80 characters' : null,
    clientEmail: !values.clientEmail || !__WEBPACK_IMPORTED_MODULE_0_email_validator__["validate"](values.clientEmail) || values.clientEmail.length > 60 ? 'Please provide a valid email address that is less than 60 characters' : null,
    agentPaymentType: !values.agentPaymentType ? 'This value is required' : null,
    fundsPaidBy: !values.fundsPaidBy ? 'This value is required' : null,
    alreadyTurnedFundsIn: !values.alreadyTurnedFundsIn ? 'This value is required' : null,
    shouldSendApprovalTextMessageNotification: !values.shouldSendApprovalTextMessageNotification ? 'This value is required' : null,
    financialsTotal: !values.financialsTotal || parseFloat(values.financialsTotal.split(',').join('')) <= 0 ? 'The total amount for this deal must be greater than 0' : null
  };
};

var agencyDisclosureFormValidator = function agencyDisclosureFormValidator(value) {
  return {
    error: !value ? 'This value is required and must be either JPEG/JPG or PDF format' : null
  };
};
var paymentTypeValidator = function paymentTypeValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var checkOrTransactionNumberValidator = function checkOrTransactionNumberValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var ACHAccountNumberValidator = function ACHAccountNumberValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var paymentAmountValidator = function paymentAmountValidator(value) {
  return {
    error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null
  };
};
var deductionTypeValidator = function deductionTypeValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var descriptionValidator = function descriptionValidator(value) {
  return {
    error: !value ? 'This value is required' : null
  };
};
var deductionsAmountValidator = function deductionsAmountValidator(value) {
  return {
    error: !value || !dollarAmountOnlyRegex.test(value) ? 'This value is required and must be a dollar amount' : null
  };
};
/* harmony default export */ __webpack_exports__["f"] = (validator);

/***/ }),

/***/ "./components/forms/SubmitDealForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form__ = __webpack_require__("react-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4__ = __webpack_require__("uuid/v4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__ = __webpack_require__("material-ui/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__ = __webpack_require__("material-ui/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete__ = __webpack_require__("@material-ui/icons/Delete");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar__ = __webpack_require__("react-circular-progressbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md__ = __webpack_require__("react-icons/lib/md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react_images__ = __webpack_require__("react-images");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_react_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye__ = __webpack_require__("@material-ui/icons/RemoveRedEye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Menu__ = __webpack_require__("material-ui/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem__ = __webpack_require__("material-ui/Menu/MenuItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_material_ui_Input__ = __webpack_require__("material-ui/Input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_material_ui_Form__ = __webpack_require__("material-ui/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__formValidation__ = __webpack_require__("./components/forms/SubmitDealForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__utils_Math__ = __webpack_require__("./utils/Math.js");




var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/forms/SubmitDealForm/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































var CustomTextField = __WEBPACK_IMPORTED_MODULE_26__MaterialCustomTextFieldWrapper__["a" /* default */];
var MaterialCustomRadioInput = __WEBPACK_IMPORTED_MODULE_27__MaterialCustomRadioInputWrapper__["a" /* default */];
var MaterialCustomSelectInput = __WEBPACK_IMPORTED_MODULE_28__MaterialCustomSelectInputWrapper__["a" /* default */];
var CustomFileUploadInputBtn = __WEBPACK_IMPORTED_MODULE_29__CustomFileUploadInputWrapper__["a" /* default */];
var acceptedFileExtensions = ['jpg', 'jpeg', 'pdf'];

var styles = function styles(theme) {
  var _smallFileViewBtn;

  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: theme.spacing.unit * 3,
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: theme.shadows[3]
    },
    formControlWrapper: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    formControl: {
      marginLeft: 0,
      marginRight: 0
    },
    alignCenter: {
      textAlign: 'center'
    },
    formHeader: {
      marginBottom: theme.spacing.unit * 3
    },
    formWrapper: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      textAlign: 'center'
    },
    formRoot: {
      paddingBottom: 10,
      flexGrow: 1,
      justifyContent: 'center',
      overflow: 'hidden'
    },
    radioInputWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    formSubheading: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '82px'
    },
    h3: {
      fontWeight: theme.typography.fontWeightMedium
    },
    addPaymentBtn: {
      marginTop: '10px'
    },
    removePaymentBtn: {
      marginTop: '5px',
      marginLeft: '28px'
    },
    paymentItemsWrapper: {
      display: 'flex',
      width: '100%',
      padding: '5px 0 12px 0',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      '& > div': {
        paddingLeft: '12px',
        paddingRight: '12px'
      }
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
    topPaymentMethodWrapper: {
      paddingTop: '0'
    },
    paddingBottom10: {
      paddingBottom: '15px'
    },
    greenText: {
      color: '#448A19'
    },
    redText: {
      color: '#ED462F'
    },
    blueText: {
      color: '#3878D8'
    },
    financialsTotal: {
      backgroundColor: 'rgba(0,0,0,.12)'
    },
    uploadBtnClassName: {
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
      },
      addUploadBtnClassName: {}
    },
    fileUploadBtnWrapper2: {
      position: 'relative',
      display: 'inline-block'
    },
    fileUploadBtnWrapper: {
      position: 'relative',
      display: 'inline-block'
    },
    smallFileAddBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      backgroundColor: '#2995F3',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#2483D6'
      }
    },
    smallFileRemoveBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      position: 'absolute',
      top: '5px',
      marginLeft: '6px'
    },
    smallFileViewBtn: (_smallFileViewBtn = {
      width: '35px',
      height: '35px',
      minWidth: '35px',
      minHeight: '35px',
      position: 'absolute',
      backgroundColor: '#008000',
      top: '8px',
      marginLeft: '6px',
      color: '#fff',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: '#067706'
      }
    }, _defineProperty(_smallFileViewBtn, theme.breakpoints.down('xs'), {
      position: 'relative',
      marginTop: '-18px'
    }), _defineProperty(_smallFileViewBtn, '@media only screen and (max-width: 400px)', {
      position: 'relative',
      marginTop: '0 !important'
    }), _smallFileViewBtn),
    uploadContractDivWrapper: {
      position: 'relative'
    },
    blueBackgroundColor: {
      backgroundColor: '#2995F3'
    },
    finalTotalLabelClass: {
      paddingLeft: '10px'
    },
    finalTotalInputClass: {
      backgroundColor: 'rgba(0,0,0,.12)',
      borderRadius: '5px 5px 0 0',
      paddingLeft: '10px'
    },
    ManagementOrCobrokeCompanyTextField: {
      width: '100%',
      margin: 8,
      marginLeft: 0
    },
    progressBarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    formSubmittingWrapper: {
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
    gridContainer: {
      marginBottom: 0
    },
    viewIcon: {
      fontSize: '1.2rem'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    fullwidthInput: {
      width: '100%'
    },
    downloadFileBtn: {
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: '26px',
      width: '26px',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1rem',
      color: '#fff !important',
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
var radioInputAgentPaymentItems = [{
  label: "I'll pick up the check"
}, {
  label: 'Please ACH me'
}];
var radioInputYesNoItems = [{
  label: 'Yes'
}, {
  label: 'No'
}];
var dealTypeSelectItems = [{
  label: 'Residential Rental'
}, {
  label: 'Residential Sale'
}, {
  label: 'Commercial Rental'
}, {
  label: 'Commercial Sale'
}];
var fundsPaidBySelectItems = [{
  label: 'Bringing a certified check to the office'
}, {
  label: 'Remote deposit to Chase account'
}, {
  label: 'Check or "OP" mailed to office'
}, {
  label: 'Credit card payment'
}, {
  label: 'Client wired funds'
}];
var paymentTypeSelectItems = [{
  label: 'Certified Check'
}, {
  label: 'Money Order'
}, {
  label: 'Wire'
}, {
  label: 'Owner Pays (OP)'
}];
var deductionTypeSelectItems = [{
  label: 'Deal Fee'
}, {
  label: 'Dues'
}, {
  label: '3rd Party Check'
}, {
  label: 'Processing Fee'
}, {
  label: 'Payment'
}, {
  label: 'Agent Split'
}];

var imagePreloader = function imagePreloader(images) {
  images.forEach(function (imageItem) {
    if (imageItem && imageItem.src) {
      var fileType = imageItem.src.split('.').pop();
      if (fileType.toLowerCase === 'pdf') return;
      var newImage = new Image();
      newImage.src = imageItem.src;
    }
  });
};

var SubmitDealForm = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealForm, _Component);

  function SubmitDealForm(props) {
    var _this;

    _classCallCheck(this, SubmitDealForm);

    _this = _possibleConstructorReturn(this, (SubmitDealForm.__proto__ || Object.getPrototypeOf(SubmitDealForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "isFirstTimeRender", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnAgencyDisclosureURL", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.agencyDisclosureForm) {
          return [{
            src: _this.props.submittedDeal.agencyDisclosureForm
          }];
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnContractLeaseURLS", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.props.submittedDeal) return [];

        if (_this.props.submittedDeal.contractOrLeaseForms) {
          return _this.props.submittedDeal.contractOrLeaseForms.map(function (url) {
            return {
              src: url
            };
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openFileLightBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        _this.setState({
          lightboxIsOpen: true,
          currentLightBoxIndex: 0,
          lightboxType: 'contractLease',
          currentLightboxItem: [item]
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openPDFViewerModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(src) {
        _this.setState({
          pdfDialogOpen: true,
          currentlyViewingPDF: src,
          pdfPageNumber: 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closePDFViewerModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(src) {
        _this.setState({
          pdfDialogOpen: false,
          currentlyViewingPDF: null,
          numPDFPages: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openFileViewer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(src, fileName, fileType) {
        if (fileType === 'pdf' && fileType === 'PDF') {
          openPDFViewerModal(src);
          return;
        }

        _this.openFileLightBox({
          src: src
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          lightboxIsOpen: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickPrev", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex - 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickNext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentLightBoxIndex = _this.state.currentLightBoxIndex;

        _this.setState({
          currentLightBoxIndex: currentLightBoxIndex + 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClickThumbnail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        _this.setState({
          currentLightBoxIndex: index
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "downloadFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee() {
          var urls, fileType, objectURL, res;
          return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  urls = _this.state.lightboxType === 'agencyDisclosure' ? _this.returnAgencyDisclosureURL() : _this.returnContractLeaseURLS();
                  fileType = urls[_this.state.currentLightBoxIndex].src.split('.').pop();
                  _context.prev = 2;
                  _context.next = 5;
                  return fetch("".concat(urls[_this.state.currentLightBoxIndex].src, "?v=10"));

                case 5:
                  res = _context.sent;
                  console.log(res);
                  _context.t0 = URL;
                  _context.next = 10;
                  return res.blob();

                case 10:
                  _context.t1 = _context.sent;
                  objectURL = _context.t0.createObjectURL.call(_context.t0, _context.t1);
                  _context.next = 18;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t2 = _context["catch"](2);
                  console.log(_context.t2);
                  return _context.abrupt("return");

                case 18:
                  if (_this._fileLink) {
                    _this._fileLink.setAttribute('href', objectURL);

                    _this._fileLink.setAttribute('download', "".concat(_this.state.lightboxType).concat(_this.state.currentLightBoxIndex + 1));

                    _this._fileLink.click();
                  }

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 14]]);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "returnDownloadFileBtn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var classes = _this.props.classes;
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip___default.a, {
          title: "Download current file.",
          enterDelay: 300,
          leaveDelay: 100,
          PopperProps: {
            style: {
              zIndex: 2100
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 545
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", {
          className: classes.downloadFileBtn,
          onClick: _this.downloadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 551
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md__["MdFileDownload"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          }
        })));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleContractLeaseMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          contractLeaseAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleContractLeaseMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          contractLeaseAnchorEl: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAgencyDisclosureMenuClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          agencyDisclosureAnchorEl: event.currentTarget
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleAgencyDisclosureMenuClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          agencyDisclosureAnchorEl: null
        });
      }
    });
    _this.state = {
      shouldRenderInitialDeductionItem: true,
      lightboxIsOpen: false,
      currentLightBoxIndex: 0,
      lightboxType: 'agencyDisclosure',
      contractLeaseAnchorEl: null,
      agencyDisclosureAnchorEl: null,
      currentLightboxItem: [{
        src: ''
      }],
      numPDFPages: null,
      pdfPageNumber: 1,
      pdfDialogOpen: false,
      currentlyViewingPDF: null
    };
    return _this;
  }

  _createClass(SubmitDealForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.setInitialContainerState && this.props.submittedDeal) {
        this.props.setInitialContainerState({
          paymentsTotal: this.props.submittedDeal.paymentsTotal,
          deductionsTotal: this.props.submittedDeal.deductionsTotal,
          total: this.props.submittedDeal.total
        });
        imagePreloader(_toConsumableArray(this.returnContractLeaseURLS()).concat(_toConsumableArray(this.returnAgencyDisclosureURL())));
      }

      if (this.props.resetDealBonus) {
        this.props.resetDealBonus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          setAgencyDisclosureForm = _props.setAgencyDisclosureForm,
          setContractOrLeaseForms = _props.setContractOrLeaseForms,
          agencyDisclosureForm = _props.agencyDisclosureForm,
          contractOrLeaseForms = _props.contractOrLeaseForms,
          subtractPaymentValueFromState = _props.subtractPaymentValueFromState,
          subtractDeductionValueFromState = _props.subtractDeductionValueFromState,
          choosingMgmtCoBrokeCompany = _props.choosingMgmtCoBrokeCompany,
          toggleChoosingMgmtCoBrokeCompany = _props.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange = _props.handleMgmtOrCobrokeCompanyChange,
          setHasSetNewMgmtOrCobrokeCompany = _props.setHasSetNewMgmtOrCobrokeCompany,
          newMgmtOrCobrokeCompany = _props.newMgmtOrCobrokeCompany,
          addedManagementCompanies = _props.addedManagementCompanies,
          agents = _props.agents,
          uplodingFileProgress = _props.uplodingFileProgress,
          isUploadingFile = _props.isUploadingFile,
          uplodingFileText = _props.uplodingFileText,
          formSubmissionBegun = _props.formSubmissionBegun,
          submittingFormToServer = _props.submittingFormToServer,
          submittedDeal = _props.submittedDeal,
          isEditingDeal = _props.isEditingDeal,
          isViewType = _props.isViewType,
          agentUUID = _props.agentUUID,
          managementCobrokeCompanyItems = _props.managementCobrokeCompanyItems,
          agentPaymentTypeIsACH = _props.agentPaymentTypeIsACH,
          _onSubmit = _props.onSubmit;
      var _state = this.state,
          contractLeaseAnchorEl = _state.contractLeaseAnchorEl,
          agencyDisclosureAnchorEl = _state.agencyDisclosureAnchorEl;
      var managementCobrokeCompanies = managementCobrokeCompanyItems && managementCobrokeCompanyItems.length ? _toConsumableArray(managementCobrokeCompanyItems) : [];

      if (submittedDeal && submittedDeal.managementOrCobrokeCompany) {
        if (!managementCobrokeCompanies.includes(submittedDeal.managementOrCobrokeCompany)) {
          managementCobrokeCompanies.push(submittedDeal.managementOrCobrokeCompany);
        }
      }

      var agentsSelectItems = agents.filter(function (agent) {
        return agentUUID ? agent.uuid !== agentUUID : agent;
      }).map(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName,
            uuid = _ref.uuid;
        return {
          label: "".concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(lastName), " (Agent ID - ").concat(uuid, ")"),
          key: uuid,
          value: uuid
        };
      });

      if (isViewType && submittedDeal && submittedDeal.otherAgents.length) {
        var nonAvailableAgentUUIDS = [];
        var agentUUIDS = agents.map(function (agent) {
          return agent.uuid;
        });
        submittedDeal.otherAgents.forEach(function (agent) {
          if (!agentUUIDS.includes(agent.agentID)) {
            agentsSelectItems.push({
              label: "".concat(agent.agentName, " (Agent ID - ").concat(agent.agentID, ")"),
              key: agent.agentID,
              value: agent.agentID
            });
          }
        });
      }

      var managementCobrokeCompanySelectItems = managementCobrokeCompanies.map(function (company) {
        return {
          label: company
        };
      });
      managementCobrokeCompanySelectItems = managementCobrokeCompanySelectItems ? _toConsumableArray(managementCobrokeCompanySelectItems).concat(_toConsumableArray(addedManagementCompanies.map(function (company) {
        return {
          label: company
        };
      })), [{
        label: 'Add a new item...'
      }]) : [];
      /*
        const {
          firstName,
          lastName,
          uuid: agentUUID,
          agent: agentPart,
        } = this.props.agent;
        const { agentType, state } = agentPart;
        */

      var finalDefaultValues;

      if (submittedDeal) {
        var agentNotes = submittedDeal.agentNotes,
            agentType = submittedDeal.agentType,
            agentName = submittedDeal.agentName,
            alreadyTurnedFundsIn = submittedDeal.alreadyTurnedFundsIn,
            city = submittedDeal.city,
            clientEmail = submittedDeal.clientEmail,
            clientName = submittedDeal.clientName,
            date = submittedDeal.date,
            dealType = submittedDeal.dealType,
            otherAgents = submittedDeal.otherAgents,
            leadSource = submittedDeal.leadSource,
            managementOrCobrokeCompany = submittedDeal.managementOrCobrokeCompany,
            propertyAddress = submittedDeal.propertyAddress,
            shouldSendApprovalTextMessageNotification = submittedDeal.shouldSendApprovalTextMessageNotification,
            state = submittedDeal.state,
            fundsPaidBy = submittedDeal.fundsPaidBy,
            agentPaymentType = submittedDeal.agentPaymentType,
            price = submittedDeal.price,
            paymentsTotal = submittedDeal.paymentsTotal,
            deductionsTotal = submittedDeal.deductionsTotal,
            paymentItems = submittedDeal.paymentItems,
            deductionItems = submittedDeal.deductionItems,
            apartmentNumber = submittedDeal.apartmentNumber,
            total = submittedDeal.total,
            bonusPercentageAddedByAdmin = submittedDeal.bonusPercentageAddedByAdmin,
            ACHAccountNumber = submittedDeal.ACHAccountNumber,
            ACHAccountBankRoutingNumber = submittedDeal.ACHAccountBankRoutingNumber;
        finalDefaultValues = {
          agent: agentName,
          agentNotes: agentNotes,
          agentType: agentType,
          otherAgents: otherAgents.map(function (agent) {
            return agent.agentID;
          }),
          alreadyTurnedFundsIn: alreadyTurnedFundsIn,
          city: city,
          apartmentNumber: apartmentNumber,
          clientEmail: clientEmail,
          clientName: clientName,
          date: __WEBPACK_IMPORTED_MODULE_10_moment___default()(date).format('MMMM Do YYYY'),
          dealType: dealType,
          leadSource: leadSource,
          agentPaymentType: agentPaymentType,
          managementOrCobrokeCompany: managementOrCobrokeCompany,
          propertyAddress: propertyAddress,
          shouldSendApprovalTextMessageNotification: shouldSendApprovalTextMessageNotification,
          state: state,
          fundsPaidBy: fundsPaidBy,
          price: price,
          paymentItems: paymentItems.map(function (_ref2) {
            var paymentType = _ref2.paymentType,
                checkOrTransactionNumber = _ref2.checkOrTransactionNumber,
                amount = _ref2.amount;
            return {
              paymentType: paymentType,
              checkOrTransactionNumber: checkOrTransactionNumber,
              amount: amount
            };
          }),
          deductionItems: deductionItems.map(function (_ref3) {
            var deductionType = _ref3.deductionType,
                description = _ref3.description,
                amount = _ref3.amount;
            return {
              deductionType: deductionType,
              description: description,
              amount: amount
            };
          }),
          paymentsSubtotal: paymentsTotal ? paymentsTotal.toLocaleString() : '0',
          deductionsSubtotal: deductionsTotal ? deductionsTotal.toLocaleString() : '0',
          financialsTotal: total ? total.toLocaleString() : '0',
          ACHAccountNumber: ACHAccountNumber,
          ACHAccountBankRoutingNumber: ACHAccountBankRoutingNumber,
          bonusPercentageAddedByAdmin: "".concat(bonusPercentageAddedByAdmin)
        };
      }

      var renderContractLeaseMenuItems = function renderContractLeaseMenuItems() {
        return _this2.returnContractLeaseURLS().map(function (_ref4) {
          var src = _ref4.src;
          var fileName = src.split('/').pop();
          var fileType = src.split('.').pop();

          if (fileType.toLowerCase() === 'pdf') {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
              href: src,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 754
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default.a, {
              classes: {
                root: classes.menuItem
              },
              onClick: function onClick() {
                _this2.handleContractLeaseMenuClose();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 755
              }
            }, fileName));
          }

          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default.a, {
            classes: {
              root: classes.menuItem
            },
            onClick: function onClick() {
              _this2.handleContractLeaseMenuClose();

              _this2.openFileViewer(src, fileName, fileType);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 768
            }
          }, fileName);
        });
      };

      renderAgencyDisclosureMenuItems;

      var renderAgencyDisclosureMenuItems = function renderAgencyDisclosureMenuItems() {
        return _this2.returnAgencyDisclosureURL().map(function (_ref5) {
          var src = _ref5.src;
          var fileName = src.split('/').pop();
          var fileType = src.split('.').pop();

          if (fileType.toLowerCase() === 'pdf') {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default.a, {
              classes: {
                root: classes.menuItem
              },
              onClick: function onClick() {
                _this2.handleAgencyDisclosureMenuClose();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 789
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
              href: src,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 795
              }
            }, fileName));
          }

          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default.a, {
            classes: {
              root: classes.menuItem
            },
            onClick: function onClick() {
              _this2.handleAgencyDisclosureMenuClose();

              _this2.openFileViewer(src, fileName, fileType);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 803
            }
          }, fileName);
        });
      };

      var onClickAgencyDisclosureView = function onClickAgencyDisclosureView() {
        var src = _this2.returnAgencyDisclosureURL()[0].src;

        var fileName = src.split('/').pop();
        var fileType = src.split('.').pop();

        _this2.openFileViewer(src, fileName, fileType);
      };

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.formWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "#",
        id: "fileLink",
        ref: function ref(_ref6) {
          return _this2._fileLink = _ref6;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Menu___default.a, {
        id: "simple-menu",
        anchorEl: contractLeaseAnchorEl,
        open: Boolean(contractLeaseAnchorEl),
        onClose: this.handleContractLeaseMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        }
      }, "Contract/Lease Items"), renderContractLeaseMenuItems()), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_material_ui_Menu___default.a, {
        id: "simple-menu2",
        anchorEl: agencyDisclosureAnchorEl,
        open: Boolean(agencyDisclosureAnchorEl),
        onClose: this.handleAgencyDisclosureMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 848
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.popupMenuTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        }
      }, "Agency Disclosure Form"), renderAgencyDisclosureMenuItems()), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["Form"], {
        defaultValues: !finalDefaultValues && this.props.agent ? {
          date: "".concat(__WEBPACK_IMPORTED_MODULE_10_moment___default()().format('MMMM Do YYYY')),
          agentType: "".concat(this.props.agent.agent.agentType),
          state: this.props.agent.agent.state,
          agent: "".concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(this.props.agent.firstName), " ").concat(Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(this.props.agent.lastName)),
          paymentsSubtotal: this.props.paymentsTotal,
          deductionsSubtotal: this.props.deductionsTotal,
          ACHAccountNumber: this.props.agent.agent.ACHAccountNumber ? "".concat(this.props.agent.agent.ACHAccountNumber) : undefined,
          ACHAccountBankRoutingNumber: this.props.agent.agent.ACHAccountBankRoutingNumber ? "".concat(this.props.agent.agent.ACHAccountBankRoutingNumber) : undefined
        } : finalDefaultValues,
        preValidate: this.preValidate,
        validateOnMount: true,
        onSubmit: function onSubmit(values) {
          if (_onSubmit) {
            _onSubmit(values);
          }
        },
        onSubmitFailure: this.props.onSubmitFailure,
        validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["f" /* default */],
        getApi: function getApi(formApi) {
          _this2.props.getFormApi(formApi);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        }
      }, function (formApi) {
        var _React$createElement, _React$createElement2;

        /*
          console.log(formApi.errors);
          console.log(formApi.values);
          console.log(formApi.values.deductionItems);
          
          if (this.isFirstTimeRender) {
            this.isFirstTimeRender = false;
            formApi.setValue('date', `${moment().format('MMMM Do YYYY')}`);
            formApi.setValue('agentType', `${agentType}`);
            formApi.setValue('state', state);
            formApi.setValue(
              'agent',
              `${capitalize(firstName)} ${capitalize(lastName)}`
            );
            formApi.setValue('paymentsSubtotal', this.props.paymentsTotal);
            formApi.setValue(
              'deductionsSubtotal',
              this.props.deductionsTotal
            );
          }
          */
        var renderRestDeductionItems = function renderRestDeductionItems() {
          if (!formApi.values.deductionItems || !formApi.values.deductionItems.length) return;
          var deductionItems = formApi.values.deductionItems.map(function (deductionItem, i) {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
              className: classes.paymentItemsWrapper,
              key: i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 924
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
              field: ['deductionItems', i],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 925
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 926
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 927
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
              field: "deductionType",
              id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
              fullWidth: true,
              label: "Deduction Type",
              name: "deductionType",
              required: true,
              selectInputItems: deductionTypeSelectItems,
              validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["d" /* deductionTypeValidator */],
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 928
              }
            }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 942
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 943
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
              field: "description",
              id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
              label: "Description",
              fullWidth: true,
              required: true,
              validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["g" /* descriptionValidator */],
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 944
              }
            }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
              item: true,
              sm: 4,
              xs: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 956
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
              className: classes.formControlWrapper,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 957
              }
            }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
              field: "amount",
              id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
              label: "Amount",
              fullWidth: true,
              validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["e" /* deductionsAmountValidator */],
              noLetters: true,
              required: true,
              noNegativeSign: true,
              onChangeWithID: _this2.props.deductionAmountChangeHandler,
              isDollarAmount: true,
              disabled: submittedDeal && !isEditingDeal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 958
              }
            })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
              classes: {
                root: classes.removePaymentBtn
              },
              variant: "raised",
              color: "secondary",
              onClick: function onClick() {
                var amount = Number(formApi.values.deductionItems[i].amount);

                if (amount) {
                  subtractDeductionValueFromState(amount);
                }

                formApi.removeValue('deductionItems', i);
              },
              type: "button",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 976
              }
            }, "Remove"));
          });

          if (_this2.state.shouldRenderInitialDeductionItem) {
            return deductionItems.slice(1);
          }

          return deductionItems;
        };

        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("form", {
          onSubmit: formApi.submitForm,
          id: "form1",
          className: classes.formRoot,
          style: {
            display: formSubmissionBegun || submittingFormToServer ? 'none' : undefined
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1004
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1015
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1016
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1017
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "date",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Date",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1018
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1028
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1029
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "agent",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Agent",
          disabled: true,
          fullWidth: true,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1030
          }
        }))), agentsSelectItems.length ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1042
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1043
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, (_React$createElement = {
          field: "otherAgents",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Co-Brokering Agents",
          name: "otherAgents",
          multiple: true,
          disabled: submittedDeal && !isEditingDeal,
          selectInputItems: agentsSelectItems
        }, _defineProperty(_React$createElement, "disabled", isViewType), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 1044
        }), _React$createElement)))) : null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1059
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Agent Type",
          radioInputItems: radioInputAgentItems,
          disabled: true,
          horizontal: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1064
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1075
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1076
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "leadSource",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Lead Source",
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1077
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1087
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1088
          }
        }, "Property Information")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1096
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1097
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, (_React$createElement2 = {
          field: "dealType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          label: "Deal Type",
          name: "dealType",
          selectInputItems: dealTypeSelectItems
        }, _defineProperty(_React$createElement2, "disabled", submittedDeal && !isEditingDeal), _defineProperty(_React$createElement2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 1098
        }), _React$createElement2)))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1112
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1113
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "propertyAddress",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Property Address",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1114
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1124
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1125
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "state",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "State",
          required: true,
          fullWidth: true,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1126
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1136
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1137
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "city",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "City",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1138
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1148
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1149
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "apartmentNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Apartment Number",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1150
          }
        }))), !choosingMgmtCoBrokeCompany ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1162
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1163
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "managementOrCobrokeCompany",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Management/Co-Broke Company",
          name: "managementOrCobrokeCompany",
          onChange: function onChange(value) {
            if (value === 'Add a new item...') {
              toggleChoosingMgmtCoBrokeCompany(true);
            }
          },
          selectInputItems: managementCobrokeCompanySelectItems,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1164
          }
        }))) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1182
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1183
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_TextField___default.a, {
          id: "newManagementOrCobrokeCompany",
          label: "Add Mgmt/Co-broke Company...",
          value: newMgmtOrCobrokeCompany,
          className: classes.ManagementOrCobrokeCompanyTextField,
          onChange: handleMgmtOrCobrokeCompanyChange,
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1184
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          style: {
            marginLeft: '0'
          },
          onClick: function onClick() {
            toggleChoosingMgmtCoBrokeCompany(false);
            formApi.setValue('managementOrCobrokeCompany', '');
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1195
          }
        }, "Cancel"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          style: {
            marginLeft: '10px',
            marginTop: '5px'
          },
          onClick: function onClick() {
            var trimmedItem = newMgmtOrCobrokeCompany.trim();
            if (!newMgmtOrCobrokeCompany || !trimmedItem) return;

            var items = _toConsumableArray(managementCobrokeCompanyItems).concat(_toConsumableArray(addedManagementCompanies));

            var regex = new RegExp(trimmedItem, 'i');
            var match = items.filter(function (item) {
              return item.match(regex);
            });

            if (match.length) {
              toggleChoosingMgmtCoBrokeCompany(false);
              formApi.setValue('managementOrCobrokeCompany', match[0]);
              return;
            }

            setHasSetNewMgmtOrCobrokeCompany();
            formApi.setValue('managementOrCobrokeCompany', Object(__WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany));
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1208
          }
        }, "Add Item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1248
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1249
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "price",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Rent or Sale Price",
          required: true,
          fullWidth: true,
          noLetters: true,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1250
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formSubheading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1263
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1264
          }
        }, "Client's", " Information")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1272
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1273
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "clientName",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Client's Name",
          required: true,
          fullWidth: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1274
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 6,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1284
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1285
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "clientEmail",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Client Email",
          required: true,
          fullWidth: true,
          type: "email",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1286
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formSubheading, " ").concat(classes.paddingBottom10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1298
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1303
          }
        }, "Transaction Financials")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1311
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.greenText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1312
          }
        }, "Paid:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
          field: ['paymentItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1323
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1324
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1325
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "paymentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Payment Type",
          name: "paymentType",
          selectInputItems: paymentTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["i" /* paymentTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1326
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1340
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1341
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "checkOrTransactionNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Check/Transaction#",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["c" /* checkOrTransactionNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1342
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1354
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1355
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Amount",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["h" /* paymentAmountValidator */],
          noLetters: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.paymentAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1356
          }
        })))), formApi.values.paymentItems && formApi.values.paymentItems.map(function (paymentItems, i) {
          return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.paymentItemsWrapper,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1376
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
            field: ['paymentItems', i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1377
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1378
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1379
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
            field: "paymentType",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            required: true,
            fullWidth: true,
            label: "Payment Type",
            name: "paymentType",
            selectInputItems: paymentTypeSelectItems,
            validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["i" /* paymentTypeValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1380
            }
          }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1394
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1395
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
            field: "checkOrTransactionNumber",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            label: "Check/Transaction#",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["c" /* checkOrTransactionNumberValidator */],
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1396
            }
          }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1408
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
            className: classes.formControlWrapper,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1409
            }
          }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
            field: "amount",
            id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
            label: "Amount",
            required: true,
            fullWidth: true,
            validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["h" /* paymentAmountValidator */],
            noLetters: true,
            noNegativeSign: true,
            onChangeWithID: _this2.props.paymentAmountChangeHandler,
            isDollarAmount: true,
            disabled: submittedDeal && !isEditingDeal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1410
            }
          })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
            classes: {
              root: classes.removePaymentBtn
            },
            variant: "raised",
            color: "secondary",
            onClick: function onClick() {
              var amount = Number(formApi.values.paymentItems[i].amount);

              if (amount) {
                subtractPaymentValueFromState(amount);
              }

              formApi.removeValue('paymentItems', i);
            },
            type: "button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1429
            }
          }, "Remove"));
        }).slice(1), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1452
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('paymentItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1453
          }
        }, "Add payment item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1465
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1466
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "paymentsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Payments Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: _this2.props.paymentsTotal,
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1467
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1481
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4,
            root: classes.redText
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1482
          }
        }, "Deductions:")), _this2.state.shouldRenderInitialDeductionItem ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.paymentItemsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1494
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_form__["NestedField"], {
          field: ['deductionItems', 0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1495
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1496
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1497
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "deductionType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          fullWidth: true,
          label: "Deduction Type",
          name: "deductionType",
          required: true,
          selectInputItems: deductionTypeSelectItems,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["d" /* deductionTypeValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1498
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1512
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1513
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "description",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Description",
          fullWidth: true,
          required: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["g" /* descriptionValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1514
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1526
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1527
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "amount",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Amount",
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["e" /* deductionsAmountValidator */],
          noLetters: true,
          required: true,
          noNegativeSign: true,
          onChangeWithID: _this2.props.deductionAmountChangeHandler,
          isDollarAmount: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1528
          }
        })))), submittedDeal && !isEditingDeal ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.removePaymentBtn
          },
          variant: "raised",
          color: "secondary",
          onClick: function onClick() {
            _this2.setState({
              shouldRenderInitialDeductionItem: false
            });

            var amount = Number(formApi.values.deductionItems[0].amount);

            if (amount) {
              subtractDeductionValueFromState(amount);
            }

            formApi.removeValue('deductionItems', 0);
          },
          type: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1547
          }
        }, "Remove")) : null, renderRestDeductionItems(), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1573
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          classes: {
            root: classes.addPaymentBtn
          },
          variant: "raised",
          color: "primary",
          onClick: function onClick() {
            return formApi.addValue('deductionItems');
          },
          type: "button",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1574
          }
        }, "Add deduction item")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1586
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1587
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "deductionsSubtotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Deductions Subtotal",
          disabled: true,
          fullWidth: true,
          submittedValue: "".concat(_this2.props.deductionsTotal),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1588
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1602
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1603
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "financialsTotal",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Final Total",
          disabled: true,
          fullWidth: true,
          labelClassName: classes.finalTotalLabelClass,
          submittedValue: "".concat(_this2.props.total),
          formApi: formApi,
          convertToLocaleString: true,
          isDollarAmount: true,
          inputRootClassName: classes.finalTotalInputClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1604
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1620
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1621
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "agentNotes",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "Listing agent/performance bonus info",
          fullWidth: true,
          multiline: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1622
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1633
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1634
          }
        }, "File Uploads:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1642
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1643
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1646
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1647
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomFileUploadInputBtn, {
          field: "agencyDisclosureForm",
          id: "agencyDisclosureUploadForm",
          label: "Upload Agency Disclosure Form*",
          btnClassName: classes.uploadBtnClassName,
          customOnChange: setAgencyDisclosureForm,
          customState: agencyDisclosureForm,
          helperInfo: "Agency Disclosure Form* (PDF or JPEG/JPG file)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal,
          required: isViewType ? undefined : true,
          submits: formApi.submits,
          formError: formApi.errors ? formApi.errors.agencyDisclosureForm : undefined,
          validate: isViewType ? undefined : __WEBPACK_IMPORTED_MODULE_33__formValidation__["b" /* agencyDisclosureFormValidator */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1648
          }
        }), submittedDeal && submittedDeal.agencyDisclosureForm && !agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.handleAgencyDisclosureMenuClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1673
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1681
          }
        })) : null, isEditingDeal && agencyDisclosureForm ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setAgencyDisclosureForm('');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1685
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1695
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1701
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.fileUploadBtnWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1702
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomFileUploadInputBtn, {
          field: "contractOrLeaseItems",
          id: "contractOrLeaseItemsUploadForm",
          label: "Upload your Contract or Lease items",
          btnClassName: classes.uploadBtnClassName,
          multiple: true,
          customOnChange: setContractOrLeaseForms,
          customState: contractOrLeaseForms,
          helperInfo: "Contract or Lease items (PDF or JPEG/JPG files)",
          acceptedFileExtensions: acceptedFileExtensions,
          accept: ".jpeg, .jpg, .pdf",
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1703
          }
        }), submittedDeal && submittedDeal.contractOrLeaseForms && submittedDeal.contractOrLeaseForms.length && !(contractOrLeaseForms && contractOrLeaseForms.length) ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileViewBtn
          },
          onClick: _this2.handleContractLeaseMenuClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1720
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye___default.a, {
          className: classes.viewIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1728
          }
        })) : null, contractOrLeaseForms.length ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a, {
          variant: "fab",
          color: "secondary",
          "aria-label": "add",
          size: "small",
          classes: {
            root: classes.smallFileRemoveBtn
          },
          onClick: function onClick() {
            setContractOrLeaseForms([]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1732
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1742
          }
        })) : null)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formMiniHeading2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1790
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a, {
          variant: "subheading",
          classes: {
            subheading: classes.h4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1791
          }
        }, "Other:")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1799
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1800
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1803
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "agentPaymentType",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "How would you like to get paid?",
          radioInputItems: radioInputAgentPaymentItems,
          onInput: _this2.props.onAgentPaymentTypeChange,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1808
          }
        })), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountNumber) && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1822
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1823
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "ACH Account Number",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["a" /* ACHAccountNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1824
          }
        }))), (agentPaymentTypeIsACH || submittedDeal && submittedDeal.ACHAccountBankRoutingNumber) && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1840
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1841
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CustomTextField, {
          field: "ACHAccountBankRoutingNumber",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          label: "ACH Account's Bank Routing Number",
          required: true,
          fullWidth: true,
          validate: __WEBPACK_IMPORTED_MODULE_33__formValidation__["a" /* ACHAccountNumberValidator */],
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1842
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1855
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1856
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomSelectInput, {
          field: "fundsPaidBy",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          fullWidth: true,
          label: "Funds will/have been paid by...",
          name: "fundsPaidBy",
          selectInputItems: fundsPaidBySelectItems,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1857
          }
        }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1870
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "alreadyTurnedFundsIn",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Have you already deposited or given the funds to us?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1875
          }
        })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: "".concat(classes.formControlWrapper, " ").concat(classes.radioInputWrapper),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1886
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MaterialCustomRadioInput, {
          field: "shouldSendApprovalTextMessageNotification",
          id: __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default()(),
          required: true,
          label: "Want to recieve a text notification upon deal approval?",
          radioInputItems: radioInputYesNoItems,
          horizontal: true,
          disabled: submittedDeal && !isEditingDeal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1891
          }
        })), !_this2.props.userRole || !submittedDeal || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_34__constants_userTypes__["agent"] && submittedDeal.status === 'pending' || !submittedDeal.bonusPercentageAddedByAdmin && submittedDeal.status === 'approved' ? null : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1908
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1909
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1910
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputLabel"], {
          htmlFor: "bonusPercentageAddedByAdmin",
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1921
          }
        }, "Listing agent/performance bonus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input___default.a, {
          id: "bonusPercentageAddedByAdmin",
          value: submittedDeal && submittedDeal.bonusPercentageAddedByAdmin ? submittedDeal.bonusPercentageAddedByAdmin : _this2.props.dealBonus,
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled, classes.fullwidthInput),
          inputProps: {
            onInput: _this2.props.onBonusChange,
            className: submittedDeal.status === 'approved' ? classes.disabled : undefined
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1953
            }
          }, "%"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1931
          }
        })))), submittedDeal && submittedDeal.netAgentCommission && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1966
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1967
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(submittedDeal && submittedDeal.status === 'approved' && classes.disabled),
          disabled: submittedDeal && submittedDeal.status === 'approved',
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1968
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputLabel"], {
          htmlFor: "netAgentCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1979
          }
        }, "Net Agent Commission"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input___default.a, {
          id: "netAgentCommission",
          value: submittedDeal && submittedDeal.netAgentCommission ? Object(__WEBPACK_IMPORTED_MODULE_35__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netAgentCommission).toLocaleString()) : null,
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 2004
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1985
          }
        })))) : null, (_this2.props.userRole === __WEBPACK_IMPORTED_MODULE_34__constants_userTypes__["admin"] || _this2.props.userRole === __WEBPACK_IMPORTED_MODULE_34__constants_userTypes__["superAdmin"]) && submittedDeal && submittedDeal.status === 'approved' ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2018
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
          className: classes.formControlWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2019
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32_material_ui_Form__["FormControl"], {
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(classes.disabled),
          disabled: true,
          fullWidth: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2020
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputLabel"], {
          htmlFor: "netCompanyCommission",
          className: classes.disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2025
          }
        }, "Net Company Commission"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input___default.a, {
          id: "netCompanyCommission",
          value: submittedDeal ? submittedDeal.netCompanyCommission ? Object(__WEBPACK_IMPORTED_MODULE_35__utils_Math__["a" /* padStringToDecimalString */])(Number(submittedDeal.netCompanyCommission).toLocaleString()) : 0 : null,
          className: __WEBPACK_IMPORTED_MODULE_22_classnames___default()(classes.disabled, classes.finalTotalInputClass),
          inputProps: {
            className: classes.disabled
          },
          startAdornment: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__["InputAdornment"], {
            position: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 2052
            }
          }, "$"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 2031
          }
        })))) : null));
      }), submittingFormToServer ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.formSubmittingWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2068
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
        type: "loading",
        style: {
          color: '#000',
          fontSize: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2069
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2070
        }
      }, "Finishing submission...")) : null, isUploadingFile ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2077
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar___default.a, {
        className: classes.progressBar,
        percentage: uplodingFileProgress,
        styles: {
          path: {
            stroke: "rgba(62, 152, 199, ".concat(uplodingFileProgress / 100, ")")
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2078
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: classes.progressBarExplanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2087
        }
      }, uplodingFileText || 'Uploading file picture...')) : null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20_react_images___default.a, {
        images: this.state.currentLightboxItem,
        isOpen: this.state.lightboxIsOpen,
        onClose: this.closeLightbox,
        onClickPrev: this.onClickPrev,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentLightBoxIndex,
        backdropClosesModal: true,
        customControls: [this.returnDownloadFileBtn()],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 2093
        }
      }));
    }
  }]);

  return SubmitDealForm;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["withStyles"])(styles)(SubmitDealForm));

/***/ }),

/***/ "./constants/dealTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return residentialRental; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return residentialSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commercialRental; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commercialSale; });
var residentialRental = 'Residential Rental';
var residentialSale = 'Residential Sale';
var commercialRental = 'Commercial Rental';
var commercialSale = 'Commercial Sale';

/***/ }),

/***/ "./constants/graphDataModels.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return returnMonthlyDollarDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return returnMonthlyDealNumberDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return returnNumberDealsDataContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return returnYearlyDollarDealsDataContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var returnMonthlyDollarDataContainer = function returnMonthlyDollarDataContainer() {
  return {
    Jan: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Feb: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Mar: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Apr: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    May: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    June: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Jul: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Aug: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Sep: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Oct: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Nov: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Dec: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    }
  };
};
var returnMonthlyDealNumberDataContainer = function returnMonthlyDealNumberDataContainer() {
  return {
    Jan: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Feb: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Mar: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Apr: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    May: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    June: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Jul: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Aug: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Sep: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Oct: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Nov: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    },
    Dec: {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    }
  };
};
var returnNumberDealsDataContainer = function returnNumberDealsDataContainer() {
  var currentYear = __WEBPACK_IMPORTED_MODULE_0_moment___default()().year();
  var years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
  var data = {};
  years.forEach(function (year) {
    data[year] = {
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
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
      'Com Sales': 0.001,
      'Com Rentals': 0.001,
      'Res Sales': 0.001,
      'Res Rentals': 0.001
    };
  });
  return data;
};

/***/ }),

/***/ "./constants/graphQLEndpoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var endpoint = '/api/graphql';
/* harmony default export */ __webpack_exports__["a"] = (endpoint);

/***/ }),

/***/ "./constants/userTypes.js":
/***/ (function(module, exports) {

var customer = 'customer';
var agent = 'agent';
var admin = 'admin';
var superAdmin = 'super-admin';
var anonymous = 'anonymous';
module.exports = {
  customer: customer,
  agent: agent,
  admin: admin,
  superAdmin: superAdmin,
  anonymous: anonymous
};

/***/ }),

/***/ "./constants/websiteURL.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var websiteURL = 'https://reyeselsamad.com/api/graphql';
/* unused harmony default export */ var _unused_webpack_default_export = (websiteURL);

/***/ }),

/***/ "./containers/AdminAreaDealsTableContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance__ = __webpack_require__("chance");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_papaparse__ = __webpack_require__("papaparse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_AdminAreaDealsTable__ = __webpack_require__("./components/AdminAreaDealsTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_debounce__ = __webpack_require__("./utils/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_Math__ = __webpack_require__("./utils/Math.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/AdminAreaDealsTableContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var chance = new __WEBPACK_IMPORTED_MODULE_4_chance___default.a();
var Loader = __WEBPACK_IMPORTED_MODULE_3_react_spinners__["DotLoader"];

var returnAgentType = function returnAgentType(number) {
  if (number < 33) {
    return 60;
  } else if (number < 66) {
    return 70;
  } else {
    return 80;
  }
};

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative'
    },
    progress: {
      margin: theme.spacing.unit * 2,
      marginRight: 'auto',
      marginLeft: 'auto',
      display: 'block'
    },
    progressWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '60px 20px',
      borderRadius: '3px',
      backgroundColor: '#fff',
      zIndex: 2
    }
  };
};

var columns = [{
  name: 'dealID',
  title: 'Deal ID'
}, {
  name: 'date',
  title: 'Date'
}, {
  name: 'agentName',
  title: 'Agent Name'
}, {
  name: 'agentType',
  title: 'Agent Type'
}, {
  name: 'dealType',
  title: 'Deal Type'
}, {
  name: 'clientName',
  title: 'Client Name'
}, {
  name: 'clientEmail',
  title: 'Client Email'
}, {
  name: 'propertyAddress',
  title: 'Property Address'
}, {
  name: 'propertyCity',
  title: 'Property City'
}, {
  name: 'propertyState',
  title: 'Property State'
}, {
  name: 'managementOrCobrokeCompany',
  title: 'Mgmt/Co-Broke Co.'
}, {
  name: 'rentOrSalePrice',
  title: 'Rent/Sale Price'
}, {
  name: 'deductionsTotal',
  title: 'Deductions Total'
}, {
  name: 'paymentsTotal',
  title: 'Payments Total'
}, {
  name: 'netPaymentsTotal',
  title: 'Net Payments Total'
}, {
  name: 'bonusPercentageAddedByAdmin',
  title: "Agent's Bonus %"
}, {
  name: 'netAgentCommission',
  title: 'Net Agent Commission'
}, {
  name: 'netCompanyCommission',
  title: 'Net Company Commission'
}, {
  name: 'status',
  title: 'Status'
}, {
  name: 'view',
  title: 'View'
}];

var DealsTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsTableContainer, _Component);

  function DealsTableContainer(props) {
    var _this;

    _classCallCheck(this, DealsTableContainer);

    _this = _possibleConstructorReturn(this, (DealsTableContainer.__proto__ || Object.getPrototypeOf(DealsTableContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.deals.map(function (deal) {
          var dealID = deal.dealID,
              date = deal.date,
              agentName = deal.agentName,
              agentType = deal.agentType,
              leadSource = deal.leadSource,
              dealType = deal.dealType,
              propertyAddress = deal.propertyAddress,
              state = deal.state,
              city = deal.city,
              apartmentNumber = deal.apartmentNumber,
              managementOrCobrokeCompany = deal.managementOrCobrokeCompany,
              price = deal.price,
              clientName = deal.clientName,
              clientEmail = deal.clientEmail,
              paymentsTotal = deal.paymentsTotal,
              deductionsTotal = deal.deductionsTotal,
              total = deal.total,
              status = deal.status,
              bonusPercentageAddedByAdmin = deal.bonusPercentageAddedByAdmin,
              netAgentCommission = deal.netAgentCommission,
              netCompanyCommission = deal.netCompanyCommission;
          return {
            dealID: dealID,
            date: __WEBPACK_IMPORTED_MODULE_6_moment___default()(date).format('MM/DD/YYYY'),
            agentName: agentName,
            agentType: "".concat(agentType, "%"),
            dealType: dealType,
            clientName: clientName,
            clientEmail: clientEmail,
            propertyAddress: propertyAddress,
            propertyCity: city,
            propertyState: state,
            managementOrCobrokeCompany: managementOrCobrokeCompany,
            rentOrSalePrice: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(price || 0).toLocaleString())),
            deductionsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(deductionsTotal || 0).toLocaleString())),
            paymentsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(paymentsTotal || 0).toLocaleString())),
            netPaymentsTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(total || 0).toLocaleString())),
            bonusPercentageAddedByAdmin: status === 'pending' ? undefined : "%".concat(bonusPercentageAddedByAdmin || 0),
            netAgentCommission: status === 'pending' ? undefined : "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(netAgentCommission || 0).toLocaleString())),
            netCompanyCommission: status === 'pending' ? undefined : "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(netCompanyCommission || 0).toLocaleString())),
            status: Object(__WEBPACK_IMPORTED_MODULE_10__utils_stringUtils__["a" /* capitalize */])(status),
            view: {
              type: 'action',
              onClick: function onClick() {
                return Object(__WEBPACK_IMPORTED_MODULE_9__utils_debounce__["a" /* default */])(_this.props.openDealsViewDialogBox.bind(null, dealID, status), 1000, true)();
              }
            }
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "convertDealsToCSV", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = _this.props.deals;
        var selection = _this.state.selection;
        console.log(selection);
        console.log(deals);
        if (!selection || !selection.length) return;
        var csvContent = __WEBPACK_IMPORTED_MODULE_7_papaparse___default.a.unparse(deals.filter(function (deal) {
          return selection.includes(deal.dealID);
        }).map(function (deal) {
          return _objectSpread({}, deal, {
            date: __WEBPACK_IMPORTED_MODULE_6_moment___default()(deal.date).format('MM/DD/YYYY')
          });
        }), {
          header: true
        });

        if (_this._csvLink) {
          _this._csvLink.setAttribute('href', "data:text/csv;charset=utf-8,".concat(encodeURIComponent(csvContent)));

          _this._csvLink.setAttribute('download', 'deals_data.csv');

          _this._csvLink.click();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeSelection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(selection) {
        _this.setState({
          selection: selection
        });
      }
    });
    _this.state = {
      tableIsLoading: true,
      selection: []
    };
    return _this;
  }

  _createClass(DealsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          selection = _state.selection;

      var _props = this.props,
          classes = _props.classes,
          small = _props.small,
          rest = _objectWithoutProperties(_props, ["classes", "small"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, tableIsLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.progressWrapper,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 180px)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#f44336",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      })) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_AdminAreaDealsTable__["a" /* default */], _extends({}, rest, {
        changeSelection: this.changeSelection,
        selection: selection,
        convertDealsToCSV: this.convertDealsToCSV,
        small: small,
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: columns,
        rows: this.createRows(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        id: "csvLink",
        ref: function ref(_ref) {
          return _this2._csvLink = _ref;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }));
    }
  }]);

  return DealsTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(DealsTableContainer));

/***/ }),

/***/ "./containers/DealsSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value__ = __webpack_require__("set-value");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_set_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_set_value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DealsSummary__ = __webpack_require__("./components/DealsSummary/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__ = __webpack_require__("./constants/dealTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__ = __webpack_require__("./constants/graphDataModels.js");
var _class,
    _class2,
    _temp,
    _initialiseProps,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/DealsSummary.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var get = function get(p, o) {
  return p.reduce(function (xs, x) {
    return xs && xs[x] ? xs[x] : null;
  }, o);
};

var returnGraphDealType = function returnGraphDealType(deal) {
  var graphDealType;

  switch (deal.dealType) {
    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
      graphDealType = 'Com Rentals';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
      graphDealType = 'Com Sales';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
      graphDealType = 'Res Sales';
      break;

    case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
      graphDealType = 'Res Rentals';
      break;

    default:
      return null;
  }

  return graphDealType;
};

var returnGraphMonth = function returnGraphMonth(month) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
};

var DealsSummaryContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsSummaryContainer, _Component);

  function DealsSummaryContainer(props) {
    var _this;

    _classCallCheck(this, DealsSummaryContainer);

    _this = _possibleConstructorReturn(this, (DealsSummaryContainer.__proto__ || Object.getPrototypeOf(DealsSummaryContainer)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var deals = _this.props.deals;
    _this.state = {};
    return _this;
  }

  _createClass(DealsSummaryContainer, [{
    key: "render",
    value: function render() {
      var deals = this.props.deals;

      var _returnAllGraphData = this.returnAllGraphData(deals),
          monthlyDealsDollarBarData = _returnAllGraphData.monthlyDealsDollarBarData,
          monthlyDealsNumberBarData = _returnAllGraphData.monthlyDealsNumberBarData,
          monthlyDealsDollarLineData = _returnAllGraphData.monthlyDealsDollarLineData,
          monthlyDealsNumberLineData = _returnAllGraphData.monthlyDealsNumberLineData,
          yearlyDealsDollarBarData = _returnAllGraphData.yearlyDealsDollarBarData,
          yearlyDealsNumberBarData = _returnAllGraphData.yearlyDealsNumberBarData,
          yearlyDealsDollarLineData = _returnAllGraphData.yearlyDealsDollarLineData,
          yearlyDealsNumberLineData = _returnAllGraphData.yearlyDealsNumberLineData;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DealsSummary__["a" /* default */], {
        userUUID: this.props.userUUID,
        numberOfTotalDealsData: this.returnNumberOfTotalDealsData(deals),
        grossDollarAmtOfTotalDealsData: this.returnGrossDollarAmtOfTotalDealsData(deals),
        numberOfPendingDeals: this.returnNumberOfPendingDeals(deals),
        grossDealCommissions: this.returnGrossDealCommissions(deals),
        netCurrentYearDealCommissions: this.returnNetCurrentYearDealCommissions(deals),
        monthlyDealsDollarBarData: monthlyDealsDollarBarData,
        monthlyDealsNumberBarData: monthlyDealsNumberBarData,
        monthlyDealsDollarLineData: monthlyDealsDollarLineData,
        monthlyDealsNumberLineData: monthlyDealsNumberLineData,
        yearlyDealsDollarBarData: yearlyDealsDollarBarData,
        yearlyDealsNumberBarData: yearlyDealsNumberBarData,
        yearlyDealsDollarLineData: yearlyDealsDollarLineData,
        yearlyDealsNumberLineData: yearlyDealsNumberLineData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }));
    }
  }]);

  return DealsSummaryContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "returnNumberOfTotalDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!deals.length) return false;
      if (!deals.some(function (deal) {
        return deal.status !== 'pending';
      })) return false;
      var dealDataCounts = {
        'Res. Sales': 0,
        'Res. Rentals': 0,
        'Com. Sales': 0,
        'Com. Rentals': 0
      };

      if (deals && Array.isArray(deals)) {
        deals.forEach(function (deal) {
          if (deal.status === 'pending') return;

          switch (deal.dealType) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
              dealDataCounts['Com. Rentals'] += 1;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
              dealDataCounts['Com. Sales'] += 1;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
              dealDataCounts['Res. Rentals'] += 1;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
              dealDataCounts['Res. Sales'] += 1;
              break;

            default:
              return;
          }
        });
      }

      var dealData = [{
        id: 'Res. Sales',
        label: 'Res. Sales',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Res. Rentals',
        label: 'Res. Rentals',
        value: dealDataCounts['Res. Rentals'] || 0
      }, {
        id: 'Com. Sales',
        label: 'Com. Sales',
        value: dealDataCounts['Com. Sales'] || 0
      }, {
        id: 'Com. Rentals',
        label: 'Com. Rentals',
        value: dealDataCounts['Com. Rentals'] || 0
      }];
      return dealData;
    }
  });
  Object.defineProperty(this, "returnGrossDollarAmtOfTotalDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!deals.length) return false;
      if (!deals.some(function (deal) {
        return deal.status !== 'pending';
      })) return false;
      var dealDataCounts = {
        'Res. Sales': 0,
        'Res. Rentals': 0,
        'Com. Sales': 0,
        'Com. Rentals': 0
      };

      if (deals) {
        deals.forEach(function (deal) {
          if (deal.status === 'pending') return;

          switch (deal.dealType) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["a" /* commercialRental */]:
              dealDataCounts['Com. Rentals'] += deal.total;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["b" /* commercialSale */]:
              dealDataCounts['Com. Sales'] += deal.total;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["c" /* residentialRental */]:
              dealDataCounts['Res. Rentals'] += deal.total;
              break;

            case __WEBPACK_IMPORTED_MODULE_5__constants_dealTypes__["d" /* residentialSale */]:
              dealDataCounts['Res. Sales'] += deal.total;
              break;

            default:
              return;
          }
        });
      }

      var dealsGrossDollarData = [{
        id: 'Res. Sales',
        label: 'Res. Sales',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Res. Rentals',
        label: 'Res. Rentals',
        value: dealDataCounts['Res. Sales'] || 0
      }, {
        id: 'Com. Sales',
        label: 'Com. Sales',
        value: dealDataCounts['Com. Sales'] || 0
      }, {
        id: 'Com. Rentals',
        label: 'Com. Rentals',
        value: dealDataCounts['Com. Rentals'] || 0
      }];
      return dealsGrossDollarData;
    }
  });
  Object.defineProperty(this, "returnNumberOfPendingDeals", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var numOfPendingDeals = deals.reduce(function (pendingDeals, deal) {
        if (deal.status === 'pending') {
          return pendingDeals += 1;
        }

        return pendingDeals;
      }, 0);
      return numOfPendingDeals || 0;
    }
  });
  Object.defineProperty(this, "returnGrossDealCommissions", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return deals.reduce(function (grossAmount, deal) {
        if (deal.status === 'pending') return grossAmount;
        return Math.floor(grossAmount += deal.total);
      }, 0);
    }
  });
  Object.defineProperty(this, "returnNetCurrentYearDealCommissions", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return deals.reduce(function (grossAmount, deal) {
        if (deal.status === 'pending') return grossAmount;
        if (__WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year() !== __WEBPACK_IMPORTED_MODULE_2_moment___default()().year()) return grossAmount;
        return Math.floor(grossAmount += deal.netAgentCommission);
      }, 0);
    }
  });
  Object.defineProperty(this, "returnMonthlyAndYearlyDealsData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var deals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var monthlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["b" /* returnMonthlyDollarDataContainer */])();
      var monthlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["a" /* returnMonthlyDealNumberDataContainer */])();
      var yearlyDollarData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["c" /* returnNumberDealsDataContainer */])();
      var yearlyDealNumberData = Object(__WEBPACK_IMPORTED_MODULE_7__constants_graphDataModels__["d" /* returnYearlyDollarDealsDataContainer */])();
      deals.forEach(function (deal) {
        if (deal.status === 'pending') return;
        var month = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).month();
        var year = __WEBPACK_IMPORTED_MODULE_2_moment___default()(deal.date).year();
        var currentYear = __WEBPACK_IMPORTED_MODULE_2_moment___default()().year();
        var yearLimit = currentYear - 4; // monthlyDollarData

        if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDollarData)) {
          monthlyDollarData[returnGraphMonth(month)][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000);
        } else {
          __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDollarData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000));
        } // monthlyDealNumberData


        if (get([returnGraphMonth(month), returnGraphDealType(deal)], monthlyDealNumberData)) {
          monthlyDealNumberData[returnGraphMonth(month)][returnGraphDealType(deal)] += 1;
        } else {
          __WEBPACK_IMPORTED_MODULE_3_set_value___default()(monthlyDealNumberData, "".concat(returnGraphMonth(month), ".").concat(returnGraphDealType(deal)), 1);
        }

        if (year >= yearLimit) {
          // yearlyDollarData
          if (get([year, returnGraphDealType(deal)], yearlyDollarData)) {
            yearlyDollarData[year][returnGraphDealType(deal)] += Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000);
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDollarData, "".concat(year, ".").concat(returnGraphDealType(deal)), Object(__WEBPACK_IMPORTED_MODULE_6__utils_Math__["b" /* round */])(deal.netAgentCommission / 1000));
          } // yearlyDealNumberData


          if (get([year, returnGraphDealType(deal)], yearlyDealNumberData)) {
            yearlyDealNumberData[year][returnGraphDealType(deal)] += 1;
          } else {
            __WEBPACK_IMPORTED_MODULE_3_set_value___default()(yearlyDealNumberData, "".concat(year, ".").concat(returnGraphDealType(deal)), 1);
          }
        }
      });
      return {
        monthlyDollarData: monthlyDollarData,
        monthlyDealNumberData: monthlyDealNumberData,
        yearlyDollarData: yearlyDollarData,
        yearlyDealNumberData: yearlyDealNumberData
      };
    }
  });
  Object.defineProperty(this, "generateDealsBarData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(data) {
      return Object.keys(data).map(function (month) {
        return {
          month: month,
          'Com Sales': data[month]['Com Sales'],
          'Com Rentals': data[month]['Com Rentals'],
          'Res Sales': data[month]['Res Sales'],
          'Res Rentals': data[month]['Res Rentals']
        };
      });
    }
  });
  Object.defineProperty(this, "generateDealsLineData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(data) {
      var types = ['Com Sales', 'Com Rentals', 'Res Sales', 'Res Rentals'];
      return types.map(function (id) {
        return {
          id: id,
          data: Object.keys(data).map(function (month) {
            return {
              x: month,
              y: data[month][id]
            };
          })
        };
      });
    }
  });
  Object.defineProperty(this, "returnAllGraphData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(deals) {
      var _this2$returnMonthlyA = _this2.returnMonthlyAndYearlyDealsData(deals),
          monthlyDollarData = _this2$returnMonthlyA.monthlyDollarData,
          monthlyDealNumberData = _this2$returnMonthlyA.monthlyDealNumberData,
          yearlyDollarData = _this2$returnMonthlyA.yearlyDollarData,
          yearlyDealNumberData = _this2$returnMonthlyA.yearlyDealNumberData;

      return {
        monthlyDealsDollarBarData: _this2.generateDealsBarData(monthlyDollarData),
        monthlyDealsNumberBarData: _this2.generateDealsBarData(monthlyDealNumberData),
        monthlyDealsDollarLineData: _this2.generateDealsLineData(monthlyDollarData),
        monthlyDealsNumberLineData: _this2.generateDealsLineData(monthlyDealNumberData),
        yearlyDealsDollarBarData: _this2.generateDealsBarData(yearlyDollarData),
        yearlyDealsNumberBarData: _this2.generateDealsBarData(yearlyDealNumberData),
        yearlyDealsDollarLineData: _this2.generateDealsLineData(yearlyDollarData),
        yearlyDealsNumberLineData: _this2.generateDealsLineData(yearlyDealNumberData)
      };
    }
  });
}, _temp)) || _class;

/* harmony default export */ __webpack_exports__["a"] = (DealsSummaryContainer);

/***/ }),

/***/ "./containers/DealsTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance__ = __webpack_require__("chance");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chance__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_papaparse__ = __webpack_require__("papaparse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_DealsTable__ = __webpack_require__("./components/DealsTable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_debounce__ = __webpack_require__("./utils/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_Math__ = __webpack_require__("./utils/Math.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/DealsTable.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var chance = new __WEBPACK_IMPORTED_MODULE_4_chance___default.a();
var Loader = __WEBPACK_IMPORTED_MODULE_3_react_spinners__["DotLoader"];

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative'
    },
    progress: {
      margin: theme.spacing.unit * 2,
      marginRight: 'auto',
      marginLeft: 'auto',
      display: 'block'
    },
    progressWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '60px 20px',
      borderRadius: '3px',
      backgroundColor: '#fff',
      zIndex: 2
    }
  };
};

var columns = [{
  name: 'dealID',
  title: 'Deal ID'
}, {
  name: 'date',
  title: 'Date'
}, {
  name: 'dealType',
  title: 'Deal Type'
}, {
  name: 'clientName',
  title: 'Client Name'
}, {
  name: 'clientEmail',
  title: 'Client Email'
}, {
  name: 'propertyAddress',
  title: 'Property Address'
}, {
  name: 'propertyCity',
  title: 'Property City'
}, {
  name: 'managementOrCobrokeCompany',
  title: 'Mgmt/Co-Broke Co.'
}, {
  name: 'rentOrSalePrice',
  title: 'Rent/Sale Price'
}, {
  name: 'bonusPercentageAddedByAdmin',
  title: "Agent's Bonus %"
}, {
  name: 'netAgentCommission',
  title: 'Net Commission'
}, {
  name: 'dealTotal',
  title: 'Deal Total'
}, {
  name: 'status',
  title: 'Status'
}, {
  name: 'view',
  title: 'View'
}];

var DealsTableContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsTableContainer, _Component);

  function DealsTableContainer(props) {
    var _this;

    _classCallCheck(this, DealsTableContainer);

    _this = _possibleConstructorReturn(this, (DealsTableContainer.__proto__ || Object.getPrototypeOf(DealsTableContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createRows", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.deals.map(function (deal) {
          var dealID = deal.dealID,
              date = deal.date,
              agentID = deal.agentID,
              dealType = deal.dealType,
              clientName = deal.clientName,
              clientEmail = deal.clientEmail,
              propertyAddress = deal.propertyAddress,
              city = deal.city,
              managementOrCobrokeCompany = deal.managementOrCobrokeCompany,
              price = deal.price,
              bonusPercentageAddedByAdmin = deal.bonusPercentageAddedByAdmin,
              netAgentCommission = deal.netAgentCommission,
              status = deal.status,
              total = deal.total;
          return {
            dealID: dealID,
            date: __WEBPACK_IMPORTED_MODULE_6_moment___default()(date).format('MM/DD/YYYY'),
            dealType: dealType,
            clientName: clientName,
            clientEmail: clientEmail,
            propertyAddress: propertyAddress,
            propertyCity: city,
            managementOrCobrokeCompany: managementOrCobrokeCompany,
            rentOrSalePrice: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(price || 0).toLocaleString())),
            bonusPercentageAddedByAdmin: status === 'pending' ? undefined : "%".concat(bonusPercentageAddedByAdmin || 0),
            netAgentCommission: status === 'pending' ? undefined : "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(netAgentCommission || 0).toLocaleString())),
            dealTotal: "$".concat(Object(__WEBPACK_IMPORTED_MODULE_11__utils_Math__["a" /* padStringToDecimalString */])(Number(total || 0).toLocaleString())),
            status: Object(__WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__["a" /* capitalize */])(status),
            view: {
              type: 'action',
              onClick: function onClick() {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils_debounce__["a" /* default */])(_this.props.openDealsViewDialogBox.bind(null, dealID, status), 1000, true)();
              }
            }
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "convertDealsToCSV", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var deals = _this.props.deals;
        var selection = _this.state.selection;
        if (!selection || !selection.length) return;
        var csvContent = __WEBPACK_IMPORTED_MODULE_7_papaparse___default.a.unparse(deals.filter(function (deal) {
          return selection.includes(deal.dealID);
        }).map(function (deal) {
          return _objectSpread({}, deal, {
            date: __WEBPACK_IMPORTED_MODULE_6_moment___default()(deal.date).format('MM/DD/YYYY')
          });
        }), {
          header: true
        });

        if (_this._csvLink) {
          _this._csvLink.setAttribute('href', "data:text/csv;charset=utf-8,".concat(encodeURIComponent(csvContent)));

          _this._csvLink.setAttribute('download', 'deals_data.csv');

          _this._csvLink.click();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeSelection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(selection) {
        _this.setState({
          selection: selection
        });
      }
    });
    _this.state = {
      tableIsLoading: true,
      selection: []
    };
    return _this;
  }

  _createClass(DealsTableContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tableIsLoading = _state.tableIsLoading,
          selection = _state.selection;

      var _props = this.props,
          classes = _props.classes,
          deals = _props.deals,
          rest = _objectWithoutProperties(_props, ["classes", "deals"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, tableIsLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.progressWrapper,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 180px)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
        color: "#f44336",
        loading: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      })) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_DealsTable__["a" /* default */], _extends({}, rest, {
        convertDealsToCSV: this.convertDealsToCSV,
        changeSelection: this.changeSelection,
        selection: selection,
        onMount: function onMount() {
          return tableIsLoading ? _this2.setState({
            tableIsLoading: false
          }) : null;
        },
        columns: columns,
        rows: this.createRows(),
        toggleDealsSummaryDialogBox: this.props.toggleDealsSummaryDialogBox,
        isDealsWithGQLQuery: this.props.isDealsWithGQLQuery,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        id: "csvLink",
        ref: function ref(_ref) {
          return _this2._csvLink = _ref;
        },
        style: {
          visibility: 'hidden',
          position: 'absolute',
          poniterEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }));
    }
  }]);

  return DealsTableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(DealsTableContainer));

/***/ }),

/***/ "./containers/DealsWithGQLQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__ = __webpack_require__("material-ui/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer__ = __webpack_require__("@material-ui/icons/Equalizer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_SubmitDealDialogBox__ = __webpack_require__("./components/SubmitDealDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__DealsTable__ = __webpack_require__("./containers/DealsTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__AdminAreaDealsTableContainer__ = __webpack_require__("./containers/AdminAreaDealsTableContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_DealsSummarDialogBox__ = __webpack_require__("./components/DealsSummarDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ViewDealDialogBox__ = __webpack_require__("./components/ViewDealDialogBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__effects_deals_deleteDeal__ = __webpack_require__("./effects/deals/deleteDeal.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/DealsWithGQLQuery.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealsByAgentID($uuid: String!) {\n    dealsByAgentID(uuid: $uuid) {\n      dealID\n      date\n      agentID\n      dealType\n      clientName\n      clientEmail\n      propertyAddress\n      city\n      state\n      managementOrCobrokeCompany\n      price\n      status\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      total\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealsByAgentID($uuid: String!) {\n    dealsByAgentID(uuid: $uuid) {\n      dealID\n      date\n      agentName\n      agentType\n      leadSource\n      dealType\n      propertyAddress\n      state\n      city\n      apartmentNumber\n      managementOrCobrokeCompany\n      price\n      clientName\n      clientEmail\n      paymentsTotal\n      deductionsTotal\n      total\n      agentNotes\n      bonusPercentageAddedByAdmin\n      netAgentCommission\n      netCompanyCommission\n      status\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




















var Loader = __WEBPACK_IMPORTED_MODULE_12_react_spinners__["DotLoader"];
var dealsQuery = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject);
var adminDealsByAgentID = __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject2);

var styles = function styles(theme) {
  return {
    addDealBtn: {},
    dealsSummaryBtn: {
      marginLeft: '25px',
      backgroundColor: '#2995F3',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2380D1'
      }
    },
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

var DealsWithGQLQuery = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DealsWithGQLQuery, _Component);

  function DealsWithGQLQuery(props) {
    var _this;

    _classCallCheck(this, DealsWithGQLQuery);

    _this = _possibleConstructorReturn(this, (DealsWithGQLQuery.__proto__ || Object.getPrototypeOf(DealsWithGQLQuery)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleAddDealDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          submitDealDialogOpen: !_this.state.submitDealDialogOpen
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleDealsSummaryDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsSummaryDialogBoxOpen: !_this.state.dealsSummaryDialogBoxOpen
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setDealSuccessfullySubmitted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        _this.setState({
          submitDealDialogOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal submitted successfully',
          addedDeals: _toConsumableArray(_this.state.addedDeals).concat([newDeal])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setDealSuccessfullyEditted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newDeal) {
        var addedDeals = _this.state.addedDeals.filter(function (deal) {
          return deal.dealID !== newDeal.dealID;
        });

        _this.setState({
          dealsViewDialogBoxOpen: false,
          snackbarOpen: true,
          snackbarText: 'Deal updated successfully',
          addedDeals: _toConsumableArray(addedDeals).concat([newDeal])
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
          snackbarUndoFunction: null
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID, status) {
        _this.setState({
          dealsViewDialogBoxOpen: true,
          viewingDealID: dealID,
          viewingDealStatus: status
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeDealsViewDialogBox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dealsViewDialogBoxOpen: false,
          viewingDealID: '',
          viewingDealStatus: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "dealDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Deal deleted successfully!',
          dealsViewDialogBoxOpen: false,
          deletedDealIDS: _toConsumableArray(_this.state.deletedDealIDS).concat([dealID])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "dealAccepted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dealID) {
        _this.setState({
          snackbarOpen: true,
          snackbarText: 'Deal accepted successfully!',
          dealsViewDialogBoxOpen: false,
          acceptedDealIDS: _toConsumableArray(_this.state.acceptedDealIDS).concat([dealID])
        });
      }
    });
    _this.state = {
      submitDealDialogOpen: false,
      dealsSummaryDialogBoxOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedDeals: [],
      dealsViewDialogBoxOpen: false,
      viewingDealID: '',
      viewingDealStatus: '',
      deletedDealIDS: [],
      userUUID: _this.props.userUUID,
      acceptedDealIDS: []
    };
    return _this;
  }

  _createClass(DealsWithGQLQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          userUUID = _props.userUUID,
          isAdmin = _props.isAdmin;
      var _state = this.state,
          submitDealDialogOpen = _state.submitDealDialogOpen,
          dealsSummaryDialogBoxOpen = _state.dealsSummaryDialogBoxOpen,
          dealsViewDialogBoxOpen = _state.dealsViewDialogBoxOpen,
          viewingDealID = _state.viewingDealID,
          viewingDealStatus = _state.viewingDealStatus;
      var toggleAddDealDialogBox = this.toggleAddDealDialogBox,
          toggleDealsSummaryDialogBox = this.toggleDealsSummaryDialogBox,
          openDealsViewDialogBox = this.openDealsViewDialogBox,
          closeDealsViewDialogBox = this.closeDealsViewDialogBox;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["Query"], {
        query: isAdmin ? adminDealsByAgentID : dealsQuery,
        variables: {
          uuid: userUUID || this.state.userUUID
        },
        ssr: false,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 110px)',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        }));
        var intDeals = {};

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var allDeals = _toConsumableArray(data.dealsByAgentID).concat(_toConsumableArray(_this2.state.addedDeals));

        allDeals.forEach(function (deal) {
          intDeals[deal.dealID] = deal;
        });
        var uniqueDeals = [];
        Object.keys(intDeals).forEach(function (key) {
          uniqueDeals.push(intDeals[key]);
        });
        uniqueDeals = uniqueDeals.filter(function (deal) {
          return !_this2.state.deletedDealIDS.includes(deal.dealID);
        }).map(function (deal) {
          if (_this2.state.acceptedDealIDS.includes(deal.dealID)) {
            return _objectSpread({}, deal, {
              status: 'accepted'
            });
          } else {
            return deal;
          }
        });
        console.log(uniqueDeals);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.wrapper,
          style: {
            paddingTop: !_this2.props.largeDealsSummaryBtn ? '10px' : 'initial'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, _this2.props.largeDealsSummaryBtn && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.buttonsWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
          variant: "raised",
          onClick: toggleDealsSummaryDialogBox,
          classes: {
            root: classes.dealsSummaryBtn
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Equalizer___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }), "Deals Summary")), isAdmin ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_ViewDealDialogBox__["a" /* default */], {
          dealsViewDialogBoxOpen: dealsViewDialogBoxOpen,
          closeDealsViewDialogBox: closeDealsViewDialogBox,
          viewingDealID: viewingDealID,
          viewingDealStatus: viewingDealStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullyEditted,
          userRole: _this2.props.userRole,
          deleteDeal: _this2.deleteDeal,
          dealAccepted: _this2.dealAccepted,
          dealDeleted: _this2.dealDeleted,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_ViewDealDialogBox__["a" /* default */], {
          dealsViewDialogBoxOpen: dealsViewDialogBoxOpen,
          closeDealsViewDialogBox: closeDealsViewDialogBox,
          userUUID: userUUID,
          viewingDealID: viewingDealID,
          viewingDealStatus: viewingDealStatus,
          toggleSnackbarOpen: _this2.toggleSnackbarOpen,
          setDealSuccessfullySubmitted: _this2.setDealSuccessfullyEditted,
          userRole: _this2.props.userRole,
          dealDeleted: _this2.dealDeleted,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          }
        })), _this2.props.isAdmin ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__AdminAreaDealsTableContainer__["a" /* default */], {
          deals: uniqueDeals,
          openDealsViewDialogBox: openDealsViewDialogBox,
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          isDealsWithGQLQuery: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__DealsTable__["a" /* default */], {
          deals: uniqueDeals,
          openDealsViewDialogBox: openDealsViewDialogBox,
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          isDealsWithGQLQuery: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_DealsSummarDialogBox__["a" /* default */], {
          toggleDealsSummaryDialogBox: toggleDealsSummaryDialogBox,
          dealsSummaryDialogBoxOpen: dealsSummaryDialogBoxOpen,
          deals: uniqueDeals,
          userUUID: userUUID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default.a, {
          classes: {
            root: classes.snackBar
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          open: _this2.state.snackbarOpen,
          autoHideDuration: 4000,
          onClose: _this2.handleCloseSnackbar,
          message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            id: "snackbar-id",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 349
            }
          }, _this2.state.snackbarText),
          action: [_this2.snackbarUndoFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a, {
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
              lineNumber: 353
            }
          }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_IconButton___default.a, {
            key: "close",
            "aria-label": "Close",
            color: "inherit",
            className: classes.close,
            onClick: _this2.handleCloseSnackbar,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Close___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 379
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          }
        }));
      });
    }
  }]);

  return DealsWithGQLQuery;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(DealsWithGQLQuery));

/***/ }),

/***/ "./containers/EditAgentForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export agentQuery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_forms_CreateAgentForm__ = __webpack_require__("./components/forms/CreateAgentForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_users_updateAgent__ = __webpack_require__("./effects/users/updateAgent.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditAgentForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agent($uuid: String!) {\n    agent(uuid: $uuid) {\n      firstName\n      lastName\n      email\n      role\n      agent {\n        profilePicURL\n        branch\n        state\n        mobileNumber\n        officeNumber\n        areaOfFocus\n        realEstateLicenseNumber\n        agentType\n        ACHAccountNumber\n        ACHAccountBankRoutingNumber\n        title\n        facebook\n        instagram\n        twitter\n        profileDescription\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Loader = __WEBPACK_IMPORTED_MODULE_5_react_spinners__["BounceLoader"];
var agentQuery = __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject);

var CreateAgentContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAgentContainer, _Component);

  function CreateAgentContainer(props) {
    var _this;

    _classCallCheck(this, CreateAgentContainer);

    _this = _possibleConstructorReturn(this, (CreateAgentContainer.__proto__ || Object.getPrototypeOf(CreateAgentContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        var returnValues = _objectSpread({}, values, {
          uuid: _this.props.viewingAgentUUID
        });

        console.log(values);

        _this.props.setFormSubmitted();

        _this.props.toggleSubmittingRequestToServer(true);

        Object(__WEBPACK_IMPORTED_MODULE_8__effects_users_updateAgent__["a" /* default */])(returnValues).then(function (result) {
          var userErrors = result.userErrors,
              otherError = result.otherError,
              agent = result.agent;
          var hasErrors = false;

          if (userErrors.length) {
            userErrors.forEach(function (error) {
              console.log(error);

              if (error.field === 'email') {
                var formElement = document.getElementById('formDialog');
                formApi.setError(error.field, error.message);
                formElement.scrollTop = formElement.scrollHeight;
              }

              hasErrors = true;
            });

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          } else if (otherError) {
            _this.props.openRequestErrorSnackbar(otherError);

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          } else if (!agent) {
            _this.props.openRequestErrorSnackbar();

            _this.props.setFormSubmitted(false);

            _this.props.toggleSubmittingRequestToServer(false);

            return;
          }

          _this.setState({
            formSubmitedSuccessfully: true
          });

          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.editAgentFormSubmittedSuccessfully(agent);
        }).catch(function (err) {
          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError) {
        console.log(errs);
        console.log(onSubmitError);
      }
    });
    _this.state = {
      formSubmitedSuccessfully: false
    };
    return _this;
  }

  _createClass(CreateAgentContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          viewingAgentUUID = _props.viewingAgentUUID,
          rest = _objectWithoutProperties(_props, ["classes", "viewingAgentUUID"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"], {
        query: agentQuery,
        variables: {
          uuid: viewingAgentUUID
        },
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        })); // TODO: change the error message to a generic
        // 'error connecting to server' message

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var submittedInvoice = data.agent;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_forms_CreateAgentForm__["a" /* default */], _extends({
          submittedAgent: data.agent,
          isViewType: true,
          onSubmit: _this2.onSubmit,
          onSubmitFailure: _this2.onSubmitFailure,
          formSubmitedSuccessfully: _this2.state.formSubmitedSuccessfully,
          isEditingAgent: _this2.props.isEditingAgent,
          currentUserRole: _this2.props.currentUserRole,
          getFormApi: _this2.props.getFormApi,
          submittingFormToServer: _this2.props.submittingRequestToServer
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        })));
      });
    }
  }]);

  return CreateAgentContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (CreateAgentContainer);

/***/ }),

/***/ "./containers/EditAgentPasswordForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_EditAgentPasswordForm__ = __webpack_require__("./components/forms/EditAgentPasswordForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effects_users_editAgentPassword__ = __webpack_require__("./effects/users/editAgentPassword.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditAgentPasswordForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var EditAgentPasswordFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(EditAgentPasswordFormContainer, _Component);

  function EditAgentPasswordFormContainer(props) {
    var _this;

    _classCallCheck(this, EditAgentPasswordFormContainer);

    _this = _possibleConstructorReturn(this, (EditAgentPasswordFormContainer.__proto__ || Object.getPrototypeOf(EditAgentPasswordFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values, e, formApi) {
        _this.props.setFormSubmitted();

        _this.props.toggleSubmittingRequestToServer(true);

        var returnValues = {
          uuid: _this.props.viewingAgentUUID,
          newPassword: values.password
        };
        Object(__WEBPACK_IMPORTED_MODULE_3__effects_users_editAgentPassword__["a" /* default */])(returnValues).then(function (res) {
          _this.props.setFormSubmitted(false);

          _this.props.toggleSubmittingRequestToServer(false);

          if (res.error) {
            _this.props.openRequestErrorSnackbar(res.error);

            return;
          }

          _this.props.formSubmittedSuccessfully();
        }).catch(function (err) {
          _this.props.toggleSubmittingRequestToServer(false);

          _this.props.setFormSubmitted(false);

          _this.props.openRequestErrorSnackbar();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError) {
        console.log(errs);
        console.log(onSubmitError);

        _this.props.setFormSubmitted(false);
      }
    });
    _this.state = {
      formSubmitedSuccessfully: false
    };
    return _this;
  }

  _createClass(EditAgentPasswordFormContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          rest = _objectWithoutProperties(_props, ["classes"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_forms_EditAgentPasswordForm__["a" /* default */], _extends({
        onSubmit: this.onSubmit,
        onSubmitFailure: this.onSubmitFailure,
        formSubmitedSuccessfully: this.state.formSubmitedSuccessfully,
        getFormApi: this.props.getFormApi,
        submittingFormToServer: this.props.submittingRequestToServer
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })));
    }
  }]);

  return EditAgentPasswordFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (EditAgentPasswordFormContainer);

/***/ }),

/***/ "./containers/EditProfilePicForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forms_EditProfilePicForm__ = __webpack_require__("./components/forms/EditProfilePicForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Math__ = __webpack_require__("./utils/Math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_getProfilePicSignedURL__ = __webpack_require__("./effects/getProfilePicSignedURL.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_users_setAgentProfilePic__ = __webpack_require__("./effects/users/setAgentProfilePic.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/EditProfilePicForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var EditProfilePicFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
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
        var adjustedImageScale = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Math__["b" /* round */])(1 + rawScale / 100, 2);

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

        _this.setState({
          submittingFormToServer: true
        });

        _this.props.toggleSubmittingEditProfilePicForm(true);

        Object(__WEBPACK_IMPORTED_MODULE_5__effects_getProfilePicSignedURL__["a" /* default */])(returnValues).then(function (result) {
          var item = result.item,
              error = result.error;
          var hasError;
          var errorMessage;

          if (error) {
            console.log(error);
            errorMessage = error;
            hasError = true;
          }

          if (!item) {
            hasError = true;
          } else if (item[0] && item[0].error) {
            errorMessage = item[0].error;
            hasError = true;
          }

          if (hasError) {
            _this.setState({
              submittingFormToServer: false
            });

            _this.props.openRequestErrorSnackbar(errorMessage);

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
                var otherError = res.otherError,
                    userErrors = res.userErrors;

                if (otherError) {
                  _this.props.openRequestErrorSnackbar(otherError);

                  _this.props.setFormSubmitted(false);

                  return;
                } else if (userErrors && userErrors.length) {
                  _this.props.openRequestErrorSnackbar(userErrors[0].message);

                  _this.props.setFormSubmitted(false);
                }

                _this.props.setFinishedSubmittingForm(res.url);

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.props.openRequestErrorSnackbar(error);

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
          lineNumber: 212
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
          lineNumber: 213
        }
      })));
    }
  }]);

  return EditProfilePicFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (EditProfilePicFormContainer);

/***/ }),

/***/ "./containers/Profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker__ = __webpack_require__("faker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__ = __webpack_require__("@material-ui/icons/Close");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Button__ = __webpack_require__("material-ui/Button");
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

var ProfileContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class = (_temp = _class2 =
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
          lineNumber: 203
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
          lineNumber: 204
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
          lineNumber: 225
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_EditAgentPasswordDialogBox__["a" /* default */], {
        closeEditAgentPasswordDialogBox: this.closeEditAgentPasswordDialogBox,
        open: this.state.editAgentPasswordDialogBoxOpen,
        viewingAgentUUID: this.props.uuid,
        editPasswordFormSubmittedSuccessfully: this.editPasswordFormSubmittedSuccessfully,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
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
          lineNumber: 246
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
            lineNumber: 271
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
            lineNumber: 274
          }
        }, "UNDO") : undefined, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleCloseSnackbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }));
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
/* harmony default export */ __webpack_exports__["a"] = (ProfileContainer);

/***/ }),

/***/ "./containers/SubmitDealForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dealFormQuery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__ = __webpack_require__("./components/forms/SubmitDealForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__ = __webpack_require__("./effects/deals/getDealUploadsSignedURLS.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__ = __webpack_require__("./effects/uploadFile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_deals_submitDeal__ = __webpack_require__("./effects/deals/submitDeal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/SubmitDealForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query dealForm($uuid: String) {\n    dealForm(uuid: $uuid) {\n      agent {\n        firstName\n        lastName\n        role\n        agent {\n          agentType\n          state\n          ACHAccountNumber\n          ACHAccountBankRoutingNumber\n        }\n      }\n      agents {\n        firstName\n        lastName\n        uuid\n      }\n      formSelectItems\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["BounceLoader"];
var dealFormQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var SubmitDealFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitDealFormContainer, _Component);

  function SubmitDealFormContainer(props) {
    var _this;

    _classCallCheck(this, SubmitDealFormContainer);

    _this = _possibleConstructorReturn(this, (SubmitDealFormContainer.__proto__ || Object.getPrototypeOf(SubmitDealFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "uploadItemsNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemsUploaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deductionAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value2) {
        _value2 = Number(_value2);

        var deductionsTotal = _this.getTotalDeductionsAmount({
          id: id,
          value: _value2 || 0
        });

        _this.setState({
          deductionAmountItems: _objectSpread({}, _this.state.deductionAmountItems, _defineProperty({}, id, _value2 || 0)),
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalDeductionsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state2 = _this.state,
            deductionAmountItems = _this$state2.deductionAmountItems,
            permanentDeductionSubtractions = _this$state2.permanentDeductionSubtractions;
        Object.keys(deductionAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += deductionAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentDeductionSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractDeductionValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deduction) {
        var deductionsTotal = _this.getTotalDeductionsAmount() - deduction;

        _this.setState({
          permanentDeductionSubtractions: _this.state.permanentDeductionSubtractions + deduction,
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAgencyDisclosureForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          agencyDisclosureForm: file
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setContractOrLeaseForms", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject) {
        if (Array.isArray(filesObject)) {
          _this.setState({
            contractOrLeaseForms: filesObject
          });

          if (filesObject.length === 0) {
            var uploadBtn = document.getElementById('contractOrLeaseItemsUploadForm');

            if (uploadBtn) {
              uploadBtn.value = null;
            }
          }

          return;
        }

        var fileArray = Object.keys(filesObject).map(function (key) {
          return filesObject[key];
        });

        _this.setState({
          contractOrLeaseForms: fileArray
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state3.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(__WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAgentPaymentTypeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var value = target.value;
        var isACH = value === 'Please ACH me';

        if (isACH) {
          _this.setState({
            agentPaymentTypeIsACH: true
          });
        } else {
          _this.setState({
            agentPaymentTypeIsACH: false
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state4 = _this.state,
            contractOrLeaseForms = _this$state4.contractOrLeaseForms,
            agencyDisclosureForm = _this$state4.agencyDisclosureForm,
            addedManagementCompanies = _this$state4.addedManagementCompanies,
            hasSetNewMgmtOrCobrokeCompany = _this$state4.hasSetNewMgmtOrCobrokeCompany,
            paymentsTotal = _this$state4.paymentsTotal,
            deductionsTotal = _this$state4.deductionsTotal,
            total = _this$state4.total;

        var returnObject = _objectSpread({}, values, {
          otherAgents: values.otherAgents || [],
          addedManagementCompanies: addedManagementCompanies,
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total,
          agencyDisclosureForm: null,
          contractOrLeaseForms: [],
          dealID: null
        });

        delete returnObject.contractOrLeaseItems;
        delete returnObject.deductionsSubtotal;
        delete returnObject.paymentsSubtotal;
        delete returnObject.financialsTotal;
        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        returnObject.deductionItems = returnObject.deductionItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        var uploadItems = [{
          itemName: 'agencyDisclosureForm',
          fileName: agencyDisclosureForm.name,
          fileType: agencyDisclosureForm.type
        }];

        if (contractOrLeaseForms && contractOrLeaseForms.length) {
          contractOrLeaseForms.forEach(function (file, i) {
            uploadItems.push({
              itemName: "contractOrLeaseForm".concat(i),
              fileName: file.name,
              fileType: file.type
            });
          });
        }

        Object(__WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__["a" /* default */])(uploadItems).then(function (response) {
          if (response.error) {
            _this.props.openRequestErrorSnackbar(response.error);

            _this.props.setFormSubmitted(false);

            return;
          }

          var errors = [];
          var items = response.items,
              dealID = response.dealID;
          returnObject.dealID = dealID;
          items.forEach(function (item) {
            if (item.error) errors.push(item.error);
          });

          if (errors.length) {
            _this.props.openRequestErrorSnackbar(errors[0]);

            _this.props.setFormSubmitted(false);

            return;
          }

          _this.uploadItemsNum = items.length;

          var recursiveUploads = function recursiveUploads(items, returnObject, thisRef) {
            var uploadItemsNum = items.length;
            var uploadItemIndex = 0;
            recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef);
          };

          var recursiveHelper = function recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef) {
            if (uploadItemIndex >= items.length) {
              thisRef.setState({
                isUploadingFile: false,
                uplodingFileProgress: 0,
                filesUploadedSuccessfully: true,
                submittingFormToServer: true
              });
              Object(__WEBPACK_IMPORTED_MODULE_8__effects_deals_submitDeal__["a" /* default */])(returnObject).then(function (res) {
                var failed = false;

                if (res.otherError) {
                  _this.props.openRequestErrorSnackbar(res.otherError);

                  failed = true;
                }

                if (res.userErrors.length) {
                  failed = true;
                }

                if (!failed) {
                  _this.props.setDealSuccessfullySubmitted(res.deal);
                }

                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.setState({
                  submittingFormToServer: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar();
              });
              return;
            }

            var item = items[uploadItemIndex];
            var file;
            var fileIndex;

            if (item.itemName === 'agencyDisclosureForm') {
              file = thisRef.state.agencyDisclosureForm;
              returnObject.agencyDisclosureForm = item.fileName;
            } else {
              fileIndex = item.itemName.slice(-1);
              file = thisRef.state.contractOrLeaseForms[fileIndex];
              returnObject.contractOrLeaseForms.push(item.fileName);
            }

            Object(__WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__["a" /* default */])({
              file: file,
              url: item.signedURL,
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;
                thisRef.setState({
                  formSubmissionBegun: true,
                  uplodingFileProgress: Math.floor(loadedPercent),
                  uplodingFileText: "Now uploading file ".concat(uploadItemIndex + 1, " of ").concat(uploadItemsNum, "..."),
                  isUploadingFile: true
                });
              }
            }).then(function (res) {
              var status = "".concat(res.status);
              var okRegex = /^[2][0-9][0-9]$/;

              if (!okRegex.test(status)) {
                _this.setState({
                  submittingFormToServer: false,
                  isUploadingFile: false
                });

                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar('There was an error uploading your files. Please try again shortly.');

                return;
              }

              return recursiveHelper(items, uploadItemIndex + 1, uploadItemsNum, returnObject, thisRef);
            }).catch(function (err) {
              _this.setState({
                submittingFormToServer: false,
                isUploadingFile: false
              });

              _this.props.setFormSubmitted(false);

              _this.props.openRequestErrorSnackbar();
            });
          };

          recursiveUploads(items, returnObject, _assertThisInitialized(_this));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0,
      // not submitted
      permanentDeductionSubtractions: 0,
      // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      uplodingFileProgress: 0,
      isUploadingFile: false,
      uplodingFileText: '',
      filesUploadedSuccessfully: null,
      formSubmissionBegun: false,
      submittingFormToServer: false
    };
    return _this;
  }

  _createClass(SubmitDealFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          rest = _objectWithoutProperties(_props, ["userUUID"]);

      var _state = this.state,
          agencyDisclosureForm = _state.agencyDisclosureForm,
          contractOrLeaseForms = _state.contractOrLeaseForms;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: dealFormQuery,
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }));

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 449
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$dealForm = data.dealForm,
            agent = _data$dealForm.agent,
            agents = _data$dealForm.agents,
            formSelectItems = _data$dealForm.formSelectItems;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__["a" /* default */], _extends({
          paymentsTotal: "".concat(_this2.state.paymentsTotal),
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          agent: agent,
          agents: agents.filter(function (agent) {
            return agent.uuid !== uuid;
          }),
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          setAgencyDisclosureForm: _this2.setAgencyDisclosureForm,
          setContractOrLeaseForms: _this2.setContractOrLeaseForms,
          agencyDisclosureForm: agencyDisclosureForm,
          contractOrLeaseForms: contractOrLeaseForms,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          uplodingFileProgress: _this2.state.uplodingFileProgress,
          isUploadingFile: _this2.state.isUploadingFile,
          uplodingFileText: _this2.state.uplodingFileText,
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany,
          deductionAmountChangeHandler: _this2.deductionAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          subtractDeductionValueFromState: _this2.subtractDeductionValueFromState,
          agentPaymentTypeIsACH: _this2.state.agentPaymentTypeIsACH,
          onAgentPaymentTypeChange: _this2.onAgentPaymentTypeChange
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          }
        }));
      });
    }
  }]);

  return SubmitDealFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (SubmitDealFormContainer);

/***/ }),

/***/ "./containers/ViewDealForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__ = __webpack_require__("./components/forms/SubmitDealForm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__ = __webpack_require__("./effects/deals/getDealUploadsSignedURLS.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__ = __webpack_require__("./effects/uploadFile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_deals_updateDeal__ = __webpack_require__("./effects/deals/updateDeal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__constants_userTypes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/containers/ViewDealForm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query viewDealForm($uuid: String!) {\n    viewDealForm(uuid: $uuid) {\n      formSelectItems\n      agents {\n        firstName\n        lastName\n        uuid\n      }\n      deal {\n        dealID\n        date\n        agentName\n        otherAgents {\n          agentID\n          agentName\n        }\n        agentType\n        leadSource\n        dealType\n        propertyAddress\n        state\n        city\n        apartmentNumber\n        managementOrCobrokeCompany\n        price\n        clientName\n        clientEmail\n        paymentItems {\n          paymentType\n          checkOrTransactionNumber\n          amount\n        }\n        paymentsTotal\n        deductionItems {\n          deductionType\n          description\n          amount\n        }\n        deductionsTotal\n        total\n        agentNotes\n        agencyDisclosureForm\n        contractOrLeaseForms\n        agentPaymentType\n        ACHAccountNumber\n        ACHAccountBankRoutingNumber\n        fundsPaidBy\n        alreadyTurnedFundsIn\n        shouldSendApprovalTextMessageNotification\n        status\n        bonusPercentageAddedByAdmin\n        netAgentCommission\n        netCompanyCommission\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Loader = __WEBPACK_IMPORTED_MODULE_4_react_spinners__["BounceLoader"];
var viewDealFormQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var ViewDealFormContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewDealFormContainer, _Component);

  function ViewDealFormContainer(props) {
    var _this;

    _classCallCheck(this, ViewDealFormContainer);

    _this = _possibleConstructorReturn(this, (ViewDealFormContainer.__proto__ || Object.getPrototypeOf(ViewDealFormContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "uploadItemsNum", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "itemsUploaded", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "paymentAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value) {
        _value = Number(_value);

        var paymentsTotal = _this.getTotalPaymentsAmount({
          id: id,
          value: _value || 0
        });

        _this.setState({
          paymentAmountItems: _objectSpread({}, _this.state.paymentAmountItems, _defineProperty({}, id, _value || 0)),
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deductionAmountChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, _value2) {
        _value2 = Number(_value2);

        var deductionsTotal = _this.getTotalDeductionsAmount({
          id: id,
          value: _value2 || 0
        });

        _this.setState({
          deductionAmountItems: _objectSpread({}, _this.state.deductionAmountItems, _defineProperty({}, id, _value2 || 0)),
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalPaymentsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state = _this.state,
            paymentAmountItems = _this$state.paymentAmountItems,
            permanentPaymentSubtractions = _this$state.permanentPaymentSubtractions;
        Object.keys(paymentAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += paymentAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentPaymentSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTotalDeductionsAmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newItem) {
        var total = 0;
        var _this$state2 = _this.state,
            deductionAmountItems = _this$state2.deductionAmountItems,
            permanentDeductionSubtractions = _this$state2.permanentDeductionSubtractions;
        Object.keys(deductionAmountItems).filter(function (itemID) {
          return newItem ? itemID !== newItem.id : true;
        }).forEach(function (key) {
          total += deductionAmountItems[key];
        });
        if (newItem && newItem.value) total += newItem.value;
        return total - permanentDeductionSubtractions;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractPaymentValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(payment) {
        var paymentsTotal = _this.getTotalPaymentsAmount() - payment;

        _this.setState({
          permanentPaymentSubtractions: _this.state.permanentPaymentSubtractions + payment,
          paymentsTotal: paymentsTotal,
          total: paymentsTotal - _this.state.deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "subtractDeductionValueFromState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deduction) {
        var deductionsTotal = _this.getTotalDeductionsAmount() - deduction;

        _this.setState({
          permanentDeductionSubtractions: _this.state.permanentDeductionSubtractions + deduction,
          deductionsTotal: deductionsTotal,
          total: _this.state.paymentsTotal - deductionsTotal
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAgencyDisclosureForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {
        _this.setState({
          agencyDisclosureForm: file
        });

        if (!file) {
          var uploadBtn = document.getElementById('agencyDisclosureUploadForm');

          if (uploadBtn) {
            uploadBtn.value = null;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setContractOrLeaseForms", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(filesObject) {
        if (Array.isArray(filesObject)) {
          _this.setState({
            contractOrLeaseForms: filesObject
          });

          if (filesObject.length === 0) {
            var uploadBtn = document.getElementById('contractOrLeaseItemsUploadForm');

            if (uploadBtn) {
              uploadBtn.value = null;
            }
          }

          return;
        }

        var fileArray = Object.keys(filesObject).map(function (key) {
          return filesObject[key];
        });

        _this.setState({
          contractOrLeaseForms: fileArray
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMgmtOrCobrokeCompanyChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          newMgmtOrCobrokeCompany: event.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleChoosingMgmtCoBrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var choosingMgmtCoBrokeCompany = _this.state.choosingMgmtCoBrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: typeof bool === 'boolean' ? bool : !choosingMgmtCoBrokeCompany,
          newMgmtOrCobrokeCompany: ''
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setHasSetNewMgmtOrCobrokeCompany", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(bool) {
        var _this$state3 = _this.state,
            addedManagementCompanies = _this$state3.addedManagementCompanies,
            newMgmtOrCobrokeCompany = _this$state3.newMgmtOrCobrokeCompany;

        _this.setState({
          choosingMgmtCoBrokeCompany: false,
          hasSetNewMgmtOrCobrokeCompany: true,
          newMgmtOrCobrokeCompany: '',
          addedManagementCompanies: _toConsumableArray(addedManagementCompanies).concat([Object(__WEBPACK_IMPORTED_MODULE_9__utils_stringUtils__["a" /* capitalize */])(newMgmtOrCobrokeCompany.trim())])
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setInitialContainerState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var paymentsTotal = _ref.paymentsTotal,
            deductionsTotal = _ref.deductionsTotal,
            total = _ref.total;

        _this.setState({
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(values) {
        _this.props.setFormSubmitted();

        var _this$state4 = _this.state,
            contractOrLeaseForms = _this$state4.contractOrLeaseForms,
            agencyDisclosureForm = _this$state4.agencyDisclosureForm,
            addedManagementCompanies = _this$state4.addedManagementCompanies,
            hasSetNewMgmtOrCobrokeCompany = _this$state4.hasSetNewMgmtOrCobrokeCompany,
            paymentsTotal = _this$state4.paymentsTotal,
            deductionsTotal = _this$state4.deductionsTotal,
            total = _this$state4.total;

        var returnObject = _objectSpread({}, values, {
          addedManagementCompanies: addedManagementCompanies,
          paymentsTotal: paymentsTotal,
          deductionsTotal: deductionsTotal,
          total: total,
          agencyDisclosureForm: null,
          contractOrLeaseForms: [],
          dealID: _this.props.dealID
        });

        delete returnObject.contractOrLeaseItems;
        delete returnObject.deductionsSubtotal;
        delete returnObject.paymentsSubtotal;
        delete returnObject.financialsTotal;
        delete returnObject.date;
        delete returnObject.agent;
        delete returnObject.agentType;
        delete returnObject.state;
        delete returnObject.otherAgents;

        if (_this.props.userRole !== __WEBPACK_IMPORTED_MODULE_10__constants_userTypes__["admin"] && _this.props.userRole !== __WEBPACK_IMPORTED_MODULE_10__constants_userTypes__["superAdmin"]) {
          delete returnObject.bonusPercentageAddedByAdmin;
        }

        returnObject.price = Number(returnObject.price);
        returnObject.paymentItems = returnObject.paymentItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        returnObject.deductionItems = returnObject.deductionItems.map(function (item) {
          return _objectSpread({}, item, {
            amount: Number(item.amount)
          });
        });
        var uploadItems = [];

        if (agencyDisclosureForm) {
          uploadItems.push({
            itemName: 'agencyDisclosureForm',
            fileName: agencyDisclosureForm.name,
            fileType: agencyDisclosureForm.type
          });
        }

        if (contractOrLeaseForms && contractOrLeaseForms.length) {
          contractOrLeaseForms.forEach(function (file, i) {
            uploadItems.push({
              itemName: "contractOrLeaseForm".concat(i),
              fileName: file.name,
              fileType: file.type
            });
          });
        }

        if (!uploadItems.length) {
          _this.setState({
            submittingFormToServer: true
          });

          Object(__WEBPACK_IMPORTED_MODULE_8__effects_deals_updateDeal__["a" /* default */])(returnObject).then(function (res) {
            var failed = false;

            if (res.otherError) {
              _this.props.openRequestErrorSnackbar(res.otherError);

              failed = true;
            }

            if (res.userErrors.length) {
              failed = true;
            }

            if (!failed) {
              _this.props.setDealSuccessfullySubmitted(res.deal);
            }

            _this.setState({
              submittingFormToServer: false
            });

            _this.props.setFormSubmitted(false);
          }).catch(function (err) {
            _this.props.setFormSubmitted(false);

            _this.props.openRequestErrorSnackbar();
          });
          return;
        }

        Object(__WEBPACK_IMPORTED_MODULE_6__effects_deals_getDealUploadsSignedURLS__["a" /* default */])(uploadItems).then(function (response) {
          if (response.error) {
            _this.props.openRequestErrorSnackbar(response.error);

            return;
          }

          var errors = [];
          var items = response.items;
          returnObject.dealID = _this.props.dealID;
          items.forEach(function (item) {
            if (item.error) errors.push(item.error);
          });

          if (errors.length) {
            _this.props.openRequestErrorSnackbar(errors[0]);

            return;
          }

          _this.uploadItemsNum = items.length;

          var recursiveUploads = function recursiveUploads(items, returnObject, thisRef) {
            var uploadItemsNum = items.length;
            var uploadItemIndex = 0;
            recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef);
          };

          var recursiveHelper = function recursiveHelper(items, uploadItemIndex, uploadItemsNum, returnObject, thisRef) {
            if (uploadItemIndex >= items.length) {
              thisRef.setState({
                isUploadingFile: false,
                uplodingFileProgress: 0,
                filesUploadedSuccessfully: true,
                submittingFormToServer: true
              });
              Object(__WEBPACK_IMPORTED_MODULE_8__effects_deals_updateDeal__["a" /* default */])(returnObject).then(function (res) {
                var failed = false;

                if (res.otherError) {
                  _this.props.openRequestErrorSnackbar(res.otherError);

                  failed = true;
                }

                if (res.userErrors.length) {
                  failed = true;
                }

                if (!failed) {
                  _this.props.setDealSuccessfullySubmitted(res.deal);
                }

                _this.props.setFormSubmitted(false);
              }).catch(function (err) {
                _this.props.setFormSubmitted(false);

                _this.props.openRequestErrorSnackbar();
              });
              return;
            }

            var item = items[uploadItemIndex];
            var file;
            var fileIndex;

            if (item.itemName === 'agencyDisclosureForm') {
              file = thisRef.state.agencyDisclosureForm;
              returnObject.agencyDisclosureForm = item.fileName;
            } else {
              fileIndex = item.itemName.slice(-1);
              file = thisRef.state.contractOrLeaseForms[fileIndex];
              returnObject.contractOrLeaseForms.push(item.fileName);
            }

            Object(__WEBPACK_IMPORTED_MODULE_7__effects_uploadFile__["a" /* default */])({
              file: file,
              url: item.signedURL,
              onUploadProgress: function onUploadProgress(progressEvent) {
                // Do whatever you want with the native progress event
                var loadedPercent = progressEvent.loaded / progressEvent.total * 100;
                thisRef.setState({
                  formSubmissionBegun: true,
                  uplodingFileProgress: Math.floor(loadedPercent),
                  uplodingFileText: "Now uploading file ".concat(uploadItemIndex + 1, " of ").concat(uploadItemsNum, "..."),
                  isUploadingFile: true
                });
              }
            }).then(function () {
              return recursiveHelper(items, uploadItemIndex + 1, uploadItemsNum, returnObject, thisRef);
            }).catch(function (err) {
              return _this.props.openRequestErrorSnackbar();
            });
          };

          recursiveUploads(items, returnObject, _assertThisInitialized(_this));
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSubmitFailure", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(errs, onSubmitError, formApi) {
        console.log(errs);
        console.log(onSubmitError);
        console.log(formApi.errors);
      }
    });
    _this.state = {
      paymentAmountItems: {},
      deductionAmountItems: {},
      paymentsTotal: 0,
      deductionsTotal: 0,
      total: 0,
      contractOrLeaseForms: [],
      agencyDisclosureForm: null,
      permanentPaymentSubtractions: 0,
      // not submitted
      permanentDeductionSubtractions: 0,
      // not submitted
      choosingMgmtCoBrokeCompany: false,
      newMgmtOrCobrokeCompany: '',
      hasSetNewMgmtOrCobrokeCompany: false,
      addedManagementCompanies: [],
      uplodingFileProgress: 0,
      isUploadingFile: false,
      uplodingFileText: '',
      filesUploadedSuccessfully: null,
      formSubmissionBegun: false,
      submittingFormToServer: false,
      dealBonus: '0'
    };
    return _this;
  }

  _createClass(ViewDealFormContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          uuid = _props.userUUID,
          dealID = _props.dealID,
          isEditingDeal = _props.isEditingDeal,
          isViewType = _props.isViewType,
          rest = _objectWithoutProperties(_props, ["userUUID", "dealID", "isEditingDeal", "isViewType"]);

      var _state = this.state,
          agencyDisclosureForm = _state.agencyDisclosureForm,
          contractOrLeaseForms = _state.contractOrLeaseForms;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: viewDealFormQuery,
        variables: {
          uuid: dealID
        },
        fetchPolicy: "cache-and-network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 503
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 504
          }
        }));

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 511
            }
          }, "We're sorry. There was an error processing your request.");
        }

        var _data$viewDealForm = data.viewDealForm,
            deal = _data$viewDealForm.deal,
            agentItems = _data$viewDealForm.agents,
            formSelectItems = _data$viewDealForm.formSelectItems;
        var agents = agentItems || [];
        var submittedDeal = deal;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_forms_SubmitDealForm__["a" /* default */], _extends({
          setInitialContainerState: _this2.setInitialContainerState,
          paymentsTotal: "".concat(_this2.state.paymentsTotal),
          deductionsTotal: "".concat(_this2.state.deductionsTotal),
          total: _this2.state.total,
          submittedDeal: submittedDeal,
          agents: agents.filter(function (agent) {
            return uuid ? agent.uuid !== uuid : agent;
          }),
          managementCobrokeCompanyItems: formSelectItems || [],
          onSubmit: _this2.onSubmit,
          setAgencyDisclosureForm: _this2.setAgencyDisclosureForm,
          setContractOrLeaseForms: _this2.setContractOrLeaseForms,
          agencyDisclosureForm: agencyDisclosureForm,
          contractOrLeaseForms: contractOrLeaseForms,
          paymentAmountChangeHandler: _this2.paymentAmountChangeHandler,
          addedManagementCompanies: _this2.state.addedManagementCompanies,
          newMgmtOrCobrokeCompany: _this2.state.newMgmtOrCobrokeCompany,
          uplodingFileProgress: _this2.state.uplodingFileProgress,
          isUploadingFile: _this2.state.isUploadingFile,
          uplodingFileText: _this2.state.uplodingFileText,
          formSubmissionBegun: _this2.state.formSubmissionBegun,
          submittingFormToServer: _this2.state.submittingFormToServer || _this2.props.submittingRequestToServer,
          isEditingDeal: isEditingDeal,
          isViewType: isViewType,
          userRole: _this2.props.userRole,
          onBonusChange: _this2.props.onBonusChange,
          dealBonus: _this2.props.dealBonus,
          resetDealBonus: _this2.props.resetDealBonus,
          setHasSetNewMgmtOrCobrokeCompany: _this2.setHasSetNewMgmtOrCobrokeCompany,
          toggleChoosingMgmtCoBrokeCompany: _this2.toggleChoosingMgmtCoBrokeCompany,
          handleMgmtOrCobrokeCompanyChange: _this2.handleMgmtOrCobrokeCompanyChange,
          choosingMgmtCoBrokeCompany: _this2.state.choosingMgmtCoBrokeCompany,
          deductionAmountChangeHandler: _this2.deductionAmountChangeHandler,
          subtractPaymentValueFromState: _this2.subtractPaymentValueFromState,
          subtractDeductionValueFromState: _this2.subtractDeductionValueFromState
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 528
          }
        }));
      });
    }
  }]);

  return ViewDealFormContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["a"] = (ViewDealFormContainer);

/***/ }),

/***/ "./effects/deals/acceptDeal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation acceptDeal($input: AcceptDealInput!) {\n    acceptDeal(input: $input) {\n      deal {\n        dealID\n        date\n        agentName\n        agentType\n        leadSource\n        dealType\n        propertyAddress\n        state\n        city\n        apartmentNumber\n        managementOrCobrokeCompany\n        price\n        clientName\n        clientEmail\n        paymentsTotal\n        deductionsTotal\n        total\n        agentNotes\n        status\n        bonusPercentageAddedByAdmin\n        netAgentCommission\n        netCompanyCommission\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var acceptDeal = function acceptDeal(dealID, bonusPercentageAddedByAdmin) {
  var res;
  var variables = {
    input: {
      uuid: dealID,
      bonusPercentageAddedByAdmin: bonusPercentageAddedByAdmin
    }
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.acceptDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (acceptDeal);

/***/ }),

/***/ "./effects/deals/deleteDeal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation deleteDeal($uuid: String!) {\n    deleteDeal(uuid: $uuid) {\n      dealID\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var deleteDeal = function deleteDeal(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    dealID: null,
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.deleteDeal;
    var dealID = data.dealID,
        error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.dealID = dealID;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (deleteDeal);

/***/ }),

/***/ "./effects/deals/getDealUploadsSignedURLS.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation getDealFileUploadsSignedURLS($input: [GetSignedURLSInput!]!) {\n    getDealFileUploadsSignedURLS(input: $input) {\n      dealID\n      items {\n        itemName\n        fileName\n        signedURL\n        uuid\n        error\n      }\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var getDealUploadsSignedURLS = function getDealUploadsSignedURLS(values) {
  var res;
  var error;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    dealID: null,
    items: null,
    error: error
  };
  return client.request(query, variables).then(function (result) {
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

/* harmony default export */ __webpack_exports__["a"] = (getDealUploadsSignedURLS);

/***/ }),

/***/ "./effects/deals/submitDeal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation submitDeal($input: SubmitDealInput!) {\n    submitDeal(input: $input) {\n      deal {\n        dealID\n        date\n        dealType\n        clientName\n        clientEmail\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n        status\n        total\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var submitDeal = function submitDeal(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.submitDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (submitDeal);

/***/ }),

/***/ "./effects/deals/updateDeal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation updateDeal($input: UpdateDealInput!) {\n    updateDeal(input: $input) {\n      deal {\n        dealID\n        date\n        dealType\n        clientName\n        clientEmail\n        propertyAddress\n        city\n        managementOrCobrokeCompany\n        price\n        status\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var updateDeal = function updateDeal(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    deal: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.updateDeal;
    var deal = data.deal,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.deal = deal;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (updateDeal);

/***/ }),

/***/ "./effects/getProfilePicSignedURL.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation getProfilePicSignedURL($input: getProfilePicSignedURLInput!) {\n    getProfilePicSignedURL(input: $input) {\n      item {\n        signedURL\n        fileName\n        error\n      }\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var getProfilePicSignedURL = function getProfilePicSignedURL(value) {
  var res;
  var error;
  var variables = {
    input: value
  };
  var finalResponseObj = {
    signedURL: null,
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.getProfilePicSignedURL;
    var item = data.item,
        error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    if (!finalResponseObj.error) {
      finalResponseObj.item = item;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getProfilePicSignedURL);

/***/ }),

/***/ "./effects/uploadFile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var uploadFile = function uploadFile(_ref) {
  var url = _ref.url,
      file = _ref.file,
      onUploadProgress = _ref.onUploadProgress,
      httpVerb = _ref.httpVerb;
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a[httpVerb || 'put'](url, file, {
    headers: {
      'Content-Type': file.type
    },
    onUploadProgress: onUploadProgress
  });
};

/* harmony default export */ __webpack_exports__["a"] = (uploadFile);

/***/ }),

/***/ "./effects/users/deleteAgent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation deleteAgent($uuid: String!) {\n    deleteAgent(uuid: $uuid) {\n      error\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var deleteAgent = function deleteAgent(uuid) {
  var res;
  var variables = {
    uuid: uuid
  };
  var finalResponseObj = {
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.deleteAgent;
    var error = data.error;

    if (error) {
      finalResponseObj.error = error;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (deleteAgent);

/***/ }),

/***/ "./effects/users/editAgentPassword.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation editAgentPassword($input: EditPasswordInput!) {\n    editAgentPassword(input: $input) {\n      userErrors {\n        field\n        message\n      }\n     otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var editAgentPassword = function editAgentPassword(values) {
  var res;
  var error;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    error: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.editAgentPassword;

    if (!data.wasSuccessful) {
      finalResponseObj.error = data.userErrors.length ? {
        message: data.userErrors[0].message,
        field: data.userErrors[0].field
      } : data.otherError;
    }

    if (error) {
      finalResponseObj.error = error;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (editAgentPassword);

/***/ }),

/***/ "./effects/users/setAgentProfilePic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n    mutation setAgentProfilePic($input: SetAgentProfilePicInput!) {\n      setAgentProfilePic(input: $input) {\n        url\n        wasSuccessful\n        otherError\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var setAgentProfilePic = function setAgentProfilePic(agentID, fileName) {
  var res;
  var response;
  var error;
  var variables = {
    input: {
      agentID: agentID,
      fileName: fileName
    }
  };
  var finalResponseObj = {
    url: null,
    otherError: null,
    userErrors: null
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    var _res = res,
        data = _res.setAgentProfilePic;
    var otherError = data.otherError,
        userErrors = data.userErrors;

    if (!data.wasSuccessful) {
      if (otherError) finalResponseObj.error = otherError;
      if (userErrors) finalResponseObj.userErrors = userErrors;
    } else {
      finalResponseObj.url = data.url;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (setAgentProfilePic);

/***/ }),

/***/ "./effects/users/updateAgent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


var query = "\n  mutation updateAgent($input: UpdateAgentInput!) {\n    updateAgent(input: $input) {\n      agent {\n        firstName\n        lastName\n        role\n        email\n        role\n        agent {\n          profilePicURL\n          mobileNumber\n          officeNumber\n          branch\n          profileDescription\n          title\n          facebook\n          twitter\n          instagram\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n      otherError\n    }\n  }\n";
var client = new __WEBPACK_IMPORTED_MODULE_0_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_1__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

var updateAgent = function updateAgent(values) {
  var res;
  var variables = {
    input: values
  };
  var finalResponseObj = {
    agent: null,
    otherError: null,
    userErrors: []
  };
  return client.request(query, variables).then(function (result) {
    res = result;
    console.log(res);
    var _res = res,
        data = _res.updateAgent;
    var agent = data.agent,
        otherError = data.otherError,
        userErrors = data.userErrors;

    if (userErrors && userErrors.length) {
      finalResponseObj.userErrors = userErrors;
    }

    if (otherError) {
      finalResponseObj.otherError = otherError;
    }

    if (!finalResponseObj.error && !finalResponseObj.userErrors.length) {
      finalResponseObj.agent = agent;
    }

    return finalResponseObj;
  }).catch(function (err) {
    console.log(err);
    finalResponseObj.error = 'Error reaching the server';
    return finalResponseObj;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (updateAgent);

/***/ }),

/***/ "./globalStyles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  .app-body-class {\n    overflow: hidden;\n  }\n\n  body:not(.app-body-class) #__next {\n    height: 100% !important;\n  }\n\n  body:not(.app-body-class) #__next > div {\n    height: 100% !important;\n  }\n\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n  \n";
/* harmony default export */ __webpack_exports__["a"] = (globalStyles);

/***/ }),

/***/ "./lib/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss__ = __webpack_require__("react-jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__ = __webpack_require__("material-ui/colors/red");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__("material-ui/colors/blue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__("polished");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_polished__);
/* eslint-disable no-underscore-dangle */




 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["lighten"])(0.2, '#272A2E'),
      main: '#272A2E',
      dark: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["darken"])(0.2, '#272A2E')
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[700]
    }
  },
  custom: {
    submitBlue: {
      transparentLightBackground: 'rgba(30,150,243,.2)',
      light: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a[700]
    },
    dangerRed: {
      transparentLightBackground: 'rgba(244,67,54,.2)',
      light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default.a[700]
    }
  },
  frontEnd: {
    typography: {
      fontFamily: {
        serif: 'Alegreya, serif',
        sansSerif: "'Alegreya Sans', sans-serif",
        sansSerif2: 'Roboto, sans-serif'
      }
    },
    colors: {
      primary: {
        main: '#D93F2A',
        dark: Object(__WEBPACK_IMPORTED_MODULE_4_polished__["darken"])(0.1, '#D93F2A')
      }
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_react_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_websiteURL__ = __webpack_require__("./constants/websiteURL.js");





var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser || !global.fetch) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
      uri:
      /* `${websiteURL}`, */
      'http://localhost/api/graphql',
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      headers: {
        Accept: 'application/json'
      }
    }),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initApollo__ = __webpack_require__("./lib/initApollo.js");

var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/lib/withData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





 // Gets the display name of a JSX component for dev tools

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  // Evaluate the composed component's getInitialProps()
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  composedInitialProps = _context.sent;

                case 5:
                  // Run all GraphQL queries in the component tree
                  // and extract the resulting data
                  apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])();
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({
                    ctx: ctx
                  }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  })), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    },
                    client: apollo
                  });

                case 9:
                  _context.next = 13;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](6);

                case 13:
                  if (!process.browser) {
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind();
                  } // Extract query data from the Apollo store


                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState
                  }, composedInitialProps));

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 11]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));
      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
          client: this.apollo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })));
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(getComponentDisplayName(ComposedComponent), ")")
  }), Object.defineProperty(_class, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
    }
  }), _temp;
});

/***/ }),

/***/ "./lib/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__ = __webpack_require__("material-ui/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./lib/getPageContext.js");
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/lib/withRoot.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));
      Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: null
      });
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),

/***/ "./models/UIStore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__);

var defaultState = {
  fullScreenLoaderOn: false,
  fullScreenLoaderText: ''
};
var Store = __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].model('UI', {
  fullScreenLoaderOn: __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].boolean,
  fullScreenLoaderText: __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].string
}).actions(function (self) {
  return {
    toggleFullScreenLoader: function toggleFullScreenLoader(state, text) {
      if (typeof text === 'string') self.fullScreenLoaderText = text;
      self.fullScreenLoaderOn = typeof state === 'boolean' ? state : !self.fullScreenLoaderOn;
    },
    setfullScreenLoaderText: function setfullScreenLoaderText(text) {
      if (typeof text !== 'string' && !text) return;
      self.fullScreenLoaderText = text;
    }
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Store.create(defaultState));

/***/ }),

/***/ "./models/UserStore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userEffects__ = __webpack_require__("./models/UserStore/userEffects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__ = __webpack_require__("./utils/jwtUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_getCookie__ = __webpack_require__("./utils/getCookie.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var defaultState = {
  userRole: '',
  isLoggedIn: false,
  uuid: '',
  isAdminOwner: false
};
var userRoles = [__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('super-admin'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('admin'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('agent'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('customer'), __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].literal('')];
var UserStore = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].model('User', {
  userRole: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].union.apply(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"], userRoles),
  isLoggedIn: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].boolean,
  uuid: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].string,
  serverJWTData: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].frozen, null),
  isAdminOwner: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].boolean
}).actions(function (self) {
  return {
    setUser: function setUser(userObject) {
      if (!userObject) return;
      self.isLoggedIn = true;
      self.userRole = userObject.role;
      self.uuid = userObject.uuid;
      self.isAdminOwner = userObject.isAdminOwner || false;
    },
    unsetUser: function unsetUser() {
      self.isLoggedIn = false;
      self.userRole = '';
      self.uuid = '';
      self.isAdminOwner = false;
    },
    afterCreate: function () {
      var _afterCreate = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var JWTData, encodedJWTData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !self.isLoggedIn)) {
                  _context.next = 8;
                  break;
                }

                encodedJWTData = Object(__WEBPACK_IMPORTED_MODULE_5__utils_getCookie__["a" /* default */])('jwtData');

                if (encodedJWTData) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                try {
                  JWTData = Object(__WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__["a" /* JWTPaylodeDecode */])(encodedJWTData);
                } catch (err) {
                  console.log(err);
                }

                self.setUser(JWTData);
                _context.next = 12;
                break;

              case 8:
                if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a) {
                  _context.next = 12;
                  break;
                }

                if (self.serverJWTData) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                self.setUser(self.serverJWTData);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function afterCreate() {
        return _afterCreate.apply(this, arguments);
      };
    }()
  };
}).views(function (self) {
  return {};
});
var Store = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].compose('Store', UserStore, __WEBPACK_IMPORTED_MODULE_3__userEffects__["a" /* default */]);

function createStore(cookieJWTData) {
  if (!__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && cookieJWTData) {
    defaultState.serverJWTData = Object(__WEBPACK_IMPORTED_MODULE_4__utils_jwtUtils__["a" /* JWTPaylodeDecode */])(cookieJWTData);
  }

  return Store.create(defaultState);
}

/* harmony default export */ __webpack_exports__["a"] = (createStore);

/***/ }),

/***/ "./models/UserStore/userEffects/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signUpCustomer__ = __webpack_require__("./models/UserStore/userEffects/signUpCustomer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logoutUser__ = __webpack_require__("./models/UserStore/userEffects/logoutUser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginUser__ = __webpack_require__("./models/UserStore/userEffects/loginUser.js");



 // import debounce from 'debounce';

var UserEffects = __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].model({}).actions(function (self) {
  return {
    signUpCustomer: __WEBPACK_IMPORTED_MODULE_1__signUpCustomer__["a" /* default */].bind(null, self),
    logoutUser: __WEBPACK_IMPORTED_MODULE_2__logoutUser__["a" /* default */].bind(null, self),
    loginUser: __WEBPACK_IMPORTED_MODULE_3__loginUser__["a" /* default */].bind(null, self)
  };
});
/* harmony default export */ __webpack_exports__["a"] = (UserEffects);

/***/ }),

/***/ "./models/UserStore/userEffects/loginUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var query = "\n    mutation loginUser($input: LoginUserInput!) {\n      loginUser(input: $input) {\n        user {\n          uuid\n          role\n          admin {\n            isAdminOwner\n          }\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var client = new __WEBPACK_IMPORTED_MODULE_1_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

function loginUser(_x, _x2) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self, values) {
    var variables, finalResponseObj;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = {
              input: values
            };
            finalResponseObj = {
              user: null,
              error: null
            };
            return _context.abrupt("return", client.request(query, variables).then(function (res) {
              var data = res.loginUser;
              var user = data.user;

              if (!data.wasSuccessful) {
                finalResponseObj.error = data.userErrors.length ? data.userErrors[0].message : data.otherError;
              }

              if (user) {
                finalResponseObj.user = user;

                if (user.admin && user.admin.isAdminOwner) {
                  user.isAdminOwner = true;
                }
              }

              if (!finalResponseObj.error) {
                self.setUser(user);
              }

              return finalResponseObj;
            }).catch(function (err) {
              console.log(err);
              finalResponseObj.error = 'Error reaching the server';
              return finalResponseObj;
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loginUser.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["a"] = (loginUser);

/***/ }),

/***/ "./models/UserStore/userEffects/logoutUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var query = "\n    mutation logoutUser {\n      logoutUser {\n        wasSuccessful\n        userError\n      }\n    }\n  ";
var client = new __WEBPACK_IMPORTED_MODULE_1_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

function logoutUser(_x) {
  return _logoutUser.apply(this, arguments);
}

function _logoutUser() {
  _logoutUser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self) {
    var res, response, error, finalResponseObj, _res, data;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            finalResponseObj = {
              response: response,
              error: error
            };
            _context.prev = 1;
            _context.next = 4;
            return client.request(query);

          case 4:
            res = _context.sent;
            _context.next = 12;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            finalResponseObj.error = 'Error reaching the server';
            return _context.abrupt("return", finalResponseObj);

          case 12:
            _res = res, data = _res.logoutUser;

            if (!data.wasSuccessful) {
              finalResponseObj.error = data.userError;
            }

            if (data.wasSuccessful) {
              self.unsetUser();
            }

            return _context.abrupt("return", finalResponseObj);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));
  return _logoutUser.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["a"] = (logoutUser);

/***/ }),

/***/ "./models/UserStore/userEffects/signUpCustomer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request__ = __webpack_require__("graphql-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__ = __webpack_require__("./constants/graphQLEndpoint.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var query = "\n    mutation registerCustomer($input: RegisterCustomerInput!) {\n      registerCustomer(input: $input) {\n        customer {\n          uuid\n          role\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var client = new __WEBPACK_IMPORTED_MODULE_1_graphql_request__["GraphQLClient"](__WEBPACK_IMPORTED_MODULE_2__constants_graphQLEndpoint__["a" /* default */], {
  credentials: 'same-origin'
});

function signUpCustomer(_x, _x2) {
  return _signUpCustomer.apply(this, arguments);
}

function _signUpCustomer() {
  _signUpCustomer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(self, values) {
    var response, error, variables, finalResponseObj;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = {
              input: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
              }
            };
            finalResponseObj = {
              response: response,
              error: error
            };
            return _context.abrupt("return", client.request(query, variables).then(function (res) {
              var data = res.registerCustomer;
              var customer = data.customer;

              if (!data.wasSuccessful) {
                finalResponseObj.error = data.userErrors.length ? data.userErrors[0].message : data.otherError;
              }

              if (!finalResponseObj.error) {
                self.setUser(customer);
              }

              return finalResponseObj;
            }).catch(function (err) {
              console.log(err);
              finalResponseObj.error = 'Error reaching the server';
              return finalResponseObj;
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _signUpCustomer.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["a"] = (signUpCustomer);

/***/ }),

/***/ "./models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIStore__ = __webpack_require__("./models/UIStore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserStore__ = __webpack_require__("./models/UserStore/index.js");


var emittedStore;

function createStore() {
  var cookieJWTData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    UIStore: __WEBPACK_IMPORTED_MODULE_0__UIStore__["a" /* default */],
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: Object(__WEBPACK_IMPORTED_MODULE_1__UserStore__["a" /* default */])(cookieJWTData)
  };
}

function initStore(isServer) {
  var cookieJWTData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    emittedStore = createStore(cookieJWTData);
    return emittedStore;
  }

  if (!emittedStore) {
    emittedStore = createStore(cookieJWTData);
  }

  return emittedStore;
}

/***/ }),

/***/ "./pages/app/profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser__ = __webpack_require__("is-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_spinners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models__ = __webpack_require__("./models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_Profile__ = __webpack_require__("./containers/Profile.js");
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/pages/app/profile.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query agent($uuid: String!) {\n    agent(uuid: $uuid) {\n      firstName\n      lastName\n      role\n      email\n      agent {\n        profilePicURL\n        mobileNumber\n        officeNumber\n        branch\n        profileDescription\n        title\n        facebook\n        twitter\n        instagram\n      }\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Loader = __WEBPACK_IMPORTED_MODULE_5_react_spinners__["DotLoader"];
var agentQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);

var Profile = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  _createClass(Profile, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer,
        profileID: query.id
      };
    }
  }]);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "setAgentDeleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          agentDeleted: true
        });
      }
    });
    _this.store = Object(__WEBPACK_IMPORTED_MODULE_7__models__["a" /* initStore */])(props.isServer, props.cookieJWTData);

    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !_this.store.UserStore.isLoggedIn) {
      __WEBPACK_IMPORTED_MODULE_9__routes__["Router"].pushRoute('home');
    } // for debugging only!!!


    if (__WEBPACK_IMPORTED_MODULE_2_is_browser___default.a && !window._appStore) window._appStore = _this.store;
    _this.state = {
      agentDeleted: false,
      userUUID: _this.store.UserStore.uuid
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var profileID = this.props.profileID;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {
        UserStore: this.store.UserStore,
        UIStore: this.store.UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["Query"], {
        query: agentQuery,
        variables: {
          uuid: profileID || this.state.userUUID
        },
        ssr: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '546px',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
          color: "#f44336",
          loading: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        })); // TODO: change the error message to a generic
        // 'error connecting to server' message

        if (error) {
          console.log(error);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          }, "We're sorry. There was an error processing your request.");
        }

        if (_this2.state.agentDeleted) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '1.2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "AGENT DELETED");
        if (!data || !data.agent) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '1.2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "AGENT NOT NOTFOUND");
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_Profile__["a" /* default */], {
          agent: data.agent,
          uuid: profileID || _this2.store.UserStore.uuid,
          currentUserRole: _this2.store.UserStore.userRole,
          currentUserUUID: _this2.store.UserStore.uuid,
          setAgentDeleted: _this2.setAgentDeleted,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        });
      }));
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8__lib_withData__["a" /* default */])(Profile));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('home', '/', '/').add('dashboard', '/app/dashbaord', 'app/dashboard').add('profile', '/app/profile', 'app/profile').add('deals', '/app/deals', 'app/deals').add('invoices', '/app/invoices', 'app/invoices').add('agents', '/app/agents', 'app/agents').add('create-listing', '/app/listing/new', '/app/listing/new').add('admin-dashboard', '/app/admin-area/dashboard', 'app/admin-area/dashboard').add('create-agent', '/app/admin-area/agents/create', 'app/admin-area/agents/create').add('view-agents', '/app/admin-area/agents/view', 'app/admin-area/agents/view').add('create-user', '/app/admin-area/customers/create', 'app/admin-area/customers/create').add('view-customers', '/app/admin-area/customers/view', 'app/admin-area/customers/view').add('create-admin', '/app/admin-area/admin/create', 'app/admin-area/admin/create').add('view-admin', '/app/admin-area/admin/view', 'app/admin-area/admin/view').add('view-deals', '/app/admin-area/deals/view', 'app/admin-area/deals/view')
/*
.add(
  'view-invoices',
  '/app/admin-area/invoices/view',
  'app/admin-area/invoices/view'
)
*/
.add('log-in', '/log-in').add('sign-up', '/sign-up').add('listings', '/listings').add('listing', '/listing').add('agent', '/agent').add('agents-front-end', '/agents', '/agents').add('new-developments', '/new-developments').add('apply', '/apply').add('about', '/about');
module.exports = routes;

/***/ }),

/***/ "./static/css/main.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./themeStyles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__("polished");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_polished__);

var primaryColor = '#272A2E';
var secondaryColor = Object(__WEBPACK_IMPORTED_MODULE_0_polished__["darken"])(0.1, primaryColor);
var accentColor = '#D0021B';
var tertiaryColor = Object(__WEBPACK_IMPORTED_MODULE_0_polished__["darken"])(0.1, '#fff');
var lightFontColor = '#fff';
var darkFontColor = 'rgb(50,50,50)';
var sansSerifFont = '"Alegreya Sans", sans-serif';
var serifFont = 'Alegreya, serif';
var theme = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  accentColor: accentColor,
  tertiaryColor: tertiaryColor,
  lightFontColor: lightFontColor,
  sansSerifFont: sansSerifFont,
  serifFont: serifFont,
  darkFontColor: darkFontColor
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "./utils/Math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return round; });
/* unused harmony export padNumToDecimalString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return padStringToDecimalString; });
var round = function round(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!number) return 0;
  return Number(number.toFixed(precision));
};
var padNumToDecimalString = function padNumToDecimalString(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var s = number.toString();
  if (s.indexOf('.') == -1) s += '.';

  while (s.length < s.indexOf('.') + (precision + 1)) {
    s += '0';
  }

  return s;
};
var padStringToDecimalString = function padStringToDecimalString(s) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3 - 1;
  if (s.indexOf('.') == -1) s += '.';

  while (s.length < s.indexOf('.') + (precision + 1)) {
    s += '0';
  }

  return s;
};

/***/ }),

/***/ "./utils/backEndTableUtils/DefaultVirtualTableCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/backEndTableUtils/DefaultVirtualTableCell.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var VirtualCell = function VirtualCell(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (VirtualCell);

/***/ }),

/***/ "./utils/backEndTableUtils/NoDataCellComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/backEndTableUtils/NoDataCellComponent.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var NoDataCellComponentBase = function NoDataCellComponentBase(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].NoDataCell, _extends({}, restProps, {
    className: classes.myNoDataCellComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'NoDataCellComponentBase'
})(NoDataCellComponentBase));

/***/ }),

/***/ "./utils/backEndTableUtils/SelectFilterCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__ = __webpack_require__("material-ui/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__ = __webpack_require__("./components/MaterialCustomSelectInput/index.js");
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/backEndTableUtils/SelectFilterCell.js";





var styles = function styles(theme) {
  return {
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    }
  };
};

var FilterCellBase = function FilterCellBase(_ref) {
  var filter = _ref.filter,
      onFilter = _ref.onFilter,
      classes = _ref.classes,
      selectInputItems = _ref.selectInputItems,
      fullWidth = _ref.fullWidth;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"], {
    className: classes.cell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MaterialCustomSelectInput__["a" /* default */], {
    className: classes.input,
    value: filter ? filter.value : '',
    onChange: function onChange(e) {
      return onFilter(e.target.value ? {
        value: e.target.value
      } : null);
    },
    placeholder: "Filter...",
    inputProps: {},
    fullWidth: fullWidth,
    selectInputItems: selectInputItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

var SelectFilterCell = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles, {
  name: 'SexFilterCell'
})(FilterCellBase);
/* harmony default export */ __webpack_exports__["a"] = (SelectFilterCell);

/***/ }),

/***/ "./utils/backEndTableUtils/TableComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/backEndTableUtils/TableComponent.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var TableComponentBase = function TableComponentBase(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Table, _extends({}, restProps, {
    className: classes.myTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableComponent'
})(TableComponentBase));

/***/ }),

/***/ "./utils/backEndTableUtils/TableContainerComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("@devexpress/dx-react-grid-material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/utils/backEndTableUtils/TableContainerComponent.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var styles = function styles(theme) {
  return {
    root: {
      boxShadow: theme.shadows[1],
      backgroundColor: '#fff',
      borderRadius: '3px',
      '& [class^="Pager-pager-"]': {
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    cell: {
      width: '100%',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    input: {
      width: '100%'
    },
    myTable: {},
    myTableContainer: {
      minHeight: '300px',
      height: 'calc(100vh - 310px) !important' // maxHeight: '800px',

    },
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var TableContainerBase = function TableContainerBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "className"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["VirtualTable"].Container, _extends({}, restProps, {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.myTableContainer, className),
    id: "myTableContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableContainerComponent'
})(TableContainerBase));

/***/ }),

/***/ "./utils/backEndTableUtils/tableSortingUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compareNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var compareDate = function compareDate(a, b) {
  var Date1;
  var Date2;

  if (typeof a === 'string') {
    Date1 = a;
  } else {
    Date1 = a;
  }

  if (typeof b === 'string') {
    Date2 = b;
  } else {
    Date2 = b;
  }

  if (Date1 === Date2) return 0;
  if (__WEBPACK_IMPORTED_MODULE_0_moment___default()(Date1).isBefore(Date2)) return -1;
  return 1;
};
var compareNumber = function compareNumber(a, b) {
  var Num1;
  var Num2;

  if (typeof a === 'string') {
    Num1 = a.startsWith('$') ? Number(a.substring(1).replace(/,/g, '')) : Number(a.replace(/,/g, ''));
  } else {
    Num1 = a;
  }

  if (typeof b === 'string') {
    Num2 = b.startsWith('$') ? Number(b.substring(1).replace(/,/g, '')) : Number(b.replace(/,/g, ''));
  } else {
    Num2 = b;
  }

  if (Num1 === Num2) return 0;
  if (Num1 > Num2) return 1;
  return -1;
};

/***/ }),

/***/ "./utils/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return states; });
/* unused harmony export countries */
/* unused harmony export countriesArrayWithCodes */
var states = ['Alaska', 'Alabama', 'Arkansas', 'American Samoa', 'Arizona', 'California', 'Colorado', 'Connecticut', 'District of Columbia', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Louisiana', 'Massachusetts', 'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'North Carolina', 'North Dakota', 'Nebraska', 'New Hampshire', 'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Virgin Islands', 'Vermont', 'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'];
var countries = ['United States', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao, People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];
var countriesArrayWithCodes = [{
  name: 'United States',
  code: 'US'
}, {
  name: 'Afghanistan',
  code: 'AF'
}, {
  name: 'land Islands',
  code: 'AX'
}, {
  name: 'Albania',
  code: 'AL'
}, {
  name: 'Algeria',
  code: 'DZ'
}, {
  name: 'American Samoa',
  code: 'AS'
}, {
  name: 'Andorra',
  code: 'AD'
}, {
  name: 'Angola',
  code: 'AO'
}, {
  name: 'Anguilla',
  code: 'AI'
}, {
  name: 'Antarctica',
  code: 'AQ'
}, {
  name: 'Antigua and Barbuda',
  code: 'AG'
}, {
  name: 'Argentina',
  code: 'AR'
}, {
  name: 'Armenia',
  code: 'AM'
}, {
  name: 'Aruba',
  code: 'AW'
}, {
  name: 'Australia',
  code: 'AU'
}, {
  name: 'Austria',
  code: 'AT'
}, {
  name: 'Azerbaijan',
  code: 'AZ'
}, {
  name: 'Bahamas',
  code: 'BS'
}, {
  name: 'Bahrain',
  code: 'BH'
}, {
  name: 'Bangladesh',
  code: 'BD'
}, {
  name: 'Barbados',
  code: 'BB'
}, {
  name: 'Belarus',
  code: 'BY'
}, {
  name: 'Belgium',
  code: 'BE'
}, {
  name: 'Belize',
  code: 'BZ'
}, {
  name: 'Benin',
  code: 'BJ'
}, {
  name: 'Bermuda',
  code: 'BM'
}, {
  name: 'Bhutan',
  code: 'BT'
}, {
  name: 'Bolivia',
  code: 'BO'
}, {
  name: 'Bosnia and Herzegovina',
  code: 'BA'
}, {
  name: 'Botswana',
  code: 'BW'
}, {
  name: 'Bouvet Island',
  code: 'BV'
}, {
  name: 'Brazil',
  code: 'BR'
}, {
  name: 'British Indian Ocean Territory',
  code: 'IO'
}, {
  name: 'Brunei Darussalam',
  code: 'BN'
}, {
  name: 'Bulgaria',
  code: 'BG'
}, {
  name: 'Burkina Faso',
  code: 'BF'
}, {
  name: 'Burundi',
  code: 'BI'
}, {
  name: 'Cambodia',
  code: 'KH'
}, {
  name: 'Cameroon',
  code: 'CM'
}, {
  name: 'Canada',
  code: 'CA'
}, {
  name: 'Cape Verde',
  code: 'CV'
}, {
  name: 'Cayman Islands',
  code: 'KY'
}, {
  name: 'Central African Republic',
  code: 'CF'
}, {
  name: 'Chad',
  code: 'TD'
}, {
  name: 'Chile',
  code: 'CL'
}, {
  name: 'China',
  code: 'CN'
}, {
  name: 'Christmas Island',
  code: 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  code: 'CC'
}, {
  name: 'Colombia',
  code: 'CO'
}, {
  name: 'Comoros',
  code: 'KM'
}, {
  name: 'Congo',
  code: 'CG'
}, {
  name: 'Congo, The Democratic Republic of the',
  code: 'CD'
}, {
  name: 'Cook Islands',
  code: 'CK'
}, {
  name: 'Costa Rica',
  code: 'CR'
}, {
  name: "Cote D'Ivoire",
  code: 'CI'
}, {
  name: 'Croatia',
  code: 'HR'
}, {
  name: 'Cuba',
  code: 'CU'
}, {
  name: 'Cyprus',
  code: 'CY'
}, {
  name: 'Czech Republic',
  code: 'CZ'
}, {
  name: 'Denmark',
  code: 'DK'
}, {
  name: 'Djibouti',
  code: 'DJ'
}, {
  name: 'Dominica',
  code: 'DM'
}, {
  name: 'Dominican Republic',
  code: 'DO'
}, {
  name: 'Ecuador',
  code: 'EC'
}, {
  name: 'Egypt',
  code: 'EG'
}, {
  name: 'El Salvador',
  code: 'SV'
}, {
  name: 'Equatorial Guinea',
  code: 'GQ'
}, {
  name: 'Eritrea',
  code: 'ER'
}, {
  name: 'Estonia',
  code: 'EE'
}, {
  name: 'Ethiopia',
  code: 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  code: 'FK'
}, {
  name: 'Faroe Islands',
  code: 'FO'
}, {
  name: 'Fiji',
  code: 'FJ'
}, {
  name: 'Finland',
  code: 'FI'
}, {
  name: 'France',
  code: 'FR'
}, {
  name: 'French Guiana',
  code: 'GF'
}, {
  name: 'French Polynesia',
  code: 'PF'
}, {
  name: 'French Southern Territories',
  code: 'TF'
}, {
  name: 'Gabon',
  code: 'GA'
}, {
  name: 'Gambia',
  code: 'GM'
}, {
  name: 'Georgia',
  code: 'GE'
}, {
  name: 'Germany',
  code: 'DE'
}, {
  name: 'Ghana',
  code: 'GH'
}, {
  name: 'Gibraltar',
  code: 'GI'
}, {
  name: 'Greece',
  code: 'GR'
}, {
  name: 'Greenland',
  code: 'GL'
}, {
  name: 'Grenada',
  code: 'GD'
}, {
  name: 'Guadeloupe',
  code: 'GP'
}, {
  name: 'Guam',
  code: 'GU'
}, {
  name: 'Guatemala',
  code: 'GT'
}, {
  name: 'Guernsey',
  code: 'GG'
}, {
  name: 'Guinea',
  code: 'GN'
}, {
  name: 'Guinea-Bissau',
  code: 'GW'
}, {
  name: 'Guyana',
  code: 'GY'
}, {
  name: 'Haiti',
  code: 'HT'
}, {
  name: 'Heard Island and Mcdonald Islands',
  code: 'HM'
}, {
  name: 'Holy See (Vatican City State)',
  code: 'VA'
}, {
  name: 'Honduras',
  code: 'HN'
}, {
  name: 'Hong Kong',
  code: 'HK'
}, {
  name: 'Hungary',
  code: 'HU'
}, {
  name: 'Iceland',
  code: 'IS'
}, {
  name: 'India',
  code: 'IN'
}, {
  name: 'Indonesia',
  code: 'ID'
}, {
  name: 'Iran, Islamic Republic Of',
  code: 'IR'
}, {
  name: 'Iraq',
  code: 'IQ'
}, {
  name: 'Ireland',
  code: 'IE'
}, {
  name: 'Isle of Man',
  code: 'IM'
}, {
  name: 'Israel',
  code: 'IL'
}, {
  name: 'Italy',
  code: 'IT'
}, {
  name: 'Jamaica',
  code: 'JM'
}, {
  name: 'Japan',
  code: 'JP'
}, {
  name: 'Jersey',
  code: 'JE'
}, {
  name: 'Jordan',
  code: 'JO'
}, {
  name: 'Kazakhstan',
  code: 'KZ'
}, {
  name: 'Kenya',
  code: 'KE'
}, {
  name: 'Kiribati',
  code: 'KI'
}, {
  name: "Korea, Democratic People'S Republic of",
  code: 'KP'
}, {
  name: 'Korea, Republic of',
  code: 'KR'
}, {
  name: 'Kuwait',
  code: 'KW'
}, {
  name: 'Kyrgyzstan',
  code: 'KG'
}, {
  name: "Lao People'S Democratic Republic",
  code: 'LA'
}, {
  name: 'Latvia',
  code: 'LV'
}, {
  name: 'Lebanon',
  code: 'LB'
}, {
  name: 'Lesotho',
  code: 'LS'
}, {
  name: 'Liberia',
  code: 'LR'
}, {
  name: 'Libyan Arab Jamahiriya',
  code: 'LY'
}, {
  name: 'Liechtenstein',
  code: 'LI'
}, {
  name: 'Lithuania',
  code: 'LT'
}, {
  name: 'Luxembourg',
  code: 'LU'
}, {
  name: 'Macao',
  code: 'MO'
}, {
  name: 'Macedonia, The Former Yugoslav Republic of',
  code: 'MK'
}, {
  name: 'Madagascar',
  code: 'MG'
}, {
  name: 'Malawi',
  code: 'MW'
}, {
  name: 'Malaysia',
  code: 'MY'
}, {
  name: 'Maldives',
  code: 'MV'
}, {
  name: 'Mali',
  code: 'ML'
}, {
  name: 'Malta',
  code: 'MT'
}, {
  name: 'Marshall Islands',
  code: 'MH'
}, {
  name: 'Martinique',
  code: 'MQ'
}, {
  name: 'Mauritania',
  code: 'MR'
}, {
  name: 'Mauritius',
  code: 'MU'
}, {
  name: 'Mayotte',
  code: 'YT'
}, {
  name: 'Mexico',
  code: 'MX'
}, {
  name: 'Micronesia, Federated States of',
  code: 'FM'
}, {
  name: 'Moldova, Republic of',
  code: 'MD'
}, {
  name: 'Monaco',
  code: 'MC'
}, {
  name: 'Mongolia',
  code: 'MN'
}, {
  name: 'Montenegro',
  code: 'ME'
}, {
  name: 'Montserrat',
  code: 'MS'
}, {
  name: 'Morocco',
  code: 'MA'
}, {
  name: 'Mozambique',
  code: 'MZ'
}, {
  name: 'Myanmar',
  code: 'MM'
}, {
  name: 'Namibia',
  code: 'NA'
}, {
  name: 'Nauru',
  code: 'NR'
}, {
  name: 'Nepal',
  code: 'NP'
}, {
  name: 'Netherlands',
  code: 'NL'
}, {
  name: 'Netherlands Antilles',
  code: 'AN'
}, {
  name: 'New Caledonia',
  code: 'NC'
}, {
  name: 'New Zealand',
  code: 'NZ'
}, {
  name: 'Nicaragua',
  code: 'NI'
}, {
  name: 'Niger',
  code: 'NE'
}, {
  name: 'Nigeria',
  code: 'NG'
}, {
  name: 'Niue',
  code: 'NU'
}, {
  name: 'Norfolk Island',
  code: 'NF'
}, {
  name: 'Northern Mariana Islands',
  code: 'MP'
}, {
  name: 'Norway',
  code: 'NO'
}, {
  name: 'Oman',
  code: 'OM'
}, {
  name: 'Pakistan',
  code: 'PK'
}, {
  name: 'Palau',
  code: 'PW'
}, {
  name: 'Palestinian Territory, Occupied',
  code: 'PS'
}, {
  name: 'Panama',
  code: 'PA'
}, {
  name: 'Papua New Guinea',
  code: 'PG'
}, {
  name: 'Paraguay',
  code: 'PY'
}, {
  name: 'Peru',
  code: 'PE'
}, {
  name: 'Philippines',
  code: 'PH'
}, {
  name: 'Pitcairn',
  code: 'PN'
}, {
  name: 'Poland',
  code: 'PL'
}, {
  name: 'Portugal',
  code: 'PT'
}, {
  name: 'Puerto Rico',
  code: 'PR'
}, {
  name: 'Qatar',
  code: 'QA'
}, {
  name: 'Reunion',
  code: 'RE'
}, {
  name: 'Romania',
  code: 'RO'
}, {
  name: 'Russian Federation',
  code: 'RU'
}, {
  name: 'RWANDA',
  code: 'RW'
}, {
  name: 'Saint Helena',
  code: 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  code: 'KN'
}, {
  name: 'Saint Lucia',
  code: 'LC'
}, {
  name: 'Saint Pierre and Miquelon',
  code: 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  code: 'VC'
}, {
  name: 'Samoa',
  code: 'WS'
}, {
  name: 'San Marino',
  code: 'SM'
}, {
  name: 'Sao Tome and Principe',
  code: 'ST'
}, {
  name: 'Saudi Arabia',
  code: 'SA'
}, {
  name: 'Senegal',
  code: 'SN'
}, {
  name: 'Serbia',
  code: 'RS'
}, {
  name: 'Seychelles',
  code: 'SC'
}, {
  name: 'Sierra Leone',
  code: 'SL'
}, {
  name: 'Singapore',
  code: 'SG'
}, {
  name: 'Slovakia',
  code: 'SK'
}, {
  name: 'Slovenia',
  code: 'SI'
}, {
  name: 'Solomon Islands',
  code: 'SB'
}, {
  name: 'Somalia',
  code: 'SO'
}, {
  name: 'South Africa',
  code: 'ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  code: 'GS'
}, {
  name: 'Spain',
  code: 'ES'
}, {
  name: 'Sri Lanka',
  code: 'LK'
}, {
  name: 'Sudan',
  code: 'SD'
}, {
  name: 'Suriname',
  code: 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  code: 'SJ'
}, {
  name: 'Swaziland',
  code: 'SZ'
}, {
  name: 'Sweden',
  code: 'SE'
}, {
  name: 'Switzerland',
  code: 'CH'
}, {
  name: 'Syrian Arab Republic',
  code: 'SY'
}, {
  name: 'Taiwan, Province of China',
  code: 'TW'
}, {
  name: 'Tajikistan',
  code: 'TJ'
}, {
  name: 'Tanzania, United Republic of',
  code: 'TZ'
}, {
  name: 'Thailand',
  code: 'TH'
}, {
  name: 'Timor-Leste',
  code: 'TL'
}, {
  name: 'Togo',
  code: 'TG'
}, {
  name: 'Tokelau',
  code: 'TK'
}, {
  name: 'Tonga',
  code: 'TO'
}, {
  name: 'Trinidad and Tobago',
  code: 'TT'
}, {
  name: 'Tunisia',
  code: 'TN'
}, {
  name: 'Turkey',
  code: 'TR'
}, {
  name: 'Turkmenistan',
  code: 'TM'
}, {
  name: 'Turks and Caicos Islands',
  code: 'TC'
}, {
  name: 'Tuvalu',
  code: 'TV'
}, {
  name: 'Uganda',
  code: 'UG'
}, {
  name: 'Ukraine',
  code: 'UA'
}, {
  name: 'United Arab Emirates',
  code: 'AE'
}, {
  name: 'United Kingdom',
  code: 'GB'
}, {
  name: 'United States Minor Outlying Islands',
  code: 'UM'
}, {
  name: 'Uruguay',
  code: 'UY'
}, {
  name: 'Uzbekistan',
  code: 'UZ'
}, {
  name: 'Vanuatu',
  code: 'VU'
}, {
  name: 'Venezuela',
  code: 'VE'
}, {
  name: 'Viet Nam',
  code: 'VN'
}, {
  name: 'Virgin Islands, British',
  code: 'VG'
}, {
  name: 'Virgin Islands, U.S.',
  code: 'VI'
}, {
  name: 'Wallis and Futuna',
  code: 'WF'
}, {
  name: 'Western Sahara',
  code: 'EH'
}, {
  name: 'Yemen',
  code: 'YE'
}, {
  name: 'Zambia',
  code: 'ZM'
}, {
  name: 'Zimbabwe',
  code: 'ZW'
}];

/***/ }),

/***/ "./utils/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(null, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(null, args);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),

/***/ "./utils/getCookie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Browser only
function getCookie(cname) {
  var name = "".concat(cname, "=");
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

/* harmony default export */ __webpack_exports__["a"] = (getCookie);

/***/ }),

/***/ "./utils/jwtUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWTPaylodeDecode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64__ = __webpack_require__("urlsafe-base64");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_urlsafe_base64__);


function JWTPaylodeDecode(jwtData) {
  if (!jwtData || typeof jwtData !== 'string') {
    throw new Error("function \"decodeJWTPayload\" must recieve a url-safe base-64 encoded argument\nRecieved: ".concat(jwtData));
  }

  var tempPayload = jwtData.split('.')[1];
  var payloadBuffer = __WEBPACK_IMPORTED_MODULE_0_urlsafe_base64___default.a.decode(tempPayload);
  var payload = JSON.parse(payloadBuffer.toString());
  return payload;
}



/***/ }),

/***/ "./utils/stringUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = unhyphenate;
// String utils
//
// resources:
//  -- mout, https://github.com/mout/mout/tree/master/src/string

/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
  return str.toLowerCase();
}
/**
 * "Safer" String.toUpperCase()
 */


function upperCase(str) {
  return str.toUpperCase();
}
/**
* Convert string to camelCase text.
*/


function camelCase(str) {
  str = replaceAccents(str);
  str = removeNonWord(str).replace(/\-/g, ' ') //convert all hyphens to spaces
  .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
  .replace(/\s+/g, '') //remove spaces
  .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase

  return str;
}
/**
 * Add space between camelCase text.
 */


function unCamelCase(str) {
  str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
  str = str.toLowerCase(); // add space between camelCase text

  return str;
}
/**
 * UPPERCASE first char of each word.
 */


var capitalize = function capitalize(str) {
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
};
/**
 * camelCase + UPPERCASE first char
 */

function pascalCase(str) {
  return camelCase(str).replace(/^[a-z]/, upperCase);
}

function normalizeLineBreaks(str, lineEnd) {
  lineEnd = lineEnd || 'n';
  return str.replace(/rn/g, lineEnd) // DOS
  .replace(/r/g, lineEnd) // Mac
  .replace(/n/g, lineEnd); // Unix
}
/**
* UPPERCASE first char of each sentence and lowercase other chars.
*/


function sentenceCase(str) {
  // Replace first char of each sentence (new line or after '.\s+') to
  // UPPERCASE
  return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}
/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 */


function slugify(str, delimeter) {
  if (delimeter == null) {
    delimeter = "-";
  }

  str = replaceAccents(str);
  str = removeNonWord(str);
  str = trim(str) //should come after removeNonWord
  .replace(/ +/g, delimeter) //replace spaces with delimeter
  .toLowerCase();
  return str;
}
/**
 * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */


function hyphenate(str) {
  str = unCamelCase(str);
  return slugify(str, "-");
}
/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */


function unhyphenate(str) {
  return str.split('-').join(' ');
}
/**
 * Replaces spaces with underscores, split camelCase text, remove
 * non-word chars, remove accents and convert to lower case.
 */

function underscore(str) {
  str = unCamelCase(str);
  return slugify(str, "_");
}
/**
 * Remove non-word chars.
 */


function removeNonWord(str) {
  return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
}
/**
 * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
 */


function normalizeLineBreaks(str, lineEnd) {
  lineEnd = lineEnd || '\n';
  return str.replace(/\r\n/g, lineEnd) // DOS
  .replace(/\r/g, lineEnd) // Mac
  .replace(/\n/g, lineEnd); // Unix
}
/**
* Replaces all accented chars with regular ones
*/


function replaceAccents(str) {
  // verifies if the String has accents and replace them
  if (str.search(/[\xC0-\xFF]/g) > -1) {
    str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
  }

  return str;
}
/**
 * Searches for a given substring
 */


function contains(str, substring, fromIndex) {
  return str.indexOf(substring, fromIndex) !== -1;
}
/**
 * Truncate string at full words.
 */


function crop(str, maxChars, append) {
  return truncate(str, maxChars, append, true);
}
/**
 * Escape RegExp string chars.
 */


function escapeRegExp(str) {
  var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
  return str.replace(ESCAPE_CHARS, '\\$&');
}
/**
 * Escapes a string for insertion into HTML.
 */


function escapeHtml(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  return str;
}
/**
 * Unescapes HTML special chars
 */


function unescapeHtml(str) {
  str = str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return str;
}
/**
* Escape string into unicode sequences
*/


function escapeUnicode(str, shouldEscapePrintable) {
  return str.replace(/[\s\S]/g, function (ch) {
    // skip printable ASCII chars if we should not escape them
    if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
      return ch;
    } // we use "000" and slice(-4) for brevity, need to pad zeros,
    // unicode escape always have 4 chars after "\u"


    return "\\u" + ('000' + ch.charCodeAt(0).toString(16)).slice(-4);
  });
}
/**
 * Remove HTML tags from string.
 */


function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}
/**
 * Remove non-printable ASCII chars
 */


function removeNonASCII(str) {
  // Matches non-printable ASCII chars -
  // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
  return str.replace(/[^\x20-\x7E]/g, '');
}
/**
 * String interpolation
 */


function interpolate(template, replacements, syntax) {
  var stache = /\{\{(\w+)\}\}/g; //mustache-like

  var replaceFn = function replaceFn(match, prop) {
    return prop in replacements ? replacements[prop] : '';
  };

  return template.replace(syntax || stache, replaceFn);
}
/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */


function rpad(str, minLen, ch) {
  ch = ch || ' ';
  return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}
/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */


function lpad(str, minLen, ch) {
  ch = ch || ' ';
  return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}
/**
* Repeat string n times
*/


function repeat(str, n) {
  return new Array(n + 1).join(str);
}
/**
* Limit number of chars.
*/


function truncate(str, maxChars, append, onlyFullWords) {
  append = append || '...';
  maxChars = onlyFullWords ? maxChars + 1 : maxChars;
  str = trim(str);

  if (str.length <= maxChars) {
    return str;
  }

  str = str.substr(0, maxChars - append.length); //crop at last space or remove trailing whitespace

  str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : trim(str);
  return str + append;
}

var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', "\xA0", "\u1680", "\u180E", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200A", "\u2028", "\u2029", "\u202F", "\u205F", "\u3000"];
/**
* Remove chars from beginning of string.
*/

function ltrim(str, chars) {
  chars = chars || WHITE_SPACES;
  var start = 0,
      len = str.length,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && start < len) {
    found = false;
    i = -1;
    c = str.charAt(start);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        start++;
        break;
      }
    }
  }

  return start >= len ? '' : str.substr(start, len);
}
/**
* Remove chars from end of string.
*/


function rtrim(str, chars) {
  chars = chars || WHITE_SPACES;
  var end = str.length - 1,
      charLen = chars.length,
      found = true,
      i,
      c;

  while (found && end >= 0) {
    found = false;
    i = -1;
    c = str.charAt(end);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        end--;
        break;
      }
    }
  }

  return end >= 0 ? str.substring(0, end + 1) : '';
}
/**
 * Remove white-spaces from beginning and end of string.
 */


function trim(str, chars) {
  chars = chars || WHITE_SPACES;
  return ltrim(rtrim(str, chars), chars);
}
/**
 * Capture all capital letters following a word boundary (in case the
 * input is in all caps)
 */


function abbreviate(str) {
  return str.match(/\b([A-Z])/g).join('');
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/app/profile.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@devexpress/dx-react-grid":
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid");

/***/ }),

/***/ "@devexpress/dx-react-grid-material-ui":
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-grid-material-ui");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/Assignment":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "@material-ui/icons/AttachMoney":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "@material-ui/icons/Close":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Contacts":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Contacts");

/***/ }),

/***/ "@material-ui/icons/Delete":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Equalizer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Equalizer");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Help":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Help");

/***/ }),

/***/ "@material-ui/icons/Home":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/RecentActors":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RecentActors");

/***/ }),

/***/ "@material-ui/icons/RemoveRedEye":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),

/***/ "@material-ui/icons/Settings":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/Star":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/SupervisorAccount":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),

/***/ "@nivo/bar":
/***/ (function(module, exports) {

module.exports = require("@nivo/bar");

/***/ }),

/***/ "@nivo/line":
/***/ (function(module, exports) {

module.exports = require("@nivo/line");

/***/ }),

/***/ "@nivo/pie":
/***/ (function(module, exports) {

module.exports = require("@nivo/pie");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/input":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "buildo-react-components/lib/FormattedText":
/***/ (function(module, exports) {

module.exports = require("buildo-react-components/lib/FormattedText");

/***/ }),

/***/ "chance":
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "debounce":
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "email-validator":
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),

/***/ "faker":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "graphql-request":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "is-browser":
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "material-ui-pickers/utils/MuiPickersUtilsProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),

/***/ "material-ui-pickers/utils/moment-utils":
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Avatar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),

/***/ "material-ui/Button":
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),

/***/ "material-ui/Chip":
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),

/***/ "material-ui/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),

/***/ "material-ui/Dialog":
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),

/***/ "material-ui/Divider":
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),

/***/ "material-ui/Drawer":
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),

/***/ "material-ui/ExpansionPanel":
/***/ (function(module, exports) {

module.exports = require("material-ui/ExpansionPanel");

/***/ }),

/***/ "material-ui/Form":
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),

/***/ "material-ui/Grid":
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),

/***/ "material-ui/Hidden":
/***/ (function(module, exports) {

module.exports = require("material-ui/Hidden");

/***/ }),

/***/ "material-ui/IconButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ "material-ui/Input":
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/Menu":
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),

/***/ "material-ui/Menu/MenuItem":
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/MenuItem");

/***/ }),

/***/ "material-ui/Portal":
/***/ (function(module, exports) {

module.exports = require("material-ui/Portal");

/***/ }),

/***/ "material-ui/Radio":
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),

/***/ "material-ui/Select":
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),

/***/ "material-ui/Snackbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),

/***/ "material-ui/Switch":
/***/ (function(module, exports) {

module.exports = require("material-ui/Switch");

/***/ }),

/***/ "material-ui/Table":
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),

/***/ "material-ui/TextField":
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),

/***/ "material-ui/Toolbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),

/***/ "material-ui/Tooltip":
/***/ (function(module, exports) {

module.exports = require("material-ui/Tooltip");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/colors/blue":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),

/***/ "material-ui/colors/red":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "papaparse":
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),

/***/ "polished":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-avatar-editor":
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),

/***/ "react-circular-progressbar":
/***/ (function(module, exports) {

module.exports = require("react-circular-progressbar");

/***/ }),

/***/ "react-detect-offline":
/***/ (function(module, exports) {

module.exports = require("react-detect-offline");

/***/ }),

/***/ "react-form":
/***/ (function(module, exports) {

module.exports = require("react-form");

/***/ }),

/***/ "react-icons/lib/fa":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),

/***/ "react-icons/lib/md":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md");

/***/ }),

/***/ "react-images":
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),

/***/ "react-input-mask":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "react-jss":
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "react-sizes":
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "react-spinners":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "react-toggle-button":
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

/***/ }),

/***/ "set-value":
/***/ (function(module, exports) {

module.exports = require("set-value");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "urlsafe-base64":
/***/ (function(module, exports) {

module.exports = require("urlsafe-base64");

/***/ }),

/***/ "uuid/v4":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map