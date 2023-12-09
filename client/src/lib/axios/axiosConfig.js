import axios from "axios";
import { getNewRefreshToken } from "../../services/auth";
const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_SERVER_URL,
});
instance.interceptors.request.use(
  (req) => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      req.headers = {
        ...req.headers,
        "x-auth-token": accessToken,
      };
    }
    return req;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    console.log("res của req là", response);
    return response;
  },
  async (error) => {
    if (error.code === "ECONNABORTED") {
      // code logic
      console.log("timeout");
      return;
    }
    console.log("token expired", error);
    const status = error?.response?.status;
    switch (status) {
      case 400:
        //logic code
        break;
      case 500:
        //logic code
        break;
      case 401: {
        //token expired
        return getNewRefreshToken()
          .then((res) => {
            const accessToken = res.data.data.accessToken;
            instance.defaults.headers["x-auth-token"] = accessToken;
            window.localStorage.setItem("accessToken", accessToken);
            return instance(error.config);
          })
          .catch((error) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return Promise.reject(error);
          });
      }
      default:
        break;
    }
    return Promise.reject(error);
  }
);
export const noInterceptInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_SERVER_URL,
});

export default instance;
