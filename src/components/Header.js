import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'welcome'
    };

    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab(tabName) {
    this.setState({ active: tabName });
  }

  render() {
    return (
        <header id="masthead" className="site-header" role="banner">
          <div className="site-header-wrapper">
            <div className="site-branding">
              <p className="site-title"><a href="/" rel="home">大连恒亿偶合器有限公司</a></p>
            </div>

            <div id="site-menu" className="site-menu">
              <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu">
                <div className="menu-primary-container">
                  <ul id="menu-primary" className="primary-menu">
                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${this.state.active === 'welcome' ? 'current-menu-item' : '' }`}>
                      <Link to="/" onClick={ this.handleSwitchTab.bind(this, 'welcome')}>欢迎</Link>
                    </li>
                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${this.state.active === 'product' ? 'current-menu-item' : '' }`}>
                      <Link to="/product" onClick={ this.handleSwitchTab.bind(this, 'product')}>调速型液力偶合器</Link>
                    </li>
                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${this.state.active === 'xianju' ? 'current-menu-item' : '' }`}>
                      <Link to="/xianju" onClick={ this.handleSwitchTab.bind(this, 'xianju')}>限矩型液力偶合器</Link>
                    </li>
                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${this.state.active === 'connect' ? 'current-menu-item' : '' }`}>
                      <Link to="/connect" onClick={ this.handleSwitchTab.bind(this, 'connect')}>联系信息</Link>
                    </li>
                    </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
    );
  }
}
