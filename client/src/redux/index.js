import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categories";
import petsReducer from "./reducers/pets";
import snackbarReducer from "./reducers/snackbar";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pets: petsReducer,
  categories: categoriesReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
