const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  userid: {
    type: String,
    require: true,
    ref: "User",
  },

  balance: {
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
  investid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InvestOption",
    },
  ],
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
