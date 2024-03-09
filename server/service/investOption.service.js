const { default: mongoose, mongo } = require("mongoose");
const investOptionModel = require("../model/investOption.model");
const { calculatePnl } = require("./transaction.service");
const { getCoinPrice } = require("./externalApiCoin.service");
module.exports = {
  getInvests: async () => {
    const invests = investOptionModel.find({}).lean();
    return invests;
  },
  getInvest: async (id) => {
    const invest = investOptionModel.findById(new mongoose.Types.ObjectId(id));
    return invest;
  },
  createInvest: async (body) => {
    const newInvest = await investOptionModel.create(body);
    return newInvest;
  },
  deleteInvest: async (id) => {
    await investOptionModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  },
  calTotalPnl: async (invest) => {
    currentPrice = await getCoinPrice(invest.symbol);
    invest.balance = invest.holding * currentPrice;
    invest.totalPnl = invest.balance - invest.averageNetCost * invest.holding;
    invest.save();
    // console.log(invest.totalPnl+" inev")
    // return invest.totalPnl;
  },
};
