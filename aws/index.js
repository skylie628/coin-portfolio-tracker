const axios = require("axios");
const Redis = require("ioredis");
require("dotenv").config();
console.log(process.env.REDIS_URL);
const client = new Redis({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

exports.handler = async (event) => {
  try {
    //Get top trending search
    const topSearchTrending = await axios
      .get(`${process.env.COINGECKO_API_URL}/search/trending`)
      .then((res) => ({
        time: new Date().getTime().toLocaleString(),
        coins: res.data.coins.slice(0, 10),
        categories: res.data.categories.slice(0, 4),
      }));
    topSearchTrending.coins = topSearchTrending.coins.slice(0, 8);
    //Get top market cap
    let allCoins = await axios
      .get(`${process.env.COINGECKO_API_URL}/coins/markets`, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 250,
          page: 1,
          sparkline: true,
        },
      })
      .then((res) => res.data || []);
    const topMarketCap = allCoins.slice(0, 10);
    //Get currency detail
    const currenciesDetail = await axios
      .get(`${process.env.COINGECKO_API_URL}/coins/markets`, {
        params: {
          vs_currency: "usd",
          ids: topSearchTrending.coins.map((coin) => coin.item.id).join(","),
        },
      })
      .then((res) => res.data);
    // Cache market data to redis
    console.log(
      currenciesDetail,
      topSearchTrending.coins.map((coin) => coin.item.id).join(",")
    );
    // Prepare an array of keys and values for MSET
    const kvArray = [];
    for (const coin of [...currenciesDetail, ...topMarketCap]) {
      kvArray.push(`market:${coin.id}`);
      kvArray.push(JSON.stringify(coin));
    }
    // Use MSET to set all keys and values in one call
    await client.mset(...kvArray);
    //cache top search trending data to redis
    await client.set(
      "topSearchTrending",
      JSON.stringify(topSearchTrending),
      "EX",
      600
    );
    console.log("Cached trending search data in Redis");
    console.log("Caching market data in Redis");
    //cache top market cap data to redis
    await client.set("topMarketCap", JSON.stringify(topMarketCap), "EX", 600);
    console.log("Cached market data in Redis");
    //cache all coins data to redis
    allCoins = allCoins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
    }));
    await client.set("allCoins", JSON.stringify(allCoins), "EX", 600);
    return;
  } catch (error) {
    console.error(error);
    return;
  }
};

exports.handler();
