"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "footer",
    { id: "colophon", className: "site-footer", role: "contentinfo" },
    _react2.default.createElement(
      "div",
      { className: "site-footer-wrapper" },
      _react2.default.createElement(
        "nav",
        { className: "jetpack-social-navigation jetpack-social-navigation-genericons", role: "navigation",
          "aria-label": "\u793E\u4EA4\u7F51\u7EDC\u94FE\u63A5\u83DC\u5355" },
        _react2.default.createElement(
          "div",
          { className: "menu-%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93-container" },
          _react2.default.createElement(
            "ul",
            { id: "menu-%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93", className: "menu" },
            _react2.default.createElement(
              "li",
              { id: "menu-item-20",
                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-20" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.facebook.com" },
                _react2.default.createElement(
                  "span",
                  { className: "screen-reader-text" },
                  "Facebook"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { id: "menu-item-21",
                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-21" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.linkedin.com" },
                _react2.default.createElement(
                  "span",
                  { className: "screen-reader-text" },
                  "\u9886\u82F1"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { id: "menu-item-22",
                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-22" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.twitter.com" },
                _react2.default.createElement(
                  "span",
                  { className: "screen-reader-text" },
                  "Twitter"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { id: "menu-item-23",
                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-23" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.instagram.com" },
                _react2.default.createElement(
                  "span",
                  { className: "screen-reader-text" },
                  "Instagram"
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "site-info" },
        _react2.default.createElement(
          "a",
          null,
          "\u5927\u8FDE\u6052\u4EBF\u5076\u5408\u5668\u6709\u9650\u516C\u53F8"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Hosted by ",
          _react2.default.createElement(
            "a",
            { href: "https://pages.coding.me", style: { fontWeight: 'bold' } },
            "Coding Pages"
          )
        )
      )
    )
  );
};