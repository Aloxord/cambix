webpackHotUpdate("main",{

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.login = login;\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _api = __webpack_require__(/*! ../config/api */ \"./src/config/api.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction login(username, password) {\n\treturn _axios2.default.post(_api.URL_BASE + _api.AUTH, {\n\t\tusername: username,\n\t\tpassword: password\n\t});\n}\n\n//# sourceURL=webpack:///./src/services/auth.js?");

/***/ })

})