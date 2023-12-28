import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  streamingPrices: null,
};
const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    startStreaming: (state, action) => {
      return { ...state };
    },
    setStreamingPrices: (state, action) => {
      return { ...state, streamingPrices: action.payload.data };
    },
    stopStreaming: (state, action) => {
      return { ...state };
    },
  },
});
export const { setStreamingPrices, startStreaming, stopStreaming } =
  marketSlice.actions;
export default marketSlice.reducer;
