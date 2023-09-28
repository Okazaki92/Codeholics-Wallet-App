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
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStatistics.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addStatistics } = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;

