import React from 'react';
import { render } from 'react-dom';
import useQueries from 'history/lib/useQueries';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, match as matchRoutes } from 'react-router';
import { Provider } from 'react-redux';
import Promise from 'bluebird';
import { getDeferredData } from 'react-fetcher';

import createStore from 'store/createStore';
import routes from './routes';

const fetchDataForRoutes = ({ renderProps, dispatch }) => {
  const fetcherData = {
    path: renderProps.location.pathname,
    params: renderProps.params,
    dispatch
  };

  const components = renderProps.routes.map(route => route.component);

  getDeferredData(components, fetcherData).catch(Promise.CancellationError, () => {});
};

export default element => {
  const history = useQueries(createBrowserHistory)();
  const store = createStore();
  const { dispatch } = store;
  
  history.listen(location => {
    matchRoutes({ routes, location }, (routerError, redirectLocation, renderProps) => {
      fetchDataForRoutes({ renderProps, dispatch });
    });
  });

  //dispatch(localeChanged(locale));
  // dispatch(getUser());
  // dispatch(getRecommededJobs());

  render((
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  ), element);
};
