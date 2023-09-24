import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isModalAddTransactionOpen: false,
  };


  export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      setIsModalAddTransactionOpen: (state, action) => {
        state.isModalAddTransactionOpen = action.payload;
      },
    },
  
  });

  export const {setIsModalAddTransactionOpen} = globalSlice.actions;
  
 
  export const globalReducer =  globalSlice.reducer;