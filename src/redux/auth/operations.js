import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthSuccess, setAuthError } from "./authSlice";

axios.defaults.baseURL =
  "https://codeholics-wallet-app-c8b1a2de9f25.herokuapp.com/";

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/users/register", credentials);
      console.log(res);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post("/api/users/login", credentials);
      console.log("login", resp.data.data);
      const { token, user } = resp.data.data;
      if (resp.status === 200) {
        thunkAPI.dispatch(setAuthSuccess({ token, user }));
        setAuthHeader(token);
        return await resp.data.data;
      } else {
        console.error("Logowanie nie powiodło się");
        thunkAPI.dispatch(setAuthError("Login failed ⚠"));
        return thunkAPI.rejectWithValue("Login failed ⚠");
      }
    } catch (err) {
      console.error(err.message);
      thunkAPI.dispatch(setAuthError("Login failed ⚠"));
      return thunkAPI.rejectWithValue("Login failed ⚠");
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/api/users/logout");
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/users/current");
      console.log("refresh", res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
