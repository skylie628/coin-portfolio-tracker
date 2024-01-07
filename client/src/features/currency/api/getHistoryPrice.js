import { noInterceptInstance } from "@/lib/axios";
import mapper from "@/utils/mapper";
export const getHistoryPrice = async ({ coinId }) => {
  try {
    const historyPriceInfo = await noInterceptInstance.get(`coin/history`, {
      params: {
        coinId: coinId.toLowerCase(),
        quoteCurrency: "usd",
        period: "year",
      },
    });
    console.log(
      mapper.historyPrice(historyPriceInfo?.data?.data?.prices || [])
    );
    return mapper.historyPrice(historyPriceInfo?.data?.data?.prices || []);
  } catch (err) {
    throw new Error("Unable to fetch history price", err);
  }
};
