import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
  data: null,
  streamingPrices: null,
};
const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarketData: (state, action) => {
      return { page: action.payload.page, data: action.payload.data };
    },
    setStreamingPrices: (state, action) => {
      return { ...state, streamingPrices: action.payload.data };
    },
    stopStreaming: (state, action) => {
      return { ...state };
    },
    resetMarketData: (state, action) => {
      return { ...state, data: [] };
    },
  },
});
export const {
  setMarketData,
  resetMarketData,
  setStreamingPrices,
  stopStreaming,
} = marketSlice.actions;
export default marketSlice.reducer;
