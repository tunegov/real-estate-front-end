module.exports=__NEXT_REGISTER_PAGE("/app/admin-area/customers/create",function(){var e=webpackJsonp([25],{4505:function(e,t,r){e.exports=r(4506)},4506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=r(0);var n=r.n(o);var a=r(15);var u=r(51);var i=r.n(u);var c=r(379);var l=r(151);var s=r(163);var f=r(35);var p=r.n(f);var b;function y(e){y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return y(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(e,o.key,o)}}function S(e,t,r){t&&w(e.prototype,t);r&&w(e,r);return e}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=Object(a["a"])(b=function(e){_(t,e);S(t,null,[{key:"getInitialProps",value:function e(t){var r=t.req;var o=!!r;return{cookieJWTData:r&&r.cookies?r.cookies.jwtData:null,isServer:o}}}]);function t(e){var r;v(this,t);r=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.store=Object(l["a"])(e.isServer,e.cookieJWTData);i.a&&!r.store.UserStore.isLoggedIn&&f["Router"].pushRoute("home");i.a&&!window._appStore&&(window._appStore=r.store);return r}S(t,[{key:"render",value:function e(){return n.a.createElement(c["a"],{UserStore:this.store.UserStore,UIStore:this.store.UIStore},n.a.createElement("div",null,n.a.createElement("h1",null,"We will now create a user!...")))}}]);return t}(n.a.Component))||b;t["default"]=Object(s["a"])(d)}},[4505]);return{page:e.default}});