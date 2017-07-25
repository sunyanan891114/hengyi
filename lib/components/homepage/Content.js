'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _About = require('../About');

var _About2 = _interopRequireDefault(_About);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    'main',
    { id: 'main', className: 'site-main', role: 'main' },
    _react2.default.createElement(_Hero2.default, null)
  );
};