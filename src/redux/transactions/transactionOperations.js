import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/transactions");
      // console.log(response.data.data.transactions)
      return response.data.data.transactions;
      console.log("getTrans", response.data.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (trasaction, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/api/transactions", trasaction);
      console.log("addTrans", response);
      dispatch(getTransactions());
      toast(response.data.message);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

axios.defaults.baseURL =
  "https://codeholics-wallet-app-c8b1a2de9f25.herokuapp.com";

const fetchCategories = createAsyncThunk(
  "transactions/getCategories",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/transactions/categories");
      return data.data.categories;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const transactionsOperations = {
  getTransactions,
  addTransaction,
  fetchCategories,
};

export default transactionsOperations;
