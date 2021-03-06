'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      active: 'welcome'
    };

    _this.handleSwitchTab = _this.handleSwitchTab.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.activeTab) {
        this.handleSwitchTab(props.activeTab);
      }
    }
  }, {
    key: 'handleSwitchTab',
    value: function handleSwitchTab(tabName) {
      this.setState({ active: tabName });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'header', role: 'banner' },
        _react2.default.createElement(
          'h1',
          { className: 'header__title' },
          _react2.default.createElement(
            'a',
            { href: '/', rel: 'home' },
            '\u5927\u8FDE\u6052\u4EBF\u5076\u5408\u5668\u6709\u9650\u516C\u53F8'
          )
        ),
        _react2.default.createElement(
          'nav',
          { id: 'nav', className: 'nav', role: 'navigation', 'aria-label': 'Primary Menu' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              { className: 'nav__item ' + (this.state.active === 'welcome' ? 'current-menu-item' : '') },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/', onClick: this.handleSwitchTab.bind(this, 'welcome') },
                '\u6B22\u8FCE'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav__item ' + (this.state.active === 'product' ? 'current-menu-item' : '') },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/product', onClick: this.handleSwitchTab.bind(this, 'product') },
                '\u8C03\u901F\u578B\u6DB2\u529B\u5076\u5408\u5668'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav__item ' + (this.state.active === 'xianju' ? 'current-menu-item' : '') },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/xianju', onClick: this.handleSwitchTab.bind(this, 'xianju') },
                '\u9650\u77E9\u578B\u6DB2\u529B\u5076\u5408\u5668'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav__item ' + (this.state.active === 'connect' ? 'current-menu-item' : '') },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/connect', onClick: this.handleSwitchTab.bind(this, 'connect') },
                '\u8054\u7CFB\u4FE1\u606F'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;