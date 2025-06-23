import { createSlice } from "@reduxjs/toolkit";

// Initial state for user authentication and profile info
const initialState = {
  username: "", // Stores the username of the logged-in user
  email: "", // Stores the email of the logged-in user
  loggedIn: false, // Boolean flag indicating if the user is logged in
};

const userSlice = createSlice({
  name: "user", // Slice name used in Redux store
  initialState, // Initial state defined above
  reducers: {
    // Action to log in a user and set their username and email
    login(state, action) {
      const { username, email } = action.payload;
      state.username = username; // Set username in state
      state.email = email; // Set email in state
      state.loggedIn = true; // Mark user as logged in
    },
    // Action to log out a user and clear their info
    logout(state) {
      state.username = ""; // Clear username
      state.email = ""; // Clear email
      state.loggedIn = false; // Mark user as logged out
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
