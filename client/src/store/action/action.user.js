import { startsign, signinSuccess, signFail } from "../reducer/reducer.user";
import axiosConfig from "../../lib/axios/axiosConfig";
export const signinService = async (payload) => {
  return axiosConfig.post("/user/signin", payload);
};
export const signupService = async (payload) => {
  return axiosConfig.post("/user/signup", payload);
};
export const signinAction = (payload) => async (dispatch) => {
  dispatch(startsign());
  signinService(payload)
    .then((res) => {
      
    })
    .catch((err) => console.log(err));
};
