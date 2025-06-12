import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
      state.loggedIn = true;
    },
    logout(state) {
      state.username = "";
      state.email = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
