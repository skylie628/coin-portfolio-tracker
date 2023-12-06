import axiosConfig from "../../lib/axios/axiosConfig";
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
  const { selectedVariables } = getState().variable;
  const { id } = payload;
  let newSelectedVariables = {};
  if (selectedVariables[id]) {
    const { id, ...SelectedVariablesWithoutId } = selectedVariables;
    newSelectedVariables = SelectedVariablesWithoutId;
  } else {
    newSelectedVariables = {
      ...selectedVariables,
      id: { color: Math.floor(Math.random() * 16777215).toString(16) },
    };
  }
  dispatch(toggle({ selectedVariables: newSelectedVariables }));
};
