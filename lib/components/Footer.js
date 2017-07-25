"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		"section",
		{ className: "homepage-footer" },
		_react2.default.createElement(
			"div",
			{ className: "homepage-footer__content" },
			_react2.default.createElement(
				"div",
				{ className: "homepage-footer__about-us" },
				_react2.default.createElement(
					"p",
					{ className: "title" },
					"\u5173\u4E8E\u6211\u4EEC\u7684\u66F4\u591A\u4FE1\u606F"
				),
				_react2.default.createElement(
					"p",
					{ className: "title title-en" },
					"MORE INFORMATION ABOUT US"
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "homepage-footer__qr-code-container" },
				_react2.default.createElement(
					"div",
					{ className: "homepage-footer__qr-code" },
					_react2.default.createElement("div", { className: "company-wechat" }),
					_react2.default.createElement(
						"span",
						{ className: "qr-content" },
						"\u5927\u8FDE\u6052\u4EBF\u5076\u5408\u5668\u5FAE\u4FE1"
					)
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "homepage-footer__content-link" },
				_react2.default.createElement(
					"span",
					null,
					_react2.default.createElement(
						"span",
						{ className: "label" },
						_react2.default.createElement("i", { className: "fa fa-phone" }),
						"\u8054\u7CFB\u7535\u8BDD\uFF1A"
					),
					"131-0983-4507"
				),
				_react2.default.createElement(
					"span",
					null,
					_react2.default.createElement(
						"span",
						{ className: "label" },
						_react2.default.createElement("i", { className: "fa fa-envelope" }),
						"\u90AE\u7BB1\uFF1A"
					),
					"sunyanan891114@163.com"
				),
				_react2.default.createElement(
					"span",
					null,
					_react2.default.createElement(
						"span",
						{ className: "label" },
						_react2.default.createElement("i", { className: "fa fa-fax" }),
						"\u4F20\u771F\uFF1A"
					),
					"0411-86860650"
				),
				_react2.default.createElement(
					"span",
					null,
					_react2.default.createElement(
						"span",
						{ className: "label" },
						_react2.default.createElement("i", { className: "fa fa-qq" }),
						"QQ\u53F7\uFF1A"
					),
					"1054430872"
				)
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "homepage-footer__notation" },
			"\xA9 2018. \u5927\u8FDE\u6052\u4EBF\u6DB2\u529B\u5076\u5408\u5668, Inc. All Rights Reserved.",
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
	);
};