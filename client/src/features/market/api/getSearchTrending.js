import { axiosCoingecko } from "@/lib/axios";
export const getSearchTrending = async () => {
  try {
    const topCoinsList = await axiosCoingecko.get("/search/trending");
    topCoinsList.coins = topCoinsList.data.coins.map((coin) => ({
      id: coin.item.id,
      name: coin.item.name,
      src: coin.item.large,
      symbol: coin.item.symbol,
    }));
    return topCoinsList;
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
