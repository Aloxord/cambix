webpackHotUpdate("main",{

/***/ "./src/components/sidebar/sidebar.jsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/sidebar.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _auth = __webpack_require__(/*! ../../actions/auth */ \"./src/actions/auth.js\");\n\nvar _menu = __webpack_require__(/*! ../menu */ \"./src/components/menu/menu.jsx\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nvar _sidebar = __webpack_require__(/*! ./sidebar.scss */ \"./src/components/sidebar/sidebar.scss\");\n\nvar _sidebar2 = _interopRequireDefault(_sidebar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Sidebar = function Sidebar(props) {\n\tconsole.log(props);\n\treturn _react2.default.createElement(\n\t\t'aside',\n\t\t{ className: _sidebar2.default.sidebar },\n\t\t_react2.default.createElement('div', { className: _sidebar2.default.logo }),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: _sidebar2.default.menu },\n\t\t\t_react2.default.createElement(_menu2.default, null)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ className: _sidebar2.default.logout },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ onClick: props.logout },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\t{ className: 'material-icons' },\n\t\t\t\t\t\t\t'power_settings_new'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'Salir'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tlogout: dispatch((0, _auth.logOut)())\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Sidebar);\n\n//# sourceURL=webpack:///./src/components/sidebar/sidebar.jsx?");

/***/ })

})