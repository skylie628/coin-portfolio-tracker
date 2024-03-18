import { noInterceptInstance } from "@/lib/axios";
export const getTopCurrencies = async ({ pageIndex }) => {
  try {
    const topCoinsList = await noInterceptInstance.get("/coin/topmarket");
    return topCoinsList?.data?.data || [];
  } catch (err) {
    throw new Error("Unable to fetch coin");
  }
};
