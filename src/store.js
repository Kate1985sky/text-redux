import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import catalogReducer from "./features/catalog/catalogSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalReducer,
        catalog: catalogReducer,
        search: searchReducer,
    }
})