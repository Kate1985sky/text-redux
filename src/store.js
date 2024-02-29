import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import catalogReducer from "./features/catalog/catalogSlice";
import searchReducer from "./features/search/searchSlice";
import bucketReducer from "./features/bucket/bucketSlice";
import authReducer from "./features/auth/authSlice";
import {saveItemsLocalStorage} from "./features/catalog/catalogMiddleware";
import {authStatusController} from "./features/auth/authMiddleware";



const rootReducer = combineReducers({
  modal: modalReducer,
  catalog: catalogReducer, 
  search: searchReducer,
  bucket: bucketReducer,
  auth: authReducer,
})


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveItemsLocalStorage, authStatusController)
});
export default store;
