import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/homepage/Homepage';
import Product from './components/Product';
import Connect from './components/Connect';
import XianJu from './components/XianJu';


export default () => {
  return (
      <Router history="">
        <div>
          <Header/>
          <Route exact path="/" component={ Homepage }/>
          <Route exact path="/product" component={ Product }/>
          <Route exact path="/connect" component={ Connect }/>
          <Route exact path="/xianju" component={ XianJu }/>
        </div>
      </Router>
  )
}
