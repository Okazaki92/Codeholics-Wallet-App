import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "./transactions/transactionSlice.js";
import { authReducer } from "./auth/authSlice";
import { statisticsReducer } from "./statistics/statisticsSlice.js";
import { transactionReducer } from "./transactions/transactionSlice.js";
import { categoriesReducer } from "./category/categoriesSlice.js";
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

import { globalReducer } from "./global/globalSlice";
import { financeReducer } from "./finance/financeSlice.js";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionReducer,
    statistics: statisticsReducer,
    global: globalReducer,
    finance: financeReducer,
    categories: categoriesReducer,
  },
  middleware: (getDeafualtMiddleware) =>
    getDeafualtMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
