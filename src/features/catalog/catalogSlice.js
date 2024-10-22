import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  items: localStorage.getItem("catalog")
    ? JSON.parse(localStorage.getItem("catalog"))
    : [],
  isLoading: true,
};

export const fetchItems = createAsyncThunk(
  "catalog/fetchItems",
  async (_, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    if (getState().catalog.items.length > 0) {
      return rejectWithValue("something");
    }
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      console.error(
        "Error fetching items: ",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.message || "Something went wrong");
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
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Fetch rejected: ", action.payload);
      });
  },
});

export const { addItem } = catalogSlice.actions;

export default catalogSlice.reducer;
