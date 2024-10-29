// redux/productPopupSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductPopupState {
  selectedProductId: string | null;
  isPopupOpen: boolean;
}

const initialState: ProductPopupState = {
  selectedProductId: null,
  isPopupOpen: false,
};

const productPopupSlice = createSlice({
  name: "productPopup",
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<string>) {
      state.selectedProductId = action.payload;
      state.isPopupOpen = true;
    },
    closePopup(state) {
      if (state.isPopupOpen) {
        state.isPopupOpen = false;
      }
    },
  },
});

export const { openPopup, closePopup } = productPopupSlice.actions;
export default productPopupSlice.reducer;
