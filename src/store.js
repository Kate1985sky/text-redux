import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import catalogReducer from "./features/catalog/catalogSlice";
import searchReducer from "./features/search/searchSlice";
import bucketReducer from "./features/bucket/bucketSlice";
import authReducer from "./features/auth/authSlice";

function saveItemsLocalStorage({ getState }) {
  return next => action => {
    const returnValue = next(action)

    if(action.type === "catalog/addItem") {
      localStorage.setItem("catalog", JSON.stringify(getState().catalog.items))
    }

    if(action.type === "catalog/fetchItems/fulfilled") {
      if(localStorage.getItem("catalog") === null) {
        localStorage.setItem("catalog", JSON.stringify(getState().catalog.items))
      }
    }

    return returnValue
  }
}

const rootReducer = combineReducers({
  modal: modalReducer,
  catalog: catalogReducer, 
  search: searchReducer,
  bucket: bucketReducer,
  auth: authReducer,
})


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveItemsLocalStorage)
});
export default store;
