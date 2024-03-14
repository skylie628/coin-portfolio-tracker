const mongoose = require("mongoose");

const InvestOptionSchema = new mongoose.Schema({
  portid: {
    type: String,
    require: true,
    ref: "Portfolio",
  },
  symbol: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  holding: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
  },
  capital: {
    type: Number,
    default: 0,
  },
  totalProceeds: {
    type: Number,
    default: 0,
  },
  averageNetCost: {
    type: Number,
    default: 0,
  },
  totalPnl: {
    type: Number,
    default: 0,
  },
  pnl_percentage: {
    type: Number,
    default: 0,
  },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

module.exports = mongoose.model("InvestOption", InvestOptionSchema);
