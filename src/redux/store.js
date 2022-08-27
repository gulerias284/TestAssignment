import {  combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";
// const rootReducer=combineReducers(
//     userReducer
// )
const store = createStore(userReducer,applyMiddleware(thunk));

export default store;
