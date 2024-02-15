import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inBucket: [],
  total: 0,
  amount: 0,
  isLoading: true,
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addItemInBucket: (state, action) => {},
    clearCart: (state) => {
      state.inBucket = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.inBucket = state.inBucket.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItemBuckit = state.inBucket.find(
        (item) => item.id === payload.id
      );
      cartItemBuckit.amount = cartItemBuckit.amount + 1;
    },
    dicrease: (state, { payload }) => {
      const cartItemBuckit = state.inBucket.find(
        (item) => item.id === payload.id
      );
      cartItemBuckit.amount = cartItemBuckit.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.inBucket.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addItemInBucket, removeItem, clearCart, increase, dicrease, calculateTotals } = bucketSlice.actions;

export default bucketSlice.reducer;
