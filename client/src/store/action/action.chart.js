import { setChartValue } from "../reducer/reducer.chart";
export const setChartValuesAction = () => (dispatch, getState) => {
  const chartValues = Object.values(
    getState().variable.selectedVariables || {}
  );
  dispatch(setChartValue({ chartValues }));
};
