import React, { Component } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../store';
import AppNavigator from "../navigation/AppNavigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        // the loading and persistor props are both required!
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}