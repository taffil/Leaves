import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "settings"],
};

const customMiddleware = (getDefaultMiddleware: GetDefaultMiddleware) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  // for (const slice of index) {
  //   middleware.push(slice.middleware);
  // }
  return middleware;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customMiddleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
