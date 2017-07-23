import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'welcome'
    };

    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.activeTab) {
      this.handleSwitchTab(props.activeTab);
    }
  }

  handleSwitchTab(tabName) {
    this.setState({active: tabName});
  }

  render() {
    return (
        <header className="header" role="banner">
          <h1 className="header__title"><a href="/" rel="home">大连恒亿偶合器有限公司</a></h1>

          <nav id="nav" className="nav" role="navigation" aria-label="Primary Menu">
            <ul>
              <li className={`nav__item ${this.state.active === 'welcome' ? 'current-menu-item' : '' }`}>
                <Link to="/" onClick={ this.handleSwitchTab.bind(this, 'welcome')}>欢迎</Link>
              </li>
              <li className={`nav__item ${this.state.active === 'product' ? 'current-menu-item' : '' }`}>
                <Link to="/product" onClick={ this.handleSwitchTab.bind(this, 'product')}>调速型液力偶合器</Link>
              </li>
              <li className={`nav__item ${this.state.active === 'xianju' ? 'current-menu-item' : '' }`}>
                <Link to="/xianju" onClick={ this.handleSwitchTab.bind(this, 'xianju')}>限矩型液力偶合器</Link>
              </li>
              <li className={`nav__item ${this.state.active === 'connect' ? 'current-menu-item' : '' }`}>
                <Link to="/connect" onClick={ this.handleSwitchTab.bind(this, 'connect')}>联系信息</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
  }
}
