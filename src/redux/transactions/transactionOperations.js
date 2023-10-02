import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setTotalBalance } from "../../redux/finance/financeSlice";

const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/transactions");
      console.log(response.data.data.transactions)
      console.log("getTrans", response.data.data);
      return response.data.data.transactions;
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

export const deleteTransaction = createAsyncThunk(
  'tasks/deleteTransaction',
  async (transactionId, {thunkAPI, dispatch}) => {
    try {
      const response = await axios.delete(`/api/transactions/${transactionId}`);
      // console.log(response.data)

      const newTotalBalance = response.data.data.balance;
      dispatch(setTotalBalance(newTotalBalance));

      dispatch(getTransactions());

      return response.data;
     
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const SaveEditedTransactionFunction = async (
//   transactionId,
//   editedTransaction
// ) => {
//   try {
//     const response = await axios.patch(
//       `/api/transactions/${transactionId}`,
//       editedTransaction
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const saveEditedTransactionAsync = createAsyncThunk(
//   "transactions/saveEditedTransaction",
//   async ({ transactionId, editedTransaction }) => {
//     try {
//       const response = await SaveEditedTransactionFunction(
//         transactionId,
//         editedTransaction
//       );
//       console.log(response.data);
//       return { transactionId, editedTransaction: response.data };
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const updateTransactionAsync = createAsyncThunk(
  "tasks/updateTransaction",
  async ({ transactionId, editedTransaction }, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${transactionId}`,
        editedTransaction
      );
      console.log(response)
      console.log(editedTransaction);
 const updateTransaction = response.data.data.data;
 dispatch(setTotalBalance(updateTransaction));
 dispatch(getTransactions());
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
  // saveEditedTransactionAsync,
  updateTransactionAsync
};

export default transactionsOperations;
