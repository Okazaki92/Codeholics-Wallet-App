import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const initialState = {
  user: { user: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isAuth = true;
    },
    setAuthError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });

    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setAuthSuccess, setAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
