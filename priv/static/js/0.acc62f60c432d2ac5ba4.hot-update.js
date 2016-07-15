webpackHotUpdate(0,{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(185);
	
	var _App = __webpack_require__(248);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Main = __webpack_require__(249);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Main2.default })
	);
	
	var _default = routes;
	exports.default = _default;
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/me/MEGA/projects/elixir/phoenix_react_starter/web/static/js/app/routes.jsx');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/me/MEGA/projects/elixir/phoenix_react_starter/web/static/js/app/routes.jsx');
	})();

	;

/***/ }

})
//# sourceMappingURL=0.acc62f60c432d2ac5ba4.hot-update.js.map