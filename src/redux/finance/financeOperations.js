import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setTotalBalance } from "./financeSlice";

const getUserBalance = createAsyncThunk(
  "finance/getUserBalance",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("/api/users/current");
      const balance = response.data.data.balance;
      dispatch(setTotalBalance(balance));
      return balance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const financeOperations = {
  getUserBalance,
};

export default financeOperations;
