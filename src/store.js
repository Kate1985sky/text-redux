import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import catalogReducer from "./features/catalog/catalogSlice";
import searchReducer from "./features/search/searchSlice";
import bucketReducer from "./features/bucket/bucketSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduser = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  catalog: catalogReducer, 
  search: searchReducer,
  bucket: bucketReducer,
})


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
