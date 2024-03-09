import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isError: false,
  revenue: 0,
  balance: 0,
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
    updateInvestOption: (state, action) => action.payload.data,
  },
});
export const {
  loadInvestOption,
  addInvestOption,
  deleteInvestOption,
  updateInvestOption,
} = investOptionSlice.actions;
export default investOptionSlice.reducer;
