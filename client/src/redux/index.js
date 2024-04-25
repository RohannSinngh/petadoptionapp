import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/reducer";
import petsReducer from "./pets/reducer";
import { authReducer } from "./auth/reducer";
import snackbarReducer from "./snackbar/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pets: petsReducer,
  categories: categoriesReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
