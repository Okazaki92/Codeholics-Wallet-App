import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setTotalBalance } from "../../redux/finance/financeSlice";

axios.defaults.baseURL = "https://codeholics-wallet-app-backend.vercel.app/";

const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/transactions?page=${page}`);
      console.log("getTrans", response);
      const data = response.data.data;
      return data;
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

      const newTotalBalance = response.data.data.balance;
      dispatch(setTotalBalance(newTotalBalance));

      await dispatch(getTransactions());
      toast(response.data.message);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchCategories = createAsyncThunk(
  "transactions/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/transactions/categories");
      return data.data.categories;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "tasks/deleteTransaction",
  async (transactionId, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.delete(`/api/transactions/${transactionId}`);
      // console.log(response.data)

      const newTotalBalance = response.data.data.balance;
      dispatch(setTotalBalance(newTotalBalance));

      await dispatch(getTransactions());

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "tasks/deleteTransaction",
  async (data, { thunkAPI, dispatch }) => {
    const { id, body } = data;
    try {
      const response = await axios.patch(`/api/transactions/${id}`, body);
      console.log("API", response.data);

      const newTotalBalance = response.data.data.balance;
      dispatch(setTotalBalance(newTotalBalance));

      await dispatch(getTransactions());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const transactionsOperations = {
  getTransactions,
  addTransaction,
  fetchCategories,
  deleteTransaction,
  updateTransaction,
};

export default transactionsOperations;
