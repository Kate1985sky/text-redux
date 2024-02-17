import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  items: [],
  
  // items: JSON.parse(localStorage.getItem("catalog")),
  isLoading: true,
};

export const fetchItems = createAsyncThunk(
  "catalog/fetchItems",
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something");
    }
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        // localStorage.setItem("catalog", JSON.stringify(action.payload));
      })
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addItem } = catalogSlice.actions;

export default catalogSlice.reducer;
