import { axiosCoingecko } from "@/lib/axios";
export const getCurrencyDetail = async ({ id }) => {
  try {
    const marketInfo = await axiosCoingecko.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        ids: id,
      },
    });
    return { currencyDetail: marketInfo?.data[0] };
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
