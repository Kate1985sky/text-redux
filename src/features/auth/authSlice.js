import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.isLogin = true;
      state.users = state.users.concat(action.payload);
      
    },
    logout: (state) => {
      state.isLogin = false;
      state.users = [];
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
