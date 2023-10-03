import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalUpdateOpen: false,
  isModalId: "",
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
    setIsModalUpdateOpen: (state, action) => {
      state.isModalUpdateOpen = action.payload;
      console.log("testowy", action.payload);
    },
  },
});

export const {
  setIsLoading,
  setIsModalLogoutOpen,
  setIsModalAddTransactionOpen,
  setIsModalUpdateOpen,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
