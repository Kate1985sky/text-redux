import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inBucket: [],
  total: 0,
  amount: 0,
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addItemInBucket: (state, action) => {
      // const itemIdBucket = action.payload;
      const itemId = action.payload;
      state.inBucket = state.inBucket.filter((item) => item.id !== itemId);

      // state.inBucket = state.inBucket.concat(payload);

      
      
    },
  },
});

export const { addItemInBucket } = bucketSlice.actions;

export default bucketSlice.reducer;
