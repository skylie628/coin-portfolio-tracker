import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  transactions: [],
};
const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
      return state;
    },
    loadTransaction: (state, action) => ({
      isLoading: false,
      ...action.payload.data,
    }),
    loadFail: (state, action) => {
      state.isLoading = false;
      return state;
    },
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
  startLoading,
  loadFail,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} = transactionSlice.actions;
export default transactionSlice.reducer;
