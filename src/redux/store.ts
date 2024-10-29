import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import productPopupReducer from "./slices/productPopupSlice";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice"; // New theme slice

const store = configureStore({
  reducer: {
    language: languageReducer,
    productPopup: productPopupReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
