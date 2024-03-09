const expressAsyncHandler = require("express-async-handler");
const portfolioModel = require("../model/portfolio.model");
const portfolioService = require("../service/portfolio.service");
const investOptionModel = require("../model/investOption.model");

const { calTotalPnl } = require("../service/investOption.service");
const { getCoinPrice } = require("../service/externalApiCoin.service");

module.exports = {
  getPortfolios: expressAsyncHandler(async (req, res) => {
    const portfolios = await portfolioService.getPortfolios();
    if (!portfolios) {
      res.status(400).json({
        msg: "Unable to get portfolio option",
        isSucess: false,
        data: null,
      });
    }
    res.status(200).json({
      msg: "Get portfolio option sucessfully",
      isSucess: true,
      data: portfolios,
    });
  }),
  getPortfolio: expressAsyncHandler(async (req, res) => {
    const portfolio = await portfolioService.getPortfolioByUserId(
      req.params.id
    );
    if (!portfolio) {
      res.status(404);
      throw new Error("Portfolio not found!");
    }

    //calculate the total pnl of all invests
    portfolio.populate("investid").then(async (port) => {
      port.balance = port.investid.reduce(
        (acc, invest) => acc + invest.balance,
        0
      );
      // console.log(port.investid)
      //update pnl of each invest
      port.investid.map((invest) => calTotalPnl(invest));
      port.totalPnl = port.investid.reduce(
        (acc, invest) => acc + invest.totalPnl,
        0
      );
      // console.log(port.totalPnl);
      // port.totalPnl = port.investid.reduce(
      //   (acc, invest) => acc + invest.totalPnl,
      //   0
      // );
      totalCap = port.investid.reduce((acc, invest) => acc + invest.capital, 0);
      port.pnl_percentage = port.totalPnl / totalCap;
      res.status(200).json(port);
    });
  }),
  createPortfolio: expressAsyncHandler(async (req, res) => {
    const { id, userid, capital } = req.body;
    if (!userid || !id || !capital) {
      res.status(400);
    }

    const newportfolio = await portfolioService.createPortfolio({
      id,
      userid,
      capital,
    });
    res.status(200).json(newportfolio);
  }),
  updatePortfolio: expressAsyncHandler(async (req, res) => {
    const portfolio = await portfolioModel.findById(req.params.id);
    if (!portfolio) {
      res.status(404);
      throw new Error("Portfolio not found!");
    }
    updatePortfolio = await portfolioService.updatePortfolio(
      req.params.id,
      req.body
    );
  }),
  deletePortfolio: expressAsyncHandler(async (req, res) => {
    const portfolio = await portfolioModel.findById(req.params.id);
    if (!portfolio) {
      res.status(404);
      throw new Error("Portfolio not found");
    }
    res.status(200).json(portfolioService.deletePortfolio(req.params.id));
  }),
};
