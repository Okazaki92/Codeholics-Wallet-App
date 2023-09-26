import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice }   from "./transactions/transactionSlice.js";

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
  
});
