import { createSlice } from "@reduxjs/toolkit";
import uuidv4 from "uuid/v4";
const initialState = {
  tabs: [{ id: uuidv4(), name: "New tabs", chartValues: [] }],
  activeTab: 0,
};
const chartSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setChartType: (state, action) => {
      console.log(action);
      return { ...state, chartType: action.payload.data };
    },
    setChartValue: (state, action) => {
      return { ...state, chartValues: action.payload.chartValues };
    },
  },
});
export const { setChartType, setChartValue } = chartSlice.actions;
export default chartSlice.reducer;
