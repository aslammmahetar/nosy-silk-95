import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as classesReducer } from "./reducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
    classesReducer
})

export const store = legacy_createStore(reducer, applyMiddleware(thunk))