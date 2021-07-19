import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import stepReducer from "./reducers";

const rootReducer = combineReducers({
    stepReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))