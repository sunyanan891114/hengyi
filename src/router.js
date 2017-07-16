import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/homepage/Homepage';
import About from './components/About';
import Product from './components/Product';
import Connect from './components/Connect';


export default () => {
  return (
      <Router history="">
        <div>
          <Header/>
          <Route exact path="/" component={ Homepage }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/product" component={ Product }/>
          <Route exact path="/connect" component={ Connect }/>
        </div>
      </Router>
  )
}
