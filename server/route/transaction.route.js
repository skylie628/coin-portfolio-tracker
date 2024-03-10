const transactionController = require("../controller/transaction.controller");
const authMiddleware = require("../middlewares/auth");
// const transactionModel = require("../model/transaction.model");
const router = require("express").Router();

// router.get("/", authMiddleware, transactionController.getTransaction);
// router.get("/",cors(),transactionController.getTransactions);
router
  .route("/")
  .post(authMiddleware, transactionController.createTransaction)
  .get(authMiddleware, transactionController.getTransaction)
  .put(authMiddleware, transactionController.updateTransaction)
  .delete(authMiddleware, transactionController.deleteTransaction);
module.exports = router;
