import React from 'react';
import Aside from './Aside';
import About from '../About';

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


            <article className="introduction">
              <div className="introduction-img"/>
              <div className="introduction-container">
                <h2 className="entry-title">公司概况</h2>
                <p>公司研发出国家标准系列型谱规定的YOTG、YOTD、YOTG、YOTF、YOTG***R、YOTF***CL、YOCJ 、YOCZ调速型液力偶合器、液力偶合器传动装置以及YOX、TVA、YOXIIZ限矩型系列品种规格，部分产品填补了国内空白</p>
              </div>
            </article>
            <About/>
          </main>
        </div>
        <Aside/>
      </div>
  );
}
