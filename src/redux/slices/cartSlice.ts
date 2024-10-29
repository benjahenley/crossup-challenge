import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/infrastructure/interfaces/product";
import { CartState } from "@/infrastructure/interfaces/cart";

const initialState: CartState = {
  items: [],
  itemAdded: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + 1,
          product.availableStock || 1000
        );
      } else {
        state.items.unshift({
          id: product.id,
          name: product.name,
          images: product.images,
          price: product.promotionalPrice || product.regularPrice,
          quantity: 1,
          maxStock: product.availableStock ?? 1000, // los productos que no son shooter no tienen limite de stock
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    resetItemAdded: (state) => {
      state.itemAdded = false;
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.items[itemIndex];

      if (item) {
        if (
          action.payload.quantity > 0 &&
          action.payload.quantity <= item.maxStock
        ) {
          item.quantity = action.payload.quantity;
        } else if (action.payload.quantity <= 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, resetItemAdded } =
  cartSlice.actions;
export default cartSlice.reducer;
