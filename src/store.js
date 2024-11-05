import { configureStore } from "@reduxjs/toolkit";
import products from "./product-slice/index";
export const store = configureStore({
  reducer: {
    products,
  },
});
