import React from 'react';
import Example from './screens/Example';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { routes } from './router';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './router/';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Grid container direction="column">
            <Grid item>
              <Navigation />
            </Grid>
            <Grid item>
              <Switch>
                <Route exact path={routes.homePagePath} component={Example} />
                <Route path={routes.signInPath} component={SignIn} />
                <Route path={routes.signUpPath} component={SignUp} />
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
