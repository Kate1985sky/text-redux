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
    addItemInBucket: (state, action) => {
      const alreadyInBucketIndex = state.inBucket.findIndex((item) => item.id === action.payload[0].id
      );

      if(alreadyInBucketIndex !== -1) {
        state.inBucket[alreadyInBucketIndex].amount += 1;
      } else {
        state.inBucket = state.inBucket.concat(action.payload);
      }
      
    },
    clearCart: (state) => {
      state.inBucket = [];
      state.amount = 0;
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
      cartItemBuckit.total = cartItemBuckit.total + cartItemBuckit.price;
    },
    dicrease: (state, { payload }) => {
      const cartItemBuckit = state.inBucket.find(
        (item) => item.id === payload.id
      );
      cartItemBuckit.amount = cartItemBuckit.amount - 1;
      cartItemBuckit.total = cartItemBuckit.total - cartItemBuckit.price;
    },
  },
});

export const { addItemInBucket, removeItem, clearCart, increase, dicrease } =
  bucketSlice.actions;

export default bucketSlice.reducer;
