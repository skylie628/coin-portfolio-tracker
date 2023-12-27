import { axiosCoingecko } from "@/lib/axios";
export const getHistoryPrice = async ({ id }) => {
  try {
    const historyPriceInfo = await axiosCoingecko.get(
      `coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: 365,
          interval: "daily",
        },
      }
    );
    console.log(historyPriceInfo);
    return historyPriceInfo?.data?.prices || [];
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
