import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newCart: [],
};

const newCartSlice = createSlice({
  name: "newCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.newCart = state.newCart.concat(action.payload);
    },
  },
});

export const { addCart } = newCartSlice.actions;

export default newCartSlice.reducer;
