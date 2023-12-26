import { axiosCoingecko } from "@/lib/axios";
export const getCurrentMarket = async ({ id }) => {
  try {
    const marketInfo = await axiosCoingecko.get("/coins/market", {
      params: {
        vs_currency: "usd",
        ids: id,
      },
    });
    console.log(marketInfo);
    return marketInfo;
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
