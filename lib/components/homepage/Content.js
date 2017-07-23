'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _About = require('../About');

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    'main',
    { id: 'main', className: 'site-main', role: 'main' },
    _react2.default.createElement(
      'article',
      { className: 'welcome alternative-bg' },
      _react2.default.createElement(
        'div',
        { className: 'hentry-wrapper' },
        _react2.default.createElement(
          'h1',
          { className: 'entry-title' },
          '\u6B22\u8FCE\u5149\u4E34',
          _react2.default.createElement('br', null),
          '\u5927\u8FDE\u6052\u4EBF\u5076\u5408\u5668\u6709\u9650\u516C\u53F8'
        )
      )
    ),
    _react2.default.createElement(
      'article',
      { className: 'introduction alternative-bg' },
      _react2.default.createElement('div', { className: 'introduction-img' }),
      _react2.default.createElement(
        'div',
        { className: 'introduction-container' },
        _react2.default.createElement(
          'h2',
          { className: 'entry-title' },
          '\u516C\u53F8\u6982\u51B5'
        ),
        _react2.default.createElement(
          'p',
          null,
          '\u516C\u53F8\u7814\u53D1\u51FA\u56FD\u5BB6\u6807\u51C6\u7CFB\u5217\u578B\u8C31\u89C4\u5B9A\u7684YOTG\u3001YOTD\u3001YOTG\u3001YOTF\u3001YOTG***R\u3001YOTF***CL\u3001YOCJ \u3001YOCZ\u8C03\u901F\u578B\u6DB2\u529B\u5076\u5408\u5668\u3001\u6DB2\u529B\u5076\u5408\u5668\u4F20\u52A8\u88C5\u7F6E\u4EE5\u53CAYOX\u3001TVA\u3001YOXIIZ\u9650\u77E9\u578B\u7CFB\u5217\u54C1\u79CD\u89C4\u683C\uFF0C\u90E8\u5206\u4EA7\u54C1\u586B\u8865\u4E86\u56FD\u5185\u7A7A\u767D'
        )
      )
    ),
    _react2.default.createElement(_About2.default, null)
  );
};