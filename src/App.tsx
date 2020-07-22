import React from 'react';
import Example from './screens/Example';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AddVideo from './screens/AddVideo';
import { routes } from './router';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { persistor } from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/styles';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
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
                  <Route path={routes.addVideoPath} component={AddVideo} />
                </Switch>
              </Grid>
            </Grid>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
