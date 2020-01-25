import { combineReducers, createStore } from "redux";

import Reducer from "./Reducer";

// const AppReducers = combineReducers({
//     Reducer,
// });

const rootReducer = (state, action) => {
    return Reducer(state, action);
};

export default rootReducer;
