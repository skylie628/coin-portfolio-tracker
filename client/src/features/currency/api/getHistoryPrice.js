import { noInterceptInstance } from "@/lib/axios";
import mapper from "@/utils/mapper";
export const getHistoryPrice = async ({ coinId, timeRange }) => {
  try {
    const historyPriceInfo = await noInterceptInstance.get(`coin/history`, {
      params: {
        coinId: coinId.toLowerCase(),
        quoteCurrency: "usd",
        period: timeRange,
      },
    });
    return mapper.historyPrice(historyPriceInfo?.data?.data || {});
  } catch (err) {
    throw new Error("Unable to fetch history price", err);
  }
};
