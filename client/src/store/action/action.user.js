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
import { toast } from "react-toastify";
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
      toast.success("Signup Success");
      payload.navigate("/sign-in");
    })
    .catch((err) => {
      toast.error("Invalid Authentication Credentials");
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
      toast.success("Signin Success");
      dispatch(signinSuccess());
    })
    .catch((err) => {
      toast.error("Invalid Authentication Credentials");
      dispatch(signFail({ data: err }));
    });
};
export const signoutThunk = () => async (dispatch) => {
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("accessToken");
  dispatch(resetChart());
  dispatch(resetTabs());
  dispatch(resetVariable());
  dispatch(signout());
};
