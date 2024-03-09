const router = require("express").Router();
const portfolioController = require("../controller/portfolio.controller");
const auth = require("../middlewares/auth");
auth;
/*
router
  .route("/portfolio")
  .get(auth, portfolioController.getPortfolios)
  .post(auth, portfolioController.createPortfolio);*/
router
  .route("/")
  .get(auth, portfolioController.getPortfolio)
  .put(auth, portfolioController.updatePortfolio)
  .delete(auth, portfolioController.deletePortfolio);

module.exports = router;
