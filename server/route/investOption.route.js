const router = require("express").Router();
const investOptionController = require("../controller/investOption.controller");
const auth = require("../middlewares/auth");

router
  .route("/")
  .get(auth, investOptionController.getInvest)
  .post(auth, investOptionController.createInvest)
  .put(auth, investOptionController.updateInvest)
  .delete(auth, investOptionController.deleteInvest);

module.exports = router;
