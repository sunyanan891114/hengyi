import React from 'react';
import Content from './Content';
import Footer from '../Footer';
import Header from '../Header';

export default () => {
  return (
      <div id="page" className="site">
        <Header activeTab="welcome"/>
        <Content/>
        <Footer/>
      </div>
  );
}
