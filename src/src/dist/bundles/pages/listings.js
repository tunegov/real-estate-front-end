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
/******/ 	return __webpack_require__(__webpack_require__.s = 246);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ 12:
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

/***/ 137:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_stringUtils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styles = function styles(theme) {
  return {
    root: {
      minHeight: '400px',
      width: '100%',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif2,
      fontSize: '0.9rem',
      transition: 'transform .2s ease-in-out',
      color: 'rgba(0,0,0,.7)',
      '&:hover': {
        transform: 'scale(1.02,1.02)'
      }
    },
    imageWrapper: {
      position: 'relative',
      height: '234px',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    image: {
      objectFit: 'cover',
      height: '100%',
      width: '100%'
    },
    infoContentWrapper: {
      padding: '20px 20px',
      border: '1px solid rgba(0,0,0,.2)',
      borderTop: 'none'
    },
    addressWrapper: {
      fontWeight: 600,
      marginBottom: '15px',
      textAlign: 'center',
      cursor: 'pointer'
    },
    neighborhoodWrapper: {
      fontSize: '0.8rem',
      color: 'rgba(0,0,0,.7)',
      marginBottom: '5px',
      textAlign: 'center'
    },
    priceWrapper: {
      marginBottom: '8px',
      textAlign: 'center'
    },
    miscInfo: {
      fontSize: '0.7rem',
      textAlign: 'center'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      paddingLeft: '15px',
      paddingRight: '15px',
      border: '1px solid rgba(0,0,0,.2)',
      borderTop: 'none'
    },
    heartIcon: {
      marginRight: '5px',
      cursor: 'pointer',
      color: theme.frontEnd.colors.primary.main
    },
    noFeeWrapper: {
      position: 'absolute',
      top: '7px',
      left: '7px',
      fontSize: '0.7rem',
      color: '#fff',
      backgroundColor: '#12A319',
      padding: '2px 5px',
      borderRadius: '3px'
    }
  };
};

var ListingCard = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ListingCard, _Component);

  function ListingCard() {
    _classCallCheck(this, ListingCard);

    return _possibleConstructorReturn(this, (ListingCard.__proto__ || Object.getPrototypeOf(ListingCard)).apply(this, arguments));
  }

  _createClass(ListingCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          featuredPhotoURL = _props.featuredPhotoURL,
          otherPhotoURLs = _props.otherPhotoURLs,
          address = _props.address,
          neighborhood = _props.neighborhood,
          price = _props.price,
          beds = _props.beds,
          baths = _props.baths,
          isLiked = _props.isLiked,
          isNoFee = _props.isNoFee,
          monthsOfFreeRent = _props.monthsOfFreeRent,
          sqFootage = _props.sqFootage,
          isStudio = _props.isStudio,
          type = _props.type,
          id = _props.id,
          imageWrapperClassName = _props.imageWrapperClassName;

      var displayType = function displayType(dealType) {
        if (!dealType) return;
        var iType = dealType.split(' ')[1];
        var type = iType === 'rental' ? 'rentals' : 'sales';
        return Object(__WEBPACK_IMPORTED_MODULE_6__utils_stringUtils__["a" /* capitalize */])(type);
      };

      var renderNoticeTag = function renderNoticeTag() {
        var monthsWord = monthsOfFreeRent >= 2 ? 'Months' : 'Month';

        if (isNoFee && monthsOfFreeRent) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "No Fee ", " & ".concat(monthsOfFreeRent, " ").concat(monthsWord, " Free Rent"));
        }

        if (isNoFee) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "No Fee");
        }

        if (monthsOfFreeRent) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: classes.noFeeWrapper
          }, "".concat(monthsOfFreeRent, " ").concat(monthsWord, " Free Rent"));
        }

        return null;
      };

      var dealType = displayType(type);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.imageWrapper, imageWrapperClassName)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "listing",
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: featuredPhotoURL,
        alt: "listing",
        className: classes.image
      })), renderNoticeTag()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.infoContentWrapper
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "listing",
        params: {
          id: id
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.addressWrapper
      }, address)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.neighborhoodWrapper
      }, dealType ? "".concat(dealType, " | ") : null, " ", neighborhood), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.priceWrapper
      }, "$", price ? price.toLocaleString() : null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.miscInfo
      }, isStudio ? 'Studio' : "".concat(beds, " BD"), " | ", "".concat(baths, " BA"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footer
      }, isLiked ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Favorite___default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_FavoriteBorder___default.a, {
        color: "inherit",
        classes: {
          root: classes.heartIcon
        }
      }), ' ', "Favorite"));
    }
  }]);

  return ListingCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (ListingCard);

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 17:
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

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = function styles(theme) {
  return {
    root: {
      height: '56px',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      backgroundColor: '#fff'
    }
  };
};

var CustomMapMarker = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles), Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomMapMarker, _Component);

  function CustomMapMarker() {
    _classCallCheck(this, CustomMapMarker);

    return _possibleConstructorReturn(this, (CustomMapMarker.__proto__ || Object.getPrototypeOf(CustomMapMarker)).apply(this, arguments));
  }

  _createClass(CustomMapMarker, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          longitude = _props.longitude,
          latitude = _props.latitude,
          defaultZoom = _props.defaultZoom,
          onClick = _props.onClick;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__["Marker"], {
        defaultZoom: defaultZoom || 8,
        defaultCenter: {
          lat: latitude,
          lng: longitude
        },
        onClick: onClick
      });
    }
  }]);

  return CustomMapMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (CustomMapMarker);

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "mobx-state-tree"
var external__mobx_state_tree_ = __webpack_require__(11);
var external__mobx_state_tree__default = /*#__PURE__*/__webpack_require__.n(external__mobx_state_tree_);

// CONCATENATED MODULE: ./models/UIStore/index.js

var defaultState = {
  fullScreenLoaderOn: false,
  fullScreenLoaderText: ''
};
var Store = external__mobx_state_tree_["types"].model('UI', {
  fullScreenLoaderOn: external__mobx_state_tree_["types"].boolean,
  fullScreenLoaderText: external__mobx_state_tree_["types"].string
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
/* harmony default export */ var UIStore = (Store.create(defaultState));
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "graphql-request"
var external__graphql_request_ = __webpack_require__(5);
var external__graphql_request__default = /*#__PURE__*/__webpack_require__.n(external__graphql_request_);

// EXTERNAL MODULE: ./constants/graphQLEndpoint.js
var graphQLEndpoint = __webpack_require__(6);

// CONCATENATED MODULE: ./models/UserStore/userEffects/signUpCustomer.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var query = "\n    mutation registerCustomer($input: RegisterCustomerInput!) {\n      registerCustomer(input: $input) {\n        customer {\n          uuid\n          role\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

function signUpCustomer(_x, _x2) {
  return _signUpCustomer.apply(this, arguments);
}

function _signUpCustomer() {
  _signUpCustomer = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self, values) {
    var response, error, variables, finalResponseObj;
    return regenerator__default.a.wrap(function _callee$(_context) {
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

/* harmony default export */ var userEffects_signUpCustomer = (signUpCustomer);
// CONCATENATED MODULE: ./models/UserStore/userEffects/logoutUser.js


function logoutUser__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var logoutUser_query = "\n    mutation logoutUser {\n      logoutUser {\n        wasSuccessful\n        userError\n      }\n    }\n  ";
var logoutUser_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

function logoutUser(_x) {
  return _logoutUser.apply(this, arguments);
}

function _logoutUser() {
  _logoutUser = logoutUser__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self) {
    var res, response, error, finalResponseObj, _res, data;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            finalResponseObj = {
              response: response,
              error: error
            };
            _context.prev = 1;
            _context.next = 4;
            return logoutUser_client.request(logoutUser_query);

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

            if (!finalResponseObj.error) {
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

/* harmony default export */ var userEffects_logoutUser = (logoutUser);
// CONCATENATED MODULE: ./models/UserStore/userEffects/loginUser.js


function loginUser__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var loginUser_query = "\n    mutation loginUser($input: LoginUserInput!) {\n      loginUser(input: $input) {\n        user {\n          uuid\n          role\n          admin {\n            isAdminOwner\n          }\n        }\n        wasSuccessful\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  ";
var loginUser_client = new external__graphql_request_["GraphQLClient"](graphQLEndpoint["a" /* default */], {
  credentials: 'same-origin'
});

function loginUser(_x, _x2) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = loginUser__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(self, values) {
    var variables, finalResponseObj;
    return regenerator__default.a.wrap(function _callee$(_context) {
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
            return _context.abrupt("return", loginUser_client.request(loginUser_query, variables).then(function (res) {
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

/* harmony default export */ var userEffects_loginUser = (loginUser);
// CONCATENATED MODULE: ./models/UserStore/userEffects/index.js



 // import debounce from 'debounce';

var UserEffects = external__mobx_state_tree_["types"].model({}).actions(function (self) {
  return {
    signUpCustomer: userEffects_signUpCustomer.bind(null, self),
    logoutUser: userEffects_logoutUser.bind(null, self),
    loginUser: userEffects_loginUser.bind(null, self)
  };
});
/* harmony default export */ var userEffects = (UserEffects);
// EXTERNAL MODULE: external "urlsafe-base64"
var external__urlsafe_base64_ = __webpack_require__(48);
var external__urlsafe_base64__default = /*#__PURE__*/__webpack_require__.n(external__urlsafe_base64_);

// CONCATENATED MODULE: ./utils/jwtUtils.js


function JWTPaylodeDecode(jwtData) {
  if (!jwtData || typeof jwtData !== 'string') {
    throw new Error("function \"decodeJWTPayload\" must recieve a url-safe base-64 encoded argument\nRecieved: ".concat(jwtData));
  }

  var tempPayload = jwtData.split('.')[1];
  var payloadBuffer = external__urlsafe_base64__default.a.decode(tempPayload);
  var payload = JSON.parse(payloadBuffer.toString());
  return payload;
}


// CONCATENATED MODULE: ./utils/getCookie.js
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

/* harmony default export */ var utils_getCookie = (getCookie);
// CONCATENATED MODULE: ./models/UserStore/index.js


function UserStore__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var UserStore_defaultState = {
  userRole: '',
  isLoggedIn: false,
  uuid: '',
  isAdminOwner: false
};
var userRoles = [external__mobx_state_tree_["types"].literal('super-admin'), external__mobx_state_tree_["types"].literal('admin'), external__mobx_state_tree_["types"].literal('agent'), external__mobx_state_tree_["types"].literal('customer'), external__mobx_state_tree_["types"].literal('')];
var UserStore = external__mobx_state_tree_["types"].model('User', {
  userRole: external__mobx_state_tree_["types"].union.apply(external__mobx_state_tree_["types"], userRoles),
  isLoggedIn: external__mobx_state_tree_["types"].boolean,
  uuid: external__mobx_state_tree_["types"].string,
  serverJWTData: external__mobx_state_tree_["types"].optional(external__mobx_state_tree_["types"].frozen, null),
  isAdminOwner: external__mobx_state_tree_["types"].boolean
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
      var _afterCreate = UserStore__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var JWTData, encodedJWTData;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(external__is_browser__default.a && !self.isLoggedIn)) {
                  _context.next = 8;
                  break;
                }

                encodedJWTData = utils_getCookie('jwtData');

                if (encodedJWTData) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                try {
                  JWTData = JWTPaylodeDecode(encodedJWTData);
                } catch (err) {
                  console.log(err);
                }

                self.setUser(JWTData);
                _context.next = 12;
                break;

              case 8:
                if (external__is_browser__default.a) {
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
var UserStore_Store = external__mobx_state_tree_["types"].compose('Store', UserStore, userEffects);

function createStore(cookieJWTData) {
  if (!external__is_browser__default.a && cookieJWTData) {
    UserStore_defaultState.serverJWTData = JWTPaylodeDecode(cookieJWTData);
  }

  return UserStore_Store.create(UserStore_defaultState);
}

/* harmony default export */ var models_UserStore = (createStore);
// CONCATENATED MODULE: ./models/index.js
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;


var emittedStore;

function models_createStore() {
  var cookieJWTData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    UIStore: UIStore,
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: models_UserStore(cookieJWTData)
  };
}

function initStore(isServer) {
  var cookieJWTData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    emittedStore = models_createStore(cookieJWTData);
    return emittedStore;
  }

  if (!emittedStore) {
    emittedStore = models_createStore(cookieJWTData);
  }

  return emittedStore;
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "chance"
var external__chance_ = __webpack_require__(63);
var external__chance__default = /*#__PURE__*/__webpack_require__.n(external__chance_);

// EXTERNAL MODULE: ./frontEndComponents/FrontEndLayout/index.js + 7 modules
var FrontEndLayout = __webpack_require__(92);

// EXTERNAL MODULE: ./models/index.js + 8 modules
var models = __webpack_require__(22);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "material-ui/Grid"
var Grid_ = __webpack_require__(32);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__(192);
var KeyboardArrowDown__default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);

// EXTERNAL MODULE: external "react-select"
var external__react_select_ = __webpack_require__(193);
var external__react_select__default = /*#__PURE__*/__webpack_require__.n(external__react_select_);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(10);
var external__polished__default = /*#__PURE__*/__webpack_require__.n(external__polished_);

// CONCATENATED MODULE: ./frontEndComponents/MainListingFilters/index.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      height: '56px',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: 'rgba(0,0,0,.8)',
      backgroundColor: '#fff'
    },
    expandArrowWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '15px'
    },
    expandArrow: {
      fontSize: '1.1rem'
    },
    selectWrapper: {
      marginRight: '20px'
    }
  };
};

var listingTypes = [{
  value: 'residentialRentals',
  label: 'Residential Rentals'
}, {
  value: 'residentialSales',
  label: 'Residential Sales'
}, {
  value: 'commercialRentals',
  label: 'Commercial Rentals'
}, {
  value: 'commercialSales',
  label: 'Commercial Sales'
}];
var regions = [{
  value: 'newYork',
  label: 'New York'
}];
var areas = [{
  value: 'manhattan',
  label: 'Manhattan'
}];
var selectStyles = {
  container: function container(base, state) {
    return _objectSpread({}, base, {
      width: '200px',
      cursor: 'pointer',
      minHeight: '30px !important',
      height: '30px !important'
    });
  },
  control: function control(base, state) {
    return _objectSpread({}, base, {
      cursor: 'pointer',
      minHeight: '30px !important',
      height: '30px !important',
      backgroundColor: 'inherit'
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    return _objectSpread({}, styles, {
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      borderRadius: '4px'
    });
  }
};
var MainListingFilters_FineGrainListingsFilters = (_dec = Object(styles_["withStyles"])(styles), Object(external__mobx_react_["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(FineGrainListingsFilters, _Component);

  function FineGrainListingsFilters() {
    _classCallCheck(this, FineGrainListingsFilters);

    return _possibleConstructorReturn(this, (FineGrainListingsFilters.__proto__ || Object.getPrototypeOf(FineGrainListingsFilters)).apply(this, arguments));
  }

  _createClass(FineGrainListingsFilters, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          setListingType = _props.setListingType,
          setRegion = _props.setRegion,
          setArea = _props.setArea;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.selectWrapper
      }, external__react__default.a.createElement(external__react_select__default.a, {
        styles: selectStyles,
        options: listingTypes,
        placeholder: "Select a listing type...",
        blurInputOnSelect: true,
        isSearchable: false,
        onInputChange: setListingType
      })), external__react__default.a.createElement("div", {
        className: classes.selectWrapper
      }, external__react__default.a.createElement(external__react_select__default.a, {
        styles: selectStyles,
        options: regions,
        defaultValue: [regions[0]],
        placeholder: "Select a region...",
        blurInputOnSelect: true,
        onInputChange: setRegion
      })), external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_select__default.a, {
        styles: selectStyles,
        options: areas,
        placeholder: "Select an area...",
        blurInputOnSelect: true,
        isClearable: true,
        onInputChange: setArea
      })));
    }
  }]);

  return FineGrainListingsFilters;
}(external__react_["Component"])) || _class) || _class);
/* harmony default export */ var MainListingFilters = (MainListingFilters_FineGrainListingsFilters);
// CONCATENATED MODULE: ./frontEndComponents/FineGrainListingsFilters/index.js
var FineGrainListingsFilters__dec, FineGrainListingsFilters__class;

function FineGrainListingsFilters__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FineGrainListingsFilters__typeof = function _typeof(obj) { return typeof obj; }; } else { FineGrainListingsFilters__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FineGrainListingsFilters__typeof(obj); }

function FineGrainListingsFilters__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FineGrainListingsFilters__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FineGrainListingsFilters__createClass(Constructor, protoProps, staticProps) { if (protoProps) FineGrainListingsFilters__defineProperties(Constructor.prototype, protoProps); if (staticProps) FineGrainListingsFilters__defineProperties(Constructor, staticProps); return Constructor; }

function FineGrainListingsFilters__possibleConstructorReturn(self, call) { if (call && (FineGrainListingsFilters__typeof(call) === "object" || typeof call === "function")) { return call; } return FineGrainListingsFilters__assertThisInitialized(self); }

function FineGrainListingsFilters__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FineGrainListingsFilters__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FineGrainListingsFilters_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      height: '46px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      minWidth: '540px',
      backgroundColor: '#fff'
    },
    filterItem: {
      display: 'flex',
      height: '100%',
      paddingLeft: '15px',
      paddingRight: '15px',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: 'rgba(0,0,0,.7)',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
      transition: 'color .2s ease-in-out',
      '&:hover': {
        color: 'rgba(0,0,0,.9)',
        '& span svg': {
          backgroundColor: 'rgba(0,0,0,.6)'
        }
      }
    },
    expandArrowWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '15px',
      overflow: 'visible'
    },
    expandArrow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20px',
      width: '20px',
      fontSize: '1.1rem',
      backgroundColor: 'rgba(0,0,0,.4)',
      color: '#fff',
      borderRadius: '50%',
      padding: '2px',
      paddingTop: '4px',
      overflow: 'visible',
      transition: 'background-color .2s ease-in-out'
    },
    mainFilters: {
      marginRight: 'auto',
      paddingLeft: '15px'
    }
  };
};

var FineGrainListingsFilters_FineGrainListingsFilters = (FineGrainListingsFilters__dec = Object(styles_["withStyles"])(FineGrainListingsFilters_styles), Object(external__mobx_react_["observer"])(FineGrainListingsFilters__class = FineGrainListingsFilters__dec(FineGrainListingsFilters__class =
/*#__PURE__*/
function (_Component) {
  FineGrainListingsFilters__inherits(FineGrainListingsFilters, _Component);

  function FineGrainListingsFilters(props) {
    var _this;

    FineGrainListingsFilters__classCallCheck(this, FineGrainListingsFilters);

    _this = FineGrainListingsFilters__possibleConstructorReturn(this, (FineGrainListingsFilters.__proto__ || Object.getPrototypeOf(FineGrainListingsFilters)).call(this, props));
    _this.state = {
      currentOpenFilter: ''
    };
    return _this;
  }

  FineGrainListingsFilters__createClass(FineGrainListingsFilters, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onFilterClick = _props.onFilterClick;
      var currentOpenFilter = this.state.currentOpenFilter;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.mainFilters
      }, external__react__default.a.createElement(MainListingFilters, null)), external__react__default.a.createElement("button", {
        className: classes.filterItem,
        id: "neighborhood",
        onClick: onFilterClick
      }, "Neighborhood", external__react__default.a.createElement("span", {
        className: classes.expandArrowWrapper
      }, external__react__default.a.createElement(KeyboardArrowDown__default.a, {
        color: "inherit",
        classes: {
          root: classes.expandArrow
        }
      }))), external__react__default.a.createElement("button", {
        className: classes.filterItem,
        id: "price",
        onClick: onFilterClick
      }, "Price", external__react__default.a.createElement("span", {
        className: classes.expandArrowWrapper
      }, external__react__default.a.createElement(KeyboardArrowDown__default.a, {
        color: "inherit",
        classes: {
          root: classes.expandArrow
        }
      }))), external__react__default.a.createElement("button", {
        className: classes.filterItem,
        id: "beds",
        onClick: onFilterClick
      }, "Beds", external__react__default.a.createElement("span", {
        className: classes.expandArrowWrapper
      }, external__react__default.a.createElement(KeyboardArrowDown__default.a, {
        color: "inherit",
        classes: {
          root: classes.expandArrow
        }
      }))), external__react__default.a.createElement("button", {
        className: classes.filterItem,
        id: "baths",
        onClick: onFilterClick
      }, "Baths", external__react__default.a.createElement("span", {
        className: classes.expandArrowWrapper
      }, external__react__default.a.createElement(KeyboardArrowDown__default.a, {
        color: "inherit",
        classes: {
          root: classes.expandArrow
        }
      }))), external__react__default.a.createElement("button", {
        className: classes.filterItem,
        id: "filters",
        onClick: onFilterClick
      }, "Filters", external__react__default.a.createElement("span", {
        className: classes.expandArrowWrapper
      }, external__react__default.a.createElement(KeyboardArrowDown__default.a, {
        color: "inherit",
        classes: {
          root: classes.expandArrow
        }
      }))));
    }
  }]);

  return FineGrainListingsFilters;
}(external__react_["Component"])) || FineGrainListingsFilters__class) || FineGrainListingsFilters__class);
/* harmony default export */ var frontEndComponents_FineGrainListingsFilters = (FineGrainListingsFilters_FineGrainListingsFilters);
// CONCATENATED MODULE: ./frontEndComponents/ListingsFilterAndSearchSection/index.js
var ListingsFilterAndSearchSection__dec, ListingsFilterAndSearchSection__class;

function ListingsFilterAndSearchSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListingsFilterAndSearchSection__typeof = function _typeof(obj) { return typeof obj; }; } else { ListingsFilterAndSearchSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListingsFilterAndSearchSection__typeof(obj); }

function ListingsFilterAndSearchSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListingsFilterAndSearchSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListingsFilterAndSearchSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) ListingsFilterAndSearchSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) ListingsFilterAndSearchSection__defineProperties(Constructor, staticProps); return Constructor; }

function ListingsFilterAndSearchSection__possibleConstructorReturn(self, call) { if (call && (ListingsFilterAndSearchSection__typeof(call) === "object" || typeof call === "function")) { return call; } return ListingsFilterAndSearchSection__assertThisInitialized(self); }

function ListingsFilterAndSearchSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ListingsFilterAndSearchSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // import ListingsSearchBar from '../ListingsSearchBar';




var ListingsFilterAndSearchSection_styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      backgroundColor: '#fff'
    },
    topRow: {
      display: 'flex'
    }
  };
};

var ListingsFilterAndSearchSection_ListingsFilterAndSearchSection = (ListingsFilterAndSearchSection__dec = Object(styles_["withStyles"])(ListingsFilterAndSearchSection_styles), Object(external__mobx_react_["observer"])(ListingsFilterAndSearchSection__class = ListingsFilterAndSearchSection__dec(ListingsFilterAndSearchSection__class =
/*#__PURE__*/
function (_Component) {
  ListingsFilterAndSearchSection__inherits(ListingsFilterAndSearchSection, _Component);

  function ListingsFilterAndSearchSection() {
    ListingsFilterAndSearchSection__classCallCheck(this, ListingsFilterAndSearchSection);

    return ListingsFilterAndSearchSection__possibleConstructorReturn(this, (ListingsFilterAndSearchSection.__proto__ || Object.getPrototypeOf(ListingsFilterAndSearchSection)).apply(this, arguments));
  }

  ListingsFilterAndSearchSection__createClass(ListingsFilterAndSearchSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onSearchInputChange = _props.onSearchInputChange,
          getInput = _props.getInput,
          value = _props.value,
          onSearchKeyDown = _props.onSearchKeyDown,
          onSearchKeyUp = _props.onSearchKeyUp;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(frontEndComponents_FineGrainListingsFilters, null));
    }
  }]);

  return ListingsFilterAndSearchSection;
}(external__react_["Component"])) || ListingsFilterAndSearchSection__class) || ListingsFilterAndSearchSection__class);
/* harmony default export */ var frontEndComponents_ListingsFilterAndSearchSection = (ListingsFilterAndSearchSection_ListingsFilterAndSearchSection);
// CONCATENATED MODULE: ./frontEndContainers/ListingsFilterAndSearchSection.js
var frontEndContainers_ListingsFilterAndSearchSection__class;

function frontEndContainers_ListingsFilterAndSearchSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_ListingsFilterAndSearchSection__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_ListingsFilterAndSearchSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_ListingsFilterAndSearchSection__typeof(obj); }

function frontEndContainers_ListingsFilterAndSearchSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_ListingsFilterAndSearchSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_ListingsFilterAndSearchSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_ListingsFilterAndSearchSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_ListingsFilterAndSearchSection__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_ListingsFilterAndSearchSection__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_ListingsFilterAndSearchSection__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(self); }

function frontEndContainers_ListingsFilterAndSearchSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ListingsFilterAndSearchSection_ListingsFilterAndSearchSectionContainer = Object(external__mobx_react_["observer"])(frontEndContainers_ListingsFilterAndSearchSection__class =
/*#__PURE__*/
function (_Component) {
  frontEndContainers_ListingsFilterAndSearchSection__inherits(ListingsFilterAndSearchSectionContainer, _Component);

  function ListingsFilterAndSearchSectionContainer(props) {
    var _this;

    frontEndContainers_ListingsFilterAndSearchSection__classCallCheck(this, ListingsFilterAndSearchSectionContainer);

    _this = frontEndContainers_ListingsFilterAndSearchSection__possibleConstructorReturn(this, (ListingsFilterAndSearchSectionContainer.__proto__ || Object.getPrototypeOf(ListingsFilterAndSearchSectionContainer)).call(this, props));
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var onSubmit = _this.props.onSubmit;

        var value = _this.state.value.trim();

        if (event.preventDefault) event.preventDefault();
        if (!value) return;
        if (onSubmit) onSubmit(value);
      }
    });
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "onSearchInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var value = event.target.value;
        console.log(value);

        _this.setState({
          value: value
        });
      }
    });
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "onSearchKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var key = event.key || event.keyCode;
        if (!_this.isFreshReturnKeyPress) return;

        if (key === 'Enter' || key === 13) {
          _this.onSubmit(event);

          _this.isFreshReturnKeyPress = false;
        }
      }
    });
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "onSearchKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.isFreshReturnKeyPress === false) {
          _this.isFreshReturnKeyPress = true;
        }
      }
    });
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "getInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(input) {
        _this._input = input;
      }
    });
    Object.defineProperty(frontEndContainers_ListingsFilterAndSearchSection__assertThisInitialized(_this), "clearInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this._input.value = '';
      }
    });
    _this.isFreshReturnKeyPress = true;
    _this.state = {
      value: ''
    };
    return _this;
  }

  frontEndContainers_ListingsFilterAndSearchSection__createClass(ListingsFilterAndSearchSectionContainer, [{
    key: "render",
    value: function render() {
      var onSearchInputChange = this.onSearchInputChange,
          getInput = this.getInput,
          onSearchKeyDown = this.onSearchKeyDown,
          onSearchKeyUp = this.onSearchKeyUp;
      var value = this.state.value;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(frontEndComponents_ListingsFilterAndSearchSection, {
        value: value,
        onSearchInputChange: onSearchInputChange,
        getInput: getInput,
        onSearchKeyDown: onSearchKeyDown,
        onSearchKeyUp: onSearchKeyUp
      }));
    }
  }]);

  return ListingsFilterAndSearchSectionContainer;
}(external__react_["Component"])) || frontEndContainers_ListingsFilterAndSearchSection__class;

/* harmony default export */ var frontEndContainers_ListingsFilterAndSearchSection = (ListingsFilterAndSearchSection_ListingsFilterAndSearchSectionContainer);
// EXTERNAL MODULE: ./frontEndComponents/ListingCard/index.js
var ListingCard = __webpack_require__(142);

// CONCATENATED MODULE: ./frontEndComponents/ListingsSection/index.js
var ListingsSection__dec, ListingsSection__class;

function ListingsSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListingsSection__typeof = function _typeof(obj) { return typeof obj; }; } else { ListingsSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListingsSection__typeof(obj); }

function ListingsSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListingsSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListingsSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) ListingsSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) ListingsSection__defineProperties(Constructor, staticProps); return Constructor; }

function ListingsSection__possibleConstructorReturn(self, call) { if (call && (ListingsSection__typeof(call) === "object" || typeof call === "function")) { return call; } return ListingsSection__assertThisInitialized(self); }

function ListingsSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListingsSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ListingsSection__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ListingsSection__defineProperty(target, key, source[key]); }); } return target; }

function ListingsSection__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }








var chance = new external__chance__default.a();

var ListingsSection_styles = function styles(theme) {
  return {
    root: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      color: 'rgba(0,0,0,.7)'
    },
    lisingsOptions: {
      display: 'flex',
      paddingLeft: '15px',
      paddingRight: '15px',
      justifyContent: 'center',
      alignItems: 'center',
      height: '48px',
      width: '100%',
      fontSize: '0.9rem',
      backgroundColor: 'rgb(244, 245, 249)'
    },
    listingsWrapper: {
      padding: '20px',
      paddingBottom: '0',
      height: 'calc(100% - 48px)',
      overflow: 'auto'
    }
  };
};

var ListingsSection_containerComponent = function containerComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return external__react__default.a.createElement("div", _extends({
    style: {
      height: '100%',
      overflow: 'auto'
    }
  }, props), children);
};

var ListingsSection_selectStyles = {
  container: function container(base, state) {
    return ListingsSection__objectSpread({}, base, {
      width: '200px',
      cursor: 'pointer',
      minHeight: '30px !important',
      height: '30px !important'
    });
  },
  control: function control(base, state) {
    return ListingsSection__objectSpread({}, base, {
      cursor: 'pointer',
      minHeight: '30px !important',
      height: '30px !important',
      backgroundColor: '#fff'
    });
  },
  option: function option(styles, _ref2) {
    var data = _ref2.data,
        isDisabled = _ref2.isDisabled,
        isFocused = _ref2.isFocused,
        isSelected = _ref2.isSelected;
    return ListingsSection__objectSpread({}, styles, {
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      borderRadius: '4px'
    });
  }
};
var sortingTypes = [{
  value: 'defaultSort',
  label: 'Default Sort'
}, {
  value: 'priceLowToHigh',
  label: 'Price - Low to High'
}, {
  value: 'priceHighToLow',
  label: 'Price - High to How'
}, {
  value: 'listedDate',
  label: 'Listed Date- Most Recent'
}, {
  value: 'neighborhood',
  label: 'Neighborhood - A to Z'
}, {
  value: 'address',
  label: 'Address - A to Z'
}];
var ListingsSection_ListingsSection = (ListingsSection__dec = Object(styles_["withStyles"])(ListingsSection_styles), Object(external__mobx_react_["observer"])(ListingsSection__class = ListingsSection__dec(ListingsSection__class =
/*#__PURE__*/
function (_Component) {
  ListingsSection__inherits(ListingsSection, _Component);

  function ListingsSection() {
    var _ref3;

    var _temp, _this;

    ListingsSection__classCallCheck(this, ListingsSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ListingsSection__possibleConstructorReturn(_this, (_temp = _this = ListingsSection__possibleConstructorReturn(this, (_ref3 = ListingsSection.__proto__ || Object.getPrototypeOf(ListingsSection)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(ListingsSection__assertThisInitialized(_this), "renderListings", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(listingItems) {
        return listingItems.map(function (listingItem) {
          var featuredPhotoURL = listingItem.featuredPhotoURL,
              otherPhotoURLs = listingItem.otherPhotoURLs,
              address = listingItem.address,
              neighborhood = listingItem.neighborhood,
              price = listingItem.price,
              beds = listingItem.beds,
              baths = listingItem.baths,
              isLiked = listingItem.isLiked,
              isNoFee = listingItem.isNoFee,
              monthsOfFreeRent = listingItem.monthsOfFreeRent,
              sqFootage = listingItem.sqFootage,
              type = listingItem.type,
              id = listingItem.id;
          return external__react__default.a.createElement(Grid__default.a, {
            key: id,
            item: true,
            xs: 12,
            md: 6
          }, external__react__default.a.createElement(ListingCard["a" /* default */], {
            featuredPhotoURL: featuredPhotoURL,
            otherPhotoURLs: otherPhotoURLs,
            address: address,
            neighborhood: neighborhood,
            price: price,
            beds: beds,
            baths: baths,
            isLiked: isLiked,
            isNoFee: isNoFee,
            monthsOfFreeRent: monthsOfFreeRent,
            sqFootage: sqFootage,
            type: type,
            id: id
          }));
        });
      }
    }), _temp));
  }

  ListingsSection__createClass(ListingsSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listings = _props.listings,
          setSortingType = _props.setSortingType;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.lisingsOptions
      }, external__react__default.a.createElement(external__react_select__default.a, {
        defaultValue: sortingTypes[0],
        styles: ListingsSection_selectStyles,
        options: sortingTypes,
        placeholder: "Sort...",
        blurInputOnSelect: true,
        isSearchable: false,
        onInputChange: setSortingType
      })), external__react__default.a.createElement("div", {
        className: classes.listingsWrapper
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 24,
        component: ListingsSection_containerComponent
      }, listings && this.renderListings(listings))));
    }
  }]);

  return ListingsSection;
}(external__react_["Component"])) || ListingsSection__class) || ListingsSection__class);
/* harmony default export */ var frontEndComponents_ListingsSection = (ListingsSection_ListingsSection);
// EXTERNAL MODULE: external "react-spinners"
var external__react_spinners_ = __webpack_require__(23);
var external__react_spinners__default = /*#__PURE__*/__webpack_require__.n(external__react_spinners_);

// EXTERNAL MODULE: external "react-google-maps"
var external__react_google_maps_ = __webpack_require__(156);
var external__react_google_maps__default = /*#__PURE__*/__webpack_require__.n(external__react_google_maps_);

// EXTERNAL MODULE: ./frontEndComponents/CustomMapMarker/index.js
var CustomMapMarker = __webpack_require__(182);

// CONCATENATED MODULE: ./frontEndComponents/ListingsMap/index.js
var ListingsMap__dec, ListingsMap__class;

function ListingsMap__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListingsMap__typeof = function _typeof(obj) { return typeof obj; }; } else { ListingsMap__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListingsMap__typeof(obj); }

function ListingsMap__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListingsMap__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListingsMap__createClass(Constructor, protoProps, staticProps) { if (protoProps) ListingsMap__defineProperties(Constructor.prototype, protoProps); if (staticProps) ListingsMap__defineProperties(Constructor, staticProps); return Constructor; }

function ListingsMap__possibleConstructorReturn(self, call) { if (call && (ListingsMap__typeof(call) === "object" || typeof call === "function")) { return call; } return ListingsMap__assertThisInitialized(self); }

function ListingsMap__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListingsMap__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ListingsMap_styles = function styles(theme) {
  return {
    root: {}
  };
};

var ListingsMap_ListingsMap = (ListingsMap__dec = Object(styles_["withStyles"])(ListingsMap_styles), Object(external__mobx_react_["observer"])(ListingsMap__class = ListingsMap__dec(ListingsMap__class = Object(external__react_google_maps_["withScriptjs"])(ListingsMap__class = Object(external__react_google_maps_["withGoogleMap"])(ListingsMap__class =
/*#__PURE__*/
function (_Component) {
  ListingsMap__inherits(ListingsMap, _Component);

  function ListingsMap() {
    var _ref;

    var _temp, _this;

    ListingsMap__classCallCheck(this, ListingsMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ListingsMap__possibleConstructorReturn(_this, (_temp = _this = ListingsMap__possibleConstructorReturn(this, (_ref = ListingsMap.__proto__ || Object.getPrototypeOf(ListingsMap)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ListingsMap__assertThisInitialized(_this), "renderMapMarkers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(listingItems) {
        return listingItems.map(function (listingItem) {
          var longitude = listingItem.longitude,
              latitude = listingItem.latitude,
              listingID = listingItem.listingID;
          return external__react__default.a.createElement(CustomMapMarker["a" /* default */], {
            longitude: longitude,
            latitude: latitude,
            listingID: listingID
          });
        });
      }
    }), _temp));
  }

  ListingsMap__createClass(ListingsMap, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listings = _props.listings;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(external__react_google_maps_["GoogleMap"], {
        defaultZoom: 8,
        defaultCenter: {
          lat: -34.397,
          lng: 150.644
        }
      }, external__react__default.a.createElement(external__react_google_maps_["Marker"], {
        position: {
          lat: -34.397,
          lng: 150.644
        }
      }), listings && this.renderMapMarkers(listings)));
    }
  }]);

  return ListingsMap;
}(external__react_["Component"])) || ListingsMap__class) || ListingsMap__class) || ListingsMap__class) || ListingsMap__class);
/* harmony default export */ var frontEndComponents_ListingsMap = (ListingsMap_ListingsMap);
// CONCATENATED MODULE: ./frontEndContainers/ListingsMap.js
var frontEndContainers_ListingsMap__class;

function frontEndContainers_ListingsMap__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { frontEndContainers_ListingsMap__typeof = function _typeof(obj) { return typeof obj; }; } else { frontEndContainers_ListingsMap__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return frontEndContainers_ListingsMap__typeof(obj); }

function frontEndContainers_ListingsMap__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function frontEndContainers_ListingsMap__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function frontEndContainers_ListingsMap__createClass(Constructor, protoProps, staticProps) { if (protoProps) frontEndContainers_ListingsMap__defineProperties(Constructor.prototype, protoProps); if (staticProps) frontEndContainers_ListingsMap__defineProperties(Constructor, staticProps); return Constructor; }

function frontEndContainers_ListingsMap__possibleConstructorReturn(self, call) { if (call && (frontEndContainers_ListingsMap__typeof(call) === "object" || typeof call === "function")) { return call; } return frontEndContainers_ListingsMap__assertThisInitialized(self); }

function frontEndContainers_ListingsMap__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function frontEndContainers_ListingsMap__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Loader = external__react_spinners_["BounceLoader"];
var GOOGLE_MAPS_API_KEY = 'AIzaSyALC0RdIvbBvmFCj8P5IBClasErYh0QqdQ';

var ListingsMap_ListingsMapContainer = Object(external__mobx_react_["observer"])(frontEndContainers_ListingsMap__class =
/*#__PURE__*/
function (_Component) {
  frontEndContainers_ListingsMap__inherits(ListingsMapContainer, _Component);

  function ListingsMapContainer() {
    frontEndContainers_ListingsMap__classCallCheck(this, ListingsMapContainer);

    return frontEndContainers_ListingsMap__possibleConstructorReturn(this, (ListingsMapContainer.__proto__ || Object.getPrototypeOf(ListingsMapContainer)).apply(this, arguments));
  }

  frontEndContainers_ListingsMap__createClass(ListingsMapContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(frontEndComponents_ListingsMap, {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(GOOGLE_MAPS_API_KEY, "&v=3.exp&libraries=geometry,drawing,places"),
        loadingElement: external__react__default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }
        }, external__react__default.a.createElement(Loader, {
          color: "#f44336",
          loading: true
        })),
        containerElement: external__react__default.a.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        mapElement: external__react__default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      });
    }
  }]);

  return ListingsMapContainer;
}(external__react_["Component"])) || frontEndContainers_ListingsMap__class;

/* harmony default export */ var frontEndContainers_ListingsMap = (ListingsMap_ListingsMapContainer);
// CONCATENATED MODULE: ./frontEndComponents/MapAndListingsSection/index.js
var MapAndListingsSection__dec, MapAndListingsSection__class;

function MapAndListingsSection__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MapAndListingsSection__typeof = function _typeof(obj) { return typeof obj; }; } else { MapAndListingsSection__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MapAndListingsSection__typeof(obj); }

function MapAndListingsSection__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MapAndListingsSection__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MapAndListingsSection__createClass(Constructor, protoProps, staticProps) { if (protoProps) MapAndListingsSection__defineProperties(Constructor.prototype, protoProps); if (staticProps) MapAndListingsSection__defineProperties(Constructor, staticProps); return Constructor; }

function MapAndListingsSection__possibleConstructorReturn(self, call) { if (call && (MapAndListingsSection__typeof(call) === "object" || typeof call === "function")) { return call; } return MapAndListingsSection__assertThisInitialized(self); }

function MapAndListingsSection__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MapAndListingsSection__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MapAndListingsSection__extends() { MapAndListingsSection__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MapAndListingsSection__extends.apply(this, arguments); }

function MapAndListingsSection__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }








var MapAndListingsSection_styles = function styles(theme) {
  return {
    root: {
      height: 'calc(100vh - 106px)',
      fontFamily: theme.frontEnd.typography.fontFamily.sansSerif,
      backgroundColor: '#fff'
    },
    container: {
      height: '100%'
    }
  };
};

var MapAndListingsSection_containerComponent = function containerComponent(_ref) {
  var children = _ref.children,
      props = MapAndListingsSection__objectWithoutProperties(_ref, ["children"]);

  return external__react__default.a.createElement("div", MapAndListingsSection__extends({
    style: {
      height: '100%'
    }
  }, props), children);
};

var MapAndListingsSection_MapAndListingsSection = (MapAndListingsSection__dec = Object(styles_["withStyles"])(MapAndListingsSection_styles), Object(external__mobx_react_["observer"])(MapAndListingsSection__class = MapAndListingsSection__dec(MapAndListingsSection__class =
/*#__PURE__*/
function (_Component) {
  MapAndListingsSection__inherits(MapAndListingsSection, _Component);

  function MapAndListingsSection() {
    MapAndListingsSection__classCallCheck(this, MapAndListingsSection);

    return MapAndListingsSection__possibleConstructorReturn(this, (MapAndListingsSection.__proto__ || Object.getPrototypeOf(MapAndListingsSection)).apply(this, arguments));
  }

  MapAndListingsSection__createClass(MapAndListingsSection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          listings = _props.listings;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        component: MapAndListingsSection_containerComponent
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, external__react__default.a.createElement(frontEndComponents_ListingsSection, {
        listings: listings
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        sm: 6
      }, external__react__default.a.createElement(frontEndContainers_ListingsMap, {
        listings: listings
      }))));
    }
  }]);

  return MapAndListingsSection;
}(external__react_["Component"])) || MapAndListingsSection__class) || MapAndListingsSection__class);
/* harmony default export */ var frontEndComponents_MapAndListingsSection = (MapAndListingsSection_MapAndListingsSection);
// EXTERNAL MODULE: ./lib/withData.js + 2 modules
var withData = __webpack_require__(49);

// CONCATENATED MODULE: ./pages/listings.js
var listings__class;

function listings__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { listings__typeof = function _typeof(obj) { return typeof obj; }; } else { listings__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return listings__typeof(obj); }

function listings__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function listings__possibleConstructorReturn(self, call) { if (call && (listings__typeof(call) === "object" || typeof call === "function")) { return call; } return listings__assertThisInitialized(self); }

function listings__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function listings__createClass(Constructor, protoProps, staticProps) { if (protoProps) listings__defineProperties(Constructor.prototype, protoProps); if (staticProps) listings__defineProperties(Constructor, staticProps); return Constructor; }

function listings__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function listings__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var listings_chance = new external__chance__default.a();
var listings_listings = [{
  featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })),
  otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  }))],
  address: '225 West 60th Street, Manhattan NY, 10023',
  neighborhood: 'Jackson Heights',
  price: 2000,
  beds: 3,
  baths: 2,
  isLiked: false,
  isNoFee: false,
  monthsOfFreeRent: 0,
  sqFootage: 6339,
  type: 'Residential Rental',
  id: 'jxj595h9f5i5fj'
}, {
  featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })),
  otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  }))],
  address: '452 West 60th Street, Manhattan NY, 10023',
  neighborhood: 'Jackson Heights',
  price: 1400,
  beds: 2,
  baths: 2,
  isLiked: true,
  isNoFee: true,
  monthsOfFreeRent: 1,
  sqFootage: 5225,
  type: 'Residential Rental',
  id: 'o3j9dn9un3nj3'
}, {
  featuredPhotoURL: "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })),
  otherPhotoURLs: ["http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  })), "http://picsum.photos/314/234/?random?".concat(listings_chance.integer({
    min: 1,
    max: 1000
  }))],
  address: '893 West 60th Street, Manhattan NY, 10023',
  neighborhood: 'SoHo',
  price: 3700,
  beds: 3,
  baths: 3,
  isLiked: false,
  isNoFee: false,
  monthsOfFreeRent: 2,
  sqFootage: 5225,
  type: 'Residential Rental',
  id: 'cinoervtoi4in'
}];

var listings_Listings = Object(external__mobx_react_["observer"])(listings__class =
/*#__PURE__*/
function (_React$Component) {
  listings__inherits(Listings, _React$Component);

  listings__createClass(Listings, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;
      var isServer = !!req;
      return {
        cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
        isServer: isServer
      };
    }
  }]);

  function Listings(props) {
    var _this;

    listings__classCallCheck(this, Listings);

    _this = listings__possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this, props));
    Object.defineProperty(listings__assertThisInitialized(_this), "onSubmitSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        console.log(_value);
      }
    });
    _this.store = Object(models["a" /* initStore */])(props.isServer, props.cookieJWTData); // for debugging only!!!

    if (external__is_browser__default.a && !window._appStore) window._appStore = _this.store;
    return _this;
  }

  listings__createClass(Listings, [{
    key: "render",
    value: function render() {
      var onSubmitSearch = this.onSubmitSearch;
      return external__react__default.a.createElement(FrontEndLayout["a" /* default */], {
        UserStore: this.store.UserStore,
        headerBoxShadowOff: true
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(frontEndContainers_ListingsFilterAndSearchSection, {
        onSubmit: onSubmitSearch
      }), external__react__default.a.createElement(frontEndComponents_MapAndListingsSection, {
        listings: listings_listings
      })));
    }
  }]);

  return Listings;
}(external__react__default.a.Component)) || listings__class;

/* harmony default export */ var pages_listings = __webpack_exports__["default"] = (Object(withData["a" /* default */])(listings_Listings));

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(10);
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_red__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polished__ = __webpack_require__(10);
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

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(46)();

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

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__(37);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
          sheetsManager: this.pageContext.sheetsManager
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default.a, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, this.props));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globalStyles = "\n  html {\n    height: 100%;\n  }\n  body {\n    overflow: hidden;\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: #fafafa;\n  }\n  body > :first-child {\n    display: flex;\n    min-width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n  }\n  body > :first-child > #__next {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div {\n    display: flex;\n    min-width: 100%;\n  }\n  body > :first-child > #__next > div > div {\n    display: flex;\n    min-width: 100%;\n  }\n  .react-grid-HeaderCell {\n    font-weight: 500 !important;\n  }\n  .pull-right {\n    float: right;\n  }\n  .react-grid-Toolbar {\n    padding: 7px 14px !important;\n  }\n  .tools {\n    margin-top: 0 !important;\n  }\n  .customRow .react-grid-Cell {\n    background-color: initial !important;\n  }\n  .react-grid-Cell {\n    border-right: none !important;\n  }\n  .react-grid-Cell__value > div > span > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .oddRow .react-grid-Cell {\n    background-color: #fff !important;\n  }\n  .evenRow .react-grid-Cell {\n    background-color: #ECEBFE !important;\n  }\n  .react-grid-HeaderCell .form-group input {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell input.form-control {\n    width: 100%;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n  }\n  .react-grid-HeaderCell .form-group {\n    height: 100%;\n  }\n  .react-grid-HeaderCell > div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .react-grid-HeaderCell > .Select {\n    overflow: initial;\n  }\n  #__next > div {\n    max-width: 100%;\n    width: 100%;\n  }\n  thead[class^=\"MuiTableHead\"] > tr th:hover div[class^=\"TableHeaderCell-resizeHandleLine\"] {\n    background-color: #64b5f6;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] {\n    display: flex\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div[class^=\"TableHeaderCell-content\"] {\n    order: 2;\n  }\n  .deal-table-wrapper div[class^=\"TableHeaderCell-container\"] > div:not([class^=\"TableHeaderCell-content\"]) {\n    margin-right: 5px;\n  }\n";
/* harmony default export */ __webpack_exports__["a"] = (globalStyles);

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("urlsafe-base64");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(18);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(19);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(16);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "apollo-client"
var external__apollo_client_ = __webpack_require__(50);
var external__apollo_client__default = /*#__PURE__*/__webpack_require__.n(external__apollo_client_);

// EXTERNAL MODULE: external "apollo-link-http"
var external__apollo_link_http_ = __webpack_require__(51);
var external__apollo_link_http__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_http_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external__apollo_cache_inmemory_ = __webpack_require__(52);
var external__apollo_cache_inmemory__default = /*#__PURE__*/__webpack_require__.n(external__apollo_cache_inmemory_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(53);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./constants/websiteURL.js
var websiteURL = 'https://reyeselsamad.com/api/graphql';
/* harmony default export */ var constants_websiteURL = (websiteURL);
// CONCATENATED MODULE: ./lib/initApollo.js





var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser || !global.fetch) {
  global.fetch = external__isomorphic_unfetch__default.a;
}

function create(initialState) {
  return new external__apollo_client_["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: new external__apollo_link_http_["HttpLink"]({
      uri: "".concat(constants_websiteURL),
      // 'http://localhost/api/graphql' Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      headers: {
        Accept: 'application/json'
      }
    }),
    cache: new external__apollo_cache_inmemory_["InMemoryCache"]().restore(initialState || {})
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
// CONCATENATED MODULE: ./lib/withData.js


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

/* harmony default export */ var withData = __webpack_exports__["a"] = (function (ComposedComponent) {
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
        regenerator__default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return regenerator__default.a.wrap(function _callee$(_context) {
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
                  apollo = initApollo();
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(external__react_apollo_["getDataFromTree"])(external__react__default.a.createElement(ComposedComponent, _extends({
                    ctx: ctx
                  }, composedInitialProps)), {
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
                    head__default.a.rewind();
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
      _this.apollo = initApollo(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return external__react__default.a.createElement(external__react_apollo_["ApolloProvider"], {
          client: this.apollo
        }, external__react__default.a.createElement(ComposedComponent, this.props));
      }
    }]);

    return WithData;
  }(external__react__default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(getComponentDisplayName(ComposedComponent), ")")
  }), _temp;
});

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var endpoint = '/api/graphql';
/* harmony default export */ __webpack_exports__["a"] = (endpoint);

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("chance");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(1);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(16);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(43);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(14);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "is-browser"
var external__is_browser_ = __webpack_require__(7);
var external__is_browser__default = /*#__PURE__*/__webpack_require__.n(external__is_browser_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(9);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./lib/withRoot.js
var withRoot = __webpack_require__(44);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "debounce"
var external__debounce_ = __webpack_require__(91);
var external__debounce__default = /*#__PURE__*/__webpack_require__.n(external__debounce_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "polished"
var external__polished_ = __webpack_require__(10);
var external__polished__default = /*#__PURE__*/__webpack_require__.n(external__polished_);

// EXTERNAL MODULE: ./themeStyles/index.js
var themeStyles = __webpack_require__(25);

// CONCATENATED MODULE: ./sharedStyledComponents/headerStyles.js



var HeaderWrapper = external__styled_components__default.a.header.withConfig({
  displayName: "headerStyles__HeaderWrapper",
  componentId: "bt7l82-0"
})(["box-sizing:border-box;position:fixed;display:flex;align-items:center;top:0;padding:15px 50px;font-weight:800;font-family:Helvetica Neue;letter-spacing:1px;z-index:999;height:60px;width:100%;justify-content:flex-end;font-size:14px;background-color:", ";box-shadow:", ";border-bottom:", ";"], themeStyles["a" /* default */].primaryColor, function (props) {
  return props.headerBoxShadowOff ? 'none' : '0px 2px 14px -1px rgba(0, 0, 0, 0.12)';
}, function (props) {
  return props.headerBoxShadowOff ? '1px solid rgba(255,255,255,.1)' : 'none';
});
var HeaderLink = external__styled_components__default.a.a.withConfig({
  displayName: "headerStyles__HeaderLink",
  componentId: "bt7l82-1"
})(["color:rgba(255,255,255,0.9);text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;&:hover{color:#fff;}&:not(:first-of-type){margin-left:20px;}"]);
var LeftHeaderLinkWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__LeftHeaderLinkWrapper",
  componentId: "bt7l82-2"
})(["display:flex;margin-left:auto;"]);
var MiddleHeaderLinkWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__MiddleHeaderLinkWrapper",
  componentId: "bt7l82-3"
})(["display:flex;"]);
var Logo = external__styled_components__default.a.div.withConfig({
  displayName: "headerStyles__Logo",
  componentId: "bt7l82-4"
})(["margin-right:auto;padding-top:5px;"]);
// CONCATENATED MODULE: ./frontEndComponents/HeaderNavLink/index.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var HeaderNavLink_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = external__react_["Children"].only(children);
  var active;

  if (router.pathname === props.href) {
    active = true;
  } else {
    active = false;
  }

  return external__react__default.a.createElement(routes["Link"], props, external__react__default.a.cloneElement(child, {
    active: active
  }));
};

/* harmony default export */ var HeaderNavLink = (Object(router_["withRouter"])(HeaderNavLink_ActiveLink));
// CONCATENATED MODULE: ./frontEndComponents/HeaderNavLink/styledComponents/index.js

var styledComponents_HeaderLink = external__styled_components__default.a.a.withConfig({
  displayName: "styledComponents__HeaderLink",
  componentId: "x7gq1s-0"
})(["box-sizing:border-box;position:relative;color:", ";text-decoration:none;transition:color 0.1s ease-in-out;cursor:pointer;padding:5px 5px;&:after{margin-top:6px;background:", ";max-width:", ";right:", ";bottom:0;content:\"  \";display:block;height:2px;left:10px;position:absolute;z-index:5;transition:max-width .2s ease-in-out;}&:hover{color:#fff;&:after{right:10px;max-width:100%;}}&:not(:first-of-type){margin-left:20px;}"], function (props) {
  return props.active ? 'rgba(255,255,255,1);' : 'rgba(255,255,255,.9)';
}, function (props) {
  return props.theme.accentColor;
}, function (props) {
  return props.active ? '100%' : '0px';
}, function (props) {
  return props.active ? '10px' : '0';
});
// CONCATENATED MODULE: ./frontEndComponents/HeaderNav/index.js
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var HeaderNav_styles = function styles(theme) {
  return {
    signUpLink: {
      display: 'flex',
      height: '100%',
      padding: '5px',
      color: '#fff',
      backgroundColor: '#D0021B',
      borderRadius: '2px',
      transition: 'background-color .2s ease-in-out',
      '&:hover': {
        backgroundColor: Object(external__polished_["darken"])(0.05, '#D0021B')
      }
    },
    anchor: {
      textDecoration: 'none'
    },
    loginWrapper: {
      display: 'flex',
      marginRight: '5px'
    },
    logo: {
      height: 30
    }
  };
};

var HeaderNav_HeaderNav = (_dec = Object(styles_["withStyles"])(HeaderNav_styles), Object(external__mobx_react_["observer"])(_class = _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderNav, _React$Component);

  function HeaderNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HeaderNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HeaderNav.__proto__ || Object.getPrototypeOf(HeaderNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            classes = _this$props.classes,
            isAdmin = _this$props.isAdmin;

        if (_this.props.isLoggedIn) {
          return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement(HeaderNavLink, {
            route: isAdmin ? 'admin-dashboard' : 'dashboard',
            prefetch: true
          }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Dashboard")), external__react__default.a.createElement(styledComponents_HeaderLink, {
            onClick: _this.props.onLogout
          }, "Log Out"));
        }

        return external__react__default.a.createElement(LeftHeaderLinkWrapper, null, external__react__default.a.createElement("span", {
          className: classes.loginWrapper
        }, external__react__default.a.createElement(HeaderNavLink, {
          route: "log-in",
          href: "/log-in",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Log In"))));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderMiddleLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return external__react__default.a.createElement(MiddleHeaderLinkWrapper, null, external__react__default.a.createElement(HeaderNavLink, {
          route: "listings",
          href: "/listings",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "Listings")), external__react__default.a.createElement(HeaderNavLink, {
          route: "listings",
          href: "/listings",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "New Developments")), external__react__default.a.createElement(HeaderNavLink, {
          route: "about",
          href: "/about",
          prefetch: true
        }, external__react__default.a.createElement(styledComponents_HeaderLink, null, "About")));
      }
    }), _temp));
  }

  _createClass(HeaderNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          headerBoxShadowOff = _props.headerBoxShadowOff,
          classes = _props.classes;
      return external__react__default.a.createElement(HeaderWrapper, {
        id: "header-wrapper",
        headerBoxShadowOff: true
      }, external__react__default.a.createElement(Logo, null, external__react__default.a.createElement(routes["Link"], {
        route: "home",
        prefetch: true
      }, external__react__default.a.createElement(HeaderLink, null, external__react__default.a.createElement("img", {
        className: classes.logo,
        src: "/static/images/logo.png"
      })))), this.renderLinks());
    }
  }]);

  return HeaderNav;
}(external__react__default.a.Component)) || _class) || _class);
/* harmony default export */ var frontEndComponents_HeaderNav = (HeaderNav_HeaderNav);
// CONCATENATED MODULE: ./frontEndContainers/Header.js


var Header__class;

function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Header_Header = Object(external__mobx_react_["observer"])(Header__class =
/*#__PURE__*/
function (_React$Component) {
  Header__inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    Header__classCallCheck(this, Header);

    _this = Header__possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(Header__assertThisInitialized(_this), "onClickBurgerMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(_objectSpread({}, _this.state, {
          appTopBurgerMenuOpen: !_this.state.appTopBurgerMenuOpen
        }));
      }
    });
    Object.defineProperty(Header__assertThisInitialized(_this), "onLogout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          var res;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.props.logoutUser();

                case 2:
                  res = _context.sent;

                  if (!res.error) {
                    _context.next = 6;
                    break;
                  }

                  _this.setState(_objectSpread({}, _this.state, {
                    errorsFromServer: res.error
                  }));

                  return _context.abrupt("return");

                case 6:
                  if (_this.state.errorsFromServer) {
                    _this.setState(_objectSpread({}, _this.state, {
                      errorsFromServer: ''
                    }));
                  }

                  routes["Router"].pushRoute('home');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      errorsFromServer: '',
      appTopBurgerMenuOpen: false
    };
    _this.onLogout = external__debounce__default()(_this.onLogout, 500, true);
    return _this;
  }

  Header__createClass(Header, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(frontEndComponents_HeaderNav, {
        isAdmin: this.props.isAdmin,
        isLoggedIn: this.props.isLoggedIn,
        onLogout: this.onLogout
      });
    }
  }]);

  return Header;
}(external__react__default.a.Component)) || Header__class; // use HOC to access router object inside of component
// useful for accessing props.router.pathname


/* harmony default export */ var frontEndContainers_Header = (Object(router_["withRouter"])(Header_Header));
// CONCATENATED MODULE: ./sharedStyledComponents/AppContentWrapper.js

/* harmony default export */ var AppContentWrapper = (external__styled_components__default.a.div.withConfig({
  displayName: "AppContentWrapper",
  componentId: "s1jy6wuu-0"
})(["padding-top:60px;min-width:100%;height:100%;background-color:#fafafa;"]));
// EXTERNAL MODULE: ./globalStyles/index.js
var globalStyles = __webpack_require__(47);

// CONCATENATED MODULE: ./frontEndComponents/FrontEndLayout/styledComponents/index.js

var Container = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__Container",
  componentId: "s108z15f-0"
})(["width:100%;height:100%;display:", ";"], function (props) {
  return props.isApp ? 'flex' : 'relative';
});
var HeaderAndAppContentWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "styledComponents__HeaderAndAppContentWrapper",
  componentId: "s108z15f-1"
})(["width:100%;height:100%;"]);
// EXTERNAL MODULE: ./constants/userTypes.js
var userTypes = __webpack_require__(12);
var userTypes_default = /*#__PURE__*/__webpack_require__.n(userTypes);

// CONCATENATED MODULE: ./frontEndComponents/FrontEndLayout/index.js
var FrontEndLayout__class;

function FrontEndLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FrontEndLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { FrontEndLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FrontEndLayout__typeof(obj); }

function FrontEndLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FrontEndLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FrontEndLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) FrontEndLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) FrontEndLayout__defineProperties(Constructor, staticProps); return Constructor; }

function FrontEndLayout__possibleConstructorReturn(self, call) { if (call && (FrontEndLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return FrontEndLayout__assertThisInitialized(self); }

function FrontEndLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FrontEndLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import DevTools from 'mobx-react-devtools';













external__nprogress__default.a.configure({
  showSpinner: false
});
external__nprogress__default.a.configure({
  trickleSpeed: 100
});

if (external__is_browser__default.a) {
  router__default.a.onRouteChangeStart = function () {
    external__nprogress__default.a.start();
  };

  router__default.a.onRouteChangeComplete = function () {
    return external__nprogress__default.a.done();
  };

  router__default.a.onRouteChangeError = function () {
    return external__nprogress__default.a.done();
  };
}

var FrontEndLayout_Layout = Object(external__mobx_react_["observer"])(FrontEndLayout__class =
/*#__PURE__*/
function (_Component) {
  FrontEndLayout__inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    FrontEndLayout__classCallCheck(this, Layout);

    _this = FrontEndLayout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {};
    return _this;
  }

  FrontEndLayout__createClass(Layout, [{
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      var _props$UserStore = this.props.UserStore,
          isLoggedIn = _props$UserStore.isLoggedIn,
          logoutUser = _props$UserStore.logoutUser,
          userRole = _props$UserStore.userRole;
      var isAdmin = userRole === userTypes["admin"] || userRole === userTypes["superAdmin"];
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, this.props.title ? this.props.title : 'Real Estate App'), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/vendor/nprogress.css"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans",
        type: "text/css",
        rel: "stylesheet"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Playfair+Display|Raleway",
        type: "text/css",
        rel: "stylesheet"
      }), external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: globalStyles["a" /* default */]
        }
      })), external__react__default.a.createElement(external__styled_components_["ThemeProvider"], {
        theme: themeStyles["a" /* default */]
      }, external__react__default.a.createElement(Container, null, external__react__default.a.createElement(HeaderAndAppContentWrapper, null, external__react__default.a.createElement(frontEndContainers_Header, {
        isLoggedIn: isLoggedIn,
        logoutUser: logoutUser,
        headerBoxShadowOff: this.props.headerBoxShadowOff,
        isAdmin: isAdmin
      }), external__react__default.a.createElement(AppContentWrapper, null, this.props.children)))));
    }
  }]);

  return Layout;
}(external__react_["Component"])) || FrontEndLayout__class;

/* harmony default export */ var FrontEndLayout = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(withRoot["a" /* default */])(FrontEndLayout_Layout)));

/***/ })

/******/ });