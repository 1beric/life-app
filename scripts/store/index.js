// scripts/store/index.js

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import ReduxPersistExpoSecureStore from "redux-persist-expo-securestore";
// import createSecureStore from "redux-persist-expo-securestore";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducer"; // the value from combineReducers

const secureStorage = ReduxPersistExpoSecureStore(); // createSecureStore();

const persistConfig = {
    key: "root",
    storage: secureStorage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
