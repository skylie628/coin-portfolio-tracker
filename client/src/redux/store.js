import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../store/reducer/reducer.chart";
import variableReducer from "../store/reducer/reducer.variable";
export const store = configureStore({
  reducer: {
    chart: chartReducer,
    variable: variableReducer,
  },
});
