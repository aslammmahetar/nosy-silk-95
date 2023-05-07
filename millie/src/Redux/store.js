import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as classesReducer } from "./ClassesReducer/reducer";
import { reducer as authreducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
    classesReducer,
    authreducer
})

export const store = legacy_createStore(reducer, applyMiddleware(thunk))