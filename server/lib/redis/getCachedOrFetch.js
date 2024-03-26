const axios = require("axios");
const redis = require("./index");
async function getCachedOrFetch({ params, url, expireTime = 0, tag }) {
  const cacheResult = await redis.get(tag);
  if (cacheResult) {
    // Cache hit return cache value
    return JSON.parse(cacheResult);
  } else {
    // Cache miss then refetch
    const response = await axios.get(url, {
      params: { ...params, x_cg_demo_api_key: process.env.COINGECKO_API_KEY },
    });
    const data = response.data;
    await redis.set(tag, JSON.stringify(data), "EX", expireTime); // Cache for expire time
    return data;
  }
}
module.exports = getCachedOrFetch;
