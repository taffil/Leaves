import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import settingsSlice from "./slices/settingsSlice";
import { authApi } from "./api/authApi";

export const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
  [authApi.reducerPath]: authApi.reducer,
});
