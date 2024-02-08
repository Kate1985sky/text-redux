import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows: {},
    selectItemOrShow: {},
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchItem : (state) => {
            
        },
    }
})

export const {searchItem} = searchSlice.actions;

export default searchSlice.reducer;