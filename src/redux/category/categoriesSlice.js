import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesOperations";
const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  // reducers: {
  //   setCategories(state, action) {
  //     state.categories = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
