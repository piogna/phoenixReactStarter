webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactHotLoader = __webpack_require__(173);
	
	var _Root = __webpack_require__(184);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootEl = document.getElementById('root');
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactHotLoader.AppContainer,
	  null,
	  _react2.default.createElement(_Root2.default, null)
	), rootEl);
	
	if (true) {
	  module.hot.accept(184, function () {
	    var NextRoot = __webpack_require__(184).default;
	    _reactDom2.default.render(_react2.default.createElement(
	      _reactHotLoader.AppContainer,
	      null,
	      _react2.default.createElement(NextRoot, null)
	    ), rootEl);
	  });
	}
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(rootEl, 'rootEl', '/Users/me/MEGA/projects/elixir/phoenix_react_starter/web/static/js/entry.jsx');
	})();

	;

/***/ }
])
//# sourceMappingURL=0.e376aeec8b8781ba8630.hot-update.js.map