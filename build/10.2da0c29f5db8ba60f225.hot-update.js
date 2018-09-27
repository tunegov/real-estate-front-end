webpackHotUpdate(10,{

/***/ "../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Grid$1; });
/* unused harmony export ColumnChooser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PagingPanel$1; });
/* unused harmony export GroupingPanel */
/* unused harmony export TableRowDetail */
/* unused harmony export TableGroupRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TableSelection$1; });
/* unused harmony export Table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return VirtualTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TableFilterRow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TableHeaderRow$1; });
/* unused harmony export TableBandHeader */
/* unused harmony export TableEditRow */
/* unused harmony export TableEditColumn */
/* unused harmony export TableColumnVisibility */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TableColumnReordering$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TableColumnResizing$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Toolbar$2; });
/* unused harmony export TableTreeColumn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SearchPanel$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid/dist/dx-react-grid.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Popover__ = __webpack_require__("../node_modules/material-ui/Popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__("../node_modules/material-ui/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__("../node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_VisibilityOff__ = __webpack_require__("../node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_VisibilityOff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_VisibilityOff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__("../node_modules/material-ui/Checkbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Chip__ = __webpack_require__("../node_modules/material-ui/Chip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_Select__ = __webpack_require__("../node_modules/material-ui/Select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_ChevronLeft__ = __webpack_require__("../node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_ChevronLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_ChevronLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight__ = __webpack_require__("../node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__devexpress_dx_grid_core__ = __webpack_require__("../node_modules/@devexpress/dx-grid-core/dist/dx-grid-core.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__ = __webpack_require__("../node_modules/material-ui/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore__ = __webpack_require__("../node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_icons_ExpandLess__ = __webpack_require__("../node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_icons_ExpandLess___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_icons_ExpandLess__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__devexpress_dx_react_core__ = __webpack_require__("../node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_List__ = __webpack_require__("../node_modules/@material-ui/icons/List.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__ = __webpack_require__("../node_modules/material-ui/styles/colorManipulator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Toolbar__ = __webpack_require__("../node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_icons_Search__ = __webpack_require__("../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__material_ui_icons_Search__);
/**
 * Bundle of @devexpress/dx-react-grid-material-ui
 * Generated: 2018-05-04
 * Version: 1.2.0
 * License: https://js.devexpress.com/Licensing
 */





























var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Root = function Root(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    restProps,
    children
  );
};

Root.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"]
};

Root.defaultProps = {
  children: undefined
};

var Grid$1 = function Grid$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["e" /* Grid */],
    _extends({
      rootComponent: Root
    }, props),
    children
  );
};

Grid$1.Root = Root;

Grid$1.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired
};

var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      children = _ref.children,
      target = _ref.target,
      restProps = objectWithoutProperties(_ref, ['visible', 'onHide', 'children', 'target']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Popover___default.a,
    _extends({
      open: visible,
      anchorEl: target,
      onClose: onHide,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      transformOrigin: { vertical: 'top', horizontal: 'right' }
    }, restProps),
    children
  );
};

Overlay.propTypes = {
  onHide: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired,
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  target: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["object"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]])
};

Overlay.defaultProps = {
  visible: false,
  target: null
};

var Container = function Container(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a,
    _extends({
      dense: true
    }, restProps),
    children
  );
};

Container.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired
};

var ToggleButton = function ToggleButton(_ref) {
  var onToggle = _ref.onToggle,
      getMessage = _ref.getMessage,
      buttonRef = _ref.buttonRef,
      active = _ref.active,
      restProps = objectWithoutProperties(_ref, ['onToggle', 'getMessage', 'buttonRef', 'active']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Tooltip___default.a,
    _extends({
      title: getMessage('showColumnChooser'),
      placement: 'bottom',
      enterDelay: 300
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
      {
        onClick: onToggle,
        buttonRef: buttonRef
      },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_VisibilityOff___default.a, null)
    )
  );
};

ToggleButton.propTypes = {
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  buttonRef: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

ToggleButton.defaultProps = {
  active: false
};

var Item = function Item(_ref) {
  var _ref$item = _ref.item,
      column = _ref$item.column,
      hidden = _ref$item.hidden,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      restProps = objectWithoutProperties(_ref, ['item', 'disabled', 'onToggle']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
    _extends({
      key: column.name,
      button: !disabled,
      disabled: disabled,
      onClick: !disabled ? onToggle : null
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, {
      checked: !hidden,
      tabIndex: -1,
      disableRipple: true,
      disabled: disabled,
      style: { width: 'auto', height: 'auto' }
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: column.title || column.name })
  );
};

Item.propTypes = {
  item: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    column: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
      name: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
    }),
    hidden: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
  }).isRequired,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

Item.defaultProps = {
  onToggle: function onToggle() {},
  disabled: false
};

var defaultMessages = {
  showColumnChooser: 'Show Column Chooser'
};
var ColumnChooser$1 = function (_React$PureComponent) {
  inherits(ColumnChooser$$1, _React$PureComponent);

  function ColumnChooser$$1() {
    classCallCheck(this, ColumnChooser$$1);
    return possibleConstructorReturn(this, (ColumnChooser$$1.__proto__ || Object.getPrototypeOf(ColumnChooser$$1)).apply(this, arguments));
  }

  createClass(ColumnChooser$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["a" /* ColumnChooser */], _extends({
        overlayComponent: Overlay,
        containerComponent: Container,
        toggleButtonComponent: ToggleButton,
        itemComponent: Item,
        messages: _extends({}, defaultMessages, messages)
      }, restProps));
    }
  }]);
  return ColumnChooser$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ColumnChooser$1.Container = Container;
ColumnChooser$1.ToggleButton = ToggleButton;
ColumnChooser$1.Item = Item;
ColumnChooser$1.Overlay = Overlay;

ColumnChooser$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    hiddenColumnNames: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

ColumnChooser$1.defaultProps = {
  messages: {}
};

var styles$1 = function styles$$1(theme) {
  return {
    container: {
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      display: 'inline-block'
    },
    column: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      float: 'right',
      cursor: 'move'
    }
  };
};

var ContainerBase = function ContainerBase(_ref) {
  var clientOffset = _ref.clientOffset,
      classes = _ref.classes,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['clientOffset', 'classes', 'style', 'className', 'children']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.container, className),
      style: _extends({
        transform: 'translate(calc(' + clientOffset.x + 'px - 50%), calc(' + clientOffset.y + 'px - 50%))'
      }, style)
    }, restProps),
    children
  );
};

ContainerBase.propTypes = {
  clientOffset: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired
  }).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

ContainerBase.defaultProps = {
  style: null,
  className: undefined,
  children: undefined
};

var Container$1 = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$1, { name: 'DragDrop' })(ContainerBase);

var ColumnBase = function ColumnBase(_ref2) {
  var column = _ref2.column,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = objectWithoutProperties(_ref2, ['column', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_10_material_ui_Chip___default.a, _extends({
    className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.column, className),
    label: column.title
  }, restProps));
};

ColumnBase.propTypes = {
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

ColumnBase.defaultProps = {
  className: undefined
};

var Column = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$1, { name: 'DragDrop' })(ColumnBase);

var DragDropProvider$1 = function (_React$PureComponent) {
  inherits(DragDropProvider$$1, _React$PureComponent);

  function DragDropProvider$$1() {
    classCallCheck(this, DragDropProvider$$1);
    return possibleConstructorReturn(this, (DragDropProvider$$1.__proto__ || Object.getPrototypeOf(DragDropProvider$$1)).apply(this, arguments));
  }

  createClass(DragDropProvider$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["c" /* DragDropProvider */], _extends({
        containerComponent: Container$1,
        columnComponent: Column
      }, this.props));
    }
  }]);
  return DragDropProvider$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

DragDropProvider$1.Container = Container$1;
DragDropProvider$1.Column = Column;

var styles$3 = function styles$$1(theme) {
  return {
    pageSizeSelector: _extends({}, theme.typography.caption, {
      float: 'right',
      paddingRight: theme.spacing.unit * 5
    }),
    label: {
      paddingRight: theme.spacing.unit * 3,
      lineHeight: theme.spacing.unit * 5 + 'px',
      float: 'left'
    },
    pageSizes: {
      display: 'inline-block'
    },
    pageSizeTitle: {
      width: 'auto',
      marginRight: theme.spacing.unit / 2
    },
    inputRoot: {
      paddingTop: theme.spacing.unit * 0.75,
      float: 'right',
      fontSize: theme.spacing.unit * 1.75,
      textAlign: 'right'
    },
    selectIcon: {
      top: 2
    },
    '@media (max-width: 768px)': {
      label: {
        display: 'none'
      },
      pageSizeSelector: {
        paddingRight: theme.spacing.unit * 2
      }
    }
  };
};

var PageSizeSelectorBase = function PageSizeSelectorBase(_ref) {
  var pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      pageSizes = _ref.pageSizes,
      getMessage = _ref.getMessage,
      classes = _ref.classes;

  var showAll = getMessage('showAll');
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    { className: classes.pageSizeSelector },
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'span',
      { className: classes.label },
      getMessage('rowsPerPage')
    ),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_14_material_ui_Select___default.a,
      {
        value: pageSize,
        onChange: function onChange(event) {
          return onPageSizeChange(event.target.value);
        },
        classes: {
          icon: classes.selectIcon
        },
        input: Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_12_material_ui_Input___default.a, {
          disableUnderline: true,
          classes: { root: classes.inputRoot }
        })
      },
      pageSizes.map(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_13_material_ui_Menu__["MenuItem"],
          { key: item, value: item },
          item !== 0 ? item : showAll
        );
      })
    )
  );
};

PageSizeSelectorBase.propTypes = {
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  onPageSizeChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  pageSizes: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]).isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var PageSizeSelector = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$3, { name: 'PageSizeSelector' })(PageSizeSelectorBase);

var styles$4 = function styles$$1(theme) {
  return {
    pagination: {
      float: 'right',
      margin: 0
    },
    rowsLabel: _extends({}, theme.typography.caption, {
      paddingRight: theme.spacing.unit * 5,
      lineHeight: theme.spacing.unit * 5 + 'px'
    }),
    button: {
      minWidth: theme.spacing.unit * 2,
      height: theme.spacing.unit * 5
    },
    activeButton: {
      fontWeight: 'bold',
      cursor: 'default'
    },
    arrowButton: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    prev: {
      marginRight: 0
    },
    next: {
      marginLeft: 0
    },
    '@media(max-width: 768px)': {
      button: {
        display: 'none'
      },
      prev: {
        marginRight: theme.spacing.unit
      },
      next: {
        marginLeft: theme.spacing.unit
      },
      rowsLabel: {
        paddingRight: theme.spacing.unit * 2
      }
    }
  };
};

var PageButton = function PageButton(_ref) {
  var _classNames;

  var text = _ref.text,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      classes = _ref.classes,
      onClick = _ref.onClick;

  var buttonClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.activeButton, isActive), _classNames));

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_15_material_ui_Button___default.a,
    {
      className: buttonClasses,
      disabled: isDisabled,
      onClick: onClick,
      disableRipple: isActive
    },
    text
  );
};

PageButton.propTypes = {
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  isDisabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

PageButton.defaultProps = {
  onClick: function onClick() {},
  isDisabled: false,
  isActive: false
};

var ellipsisSymbol = '\u2026';

var renderPageButtons = function renderPageButtons(currentPage, totalPageCount, classes, onCurrentPageChange) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = Object(__WEBPACK_IMPORTED_MODULE_18__devexpress_dx_grid_core__["l" /* calculateStartPage */])(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageButton, {
      key: 1,
      text: String(1),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(0);
      }
    }));

    if (startPage > 2) {
      pageButtons.push(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageButton, {
        key: 'ellipsisStart',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageButton, {
      key: page,
      text: String(page),
      isActive: page === currentPage + 1,
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(page - 1);
      },
      isDisabled: startPage === endPage
    }));
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageButton, {
        key: 'ellipsisEnd',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }

    pageButtons.push(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageButton, {
      key: totalPageCount,
      text: String(totalPageCount),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(totalPageCount - 1);
      }
    }));
  }

  return pageButtons;
};

var PaginationBase = function PaginationBase(_ref2) {
  var totalPages = _ref2.totalPages,
      totalCount = _ref2.totalCount,
      pageSize = _ref2.pageSize,
      currentPage = _ref2.currentPage,
      onCurrentPageChange = _ref2.onCurrentPageChange,
      getMessage = _ref2.getMessage,
      classes = _ref2.classes;

  var from = Object(__WEBPACK_IMPORTED_MODULE_18__devexpress_dx_grid_core__["U" /* firstRowOnPage */])(currentPage, pageSize, totalCount);
  var to = Object(__WEBPACK_IMPORTED_MODULE_18__devexpress_dx_grid_core__["_39" /* lastRowOnPage */])(currentPage, pageSize, totalCount);

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    { className: classes.pagination },
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'span',
      { className: classes.rowsLabel },
      getMessage('info', { from: from, to: to, count: totalCount })
    ),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
      {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.arrowButton, classes.prev),
        disabled: currentPage === 0,
        onClick: function onClick() {
          return currentPage > 0 && onCurrentPageChange(currentPage - 1);
        }
      },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_ChevronLeft___default.a, null)
    ),
    renderPageButtons(currentPage, totalPages, classes, onCurrentPageChange),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
      {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.arrowButton, classes.next),
        disabled: currentPage === totalPages - 1 || totalCount === 0,
        onClick: function onClick() {
          return currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1);
        }
      },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight___default.a, null)
    )
  );
};

PaginationBase.propTypes = {
  totalPages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  currentPage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  onCurrentPageChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  totalCount: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var Pagination = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$4, { name: 'Pagination' })(PaginationBase);

var styles$2 = function styles$$1(theme) {
  return {
    pager: {
      overflow: 'hidden',
      padding: theme.spacing.unit * 1.5
    }
  };
};

var PagerBase = function PagerBase(_ref) {
  var currentPage = _ref.currentPage,
      pageSizes = _ref.pageSizes,
      totalPages = _ref.totalPages,
      pageSize = _ref.pageSize,
      classes = _ref.classes,
      _onCurrentPageChange = _ref.onCurrentPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      totalCount = _ref.totalCount,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['currentPage', 'pageSizes', 'totalPages', 'pageSize', 'classes', 'onCurrentPageChange', 'onPageSizeChange', 'totalCount', 'getMessage', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.pager, className)
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Pagination, {
      totalPages: totalPages,
      totalCount: totalCount,
      currentPage: currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize: pageSize,
      getMessage: getMessage
    }),
    !!pageSizes.length && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(PageSizeSelector, {
      pageSize: pageSize,
      onPageSizeChange: onPageSizeChange,
      pageSizes: pageSizes,
      getMessage: getMessage
    })
  );
};

PagerBase.propTypes = {
  currentPage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  totalPages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  pageSizes: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]).isRequired,
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  onCurrentPageChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  onPageSizeChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  totalCount: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

PagerBase.defaultProps = {
  className: undefined
};

var Pager = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$2, { name: 'Pager' })(PagerBase);

var defaultMessages$1 = {
  showAll: 'All',
  rowsPerPage: 'Rows per page:',
  info: function info(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return '' + from + (from < to ? '-' + to : '') + ' of ' + count;
  }
};

var PagingPanel$1 = function (_React$PureComponent) {
  inherits(PagingPanel$$1, _React$PureComponent);

  function PagingPanel$$1() {
    classCallCheck(this, PagingPanel$$1);
    return possibleConstructorReturn(this, (PagingPanel$$1.__proto__ || Object.getPrototypeOf(PagingPanel$$1)).apply(this, arguments));
  }

  createClass(PagingPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["l" /* PagingPanel */], _extends({
        containerComponent: Pager,
        messages: _extends({}, defaultMessages$1, messages)
      }, restProps));
    }
  }]);
  return PagingPanel$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

PagingPanel$1.Container = Pager;

PagingPanel$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    showAll: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    rowsPerPage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    info: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]])
  })
};

PagingPanel$1.defaultProps = {
  messages: {}
};

var styles$5 = function styles$$1(theme) {
  return {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: theme.spacing.unit * 1.5
    }
  };
};

var GroupPanelContainerBase = function GroupPanelContainerBase(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['classes', 'children', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.panel, className)
    }, restProps),
    children
  );
};

GroupPanelContainerBase.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined
};

var GroupPanelContainer = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$5, { name: 'GroupPanelContainer' })(GroupPanelContainerBase);

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;

var styles$6 = function styles$$1(theme) {
  return {
    button: {
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 1.5
    },
    draftCell: {
      opacity: 0.3
    }
  };
};

var label = function label(showSortingControls, sortingEnabled, sortingDirection, column) {
  var title = column.title || column.name;
  return showSortingControls ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableSortLabel"],
    {
      active: !!sortingDirection,
      direction: sortingDirection === null ? undefined : sortingDirection,
      disabled: !sortingEnabled,
      tabIndex: -1
    },
    title
  ) : title;
};

var GroupPanelItemBase = function GroupPanelItemBase(_ref) {
  var _classNames;

  var _ref$item = _ref.item,
      column = _ref$item.column,
      draft = _ref$item.draft,
      onGroup = _ref.onGroup,
      showGroupingControls = _ref.showGroupingControls,
      showSortingControls = _ref.showSortingControls,
      sortingDirection = _ref.sortingDirection,
      onSort = _ref.onSort,
      sortingEnabled = _ref.sortingEnabled,
      groupingEnabled = _ref.groupingEnabled,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['item', 'onGroup', 'showGroupingControls', 'showSortingControls', 'sortingDirection', 'onSort', 'sortingEnabled', 'groupingEnabled', 'classes', 'className']);

  var chipClassNames = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.draftCell, draft), _classNames), className);
  var onClick = function onClick(e) {
    var isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
    var isMouseClick = e.keyCode === undefined;
    var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

    onSort({
      direction: direction,
      keepOther: cancelSortingRelatedKey
    });
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_10_material_ui_Chip___default.a, _extends({
    label: label(showSortingControls, sortingEnabled, sortingDirection, column),
    className: chipClassNames
  }, showGroupingControls ? { onDelete: groupingEnabled ? onGroup : null } : null, showSortingControls ? { onClick: sortingEnabled ? onClick : null } : null, restProps));
};

GroupPanelItemBase.propTypes = {
  item: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    column: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
      title: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
    }).isRequired,
    draft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
  }).isRequired,
  showSortingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  sortingDirection: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])(['asc', 'desc', null]),
  onSort: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onGroup: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  showGroupingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  sortingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  groupingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

GroupPanelItemBase.defaultProps = {
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  className: undefined
};

var GroupPanelItem = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$6, { name: 'GroupPanelItem' })(GroupPanelItemBase);

var styles$7 = function styles$$1(theme) {
  return {
    groupInfo: {
      color: theme.typography.caption.color,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize
    }
  };
};

var GroupPanelEmptyMessageBase = function GroupPanelEmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.groupInfo, className)
    }, restProps),
    getMessage('groupByColumn')
  );
};

GroupPanelEmptyMessageBase.propTypes = {
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

GroupPanelEmptyMessageBase.defaultProps = {
  className: undefined
};

var GroupPanelEmptyMessage = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$7, { name: 'GroupPanelEmptyMessage' })(GroupPanelEmptyMessageBase);

var defaultMessages$2 = {
  groupByColumn: 'Drag a column header here to group by that column'
};

var GroupingPanel$1 = function (_React$PureComponent) {
  inherits(GroupingPanel$$1, _React$PureComponent);

  function GroupingPanel$$1() {
    classCallCheck(this, GroupingPanel$$1);
    return possibleConstructorReturn(this, (GroupingPanel$$1.__proto__ || Object.getPrototypeOf(GroupingPanel$$1)).apply(this, arguments));
  }

  createClass(GroupingPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["g" /* GroupingPanel */], _extends({
        layoutComponent: __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["f" /* GroupPanelLayout */],
        containerComponent: GroupPanelContainer,
        itemComponent: GroupPanelItem,
        emptyMessageComponent: GroupPanelEmptyMessage,
        messages: _extends({}, defaultMessages$2, messages)
      }, restProps));
    }
  }]);
  return GroupingPanel$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

GroupingPanel$1.Container = GroupPanelContainer;
GroupingPanel$1.Item = GroupPanelItem;
GroupingPanel$1.EmptyMessage = GroupPanelEmptyMessage;

GroupingPanel$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    groupByColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

GroupingPanel$1.defaultProps = {
  messages: {}
};

var styles$8 = function styles$$1(theme) {
  return {
    toggleCell: {
      textAlign: 'center',
      textOverflow: 'initial',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing.unit
    },
    toggleCellButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: theme.spacing.unit * 5,
      width: theme.spacing.unit * 5
    }
  };
};

var TableDetailToggleCellBase = function TableDetailToggleCellBase(_ref) {
  var style = _ref.style,
      expanded = _ref.expanded,
      classes = _ref.classes,
      onToggle = _ref.onToggle,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['style', 'expanded', 'classes', 'onToggle', 'tableColumn', 'tableRow', 'row', 'className']);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onToggle();
  };
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.toggleCell, className),
      style: style
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
      {
        className: classes.toggleCellButton,
        onClick: handleClick
      },
      expanded ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore___default.a, null) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_21__material_ui_icons_ExpandLess___default.a, null)
    )
  );
};

TableDetailToggleCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined
};

var TableDetailToggleCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$8, { name: 'TableDetailToggleCell' })(TableDetailToggleCellBase);

var styles$9 = function styles$$1(theme) {
  return {
    active: {
      backgroundColor: theme.palette.background.default
    }
  };
};

var TableDetailCellBase = function TableDetailCellBase(_ref) {
  var colSpan = _ref.colSpan,
      style = _ref.style,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      tableColumn = _ref.tableColumn,
      tableRow = _ref.tableRow,
      row = _ref.row,
      restProps = objectWithoutProperties(_ref, ['colSpan', 'style', 'children', 'classes', 'className', 'tableColumn', 'tableRow', 'row']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      style: style,
      colSpan: colSpan,
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.active, className)
    }, restProps),
    children
  );
};

TableDetailCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  colSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined
};

var TableDetailCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$9, { name: 'TableDetailCell' })(TableDetailCellBase);

var TableRow$1 = function TableRow$$1(_ref) {
  var children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['children', 'row', 'tableRow', 'tableColumn']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableRow"],
    restProps,
    children
  );
};

TableRow$1.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableRow$1.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableRowDetail$1 = function (_React$PureComponent) {
  inherits(TableRowDetail$$1, _React$PureComponent);

  function TableRowDetail$$1() {
    classCallCheck(this, TableRowDetail$$1);
    return possibleConstructorReturn(this, (TableRowDetail$$1.__proto__ || Object.getPrototypeOf(TableRowDetail$$1)).apply(this, arguments));
  }

  createClass(TableRowDetail$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["D" /* TableRowDetail */], _extends({
        toggleCellComponent: TableDetailToggleCell,
        cellComponent: TableDetailCell,
        rowComponent: TableRow$1,
        toggleColumnWidth: 48
      }, this.props));
    }
  }]);
  return TableRowDetail$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableRowDetail$1.Cell = TableDetailCell;
TableRowDetail$1.ToggleCell = TableDetailToggleCell;
TableRowDetail$1.Row = TableRow$1;

var styles$10 = function styles$$1(theme) {
  return {
    cell: {
      cursor: 'pointer',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingTop: theme.spacing.unit / 2 - 1
    },
    indentCell: {
      padding: 0
    },
    groupButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: theme.spacing.unit * 5,
      width: theme.spacing.unit * 5,
      marginRight: theme.spacing.unit
    },
    columnTitle: {
      verticalAlign: 'middle'
    }
  };
};

var TableGroupCellBase = function TableGroupCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      row = _ref.row,
      column = _ref.column,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'row', 'column', 'expanded', 'onToggle', 'classes', 'children', 'className', 'tableRow', 'tableColumn']);

  var handleClick = function handleClick() {
    return onToggle();
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      colSpan: colSpan,
      style: style,
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className),
      onClick: handleClick
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
      {
        className: classes.groupButton
      },
      expanded ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore___default.a, null) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight___default.a, null)
    ),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'span',
      { className: classes.columnTitle },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'strong',
        null,
        column.title || column.name,
        ': '
      ),
      children || row.value
    )
  );
};

TableGroupCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  colSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableGroupCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: function onToggle() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableGroupCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$10, { name: 'TableGroupCell' })(TableGroupCellBase);

var TableGroupRow$1 = function (_React$PureComponent) {
  inherits(TableGroupRow$$1, _React$PureComponent);

  function TableGroupRow$$1() {
    classCallCheck(this, TableGroupRow$$1);
    return possibleConstructorReturn(this, (TableGroupRow$$1.__proto__ || Object.getPrototypeOf(TableGroupRow$$1)).apply(this, arguments));
  }

  createClass(TableGroupRow$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["A" /* TableGroupRow */], _extends({
        cellComponent: TableGroupCell,
        rowComponent: TableRow$1,
        indentColumnWidth: 48
      }, this.props));
    }
  }]);
  return TableGroupRow$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableGroupRow$1.Row = TableRow$1;
TableGroupRow$1.Cell = TableGroupCell;

var styles$11 = function styles$$1(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit,
      textAlign: 'center'
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit / 2
    },
    pointer: {
      cursor: 'pointer'
    }
  };
};

var TableSelectAllCellBase = function TableSelectAllCellBase(_ref) {
  var _classNames;

  var allSelected = _ref.allSelected,
      someSelected = _ref.someSelected,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      rowSpan = _ref.rowSpan,
      restProps = objectWithoutProperties(_ref, ['allSelected', 'someSelected', 'disabled', 'onToggle', 'classes', 'className', 'tableRow', 'tableColumn', 'rowSpan']);

  var cellClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.pointer, !disabled), defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1), _classNames), className);

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      padding: 'checkbox',
      className: cellClasses,
      rowSpan: rowSpan
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, {
      checked: allSelected,
      indeterminate: someSelected,
      disabled: disabled,
      onClick: function onClick(e) {
        if (disabled) return;

        e.stopPropagation();
        onToggle();
      }
    })
  );
};

TableSelectAllCellBase.propTypes = {
  allSelected: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  someSelected: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  rowSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]
};

TableSelectAllCellBase.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var TableSelectAllCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$11, { name: 'TableSelectAllCell' })(TableSelectAllCellBase);

var styles$12 = function styles$$1(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit,
      textAlign: 'center'
    },
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    }
  };
};

var TableSelectCellBase = function TableSelectCellBase(_ref) {
  var style = _ref.style,
      selected = _ref.selected,
      onToggle = _ref.onToggle,
      classes = _ref.classes,
      className = _ref.className,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'selected', 'onToggle', 'classes', 'className', 'row', 'tableRow', 'tableColumn']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      padding: 'checkbox',
      style: style,
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className)
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, {
      className: classes.checkbox,
      checked: selected,
      onClick: function onClick(e) {
        e.stopPropagation();
        onToggle();
      }
    })
  );
};

TableSelectCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableSelectCellBase.defaultProps = {
  style: null,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableSelectCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$12, { name: 'TableSelectCell' })(TableSelectCellBase);

var TableSelectRow = function TableSelectRow(_ref) {
  var selected = _ref.selected,
      selectByRowClick = _ref.selectByRowClick,
      onToggle = _ref.onToggle,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['selected', 'selectByRowClick', 'onToggle', 'row', 'tableRow', 'tableColumn', 'children']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableRow"],
    _extends({
      selected: selected,
      onClick: function onClick(e) {
        if (!selectByRowClick) return;
        e.stopPropagation();
        onToggle();
      }
    }, restProps),
    children
  );
};

TableSelectRow.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  selectByRowClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: function onToggle() {},
  selected: false,
  selectByRowClick: false,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined
};

var TableSelection$1 = function (_React$PureComponent) {
  inherits(TableSelection$$1, _React$PureComponent);

  function TableSelection$$1() {
    classCallCheck(this, TableSelection$$1);
    return possibleConstructorReturn(this, (TableSelection$$1.__proto__ || Object.getPrototypeOf(TableSelection$$1)).apply(this, arguments));
  }

  createClass(TableSelection$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["E" /* TableSelection */], _extends({
        rowComponent: TableSelectRow,
        cellComponent: TableSelectCell,
        headerCellComponent: TableSelectAllCell,
        selectionColumnWidth: 58
      }, this.props));
    }
  }]);
  return TableSelection$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableSelection$1.Cell = TableSelectCell;
TableSelection$1.HeaderCell = TableSelectAllCell;

var styles$13 = function styles$$1(theme) {
  return {
    table: {
      tableLayout: 'fixed'
    },
    headTable: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      overflow: 'visible',
      background: theme.palette.background.paper,
      fallbacks: {
        position: '-webkit-sticky'
      }
    }
  };
};

var TableBase = function TableBase(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      use = _ref.use,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'use']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table___default.a,
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.table, true), defineProperty(_classNames, classes.headTable, use === 'head'), _classNames), className)
    }, restProps),
    children
  );
};

TableBase.propTypes = {
  use: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])(['head']),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableBase.defaultProps = {
  use: undefined,
  className: undefined
};

var Table$2 = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$13, { name: 'Table' })(TableBase);

var MINIMAL_COLUMN_WIDTH = 120;

var TableLayout$1 = function TableLayout$$1(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["C" /* TableLayout */], _extends({
    layoutComponent: __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["r" /* StaticTableLayout */],
    minColumnWidth: MINIMAL_COLUMN_WIDTH
  }, props));
};

var styles$14 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      },
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    cellRightAlign: {
      textAlign: 'right'
    },
    cellCenterAlign: {
      textAlign: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableCellBase = function TableCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.cellRightAlign, tableColumn && tableColumn.align === 'right'), defineProperty(_classNames, classes.cellCenterAlign, tableColumn && tableColumn.align === 'center'), defineProperty(_classNames, classes.cellNoWrap, !(tableColumn && tableColumn.wordWrapEnabled)), _classNames), className)
    }, restProps),
    children || value
  );
};

TableCellBase.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableCell$1 = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$14, { name: 'TableCell' })(TableCellBase);

var styles$15 = {
  cell: {
    padding: 0
  }
};

var TableStubCellBase = function TableStubCellBase(_ref) {
  var style = _ref.style,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'classes', 'className', 'tableRow', 'tableColumn']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"], _extends({
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className)
  }, restProps));
};

TableStubCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableStubCellBase.defaultProps = {
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableStubCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$15, { name: 'TableStubCell' })(TableStubCellBase);

var styles$16 = function styles$$1(theme) {
  return {
    cell: {
      textAlign: 'center',
      padding: theme.spacing.unit * 5 + 'px 0'
    }
  };
};

var TableNoDataCellBase = function TableNoDataCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      getMessage = _ref.getMessage,
      classes = _ref.classes,
      className = _ref.className,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['style', 'colSpan', 'getMessage', 'classes', 'className', 'tableRow', 'tableColumn']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      style: style,
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className),
      colSpan: colSpan
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'big',
      null,
      getMessage('noData')
    )
  );
};

TableNoDataCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  colSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableNoDataCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};

var TableNoDataCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$16, { name: 'TableNoDataCell' })(TableNoDataCellBase);

var styles$17 = {
  root: {
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }
};

var TableContainerBase = function TableContainerBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.root, className)
    }, restProps),
    children
  );
};

TableContainerBase.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableContainerBase.defaultProps = {
  className: undefined
};

var TableContainer = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$17, { name: 'TableContainer' })(TableContainerBase);

var TableStubRow = function TableStubRow(_ref) {
  var children = _ref.children,
      tableRow = _ref.tableRow,
      restProps = objectWithoutProperties(_ref, ['children', 'tableRow']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableRow"],
    restProps,
    children
  );
};

TableStubRow.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined
};

var defaultMessages$3 = {
  noData: 'No data'
};

var Table$1 = function (_React$PureComponent) {
  inherits(Table$$1, _React$PureComponent);

  function Table$$1() {
    classCallCheck(this, Table$$1);
    return possibleConstructorReturn(this, (Table$$1.__proto__ || Object.getPrototypeOf(Table$$1)).apply(this, arguments));
  }

  createClass(Table$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["s" /* Table */], _extends({
        tableComponent: Table$2,
        headComponent: __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableHead"],
        bodyComponent: __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableBody"],
        containerComponent: TableContainer,
        layoutComponent: TableLayout$1,
        rowComponent: TableRow$1,
        cellComponent: TableCell$1,
        noDataRowComponent: TableRow$1,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubCell,
        messages: _extends({}, defaultMessages$3, messages)
      }, restProps));
    }
  }]);
  return Table$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Table$1.Cell = TableCell$1;
Table$1.Row = TableRow$1;
Table$1.NoDataCell = TableNoDataCell;
Table$1.NoDataRow = TableRow$1;
Table$1.StubRow = TableStubRow;
Table$1.StubCell = TableStubCell;
Table$1.StubHeaderCell = TableStubCell;
Table$1.Table = Table$2;
Table$1.TableHead = __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableHead"];
Table$1.TableBody = __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableBody"];
Table$1.Container = TableContainer;

Table$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    noData: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

Table$1.defaultProps = {
  messages: {}
};

var MINIMAL_COLUMN_WIDTH$1 = 120;

var VirtualTableLayout$1 = function VirtualTableLayout$$1(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["C" /* TableLayout */], _extends({
    layoutComponent: __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["H" /* VirtualTableLayout */],
    minColumnWidth: MINIMAL_COLUMN_WIDTH$1
  }, props));
};

var FixedHeader = function FixedHeader(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Table$2, _extends({ use: 'head' }, props));
};

var defaultMessages$4 = {
  noData: 'No data'
};

var VirtualTable = function (_React$PureComponent) {
  inherits(VirtualTable, _React$PureComponent);

  function VirtualTable(props) {
    classCallCheck(this, VirtualTable);

    var _this = possibleConstructorReturn(this, (VirtualTable.__proto__ || Object.getPrototypeOf(VirtualTable)).call(this, props));

    var height = props.height,
        estimatedRowHeight = props.estimatedRowHeight,
        headTableComponent = props.headTableComponent;

    _this.layoutRenderComponent = Object(__WEBPACK_IMPORTED_MODULE_22__devexpress_dx_react_core__["n" /* createRenderComponent */])(VirtualTableLayout$1, {
      height: height, estimatedRowHeight: estimatedRowHeight, headTableComponent: headTableComponent
    });
    return _this;
  }

  createClass(VirtualTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var height = _ref.height,
          estimatedRowHeight = _ref.estimatedRowHeight,
          headTableComponent = _ref.headTableComponent;

      this.layoutRenderComponent.update({ height: height, estimatedRowHeight: estimatedRowHeight, headTableComponent: headTableComponent });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          estimatedRowHeight = _props.estimatedRowHeight,
          headTableComponent = _props.headTableComponent,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['height', 'estimatedRowHeight', 'headTableComponent', 'messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["s" /* Table */], _extends({
        layoutComponent: this.layoutRenderComponent.component,
        bodyComponent: __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableBody"],
        headComponent: __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableHead"],
        tableComponent: Table$2,
        containerComponent: TableContainer,
        rowComponent: TableRow$1,
        cellComponent: TableCell$1,
        noDataRowComponent: TableRow$1,
        noDataCellComponent: TableNoDataCell,
        stubRowComponent: TableStubRow,
        stubCellComponent: TableStubCell,
        stubHeaderCellComponent: TableStubCell,
        messages: _extends({}, defaultMessages$4, messages)
      }, restProps));
    }
  }]);
  return VirtualTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

VirtualTable.Cell = TableCell$1;
VirtualTable.Row = TableRow$1;
VirtualTable.NoDataCell = TableNoDataCell;
VirtualTable.NoDataRow = TableRow$1;
VirtualTable.StubCell = TableStubCell;
VirtualTable.StubHeaderCell = TableStubCell;
VirtualTable.Table = Table$2;
VirtualTable.TableHead = __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableHead"];
VirtualTable.TableBody = __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableBody"];
VirtualTable.FixedHeader = FixedHeader;
VirtualTable.Container = TableContainer;
VirtualTable.StubRow = TableStubRow;

VirtualTable.propTypes = {
  estimatedRowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  headTableComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    noData: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

VirtualTable.defaultProps = {
  estimatedRowHeight: 48,
  height: 530,
  headTableComponent: FixedHeader,
  messages: {}
};

var styles$18 = function styles$$1(_ref) {
  var spacing = _ref.spacing;
  return {
    cell: {
      paddingRight: spacing.unit,
      paddingLeft: spacing.unit,
      '&:first-child': {
        paddingLeft: spacing.unit * 3
      }
    },
    input: {
      width: '100%'
    }
  };
};

var TableFilterCellBase = function TableFilterCellBase(_ref2) {
  var style = _ref2.style,
      filter = _ref2.filter,
      getMessage = _ref2.getMessage,
      onFilter = _ref2.onFilter,
      classes = _ref2.classes,
      children = _ref2.children,
      className = _ref2.className,
      tableRow = _ref2.tableRow,
      tableColumn = _ref2.tableColumn,
      column = _ref2.column,
      filteringEnabled = _ref2.filteringEnabled,
      restProps = objectWithoutProperties(_ref2, ['style', 'filter', 'getMessage', 'onFilter', 'classes', 'children', 'className', 'tableRow', 'tableColumn', 'column', 'filteringEnabled']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className),
      style: style
    }, restProps),
    children || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_12_material_ui_Input___default.a, {
      className: classes.input,
      value: filter ? filter.value : '',
      placeholder: getMessage('filterPlaceholder'),
      disabled: !filteringEnabled,
      onChange: function onChange(e) {
        return onFilter(e.target.value ? { value: e.target.value } : null);
      }
    })
  );
};

TableFilterCellBase.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  filter: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  onFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  filteringEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

TableFilterCellBase.defaultProps = {
  style: null,
  filter: null,
  onFilter: function onFilter() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true
};

var TableFilterCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$18, { name: 'TableFilterCell' })(TableFilterCellBase);

var defaultMessages$5 = {
  filterPlaceholder: 'Filter...'
};

var TableFilterRow$1 = function (_React$PureComponent) {
  inherits(TableFilterRow$$1, _React$PureComponent);

  function TableFilterRow$$1() {
    classCallCheck(this, TableFilterRow$$1);
    return possibleConstructorReturn(this, (TableFilterRow$$1.__proto__ || Object.getPrototypeOf(TableFilterRow$$1)).apply(this, arguments));
  }

  createClass(TableFilterRow$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["z" /* TableFilterRow */], _extends({
        cellComponent: TableFilterCell,
        rowComponent: TableRow$1,
        messages: _extends({}, defaultMessages$5, messages)
      }, restProps));
    }
  }]);
  return TableFilterRow$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableFilterRow$1.Cell = TableFilterCell;
TableFilterRow$1.Row = TableRow$1;

TableFilterRow$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    filterPlaceholder: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

TableFilterRow$1.defaultProps = {
  messages: {}
};

var styles$20 = function styles$$1(theme) {
  return {
    groupingControl: {
      paddingLeft: 0,
      height: theme.spacing.unit * 3,
      cursor: 'pointer'
    },
    disabledGroupingControl: {
      cursor: 'default',
      opacity: 0.3
    }
  };
};

var GroupingControlBase = function GroupingControlBase(_ref) {
  var _classNames;

  var disabled = _ref.disabled,
      onGroup = _ref.onGroup,
      classes = _ref.classes;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    {
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onGroup(e);
      },
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.groupingControl, true), defineProperty(_classNames, classes.disabledGroupingControl, disabled), _classNames))
    },
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_List___default.a, null)
  );
};

GroupingControlBase.propTypes = {
  onGroup: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

GroupingControlBase.defaultProps = {
  disabled: false
};

var GroupingControl = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$20, { name: 'GroupingControl' })(GroupingControlBase);

var styles$21 = function styles$$1(theme) {
  return {
    resizeHandle: {
      position: 'absolute',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      width: theme.spacing.unit * 2 + 'px',
      top: 0,
      right: '-' + theme.spacing.unit + 'px',
      height: '100%',
      cursor: 'col-resize',
      zIndex: 100
    },
    resizeHandleLine: {
      position: 'absolute',
      backgroundColor: theme.palette.primary[300],
      height: '50%',
      width: '1px',
      top: '25%',
      transition: 'all linear 100ms'
    },
    resizeHandleFirstLine: {
      left: theme.spacing.unit - 1 + 'px'
    },
    resizeHandleSecondLine: {
      left: theme.spacing.unit + 1 + 'px'
    },
    resizeHandleLineActive: {
      left: theme.spacing.unit + 'px'
    },
    resizeHandleActive: {
      '& $resizeHandleLine': {
        opacity: '1',
        backgroundColor: theme.palette.primary[300],
        height: 'calc(100% - 4px)',
        top: '2px'
      }
    }
  };
};

var ResizingControlBase = function (_React$PureComponent) {
  inherits(ResizingControlBase, _React$PureComponent);

  function ResizingControlBase(props) {
    classCallCheck(this, ResizingControlBase);

    var _this = possibleConstructorReturn(this, (ResizingControlBase.__proto__ || Object.getPrototypeOf(ResizingControlBase)).call(this, props));

    _this.state = {
      resizing: false
    };

    _this.onResizeStart = function (_ref) {
      var x = _ref.x;

      _this.resizeStartingX = x;
      _this.setState({ resizing: true });
    };
    _this.onResizeUpdate = function (_ref2) {
      var x = _ref2.x;
      var onWidthDraft = _this.props.onWidthDraft;

      onWidthDraft({ shift: x - _this.resizeStartingX });
    };
    _this.onResizeEnd = function (_ref3) {
      var x = _ref3.x;
      var _this$props = _this.props,
          onWidthChange = _this$props.onWidthChange,
          onWidthDraftCancel = _this$props.onWidthDraftCancel;

      onWidthDraftCancel();
      onWidthChange({ shift: x - _this.resizeStartingX });
      _this.setState({ resizing: false });
    };
    return _this;
  }

  createClass(ResizingControlBase, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2, _classNames3;

      var _props = this.props,
          classes = _props.classes,
          resizeHandleOpacityClass = _props.resizeHandleOpacityClass;
      var resizing = this.state.resizing;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_22__devexpress_dx_react_core__["d" /* Draggable */],
        {
          onStart: this.onResizeStart,
          onUpdate: this.onResizeUpdate,
          onEnd: this.onResizeEnd
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.resizeHandle, true), defineProperty(_classNames, classes.resizeHandleActive, resizing), _classNames))
          },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', {
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames2 = {}, defineProperty(_classNames2, resizeHandleOpacityClass, true), defineProperty(_classNames2, classes.resizeHandleLine, true), defineProperty(_classNames2, classes.resizeHandleFirstLine, true), defineProperty(_classNames2, classes.resizeHandleLineActive, resizing), _classNames2))
          }),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', {
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames3 = {}, defineProperty(_classNames3, resizeHandleOpacityClass, true), defineProperty(_classNames3, classes.resizeHandleLine, true), defineProperty(_classNames3, classes.resizeHandleSecondLine, true), defineProperty(_classNames3, classes.resizeHandleLineActive, resizing), _classNames3))
          })
        )
      );
    }
  }]);
  return ResizingControlBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ResizingControlBase.propTypes = {
  onWidthChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  onWidthDraft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  onWidthDraftCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  resizeHandleOpacityClass: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired
};

var ResizingControl = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$21, { name: 'ResizingControl' })(ResizingControlBase);

var styles$22 = function styles$$1(theme) {
  return {
    tooltipRoot: {
      display: 'block'
    },
    sortLabelRoot: {
      height: theme.spacing.unit * 3,
      maxWidth: '100%'
    },
    sortLabelActive: {
      color: 'inherit'
    },
    sortLabelText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
};

var SortingControlBase = function SortingControlBase(_ref) {
  var align = _ref.align,
      sortingDirection = _ref.sortingDirection,
      columnTitle = _ref.columnTitle,
      onClick = _ref.onClick,
      classes = _ref.classes,
      getMessage = _ref.getMessage,
      disabled = _ref.disabled;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Tooltip___default.a,
    {
      title: getMessage('sortingHint'),
      placement: align === 'right' ? 'bottom-end' : 'bottom-start',
      enterDelay: 300,
      classes: {
        root: classes.tooltipRoot
      }
    },
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableSortLabel"],
      {
        active: !!sortingDirection,
        direction: sortingDirection === null ? undefined : sortingDirection,
        onClick: onClick,
        disabled: disabled,
        classes: {
          root: classes.sortLabelRoot,
          active: classes.sortLabelActive
        }
      },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'span',
        { className: classes.sortLabelText },
        columnTitle
      )
    )
  );
};

SortingControlBase.propTypes = {
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  sortingDirection: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])(['asc', 'desc', null]),
  columnTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

SortingControlBase.defaultProps = {
  sortingDirection: undefined,
  disabled: false
};

var SortingControl = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$22, { name: 'SortingControl' })(SortingControlBase);

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var styles$19 = function styles$$1(theme) {
  return {
    plainTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: theme.spacing.unit * 3 + 'px'
    },
    cell: {
      outline: 'none',
      position: 'relative',
      overflow: 'visible',
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      },
      '&:hover $resizeHandleLine': {
        opacity: 1
      }
    },
    resizeHandleLine: {
      opacity: 0
    },
    '@media (pointer: fine)': {
      resizeHandleLine: {
        opacity: 0
      },
      resizeHandleActive: {
        '& $resizeHandleLine': {
          opacity: 1
        }
      },
      resizeHandle: {
        '&:hover $resizeHandleLine': {
          opacity: 1
        }
      }
    },
    cellNoUserSelect: {
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    },
    cellDraggable: {
      cursor: 'pointer'
    },
    cellDimmed: {
      opacity: 0.3
    },
    cellRight: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    cellCenter: {
      textAlign: 'center'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    content: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    contentRight: {
      flexDirection: 'row-reverse'
    },
    contentNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableHeaderCellBase = function (_React$PureComponent) {
  inherits(TableHeaderCellBase, _React$PureComponent);

  function TableHeaderCellBase(props) {
    classCallCheck(this, TableHeaderCellBase);

    var _this = possibleConstructorReturn(this, (TableHeaderCellBase.__proto__ || Object.getPrototypeOf(TableHeaderCellBase)).call(this, props));

    _this.state = {
      dragging: false
    };

    _this.onClick = function (e) {
      var _this$props = _this.props,
          onSort = _this$props.onSort,
          sortingEnabled = _this$props.sortingEnabled;

      if (!sortingEnabled) return;

      var isActionKeyDown = e.keyCode === ENTER_KEY_CODE$1 || e.keyCode === SPACE_KEY_CODE$1;
      var isMouseClick = e.keyCode === undefined;

      var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
      var direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey ? null : undefined;

      e.preventDefault();
      onSort({
        direction: direction,
        keepOther: e.shiftKey || cancelSortingRelatedKey
      });
    };
    return _this;
  }

  createClass(TableHeaderCellBase, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _props = this.props,
          style = _props.style,
          column = _props.column,
          tableColumn = _props.tableColumn,
          showSortingControls = _props.showSortingControls,
          sortingDirection = _props.sortingDirection,
          showGroupingControls = _props.showGroupingControls,
          onGroup = _props.onGroup,
          groupingEnabled = _props.groupingEnabled,
          draggingEnabled = _props.draggingEnabled,
          resizingEnabled = _props.resizingEnabled,
          onWidthChange = _props.onWidthChange,
          onWidthDraft = _props.onWidthDraft,
          onWidthDraftCancel = _props.onWidthDraftCancel,
          sortingEnabled = _props.sortingEnabled,
          classes = _props.classes,
          getMessage = _props.getMessage,
          tableRow = _props.tableRow,
          className = _props.className,
          onSort = _props.onSort,
          before = _props.before,
          restProps = objectWithoutProperties(_props, ['style', 'column', 'tableColumn', 'showSortingControls', 'sortingDirection', 'showGroupingControls', 'onGroup', 'groupingEnabled', 'draggingEnabled', 'resizingEnabled', 'onWidthChange', 'onWidthDraft', 'onWidthDraftCancel', 'sortingEnabled', 'classes', 'getMessage', 'tableRow', 'className', 'onSort', 'before']);
      var dragging = this.state.dragging;

      var align = tableColumn && tableColumn.align || 'left';
      var columnTitle = column && (column.title || column.name);

      var tableCellClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.cellRight, align === 'right'), defineProperty(_classNames, classes.cellCenter, align === 'center'), defineProperty(_classNames, classes.cellNoUserSelect, draggingEnabled || showSortingControls), defineProperty(_classNames, classes.cellDraggable, draggingEnabled), defineProperty(_classNames, classes.cellDimmed, dragging || tableColumn && tableColumn.draft), _classNames), className);
      var contentClassed = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames2 = {}, defineProperty(_classNames2, classes.content, true), defineProperty(_classNames2, classes.contentNoWrap, !(tableColumn && tableColumn.wordWrapEnabled)), defineProperty(_classNames2, classes.contentRight, align === 'right'), _classNames2));
      var cellLayout = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
        _extends({
          style: style,
          className: tableCellClasses,
          numeric: align === 'right'
        }, restProps),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          'div',
          { className: classes.container },
          before,
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            'div',
            { className: contentClassed },
            showSortingControls ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(SortingControl, {
              align: align,
              disabled: !sortingEnabled,
              sortingDirection: sortingDirection,
              columnTitle: columnTitle,
              onClick: this.onClick,
              getMessage: getMessage
            }) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              'span',
              { className: classes.plainTitle },
              columnTitle
            )
          ),
          showGroupingControls && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            'div',
            { className: classes.controls },
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(GroupingControl, {
              disabled: !groupingEnabled,
              onGroup: onGroup
            })
          )
        ),
        resizingEnabled && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ResizingControl, {
          onWidthChange: onWidthChange,
          onWidthDraft: onWidthDraft,
          onWidthDraftCancel: onWidthDraftCancel,
          resizeHandleOpacityClass: classes.resizeHandleLine
        })
      );

      return draggingEnabled ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_22__devexpress_dx_react_core__["c" /* DragSource */],
        {
          ref: function ref(element) {
            _this2.cellRef = element;
          },
          payload: [{ type: 'column', columnName: column.name }],
          onStart: function onStart() {
            return _this2.setState({ dragging: true });
          },
          onEnd: function onEnd() {
            return _this2.cellRef && _this2.setState({ dragging: false });
          }
        },
        cellLayout
      ) : cellLayout;
    }
  }]);
  return TableHeaderCellBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableHeaderCellBase.propTypes = {
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  showSortingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  sortingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  sortingDirection: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])(['asc', 'desc', null]),
  onSort: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  showGroupingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  groupingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onGroup: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  draggingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  resizingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onWidthChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onWidthDraft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onWidthDraftCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  before: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"]
};

TableHeaderCellBase.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  sortingEnabled: false,
  onSort: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  onGroup: undefined,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  className: undefined,
  before: undefined
};

var TableHeaderCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$19, { name: 'TableHeaderCell' })(TableHeaderCellBase);

var defaultMessages$6 = {
  sortingHint: 'Sort'
};

var TableHeaderRow$1 = function (_React$PureComponent) {
  inherits(TableHeaderRow$$1, _React$PureComponent);

  function TableHeaderRow$$1() {
    classCallCheck(this, TableHeaderRow$$1);
    return possibleConstructorReturn(this, (TableHeaderRow$$1.__proto__ || Object.getPrototypeOf(TableHeaderRow$$1)).apply(this, arguments));
  }

  createClass(TableHeaderRow$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["B" /* TableHeaderRow */], _extends({
        cellComponent: TableHeaderCell,
        rowComponent: TableRow$1,
        messages: _extends({}, defaultMessages$6, messages)
      }, restProps));
    }
  }]);
  return TableHeaderRow$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableHeaderRow$1.Cell = TableHeaderCell;
TableHeaderRow$1.Row = TableRow$1;

TableHeaderRow$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    sortingHint: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

TableHeaderRow$1.defaultProps = {
  messages: {}
};

var getBorderColor = function getBorderColor(theme) {
  return '1px solid ' + (theme.palette.type === 'light' ? Object(__WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__["lighten"])(Object(__WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__["fade"])(theme.palette.divider, 1), 0.88) : Object(__WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__["darken"])(Object(__WEBPACK_IMPORTED_MODULE_24_material_ui_styles_colorManipulator__["fade"])(theme.palette.divider, 1), 0.8));
};

var styles$23 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3,
        borderLeft: 0
      },
      '&:last-child': {
        paddingRight: theme.spacing.unit * 3,
        borderRight: 0
      },
      height: theme.spacing.unit * 6,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderBottom: getBorderColor(theme),
      borderLeft: getBorderColor(theme),
      borderRight: getBorderColor(theme)
    }
  };
};

var CellBase = function CellBase(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className)
    }, restProps),
    children
  );
};

CellBase.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

CellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var Cell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$23, { name: 'Cell' })(CellBase);

var styles$24 = function styles$$1(theme) {
  return {
    headerCellBorder: {
      borderLeft: getBorderColor(theme),
      borderRight: getBorderColor(theme),
      borderTop: 'none',
      '&:first-child': {
        borderLeft: 0
      },
      '&:last-child': {
        borderRight: 0
      },
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit * 2
    }
  };
};

var BandedHeaderCellBase = function BandedHeaderCellBase(_ref) {
  var HeaderCellComponent = _ref.component,
      className = _ref.className,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['component', 'className', 'classes']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(HeaderCellComponent, _extends({
    className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.headerCellBorder, className)
  }, restProps));
};

BandedHeaderCellBase.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

BandedHeaderCellBase.defaultProps = {
  className: undefined
};

var BandedHeaderCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$24, { name: 'BandedHeaderCell' })(BandedHeaderCellBase);

var styles$25 = {
  emptyCell: {
    display: 'none'
  }
};

var InvisibleCellBase = function InvisibleCellBase(_ref) {
  var classes = _ref.classes;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"], { className: classes.emptyCell });
};

InvisibleCellBase.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired
};

var InvisibleCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$25, { name: 'InvisibleCell' })(InvisibleCellBase);

var styles$26 = {
  row: {
    height: 'auto'
  }
};

var RowBase = function RowBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'row', 'tableRow', 'tableColumn']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableRow"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.row, className)
    }, restProps),
    children
  );
};

RowBase.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

RowBase.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var Row = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$26, { name: 'Row' })(RowBase);

var TableBandHeader$1 = function (_React$PureComponent) {
  inherits(TableBandHeader$$1, _React$PureComponent);

  function TableBandHeader$$1() {
    classCallCheck(this, TableBandHeader$$1);
    return possibleConstructorReturn(this, (TableBandHeader$$1.__proto__ || Object.getPrototypeOf(TableBandHeader$$1)).apply(this, arguments));
  }

  createClass(TableBandHeader$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["t" /* TableBandHeader */], _extends({
        cellComponent: Cell,
        rowComponent: Row,
        bandedHeaderCellComponent: BandedHeaderCell,
        invisibleCellComponent: InvisibleCell
      }, this.props));
    }
  }]);
  return TableBandHeader$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableBandHeader$1.Cell = Cell;
TableBandHeader$1.Row = Row;
TableBandHeader$1.BandedHeaderCell = BandedHeaderCell;

var styles$27 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit
    },
    inputRoot: {
      width: '100%'
    },
    inputRight: {
      textAlign: 'right'
    },
    inputCenter: {
      textAlign: 'center'
    }
  };
};

var EditCellBase = function EditCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      style = _ref.style,
      classes = _ref.classes,
      children = _ref.children,
      row = _ref.row,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      editingEnabled = _ref.editingEnabled,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'onValueChange', 'style', 'classes', 'children', 'row', 'tableRow', 'tableColumn', 'editingEnabled', 'className']);

  var inputClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.inputRight, tableColumn && tableColumn.align === 'right'), defineProperty(_classNames, classes.inputCenter, tableColumn && tableColumn.align === 'center'), _classNames));

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className),
      style: style
    }, restProps),
    children || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_12_material_ui_Input___default.a, {
      className: classes.inputRoot,
      classes: { input: inputClasses },
      value: value || '',
      disabled: !editingEnabled,
      onChange: function onChange(e) {
        return onValueChange(e.target.value);
      }
    })
  );
};

EditCellBase.propTypes = {
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  onValueChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  editingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

EditCellBase.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  className: undefined,
  editingEnabled: true
};

var EditCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$27, { name: 'EditCell' })(EditCellBase);

var TableEditRow$1 = function (_React$PureComponent) {
  inherits(TableEditRow$$1, _React$PureComponent);

  function TableEditRow$$1() {
    classCallCheck(this, TableEditRow$$1);
    return possibleConstructorReturn(this, (TableEditRow$$1.__proto__ || Object.getPrototypeOf(TableEditRow$$1)).apply(this, arguments));
  }

  createClass(TableEditRow$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["y" /* TableEditRow */], _extends({
        cellComponent: EditCell,
        rowComponent: TableRow$1
      }, this.props));
    }
  }]);
  return TableEditRow$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableEditRow$1.Cell = EditCell;
TableEditRow$1.Row = TableRow$1;

var styles$28 = function styles$$1(theme) {
  return {
    button: {
      padding: theme.spacing.unit,
      minWidth: 40
    },
    headingCell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: '0 ' + theme.spacing.unit * 2 + 'px 0 ' + theme.spacing.unit * 3 + 'px'
    },
    cell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: '0 ' + theme.spacing.unit * 2 + 'px 0 ' + theme.spacing.unit * 3 + 'px'
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing.unit * 1.25
    }
  };
};

var withEditColumnStyles = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$28, { name: 'EditColumn' });

var CommandButtonBase = function CommandButtonBase(_ref) {
  var onExecute = _ref.onExecute,
      text = _ref.text,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['onExecute', 'text', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_15_material_ui_Button___default.a,
    _extends({
      color: 'primary',
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.button, className),
      onClick: function onClick(e) {
        e.stopPropagation();
        onExecute();
      }
    }, restProps),
    text
  );
};
CommandButtonBase.propTypes = {
  onExecute: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

CommandButtonBase.defaultProps = {
  className: undefined
};

var CommandButton = withEditColumnStyles(CommandButtonBase);

var EditCommandHeadingCellBase = function EditCommandHeadingCellBase(_ref2) {
  var _classNames;

  var children = _ref2.children,
      style = _ref2.style,
      classes = _ref2.classes,
      className = _ref2.className,
      tableRow = _ref2.tableRow,
      tableColumn = _ref2.tableColumn,
      rowSpan = _ref2.rowSpan,
      restProps = objectWithoutProperties(_ref2, ['children', 'style', 'classes', 'className', 'tableRow', 'tableColumn', 'rowSpan']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.headingCell, true), defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1), _classNames), className),
      rowSpan: rowSpan
    }, restProps),
    children
  );
};

EditCommandHeadingCellBase.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  rowSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]
};

EditCommandHeadingCellBase.defaultProps = {
  children: undefined,
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};

var EditCommandHeadingCell = withEditColumnStyles(EditCommandHeadingCellBase);

var EditCommandCellBase = function EditCommandCellBase(_ref3) {
  var tableRow = _ref3.tableRow,
      tableColumn = _ref3.tableColumn,
      row = _ref3.row,
      children = _ref3.children,
      style = _ref3.style,
      classes = _ref3.classes,
      className = _ref3.className,
      restProps = objectWithoutProperties(_ref3, ['tableRow', 'tableColumn', 'row', 'children', 'style', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.cell, className),
      style: style
    }, restProps),
    children
  );
};

EditCommandCellBase.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

EditCommandCellBase.defaultProps = {
  children: undefined,
  style: null,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined
};

var EditCommandCell = withEditColumnStyles(EditCommandCellBase);

var defaultMessages$7 = {
  addCommand: 'New',
  editCommand: 'Edit',
  deleteCommand: 'Delete',
  commitCommand: 'Save',
  cancelCommand: 'Cancel'
};

var TableEditColumn$1 = function (_React$PureComponent) {
  inherits(TableEditColumn$$1, _React$PureComponent);

  function TableEditColumn$$1() {
    classCallCheck(this, TableEditColumn$$1);
    return possibleConstructorReturn(this, (TableEditColumn$$1.__proto__ || Object.getPrototypeOf(TableEditColumn$$1)).apply(this, arguments));
  }

  createClass(TableEditColumn$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["x" /* TableEditColumn */], _extends({
        cellComponent: EditCommandCell,
        headerCellComponent: EditCommandHeadingCell,
        commandComponent: CommandButton,
        messages: _extends({}, defaultMessages$7, messages),
        width: 150
      }, restProps));
    }
  }]);
  return TableEditColumn$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableEditColumn$1.Command = CommandButton;
TableEditColumn$1.Cell = EditCommandCell;
TableEditColumn$1.HeaderCell = EditCommandHeadingCell;

TableEditColumn$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    addCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    editCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    deleteCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    commitCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    cancelCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

TableEditColumn$1.defaultProps = {
  messages: {}
};

var styles$29 = function styles$$1(theme) {
  return {
    emptyMessage: {
      margin: '0 auto',
      padding: theme.spacing.unit * 5 + 'px 0',
      fontFamily: theme.typography.fontFamily,
      color: theme.typography.subheading.color,
      fontSize: theme.typography.subheading.fontSize
    }
  };
};

var EmptyMessageBase = function EmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
      classes = _ref.classes,
      restProps = objectWithoutProperties(_ref, ['getMessage', 'classes']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_25_material_ui_Toolbar___default.a,
    restProps,
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'big',
      { className: classes.emptyMessage },
      getMessage('noColumns')
    )
  );
};

EmptyMessageBase.propTypes = {
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired
};

var EmptyMessage = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$29, { name: 'EmptyMessage' })(EmptyMessageBase);

var defaultMessages$8 = {
  noColumns: 'Nothing to show'
};

var TableColumnVisibility$1 = function (_React$PureComponent) {
  inherits(TableColumnVisibility$$1, _React$PureComponent);

  function TableColumnVisibility$$1() {
    classCallCheck(this, TableColumnVisibility$$1);
    return possibleConstructorReturn(this, (TableColumnVisibility$$1.__proto__ || Object.getPrototypeOf(TableColumnVisibility$$1)).apply(this, arguments));
  }

  createClass(TableColumnVisibility$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["w" /* TableColumnVisibility */], _extends({
        emptyMessageComponent: EmptyMessage,
        messages: _extends({}, defaultMessages$8, messages)
      }, restProps));
    }
  }]);
  return TableColumnVisibility$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableColumnVisibility$1.EmptyMessage = EmptyMessage;

TableColumnVisibility$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    noColumns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

TableColumnVisibility$1.defaultProps = {
  messages: {}
};

var TableReorderingCell = function TableReorderingCell(_ref) {
  var style = _ref.style,
      getCellDimensions = _ref.getCellDimensions;

  var refHandler = function refHandler(node$$1) {
    return node$$1 && getCellDimensions(function () {
      var _node$getBoundingClie = node$$1.getBoundingClientRect(),
          left = _node$getBoundingClie.left,
          right = _node$getBoundingClie.right;

      return { left: left, right: right };
    });
  };
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('td', {
    ref: refHandler,
    style: _extends({}, style, { padding: 0 })
  });
};

TableReorderingCell.propTypes = {
  getCellDimensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableReorderingCell.defaultProps = {
  style: null
};

var TableContainer$1 = function TableContainer(_ref) {
  var onOver = _ref.onOver,
      onLeave = _ref.onLeave,
      onDrop = _ref.onDrop,
      children = _ref.children;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_22__devexpress_dx_react_core__["e" /* DropTarget */],
    {
      onOver: onOver,
      onLeave: onLeave,
      onDrop: onDrop
    },
    children
  );
};

// eslint-disable-next-line react/prop-types
var ReorderingRow = function ReorderingRow(_ref2) {
  var style = _ref2.style,
      restParams = objectWithoutProperties(_ref2, ['style']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(TableRow$1, _extends({
    style: _extends({}, style, {
      visibility: 'hidden'
    })
  }, restParams));
};

var TableColumnReordering$1 = function TableColumnReordering$$1(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["u" /* TableColumnReordering */], _extends({
    tableContainerComponent: TableContainer$1,
    rowComponent: ReorderingRow,
    cellComponent: TableReorderingCell
  }, props));
};

var TableColumnResizing$1 = function (_React$PureComponent) {
  inherits(TableColumnResizing$$1, _React$PureComponent);

  function TableColumnResizing$$1() {
    classCallCheck(this, TableColumnResizing$$1);
    return possibleConstructorReturn(this, (TableColumnResizing$$1.__proto__ || Object.getPrototypeOf(TableColumnResizing$$1)).apply(this, arguments));
  }

  createClass(TableColumnResizing$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          minColumnWidth = _props.minColumnWidth,
          restProps = objectWithoutProperties(_props, ['minColumnWidth']);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["v" /* TableColumnResizing */], _extends({}, restProps, {
        minColumnWidth: minColumnWidth
      }));
    }
  }]);
  return TableColumnResizing$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableColumnResizing$1.propTypes = {
  minColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]
};

TableColumnResizing$1.defaultProps = {
  minColumnWidth: 40
};

var styles$30 = function styles$$1(theme) {
  return {
    toolbar: {
      borderBottom: getBorderColor(theme)
    }
  };
};

var ToolbarBase = function ToolbarBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className', 'style']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_25_material_ui_Toolbar___default.a,
    _extends({
      style: style,
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.toolbar, className)
    }, restProps),
    children
  );
};

ToolbarBase.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"].isRequired,
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

ToolbarBase.defaultProps = {
  className: undefined,
  style: null
};

var Toolbar$3 = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$30, { name: 'Toolbar' })(ToolbarBase);

var FlexibleSpace = function FlexibleSpace() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', { style: { flex: '0 0 0', marginLeft: 'auto' } });
};

var Toolbar$2 = function (_React$PureComponent) {
  inherits(Toolbar$$1, _React$PureComponent);

  function Toolbar$$1() {
    classCallCheck(this, Toolbar$$1);
    return possibleConstructorReturn(this, (Toolbar$$1.__proto__ || Object.getPrototypeOf(Toolbar$$1)).apply(this, arguments));
  }

  createClass(Toolbar$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["G" /* Toolbar */], _extends({
        rootComponent: Toolbar$3,
        flexibleSpaceComponent: FlexibleSpace
      }, this.props));
    }
  }]);
  return Toolbar$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Toolbar$2.Root = Toolbar$3;

var styles$31 = function styles$$1(theme) {
  return {
    button: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginLeft: -theme.spacing.unit,
      marginRight: theme.spacing.unit * 2,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    },
    hidden: {
      cursor: 'default',
      opacity: 0
    }
  };
};

var TableTreeExpandButtonBase = function TableTreeExpandButtonBase(_ref) {
  var _classNames;

  var visible = _ref.visible,
      expanded = _ref.expanded,
      classes = _ref.classes,
      onToggle = _ref.onToggle,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['visible', 'expanded', 'classes', 'onToggle', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.hidden, !visible), _classNames), className),
      onClick: function onClick(e) {
        if (!visible) return;
        e.stopPropagation();
        onToggle();
      },
      tabIndex: visible ? 0 : -1
    }, restProps),
    expanded ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_20__material_ui_icons_ExpandMore___default.a, null) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ChevronRight___default.a, null)
  );
};

TableTreeExpandButtonBase.propTypes = {
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired
};

TableTreeExpandButtonBase.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined
};

var TableTreeExpandButton = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$31)(TableTreeExpandButtonBase);

var styles$32 = function styles$$1(theme) {
  return {
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginRight: theme.spacing.unit * 2,
      marginLeft: -theme.spacing.unit * 2,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    }
  };
};

var TableTreeCheckboxBase = function TableTreeCheckboxBase(_ref) {
  var disabled = _ref.disabled,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['disabled', 'checked', 'indeterminate', 'onChange', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, _extends({
    className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(classes.checkbox, className),
    checked: checked,
    indeterminate: indeterminate,
    disabled: disabled,
    onClick: function onClick(e) {
      if (disabled) return;
      e.stopPropagation();
      onChange();
    }
  }, restProps));
};

TableTreeCheckboxBase.propTypes = {
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  indeterminate: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableTreeCheckboxBase.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  className: undefined
};

var TableTreeCheckbox = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$32)(TableTreeCheckboxBase);

var styles$33 = function styles$$1(theme) {
  return {
    indent: {
      marginLeft: theme.spacing.unit * 3
    }
  };
};

var TableTreeIndentBase = function TableTreeIndentBase(_ref) {
  var level = _ref.level,
      classes = _ref.classes;
  return Array.from({ length: level }).map(function (value, currentLevel) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      className: classes.indent
    });
  });
};

TableTreeIndentBase.propTypes = {
  level: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired
};

TableTreeIndentBase.defaultProps = {
  level: 0
};

var TableTreeIndent = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$33)(TableTreeIndentBase);

var styles$34 = function styles$$1() {
  return {
    content: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };
};

var TableTreeContentBase = function TableTreeContentBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['children', 'classes', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(defineProperty({}, classes.content, true), className)
    }, restProps),
    children
  );
};

TableTreeContentBase.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableTreeContentBase.defaultProps = {
  children: undefined,
  className: undefined
};

var TableTreeContent = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$34)(TableTreeContentBase);

var styles$35 = function styles$$1(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 3
      }
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
};

var TableTreeCellBase = function TableTreeCellBase(_ref) {
  var column = _ref.column,
      value = _ref.value,
      children = _ref.children,
      classes = _ref.classes,
      tableRow = _ref.tableRow,
      tableColumn = _ref.tableColumn,
      row = _ref.row,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['column', 'value', 'children', 'classes', 'tableRow', 'tableColumn', 'row', 'className']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_19_material_ui_Table__["TableCell"],
    _extends({
      className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(defineProperty({}, classes.cell, true), className)
    }, restProps),
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      'div',
      { className: classes.container },
      children
    )
  );
};

TableTreeCellBase.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"],
  tableRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  tableColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};

TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};

var TableTreeCell = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$35)(TableTreeCellBase);

var TableTreeColumn$1 = function (_React$PureComponent) {
  inherits(TableTreeColumn$$1, _React$PureComponent);

  function TableTreeColumn$$1() {
    classCallCheck(this, TableTreeColumn$$1);
    return possibleConstructorReturn(this, (TableTreeColumn$$1.__proto__ || Object.getPrototypeOf(TableTreeColumn$$1)).apply(this, arguments));
  }

  createClass(TableTreeColumn$$1, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["F" /* TableTreeColumn */], _extends({
        cellComponent: TableTreeCell,
        indentComponent: TableTreeIndent,
        expandButtonComponent: TableTreeExpandButton,
        checkboxComponent: TableTreeCheckbox,
        contentComponent: TableTreeContent
      }, this.props));
    }
  }]);
  return TableTreeColumn$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableTreeColumn$1.Cell = TableTreeCell;
TableTreeColumn$1.Indent = TableTreeIndent;
TableTreeColumn$1.ExpandButton = TableTreeExpandButton;
TableTreeColumn$1.Checkbox = TableTreeCheckbox;
TableTreeColumn$1.Content = TableTreeContent;

var styles$36 = function styles$$1(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.action.active
    }
  };
};

var SearchPanelInputBase = function SearchPanelInputBase(_ref) {
  var onValueChange = _ref.onValueChange,
      value = _ref.value,
      getMessage = _ref.getMessage,
      restProps = objectWithoutProperties(_ref, ['onValueChange', 'value', 'getMessage']);
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_12_material_ui_Input___default.a, _extends({
    onChange: function onChange(e) {
      return onValueChange(e.target.value);
    },
    value: value,
    type: 'text',
    placeholder: getMessage('searchPlaceholder')
  }, restProps, {
    startAdornment: Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
      __WEBPACK_IMPORTED_MODULE_12_material_ui_Input__["InputAdornment"],
      { position: 'start' },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_26__material_ui_icons_Search___default.a, null)
    )
  }));
};

SearchPanelInputBase.propTypes = {
  onValueChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  getMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};
SearchPanelInputBase.defaultProps = {
  value: ''
};

var SearchPanelInput = Object(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["withStyles"])(styles$36)(SearchPanelInputBase);

var defaultMessages$9 = {
  searchPlaceholder: 'Search...'
};

var SearchPanel$1 = function (_React$PureComponent) {
  inherits(SearchPanel$$1, _React$PureComponent);

  function SearchPanel$$1() {
    classCallCheck(this, SearchPanel$$1);
    return possibleConstructorReturn(this, (SearchPanel$$1.__proto__ || Object.getPrototypeOf(SearchPanel$$1)).apply(this, arguments));
  }

  createClass(SearchPanel$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          messages = _props.messages,
          restProps = objectWithoutProperties(_props, ['messages']);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_grid__["n" /* SearchPanel */], _extends({
        inputComponent: SearchPanelInput,
        messages: _extends({}, defaultMessages$9, messages)
      }, restProps));
    }
  }]);
  return SearchPanel$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

SearchPanel$1.Input = SearchPanelInput;

SearchPanel$1.propTypes = {
  messages: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    searchPlaceholder: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
  })
};

SearchPanel$1.defaultProps = {
  messages: {}
};


//# sourceMappingURL=dx-react-grid-material-ui.es.js.map


/***/ }),

/***/ "../node_modules/@devexpress/dx-react-grid/dist/dx-react-grid.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnChooser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FilteringState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IntegratedFiltering; });
/* unused harmony export EditingState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PagingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return IntegratedPaging; });
/* unused harmony export CustomPaging */
/* unused harmony export GroupingState */
/* unused harmony export IntegratedGrouping */
/* unused harmony export CustomGrouping */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SelectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return IntegratedSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SortingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return IntegratedSorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DragDropProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TableColumnReordering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return TableSelection; });
/* unused harmony export RowDetailState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return TableRowDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TableGroupRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TableHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TableBandHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return TableFilterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TableEditRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TableEditColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TableColumnResizing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PagingPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GroupingPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataTypeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TableColumnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return Toolbar; });
/* unused harmony export TreeDataState */
/* unused harmony export CustomTreeData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TableTreeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SearchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SearchPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return TableLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return VirtualTableLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return StaticTableLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GroupPanelLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__ = __webpack_require__("../node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__ = __webpack_require__("../node_modules/@devexpress/dx-grid-core/dist/dx-grid-core.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devexpress_dx_core__ = __webpack_require__("../node_modules/@devexpress/dx-core/dist/dx-core.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("../node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/**
 * Bundle of @devexpress/dx-react-grid
 * Generated: 2018-05-04
 * Version: 1.2.0
 * License: https://js.devexpress.com/Licensing
 */








var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var GridCore = function (_React$PureComponent) {
  inherits(GridCore, _React$PureComponent);

  function GridCore() {
    classCallCheck(this, GridCore);
    return possibleConstructorReturn(this, (GridCore.__proto__ || Object.getPrototypeOf(GridCore)).apply(this, arguments));
  }

  createClass(GridCore, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rows = _props.rows,
          columns = _props.columns,
          getRowId = _props.getRowId,
          getCellValue = _props.getCellValue,
          Root = _props.rootComponent;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        null,
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', value: rows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowId', value: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_46" /* rowIdGetter */])(getRowId, rows) }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'columns', value: columns }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getCellValue', value: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["r" /* cellValueGetter */])(getCellValue, columns) }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'root' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            Root,
            null,
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'header' }),
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'body' }),
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'footer' })
          )
        )
      );
    }
  }]);
  return GridCore;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

GridCore.propTypes = {
  rows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  getRowId: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  getCellValue: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  rootComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

GridCore.defaultProps = {
  getRowId: undefined,
  getCellValue: undefined
};

var Grid = function Grid(_ref) {
  var rows = _ref.rows,
      columns = _ref.columns,
      getRowId = _ref.getRowId,
      getCellValue = _ref.getCellValue,
      rootComponent = _ref.rootComponent,
      children = _ref.children;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["h" /* PluginHost */],
    null,
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(GridCore, {
      rows: rows,
      columns: columns,
      getRowId: getRowId,
      getCellValue: getCellValue,
      rootComponent: rootComponent
    }),
    children
  );
};

Grid.propTypes = {
  rows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  getRowId: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  getCellValue: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  rootComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["node"]
};

Grid.defaultProps = {
  getRowId: undefined,
  getCellValue: undefined,
  children: undefined
};

var pluginDependencies = [{ name: 'TableColumnVisibility' }, { name: 'Toolbar' }];
var ColumnChooser = function (_React$PureComponent) {
  inherits(ColumnChooser, _React$PureComponent);

  function ColumnChooser(props) {
    classCallCheck(this, ColumnChooser);

    var _this = possibleConstructorReturn(this, (ColumnChooser.__proto__ || Object.getPrototypeOf(ColumnChooser)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.buttonRef = _this.buttonRef.bind(_this);
    return _this;
  }

  createClass(ColumnChooser, [{
    key: 'buttonRef',
    value: function buttonRef(button) {
      this.button = button;
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({ visible: !this.state.visible });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.setState({ visible: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Overlay = _props.overlayComponent,
          Container = _props.containerComponent,
          Item = _props.itemComponent,
          ToggleButton = _props.toggleButtonComponent,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);
      var visible = this.state.visible;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'ColumnChooser',
          dependencies: pluginDependencies
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'toolbarContent' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref, _ref2) {
              var columns = _ref.columns,
                  hiddenColumnNames = _ref.hiddenColumnNames,
                  isColumnTogglingEnabled = _ref.isColumnTogglingEnabled;
              var toggleColumnVisibility = _ref2.toggleColumnVisibility;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
                null,
                Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ToggleButton, {
                  buttonRef: _this2.buttonRef,
                  onToggle: _this2.handleToggle,
                  getMessage: getMessage,
                  active: visible
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  Overlay,
                  {
                    visible: visible,
                    target: _this2.button,
                    onHide: _this2.handleHide
                  },
                  Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                    Container,
                    null,
                    Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["C" /* columnChooserItems */])(columns, hiddenColumnNames).map(function (item) {
                      var columnName = item.column.name;

                      var togglingEnabled = isColumnTogglingEnabled(columnName);
                      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Item, {
                        key: columnName,
                        item: item,
                        disabled: !togglingEnabled,
                        onToggle: function onToggle() {
                          return toggleColumnVisibility(columnName);
                        }
                      });
                    })
                  )
                )
              );
            }
          )
        )
      );
    }
  }]);
  return ColumnChooser;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ColumnChooser.propTypes = {
  overlayComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  itemComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  toggleButtonComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

ColumnChooser.defaultProps = {
  messages: {}
};

var STATE_CONSISTENCY_TIMEOUT = 1000 / 60;

var createStateHelper = function createStateHelper(component) {
  var controlledStateProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var stateConsistencyTimers = {};
  var checkStateConsistency = function checkStateConsistency(propertyName) {
    if (component.props[propertyName] !== undefined && component.props[propertyName] !== component.state[propertyName]) {
      component.setState(defineProperty({}, propertyName, component.props[propertyName]));
    }
  };
  var notifyStateChange = function notifyStateChange(nextState, state) {
    Object.keys(controlledStateProperties).forEach(function (propertyName) {
      var changeEvent = controlledStateProperties[propertyName]();
      if (changeEvent && nextState[propertyName] !== state[propertyName]) {
        changeEvent(nextState[propertyName]);
        clearTimeout(stateConsistencyTimers[propertyName]);
        stateConsistencyTimers[propertyName] = setTimeout(checkStateConsistency.bind(null, propertyName), STATE_CONSISTENCY_TIMEOUT);
      }
    });
  };

  var lastStateUpdater = null;
  var initialState = null;
  var applyReducer = function applyReducer(reduce, payload, callback) {
    var stateUpdater = function stateUpdater(prevState) {
      if (initialState === null) {
        initialState = prevState;
      }
      var stateChange = reduce(_extends({}, prevState), payload);
      var state = _extends({}, prevState, stateChange);

      if (typeof callback === 'function') {
        callback(state, prevState);
      }
      if (stateUpdater === lastStateUpdater) {
        notifyStateChange(state, initialState);
        initialState = null;
      }

      return stateChange;
    };
    lastStateUpdater = stateUpdater;
    component.setState(stateUpdater);
  };
  var applyFieldReducer = function applyFieldReducer(field, reduce, payload) {
    applyReducer(function (state) {
      return defineProperty({}, field, reduce(state[field], payload));
    });
  };

  return {
    applyReducer: applyReducer,
    applyFieldReducer: applyFieldReducer
  };
};

var columnExtensionValueGetter = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Y" /* getColumnExtensionValueGetter */])(columnExtensions, 'filteringEnabled', defaultValue);
};

var FilteringState = function (_React$PureComponent) {
  inherits(FilteringState, _React$PureComponent);

  function FilteringState(props) {
    classCallCheck(this, FilteringState);

    var _this = possibleConstructorReturn(this, (FilteringState.__proto__ || Object.getPrototypeOf(FilteringState)).call(this, props));

    _this.state = {
      filters: props.filters || props.defaultFilters
    };
    var stateHelper = createStateHelper(_this, {
      filters: function filters() {
        return _this.props.onFiltersChange;
      }
    });

    _this.changeColumnFilter = stateHelper.applyFieldReducer.bind(stateHelper, 'filters', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["t" /* changeColumnFilter */]);
    return _this;
  }

  createClass(FilteringState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var filters = nextProps.filters;

      this.setState(_extends({}, filters !== undefined ? { filters: filters } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var filters = this.state.filters;
      var _props = this.props,
          columnExtensions = _props.columnExtensions,
          columnFilteringEnabled = _props.columnFilteringEnabled;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'FilteringState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'filters', value: filters }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'filterExpression', computed: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_43" /* pushFilterExpression */])(filters) }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'isColumnFilteringEnabled',
          value: columnExtensionValueGetter(columnExtensions, columnFilteringEnabled)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeColumnFilter', action: this.changeColumnFilter })
      );
    }
  }]);
  return FilteringState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

FilteringState.propTypes = {
  filters: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultFilters: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onFiltersChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  columnFilteringEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

FilteringState.defaultProps = {
  filters: undefined,
  defaultFilters: [],
  onFiltersChange: undefined,
  columnExtensions: undefined,
  columnFilteringEnabled: true
};

var pluginDependencies$1 = [{ name: 'FilteringState', optional: true }, { name: 'SearchState', optional: true }];

var getCollapsedRowsComputed = function getCollapsedRowsComputed(_ref) {
  var rows = _ref.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["S" /* filteredCollapsedRowsGetter */])(rows);
};
var unwrappedRowsComputed = function unwrappedRowsComputed(_ref2) {
  var rows = _ref2.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_81" /* unwrappedFilteredRows */])(rows);
};

var IntegratedFiltering = function (_React$PureComponent) {
  inherits(IntegratedFiltering, _React$PureComponent);

  function IntegratedFiltering() {
    classCallCheck(this, IntegratedFiltering);
    return possibleConstructorReturn(this, (IntegratedFiltering.__proto__ || Object.getPrototypeOf(IntegratedFiltering)).apply(this, arguments));
  }

  createClass(IntegratedFiltering, [{
    key: 'render',
    value: function render() {
      var columnExtensions = this.props.columnExtensions;

      var getColumnPredicate = function getColumnPredicate(columnName) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["X" /* getColumnExtension */])(columnExtensions, columnName).predicate;
      };

      var rowsComputed = function rowsComputed(_ref3) {
        var rows = _ref3.rows,
            filterExpression = _ref3.filterExpression,
            getCellValue = _ref3.getCellValue,
            getRowLevelKey = _ref3.getRowLevelKey,
            getCollapsedRows = _ref3.getCollapsedRows;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["T" /* filteredRows */])(rows, filterExpression, getCellValue, getColumnPredicate, getRowLevelKey, getCollapsedRows);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'IntegratedFiltering',
          dependencies: pluginDependencies$1
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: rowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getCollapsedRows', computed: getCollapsedRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: unwrappedRowsComputed })
      );
    }
  }]);
  return IntegratedFiltering;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

IntegratedFiltering.propTypes = {
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};

IntegratedFiltering.defaultProps = {
  columnExtensions: undefined
};

var columnExtensionValueGetter$1 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Y" /* getColumnExtensionValueGetter */])(columnExtensions, 'editingEnabled', defaultValue);
};

var EditingState = function (_React$PureComponent) {
  inherits(EditingState, _React$PureComponent);

  function EditingState(props) {
    classCallCheck(this, EditingState);

    var _this = possibleConstructorReturn(this, (EditingState.__proto__ || Object.getPrototypeOf(EditingState)).call(this, props));

    _this.state = {
      editingRowIds: props.editingRowIds || props.defaultEditingRowIds,
      addedRows: props.addedRows || props.defaultAddedRows,
      rowChanges: props.rowChanges || props.defaultRowChanges,
      deletedRowIds: props.deletedRowIds || props.defaultDeletedRowIds
    };

    var stateHelper = createStateHelper(_this, {
      editingRowIds: function editingRowIds() {
        return _this.props.onEditingRowIdsChange;
      },
      addedRows: function addedRows() {
        return _this.props.onAddedRowsChange;
      },
      rowChanges: function rowChanges() {
        return _this.props.onRowChangesChange;
      },
      deletedRowIds: function deletedRowIds() {
        return _this.props.onDeletedRowIdsChange;
      }
    });

    _this.startEditRows = stateHelper.applyFieldReducer.bind(stateHelper, 'editingRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_53" /* startEditRows */]);
    _this.stopEditRows = stateHelper.applyFieldReducer.bind(stateHelper, 'editingRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_54" /* stopEditRows */]);

    _this.changeRow = stateHelper.applyFieldReducer.bind(stateHelper, 'rowChanges', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["x" /* changeRow */]);
    _this.cancelChangedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'rowChanges', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["n" /* cancelChanges */]);
    _this.commitChangedRows = function (_ref) {
      var rowIds = _ref.rowIds;

      _this.props.onCommitChanges({
        changed: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["A" /* changedRowsByIds */])(_this.state.rowChanges, rowIds)
      });
      _this.cancelChangedRows({ rowIds: rowIds });
    };

    _this.addRow = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["g" /* addRow */]);
    _this.changeAddedRow = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["s" /* changeAddedRow */]);
    _this.cancelAddedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["m" /* cancelAddedRows */]);
    _this.commitAddedRows = function (_ref2) {
      var rowIds = _ref2.rowIds;

      _this.props.onCommitChanges({
        added: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["h" /* addedRowsByIds */])(_this.state.addedRows, rowIds)
      });
      _this.cancelAddedRows({ rowIds: rowIds });
    };

    _this.deleteRows = stateHelper.applyFieldReducer.bind(stateHelper, 'deletedRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["K" /* deleteRows */]);
    _this.cancelDeletedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'deletedRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["p" /* cancelDeletedRows */]);
    _this.commitDeletedRows = function (_ref3) {
      var rowIds = _ref3.rowIds;

      _this.props.onCommitChanges({ deleted: rowIds });
      _this.cancelDeletedRows({ rowIds: rowIds });
    };
    return _this;
  }

  createClass(EditingState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var editingRowIds = nextProps.editingRowIds,
          rowChanges = nextProps.rowChanges,
          addedRows = nextProps.addedRows,
          deletedRowIds = nextProps.deletedRowIds;

      this.setState(_extends({}, editingRowIds !== undefined ? { editingRowIds: editingRowIds } : null, rowChanges !== undefined ? { rowChanges: rowChanges } : null, addedRows !== undefined ? { addedRows: addedRows } : null, deletedRowIds !== undefined ? { deletedRowIds: deletedRowIds } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          createRowChange = _props.createRowChange,
          columnExtensions = _props.columnExtensions,
          columnEditingEnabled = _props.columnEditingEnabled;
      var _state = this.state,
          editingRowIds = _state.editingRowIds,
          rowChanges = _state.rowChanges,
          addedRows = _state.addedRows,
          deletedRowIds = _state.deletedRowIds;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'EditingState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'createRowChange',
          value: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["D" /* createRowChangeGetter */])(createRowChange, columnExtensions)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'editingRowIds', value: editingRowIds }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'startEditRows', action: this.startEditRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'stopEditRows', action: this.stopEditRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rowChanges', value: rowChanges }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeRow', action: this.changeRow }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'cancelChangedRows', action: this.cancelChangedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'commitChangedRows', action: this.commitChangedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'addedRows', value: addedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'addRow', action: this.addRow }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeAddedRow', action: this.changeAddedRow }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'cancelAddedRows', action: this.cancelAddedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'commitAddedRows', action: this.commitAddedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'deletedRowIds', value: deletedRowIds }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'deleteRows', action: this.deleteRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'cancelDeletedRows', action: this.cancelDeletedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'commitDeletedRows', action: this.commitDeletedRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'isColumnEditingEnabled',
          value: columnExtensionValueGetter$1(columnExtensions, columnEditingEnabled)
        })
      );
    }
  }]);
  return EditingState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

EditingState.propTypes = {
  createRowChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columnEditingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],

  editingRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultEditingRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onEditingRowIdsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],

  addedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultAddedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onAddedRowsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],

  rowChanges: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  defaultRowChanges: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  onRowChangesChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],

  deletedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultDeletedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onDeletedRowIdsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],

  onCommitChanges: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

EditingState.defaultProps = {
  createRowChange: undefined,
  columnEditingEnabled: true,
  columnExtensions: undefined,

  editingRowIds: undefined,
  defaultEditingRowIds: [],
  onEditingRowIdsChange: undefined,

  rowChanges: undefined,
  defaultRowChanges: {},
  onRowChangesChange: undefined,

  addedRows: undefined,
  defaultAddedRows: [],
  onAddedRowsChange: undefined,

  deletedRowIds: undefined,
  defaultDeletedRowIds: [],
  onDeletedRowIdsChange: undefined
};

var PagingState = function (_React$PureComponent) {
  inherits(PagingState, _React$PureComponent);

  function PagingState(props) {
    classCallCheck(this, PagingState);

    var _this = possibleConstructorReturn(this, (PagingState.__proto__ || Object.getPrototypeOf(PagingState)).call(this, props));

    _this.state = {
      currentPage: props.currentPage || props.defaultCurrentPage,
      pageSize: props.pageSize !== undefined ? props.pageSize : props.defaultPageSize
    };

    var stateHelper = createStateHelper(_this, {
      currentPage: function currentPage$$1() {
        return _this.props.onCurrentPageChange;
      },
      pageSize: function pageSize() {
        return _this.props.onPageSizeChange;
      }
    });

    _this.setCurrentPage = stateHelper.applyFieldReducer.bind(stateHelper, 'currentPage', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_49" /* setCurrentPage */]);
    _this.setPageSize = stateHelper.applyFieldReducer.bind(stateHelper, 'pageSize', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_50" /* setPageSize */]);
    return _this;
  }

  createClass(PagingState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentPage$$1 = nextProps.currentPage,
          pageSize = nextProps.pageSize;

      this.setState(_extends({}, currentPage$$1 !== undefined ? { currentPage: currentPage$$1 } : null, pageSize !== undefined ? { pageSize: pageSize } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          pageSize = _state.pageSize,
          currentPage$$1 = _state.currentPage;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'PagingState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'currentPage', value: currentPage$$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'pageSize', value: pageSize }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'setCurrentPage', action: this.setCurrentPage }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'setPageSize', action: this.setPageSize })
      );
    }
  }]);
  return PagingState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

PagingState.propTypes = {
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  defaultPageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  onPageSizeChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  currentPage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  defaultCurrentPage: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  onCurrentPageChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

PagingState.defaultProps = {
  pageSize: undefined,
  defaultPageSize: 10,
  onPageSizeChange: undefined,
  currentPage: undefined,
  defaultCurrentPage: 0,
  onCurrentPageChange: undefined
};

var pluginDependencies$2 = [{ name: 'PagingState' }];

var rowsWithHeadersComputed = function rowsWithHeadersComputed(_ref) {
  var rows = _ref.rows,
      pageSize = _ref.pageSize,
      getRowLevelKey = _ref.getRowLevelKey;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_48" /* rowsWithPageHeaders */])(rows, pageSize, getRowLevelKey);
};
var totalCountComputed = function totalCountComputed(_ref2) {
  var rows = _ref2.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_45" /* rowCount */])(rows);
};
var paginatedRowsComputed = function paginatedRowsComputed(_ref3) {
  var rows = _ref3.rows,
      pageSize = _ref3.pageSize,
      page = _ref3.currentPage;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_42" /* paginatedRows */])(rows, pageSize, page);
};
var currentPageComputed = function currentPageComputed(_ref4, _ref5) {
  var page = _ref4.currentPage,
      totalCount = _ref4.totalCount,
      pageSize = _ref4.pageSize;
  var setCurrentPage$$1 = _ref5.setCurrentPage;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["E" /* currentPage */])(page, totalCount, pageSize, setCurrentPage$$1);
};

// eslint-disable-next-line react/prefer-stateless-function
var IntegratedPaging = function (_React$PureComponent) {
  inherits(IntegratedPaging, _React$PureComponent);

  function IntegratedPaging() {
    classCallCheck(this, IntegratedPaging);
    return possibleConstructorReturn(this, (IntegratedPaging.__proto__ || Object.getPrototypeOf(IntegratedPaging)).apply(this, arguments));
  }

  createClass(IntegratedPaging, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'IntegratedPaging',
          dependencies: pluginDependencies$2
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: rowsWithHeadersComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'totalCount', computed: totalCountComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'currentPage', computed: currentPageComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: paginatedRowsComputed })
      );
    }
  }]);
  return IntegratedPaging;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var pluginDependencies$3 = [{ name: 'PagingState' }];

var CustomPaging = function (_React$PureComponent) {
  inherits(CustomPaging, _React$PureComponent);

  function CustomPaging() {
    classCallCheck(this, CustomPaging);
    return possibleConstructorReturn(this, (CustomPaging.__proto__ || Object.getPrototypeOf(CustomPaging)).apply(this, arguments));
  }

  createClass(CustomPaging, [{
    key: 'render',
    value: function render() {
      var totalCount = this.props.totalCount;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'CustomPaging',
          dependencies: pluginDependencies$3
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'totalCount', value: totalCount })
      );
    }
  }]);
  return CustomPaging;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

CustomPaging.propTypes = {
  totalCount: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]
};

CustomPaging.defaultProps = {
  totalCount: 0
};

var dependencies = [{ name: 'SortingState', optional: true }];

var columnExtensionValueGetter$2 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Y" /* getColumnExtensionValueGetter */])(columnExtensions, 'groupingEnabled', defaultValue);
};

var GroupingState = function (_React$PureComponent) {
  inherits(GroupingState, _React$PureComponent);

  function GroupingState(props) {
    classCallCheck(this, GroupingState);

    var _this = possibleConstructorReturn(this, (GroupingState.__proto__ || Object.getPrototypeOf(GroupingState)).call(this, props));

    _this.state = {
      grouping: props.grouping || props.defaultGrouping,
      draftGrouping: null,
      expandedGroups: props.expandedGroups || props.defaultExpandedGroups
    };

    _this.stateHelper = createStateHelper(_this, {
      grouping: function grouping() {
        return _this.props.onGroupingChange;
      },
      expandedGroups: function expandedGroups() {
        return _this.props.onExpandedGroupsChange;
      }
    });

    _this.changeColumnGrouping = _this.changeColumnGrouping.bind(_this);
    _this.toggleGroupExpanded = _this.stateHelper.applyReducer.bind(_this.stateHelper, __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_76" /* toggleExpandedGroups */]);
    _this.draftColumnGrouping = _this.stateHelper.applyReducer.bind(_this.stateHelper, __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["L" /* draftColumnGrouping */]);
    _this.cancelColumnGroupingDraft = _this.stateHelper.applyReducer.bind(_this.stateHelper, __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["o" /* cancelColumnGroupingDraft */]);
    _this.changeColumnSorting = _this.changeColumnSorting.bind(_this);
    return _this;
  }

  createClass(GroupingState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var grouping = nextProps.grouping,
          expandedGroups = nextProps.expandedGroups;

      this.setState(_extends({}, grouping !== undefined ? { grouping: grouping } : null, expandedGroups !== undefined ? { expandedGroups: expandedGroups } : null));
    }
  }, {
    key: 'changeColumnSorting',
    value: function changeColumnSorting$$1(_ref, _ref2, _ref3) {
      var sorting = _ref2.sorting;
      var _changeColumnSorting = _ref3.changeColumnSorting;
      var columnName = _ref.columnName,
          keepOther = _ref.keepOther,
          restParams = objectWithoutProperties(_ref, ['columnName', 'keepOther']);
      var grouping = this.state.grouping;

      var groupingIndex = grouping.findIndex(function (columnGrouping) {
        return columnGrouping.columnName === columnName;
      });
      if (groupingIndex === -1) {
        _changeColumnSorting(_extends({
          columnName: columnName,
          keepOther: keepOther || grouping.map(function (columnGrouping) {
            return columnGrouping.columnName;
          })
        }, restParams));
        return false;
      }

      var sortIndex = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["i" /* adjustSortIndex */])(groupingIndex, grouping, sorting);
      _changeColumnSorting(_extends({
        columnName: columnName,
        keepOther: true,
        sortIndex: sortIndex
      }, restParams));
      return false;
    }
  }, {
    key: 'changeColumnGrouping',
    value: function changeColumnGrouping$$1(_ref4, getters, actions) {
      var columnName = _ref4.columnName,
          groupIndex = _ref4.groupIndex;

      this.stateHelper.applyReducer(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["u" /* changeColumnGrouping */], { columnName: columnName, groupIndex: groupIndex }, function (nextState, state) {
        var grouping = nextState.grouping;
        var prevGrouping = state.grouping;
        var sorting = getters.sorting;
        var changeColumnSorting$$1 = actions.changeColumnSorting;


        if (!sorting) return;

        var columnSortingIndex = sorting.findIndex(function (columnSorting) {
          return columnSorting.columnName === columnName;
        });
        var prevGroupingIndex = prevGrouping.findIndex(function (columnGrouping) {
          return columnGrouping.columnName === columnName;
        });
        var groupingIndex = grouping.findIndex(function (columnGrouping) {
          return columnGrouping.columnName === columnName;
        });

        if (columnSortingIndex === -1 || prevGroupingIndex === prevGrouping.length - 1 && groupingIndex === -1) return;

        var sortIndex = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["i" /* adjustSortIndex */])(groupingIndex === -1 ? grouping.length : groupingIndex, grouping, sorting);

        if (columnSortingIndex === sortIndex) return;

        changeColumnSorting$$1(_extends({
          keepOther: true,
          sortIndex: sortIndex
        }, sorting[columnSortingIndex]));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          grouping = _state.grouping,
          draftGrouping = _state.draftGrouping,
          expandedGroups = _state.expandedGroups;
      var _props = this.props,
          columnExtensions = _props.columnExtensions,
          columnGroupingEnabled = _props.columnGroupingEnabled;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'GroupingState',
          dependencies: dependencies
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'grouping', value: grouping }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'draftGrouping', value: draftGrouping || grouping }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'isColumnGroupingEnabled',
          value: columnExtensionValueGetter$2(columnExtensions, columnGroupingEnabled)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeColumnGrouping', action: this.changeColumnGrouping }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'draftColumnGrouping', action: this.draftColumnGrouping }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'cancelColumnGroupingDraft', action: this.cancelColumnGroupingDraft }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'expandedGroups', value: expandedGroups }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'toggleGroupExpanded', action: this.toggleGroupExpanded }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeColumnSorting', action: this.changeColumnSorting })
      );
    }
  }]);
  return GroupingState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

GroupingState.propTypes = {
  grouping: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultGrouping: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onGroupingChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  expandedGroups: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultExpandedGroups: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onExpandedGroupsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  columnGroupingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

GroupingState.defaultProps = {
  grouping: undefined,
  defaultGrouping: [],
  onGroupingChange: undefined,
  expandedGroups: undefined,
  defaultExpandedGroups: [],
  onExpandedGroupsChange: undefined,
  columnExtensions: undefined,
  columnGroupingEnabled: true
};

var pluginDependencies$4 = [{ name: 'GroupingState' }];

var getCollapsedRowsComputed$1 = function getCollapsedRowsComputed(_ref) {
  var getCollapsedRows = _ref.getCollapsedRows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_7" /* groupCollapsedRowsGetter */])(getCollapsedRows);
};
var expandedGroupedRowsComputed = function expandedGroupedRowsComputed(_ref2) {
  var rows = _ref2.rows,
      grouping = _ref2.grouping,
      expandedGroups = _ref2.expandedGroups;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["P" /* expandedGroupRows */])(rows, grouping, expandedGroups);
};

var IntegratedGrouping = function (_React$PureComponent) {
  inherits(IntegratedGrouping, _React$PureComponent);

  function IntegratedGrouping() {
    classCallCheck(this, IntegratedGrouping);
    return possibleConstructorReturn(this, (IntegratedGrouping.__proto__ || Object.getPrototypeOf(IntegratedGrouping)).apply(this, arguments));
  }

  createClass(IntegratedGrouping, [{
    key: 'render',
    value: function render() {
      var columnExtensions = this.props.columnExtensions;

      var getColumnCriteria = function getColumnCriteria(columnName) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["X" /* getColumnExtension */])(columnExtensions, columnName).criteria;
      };

      var groupedRowsComputed = function groupedRowsComputed(_ref3) {
        var rows = _ref3.rows,
            grouping = _ref3.grouping,
            getCellValue = _ref3.getCellValue;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_10" /* groupedRows */])(rows, grouping, getCellValue, getColumnCriteria);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'IntegratedGrouping',
          dependencies: pluginDependencies$4
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'isGroupRow', value: __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_8" /* groupRowChecker */] }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowLevelKey', value: __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_9" /* groupRowLevelKeyGetter */] }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getCollapsedRows', computed: getCollapsedRowsComputed$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: groupedRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: expandedGroupedRowsComputed })
      );
    }
  }]);
  return IntegratedGrouping;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

IntegratedGrouping.propTypes = {
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};

IntegratedGrouping.defaultProps = {
  columnExtensions: undefined
};

var pluginDependencies$5 = [{ name: 'GroupingState' }];

var getCollapsedRowsComputed$2 = function getCollapsedRowsComputed(_ref) {
  var getCollapsedRows = _ref.getCollapsedRows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_7" /* groupCollapsedRowsGetter */])(getCollapsedRows);
};
var expandedGroupedRowsComputed$1 = function expandedGroupedRowsComputed(_ref2) {
  var rows = _ref2.rows,
      grouping = _ref2.grouping,
      expandedGroups = _ref2.expandedGroups;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["P" /* expandedGroupRows */])(rows, grouping, expandedGroups);
};
var getRowIdComputed = function getRowIdComputed(_ref3) {
  var getRowId = _ref3.getRowId,
      rows = _ref3.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["G" /* customGroupingRowIdGetter */])(getRowId, rows);
};

var CustomGrouping = function (_React$PureComponent) {
  inherits(CustomGrouping, _React$PureComponent);

  function CustomGrouping() {
    classCallCheck(this, CustomGrouping);
    return possibleConstructorReturn(this, (CustomGrouping.__proto__ || Object.getPrototypeOf(CustomGrouping)).apply(this, arguments));
  }

  createClass(CustomGrouping, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          getChildGroups = _props.getChildGroups,
          appliedGrouping = _props.grouping,
          appliedExpandedGroups = _props.expandedGroups;

      var groupedRowsComputed = function groupedRowsComputed(_ref4) {
        var rows = _ref4.rows,
            grouping = _ref4.grouping;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["F" /* customGroupedRows */])(rows, grouping, getChildGroups);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'CustomGrouping',
          dependencies: pluginDependencies$5
        },
        appliedGrouping && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'grouping', value: appliedGrouping }),
        appliedExpandedGroups && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'expandedGroups', value: appliedExpandedGroups }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'isGroupRow', value: __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_8" /* groupRowChecker */] }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowLevelKey', value: __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_9" /* groupRowLevelKeyGetter */] }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getCollapsedRows', computed: getCollapsedRowsComputed$2 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: groupedRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowId', computed: getRowIdComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: expandedGroupedRowsComputed$1 })
      );
    }
  }]);
  return CustomGrouping;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

CustomGrouping.propTypes = {
  getChildGroups: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  grouping: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  expandedGroups: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};

CustomGrouping.defaultProps = {
  grouping: undefined,
  expandedGroups: undefined
};

var SelectionState = function (_React$PureComponent) {
  inherits(SelectionState, _React$PureComponent);

  function SelectionState(props) {
    classCallCheck(this, SelectionState);

    var _this = possibleConstructorReturn(this, (SelectionState.__proto__ || Object.getPrototypeOf(SelectionState)).call(this, props));

    _this.state = {
      selection: props.selection || props.defaultSelection
    };

    var stateHelper = createStateHelper(_this, {
      selection: function selection() {
        return _this.props.onSelectionChange;
      }
    });

    _this.toggleSelection = stateHelper.applyFieldReducer.bind(stateHelper, 'selection', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_78" /* toggleSelection */]);
    return _this;
  }

  createClass(SelectionState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selection = nextProps.selection;

      this.setState(_extends({}, selection !== undefined ? { selection: selection } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var selection = this.state.selection;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'SelectionState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'selection', value: selection }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'toggleSelection', action: this.toggleSelection })
      );
    }
  }]);
  return SelectionState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

SelectionState.propTypes = {
  selection: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultSelection: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onSelectionChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

SelectionState.defaultProps = {
  selection: undefined,
  defaultSelection: [],
  onSelectionChange: undefined
};

var rowsWithAvailableToSelectComputed = function rowsWithAvailableToSelectComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId,
      isGroupRow = _ref.isGroupRow;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_47" /* rowsWithAvailableToSelect */])(rows, getRowId, isGroupRow);
};
var allSelectedComputed = function allSelectedComputed(_ref2) {
  var rows = _ref2.rows,
      selection = _ref2.selection;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["j" /* allSelected */])(rows, selection);
};
var someSelectedComputed = function someSelectedComputed(_ref3) {
  var rows = _ref3.rows,
      selection = _ref3.selection;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_51" /* someSelected */])(rows, selection);
};
var selectAllAvailableComputed = function selectAllAvailableComputed(_ref4) {
  var availableToSelect = _ref4.rows.availableToSelect;
  return !!availableToSelect.length;
};
var toggleSelectAll = function toggleSelectAll(state, _ref5, _ref6) {
  var availableToSelect = _ref5.rows.availableToSelect;
  var toggleSelection$$1 = _ref6.toggleSelection;

  toggleSelection$$1({ rowIds: availableToSelect, state: state });
};
var unwrapRowsComputed = function unwrapRowsComputed(_ref7) {
  var rows = _ref7.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_79" /* unwrapSelectedRows */])(rows);
};

var pluginDependencies$6 = [{ name: 'SelectionState' }];

// eslint-disable-next-line react/prefer-stateless-function
var IntegratedSelection = function (_React$PureComponent) {
  inherits(IntegratedSelection, _React$PureComponent);

  function IntegratedSelection() {
    classCallCheck(this, IntegratedSelection);
    return possibleConstructorReturn(this, (IntegratedSelection.__proto__ || Object.getPrototypeOf(IntegratedSelection)).apply(this, arguments));
  }

  createClass(IntegratedSelection, [{
    key: 'render',
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'IntegratedSelection',
          dependencies: pluginDependencies$6
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: rowsWithAvailableToSelectComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'allSelected', computed: allSelectedComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'someSelected', computed: someSelectedComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'selectAllAvailable', computed: selectAllAvailableComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'toggleSelectAll', action: toggleSelectAll }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: unwrapRowsComputed })
      );
    }
  }]);
  return IntegratedSelection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var columnExtensionValueGetter$3 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Y" /* getColumnExtensionValueGetter */])(columnExtensions, 'sortingEnabled', defaultValue);
};

var SortingState = function (_React$PureComponent) {
  inherits(SortingState, _React$PureComponent);

  function SortingState(props) {
    classCallCheck(this, SortingState);

    var _this = possibleConstructorReturn(this, (SortingState.__proto__ || Object.getPrototypeOf(SortingState)).call(this, props));

    _this.state = {
      sorting: props.sorting || props.defaultSorting
    };

    var persistentSortedColumns = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_3" /* getPersistentSortedColumns */])(_this.state.sorting, props.columnExtensions);

    var stateHelper = createStateHelper(_this, {
      sorting: function sorting() {
        return _this.props.onSortingChange;
      }
    });

    _this.changeColumnSorting = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
      var keepOther = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["k" /* calculateKeepOther */])(prevState.sorting, payload.keepOther, persistentSortedColumns);
      return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["w" /* changeColumnSorting */])(prevState, _extends({}, payload, { keepOther: keepOther }));
    });
    return _this;
  }

  createClass(SortingState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var sorting = nextProps.sorting;

      this.setState(_extends({}, sorting !== undefined ? { sorting: sorting } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var sorting = this.state.sorting;
      var _props = this.props,
          columnExtensions = _props.columnExtensions,
          columnSortingEnabled = _props.columnSortingEnabled;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'SortingState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'sorting', value: sorting }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'isColumnSortingEnabled',
          value: columnExtensionValueGetter$3(columnExtensions, columnSortingEnabled)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeColumnSorting', action: this.changeColumnSorting })
      );
    }
  }]);
  return SortingState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

SortingState.propTypes = {
  sorting: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultSorting: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onSortingChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  columnSortingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

SortingState.defaultProps = {
  sorting: undefined,
  defaultSorting: [],
  onSortingChange: undefined,
  columnExtensions: undefined,
  columnSortingEnabled: true
};

var pluginDependencies$7 = [{ name: 'SortingState' }];

var IntegratedSorting = function (_React$PureComponent) {
  inherits(IntegratedSorting, _React$PureComponent);

  function IntegratedSorting() {
    classCallCheck(this, IntegratedSorting);
    return possibleConstructorReturn(this, (IntegratedSorting.__proto__ || Object.getPrototypeOf(IntegratedSorting)).apply(this, arguments));
  }

  createClass(IntegratedSorting, [{
    key: 'render',
    value: function render() {
      var columnExtensions = this.props.columnExtensions;

      var getColumnCompare = function getColumnCompare(columnName) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["X" /* getColumnExtension */])(columnExtensions, columnName).compare;
      };

      var rowsComputed = function rowsComputed(_ref) {
        var rows = _ref.rows,
            sorting = _ref.sorting,
            getCellValue = _ref.getCellValue,
            isGroupRow = _ref.isGroupRow,
            getRowLevelKey = _ref.getRowLevelKey;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_52" /* sortedRows */])(rows, sorting, getCellValue, getColumnCompare, isGroupRow, getRowLevelKey);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'IntegratedSorting',
          dependencies: pluginDependencies$7
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: rowsComputed })
      );
    }
  }]);
  return IntegratedSorting;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

IntegratedSorting.propTypes = {
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};

IntegratedSorting.defaultProps = {
  columnExtensions: undefined
};

var getTargetColumns = function getTargetColumns(payload, columns) {
  return payload.filter(function (item) {
    return item.type === 'column';
  }).map(function (item) {
    return columns.find(function (column) {
      return column.name === item.columnName;
    });
  });
};

var DragDropProvider$1 = function (_React$PureComponent) {
  inherits(DragDropProvider$$1, _React$PureComponent);

  function DragDropProvider$$1(props) {
    classCallCheck(this, DragDropProvider$$1);

    var _this = possibleConstructorReturn(this, (DragDropProvider$$1.__proto__ || Object.getPrototypeOf(DragDropProvider$$1)).call(this, props));

    _this.state = {
      payload: null,
      clientOffset: null
    };

    _this.change = function (_ref) {
      var payload = _ref.payload,
          clientOffset = _ref.clientOffset;
      return _this.setState({ payload: payload, clientOffset: clientOffset });
    };
    return _this;
  }

  createClass(DragDropProvider$$1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Container = _props.containerComponent,
          Column = _props.columnComponent;
      var _state = this.state,
          payload = _state.payload,
          clientOffset = _state.clientOffset;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'DragDropProvider'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'draggingEnabled', value: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'root' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["b" /* DragDropProvider */],
            {
              onChange: this.change
            },
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null)
          ),
          payload && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref2) {
              var columns = _ref2.columns;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                Container,
                {
                  clientOffset: clientOffset
                },
                getTargetColumns(payload, columns).map(function (column) {
                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Column, {
                    key: column.name,
                    column: column
                  });
                })
              );
            }
          )
        )
      );
    }
  }]);
  return DragDropProvider$$1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

DragDropProvider$1.propTypes = {
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  columnComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var pluginDependencies$8 = [{ name: 'Table' }];

var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
  var tableHeaderRows = _ref.tableHeaderRows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_67" /* tableHeaderRowsWithReordering */])(tableHeaderRows);
};

var TableColumnReordering = function (_React$PureComponent) {
  inherits(TableColumnReordering, _React$PureComponent);

  function TableColumnReordering(props) {
    classCallCheck(this, TableColumnReordering);

    var _this = possibleConstructorReturn(this, (TableColumnReordering.__proto__ || Object.getPrototypeOf(TableColumnReordering)).call(this, props));

    _this.state = {
      order: props.defaultOrder,
      sourceColumnIndex: -1,
      targetColumnIndex: -1
    };

    _this.onOver = _this.handleOver.bind(_this);
    _this.onLeave = _this.handleLeave.bind(_this);
    _this.onDrop = _this.handleDrop.bind(_this);
    return _this;
  }

  createClass(TableColumnReordering, [{
    key: 'getState',
    value: function getState() {
      var _props$order = this.props.order,
          order = _props$order === undefined ? this.state.order : _props$order;

      return _extends({}, this.state, {
        order: order
      });
    }
  }, {
    key: 'getDraftOrder',
    value: function getDraftOrder() {
      var _getState = this.getState(),
          order = _getState.order,
          sourceColumnIndex = _getState.sourceColumnIndex,
          targetColumnIndex = _getState.targetColumnIndex;

      return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["M" /* draftOrder */])(order, sourceColumnIndex, targetColumnIndex);
    }
  }, {
    key: 'getAvailableColumns',
    value: function getAvailableColumns() {
      var _this2 = this;

      return this.getDraftOrder().filter(function (columnName) {
        return !!_this2.cellDimensionGetters[columnName];
      });
    }
  }, {
    key: 'cacheCellDimensions',
    value: function cacheCellDimensions() {
      var _this3 = this;

      this.cellDimensions = this.cellDimensions && this.cellDimensions.length ? this.cellDimensions : this.getAvailableColumns().map(function (columnName) {
        return _this3.cellDimensionGetters[columnName]();
      });
    }
  }, {
    key: 'resetCellDimensions',
    value: function resetCellDimensions() {
      this.cellDimensions = [];
    }
  }, {
    key: 'ensureCellDimensionGetters',
    value: function ensureCellDimensionGetters(tableColumns) {
      var _this4 = this;

      Object.keys(this.cellDimensionGetters).forEach(function (columnName) {
        var columnIndex = tableColumns.findIndex(function (_ref2) {
          var type = _ref2.type,
              column = _ref2.column;
          return type === __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["e" /* TABLE_DATA_TYPE */] && column.name === columnName;
        });
        if (columnIndex === -1) {
          delete _this4.cellDimensionGetters[columnName];
        }
      });
    }
  }, {
    key: 'storeCellDimensionsGetter',
    value: function storeCellDimensionsGetter(tableColumn, getter, tableColumns) {
      if (tableColumn.type === __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["e" /* TABLE_DATA_TYPE */]) {
        this.cellDimensionGetters[tableColumn.column.name] = getter;
      }
      this.ensureCellDimensionGetters(tableColumns);
    }
  }, {
    key: 'handleOver',
    value: function handleOver(_ref3) {
      var payload = _ref3.payload,
          x = _ref3.clientOffset.x;

      var sourceColumnName = payload[0].columnName;
      var availableColumns = this.getAvailableColumns();
      var relativeSourceColumnIndex = availableColumns.indexOf(sourceColumnName);

      if (relativeSourceColumnIndex === -1) return;

      this.cacheCellDimensions();
      var cellDimensions = this.cellDimensions;


      var overlappedColumns = cellDimensions.filter(function (_ref4) {
        var left = _ref4.left,
            right = _ref4.right;
        return left <= x && x <= right;
      });

      if (overlappedColumns.length > 1) return;

      var relativeTargetIndex = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_5" /* getTableTargetColumnIndex */])(cellDimensions, relativeSourceColumnIndex, x);

      if (relativeTargetIndex === -1) return;

      var _getState2 = this.getState(),
          prevSourceColumnIndex = _getState2.sourceColumnIndex,
          prevTargetColumnIndex = _getState2.targetColumnIndex;

      var draftOrder$$1 = this.getDraftOrder();
      var targetColumnIndex = draftOrder$$1.indexOf(availableColumns[relativeTargetIndex]);

      if (targetColumnIndex === prevTargetColumnIndex) return;

      var sourceColumnIndex = prevSourceColumnIndex === -1 ? draftOrder$$1.indexOf(sourceColumnName) : prevSourceColumnIndex;

      this.setState({
        sourceColumnIndex: sourceColumnIndex,
        targetColumnIndex: targetColumnIndex
      });
    }
  }, {
    key: 'handleLeave',
    value: function handleLeave() {
      this.setState({
        sourceColumnIndex: -1,
        targetColumnIndex: -1
      });

      this.resetCellDimensions();
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop() {
      var _getState3 = this.getState(),
          sourceColumnIndex = _getState3.sourceColumnIndex,
          targetColumnIndex = _getState3.targetColumnIndex,
          order = _getState3.order;

      var onOrderChange = this.props.onOrderChange;

      var nextOrder = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["v" /* changeColumnOrder */])(order, {
        sourceColumnName: order[sourceColumnIndex],
        targetColumnName: order[targetColumnIndex]
      });

      this.setState({
        order: nextOrder,
        sourceColumnIndex: -1,
        targetColumnIndex: -1
      });

      if (onOrderChange) {
        onOrderChange(nextOrder);
      }

      this.resetCellDimensions();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          Container = _props.tableContainerComponent,
          Row = _props.rowComponent,
          Cell = _props.cellComponent;


      var columnsComputed = function columnsComputed(_ref5) {
        var tableColumns = _ref5.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_40" /* orderedColumns */])(tableColumns, _this5.getDraftOrder());
      };

      this.cellDimensionGetters = {};

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableColumnReordering',
          dependencies: pluginDependencies$8
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: columnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'table' },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              Container,
              _extends({}, params, {
                onOver: _this5.onOver,
                onLeave: _this5.onLeave,
                onDrop: _this5.onDrop
              }),
              Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null)
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref6) {
              var tableRow = _ref6.tableRow;
              return tableRow.type === __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["f" /* TABLE_REORDERING_TYPE */];
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Row, params);
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.tableRow;
              return tableRow.type === __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["f" /* TABLE_REORDERING_TYPE */];
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref8) {
                var tableColumns = _ref8.tableColumns;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Cell, _extends({}, params, {
                  getCellDimensions: function getCellDimensions(getter) {
                    return _this5.storeCellDimensionsGetter(params.tableColumn, getter, tableColumns);
                  }
                }));
              }
            );
          }
        )
      );
    }
  }]);
  return TableColumnReordering;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableColumnReordering.propTypes = {
  order: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]),
  defaultOrder: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]),
  onOrderChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  tableContainerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

TableColumnReordering.defaultProps = {
  order: undefined,
  defaultOrder: [],
  onOrderChange: undefined
};

var RowPlaceholder = function RowPlaceholder(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'tableRow', params: props });
};
var CellPlaceholder = function CellPlaceholder(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'tableCell', params: props });
};

var tableHeaderRows = [];
var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_69" /* tableRowsWithDataRows */])(rows, getRowId);
};

var pluginDependencies$9 = [{ name: 'DataTypeProvider', optional: true }];

var Table = function (_React$PureComponent) {
  inherits(Table, _React$PureComponent);

  function Table() {
    classCallCheck(this, Table);
    return possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Layout = _props.layoutComponent,
          Cell = _props.cellComponent,
          Row = _props.rowComponent,
          NoDataRow = _props.noDataRowComponent,
          NoDataCell = _props.noDataCellComponent,
          StubRow = _props.stubRowComponent,
          StubCell = _props.stubCellComponent,
          StubHeaderCell = _props.stubHeaderCellComponent,
          columnExtensions = _props.columnExtensions,
          messages = _props.messages,
          containerComponent = _props.containerComponent,
          tableComponent = _props.tableComponent,
          headComponent = _props.headComponent,
          bodyComponent = _props.bodyComponent;


      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);
      var tableColumnsComputed = function tableColumnsComputed(_ref2) {
        var columns = _ref2.columns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_56" /* tableColumnsWithDataRows */])(columns, columnExtensions);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'Table',
          dependencies: pluginDependencies$9
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableHeaderRows', value: tableHeaderRows }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableBodyRows', computed: tableBodyRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getTableCellColSpan', value: __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_55" /* tableCellColSpanGetter */] }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'body' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'table' })
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'table' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref3) {
              var headerRows = _ref3.tableHeaderRows,
                  bodyRows = _ref3.tableBodyRows,
                  columns = _ref3.tableColumns,
                  getTableCellColSpan = _ref3.getTableCellColSpan;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Layout, {
                tableComponent: tableComponent,
                headComponent: headComponent,
                bodyComponent: bodyComponent,
                containerComponent: containerComponent,
                headerRows: headerRows,
                bodyRows: bodyRows,
                columns: columns,
                rowComponent: RowPlaceholder,
                cellComponent: CellPlaceholder,
                getCellColSpan: getTableCellColSpan
              });
            }
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'tableCell' },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref4) {
                var headerRows = _ref4.tableHeaderRows;
                return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_29" /* isHeaderStubTableCell */])(params.tableRow, headerRows) ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(StubHeaderCell, params) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(StubCell, params);
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.tableRow,
                  tableColumn = _ref5.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_15" /* isDataTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref6) {
                var getCellValue = _ref6.getCellValue;

                var columnName = params.tableColumn.column.name;
                var value = getCellValue(params.tableRow.row, columnName);
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */],
                  {
                    name: 'valueFormatter',
                    params: {
                      row: params.tableRow.row,
                      column: params.tableColumn.column,
                      value: value
                    }
                  },
                  function (content) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                      Cell,
                      _extends({}, params, {
                        row: params.tableRow.row,
                        column: params.tableColumn.column,
                        value: value
                      }),
                      content
                    );
                  }
                );
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_34" /* isNoDataTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref8) {
                var tableColumns = _ref8.tableColumns;

                if (Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_33" /* isNoDataTableCell */])(params.tableColumn, tableColumns)) {
                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(NoDataCell, _extends({}, params, {
                    getMessage: getMessage
                  }));
                }
                return null;
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'tableRow' },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(StubRow, params);
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref9) {
              var tableRow = _ref9.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_16" /* isDataTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Row, _extends({}, params, {
              row: params.tableRow.row
            }));
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref10) {
              var tableRow = _ref10.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_34" /* isNoDataTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(NoDataRow, params);
          }
        )
      );
    }
  }]);
  return Table;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Table.propTypes = {
  layoutComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  tableComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  headComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  bodyComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  noDataCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  noDataRowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  stubRowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  stubCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  stubHeaderCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

Table.defaultProps = {
  columnExtensions: undefined,
  messages: {}
};

var TableSelection = function (_React$PureComponent) {
  inherits(TableSelection, _React$PureComponent);

  function TableSelection() {
    classCallCheck(this, TableSelection);
    return possibleConstructorReturn(this, (TableSelection.__proto__ || Object.getPrototypeOf(TableSelection)).apply(this, arguments));
  }

  createClass(TableSelection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          highlightRow = _props.highlightRow,
          selectByRowClick = _props.selectByRowClick,
          showSelectionColumn = _props.showSelectionColumn,
          showSelectAll = _props.showSelectAll,
          HeaderCell = _props.headerCellComponent,
          Cell = _props.cellComponent,
          Row = _props.rowComponent,
          selectionColumnWidth = _props.selectionColumnWidth;


      var tableColumnsComputed = function tableColumnsComputed(_ref) {
        var tableColumns = _ref.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_61" /* tableColumnsWithSelection */])(tableColumns, selectionColumnWidth);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableSelection',
          dependencies: [{ name: 'Table' }, { name: 'SelectionState' }, { name: 'IntegratedSelection', optional: !showSelectAll }]
        },
        showSelectionColumn && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        showSelectionColumn && showSelectAll && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow,
                  tableColumn = _ref2.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_35" /* isSelectAllTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref3, _ref4) {
                var selectAllAvailable = _ref3.selectAllAvailable,
                    allSelected$$1 = _ref3.allSelected,
                    someSelected$$1 = _ref3.someSelected;
                var toggleSelectAll = _ref4.toggleSelectAll;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(HeaderCell, _extends({}, params, {
                  disabled: !selectAllAvailable,
                  allSelected: allSelected$$1,
                  someSelected: someSelected$$1,
                  onToggle: function onToggle(select) {
                    return toggleSelectAll(select);
                  }
                }));
              }
            );
          }
        ),
        showSelectionColumn && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.tableRow,
                  tableColumn = _ref5.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_36" /* isSelectTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref6, _ref7) {
                var selection = _ref6.selection;
                var toggleSelection$$1 = _ref7.toggleSelection;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Cell, _extends({}, params, {
                  row: params.tableRow.row,
                  selected: selection.indexOf(params.tableRow.rowId) !== -1,
                  onToggle: function onToggle() {
                    return toggleSelection$$1({ rowIds: [params.tableRow.rowId] });
                  }
                }));
              }
            );
          }
        ),
        (highlightRow || selectByRowClick) && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref8) {
              var tableRow = _ref8.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_16" /* isDataTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref9, _ref10) {
                var selection = _ref9.selection;
                var toggleSelection$$1 = _ref10.toggleSelection;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Row, _extends({}, params, {
                  selectByRowClick: selectByRowClick,
                  selected: highlightRow && selection.indexOf(params.tableRow.rowId) !== -1,
                  onToggle: function onToggle() {
                    return toggleSelection$$1({ rowIds: [params.tableRow.rowId] });
                  }
                }));
              }
            );
          }
        )
      );
    }
  }]);
  return TableSelection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableSelection.propTypes = {
  headerCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  highlightRow: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  selectByRowClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showSelectAll: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showSelectionColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  selectionColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired
};

TableSelection.defaultProps = {
  highlightRow: false,
  selectByRowClick: false,
  showSelectAll: false,
  showSelectionColumn: true
};

var RowDetailState = function (_React$PureComponent) {
  inherits(RowDetailState, _React$PureComponent);

  function RowDetailState(props) {
    classCallCheck(this, RowDetailState);

    var _this = possibleConstructorReturn(this, (RowDetailState.__proto__ || Object.getPrototypeOf(RowDetailState)).call(this, props));

    _this.state = {
      expandedRowIds: props.expandedRowIds || props.defaultExpandedRowIds
    };

    var stateHelper = createStateHelper(_this, {
      expandedRowIds: function expandedRowIds() {
        return _this.props.onExpandedRowIdsChange;
      }
    });

    _this.toggleDetailRowExpanded = stateHelper.applyFieldReducer.bind(stateHelper, 'expandedRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_75" /* toggleDetailRowExpanded */]);
    return _this;
  }

  createClass(RowDetailState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var expandedRowIds = nextProps.expandedRowIds;

      this.setState(_extends({}, expandedRowIds !== undefined ? { expandedRowIds: expandedRowIds } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var expandedRowIds = this.state.expandedRowIds;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'RowDetailState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'expandedDetailRowIds', value: expandedRowIds }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'toggleDetailRowExpanded', action: this.toggleDetailRowExpanded })
      );
    }
  }]);
  return RowDetailState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

RowDetailState.propTypes = {
  expandedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultExpandedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onExpandedRowIdsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

RowDetailState.defaultProps = {
  expandedRowIds: undefined,
  defaultExpandedRowIds: [],
  onExpandedRowIdsChange: undefined
};

var getCellColSpanComputed = function getCellColSpanComputed(_ref) {
  var getTableCellColSpan = _ref.getTableCellColSpan;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_64" /* tableDetailCellColSpanGetter */])(getTableCellColSpan);
};

var pluginDependencies$10 = [{ name: 'RowDetailState' }, { name: 'Table' }];

var TableRowDetail = function (_React$PureComponent) {
  inherits(TableRowDetail, _React$PureComponent);

  function TableRowDetail() {
    classCallCheck(this, TableRowDetail);
    return possibleConstructorReturn(this, (TableRowDetail.__proto__ || Object.getPrototypeOf(TableRowDetail)).apply(this, arguments));
  }

  createClass(TableRowDetail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rowHeight = _props.rowHeight,
          Content = _props.contentComponent,
          ToggleCell = _props.toggleCellComponent,
          Cell = _props.cellComponent,
          Row = _props.rowComponent,
          toggleColumnWidth = _props.toggleColumnWidth;


      var tableColumnsComputed = function tableColumnsComputed(_ref2) {
        var tableColumns = _ref2.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_57" /* tableColumnsWithDetail */])(tableColumns, toggleColumnWidth);
      };
      var tableBodyRowsComputed = function tableBodyRowsComputed(_ref3) {
        var tableBodyRows = _ref3.tableBodyRows,
            expandedDetailRowIds = _ref3.expandedDetailRowIds;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_71" /* tableRowsWithExpandedDetail */])(tableBodyRows, expandedDetailRowIds, rowHeight);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableRowDetail',
          dependencies: pluginDependencies$10
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableBodyRows', computed: tableBodyRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getTableCellColSpan', computed: getCellColSpanComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var tableRow = _ref4.tableRow,
                  tableColumn = _ref4.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_20" /* isDetailToggleTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref5, _ref6) {
                var expandedDetailRowIds = _ref5.expandedDetailRowIds;
                var toggleDetailRowExpanded$$1 = _ref6.toggleDetailRowExpanded;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ToggleCell, _extends({}, params, {
                  row: params.tableRow.row,
                  expanded: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_17" /* isDetailRowExpanded */])(expandedDetailRowIds, params.tableRow.rowId),
                  onToggle: function onToggle() {
                    return toggleDetailRowExpanded$$1({ rowId: params.tableRow.rowId });
                  }
                }));
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_19" /* isDetailTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref8) {
                var tableColumns = _ref8.tableColumns;

                if (Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_18" /* isDetailTableCell */])(params.tableColumn, tableColumns)) {
                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                    Cell,
                    _extends({}, params, {
                      row: params.tableRow.row
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Content, { row: params.tableRow.row })
                  );
                }
                return null;
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref9) {
              var tableRow = _ref9.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_19" /* isDetailTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Row, _extends({}, params, {
              row: params.tableRow.row
            }));
          }
        )
      );
    }
  }]);
  return TableRowDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableRowDetail.propTypes = {
  contentComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  toggleCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  toggleColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  rowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]
};

TableRowDetail.defaultProps = {
  contentComponent: function contentComponent() {
    return null;
  },
  rowHeight: undefined
};

var pluginDependencies$11 = [{ name: 'GroupingState' }, { name: 'Table' }, { name: 'DataTypeProvider', optional: true }];

var tableBodyRowsComputed$1 = function tableBodyRowsComputed(_ref) {
  var tableBodyRows = _ref.tableBodyRows,
      isGroupRow = _ref.isGroupRow;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_72" /* tableRowsWithGrouping */])(tableBodyRows, isGroupRow);
};
var getCellColSpanComputed$1 = function getCellColSpanComputed(_ref2) {
  var getTableCellColSpan = _ref2.getTableCellColSpan;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_65" /* tableGroupCellColSpanGetter */])(getTableCellColSpan);
};

var showColumnWhenGroupedGetter = function showColumnWhenGroupedGetter(showColumnsWhenGrouped) {
  var columnExtensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var map = columnExtensions.reduce(function (acc, columnExtension) {
    acc[columnExtension.columnName] = columnExtension.showWhenGrouped;
    return acc;
  }, {});

  return function (columnName) {
    return map[columnName] || showColumnsWhenGrouped;
  };
};

var TableGroupRow = function (_React$PureComponent) {
  inherits(TableGroupRow, _React$PureComponent);

  function TableGroupRow() {
    classCallCheck(this, TableGroupRow);
    return possibleConstructorReturn(this, (TableGroupRow.__proto__ || Object.getPrototypeOf(TableGroupRow)).apply(this, arguments));
  }

  createClass(TableGroupRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          GroupCell = _props.cellComponent,
          GroupRow = _props.rowComponent,
          GroupIndentCell = _props.indentCellComponent,
          indentColumnWidth = _props.indentColumnWidth,
          showColumnsWhenGrouped = _props.showColumnsWhenGrouped,
          columnExtensions = _props.columnExtensions;


      var tableColumnsComputed = function tableColumnsComputed(_ref3) {
        var columns = _ref3.columns,
            tableColumns = _ref3.tableColumns,
            grouping = _ref3.grouping,
            draftGrouping = _ref3.draftGrouping;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_60" /* tableColumnsWithGrouping */])(columns, tableColumns, grouping, draftGrouping, indentColumnWidth, showColumnWhenGroupedGetter(showColumnsWhenGrouped, columnExtensions));
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableGroupRow',
          dependencies: pluginDependencies$11
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableBodyRows', computed: tableBodyRowsComputed$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getTableCellColSpan', computed: getCellColSpanComputed$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var tableRow = _ref4.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_28" /* isGroupTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref5, _ref6) {
                var grouping = _ref5.grouping,
                    expandedGroups = _ref5.expandedGroups;
                var toggleGroupExpanded = _ref6.toggleGroupExpanded;

                if (Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_27" /* isGroupTableCell */])(params.tableRow, params.tableColumn)) {
                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                    __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */],
                    {
                      name: 'valueFormatter',
                      params: {
                        column: params.tableColumn.column,
                        value: params.tableRow.row.value
                      }
                    },
                    function (content) {
                      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                        GroupCell,
                        _extends({}, params, {
                          row: params.tableRow.row,
                          column: params.tableColumn.column,
                          expanded: expandedGroups.indexOf(params.tableRow.row.compoundKey) !== -1,
                          onToggle: function onToggle() {
                            return toggleGroupExpanded({ groupKey: params.tableRow.row.compoundKey });
                          }
                        }),
                        content
                      );
                    }
                  );
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_26" /* isGroupIndentTableCell */])(params.tableRow, params.tableColumn, grouping)) {
                  if (GroupIndentCell) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(GroupIndentCell, _extends({}, params, {
                      row: params.tableRow.row,
                      column: params.tableColumn.column
                    }));
                  }
                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null);
                }
                return null;
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref7) {
              var tableRow = _ref7.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_28" /* isGroupTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(GroupRow, _extends({}, params, {
              row: params.tableRow.row
            }));
          }
        )
      );
    }
  }]);
  return TableGroupRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableGroupRow.propTypes = {
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  indentCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  indentColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  showColumnsWhenGrouped: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"]
};

TableGroupRow.defaultProps = {
  indentCellComponent: null,
  showColumnsWhenGrouped: false,
  columnExtensions: undefined
};

var tableHeaderRowsComputed$1 = function tableHeaderRowsComputed(_ref) {
  var tableHeaderRows = _ref.tableHeaderRows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_73" /* tableRowsWithHeading */])(tableHeaderRows);
};

var TableHeaderRow = function (_React$PureComponent) {
  inherits(TableHeaderRow, _React$PureComponent);

  function TableHeaderRow() {
    classCallCheck(this, TableHeaderRow);
    return possibleConstructorReturn(this, (TableHeaderRow.__proto__ || Object.getPrototypeOf(TableHeaderRow)).apply(this, arguments));
  }

  createClass(TableHeaderRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showSortingControls = _props.showSortingControls,
          showGroupingControls = _props.showGroupingControls,
          HeaderCell = _props.cellComponent,
          HeaderRow = _props.rowComponent,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableHeaderRow',
          dependencies: [{ name: 'Table' }, { name: 'SortingState', optional: !showSortingControls }, { name: 'GroupingState', optional: !showGroupingControls }, { name: 'DragDropProvider', optional: true }, { name: 'TableColumnResizing', optional: true }]
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableHeaderRows', computed: tableHeaderRowsComputed$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow,
                  tableColumn = _ref2.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_31" /* isHeadingTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref3, _ref4) {
                var sorting = _ref3.sorting,
                    tableColumns = _ref3.tableColumns,
                    draggingEnabled = _ref3.draggingEnabled,
                    tableColumnResizingEnabled = _ref3.tableColumnResizingEnabled,
                    isColumnSortingEnabled = _ref3.isColumnSortingEnabled,
                    isColumnGroupingEnabled = _ref3.isColumnGroupingEnabled;
                var changeColumnSorting$$1 = _ref4.changeColumnSorting,
                    changeColumnGrouping$$1 = _ref4.changeColumnGrouping,
                    changeTableColumnWidth$$1 = _ref4.changeTableColumnWidth,
                    draftTableColumnWidth$$1 = _ref4.draftTableColumnWidth,
                    cancelTableColumnWidthDraft$$1 = _ref4.cancelTableColumnWidthDraft;
                var columnName = params.tableColumn.column.name;

                var atLeastOneDataColumn = tableColumns.filter(function (_ref5) {
                  var type = _ref5.type;
                  return type === __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["e" /* TABLE_DATA_TYPE */];
                }).length > 1;
                var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
                var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName) && atLeastOneDataColumn;

                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(HeaderCell, _extends({}, params, {
                  column: params.tableColumn.column,
                  getMessage: getMessage,
                  sortingEnabled: sortingEnabled,
                  groupingEnabled: groupingEnabled,
                  showSortingControls: showSortingControls,
                  showGroupingControls: showGroupingControls,
                  draggingEnabled: draggingEnabled && atLeastOneDataColumn,
                  resizingEnabled: tableColumnResizingEnabled,
                  sortingDirection: showSortingControls && sorting !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_0" /* getColumnSortingDirection */])(sorting, columnName) : undefined,
                  onSort: function onSort(_ref6) {
                    var direction = _ref6.direction,
                        keepOther = _ref6.keepOther;
                    return changeColumnSorting$$1({ columnName: columnName, direction: direction, keepOther: keepOther });
                  },
                  onGroup: function onGroup() {
                    return changeColumnGrouping$$1({ columnName: columnName });
                  },
                  onWidthChange: function onWidthChange(_ref7) {
                    var shift = _ref7.shift;
                    return changeTableColumnWidth$$1({ columnName: columnName, shift: shift });
                  },
                  onWidthDraft: function onWidthDraft(_ref8) {
                    var shift = _ref8.shift;
                    return draftTableColumnWidth$$1({ columnName: columnName, shift: shift });
                  },
                  onWidthDraftCancel: function onWidthDraftCancel() {
                    return cancelTableColumnWidthDraft$$1();
                  },
                  before: Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], {
                    name: 'tableHeaderCellBefore',
                    params: {
                      column: params.tableColumn.column
                    }
                  })
                }));
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref9) {
              var tableRow = _ref9.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_32" /* isHeadingTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(HeaderRow, params);
          }
        )
      );
    }
  }]);
  return TableHeaderRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableHeaderRow.propTypes = {
  showSortingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showGroupingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

TableHeaderRow.defaultProps = {
  showSortingControls: false,
  showGroupingControls: false,
  messages: null
};

var CellPlaceholder$1 = function CellPlaceholder(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { params: props });
};

var TableBandHeader = function (_React$PureComponent) {
  inherits(TableBandHeader, _React$PureComponent);

  function TableBandHeader() {
    classCallCheck(this, TableBandHeader);
    return possibleConstructorReturn(this, (TableBandHeader.__proto__ || Object.getPrototypeOf(TableBandHeader)).apply(this, arguments));
  }

  createClass(TableBandHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Cell = _props.cellComponent,
          Row = _props.rowComponent,
          HeaderCell = _props.bandedHeaderCellComponent,
          InvisibleCell = _props.invisibleCellComponent,
          columnBands = _props.columnBands;


      var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
        var tableHeaderRows = _ref.tableHeaderRows,
            tableColumns = _ref.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_68" /* tableRowsWithBands */])(tableHeaderRows, columnBands, tableColumns);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableBandHeader',
          dependencies: [{ name: 'Table' }, { name: 'TableHeaderRow' }, { name: 'TableSelection', optional: true }, { name: 'TableEditColumn', optional: true }]
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_13" /* isBandedOrHeaderRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref3) {
                var tableColumns = _ref3.tableColumns,
                    tableHeaderRows = _ref3.tableHeaderRows;

                var bandComponent = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["W" /* getBandComponent */])(params, tableHeaderRows, tableColumns, columnBands);
                switch (bandComponent.type) {
                  case __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["a" /* BAND_DUPLICATE_RENDER */]:
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null);
                  case __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["b" /* BAND_EMPTY_CELL */]:
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(InvisibleCell, null);
                  case __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["c" /* BAND_GROUP_CELL */]:
                    {
                      var _bandComponent$payloa = bandComponent.payload,
                          value = _bandComponent$payloa.value,
                          payload = objectWithoutProperties(_bandComponent$payloa, ['value']);

                      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                        Cell,
                        _extends({}, params, payload),
                        value
                      );
                    }
                  case __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["d" /* BAND_HEADER_CELL */]:
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], {
                      name: 'tableCell',
                      params: _extends({}, params, bandComponent.payload)
                    });
                  default:
                    return null;
                }
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var tableRow = _ref4.tableRow,
                  tableColumn = _ref4.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_31" /* isHeadingTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(HeaderCell, _extends({ component: CellPlaceholder$1 }, params));
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_14" /* isBandedTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Row, params);
          }
        )
      );
    }
  }]);
  return TableBandHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableBandHeader.propTypes = {
  columnBands: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  bandedHeaderCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  invisibleCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var pluginDependencies$12 = [{ name: 'FilteringState' }, { name: 'Table' }, { name: 'DataTypeProvider', optional: true }];

var TableFilterRow = function (_React$PureComponent) {
  inherits(TableFilterRow, _React$PureComponent);

  function TableFilterRow() {
    classCallCheck(this, TableFilterRow);
    return possibleConstructorReturn(this, (TableFilterRow.__proto__ || Object.getPrototypeOf(TableFilterRow)).apply(this, arguments));
  }

  createClass(TableFilterRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rowHeight = _props.rowHeight,
          FilterCell = _props.cellComponent,
          FilterRow = _props.rowComponent,
          messages = _props.messages;


      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);

      var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
        var tableHeaderRows = _ref.tableHeaderRows;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_66" /* tableHeaderRowsWithFilter */])(tableHeaderRows, rowHeight);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableFilterRow',
          dependencies: pluginDependencies$12
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableHeaderRows', computed: tableHeaderRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow,
                  tableColumn = _ref2.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_24" /* isFilterTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref3, _ref4) {
                var filters = _ref3.filters,
                    isColumnFilteringEnabled = _ref3.isColumnFilteringEnabled;
                var changeColumnFilter$$1 = _ref4.changeColumnFilter;
                var columnName = params.tableColumn.column.name;

                var filter = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Z" /* getColumnFilterConfig */])(filters, columnName);
                var onFilter = function onFilter(config) {
                  return changeColumnFilter$$1({ columnName: columnName, config: config });
                };
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */],
                  {
                    name: 'valueEditor',
                    params: {
                      column: params.tableColumn.column,
                      value: filter ? filter.value : undefined,
                      onValueChange: function onValueChange(newValue) {
                        return onFilter(newValue !== undefined ? { value: newValue } : null);
                      }
                    }
                  },
                  function (content) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                      FilterCell,
                      _extends({}, params, {
                        getMessage: getMessage,
                        column: params.tableColumn.column,
                        filter: filter,
                        filteringEnabled: isColumnFilteringEnabled(columnName),
                        onFilter: onFilter
                      }),
                      content
                    );
                  }
                );
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_25" /* isFilterTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(FilterRow, params);
          }
        )
      );
    }
  }]);
  return TableFilterRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableFilterRow.propTypes = {
  rowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

TableFilterRow.defaultProps = {
  rowHeight: undefined,
  messages: {}
};

var pluginDependencies$13 = [{ name: 'EditingState' }, { name: 'Table' }, { name: 'DataTypeProvider', optional: true }];

var TableEditRow = function (_React$PureComponent) {
  inherits(TableEditRow, _React$PureComponent);

  function TableEditRow() {
    classCallCheck(this, TableEditRow);
    return possibleConstructorReturn(this, (TableEditRow.__proto__ || Object.getPrototypeOf(TableEditRow)).apply(this, arguments));
  }

  createClass(TableEditRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          EditCell = _props.cellComponent,
          EditRow = _props.rowComponent,
          rowHeight = _props.rowHeight;


      var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
        var tableBodyRows = _ref.tableBodyRows,
            editingRowIds = _ref.editingRowIds,
            addedRows = _ref.addedRows;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_70" /* tableRowsWithEditing */])(tableBodyRows, editingRowIds, addedRows, rowHeight);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableEditRow',
          dependencies: pluginDependencies$13
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableBodyRows', computed: tableBodyRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow,
                  tableColumn = _ref2.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_22" /* isEditTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref3, _ref4) {
                var getCellValue = _ref3.getCellValue,
                    createRowChange = _ref3.createRowChange,
                    rowChanges = _ref3.rowChanges,
                    isColumnEditingEnabled = _ref3.isColumnEditingEnabled;
                var changeAddedRow$$1 = _ref4.changeAddedRow,
                    changeRow$$1 = _ref4.changeRow;
                var _params$tableRow = params.tableRow,
                    rowId = _params$tableRow.rowId,
                    row = _params$tableRow.row;
                var column = params.tableColumn.column;
                var columnName = column.name;


                var isNew = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_12" /* isAddedTableRow */])(params.tableRow);
                var changedRow = isNew ? row : _extends({}, row, Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_4" /* getRowChange */])(rowChanges, rowId));

                var value = getCellValue(changedRow, columnName);
                var onValueChange = function onValueChange(newValue) {
                  var changeArgs = {
                    rowId: rowId,
                    change: createRowChange(changedRow, newValue, columnName)
                  };
                  if (isNew) {
                    changeAddedRow$$1(changeArgs);
                  } else {
                    changeRow$$1(changeArgs);
                  }
                };
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */],
                  {
                    name: 'valueEditor',
                    params: {
                      column: column,
                      row: row,
                      value: value,
                      onValueChange: onValueChange
                    }
                  },
                  function (content) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                      EditCell,
                      _extends({}, params, {
                        row: row,
                        column: column,
                        value: value,
                        editingEnabled: isColumnEditingEnabled(columnName),
                        onValueChange: onValueChange
                      }),
                      content
                    );
                  }
                );
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableRow',
            predicate: function predicate(_ref5) {
              var tableRow = _ref5.tableRow;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_23" /* isEditTableRow */])(tableRow) || Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_12" /* isAddedTableRow */])(tableRow);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EditRow, _extends({}, params, {
              row: params.tableRow.row
            }));
          }
        )
      );
    }
  }]);
  return TableEditRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableEditRow.propTypes = {
  rowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types__["any"],
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

TableEditRow.defaultProps = {
  rowHeight: undefined
};

var pluginDependencies$14 = [{ name: 'EditingState' }, { name: 'Table' }];

var TableEditColumn = function (_React$PureComponent) {
  inherits(TableEditColumn, _React$PureComponent);

  function TableEditColumn() {
    classCallCheck(this, TableEditColumn);
    return possibleConstructorReturn(this, (TableEditColumn.__proto__ || Object.getPrototypeOf(TableEditColumn)).apply(this, arguments));
  }

  createClass(TableEditColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Cell = _props.cellComponent,
          HeaderCell = _props.headerCellComponent,
          Command = _props.commandComponent,
          showAddCommand = _props.showAddCommand,
          showEditCommand = _props.showEditCommand,
          showDeleteCommand = _props.showDeleteCommand,
          width = _props.width,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);
      var tableColumnsComputed = function tableColumnsComputed(_ref) {
        var tableColumns = _ref.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_59" /* tableColumnsWithEditing */])(tableColumns, width);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableEditColumn',
          dependencies: pluginDependencies$14
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref2) {
              var tableRow = _ref2.tableRow,
                  tableColumn = _ref2.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_30" /* isHeadingEditCommandsTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (getters, actions) {
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  HeaderCell,
                  params,
                  showAddCommand && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Command, {
                    id: 'add',
                    text: getMessage('addCommand'),
                    onExecute: function onExecute() {
                      return actions.addRow();
                    }
                  })
                );
              }
            );
          }
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref3) {
              var tableRow = _ref3.tableRow,
                  tableColumn = _ref3.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_21" /* isEditCommandsTableCell */])(tableRow, tableColumn);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (getters, actions) {
                var isEdit = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_23" /* isEditTableRow */])(params.tableRow);
                var isNew = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_12" /* isAddedTableRow */])(params.tableRow);
                var isEditing = isEdit || isNew;
                var rowIds = [params.tableRow.rowId];
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  Cell,
                  _extends({}, params, {
                    row: params.tableRow.row
                  }),
                  showEditCommand && !isEditing && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Command, {
                    id: 'edit',
                    text: getMessage('editCommand'),
                    onExecute: function onExecute() {
                      return actions.startEditRows({ rowIds: rowIds });
                    }
                  }),
                  showDeleteCommand && !isEditing && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Command, {
                    id: 'delete',
                    text: getMessage('deleteCommand'),
                    onExecute: function onExecute() {
                      actions.deleteRows({ rowIds: rowIds });
                      actions.commitDeletedRows({ rowIds: rowIds });
                    }
                  }),
                  isEditing && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Command, {
                    id: 'commit',
                    text: getMessage('commitCommand'),
                    onExecute: function onExecute() {
                      if (isNew) {
                        actions.commitAddedRows({ rowIds: rowIds });
                      } else {
                        actions.stopEditRows({ rowIds: rowIds });
                        actions.commitChangedRows({ rowIds: rowIds });
                      }
                    }
                  }),
                  isEditing && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Command, {
                    id: 'cancel',
                    text: getMessage('cancelCommand'),
                    onExecute: function onExecute() {
                      if (isNew) {
                        actions.cancelAddedRows({ rowIds: rowIds });
                      } else {
                        actions.stopEditRows({ rowIds: rowIds });
                        actions.cancelChangedRows({ rowIds: rowIds });
                      }
                    }
                  })
                );
              }
            );
          }
        )
      );
    }
  }]);
  return TableEditColumn;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
TableEditColumn.propTypes = {
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  headerCellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  commandComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  showAddCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showEditCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showDeleteCommand: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};
TableEditColumn.defaultProps = {
  showAddCommand: false,
  showEditCommand: false,
  showDeleteCommand: false,
  width: 140,
  messages: {}
};

var pluginDependencies$15 = [{ name: 'Table' }];

var TableColumnResizing = function (_React$PureComponent) {
  inherits(TableColumnResizing, _React$PureComponent);

  function TableColumnResizing(props) {
    classCallCheck(this, TableColumnResizing);

    var _this = possibleConstructorReturn(this, (TableColumnResizing.__proto__ || Object.getPrototypeOf(TableColumnResizing)).call(this, props));

    _this.state = {
      columnWidths: props.columnWidths || props.defaultColumnWidths,
      draftColumnWidths: []
    };

    var stateHelper = createStateHelper(_this, {
      columnWidths: function columnWidths() {
        return _this.props.onColumnWidthsChange;
      }
    });

    _this.tableColumnsComputed = Object(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_core__["d" /* memoize */])(function (columnWidths) {
      return function (_ref) {
        var tableColumns = _ref.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_62" /* tableColumnsWithWidths */])(tableColumns, columnWidths);
      };
    });
    _this.tableColumnsDraftComputed = Object(__WEBPACK_IMPORTED_MODULE_4__devexpress_dx_core__["d" /* memoize */])(function (draftColumnWidths) {
      return function (_ref2) {
        var tableColumns = _ref2.tableColumns;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_58" /* tableColumnsWithDraftWidths */])(tableColumns, draftColumnWidths);
      };
    });

    _this.changeTableColumnWidth = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["z" /* changeTableColumnWidth */])(prevState, _extends({}, payload, { minColumnWidth: _this.props.minColumnWidth }));
    });
    _this.draftTableColumnWidth = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["N" /* draftTableColumnWidth */])(prevState, _extends({}, payload, { minColumnWidth: _this.props.minColumnWidth }));
    });
    _this.cancelTableColumnWidthDraft = stateHelper.applyReducer.bind(stateHelper, __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["q" /* cancelTableColumnWidthDraft */]);
    return _this;
  }

  createClass(TableColumnResizing, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var columnWidths = nextProps.columnWidths;

      this.setState(_extends({}, columnWidths !== undefined ? { columnWidths: columnWidths } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          columnWidths = _state.columnWidths,
          draftColumnWidths = _state.draftColumnWidths;


      var tableColumnsComputed = this.tableColumnsComputed(columnWidths);
      var tableColumnsDraftComputed = this.tableColumnsDraftComputed(draftColumnWidths);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableColumnResizing',
          dependencies: pluginDependencies$15
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumnResizingEnabled', value: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: tableColumnsDraftComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeTableColumnWidth', action: this.changeTableColumnWidth }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'draftTableColumnWidth', action: this.draftTableColumnWidth }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'cancelTableColumnWidthDraft', action: this.cancelTableColumnWidthDraft })
      );
    }
  }]);
  return TableColumnResizing;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableColumnResizing.propTypes = {
  defaultColumnWidths: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  columnWidths: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onColumnWidthsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  minColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired
};

TableColumnResizing.defaultProps = {
  defaultColumnWidths: [],
  columnWidths: undefined,
  onColumnWidthsChange: undefined
};

var pluginDependencies$16 = [{ name: 'PagingState' }];

var PagingPanel = function (_React$PureComponent) {
  inherits(PagingPanel, _React$PureComponent);

  function PagingPanel() {
    classCallCheck(this, PagingPanel);
    return possibleConstructorReturn(this, (PagingPanel.__proto__ || Object.getPrototypeOf(PagingPanel)).apply(this, arguments));
  }

  createClass(PagingPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Pager = _props.containerComponent,
          pageSizes = _props.pageSizes,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'PagingPanel',
          dependencies: pluginDependencies$16
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'footer' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref, _ref2) {
              var currentPage$$1 = _ref.currentPage,
                  pageSize = _ref.pageSize,
                  totalCount = _ref.totalCount;
              var setCurrentPage$$1 = _ref2.setCurrentPage,
                  setPageSize$$1 = _ref2.setPageSize;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Pager, {
                currentPage: currentPage$$1,
                pageSize: pageSize,
                totalCount: totalCount,
                totalPages: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_41" /* pageCount */])(totalCount, pageSize),
                pageSizes: pageSizes,
                getMessage: getMessage,
                onCurrentPageChange: setCurrentPage$$1,
                onPageSizeChange: setPageSize$$1
              });
            }
          )
        )
      );
    }
  }]);
  return PagingPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

PagingPanel.propTypes = {
  pageSizes: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]),
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

PagingPanel.defaultProps = {
  pageSizes: [],
  messages: {}
};

var GroupingPanel = function (_React$PureComponent) {
  inherits(GroupingPanel, _React$PureComponent);

  function GroupingPanel() {
    classCallCheck(this, GroupingPanel);
    return possibleConstructorReturn(this, (GroupingPanel.__proto__ || Object.getPrototypeOf(GroupingPanel)).apply(this, arguments));
  }

  createClass(GroupingPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Layout = _props.layoutComponent,
          Container = _props.containerComponent,
          Item = _props.itemComponent,
          EmptyMessage = _props.emptyMessageComponent,
          showSortingControls = _props.showSortingControls,
          showGroupingControls = _props.showGroupingControls,
          messages = _props.messages;


      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);

      var EmptyMessagePlaceholder = function EmptyMessagePlaceholder() {
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EmptyMessage, {
          getMessage: getMessage
        });
      };

      var ItemPlaceholder = function ItemPlaceholder(_ref) {
        var item = _ref.item;
        var columnName = item.column.name;


        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
          null,
          function (_ref2, _ref3) {
            var sorting = _ref2.sorting,
                isColumnSortingEnabled = _ref2.isColumnSortingEnabled,
                isColumnGroupingEnabled = _ref2.isColumnGroupingEnabled;
            var changeColumnGrouping$$1 = _ref3.changeColumnGrouping,
                changeColumnSorting$$1 = _ref3.changeColumnSorting;

            var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
            var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName);

            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Item, {
              item: item,
              sortingEnabled: sortingEnabled,
              groupingEnabled: groupingEnabled,
              showSortingControls: showSortingControls,
              sortingDirection: showSortingControls ? Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_0" /* getColumnSortingDirection */])(sorting, columnName) : undefined,
              showGroupingControls: showGroupingControls,
              onGroup: function onGroup() {
                return changeColumnGrouping$$1({ columnName: columnName });
              },
              onSort: function onSort(_ref4) {
                var direction = _ref4.direction,
                    keepOther = _ref4.keepOther;
                return changeColumnSorting$$1({ columnName: columnName, direction: direction, keepOther: keepOther });
              }
            });
          }
        );
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'GroupingPanel',
          dependencies: [{ name: 'GroupingState' }, { name: 'Toolbar' }, { name: 'SortingState', optional: !showSortingControls }]
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'toolbarContent' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref5, _ref6) {
              var columns = _ref5.columns,
                  grouping = _ref5.grouping,
                  draftGrouping = _ref5.draftGrouping,
                  draggingEnabled = _ref5.draggingEnabled,
                  isColumnGroupingEnabled = _ref5.isColumnGroupingEnabled;
              var changeColumnGrouping$$1 = _ref6.changeColumnGrouping,
                  draftColumnGrouping$$1 = _ref6.draftColumnGrouping,
                  cancelColumnGroupingDraft$$1 = _ref6.cancelColumnGroupingDraft;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Layout, {
                items: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_11" /* groupingPanelItems */])(columns, grouping, draftGrouping),
                isColumnGroupingEnabled: isColumnGroupingEnabled,
                draggingEnabled: draggingEnabled,
                onGroup: changeColumnGrouping$$1,
                onGroupDraft: draftColumnGrouping$$1,
                onGroupDraftCancel: cancelColumnGroupingDraft$$1,
                itemComponent: ItemPlaceholder,
                emptyMessageComponent: EmptyMessagePlaceholder,
                containerComponent: Container
              });
            }
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null)
        )
      );
    }
  }]);
  return GroupingPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

GroupingPanel.propTypes = {
  showSortingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showGroupingControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  layoutComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  itemComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  emptyMessageComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

GroupingPanel.defaultProps = {
  showSortingControls: false,
  showGroupingControls: false,
  messages: {}
};

// eslint-disable-next-line react/prefer-stateless-function
var DataTypeProvider = function (_React$PureComponent) {
  inherits(DataTypeProvider, _React$PureComponent);

  function DataTypeProvider() {
    classCallCheck(this, DataTypeProvider);
    return possibleConstructorReturn(this, (DataTypeProvider.__proto__ || Object.getPrototypeOf(DataTypeProvider)).apply(this, arguments));
  }

  createClass(DataTypeProvider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          columnNames = _props.for,
          Formatter = _props.formatterComponent,
          Editor = _props.editorComponent;

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        { name: 'DataTypeProvider' },
        Formatter ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'valueFormatter',
            predicate: function predicate(_ref) {
              var column = _ref.column;
              return columnNames.includes(column.name);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Formatter, params);
          }
        ) : null,
        Editor ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'valueEditor',
            predicate: function predicate(_ref2) {
              var column = _ref2.column;
              return columnNames.includes(column.name);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Editor, params);
          }
        ) : null
      );
    }
  }]);
  return DataTypeProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

DataTypeProvider.propTypes = {
  for: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]).isRequired,
  formatterComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  editorComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

DataTypeProvider.defaultProps = {
  formatterComponent: undefined,
  editorComponent: undefined
};

var pluginDependencies$17 = [{ name: 'Table' }];

var visibleTableColumnsComputed = function visibleTableColumnsComputed(_ref) {
  var tableColumns = _ref.tableColumns,
      hiddenColumnNames = _ref.hiddenColumnNames;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_82" /* visibleTableColumns */])(tableColumns, hiddenColumnNames);
};

var columnExtensionValueGetter$4 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Y" /* getColumnExtensionValueGetter */])(columnExtensions, 'togglingEnabled', defaultValue);
};

var TableColumnVisibility = function (_React$PureComponent) {
  inherits(TableColumnVisibility, _React$PureComponent);

  function TableColumnVisibility(props) {
    classCallCheck(this, TableColumnVisibility);

    var _this = possibleConstructorReturn(this, (TableColumnVisibility.__proto__ || Object.getPrototypeOf(TableColumnVisibility)).call(this, props));

    _this.state = {
      hiddenColumnNames: props.hiddenColumnNames || props.defaultHiddenColumnNames
    };
    var stateHelper = createStateHelper(_this, {
      hiddenColumnNames: function hiddenColumnNames() {
        return _this.props.onHiddenColumnNamesChange;
      }
    });

    _this.toggleColumnVisibility = stateHelper.applyFieldReducer.bind(stateHelper, 'hiddenColumnNames', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_74" /* toggleColumn */]);
    return _this;
  }

  createClass(TableColumnVisibility, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hiddenColumnNames = nextProps.hiddenColumnNames;

      this.setState(_extends({}, hiddenColumnNames !== undefined ? { hiddenColumnNames: hiddenColumnNames } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          EmptyMessage = _props.emptyMessageComponent,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);
      var hiddenColumnNames = this.state.hiddenColumnNames;
      var _props2 = this.props,
          columnExtensions = _props2.columnExtensions,
          columnTogglingEnabled = _props2.columnTogglingEnabled;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableColumnVisibility',
          dependencies: pluginDependencies$17
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'hiddenColumnNames', value: hiddenColumnNames }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'tableColumns', computed: visibleTableColumnsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], {
          name: 'isColumnTogglingEnabled',
          value: columnExtensionValueGetter$4(columnExtensions, columnTogglingEnabled)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], {
          name: 'toggleColumnVisibility',
          action: this.toggleColumnVisibility
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'table' },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref2) {
                var tableColumns = _ref2.tableColumns;
                return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_63" /* tableDataColumnsExist */])(tableColumns) ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EmptyMessage, _extends({
                  getMessage: getMessage
                }, params));
              }
            );
          }
        )
      );
    }
  }]);
  return TableColumnVisibility;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableColumnVisibility.propTypes = {
  hiddenColumnNames: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]),
  defaultHiddenColumnNames: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]),
  emptyMessageComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  onHiddenColumnNamesChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
  columnExtensions: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  columnTogglingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
};

TableColumnVisibility.defaultProps = {
  hiddenColumnNames: undefined,
  defaultHiddenColumnNames: [],
  onHiddenColumnNamesChange: undefined,
  messages: {},
  columnExtensions: undefined,
  columnTogglingEnabled: true
};

var Toolbar = function (_React$PureComponent) {
  inherits(Toolbar, _React$PureComponent);

  function Toolbar() {
    classCallCheck(this, Toolbar);
    return possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Root = _props.rootComponent,
          FlexibleSpaceComponent = _props.flexibleSpaceComponent;

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'Toolbar'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'header' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            Root,
            null,
            Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], { name: 'toolbarContent' })
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null)
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'toolbarContent' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(FlexibleSpaceComponent, null)
        )
      );
    }
  }]);
  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Toolbar.propTypes = {
  rootComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  flexibleSpaceComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var TreeDataState = function (_React$PureComponent) {
  inherits(TreeDataState, _React$PureComponent);

  function TreeDataState(props) {
    classCallCheck(this, TreeDataState);

    var _this = possibleConstructorReturn(this, (TreeDataState.__proto__ || Object.getPrototypeOf(TreeDataState)).call(this, props));

    _this.state = {
      expandedRowIds: props.expandedRowIds || props.defaultExpandedRowIds
    };

    var stateHelper = createStateHelper(_this, {
      expandedRowIds: function expandedRowIds() {
        return _this.props.onExpandedRowIdsChange;
      }
    });

    _this.toggleRowExpanded = stateHelper.applyFieldReducer.bind(stateHelper, 'expandedRowIds', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_77" /* toggleRowExpanded */]);
    return _this;
  }

  createClass(TreeDataState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var expandedRowIds = nextProps.expandedRowIds;

      this.setState(_extends({}, expandedRowIds !== undefined ? { expandedRowIds: expandedRowIds } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var expandedRowIds = this.state.expandedRowIds;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TreeDataState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'expandedRowIds', value: expandedRowIds }),
        ' ',
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'toggleRowExpanded', action: this.toggleRowExpanded })
      );
    }
  }]);
  return TreeDataState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TreeDataState.propTypes = {
  expandedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  defaultExpandedRowIds: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  onExpandedRowIdsChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

TreeDataState.defaultProps = {
  expandedRowIds: undefined,
  defaultExpandedRowIds: [],
  onExpandedRowIdsChange: undefined
};

var pluginDependencies$18 = [{ name: 'TreeDataState' }];

var expandedTreeRowsComputed = function expandedTreeRowsComputed(_ref) {
  var rows = _ref.rows,
      getRowId = _ref.getRowId,
      expandedRowIds = _ref.expandedRowIds;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["Q" /* expandedTreeRows */])(rows, getRowId, expandedRowIds);
};
var getRowIdComputed$1 = function getRowIdComputed(_ref2) {
  var getRowId = _ref2.getRowId,
      rows = _ref2.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["H" /* customTreeRowIdGetter */])(getRowId, rows);
};
var getRowLevelKeyComputed = function getRowLevelKeyComputed(_ref3) {
  var getRowLevelKey = _ref3.getRowLevelKey,
      rows = _ref3.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["I" /* customTreeRowLevelKeyGetter */])(getRowLevelKey, rows);
};
var isTreeRowLeafComputed = function isTreeRowLeafComputed(_ref4) {
  var rows = _ref4.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_37" /* isTreeRowLeafGetter */])(rows);
};
var getTreeRowLevelComputed = function getTreeRowLevelComputed(_ref5) {
  var rows = _ref5.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_6" /* getTreeRowLevelGetter */])(rows);
};
var collapsedTreeRowsGetterComputed = function collapsedTreeRowsGetterComputed(_ref6) {
  var rows = _ref6.rows,
      getCollapsedRows = _ref6.getCollapsedRows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["B" /* collapsedTreeRowsGetter */])(getCollapsedRows, rows);
};
var unwrappedTreeRowsComputed = function unwrappedTreeRowsComputed(_ref7) {
  var rows = _ref7.rows;
  return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_80" /* unwrappedCustomTreeRows */])(rows);
};

var CustomTreeData = function (_React$PureComponent) {
  inherits(CustomTreeData, _React$PureComponent);

  function CustomTreeData() {
    classCallCheck(this, CustomTreeData);
    return possibleConstructorReturn(this, (CustomTreeData.__proto__ || Object.getPrototypeOf(CustomTreeData)).apply(this, arguments));
  }

  createClass(CustomTreeData, [{
    key: 'render',
    value: function render() {
      var getChildRows = this.props.getChildRows;

      var treeRowsComputed = function treeRowsComputed(_ref8) {
        var rows = _ref8.rows;
        return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["J" /* customTreeRowsWithMeta */])(rows, getChildRows);
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'CustomTreeData',
          dependencies: pluginDependencies$18
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: treeRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowId', computed: getRowIdComputed$1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getRowLevelKey', computed: getRowLevelKeyComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'isTreeRowLeaf', computed: isTreeRowLeafComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getTreeRowLevel', computed: getTreeRowLevelComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: expandedTreeRowsComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'getCollapsedRows', computed: collapsedTreeRowsGetterComputed }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'rows', computed: unwrappedTreeRowsComputed })
      );
    }
  }]);
  return CustomTreeData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

CustomTreeData.propTypes = {
  getChildRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var TableTreeColumn = function (_React$PureComponent) {
  inherits(TableTreeColumn, _React$PureComponent);

  function TableTreeColumn() {
    classCallCheck(this, TableTreeColumn);
    return possibleConstructorReturn(this, (TableTreeColumn.__proto__ || Object.getPrototypeOf(TableTreeColumn)).apply(this, arguments));
  }

  createClass(TableTreeColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          forColumnName = _props.for,
          showSelectionControls = _props.showSelectionControls,
          showSelectAll = _props.showSelectAll,
          Indent = _props.indentComponent,
          ExpandButton = _props.expandButtonComponent,
          Checkbox = _props.checkboxComponent,
          Content = _props.contentComponent,
          Cell = _props.cellComponent;

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'TableTreeColumn',
          dependencies: [{ name: 'DataTypeProvider', optional: true }, { name: 'TreeDataState' }, { name: 'SelectionState', optional: !showSelectionControls }, { name: 'IntegratedSelection', optional: !showSelectAll }, { name: 'Table' }, { name: 'TableHeaderRow', optional: true }]
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableHeaderCellBefore',
            predicate: function predicate(_ref) {
              var column = _ref.column;
              return column.name === forColumnName;
            }
          },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ExpandButton, {
            visible: false
          }),
          showSelectionControls && showSelectAll && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref2, _ref3) {
              var selectAllAvailable = _ref2.selectAllAvailable,
                  allSelected$$1 = _ref2.allSelected,
                  someSelected$$1 = _ref2.someSelected;
              var toggleSelectAll = _ref3.toggleSelectAll;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Checkbox, {
                disabled: !selectAllAvailable,
                checked: allSelected$$1,
                indeterminate: someSelected$$1,
                onChange: toggleSelectAll
              });
            }
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          {
            name: 'tableCell',
            predicate: function predicate(_ref4) {
              var tableRow = _ref4.tableRow,
                  tableColumn = _ref4.tableColumn;
              return Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_38" /* isTreeTableCell */])(tableRow, tableColumn, forColumnName);
            }
          },
          function (params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
              null,
              function (_ref5, _ref6) {
                var getCollapsedRows = _ref5.getCollapsedRows,
                    expandedRowIds = _ref5.expandedRowIds,
                    selection = _ref5.selection,
                    isTreeRowLeaf = _ref5.isTreeRowLeaf,
                    getTreeRowLevel = _ref5.getTreeRowLevel,
                    getCellValue = _ref5.getCellValue;
                var toggleRowExpanded$$1 = _ref6.toggleRowExpanded,
                    toggleSelection$$1 = _ref6.toggleSelection;
                var _params$tableRow = params.tableRow,
                    row = _params$tableRow.row,
                    rowId = _params$tableRow.rowId;

                var columnName = params.tableColumn.column.name;
                var value = getCellValue(row, columnName);
                var collapsedRows = getCollapsedRows(row);
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                  __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */],
                  {
                    name: 'valueFormatter',
                    params: {
                      row: row,
                      column: params.tableColumn.column,
                      value: value
                    }
                  },
                  function (content) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                      Cell,
                      _extends({}, params, {
                        row: row,
                        column: params.tableColumn.column,
                        value: value
                      }),
                      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Indent, {
                        level: getTreeRowLevel(row)
                      }),
                      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ExpandButton, {
                        visible: collapsedRows ? !!collapsedRows.length : !isTreeRowLeaf(row),
                        expanded: expandedRowIds.indexOf(rowId) > -1,
                        onToggle: function onToggle() {
                          return toggleRowExpanded$$1({ rowId: rowId });
                        }
                      }),
                      showSelectionControls && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Checkbox, {
                        disabled: false,
                        checked: selection.indexOf(rowId) > -1,
                        indeterminate: false,
                        onChange: function onChange() {
                          return toggleSelection$$1({ rowIds: [rowId] });
                        }
                      }),
                      Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                        Content,
                        null,
                        content || value
                      )
                    );
                  }
                );
              }
            );
          }
        )
      );
    }
  }]);
  return TableTreeColumn;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableTreeColumn.propTypes = {
  for: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
  showSelectionControls: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  showSelectAll: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  indentComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  expandButtonComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  checkboxComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  contentComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

TableTreeColumn.defaultProps = {
  showSelectionControls: false,
  showSelectAll: false
};

var SearchState = function (_React$PureComponent) {
  inherits(SearchState, _React$PureComponent);

  function SearchState(props) {
    classCallCheck(this, SearchState);

    var _this = possibleConstructorReturn(this, (SearchState.__proto__ || Object.getPrototypeOf(SearchState)).call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };
    var stateHelper = createStateHelper(_this, {
      value: function value() {
        return _this.props.onValueChange;
      }
    });

    _this.changeValue = stateHelper.applyFieldReducer.bind(stateHelper, 'value', __WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["y" /* changeSearchValue */]);
    return _this;
  }

  createClass(SearchState, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      this.setState(_extends({}, value !== undefined ? { value: value } : null));
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'SearchState'
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'filterExpression', computed: Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_44" /* pushSearchFilterExpression */])(value) }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["f" /* Getter */], { name: 'searchValue', value: value }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["a" /* Action */], { name: 'changeSearchValue', action: this.changeValue })
      );
    }
  }]);
  return SearchState;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

SearchState.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
  onValueChange: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

SearchState.defaultProps = {
  value: undefined,
  defaultValue: '',
  onValueChange: undefined
};

var pluginDependencies$19 = [{ name: 'Toolbar' }, { name: 'SearchState' }];

var SearchPanel = function (_React$PureComponent) {
  inherits(SearchPanel, _React$PureComponent);

  function SearchPanel() {
    classCallCheck(this, SearchPanel);
    return possibleConstructorReturn(this, (SearchPanel.__proto__ || Object.getPrototypeOf(SearchPanel)).apply(this, arguments));
  }

  createClass(SearchPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Input = _props.inputComponent,
          messages = _props.messages;

      var getMessage = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_2" /* getMessagesFormatter */])(messages);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["g" /* Plugin */],
        {
          name: 'SearchPanel',
          dependencies: pluginDependencies$19
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["k" /* Template */],
          { name: 'toolbarContent' },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["m" /* TemplatePlaceholder */], null),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["l" /* TemplateConnector */],
            null,
            function (_ref, _ref2) {
              var searchValue = _ref.searchValue;
              var changeSearchValue$$1 = _ref2.changeSearchValue;
              return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Input, {
                value: searchValue,
                onValueChange: changeSearchValue$$1,
                getMessage: getMessage
              });
            }
          )
        )
      );
    }
  }]);
  return SearchPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

SearchPanel.propTypes = {
  inputComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  messages: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
};

SearchPanel.defaultProps = {
  messages: {}
};

/* globals requestAnimationFrame */

var TABLE_FLEX_TYPE = 'flex';

var areColumnsChanged = function areColumnsChanged(prevColumns, nextColumns) {
  if (prevColumns.length !== nextColumns.length) return true;
  var prevKeys = prevColumns.map(function (column) {
    return column.key;
  });
  return nextColumns.find(function (column) {
    return prevKeys.indexOf(column.key) === -1;
  }) !== undefined;
};

var TableLayout = function (_React$PureComponent) {
  inherits(TableLayout, _React$PureComponent);

  function TableLayout(props) {
    classCallCheck(this, TableLayout);

    var _this = possibleConstructorReturn(this, (TableLayout.__proto__ || Object.getPrototypeOf(TableLayout)).call(this, props));

    _this.state = {
      animationState: new Map()
    };

    _this.animations = new Map();
    _this.tableNode = null;

    _this.setRef = function (ref) {
      if (ref) _this.tableNode = ref;
    };
    return _this;
  }

  createClass(TableLayout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextColumns = nextProps.columns;
      var columns = this.props.columns;


      if (areColumnsChanged(columns, nextColumns)) return;

      // eslint-disable-next-line react/no-find-dom-node
      var tableWidth = Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(this).scrollWidth;
      this.animations = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["V" /* getAnimations */])(columns, nextColumns, tableWidth, this.animations);
      this.processAnimationFrame();
    }
  }, {
    key: 'getColumns',
    value: function getColumns() {
      var columns = this.props.columns;
      var animationState = this.state.animationState;


      var result = columns;

      var isFixedWidth = columns.filter(function (column) {
        return column.width === undefined;
      }).length === 0;
      if (isFixedWidth) {
        result = result.slice();
        result.push({ key: TABLE_FLEX_TYPE, type: TABLE_FLEX_TYPE });
      }

      if (animationState.size) {
        result = result.map(function (column) {
          return animationState.has(column.key) ? _extends({}, column, { animationState: animationState.get(column.key) }) : column;
        });
      }

      return result;
    }
  }, {
    key: 'processAnimationFrame',
    value: function processAnimationFrame() {
      this.animations = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["R" /* filterActiveAnimations */])(this.animations);

      if (!this.animations.size) {
        if (this.state.animationState.size) {
          this.setState({ animationState: new Map() });
        }
        return;
      }

      var animationState = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["O" /* evalAnimations */])(this.animations);
      this.setState({ animationState: animationState });

      requestAnimationFrame(this.processAnimationFrame.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Layout = _props.layoutComponent,
          minColumnWidth = _props.minColumnWidth,
          restProps = objectWithoutProperties(_props, ['layoutComponent', 'minColumnWidth']);

      var columns = this.getColumns();
      var minWidth = columns.map(function (column) {
        return column.width || (column.type === TABLE_FLEX_TYPE ? 0 : minColumnWidth);
      }).reduce(function (acc, width) {
        return acc + width;
      }, 0);

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Layout, _extends({}, restProps, {
        columns: columns,
        minWidth: minWidth,
        minColumnWidth: minColumnWidth
      }));
    }
  }]);
  return TableLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

TableLayout.propTypes = {
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  minColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  layoutComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var ColumnGroup = function (_React$PureComponent) {
  inherits(ColumnGroup, _React$PureComponent);

  function ColumnGroup() {
    classCallCheck(this, ColumnGroup);
    return possibleConstructorReturn(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
  }

  createClass(ColumnGroup, [{
    key: 'render',
    value: function render() {
      var columns = this.props.columns;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'colgroup',
        null,
        columns.map(function (column) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('col', {
            key: column.key,
            style: column.width !== undefined ? { width: column.width + 'px' } : null
          });
        })
      );
    }
  }]);
  return ColumnGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ColumnGroup.propTypes = {
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired
};

var STUB_TYPE = 'stub';


var getVisibleBoundary = function getVisibleBoundary(items, viewportStart, viewportSize, getItemSize, overscan) {
  var start = null;
  var end = null;

  var viewportEnd = viewportStart + viewportSize;
  var index = 0;
  var beforePosition = 0;
  while (end === null && index < items.length) {
    var item = items[index];
    var afterPosition = beforePosition + getItemSize(item);
    var isVisible = beforePosition >= viewportStart && beforePosition < viewportEnd || afterPosition > viewportStart && afterPosition <= viewportEnd || beforePosition < viewportStart && afterPosition > viewportEnd;
    if (isVisible && start === null) {
      start = index;
    }
    if (!isVisible && start !== null) {
      end = index - 1;
      break;
    }
    index += 1;
    beforePosition = afterPosition;
  }
  if (start !== null && end === null) {
    end = index - 1;
  }

  start = start === null ? 0 : start;
  end = end === null ? 0 : end;

  if (overscan) {
    start = Math.max(0, start - overscan);
    end = Math.min(items.length - 1, end + overscan);
  }

  return [start, end];
};

var getSpanBoundary = function getSpanBoundary(items, visibleBoundary, getItemSpan) {
  var start = visibleBoundary[0];
  var end = visibleBoundary[1];

  for (var index = 0; index <= visibleBoundary[1]; index += 1) {
    var span = getItemSpan(items[index]);
    if (index < visibleBoundary[0] && index + span > visibleBoundary[0]) {
      start = index;
    }
    if (index + (span - 1) > visibleBoundary[1]) {
      end = index + (span - 1);
    }
  }

  return [start, end];
};

var collapseBoundaries = function collapseBoundaries(itemsCount, visibleBoundary, spanBoundaries) {
  var beforePoints = new Set([0, visibleBoundary[0]]);
  var afterPoints = new Set([visibleBoundary[1], itemsCount - 1]);
  spanBoundaries.forEach(function (boundary) {
    beforePoints.add(boundary[0]);
    afterPoints.add(boundary[1]);
  });

  var boundaries = [];

  var lastBeforePoint = null;
  Array.from(beforePoints).sort(function (a, b) {
    return a - b;
  }).forEach(function (point) {
    if (lastBeforePoint === null) {
      lastBeforePoint = point;
      return;
    }
    boundaries.push([lastBeforePoint, point - 1]);
    lastBeforePoint = point;
  });

  for (var index = visibleBoundary[0]; index <= visibleBoundary[1]; index += 1) {
    boundaries.push([index, index]);
  }

  var lastAfterPoint = null;
  Array.from(afterPoints).sort(function (a, b) {
    return a - b;
  }).forEach(function (point) {
    if (lastAfterPoint === null) {
      lastAfterPoint = point;
      return;
    }
    boundaries.push([lastAfterPoint + 1, point]);
    lastAfterPoint = point;
  });

  return boundaries;
};

var getCollapsedColumns = function getCollapsedColumns(columns, visibleBoundary, boundaries, getColumnWidth) {
  var collapsedColumns = [];
  boundaries.forEach(function (boundary) {
    var isVisible = visibleBoundary[0] <= boundary[0] && boundary[1] <= visibleBoundary[1];
    if (isVisible) {
      var column = columns[boundary[0]];
      collapsedColumns.push(column);
    } else {
      var boundaryColumns = columns.slice(boundary[0], boundary[1] + 1);
      collapsedColumns.push({
        key: STUB_TYPE + '_' + boundary[0] + '_' + boundary[1],
        type: STUB_TYPE,
        width: boundaryColumns.reduce(function (acc, column) {
          return acc + getColumnWidth(column);
        }, 0)
      });
    }
  });
  return collapsedColumns;
};

var getCollapsedRows = function getCollapsedRows(rows, visibleBoundary, boundaries, getRowHeight, getCells) {
  var collapsedColumns = [];
  boundaries.forEach(function (boundary) {
    var isVisible = visibleBoundary[0] <= boundary[0] && boundary[1] <= visibleBoundary[1];
    if (isVisible) {
      var row = rows[boundary[0]];
      collapsedColumns.push({
        row: row,
        cells: getCells(row)
      });
    } else {
      var boundaryColumns = rows.slice(boundary[0], boundary[1] + 1);
      collapsedColumns.push({
        row: {
          type: STUB_TYPE,
          key: STUB_TYPE + '_' + boundary[0] + '_' + boundary[1],
          height: boundaryColumns.reduce(function (acc, column) {
            return acc + getRowHeight(column);
          }, 0)
        }
      });
    }
  });
  return collapsedColumns;
};

var getCollapsedCells = function getCollapsedCells(columns, spanBoundary, boundaries, getColSpan) {
  var collapsedColumns = [];
  var index = 0;
  while (index < boundaries.length) {
    var boundary = boundaries[index];
    var isSpan = spanBoundary[0] <= boundary[0] && boundary[1] <= spanBoundary[1];
    if (isSpan) {
      (function () {
        var column = columns[boundary[0]];
        var realColSpan = getColSpan(column);
        var realColSpanEnd = realColSpan + boundary[0] - 1;
        var colSpanEnd = boundaries.findIndex(function (colSpanBoundary) {
          return colSpanBoundary[0] <= realColSpanEnd && realColSpanEnd <= colSpanBoundary[1];
        });
        collapsedColumns.push({
          column: column,
          colSpan: colSpanEnd - index + 1
        });
        index += 1;
      })();
    } else {
      collapsedColumns.push({
        column: {
          key: STUB_TYPE + '_' + boundary[0] + '_' + boundary[1],
          type: STUB_TYPE
        },
        colSpan: 1
      });
      index += 1;
    }
  }
  return collapsedColumns;
};

var getCollapsedGrid = function getCollapsedGrid(_ref) {
  var rows = _ref.rows,
      columns = _ref.columns,
      top = _ref.top,
      height = _ref.height,
      left = _ref.left,
      width = _ref.width,
      _ref$getColumnWidth = _ref.getColumnWidth,
      getColumnWidth = _ref$getColumnWidth === undefined ? function (column) {
    return column.width;
  } : _ref$getColumnWidth,
      _ref$getRowHeight = _ref.getRowHeight,
      getRowHeight = _ref$getRowHeight === undefined ? function (row) {
    return row.height;
  } : _ref$getRowHeight,
      _ref$getColSpan = _ref.getColSpan,
      getColSpan = _ref$getColSpan === undefined ? function () {
    return 1;
  } : _ref$getColSpan;

  if (!rows.length || !columns.length) {
    return {
      columns: [],
      rows: []
    };
  }
  var rowsVisibleBoundary = getVisibleBoundary(rows, top, height, getRowHeight, 3);
  var columnsVisibleBoundary = getVisibleBoundary(columns, left, width, getColumnWidth, 1);

  var rowSpanBoundaries = rows.slice(rowsVisibleBoundary[0], rowsVisibleBoundary[1]).map(function (row) {
    return getSpanBoundary(columns, columnsVisibleBoundary, function (column) {
      return getColSpan(row, column);
    });
  });
  var columnBoundaries = collapseBoundaries(columns.length, columnsVisibleBoundary, rowSpanBoundaries);

  var rowBoundaries = collapseBoundaries(rows.length, rowsVisibleBoundary, []);

  return {
    columns: getCollapsedColumns(columns, columnsVisibleBoundary, columnBoundaries, getColumnWidth),
    rows: getCollapsedRows(rows, rowsVisibleBoundary, rowBoundaries, getRowHeight, function (row) {
      return getCollapsedCells(columns, getSpanBoundary(columns, columnsVisibleBoundary, function (column) {
        return getColSpan(row, column);
      }), columnBoundaries, function (column) {
        return getColSpan(row, column);
      });
    })
  };
};

var VirtualTableLayout = function (_React$PureComponent) {
  inherits(VirtualTableLayout, _React$PureComponent);

  function VirtualTableLayout(props) {
    classCallCheck(this, VirtualTableLayout);

    var _this = possibleConstructorReturn(this, (VirtualTableLayout.__proto__ || Object.getPrototypeOf(VirtualTableLayout)).call(this, props));

    _this.state = {
      rowHeights: new Map(),
      viewportTop: 0,
      viewportLeft: 0
    };

    _this.rowRefs = new Map();
    _this.registerRowRef = _this.registerRowRef.bind(_this);
    _this.getRowHeight = _this.getRowHeight.bind(_this);
    _this.updateViewport = _this.updateViewport.bind(_this);
    return _this;
  }

  createClass(VirtualTableLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.storeRowHeights();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.headerRows !== nextProps.headerRows || this.props.bodyRows !== nextProps.bodyRows) {
        var prevRowHeight = this.state.rowHeights;

        var rowHeights = [].concat(toConsumableArray(nextProps.headerRows), toConsumableArray(nextProps.bodyRows)).reduce(function (acc, row) {
          var rowHeight = prevRowHeight.get(row.key);
          if (rowHeight !== undefined) {
            acc.set(row.key, rowHeight);
          }
          return acc;
        }, new Map());
        this.setState({ rowHeights: rowHeights });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.storeRowHeights();
    }
  }, {
    key: 'getRowHeight',
    value: function getRowHeight(row) {
      var storedHeight = this.state.rowHeights.get(row.key);
      if (storedHeight !== undefined) return storedHeight;
      if (row.height) return row.height;
      return this.props.estimatedRowHeight;
    }
  }, {
    key: 'storeRowHeights',
    value: function storeRowHeights() {
      var _this2 = this;

      var rowsWithChangedHeights = Array.from(this.rowRefs.entries())
      // eslint-disable-next-line react/no-find-dom-node
      .map(function (_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            row = _ref2[0],
            ref = _ref2[1];

        return [row, Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(ref)];
      }).filter(function (_ref3) {
        var _ref4 = slicedToArray(_ref3, 2),
            node$$1 = _ref4[1];

        return !!node$$1;
      }).map(function (_ref5) {
        var _ref6 = slicedToArray(_ref5, 2),
            row = _ref6[0],
            node$$1 = _ref6[1];

        return [row, node$$1.getBoundingClientRect().height];
      }).filter(function (_ref7) {
        var _ref8 = slicedToArray(_ref7, 2),
            row = _ref8[0],
            height = _ref8[1];

        return height !== _this2.getRowHeight(row);
      });

      if (rowsWithChangedHeights.length) {
        var rowHeights = this.state.rowHeights;

        rowsWithChangedHeights.forEach(function (_ref9) {
          var _ref10 = slicedToArray(_ref9, 2),
              row = _ref10[0],
              height = _ref10[1];

          return rowHeights.set(row.key, height);
        });

        this.setState({
          rowHeights: rowHeights
        });
      }
    }
  }, {
    key: 'registerRowRef',
    value: function registerRowRef(row, ref) {
      if (ref === null) {
        this.rowRefs.delete(row);
      } else {
        this.rowRefs.set(row, ref);
      }
    }
  }, {
    key: 'updateViewport',
    value: function updateViewport(e) {
      var node$$1 = e.target;

      if (node$$1 !== e.currentTarget) {
        return;
      }

      // NOTE: prevent iOS to flicker in bounces
      if (node$$1.scrollTop < 0 || node$$1.scrollLeft < 0 || node$$1.scrollLeft + node$$1.clientWidth > node$$1.scrollWidth || node$$1.scrollTop + node$$1.clientHeight > node$$1.scrollHeight) {
        return;
      }

      if (this.viewportTop !== node$$1.scrollTop) {
        this.setState({
          viewportTop: node$$1.scrollTop,
          viewportLeft: node$$1.scrollLeft
        });
      }
    }
  }, {
    key: 'renderRowsBlock',
    value: function renderRowsBlock(collapsedGrid, Table, Body) {
      var _this3 = this;

      var _props = this.props,
          minWidth = _props.minWidth,
          Row = _props.rowComponent,
          Cell = _props.cellComponent;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        Table,
        {
          style: { minWidth: minWidth + 'px' }
        },
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ColumnGroup, {
          columns: collapsedGrid.columns
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          Body,
          null,
          collapsedGrid.rows.map(function (visibleRow) {
            var row = visibleRow.row,
                _visibleRow$cells = visibleRow.cells,
                cells = _visibleRow$cells === undefined ? [] : _visibleRow$cells;

            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
              __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["i" /* RefHolder */],
              {
                key: row.key,
                ref: function ref(_ref11) {
                  return _this3.registerRowRef(row, _ref11);
                }
              },
              Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
                Row,
                {
                  tableRow: row,
                  style: row.height !== undefined ? { height: row.height + 'px' } : undefined
                },
                cells.map(function (cell) {
                  var column = cell.column;

                  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Cell, {
                    key: column.key,
                    tableRow: row,
                    tableColumn: column,
                    style: column.animationState,
                    colSpan: cell.colSpan
                  });
                })
              )
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          headerRows = _props2.headerRows,
          bodyRows = _props2.bodyRows,
          columns = _props2.columns,
          minColumnWidth = _props2.minColumnWidth,
          height = _props2.height,
          Container = _props2.containerComponent,
          HeadTable = _props2.headTableComponent,
          Table = _props2.tableComponent,
          Head = _props2.headComponent,
          Body = _props2.bodyComponent,
          getCellColSpan = _props2.getCellColSpan;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["j" /* Sizer */],
        null,
        function (_ref12) {
          var width = _ref12.width;

          var headHeight = headerRows.reduce(function (acc, row) {
            return acc + _this4.getRowHeight(row);
          }, 0);
          var getColSpan = function getColSpan(tableRow, tableColumn) {
            return getCellColSpan({ tableRow: tableRow, tableColumn: tableColumn, tableColumns: columns });
          };
          var collapsedHeaderGrid = getCollapsedGrid({
            rows: headerRows,
            columns: columns,
            top: 0,
            left: _this4.state.viewportLeft,
            width: width,
            height: headHeight,
            getColumnWidth: function getColumnWidth(column) {
              return column.width || minColumnWidth;
            },
            getRowHeight: _this4.getRowHeight,
            getColSpan: getColSpan
          });
          var collapsedBodyGrid = getCollapsedGrid({
            rows: bodyRows,
            columns: columns,
            top: _this4.state.viewportTop,
            left: _this4.state.viewportLeft,
            width: width,
            height: height - headHeight,
            getColumnWidth: function getColumnWidth(column) {
              return column.width || minColumnWidth;
            },
            getRowHeight: _this4.getRowHeight,
            getColSpan: getColSpan
          });

          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            Container,
            {
              style: { height: height + 'px' },
              onScroll: _this4.updateViewport
            },
            !!headerRows.length && _this4.renderRowsBlock(collapsedHeaderGrid, HeadTable, Head),
            _this4.renderRowsBlock(collapsedBodyGrid, Table, Body)
          );
        }
      );
    }
  }]);
  return VirtualTableLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

VirtualTableLayout.propTypes = {
  minWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  minColumnWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  headerRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  bodyRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  bodyComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  headComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  tableComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  headTableComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  estimatedRowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  getCellColSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

VirtualTableLayout.defaultProps = {
  headerRows: [],
  headComponent: function headComponent() {
    return null;
  },
  headTableComponent: function headTableComponent() {
    return null;
  }
};

var getColumnStyle = function getColumnStyle(_ref) {
  var column = _ref.column;
  return column.animationState;
};

var getRowStyle = function getRowStyle(_ref2) {
  var row = _ref2.row;
  return row.height !== undefined ? { height: row.height + 'px' } : undefined;
};

var RowLayout = function (_React$PureComponent) {
  inherits(RowLayout, _React$PureComponent);

  function RowLayout() {
    classCallCheck(this, RowLayout);
    return possibleConstructorReturn(this, (RowLayout.__proto__ || Object.getPrototypeOf(RowLayout)).apply(this, arguments));
  }

  createClass(RowLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          Row = _props.rowComponent,
          Cell = _props.cellComponent,
          getCellColSpan = _props.getCellColSpan;

      var getColSpan = function getColSpan(tableRow, tableColumn) {
        return getCellColSpan({ tableRow: tableRow, tableColumn: tableColumn, tableColumns: columns });
      };

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        Row,
        {
          tableRow: row,
          style: getRowStyle({ row: row })
        },
        columns.map(function (column) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Cell, {
            key: column.key,
            tableRow: row,
            tableColumn: column,
            style: getColumnStyle({ column: column }),
            colSpan: getColSpan(row, column)
          });
        })
      );
    }
  }]);
  return RowLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

RowLayout.propTypes = {
  row: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"].isRequired,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  getCellColSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var RowsBlockLayout = function (_React$PureComponent) {
  inherits(RowsBlockLayout, _React$PureComponent);

  function RowsBlockLayout() {
    classCallCheck(this, RowsBlockLayout);
    return possibleConstructorReturn(this, (RowsBlockLayout.__proto__ || Object.getPrototypeOf(RowsBlockLayout)).apply(this, arguments));
  }

  createClass(RowsBlockLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rows = _props.rows,
          columns = _props.columns,
          Block = _props.blockComponent,
          rowComponent = _props.rowComponent,
          cellComponent = _props.cellComponent,
          getCellColSpan = _props.getCellColSpan;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        Block,
        null,
        rows.map(function (row) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(RowLayout, {
            key: row.key,
            row: row,
            columns: columns,
            rowComponent: rowComponent,
            cellComponent: cellComponent,
            getCellColSpan: getCellColSpan
          });
        })
      );
    }
  }]);
  return RowsBlockLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

RowsBlockLayout.propTypes = {
  rows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  blockComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  getCellColSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

var StaticTableLayout = function (_React$PureComponent) {
  inherits(StaticTableLayout, _React$PureComponent);

  function StaticTableLayout() {
    classCallCheck(this, StaticTableLayout);
    return possibleConstructorReturn(this, (StaticTableLayout.__proto__ || Object.getPrototypeOf(StaticTableLayout)).apply(this, arguments));
  }

  createClass(StaticTableLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerRows = _props.headerRows,
          bodyRows = _props.bodyRows,
          columns = _props.columns,
          minWidth = _props.minWidth,
          Container = _props.containerComponent,
          Table = _props.tableComponent,
          headComponent = _props.headComponent,
          bodyComponent = _props.bodyComponent,
          rowComponent = _props.rowComponent,
          cellComponent = _props.cellComponent,
          getCellColSpan = _props.getCellColSpan;


      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        Container,
        null,
        Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          Table,
          {
            style: { minWidth: minWidth + 'px' }
          },
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ColumnGroup, { columns: columns }),
          !!headerRows.length && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(RowsBlockLayout, {
            rows: headerRows,
            columns: columns,
            blockComponent: headComponent,
            rowComponent: rowComponent,
            cellComponent: cellComponent,
            getCellColSpan: getCellColSpan
          }),
          Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(RowsBlockLayout, {
            rows: bodyRows,
            columns: columns,
            blockComponent: bodyComponent,
            rowComponent: rowComponent,
            cellComponent: cellComponent,
            getCellColSpan: getCellColSpan
          })
        )
      );
    }
  }]);
  return StaticTableLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

StaticTableLayout.propTypes = {
  headerRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"],
  bodyRows: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"].isRequired,
  minWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  tableComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  headComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  bodyComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  rowComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  cellComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  getCellColSpan: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired
};

StaticTableLayout.defaultProps = {
  headerRows: [],
  headComponent: function headComponent() {
    return null;
  }
};

var ItemLayout = function (_React$PureComponent) {
  inherits(ItemLayout, _React$PureComponent);

  function ItemLayout(props) {
    classCallCheck(this, ItemLayout);

    var _this = possibleConstructorReturn(this, (ItemLayout.__proto__ || Object.getPrototypeOf(ItemLayout)).call(this, props));

    _this.state = {
      dragging: false
    };
    return _this;
  }

  createClass(ItemLayout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          item = _props.item,
          Item = _props.itemComponent,
          draggingEnabled = _props.draggingEnabled,
          onDragStart = _props.onDragStart,
          onDragEnd = _props.onDragEnd;
      var dragging = this.state.dragging;


      var itemElement = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Item, { item: _extends({}, item, { draft: dragging || item.draft }) });

      return draggingEnabled ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["c" /* DragSource */],
        {
          payload: [{ type: 'column', columnName: item.column.name }],
          onStart: function onStart() {
            _this2.setState({ dragging: true });
            onDragStart();
          },
          onEnd: function onEnd() {
            _this2.setState({ dragging: false });
            onDragEnd();
          }
        },
        itemElement
      ) : itemElement;
    }
  }]);
  return ItemLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ItemLayout.propTypes = {
  item: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    draft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
  }).isRequired,
  itemComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  draggingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  onDragStart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onDragEnd: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

ItemLayout.defaultProps = {
  draggingEnabled: false,
  onDragStart: function onDragStart() {},
  onDragEnd: function onDragEnd() {}
};

var GroupPanelLayout = function (_React$PureComponent) {
  inherits(GroupPanelLayout, _React$PureComponent);

  function GroupPanelLayout(props) {
    classCallCheck(this, GroupPanelLayout);

    var _this = possibleConstructorReturn(this, (GroupPanelLayout.__proto__ || Object.getPrototypeOf(GroupPanelLayout)).call(this, props));

    _this.state = {
      sourceColumnName: null,
      targetItemIndex: -1
    };
    _this.handleDragEvent = function (eventHandler, _ref) {
      var payload = _ref.payload,
          restArgs = objectWithoutProperties(_ref, ['payload']);
      var isColumnGroupingEnabled = _this.props.isColumnGroupingEnabled;
      var columnName = payload[0].columnName;


      if (isColumnGroupingEnabled(columnName)) {
        eventHandler(_extends({ payload: payload }, restArgs));
      }
    };
    _this.onEnter = function (_ref2) {
      var payload = _ref2.payload;

      _this.setState({
        sourceColumnName: payload[0].columnName
      });
    };
    _this.onOver = function (_ref3) {
      var clientOffset = _ref3.clientOffset;
      var _this$props = _this.props,
          onGroupDraft = _this$props.onGroupDraft,
          items = _this$props.items;
      var _this$state = _this.state,
          sourceColumnName = _this$state.sourceColumnName,
          prevTargetItemIndex = _this$state.targetItemIndex;
      // eslint-disable-next-line react/no-find-dom-node

      var itemGeometries = _this.itemRefs.map(function (ref) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(ref).getBoundingClientRect();
      });
      var sourceItemIndex = items.findIndex(function (_ref4) {
        var column = _ref4.column;
        return column.name === sourceColumnName;
      });
      var targetItemIndex = Object(__WEBPACK_IMPORTED_MODULE_3__devexpress_dx_grid_core__["_1" /* getGroupCellTargetIndex */])(itemGeometries, sourceItemIndex, clientOffset);

      if (prevTargetItemIndex === targetItemIndex) return;

      onGroupDraft({
        columnName: sourceColumnName,
        groupIndex: targetItemIndex
      });
      _this.setState({ targetItemIndex: targetItemIndex });
    };
    _this.onLeave = function () {
      var onGroupDraft = _this.props.onGroupDraft;
      var sourceColumnName = _this.state.sourceColumnName;

      if (!_this.draggingColumnName) {
        _this.resetState();
        return;
      }
      onGroupDraft({
        columnName: sourceColumnName,
        groupIndex: -1
      });
      _this.setState({
        targetItemIndex: -1
      });
    };
    _this.onDrop = function () {
      var onGroup = _this.props.onGroup;
      var _this$state2 = _this.state,
          sourceColumnName = _this$state2.sourceColumnName,
          targetItemIndex = _this$state2.targetItemIndex;

      _this.resetState();
      onGroup({
        columnName: sourceColumnName,
        groupIndex: targetItemIndex
      });
    };
    _this.onDragStart = function (columnName) {
      _this.draggingColumnName = columnName;
    };
    _this.onDragEnd = function () {
      _this.draggingColumnName = null;
      var _this$state3 = _this.state,
          sourceColumnName = _this$state3.sourceColumnName,
          targetItemIndex = _this$state3.targetItemIndex;
      var onGroup = _this.props.onGroup;

      if (sourceColumnName && targetItemIndex === -1) {
        onGroup({
          columnName: sourceColumnName
        });
      }
      _this.resetState();
    };
    return _this;
  }

  createClass(GroupPanelLayout, [{
    key: 'resetState',
    value: function resetState() {
      var onGroupDraftCancel = this.props.onGroupDraftCancel;

      onGroupDraftCancel();
      this.setState({
        sourceColumnName: null,
        targetItemIndex: -1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          EmptyMessage = _props.emptyMessageComponent,
          Container = _props.containerComponent,
          Item = _props.itemComponent,
          draggingEnabled = _props.draggingEnabled,
          isColumnGroupingEnabled = _props.isColumnGroupingEnabled;


      this.itemRefs = [];

      var groupPanel = items.length ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        Container,
        null,
        items.map(function (item) {
          var columnName = item.column.name;

          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ItemLayout, {
            key: columnName,
            ref: function ref(element) {
              return element && _this2.itemRefs.push(element);
            },
            item: item,
            itemComponent: Item,
            draggingEnabled: draggingEnabled && isColumnGroupingEnabled(columnName),
            onDragStart: function onDragStart() {
              return _this2.onDragStart(columnName);
            },
            onDragEnd: _this2.onDragEnd
          });
        })
      ) : Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EmptyMessage, null);

      return draggingEnabled ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2__devexpress_dx_react_core__["e" /* DropTarget */],
        {
          onEnter: function onEnter(args) {
            return _this2.handleDragEvent(_this2.onEnter, args);
          },
          onOver: function onOver(args) {
            return _this2.handleDragEvent(_this2.onOver, args);
          },
          onLeave: function onLeave(args) {
            return _this2.handleDragEvent(_this2.onLeave, args);
          },
          onDrop: function onDrop(args) {
            return _this2.handleDragEvent(_this2.onDrop, args);
          }
        },
        groupPanel
      ) : groupPanel;
    }
  }]);
  return GroupPanelLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

GroupPanelLayout.propTypes = {
  items: Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(Object(__WEBPACK_IMPORTED_MODULE_1_prop_types__["shape"])({
    column: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    draft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"]
  })).isRequired,
  onGroup: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  itemComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  containerComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  emptyMessageComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
  draggingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["bool"],
  isColumnGroupingEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onGroupDraft: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
  onGroupDraftCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
};

GroupPanelLayout.defaultProps = {
  onGroup: function onGroup() {},
  draggingEnabled: false,
  isColumnGroupingEnabled: function isColumnGroupingEnabled() {},
  onGroupDraft: function onGroupDraft() {},
  onGroupDraftCancel: function onGroupDraftCancel() {}
};


//# sourceMappingURL=dx-react-grid.es.js.map


/***/ }),

/***/ "../node_modules/antd/lib/icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("../node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("../node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return React.createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/debounce/index.js":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "../node_modules/material-ui-pickers/utils/MuiPickersUtilsProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiPickersContextConsumer = undefined;

var _getPrototypeOf = __webpack_require__("../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("../node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$createContext = _react2.default.createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

var MuiPickersContextConsumer = exports.MuiPickersContextConsumer = Consumer;

var MuiPickersUtilsProvider = function (_PureComponent) {
  (0, _inherits3.default)(MuiPickersUtilsProvider, _PureComponent);

  function MuiPickersUtilsProvider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MuiPickersUtilsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MuiPickersUtilsProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiPickersUtilsProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      utils: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MuiPickersUtilsProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Provider,
        { value: this.state.utils },
        ' ',
        this.props.children,
        ' '
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref2) {
      var Utils = _ref2.utils,
          locale = _ref2.locale,
          moment = _ref2.moment;

      return {
        utils: new Utils({ locale: locale, moment: moment })
      };
    }
  }]);
  return MuiPickersUtilsProvider;
}(_react.PureComponent);

MuiPickersUtilsProvider.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  utils: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.element.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.element.isRequired)]).isRequired,
  moment: _propTypes2.default.func
};
MuiPickersUtilsProvider.defaultProps = {
  locale: undefined,
  moment: undefined
};
exports.default = MuiPickersUtilsProvider;

/***/ }),

/***/ "./AppGlobalStateProvider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* unused harmony export AppContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js";

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



var AppContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

var AppProvider = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;


;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppContext, "AppContext", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js");
  reactHotLoader.register(AppProvider, "AppProvider", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/AppGlobalStateProvider/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/DealsTable/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid/dist/dx-react-grid.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__ = __webpack_require__("../node_modules/react-icons/lib/md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer__ = __webpack_require__("../node_modules/@material-ui/icons/Equalizer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Equalizer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_backEndTableUtils_SelectFilterCell__ = __webpack_require__("./utils/backEndTableUtils/SelectFilterCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_backEndTableUtils_tableSortingUtils__ = __webpack_require__("./utils/backEndTableUtils/tableSortingUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_DefaultVirtualTableCell__ = __webpack_require__("./utils/backEndTableUtils/DefaultVirtualTableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableComponent__ = __webpack_require__("./utils/backEndTableUtils/TableComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableContainerComponent__ = __webpack_require__("./utils/backEndTableUtils/TableContainerComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_NoDataCellComponent__ = __webpack_require__("./utils/backEndTableUtils/NoDataCellComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dataTableFormatters_ViewFormatter__ = __webpack_require__("./components/dataTableFormatters/ViewFormatter.js");
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js",
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["g" /* TableFilterRow */].Cell, _extends({}, props, {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["b" /* DataTypeProvider */], _extends({
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["b" /* Grid */], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["a" /* DragDropProvider */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["o" /* SearchState */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["d" /* FilteringState */], {
        columnExtensions: filteringStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["q" /* SortingState */], {
        defaultSorting: [{
          columnName: 'date',
          direction: 'desc'
        }],
        columnExtensions: sortingStateColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["p" /* SelectionState */], {
        selection: this.props.selection,
        onSelectionChange: changeSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["m" /* PagingState */], {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        onPageSizeChange: this.changePageSize,
        onCurrentPageChange: this.currentPageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["h" /* IntegratedFiltering */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["k" /* IntegratedSorting */], {
        columnExtensions: integratedSortingColumnExtensions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["j" /* IntegratedSelection */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__devexpress_dx_react_grid__["i" /* IntegratedPaging */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["k" /* VirtualTable */], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableContainerComponent__["a" /* default */],
        cellComponent: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["e" /* TableColumnReordering */], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["f" /* TableColumnResizing */], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["g" /* TableFilterRow */], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["j" /* Toolbar */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["d" /* SearchPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["h" /* TableHeaderRow */], {
        showSortingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["i" /* TableSelection */], {
        showSelectAll: true,
        selectByRowClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["c" /* PagingPanel */], {
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return DealsTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = DealsTable;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(sortingStateColumnExtensions, "sortingStateColumnExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(filteringStateColumnExtensions, "filteringStateColumnExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(getRowId, "getRowId", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(statusSelectInputItems, "statusSelectInputItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(FilterCell, "FilterCell", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(integratedSortingColumnExtensions, "integratedSortingColumnExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(defaultColumnWidths, "defaultColumnWidths", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(pageSizes, "pageSizes", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(mapSizesToProps, "mapSizesToProps", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(ViewCellFormatter, "ViewCellFormatter", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(ViewTypeProvider, "ViewTypeProvider", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(DealsTable, "DealsTable", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/DealsTable/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/InnerAppLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__ = __webpack_require__("../node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__ = __webpack_require__("../node_modules/material-ui-pickers/utils/moment-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_pickers_utils_moment_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__ = __webpack_require__("../node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__ = __webpack_require__("../node_modules/material-ui-pickers/utils/MuiPickersUtilsProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_pickers_utils_MuiPickersUtilsProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
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
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js";

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
















var Offline = function Offline() {
  return null;
};

if (__WEBPACK_IMPORTED_MODULE_9_is_browser___default.a) {
  var _require = __webpack_require__("../node_modules/react-detect-offline/dist/index.js"),
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(InnerAppLayout));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Offline, "Offline", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(InnerAppLayout, "InnerAppLayout", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/InnerAppLayout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("../node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser__ = __webpack_require__("../node_modules/is-browser/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_is_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.es.js");
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
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var Layout = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class =
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
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__["a" /* AppProvider */], {
        UserStore: UserStore,
        UIStore: UIStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_styled_components__["b" /* ThemeProvider */], {
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_9__lib_withRoot__["a" /* default */])(Layout));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, "store", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(UIStore, "UIStore", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(Layout, "Layout", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/Layout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MaterialCustomTextFieldWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce__ = __webpack_require__("../node_modules/debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_debounce__);
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js";

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(CustomTextFieldWrapper));

/* harmony default export */ __webpack_exports__["a"] = (_default);
/*

{error && touched ? <Message color="#ef5350" message={error} /> : null}
        {!error && warning && touched ? (
          <Message color="orange" message={warning} />
        ) : null}
        {!error && !warning && success ? (
          <Message color="green" message={success} />
        ) : null}

*/

;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(numbersOnlyRegex, "numbersOnlyRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(noLettersRegex, "noLettersRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(noNegativeSignRegex, "noNegativeSignRegex", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(CustomTextFieldWrapper, "CustomTextFieldWrapper", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/MaterialCustomTextFieldWrapper/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/forms/SubmitDealForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("../node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__("../node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__("../node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__ = __webpack_require__("../node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__("../node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form__ = __webpack_require__("../node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4__ = __webpack_require__("../node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__ = __webpack_require__("../node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__ = __webpack_require__("../node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add__ = __webpack_require__("../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete__ = __webpack_require__("../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_circular_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css__ = __webpack_require__("../node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_circular_progressbar_dist_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md__ = __webpack_require__("../node_modules/react-icons/lib/md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_icons_lib_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip__ = __webpack_require__("../node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react_images__ = __webpack_require__("../node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_react_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog__ = __webpack_require__("../node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye__ = __webpack_require__("../node_modules/@material-ui/icons/RemoveRedEye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__material_ui_icons_RemoveRedEye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Menu__ = __webpack_require__("../node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem__ = __webpack_require__("../node_modules/material-ui/Menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__MaterialCustomTextFieldWrapper__ = __webpack_require__("./components/MaterialCustomTextFieldWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__MaterialCustomRadioInputWrapper__ = __webpack_require__("./components/MaterialCustomRadioInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__MaterialCustomSelectInputWrapper__ = __webpack_require__("./components/MaterialCustomSelectInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__CustomFileUploadInputWrapper__ = __webpack_require__("./components/CustomFileUploadInputWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__utils_stringUtils__ = __webpack_require__("./utils/stringUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_material_ui_Input__ = __webpack_require__("../node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_material_ui_Form__ = __webpack_require__("../node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__formValidation__ = __webpack_require__("./components/forms/SubmitDealForm/formValidation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__constants_userTypes__ = __webpack_require__("./constants/userTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__constants_userTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__constants_userTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__utils_Math__ = __webpack_require__("./utils/Math.js");




var _class,
    _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var SubmitDealForm = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class =
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SubmitDealForm;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"])) || _class;

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["withStyles"])(styles)(SubmitDealForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomTextField, "CustomTextField", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomRadioInput, "MaterialCustomRadioInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(MaterialCustomSelectInput, "MaterialCustomSelectInput", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(CustomFileUploadInputBtn, "CustomFileUploadInputBtn", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(acceptedFileExtensions, "acceptedFileExtensions", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentItems, "radioInputAgentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputAgentPaymentItems, "radioInputAgentPaymentItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(radioInputYesNoItems, "radioInputYesNoItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(dealTypeSelectItems, "dealTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(fundsPaidBySelectItems, "fundsPaidBySelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(paymentTypeSelectItems, "paymentTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(deductionTypeSelectItems, "deductionTypeSelectItems", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(imagePreloader, "imagePreloader", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(SubmitDealForm, "SubmitDealForm", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/components/forms/SubmitDealForm/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/backEndTableUtils/DefaultVirtualTableCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/DefaultVirtualTableCell.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var VirtualCell = function VirtualCell(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["k" /* VirtualTable */].Cell, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

var _default = VirtualCell;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VirtualCell, "VirtualCell", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/DefaultVirtualTableCell.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/DefaultVirtualTableCell.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/backEndTableUtils/NoDataCellComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/NoDataCellComponent.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["k" /* VirtualTable */].NoDataCell, _extends({}, restProps, {
    className: classes.myNoDataCellComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'NoDataCellComponentBase'
})(NoDataCellComponentBase);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/NoDataCellComponent.js");
  reactHotLoader.register(NoDataCellComponentBase, "NoDataCellComponentBase", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/NoDataCellComponent.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/NoDataCellComponent.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/backEndTableUtils/TableComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableComponent.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["k" /* VirtualTable */].Table, _extends({}, restProps, {
    className: classes.myTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableComponent'
})(TableComponentBase);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableComponent.js");
  reactHotLoader.register(TableComponentBase, "TableComponentBase", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableComponent.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableComponent.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/backEndTableUtils/TableContainerComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__ = __webpack_require__("../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("../node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableContainerComponent.js";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["k" /* VirtualTable */].Container, _extends({}, restProps, {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.myTableContainer, className),
    id: "myTableContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }));
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  name: 'TableContainerComponent'
})(TableContainerBase);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableContainerComponent.js");
  reactHotLoader.register(TableContainerBase, "TableContainerBase", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableContainerComponent.js");
  reactHotLoader.register(_default, "default", "/Users/dmitriychuvichkin/Dev/real-estate-front/src/utils/backEndTableUtils/TableContainerComponent.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=10.2da0c29f5db8ba60f225.hot-update.js.map