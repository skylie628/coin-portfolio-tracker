import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chartType: "pie",
};
const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartType: (state, action) => {
      console.log(action);
      return { ...state, chartType: action.payload.data };
    },
  },
});
export const { setChartType } = chartSlice.actions;
export default chartSlice.reducer;
