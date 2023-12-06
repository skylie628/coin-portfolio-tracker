import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isFetching: false,
  error: null,
  fetchedVariables: [],
  queriedVariables: [],
  filterCriteria: {}, //{keyword:String,type:String}
  selectedVariables: {}, //if a variable is selected, add it to object with random color
};
const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    fetchVariables: (state) => {
      return {
        ...state,
        isFetching: true,
      };
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
  },
});
export const {
  fetchVariables,
  fetchVariablesSuccess,
  fetchVariablesFail,
  setFilter,
  toggle,
  resetFilter,
} = variableSlice.actions;
export default variableSlice.reducer;
