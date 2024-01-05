const axios = require("axios");
const Redis = require("ioredis");
require("dotenv").config();
console.log(process.env.REDIS_URL);
const client = new Redis({
  host: process.env.REDIS_URL,
  port: 13120,
  password: "IYvXmQk8GYlLhFkeb98KtZFr7zEyMCGv",
});

exports.handler = async (event) => {
  try {
    const cachedValue = await client.get("topSearchTrending");
    rst = JSON.parse(cachedValue);
    console.log(rst);
    const topSearchTrending = await axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => ({
        time: new Date().getTime().toLocaleString(),
        coins: res.data.coins.slice(0, 10),
        categories: res.data.categories.slice(0, 4),
      }));
    const topMarketCap = await axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: true,
        },
      })
      .then((res) => res.data);
    // Cache the data in Redis for 10 minutes
    console.log("Caching trending search data in Redis");
    await client.set(
      "topSearchTrending",
      JSON.stringify(topSearchTrending),
      "EX",
      600
    );
    console.log("Cached trending search data in Redis");
    console.log("Caching market data in Redis");
    await client.set("topMarketCap", JSON.stringify(topMarketCap), "EX", 600);
    console.log("Cached market data in Redis");
    return;
  } catch (error) {
    console.error(error);
    return;
  }
};
