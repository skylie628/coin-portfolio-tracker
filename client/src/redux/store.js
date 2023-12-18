import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../store/reducer/reducer.chart";
import variableReducer from "../store/reducer/reducer.variable";
import userReducer from "../store/reducer/reducer.user";
import tabReducer from "../store/reducer/reducer.tab";
import marketReducer from "../store/reducer/reducer.market";
import listenerMiddleware from "../middlewares/listenerMiddleware";
export const store = configureStore({
  reducer: {
    chart: chartReducer,
    variable: variableReducer,
    tab: tabReducer,
    user: userReducer,
    market: marketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
