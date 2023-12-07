import { setChartValues } from "../reducer/reducer.chart";
export const setChartValuesAction = () => (dispatch, getState) => {
  const chartValues = Object.values(
    getState().variable.selectedVariables || {}
  );
  dispatch(setChartValues({ chartValues }));
};
