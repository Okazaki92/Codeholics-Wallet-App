import { createSlice } from "@reduxjs/toolkit";
import transactionsOperations from "./transactionOperations.js";

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetTransactions(state) {
      state.transactions = [];
    },
    setTransactions(state, action) {
      state.transactions = action.payload.lastTransactions;
    },
  },
  extraReducers: {
    [transactionsOperations.getTransactions.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload;
      state.isLoading = false;
    },
    [transactionsOperations.getTransactions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    [transactionsOperations.addTransaction.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [transactionsOperations.addTransaction.fulfilled]: (state) => {
      state.isLoading = false;
    },

    [transactionsOperations.addTransaction.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { resetTransactions, setTransactions } = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
