webpackHotUpdate("main",{

/***/ "./src/reducers/navigation.js":
/*!************************************!*\
  !*** ./src/reducers/navigation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _auth = __webpack_require__(/*! ../actions/auth */ \"./src/actions/auth.js\");\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar INITIAL_STATE = 'ini';\n\nvar location = function location() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.SET_LOCATION:\n\t\t\treturn action.location;\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = location;\n\n//# sourceURL=webpack:///./src/reducers/navigation.js?");

/***/ })

})