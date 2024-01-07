const express = require("express");
const {
  getTrendingSearch,
  getTopMarketCap,
  getHistory,
  getGeneralInfo,
} = require("../controller/coin.controller");
const coinRouter = express.Router();

coinRouter.get("/trending", getTrendingSearch);
coinRouter.get("/topmarket", getTopMarketCap);
coinRouter.get("/history", getHistory);
coinRouter.get("/:coinId", getGeneralInfo);
module.exports = coinRouter;
