'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Xcover = require('../assets/xianju/Xcover.jpg');

var _Xcover2 = _interopRequireDefault(_Xcover);

var _Xcontent = require('../assets/xianju/Xcontent1.jpg');

var _Xcontent2 = _interopRequireDefault(_Xcontent);

var _Xcontent3 = require('../assets/xianju/Xcontent2.jpg');

var _Xcontent4 = _interopRequireDefault(_Xcontent3);

var _Xcontent5 = require('../assets/xianju/Xcontent3.jpg');

var _Xcontent6 = _interopRequireDefault(_Xcontent5);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, { activeTab: 'xianju' }),
    _react2.default.createElement('img', { src: _Xcover2.default, className: 'product-img', alt: '\u9650\u77E9\u578B\u6DB2\u529B\u5076\u5408\u5668' }),
    _react2.default.createElement('img', { src: _Xcontent2.default, className: 'product-img', alt: '\u9650\u77E9\u578B\u6DB2\u529B\u5076\u5408\u5668' }),
    _react2.default.createElement('img', { src: _Xcontent4.default, className: 'product-img', alt: '\u9650\u77E9\u578B\u6DB2\u529B\u5076\u5408\u5668' }),
    _react2.default.createElement('img', { src: _Xcontent6.default, className: 'product-img', alt: '\u9650\u77E9\u578B\u6DB2\u529B\u5076\u5408\u5668' }),
    _react2.default.createElement(_Footer2.default, null)
  );
};