import { setChartValues, setChartType } from "../reducer/reducer.chart";
import { resetChartValues } from "../reducer/reducer.chart";
import { resetVariable } from "../reducer/reducer.variable";
import { resetTabs } from "../reducer/reducer.tab";
import { toast } from "react-toastify";
export const setChartValuesThunk = () => (dispatch, getState) => {
  const chartValues = Object.values(
    getState().variable.selectedVariables || {}
  );
  if (chartValues.length == 0) {
    toast.warn("Please select a variable");
  }
  dispatch(setChartValues({ chartValues }));
};
export const setChartTypeThunk = (value) => (dispatch) => {
  dispatch(resetChartValues());
  dispatch(resetVariable());
  dispatch(resetTabs());
  dispatch(setChartType(value));
};
