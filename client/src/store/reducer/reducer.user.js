import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  errors: null,
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startsign: (state, action) => {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    },
    signupSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        errors: null,
      };
    },

    signinSuccess: (state, action) => {
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        errors: null,
      };
    },
    signFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        errors: action.payload.data,
      };
    },
    signout: (state, action) => {
      return {
        ...state,
        isLogged: false,
        errors: null,
        action: null,
      };
    },
  },
});
export const { startsign, signinSuccess, signupSuccess, signFail, signout } =
  userSlice.actions;
export default userSlice.reducer;
