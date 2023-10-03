import { createSlice } from "@reduxjs/toolkit";
import transactionsOperations from "./transactionOperations.js";
import fetchCategories from "./transactionOperations.js";

const initialState = {
  operations: [],
  categories: [],
  isLoading: false,
  error: null,
  income: [],
  expense: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetTransactions(state) {
      state.transactions = [];
    },
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    addCategories(state, { payload }) {
      state.categories = payload;
    },
  },
  extraReducers: {
    [transactionsOperations.getTransactions.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [transactionsOperations.getTransactions.fulfilled]: (state, action) => {
      state.operations = action.payload.transactions;
      state.isLoading = false;
    },
    [transactionsOperations.getTransactions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [transactionsOperations.addTransaction.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [transactionsOperations.addTransaction.fulfilled]: (state) => {
      state.isLoading = false;
    },

    [transactionsOperations.addTransaction.rejected]: (state) => {
      state.error = "error";
      state.isLoading = false;
    },
    [fetchCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.income = [...payload.income];
      state.expense = [...payload.expense];
      state.isLoading = false;
    },
    [fetchCategories.rejected]: (state) => {
      state.isLoading = false;
    },

    [transactionsOperations.deleteTransaction.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [transactionsOperations.deleteTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.operations.findIndex(
        (transaction) => transaction.id === action.payload._id
      );
      state.operations.splice(index, 1);
    },

    [transactionsOperations.deleteTransaction.rejected]: (state) => {
      state.error = "error";
      state.isLoading = false;
    },

    [transactionsOperations.updateTransaction.pending]: (state) => {
      state.isLoading = true;
    },

    [transactionsOperations.updateTransaction.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = null;
    },

    [transactionsOperations.updateTransaction.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  resetTransactions,
  setTransactions,
  addCategories,
  deleteTransaction,
  updateTransaction,
} = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
