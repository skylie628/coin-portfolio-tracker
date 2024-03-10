const mongoose = require("mongoose");
const TransactionSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, require: true },
  date: { type: Date, default: Date.now },
  fee: { type: Number, default: 0 },
  pnl: { type: Number, default: null },
  status: { type: String },
  proceeds: { type: Number, default: null },
  investid: { type: mongoose.Schema.Types.ObjectId, ref: "InvestOption" },
});
// module.exports = mongoose.model("Transaction", TransactionSchema);
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
