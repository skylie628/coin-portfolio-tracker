import { axiosCoingecko } from "@/lib/axios";
export const getSearchTrending = async () => {
  try {
    const searchTrending = await axiosCoingecko.get("/search/trending");
    searchTrending.coins = searchTrending.data.coins.map((coin) => ({
      id: coin.item.id,
      name: coin.item.name,
      src: coin.item.large,
      symbol: coin.item.symbol,
    }));
    return searchTrending;
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
