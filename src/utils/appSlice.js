import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggleMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isToggleMenu = !state.isToggleMenu;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
