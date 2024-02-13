import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inBucket: false,
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addItemInBucket: (state) => {
      state.inBucket = true;
    },
  },
});

export const { addItemInBucket } = bucketSlice.actions;

export default bucketSlice.reducer;
