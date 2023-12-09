const variableController = require("../controller/variable.controller");
const authMiddleware = require("../middlewares/auth");
const router = require("express").Router();
router.get("/variables", authMiddleware, variableController.getVariables);
module.exports = router;
