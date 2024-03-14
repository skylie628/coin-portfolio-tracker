const expressAsyncHandler = require("express-async-handler");
const investOptionService = require("../service/investOption.service");
const investOptionModel = require("../model/investOption.model");
const {
  getAssetbySymbol,
  getCoinPrice,
} = require("../service/externalApiCoin.service");
const portfolioModel = require("../model/portfolio.model");
const { Error } = require("mongoose");
const Transaction = require("../model/transaction.model");
const { calculatePnl } = require("../service/transaction.service");
const transactionService = require("../service/transaction.service");
module.exports = {
  getInvests: expressAsyncHandler(async (req, res) => {
    const invests = await investOptionService.getInvests();
    if (!invests) {
      res.status(400).json({
        msg: "Unable to get invest option",
        isSucess: false,
        data: null,
      });
    }
    res.status(200).json({
      msg: "Get invest option sucessfully",
      isSucess: true,
      data: invests,
    });
  }),
  getInvest: expressAsyncHandler(async (req, res) => {
    console.log("id la", req.query.id);
    const invest = await investOptionService.getInvest(req.query.id);
    if (!invest) {
      res.status(404);
      throw new Error("Invest not found!");
    }

    invest.populate("transactions").then(async (invest) => {
      //invest holding, capital, proceeds đã được tính khi tạo transaction rồi
      //curent price
      currentPrice = await getCoinPrice(invest.symbol);
      invest.balance = invest.holding * currentPrice;
      //transaction pnl = 0
      totalPnl = 0;
      for (transaction of invest.transactions) {
        if (transaction.pnl != null) {
          transaction.pnl = calculatePnl(
            transaction.quantity,
            currentPrice,
            transaction.price
          );
        }
        transaction.save();
      }

      //calculate averageNetCost
      if (!invest.totalProceeds) {
        invest.averageNetCost = invest.holding
          ? invest.capital / invest.holding
          : 0;
      } else {
        invest.averageNetCost = invest.holding
          ? (invest.capital - invest.totalProceeds) / invest.holding
          : 0;
      }

      //calculate total pnl in invest option
      invest.totalPnl = invest.balance - invest.averageNetCost * invest.holding;
      invest.pnl_percentage = invest.capital
        ? invest.totalPnl / invest.capital
        : invest.capital;
      invest.save();
      res.status(200).json(invest);
    });
  }),
  createInvest: expressAsyncHandler(async (req, res) => {
    const { portid, symbol } = req.body;
    if (!portid || !symbol) {
      res.status(400);
    }
    //check if portfolio exist
    portfolio = await portfolioModel.findById(portid);
    if (!portfolio) {
      throw new Error("Portfolio not found with id:" + `${portid}`);
    }

    // const revenue = investOptionService.totoalRevenue()
    //check if asset exist
    asset = await getAssetbySymbol(symbol);
    console.log("assets la", asset);
    if (!asset) {
      throw new Error("Asset not found with symbol:" + `${symbol}`);
    }
    //check if asset has been added to the portfolio before
    const exist = await investOptionModel.findOne({ symbol, portid }).lean();
    if (exist) {
      console.log(exist);
      throw new Error("Asset already exist in the portfolio");
    }
    img = asset.Data.LOGO_URL;
    const newinvest = await investOptionService.createInvest({
      portid,
      symbol,
      name: asset.Data.NAME,
      des: asset.Data.ASSET_DESCRIPTION,
      capital: 0,
      quantity: 0,
      coinType: "BLOCKCHAIN",
      img,
      revenue: 0,
    });
    // console.log(newinvest)
    portfolio.investid.push(newinvest._id);
    portfolio.save();

    res.status(200).json(newinvest);
  }),
  updateInvest: expressAsyncHandler(async (req, res) => {
    const invest = await investOptionModel.findById(req.params.id);
    if (!invest) {
      res.status(404);
      throw new Error("Invest not found!");
    }
    updateInvest = await investOptionService.updateInvest(
      req.params.id,
      req.body
    );
  }),
  deleteInvest: expressAsyncHandler(async (req, res) => {
    const { id } = req.query;
    const invest = await investOptionModel.findById(id);
    if (!invest) {
      res.status(404);
      throw new Error("Invest not found");
    }
    res.status(200).json(investOptionService.deleteInvest(id));
  }),
};
