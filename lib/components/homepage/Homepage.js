'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { id: 'page', className: 'site' },
    _react2.default.createElement(_Content2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};