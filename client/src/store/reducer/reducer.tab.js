import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();
const initialState = {
  tabs: {
    [id]: { id, name: "New tabs", chartValues: [], selectedVariables: {} },
  },
  activeTab: id,
};
const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    addTab: (state, action) => {
      return { ...action.payload };
    },
    switchTab: (state, action) => {
      return { ...action.payload };
    },
  },
});
export const { addTab, switchTab } = tabSlice.actions;
export default tabSlice.reducer;
