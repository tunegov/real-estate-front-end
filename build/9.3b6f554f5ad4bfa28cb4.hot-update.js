webpackHotUpdate(9,{

/***/ "../node_modules/@devexpress/dx-react-grid-material-ui/dist/dx-react-grid-material-ui.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Grid$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnChooser$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DragDropProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PagingPanel$1; });
/* unused harmony export GroupingPanel */
/* unused harmony export TableRowDetail */
/* unused harmony export TableGroupRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TableSelection$1; });
/* unused harmony export Table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return VirtualTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TableFilterRow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TableHeaderRow$1; });
/* unused harmony export TableBandHeader */
/* unused harmony export TableEditRow */
/* unused harmony export TableEditColumn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TableColumnVisibility$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TableColumnReordering$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TableColumnResizing$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Toolbar$2; });
/* unused harmony export TableTreeColumn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchPanel$1; });
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

/***/ "./AppGlobalStateProvider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["i" /* TableFilterRow */].Cell, _extends({}, props, {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["c" /* Grid */], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["b" /* DragDropProvider */], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["m" /* VirtualTable */], {
        height: __WEBPACK_IMPORTED_MODULE_3_is_browser___default.a ? window.innerHeight - 310 : undefined,
        tableComponent: __WEBPACK_IMPORTED_MODULE_12__utils_backEndTableUtils_TableComponent__["a" /* default */],
        containerComponent: __WEBPACK_IMPORTED_MODULE_13__utils_backEndTableUtils_TableContainerComponent__["a" /* default */],
        cellComponent: __WEBPACK_IMPORTED_MODULE_11__utils_backEndTableUtils_DefaultVirtualTableCell__["a" /* default */],
        noDataCellComponent: __WEBPACK_IMPORTED_MODULE_14__utils_backEndTableUtils_NoDataCellComponent__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["f" /* TableColumnReordering */], {
        defaultOrder: columns.map(function (column) {
          return column.name;
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["g" /* TableColumnResizing */], {
        defaultColumnWidths: defaultColumnWidths,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["i" /* TableFilterRow */], {
        cellComponent: FilterCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["l" /* Toolbar */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["e" /* SearchPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["j" /* TableHeaderRow */], {
        showSortingControls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["k" /* TableSelection */], {
        showSelectAll: true,
        selectByRowClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__devexpress_dx_react_grid_material_ui__["d" /* PagingPanel */], {
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
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__AppGlobalStateProvider__["b" /* AppProvider */], {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["m" /* VirtualTable */].Cell, _extends({}, props, {
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["m" /* VirtualTable */].NoDataCell, _extends({}, restProps, {
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["m" /* VirtualTable */].Table, _extends({}, restProps, {
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__devexpress_dx_react_grid_material_ui__["m" /* VirtualTable */].Container, _extends({}, restProps, {
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
//# sourceMappingURL=9.3b6f554f5ad4bfa28cb4.hot-update.js.map