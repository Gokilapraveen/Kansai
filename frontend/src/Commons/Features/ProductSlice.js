//import {createSlide} from "@reduxjs/toolkit";
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    items: [],
    status: null,
  };
  
  export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/products"
        );
        console.log( "Respoinse",response.data)
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
      [productsFetch.pending]: (state, action) => {
        state.status = "pending";
      },
      [productsFetch.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
      },
      [productsFetch.rejected]: (state, action) => {
        state.status = "rejected";
      },
    },
  });
  
export default ProductSlice.reducer;