const getCachedOrFetch = require("../lib/redis/getCachedOrFetch");
const redis = require("../lib/redis/index");
module.exports = {
  getTrendingSearch: async () => {
    try {
      const trendingSearch = await redis.get("topSearchTrending");
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

  getHistory: async ({ coinId, quoteCurrency, period }) => {
    let expireTime = 5 * 60;
    const tag = `histo${period}${coinId}`;
    let days = 0;
    switch (period) {
      case "day":
        expireTime = 5 * 60;
        days = 1;
        break;
      case "month":
        expireTime = 30 * 60;
        days = 90;
      case "year":
        expireTime = 12 * 60 * 60;
        days = 365;
    }
    const url = `${process.env.COINGECKO_API_URL}/coins/${coinId}/market_chart`;
    const params = {
      vs_currency: quoteCurrency,
      days,
    };
    console.log(url, params);
    try {
      /*  SELECT : let allData = await axios
        .get(
          `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol.toUpperCase()}&tsym=USD&limit=365`
        )
        .then((res) => res.data?.Data || []);
      allData = allData.filter((data) => data.high !== 0);
      //detect max period
      const maxPeriod = allData.length - 1;
      console.log("maxPeriod", maxPeriod, period);
      if (maxPeriod <= 1 || period === "day") {
        ticker = "minute";
        limit = 60 * 24;
        aggregate = 1;
      } else if (maxPeriod <= 30 || period === "month") {
        ticker = "hour";
        limit = (maxPeriod <= 30 ? maxPeriod : 30) * 24;
        aggregate = 1;
      } else if (maxPeriod <= 60) {
        ticker = "hour";
        limit = maxPeriod * 24;
        aggregate = 1;
      } else if (maxPeriod <= 365 || period === "year") {
        ticker = "day";
        limit = maxPeriod <= 365 ? maxPeriod : 365;
        aggregate = 1;
      }*/
      const response = await getCachedOrFetch({
        params,
        url,
        expireTime,
        tag,
      });
      return response;
    } catch (error) {
      console.error(`Error getting history from CryptoCompare: ${error}`);
      throw new Error(error); // re-throw the error so it can be handled by the caller
    }
  },
  getGeneralInfo: async ({ coinId, quoteCurrency }) => {
    let expireTime = 5 * 60;
    const tag = `market:${coinId}`;
    const url = `${process.env.COINGECKO_API_URL}/coins/markets`;
    const params = {
      vs_currency: quoteCurrency,
      ids: coinId,
    };
    console.log(url, params);
    try {
      const response = await getCachedOrFetch({
        params,
        url,
        expireTime,
        tag,
      });
      return response;
    } catch (error) {
      console.error(`Error getting general from server: ${error}`);
      throw new Error(error); // re-throw the error so it can be handled by the caller
    }
  },
};
