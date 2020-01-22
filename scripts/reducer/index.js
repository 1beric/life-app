import { combineReducers, createStore } from 'redux';

import Reducer from './Reducer'

const AppReducers = combineReducers({
    Reducer,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

//let store = createStore(rootReducer);

export default rootReducer;