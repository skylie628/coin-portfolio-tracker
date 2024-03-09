import { createSlice } from "@reduxjs/toolkit";

const streamingSlice = createSlice({
  name: "portfolio",
  initialState: {
    data: {
      id: null,
      userid: null,
      balance: 0,
      totalPnl: 0,
      pnl_percentage: 0,
      investid: [],
    },
  },
  reducers: {
    loadPortfolio: (state, action) => {
      console.log("reducer la", action.payload.data);
      const { _id, userid, balance, totalPnl, investid, pnl_percentage } =
        action.payload.data;
      state.data.id = _id;
      state.data.userid = userid;
      state.data.balance = balance || 0;
      state.data.totalPnl = totalPnl || 0;
      state.data.investid = investid;
      state.data.pnl_percentage = pnl_percentage || 0;
    },
    addInvestOption: (state, action) => {
      if (!action.payload.data) {
        return;
      }
      state.data.investid.push(action.payload.data);
      return state;
    },
  },
});

export const { loadPortfolio, addInvestOption } = streamingSlice.actions;

export default streamingSlice.reducer;
