webpackHotUpdate("main",{

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _login = __webpack_require__(/*! ./components/login */ \"./src/components/login/login.jsx\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _dashboard = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard/dashboard.jsx\");\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar connectedApp = function connectedApp(props) {\n\treturn props.isLogged ? _react2.default.createElement(_dashboard2.default, null) : _react2.default.createElement(_login2.default, null);\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tisLogged: state.user.isLogged\n\t};\n};\nvar App = (0, _reactRedux.connect)(mapStateToProps)(connectedApp);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ })

})