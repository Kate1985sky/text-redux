import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoad: false,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchItem : (state, action) => {
            const showItem = action.payload;
            console.log(showItem);
            state.isLoad = true;
        },
        
    }
})


export const {searchItem} = searchSlice.actions;

export default searchSlice.reducer;