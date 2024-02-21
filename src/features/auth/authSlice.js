import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
  })


  export const {} = authSlice.actions;
  

  export default authSlice.reducer;