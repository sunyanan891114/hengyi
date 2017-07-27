'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cover = require('../assets/product/cover.jpg');

var _cover2 = _interopRequireDefault(_cover);

var _conten = require('../assets/product/conten1.jpg');

var _conten2 = _interopRequireDefault(_conten);

var _conten3 = require('../assets/product/conten2.jpg');

var _conten4 = _interopRequireDefault(_conten3);

var _conten5 = require('../assets/product/conten3.jpg');

var _conten6 = _interopRequireDefault(_conten5);

var _conten7 = require('../assets/product/conten4.jpg');

var _conten8 = _interopRequireDefault(_conten7);

var _conten9 = require('../assets/product/conten5.jpg');

var _conten10 = _interopRequireDefault(_conten9);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'product' },
    _react2.default.createElement(_Header2.default, { activeTab: 'product' }),
    _react2.default.createElement('img', { className: 'product-img', src: _cover2.default }),
    _react2.default.createElement('img', { className: 'product-img', src: _conten2.default }),
    _react2.default.createElement('img', { className: 'product-img', src: _conten4.default }),
    _react2.default.createElement('img', { className: 'product-img', src: _conten6.default }),
    _react2.default.createElement('img', { className: 'product-img', src: _conten8.default }),
    _react2.default.createElement('img', { className: 'product-img', src: _conten10.default }),
    _react2.default.createElement(_Footer2.default, null)
  );
};