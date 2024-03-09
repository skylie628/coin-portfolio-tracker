import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  portid: null,
  symbol: null,
  img: null,
  holding: 0,
  balance: 0,
  capital: 0,
  averageNetCost: 0,
  totalProceed: 0,
  totalPnl: 0,
  pnlPercentage: 0,
  transactions: [],
};
const investOptionSlice = createSlice({
  name: "investOption",
  initialState,
  reducers: {
    loadInvestOption: (state, action) => action.payload.data,
    deleteInvestOption: (state, action) => {
      const { coinId } = action.payload.data;
      if (!coinId) {
        return;
      }
      state.investOptions = state.investOptions.filter(
        (portOption) => portOption.coinId !== coinId
      );
      return state;
    },
    addTransaction: (state, action) => action.payload.data,
    removeTransaction: (state, action) => action.payload.data,
    updateInvestOption: (state, action) => action.payload.data,
  },
});
export const {
  loadInvestOption,
  addInvestOption,
  addTransaction,
  removeTransaction,
  deleteInvestOption,
  updateInvestOption,
} = investOptionSlice.actions;
export default investOptionSlice.reducer;
