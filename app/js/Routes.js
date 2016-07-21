'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import Main                        from './components/main/main.react';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import NotFoundPage                from './pages/NotFoundPage';
import makeStore                   from './stores/mainStore';
import { Provider }                from 'react-redux';

export const store = makeStore();
console.log("what's in the store?", store, store.getState());

export default (
    <Provider store={store}>
      <Router history={CreateBrowserHistory()}>
        <Route path="/" component={Main}>

          <IndexRoute component={HomePage} />

          <Route path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />

          <Route path="*" component={NotFoundPage} />

        </Route>
      </Router>
    </Provider>
);
