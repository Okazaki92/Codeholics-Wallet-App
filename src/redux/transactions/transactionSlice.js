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
      state.transactions = action.payload.lastTransactions;
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
      state.operations = action.payload;
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
  },
});

export const { resetTransactions, setTransactions, addCategories } =
  transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
