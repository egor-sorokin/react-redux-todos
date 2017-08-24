import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={customHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
