import {
  startsign,
  signinSuccess,
  signFail,
  signout,
  signupSuccess,
} from "../reducer/reducer.user";
import { resetTabs } from "../reducer/reducer.tab";
import { resetChart } from "../reducer/reducer.chart";
import { resetVariable } from "../reducer/reducer.variable";
import axiosConfig from "../../lib/axios/axiosConfig";
export const signinService = async (payload) => {
  return axiosConfig.post("/user/signin", payload);
};
export const signupService = async (payload) => {
  return axiosConfig.post("/user/signup", payload);
};
export const signupThunk = (payload) => async (dispatch) => {
  dispatch(startsign());
  console.log(payload.data);
  signupService(payload.data)
    .then((rs) => {
      dispatch(signupSuccess());
      payload.navigate("/sign-in");
    })
    .catch((err) => {
      dispatch(signFail({ data: err }));
    });
};

export const signinThunk = (payload) => async (dispatch) => {
  dispatch(startsign());
  signinService(payload)
    .then((rs) => {
      const { refreshToken, accessToken } = rs?.data?.data || {};
      if (!refreshToken || !accessToken) {
        return;
      }
      window.localStorage.setItem("refreshToken", refreshToken);
      window.localStorage.setItem("accessToken", accessToken);
      dispatch(signinSuccess());
    })
    .catch((err) => dispatch(signFail({ data: err })));
};
export const signoutThunk = () => async (dispatch) => {
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("accessToken");
  dispatch(resetChart());
  dispatch(resetTabs());
  dispatch(resetVariable());
  dispatch(signout());
};
