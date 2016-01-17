import React from 'react';
import { Route } from 'react-router';

import App from './handlers/App';
import PageNotFound from 'PageNotFound/PageNotFound';
import Home from './handlers/home';
import About from './handlers/about';
export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
