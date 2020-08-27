import 'react-native-gesture-handler';

import React from 'react';
import AppNavigation from './src/nav/AppNavigation';
import { Provider } from 'react-redux';
import {AppStore} from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <>
      <Provider store={AppStore}>
        <AppNavigation />
      </Provider>
    </>
  );
};


export default App;
