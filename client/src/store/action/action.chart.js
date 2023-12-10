import { setChartValues } from "../reducer/reducer.chart";
export const setChartValuesThunk = () => (dispatch, getState) => {
  const chartValues = Object.values(
    getState().variable.selectedVariables || {}
  );
  dispatch(setChartValues({ chartValues }));
};
