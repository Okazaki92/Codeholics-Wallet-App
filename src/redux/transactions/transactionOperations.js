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
