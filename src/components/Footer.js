import React from 'react';

export default () => {
	return (
			<section className="homepage-footer">
				<div className="homepage-footer__content">
					<div className="homepage-footer__about-us">
						<p className="title">关于我们的更多信息</p>
						<p className="title title-en">MORE INFORMATION ABOUT US</p>
					</div>
					<div className="homepage-footer__qr-code-container">
						<div className="homepage-footer__qr-code">
							<div className="company-wechat"></div>
							<span className="qr-content">大连恒亿偶合器微信</span>
						</div>
					</div>
					<div className="homepage-footer__content-link">
						<span><span className="label"><i className="fa fa-phone"/>联系电话：</span>131-0983-4507</span>
						<span><span className="label"><i className="fa fa-envelope"/>邮箱：</span>sunyanan891114@163.com</span>
						<span><span className="label"><i className="fa fa-fax"/>传真：</span>0411-86860650</span>
						<span><span className="label"><i className="fa fa-qq"/>QQ号：</span>1054430872</span>
				  </div>
				</div>
				<div className="homepage-footer__notation">
					© 2018. 大连恒亿液力偶合器, Inc. All Rights Reserved.
					<p>Hosted by <a href="https://pages.coding.me" style={{fontWeight: 'bold'}}>Coding Pages</a></p>
				</div>
			</section>
	)
}
