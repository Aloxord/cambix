webpackHotUpdate("main",{

/***/ "./src/reducers/login.js":
/*!*******************************!*\
  !*** ./src/reducers/login.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _auth = __webpack_require__(/*! ../actions/auth */ \"./src/actions/auth.js\");\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar INITIAL_STATE = {\n\tuser: {},\n\tisLogged: false\n};\n\nvar auth = function auth() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.LOG_IN:\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tuser: action.user,\n\t\t\t\ttoken: action.token,\n\t\t\t\tisLogged: true\n\t\t\t});\n\t\t\tbreak;\n\t\tcase _constants.LOG_OUT:\n\t\t\treturn Object.assign({}, state, {\n\t\t\t\tuser: '',\n\t\t\t\ttoken: '',\n\t\t\t\tisLogged: false\n\t\t\t});\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = auth;\n\n//# sourceURL=webpack:///./src/reducers/login.js?");

/***/ })

})