// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      // Optional: You can store this state in localStorage if needed
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      // Optional: Clear localStorage on logout
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
