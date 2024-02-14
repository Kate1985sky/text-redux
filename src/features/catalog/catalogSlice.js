import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const url = "https://course-api.com/react-useReducer-cart-project";


const initialState = {
  items: [],
  isLoading: true,
  
};

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// // load string from localStarage and convert into an Object
// // invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }


// const persistedState = localStorage.getItem('catalog') 
//                        ? JSON.parse(localStorage.getItem('catalog'))
//                        : []




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
  // persistedState,
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
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { addItem } = catalogSlice.actions;

export default catalogSlice.reducer;
