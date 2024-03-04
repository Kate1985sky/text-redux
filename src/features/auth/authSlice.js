import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLogin: localStorage.getItem("auth-status")
    ? JSON.parse(localStorage.getItem("auth-status")).isLogin
    : false,
  error: "take your time and try again",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      console.log("alert", 1);
    },
    logout: (state) => {
      state.isLogin = false;
    },
    logginError: (state, action) => {
      console.log("alert-2", action.payload.error);
    },
  },
});

export const { login, logout, logginError } = authSlice.actions;

export default authSlice.reducer;
