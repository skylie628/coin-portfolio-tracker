import axiosConfig from "../../lib/axios/axiosConfig";
import { genMockData } from "../../utils/genMockData";
import {
  fetchVariables,
  fetchVariablesSuccess,
  fetchVariablesFail,
  setFilter,
  toggle,
} from "../reducer/reducer.variable";
const apiFetchVariables = async () => {
  return axiosConfig.get("/variable/variables");
};
export const fetchVariablesAction = () => async (dispatch) => {
  dispatch(fetchVariables());
  apiFetchVariables()
    .then((rs) => dispatch(fetchVariablesSuccess(rs.data)))
    .catch((err) => dispatch(fetchVariablesFail(err)));
};

export const setFilterVariabels = (payload) => (dispatch, getState) => {
  const { fetchedVariables, filterCriteria } = getState().variable;
  let queriedVariables = fetchedVariables;
  switch (payload.type) {
    case "type":
      payload.value !== "all" &&
        (queriedVariables = fetchedVariables.filter(
          (variable) => variable.type == payload.value
        ));
      break;
    case "keyword":
      queriedVariables = fetchedVariables.filter((variable) =>
        variable.full_name
          .toLowerCase()
          .includes(payload.value.toLowerCase().trim())
      );
      break;
  }
  dispatch(
    setFilter({
      queriedVariables,
      filterCriteria: { ...filterCriteria, [payload.type]: payload.value },
    })
  );
};

export const toggleVariable = (payload) => (dispatch, getState) => {
  const { chartType } = getState().chart;
  const { selectedVariables } = getState().variable;
  const { variable } = payload;
  const { id } = variable;
  let newSelectedVariables = {};
  if (selectedVariables[id]) {
    newSelectedVariables = { ...selectedVariables };
    delete newSelectedVariables[id];
  } else {
    const mockData = genMockData(variable, chartType);
    newSelectedVariables = {
      ...selectedVariables,
      [id]: mockData,
    };
  }
  dispatch(toggle({ selectedVariables: newSelectedVariables }));
};
