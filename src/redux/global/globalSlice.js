import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsModalLogoutOpen: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
    setIsModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
