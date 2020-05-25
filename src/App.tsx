import React from 'react';
import Example from './screens/Example';
import SignIn from './screens/SignIn';
import { routes } from './router';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './router/';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={routes.homePagePath} component={Example} />
          <Route path={routes.signInPath} component={SignIn} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
