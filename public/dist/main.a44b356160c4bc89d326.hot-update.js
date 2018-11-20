webpackHotUpdate("main",{

/***/ "./src/actions/navigation.js":
/*!***********************************!*\
  !*** ./src/actions/navigation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.location = undefined;\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar location = function location(_location) {\n\treturn {\n\t\ttype: _constants.SET_LOCATION,\n\t\tlocation: _location\n\t};\n};\n\nexports.location = location;\n\n//# sourceURL=webpack:///./src/actions/navigation.js?");

/***/ }),

/***/ "./src/components/menu/menu.jsx":
/*!**************************************!*\
  !*** ./src/components/menu/menu.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _navigation = __webpack_require__(/*! ../../actions/navigation */ \"./src/actions/navigation.js\");\n\nvar _menu = __webpack_require__(/*! ./menu.scss */ \"./src/components/menu/menu.scss\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Menu = function (_Component) {\n\t_inherits(Menu, _Component);\n\n\tfunction Menu(props) {\n\t\t_classCallCheck(this, Menu);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));\n\n\t\t_this.changeScreen = _this.changeScreen.bind(_this);\n\n\t\treturn _this;\n\t}\n\n\t_createClass(Menu, [{\n\t\tkey: 'changeScreen',\n\t\tvalue: function changeScreen(set, evt) {\n\t\t\tevt.preventDefault();\n\n\t\t\tthis.props.redir(set);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar location = this.props.location;\n\n\n\t\t\tconsole.log(this.props);\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ className: _menu2.default.menu },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ className: location == 'ini' ? 'is-active' : null, onClick: function onClick(e) {\n\t\t\t\t\t\t\t\treturn _this2.changeScreen('ini', e);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\t{ className: 'material-icons' },\n\t\t\t\t\t\t\t'home'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'Inicio'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ className: location == 'bank' ? 'is-active' : null, onClick: function onClick(e) {\n\t\t\t\t\t\t\t\treturn _this2.changeScreen('bank', e);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\t{ className: 'material-icons' },\n\t\t\t\t\t\t\t'account_balance'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'Bancos'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ className: location == 'profile' ? 'is-active' : null, onClick: function onClick(e) {\n\t\t\t\t\t\t\t\treturn _this2.changeScreen('profile', e);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\t{ className: 'material-icons' },\n\t\t\t\t\t\t\t'person'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'Perfil'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ className: location == 'add' ? 'is-active' : null, onClick: function onClick(e) {\n\t\t\t\t\t\t\t\treturn _this2.changeScreen('add', e);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\t{ className: 'material-icons' },\n\t\t\t\t\t\t\t'group_add'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'Registrar'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Menu;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\tconsole.log(state);\n\n\treturn {\n\t\tlocation: state.location\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tredir: function redir(locat) {\n\t\t\treturn dispatch((0, _navigation.location)(locat));\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);\n\n//# sourceURL=webpack:///./src/components/menu/menu.jsx?");

/***/ }),

/***/ "./src/components/menu/menu.scss":
/*!***************************************!*\
  !*** ./src/components/menu/menu.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"menu\":\"menu__menu___20yH9 _config__menu-list___udalU\"};\n\n//# sourceURL=webpack:///./src/components/menu/menu.scss?");

/***/ })

})