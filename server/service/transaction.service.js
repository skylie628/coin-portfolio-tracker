const transactionModel = require("../model/transaction.model");
const { ObjectId } = require("mongodb");
module.exports = {
  getTransactions: async () => {
    const transaction = await transactionModel.find({}).lean();
    // console.log(transaction)
    return transaction;
  },
  getTransaction: async (transactionId) => {
    const transaction = await transactionModel.findById({
      _id: new ObjectId(transactionId),
    });
    // console.log(transaction)
    return transaction;
  },
  createTransaction: async (body) => {
    const newtransaction = await transactionModel.create(body);
    return newtransaction;
  },
  updateTransaction: async (id, body) => {
    const updateTransaction = await transactionModel.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    return updateTransaction;
  },
  deleteTransaction: async (id) => {
    await transactionModel.deleteOne({ _id: new ObjectId(id) });
  },
  calculatePnl: (quantity = 0, currentPrice = 0, price = 0) => {
    return quantity * (currentPrice - price);
  },
  calculateProceeds: (quantity = 0, price = 0, arr) => {
    proceed = 0;
    for (x of arr) {
      proceed += quantity * price;
    }
    return proceed;
  },
};
