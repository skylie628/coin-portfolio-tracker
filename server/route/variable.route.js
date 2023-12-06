const variableController = require("../controller/variable.controller");
const router = require("express").Router();
router.get("/variables", variableController.getVariables);
module.exports = router;
