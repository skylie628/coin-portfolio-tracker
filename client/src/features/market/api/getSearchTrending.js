import { axiosCoingecko } from "@/lib/axios";
import mapper from "@/utils/mapper";
export const getSearchTrending = async () => {
  try {
    const searchTrending = await axiosCoingecko.get("/search/trending");
    console.log("search la", searchTrending);
    searchTrending.coins = mapper.trendingCoins(
      searchTrending.data.coins || []
    );
    searchTrending.categories = mapper.trendingCategories(
      searchTrending.data.categories || []
    );
    return searchTrending;
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
