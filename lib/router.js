'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Homepage = require('./components/homepage/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Product = require('./components/Product');

var _Product2 = _interopRequireDefault(_Product);

var _Connect = require('./components/Connect');

var _Connect2 = _interopRequireDefault(_Connect);

var _XianJu = require('./components/XianJu');

var _XianJu2 = _interopRequireDefault(_XianJu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: '' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Homepage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/product', component: _Product2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/connect', component: _Connect2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/xianju', component: _XianJu2.default })
    )
  );
};