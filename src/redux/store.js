import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/slice";
import authReducer from "./auth/slice";
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
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  whitelist: ["token"],
  storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
