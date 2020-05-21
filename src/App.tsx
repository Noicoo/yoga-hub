import React from 'react';
import Example from './screens/Example';
import Signin from './screens/Signin';
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
          <Route path={routes.signinPath} component={Signin} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
