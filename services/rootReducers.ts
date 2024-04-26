import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import settingsSlice from "./slices/settingsSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
});
