import axiosConfig from "@/lib/axios";
import { genMockData } from "@/utils/genMockData";
import {
  fetchVariables,
  fetchVariablesSuccess,
  fetchVariablesFail,
  setFilter,
  toggle,
} from "../reducer/reducer.variable";
import getPortfolioService from "../../features/portfolio/api/getPortfolio";

export const fetchVariablesThunk =
  ({ userId }) =>
  async (dispatch) => {
    dispatch(fetchVariables());
    getPortfolioService({ userId })
      .then((rs) => {
        const variableData =
          rs?.investid?.map((invest) => ({
            id: invest._id,
            type: "BLOCKCHAIN",
            unit: "USD",
            full_name: invest.symbol.toUpperCase(),
            value: invest.balance,
          })) || [];
        dispatch(fetchVariablesSuccess({ data: variableData }));
      })
      .catch((err) => dispatch(fetchVariablesFail(err)));
  };

export const setFilterThunk = (payload) => (dispatch, getState) => {
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

export const toggleVariableThunk = (payload) => (dispatch, getState) => {
  const { chartType } = getState().chart;
  const { selectedVariables } = getState().variable;
  const { variable } = payload;
  const { id } = variable;
  let newSelectedVariables = JSON.parse(JSON.stringify(selectedVariables));
  if (selectedVariables[id]) {
    delete newSelectedVariables[id];
  } else {
    const mockData = genMockData(variable, chartType);
    newSelectedVariables = {
      ...newSelectedVariables,
      [id]: mockData,
    };
  }
  dispatch(toggle({ selectedVariables: newSelectedVariables }));
};
