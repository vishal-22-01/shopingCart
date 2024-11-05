import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductThunk = createAsyncThunk(
  "products/getAllProductThunk",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res?.data;
    console.log("data", data);

    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductThunk.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export default productSlice.reducer;
