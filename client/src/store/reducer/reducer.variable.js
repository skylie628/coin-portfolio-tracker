import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isFetching: false,
  error: null,
  fetchedVariables: [], //fetched result from server
  queriedVariables: [], //queried result
  filterCriteria: {}, //{keyword:String,type:String}
  selectedVariables: {}, // Normalizing state, if a variable is selected, add it to object with random color
};
const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    fetchVariables: (state) => {
      state.isFetching = true;
    },
    fetchVariablesSuccess: (state, action) => {
      return {
        ...state,
        isFetching: false,
        error: null,
        fetchedVariables: action.payload.data,
        queriedVariables: action.payload.data,
      };
    },
    fetchVariablesFail: (state, action) => {
      return {
        ...state,
        isFetching: false,
        error: action.payload.data,
      };
    },
    toggle: (state, action) => {
      return {
        ...state,
        selectedVariables: action.payload.selectedVariables,
      };
    },
    setFilter: (state, action) => {
      const { filterCriteria, queriedVariables } = action.payload;
      return {
        ...state,
        queriedVariables,
        filterCriteria,
      };
    },
    resetFilter: (state, action) => {
      return {
        ...state,
        queriedVariables: state.fetchedVariables,
        filter: {},
      };
    },
    resetVariable: (state, action) => {
      return {
        ...state,
        queriedVariables: state.fetchedVariables,
        selectedVariables: {},
      };
    },
    switchSelectedVariables: (state, action) => {
      return {
        ...state,
        selectedVariables: action.payload.selectedVariables,
      };
    },
  },
});
export const {
  fetchVariables,
  fetchVariablesSuccess,
  fetchVariablesFail,
  setFilter,
  toggle,
  resetFilter,
  resetVariable,
  switchSelectedVariables,
} = variableSlice.actions;
export default variableSlice.reducer;
