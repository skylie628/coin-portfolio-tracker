const mongoose = require("mongoose");
const TransactionSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String },
  date: { type: Date, default: Date.now },
  pnl: { type: Number, default: 0 },
  status: { type: String },
  investid: { type: mongoose.Schema.Types.ObjectId, ref: "InvestOption", require: true},
});
// module.exports = mongoose.model("Transaction", TransactionSchema);
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
