import { createSlice } from "@reduxjs/toolkit";
import transactionsOperations from "./transactionOperations.js";

const initialState = {
  operations: [],
  totalBalance: 0,
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
      state.totalBalance = action.payload.user.balance;
    },
    setBalance(state, { payload }) {
      state.totalBalance = payload;
    },
  },
  extraReducers: {
    [transactionsOperations.getTransactions.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled]: (state, action) => {
      state.operations = action.payload;
      // state.totalBalance =
      //   action.payload.length === 0 ? 0 : action.payload[0].balance;
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

    [transactionsOperations.addTransaction.fulfilled]: (state, action) => {
      state.totalBalance = action.payload.balance;
      state.isLoading = false;
    },

    [transactionsOperations.addTransaction.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
      state.isLoading = false;
    },
  },
});

export  const { resetTransactions, setTransactions, setBalance } =
  transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
