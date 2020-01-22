import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { View } from "react-native";
import { persistor, store } from "../store";
import AppNavigator from "../navigation/AppNavigator";
// import reducer from "../reducer";

//const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<View />} persistor={persistor}>
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
