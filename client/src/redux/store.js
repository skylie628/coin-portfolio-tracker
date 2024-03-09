import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../store/reducer/reducer.chart";
import variableReducer from "../store/reducer/reducer.variable";
import userReducer from "../store/reducer/reducer.user";
import tabReducer from "../store/reducer/reducer.tab";
import marketReducer from "../store/reducer/reducer.market";
import streamingReducer from "../store/reducer/reducer.streaming";
import portfolioReducer from "../store/reducer/reducer.portfolio";
import investOptionReducer from "../store/reducer/reducer.investOption";
import listenerMiddleware from "../middlewares/listenerMiddleware";

export const store = configureStore({
  reducer: {
    chart: chartReducer,
    variable: variableReducer,
    tab: tabReducer,
    user: userReducer,
    market: marketReducer,
    streaming: streamingReducer,
    portfolio: portfolioReducer,
    investOption: investOptionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
