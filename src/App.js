import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './configs/routes/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './configs/redux';
import setupAxios from './configs/apis/setupAxios';
import axios from 'axios';

setupAxios(axios, store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
