import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Product from './components/Product';
import Connect from './components/Connect';
import XianJu from './components/XianJu';


export default () => {
  return (
      <HashRouter>
        <div>
          <Route exact path="/" component={ Homepage }/>
          <Route path="/product" component={ Product }/>
          <Route path="/connect" component={ Connect }/>
          <Route path="/xianju" component={ XianJu }/>
        </div>
      </HashRouter>
  )
}
