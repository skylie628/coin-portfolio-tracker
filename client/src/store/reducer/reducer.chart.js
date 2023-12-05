import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chartType: "pie",
  startTime: "",
  endTime: "",
  step: "", // daily, weekly, monthly
  category: [], // x-axis column names
  tabs: [[{ itemName: "something", data: ["something", "something"] }]],
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
