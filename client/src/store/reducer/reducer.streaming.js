import { createSlice } from "@reduxjs/toolkit";

const streamingSlice = createSlice({
  name: "streaming",
  initialState: {
    currency: {
      streamMode: false,
      currentValue: 0,
      symbol: null,
    },
  },
  reducers: {
    connectSocket: (state, action) => {
      state.currency.symbol = action.payload.data;
    },
    connectFailed: (state, action) => {
      state.currency.symbol = null;
      state.currency.streamMode = false;
    },
    connectSuccess: (state, action) => {
      state.currency.streamMode = true;
    },
    updateCurrentValue: (state, action) => {
      state.currency.currentValue = action.payload.data;
    },
    stopStreaming: (state, action) => {},
    reset: (state, action) => {
      state.currency.streamMode = false;
      state.currency.currentValue = 0;
      state.currency.symbol = null;
    },
  },
});

export const {
  updateCurrentValue,
  connectSocket,
  connectSuccess,
  connectFailed,
  stopStreaming,
  reset,
} = streamingSlice.actions;

export default streamingSlice.reducer;
