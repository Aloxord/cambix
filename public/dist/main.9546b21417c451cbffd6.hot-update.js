webpackHotUpdate("main",{

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.logOut = exports.logIn = exports.loading = undefined;\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar loading = exports.loading = function loading() {\n\treturn {\n\t\ttype: _constants.LOADING\n\t};\n};\n\nvar logIn = exports.logIn = function logIn(_ref) {\n\tvar data = _ref.data,\n\t    api_token = _ref.api_token;\n\n\treturn {\n\t\ttype: _constants.LOG_IN,\n\t\tuser: data,\n\t\ttoken: api_token\n\t};\n};\n\nvar logOut = exports.logOut = function logOut() {\n\treturn {\n\t\ttype: _constants.LOG_OUT\n\t};\n};\n\n//# sourceURL=webpack:///./src/actions/auth.js?");

/***/ })

})