const asyncHandler = require("express-async-handler");
const transactionModel = require("../model/transaction.model");
const transactionService = require("../service/transaction.service");

const {
  getTopCoin,
  getCoinPrice,
} = require("../service/externalApiCoin.service");
const investOptionModel = require("../model/investOption.model");

module.exports = {
  getTransactions: async (req, res) => {
    try {
      const transaction = await transactionService.getTransactions();

      res.status(200).json({
        msg: "Get transaction sucessfully",
        isSucess: true,
        data: transaction,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Unable to get transaction",
        isSucess: false,
        data: null,
        error: error,
      });
    }
  },
  getTransaction: asyncHandler(async (req, res) => {
    const transaction = await transactionService.getTransaction(req.params.id);
    // console.log(transaction)

    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found!");
    }
    // coinp = await getCoinPrice("BTC");
    // const pnl = transactionService.pnl(
    //   transaction.quantity,
    //   coinp.USD,
    //   transaction.price
    // );
    // transaction.pnl = pnl;
    res.status(200).json(transaction);
  }),
  createTransaction: asyncHandler(async (req, res) => {
    const { quantity, price, type, date, status, investid } = req.body;
    if (!quantity || !price || !type || !investid) {
      res.status(400);
    }
    invest = await investOptionModel.findById(investid);
    if(!invest){
      throw new Error("Invest not found with id:"+ `${investid}`)
    }
    

    // console.log(invest.transactions)
    coinprice = await getCoinPrice(invest.symbol);

    // console.log(coinprice)
    const pnl = transactionService.pnl(quantity, coinprice, price);
    // console.log(pnl)
    
    const newtransaction = await transactionService.createTransaction({
      quantity,
      price,
      type,
      date,
      pnl,
      status,
      investid,
    });
    invest.transactions.push(newtransaction._id);
    invest.revenue += pnl;
    invest.save();
    // console.log(req.body);
    res.status(201).json(newtransaction);
  }),
  updateTransaction: asyncHandler(async (req, res) => {
    const transaction = await transactionModel.findById(req.params.id);
    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not Found");
    }
    // console.log(req.body);
    updateTransaction = await transactionService.updateTransaction(
      req.params.id,
      req.body
    );
    // console.log(updateTransaction);
    res.status(200).json(updateTransaction);
  }),
  deleteTransaction: asyncHandler(async (req, res) => {
    const transaction = await transactionModel.findById(req.params.id);
    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not Found");
    }
    invest = await investOptionModel.findById(investid);
    invest.revenue -= transaction.pnl;
    invest.save();
    res.status(200).json(transactionService.deleteTransaction(req.params.id));
  }),
};
