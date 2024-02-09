import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectItem: [],
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchItem : (state, action) => {
            const itemId = action.payload;
            const showItem = state.selectItem.find((item) => item.id === itemId); 
        },
    }
})

export const {showItem, searchItem} = searchSlice.actions;

export default searchSlice.reducer;