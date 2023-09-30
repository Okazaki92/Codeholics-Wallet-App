import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/transactions");
      return response.data.data.lastTransactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/api/transactions");
      dispatch(getTransactions());
      toast(response.data.message);
      return response.data.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const transactionsOperations = {
  getTransactions,
  addTransaction,
};

export default transactionsOperations;
