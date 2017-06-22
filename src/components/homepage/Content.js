import React from 'react';
import Aside from './Aside';

export default () => {

  return (
      <div id="content" className="site-content">

        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <article className="page type-page status-publish has-post-thumbnail hentry welcome">
              <div className="hentry-wrapper">
                <header className="entry-header">
                  <h1 className="entry-title">
                    欢迎光临
                    <p>大连恒亿偶合器有限公司</p>
                  </h1>
                </header>
              </div>
            </article>


            <article className="page type-page status-publish hentry">
              <div className="hentry-wrapper">
                <header className="entry-header">
                  <h2 className="entry-title">公司概况</h2></header>

                <div className="entry-content">
                  <p>公司拥有业内一流的设计研发团队，有超强的产品自主创新能力。公司以国际最先进液力传动技术为平台，以发展高端产品技术为主线，虚心汲取国际先进液力偶合器的技术精华，持续进行高强度的技术研发投入，研发出国家标准系列型谱规定的YOTG、YOTD、YOTG、YOTF、YOTG***R、YOTF***CL、YOCJ 、YOCZ调速型液力偶合器、液力偶合器传动装置以及YOX、TVA、	YOXIIZ限矩型系列品种规格，部分产品填补了国内空白</p>
                </div>

              </div>
            </article>

            <article id="post-8" className="post-8 page type-page status-publish has-post-thumbnail hentry welcome">
              <div className="hentry-wrapper">
                <header className="entry-header">
                  <h2 className="entry-title">笃守诚信、创造卓越</h2></header>

                <div className="entry-content">
                  <p>我们致力于传统技术的改进与升级换代工作。以引进技术派生的YOTG (YOTGC) 早期产品为基型，向第三代技术YOTD型转换，研发设计滑动轴承产品YOTF型系列，钢厂除鳞泵专用型YOTF***CL调速型偶合器。除标准产品外，我公司还可以为用户设计制造特殊要求的液力机械产品。
                  </p>
                </div>

              </div>
            </article>

          </main>
        </div>
        <Aside/>
      </div>
  );
}
