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
  des: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  captital: {
    type: Number,
    require: true,
    default: 0,
  },
  coinType: {
    type: String,
  },
  img: {
    type: String,
  },
  revenue: {
    type: Number,
    default: 0,
  },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

module.exports = mongoose.model("InvestOption", InvestOptionSchema);
