import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import settingsSlice from "./slices/settingsSlice";
import { authApi, requestsApi } from "./api";

export const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
  [authApi.reducerPath]: authApi.reducer,
  [requestsApi.reducerPath]: requestsApi.reducer,
});
