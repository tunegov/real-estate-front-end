webpackHotUpdate(6,{

/***/ "./components/AdminAreaAgentsTable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes__ = __webpack_require__("../node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid/dist/dx-react-grid.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_backEndTableUtils_DefaultVirtualTableCell__ = __webpack_require__("./utils/backEndTableUtils/DefaultVirtualTableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_backEndTableUtils_TableComponent__ = __webpack_require__("./utils/backEndTableUtils/TableComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_backEndTableUtils_TableContainerComponent__ = __webpack_require__("./utils/backEndTableUtils/TableContainerComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_NoDataCellComponent__ = __webpack_require__("./utils/backEndTableUtils/NoDataCellComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dataTableFormatters_ProfilePictureFormatter__ = __webpack_require__("./components/dataTableFormatters/ProfilePictureFormatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dataTableFormatters_ViewFormatter__ = __webpack_require__("./components/dataTableFormatters/ViewFormatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dataTableFormatters_AreaOfFocusFormatter__ = __webpack_require__("./components/dataTableFormatters/AreaOfFocusFormatter.js");
var _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js",
    _dec,
    _dec2,
    _class;

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

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
    myNoDataCellComponent: {
      borderBottom: 'none !important'
    }
  };
};

var sortingStateColumnExtensions = [{
  columnName: 'photo',
  sortingEnabled: false
}, {
  columnName: 'view',
  sortingEnabled: false
}];
var filteringStateColumnExtensions = [{
  columnName: 'photo',
  filteringEnabled: false
}, {
  columnName: 'view',
  filteringEnabled: false
}];

var getRowId = function getRowId(row) {
  return row.email;
};

var FilterCell = function FilterCell(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["i" /* TableFilterRow */].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }));
};

var defaultColumnWidths = [{
  columnName: 'agentID',
  width: 120
}, {
  columnName: 'realEstateLicenseNumber',
  width: 140
}, {
  columnName: 'photo',
  width: 95
}, {
  columnName: 'name',
  width: 150
}, {
  columnName: 'email',
  width: 160
}, {
  columnName: 'areaOfFocus',
  width: 150
}, {
  columnName: 'mobileNumber',
  width: 150
}, {
  columnName: 'companyNumberAndExt',
  width: 180
}, {
  columnName: 'branch',
  width: 140
}, {
  columnName: 'state',
  width: 150
}, {
  columnName: 'lastLoginTimestamp',
  width: 180
}, {
  columnName: 'createdAt',
  width: 180
}, {
  columnName: 'view',
  width: 120
}];
var defaultHiddenColumnNames = ['lastLoginTimestamp', 'state', 'agentID', 'createdAt'];
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

var PhotoFormatter = function PhotoFormatter(_ref2) {
  var value = _ref2.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__dataTableFormatters_ProfilePictureFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  });
};

var PhotoTypeProvider = function PhotoTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["b" /* DataTypeProvider */], _extends({
    formatterComponent: PhotoFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }));
};

var ViewCellFormatter = function ViewCellFormatter(_ref3) {
  var value = _ref3.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__dataTableFormatters_ViewFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  });
};

var ViewTypeProvider = function ViewTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["b" /* DataTypeProvider */], _extends({
    formatterComponent: ViewCellFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }));
};

var AreaOfFocusCellFormatter = function AreaOfFocusCellFormatter(_ref4) {
  var value = _ref4.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__dataTableFormatters_AreaOfFocusFormatter__["a" /* default */], {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  });
};

var AreaOfFocusTypeProvider = function AreaOfFocusTypeProvider(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["b" /* DataTypeProvider */], _extends({
    formatterComponent: AreaOfFocusCellFormatter
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }));
};

var TableContainerComponentWrapperBase = function TableContainerComponentWrapperBase(_ref5) {
  var classes = _ref5.classes,
      restProps = _objectWithoutProperties(_ref5, ["classes"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__utils_backEndTableUtils_TableContainerComponent__["a" /* default */], _extends({}, restProps, {
    className: classes.myTableContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }));
};

var TableContainerComponentWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(TableContainerComponentWrapperBase);
var AdminAreaAgentsTable = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles), _dec2 = __WEBPACK_IMPORTED_MODULE_2_react_sizes___default()(mapSizesToProps), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminAreaAgentsTable, _Component);

  function AdminAreaAgentsTable(props) {
    var _this;

    _classCallCheck(this, AdminAreaAgentsTable);

    _this = _possibleConstructorReturn(this, (AdminAreaAgentsTable.__proto__ || Object.getPrototypeOf(AdminAreaAgentsTable)).call(this, props));
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

  _createClass(AdminAreaAgentsTable, [{
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
          lgViewport = _props.lgViewport;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["c" /* Grid */], {
        rows: rows,
        columns: columns,
        getRowId: getRowId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PhotoTypeProvider, {
        "for": ['photo'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ViewTypeProvider, {
        "for": ['view'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AreaOfFocusTypeProvider, {
        "for": ['areaOfFocus'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["b" /* DragDropProvider */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["n" /* SearchState */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["d" /* FilteringState */], {
        columnExtensions: filteringStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["o" /* SortingState */], {
        defaultSorting: [{
          columnName: 'name',
          direction: 'asc'
        }],
        columnExtensions: sortingStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["l" /* PagingState */], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["h" /* IntegratedFiltering */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["j" /* IntegratedSorting */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_react_grid__["i" /* IntegratedPaging */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["l" /* VirtualTable */], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_7__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: function containerComponent(props) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__utils_backEndTableUtils_TableContainerComponent__["a" /* default */], _extends({
            className: lgViewport ? classes.myTableContainerSmallViewPort : classes.myTableContainer
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            }
          }));
        },
        cellComponent: __WEBPACK_IMPORTED_MODULE_6__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["f" /* TableColumnReordering */], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["g" /* TableColumnResizing */], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["i" /* TableFilterRow */], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["k" /* Toolbar */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["e" /* SearchPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["h" /* TableColumnVisibility */], {
        defaultHiddenColumnNames: defaultHiddenColumnNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["a" /* ColumnChooser */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["j" /* TableHeaderRow */], {
        showSortingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid_material_ui__["d" /* PagingPanel */], {
        pageSizes: pageSizes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
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

  return AdminAreaAgentsTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = AdminAreaAgentsTable;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(sortingStateColumnExtensions, "sortingStateColumnExtensions", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(filteringStateColumnExtensions, "filteringStateColumnExtensions", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(getRowId, "getRowId", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(FilterCell, "FilterCell", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(defaultColumnWidths, "defaultColumnWidths", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(defaultHiddenColumnNames, "defaultHiddenColumnNames", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(pageSizes, "pageSizes", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(mapSizesToProps, "mapSizesToProps", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(PhotoFormatter, "PhotoFormatter", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(PhotoTypeProvider, "PhotoTypeProvider", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(ViewCellFormatter, "ViewCellFormatter", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(ViewTypeProvider, "ViewTypeProvider", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(AreaOfFocusCellFormatter, "AreaOfFocusCellFormatter", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(AreaOfFocusTypeProvider, "AreaOfFocusTypeProvider", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(TableContainerComponentWrapperBase, "TableContainerComponentWrapperBase", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(TableContainerComponentWrapper, "TableContainerComponentWrapper", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(AdminAreaAgentsTable, "AdminAreaAgentsTable", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/AdminAreaAgentsTable/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dataTableFormatters/AreaOfFocusFormatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__ = __webpack_require__("../node_modules/@material-ui/icons/RemoveRedEye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _class,
    _jsxFileName = "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/AreaOfFocusFormatter.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var VeiwFormatter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
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
      var _props = this.props,
          classes = _props.classes,
          values = _props.values;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, values.join(', '));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return VeiwFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(VeiwFormatter);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/AreaOfFocusFormatter.js");
  reactHotLoader.register(VeiwFormatter, "VeiwFormatter", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/AreaOfFocusFormatter.js");
  reactHotLoader.register(_default, "default", "/Users/damiengresham/coding/apps/real-estate-app/front-end/src/components/dataTableFormatters/AreaOfFocusFormatter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.84580c14096a9baf165b.hot-update.js.map