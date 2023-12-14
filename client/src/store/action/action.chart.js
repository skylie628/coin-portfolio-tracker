import { setChartValues } from "../reducer/reducer.chart";
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
