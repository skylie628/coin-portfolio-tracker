import { axiosCoingecko } from "@/lib/axios";
const getTopListDetail = async (pageIndex) => {
  try {
    const topCoinsList = await axiosCoingecko.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: pageIndex,
        sparkline: true,
      },
    });
    return topCoinsList;
  } catch (err) {
    throw new Error("Unable to fetch coin");
  }
};
export default getTopListDetail;
