import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthSuccess, setAuthError } from "./authSlice";

axios.defaults.baseURL = "";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post("/users/login", credentials);
      const { token, user } = resp.data;

      thunkAPI.dispatch(setAuthSuccess({ token, user }));
      setAuthHeader(token);
      return await resp.data;
    } catch (err) {
      console.error(err.message);
      thunkAPI.dispatch(setAuthError("Login failed ⚠"));
      return thunkAPI.rejectWithValue("Login failed ⚠");
    }
  }
);
