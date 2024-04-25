import { thunk } from "redux-thunk";
import rootReducer from ".";
import { applyMiddleware, legacy_createStore } from "@reduxjs/toolkit";

// const store = configureStore(
//   { reducer: rootReducer },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
