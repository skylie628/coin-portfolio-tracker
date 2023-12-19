import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
  data: null,
  streamingPrices: null,
  carousels: null,
};
const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarketData: (state, action) => {
      return { ...state, page: action.payload.page, data: action.payload.data };
    },
    setStreamingPrices: (state, action) => {
      return { ...state, streamingPrices: action.payload.data };
    },
    setCarousels: (state, action) => {
      state.carousels = action.payload.data;
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
  setCarousels,
  setMarketData,
  resetMarketData,
  setStreamingPrices,
  stopStreaming,
} = marketSlice.actions;
export default marketSlice.reducer;
