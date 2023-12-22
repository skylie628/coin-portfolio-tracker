import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  transactions: [],
};
const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    loadTransaction: (state, action) => action.payload.data,
    addTransaction: (state, action) => {
      if (!action.payload.data) {
        return;
      }
      state.transactions.push(action.payload.data);
      return state;
    },
    deleteTransaction: (state, action) => {
      const { transactionId } = action.payload.data;
      if (!transactionId) {
        return;
      }
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== transactionId
      );
      return state;
    },
    updateTransaction: (state, action) => action.payload.data,
  },
});
export const {
  loadTransaction,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} = transactionSlice.actions;
export default transactionSlice.reducer;
