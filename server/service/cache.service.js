const { createClient } = require("redis");

const DEFAULT_TIME_TO_LIVE = 240;

const redisClient = createClient();

redisClient.connect();

redisClient.on("connect", () => {
  console.log("[REDIS]: connected!");
});
redisClient.on("connect", (error) => {
  console.log(`[REDIS]: error ${error}`);
});

export const setCache = async (key, value, ttl = DEFAULT_TIME_TO_LIVE) => {
  return redisClient.set(key, JSON.stringify(value), { EX: ttl });
};

export const getCache = async (key) =>{
    return JSON.parse(await redisClient.get(key))
}