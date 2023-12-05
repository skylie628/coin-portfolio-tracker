import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../store/reducer/reducer.chart";
export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});
