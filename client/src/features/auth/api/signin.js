import axiosConfig from "@/lib/axios";
export const signin = async (payload) => {
  return axiosConfig.post("/user/signin", payload);
};
