import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/reducer";
import petsReducer from "./pets/reducer";
import { authReducer } from "./auth/reducer";
import snackbarReducer from "./snackbar/reducer";
import adoptionReducer from "./adoption/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pets: petsReducer,
  categories: categoriesReducer,
  snackbar: snackbarReducer,
  adoption: adoptionReducer,
});

export default rootReducer;
