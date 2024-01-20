const express = require("express");
const {
  getTrendingSearch,
  getTopMarketCap,
  getHistory,
  getGeneralInfo,
  getAllCoins,
} = require("../controller/coin.controller");
const coinRouter = express.Router();

coinRouter.get("/trending", getTrendingSearch);
coinRouter.get("/all", getAllCoins);
coinRouter.get("/topmarket", getTopMarketCap);
coinRouter.get("/history", getHistory);
coinRouter.get("/:coinId", getGeneralInfo);
module.exports = coinRouter;
