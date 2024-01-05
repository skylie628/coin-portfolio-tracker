require("dotenv").config();
const Redis = require("ioredis");
console.log(process.env.REDIS_URL);
const redis = new Redis({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});
module.exports = redis;
