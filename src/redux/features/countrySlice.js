import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    selectedCountry: null,
  },
  reducers: {
    setCountry: (state, action) => {
      // Set the selected country
      state.selectedCountry = action.payload;
    },
    clearCountry: (state) => {
      // Clear the selected country
      state.selectedCountry = null;
    },
  },
});

export const { setCountry, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;
