const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  userid: {
    type: String,
    require: true,
    default: 0,
    ref: "User",
  },

  investid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: 0,
      ref: "InvestOption",
    },
  ],
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
