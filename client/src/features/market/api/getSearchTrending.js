import { noInterceptInstance } from "@/lib/axios";
import mapper from "@/utils/mapper";
export const getSearchTrending = async () => {
  try {
    const searchTrending = await noInterceptInstance
      .get("/coin/trending")
      .then((res) => res.data);
    searchTrending.coins = mapper.trendingCoins(
      searchTrending.data.coins || []
    );
    searchTrending.categories = mapper.trendingCategories(
      searchTrending.data.categories || []
    );
    console.log("searching", searchTrending);
    return searchTrending;
  } catch (err) {
    throw new Error("Unable to fetch trending coins");
  }
};
