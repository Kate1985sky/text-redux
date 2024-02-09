import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: [],
    price: [],
    
}

const newCartSlice = createSlice({
    name: "newCart",
    initialState,
    reducers: {}
})

export const {} = newCartSlice.actions;

export default newCartSlice.reducer;