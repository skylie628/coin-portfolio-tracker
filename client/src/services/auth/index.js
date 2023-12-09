import { noInterceptInstance } from "../../lib/axios/axiosConfig";
export const getNewRefreshToken = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  try {
    const newRefreshToken = await noInterceptInstance.post(
      "/user/refreshToken",
      {
        data: refreshToken,
      }
    );
    return newRefreshToken;
  } catch (error) {
    return Promise.reject(error);
  }
};
