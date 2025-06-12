import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import caramelImg from "../assets/caramel.jpg";
import candleBImg from "../assets/ocean.jpg";

// Async thunk to simulate fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Candle A",
            price: 10,
            description: "A soothing lavender scented candle.",
            imageUrl: caramelImg,
            category: "Lavender",
            stock: 10,
            type: "signature", // 👈 used for filtering
          },
          {
            id: 2,
            name: "Candle B",
            price: 15,
            description: "A refreshing citrus candle.",
            imageUrl: candleBImg,
            category: "Citrus",
            stock: 5,
            type: "classic", // 👈 used for filtering
          },
        ]);
      }, 1000);
    });
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
