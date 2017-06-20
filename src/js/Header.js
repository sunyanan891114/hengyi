import React from 'react';

export default () => {
  return (
      <header id="masthead" className="site-header" role="banner">
        <div className="site-header-wrapper">
          <div className="site-branding">

            <p className="site-title"><a href="/" rel="home">大连恒亿偶合器有限公司</a></p>
            <p className="site-description"></p>
          </div>

          <div id="site-menu" className="site-menu">
            <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu">
              <div className="menu-primary-container">
                <ul id="menu-primary" className="primary-menu">
                  <li id="menu-item-18"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-18">
                    <a href="/">欢迎</a></li>
                  <li id="menu-item-16"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16"><a
                      href="/about">关于</a></li>
                  <li id="menu-item-17"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"><a
                      href="/connect">联系信息</a>
                  </li>
                  <li id="menu-item-19"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a
                      href="/product">博客</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
  )
}
