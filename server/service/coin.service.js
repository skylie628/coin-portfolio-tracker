const redis = require("../lib/redis");

module.exports = {
  getTrendingSearch: async () => {
    try {
      const trendingSearch = await redis.get("topSearchTrending");
      console.log(trendingSearch);
      return JSON.parse(trendingSearch);
    } catch (error) {
      console.error(`Error getting trending search from Redis: ${error}`);
      throw new Error(error); // re-throw the error so it can be handled by the caller
    }
  },
  getTopMarketCap: async () => {
    try {
      let topMarketCap = await redis.get("topMarketCap");
      return JSON.parse(topMarketCap);
    } catch (error) {
      console.error(`Error getting top market cap from Redis: ${error}`);
      throw new Error(error); // re-throw the error so it can be handled by the caller
    }
  },
};
