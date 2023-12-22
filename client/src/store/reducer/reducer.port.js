import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  totalBalance: 0,
  totalRevenue: 0,
  coins: {},
  portId: null,
};
const tabSlice = createSlice({
  name: "port",
  initialState,
  reducers: {
    loadPort: (state, action) => state,
    addCoin: (state, action) => {
      const { coinId, signal, value, color } = action.payload;
      state.portOption[coinId] = { signal, value, color };
      return state;
    },
    removeCoin: (state, action) => {
      const { coinId } = action.payload;
      delete state.portOptions[coinId];
      return state;
    },
  },
});
export const { loadPort, addCoin, removeCoin } = tabSlice.actions;
export default tabSlice.reducer;
