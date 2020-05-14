import React from 'react';
import Example from './screens/Example';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
};

export default App;
