import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setTotalBalance(state, action) {
      state.totalBalance = action.payload;
    },
  },
});

export const { setTotalBalance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
