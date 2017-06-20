import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class HelloWorld extends Component {
  render() {
    return (
        <div id="page" className="site">
          <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
          <Header/>
          <Content/>
          <Footer/>
        </div>
    );
  }
}
