import { createSlice } from "@reduxjs/toolkit";
import { fetchStatistics } from "./statisticsOperations";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistics: [],
    isLoading: false,
  },
  reducers: {
    addStatistics(state, { payload }) {
      state.statistics = payload;
    },
  },
  extraReducers: {
    [fetchStatistics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchStatistics.fulfilled]: (state, action) => {
      state.statistics = action.payload;
      state.isLoading = false;
    },
    [fetchStatistics.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { addStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;

