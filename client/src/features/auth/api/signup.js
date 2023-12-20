import axiosConfig from "@/lib/axios";
export const signup = async (payload) => {
  return axiosConfig.post("/user/signup", payload);
};
