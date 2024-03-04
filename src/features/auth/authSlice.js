import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("auth-status")
    ? JSON.parse(localStorage.getItem("auth-status")).isLogin
    : false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    logginError: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const { login, logout, logginError } = authSlice.actions;

export default authSlice.reducer;
