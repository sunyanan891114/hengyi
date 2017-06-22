import React from 'react';

export default () => {
  return (
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="site-footer-wrapper">
          <nav className="jetpack-social-navigation jetpack-social-navigation-genericons" role="navigation"
               aria-label="社交网络链接菜单">
            <div className="menu-%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93-container">
              <ul id="menu-%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93" className="menu">
                <li id="menu-item-20"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a
                    href="http://www.facebook.com"><span className="screen-reader-text">Facebook</span></a></li>
                <li id="menu-item-21"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-21"><a
                    href="http://www.linkedin.com"><span className="screen-reader-text">领英</span></a></li>
                <li id="menu-item-22"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22"><a
                    href="http://www.twitter.com"><span className="screen-reader-text">Twitter</span></a></li>
                <li id="menu-item-23"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-23"><a
                    href="http://www.instagram.com"><span className="screen-reader-text">Instagram</span></a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="site-info">
            <a>大连恒亿偶合器有限公司</a>
            <p>Hosted by <a href="https://pages.coding.me" style={{fontWeight: 'bold'}}>Coding Pages</a></p>
          </div>
        </div>
      </footer>
  )
}