import noInterceptInstance from "@/lib/axios";
export const getCurrencyDetail = async ({ coinId }) => {
  try {
    const marketInfo = await noInterceptInstance.get(`/coin/${coinId}`, {
      params: {
        quoteCurrency: "usd",
      },
    });
    return { currencyDetail: marketInfo?.data?.data || {} };
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
