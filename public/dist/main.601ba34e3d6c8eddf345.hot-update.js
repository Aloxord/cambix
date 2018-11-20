webpackHotUpdate("main",{

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _login = __webpack_require__(/*! ./login */ \"./src/reducers/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _navigation = __webpack_require__(/*! ./navigation */ \"./src/reducers/navigation.js\");\n\nvar _navigation2 = _interopRequireDefault(_navigation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GlobalState = (0, _redux.combineReducers)({\n\tuser: _login2.default,\n\tlocation: _navigation2.default\n});\n\nexports.default = GlobalState;\n\n//# sourceURL=webpack:///./src/reducers/reducers.js?");

/***/ })

})