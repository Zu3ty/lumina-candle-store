import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import caramelImg from "../assets/caramel.jpg";
import candleBImg from "../assets/ocean.jpg";

/**
 * Async thunk to simulate fetching products from an API or server.
 * Uses a Promise with a timeout to mock network delay.
 * Returns a static array of product objects.
 */
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
            type: "signature", // Used for filtering products by type
          },
          {
            id: 2,
            name: "Candle B",
            price: 15,
            description: "A refreshing citrus candle.",
            imageUrl: candleBImg,
            category: "Citrus",
            stock: 5,
            type: "classic", // Used for filtering products by type
          },
        ]);
      }, 1000); // Simulated 1-second delay
    });
  }
);

const productsSlice = createSlice({
  name: "products", // Name of the slice
  initialState: {
    items: [], // Array to hold product data
    status: "idle", // Status of the fetch request: idle, loading, succeeded, failed
    error: null, // Holds error message if fetch fails
  },
  reducers: {
    // No synchronous reducers needed for now
  },
  // Handle async thunk lifecycle actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // When the fetch starts, set status to loading
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // When fetch succeeds, set status and update items with payload
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // When fetch fails, set status to failed and store error message
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
