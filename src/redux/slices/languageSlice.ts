// redux/slices/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  locale: string; // flexible to accommodate any language code
}

const initialState: LanguageState = {
  locale: "en", // default language
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.locale = action.payload;
      localStorage.setItem("locale", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
