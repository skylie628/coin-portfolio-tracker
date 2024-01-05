const express = require("express");
const {
  getTrendingSearch,
  getTopMarketCap,
} = require("../controller/coin.controller");
const coinRouter = express.Router();

coinRouter.get("/trending", getTrendingSearch);
coinRouter.get("/topmarket", getTopMarketCap);
module.exports = coinRouter;
