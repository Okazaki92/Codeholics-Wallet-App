import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthSuccess, setAuthError } from "./authSlice";

axios.defaults.baseURL =
  "https://codeholics-wallet-app-c8b1a2de9f25.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/users/signup", credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
