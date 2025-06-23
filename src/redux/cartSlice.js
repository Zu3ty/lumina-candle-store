import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart slice
const initialState = {
  items: [], // Array to hold cart items, each with { id, name, price, quantity }
  totalAmount: 0, // Total price amount of all items in the cart
};

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state set above

  // Reducers define how state changes in response to actions
  reducers: {
    /**
     * Adds an item to the cart.
     * If item exists, increments quantity.
     * Otherwise, adds new item with quantity 1.
     * Also updates totalAmount accordingly.
     * @param {object} state - current state of cart
     * @param {object} action - Redux action, payload contains new item
     */
    addItem(state, action) {
      const newItem = action.payload; // expected to have { id, name, price }
      // Check if item is already in cart
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Increment quantity if item exists
        existingItem.quantity++;
      } else {
        // Add new item with initial quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
      // Add price to totalAmount
      state.totalAmount += newItem.price;
    },

    /**
     * Removes an item from the cart.
     * If item's quantity is more than 1, decrements quantity.
     * Otherwise, removes item from cart completely.
     * Updates totalAmount accordingly.
     * @param {object} state - current state of cart
     * @param {object} action - Redux action, payload is item id to remove
     */
    removeItem(state, action) {
      const id = action.payload;
      // Find the item to remove
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return; // If item doesn't exist, do nothing

      // Subtract the item's price from total amount
      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        // Remove the item entirely if quantity is 1
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // Decrement the quantity by 1
        existingItem.quantity--;
      }
    },

    /**
     * Clears the entire cart, resetting items and total amount.
     * @param {object} state - current state of cart
     */
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
